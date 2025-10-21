var bp=Object.defineProperty;var Tp=(i,e,t)=>e in i?bp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ap=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Mn=(i,e,t)=>(Tp(i,typeof e!="symbol"?e+"":e,t),t);var WM=Ap((Of,_c)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof Of=="object"&&typeof _c<"u"?_c.exports=e():typeof define=="function"&&define.amd?define(e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e()})(void 0,function(){const i=new Map,e={set(x,c,_){i.has(x)||i.set(x,new Map);const b=i.get(x);b.has(c)||b.size===0?b.set(c,_):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(b.keys())[0]}.`)},get:(x,c)=>i.has(x)&&i.get(x).get(c)||null,remove(x,c){if(!i.has(x))return;const _=i.get(x);_.delete(c),_.size===0&&i.delete(x)}},t="transitionend",n=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(c,_)=>`#${CSS.escape(_)}`)),x),r=x=>{x.dispatchEvent(new Event(t))},s=x=>!(!x||typeof x!="object")&&(x.jquery!==void 0&&(x=x[0]),x.nodeType!==void 0),a=x=>s(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(n(x)):null,o=x=>{if(!s(x)||x.getClientRects().length===0)return!1;const c=getComputedStyle(x).getPropertyValue("visibility")==="visible",_=x.closest("details:not([open])");if(!_)return c;if(_!==x){const b=x.closest("summary");if(b&&b.parentNode!==_||b===null)return!1}return c},l=x=>!x||x.nodeType!==Node.ELEMENT_NODE||!!x.classList.contains("disabled")||(x.disabled!==void 0?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false"),h=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const c=x.getRootNode();return c instanceof ShadowRoot?c:null}return x instanceof ShadowRoot?x:x.parentNode?h(x.parentNode):null},u=()=>{},f=x=>{x.offsetHeight},d=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,g=[],v=()=>document.documentElement.dir==="rtl",y=x=>{var c;c=()=>{const _=d();if(_){const b=x.NAME,B=_.fn[b];_.fn[b]=x.jQueryInterface,_.fn[b].Constructor=x,_.fn[b].noConflict=()=>(_.fn[b]=B,x.jQueryInterface)}},document.readyState==="loading"?(g.length||document.addEventListener("DOMContentLoaded",()=>{for(const _ of g)_()}),g.push(c)):c()},p=(x,c=[],_=x)=>typeof x=="function"?x(...c):_,m=(x,c,_=!0)=>{if(!_)return void p(x);const b=(Z=>{if(!Z)return 0;let{transitionDuration:ae,transitionDelay:ge}=window.getComputedStyle(Z);const Ee=Number.parseFloat(ae),Ae=Number.parseFloat(ge);return Ee||Ae?(ae=ae.split(",")[0],ge=ge.split(",")[0],1e3*(Number.parseFloat(ae)+Number.parseFloat(ge))):0})(c)+5;let B=!1;const k=({target:Z})=>{Z===c&&(B=!0,c.removeEventListener(t,k),p(x))};c.addEventListener(t,k),setTimeout(()=>{B||r(c)},b)},R=(x,c,_,b)=>{const B=x.length;let k=x.indexOf(c);return k===-1?!_&&b?x[B-1]:x[0]:(k+=_?1:-1,b&&(k=(k+B)%B),x[Math.max(0,Math.min(k,B-1))])},E=/[^.]*(?=\..*)\.|.*/,A=/\..*/,I=/::\d+$/,U={};let w=1;const z={mouseenter:"mouseover",mouseleave:"mouseout"},J=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function M(x,c){return c&&`${c}::${w++}`||x.uidEvent||w++}function C(x){const c=M(x);return x.uidEvent=c,U[c]=U[c]||{},U[c]}function j(x,c,_=null){return Object.values(x).find(b=>b.callable===c&&b.delegationSelector===_)}function ee(x,c,_){const b=typeof c=="string",B=b?_:c||_;let k=oe(x);return J.has(k)||(k=x),[b,B,k]}function O(x,c,_,b,B){if(typeof c!="string"||!x)return;let[k,Z,ae]=ee(c,_,b);c in z&&(Z=($e=>function(We){if(!We.relatedTarget||We.relatedTarget!==We.delegateTarget&&!We.delegateTarget.contains(We.relatedTarget))return $e.call(this,We)})(Z));const ge=C(x),Ee=ge[ae]||(ge[ae]={}),Ae=j(Ee,Z,k?_:null);if(Ae)return void(Ae.oneOff=Ae.oneOff&&B);const Me=M(Z,c.replace(E,"")),nt=k?function(He,$e,We){return function je(yt){const Rt=He.querySelectorAll($e);for(let{target:ct}=yt;ct&&ct!==this;ct=ct.parentNode)for(const dt of Rt)if(dt===ct)return re(yt,{delegateTarget:ct}),je.oneOff&&D.off(He,yt.type,$e,We),We.apply(ct,[yt])}}(x,_,Z):function(He,$e){return function We(je){return re(je,{delegateTarget:He}),We.oneOff&&D.off(He,je.type,$e),$e.apply(He,[je])}}(x,Z);nt.delegationSelector=k?_:null,nt.callable=Z,nt.oneOff=B,nt.uidEvent=Me,Ee[Me]=nt,x.addEventListener(ae,nt,k)}function Q(x,c,_,b,B){const k=j(c[_],b,B);k&&(x.removeEventListener(_,k,!!B),delete c[_][k.uidEvent])}function q(x,c,_,b){const B=c[_]||{};for(const[k,Z]of Object.entries(B))k.includes(b)&&Q(x,c,_,Z.callable,Z.delegationSelector)}function oe(x){return x=x.replace(A,""),z[x]||x}const D={on(x,c,_,b){O(x,c,_,b,!1)},one(x,c,_,b){O(x,c,_,b,!0)},off(x,c,_,b){if(typeof c!="string"||!x)return;const[B,k,Z]=ee(c,_,b),ae=Z!==c,ge=C(x),Ee=ge[Z]||{},Ae=c.startsWith(".");if(k===void 0){if(Ae)for(const Me of Object.keys(ge))q(x,ge,Me,c.slice(1));for(const[Me,nt]of Object.entries(Ee)){const He=Me.replace(I,"");ae&&!c.includes(He)||Q(x,ge,Z,nt.callable,nt.delegationSelector)}}else{if(!Object.keys(Ee).length)return;Q(x,ge,Z,k,B?_:null)}},trigger(x,c,_){if(typeof c!="string"||!x)return null;const b=d();let B=null,k=!0,Z=!0,ae=!1;c!==oe(c)&&b&&(B=b.Event(c,_),b(x).trigger(B),k=!B.isPropagationStopped(),Z=!B.isImmediatePropagationStopped(),ae=B.isDefaultPrevented());const ge=re(new Event(c,{bubbles:k,cancelable:!0}),_);return ae&&ge.preventDefault(),Z&&x.dispatchEvent(ge),ge.defaultPrevented&&B&&B.preventDefault(),ge}};function re(x,c={}){for(const[_,b]of Object.entries(c))try{x[_]=b}catch{Object.defineProperty(x,_,{configurable:!0,get:()=>b})}return x}function te(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function de(x){return x.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const ye={setDataAttribute(x,c,_){x.setAttribute(`data-bs-${de(c)}`,_)},removeDataAttribute(x,c){x.removeAttribute(`data-bs-${de(c)}`)},getDataAttributes(x){if(!x)return{};const c={},_=Object.keys(x.dataset).filter(b=>b.startsWith("bs")&&!b.startsWith("bsConfig"));for(const b of _){let B=b.replace(/^bs/,"");B=B.charAt(0).toLowerCase()+B.slice(1,B.length),c[B]=te(x.dataset[b])}return c},getDataAttribute:(x,c)=>te(x.getAttribute(`data-bs-${de(c)}`))};class ke{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,_){const b=s(_)?ye.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof b=="object"?b:{},...s(_)?ye.getDataAttributes(_):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,_=this.constructor.DefaultType){for(const[B,k]of Object.entries(_)){const Z=c[B],ae=s(Z)?"element":(b=Z)==null?`${b}`:Object.prototype.toString.call(b).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(k).test(ae))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${B}" provided type "${ae}" but expected type "${k}".`)}var b}}class $ extends ke{constructor(c,_){super(),(c=a(c))&&(this._element=c,this._config=this._getConfig(_),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,_,b=!0){m(c,_,b)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(a(c),this.DATA_KEY)}static getOrCreateInstance(c,_={}){return this.getInstance(c)||new this(c,typeof _=="object"?_:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const le=x=>{let c=x.getAttribute("data-bs-target");if(!c||c==="#"){let _=x.getAttribute("href");if(!_||!_.includes("#")&&!_.startsWith("."))return null;_.includes("#")&&!_.startsWith("#")&&(_=`#${_.split("#")[1]}`),c=_&&_!=="#"?n(_.trim()):null}return c},ne={find:(x,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,x)),findOne:(x,c=document.documentElement)=>Element.prototype.querySelector.call(c,x),children:(x,c)=>[].concat(...x.children).filter(_=>_.matches(c)),parents(x,c){const _=[];let b=x.parentNode.closest(c);for(;b;)_.push(b),b=b.parentNode.closest(c);return _},prev(x,c){let _=x.previousElementSibling;for(;_;){if(_.matches(c))return[_];_=_.previousElementSibling}return[]},next(x,c){let _=x.nextElementSibling;for(;_;){if(_.matches(c))return[_];_=_.nextElementSibling}return[]},focusableChildren(x){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(_=>`${_}:not([tabindex^="-"])`).join(",");return this.find(c,x).filter(_=>!l(_)&&o(_))},getSelectorFromElement(x){const c=le(x);return c&&ne.findOne(c)?c:null},getElementFromSelector(x){const c=le(x);return c?ne.findOne(c):null},getMultipleElementsFromSelector(x){const c=le(x);return c?ne.find(c):[]}},Be=(x,c="hide")=>{const _=`click.dismiss${x.EVENT_KEY}`,b=x.NAME;D.on(document,_,`[data-bs-dismiss="${b}"]`,function(B){if(["A","AREA"].includes(this.tagName)&&B.preventDefault(),l(this))return;const k=ne.getElementFromSelector(this)||this.closest(`.${b}`);x.getOrCreateInstance(k)[c]()})},Ue=".bs.alert",be=`close${Ue}`,ut=`closed${Ue}`;class Oe extends ${static get NAME(){return"alert"}close(){if(D.trigger(this._element,be).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),D.trigger(this._element,ut),this.dispose()}static jQueryInterface(c){return this.each(function(){const _=Oe.getOrCreateInstance(this);if(typeof c=="string"){if(_[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);_[c](this)}})}}Be(Oe,"close"),y(Oe);const G='[data-bs-toggle="button"]';class Ct extends ${static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const _=Ct.getOrCreateInstance(this);c==="toggle"&&_[c]()})}}D.on(document,"click.bs.button.data-api",G,x=>{x.preventDefault();const c=x.target.closest(G);Ct.getOrCreateInstance(c).toggle()}),y(Ct);const Ce=".bs.swipe",Ke=`touchstart${Ce}`,Fe=`touchmove${Ce}`,at=`touchend${Ce}`,Ze=`pointerdown${Ce}`,et=`pointerup${Ce}`,Et={endCallback:null,leftCallback:null,rightCallback:null},L={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class S extends ke{constructor(c,_){super(),this._element=c,c&&S.isSupported()&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Et}static get DefaultType(){return L}static get NAME(){return"swipe"}dispose(){D.off(this._element,Ce)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const _=c/this._deltaX;this._deltaX=0,_&&p(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(D.on(this._element,Ze,c=>this._start(c)),D.on(this._element,et,c=>this._end(c)),this._element.classList.add("pointer-event")):(D.on(this._element,Ke,c=>this._start(c)),D.on(this._element,Fe,c=>this._move(c)),D.on(this._element,at,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const K=".bs.carousel",ie=".data-api",ue="next",ce="prev",ze="left",Ie="right",me=`slide${K}`,xe=`slid${K}`,Xe=`keydown${K}`,pe=`mouseenter${K}`,Pt=`mouseleave${K}`,tt=`dragstart${K}`,De=`load${K}${ie}`,Te=`click${K}${ie}`,Le="carousel",P="active",se=".active",we=".carousel-item",N=se+we,fe={ArrowLeft:Ie,ArrowRight:ze},W={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},he={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class _e extends ${constructor(c,_){super(c,_),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Le&&this.cycle()}static get Default(){return W}static get DefaultType(){return he}static get NAME(){return"carousel"}next(){this._slide(ue)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(ce)}pause(){this._isSliding&&r(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?D.one(this._element,xe,()=>this.cycle()):this.cycle())}to(c){const _=this._getItems();if(c>_.length-1||c<0)return;if(this._isSliding)return void D.one(this._element,xe,()=>this.to(c));const b=this._getItemIndex(this._getActive());if(b===c)return;const B=c>b?ue:ce;this._slide(B,_[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&D.on(this._element,Xe,c=>this._keydown(c)),this._config.pause==="hover"&&(D.on(this._element,pe,()=>this.pause()),D.on(this._element,Pt,()=>this._maybeEnableCycle())),this._config.touch&&S.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const _ of ne.find(".carousel-item img",this._element))D.on(_,tt,b=>b.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(ze)),rightCallback:()=>this._slide(this._directionToOrder(Ie)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new S(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const _=fe[c.key];_&&(c.preventDefault(),this._slide(this._directionToOrder(_)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const _=ne.findOne(se,this._indicatorsElement);_.classList.remove(P),_.removeAttribute("aria-current");const b=ne.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);b&&(b.classList.add(P),b.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const _=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=_||this._config.defaultInterval}_slide(c,_=null){if(this._isSliding)return;const b=this._getActive(),B=c===ue,k=_||R(this._getItems(),b,B,this._config.wrap);if(k===b)return;const Z=this._getItemIndex(k),ae=Me=>D.trigger(this._element,Me,{relatedTarget:k,direction:this._orderToDirection(c),from:this._getItemIndex(b),to:Z});if(ae(me).defaultPrevented||!b||!k)return;const ge=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Z),this._activeElement=k;const Ee=B?"carousel-item-start":"carousel-item-end",Ae=B?"carousel-item-next":"carousel-item-prev";k.classList.add(Ae),f(k),b.classList.add(Ee),k.classList.add(Ee),this._queueCallback(()=>{k.classList.remove(Ee,Ae),k.classList.add(P),b.classList.remove(P,Ae,Ee),this._isSliding=!1,ae(xe)},b,this._isAnimated()),ge&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ne.findOne(N,this._element)}_getItems(){return ne.find(we,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return v()?c===ze?ce:ue:c===ze?ue:ce}_orderToDirection(c){return v()?c===ce?ze:Ie:c===ce?Ie:ze}static jQueryInterface(c){return this.each(function(){const _=_e.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(_[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);_[c]()}}else _.to(c)})}}D.on(document,Te,"[data-bs-slide], [data-bs-slide-to]",function(x){const c=ne.getElementFromSelector(this);if(!c||!c.classList.contains(Le))return;x.preventDefault();const _=_e.getOrCreateInstance(c),b=this.getAttribute("data-bs-slide-to");return b?(_.to(b),void _._maybeEnableCycle()):ye.getDataAttribute(this,"slide")==="next"?(_.next(),void _._maybeEnableCycle()):(_.prev(),void _._maybeEnableCycle())}),D.on(window,De,()=>{const x=ne.find('[data-bs-ride="carousel"]');for(const c of x)_e.getOrCreateInstance(c)}),y(_e);const qe=".bs.collapse",ft=`show${qe}`,pt=`shown${qe}`,Ut=`hide${qe}`,ht=`hidden${qe}`,bt=`click${qe}.data-api`,zt="show",mn="collapse",ti="collapsing",cr=`:scope .${mn} .${mn}`,lr='[data-bs-toggle="collapse"]',ur={parent:null,toggle:!0},Ls={parent:"(null|element)",toggle:"boolean"};class ni extends ${constructor(c,_){super(c,_),this._isTransitioning=!1,this._triggerArray=[];const b=ne.find(lr);for(const B of b){const k=ne.getSelectorFromElement(B),Z=ne.find(k).filter(ae=>ae===this._element);k!==null&&Z.length&&this._triggerArray.push(B)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ur}static get DefaultType(){return Ls}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(B=>B!==this._element).map(B=>ni.getOrCreateInstance(B,{toggle:!1}))),c.length&&c[0]._isTransitioning||D.trigger(this._element,ft).defaultPrevented)return;for(const B of c)B.hide();const _=this._getDimension();this._element.classList.remove(mn),this._element.classList.add(ti),this._element.style[_]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const b=`scroll${_[0].toUpperCase()+_.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ti),this._element.classList.add(mn,zt),this._element.style[_]="",D.trigger(this._element,pt)},this._element,!0),this._element.style[_]=`${this._element[b]}px`}hide(){if(this._isTransitioning||!this._isShown()||D.trigger(this._element,Ut).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,f(this._element),this._element.classList.add(ti),this._element.classList.remove(mn,zt);for(const _ of this._triggerArray){const b=ne.getElementFromSelector(_);b&&!this._isShown(b)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(ti),this._element.classList.add(mn),D.trigger(this._element,ht)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(zt)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=a(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(lr);for(const _ of c){const b=ne.getElementFromSelector(_);b&&this._addAriaAndCollapsedClass([_],this._isShown(b))}}_getFirstLevelChildren(c){const _=ne.find(cr,this._config.parent);return ne.find(c,this._config.parent).filter(b=>!_.includes(b))}_addAriaAndCollapsedClass(c,_){if(c.length)for(const b of c)b.classList.toggle("collapsed",!_),b.setAttribute("aria-expanded",_)}static jQueryInterface(c){const _={};return typeof c=="string"&&/show|hide/.test(c)&&(_.toggle=!1),this.each(function(){const b=ni.getOrCreateInstance(this,_);if(typeof c=="string"){if(b[c]===void 0)throw new TypeError(`No method named "${c}"`);b[c]()}})}}D.on(document,bt,lr,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const c of ne.getMultipleElementsFromSelector(this))ni.getOrCreateInstance(c,{toggle:!1}).toggle()}),y(ni);var Zt="top",on="bottom",an="right",T="left",H="auto",X=[Zt,on,an,T],Y="start",V="end",Se="clippingParents",Pe="viewport",Ne="popper",Ge="reference",Je=X.reduce(function(x,c){return x.concat([c+"-"+Y,c+"-"+V])},[]),Ve=[].concat(X,[H]).reduce(function(x,c){return x.concat([c,c+"-"+Y,c+"-"+V])},[]),Ye="beforeRead",Dt="read",Jt="afterRead",Ft="beforeMain",Tn="main",wt="afterMain",Qe="beforeWrite",hr="write",Tt="afterWrite",qn=[Ye,Dt,Jt,Ft,Tn,wt,Qe,hr,Tt];function xn(x){return x?(x.nodeName||"").toLowerCase():null}function Gt(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var c=x.ownerDocument;return c&&c.defaultView||window}return x}function Un(x){return x instanceof Gt(x).Element||x instanceof Element}function mt(x){return x instanceof Gt(x).HTMLElement||x instanceof HTMLElement}function Dn(x){return typeof ShadowRoot<"u"&&(x instanceof Gt(x).ShadowRoot||x instanceof ShadowRoot)}const Oi={name:"applyStyles",enabled:!0,phase:"write",fn:function(x){var c=x.state;Object.keys(c.elements).forEach(function(_){var b=c.styles[_]||{},B=c.attributes[_]||{},k=c.elements[_];mt(k)&&xn(k)&&(Object.assign(k.style,b),Object.keys(B).forEach(function(Z){var ae=B[Z];ae===!1?k.removeAttribute(Z):k.setAttribute(Z,ae===!0?"":ae)}))})},effect:function(x){var c=x.state,_={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,_.popper),c.styles=_,c.elements.arrow&&Object.assign(c.elements.arrow.style,_.arrow),function(){Object.keys(c.elements).forEach(function(b){var B=c.elements[b],k=c.attributes[b]||{},Z=Object.keys(c.styles.hasOwnProperty(b)?c.styles[b]:_[b]).reduce(function(ae,ge){return ae[ge]="",ae},{});mt(B)&&xn(B)&&(Object.assign(B.style,Z),Object.keys(k).forEach(function(ae){B.removeAttribute(ae)}))})}},requires:["computeStyles"]};function It(x){return x.split("-")[0]}var In=Math.max,fr=Math.min,ii=Math.round;function Vo(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function Ic(){return!/^((?!chrome|android).)*safari/i.test(Vo())}function dr(x,c,_){c===void 0&&(c=!1),_===void 0&&(_=!1);var b=x.getBoundingClientRect(),B=1,k=1;c&&mt(x)&&(B=x.offsetWidth>0&&ii(b.width)/x.offsetWidth||1,k=x.offsetHeight>0&&ii(b.height)/x.offsetHeight||1);var Z=(Un(x)?Gt(x):window).visualViewport,ae=!Ic()&&_,ge=(b.left+(ae&&Z?Z.offsetLeft:0))/B,Ee=(b.top+(ae&&Z?Z.offsetTop:0))/k,Ae=b.width/B,Me=b.height/k;return{width:Ae,height:Me,top:Ee,right:ge+Ae,bottom:Ee+Me,left:ge,x:ge,y:Ee}}function Wo(x){var c=dr(x),_=x.offsetWidth,b=x.offsetHeight;return Math.abs(c.width-_)<=1&&(_=c.width),Math.abs(c.height-b)<=1&&(b=c.height),{x:x.offsetLeft,y:x.offsetTop,width:_,height:b}}function Nc(x,c){var _=c.getRootNode&&c.getRootNode();if(x.contains(c))return!0;if(_&&Dn(_)){var b=c;do{if(b&&x.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function ri(x){return Gt(x).getComputedStyle(x)}function Ff(x){return["table","td","th"].indexOf(xn(x))>=0}function _i(x){return((Un(x)?x.ownerDocument:x.document)||window.document).documentElement}function Ps(x){return xn(x)==="html"?x:x.assignedSlot||x.parentNode||(Dn(x)?x.host:null)||_i(x)}function Oc(x){return mt(x)&&ri(x).position!=="fixed"?x.offsetParent:null}function es(x){for(var c=Gt(x),_=Oc(x);_&&Ff(_)&&ri(_).position==="static";)_=Oc(_);return _&&(xn(_)==="html"||xn(_)==="body"&&ri(_).position==="static")?c:_||function(b){var B=/firefox/i.test(Vo());if(/Trident/i.test(Vo())&&mt(b)&&ri(b).position==="fixed")return null;var k=Ps(b);for(Dn(k)&&(k=k.host);mt(k)&&["html","body"].indexOf(xn(k))<0;){var Z=ri(k);if(Z.transform!=="none"||Z.perspective!=="none"||Z.contain==="paint"||["transform","perspective"].indexOf(Z.willChange)!==-1||B&&Z.willChange==="filter"||B&&Z.filter&&Z.filter!=="none")return k;k=k.parentNode}return null}(x)||c}function Xo(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function ts(x,c,_){return In(x,fr(c,_))}function Fc(x){return Object.assign({},{top:0,right:0,bottom:0,left:0},x)}function Bc(x,c){return c.reduce(function(_,b){return _[b]=x,_},{})}const zc={name:"arrow",enabled:!0,phase:"main",fn:function(x){var c,_=x.state,b=x.name,B=x.options,k=_.elements.arrow,Z=_.modifiersData.popperOffsets,ae=It(_.placement),ge=Xo(ae),Ee=[T,an].indexOf(ae)>=0?"height":"width";if(k&&Z){var Ae=function(Mt,_t){return Fc(typeof(Mt=typeof Mt=="function"?Mt(Object.assign({},_t.rects,{placement:_t.placement})):Mt)!="number"?Mt:Bc(Mt,X))}(B.padding,_),Me=Wo(k),nt=ge==="y"?Zt:T,He=ge==="y"?on:an,$e=_.rects.reference[Ee]+_.rects.reference[ge]-Z[ge]-_.rects.popper[Ee],We=Z[ge]-_.rects.reference[ge],je=es(k),yt=je?ge==="y"?je.clientHeight||0:je.clientWidth||0:0,Rt=$e/2-We/2,ct=Ae[nt],dt=yt-Me[Ee]-Ae[He],it=yt/2-Me[Ee]/2+Rt,lt=ts(ct,it,dt),gt=ge;_.modifiersData[b]=((c={})[gt]=lt,c.centerOffset=lt-it,c)}},effect:function(x){var c=x.state,_=x.options.element,b=_===void 0?"[data-popper-arrow]":_;b!=null&&(typeof b!="string"||(b=c.elements.popper.querySelector(b)))&&Nc(c.elements.popper,b)&&(c.elements.arrow=b)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pr(x){return x.split("-")[1]}var Bf={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kc(x){var c,_=x.popper,b=x.popperRect,B=x.placement,k=x.variation,Z=x.offsets,ae=x.position,ge=x.gpuAcceleration,Ee=x.adaptive,Ae=x.roundOffsets,Me=x.isFixed,nt=Z.x,He=nt===void 0?0:nt,$e=Z.y,We=$e===void 0?0:$e,je=typeof Ae=="function"?Ae({x:He,y:We}):{x:He,y:We};He=je.x,We=je.y;var yt=Z.hasOwnProperty("x"),Rt=Z.hasOwnProperty("y"),ct=T,dt=Zt,it=window;if(Ee){var lt=es(_),gt="clientHeight",Mt="clientWidth";lt===Gt(_)&&ri(lt=_i(_)).position!=="static"&&ae==="absolute"&&(gt="scrollHeight",Mt="scrollWidth"),(B===Zt||(B===T||B===an)&&k===V)&&(dt=on,We-=(Me&&lt===it&&it.visualViewport?it.visualViewport.height:lt[gt])-b.height,We*=ge?1:-1),B!==T&&(B!==Zt&&B!==on||k!==V)||(ct=an,He-=(Me&&lt===it&&it.visualViewport?it.visualViewport.width:lt[Mt])-b.width,He*=ge?1:-1)}var _t,Bt=Object.assign({position:ae},Ee&&Bf),yn=Ae===!0?function(On,cn){var wn=On.x,Rn=On.y,Nt=cn.devicePixelRatio||1;return{x:ii(wn*Nt)/Nt||0,y:ii(Rn*Nt)/Nt||0}}({x:He,y:We},Gt(_)):{x:He,y:We};return He=yn.x,We=yn.y,ge?Object.assign({},Bt,((_t={})[dt]=Rt?"0":"",_t[ct]=yt?"0":"",_t.transform=(it.devicePixelRatio||1)<=1?"translate("+He+"px, "+We+"px)":"translate3d("+He+"px, "+We+"px, 0)",_t)):Object.assign({},Bt,((c={})[dt]=Rt?We+"px":"",c[ct]=yt?He+"px":"",c.transform="",c))}const qo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(x){var c=x.state,_=x.options,b=_.gpuAcceleration,B=b===void 0||b,k=_.adaptive,Z=k===void 0||k,ae=_.roundOffsets,ge=ae===void 0||ae,Ee={placement:It(c.placement),variation:pr(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:B,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,kc(Object.assign({},Ee,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:Z,roundOffsets:ge})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,kc(Object.assign({},Ee,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ge})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var Us={passive:!0};const Yo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(x){var c=x.state,_=x.instance,b=x.options,B=b.scroll,k=B===void 0||B,Z=b.resize,ae=Z===void 0||Z,ge=Gt(c.elements.popper),Ee=[].concat(c.scrollParents.reference,c.scrollParents.popper);return k&&Ee.forEach(function(Ae){Ae.addEventListener("scroll",_.update,Us)}),ae&&ge.addEventListener("resize",_.update,Us),function(){k&&Ee.forEach(function(Ae){Ae.removeEventListener("scroll",_.update,Us)}),ae&&ge.removeEventListener("resize",_.update,Us)}},data:{}};var zf={left:"right",right:"left",bottom:"top",top:"bottom"};function Ds(x){return x.replace(/left|right|bottom|top/g,function(c){return zf[c]})}var kf={start:"end",end:"start"};function Hc(x){return x.replace(/start|end/g,function(c){return kf[c]})}function $o(x){var c=Gt(x);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function jo(x){return dr(_i(x)).left+$o(x).scrollLeft}function Ko(x){var c=ri(x),_=c.overflow,b=c.overflowX,B=c.overflowY;return/auto|scroll|overlay|hidden/.test(_+B+b)}function Gc(x){return["html","body","#document"].indexOf(xn(x))>=0?x.ownerDocument.body:mt(x)&&Ko(x)?x:Gc(Ps(x))}function ns(x,c){var _;c===void 0&&(c=[]);var b=Gc(x),B=b===((_=x.ownerDocument)==null?void 0:_.body),k=Gt(b),Z=B?[k].concat(k.visualViewport||[],Ko(b)?b:[]):b,ae=c.concat(Z);return B?ae:ae.concat(ns(Ps(Z)))}function Zo(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function Vc(x,c,_){return c===Pe?Zo(function(b,B){var k=Gt(b),Z=_i(b),ae=k.visualViewport,ge=Z.clientWidth,Ee=Z.clientHeight,Ae=0,Me=0;if(ae){ge=ae.width,Ee=ae.height;var nt=Ic();(nt||!nt&&B==="fixed")&&(Ae=ae.offsetLeft,Me=ae.offsetTop)}return{width:ge,height:Ee,x:Ae+jo(b),y:Me}}(x,_)):Un(c)?function(b,B){var k=dr(b,!1,B==="fixed");return k.top=k.top+b.clientTop,k.left=k.left+b.clientLeft,k.bottom=k.top+b.clientHeight,k.right=k.left+b.clientWidth,k.width=b.clientWidth,k.height=b.clientHeight,k.x=k.left,k.y=k.top,k}(c,_):Zo(function(b){var B,k=_i(b),Z=$o(b),ae=(B=b.ownerDocument)==null?void 0:B.body,ge=In(k.scrollWidth,k.clientWidth,ae?ae.scrollWidth:0,ae?ae.clientWidth:0),Ee=In(k.scrollHeight,k.clientHeight,ae?ae.scrollHeight:0,ae?ae.clientHeight:0),Ae=-Z.scrollLeft+jo(b),Me=-Z.scrollTop;return ri(ae||k).direction==="rtl"&&(Ae+=In(k.clientWidth,ae?ae.clientWidth:0)-ge),{width:ge,height:Ee,x:Ae,y:Me}}(_i(x)))}function Wc(x){var c,_=x.reference,b=x.element,B=x.placement,k=B?It(B):null,Z=B?pr(B):null,ae=_.x+_.width/2-b.width/2,ge=_.y+_.height/2-b.height/2;switch(k){case Zt:c={x:ae,y:_.y-b.height};break;case on:c={x:ae,y:_.y+_.height};break;case an:c={x:_.x+_.width,y:ge};break;case T:c={x:_.x-b.width,y:ge};break;default:c={x:_.x,y:_.y}}var Ee=k?Xo(k):null;if(Ee!=null){var Ae=Ee==="y"?"height":"width";switch(Z){case Y:c[Ee]=c[Ee]-(_[Ae]/2-b[Ae]/2);break;case V:c[Ee]=c[Ee]+(_[Ae]/2-b[Ae]/2)}}return c}function mr(x,c){c===void 0&&(c={});var _=c,b=_.placement,B=b===void 0?x.placement:b,k=_.strategy,Z=k===void 0?x.strategy:k,ae=_.boundary,ge=ae===void 0?Se:ae,Ee=_.rootBoundary,Ae=Ee===void 0?Pe:Ee,Me=_.elementContext,nt=Me===void 0?Ne:Me,He=_.altBoundary,$e=He!==void 0&&He,We=_.padding,je=We===void 0?0:We,yt=Fc(typeof je!="number"?je:Bc(je,X)),Rt=nt===Ne?Ge:Ne,ct=x.rects.popper,dt=x.elements[$e?Rt:nt],it=function(cn,wn,Rn,Nt){var Yn=wn==="clippingParents"?function(At){var ln=ns(Ps(At)),Cn=["absolute","fixed"].indexOf(ri(At).position)>=0&&mt(At)?es(At):At;return Un(Cn)?ln.filter(function(xi){return Un(xi)&&Nc(xi,Cn)&&xn(xi)!=="body"}):[]}(cn):[].concat(wn),$n=[].concat(Yn,[Rn]),vr=$n[0],Yt=$n.reduce(function(At,ln){var Cn=Vc(cn,ln,Nt);return At.top=In(Cn.top,At.top),At.right=fr(Cn.right,At.right),At.bottom=fr(Cn.bottom,At.bottom),At.left=In(Cn.left,At.left),At},Vc(cn,vr,Nt));return Yt.width=Yt.right-Yt.left,Yt.height=Yt.bottom-Yt.top,Yt.x=Yt.left,Yt.y=Yt.top,Yt}(Un(dt)?dt:dt.contextElement||_i(x.elements.popper),ge,Ae,Z),lt=dr(x.elements.reference),gt=Wc({reference:lt,element:ct,strategy:"absolute",placement:B}),Mt=Zo(Object.assign({},ct,gt)),_t=nt===Ne?Mt:lt,Bt={top:it.top-_t.top+yt.top,bottom:_t.bottom-it.bottom+yt.bottom,left:it.left-_t.left+yt.left,right:_t.right-it.right+yt.right},yn=x.modifiersData.offset;if(nt===Ne&&yn){var On=yn[B];Object.keys(Bt).forEach(function(cn){var wn=[an,on].indexOf(cn)>=0?1:-1,Rn=[Zt,on].indexOf(cn)>=0?"y":"x";Bt[cn]+=On[Rn]*wn})}return Bt}function Hf(x,c){c===void 0&&(c={});var _=c,b=_.placement,B=_.boundary,k=_.rootBoundary,Z=_.padding,ae=_.flipVariations,ge=_.allowedAutoPlacements,Ee=ge===void 0?Ve:ge,Ae=pr(b),Me=Ae?ae?Je:Je.filter(function($e){return pr($e)===Ae}):X,nt=Me.filter(function($e){return Ee.indexOf($e)>=0});nt.length===0&&(nt=Me);var He=nt.reduce(function($e,We){return $e[We]=mr(x,{placement:We,boundary:B,rootBoundary:k,padding:Z})[It(We)],$e},{});return Object.keys(He).sort(function($e,We){return He[$e]-He[We]})}const Xc={name:"flip",enabled:!0,phase:"main",fn:function(x){var c=x.state,_=x.options,b=x.name;if(!c.modifiersData[b]._skip){for(var B=_.mainAxis,k=B===void 0||B,Z=_.altAxis,ae=Z===void 0||Z,ge=_.fallbackPlacements,Ee=_.padding,Ae=_.boundary,Me=_.rootBoundary,nt=_.altBoundary,He=_.flipVariations,$e=He===void 0||He,We=_.allowedAutoPlacements,je=c.options.placement,yt=It(je),Rt=ge||(yt!==je&&$e?function(At){if(It(At)===H)return[];var ln=Ds(At);return[Hc(At),ln,Hc(ln)]}(je):[Ds(je)]),ct=[je].concat(Rt).reduce(function(At,ln){return At.concat(It(ln)===H?Hf(c,{placement:ln,boundary:Ae,rootBoundary:Me,padding:Ee,flipVariations:$e,allowedAutoPlacements:We}):ln)},[]),dt=c.rects.reference,it=c.rects.popper,lt=new Map,gt=!0,Mt=ct[0],_t=0;_t<ct.length;_t++){var Bt=ct[_t],yn=It(Bt),On=pr(Bt)===Y,cn=[Zt,on].indexOf(yn)>=0,wn=cn?"width":"height",Rn=mr(c,{placement:Bt,boundary:Ae,rootBoundary:Me,altBoundary:nt,padding:Ee}),Nt=cn?On?an:T:On?on:Zt;dt[wn]>it[wn]&&(Nt=Ds(Nt));var Yn=Ds(Nt),$n=[];if(k&&$n.push(Rn[yn]<=0),ae&&$n.push(Rn[Nt]<=0,Rn[Yn]<=0),$n.every(function(At){return At})){Mt=Bt,gt=!1;break}lt.set(Bt,$n)}if(gt)for(var vr=function(At){var ln=ct.find(function(Cn){var xi=lt.get(Cn);if(xi)return xi.slice(0,At).every(function(Gs){return Gs})});if(ln)return Mt=ln,"break"},Yt=$e?3:1;Yt>0&&vr(Yt)!=="break";Yt--);c.placement!==Mt&&(c.modifiersData[b]._skip=!0,c.placement=Mt,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function qc(x,c,_){return _===void 0&&(_={x:0,y:0}),{top:x.top-c.height-_.y,right:x.right-c.width+_.x,bottom:x.bottom-c.height+_.y,left:x.left-c.width-_.x}}function Yc(x){return[Zt,an,on,T].some(function(c){return x[c]>=0})}const $c={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(x){var c=x.state,_=x.name,b=c.rects.reference,B=c.rects.popper,k=c.modifiersData.preventOverflow,Z=mr(c,{elementContext:"reference"}),ae=mr(c,{altBoundary:!0}),ge=qc(Z,b),Ee=qc(ae,B,k),Ae=Yc(ge),Me=Yc(Ee);c.modifiersData[_]={referenceClippingOffsets:ge,popperEscapeOffsets:Ee,isReferenceHidden:Ae,hasPopperEscaped:Me},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Ae,"data-popper-escaped":Me})}},jc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(x){var c=x.state,_=x.options,b=x.name,B=_.offset,k=B===void 0?[0,0]:B,Z=Ve.reduce(function(Ae,Me){return Ae[Me]=function(nt,He,$e){var We=It(nt),je=[T,Zt].indexOf(We)>=0?-1:1,yt=typeof $e=="function"?$e(Object.assign({},He,{placement:nt})):$e,Rt=yt[0],ct=yt[1];return Rt=Rt||0,ct=(ct||0)*je,[T,an].indexOf(We)>=0?{x:ct,y:Rt}:{x:Rt,y:ct}}(Me,c.rects,k),Ae},{}),ae=Z[c.placement],ge=ae.x,Ee=ae.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=ge,c.modifiersData.popperOffsets.y+=Ee),c.modifiersData[b]=Z}},Jo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(x){var c=x.state,_=x.name;c.modifiersData[_]=Wc({reference:c.rects.reference,element:c.rects.popper,strategy:"absolute",placement:c.placement})},data:{}},Kc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(x){var c=x.state,_=x.options,b=x.name,B=_.mainAxis,k=B===void 0||B,Z=_.altAxis,ae=Z!==void 0&&Z,ge=_.boundary,Ee=_.rootBoundary,Ae=_.altBoundary,Me=_.padding,nt=_.tether,He=nt===void 0||nt,$e=_.tetherOffset,We=$e===void 0?0:$e,je=mr(c,{boundary:ge,rootBoundary:Ee,padding:Me,altBoundary:Ae}),yt=It(c.placement),Rt=pr(c.placement),ct=!Rt,dt=Xo(yt),it=dt==="x"?"y":"x",lt=c.modifiersData.popperOffsets,gt=c.rects.reference,Mt=c.rects.popper,_t=typeof We=="function"?We(Object.assign({},c.rects,{placement:c.placement})):We,Bt=typeof _t=="number"?{mainAxis:_t,altAxis:_t}:Object.assign({mainAxis:0,altAxis:0},_t),yn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,On={x:0,y:0};if(lt){if(k){var cn,wn=dt==="y"?Zt:T,Rn=dt==="y"?on:an,Nt=dt==="y"?"height":"width",Yn=lt[dt],$n=Yn+je[wn],vr=Yn-je[Rn],Yt=He?-Mt[Nt]/2:0,At=Rt===Y?gt[Nt]:Mt[Nt],ln=Rt===Y?-Mt[Nt]:-gt[Nt],Cn=c.elements.arrow,xi=He&&Cn?Wo(Cn):{width:0,height:0},Gs=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Ol=Gs[wn],Fl=Gs[Rn],Vs=ts(0,gt[Nt],xi[Nt]),gp=ct?gt[Nt]/2-Yt-Vs-Ol-Bt.mainAxis:At-Vs-Ol-Bt.mainAxis,_p=ct?-gt[Nt]/2+Yt+Vs+Fl+Bt.mainAxis:ln+Vs+Fl+Bt.mainAxis,ha=c.elements.arrow&&es(c.elements.arrow),vp=ha?dt==="y"?ha.clientTop||0:ha.clientLeft||0:0,Bl=(cn=yn==null?void 0:yn[dt])!=null?cn:0,xp=Yn+_p-Bl,zl=ts(He?fr($n,Yn+gp-Bl-vp):$n,Yn,He?In(vr,xp):vr);lt[dt]=zl,On[dt]=zl-Yn}if(ae){var kl,yp=dt==="x"?Zt:T,Mp=dt==="x"?on:an,Wi=lt[it],Ws=it==="y"?"height":"width",Hl=Wi+je[yp],Gl=Wi-je[Mp],fa=[Zt,T].indexOf(yt)!==-1,Vl=(kl=yn==null?void 0:yn[it])!=null?kl:0,Wl=fa?Hl:Wi-gt[Ws]-Mt[Ws]-Vl+Bt.altAxis,Xl=fa?Wi+gt[Ws]+Mt[Ws]-Vl-Bt.altAxis:Gl,ql=He&&fa?function(Sp,Ep,da){var Yl=ts(Sp,Ep,da);return Yl>da?da:Yl}(Wl,Wi,Xl):ts(He?Wl:Hl,Wi,He?Xl:Gl);lt[it]=ql,On[it]=ql-Wi}c.modifiersData[b]=On}},requiresIfExists:["offset"]};function Gf(x,c,_){_===void 0&&(_=!1);var b,B,k=mt(c),Z=mt(c)&&function(Me){var nt=Me.getBoundingClientRect(),He=ii(nt.width)/Me.offsetWidth||1,$e=ii(nt.height)/Me.offsetHeight||1;return He!==1||$e!==1}(c),ae=_i(c),ge=dr(x,Z,_),Ee={scrollLeft:0,scrollTop:0},Ae={x:0,y:0};return(k||!k&&!_)&&((xn(c)!=="body"||Ko(ae))&&(Ee=(b=c)!==Gt(b)&&mt(b)?{scrollLeft:(B=b).scrollLeft,scrollTop:B.scrollTop}:$o(b)),mt(c)?((Ae=dr(c,!0)).x+=c.clientLeft,Ae.y+=c.clientTop):ae&&(Ae.x=jo(ae))),{x:ge.left+Ee.scrollLeft-Ae.x,y:ge.top+Ee.scrollTop-Ae.y,width:ge.width,height:ge.height}}function Vf(x){var c=new Map,_=new Set,b=[];function B(k){_.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(Z){if(!_.has(Z)){var ae=c.get(Z);ae&&B(ae)}}),b.push(k)}return x.forEach(function(k){c.set(k.name,k)}),x.forEach(function(k){_.has(k.name)||B(k)}),b}var Zc={placement:"bottom",modifiers:[],strategy:"absolute"};function Jc(){for(var x=arguments.length,c=new Array(x),_=0;_<x;_++)c[_]=arguments[_];return!c.some(function(b){return!(b&&typeof b.getBoundingClientRect=="function")})}function Is(x){x===void 0&&(x={});var c=x,_=c.defaultModifiers,b=_===void 0?[]:_,B=c.defaultOptions,k=B===void 0?Zc:B;return function(Z,ae,ge){ge===void 0&&(ge=k);var Ee,Ae,Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},Zc,k),modifiersData:{},elements:{reference:Z,popper:ae},attributes:{},styles:{}},nt=[],He=!1,$e={state:Me,setOptions:function(je){var yt=typeof je=="function"?je(Me.options):je;We(),Me.options=Object.assign({},k,Me.options,yt),Me.scrollParents={reference:Un(Z)?ns(Z):Z.contextElement?ns(Z.contextElement):[],popper:ns(ae)};var Rt,ct,dt=function(it){var lt=Vf(it);return qn.reduce(function(gt,Mt){return gt.concat(lt.filter(function(_t){return _t.phase===Mt}))},[])}((Rt=[].concat(b,Me.options.modifiers),ct=Rt.reduce(function(it,lt){var gt=it[lt.name];return it[lt.name]=gt?Object.assign({},gt,lt,{options:Object.assign({},gt.options,lt.options),data:Object.assign({},gt.data,lt.data)}):lt,it},{}),Object.keys(ct).map(function(it){return ct[it]})));return Me.orderedModifiers=dt.filter(function(it){return it.enabled}),Me.orderedModifiers.forEach(function(it){var lt=it.name,gt=it.options,Mt=gt===void 0?{}:gt,_t=it.effect;if(typeof _t=="function"){var Bt=_t({state:Me,name:lt,instance:$e,options:Mt});nt.push(Bt||function(){})}}),$e.update()},forceUpdate:function(){if(!He){var je=Me.elements,yt=je.reference,Rt=je.popper;if(Jc(yt,Rt)){Me.rects={reference:Gf(yt,es(Rt),Me.options.strategy==="fixed"),popper:Wo(Rt)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(_t){return Me.modifiersData[_t.name]=Object.assign({},_t.data)});for(var ct=0;ct<Me.orderedModifiers.length;ct++)if(Me.reset!==!0){var dt=Me.orderedModifiers[ct],it=dt.fn,lt=dt.options,gt=lt===void 0?{}:lt,Mt=dt.name;typeof it=="function"&&(Me=it({state:Me,options:gt,name:Mt,instance:$e})||Me)}else Me.reset=!1,ct=-1}}},update:(Ee=function(){return new Promise(function(je){$e.forceUpdate(),je(Me)})},function(){return Ae||(Ae=new Promise(function(je){Promise.resolve().then(function(){Ae=void 0,je(Ee())})})),Ae}),destroy:function(){We(),He=!0}};if(!Jc(Z,ae))return $e;function We(){nt.forEach(function(je){return je()}),nt=[]}return $e.setOptions(ge).then(function(je){!He&&ge.onFirstUpdate&&ge.onFirstUpdate(je)}),$e}}var Wf=Is(),Xf=Is({defaultModifiers:[Yo,Jo,qo,Oi]}),Qo=Is({defaultModifiers:[Yo,Jo,qo,Oi,jc,Xc,Kc,zc,$c]});const Qc=Object.freeze(Object.defineProperty({__proto__:null,afterMain:wt,afterRead:Jt,afterWrite:Tt,applyStyles:Oi,arrow:zc,auto:H,basePlacements:X,beforeMain:Ft,beforeRead:Ye,beforeWrite:Qe,bottom:on,clippingParents:Se,computeStyles:qo,createPopper:Qo,createPopperBase:Wf,createPopperLite:Xf,detectOverflow:mr,end:V,eventListeners:Yo,flip:Xc,hide:$c,left:T,main:Tn,modifierPhases:qn,offset:jc,placements:Ve,popper:Ne,popperGenerator:Is,popperOffsets:Jo,preventOverflow:Kc,read:Dt,reference:Ge,right:an,start:Y,top:Zt,variationPlacements:Je,viewport:Pe,write:hr},Symbol.toStringTag,{value:"Module"})),el="dropdown",Fi=".bs.dropdown",ea=".data-api",qf="ArrowUp",tl="ArrowDown",Yf=`hide${Fi}`,$f=`hidden${Fi}`,jf=`show${Fi}`,Kf=`shown${Fi}`,nl=`click${Fi}${ea}`,il=`keydown${Fi}${ea}`,Zf=`keyup${Fi}${ea}`,gr="show",Bi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Jf=`${Bi}.${gr}`,Ns=".dropdown-menu",Qf=v()?"top-end":"top-start",ed=v()?"top-start":"top-end",td=v()?"bottom-end":"bottom-start",nd=v()?"bottom-start":"bottom-end",id=v()?"left-start":"right-start",rd=v()?"right-start":"left-start",sd={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},od={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Nn extends ${constructor(c,_){super(c,_),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,Ns)[0]||ne.prev(this._element,Ns)[0]||ne.findOne(Ns,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return sd}static get DefaultType(){return od}static get NAME(){return el}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!D.trigger(this._element,jf,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const _ of[].concat(...document.body.children))D.on(_,"mouseover",u);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(gr),this._element.classList.add(gr),D.trigger(this._element,Kf,c)}}hide(){if(l(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!D.trigger(this._element,Yf,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const _ of[].concat(...document.body.children))D.off(_,"mouseover",u);this._popper&&this._popper.destroy(),this._menu.classList.remove(gr),this._element.classList.remove(gr),this._element.setAttribute("aria-expanded","false"),ye.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,$f,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!s(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${el.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Qc===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:s(this._config.reference)?c=a(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const _=this._getPopperConfig();this._popper=Qo(c,this._menu,_)}_isShown(){return this._menu.classList.contains(gr)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return id;if(c.classList.contains("dropstart"))return rd;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?_?ed:Qf:_?nd:td}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(_=>Number.parseInt(_,10)):typeof c=="function"?_=>c(_,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ye.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...p(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:_}){const b=ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(B=>o(B));b.length&&R(b,_,c===tl,!b.includes(_)).focus()}static jQueryInterface(c){return this.each(function(){const _=Nn.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const _=ne.find(Jf);for(const b of _){const B=Nn.getInstance(b);if(!B||B._config.autoClose===!1)continue;const k=c.composedPath(),Z=k.includes(B._menu);if(k.includes(B._element)||B._config.autoClose==="inside"&&!Z||B._config.autoClose==="outside"&&Z||B._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const ae={relatedTarget:B._element};c.type==="click"&&(ae.clickEvent=c),B._completeHide(ae)}}static dataApiKeydownHandler(c){const _=/input|textarea/i.test(c.target.tagName),b=c.key==="Escape",B=[qf,tl].includes(c.key);if(!B&&!b||_&&!b)return;c.preventDefault();const k=this.matches(Bi)?this:ne.prev(this,Bi)[0]||ne.next(this,Bi)[0]||ne.findOne(Bi,c.delegateTarget.parentNode),Z=Nn.getOrCreateInstance(k);if(B)return c.stopPropagation(),Z.show(),void Z._selectMenuItem(c);Z._isShown()&&(c.stopPropagation(),Z.hide(),k.focus())}}D.on(document,il,Bi,Nn.dataApiKeydownHandler),D.on(document,il,Ns,Nn.dataApiKeydownHandler),D.on(document,nl,Nn.clearMenus),D.on(document,Zf,Nn.clearMenus),D.on(document,nl,Bi,function(x){x.preventDefault(),Nn.getOrCreateInstance(this).toggle()}),y(Nn);const rl="backdrop",sl="show",ol=`mousedown.bs.${rl}`,ad={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},cd={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class al extends ke{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return ad}static get DefaultType(){return cd}static get NAME(){return rl}show(c){if(!this._config.isVisible)return void p(c);this._append();const _=this._getElement();this._config.isAnimated&&f(_),_.classList.add(sl),this._emulateAnimation(()=>{p(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(sl),this._emulateAnimation(()=>{this.dispose(),p(c)})):p(c)}dispose(){this._isAppended&&(D.off(this._element,ol),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=a(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),D.on(c,ol,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){m(c,this._getElement(),this._config.isAnimated)}}const Os=".bs.focustrap",ld=`focusin${Os}`,ud=`keydown.tab${Os}`,cl="backward",hd={autofocus:!0,trapElement:null},fd={autofocus:"boolean",trapElement:"element"};class ll extends ke{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return hd}static get DefaultType(){return fd}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),D.off(document,Os),D.on(document,ld,c=>this._handleFocusin(c)),D.on(document,ud,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,D.off(document,Os))}_handleFocusin(c){const{trapElement:_}=this._config;if(c.target===document||c.target===_||_.contains(c.target))return;const b=ne.focusableChildren(_);b.length===0?_.focus():this._lastTabNavDirection===cl?b[b.length-1].focus():b[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?cl:"forward")}}const ul=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hl=".sticky-top",Fs="padding-right",fl="margin-right";class ta{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Fs,_=>_+c),this._setElementAttributes(ul,Fs,_=>_+c),this._setElementAttributes(hl,fl,_=>_-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Fs),this._resetElementAttributes(ul,Fs),this._resetElementAttributes(hl,fl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,_,b){const B=this.getWidth();this._applyManipulationCallback(c,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+B)return;this._saveInitialAttribute(k,_);const Z=window.getComputedStyle(k).getPropertyValue(_);k.style.setProperty(_,`${b(Number.parseFloat(Z))}px`)})}_saveInitialAttribute(c,_){const b=c.style.getPropertyValue(_);b&&ye.setDataAttribute(c,_,b)}_resetElementAttributes(c,_){this._applyManipulationCallback(c,b=>{const B=ye.getDataAttribute(b,_);B!==null?(ye.removeDataAttribute(b,_),b.style.setProperty(_,B)):b.style.removeProperty(_)})}_applyManipulationCallback(c,_){if(s(c))_(c);else for(const b of ne.find(c,this._element))_(b)}}const An=".bs.modal",dd=`hide${An}`,pd=`hidePrevented${An}`,dl=`hidden${An}`,pl=`show${An}`,md=`shown${An}`,gd=`resize${An}`,_d=`click.dismiss${An}`,vd=`mousedown.dismiss${An}`,xd=`keydown.dismiss${An}`,yd=`click${An}.data-api`,ml="modal-open",gl="show",na="modal-static",Md={backdrop:!0,focus:!0,keyboard:!0},Sd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class zi extends ${constructor(c,_){super(c,_),this._dialog=ne.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ta,this._addEventListeners()}static get Default(){return Md}static get DefaultType(){return Sd}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||D.trigger(this._element,pl,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ml),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(D.trigger(this._element,dd).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(gl),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){D.off(window,An),D.off(this._dialog,An),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new al({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ll({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const _=ne.findOne(".modal-body",this._dialog);_&&(_.scrollTop=0),f(this._element),this._element.classList.add(gl),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,D.trigger(this._element,md,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){D.on(this._element,xd,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),D.on(window,gd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),D.on(this._element,vd,c=>{D.one(this._element,_d,_=>{this._element===c.target&&this._element===_.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ml),this._resetAdjustments(),this._scrollBar.reset(),D.trigger(this._element,dl)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(D.trigger(this._element,pd).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,_=this._element.style.overflowY;_==="hidden"||this._element.classList.contains(na)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(na),this._queueCallback(()=>{this._element.classList.remove(na),this._queueCallback(()=>{this._element.style.overflowY=_},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,_=this._scrollBar.getWidth(),b=_>0;if(b&&!c){const B=v()?"paddingLeft":"paddingRight";this._element.style[B]=`${_}px`}if(!b&&c){const B=v()?"paddingRight":"paddingLeft";this._element.style[B]=`${_}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,_){return this.each(function(){const b=zi.getOrCreateInstance(this,c);if(typeof c=="string"){if(b[c]===void 0)throw new TypeError(`No method named "${c}"`);b[c](_)}})}}D.on(document,yd,'[data-bs-toggle="modal"]',function(x){const c=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),D.one(c,pl,b=>{b.defaultPrevented||D.one(c,dl,()=>{o(this)&&this.focus()})});const _=ne.findOne(".modal.show");_&&zi.getInstance(_).hide(),zi.getOrCreateInstance(c).toggle(this)}),Be(zi),y(zi);const si=".bs.offcanvas",_l=".data-api",Ed=`load${si}${_l}`,vl="show",xl="showing",yl="hiding",Ml=".offcanvas.show",bd=`show${si}`,Td=`shown${si}`,Ad=`hide${si}`,Sl=`hidePrevented${si}`,El=`hidden${si}`,wd=`resize${si}`,Rd=`click${si}${_l}`,Cd=`keydown.dismiss${si}`,Ld={backdrop:!0,keyboard:!0,scroll:!1},Pd={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class oi extends ${constructor(c,_){super(c,_),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ld}static get DefaultType(){return Pd}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||D.trigger(this._element,bd,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ta().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(xl),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(vl),this._element.classList.remove(xl),D.trigger(this._element,Td,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(D.trigger(this._element,Ad).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(yl),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(vl,yl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ta().reset(),D.trigger(this._element,El)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new al({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():D.trigger(this._element,Sl)}:null})}_initializeFocusTrap(){return new ll({trapElement:this._element})}_addEventListeners(){D.on(this._element,Cd,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():D.trigger(this._element,Sl))})}static jQueryInterface(c){return this.each(function(){const _=oi.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);_[c](this)}})}}D.on(document,Rd,'[data-bs-toggle="offcanvas"]',function(x){const c=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this))return;D.one(c,El,()=>{o(this)&&this.focus()});const _=ne.findOne(Ml);_&&_!==c&&oi.getInstance(_).hide(),oi.getOrCreateInstance(c).toggle(this)}),D.on(window,Ed,()=>{for(const x of ne.find(Ml))oi.getOrCreateInstance(x).show()}),D.on(window,wd,()=>{for(const x of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&oi.getOrCreateInstance(x).hide()}),Be(oi),y(oi);const bl={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ud=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Dd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Id=(x,c)=>{const _=x.nodeName.toLowerCase();return c.includes(_)?!Ud.has(_)||!!Dd.test(x.nodeValue):c.filter(b=>b instanceof RegExp).some(b=>b.test(_))},Nd={allowList:bl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Od={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Fd={entry:"(string|element|function|null)",selector:"(string|element)"};class Bd extends ke{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Nd}static get DefaultType(){return Od}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[B,k]of Object.entries(this._config.content))this._setContent(c,k,B);const _=c.children[0],b=this._resolvePossibleFunction(this._config.extraClass);return b&&_.classList.add(...b.split(" ")),_}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[_,b]of Object.entries(c))super._typeCheckConfig({selector:_,entry:b},Fd)}_setContent(c,_,b){const B=ne.findOne(b,c);B&&((_=this._resolvePossibleFunction(_))?s(_)?this._putElementInTemplate(a(_),B):this._config.html?B.innerHTML=this._maybeSanitize(_):B.textContent=_:B.remove())}_maybeSanitize(c){return this._config.sanitize?function(_,b,B){if(!_.length)return _;if(B&&typeof B=="function")return B(_);const k=new window.DOMParser().parseFromString(_,"text/html"),Z=[].concat(...k.body.querySelectorAll("*"));for(const ae of Z){const ge=ae.nodeName.toLowerCase();if(!Object.keys(b).includes(ge)){ae.remove();continue}const Ee=[].concat(...ae.attributes),Ae=[].concat(b["*"]||[],b[ge]||[]);for(const Me of Ee)Id(Me,Ae)||ae.removeAttribute(Me.nodeName)}return k.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return p(c,[this])}_putElementInTemplate(c,_){if(this._config.html)return _.innerHTML="",void _.append(c);_.textContent=c.textContent}}const zd=new Set(["sanitize","allowList","sanitizeFn"]),ia="fade",Bs="show",Tl=".modal",Al="hide.bs.modal",is="hover",ra="focus",kd={AUTO:"auto",TOP:"top",RIGHT:v()?"left":"right",BOTTOM:"bottom",LEFT:v()?"right":"left"},Hd={allowList:bl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Gd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ki extends ${constructor(c,_){if(Qc===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,_),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Hd}static get DefaultType(){return Gd}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),D.off(this._element.closest(Tl),Al,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=D.trigger(this._element,this.constructor.eventName("show")),_=(h(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!_)return;this._disposePopper();const b=this._getTipElement();this._element.setAttribute("aria-describedby",b.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(b),D.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(b),b.classList.add(Bs),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))D.on(k,"mouseover",u);this._queueCallback(()=>{D.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!D.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Bs),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))D.off(c,"mouseover",u);this._activeTrigger.click=!1,this._activeTrigger[ra]=!1,this._activeTrigger[is]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),D.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const _=this._getTemplateFactory(c).toHtml();if(!_)return null;_.classList.remove(ia,Bs),_.classList.add(`bs-${this.constructor.NAME}-auto`);const b=(B=>{do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B})(this.constructor.NAME).toString();return _.setAttribute("id",b),this._isAnimated()&&_.classList.add(ia),_}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Bd({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ia)}_isShown(){return this.tip&&this.tip.classList.contains(Bs)}_createPopper(c){const _=p(this._config.placement,[this,c,this._element]),b=kd[_.toUpperCase()];return Qo(this._element,c,this._getPopperConfig(b))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(_=>Number.parseInt(_,10)):typeof c=="function"?_=>c(_,this._element):c}_resolvePossibleFunction(c){return p(c,[this._element])}_getPopperConfig(c){const _={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:b=>{this._getTipElement().setAttribute("data-popper-placement",b.state.placement)}}]};return{..._,...p(this._config.popperConfig,[_])}}_setListeners(){const c=this._config.trigger.split(" ");for(const _ of c)if(_==="click")D.on(this._element,this.constructor.eventName("click"),this._config.selector,b=>{this._initializeOnDelegatedTarget(b).toggle()});else if(_!=="manual"){const b=_===is?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),B=_===is?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");D.on(this._element,b,this._config.selector,k=>{const Z=this._initializeOnDelegatedTarget(k);Z._activeTrigger[k.type==="focusin"?ra:is]=!0,Z._enter()}),D.on(this._element,B,this._config.selector,k=>{const Z=this._initializeOnDelegatedTarget(k);Z._activeTrigger[k.type==="focusout"?ra:is]=Z._element.contains(k.relatedTarget),Z._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},D.on(this._element.closest(Tl),Al,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,_){clearTimeout(this._timeout),this._timeout=setTimeout(c,_)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const _=ye.getDataAttributes(this._element);for(const b of Object.keys(_))zd.has(b)&&delete _[b];return c={..._,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:a(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[_,b]of Object.entries(this._config))this.constructor.Default[_]!==b&&(c[_]=b);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const _=ki.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c]()}})}}y(ki);const Vd={...ki.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Wd={...ki.DefaultType,content:"(null|string|element|function)"};class zs extends ki{static get Default(){return Vd}static get DefaultType(){return Wd}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const _=zs.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c]()}})}}y(zs);const sa=".bs.scrollspy",Xd=`activate${sa}`,wl=`click${sa}`,qd=`load${sa}.data-api`,_r="active",oa="[href]",Rl=".nav-link",Yd=`${Rl}, .nav-item > ${Rl}, .list-group-item`,$d={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},jd={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class rs extends ${constructor(c,_){super(c,_),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return $d}static get DefaultType(){return jd}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=a(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(_=>Number.parseFloat(_))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(D.off(this._config.target,wl),D.on(this._config.target,wl,oa,c=>{const _=this._observableSections.get(c.target.hash);if(_){c.preventDefault();const b=this._rootElement||window,B=_.offsetTop-this._element.offsetTop;if(b.scrollTo)return void b.scrollTo({top:B,behavior:"smooth"});b.scrollTop=B}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(_=>this._observerCallback(_),c)}_observerCallback(c){const _=Z=>this._targetLinks.get(`#${Z.target.id}`),b=Z=>{this._previousScrollData.visibleEntryTop=Z.target.offsetTop,this._process(_(Z))},B=(this._rootElement||document.documentElement).scrollTop,k=B>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=B;for(const Z of c){if(!Z.isIntersecting){this._activeTarget=null,this._clearActiveClass(_(Z));continue}const ae=Z.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&ae){if(b(Z),!B)return}else k||ae||b(Z)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=ne.find(oa,this._config.target);for(const _ of c){if(!_.hash||l(_))continue;const b=ne.findOne(decodeURI(_.hash),this._element);o(b)&&(this._targetLinks.set(decodeURI(_.hash),_),this._observableSections.set(_.hash,b))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(_r),this._activateParents(c),D.trigger(this._element,Xd,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))ne.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(_r);else for(const _ of ne.parents(c,".nav, .list-group"))for(const b of ne.prev(_,Yd))b.classList.add(_r)}_clearActiveClass(c){c.classList.remove(_r);const _=ne.find(`${oa}.${_r}`,c);for(const b of _)b.classList.remove(_r)}static jQueryInterface(c){return this.each(function(){const _=rs.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);_[c]()}})}}D.on(window,qd,()=>{for(const x of ne.find('[data-bs-spy="scroll"]'))rs.getOrCreateInstance(x)}),y(rs);const Hi=".bs.tab",Kd=`hide${Hi}`,Zd=`hidden${Hi}`,Jd=`show${Hi}`,Qd=`shown${Hi}`,ep=`click${Hi}`,tp=`keydown${Hi}`,np=`load${Hi}`,ip="ArrowLeft",Cl="ArrowRight",rp="ArrowUp",Ll="ArrowDown",aa="Home",Pl="End",Gi="active",Ul="fade",ca="show",Dl=".dropdown-toggle",la=`:not(${Dl})`,Il='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ua=`.nav-link${la}, .list-group-item${la}, [role="tab"]${la}, ${Il}`,sp=`.${Gi}[data-bs-toggle="tab"], .${Gi}[data-bs-toggle="pill"], .${Gi}[data-bs-toggle="list"]`;class Vi extends ${constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),D.on(this._element,tp,_=>this._keydown(_)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const _=this._getActiveElem(),b=_?D.trigger(_,Kd,{relatedTarget:c}):null;D.trigger(c,Jd,{relatedTarget:_}).defaultPrevented||b&&b.defaultPrevented||(this._deactivate(_,c),this._activate(c,_))}_activate(c,_){c&&(c.classList.add(Gi),this._activate(ne.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),D.trigger(c,Qd,{relatedTarget:_})):c.classList.add(ca)},c,c.classList.contains(Ul)))}_deactivate(c,_){c&&(c.classList.remove(Gi),c.blur(),this._deactivate(ne.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),D.trigger(c,Zd,{relatedTarget:_})):c.classList.remove(ca)},c,c.classList.contains(Ul)))}_keydown(c){if(![ip,Cl,rp,Ll,aa,Pl].includes(c.key))return;c.stopPropagation(),c.preventDefault();const _=this._getChildren().filter(B=>!l(B));let b;if([aa,Pl].includes(c.key))b=_[c.key===aa?0:_.length-1];else{const B=[Cl,Ll].includes(c.key);b=R(_,c.target,B,!0)}b&&(b.focus({preventScroll:!0}),Vi.getOrCreateInstance(b).show())}_getChildren(){return ne.find(ua,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,_){this._setAttributeIfNotExists(c,"role","tablist");for(const b of _)this._setInitialAttributesOnChild(b)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const _=this._elemIsActive(c),b=this._getOuterElement(c);c.setAttribute("aria-selected",_),b!==c&&this._setAttributeIfNotExists(b,"role","presentation"),_||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const _=ne.getElementFromSelector(c);_&&(this._setAttributeIfNotExists(_,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,_){const b=this._getOuterElement(c);if(!b.classList.contains("dropdown"))return;const B=(k,Z)=>{const ae=ne.findOne(k,b);ae&&ae.classList.toggle(Z,_)};B(Dl,Gi),B(".dropdown-menu",ca),b.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(c,_,b){c.hasAttribute(_)||c.setAttribute(_,b)}_elemIsActive(c){return c.classList.contains(Gi)}_getInnerElement(c){return c.matches(ua)?c:ne.findOne(ua,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const _=Vi.getOrCreateInstance(this);if(typeof c=="string"){if(_[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);_[c]()}})}}D.on(document,ep,Il,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),l(this)||Vi.getOrCreateInstance(this).show()}),D.on(window,np,()=>{for(const x of ne.find(sp))Vi.getOrCreateInstance(x)}),y(Vi);const vi=".bs.toast",op=`mouseover${vi}`,ap=`mouseout${vi}`,cp=`focusin${vi}`,lp=`focusout${vi}`,up=`hide${vi}`,hp=`hidden${vi}`,fp=`show${vi}`,dp=`shown${vi}`,Nl="hide",ks="show",Hs="showing",pp={animation:"boolean",autohide:"boolean",delay:"number"},mp={animation:!0,autohide:!0,delay:5e3};class ss extends ${constructor(c,_){super(c,_),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return mp}static get DefaultType(){return pp}static get NAME(){return"toast"}show(){D.trigger(this._element,fp).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Nl),f(this._element),this._element.classList.add(ks,Hs),this._queueCallback(()=>{this._element.classList.remove(Hs),D.trigger(this._element,dp),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(D.trigger(this._element,up).defaultPrevented||(this._element.classList.add(Hs),this._queueCallback(()=>{this._element.classList.add(Nl),this._element.classList.remove(Hs,ks),D.trigger(this._element,hp)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ks),super.dispose()}isShown(){return this._element.classList.contains(ks)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,_){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=_;break;case"focusin":case"focusout":this._hasKeyboardInteraction=_}if(_)return void this._clearTimeout();const b=c.relatedTarget;this._element===b||this._element.contains(b)||this._maybeScheduleHide()}_setListeners(){D.on(this._element,op,c=>this._onInteraction(c,!0)),D.on(this._element,ap,c=>this._onInteraction(c,!1)),D.on(this._element,cp,c=>this._onInteraction(c,!0)),D.on(this._element,lp,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const _=ss.getOrCreateInstance(this,c);if(typeof c=="string"){if(_[c]===void 0)throw new TypeError(`No method named "${c}"`);_[c](this)}})}}return Be(ss),y(ss),{Alert:Oe,Button:Ct,Carousel:_e,Collapse:ni,Dropdown:Nn,Modal:zi,Offcanvas:oi,Popover:zs,ScrollSpy:rs,Tab:Vi,Toast:ss,Tooltip:ki}});const ys=[0,1,0],Ms=[0,0,1];function kr(i,e){return i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2]}function wp(i,e,t,n){return i*n*n+e*n+t}function Qa(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function Ss(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}function ec(i){return Math.round(i*1e6)/1e6}function Rp(i){return i*Math.PI/180}function Cp(i){return i*180/Math.PI}function tc(i){const e=Math.sqrt(i.reduce((t,n)=>t+n*n,0));return i.map(t=>t/e)}function Lp(i){const[e,t,n,r,s,a,o,l,h]=i,u=(e+s+h-1)/2,[f,d]=function(){const g=ec(u);if(g===0)return[90,1];if(g===1)return[0,0];if(g===-1)return[180,0];const v=Math.acos(g);return[Cp(v),Math.sin(v)]}();if(d!==0){const g=l-a,v=n-o,y=r-t;return[tc([g,v,y]),f]}else{const g=[[e+1,t,n],[t,s+1,a],[n,a,h+1]].find(v=>v.some(y=>y!==0))||[0,0,0];return[tc(g),f]}}function $l(i){const[e,t,n,r]=[...tc(i[0]),i[1]%360],[s,a]=function(){if(r===0)return[1,0];if(r===180)return[-1,0];if(r===90)return[0,1];const l=Rp(r);return[Math.cos(l),Math.sin(l)]}(),o=1-s;return[e*e*o+s,e*t*o-n*a,e*n*o+t*a,t*e*o+n*a,t*t*o+s,t*n*o-e*a,n*e*o-t*a,n*t*o+e*a,n*n*o+s]}function jl(i,e,t){let n=Qa(i,e);if(n>0)return[1,0,0,0,1,0,0,0,1];if(n<0){if(Qa(i,t)!==0)throw new Error("ref axis must be orthogonal to v1");return $l([t,180])}return $l([Ss(i,e),90])}function Pp(i,e){const[t,n,r,s,a,o,l,h,u]=i,[f,d,g,v,y,p,m,R,E]=e;return[t*f+n*v+r*m,t*d+n*y+r*R,t*g+n*p+r*E,s*f+a*v+o*m,s*d+a*y+o*R,s*g+a*p+o*E,l*f+h*v+u*m,l*d+h*y+u*R,l*g+h*p+u*E]}function Up(i,e){const[t,n,r,s,a,o,l,h,u]=i,[f,d,g]=e;return[t*f+n*d+r*g,s*f+a*d+o*g,l*f+h*d+u*g]}function Dp(i,e,t,n){const r=jl(i,t,e),s=Up(r,e),a=jl(s,n,Qa(s,i)===0?i:e),o=Pp(a,r);return Lp(o)}function Ip(i,e,t,n){const r=Dp(ys,Ms,i,e);r[1]=-r[1];const[s,a,o]=t.map(p=>p===0?-1:p===n-1?1:0),[l,h,u]=r[0],f=[s*l,a*h,o*u];f.filter(p=>p<0).length>f.filter(p=>p>0).length&&(r[0]=r[0].map(p=>p===0?0:-p),r[1]=-r[1]);const[d,g,v]=r[0],y=d!==0?1/Math.abs(d):g!==0?1/Math.abs(g):v!==0?1/Math.abs(v):1;return r[0]=r[0].map(p=>ec(p*y)),r[1]=ec(r[1]),r[1]===-180&&(r[1]=180),r}function pa(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,l=a===0?1:a===180?-1:0,u=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[u[0]*n+u[1]*r+u[2]*s,u[3]*n+u[4]*r+u[5]*s,u[6]*n+u[7]*r+u[8]*s]}function Kl(i,e,t){const[n,r,s]=t;if(r===1)return i;if(s===1)return e;if(n===-1)return Ss(e,i);if(n===1)return Ss(i,e);if(s===-1)return e.map(a=>-a);if(r===-1)return i.map(a=>-a);throw new Error("unreachable")}function Xs(i){const[e,t,n,r]=i;return[e,-t,n,r]}function Zl(i,e){const t={R:[0,-90,-1],L:[0,90,1],U:[1,-90,-1],D:[1,90,1],F:[2,-90,-1],B:[2,90,1],M:[0,90,2],E:[1,90,2],S:[2,-90,2],x:[0,-90,0],y:[1,-90,0],z:[2,-90,0]},n=i.match(/^([0-9]+)?(-([0-9]+))?([A-Za-z])(w?)([0-9]+)?(')?$/);if(!n)throw`parse op [${i}] error`;let r=n[4],s=!1;(n[5]==="w"||"rludbfmes".indexOf(r)>=0)&&(r=r.toUpperCase(),s=!0);let a=0,o=1,l=n[1],h=n[3];h?(a=parseInt(l||"1")-1,o=parseInt(h)):s?(a=0,o=parseInt(l||"2")):(a=parseInt(l||"1")-1,o=a+1);const[u,f,d]=t[r],g=n[7]?-1:1,v=n[6]?parseInt(n[6]):1,y=f*g*v;let p=0,m=0;switch(d){case 1:p=a,m=o;break;case-1:m=e-a,p=e-o;break;case 0:p=0,m=e;break;case 2:{const R=s?e-2:1,E=(e-R)%2===1?R+1:R;p=(e-E)/2,m=p+E;break}}return[u,y,p,m]}function nc(i,e){try{return To(i,e)}catch{return i=i.replace(/([rludfbxyzmes])/ig," $1"),To(i,e)}}function To(i,e){let t=0,n=0;const r=[];for(;;){if(i[n]===" "||n>=i.length){const s=i.slice(t,n).trim();if(s.length>0&&r.push(Zl(s,e)),n>=i.length)break;n++,t=n;continue}if(i[n]===","||i[n]===":"){const s=i.slice(t,n).trim();s.length>0&&r.push(Zl(s,e));const a=To(i.slice(n+1),e);return i[n]===","?[...r,...a,...r.reverse().map(Xs),...a.reverse().map(Xs)]:[...r,...a,...r.reverse().map(Xs)]}if(i[n]==="["||i[n]==="("){const s=i[n],a=i[n]==="["?"]":")";let o=1,l=n+1;for(;l<i.length&&(i[l]===s&&o++,i[l]===a&&o--,o!==0);)l++;let h=To(i.slice(n+1,l),e);l++,l<i.length&&i[l]=="'"&&(l++,h=h.reverse().map(Xs));let u=1;if(l<i.length){let f=l;for(;f<i.length&&i[f]>="0"&&i[f]<="9";)f++;f>l&&(u=parseInt(i.slice(l,f))),l=f}for(let f=0;f<u;f++)r.push(...h);n=l,t=n;continue}n++}return r}function Br(i,e){return e.map(t=>t.opType==="commutator"?`(${Br(i,t.child1)}, ${Br(i,t.child2)})`:t.opType==="conjugate"?`(${Br(i,t.child1)}: ${Br(i,t.child2)})`:t.opType==="repeat"?`(${Br(i,t.child1)})${t.data}`:Bh(i,...t.op)).join(" ")}function Es(i){let e=0;for(const t of i)t.opType!=="simple"?(e+=Es(t.child1),e+=Es(t.child2)):e++;return e}function Nh(i,e){return i[0]===e[0]&&(i[1]+e[1])%360===0&&i[2]===e[2]&&i[3]===e[3]}function qs(i,e,t,n,r){for(let s=0;s<r;s++)if(!Nh(i[e+s],t[n+r-1-s]))return!1;return!0}function Oh(i,e){for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function Fh(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!Oh(i[t],e[t]))return!1;return!0}function Jl(i){const e=[...i];return i[1]!==180&&(e[1]=-i[1]),e}function Np(i,e){if(i.length%2===0){if(qs(i,0,i,i.length/2,e)&&qs(i,e,i,i.length/2+e,i.length/2-e))return[!0]}else if(i.length>=7){const t=(i.length+1)/2;if(qs(i,0,i,t-1,e-1)&&qs(i,e-1,i,t-1+e,t-e))return[!0,i[t-1+e-1]]}return[!1]}function Op(i,e){if(i.length%e!==0||e===1||e>i.length/2)return!1;const t=i.length/e;for(let n=0;n<e;n++){const r=i[n];for(let s=1;s<t;s++){const a=i[s*e+n];if(!Oh(r,a))return!1}}return!0}function Fp(i){let e=0;for(;e<(i.length-1)/2&&Nh(i[e],i[i.length-1-e]);e++);return e}function di(i,e,t){if(e>i.maxDepth&&(i.maxDepth=e),t.length<=3||e>i.depthLimit)return t.map(o=>({opType:"simple",child1:[],child2:[],op:o,data:0}));const n=[];for(let o=2;o<=t.length/2;o++)Op(t,o)&&n.push([{opType:"repeat",child1:di(i,e+1,t.slice(0,o)),child2:[],op:[0,0,0,0],data:t.length/o}]);for(let o=1;o<t.length/2;o++){const[l,h,u]=Np(t,o);if(l){let f=t;h&&(f=[Jl(h),...f]),u&&(f=[...f,Jl(u)]);const d=[];h&&d.push({opType:"simple",child1:[],child2:[],op:h,data:0}),d.push({opType:"commutator",child1:di(i,e+1,f.slice(0,o)),child2:di(i,e+1,f.slice(o,f.length/2)),op:[0,0,0,0],data:0}),u&&d.push({opType:"simple",child1:[],child2:[],op:u,data:0}),n.push(d)}}let r=Fp(t);r>1&&e===1&&n.push([{opType:"conjugate",child1:di(i,e+1,t.slice(0,r)),child2:di(i,e+1,t.slice(r,t.length-r)),op:[0,0,0,0],data:0}]);for(let o=1;o<t.length;o++)n.push([...di(i,e+1,t.slice(0,t.length-o)),...di(i,e+1,t.slice(t.length-o))]);e===1&&console.log("co-candidates",n);let s=-1,a=[];for(const o of n){const l=[];let h=0,u=0;for(u=0;u<o.length;u++)if(o[u].opType!=="simple"){if(h<u){const d=o.slice(h,u).map(v=>v.op),g=Ao(i.n,d);l.push(...g.map(v=>({opType:"simple",child1:[],child2:[],op:v,data:0})))}h=u+1,l.push(o[u])}if(h<u){const d=o.slice(h,u).map(g=>g.op);Ao(i.n,d),l.push(...d.map(g=>({opType:"simple",child1:[],child2:[],op:g,data:0})))}const f=Es(l);(s===-1||f<s)&&(s=f,a=l)}return a}function Bp(i,e,t){let n={depthLimit:e,maxDepth:0,n:i},r=di(n,1,t);const s=Ao(i,t);if(!Fh(t,s)){const a=Es(r),o={depthLimit:e,maxDepth:0,n:i},l=di(o,1,s);Es(l)<a&&(r=l,n=o)}return{alg:Br(i,r),complete:n.maxDepth<=e}}function Ao(i,e){const t=n=>{const r=[],s=n[0][0];let a=-1,o=0;for(let l=0;l<i;l++){let h=0;for(const u of n){const[f,d,g,v]=u;l>=g&&l<v&&(h+=d)}h!==o&&(a>=0&&o!==0&&r.push([s,o,a,l]),a=l,o=h)}return a>=0&&o!==0&&r.push([s,o,a,i]),r};for(;;){const n=[];for(let r=0;r<e.length;){const s=e[r][0];let a=r+1;for(;a<e.length&&e[a][0]===s;a++);a===r+1?n.push(e[r]):n.push(...t(e.slice(r,a))),r=a}if(Fh(e,n))return n;e=n}}function Bh(i,e,t,n,r){const s=(t/90%4+4)%4-2,a=l=>l===0?"2":l===1?"'":"";if(n===0&&r===i)return"xyz"[e].toLowerCase()+a(-s);const o="MES"[e];if(n*2===i-1&&r===n+1)return o+a(o==="S"?-s:s);if(n===1&&r===i-1)return o.toLowerCase()+a(o==="S"?-s:s);if(n+r>=i){const l="RUF"[e],h=i-r,u=i-n;return(u===1?"":u===h+1?`${h+1}`:`${h+1}-${u}`)+l+a(-s)}else{const l="LDB"[e],h=n,u=r;return(u===1?"":u===h+1?`${h+1}`:`${h+1}-${u}`)+l+a(s)}}function ic(i,e){const t=[];for(const n of e){const[r,s,a,o]=n;s!==0&&t.push(Bh(i,r,s,a,o))}return t.join(" ")}function zp(i,e,t){let{position:n,T:r,F:s}=i;for(const[a,o,l,h]of e)if(n[a]>=l&&n[a]<h){const[u,f,d]=n;s=pa(s,a,o),r=pa(r,a,o);const g=(t-1)/2,[v,y,p]=pa([u-g,f-g,d-g],a,o);n=[v+g,y+g,p+g]}return{position:n,T:r,F:s}}function rc(i,e){const t=Xr(e,i);if(t.length===3){const[n,r,s]=t.map(l=>l.face),a=["U","F","R","L","B","D"],o=(l,h,u)=>l+a.filter(f=>f===h||f===u).join("");return[o(n,r,s),o(r,s,n),o(s,n,r)]}else if(t.length===2){const[n,r]=t,s=(a,o)=>{const l=n.a===0||n.a===i-1?n.b:n.a;return a.face+o.face+(l*2===i-1?"":l+1)};return[s(n,r),s(r,n)]}else{const n=t[0],r=`${n.a+1}`,s=`${n.b+1}`,a=r.length+s.length===2?"":"-";return[n.face+r+a+s]}}function kp(i){let e=ys,t=Ms;for(let n=1;;n++){for(const r of i)e=Kl(r.nT,r.nF,e),t=Kl(r.nT,r.nF,t);if(kr(e,ys)&&kr(t,Ms))return n}}function Hp(i){const e=(r,s)=>{for(;s;){const a=s;s=r%s,r=a}return r},t=(r,s)=>r*s/e(r,s);let n=1;for(const r of i){const s=kp(r);n=t(n,s*r.length)}return n}function Gp(i,e){const t=nc(i,e);return ic(e,t)}function Vp(i,e=3,t=!1,n=""){const r=nc(i,e),a=[...nc(n,e),...r],o={},l=[],h=(u,f,d)=>{if(u*e*e+f*e+d in o)return;let v={position:[u,f,d],T:ys,F:Ms};const y=[];for(;;){let p=zp(v,a,e);if(o[wp(...p.position,e)]=!0,!kr(p.position,v.position)||!kr(p.T,v.T)||!kr(p.F,v.F)){const m=Ip(p.T,p.F,v.position,e);y.push({p1:v.position,p2:p.position,nT:p.T,nF:p.F,rotation:m})}if(kr(p.position,[u,f,d]))break;v={position:p.position,T:ys,F:Ms}}y.length>0&&l.push(y)};if(t)for(let u=0;u<e;u++)for(let f=0;f<e;f++)for(let d=0;d<e;d++)h(u,f,d);else{for(let u=0;u<e;u++)for(let f=0;f<e;f++)h(u,f,0),h(u,f,e-1);for(let u=0;u<e;u++)for(let f=1;f<e-1;f++)h(u,0,f),h(u,e-1,f);for(let u=1;u<e-1;u++)for(let f=1;f<e-1;f++)h(0,u,f),h(e-1,u,f)}return{N:e,alg:i,regulatedAlg:ic(e,r),simplifiedAlg:ic(e,Ao(e,r)),ops:r,cycles:l.map(u=>u.map(f=>f.p1)).filter(u=>u.length>1),rotates:l.filter(u=>u.length===1).map(u=>({unit:{position:u[0].p1,T:u[0].nT,F:u[0].nF},degree:u[0].rotation[1]})),permutations:l,order:Hp(l),getAllFacesColors:function(){return Xp(this)}}}function Xr(i,e){const[t,n,r]=i,s=[];return n===e-1&&s.push({face:"U",a:t,b:r}),r===e-1&&s.push({face:"F",a:t,b:e-1-n}),t===e-1&&s.push({face:"R",a:e-1-r,b:e-1-n}),t===0&&s.push({face:"L",a:r,b:e-1-n}),n===0&&s.push({face:"D",a:t,b:e-1-r}),r===0&&s.push({face:"B",a:e-1-t,b:e-1-n}),s}function vc(i,e){const t=(o,l,h=["U","F","R","L","B","D"])=>{if(o.length===0)return h;const u={U:0,D:0,F:0,B:0,L:0,R:0};for(const d of o)for(const g of Xr(d,l))u[g.face]++;const f=[...h].sort((d,g)=>u[g]-u[d])[0];return[f,...t(o.filter(d=>Xr(d,l).every(g=>g.face!==f)),l,h.filter(d=>d!==f))]},n=(o,l)=>{for(const h of l)for(const u of o)if(u.face===h)return u;throw new Error("unreachable")},r=(o,l,h)=>{const u=n(Xr(o,l),h),f=rc(l,o).find(d=>d[0]===u.face);return{point:o,facePoint:u,name:f}},s=t(i.map(o=>o.map(l=>l.p1)).flat(),e),a=[];for(const o of i){const l=t(o.map(h=>h.p1),e,[...s]);a.push(o.map(h=>({...h,p1:r(h.p1,e,l),p2:r(h.p2,e,l)})))}return a}function zh(i){return{U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]}[i]}function Wp(i){const[e,t,n]=i;if(e===-1)return"L";if(e===1)return"R";if(t===-1)return"D";if(t===1)return"U";if(n===-1)return"B";if(n===1)return"F";throw new Error("unreachable")}function Xp(i){const e={U:[],F:[],R:[],L:[],D:[],B:[]},t=(n,r,s)=>{let a=[0,0,0];switch(s){case"U":a=n;break;case"F":a=r;break;case"L":a=Ss(r,n);break;case"R":a=Ss(n,r);break;case"B":a=r.map(l=>-l);break;case"D":a=n.map(l=>-l);break}return Wp(a)};for(const n of i.permutations)for(const r of n){const s=Xr(r.p1,i.N),a=Xr(r.p2,i.N);for(const o of s){const l=t(r.nT,r.nF,o.face);if(l!==o.face){const h=a.find(u=>u.face===l);e[h.face].push({a:h.a,b:h.b,color:o.face})}}}return e}function qp(i,e,t,n,r,s,a){const o=i.createLinearGradient(e,t,n,r);o.addColorStop(0,"rgba(255, 255, 255, 0)"),o.addColorStop(.1,s),o.addColorStop(1,s),i.strokeStyle=o;var l=n-e,h=r-t,u=Math.atan2(h,l);i.moveTo(e,t),i.lineTo(n,r),i.lineTo(n-a*Math.cos(u-Math.PI/6),r-a*Math.sin(u-Math.PI/6)),i.moveTo(n,r),i.lineTo(n-a*Math.cos(u+Math.PI/6),r-a*Math.sin(u+Math.PI/6))}function Ys(i,e,t,n,r){i.moveTo(e,t),i.lineTo(e-r*Math.cos(n-Math.PI/6),t-r*Math.sin(n-Math.PI/6)),i.moveTo(e,t),i.lineTo(e-r*Math.cos(n+Math.PI/6),t-r*Math.sin(n+Math.PI/6))}function Yp(i,e,t,n,r,s){const a=i.createLinearGradient(e,t-s,e,t+s);a.addColorStop(0,"rgba(255, 255, 255, 0)"),a.addColorStop(.2,r),a.addColorStop(1,r),i.strokeStyle=r;const o=s/2;n===180?(i.beginPath(),i.arc(e,t,s,-Math.PI*.3,Math.PI*.5,!1),Ys(i,e,t+s,-Math.PI*1.1,o),i.stroke(),i.beginPath(),i.arc(e,t,s,Math.PI*.7,Math.PI*1.5,!1),Ys(i,e,t-s,-Math.PI*.1,o),i.stroke()):n>0?(i.arc(e,t,s,-Math.PI/2,Math.PI,!1),Ys(i,e-s,t,-Math.PI*.6,o)):n<0&&(i.arc(e,t,s,-Math.PI/2,0,!0),Ys(i,e+s,t,-Math.PI*.4,o))}class kh{constructor(){Mn(this,"palette",["rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(0, 128, 0)","rgb(255, 0, 255)","rgb(0, 128, 255)","rgb(255, 128, 0)","rgb(255, 128, 128)","rgb(255, 64, 192)","rgb(128, 128, 192)","rgb(240, 192, 57)","#3f6fbc","#ae7dbe","#d23d9e","#589cd1"]);Mn(this,"index",0)}nextColor(){const e=this.palette[this.index];return this.index=(this.index+1)%this.palette.length,e}}function $p(i,e){return i[0]*e[0]+i[1]*e[1]+i[2]*e[2]}function jp(i){const e=Math.sqrt($p(i,i));return e===0?i:i.map(t=>t/e)}function Kp(i,e){return i.map(t=>t*e)}function Zp(i,e){return i.map((t,n)=>t+e[n])}function Hh(i,e){return i.map((t,n)=>t-e[n])}function Jp(i){const e=~~i.clientWidth,t=~~i.clientHeight,n=2;return i.width!==e*n||i.height!==t*n?(i.width=e*n,i.height=t*n,!0):!1}function Gh(i){for(;i.firstChild;)i.removeChild(i.lastChild)}function Ql(...i){const e=[];for(let t=0;t+1<i.length;t+=2){const n=i[t].startsWith("*")?i[t].slice(1):i[t],r=!!i[t].startsWith("*"),s=i[t+1],a=document.createElement("span");a.style.color=n,r&&(a.style.fontWeight="700"),a.append(s),e.push(a)}return e}function Gn(i,e,t){const n=document.createElement(i);return e&&n.classList.add(...e.split(" ")),t&&(n.style.cssText=t),n}function fn(i,e){return Gn("div",i,e)}function Qt(i,e,t="",n="btn btn-outline-secondary"){const r=Gn("button",n);return r.textContent=i,t&&(r.title=t),r.onclick=e,r}function Qp(i,e,t){return`hsl(${(r=>{let s=9;for(let a=0;a<r.length;)s=Math.imul(s^r.charCodeAt(a++),387420489);return s^s>>>9})(i)%360}, ${e}%, ${t}%)`}function em(i,e,t){const n=i.parentElement,r=fn(e,t),s=i.style.display;return n.insertBefore(r,i),i.style.display="none",[r,()=>{r.remove(),i.style.display=s}]}function tm(i,e){const t=i.indexOf(e);return i[(t+1)%i.length]}function nm(i,e=0){const t=i.getImageData(0,0,i.canvas.width,i.canvas.height),{width:n,height:r}=i.canvas;let s=r,a=0,o=n,l=0;for(let h=0;h<r;h++){let u=!0;for(let f=0;f<n;f++){const d=(h*n+f)*4;if(t.data[d+3]>0){u=!1;break}}if(!u){s=h;break}}for(let h=r-1;h>=0;h--){let u=!0;for(let f=0;f<n;f++){const d=(h*n+f)*4;if(t.data[d+3]>0){u=!1;break}}if(!u){a=h+1;break}}for(let h=0;h<n;h++){let u=!0;for(let f=0;f<r;f++){const d=(f*n+h)*4;if(t.data[d+3]>0){u=!1;break}}if(!u){o=h;break}}for(let h=n-1;h>=0;h--){let u=!0;for(let f=0;f<r;f++){const d=(f*n+h)*4;if(t.data[d+3]>0){u=!1;break}}if(!u){l=h+1;break}}return s=Math.max(0,s-e),a=Math.min(r,a+e),o=Math.max(0,o-e),l=Math.min(n,l+e),{top:s,bottom:a,left:o,right:l}}function im(i,e=0){const t=i.canvas,n=t.width,r=t.height,s=new Uint8Array(n*r*4);i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,s);let a=r,o=0,l=n,h=0;for(let u=0;u<r;u++){let f=!0;for(let d=0;d<n;d++){const g=(u*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){a=u;break}}for(let u=r-1;u>=0;u--){let f=!0;for(let d=0;d<n;d++){const g=(u*n+d)*4;if(s[g+3]>0){f=!1;break}}if(!f){o=u+1;break}}for(let u=0;u<n;u++){let f=!0;for(let d=0;d<r;d++){const g=(d*n+u)*4;if(s[g+3]>0){f=!1;break}}if(!f){l=u;break}}for(let u=n-1;u>=0;u--){let f=!0;for(let d=0;d<r;d++){const g=(d*n+u)*4;if(s[g+3]>0){f=!1;break}}if(!f){h=u+1;break}}return a=Math.max(0,a-e),o=Math.min(r,o+e),l=Math.max(0,l-e),h=Math.min(n,h+e),{top:a,bottom:o,left:l,right:h}}function rm(i,e,t,n,r){const s=document.createElement("canvas");return s.width=r-n,s.height=t-e,s.getContext("2d").drawImage(i.canvas,n,e,r-n,t-e,0,0,r-n,t-e),s.toDataURL("image/png")}function sm(i,e,t,n,r){const s=r-n,a=t-e,o=new Uint8Array(s*a*4);i.readPixels(n,e,s,a,i.RGBA,i.UNSIGNED_BYTE,o);const l=new Uint8Array(s*a*4);for(let d=0;d<a;d++){const g=d*s*4,v=(a-d-1)*s*4;l.set(o.subarray(g,g+s*4),v)}for(let d=0;d<l.length;d+=4){const g=l[d+3]/255;g>0&&(l[d]=l[d]/g,l[d+1]=l[d+1]/g,l[d+2]=l[d+2]/g)}const h=document.createElement("canvas");h.width=s,h.height=a;const u=h.getContext("2d"),f=new ImageData(new Uint8ClampedArray(l),s,a);return u.putImageData(f,0,0),h.toDataURL("image/png")}function om(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=nm(i);n=rm(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");Vh(n,e)}function am(i,e,t=!1){let n="";if(t){const{top:r,bottom:s,left:a,right:o}=im(i);n=sm(i,r,s,a,o)}else n=i.canvas.toDataURL("image/png");Vh(n,e)}function Vh(i,e){const t=document.createElement("a");t.href=i,t.download=e,t.click()}const cm=[{name:"c3s",algorithm:"iL iF jD iF' U iF jD' iF' U' iL'",tags:["atom"],desc:"3-cycle on single face centers",validateParam:(i,e)=>{i<4&&(i=4);const t=$s(e[0]||0,2,~~(i/2)),n=$s(e[1]||0,2,~~((i+1)/2));return{n:i,param:[t,n]}}},{name:"SwapEdge",algorithm:"iR2 B2 U2 iL U2 iR' U2 iR U2 F2 iR F2 iL' B2 iR2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=$s(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge2",algorithm:"iB2 D' iR' U' iU iR U' iR U iR iU' iR' iU iR U iR U' iR U' iU' iR' U2 D iB2",tags:["atom"],validateParam:(i,e)=>{i<4&&(i=4);const t=$s(e[0]||0,2,1/0);return{n:i,param:[t]}}},{name:"SwapEdge4x4x4",algorithm:"2R' U' 2U 2R U' 2R U 2R 2U' 2R' 2U 2R U 2R U' 2R 1-2U' 2R' U2",tags:["atom"],validateParam:(i,e)=>({n:4,param:[]})}],lm=`
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

`,os=[];function sc(){var e,t;if(os.length!==0)return os;os.push(...cm);let i=[];for(const n of lm.split(/\n/g)){const r=n.match(/^\[(.*)\]$/);if(r){i=r[1].split(",").map(a=>a.trim());continue}const s=n.match(/^(\[([^)]+)\])?\s*([^:]+)\s*:\s*(.*)$/);if(s){const a=((e=s[2])==null?void 0:e.split(",").map(h=>h.trim()))||[],o=s[3],l=s[4].split("//");os.push({name:o,algorithm:l[0].trim(),tags:[...i,...a],desc:(t=l[1])==null?void 0:t.trim()})}}return os}function xc(i){const e=[];for(const t of i)t.match(/[a-z]/i)&&!t.match(/[xyzMESmesLRFBUDlrfbudhw]/)&&e.indexOf(t)<0&&e.push(t);return e}function um(i,e){const t=xc(i);for(let n=0;n<t.length&&n<e.length;n++)i=i.replaceAll(t[n],e[n]);return i}function eu(i,e,t){if(i.startsWith(e)){const n=i.indexOf(t,e.length);if(n>=0)return i.slice(e.length,n)}}function Wh(i,e,t){for(let s="";s!==i;){s=i;const a=i.indexOf("$");if(a<0)break;let o,l=eu(i.slice(a+1),"{","}");if(l)o=a+1+l.length+2;else{const h=i.slice(a+1).match(/^[A-Za-z0-9_.]+/);h&&(l=h[0],o=a+1+l.length)}if(l&&o){const h=sc().find(u=>u.name.toLowerCase()===l.toLowerCase());if(!h)throw new Error(`alg name '${l}' not found`);if(h){let u=h.algorithm,f=eu(i.slice(o),"(",")");f&&(o+=f.length+2,u=um(u,f.split(",").map(d=>d.trim()))),i=i.slice(0,a)+"("+u+")"+i.slice(o)}}}const n=[...e],r=xc(i);for(let s=n.length;s<r.length;s++)n.push("1");n.length=r.length;for(let s=0;s<r.length;s++)i=i.replaceAll(r[s],n[s]);return i=i.replaceAll("h",`${~~(t/2)}`),{resolvedAlgorithm:i,actualParamValues:n}}function $s(i,e,t){return i<e&&(i=e),i>t&&(i=t),i}function hm(i,e,t,n=!0){const r=performance.now(),s=t.getContext("2d");s.reset(),s.clearRect(0,0,t.width,t.height);const[a,o]=[10,10];s.translate(a,o),s.lineCap="round",s.lineJoin="round",s.lineWidth=3;const h={"1 face":fm,"3 faces":dm,"5 faces":pm,"6 faces":mm,"6 faces 2":gm}[i](t.width-a*2,t.height-o*2,e);_m(e,s,h,n),console.log("r2d render time",performance.now()-r)}function Xh(i){const e=vc(i.permutations,i.N),t={U:0,F:0,R:0,L:0,D:0,B:0};for(const n of e)for(const r of n)t[r.p1.facePoint.face]++;return t}function rn(i,e,t,n=t){return[[i,e],[i+t,e],[i+t,e+n],[i,e+n]]}function fm(i,e,t){const n=Math.floor(Math.min(i/17,e/14)),r=n*14,s=n*2,a=Xh(t);return["U","F","R","L","D","B"].sort((l,h)=>a[h]-a[l]).map((l,h)=>({name:l,priority:6-h,shape:h===0?rn(0,0,r):rn(r+n,(h-1)*3*n,s)}))}function dm(i,e,t){const n=Math.floor(Math.min(i/2.25,e/2)),r=n/4,s=(d,g)=>{if(d===0)return[n,n];const v=d%2===g?n*.9:n,y=Math.PI/6+Math.PI/3*(d-1);return[n+v*Math.cos(y),n-v*Math.sin(y)]},a=Xh(t),o=(a.U>=a.D?"U":"D")+(a.F>=a.B?"F":"B")+(a.R>=a.L?"R":"L");function l(d){switch(d){case"UFR":return["U",[2,1,0,3],"R",[0,1,6,5],"F",[3,0,5,4],"L","D","B"];case"UFL":return["U",[3,2,1,0],"F",[0,1,6,5],"L",[3,0,5,4],"B","D","R"];case"UBL":return["U",[0,3,2,1],"L",[0,1,6,5],"B",[3,0,5,4],"R","D","F"];case"UBR":return["U",[1,0,3,2],"B",[0,1,6,5],"R",[3,0,5,4],"F","D","L"];case"DFR":return["D",[4,0,6,5],"R",[2,1,6,0],"F",[3,2,0,4],"U","L","B"];case"DFL":return["D",[5,4,0,6],"F",[2,1,6,0],"L",[3,2,0,4],"U","B","R"];case"DBL":return["D",[6,5,4,0],"L",[2,1,6,0],"B",[3,2,0,4],"U","R","F"];case"DBR":return["D",[0,6,5,4],"B",[2,1,6,0],"R",[3,2,0,4],"U","F","L"]}throw new Error("invalid key")}const h=l(o),u=h[0]==="U"?0:1;return[{name:h[0],priority:6,shape:h[1].map(d=>s(d,u))},{name:h[2],priority:5,shape:h[3].map(d=>s(d,u))},{name:h[4],priority:4,shape:h[5].map(d=>s(d,u))},{name:h[6],priority:-1,shape:rn(0,0,r)},{name:h[7],priority:-2,shape:rn(0,2*n-r,r)},{name:h[8],priority:-3,shape:rn(2*n,n-r/2,r)}]}function pm(i,e,t){const[n,r,s,a]=[.5,.5,.5,.5],o=100,l=Math.floor(Math.min((i-o-20)/(1+n+r),e/(1+s+a))),h=[0,0],u=[l*(1+n+r),0],f=[l*(1+n+r),l*(1+s+a)],d=[0,l*(1+s+a)],g=[l*n,l*s],v=[l*(1+n),l*s],y=[l*(1+n),l*(1+s)],p=[l*n,l*(1+s)];return[{name:"U",priority:6,shape:[g,v,y,p]},{name:"F",priority:5,shape:[p,y,f,d]},{name:"R",priority:4,shape:[y,v,u,f]},{name:"L",priority:3,shape:[g,p,d,h]},{name:"B",priority:2,shape:[v,g,h,u]},{name:"D",priority:-1,shape:rn(l*(1+n+r)+20,0,o,o)}]}function mm(i,e,t){const n=Math.floor(Math.min(i/4,e/3));return[{name:"U",priority:6,shape:rn(n,0,n)},{name:"F",priority:5,shape:rn(n,n,n)},{name:"R",priority:4,shape:rn(2*n,n,n)},{name:"L",priority:3,shape:rn(0,n,n)},{name:"D",priority:2,shape:rn(n,2*n,n)},{name:"B",priority:-1,shape:rn(3*n,n,n)}]}function gm(i,e,t){const s=Math.floor(Math.min(i/3.5,e/2.5))-2;return[{name:"U",priority:4,shape:[[s+.5*s,0],[2*s+.5*s,0],[2*s,s*.5],[s,s*.5]]},{name:"R",priority:5,shape:[[2*s,s*.5],[2*s+.5*s,0],[2*s+.5*s,s],[2*s,s+s*.5]]},{name:"F",priority:6,shape:rn(s,s*.5,s)},{name:"L",priority:3,shape:rn(0,s*.5,s)},{name:"D",priority:2,shape:rn(s,s+s*.5,s)},{name:"B",priority:-1,shape:rn(2*s+.5*s,0,s)}]}function _m(i,e,t,n=!0){const r=i.N,s=(v,y,p,m)=>{const R={U:"hsl(60, 100%, 90%)",F:"hsl(0, 100%, 90%)",R:"hsl(120, 100%, 85%)",B:"hsl(23, 100%, 90%)",L:"hsl(240, 100%, 90%)",D:"hsl(120, 100%, 100%)"},E=(M,C,j)=>{const ee=[M];for(let O=1;O<j;O++)ee.push([M[0]+O*(C[0]-M[0])/j,M[1]+O*(C[1]-M[1])/j]);return ee.push(C),ee},A=M=>M.reduce((j,ee,O,Q)=>[j[0]+ee[0],j[1]+ee[1]],[0,0]).map(j=>j/M.length);e.fillStyle=R[v],e.beginPath(),y.forEach((M,C)=>{C===0?e.moveTo(...M):e.lineTo(...M)}),e.closePath(),e.fill();const I=E(y[0],y[3],r),U=E(y[0],y[1],r),w=E(y[1],y[2],r),z=E(y[3],y[2],r);for(let M=0;M<=r;M++)e.beginPath(),e.moveTo(I[M][0],I[M][1]),e.lineTo(w[M][0],w[M][1]),e.moveTo(U[M][0],U[M][1]),e.lineTo(z[M][0],z[M][1]),e.stroke();const J=[];for(let M=0;M<U.length;M++)J.push(E(U[M],z[M],r));for(let M=0;M<r;M++)for(let C=0;C<r;C++){const j=`${v}-${M}-${C}`,ee=A([J[M][C],J[M][C+1],J[M+1][C+1],J[M+1][C]]);m[j]=ee}for(const{a:M,b:C,color:j}of p){e.fillStyle=R[j];const ee=[J[M][C],J[M][C+1],J[M+1][C+1],J[M+1][C]];e.beginPath(),e.moveTo(...ee[0]),e.lineTo(...ee[1]),e.lineTo(...ee[2]),e.lineTo(...ee[3]),e.closePath(),e.fill(),e.stroke()}};e.lineCap="round",e.lineJoin="round",e.lineWidth=9/r;const a=i.getAllFacesColors(),o={};for(const v of t)s(v.name,v.shape,a[v.name],o);const l=new kh;e.shadowColor="rgba(0, 0, 0, .4)",e.shadowBlur=15,e.lineWidth=5;const h=v=>{const y=l.nextColor();for(let p=0;p<v.length;p++){const m=p===v.length-1?0:p+1,[R,E]=v[p],[A,I]=v[m];e.beginPath(),qp(e,R,E,A,I,y,20),e.stroke()}},u=(v,y)=>{const p=l.nextColor(),[m,R]=v;e.beginPath(),Yp(e,m,R,y,p,20),e.stroke()},f=(v,y)=>v.every(p=>p.facePoint.face===v[0].facePoint.face&&p.facePoint.a>0&&p.facePoint.a<y-1&&p.facePoint.b>0&&p.facePoint.b<y-1),d=vc(i.permutations,i.N),g=v=>`${v.face}-${v.a}-${v.b}`;for(const v of d)if(!(!n&&f(v.map(y=>y.p1),r)))if(v.length>1){const y=v.map(p=>o[g(p.p1.facePoint)]);h(y)}else{const y=v[0],p=o[g(y.p1.facePoint)];u(p,y.rotation[1])}}function _n(i,e,t){const[n,r,s]=i,a=(t%360+360)%360,o=a===90?1:a===270?-1:0,l=a===0?1:a===180?-1:0,u=[[1,0,0,0,l,-o,0,o,l],[l,0,o,0,1,0,-o,0,l],[l,-o,0,o,l,0,0,0,1]][e];return[u[0]*n+u[1]*r+u[2]*s,u[3]*n+u[4]*r+u[5]*s,u[6]*n+u[7]*r+u[8]*s]}function qh(i,e,t,n){return[i+n-e,e-t+i]}function Yh(i,e,t,n){return[i-n+e,e+t-i]}function wo(i,e,t){return[i[0]+e,i[1]+t]}function bn(i,e,t,n){const r=e[1]-i[1],s=i[0]-e[0],a=i[0]*r+i[1]*s,o=n[1]-t[1],l=t[0]-n[0],h=t[0]*o+t[1]*l,u=r*l-s*o;return u==0?i:[(a*l-h*s)/u,(r*h-o*a)/u]}function vm(i,e,t,n){const[r,s,a]=[e[0]- -i/2,e[1]-i/2,e[2]-i/2],[o,l,h]=[e,t,n].map(d=>[d[0]-r,d[1]-s,d[2]-a]),u=xm(i,o,l,h),f=[];for(let d=0;d<u.length;d++){const[g,v,y]=u[d],[p,m,R]=l,[E,A,I]=h;g===p&&v===m&&y===R||g===E&&v===A&&y===I||f.push(u[d])}return f.map(d=>[d[0]+r,d[1]+s,d[2]+a])}function xm(i,e,t,n){const r=i/2;let s=[0,0];if(t[0]===r&&(s=[1,-90]),t[0]===-r&&(s=[1,90]),t[1]===r&&(s=[0,90]),t[1]===-r&&(s=[0,-90]),t[2]===r&&(s=[2,0]),t[2]===-r&&(s=[0,180]),t=_n(t,s[0],s[1]),n=_n(n,s[0],s[1]),n[2]===-r)return Mm(i,e,t,n).map(h=>_n(h,s[0],-s[1]));if(n[2]===r)return[];let a=[2,0];return n[0]===r&&(a=[2,90]),n[0]===-r&&(a=[2,-90]),n[1]===-r&&(a=[2,180]),t=_n(t,a[0],a[1]),n=_n(n,a[0],a[1]),ym(i,e,t,n).map(l=>_n(l,a[0],-a[1])).map(l=>_n(l,s[0],-s[1]))}function ym(i,e,t,n){const[r,s]=[e[0],e[1]],[a,o]=[e[0]+i,e[1]],[l,h]=[t[0],t[1]],[u,f]=[n[0],e[1]+e[2]-n[2]];if(f===h)return[];const d=(r+a)/2,g=s+i/2,v=wo(Yh(d,g,u,f),-i,0),y=wo(qh(d,g,u,f),i,0),p=(I,U,w,z)=>(w-I)*(w-I)+(z-U)*(z-U),m=p(l,h,u,f),R=p(l,h,...v),E=p(l,h,...y),A=Math.min(m,R,E);if(A===m)return[[bn([r,s],[a,o],[l,h],[u,f])[0],s,e[2]]];if(A===R){const I=bn([r,s],[r,s+1],[l,h],v),U=bn([r,s],[a,o],[l,h],v);return[[r,I[1],e[2]],[r,s,e[2]-(r-U[0])]]}else if(A===E){const I=bn([a,o],[a,o+1],[l,h],y),U=bn([r,s],[a,o],[l,h],y);return[[a,I[1],e[2]],[a,o,e[2]-(U[0]-a)]]}return[]}function js(i,e,t,n){const[r,s,a]=e,[o,l,h]=[r+i,s,a],[u,f]=[t[0],t[1]],[d,g]=[n[0],e[1]+i+s-n[1]],v=[u,f],y=[d,g],p=[r,s],m=[o,l],R=(r+o)/2,E=s+i+i/2,A=wo(Yh(R,E,d,g),-i,0),I=wo(qh(R,E,d,g),i,0),U=(w,z,J,M)=>(J-w)*(J-w)+(M-z)*(M-z);return[{distance:U(...v,...A),pathFunc:()=>{const w=bn(v,A,p,m),z=bn(v,A,p,[r,s+1]),J=bn(v,A,[r,s+i],[o,l+i]);return[[w[0],s,a],[r,s,a-(z[1]-s)],[r,s-(r-J[0]),a-i]]}},{distance:U(...v,...y),pathFunc:()=>{const w=bn(v,y,p,m),z=bn(v,y,[r,s+i],[o,l+i]);return[[w[0],s,a],[z[0],s,a-i]]}},{distance:U(...v,...I),pathFunc:()=>{const w=bn(v,I,p,m),z=bn(v,I,m,[o,l+1]),J=bn(v,I,[r,s+i],[o,l+i]);return[[w[0],l,h],[o,l,h-(z[1]-l)],[o,l-(J[0]-o),h-i]]}}]}function Mm(i,e,t,n){const r=[...js(i,e,t,n),...js(i,e,_n(t,2,90),_n(n,2,90)),...js(i,e,_n(t,2,180),_n(n,2,180)),...js(i,e,_n(t,2,270),_n(n,2,270))],s=Math.min(...r.map(l=>l.distance)),a=r.findIndex(l=>l.distance===s);return r[a].pathFunc().map(l=>_n(l,2,-90*~~(a/3)))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="162",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sm=0,tu=1,Em=2,bm=0,$h=1,Tm=2,fi=3,Di=0,vn=1,Zn=2,Li=0,qr=1,nu=2,iu=3,ru=4,Am=5,Ji=100,wm=101,Rm=102,su=103,ou=104,Cm=200,Lm=201,Pm=202,Um=203,oc=204,ac=205,Dm=206,Im=207,Nm=208,Om=209,Fm=210,Bm=211,zm=212,km=213,Hm=214,Gm=0,Vm=1,Wm=2,Ro=3,Xm=4,qm=5,Ym=6,$m=7,jh=0,jm=1,Km=2,Pi=0,Zm=1,Jm=2,Qm=3,eg=4,tg=5,ng=6,ig=7,Kh=300,$r=301,jr=302,cc=303,lc=304,zo=306,uc=1e3,Vn=1001,hc=1002,dn=1003,au=1004,as=1005,gn=1006,ma=1007,tr=1008,Ui=1009,rg=1010,sg=1011,Mc=1012,Zh=1013,Ci=1014,pi=1015,bs=1016,Jh=1017,Qh=1018,ir=1020,og=1021,Wn=1023,ag=1024,cg=1025,rr=1026,Kr=1027,lg=1028,ef=1029,ug=1030,tf=1031,nf=1033,ga=33776,_a=33777,va=33778,xa=33779,cu=35840,lu=35841,uu=35842,hu=35843,rf=36196,fu=37492,du=37496,pu=37808,mu=37809,gu=37810,_u=37811,vu=37812,xu=37813,yu=37814,Mu=37815,Su=37816,Eu=37817,bu=37818,Tu=37819,Au=37820,wu=37821,ya=36492,Ru=36494,Cu=36495,hg=36283,Lu=36284,Pu=36285,Uu=36286,fg=3200,dg=3201,pg=0,mg=1,Ri="",jn="srgb",Ni="srgb-linear",Sc="display-p3",ko="display-p3-linear",Co="linear",Lt="srgb",Lo="rec709",Po="p3",Mr=7680,Du=519,gg=512,_g=513,vg=514,sf=515,xg=516,yg=517,Mg=518,Sg=519,Iu=35044,Nu="300 es",fc=1035,mi=2e3,Uo=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ou=1234567;const ms=Math.PI/180,Ts=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Ec(i,e){return(i%e+e)%e}function Eg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bg(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function Tg(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function Ag(i,e=1){return e-Math.abs(Ec(i,e*2)-e)}function wg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lg(i,e){return i+Math.random()*(e-i)}function Pg(i){return i*(.5-Math.random())}function Ug(i){i!==void 0&&(Ou=i);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dg(i){return i*ms}function Ig(i){return i*Ts}function dc(i){return(i&i-1)===0&&i!==0}function Ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Do(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Og(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),g=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*h);break;case"YZY":i.set(l*d,o*u,l*f,o*h);break;case"ZXZ":i.set(l*f,l*d,o*u,o*h);break;case"XZX":i.set(o*u,l*v,l*g,o*h);break;case"YXY":i.set(l*g,o*u,l*v,o*h);break;case"ZYZ":i.set(l*v,l*g,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:ms,RAD2DEG:Ts,generateUUID:Jr,clamp:jt,euclideanModulo:Ec,mapLinear:Eg,inverseLerp:bg,lerp:gs,damp:Tg,pingpong:Ag,smoothstep:wg,smootherstep:Rg,randInt:Cg,randFloat:Lg,randFloatSpread:Pg,seededRandom:Ug,degToRad:Dg,radToDeg:Ig,isPowerOfTwo:dc,ceilPowerOfTwo:Ng,floorPowerOfTwo:Do,setQuaternionFromProperEuler:Og,normalize:un,denormalize:zr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,r,s,a,o,l,h){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,h)}set(e,t,n,r,s,a,o,l,h){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],f=n[7],d=n[2],g=n[5],v=n[8],y=r[0],p=r[3],m=r[6],R=r[1],E=r[4],A=r[7],I=r[2],U=r[5],w=r[8];return s[0]=a*y+o*R+l*I,s[3]=a*p+o*E+l*U,s[6]=a*m+o*A+l*w,s[1]=h*y+u*R+f*I,s[4]=h*p+u*E+f*U,s[7]=h*m+u*A+f*w,s[2]=d*y+g*R+v*I,s[5]=d*p+g*E+v*U,s[8]=d*m+g*A+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*s*u+n*o*l+r*s*h-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],f=u*a-o*h,d=o*l-u*s,g=h*s-a*l,v=t*f+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*h-u*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=g*y,e[7]=(n*l-h*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-r*h,r*l,-r*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new st;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bg(){const i=Io("canvas");return i.style.display="block",i}const Fu={};function zg(i){i in Fu||(Fu[i]=!0,console.warn(i))}const Bu=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[Ni]:{transfer:Co,primaries:Lo,toReference:i=>i,fromReference:i=>i},[jn]:{transfer:Lt,primaries:Lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ko]:{transfer:Co,primaries:Po,toReference:i=>i.applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Bu)},[Sc]:{transfer:Lt,primaries:Po,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Bu).convertLinearToSRGB()}},kg=new Set([Ni,ko]),St={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ks[e].toReference,r=Ks[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ks[i].primaries},getTransfer:function(i){return i===Ri?Co:Ks[i].transfer}};function Yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Io("canvas")),Sr.width=e.width,Sr.height=e.height;const n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hg=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ea(r[a].image)):s.push(Ea(r[a]))}else s=Ea(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class pn extends ar{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Vn,r=Vn,s=gn,a=tr,o=Wn,l=Ui,h=pn.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Jr(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Kh;pn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,h=l[0],u=l[4],f=l[8],d=l[1],g=l[5],v=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+p)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,A=(g+1)/2,I=(m+1)/2,U=(u+d)/4,w=(f+y)/4,z=(v+p)/4;return E>A&&E>I?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=U/n,s=w/n):A>I?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=U/r,s=z/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=w/s,r=z/s),this.set(n,r,s,t),this}let R=Math.sqrt((p-v)*(p-v)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-v)/R,this.y=(f-y)/R,this.z=(d-u)/R,this.w=Math.acos((h+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vg extends ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new pn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Vg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lf extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wg extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],h=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],g=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=y;return}if(f!==y||l!==d||h!==g||u!==v){let p=1-o;const m=l*d+h*g+u*v+f*y,R=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const I=Math.sqrt(E),U=Math.atan2(I,m*R);p=Math.sin(p*U)/I,o=Math.sin(o*U)/I}const A=o*R;if(l=l*p+d*A,h=h*p+g*A,u=u*p+v*A,f=f*p+y*A,p===1-o){const I=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=I,h*=I,u*=I,f*=I}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],h=n[r+2],u=n[r+3],f=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*g-h*d,e[t+1]=l*v+u*d+h*f-o*g,e[t+2]=h*v+u*g+o*d-l*f,e[t+3]=u*v-o*f-l*d-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+h*g*v,this._y=h*g*f-d*u*v,this._z=h*u*v+d*g*f,this._w=h*u*f-d*g*v;break;case"YXZ":this._x=d*u*f+h*g*v,this._y=h*g*f-d*u*v,this._z=h*u*v-d*g*f,this._w=h*u*f+d*g*v;break;case"ZXY":this._x=d*u*f-h*g*v,this._y=h*g*f+d*u*v,this._z=h*u*v+d*g*f,this._w=h*u*f-d*g*v;break;case"ZYX":this._x=d*u*f-h*g*v,this._y=h*g*f+d*u*v,this._z=h*u*v-d*g*f,this._w=h*u*f+d*g*v;break;case"YZX":this._x=d*u*f+h*g*v,this._y=h*g*f+d*u*v,this._z=h*u*v-d*g*f,this._w=h*u*f-d*g*v;break;case"XZY":this._x=d*u*f-h*g*v,this._y=h*g*f-d*u*v,this._z=h*u*v+d*g*f,this._w=h*u*f+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-h)*g,this._z=(a-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+h)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(s-h)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-r)/g,this._x=(s+h)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+r*h-s*l,this._y=r*u+a*l+s*o-n*h,this._z=s*u+a*h+n*l-r*o,this._w=a*u-n*o-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*h+a*f-o*u,this.y=n+l*u+o*h-s*f,this.z=r+l*f+s*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new F,ku=new or;class ws{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Js.subVectors(this.max,cs),Er.subVectors(e.a,cs),br.subVectors(e.b,cs),Tr.subVectors(e.c,cs),yi.subVectors(br,Er),Mi.subVectors(Tr,br),Xi.subVectors(Er,Tr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!Ta(t,Er,br,Tr,Js)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Er,br,Tr,Js))?!1:(Qs.crossVectors(yi,Mi),t=[Qs.x,Qs.y,Qs.z],Ta(t,Er,br,Tr,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Zs=new ws,Er=new F,br=new F,Tr=new F,yi=new F,Mi=new F,Xi=new F,cs=new F,Js=new F,Qs=new F,qi=new F;function Ta(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){qi.fromArray(i,s);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),h=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const Xg=new ws,ls=new F,Aa=new F;class bc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Aa)),this.expandByPoint(ls.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new F,wa=new F,eo=new F,Si=new F,Ra=new F,to=new F,Ca=new F;class uf{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wa.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(wa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=Si.dot(this.direction),l=-Si.dot(eo),h=Si.lengthSq(),u=Math.abs(1-a*a);let f,d,g,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const y=1/u;f*=y,d*=y,g=f*(f+a*d+2*o)+d*(a*f+d+2*l)+h}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+h;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+h;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+h):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+h):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+h);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wa).addScaledVector(eo,d),g}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){Ra.subVectors(t,e),to.subVectors(n,e),Ca.crossVectors(Ra,to);let a=this.direction.dot(Ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(Si,to));if(l<0)return null;const h=o*this.direction.dot(Ra.cross(Si));if(h<0||l+h>a)return null;const u=-o*Si.dot(Ca);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,r,s,a,o,l,h,u,f,d,g,v,y,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,h,u,f,d,g,v,y,p)}set(e,t,n,r,s,a,o,l,h,u,f,d,g,v,y,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=d,m[3]=g,m[7]=v,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,g=a*f,v=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=h,t[1]=g+v*h,t[5]=d-y*h,t[9]=-o*l,t[2]=y-d*h,t[6]=v+g*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,g=l*f,v=h*u,y=h*f;t[0]=d+y*o,t[4]=v*o-g,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=g*o-v,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,g=l*f,v=h*u,y=h*f;t[0]=d-y*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,g=a*f,v=o*u,y=o*f;t[0]=l*u,t[4]=v*h-g,t[8]=d*h+y,t[1]=l*f,t[5]=y*h+d,t[9]=g*h-v,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*h,v=o*l,y=o*h;t[0]=l*u,t[4]=y-d*f,t[8]=v*f+g,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=g*f+v,t[10]=d-y*f}else if(e.order==="XZY"){const d=a*l,g=a*h,v=o*l,y=o*h;t[0]=l*u,t[4]=-f,t[8]=h*u,t[1]=d*f+y,t[5]=a*u,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*u,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qg,e,Yg)}lookAt(e,t,n){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ei.crossVectors(n,Sn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ei.crossVectors(n,Sn)),Ei.normalize(),no.crossVectors(Sn,Ei),r[0]=Ei.x,r[4]=no.x,r[8]=Sn.x,r[1]=Ei.y,r[5]=no.y,r[9]=Sn.y,r[2]=Ei.z,r[6]=no.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],f=n[5],d=n[9],g=n[13],v=n[2],y=n[6],p=n[10],m=n[14],R=n[3],E=n[7],A=n[11],I=n[15],U=r[0],w=r[4],z=r[8],J=r[12],M=r[1],C=r[5],j=r[9],ee=r[13],O=r[2],Q=r[6],q=r[10],oe=r[14],D=r[3],re=r[7],te=r[11],de=r[15];return s[0]=a*U+o*M+l*O+h*D,s[4]=a*w+o*C+l*Q+h*re,s[8]=a*z+o*j+l*q+h*te,s[12]=a*J+o*ee+l*oe+h*de,s[1]=u*U+f*M+d*O+g*D,s[5]=u*w+f*C+d*Q+g*re,s[9]=u*z+f*j+d*q+g*te,s[13]=u*J+f*ee+d*oe+g*de,s[2]=v*U+y*M+p*O+m*D,s[6]=v*w+y*C+p*Q+m*re,s[10]=v*z+y*j+p*q+m*te,s[14]=v*J+y*ee+p*oe+m*de,s[3]=R*U+E*M+A*O+I*D,s[7]=R*w+E*C+A*Q+I*re,s[11]=R*z+E*j+A*q+I*te,s[15]=R*J+E*ee+A*oe+I*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],u=e[2],f=e[6],d=e[10],g=e[14],v=e[3],y=e[7],p=e[11],m=e[15];return v*(+s*l*f-r*h*f-s*o*d+n*h*d+r*o*g-n*l*g)+y*(+t*l*g-t*h*d+s*a*d-r*a*g+r*h*u-s*l*u)+p*(+t*h*f-t*o*g-s*a*f+n*a*g+s*o*u-n*h*u)+m*(-r*o*u-t*l*f+t*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],f=e[9],d=e[10],g=e[11],v=e[12],y=e[13],p=e[14],m=e[15],R=f*p*h-y*d*h+y*l*g-o*p*g-f*l*m+o*d*m,E=v*d*h-u*p*h-v*l*g+a*p*g+u*l*m-a*d*m,A=u*y*h-v*f*h+v*o*g-a*y*g-u*o*m+a*f*m,I=v*f*l-u*y*l-v*o*d+a*y*d+u*o*p-a*f*p,U=t*R+n*E+r*A+s*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/U;return e[0]=R*w,e[1]=(y*d*s-f*p*s-y*r*g+n*p*g+f*r*m-n*d*m)*w,e[2]=(o*p*s-y*l*s+y*r*h-n*p*h-o*r*m+n*l*m)*w,e[3]=(f*l*s-o*d*s-f*r*h+n*d*h+o*r*g-n*l*g)*w,e[4]=E*w,e[5]=(u*p*s-v*d*s+v*r*g-t*p*g-u*r*m+t*d*m)*w,e[6]=(v*l*s-a*p*s-v*r*h+t*p*h+a*r*m-t*l*m)*w,e[7]=(a*d*s-u*l*s+u*r*h-t*d*h-a*r*g+t*l*g)*w,e[8]=A*w,e[9]=(v*f*s-u*y*s-v*n*g+t*y*g+u*n*m-t*f*m)*w,e[10]=(a*y*s-v*o*s+v*n*h-t*y*h-a*n*m+t*o*m)*w,e[11]=(u*o*s-a*f*s-u*n*h+t*f*h+a*n*g-t*o*g)*w,e[12]=I*w,e[13]=(u*y*r-v*f*r+v*n*d-t*y*d-u*n*p+t*f*p)*w,e[14]=(v*o*r-a*y*r-v*n*l+t*y*l+a*n*p-t*o*p)*w,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,h=s*a,u=s*o;return this.set(h*a+n,h*o-r*l,h*l+r*o,0,h*o+r*l,u*o+n,u*l-r*a,0,h*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,u=a+a,f=o+o,d=s*h,g=s*u,v=s*f,y=a*u,p=a*f,m=o*f,R=l*h,E=l*u,A=l*f,I=n.x,U=n.y,w=n.z;return r[0]=(1-(y+m))*I,r[1]=(g+A)*I,r[2]=(v-E)*I,r[3]=0,r[4]=(g-A)*U,r[5]=(1-(d+m))*U,r[6]=(p+R)*U,r[7]=0,r[8]=(v+E)*w,r[9]=(p-R)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const h=1/s,u=1/a,f=1/o;return Bn.elements[0]*=h,Bn.elements[1]*=h,Bn.elements[2]*=h,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mi){const l=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let g,v;if(o===mi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Uo)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mi){const l=this.elements,h=1/(t-e),u=1/(n-r),f=1/(a-s),d=(t+e)*h,g=(n+r)*u;let v,y;if(o===mi)v=(a+s)*f,y=-2*f;else if(o===Uo)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new F,Bn=new Ot,qg=new F(0,0,0),Yg=new F(1,1,1),Ei=new F,no=new F,Sn=new F,Hu=new Ot,Gu=new or;class gi{constructor(e=0,t=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],u=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const Vu=new F,wr=new or,li=new Ot,io=new F,us=new F,jg=new F,Kg=new or,Wu=new F(1,0,0),Xu=new F(0,1,0),qu=new F(0,0,1),Zg={type:"added"},Jg={type:"removed"},La={type:"childadded",child:null},Pa={type:"childremoved",child:null};class sn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new F,t=new gi,n=new or,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(us,io,this.up):li.lookAt(io,us,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(li),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),La.child=e,this.dispatchEvent(La),La.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jg),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const f=l[h];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}sn.DEFAULT_UP=new F(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,ui=new F,Ua=new F,hi=new F,Rr=new F,Cr=new F,Yu=new F,Da=new F,Ia=new F,Na=new F;class Jn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),ui.subVectors(n,t),Ua.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(ui),l=zn.dot(Ua),h=ui.dot(ui),u=ui.dot(Ua),f=a*h-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(h*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),ui.subVectors(e,t),zn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,n),Cr.subVectors(s,n),Da.subVectors(e,n);const l=Rr.dot(Da),h=Cr.dot(Da);if(l<=0&&h<=0)return t.copy(n);Ia.subVectors(e,r);const u=Rr.dot(Ia),f=Cr.dot(Ia);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*h;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Rr,a);Na.subVectors(e,s);const g=Rr.dot(Na),v=Cr.dot(Na);if(v>=0&&g<=v)return t.copy(s);const y=g*h-l*v;if(y<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(Cr,o);const p=u*v-g*f;if(p<=0&&f-u>=0&&g-v>=0)return Yu.subVectors(s,r),o=(f-u)/(f-u+(g-v)),t.copy(r).addScaledVector(Yu,o);const m=1/(p+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(Rr,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Ec(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Oa(a,s,e+1/3),this.g=Oa(a,s,e),this.b=Oa(a,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=ff[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return St.fromWorkingColorSpace(tn.copy(this),e),Math.round(jt(tn.r*255,0,255))*65536+Math.round(jt(tn.g*255,0,255))*256+Math.round(jt(tn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,s=tn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,h;const u=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=jn){St.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ro);const n=gs(bi.h,ro.h,t),r=gs(bi.s,ro.s,t),s=gs(bi.l,ro.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new xt;xt.NAMES=ff;let Qg=0;class Ho extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=qr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class No extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new F,so=new Re;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class df extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pf extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e_=0;const Ln=new Ot,Fa=new sn,Lr=new F,En=new ws,hs=new ws,$t=new F;class Xn extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?pf:df)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hs.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(En.min,hs.min),En.expandByPoint($t),$t.addVectors(En.max,hs.max),En.expandByPoint($t)):(En.expandByPoint(hs.min),En.expandByPoint(hs.max))}En.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)$t.fromBufferAttribute(o,h),l&&(Lr.fromBufferAttribute(e,h),$t.add(Lr)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new F,l[z]=new F;const h=new F,u=new F,f=new F,d=new Re,g=new Re,v=new Re,y=new F,p=new F;function m(z,J,M){h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,J),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,z),g.fromBufferAttribute(s,J),v.fromBufferAttribute(s,M),u.sub(h),f.sub(h),g.sub(d),v.sub(d);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(C),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(C),o[z].add(y),o[J].add(y),o[M].add(y),l[z].add(p),l[J].add(p),l[M].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let z=0,J=R.length;z<J;++z){const M=R[z],C=M.start,j=M.count;for(let ee=C,O=C+j;ee<O;ee+=3)m(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const E=new F,A=new F,I=new F,U=new F;function w(z){I.fromBufferAttribute(r,z),U.copy(I);const J=o[z];E.copy(J),E.sub(I.multiplyScalar(I.dot(J))).normalize(),A.crossVectors(U,J);const C=A.dot(l[z])<0?-1:1;a.setXYZW(z,E.x,E.y,E.z,C)}for(let z=0,J=R.length;z<J;++z){const M=R[z],C=M.start,j=M.count;for(let ee=C,O=C+j;ee<O;ee+=3)w(e.getX(ee+0)),w(e.getX(ee+1)),w(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,h=new F,u=new F,f=new F;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,p),o.add(u),l.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,f=o.normalized,d=new h.constructor(l.length*u);let g=0,v=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*u;for(let m=0;m<u;m++)d[v++]=h[g++]}return new Qn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let u=0,f=h.length;u<f;u++){const d=h[u],g=e(d,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let f=0,d=h.length;f<d;f++){const g=h[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],f=s[h];for(let d=0,g=f.length;d<g;d++)u.push(f[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new Ot,Yi=new uf,oo=new bc,ju=new F,Pr=new F,Ur=new F,Dr=new F,Ba=new F,ao=new F,co=new Re,lo=new Re,uo=new Re,Ku=new F,Zu=new F,Ju=new F,ho=new F,fo=new F;class Vt extends sn{constructor(e=new Xn,t=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ao.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=o[l],f=s[l];u!==0&&(Ba.fromBufferAttribute(f,e),a?ao.addScaledVector(Ba,u):ao.addScaledVector(Ba.sub(t),u))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(oo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(oo,ju)===null||Yi.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&($u.copy(s).invert(),Yi.copy(e.ray).applyMatrix4($u),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],m=a[p.materialIndex],R=Math.max(p.start,g.start),E=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let A=R,I=E;A<I;A+=3){const U=o.getX(A),w=o.getX(A+1),z=o.getX(A+2);r=po(this,m,e,n,h,u,f,U,w,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let p=v,m=y;p<m;p+=3){const R=o.getX(p),E=o.getX(p+1),A=o.getX(p+2);r=po(this,a,e,n,h,u,f,R,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const p=d[v],m=a[p.materialIndex],R=Math.max(p.start,g.start),E=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let A=R,I=E;A<I;A+=3){const U=A,w=A+1,z=A+2;r=po(this,m,e,n,h,u,f,U,w,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=v,m=y;p<m;p+=3){const R=p,E=p+1,A=p+2;r=po(this,a,e,n,h,u,f,R,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function t_(i,e,t,n,r,s,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;fo.copy(o),fo.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(fo);return h<t.near||h>t.far?null:{distance:h,point:fo.clone(),object:i}}function po(i,e,t,n,r,s,a,o,l,h){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Ur),i.getVertexPosition(h,Dr);const u=t_(i,e,t,n,Pr,Ur,Dr,ho);if(u){r&&(co.fromBufferAttribute(r,o),lo.fromBufferAttribute(r,l),uo.fromBufferAttribute(r,h),u.uv=Jn.getInterpolation(ho,Pr,Ur,Dr,co,lo,uo,new Re)),s&&(co.fromBufferAttribute(s,o),lo.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,h),u.uv1=Jn.getInterpolation(ho,Pr,Ur,Dr,co,lo,uo,new Re)),a&&(Ku.fromBufferAttribute(a,o),Zu.fromBufferAttribute(a,l),Ju.fromBufferAttribute(a,h),u.normal=Jn.getInterpolation(ho,Pr,Ur,Dr,Ku,Zu,Ju,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c:h,normal:new F,materialIndex:0};Jn.getNormal(Pr,Ur,Dr,f.normal),u.face=f}return u}class Rs extends Xn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],u=[],f=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function v(y,p,m,R,E,A,I,U,w,z,J){const M=A/w,C=I/z,j=A/2,ee=I/2,O=U/2,Q=w+1,q=z+1;let oe=0,D=0;const re=new F;for(let te=0;te<q;te++){const de=te*C-ee;for(let ye=0;ye<Q;ye++){const ke=ye*M-j;re[y]=ke*R,re[p]=de*E,re[m]=O,h.push(re.x,re.y,re.z),re[y]=0,re[p]=0,re[m]=U>0?1:-1,u.push(re.x,re.y,re.z),f.push(ye/w),f.push(1-te/z),oe+=1}}for(let te=0;te<z;te++)for(let de=0;de<w;de++){const ye=d+de+Q*te,ke=d+de+Q*(te+1),$=d+(de+1)+Q*(te+1),le=d+(de+1)+Q*te;l.push(ye,ke,le),l.push(ke,$,le),D+=6}o.addGroup(g,D,J),g+=D,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Zr(i[t]);for(const r in n)e[r]=n[r]}return e}function n_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mf(i){return i.getRenderTarget()===null?i.outputColorSpace:St.workingColorSpace}const i_={clone:Zr,merge:hn};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gf extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,Qu=new Re,eh=new Re;class Pn extends gf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,eh),t.subVectors(eh,Qu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/h,r*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Nr=1;class o_ extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Ir,Nr,e,t);r.layers=this.layers,this.add(r);const s=new Pn(Ir,Nr,e,t);s.layers=this.layers,this.add(s);const a=new Pn(Ir,Nr,e,t);a.layers=this.layers,this.add(a);const o=new Pn(Ir,Nr,e,t);o.layers=this.layers,this.add(o);const l=new Pn(Ir,Nr,e,t);l.layers=this.layers,this.add(l);const h=new Pn(Ir,Nr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class _f extends pn{constructor(e,t,n,r,s,a,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,n,r,s,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rs(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Li});s.uniforms.tEquirect.value=t;const a=new Vt(r,s),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=gn),new o_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const za=new F,c_=new F,l_=new st;class Ai{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=za.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l_.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new bc,mo=new F;class Tc{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],y=r[10],p=r[11],m=r[12],R=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,d-h,p-g,A-m).normalize(),n[1].setComponents(l+s,d+h,p+g,A+m).normalize(),n[2].setComponents(l+a,d+u,p+v,A+R).normalize(),n[3].setComponents(l-a,d-u,p-v,A-R).normalize(),n[4].setComponents(l-o,d-f,p-y,A-E).normalize(),t===mi)n[5].setComponents(l+o,d+f,p+y,A+E).normalize();else if(t===Uo)n[5].setComponents(o,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mo.x=r.normal.x>0?e.max.x:e.min.x,mo.y=r.normal.y>0?e.max.y:e.min.y,mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function u_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,u){const f=h.array,d=h.usage,g=f.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,f,d),h.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,u,f){const d=u.array,g=u._updateRange,v=u.updateRanges;if(i.bindBuffer(f,h),g.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let y=0,p=v.length;y<p;y++){const m=v[y];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,r(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,h,u),f.version=h.version}}return{get:a,remove:o,update:l}}class Cs extends Xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),h=o+1,u=l+1,f=e/o,d=t/l,g=[],v=[],y=[],p=[];for(let m=0;m<u;m++){const R=m*d-a;for(let E=0;E<h;E++){const A=E*f-s;v.push(A,-R,0),y.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<o;R++){const E=R+h*m,A=R+h*(m+1),I=R+1+h*(m+1),U=R+1+h*m;g.push(E,A,U),g.push(A,I,U)}this.setIndex(g),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
#endif`,y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,I_=`#define PI 3.141592653589793
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
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`
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
}`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
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
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,u0=`struct PhysicalMaterial {
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
}`,h0=`
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
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
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ev=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,xv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,wv=`#define LAMBERT
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Lv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Uv=`#define NORMAL
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
}`,Dv=`#define PHONG
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
}`,Iv=`#define PHONG
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
}`,Nv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Fv=`#define TOON
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
}`,Bv=`#define TOON
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
}`,zv=`uniform float size;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Hv=`#include <common>
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
}`,Gv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:h_,alphahash_pars_fragment:f_,alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:y_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:E_,iridescence_fragment:b_,bumpmap_pars_fragment:T_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:L_,color_pars_fragment:P_,color_pars_vertex:U_,color_vertex:D_,common:I_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:O_,displacementmap_pars_vertex:F_,displacementmap_vertex:B_,emissivemap_fragment:z_,emissivemap_pars_fragment:k_,colorspace_fragment:H_,colorspace_pars_fragment:G_,envmap_fragment:V_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:r0,envmap_vertex:Y_,fog_vertex:$_,fog_pars_vertex:j_,fog_fragment:K_,fog_pars_fragment:Z_,gradientmap_pars_fragment:J_,lightmap_fragment:Q_,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:s0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:c0,lights_physical_fragment:l0,lights_physical_pars_fragment:u0,lights_fragment_begin:h0,lights_fragment_maps:f0,lights_fragment_end:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:E0,morphinstance_vertex:b0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:w0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:L0,normal_pars_fragment:P0,normal_pars_vertex:U0,normal_vertex:D0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:k0,premultiplied_alpha_fragment:H0,project_vertex:G0,dithering_fragment:V0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:$0,shadowmap_vertex:j0,shadowmask_pars_fragment:K0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:ev,specularmap_fragment:tv,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:sv,transmission_pars_fragment:ov,uv_pars_fragment:av,uv_pars_vertex:cv,uv_vertex:lv,worldpos_vertex:uv,background_vert:hv,background_frag:fv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distanceRGBA_vert:xv,distanceRGBA_frag:yv,equirect_vert:Mv,equirect_frag:Sv,linedashed_vert:Ev,linedashed_frag:bv,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Lv,meshnormal_vert:Pv,meshnormal_frag:Uv,meshphong_vert:Dv,meshphong_frag:Iv,meshphysical_vert:Nv,meshphysical_frag:Ov,meshtoon_vert:Fv,meshtoon_frag:Bv,points_vert:zv,points_frag:kv,shadow_vert:Hv,shadow_frag:Gv,sprite_vert:Vv,sprite_frag:Wv},ve={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Kn={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Kn.physical={uniforms:hn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const go={r:0,b:0,g:0},ji=new gi,Xv=new Ot;function qv(i,e,t,n,r,s,a){const o=new xt(0);let l=s===!0?0:1,h,u,f=null,d=0,g=null;function v(p,m){let R=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=(m.backgroundBlurriness>0?t:e).get(E)),E===null?y(o,l):E&&E.isColor&&(y(E,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===zo)?(u===void 0&&(u=new Vt(new Rs(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Zr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(m.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(ji)),u.material.toneMapped=St.getTransfer(E.colorSpace)!==Lt,(f!==E||d!==E.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Vt(new Cs(2,2),new Ii({name:"BackgroundMaterial",uniforms:Zr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=St.getTransfer(E.colorSpace)!==Lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,g=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function y(p,m){p.getRGB(go,mf(i)),n.buffers.color.setClear(go.r,go.g,go.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(o,l)},render:v}}function Yv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let h=l,u=!1;function f(O,Q,q,oe,D){let re=!1;if(a){const te=y(oe,q,Q);h!==te&&(h=te,g(h.object)),re=m(O,oe,q,D),re&&R(O,oe,q,D)}else{const te=Q.wireframe===!0;(h.geometry!==oe.id||h.program!==q.id||h.wireframe!==te)&&(h.geometry=oe.id,h.program=q.id,h.wireframe=te,re=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,z(O,Q,q,oe),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function y(O,Q,q){const oe=q.wireframe===!0;let D=o[O.id];D===void 0&&(D={},o[O.id]=D);let re=D[Q.id];re===void 0&&(re={},D[Q.id]=re);let te=re[oe];return te===void 0&&(te=p(d()),re[oe]=te),te}function p(O){const Q=[],q=[],oe=[];for(let D=0;D<r;D++)Q[D]=0,q[D]=0,oe[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:q,attributeDivisors:oe,object:O,attributes:{},index:null}}function m(O,Q,q,oe){const D=h.attributes,re=Q.attributes;let te=0;const de=q.getAttributes();for(const ye in de)if(de[ye].location>=0){const $=D[ye];let le=re[ye];if(le===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;te++}return h.attributesNum!==te||h.index!==oe}function R(O,Q,q,oe){const D={},re=Q.attributes;let te=0;const de=q.getAttributes();for(const ye in de)if(de[ye].location>=0){let $=re[ye];$===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const le={};le.attribute=$,$&&$.data&&(le.data=$.data),D[ye]=le,te++}h.attributes=D,h.attributesNum=te,h.index=oe}function E(){const O=h.newAttributes;for(let Q=0,q=O.length;Q<q;Q++)O[Q]=0}function A(O){I(O,0)}function I(O,Q){const q=h.newAttributes,oe=h.enabledAttributes,D=h.attributeDivisors;q[O]=1,oe[O]===0&&(i.enableVertexAttribArray(O),oe[O]=1),D[O]!==Q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Q),D[O]=Q)}function U(){const O=h.newAttributes,Q=h.enabledAttributes;for(let q=0,oe=Q.length;q<oe;q++)Q[q]!==O[q]&&(i.disableVertexAttribArray(q),Q[q]=0)}function w(O,Q,q,oe,D,re,te){te===!0?i.vertexAttribIPointer(O,Q,q,D,re):i.vertexAttribPointer(O,Q,q,oe,D,re)}function z(O,Q,q,oe){if(n.isWebGL2===!1&&(O.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const D=oe.attributes,re=q.getAttributes(),te=Q.defaultAttributeValues;for(const de in re){const ye=re[de];if(ye.location>=0){let ke=D[de];if(ke===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(ke=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(ke=O.instanceColor)),ke!==void 0){const $=ke.normalized,le=ke.itemSize,ne=t.get(ke);if(ne===void 0)continue;const Be=ne.buffer,Ue=ne.type,be=ne.bytesPerElement,ut=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||ke.gpuType===Zh);if(ke.isInterleavedBufferAttribute){const Oe=ke.data,G=Oe.stride,Ct=ke.offset;if(Oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ye.locationSize;Ce++)I(ye.location+Ce,Oe.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ce=0;Ce<ye.locationSize;Ce++)A(ye.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ce=0;Ce<ye.locationSize;Ce++)w(ye.location+Ce,le/ye.locationSize,Ue,$,G*be,(Ct+le/ye.locationSize*Ce)*be,ut)}else{if(ke.isInstancedBufferAttribute){for(let Oe=0;Oe<ye.locationSize;Oe++)I(ye.location+Oe,ke.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Oe=0;Oe<ye.locationSize;Oe++)A(ye.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Oe=0;Oe<ye.locationSize;Oe++)w(ye.location+Oe,le/ye.locationSize,Ue,$,le*be,le/ye.locationSize*Oe*be,ut)}}else if(te!==void 0){const $=te[de];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(ye.location,$);break;case 3:i.vertexAttrib3fv(ye.location,$);break;case 4:i.vertexAttrib4fv(ye.location,$);break;default:i.vertexAttrib1fv(ye.location,$)}}}}U()}function J(){j();for(const O in o){const Q=o[O];for(const q in Q){const oe=Q[q];for(const D in oe)v(oe[D].object),delete oe[D];delete Q[q]}delete o[O]}}function M(O){if(o[O.id]===void 0)return;const Q=o[O.id];for(const q in Q){const oe=Q[q];for(const D in oe)v(oe[D].object),delete oe[D];delete Q[q]}delete o[O.id]}function C(O){for(const Q in o){const q=o[Q];if(q[O.id]===void 0)continue;const oe=q[O.id];for(const D in oe)v(oe[D].object),delete oe[D];delete q[O.id]}}function j(){ee(),u=!0,h!==l&&(h=l,g(h.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:ee,dispose:J,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:A,disableUnusedAttributes:U}}function $v(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let g,v;if(r)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,u,f,d),t.update(f,s,d)}function h(u,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{g.multiDrawArraysWEBGL(s,u,0,f,0,d);let v=0;for(let y=0;y<d;y++)v+=f[y];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function jv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,A=a||e.has("OES_texture_float"),I=E&&A,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:R,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:U}}function Kv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ai,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||r;return r=d,n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,g){const v=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):h();else{const R=s?0:n,E=R*4;let A=m.clippingState||null;l.value=A,A=u(v,d,E,g);for(let I=0;I!==E;++I)A[I]=t[I];m.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,g,v){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const m=g+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,A=g;E!==y;++E,A+=4)a.copy(f[E]).applyMatrix4(R,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Zv(i){let e=new WeakMap;function t(a,o){return o===cc?a.mapping=$r:o===lc&&(a.mapping=jr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cc||o===lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new a_(l.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xf extends gf{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,th=[.125,.215,.35,.446,.526,.582],Qi=20,ka=new xf,nh=new xt;let Ha=null,Ga=0,Va=0;const Zi=(1+Math.sqrt(5))/2,Or=1/Zi,ih=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Zi,Or),new F(0,Zi,-Or),new F(Or,0,Zi),new F(-Or,0,Zi),new F(Zi,Or,0),new F(-Zi,Or,0)];class rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Ga,Va),e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:bs,format:Wn,colorSpace:Ni,depthBuffer:!1},r=sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Qv(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,r){const o=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nh),u.toneMapping=Pi,u.autoClear=!1;const g=new No({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),v=new Vt(new Rs,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(nh),y=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):R===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));const E=this._cubeSize;_o(r,R*E,m>2?E:0,E,E),u.setRenderTarget(r),y&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===$r||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(r-1)%ih.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vt(this._lodPlanes[r],h),d=h.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qi-1),y=s/v,p=isFinite(s)?1+Math.floor(u*y):Qi;p>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const m=[];let R=0;for(let w=0;w<Qi;++w){const z=w/y,J=Math.exp(-z*z/2);m.push(J),w===0?R+=J:w<p&&(R+=2*J)}for(let w=0;w<m.length;w++)m[w]=m[w]/R;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;const A=this._sizeLods[r],I=3*A*(r>E-Hr?r-E+Hr:0),U=4*(this._cubeSize-A);_o(t,I,U,3*A,2*A),l.setRenderTarget(t),l.render(f,ka)}}function Jv(i){const e=[],t=[],n=[];let r=i;const s=i-Hr+1+th.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Hr?l=th[a-i+Hr-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,f=1+h,d=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,y=3,p=2,m=1,R=new Float32Array(y*v*g),E=new Float32Array(p*v*g),A=new Float32Array(m*v*g);for(let U=0;U<g;U++){const w=U%3*2/3-1,z=U>2?0:-1,J=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];R.set(J,y*v*U),E.set(d,p*v*U);const M=[U,U,U,U,U,U];A.set(M,m*v*U)}const I=new Xn;I.setAttribute("position",new Qn(R,y)),I.setAttribute("uv",new Qn(E,p)),I.setAttribute("faceIndex",new Qn(A,m)),e.push(I),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sh(i,e,t){const n=new sr(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qv(i,e,t){const n=new Float32Array(Qi),r=new F(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function oh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ah(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function ex(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===cc||l===lc,u=l===$r||l===jr;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new rh(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(h&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new rh(i));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function nx(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const y=g[v];for(let p=0,m=y.length;p<m;p++)e.update(y[p],i.ARRAY_BUFFER)}}function h(f){const d=[],g=f.index,v=f.attributes.position;let y=0;if(g!==null){const R=g.array;y=g.version;for(let E=0,A=R.length;E<A;E+=3){const I=R[E+0],U=R[E+1],w=R[E+2];d.push(I,U,U,w,w,I)}}else if(v!==void 0){const R=v.array;y=v.version;for(let E=0,A=R.length/3-1;E<A;E+=3){const I=E+0,U=E+1,w=E+2;d.push(I,U,U,w,w,I)}}else return;const p=new(of(d)?pf:df)(d,1);p.version=y;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&h(f)}else h(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ix(i,e,t,n){const r=n.isWebGL2;let s;function a(g){s=g}let o,l;function h(g){o=g.type,l=g.bytesPerElement}function u(g,v){i.drawElements(s,v,o,g*l),t.update(v,s,1)}function f(g,v,y){if(y===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,v,o,g*l,y),t.update(v,s,y)}function d(g,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<y;m++)this.render(g[m]/l,v[m]);else{p.multiDrawElementsWEBGL(s,v,0,o,g,0,y);let m=0;for(let R=0;R<y;R++)m+=v[R];t.update(m,s,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function rx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sx(i,e){return i[0]-e[0]}function ox(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ax(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Kt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,f){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==y){let ee=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",ee)};var g=ee;p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,R=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let w=0;m===!0&&(w=1),R===!0&&(w=2),E===!0&&(w=3);let z=u.attributes.position.count*w,J=1;z>e.maxTextureSize&&(J=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const M=new Float32Array(z*J*4*y),C=new lf(M,z,J,y);C.type=pi,C.needsUpdate=!0;const j=w*4;for(let O=0;O<y;O++){const Q=A[O],q=I[O],oe=U[O],D=z*J*4*O;for(let re=0;re<Q.count;re++){const te=re*j;m===!0&&(a.fromBufferAttribute(Q,re),M[D+te+0]=a.x,M[D+te+1]=a.y,M[D+te+2]=a.z,M[D+te+3]=0),R===!0&&(a.fromBufferAttribute(q,re),M[D+te+4]=a.x,M[D+te+5]=a.y,M[D+te+6]=a.z,M[D+te+7]=0),E===!0&&(a.fromBufferAttribute(oe,re),M[D+te+8]=a.x,M[D+te+9]=a.y,M[D+te+10]=a.z,M[D+te+11]=oe.itemSize===4?a.w:1)}}p={count:y,texture:C,size:new Re(z,J)},s.set(u,p),u.addEventListener("dispose",ee)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",h.morphTexture,t);else{let m=0;for(let E=0;E<d.length;E++)m+=d[E];const R=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",R),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let y=n[u.id];if(y===void 0||y.length!==v){y=[];for(let A=0;A<v;A++)y[A]=[A,0];n[u.id]=y}for(let A=0;A<v;A++){const I=y[A];I[0]=A,I[1]=d[A]}y.sort(ox);for(let A=0;A<8;A++)A<v&&y[A][1]?(o[A][0]=y[A][0],o[A][1]=y[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(sx);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let R=0;for(let A=0;A<8;A++){const I=o[A],U=I[0],w=I[1];U!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+A)!==p[U]&&u.setAttribute("morphTarget"+A,p[U]),m&&u.getAttribute("morphNormal"+A)!==m[U]&&u.setAttribute("morphNormal"+A,m[U]),r[A]=w,R+=w):(p&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),m&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const E=u.morphTargetsRelative?1:1-R;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function cx(i,e,t,n){let r=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class yf extends pn{constructor(e,t,n,r,s,a,o,l,h,u){if(u=u!==void 0?u:rr,u!==rr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rr&&(n=Ci),n===void 0&&u===Kr&&(n=ir),super(null,r,s,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mf=new pn,Sf=new yf(1,1);Sf.compareFunction=sf;const Ef=new lf,bf=new Wg,Tf=new _f,ch=[],lh=[],uh=new Float32Array(16),hh=new Float32Array(9),fh=new Float32Array(4);function Qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=lh[e];t===void 0&&(t=new Int32Array(e),lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function dx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),qt(t,n)}}function px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),qt(t,n)}}function mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),qt(t,n)}}function gx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function bx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Sf:Mf;t.setTexture2D(e||s,r)}function Tx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bf,r)}function Ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tf,r)}function wx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ef,r)}function Rx(i){switch(i){case 5126:return lx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return xx;case 5125:return yx;case 36294:return Mx;case 36295:return Sx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return wx}}function Cx(i,e){i.uniform1fv(this.addr,e)}function Lx(i,e){const t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Px(i,e){const t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ux(i,e){const t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Dx(i,e){const t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ix(i,e){const t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nx(i,e){const t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ox(i,e){i.uniform1iv(this.addr,e)}function Fx(i,e){i.uniform2iv(this.addr,e)}function Bx(i,e){i.uniform3iv(this.addr,e)}function zx(i,e){i.uniform4iv(this.addr,e)}function kx(i,e){i.uniform1uiv(this.addr,e)}function Hx(i,e){i.uniform2uiv(this.addr,e)}function Gx(i,e){i.uniform3uiv(this.addr,e)}function Vx(i,e){i.uniform4uiv(this.addr,e)}function Wx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Mf,s[a])}function Xx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bf,s[a])}function qx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Tf,s[a])}function Yx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ef,s[a])}function $x(i){switch(i){case 5126:return Cx;case 35664:return Lx;case 35665:return Px;case 35666:return Ux;case 35674:return Dx;case 35675:return Ix;case 35676:return Nx;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}class jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rx(t.type)}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function dh(i,e){i.seq.push(e),i.map[e.id]=e}function Jx(i,e,t){const n=i.name,r=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){dh(t,h===void 0?new jx(o,i,e):new Kx(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Zx(o),dh(t,f)),t=f}}}class Mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Jx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ph(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qx=37297;let ey=0;function ty(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ny(i){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i);let n;switch(e===t?n="":e===Po&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Po&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case ko:return[n,"LinearTransferOETF"];case jn:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ty(i.getShaderSource(e),a)}else return r}function iy(i,e){const t=ny(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ry(i,e){let t;switch(e){case Zm:t="Linear";break;case Jm:t="Reinhard";break;case Qm:t="OptimizedCineon";break;case eg:t="ACESFilmic";break;case ng:t="AgX";break;case ig:t="Neutral";break;case tg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function ay(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gr(i){return i!==""}function gh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(ly,hy)}const uy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hy(i,e){let t=rt[e];if(t===void 0){const n=uy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(fy,dy)}function dy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function py(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function my(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $r:case jr:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function _y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case jm:e="ENVMAP_BLENDING_MIX";break;case Km:e="ENVMAP_BLENDING_ADD";break}return e}function vy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xy(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=py(t),h=my(t),u=gy(t),f=_y(t),d=vy(t),g=t.isWebGL2?"":sy(t),v=oy(t),y=ay(s),p=r.createProgram();let m,R,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gr).join(`
`),m.length>0&&(m+=`
`),R=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gr).join(`
`),R.length>0&&(R+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),R=[g,xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=pc(a),a=gh(a,t),a=_h(a,t),o=pc(o),o=gh(o,t),o=_h(o,t),a=vh(a),o=vh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const A=E+m+a,I=E+R+o,U=ph(r,r.VERTEX_SHADER,A),w=ph(r,r.FRAGMENT_SHADER,I);r.attachShader(p,U),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(j){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(U).trim(),Q=r.getShaderInfoLog(w).trim();let q=!0,oe=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,U,w);else{const D=mh(r,U,"vertex"),re=mh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ee+`
`+D+`
`+re)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(O===""||Q==="")&&(oe=!1);oe&&(j.diagnostics={runnable:q,programLog:ee,vertexShader:{log:O,prefix:m},fragmentShader:{log:Q,prefix:R}})}r.deleteShader(U),r.deleteShader(w),J=new Mo(r,p),M=cy(r,p)}let J;this.getUniforms=function(){return J===void 0&&z(this),J};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,Qx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=U,this.fragmentShader=w,this}let yy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sy(e),t.set(e,n)),n}}class Sy{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Ey(i,e,t,n,r,s,a){const o=new hf,l=new My,h=new Set,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,C,j,ee,O){const Q=ee.fog,q=O.geometry,oe=M.isMeshStandardMaterial?ee.environment:null,D=(M.isMeshStandardMaterial?t:e).get(M.envMap||oe),re=D&&D.mapping===zo?D.image.height:null,te=y[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ye=de!==void 0?de.length:0;let ke=0;q.morphAttributes.position!==void 0&&(ke=1),q.morphAttributes.normal!==void 0&&(ke=2),q.morphAttributes.color!==void 0&&(ke=3);let $,le,ne,Be;if(te){const ft=Kn[te];$=ft.vertexShader,le=ft.fragmentShader}else $=M.vertexShader,le=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),Be=l.getFragmentShaderID(M);const Ue=i.getRenderTarget(),be=O.isInstancedMesh===!0,ut=O.isBatchedMesh===!0,Oe=!!M.map,G=!!M.matcap,Ct=!!D,Ce=!!M.aoMap,Ke=!!M.lightMap,Fe=!!M.bumpMap,at=!!M.normalMap,Ze=!!M.displacementMap,et=!!M.emissiveMap,Et=!!M.metalnessMap,L=!!M.roughnessMap,S=M.anisotropy>0,K=M.clearcoat>0,ie=M.iridescence>0,ue=M.sheen>0,ce=M.transmission>0,ze=S&&!!M.anisotropyMap,Ie=K&&!!M.clearcoatMap,me=K&&!!M.clearcoatNormalMap,xe=K&&!!M.clearcoatRoughnessMap,Xe=ie&&!!M.iridescenceMap,pe=ie&&!!M.iridescenceThicknessMap,Pt=ue&&!!M.sheenColorMap,tt=ue&&!!M.sheenRoughnessMap,De=!!M.specularMap,Te=!!M.specularColorMap,Le=!!M.specularIntensityMap,P=ce&&!!M.transmissionMap,se=ce&&!!M.thicknessMap,we=!!M.gradientMap,N=!!M.alphaMap,fe=M.alphaTest>0,W=!!M.alphaHash,he=!!M.extensions;let _e=Pi;M.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(_e=i.toneMapping);const qe={isWebGL2:f,shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:le,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ut,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ni,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:G,envMap:Ct,envMapMode:Ct&&D.mapping,envMapCubeUVHeight:re,aoMap:Ce,lightMap:Ke,bumpMap:Fe,normalMap:at,displacementMap:g&&Ze,emissiveMap:et,normalMapObjectSpace:at&&M.normalMapType===mg,normalMapTangentSpace:at&&M.normalMapType===pg,metalnessMap:Et,roughnessMap:L,anisotropy:S,anisotropyMap:ze,clearcoat:K,clearcoatMap:Ie,clearcoatNormalMap:me,clearcoatRoughnessMap:xe,iridescence:ie,iridescenceMap:Xe,iridescenceThicknessMap:pe,sheen:ue,sheenColorMap:Pt,sheenRoughnessMap:tt,specularMap:De,specularColorMap:Te,specularIntensityMap:Le,transmission:ce,transmissionMap:P,thicknessMap:se,gradientMap:we,opaque:M.transparent===!1&&M.blending===qr&&M.alphaToCoverage===!1,alphaMap:N,alphaTest:fe,alphaHash:W,combine:M.combine,mapUv:Oe&&p(M.map.channel),aoMapUv:Ce&&p(M.aoMap.channel),lightMapUv:Ke&&p(M.lightMap.channel),bumpMapUv:Fe&&p(M.bumpMap.channel),normalMapUv:at&&p(M.normalMap.channel),displacementMapUv:Ze&&p(M.displacementMap.channel),emissiveMapUv:et&&p(M.emissiveMap.channel),metalnessMapUv:Et&&p(M.metalnessMap.channel),roughnessMapUv:L&&p(M.roughnessMap.channel),anisotropyMapUv:ze&&p(M.anisotropyMap.channel),clearcoatMapUv:Ie&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(M.sheenRoughnessMap.channel),specularMapUv:De&&p(M.specularMap.channel),specularColorMapUv:Te&&p(M.specularColorMap.channel),specularIntensityMapUv:Le&&p(M.specularIntensityMap.channel),transmissionMapUv:P&&p(M.transmissionMap.channel),thicknessMapUv:se&&p(M.thicknessMap.channel),alphaMapUv:N&&p(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(at||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Oe||N),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zn,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function R(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)C.push(j),C.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(E(C,M),A(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function E(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function A(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),M.push(o.mask)}function I(M){const C=y[M.type];let j;if(C){const ee=Kn[C];j=i_.clone(ee.uniforms)}else j=M.uniforms;return j}function U(M,C){let j;for(let ee=0,O=u.length;ee<O;ee++){const Q=u[ee];if(Q.cacheKey===C){j=Q,++j.usedTimes;break}}return j===void 0&&(j=new xy(i,C,M,s),u.push(j)),j}function w(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function z(M){l.remove(M)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:R,getUniforms:I,acquireProgram:U,releaseProgram:w,releaseShaderCache:z,programs:u,dispose:J}}function by(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,g,v,y,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=y,m.group=p),e++,m}function o(f,d,g,v,y,p){const m=a(f,d,g,v,y,p);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,d,g,v,y,p){const m=a(f,d,g,v,y,p);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function h(f,d){t.length>1&&t.sort(f||Ty),n.length>1&&n.sort(d||yh),r.length>1&&r.sort(d||yh)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:h}}function Ay(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mh,i.set(n,[a])):r>=s.length?(a=new Mh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ry(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cy=0;function Ly(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Py(i,e){const t=new wy,n=Ry(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new Ot,o=new Ot;function l(u,f){let d=0,g=0,v=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let y=0,p=0,m=0,R=0,E=0,A=0,I=0,U=0,w=0,z=0,J=0;u.sort(Ly);const M=f===!0?Math.PI:1;for(let j=0,ee=u.length;j<ee;j++){const O=u[j],Q=O.color,q=O.intensity,oe=O.distance,D=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=Q.r*q*M,g+=Q.g*q*M,v+=Q.b*q*M;else if(O.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(O.sh.coefficients[re],q);J++}else if(O.isDirectionalLight){const re=t.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const te=O.shadow,de=n.get(O);de.shadowBias=te.bias,de.shadowNormalBias=te.normalBias,de.shadowRadius=te.radius,de.shadowMapSize=te.mapSize,r.directionalShadow[y]=de,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=O.shadow.matrix,A++}r.directional[y]=re,y++}else if(O.isSpotLight){const re=t.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(Q).multiplyScalar(q*M),re.distance=oe,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,r.spot[m]=re;const te=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,te.updateMatrices(O),O.castShadow&&z++),r.spotLightMatrix[m]=te.matrix,O.castShadow){const de=n.get(O);de.shadowBias=te.bias,de.shadowNormalBias=te.normalBias,de.shadowRadius=te.radius,de.shadowMapSize=te.mapSize,r.spotShadow[m]=de,r.spotShadowMap[m]=D,U++}m++}else if(O.isRectAreaLight){const re=t.get(O);re.color.copy(Q).multiplyScalar(q),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),r.rectArea[R]=re,R++}else if(O.isPointLight){const re=t.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity*M),re.distance=O.distance,re.decay=O.decay,O.castShadow){const te=O.shadow,de=n.get(O);de.shadowBias=te.bias,de.shadowNormalBias=te.normalBias,de.shadowRadius=te.radius,de.shadowMapSize=te.mapSize,de.shadowCameraNear=te.camera.near,de.shadowCameraFar=te.camera.far,r.pointShadow[p]=de,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=O.shadow.matrix,I++}r.point[p]=re,p++}else if(O.isHemisphereLight){const re=t.get(O);re.skyColor.copy(O.color).multiplyScalar(q*M),re.groundColor.copy(O.groundColor).multiplyScalar(q*M),r.hemi[E]=re,E++}}R>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==y||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==R||C.hemiLength!==E||C.numDirectionalShadows!==A||C.numPointShadows!==I||C.numSpotShadows!==U||C.numSpotMaps!==w||C.numLightProbes!==J)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=R,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=U+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=J,C.directionalLength=y,C.pointLength=p,C.spotLength=m,C.rectAreaLength=R,C.hemiLength=E,C.numDirectionalShadows=A,C.numPointShadows=I,C.numSpotShadows=U,C.numSpotMaps=w,C.numLightProbes=J,r.version=Cy++)}function h(u,f){let d=0,g=0,v=0,y=0,p=0;const m=f.matrixWorldInverse;for(let R=0,E=u.length;R<E;R++){const A=u[R];if(A.isDirectionalLight){const I=r.directional[d];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),d++}else if(A.isSpotLight){const I=r.spot[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),v++}else if(A.isRectAreaLight){const I=r.rectArea[y];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){const I=r.point[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(m),g++}else if(A.isHemisphereLight){const I=r.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(m),p++}}}return{setup:l,setupView:h,state:r}}function Sh(i,e){const t=new Py(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function Uy(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Sh(i,e),t.set(s,[l])):a>=o.length?(l=new Sh(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Dy extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function Fy(i,e,t){let n=new Tc;const r=new Re,s=new Re,a=new Kt,o=new Dy({depthPacking:dg}),l=new Iy,h={},u=t.maxTextureSize,f={[Di]:vn,[vn]:Di,[Zn]:Zn},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ny,fragmentShader:Oy}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Xn;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let m=this.type;this.render=function(U,w,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const J=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Li),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ee=m!==fi&&this.type===fi,O=m===fi&&this.type!==fi;for(let Q=0,q=U.length;Q<q;Q++){const oe=U[Q],D=oe.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const re=D.getFrameExtents();if(r.multiply(re),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,D.mapSize.y=s.y)),D.map===null||ee===!0||O===!0){const de=this.type!==fi?{minFilter:dn,magFilter:dn}:{};D.map!==null&&D.map.dispose(),D.map=new sr(r.x,r.y,de),D.map.texture.name=oe.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const te=D.getViewportCount();for(let de=0;de<te;de++){const ye=D.getViewport(de);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),j.viewport(a),D.updateMatrices(oe,de),n=D.getFrustum(),A(w,z,D.camera,oe,this.type)}D.isPointLightShadow!==!0&&this.type===fi&&R(D,z),D.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(J,M,C)};function R(U,w){const z=e.update(y);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new sr(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(w,null,z,d,y,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(w,null,z,g,y,null)}function E(U,w,z,J){let M=null;const C=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(C!==void 0)M=C;else if(M=z.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=M.uuid,ee=w.uuid;let O=h[j];O===void 0&&(O={},h[j]=O);let Q=O[ee];Q===void 0&&(Q=M.clone(),O[ee]=Q,w.addEventListener("dispose",I)),M=Q}if(M.visible=w.visible,M.wireframe=w.wireframe,J===fi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=i.properties.get(M);j.light=z}return M}function A(U,w,z,J,M){if(U.visible===!1)return;if(U.layers.test(w.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&M===fi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const ee=e.update(U),O=U.material;if(Array.isArray(O)){const Q=ee.groups;for(let q=0,oe=Q.length;q<oe;q++){const D=Q[q],re=O[D.materialIndex];if(re&&re.visible){const te=E(U,re,J,M);U.onBeforeShadow(i,U,w,z,ee,te,D),i.renderBufferDirect(z,null,ee,te,U,D),U.onAfterShadow(i,U,w,z,ee,te,D)}}}else if(O.visible){const Q=E(U,O,J,M);U.onBeforeShadow(i,U,w,z,ee,Q,null),i.renderBufferDirect(z,null,ee,Q,U,null),U.onAfterShadow(i,U,w,z,ee,Q,null)}}const j=U.children;for(let ee=0,O=j.length;ee<O;ee++)A(j[ee],w,z,J,M)}function I(U){U.target.removeEventListener("dispose",I);for(const z in h){const J=h[z],M=U.target.uuid;M in J&&(J[M].dispose(),delete J[M])}}}function By(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const fe=new Kt;let W=null;const he=new Kt(0,0,0,0);return{setMask:function(_e){W!==_e&&!N&&(i.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){N=_e},setClear:function(_e,qe,ft,pt,Ut){Ut===!0&&(_e*=pt,qe*=pt,ft*=pt),fe.set(_e,qe,ft,pt),he.equals(fe)===!1&&(i.clearColor(_e,qe,ft,pt),he.copy(fe))},reset:function(){N=!1,W=null,he.set(-1,0,0,0)}}}function s(){let N=!1,fe=null,W=null,he=null;return{setTest:function(_e){_e?be(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!N&&(i.depthMask(_e),fe=_e)},setFunc:function(_e){if(W!==_e){switch(_e){case Gm:i.depthFunc(i.NEVER);break;case Vm:i.depthFunc(i.ALWAYS);break;case Wm:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Xm:i.depthFunc(i.EQUAL);break;case qm:i.depthFunc(i.GEQUAL);break;case Ym:i.depthFunc(i.GREATER);break;case $m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=_e}},setLocked:function(_e){N=_e},setClear:function(_e){he!==_e&&(i.clearDepth(_e),he=_e)},reset:function(){N=!1,fe=null,W=null,he=null}}}function a(){let N=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,pt=null,Ut=null;return{setTest:function(ht){N||(ht?be(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!N&&(i.stencilMask(ht),fe=ht)},setFunc:function(ht,bt,zt){(W!==ht||he!==bt||_e!==zt)&&(i.stencilFunc(ht,bt,zt),W=ht,he=bt,_e=zt)},setOp:function(ht,bt,zt){(qe!==ht||ft!==bt||pt!==zt)&&(i.stencilOp(ht,bt,zt),qe=ht,ft=bt,pt=zt)},setLocked:function(ht){N=ht},setClear:function(ht){Ut!==ht&&(i.clearStencil(ht),Ut=ht)},reset:function(){N=!1,fe=null,W=null,he=null,_e=null,qe=null,ft=null,pt=null,Ut=null}}}const o=new r,l=new s,h=new a,u=new WeakMap,f=new WeakMap;let d={},g={},v=new WeakMap,y=[],p=null,m=!1,R=null,E=null,A=null,I=null,U=null,w=null,z=null,J=new xt(0,0,0),M=0,C=!1,j=null,ee=null,O=null,Q=null,q=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,re=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(te)[1]),D=re>=1):te.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),D=re>=2);let de=null,ye={};const ke=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),le=new Kt().fromArray(ke),ne=new Kt().fromArray($);function Be(N,fe,W,he){const _e=new Uint8Array(4),qe=i.createTexture();i.bindTexture(N,qe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<W;ft++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(fe,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return qe}const Ue={};Ue[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),be(i.DEPTH_TEST),l.setFunc(Ro),Ze(!1),et(tu),be(i.CULL_FACE),Fe(Li);function be(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ut(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Oe(N,fe){return g[N]!==fe?(i.bindFramebuffer(N,fe),g[N]=fe,n&&(N===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=fe)),!0):!1}function G(N,fe){let W=y,he=!1;if(N){W=v.get(fe),W===void 0&&(W=[],v.set(fe,W));const _e=N.textures;if(W.length!==_e.length||W[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,ft=_e.length;qe<ft;qe++)W[qe]=i.COLOR_ATTACHMENT0+qe;W.length=_e.length,he=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,he=!0);if(he)if(t.isWebGL2)i.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ct(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const Ce={[Ji]:i.FUNC_ADD,[wm]:i.FUNC_SUBTRACT,[Rm]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[su]=i.MIN,Ce[ou]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ce[su]=N.MIN_EXT,Ce[ou]=N.MAX_EXT)}const Ke={[Cm]:i.ZERO,[Lm]:i.ONE,[Pm]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[Fm]:i.SRC_ALPHA_SATURATE,[Nm]:i.DST_COLOR,[Dm]:i.DST_ALPHA,[Um]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[Om]:i.ONE_MINUS_DST_COLOR,[Im]:i.ONE_MINUS_DST_ALPHA,[Bm]:i.CONSTANT_COLOR,[zm]:i.ONE_MINUS_CONSTANT_COLOR,[km]:i.CONSTANT_ALPHA,[Hm]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(N,fe,W,he,_e,qe,ft,pt,Ut,ht){if(N===Li){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(be(i.BLEND),m=!0),N!==Am){if(N!==R||ht!==C){if((E!==Ji||U!==Ji)&&(i.blendEquation(i.FUNC_ADD),E=Ji,U=Ji),ht)switch(N){case qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.ONE,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,I=null,w=null,z=null,J.set(0,0,0),M=0,R=N,C=ht}return}_e=_e||fe,qe=qe||W,ft=ft||he,(fe!==E||_e!==U)&&(i.blendEquationSeparate(Ce[fe],Ce[_e]),E=fe,U=_e),(W!==A||he!==I||qe!==w||ft!==z)&&(i.blendFuncSeparate(Ke[W],Ke[he],Ke[qe],Ke[ft]),A=W,I=he,w=qe,z=ft),(pt.equals(J)===!1||Ut!==M)&&(i.blendColor(pt.r,pt.g,pt.b,Ut),J.copy(pt),M=Ut),R=N,C=!1}function at(N,fe){N.side===Zn?ut(i.CULL_FACE):be(i.CULL_FACE);let W=N.side===vn;fe&&(W=!W),Ze(W),N.blending===qr&&N.transparent===!1?Fe(Li):Fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const he=N.stencilWrite;h.setTest(he),he&&(h.setMask(N.stencilWriteMask),h.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),h.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){j!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),j=N)}function et(N){N!==Sm?(be(i.CULL_FACE),N!==ee&&(N===tu?i.cullFace(i.BACK):N===Em?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),ee=N}function Et(N){N!==O&&(D&&i.lineWidth(N),O=N)}function L(N,fe,W){N?(be(i.POLYGON_OFFSET_FILL),(Q!==fe||q!==W)&&(i.polygonOffset(fe,W),Q=fe,q=W)):ut(i.POLYGON_OFFSET_FILL)}function S(N){N?be(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function K(N){N===void 0&&(N=i.TEXTURE0+oe-1),de!==N&&(i.activeTexture(N),de=N)}function ie(N,fe,W){W===void 0&&(de===null?W=i.TEXTURE0+oe-1:W=de);let he=ye[W];he===void 0&&(he={type:void 0,texture:void 0},ye[W]=he),(he.type!==N||he.texture!==fe)&&(de!==W&&(i.activeTexture(W),de=W),i.bindTexture(N,fe||Ue[N]),he.type=N,he.texture=fe)}function ue(){const N=ye[de];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Le(N){ne.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function P(N,fe){let W=f.get(fe);W===void 0&&(W=new WeakMap,f.set(fe,W));let he=W.get(N);he===void 0&&(he=i.getUniformBlockIndex(fe,N.name),W.set(N,he))}function se(N,fe){const he=f.get(fe).get(N);u.get(fe)!==he&&(i.uniformBlockBinding(fe,he,N.__bindingPointIndex),u.set(fe,he))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},de=null,ye={},g={},v=new WeakMap,y=[],p=null,m=!1,R=null,E=null,A=null,I=null,U=null,w=null,z=null,J=new xt(0,0,0),M=0,C=!1,j=null,ee=null,O=null,Q=null,q=null,le.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:be,disable:ut,bindFramebuffer:Oe,drawBuffers:G,useProgram:Ct,setBlending:Fe,setMaterial:at,setFlipSided:Ze,setCullFace:et,setLineWidth:Et,setPolygonOffset:L,setScissorTest:S,activeTexture:K,bindTexture:ie,unbindTexture:ue,compressedTexImage2D:ce,compressedTexImage3D:ze,texImage2D:tt,texImage3D:De,updateUBOMapping:P,uniformBlockBinding:se,texStorage2D:pe,texStorage3D:Pt,texSubImage2D:Ie,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:Xe,scissor:Te,viewport:Le,reset:we}}function zy(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Re,f=new WeakMap;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,S){return v?new OffscreenCanvas(L,S):Io("canvas")}function p(L,S,K,ie){let ue=1;const ce=Et(L);if((ce.width>ie||ce.height>ie)&&(ue=ie/Math.max(ce.width,ce.height)),ue<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ze=S?Do:Math.floor,Ie=ze(ue*ce.width),me=ze(ue*ce.height);d===void 0&&(d=y(Ie,me));const xe=K?y(Ie,me):d;return xe.width=Ie,xe.height=me,xe.getContext("2d").drawImage(L,0,0,Ie,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ie+"x"+me+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){const S=Et(L);return dc(S.width)&&dc(S.height)}function R(L){return o?!1:L.wrapS!==Vn||L.wrapT!==Vn||L.minFilter!==dn&&L.minFilter!==gn}function E(L,S){return L.generateMipmaps&&S&&L.minFilter!==dn&&L.minFilter!==gn}function A(L){i.generateMipmap(L)}function I(L,S,K,ie,ue=!1){if(o===!1)return S;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=S;if(S===i.RED&&(K===i.FLOAT&&(ce=i.R32F),K===i.HALF_FLOAT&&(ce=i.R16F),K===i.UNSIGNED_BYTE&&(ce=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.R8UI),K===i.UNSIGNED_SHORT&&(ce=i.R16UI),K===i.UNSIGNED_INT&&(ce=i.R32UI),K===i.BYTE&&(ce=i.R8I),K===i.SHORT&&(ce=i.R16I),K===i.INT&&(ce=i.R32I)),S===i.RG&&(K===i.FLOAT&&(ce=i.RG32F),K===i.HALF_FLOAT&&(ce=i.RG16F),K===i.UNSIGNED_BYTE&&(ce=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RG8UI),K===i.UNSIGNED_SHORT&&(ce=i.RG16UI),K===i.UNSIGNED_INT&&(ce=i.RG32UI),K===i.BYTE&&(ce=i.RG8I),K===i.SHORT&&(ce=i.RG16I),K===i.INT&&(ce=i.RG32I)),S===i.RGBA){const ze=ue?Co:St.getTransfer(ie);K===i.FLOAT&&(ce=i.RGBA32F),K===i.HALF_FLOAT&&(ce=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ce=ze===Lt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(L,S,K){return E(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){return L===dn||L===au||L===as?i.NEAREST:i.LINEAR}function z(L){const S=L.target;S.removeEventListener("dispose",z),M(S),S.isVideoTexture&&f.delete(S)}function J(L){const S=L.target;S.removeEventListener("dispose",J),j(S)}function M(L){const S=n.get(L);if(S.__webglInit===void 0)return;const K=L.source,ie=g.get(K);if(ie){const ue=ie[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(L),Object.keys(ie).length===0&&g.delete(K)}n.remove(L)}function C(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const K=L.source,ie=g.get(K);delete ie[S.__cacheKey],a.memory.textures--}function j(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let ue=0;ue<S.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(S.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[ie]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=L.textures;for(let ie=0,ue=K.length;ie<ue;ie++){const ce=n.get(K[ie]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(K[ie])}n.remove(L)}let ee=0;function O(){ee=0}function Q(){const L=ee;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),ee+=1,L}function q(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function oe(L,S){const K=n.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(K,L,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function D(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ne(K,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function re(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ne(K,L,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function te(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Be(K,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}const de={[uc]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},ye={[dn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},ke={[gg]:i.NEVER,[Sg]:i.ALWAYS,[_g]:i.LESS,[sf]:i.LEQUAL,[vg]:i.EQUAL,[Mg]:i.GEQUAL,[xg]:i.GREATER,[yg]:i.NOTEQUAL};function $(L,S,K){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===ma||S.magFilter===as||S.magFilter===tr||S.minFilter===gn||S.minFilter===ma||S.minFilter===as||S.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(i.texParameteri(L,i.TEXTURE_WRAP_S,de[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,de[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,de[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ye[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ye[S.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Vn||S.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==dn&&S.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==as&&S.minFilter!==tr||S.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===bs&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(L,S){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",z));const ie=S.source;let ue=g.get(ie);ue===void 0&&(ue={},g.set(ie,ue));const ce=q(S);if(ce!==L.__cacheKey){ue[ce]===void 0&&(ue[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ue[ce].usedTimes++;const ze=ue[L.__cacheKey];ze!==void 0&&(ue[L.__cacheKey].usedTimes--,ze.usedTimes===0&&C(S)),L.__cacheKey=ce,L.__webglTexture=ue[ce].texture}return K}function ne(L,S,K){let ie=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=i.TEXTURE_3D);const ue=le(L,S),ce=S.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+K);const ze=n.get(ce);if(ce.version!==ze.__version||ue===!0){t.activeTexture(i.TEXTURE0+K);const Ie=St.getPrimaries(St.workingColorSpace),me=S.colorSpace===Ri?null:St.getPrimaries(S.colorSpace),xe=S.colorSpace===Ri||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Xe=R(S)&&m(S.image)===!1;let pe=p(S.image,Xe,!1,r.maxTextureSize);pe=et(S,pe);const Pt=m(pe)||o,tt=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),Te=I(S.internalFormat,tt,De,S.colorSpace,S.isVideoTexture);$(ie,S,Pt);let Le;const P=S.mipmaps,se=o&&S.isVideoTexture!==!0&&Te!==rf,we=ze.__version===void 0||ue===!0,N=ce.dataReady,fe=U(S,pe,Pt);if(S.isDepthTexture)Te=i.DEPTH_COMPONENT,o?S.type===pi?Te=i.DEPTH_COMPONENT32F:S.type===Ci?Te=i.DEPTH_COMPONENT24:S.type===ir?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===rr&&Te===i.DEPTH_COMPONENT&&S.type!==Mc&&S.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ci,De=s.convert(S.type)),S.format===Kr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,S.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ir,De=s.convert(S.type))),we&&(se?t.texStorage2D(i.TEXTURE_2D,1,Te,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Te,pe.width,pe.height,0,tt,De,null));else if(S.isDataTexture)if(P.length>0&&Pt){se&&we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],se?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,tt,De,Le.data);S.generateMipmaps=!1}else se?(we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,pe.width,pe.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,tt,De,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,pe.width,pe.height,0,tt,De,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Te,P[0].width,P[0].height,pe.depth);for(let W=0,he=P.length;W<he;W++)Le=P[W],S.format!==Wn?tt!==null?se?N&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,tt,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Te,Le.width,Le.height,pe.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,tt,De,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Te,Le.width,Le.height,pe.depth,0,tt,De,Le.data)}else{se&&we&&t.texStorage2D(i.TEXTURE_2D,fe,Te,P[0].width,P[0].height);for(let W=0,he=P.length;W<he;W++)Le=P[W],S.format!==Wn?tt!==null?se?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,tt,De,Le.data):t.texImage2D(i.TEXTURE_2D,W,Te,Le.width,Le.height,0,tt,De,Le.data)}else if(S.isDataArrayTexture)se?(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Te,pe.width,pe.height,pe.depth),N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,tt,De,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,pe.width,pe.height,pe.depth,0,tt,De,pe.data);else if(S.isData3DTexture)se?(we&&t.texStorage3D(i.TEXTURE_3D,fe,Te,pe.width,pe.height,pe.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,tt,De,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,pe.width,pe.height,pe.depth,0,tt,De,pe.data);else if(S.isFramebufferTexture){if(we)if(se)t.texStorage2D(i.TEXTURE_2D,fe,Te,pe.width,pe.height);else{let W=pe.width,he=pe.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Te,W,he,0,tt,De,null),W>>=1,he>>=1}}else if(P.length>0&&Pt){if(se&&we){const W=Et(P[0]);t.texStorage2D(i.TEXTURE_2D,fe,Te,W.width,W.height)}for(let W=0,he=P.length;W<he;W++)Le=P[W],se?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,tt,De,Le):t.texImage2D(i.TEXTURE_2D,W,Te,tt,De,Le);S.generateMipmaps=!1}else if(se){if(we){const W=Et(pe);t.texStorage2D(i.TEXTURE_2D,fe,Te,W.width,W.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,De,pe)}else t.texImage2D(i.TEXTURE_2D,0,Te,tt,De,pe);E(S,Pt)&&A(ie),ze.__version=ce.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Be(L,S,K){if(S.image.length!==6)return;const ie=le(L,S),ue=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const ce=n.get(ue);if(ue.version!==ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+K);const ze=St.getPrimaries(St.workingColorSpace),Ie=S.colorSpace===Ri?null:St.getPrimaries(S.colorSpace),me=S.colorSpace===Ri||ze===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let W=0;W<6;W++)!xe&&!Xe?pe[W]=p(S.image[W],!1,!0,r.maxCubemapSize):pe[W]=Xe?S.image[W].image:S.image[W],pe[W]=et(S,pe[W]);const Pt=pe[0],tt=m(Pt)||o,De=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),Le=I(S.internalFormat,De,Te,S.colorSpace),P=o&&S.isVideoTexture!==!0,se=ce.__version===void 0||ie===!0,we=ue.dataReady;let N=U(S,Pt,tt);$(i.TEXTURE_CUBE_MAP,S,tt);let fe;if(xe){P&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Le,Pt.width,Pt.height);for(let W=0;W<6;W++){fe=pe[W].mipmaps;for(let he=0;he<fe.length;he++){const _e=fe[he];S.format!==Wn?De!==null?P?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,0,0,_e.width,_e.height,De,Te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he,Le,_e.width,_e.height,0,De,Te,_e.data)}}}else{if(fe=S.mipmaps,P&&se){fe.length>0&&N++;const W=Et(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Le,W.width,W.height)}for(let W=0;W<6;W++)if(Xe){P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe[W].width,pe[W].height,De,Te,pe[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,pe[W].width,pe[W].height,0,De,Te,pe[W].data);for(let he=0;he<fe.length;he++){const qe=fe[he].image[W].image;P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,qe.width,qe.height,De,Te,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,qe.width,qe.height,0,De,Te,qe.data)}}else{P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,De,Te,pe[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Le,De,Te,pe[W]);for(let he=0;he<fe.length;he++){const _e=fe[he];P?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,0,0,De,Te,_e.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,he+1,Le,De,Te,_e.image[W])}}}E(S,tt)&&A(i.TEXTURE_CUBE_MAP),ce.__version=ue.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Ue(L,S,K,ie,ue,ce){const ze=s.convert(K.format,K.colorSpace),Ie=s.convert(K.type),me=I(K.internalFormat,ze,Ie,K.colorSpace);if(!n.get(S).__hasExternalTextures){const Xe=Math.max(1,S.width>>ce),pe=Math.max(1,S.height>>ce);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ce,me,Xe,pe,S.depth,0,ze,Ie,null):t.texImage2D(ue,ce,me,Xe,pe,0,ze,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),at(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ue,n.get(K).__webglTexture,0,Fe(S)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ue,n.get(K).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(L,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer&&!S.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||at(S)){const ue=S.depthTexture;ue&&ue.isDepthTexture&&(ue.type===pi?ie=i.DEPTH_COMPONENT32F:ue.type===Ci&&(ie=i.DEPTH_COMPONENT24));const ce=Fe(S);at(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ie,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ie,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Fe(S);K&&at(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,S.width,S.height):at(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const ie=S.textures;for(let ue=0;ue<ie.length;ue++){const ce=ie[ue],ze=s.convert(ce.format,ce.colorSpace),Ie=s.convert(ce.type),me=I(ce.internalFormat,ze,Ie,ce.colorSpace),xe=Fe(S);K&&at(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,me,S.width,S.height):at(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe(S.depthTexture,0);const ie=n.get(S.depthTexture).__webglTexture,ue=Fe(S);if(S.depthTexture.format===rr)at(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Kr)at(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const S=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,L)}else if(K){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=i.createRenderbuffer(),be(S.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),be(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(L,S,K){const ie=n.get(L);S!==void 0&&Ue(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Oe(L)}function Ct(L){const S=L.texture,K=n.get(L),ie=n.get(S);L.addEventListener("dispose",J);const ue=L.textures,ce=L.isWebGLCubeRenderTarget===!0,ze=ue.length>1,Ie=m(L)||o;if(ze||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=S.version,a.memory.textures++),ce){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let xe=0;xe<S.mipmaps.length;xe++)K.__webglFramebuffer[me][xe]=i.createFramebuffer()}else K.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)K.__webglFramebuffer[me]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ze)if(r.drawBuffers)for(let me=0,xe=ue.length;me<xe;me++){const Xe=n.get(ue[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&at(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const xe=ue[me];K.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[me]);const Xe=s.convert(xe.format,xe.colorSpace),pe=s.convert(xe.type),Pt=I(xe.internalFormat,Xe,pe,xe.colorSpace,L.isXRRenderTarget===!0),tt=Fe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Pt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,K.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),be(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),$(i.TEXTURE_CUBE_MAP,S,Ie);for(let me=0;me<6;me++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ue(K.__webglFramebuffer[me][xe],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Ue(K.__webglFramebuffer[me],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);E(S,Ie)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let me=0,xe=ue.length;me<xe;me++){const Xe=ue[me],pe=n.get(Xe);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),$(i.TEXTURE_2D,Xe,Ie),Ue(K.__webglFramebuffer,L,Xe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),E(Xe,Ie)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ie.__webglTexture),$(me,S,Ie),o&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ue(K.__webglFramebuffer[xe],L,S,i.COLOR_ATTACHMENT0,me,xe);else Ue(K.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,me,0);E(S,Ie)&&A(me),t.unbindTexture()}L.depthBuffer&&Oe(L)}function Ce(L){const S=m(L)||o,K=L.textures;for(let ie=0,ue=K.length;ie<ue;ie++){const ce=K[ie];if(E(ce,S)){const ze=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ce).__webglTexture;t.bindTexture(ze,Ie),A(ze),t.unbindTexture()}}}function Ke(L){if(o&&L.samples>0&&at(L)===!1){const S=L.textures,K=L.width,ie=L.height;let ue=i.COLOR_BUFFER_BIT;const ce=[],ze=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),me=S.length>1;if(me)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){ce.push(i.COLOR_ATTACHMENT0+xe),L.depthBuffer&&ce.push(ze);const Xe=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Xe===!1&&(L.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]),Xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ze]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ze])),me){const pe=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,K,ie,0,0,K,ie,ue,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Xe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Fe(L){return Math.min(r.maxSamples,L.samples)}function at(L){const S=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(L){const S=a.render.frame;f.get(L)!==S&&(f.set(L,S),L.update())}function et(L,S){const K=L.colorSpace,ie=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===fc||K!==Ni&&K!==Ri&&(St.getTransfer(K)===Lt?o===!1?e.has("EXT_sRGB")===!0&&ie===Wn?(L.format=fc,L.minFilter=gn,L.generateMipmaps=!1):S=af.sRGBToLinear(S):(ie!==Wn||ue!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=O,this.setTexture2D=oe,this.setTexture2DArray=D,this.setTexture3D=re,this.setTextureCube=te,this.rebindTextures=G,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=at}function ky(i,e,t){const n=t.isWebGL2;function r(s,a=Ri){let o;const l=St.getTransfer(a);if(s===Ui)return i.UNSIGNED_BYTE;if(s===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Qh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===rg)return i.BYTE;if(s===sg)return i.SHORT;if(s===Mc)return i.UNSIGNED_SHORT;if(s===Zh)return i.INT;if(s===Ci)return i.UNSIGNED_INT;if(s===pi)return i.FLOAT;if(s===bs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===og)return i.ALPHA;if(s===Wn)return i.RGBA;if(s===ag)return i.LUMINANCE;if(s===cg)return i.LUMINANCE_ALPHA;if(s===rr)return i.DEPTH_COMPONENT;if(s===Kr)return i.DEPTH_STENCIL;if(s===fc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===lg)return i.RED;if(s===ef)return i.RED_INTEGER;if(s===ug)return i.RG;if(s===tf)return i.RG_INTEGER;if(s===nf)return i.RGBA_INTEGER;if(s===ga||s===_a||s===va||s===xa)if(l===Lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cu||s===lu||s===uu||s===hu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fu||s===du)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fu)return l===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===du)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===Su||s===Eu||s===bu||s===Tu||s===Au||s===wu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_u)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Su)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Au)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wu)return l===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ya||s===Ru||s===Cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ya)return l===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hg||s===Lu||s===Pu||s===Uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ya)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ir?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Hy extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nr extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),m=this._getHandJoint(h,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=u.position.distanceTo(f.position),g=.02,v=.005;h.inputState.pinching&&d>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ii({extensions:{fragDepth:!0},vertexShader:Vy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Cs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class qy extends ar{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,h=null,u=null,f=null,d=null,g=null,v=null;const y=new Xy,p=t.getContextAttributes();let m=null,R=null;const E=[],A=[],I=new Re;let U=null;const w=new Pn;w.layers.enable(1),w.viewport=new Kt;const z=new Pn;z.layers.enable(2),z.viewport=new Kt;const J=[w,z],M=new Hy;M.layers.enable(1),M.layers.enable(2);let C=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=E[$];return le===void 0&&(le=new Xa,E[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=E[$];return le===void 0&&(le=new Xa,E[$]=le),le.getGripSpace()},this.getHand=function($){let le=E[$];return le===void 0&&(le=new Xa,E[$]=le),le.getHandSpace()};function ee($){const le=A.indexOf($.inputSource);if(le===-1)return;const ne=E[le];ne!==void 0&&(ne.update($.inputSource,$.frame,h||a),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",Q);for(let $=0;$<E.length;$++){const le=A[$];le!==null&&(A[$]=null,E[$].disconnect(le))}C=null,j=null,y.reset(),e.setRenderTarget(m),g=null,d=null,f=null,r=null,R=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",O),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new sr(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,ne=null,Be=null;p.depth&&(Be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Kr:rr,ne=p.stencil?ir:Ci);const Ue={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new sr(d.textureWidth,d.textureHeight,{format:Wn,type:Ui,depthTexture:new yf(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const be=e.properties.get(R);be.__ignoreDepthValues=d.ignoreDepthValues}R.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q($){for(let le=0;le<$.removed.length;le++){const ne=$.removed[le],Be=A.indexOf(ne);Be>=0&&(A[Be]=null,E[Be].disconnect(ne))}for(let le=0;le<$.added.length;le++){const ne=$.added[le];let Be=A.indexOf(ne);if(Be===-1){for(let be=0;be<E.length;be++)if(be>=A.length){A.push(ne),Be=be;break}else if(A[be]===null){A[be]=ne,Be=be;break}if(Be===-1)break}const Ue=E[Be];Ue&&Ue.connect(ne)}}const q=new F,oe=new F;function D($,le,ne){q.setFromMatrixPosition(le.matrixWorld),oe.setFromMatrixPosition(ne.matrixWorld);const Be=q.distanceTo(oe),Ue=le.projectionMatrix.elements,be=ne.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),Oe=Ue[14]/(Ue[10]+1),G=(Ue[9]+1)/Ue[5],Ct=(Ue[9]-1)/Ue[5],Ce=(Ue[8]-1)/Ue[0],Ke=(be[8]+1)/be[0],Fe=ut*Ce,at=ut*Ke,Ze=Be/(-Ce+Ke),et=Ze*-Ce;le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(et),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const Et=ut+Ze,L=Oe+Ze,S=Fe-et,K=at+(Be-et),ie=G*Oe/L*Et,ue=Ct*Oe/L*Et;$.projectionMatrix.makePerspective(S,K,ie,ue,Et,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function re($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;y.texture!==null&&($.near=y.depthNear,$.far=y.depthFar),M.near=z.near=w.near=$.near,M.far=z.far=w.far=$.far,(C!==M.near||j!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,j=M.far,w.near=C,w.far=j,z.near=C,z.far=j,w.updateProjectionMatrix(),z.updateProjectionMatrix(),$.updateProjectionMatrix());const le=$.parent,ne=M.cameras;re(M,le);for(let Be=0;Be<ne.length;Be++)re(ne[Be],le);ne.length===2?D(M,w,z):M.projectionMatrix.copy(w.projectionMatrix),te($,M,le)};function te($,le,ne){ne===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ts*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null};let de=null;function ye($,le){if(u=le.getViewerPose(h||a),v=le,u!==null){const ne=u.views;g!==null&&(e.setRenderTargetFramebuffer(R,g.framebuffer),e.setRenderTarget(R));let Be=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,Be=!0);for(let be=0;be<ne.length;be++){const ut=ne[be];let Oe=null;if(g!==null)Oe=g.getViewport(ut);else{const Ct=f.getViewSubImage(d,ut);Oe=Ct.viewport,be===0&&(e.setRenderTargetTextures(R,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(R))}let G=J[be];G===void 0&&(G=new Pn,G.layers.enable(be),G.viewport=new Kt,J[be]=G),G.matrix.fromArray(ut.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(ut.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),be===0&&(M.matrix.copy(G.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Be===!0&&M.cameras.push(G)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const be=f.getDepthInformation(ne[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let ne=0;ne<E.length;ne++){const Be=A[ne],Ue=E[ne];Be!==null&&Ue!==void 0&&Ue.update(Be,le,h||a)}y.render(e,M),de&&de($,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const ke=new vf;ke.setAnimationLoop(ye),this.setAnimationLoop=function($){de=$},this.dispose=function(){}}}const Ki=new gi,Yy=new Ot;function $y(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,R,E,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&g(p,m,A)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,R,E):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const R=e.get(m),E=R.envMap,A=R.envMapRotation;if(E&&(p.envMap.value=E,Ki.copy(A),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Ki)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const I=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,R,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*R,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,R){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const R=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jy(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(R,E){const A=E.program;n.uniformBlockBinding(R,A)}function h(R,E){let A=r[R.id];A===void 0&&(v(R),A=u(R),r[R.id]=A,R.addEventListener("dispose",p));const I=E.program;n.updateUBOMapping(R,I);const U=e.render.frame;s[R.id]!==U&&(d(R),s[R.id]=U)}function u(R){const E=f();R.__bindingPointIndex=E;const A=i.createBuffer(),I=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const E=r[R.id],A=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let U=0,w=A.length;U<w;U++){const z=Array.isArray(A[U])?A[U]:[A[U]];for(let J=0,M=z.length;J<M;J++){const C=z[J];if(g(C,U,J,I)===!0){const j=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let Q=0;Q<ee.length;Q++){const q=ee[Q],oe=y(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,j+O,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,O),O+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,E,A,I){const U=R.value,w=E+"_"+A;if(I[w]===void 0)return typeof U=="number"||typeof U=="boolean"?I[w]=U:I[w]=U.clone(),!0;{const z=I[w];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return I[w]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function v(R){const E=R.uniforms;let A=0;const I=16;for(let w=0,z=E.length;w<z;w++){const J=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,C=J.length;M<C;M++){const j=J[M],ee=Array.isArray(j.value)?j.value:[j.value];for(let O=0,Q=ee.length;O<Q;O++){const q=ee[O],oe=y(q),D=A%I;D!==0&&I-D<oe.boundary&&(A+=I-D),j.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=oe.storage}}}const U=A%I;return U>0&&(A+=I-U),R.__size=A,R.__cache={},this}function y(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function p(R){const E=R.target;E.removeEventListener("dispose",p);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:h,dispose:m}}class Af{constructor(e={}){const{canvas:t=Bg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const g=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const m=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const E=this;let A=!1,I=0,U=0,w=null,z=-1,J=null;const M=new Kt,C=new Kt;let j=null;const ee=new xt(0);let O=0,Q=t.width,q=t.height,oe=1,D=null,re=null;const te=new Kt(0,0,Q,q),de=new Kt(0,0,Q,q);let ye=!1;const ke=new Tc;let $=!1,le=!1,ne=null;const Be=new Ot,Ue=new Re,be=new F,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return w===null?oe:1}let G=n;function Ct(T,H){for(let X=0;X<T.length;X++){const Y=T[X],V=t.getContext(Y,H);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",fe,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),G=Ct(H,T),G===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Ke,Fe,at,Ze,et,Et,L,S,K,ie,ue,ce,ze,Ie,me,xe,Xe,pe,Pt,tt,De,Te,Le;function P(){Ce=new tx(G),Ke=new jv(G,Ce,e),Ce.init(Ke),De=new ky(G,Ce,Ke),Fe=new By(G,Ce,Ke),at=new rx(G),Ze=new by,et=new zy(G,Ce,Fe,Ze,Ke,De,at),Et=new Zv(E),L=new ex(E),S=new u_(G,Ke),Te=new Yv(G,Ce,S,Ke),K=new nx(G,S,at,Te),ie=new cx(G,K,S,at),pe=new ax(G,Ke,et),me=new Kv(Ze),ue=new Ey(E,Et,L,Ce,Ke,Te,me),ce=new $y(E,Ze),ze=new Ay,Ie=new Uy(Ce,Ke),Xe=new qv(E,Et,L,Fe,ie,d,l),xe=new Fy(E,ie,Ke),Le=new jy(G,at,Ke,Fe),Pt=new $v(G,Ce,at,Ke),tt=new ix(G,Ce,at,Ke),at.programs=ue.programs,E.capabilities=Ke,E.extensions=Ce,E.properties=Ze,E.renderLists=ze,E.shadowMap=xe,E.state=Fe,E.info=at}P();const se=new qy(E,G);this.xr=se,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(T){T!==void 0&&(oe=T,this.setSize(Q,q,!1))},this.getSize=function(T){return T.set(Q,q)},this.setSize=function(T,H,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,q=H,t.width=Math.floor(T*oe),t.height=Math.floor(H*oe),X===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(Q*oe,q*oe).floor()},this.setDrawingBufferSize=function(T,H,X){Q=T,q=H,oe=X,t.width=Math.floor(T*X),t.height=Math.floor(H*X),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,H,X,Y){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,H,X,Y),Fe.viewport(M.copy(te).multiplyScalar(oe).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,H,X,Y){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,H,X,Y),Fe.scissor(C.copy(de).multiplyScalar(oe).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Fe.setScissorTest(ye=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,H=!0,X=!0){let Y=0;if(T){let V=!1;if(w!==null){const Se=w.texture.format;V=Se===nf||Se===tf||Se===ef}if(V){const Se=w.texture.type,Pe=Se===Ui||Se===Ci||Se===Mc||Se===ir||Se===Jh||Se===Qh,Ne=Xe.getClearColor(),Ge=Xe.getClearAlpha(),Je=Ne.r,Ve=Ne.g,Ye=Ne.b;Pe?(g[0]=Je,g[1]=Ve,g[2]=Ye,g[3]=Ge,G.clearBufferuiv(G.COLOR,0,g)):(v[0]=Je,v[1]=Ve,v[2]=Ye,v[3]=Ge,G.clearBufferiv(G.COLOR,0,v))}else Y|=G.COLOR_BUFFER_BIT}H&&(Y|=G.DEPTH_BUFFER_BIT),X&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ze.dispose(),Ie.dispose(),Ze.dispose(),Et.dispose(),L.dispose(),ie.dispose(),Te.dispose(),Le.dispose(),ue.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ut),se.removeEventListener("sessionend",ht),ne&&(ne.dispose(),ne=null),bt.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=at.autoReset,H=xe.enabled,X=xe.autoUpdate,Y=xe.needsUpdate,V=xe.type;P(),at.autoReset=T,xe.enabled=H,xe.autoUpdate=X,xe.needsUpdate=Y,xe.type=V}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function W(T){const H=T.target;H.removeEventListener("dispose",W),he(H)}function he(T){_e(T),Ze.remove(T)}function _e(T){const H=Ze.get(T).programs;H!==void 0&&(H.forEach(function(X){ue.releaseProgram(X)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,X,Y,V,Se){H===null&&(H=ut);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Zt(T,H,X,Y,V);Fe.setMaterial(Y,Pe);let Ge=X.index,Je=1;if(Y.wireframe===!0){if(Ge=K.getWireframeAttribute(X),Ge===void 0)return;Je=2}const Ve=X.drawRange,Ye=X.attributes.position;let Dt=Ve.start*Je,Jt=(Ve.start+Ve.count)*Je;Se!==null&&(Dt=Math.max(Dt,Se.start*Je),Jt=Math.min(Jt,(Se.start+Se.count)*Je)),Ge!==null?(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ge.count)):Ye!=null&&(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ye.count));const Ft=Jt-Dt;if(Ft<0||Ft===1/0)return;Te.setup(V,Y,Ne,X,Ge);let Tn,wt=Pt;if(Ge!==null&&(Tn=S.get(Ge),wt=tt,wt.setIndex(Tn)),V.isMesh)Y.wireframe===!0?(Fe.setLineWidth(Y.wireframeLinewidth*Oe()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(V.isLine){let Qe=Y.linewidth;Qe===void 0&&(Qe=1),Fe.setLineWidth(Qe*Oe()),V.isLineSegments?wt.setMode(G.LINES):V.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else V.isPoints?wt.setMode(G.POINTS):V.isSprite&&wt.setMode(G.TRIANGLES);if(V.isBatchedMesh)wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)wt.renderInstances(Dt,Ft,V.count);else if(X.isInstancedBufferGeometry){const Qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,hr=Math.min(X.instanceCount,Qe);wt.renderInstances(Dt,Ft,hr)}else wt.render(Dt,Ft)};function qe(T,H,X){T.transparent===!0&&T.side===Zn&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,ur(T,H,X),T.side=Di,T.needsUpdate=!0,ur(T,H,X),T.side=Zn):ur(T,H,X)}this.compile=function(T,H,X=null){X===null&&(X=T),p=Ie.get(X),p.init(),R.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(E._useLegacyLights);const Y=new Set;return T.traverse(function(V){const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ne=Se[Pe];qe(Ne,X,V),Y.add(Ne)}else qe(Se,X,V),Y.add(Se)}),R.pop(),p=null,Y},this.compileAsync=function(T,H,X=null){const Y=this.compile(T,H,X);return new Promise(V=>{function Se(){if(Y.forEach(function(Pe){Ze.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){V(T);return}setTimeout(Se,10)}Ce.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function pt(T){ft&&ft(T)}function Ut(){bt.stop()}function ht(){bt.start()}const bt=new vf;bt.setAnimationLoop(pt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(T){ft=T,se.setAnimationLoop(T),T===null?bt.stop():bt.start()},se.addEventListener("sessionstart",Ut),se.addEventListener("sessionend",ht),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(H),H=se.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,H,w),p=Ie.get(T,R.length),p.init(),R.push(p),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(Be),le=this.localClippingEnabled,$=me.init(this.clippingPlanes,le),y=ze.get(T,m.length),y.init(),m.push(y),zt(T,H,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(D,re),this.info.render.frame++,$===!0&&me.beginShadows();const X=p.state.shadowsArray;if(xe.render(X,T,H),$===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1)&&Xe.render(y,T),p.setupLights(E._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let V=0,Se=Y.length;V<Se;V++){const Pe=Y[V];mn(y,T,Pe,Pe.viewport)}}else mn(y,T,H);w!==null&&(et.updateMultisampleRenderTarget(w),et.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(E,T,H),Te.resetDefaultState(),z=-1,J=null,R.pop(),R.length>0?p=R[R.length-1]:p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function zt(T,H,X,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){Y&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Be);const Pe=ie.update(T),Ne=T.material;Ne.visible&&y.push(T,Pe,Ne,X,be.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const Pe=ie.update(T),Ne=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),be.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),be.copy(Pe.boundingSphere.center)),be.applyMatrix4(T.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const Ge=Pe.groups;for(let Je=0,Ve=Ge.length;Je<Ve;Je++){const Ye=Ge[Je],Dt=Ne[Ye.materialIndex];Dt&&Dt.visible&&y.push(T,Pe,Dt,X,be.z,Ye)}}else Ne.visible&&y.push(T,Pe,Ne,X,be.z,null)}}const Se=T.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)zt(Se[Pe],H,X,Y)}function mn(T,H,X,Y){const V=T.opaque,Se=T.transmissive,Pe=T.transparent;p.setupLightsView(X),$===!0&&me.setGlobalState(E.clippingPlanes,X),Se.length>0&&ti(V,Se,H,X),Y&&Fe.viewport(M.copy(Y)),V.length>0&&cr(V,H,X),Se.length>0&&cr(Se,H,X),Pe.length>0&&cr(Pe,H,X),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ti(T,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Se=Ke.isWebGL2;ne===null&&(ne=new sr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?bs:Ui,minFilter:tr,samples:Se?4:0})),E.getDrawingBufferSize(Ue),Se?ne.setSize(Ue.x,Ue.y):ne.setSize(Do(Ue.x),Do(Ue.y));const Pe=E.getRenderTarget();E.setRenderTarget(ne),E.getClearColor(ee),O=E.getClearAlpha(),O<1&&E.setClearColor(16777215,.5),E.clear();const Ne=E.toneMapping;E.toneMapping=Pi,cr(T,X,Y),et.updateMultisampleRenderTarget(ne),et.updateRenderTargetMipmap(ne);let Ge=!1;for(let Je=0,Ve=H.length;Je<Ve;Je++){const Ye=H[Je],Dt=Ye.object,Jt=Ye.geometry,Ft=Ye.material,Tn=Ye.group;if(Ft.side===Zn&&Dt.layers.test(Y.layers)){const wt=Ft.side;Ft.side=vn,Ft.needsUpdate=!0,lr(Dt,X,Y,Jt,Ft,Tn),Ft.side=wt,Ft.needsUpdate=!0,Ge=!0}}Ge===!0&&(et.updateMultisampleRenderTarget(ne),et.updateRenderTargetMipmap(ne)),E.setRenderTarget(Pe),E.setClearColor(ee,O),E.toneMapping=Ne}function cr(T,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Pe=T[V],Ne=Pe.object,Ge=Pe.geometry,Je=Y===null?Pe.material:Y,Ve=Pe.group;Ne.layers.test(X.layers)&&lr(Ne,H,X,Ge,Je,Ve)}}function lr(T,H,X,Y,V,Se){T.onBeforeRender(E,H,X,Y,V,Se),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(E,H,X,Y,T,Se),V.transparent===!0&&V.side===Zn&&V.forceSinglePass===!1?(V.side=vn,V.needsUpdate=!0,E.renderBufferDirect(X,H,Y,V,T,Se),V.side=Di,V.needsUpdate=!0,E.renderBufferDirect(X,H,Y,V,T,Se),V.side=Zn):E.renderBufferDirect(X,H,Y,V,T,Se),T.onAfterRender(E,H,X,Y,V,Se)}function ur(T,H,X){H.isScene!==!0&&(H=ut);const Y=Ze.get(T),V=p.state.lights,Se=p.state.shadowsArray,Pe=V.state.version,Ne=ue.getParameters(T,V.state,Se,H,X),Ge=ue.getProgramCacheKey(Ne);let Je=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?L:Et).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",W),Je=new Map,Y.programs=Je);let Ve=Je.get(Ge);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===Pe)return ni(T,Ne),Ve}else Ne.uniforms=ue.getUniforms(T),T.onBuild(X,Ne,E),T.onBeforeCompile(Ne,E),Ve=ue.acquireProgram(Ne,Ge),Je.set(Ge,Ve),Y.uniforms=Ne.uniforms;const Ye=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=me.uniform),ni(T,Ne),Y.needsLights=an(T),Y.lightsStateVersion=Pe,Y.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function Ls(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Mo.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ni(T,H){const X=Ze.get(T);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Zt(T,H,X,Y,V){H.isScene!==!0&&(H=ut),et.resetTextureUnits();const Se=H.fog,Pe=Y.isMeshStandardMaterial?H.environment:null,Ne=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ni,Ge=(Y.isMeshStandardMaterial?L:Et).get(Y.envMap||Pe),Je=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ye=!!X.morphAttributes.position,Dt=!!X.morphAttributes.normal,Jt=!!X.morphAttributes.color;let Ft=Pi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ft=E.toneMapping);const Tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=Tn!==void 0?Tn.length:0,Qe=Ze.get(Y),hr=p.state.lights;if($===!0&&(le===!0||T!==J)){const It=T===J&&Y.id===z;me.setState(Y,T,It)}let Tt=!1;Y.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==hr.state.version||Qe.outputColorSpace!==Ne||V.isBatchedMesh&&Qe.batching===!1||!V.isBatchedMesh&&Qe.batching===!0||V.isInstancedMesh&&Qe.instancing===!1||!V.isInstancedMesh&&Qe.instancing===!0||V.isSkinnedMesh&&Qe.skinning===!1||!V.isSkinnedMesh&&Qe.skinning===!0||V.isInstancedMesh&&Qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Qe.instancingMorph===!1&&V.morphTexture!==null||Qe.envMap!==Ge||Y.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==me.numPlanes||Qe.numIntersection!==me.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ve||Qe.morphTargets!==Ye||Qe.morphNormals!==Dt||Qe.morphColors!==Jt||Qe.toneMapping!==Ft||Ke.isWebGL2===!0&&Qe.morphTargetsCount!==wt)&&(Tt=!0):(Tt=!0,Qe.__version=Y.version);let qn=Qe.currentProgram;Tt===!0&&(qn=ur(Y,H,V));let xn=!1,Gt=!1,Un=!1;const mt=qn.getUniforms(),Dn=Qe.uniforms;if(Fe.useProgram(qn.program)&&(xn=!0,Gt=!0,Un=!0),Y.id!==z&&(z=Y.id,Gt=!0),xn||J!==T){mt.setValue(G,"projectionMatrix",T.projectionMatrix),mt.setValue(G,"viewMatrix",T.matrixWorldInverse);const It=mt.map.cameraPosition;It!==void 0&&It.setValue(G,be.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Gt=!0,Un=!0)}if(V.isSkinnedMesh){mt.setOptional(G,V,"bindMatrix"),mt.setOptional(G,V,"bindMatrixInverse");const It=V.skeleton;It&&(Ke.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(G,"boneTexture",It.boneTexture,et)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(mt.setOptional(G,V,"batchingTexture"),mt.setValue(G,"batchingTexture",V._matricesTexture,et));const Oi=X.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&Ke.isWebGL2===!0)&&pe.update(V,X,qn),(Gt||Qe.receiveShadow!==V.receiveShadow)&&(Qe.receiveShadow=V.receiveShadow,mt.setValue(G,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Dn.envMap.value=Ge,Dn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Gt&&(mt.setValue(G,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&on(Dn,Un),Se&&Y.fog===!0&&ce.refreshFogUniforms(Dn,Se),ce.refreshMaterialUniforms(Dn,Y,oe,q,ne),Mo.upload(G,Ls(Qe),Dn,et)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Mo.upload(G,Ls(Qe),Dn,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(G,"center",V.center),mt.setValue(G,"modelViewMatrix",V.modelViewMatrix),mt.setValue(G,"normalMatrix",V.normalMatrix),mt.setValue(G,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const It=Y.uniformsGroups;for(let In=0,fr=It.length;In<fr;In++)if(Ke.isWebGL2){const ii=It[In];Le.update(ii,qn),Le.bind(ii,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function on(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function an(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,X){Ze.get(T.texture).__webglTexture=H,Ze.get(T.depthTexture).__webglTexture=X;const Y=Ze.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const X=Ze.get(T);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,X=0){w=T,I=H,U=X;let Y=!0,V=null,Se=!1,Pe=!1;if(T){const Ge=Ze.get(T);Ge.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ge.__webglFramebuffer===void 0?et.setupRenderTarget(T):Ge.__hasExternalTextures&&et.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);const Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const Ve=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][X]:V=Ve[H],Se=!0):Ke.isWebGL2&&T.samples>0&&et.useMultisampledRTT(T)===!1?V=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[X]:V=Ve,M.copy(T.viewport),C.copy(T.scissor),j=T.scissorTest}else M.copy(te).multiplyScalar(oe).floor(),C.copy(de).multiplyScalar(oe).floor(),j=ye;if(Fe.bindFramebuffer(G.FRAMEBUFFER,V)&&Ke.drawBuffers&&Y&&Fe.drawBuffers(T,V),Fe.viewport(M),Fe.scissor(C),Fe.setScissorTest(j),Se){const Ge=Ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,X)}else if(Pe){const Ge=Ze.get(T.texture),Je=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ge.__webglTexture,X||0,Je)}z=-1},this.readRenderTargetPixels=function(T,H,X,Y,V,Se,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Fe.bindFramebuffer(G.FRAMEBUFFER,Ne);try{const Ge=T.texture,Je=Ge.format,Ve=Ge.type;if(Je!==Wn&&De.convert(Je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ve===bs&&(Ce.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ve!==Ui&&De.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===pi&&(Ke.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&X>=0&&X<=T.height-V&&G.readPixels(H,X,Y,V,De.convert(Je),De.convert(Ve),Se)}finally{const Ge=w!==null?Ze.get(w).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,H,X=0){const Y=Math.pow(2,-X),V=Math.floor(H.image.width*Y),Se=Math.floor(H.image.height*Y);et.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,T.x,T.y,V,Se),Fe.unbindTexture()},this.copyTextureToTexture=function(T,H,X,Y=0){const V=H.image.width,Se=H.image.height,Pe=De.convert(X.format),Ne=De.convert(X.type);et.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,V,Se,Pe,Ne,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,Pe,Ne,H.image),Y===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,X,Y,V=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(T.max.x-T.min.x),Pe=Math.round(T.max.y-T.min.y),Ne=T.max.z-T.min.z+1,Ge=De.convert(Y.format),Je=De.convert(Y.type);let Ve;if(Y.isData3DTexture)et.setTexture3D(Y,0),Ve=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)et.setTexture2DArray(Y,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=G.getParameter(G.UNPACK_ROW_LENGTH),Dt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Jt=G.getParameter(G.UNPACK_SKIP_PIXELS),Ft=G.getParameter(G.UNPACK_SKIP_ROWS),Tn=G.getParameter(G.UNPACK_SKIP_IMAGES),wt=X.isCompressedTexture?X.mipmaps[V]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,Je,wt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,wt.data):G.texSubImage3D(Ve,V,H.x,H.y,H.z,Se,Pe,Ne,Ge,Je,wt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Tn),V===0&&Y.generateMipmaps&&G.generateMipmap(Ve),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?et.setTextureCube(T,0):T.isData3DTexture?et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?et.setTexture2DArray(T,0):et.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){I=0,U=0,w=null,Fe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===ko?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ky extends Af{}Ky.prototype.isWebGL1Renderer=!0;class Zy extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jy extends pn{constructor(e,t,n,r,s,a,o,l,h){super(e,t,n,r,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,h;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),h=n[r]-a,h<0)o=r+1;else if(h>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,g=(a-u)/d;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],a=[],o=new F,l=new Ot;for(let g=0;g<=e;g++){const v=g/e;r[g]=this.getTangentAt(v,new F)}s[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(jt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(o,v))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(jt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],g*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wf extends ei{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Re){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,g=h-this.aY;l=d*u-g*f+this.aX,h=d*f+g*u+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qy extends wf{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){r(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,u,f){let d=(a-s)/h-(o-s)/(h+u)+(o-a)/u,g=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,g*=u,r(a,o,d,g)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const vo=new F,qa=new wc,Ya=new wc,$a=new wc;class eM extends ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let h,u;this.closed||o>0?h=r[(o-1)%s]:(vo.subVectors(r[0],r[1]).add(r[0]),h=vo);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(vo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(f),g),y=Math.pow(f.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(u),g);y<1e-4&&(y=1),v<1e-4&&(v=y),p<1e-4&&(p=y),qa.initNonuniformCatmullRom(h.x,f.x,d.x,u.x,v,y,p),Ya.initNonuniformCatmullRom(h.y,f.y,d.y,u.y,v,y,p),$a.initNonuniformCatmullRom(h.z,f.z,d.z,u.z,v,y,p)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(h.x,f.x,d.x,u.x,this.tension),Ya.initCatmullRom(h.y,f.y,d.y,u.y,this.tension),$a.initCatmullRom(h.z,f.z,d.z,u.z,this.tension));return n.set(qa.calc(l),Ya.calc(l),$a.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eh(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function tM(i,e){const t=1-i;return t*t*e}function nM(i,e){return 2*(1-i)*i*e}function iM(i,e){return i*i*e}function _s(i,e,t,n){return tM(i,e)+nM(i,t)+iM(i,n)}function rM(i,e){const t=1-i;return t*t*t*e}function sM(i,e){const t=1-i;return 3*t*t*i*e}function oM(i,e){return 3*(1-i)*i*i*e}function aM(i,e){return i*i*i*e}function vs(i,e,t,n,r){return rM(i,e)+sM(i,t)+oM(i,n)+aM(i,r)}class cM extends ei{constructor(e=new Re,t=new Re,n=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,r.x,s.x,a.x,o.x),vs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lM extends ei{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,r.x,s.x,a.x,o.x),vs(e,r.y,s.y,a.y,o.y),vs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uM extends ei{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hM extends ei{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fM extends ei{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(_s(e,r.x,s.x,a.x),_s(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends ei{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(_s(e,r.x,s.x,a.x),_s(e,r.y,s.y,a.y),_s(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dM extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],h=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Eh(o,l.x,h.x,u.x,f.x),Eh(o,l.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Re().fromArray(r))}return this}}var pM=Object.freeze({__proto__:null,ArcCurve:Qy,CatmullRomCurve3:eM,CubicBezierCurve:cM,CubicBezierCurve3:lM,EllipseCurve:wf,LineCurve:uM,LineCurve3:hM,QuadraticBezierCurve:fM,QuadraticBezierCurve3:Rf,SplineCurve:dM});class Rc extends Xn{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],g=[];let v=0;const y=[],p=n/2;let m=0;R(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2));function R(){const A=new F,I=new F;let U=0;const w=(t-e)/n;for(let z=0;z<=s;z++){const J=[],M=z/s,C=M*(t-e)+e;for(let j=0;j<=r;j++){const ee=j/r,O=ee*l+o,Q=Math.sin(O),q=Math.cos(O);I.x=C*Q,I.y=-M*n+p,I.z=C*q,f.push(I.x,I.y,I.z),A.set(Q,w,q).normalize(),d.push(A.x,A.y,A.z),g.push(ee,1-M),J.push(v++)}y.push(J)}for(let z=0;z<r;z++)for(let J=0;J<s;J++){const M=y[J][z],C=y[J+1][z],j=y[J+1][z+1],ee=y[J][z+1];u.push(M,C,ee),u.push(C,j,ee),U+=6}h.addGroup(m,U,0),m+=U}function E(A){const I=v,U=new Re,w=new F;let z=0;const J=A===!0?e:t,M=A===!0?1:-1;for(let j=1;j<=r;j++)f.push(0,p*M,0),d.push(0,M,0),g.push(.5,.5),v++;const C=v;for(let j=0;j<=r;j++){const O=j/r*l+o,Q=Math.cos(O),q=Math.sin(O);w.x=J*q,w.y=p*M,w.z=J*Q,f.push(w.x,w.y,w.z),d.push(0,M,0),U.x=Q*.5+.5,U.y=q*.5*M+.5,g.push(U.x,U.y),v++}for(let j=0;j<r;j++){const ee=I+j,O=C+j;A===!0?u.push(O,O+1,ee):u.push(O+1,O,ee),z+=3}h.addGroup(m,z,A===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Rc{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends Xn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const u=[],f=new F,d=new F,g=[],v=[],y=[],p=[];for(let m=0;m<=n;m++){const R=[],E=m/n;let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){const U=I/t;f.x=-e*Math.cos(r+U*s)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(r+U*s)*Math.sin(a+E*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),p.push(U+A,1-E),R.push(h++)}u.push(R)}for(let m=0;m<n;m++)for(let R=0;R<t;R++){const E=u[m][R+1],A=u[m][R],I=u[m+1][R],U=u[m+1][R+1];(m!==0||a>0)&&g.push(E,A,U),(m!==n-1||l<Math.PI)&&g.push(A,I,U)}this.setIndex(g),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xs extends Xn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],h=[],u=new F,f=new F,d=new F;for(let g=0;g<=n;g++)for(let v=0;v<=r;v++){const y=v/r*s,p=g/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),h.push(v/r),h.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=r;v++){const y=(r+1)*g+v-1,p=(r+1)*(g-1)+v-1,m=(r+1)*(g-1)+v,R=(r+1)*g+v;a.push(y,p,R),a.push(p,m,R)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lc extends Xn{constructor(e=new Rf(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,h=new Re;let u=new F;const f=[],d=[],g=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(g,2));function y(){for(let E=0;E<t;E++)p(E);p(s===!1?t:0),R(),m()}function p(E){u=e.getPointAt(E/t,u);const A=a.normals[E],I=a.binormals[E];for(let U=0;U<=r;U++){const w=U/r*Math.PI*2,z=Math.sin(w),J=-Math.cos(w);l.x=J*A.x+z*I.x,l.y=J*A.y+z*I.y,l.z=J*A.z+z*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let A=1;A<=r;A++){const I=(r+1)*(E-1)+(A-1),U=(r+1)*E+(A-1),w=(r+1)*E+A,z=(r+1)*(E-1)+A;v.push(I,U,z),v.push(U,w,z)}}function R(){for(let E=0;E<=t;E++)for(let A=0;A<=r;A++)h.x=E/t,h.y=A/r,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lc(new pM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class mM extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ja=new Ot,bh=new F,Th=new F;class gM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _M extends gM{constructor(){super(new xf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vM extends mM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ah{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);const wh={type:"change"},Ka={type:"start"},Rh={type:"end"},xo=new uf,Ch=new Ai,xM=Math.cos(70*Fg.DEG2RAD);class yM extends ar{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ie),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wh),n.update(),s=r.NONE},this.update=function(){const P=new F,se=new or().setFromUnitVectors(e.up,new F(0,1,0)),we=se.clone().invert(),N=new F,fe=new or,W=new F,he=2*Math.PI;return function(qe=null){const ft=n.object.position;P.copy(ft).sub(n.target),P.applyQuaternion(se),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&j(M(qe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let pt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(pt)&&isFinite(Ut)&&(pt<-Math.PI?pt+=he:pt>Math.PI&&(pt-=he),Ut<-Math.PI?Ut+=he:Ut>Math.PI&&(Ut-=he),pt<=Ut?o.theta=Math.max(pt,Math.min(Ut,o.theta)):o.theta=o.theta>(pt+Ut)/2?Math.max(pt,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ht=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)o.radius=te(o.radius);else{const bt=o.radius;o.radius=te(o.radius*h),ht=bt!=o.radius}if(P.setFromSpherical(o),P.applyQuaternion(we),ft.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&U){let bt=null;if(n.object.isPerspectiveCamera){const zt=P.length();bt=te(zt*h);const mn=zt-bt;n.object.position.addScaledVector(A,mn),n.object.updateMatrixWorld(),ht=!!mn}else if(n.object.isOrthographicCamera){const zt=new F(I.x,I.y,0);zt.unproject(n.object);const mn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ht=mn!==n.object.zoom;const ti=new F(I.x,I.y,0);ti.unproject(n.object),n.object.position.sub(ti).add(zt),n.object.updateMatrixWorld(),bt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(xo.origin.copy(n.object.position),xo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xo.direction))<xM?e.lookAt(n.target):(Ch.setFromNormalAndCoplanarPoint(n.object.up,n.target),xo.intersectPlane(Ch,n.target))))}else if(n.object.isOrthographicCamera){const bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ht=!0)}return h=1,U=!1,ht||N.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a||W.distanceToSquared(n.target)>a?(n.dispatchEvent(wh),N.copy(n.object.position),fe.copy(n.object.quaternion),W.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xe),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",L),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",L),n.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Ah,l=new Ah;let h=1;const u=new F,f=new Re,d=new Re,g=new Re,v=new Re,y=new Re,p=new Re,m=new Re,R=new Re,E=new Re,A=new F,I=new Re;let U=!1;const w=[],z={};let J=!1;function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function C(P){const se=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*se)}function j(P){l.theta-=P}function ee(P){l.phi-=P}const O=function(){const P=new F;return function(we,N){P.setFromMatrixColumn(N,0),P.multiplyScalar(-we),u.add(P)}}(),Q=function(){const P=new F;return function(we,N){n.screenSpacePanning===!0?P.setFromMatrixColumn(N,1):(P.setFromMatrixColumn(N,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(we),u.add(P)}}(),q=function(){const P=new F;return function(we,N){const fe=n.domElement;if(n.object.isPerspectiveCamera){const W=n.object.position;P.copy(W).sub(n.target);let he=P.length();he*=Math.tan(n.object.fov/2*Math.PI/180),O(2*we*he/fe.clientHeight,n.object.matrix),Q(2*N*he/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(we*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),Q(N*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function oe(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(P,se){if(!n.zoomToCursor)return;U=!0;const we=n.domElement.getBoundingClientRect(),N=P-we.left,fe=se-we.top,W=we.width,he=we.height;I.x=N/W*2-1,I.y=-(fe/he)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function de(P){f.set(P.clientX,P.clientY)}function ye(P){re(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function ke(P){v.set(P.clientX,P.clientY)}function $(P){d.set(P.clientX,P.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const se=n.domElement;j(2*Math.PI*g.x/se.clientHeight),ee(2*Math.PI*g.y/se.clientHeight),f.copy(d),n.update()}function le(P){R.set(P.clientX,P.clientY),E.subVectors(R,m),E.y>0?oe(C(E.y)):E.y<0&&D(C(E.y)),m.copy(R),n.update()}function ne(P){y.set(P.clientX,P.clientY),p.subVectors(y,v).multiplyScalar(n.panSpeed),q(p.x,p.y),v.copy(y),n.update()}function Be(P){re(P.clientX,P.clientY),P.deltaY<0?D(C(P.deltaY)):P.deltaY>0&&oe(C(P.deltaY)),n.update()}function Ue(P){let se=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),n.update())}function be(P){if(w.length===1)f.set(P.pageX,P.pageY);else{const se=Te(P),we=.5*(P.pageX+se.x),N=.5*(P.pageY+se.y);f.set(we,N)}}function ut(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const se=Te(P),we=.5*(P.pageX+se.x),N=.5*(P.pageY+se.y);v.set(we,N)}}function Oe(P){const se=Te(P),we=P.pageX-se.x,N=P.pageY-se.y,fe=Math.sqrt(we*we+N*N);m.set(0,fe)}function G(P){n.enableZoom&&Oe(P),n.enablePan&&ut(P)}function Ct(P){n.enableZoom&&Oe(P),n.enableRotate&&be(P)}function Ce(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const we=Te(P),N=.5*(P.pageX+we.x),fe=.5*(P.pageY+we.y);d.set(N,fe)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const se=n.domElement;j(2*Math.PI*g.x/se.clientHeight),ee(2*Math.PI*g.y/se.clientHeight),f.copy(d)}function Ke(P){if(w.length===1)y.set(P.pageX,P.pageY);else{const se=Te(P),we=.5*(P.pageX+se.x),N=.5*(P.pageY+se.y);y.set(we,N)}p.subVectors(y,v).multiplyScalar(n.panSpeed),q(p.x,p.y),v.copy(y)}function Fe(P){const se=Te(P),we=P.pageX-se.x,N=P.pageY-se.y,fe=Math.sqrt(we*we+N*N);R.set(0,fe),E.set(0,Math.pow(R.y/m.y,n.zoomSpeed)),oe(E.y),m.copy(R);const W=(P.pageX+se.x)*.5,he=(P.pageY+se.y)*.5;re(W,he)}function at(P){n.enableZoom&&Fe(P),n.enablePan&&Ke(P)}function Ze(P){n.enableZoom&&Fe(P),n.enableRotate&&Ce(P)}function et(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Et),n.domElement.addEventListener("pointerup",L)),!tt(P)&&(pe(P),P.pointerType==="touch"?me(P):S(P)))}function Et(P){n.enabled!==!1&&(P.pointerType==="touch"?xe(P):K(P))}function L(P){switch(Pt(P),w.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",L),n.dispatchEvent(Rh),s=r.NONE;break;case 1:const se=w[0],we=z[se];me({pointerId:se,pageX:we.x,pageY:we.y});break}}function S(P){let se;switch(P.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case xr.DOLLY:if(n.enableZoom===!1)return;ye(P),s=r.DOLLY;break;case xr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ke(P),s=r.PAN}else{if(n.enableRotate===!1)return;de(P),s=r.ROTATE}break;case xr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;de(P),s=r.ROTATE}else{if(n.enablePan===!1)return;ke(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ka)}function K(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;$(P);break;case r.DOLLY:if(n.enableZoom===!1)return;le(P);break;case r.PAN:if(n.enablePan===!1)return;ne(P);break}}function ie(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Ka),Be(ue(P)),n.dispatchEvent(Rh))}function ue(P){const se=P.deltaMode,we={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(se){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return P.ctrlKey&&!J&&(we.deltaY*=10),we}function ce(P){P.key==="Control"&&(J=!0,n.domElement.getRootNode().addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(P){P.key==="Control"&&(J=!1,n.domElement.getRootNode().removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function Ie(P){n.enabled===!1||n.enablePan===!1||Ue(P)}function me(P){switch(De(P),w.length){case 1:switch(n.touches.ONE){case yr.ROTATE:if(n.enableRotate===!1)return;be(P),s=r.TOUCH_ROTATE;break;case yr.PAN:if(n.enablePan===!1)return;ut(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case yr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),s=r.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ka)}function xe(P){switch(De(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ke(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;at(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(P),n.update();break;default:s=r.NONE}}function Xe(P){n.enabled!==!1&&P.preventDefault()}function pe(P){w.push(P.pointerId)}function Pt(P){delete z[P.pointerId];for(let se=0;se<w.length;se++)if(w[se]==P.pointerId){w.splice(se,1);return}}function tt(P){for(let se=0;se<w.length;se++)if(w[se]==P.pointerId)return!0;return!1}function De(P){let se=z[P.pointerId];se===void 0&&(se=new Re,z[P.pointerId]=se),se.set(P.pageX,P.pageY)}function Te(P){const se=P.pointerId===w[0]?w[1]:w[0];return z[se]}n.domElement.addEventListener("contextmenu",Xe),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",L),n.domElement.addEventListener("wheel",ie,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}class MM extends ei{constructor(t){super();Mn(this,"points");Mn(this,"values");this.points=t,this.values=this.getValues()}getPoint(t,n=new F){let r=0;for(;r<this.values.length-1;r++)if(this.values[r]<=t&&this.values[r+1]>=t){const[s,a,o]=this.points[r],[l,h,u]=this.points[r+1],f=(t-this.values[r])/(this.values[r+1]-this.values[r]),d=s+f*(l-s),g=a+f*(h-a),v=o+f*(u-o);return n.set(d,g,v)}return n.set(0,0,0)}getValues(){let t=[0],n=0;for(let r=1;r<this.points.length;r++){const s=this.points[r-1],a=this.points[r],o=[0,1,2].map(h=>a[h]-s[h]).map(h=>h*h).reduce((h,u)=>h+u),l=Math.sqrt(o);n+=l,t.push(n)}return t=t.map(r=>r/n),t}}const yo={R:"hsl(120, 100%, 60%)",L:"hsl(240, 100%, 60%)",U:"hsl(60, 100%, 60%)",D:"hsl(120, 100%, 100%)",F:"hsl(0, 100%, 60%)",B:"hsl(20, 100%, 60%)"};let Pc=0,Oo=null,mc=[],gc=new Set,Cf=!0,Lf=.8,Pf=!1,Uc=!0,Uf=!1,nn=null,As=null,wi=null,ds=null;const So=[];function SM(i){const e=i.N,t=[],n=i.getAllFacesColors();for(const r in yo){let s=function(g,v,y,p){l.moveTo(g,v),l.lineTo(y,v),l.lineTo(y,p),l.lineTo(g,p)};const a=n[r],o=document.createElement("canvas"),l=o.getContext("2d");o.width=1e3,o.height=1e3,l.lineWidth=2*3/Math.sqrt(e),l.strokeStyle="black",l.fillStyle=yo[r];const[h,u]=[o.width,o.height],f=h/e,d=u/e;for(let g=0;g<e;g++)for(let v=0;v<e;v++){const y=a.find(A=>A.a===g&&A.b===v);l.fillStyle=y?yo[y.color]:yo[r],l.beginPath();const p=g===0?l.lineWidth/2:g*f,m=v===0?l.lineWidth/2:v*d,R=g===e-1?g*f+f-l.lineWidth/2:g*f+f,E=v===e-1?v*d+d-l.lineWidth/2:v*d+d;s(p,m,R,E),l.closePath(),l.fill(),l.stroke()}t.push(o)}return t}function Za(i,e,t){if(Uc){const n=t,r=zh(e.facePoint.face),s=[...e.point];for(let a=0;a<s.length;a++)r[a]===0?s[a]+=.5:s[a]===0?s[a]=-n:s[a]===i-1?s[a]=s[a]+1+n:s[a]+=1;return s.map(a=>a*2/i-1)}else{const n=t*(i-1)/2;let r=e.point.map(s=>s===0?-n:s===i-1?i+n:s+.5);return r=r.map(s=>s*2/i-1),r}}function Lh(i,e,t){const n=Hh(e,i),r=jp(n);return Zp(i,Kp(r,t))}function EM(i,e,t){const n=vm(2,[-1,1,1],i,e);return[i,...n,e]}function bM(){return mc}function Ph(i){Lf=i;for(const e of bM())e.opacity=i}function TM(i){Uf=i}function AM(i){Uc=i}function wM(i){Pf=i}function Uh(i){Cf=i,Dc()}function Dc(){So.filter(i=>i.type==="cycle"||i.type==="rotation").forEach(i=>{i.obj.visible=Cf||!i.inner,gc.size>0&&(i.obj.visible=gc.has(i.name))})}function fs(i){gc=i,Dc()}As=new Pn(30,1,.01,100);As.position.set(4,4,4);function RM(i,e,t){nn&&nn.domElement.remove(),So.length=0;const n=Math.sqrt(3/i);ds=t,wi=new Zy,wi.background=null,mc=SM(e).map(h=>new Jy(h)).map(h=>{const u=new No({map:h,opacity:Lf,transparent:!0});return Pf&&(u.side=Zn),u});{const h=new nr,u=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let f=0;f<u.length;f++){const d=new Cs(2,2),g=new Vt(d,mc[f]),[v,y,p]=u[f];g.position.set(v,y,p),g.lookAt(2*v,2*y,2*p),h.add(g)}h.receiveShadow=!0,wi.add(h)}{const h=new kh;let u=0,f=.05/e.permutations.filter(p=>p.length>1).length;const d=vc(e.permutations,e.N),g=(p,m)=>p.every(R=>R.facePoint.face===p[0].facePoint.face&&R.facePoint.a>0&&R.facePoint.a<m-1&&R.facePoint.b>0&&R.facePoint.b<m-1),v=()=>new No({color:h.nextColor(),transparent:!1});let y=1;for(const p of d.filter(m=>m.length>1)){u+=f,u=0;const m=v(),R=g(p.map(A=>A.p1),e.N),E=new nr;for(const A of p){const I=Za(i,A.p1,u),U=Za(i,A.p2,u);let w=Uf?EM(I,U):[I,U];w[0]=Lh(w[0],w[1],.02*n),w[w.length-1]=Lh(w[w.length-1],w[w.length-2],.03*n);const z=[];for(let q=0;q<w.length;q++){if(q>0){const oe=w[q],D=w[q-1];z.push([(oe[0]+D[0])/2,(oe[1]+D[1])/2,(oe[2]+D[2])/2])}z.push(w[q])}w=z,w.map(q=>new F(...q));const J=new MM(w),M=new Lc(J,100,.007*n,20),C=new Vt(M,m);C.castShadow=!0,E.add(C);const j=new Vr(.03*n,.05*n),ee=new Vt(j,m),O=new Cc(.007*n),Q=new Vt(O,m);ee.geometry.rotateX(Math.PI/2),ee.lookAt(new F(...Hh(w[w.length-1],w[w.length-2]))),ee.position.set(...w[w.length-1]),E.add(ee),Q.position.set(...w[0]),E.add(Q)}wi.add(E),So.push({name:`cycle#${y++}`,obj:E,material:m,inner:R,type:"cycle"})}y=1;for(const p of d.filter(m=>m.length===1)){const m=v(),R=g(p.map(z=>z.p1),e.N),E=p[0],A=Za(i,E.p1,.05),I=E.rotation[1],U=new nr;if(I===180){const z=Math.PI*.7;{const J=new xs(.1*n,.01*n,void 0,void 0,z),M=new Vt(J,m);M.geometry.rotateZ(Math.PI/2),U.add(M);const C=new Vr(.03*n,.05*n),j=new Vt(C,m);j.geometry.rotateZ(-Math.PI/2),j.position.set(.02*n,.1*n,0),U.add(j)}{const J=new xs(.1*n,.01*n,void 0,void 0,z),M=new Vt(J,m);M.geometry.rotateZ(-Math.PI/2),U.add(M);const C=new Vr(.03*n,.05*n),j=new Vt(C,m);j.geometry.rotateZ(Math.PI/2),j.position.set(-.02*n,-.1*n,0),U.add(j)}}else{const z=Math.PI*3/2,J=new xs(.1*n,.01*n,void 0,void 0,z),M=new Vt(J,m);M.geometry.rotateZ(I<0?Math.PI/2:Math.PI),U.add(M);const C=new Vr(.03*n,.05*n),j=new Vt(C,m);j.position.set((I<0?.1:-.1)*n,.02*n,0),U.add(j)}const w=Uc?zh(E.p1.facePoint.face):A;U.lookAt(...w),U.position.set(...A),wi.add(U),So.push({name:`rotation#${y++}`,obj:U,material:m,inner:R,type:"rotation"})}}const a=h=>{const u=new vM("white",3);return u.position.set(...h),u};wi.add(a([1,1,1]),a([-1,-1,-1]),a([1,-1,1]),a([-1,1,-1])),nn=new Af({antialias:!0,alpha:!0}),nn.setClearColor(0,0),nn.shadowMap.enabled=!0,nn.shadowMap.type=bm,new yM(As,nn.domElement);const o=getComputedStyle(t),l=Math.min(t.clientWidth-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight),t.clientHeight-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom));return nn.setSize(l,l),nn.setPixelRatio(window.devicePixelRatio),t.append(nn.domElement),Oo=nn.domElement,Oo}function CM(){if(nn&&ds){const i=getComputedStyle(ds),e=Math.min(ds.clientWidth-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight),ds.clientHeight-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom));nn.setSize(e,e)}}function Dh(){If(),Pc=requestAnimationFrame(Df)}let Eo=null;function Df(){if(nn&&wi&&As){if(nn.render(wi,As),Eo){const{filename:i,cropBlankArea:e}=Eo;Eo=null,am(Oo.getContext("webgl2"),i,e)}Pc=requestAnimationFrame(Df)}}function If(){cancelAnimationFrame(Pc)}function LM(i,e){nn&&Oo&&(Eo={filename:i,cropBlankArea:e})}function PM(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function UM(i,e){const t=i.indexOf(e);return t===-1?(i.push(e),!0):(i.splice(t,1),!1)}function DM(i,e,t){return i<e?e:i>t?t:i}function Nf(){return{renderType:"3D",showSuperCubeChanges:!0,opacity:.8,lineOverCube:!1,useFacePosition:!0,cubeSelfTransparency:!1,showAlgBanner:!1,selectedUnits:[]}}class IM{constructor(e){Mn(this,"container");Mn(this,"canvas2d");Mn(this,"canvas3d",null);Mn(this,"algBanner");Mn(this,"result",null);Mn(this,"pendingRender3DResult",!1);Mn(this,"pendingRender2DResult",!1);Mn(this,"renderOption",Nf());this.container=e,this.algBanner=document.createElement("div"),this.algBanner.style.textShadow="1px 1px 5px gray",this.algBanner.style.textAlign="center",this.canvas2d=document.createElement("canvas"),this.container.appendChild(this.algBanner),this.container.appendChild(this.canvas2d),this.canvas2d.style.width="100%",this.canvas2d.style.height="100%"}setRenderOption(e){let t=!1,n=!1;e.showAlgBanner!==void 0&&this.renderOption.showAlgBanner!==e.showAlgBanner&&(this.renderOption.showAlgBanner=e.showAlgBanner,this.syncAlgBannerVisibility()),e.opacity!==void 0&&this.renderOption.opacity!==e.opacity&&(this.renderOption.opacity=e.opacity,Ph(this.renderOption.opacity)),e.showSuperCubeChanges!==void 0&&this.renderOption.showSuperCubeChanges!==e.showSuperCubeChanges&&(this.renderOption.showSuperCubeChanges=e.showSuperCubeChanges,this.renderOption.renderType==="3D"?Uh(this.renderOption.showSuperCubeChanges):t=!0),e.selectedUnits!==void 0&&!PM(this.renderOption.selectedUnits,e.selectedUnits)&&(this.renderOption.selectedUnits=e.selectedUnits,fs(new Set(this.renderOption.selectedUnits))),e.lineOverCube!==void 0&&this.renderOption.lineOverCube!==e.lineOverCube&&(this.renderOption.lineOverCube=e.lineOverCube,this.renderOption.renderType==="3D"&&(n=!0)),e.cubeSelfTransparency!==void 0&&this.renderOption.cubeSelfTransparency!==e.cubeSelfTransparency&&(this.renderOption.cubeSelfTransparency=e.cubeSelfTransparency,this.renderOption.renderType==="3D"&&(n=!0)),e.useFacePosition!==void 0&&this.renderOption.useFacePosition!==e.useFacePosition&&(this.renderOption.useFacePosition=e.useFacePosition,this.renderOption.renderType==="3D"&&(n=!0)),e.renderType!==void 0&&this.renderOption.renderType!==e.renderType&&(this.renderOption.renderType=e.renderType,e.renderType==="3D"?(this.canvas2d.style.display="none",this.canvas3d&&(this.canvas3d.style.display="block",Dh())):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none",If()),t=!0)),this.renderOption.renderType==="3D"&&(n||this.pendingRender3DResult)&&this.result&&this.rerender3D(),this.renderOption.renderType!=="3D"&&(t||this.pendingRender2DResult)&&this.result&&this.rerender2D()}rerender3D(){if(!this.result)throw new Error("3D: No result to render");TM(this.renderOption.lineOverCube),AM(this.renderOption.useFacePosition),wM(this.renderOption.cubeSelfTransparency),this.canvas3d=RM(this.result.N,this.result,this.container),Uh(this.renderOption.showSuperCubeChanges),Ph(this.renderOption.opacity),Dc(),Dh(),this.pendingRender3DResult=!1}rerender2D(){if(!this.result)throw new Error("2D: No result to render");Jp(this.canvas2d),hm(this.renderOption.renderType,this.result,this.canvas2d,this.renderOption.showSuperCubeChanges),this.pendingRender2DResult=!1}syncAlgBannerVisibility(){this.algBanner.style.display=this.renderOption.showAlgBanner?"":"none"}getRenderOption(){return this.renderOption}renderNewResult(e){this.result=e,this.pendingRender3DResult=!0,this.pendingRender2DResult=!0,this.algBanner.innerText=e.alg,this.syncAlgBannerVisibility(),this.renderOption.renderType==="3D"?(this.canvas2d.style.display="none",this.rerender3D()):(this.canvas2d.style.display="block",this.canvas3d&&(this.canvas3d.style.display="none"),this.rerender2D())}toggleSelection(e){const t=UM(this.renderOption.selectedUnits,e);return fs(new Set(this.renderOption.selectedUnits)),t}clearSelection(){this.renderOption.selectedUnits=[],fs(new Set(this.renderOption.selectedUnits))}setHighlightUnit(e){e.length===0?fs(new Set(this.renderOption.selectedUnits)):fs(new Set([...this.renderOption.selectedUnits,e]))}downloadImage(){this.renderOption.renderType==="3D"?LM("cube.png",!0):om(this.canvas2d.getContext("2d"),"cube.png",!0)}onResize(){this.result&&(this.renderOption.renderType==="3D"?CM():this.rerender2D())}}let NM={n:3,alg:"F R U R' U' F'",algParam:"",completionMode:!1,...Nf()};const ot=FM();let Fo=Number.POSITIVE_INFINITY,bo="",Wr;const Ht=new IM(ot.canvasContainer),vt=OM();function OM(){const i=JSON.parse(window.localStorage.getItem("setting")||"{}"),e=new URLSearchParams(window.location.search),t=JSON.parse(e.get("s")||"{}");return{...NM,...i,...t}}function kn(i={}){Object.assign(vt,i),Object.assign(vt,Ht.getRenderOption()),window.localStorage.setItem("setting",JSON.stringify(vt))}window.onload=function(){document.body.appendChild(ot.app),ot.inputAlg.value=vt.alg,ot.inputN.value=vt.n.toString(),ot.inputParam.value=vt.algParam,Ht.setRenderOption(vt),Bo(),Hn(),er()};function Bo(){const i=window.innerHeight-ot.canvasContainer.offsetTop-20,t=`${Math.min(i,ot.canvasContainer.clientWidth)}px`;return ot.canvasContainer.style.height!==t?(ot.canvasContainer.style.height=t,!0):!1}function Fr(i,e){e?(i.classList.add("btn-primary"),i.classList.remove("btn-outline-secondary")):(i.classList.remove("btn-primary"),i.classList.add("btn-outline-secondary"))}window.onresize=function(){Bo(),Ht.onResize()};function FM(){const i=Gn("div","container-fluid my-2");i.id="app";const e=document.createElement("div");e.classList.add("input-group");const t=Ja(e,"alg","",er),n=Gn("button","btn btn-outline-secondary input-group-prepend");n.textContent="Alg",n.onclick=()=>BM(),e.prepend(n),t.style.width="50%";const r=Ja(e,"N","N",er),s=Ja(e,"Params","Params",er),a=fn("row justify-content-between mb-2"),o=fn("col-md-10"),l=fn("col-md-2 btn-group");o.append(e),a.append(o,l);const h=Qt("Inv",()=>{const te=ot.inputAlg.value;te.startsWith("(")&&te.endsWith(")'")?ot.inputAlg.value=te.slice(1,te.length-2):ot.inputAlg.value=`(${te})'`,er()}),u=Qt("🔗",()=>{const te=JSON.stringify({...vt,...Ht.getRenderOption()}),de=window.location.href.split("?")[0];window.open(de+"?s="+encodeURIComponent(te),"_blank")},"Share link"),f=Qt("▶️",()=>{const te=Wr.N;window.open(`https://alpha.twizzle.net/explore/?puzzle=${te}x${te}x${te}&alg=${Wr.alg}`,"_blank")},"play in alpha.twizzle.net"),d=Qt("🛈",()=>{window.open("https://github.com/timepp/cube")}),g=Qt("⬇️",()=>{Ht.downloadImage()},"download image");l.append(h,u,f,d,g);const v=fn("row mb-2");v.classList.add("row");const y=fn("col-8"),p=fn("btn-group me-3"),m=fn("btn-group"),R=Qt("opacity",()=>{const te=tm([1,.8,.2],vt.opacity);Ht.setRenderOption({opacity:te}),kn(),Hn()}),E=Qt("center",()=>{const te=!vt.showSuperCubeChanges;Ht.setRenderOption({showSuperCubeChanges:te}),kn(),Hn()}),A=Qt("facePosition",()=>{const te=!vt.useFacePosition;Ht.setRenderOption({useFacePosition:te}),kn(),Hn()}),I=Qt("over",()=>{const te=!vt.lineOverCube;Ht.setRenderOption({lineOverCube:te}),kn(),Hn()}),U=Qt("translucent",()=>{const te=!vt.cubeSelfTransparency;Ht.setRenderOption({cubeSelfTransparency:te}),kn(),Hn()}),w=Qt("Alg Banner",()=>{const te=!vt.showAlgBanner;Ht.setRenderOption({showAlgBanner:te}),kn(),Hn()}),z=HM(),J=[R,E,A,I,U];p.append(...J,w);const M=Qt("🕛",()=>{vt.completionMode=!vt.completionMode,kn(),Hn(),er()},"toggle completion mode"),C=Qt("⏮️",()=>{ps(0)}),j=Qt("◀️",()=>{ps(Fo-1)}),ee=Qt("▶️",()=>{ps(Fo+1)}),O=Qt("⏭️",()=>{ps(Number.POSITIVE_INFINITY)});m.append(C,j,ee,O),m.append(M),y.append(z),y.append(p),y.append(m),v.append(y);const Q=fn("row"),q=fn("col-md-8"),oe=fn("col-md-4"),D=fn("border rounded-1 p-1"),re=fn("border rounded-1 p-2");return q.append(D),oe.append(re),Q.append(q,oe),i.append(a,v,Q),{app:i,inputN:r,inputAlg:t,inputParam:s,canvasContainer:D,renderSwitcher:z,desc:re,showCenter:E,opacity:R,useFacePosition:A,lineOverCube:I,cubeSelfTransparency:U,algBanner:w,buttonsFor3D:J,completionModeBtn:M}}function Hn(){Fr(ot.showCenter,vt.showSuperCubeChanges),Fr(ot.useFacePosition,vt.useFacePosition),Fr(ot.lineOverCube,vt.lineOverCube),Fr(ot.cubeSelfTransparency,vt.cubeSelfTransparency),Fr(ot.algBanner,vt.showAlgBanner),Fr(ot.completionModeBtn,vt.completionMode),ot.opacity.textContent=`opacity: ${vt.opacity}`;for(const e of ot.renderSwitcher.children)e.classList.remove("btn-primary"),e.classList.add("btn-outline-secondary"),e.textContent===vt.renderType&&(e.classList.add("btn-primary"),e.classList.remove("btn-outline-secondary"));const i=vt.selectedUnits;for(const e of document.querySelectorAll(".perm")){const t=e;i.indexOf(t.id)>=0?t.style.fontWeight="bold":t.style.fontWeight=""}}function BM(){const[i,e]=em(ot.app,"container-fluid my-2"),t=Gn("div","pb-2 mb-2","border-bottom:1px solid red");i.append(t);const n=Gn("button","btn btn-warning me-4");n.textContent="← Back",n.onclick=()=>{e(),Bo(),Ht.onResize()},t.append(n);const r=Gn("div","","display:flex;flex-direction:vertical;flex-wrap:wrap");i.append(r);function s(l){Gh(r);for(const h of l){const u=Gn("span","border p-2 me-2 mb-2 small");u.style.cursor="pointer",u.style.width="150px",u.style.background=Qp(h.tags.join(","),100,95),u.append(...Ql("red","["+h.tags.join(",")+"] ","black",h.name)),u.append(document.createElement("br")),u.append(...Ql("blue",h.algorithm)),u.onclick=function(f){return function(){e(),ot.inputAlg.value=f.algorithm;const d=parseInt(ot.inputN.value),g=ot.inputParam.value.split(/\s+/g).filter(v=>v!=="");if(f.validateParam){const v=f.validateParam(d,g.map(parseInt));ot.inputN.value=v.n.toString(),ot.inputParam.value=v.param.join(" ")}Bo(),er()}}(h),r.append(u)}}function a(){let l=sc();for(const h of t.querySelectorAll("button"))h.classList.contains("btn-primary")&&(l=l.filter(u=>u.tags.indexOf(h.textContent)>=0));s(l)}const o=new Set(sc().map(l=>l.tags).flat());for(const l of o){const h=Gn("button","btn btn-outline-secondary me-2","border-top-right-radius: 2px;");h.textContent=l,h.onclick=u=>{const f=u.target;f.classList.toggle("btn-primary"),f.classList.toggle("btn-outline-secondary"),u.stopPropagation(),a()},t.append(h)}a()}function Ja(i,e,t,n){if(t!==""){const s=document.createElement("span");s.classList.add("input-group-text",`prompt-${e}`),s.appendChild(document.createTextNode(t)),i.appendChild(s)}const r=document.createElement("input");return r.type="text",r.classList.add("form-control"),r.id=e,r.onchange=n,i.appendChild(r),r}function zM(i,e,t){const n=document.createElement("button"),r=e.split(/\s+/g);return n.classList.add(...r),n.onclick=t,n.textContent=i,n.style.whiteSpace="nowrap",n}function kM(i){Ht.setRenderOption({renderType:i}),kn(),Hn()}function HM(){const i=fn("me-3");i.style.display="inline-block";const e="btn btn-outline-secondary rounded-0";for(const t of["1 face","3 faces","5 faces","6 faces","6 faces 2","3D"])i.append(zM(t,e,n=>{const r=n.target;kM(r.textContent);const s=r.textContent==="3D"?"":"none";ot.buttonsFor3D.forEach(a=>a.style.display=s)}));return i}function GM(i,e,t){const n=Wh(e,t.split(/\s+/g).filter(r=>r!==""),i);return{...n,regulatedAlg:Gp(n.resolvedAlgorithm,i)}}function Ih(i,e,t,n=""){const r=Wh(e,t.split(/\s+/g).filter(l=>l!==""),i);console.log(r);const s=xc(e),a=document.querySelector(".prompt-Params");s.length===0?(ot.inputParam.style.display="none",a.style.display="none"):(a.style.display="",ot.inputParam.style.display="",ot.inputParam.placeholder=s.join(" "));const o=r.actualParamValues.join(" ");return o!==ot.inputParam.value&&(ot.inputParam.value=o),Wr=Vp(r.resolvedAlgorithm,i,!1,n),VM(Wr,i),Ht.renderNewResult(Wr),{...r,result:Wr}}function er(){console.log("onInputChange");const i=parseInt(ot.inputN.value),e=ot.inputAlg.value,t=ot.inputParam.value,n=ot.completionModeBtn.classList.contains("btn-primary");Ht.clearSelection();const r=GM(i,e,t);kn({n:i,alg:e,algParam:r.actualParamValues.join(" "),completionMode:n}),bo=r.regulatedAlg,ps(-1)}function ps(i){const e=bo.split(" ").length;i===-1&&(i=vt.completionMode?0:e),Fo=DM(i,0,e);const t=bo.split(" ").slice(0,Fo).join(" ");vt.completionMode?Ih(vt.n,t,"",`( ${bo} )'`):Ih(vt.n,t,"")}function VM(i,e){const t=(l,h)=>{const u=document.createElement("span");return u.style.color=h,u.style.fontWeight="800",u.textContent=l,u};Gh(ot.desc);const n=document.createElement("div");n.style.maxHeight="300px",n.style.overflowY="auto",n.append("Regulated Alg: "+i.regulatedAlg,document.createElement("br")),n.append("Simplified Alg: "+i.simplifiedAlg,document.createElement("br"));const r=Gn("span","bg-light me-2 pe-2"),s=Gn("span");r.style.cursor="pointer",r.textContent="Refactored Alg:",r.onclick=()=>{const l=parseInt(r.getAttribute("depth")||"1"),h=Date.now(),u=Bp(e,l,i.ops),f=Date.now();s.textContent=u.alg,r.setAttribute("depth",`${l+1}`),r.textContent=`Refactored Alg(depth ${l}):`,f-h>5e3&&(r.classList.add("bg-danger"),r.classList.remove("bg-light")),u.complete&&(r.textContent="Refactored Alg:",r.onclick=()=>{})},n.append(r,s,document.createElement("br")),ot.desc.append(n),ot.desc.append("Order: "+i.order,document.createElement("br"));const a=fn();let o=0;if(i.cycles.length>100)a.append("cycles are too big to display: "+i.cycles.length);else for(const l of i.cycles){const h=l.map(f=>rc(e,f)[0]||`${f}`).join(" -> "),u=document.createElement("span");u.classList.add("perm"),u.append(t(`[${l.length}]`,"#0080ff"),document.createTextNode(h+" ")),a.append(u),u.style.cursor="pointer",o++,u.id=`cycle#${o}`,u.onclick=function(f,d){return g=>{Ht.toggleSelection(f),kn(),Hn()}}(`cycle#${o}`),u.onmousedown=f=>{f.detail>1&&f.preventDefault()},u.onmouseenter=function(f,d){return g=>{Ht.setHighlightUnit(f)}}(`cycle#${o}`)}a.append(document.createElement("br")),o=0;for(const l of i.rotates){const h=rc(e,l.unit.position)[0]||`${l.unit.position}`,u=document.createElement("span");u.classList.add("perm"),u.append(t(`[${l.degree}°] `,"#FF0080"),h+" "),a.append(u),u.style.cursor="pointer",o++,u.id=`cycle#${o}`,u.onclick=function(f,d){return g=>{Ht.toggleSelection(f),kn(),Hn()}}(`rotation#${o}`),u.onmouseenter=function(f,d){return g=>{Ht.setHighlightUnit(f)}}(`rotation#${o}`)}a.onmouseleave=()=>Ht.setHighlightUnit(""),ot.desc.append(a)}});export default WM();
