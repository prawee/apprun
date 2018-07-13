!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});class n{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t])}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let s;e.App=n;const o=t||window;o.app&&o.app.start?s=o.app:(s=new n,o.app=s),e.default=s}).call(this,n(9))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o=n(8),i=n(6);e.Component=i.Component;const r=n(2);e.on=r.on,e.update=r.update,e.event=r.update;const a=n(5),l=n(4);s.default.createElement=o.createElement,s.default.render=o.render,s.default.Fragment=o.Fragment,s.default.webComponent=l.default,s.default.start=((t,e,n,s,o)=>{const r=Object.assign(o||{},{render:!0,global_event:!0}),a=new i.Component(e,n,s);return o&&o.rendered&&(a.rendered=o.rendered),a.mount(t,r),a}),s.default.route||(s.default.route=a.default,s.default.on("//",t=>{}),s.default.on("#",t=>{}),s.default.on("route",t=>a.default(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{window.onpopstate=(()=>a.default(location.hash)),a.default(location.hash)})),e.default=s.default,s.default.on("debug",t=>0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n={}){return(s,o,i)=>(t=`${o}${t?","+t:""}`,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,key:o,options:n},s),i)},e.on=function(t,n={}){return function(s,o){t=`${o}${t?","+t:""}`,e.Reflect.defineMetadata(`apprun-update:${t}`,{name:t,key:o,options:n},s)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(7),o="_props";function i(t){const e=[],n=t=>{null!==t&&void 0!==t&&""!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}e.createElement=function(t,e,...n){const o=i(n);return"string"==typeof t?{tag:t,props:e,children:o}:void 0===t&&n?o:Object.getPrototypeOf(t).__isAppRunComponent?s.default(t,Object.assign({},e,{children:n})):t(e,o)};const r={};function a(t,e){if(null!=e&&t)if(Array.isArray(e))d(t,e);else{const n=e;t.firstChild?l(t.firstChild,n):t.appendChild(c(n))}}function l(t,e){console.assert(!!t),function(t,e){return t.nodeName===`${e.tag||""}`.toUpperCase()}(t,e)?(d(t,e.children),h(t,e.props)):t.parentNode.replaceChild(c(e),t)}function d(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(u(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)l(t.childNodes[s],n);else{const i=e&&r[e];i?(t.replaceChild(i,o),t.appendChild(o),l(t.childNodes[s],n)):(t.appendChild(c(n),o),l(t.childNodes[s],n))}else l(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(c(e[t]));t.appendChild(s)}}function u(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function c(t){if(console.assert(null!==t&&void 0!==t),"string"==typeof t)return u(t);if(!t.tag)return u(JSON.stringify(t));const e="svg"===t.tag?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return h(e,t.props),t.children&&t.children.forEach(t=>e.appendChild(c(t))),e}function h(t,e){console.assert(!!t),e=function(t,e){const n={};return t&&Object.keys(t).forEach(t=>n[t]=""),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[o]||{},e),t[o]=e;for(let n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(let e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5);t.dataset[e]!==s&&(t.dataset[e]=s)}else n.startsWith("role")||n.startsWith("aria-")?t.getAttribute(n)!==s&&t.setAttribute(n,s):(t[n]!==s&&(t[n]=s),"key"===n&&s&&(r[s]=t))}}e.updateElement=a,e.render=a,e.Fragment=function(t,...e){return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=((t,e={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),this.children&&(s.children=Array.from(this.children),s.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(s).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),e.default=((t,n,s)=>{customElements&&customElements.define(t,e.customElement(n,s))})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o="//";e.default=function(t){if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.default.run(e,...n),s.default.run(o,e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");s.default.run("/"+n,...i),s.default.run(o,"/"+n,...i)}else s.default.run(t),s.default.run(o,t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o=n(2);class i{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=((t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0})))}renderState(t){if(!this.view)return;const e=this.view(t);if(s.default.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),n&&s.default.render&&(s.default.render(n,e),this.rendered&&this.rendered(this.state))}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this.state=t;else{if(null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(this.options||{},e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,n={}){e&&"function"==typeof e&&this.on(t,(...o)=>{const i=e(this.state,...o);s.default.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)},n)}add_actions(){const t=this.update||{};o.Reflect.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=o.Reflect.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){return this.global_event||this.is_global_event(t)?s.default.run(t,...e):this._app.run(t,...e)}on(t,e,n){return this._actions.push({name:t,fn:e}),this.global_event||this.is_global_event(t)?s.default.on(t,e,n):this._app.on(t,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.global_event||this.is_global_event(e)?s.default.off(e,n):this._app.off(e,n)})}}i.__isAppRunComponent=!0,e.Component=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(0),o={};s.default.on("get-components",t=>t.components=o),e.default=function(t,e){let n,i=e&&e.id;return i?(n=o[i])||(n=o[i]=new t(e).mount(i)):(i=`_${t.name}_${performance.now()}`,(n=o[t])||(n=o[t]=new t(e).mount(i))),n.mounted&&setTimeout(()=>n.mounted(e),0),n.rendered&&setTimeout(()=>n.rendered(n.state),0),s.default.createElement("div",{id:i},n.view&&n.view(n.state))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(3);e.createElement=s.createElement,e.Fragment=s.Fragment,e.render=function(t,e){console.assert(!!t),s.updateElement(t,e)}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(1);s.default.webComponent("my-app",class extends s.Component{constructor({num:t,children:e}){super(),this.view=(t=>s.default.createElement("div",null,s.default.createElement("h1",null,t))),this.update={"-1":t=>t-1,"+1":t=>t+1},this.rendered=(t=>{this.children.forEach(t=>{this.element.firstElementChild.appendChild(t)}),this.element.setAttribute("num",t)}),this.children=e,this.state=parseInt(t)}})}])});
//# sourceMappingURL=app.js.map