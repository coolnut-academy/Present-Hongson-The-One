function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var R={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),G=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),g=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=g&&e[g]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function h(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||$}h.prototype.isReactComponent={};h.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function L(){}L.prototype=h.prototype;function w(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||$}var x=w.prototype=new L;x.constructor=w;j(x,h.prototype);x.isPureReactComponent=!0;var b=Array.isArray,O=Object.prototype.hasOwnProperty,C={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var o,u={},i=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)O.call(t,o)&&!A.hasOwnProperty(o)&&(u[o]=t[o]);var s=arguments.length-2;if(s===1)u.children=r;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)u[o]===void 0&&(u[o]=s[o]);return{$$typeof:d,type:e,key:i,ref:a,props:u,_owner:C.current}}function J(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function S(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var E=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function v(e,t,r,o,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case d:case U:a=!0}}if(a)return a=e,u=u(a),e=o===""?"."+_(a,0):o,b(u)?(r="",e!=null&&(r=e.replace(E,"$&/")+"/"),v(u,t,r,"",function(f){return f})):u!=null&&(S(u)&&(u=J(u,r+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(a=0,o=o===""?".":o+":",b(e))for(var s=0;s<e.length;s++){i=e[s];var c=o+_(i,s);a+=v(i,t,r,c,u)}else if(c=K(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=o+_(i,s++),a+=v(i,t,r,c,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function m(e,t,r){if(e==null)return e;var o=[],u=0;return v(e,o,"","",function(i){return t.call(r,i,u++)}),o}function Y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},k={transition:null},Z={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:k,ReactCurrentOwner:C};function I(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:m,forEach:function(e,t,r){m(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return m(e,function(){t++}),t},toArray:function(e){return m(e,function(t){return t})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=h;n.Fragment=V;n.Profiler=F;n.PureComponent=w;n.StrictMode=T;n.Suspense=H;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z;n.act=I;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=j({},e.props),u=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=C.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)O.call(t,c)&&!A.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:d,type:e.type,key:u,ref:i,props:o,_owner:a}};n.createContext=function(e){return e={$$typeof:G,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N,_context:e},e.Consumer=e};n.createElement=P;n.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:B,render:e}};n.isValidElement=S;n.lazy=function(e){return{$$typeof:X,_payload:{_status:-1,_result:e},_init:Y}};n.memo=function(e,t){return{$$typeof:W,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=k.transition;k.transition={};try{e()}finally{k.transition=t}};n.unstable_act=I;n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.3.1";R.exports=n;var y=R.exports;const ne=z(y);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:u="",children:i,iconNode:a,...s},c)=>y.createElement("svg",{ref:c,...te,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:q("lucide",u),...s},[...a.map(([f,D])=>y.createElement(f,D)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const r=y.forwardRef(({className:o,...u},i)=>y.createElement(re,{ref:i,iconNode:t,className:q(`lucide-${ee(e)}`,o),...u}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=p("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=p("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=p("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=p("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=p("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=p("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{ie as C,ae as E,le as G,fe as L,pe as M,ne as R,ye as S,he as X,ce as a,oe as b,se as c,ue as d,z as g,y as r};
