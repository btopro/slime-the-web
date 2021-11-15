/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...i)=>{const r=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(r,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:c};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=h){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:l.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,c=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:l.fromAttribute;this._$Ei=o,this[o]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:d}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.1");const p=globalThis.trustedTypes,g=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,m="?"+v,b=`<${m}>`,f=document,$=(t="")=>f.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,y=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,S=/"/g,P=/^(?:script|style|textarea)$/i,k=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),T=new WeakMap,L=(t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new D(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},O=f.createTreeWalker(f,129,null,!1),H=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=x;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===x?"!--"===l[1]?o=w:void 0!==l[1]?o=y:void 0!==l[2]?(P.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=E):void 0!==l[3]&&(o=E):o===E?">"===l[0]?(o=null!=r?r:x,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?E:'"'===l[3]?S:C):o===S||o===C?o=E:o===w||o===y?o=x:(o=E,r=void 0);const d=o===E&&t[e+1].startsWith("/>")?" ":"";n+=o===x?i+b:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+v+d):i+v+(-2===c?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(a):a,s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=H(t,e);if(this.el=M.createElement(l,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=O.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?q:"@"===e[1]?B:j})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(v),e=t.length-1;if(e>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),O.nextNode(),a.push({type:2,index:++r});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===m)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(v,t+1));)a.push({type:7,index:r}),t+=v.length-1}r++}}static createElement(t,e){const i=f.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,s){var r,n,o,a;if(e===U)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=R(t,l._$AS(t,e.values),l,s)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:f).importNode(i,!0);O.currentNode=r;let n=O.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new D(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new V(n,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=O.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),_(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(f.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new z(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new M(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new D(this.A($()),this.A($()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=R(this,t,e,0),n=!_(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=R(this,s[i+o],e,o),a===U&&(a=this._$AH[o]),n||(n=!_(a)||a!==this._$AH[o]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}class q extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:N)===U)return;const s=this._$AH,r=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const W=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,J;null==W||W(M,D),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class K extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=L(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}K.finalized=!0,K._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:K});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.1");class F extends K{static get tag(){return"slime-sorting-option"}getCurrentPosition(){this.style.setProperty("--option-background-color","darkgray"),this.removeAttribute("correct"),this.removeAttribute("incorrect");var t=window.event.clientY;this.currentPosition=t}DragStart(){var t=window.event.clientY;0!=t&&(this.dragPosition=t);var e=this,i=this.parentNode;if(this.dragPosition+30<this.currentPosition){for(var s=0;s<i.children.length;s++)i.children[s].isEqualNode(e)&&(r=s);if(0!=r)return i.insertBefore(e,i.children[r-1]),void(this.currentPosition=this.dragPosition)}if(this.dragPosition-30>this.currentPosition){var r;for(s=0;s<i.children.length;s++)i.children[s].isEqualNode(e)&&(r=s);if(r!=i.children.length-1)return i.insertBefore(i.children[r+1],e),void(this.currentPosition=this.dragPosition)}}DragEnd(){this.style.visibility="visible",this.style.setProperty("--option-background-color","inital")}constructor(){super(),this.option="option",this.currentPosition=0,this.dragPosition=0,this.setAttribute("draggable",!0),this.addEventListener("mousedown",this.getCurrentPosition),this.addEventListener("drag",this.DragStart),this.addEventListener("dragend",this.DragEnd),this.addEventListener("mouseup",this.DragEnd)}static get properties(){return{order:{type:Number,reflect:!1},dragPosition:{type:Number},currentPosition:{type:Number}}}updated(t){t.forEach(((t,e)=>{}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return r`:host{border:2px #000 solid;border-radius:5px;width:95%;margin-top:5px;margin-bottom:5px;height:25px;display:flex;align-items:center;box-shadow:1px 1px 1px;cursor:grab;z-index:1;background-color:var(--option-background-color,#fff)}:host([correct]){transition:background-color .7s linear;background-color:var(--option-background-color-correct,#3deb3d87)}:host([incorrect]){transition:background-color .7s linear;background-color:var(--option-background-color-incorrect,red)}.option-slot-wrapper{display:block;z-index:2;width:100%;height:100%;background-color:inherit;border:none;text-align:inherit}:host button{cursor:grab}:host button:active{cursor:grabbing}`}render(){return k` <button class="option-slot-wrapper"><slot></slot></button> `}static get haxProperties(){return new URL("../lib/rename-me.haxProperties.json",import.meta.url).href}}window.customElements.define(F.tag,F);class G extends K{static get tag(){return"slime-sorting-question"}constructor(){super(),this.question="Sort the following in order!",this.numberOfOptions=this.children.length,this.numberCorrrect=0,this.correctOrder=[];for(var t=0;t<=this.children.length;t++)for(var e=0;e<this.children.length;e++)this.children[e].getAttribute("order")==t&&(this.correctOrder.push(this.children[e]),this.children[e].removeAttribute("order"))}checkOrder(){for(var t=0,e=0;e<this.numberOfOptions;e++)this.children[e].isEqualNode(this.correctOrder[e])?(t+=1,this.children[e].removeAttribute("incorrect"),this.children[e].setAttribute("correct",!0)):(this.children[e].removeAttribute("correct"),this.children[e].setAttribute("incorrect",!0));this.numberCorrrect=t}static get properties(){return{question:{type:String,reflect:!0},correctOrder:{type:Array},numberOfOptions:{type:Number},numberCorrrect:{type:Number}}}updated(t){t.forEach(((t,e)=>{"need"===e&&"joy"===this[e]&&this.classList.add("joyful")}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}buttonClick(){alert("not yet implmented")}static get styles(){return r`:host{background-color:var(--slime-sorting-question-background-color,#fff);border:2px solid #000;padding:15px 10px;display:flex;flex-direction:column;border-radius:10px;box-shadow:2px 1px 2px -1px #000;margin-top:10px;margin-bottom:10px;font-weight:700;height:inherit;width:inherit}.slime-sorting-question-header{font-size:20px;font-family:revert;margin-bottom:10px}.options{margin-bottom:10px}.slime-sorting-controls{display:flex;justify-content:space-between;padding-right:5%;font-size:20px;font-family:revert}.submit-button{border-radius:5px;border-width:2px;cursor:pointer;background-color:inherit;box-shadow:1px 1px 1px 0}.submit-button:hover{opacity:.8}.submit-button:active{cursor:default}`}render(){return console.log("correct order:"+this.correctOrder),k` <div class="slime-sorting-question-header">${this.question}</div> <div class="options"><slot></slot></div> <div class="slime-sorting-controls"><span>You have ${this.numberCorrrect}/${this.numberOfOptions} correct.</span><button class="submit-button" @click="${this.checkOrder}">Submit</button></div> `}static get haxProperties(){return new URL("../lib/rename-me.haxProperties.json",import.meta.url).href}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;window.customElements.define(G.tag,G);class tt extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=L(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.1"),
/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
window.I18NManagerStore=window.I18NManagerStore||{},window.I18NManagerStore.requestAvailability=()=>(window.I18NManagerStore.instance||(window.I18NManagerStore.instance=document.createElement("i18n-manager"),document.body.appendChild(window.I18NManagerStore.instance)),window.I18NManagerStore.instance);const it=window.I18NManagerStore.requestAvailability();class st extends HTMLElement{constructor(){super(),this.fetchTargets={},this.elements=[],this.locales=new Set([]),this.lang=this.documentLang,this.dir=this.documentDir}get documentLang(){return document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en"}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}connectedCallback(){this.__ready=!0,window.addEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.addEventListener("languagechange",this.changeLanguageEvent.bind(this))}disconnectedCallback(){window.removeEventListener("i18n-manager-register-element",this.registerLocalizationEvent.bind(this)),window.removeEventListener("languagechange",this.changeLanguageEvent.bind(this))}changeLanguageEvent(t){this.lang=t.detail}registerLocalizationEvent(t){let e=this.detailNormalize(t.detail);e.namespace&&e.localesPath&&e.locales&&this.registerLocalization(e)}detailNormalize(t){if(!t.namespace&&t.context&&(t.namespace=t.context.tagName.toLowerCase()),!t.updateCallback&&t.context&&(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),t.context&&t.namespace){t.context.t&&(t.context._t={...t.context.t});let e=this.elements.filter((e=>{if(e.namespace==t.namespace&&e.localesPath&&e.locales)return!0}));e&&e.length&&e[0]&&(t.localesPath=e[0].localesPath,t.locales=e[0].locales)}return t}registerLocalization(t){(!t.context&&0===this.elements.filter((e=>e.namespace===t.namespace)).length||0===this.elements.filter((e=>e.context===t.context)).length)&&(t=this.detailNormalize(t),this.elements.push(t),t.locales.forEach(this.locales.add,this.locales),this.lang&&this.__ready&&t.locales.includes(this.lang)&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateLanguage(this.lang)}),0)))}static get tag(){return"i18n-manager"}async loadNamespaceFile(t,e=this.lang){const i=e.split("-");let s=this.elements.filter((s=>s.namespace===t&&(s.locales.includes(e)||s.locales.includes(i[0]))));if(s&&1===s.length){const t=s[0];var r="";return t.locales.includes(e)?r=`${t.localesPath}/${t.namespace}.${e}.json`:t.locales.includes(i[0])&&(r=`${t.localesPath}/${t.namespace}.${i[0]}.json`),""==r?{}:(this.fetchTargets[r]||(this.fetchTargets[r]=await fetch(r).then((t=>!(!t||!t.json)&&t.json()))),this.fetchTargets[r])}}async updateLanguage(t){if(t){const r=t.split("-"),n=this.elements.filter((e=>e.locales.includes(t)||e.locales.includes(r[0]))),o=this.elements.filter((e=>!e.locales.includes(t)&&!e.locales.includes(r[0])));if(0!==o.length)for(var e in o){let t=o[e];t.context&&(t.context.t={...t.context._t},t.updateCallback&&t.context[t.updateCallback]())}for(var e in n){let o=n[e];var i="";if(o.locales.includes(t)?i=`${o.localesPath}/${o.namespace}.${t}.json`:o.locales.includes(r[0])&&(i=`${o.localesPath}/${o.namespace}.${r[0]}.json`),this.fetchTargets[i]){if(o.context){let t=this.fetchTargets[i];for(var s in t)o.context.t[s]=t[s];o.context.t={...o.context.t},o.updateCallback&&o.context[o.updateCallback]()}}else if(this.fetchTargets[i]=await fetch(i).then((t=>!(!t||!t.json)&&t.json())),o.context){for(var s in this.fetchTargets[i])o.context.t[s]=this.fetchTargets[i][s];o.context.t={...o.context.t},o.updateCallback&&o.context&&o.context[o.updateCallback]()}}}}static get observedAttributes(){return["lang","dir"]}attributeChangedCallback(t,e,i){"lang"!=t&&"dir"!=t||this.dispatchEvent(new CustomEvent(`${t}-changed`,{detail:{value:i}})),"lang"==t&&i&&this.__ready&&this.updateLanguage(i)}get lang(){return this.getAttribute("lang")}set lang(t){t?this.setAttribute("lang",t):this.removeAttribute("lang")}get dir(){return this.getAttribute("dir")}set dir(t){t?this.setAttribute("dir",t):this.removeAttribute("dir")}}customElements.define(st.tag,st);class rt extends(function(t){return class extends t{constructor(){super(),this.t={}}static get properties(){return{...super.properties,t:{type:Object}}}registerLocalization(t){t.namespace||(t.namespace=t.context.tagName.toLowerCase()),t.updateCallback||(t.context.requestUpdate?t.updateCallback="requestUpdate":t.context.render&&(t.updateCallback="render")),!t.localesPath&&t.basePath&&(t.localesPath=`${decodeURIComponent(t.basePath)}/../locales`),it.registerLocalization(t)}}}(tt)){static get styles(){return[r`:host{display:block}:host:after{content:attr(words-text);position:var(--word-count-position,relative);display:var(--word-count-display,flex);flex-direction:var(--word-count-flex-direction,row-reverse);margin:var(--word-count-margin,12px);font-size:var(--word-count-font-size,10px);transition:var(--word-count-transition,.3s font-size,color ease);line-height:var(--word-count-line-height,16px);color:var(--word-count-color,#888)}:host(:active):after,:host(:focus):after,:host(:hover):after{font-size:var(--word-count-font-size-hover,12px);font-weight:var(--word-count-font-weight-hover,bold);color:var(--word-count-color-hover,#000)}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;width:1px;overflow:hidden;position:absolute!important;word-wrap:normal!important}`]}render(){return k` <slot></slot> <div class="screen-reader-text">${this.wordsPrefix}: ${this.words}</div> `}static get tag(){return"word-count"}constructor(){super(),this.wordsPrefix="Word count",this.t={wordsPrefix:this.wordsPrefix},this.registerLocalization({context:this,basePath:import.meta.url,locales:["es","fr","ja"]})}connectedCallback(){super.connectedCallback(),this.__observer=new MutationObserver(this._updateWords.bind(this)),this.__observer.observe(this,{attributes:!0,characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.__observer.disconnect(),super.disconnectedCallback()}update(t){super.update(t),t.has("t")&&(this.wordsPrefix=this.t.wordsPrefix),t.has("wordsPrefix")&&(this.t={wordsPrefix:this.wordsPrefix},this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)),t.has("words")&&this.setAttribute("words-text",`${this.wordsPrefix}: ${this.words}`)}static get properties(){return{...super.properties,words:{type:Number},wordsPrefix:{type:String,attribute:"words-prefix"}}}_updateWords(t){""!==this.textContent?this.words=parseInt(this.textContent.split(/\s+/g).length-1):this.words=0}}window.customElements.define(rt.tag,rt);
