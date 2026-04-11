(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Vv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ad={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Dy(){if(w0)return Bo;w0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=t,Bo.jsx=i,Bo.jsxs=i,Bo}var D0;function Ny(){return D0||(D0=1,ad.exports=Dy()),ad.exports}var O=Ny(),sd={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Uy(){if(N0)return gt;N0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(z,te,me){this.props=z,this.context=te,this.refs=b,this.updater=me||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,te){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,te,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=x.prototype;function D(z,te,me){this.props=z,this.context=te,this.refs=b,this.updater=me||E}var U=D.prototype=new N;U.constructor=D,A(U,x.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(z,te,me){var Ce=me.ref;return{$$typeof:r,type:z,key:te,ref:Ce!==void 0?Ce:null,props:me}}function R(z,te){return T(z.type,te,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function q(z){var te={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(me){return te[me]})}var Y=/\/+/g;function ae(z,te){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):te.toString(36)}function le(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(te){z.status==="pending"&&(z.status="fulfilled",z.value=te)},function(te){z.status==="pending"&&(z.status="rejected",z.reason=te)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,te,me,Ce,ze){var ee=typeof z;(ee==="undefined"||ee==="boolean")&&(z=null);var fe=!1;if(z===null)fe=!0;else switch(ee){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(z.$$typeof){case r:case t:fe=!0;break;case v:return fe=z._init,F(fe(z._payload),te,me,Ce,ze)}}if(fe)return ze=ze(z),fe=Ce===""?"."+ae(z,0):Ce,L(ze)?(me="",fe!=null&&(me=fe.replace(Y,"$&/")+"/"),F(ze,te,me,"",function(Ne){return Ne})):ze!=null&&(H(ze)&&(ze=R(ze,me+(ze.key==null||z&&z.key===ze.key?"":(""+ze.key).replace(Y,"$&/")+"/")+fe)),te.push(ze)),1;fe=0;var Te=Ce===""?".":Ce+":";if(L(z))for(var Ee=0;Ee<z.length;Ee++)Ce=z[Ee],ee=Te+ae(Ce,Ee),fe+=F(Ce,te,me,ee,ze);else if(Ee=S(z),typeof Ee=="function")for(z=Ee.call(z),Ee=0;!(Ce=z.next()).done;)Ce=Ce.value,ee=Te+ae(Ce,Ee++),fe+=F(Ce,te,me,ee,ze);else if(ee==="object"){if(typeof z.then=="function")return F(le(z),te,me,Ce,ze);throw te=String(z),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return fe}function k(z,te,me){if(z==null)return z;var Ce=[],ze=0;return F(z,Ce,"","",function(ee){return te.call(me,ee,ze++)}),Ce}function J(z){if(z._status===-1){var te=z._result;te=te(),te.then(function(me){(z._status===0||z._status===-1)&&(z._status=1,z._result=me)},function(me){(z._status===0||z._status===-1)&&(z._status=2,z._result=me)}),z._status===-1&&(z._status=0,z._result=te)}if(z._status===1)return z._result.default;throw z._result}var be=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},_e={map:k,forEach:function(z,te,me){k(z,function(){te.apply(this,arguments)},me)},count:function(z){var te=0;return k(z,function(){te++}),te},toArray:function(z){return k(z,function(te){return te})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return gt.Activity=g,gt.Children=_e,gt.Component=x,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=D,gt.StrictMode=s,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,gt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},gt.cache=function(z){return function(){return z.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(z,te,me){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ce=A({},z.props),ze=z.key;if(te!=null)for(ee in te.key!==void 0&&(ze=""+te.key),te)!X.call(te,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&te.ref===void 0||(Ce[ee]=te[ee]);var ee=arguments.length-2;if(ee===1)Ce.children=me;else if(1<ee){for(var fe=Array(ee),Te=0;Te<ee;Te++)fe[Te]=arguments[Te+2];Ce.children=fe}return T(z.type,ze,Ce)},gt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},gt.createElement=function(z,te,me){var Ce,ze={},ee=null;if(te!=null)for(Ce in te.key!==void 0&&(ee=""+te.key),te)X.call(te,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=te[Ce]);var fe=arguments.length-2;if(fe===1)ze.children=me;else if(1<fe){for(var Te=Array(fe),Ee=0;Ee<fe;Ee++)Te[Ee]=arguments[Ee+2];ze.children=Te}if(z&&z.defaultProps)for(Ce in fe=z.defaultProps,fe)ze[Ce]===void 0&&(ze[Ce]=fe[Ce]);return T(z,ee,ze)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:h,render:z}},gt.isValidElement=H,gt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:J}},gt.memo=function(z,te){return{$$typeof:p,type:z,compare:te===void 0?null:te}},gt.startTransition=function(z){var te=B.T,me={};B.T=me;try{var Ce=z(),ze=B.S;ze!==null&&ze(me,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(P,be)}catch(ee){be(ee)}finally{te!==null&&me.types!==null&&(te.types=me.types),B.T=te}},gt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},gt.use=function(z){return B.H.use(z)},gt.useActionState=function(z,te,me){return B.H.useActionState(z,te,me)},gt.useCallback=function(z,te){return B.H.useCallback(z,te)},gt.useContext=function(z){return B.H.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z,te){return B.H.useDeferredValue(z,te)},gt.useEffect=function(z,te){return B.H.useEffect(z,te)},gt.useEffectEvent=function(z){return B.H.useEffectEvent(z)},gt.useId=function(){return B.H.useId()},gt.useImperativeHandle=function(z,te,me){return B.H.useImperativeHandle(z,te,me)},gt.useInsertionEffect=function(z,te){return B.H.useInsertionEffect(z,te)},gt.useLayoutEffect=function(z,te){return B.H.useLayoutEffect(z,te)},gt.useMemo=function(z,te){return B.H.useMemo(z,te)},gt.useOptimistic=function(z,te){return B.H.useOptimistic(z,te)},gt.useReducer=function(z,te,me){return B.H.useReducer(z,te,me)},gt.useRef=function(z){return B.H.useRef(z)},gt.useState=function(z){return B.H.useState(z)},gt.useSyncExternalStore=function(z,te,me){return B.H.useSyncExternalStore(z,te,me)},gt.useTransition=function(){return B.H.useTransition()},gt.version="19.2.4",gt}var U0;function Ph(){return U0||(U0=1,sd.exports=Uy()),sd.exports}var pe=Ph();const Zi=Vv(pe);var rd={exports:{}},Ho={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Ly(){return L0||(L0=1,(function(r){function t(F,k){var J=F.length;F.push(k);e:for(;0<J;){var be=J-1>>>1,_e=F[be];if(0<l(_e,k))F[be]=k,F[J]=_e,J=be;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var k=F[0],J=F.pop();if(J!==k){F[0]=J;e:for(var be=0,_e=F.length,z=_e>>>1;be<z;){var te=2*(be+1)-1,me=F[te],Ce=te+1,ze=F[Ce];if(0>l(me,J))Ce<_e&&0>l(ze,me)?(F[be]=ze,F[Ce]=J,be=Ce):(F[be]=me,F[te]=J,be=te);else if(Ce<_e&&0>l(ze,J))F[be]=ze,F[Ce]=J,be=Ce;else break e}}return k}function l(F,k){var J=F.sortIndex-k.sortIndex;return J!==0?J:F.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,_=3,S=!1,E=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=F)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function L(F){if(A=!1,U(F),!E)if(i(m)!==null)E=!0,P||(P=!0,q());else{var k=i(p);k!==null&&le(L,k.startTime-F)}}var P=!1,B=-1,X=5,T=-1;function R(){return b?!0:!(r.unstable_now()-T<X)}function H(){if(b=!1,P){var F=r.unstable_now();T=F;var k=!0;try{e:{E=!1,A&&(A=!1,N(B),B=-1),S=!0;var J=_;try{t:{for(U(F),g=i(m);g!==null&&!(g.expirationTime>F&&R());){var be=g.callback;if(typeof be=="function"){g.callback=null,_=g.priorityLevel;var _e=be(g.expirationTime<=F);if(F=r.unstable_now(),typeof _e=="function"){g.callback=_e,U(F),k=!0;break t}g===i(m)&&s(m),U(F)}else s(m);g=i(m)}if(g!==null)k=!0;else{var z=i(p);z!==null&&le(L,z.startTime-F),k=!1}}break e}finally{g=null,_=J,S=!1}k=void 0}}finally{k?q():P=!1}}}var q;if(typeof D=="function")q=function(){D(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ae=Y.port2;Y.port1.onmessage=H,q=function(){ae.postMessage(null)}}else q=function(){x(H,0)};function le(F,k){B=x(function(){F(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(F){switch(_){case 1:case 2:case 3:var k=3;break;default:k=_}var J=_;_=k;try{return F()}finally{_=J}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=_;_=F;try{return k()}finally{_=J}},r.unstable_scheduleCallback=function(F,k,J){var be=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?be+J:be):J=be,F){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=J+_e,F={id:v++,callback:k,priorityLevel:F,startTime:J,expirationTime:_e,sortIndex:-1},J>be?(F.sortIndex=J,t(p,F),i(m)===null&&F===i(p)&&(A?(N(B),B=-1):A=!0,le(L,J-be))):(F.sortIndex=_e,t(m,F),E||S||(E=!0,P||(P=!0,q()))),F},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(F){var k=_;return function(){var J=_;_=k;try{return F.apply(this,arguments)}finally{_=J}}}})(ld)),ld}var O0;function Oy(){return O0||(O0=1,od.exports=Ly()),od.exports}var cd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Py(){if(P0)return On;P0=1;var r=Ph();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},On.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.4",On}var F0;function Fy(){if(F0)return cd.exports;F0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cd.exports=Py(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function zy(){if(z0)return Ho;z0=1;var r=Oy(),t=Ph(),i=Fy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,w=u.child;w;){if(w===a){y=!0,a=u,o=f;break}if(w===o){y=!0,o=u,a=f;break}w=w.sibling}if(!y){for(w=f.child;w;){if(w===a){y=!0,a=f,o=u;break}if(w===o){y=!0,o=f,a=u;break}w=w.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var le=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},be=[],_e=-1;function z(e){return{current:e}}function te(e){0>_e||(e.current=be[_e],be[_e]=null,_e--)}function me(e,n){_e++,be[_e]=e.current,e.current=n}var Ce=z(null),ze=z(null),ee=z(null),fe=z(null);function Te(e,n){switch(me(ee,n),me(ze,e),me(Ce,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Jg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Jg(n),e=$g(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(Ce),me(Ce,e)}function Ee(){te(Ce),te(ze),te(ee)}function Ne(e){e.memoizedState!==null&&me(fe,e);var n=Ce.current,a=$g(n,e.type);n!==a&&(me(ze,e),me(Ce,a))}function Je(e){ze.current===e&&(te(Ce),te(ze)),fe.current===e&&(te(fe),Po._currentValue=J)}var ht,st;function ot(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+st}var vt=!1;function lt(e,n){if(!e||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ue){var re=ue}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(ue){re=ue}e.call(ye.prototype)}}else{try{throw Error()}catch(ue){re=ue}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ue){if(ue&&re&&typeof ue.stack=="string")return[ue.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],w=f[1];if(y&&w){var G=y.split(`
`),ie=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ie.length)for(o=G.length-1,u=ie.length-1;1<=o&&0<=u&&G[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ie[u]){var ve=`
`+G[o].replace(" at new "," at ");return e.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",e.displayName)),ve}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ot(a):""}function jt(e,n){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return e.child!==n&&n!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return ot("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=jt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ut=Object.prototype.hasOwnProperty,ut=r.unstable_scheduleCallback,_t=r.unstable_cancelCallback,je=r.unstable_shouldYield,I=r.unstable_requestPaint,M=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Me=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,$e=r.unstable_LowPriority,Le=r.unstable_IdlePriority,We=r.log,tt=r.unstable_setDisableYieldValue,Re=null,we=null;function ke(e){if(typeof We=="function"&&tt(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Re,e)}catch{}}var He=Math.clz32?Math.clz32:W,Pe=Math.log,xt=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Pe(e)/xt|0)|0}var Ie=256,De=262144,Ve=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=Ae(o):(y&=w,y!==0?u=Ae(y):a||(a=w&~e,a!==0&&(u=Ae(a))))):(w=o&~f,w!==0?u=Ae(w):y!==0?u=Ae(y):a||(a=o&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ft(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ui(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,ie=e.hiddenUpdates;for(a=y&~a;0<a;){var ve=31-He(a),ye=1<<ve;w[ve]=0,G[ve]=-1;var re=ie[ve];if(re!==null)for(ie[ve]=null,ve=0;ve<re.length;ve++){var ue=re[ve];ue!==null&&(ue.lane&=-536870913)}a&=~ye}o!==0&&hn(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function hn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-He(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $i(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-He(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ea(e,n){var a=n&-n;return a=(a&42)!==0?1:ta(a),(a&(e.suspendedLanes|n))!==0?0:a}function ta(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kn(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:b0(e.type))}function Xn(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var Un=Math.random().toString(36).slice(2),en="__reactFiber$"+Un,pn="__reactProps$"+Un,Ln="__reactContainer$"+Un,Jn="__reactEvents$"+Un,ms="__reactListeners$"+Un,na="__reactHandles$"+Un,Ws="__reactResources$"+Un,ia="__reactMarker$"+Un;function gs(e){delete e[en],delete e[pn],delete e[Jn],delete e[ms],delete e[na]}function Ti(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ln]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=r0(e);e!==null;){if(a=e[en])return a;e=r0(e)}return n}e=a,a=e.parentNode}return null}function Ai(e){if(e=e[en]||e[Ln]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $n(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function zi(e){var n=e[Ws];return n||(n=e[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[ia]=!0}var K=new Set,ce={};function se(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ce[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Be={};function qe(e){return Ut.call(Be,e)?!0:Ut.call(Xe,e)?!1:Fe.test(e)?Be[e]=!0:(Xe[e]=!0,!1)}function Ye(e,n,a){if(qe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function it(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ke(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function dt(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=nt(e,n,""+e[n])}}function rt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Et=/[\n"\\]/g;function pt(e){return e.replace(Et,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(e,n,a,o,u,f,y,w){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,y,he(n)):a!=null?Mn(e,y,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+he(w):e.removeAttribute("name")}function aa(e,n,a,o,u,f,y,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){dt(e);return}a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),dt(e)}function Mn(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Gt(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(le(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),dt(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ys(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&An(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return C_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function Qh(e){var n=Ai(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;e:switch(e=n.stateNode,n.type){case"input":if(bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&rt(o)}break e;case"textarea":Gt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&fi(e,!!a.multiple,n,!1)}}}var nu=!1;function Jh(e,n,a){if(nu)return e(n,a);nu=!0;try{var o=e(n);return o}finally{if(nu=!1,(Zs!==null||Ks!==null)&&(Yl(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,Qh(n),e)))for(n=0;n<e.length;n++)Qh(e[n])}}function Qr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(ra)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{iu=!1}var Pa=null,au=null,ll=null;function $h(){if(ll)return ll;var e,n=au,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function ep(){return!1}function jn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:ep,this.isPropagationStopped=ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=jn(vs),$r=g({},vs,{view:0,detail:0}),R_=jn($r),su,ru,eo,dl=g({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(su=e.screenX-eo.screenX,ru=e.screenY-eo.screenY):ru=su=0,eo=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),tp=jn(dl),w_=g({},dl,{dataTransfer:0}),D_=jn(w_),N_=g({},$r,{relatedTarget:0}),ou=jn(N_),U_=g({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=jn(U_),O_=g({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P_=jn(O_),F_=g({},vs,{data:0}),np=jn(F_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=B_[e])?!!n[e]:!1}function lu(){return H_}var G_=g({},$r,{key:function(e){if(e.key){var n=z_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V_=jn(G_),k_=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=jn(k_),X_=g({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),j_=jn(X_),q_=g({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=jn(q_),Y_=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=jn(Y_),K_=g({},vs,{newState:0,oldState:0}),Q_=jn(K_),J_=[9,13,27,32],cu=ra&&"CompositionEvent"in window,to=null;ra&&"documentMode"in document&&(to=document.documentMode);var $_=ra&&"TextEvent"in window&&!to,ap=ra&&(!cu||to&&8<to&&11>=to),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return J_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function ex(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function tx(e,n){if(Qs)return e==="compositionend"||!cu&&op(e,n)?(e=$h(),ll=au=Pa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nx[e.type]:n==="textarea"}function up(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=tc(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function ix(e){qg(e,0)}function hl(e){var n=$n(e);if(rt(n))return e}function fp(e,n){if(e==="change")return n}var dp=!1;if(ra){var uu;if(ra){var fu="oninput"in document;if(!fu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),fu=typeof hp.oninput=="function"}uu=fu}else uu=!1;dp=uu&&(!document.documentMode||9<document.documentMode)}function pp(){no&&(no.detachEvent("onpropertychange",mp),io=no=null)}function mp(e){if(e.propertyName==="value"&&hl(io)){var n=[];up(n,io,e,tu(e)),Jh(ix,n)}}function ax(e,n,a){e==="focusin"?(pp(),no=n,io=a,no.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(io)}function rx(e,n){if(e==="click")return hl(n)}function ox(e,n){if(e==="input"||e==="change")return hl(n)}function lx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:lx;function ao(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ut.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function _p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cx=ra&&"documentMode"in document&&11>=document.documentMode,Js=null,hu=null,so=null,pu=!1;function yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Js==null||Js!==Qe(o)||(o=Js,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=tc(hu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Js)))}function _s(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},mu={},Sp={};ra&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function xs(e){if(mu[e])return mu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return mu[e]=n[a];return e}var bp=xs("animationend"),Mp=xs("animationiteration"),Ep=xs("animationstart"),ux=xs("transitionrun"),fx=xs("transitionstart"),dx=xs("transitioncancel"),Tp=xs("transitionend"),Ap=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ri(e,n){Ap.set(e,n),se(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],er=0,vu=0;function ml(){for(var e=er,n=vu=er=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Cp(a,u,f)}}function gl(e,n,a,o){di[er++]=e,di[er++]=n,di[er++]=a,di[er++]=o,vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _u(e,n,a,o){return gl(e,n,a,o),vl(e)}function ys(e,n){return gl(e,null,null,n),vl(e)}function Cp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-He(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Ro)throw Ro=0,Rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function hx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new hx(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")xu(e)&&(y=1);else if(typeof e=="string")y=_y(e,a,Ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case T:return e=ti(31,a,n,u),e.elementType=T,e.lanes=f,e;case A:return Ss(a.children,u,f,n);case b:y=8,u|=24;break;case x:return e=ti(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case L:return e=ti(13,a,n,u),e.elementType=L,e.lanes=f,e;case P:return e=ti(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case N:y=9;break e;case U:y=11;break e;case B:y=14;break e;case X:y=16,o=null;break e}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ss(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function yu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function wp(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Su(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dp=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var nr=[],ir=0,xl=null,ro=0,pi=[],mi=0,Fa=null,Ii=1,Bi="";function la(e,n){nr[ir++]=ro,nr[ir++]=xl,xl=e,ro=n}function Np(e,n,a){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Fa,Fa=e;var o=Ii;e=Bi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ii=1<<32-He(n)+u|a<<u|o,Bi=f+e}else Ii=1<<f|a<<u|o,Bi=e}function bu(e){e.return!==null&&(la(e,1),Np(e,1,0))}function Mu(e){for(;e===xl;)xl=nr[--ir],nr[ir]=null,ro=nr[--ir],nr[ir]=null;for(;e===Fa;)Fa=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null}function Up(e,n){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Fa,Ii=n.id,Bi=n.overflow,Fa=e}var Cn=null,Kt=null,Nt=!1,za=null,gi=!1,Eu=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(hi(n,e)),Eu}function Lp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[en]=e,n[pn]=o,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)At(Do[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),aa(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Kg(n.textContent,a)?(o.popover!=null&&(At("beforetoggle",n),At("toggle",n)),o.onScroll!=null&&At("scroll",n),o.onScrollEnd!=null&&At("scrollend",n),o.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ia(e,!0)}function Op(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Cn=Cn.return}}function ar(e){if(e!==Cn)return!1;if(!Nt)return Op(e),Nt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&Kt&&Ia(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=s0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=s0(e)}else n===27?(n=Kt,Ja(e.type)?(e=Yf,Yf=null,Kt=e):Kt=n):Kt=Cn?_i(e.stateNode.nextSibling):null;return!0}function bs(){Kt=Cn=null,Nt=!1}function Tu(){var e=za;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),za=null),e}function oo(e){za===null?za=[e]:za.push(e)}var Au=z(null),Ms=null,ca=null;function Ba(e,n,a){me(Au,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Au.current,te(Au)}function Cu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ru(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Cu(f.return,a,e),o||(y=null);break e}f=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Cu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function sr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var w=u.type;ei(u.pendingProps.value,y.value)||(e!==null?e.push(w):e=[w])}}else if(u===fe.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Ru(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Pp(Ms,e)}function Sl(e,n){return Ms===null&&Es(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(s(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return a}var px=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},mx=r.unstable_scheduleCallback,gx=r.unstable_NormalPriority,on={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new px,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&mx(gx,function(){e.controller.abort()})}var co=null,Du=0,rr=0,or=null;function vx(e,n){if(co===null){var a=co=[];Du=0,rr=Of(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Du++,n.then(Fp,Fp),n}function Fp(){if(--Du===0&&co!==null){or!==null&&(or.status="fulfilled");var e=co;co=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var zp=F.S;F.S=function(e,n){yg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(e,n),zp!==null&&zp(e,n)};var Ts=z(null);function Nu(){var e=Ts.current;return e!==null?e:Zt.pooledCache}function bl(e,n){n===null?me(Ts,Ts.current):me(Ts,n.pool)}function Ip(){var e=Nu();return e===null?null:{parent:on._currentValue,pool:e}}var lr=Error(s(460)),Uu=Error(s(474)),Ml=Error(s(542)),El={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw Cs=n,lr}}function As(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,lr):a}}var Cs=null;function Gp(){if(Cs===null)throw Error(s(459));var e=Cs;return Cs=null,e}function Vp(e){if(e===lr||e===Ml)throw Error(s(483))}var cr=null,uo=0;function Tl(e){var n=uo;return uo+=1,cr===null&&(cr=[]),Hp(cr,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){function n(Q,j){if(e){var ne=Q.deletions;ne===null?(Q.deletions=[j],Q.flags|=16):ne.push(j)}}function a(Q,j){if(!e)return null;for(;j!==null;)n(Q,j),j=j.sibling;return null}function o(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function u(Q,j){return Q=oa(Q,j),Q.index=0,Q.sibling=null,Q}function f(Q,j,ne){return Q.index=ne,e?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<j?(Q.flags|=67108866,j):ne):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,j,ne,xe){return j===null||j.tag!==6?(j=yu(ne,Q.mode,xe),j.return=Q,j):(j=u(j,ne),j.return=Q,j)}function G(Q,j,ne,xe){var at=ne.type;return at===A?ve(Q,j,ne.props.children,xe,ne.key):j!==null&&(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===X&&As(at)===j.type)?(j=u(j,ne.props),fo(j,ne),j.return=Q,j):(j=_l(ne.type,ne.key,ne.props,null,Q.mode,xe),fo(j,ne),j.return=Q,j)}function ie(Q,j,ne,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ne.containerInfo||j.stateNode.implementation!==ne.implementation?(j=Su(ne,Q.mode,xe),j.return=Q,j):(j=u(j,ne.children||[]),j.return=Q,j)}function ve(Q,j,ne,xe,at){return j===null||j.tag!==7?(j=Ss(ne,Q.mode,xe,at),j.return=Q,j):(j=u(j,ne),j.return=Q,j)}function ye(Q,j,ne){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=yu(""+j,Q.mode,ne),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ne=_l(j.type,j.key,j.props,null,Q.mode,ne),fo(ne,j),ne.return=Q,ne;case E:return j=Su(j,Q.mode,ne),j.return=Q,j;case X:return j=As(j),ye(Q,j,ne)}if(le(j)||q(j))return j=Ss(j,Q.mode,ne,null),j.return=Q,j;if(typeof j.then=="function")return ye(Q,Tl(j),ne);if(j.$$typeof===D)return ye(Q,Sl(Q,j),ne);Al(Q,j)}return null}function re(Q,j,ne,xe){var at=j!==null?j.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return at!==null?null:w(Q,j,""+ne,xe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===at?G(Q,j,ne,xe):null;case E:return ne.key===at?ie(Q,j,ne,xe):null;case X:return ne=As(ne),re(Q,j,ne,xe)}if(le(ne)||q(ne))return at!==null?null:ve(Q,j,ne,xe,null);if(typeof ne.then=="function")return re(Q,j,Tl(ne),xe);if(ne.$$typeof===D)return re(Q,j,Sl(Q,ne),xe);Al(Q,ne)}return null}function ue(Q,j,ne,xe,at){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Q=Q.get(ne)||null,w(j,Q,""+xe,at);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return Q=Q.get(xe.key===null?ne:xe.key)||null,G(j,Q,xe,at);case E:return Q=Q.get(xe.key===null?ne:xe.key)||null,ie(j,Q,xe,at);case X:return xe=As(xe),ue(Q,j,ne,xe,at)}if(le(xe)||q(xe))return Q=Q.get(ne)||null,ve(j,Q,xe,at,null);if(typeof xe.then=="function")return ue(Q,j,ne,Tl(xe),at);if(xe.$$typeof===D)return ue(Q,j,ne,Sl(j,xe),at);Al(j,xe)}return null}function Ze(Q,j,ne,xe){for(var at=null,Ot=null,et=j,St=j=0,wt=null;et!==null&&St<ne.length;St++){et.index>St?(wt=et,et=null):wt=et.sibling;var Pt=re(Q,et,ne[St],xe);if(Pt===null){et===null&&(et=wt);break}e&&et&&Pt.alternate===null&&n(Q,et),j=f(Pt,j,St),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt,et=wt}if(St===ne.length)return a(Q,et),Nt&&la(Q,St),at;if(et===null){for(;St<ne.length;St++)et=ye(Q,ne[St],xe),et!==null&&(j=f(et,j,St),Ot===null?at=et:Ot.sibling=et,Ot=et);return Nt&&la(Q,St),at}for(et=o(et);St<ne.length;St++)wt=ue(et,Q,St,ne[St],xe),wt!==null&&(e&&wt.alternate!==null&&et.delete(wt.key===null?St:wt.key),j=f(wt,j,St),Ot===null?at=wt:Ot.sibling=wt,Ot=wt);return e&&et.forEach(function(is){return n(Q,is)}),Nt&&la(Q,St),at}function ct(Q,j,ne,xe){if(ne==null)throw Error(s(151));for(var at=null,Ot=null,et=j,St=j=0,wt=null,Pt=ne.next();et!==null&&!Pt.done;St++,Pt=ne.next()){et.index>St?(wt=et,et=null):wt=et.sibling;var is=re(Q,et,Pt.value,xe);if(is===null){et===null&&(et=wt);break}e&&et&&is.alternate===null&&n(Q,et),j=f(is,j,St),Ot===null?at=is:Ot.sibling=is,Ot=is,et=wt}if(Pt.done)return a(Q,et),Nt&&la(Q,St),at;if(et===null){for(;!Pt.done;St++,Pt=ne.next())Pt=ye(Q,Pt.value,xe),Pt!==null&&(j=f(Pt,j,St),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return Nt&&la(Q,St),at}for(et=o(et);!Pt.done;St++,Pt=ne.next())Pt=ue(et,Q,St,Pt.value,xe),Pt!==null&&(e&&Pt.alternate!==null&&et.delete(Pt.key===null?St:Pt.key),j=f(Pt,j,St),Ot===null?at=Pt:Ot.sibling=Pt,Ot=Pt);return e&&et.forEach(function(wy){return n(Q,wy)}),Nt&&la(Q,St),at}function Yt(Q,j,ne,xe){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var at=ne.key;j!==null;){if(j.key===at){if(at=ne.type,at===A){if(j.tag===7){a(Q,j.sibling),xe=u(j,ne.props.children),xe.return=Q,Q=xe;break e}}else if(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===X&&As(at)===j.type){a(Q,j.sibling),xe=u(j,ne.props),fo(xe,ne),xe.return=Q,Q=xe;break e}a(Q,j);break}else n(Q,j);j=j.sibling}ne.type===A?(xe=Ss(ne.props.children,Q.mode,xe,ne.key),xe.return=Q,Q=xe):(xe=_l(ne.type,ne.key,ne.props,null,Q.mode,xe),fo(xe,ne),xe.return=Q,Q=xe)}return y(Q);case E:e:{for(at=ne.key;j!==null;){if(j.key===at)if(j.tag===4&&j.stateNode.containerInfo===ne.containerInfo&&j.stateNode.implementation===ne.implementation){a(Q,j.sibling),xe=u(j,ne.children||[]),xe.return=Q,Q=xe;break e}else{a(Q,j);break}else n(Q,j);j=j.sibling}xe=Su(ne,Q.mode,xe),xe.return=Q,Q=xe}return y(Q);case X:return ne=As(ne),Yt(Q,j,ne,xe)}if(le(ne))return Ze(Q,j,ne,xe);if(q(ne)){if(at=q(ne),typeof at!="function")throw Error(s(150));return ne=at.call(ne),ct(Q,j,ne,xe)}if(typeof ne.then=="function")return Yt(Q,j,Tl(ne),xe);if(ne.$$typeof===D)return Yt(Q,j,Sl(Q,ne),xe);Al(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,j!==null&&j.tag===6?(a(Q,j.sibling),xe=u(j,ne),xe.return=Q,Q=xe):(a(Q,j),xe=yu(ne,Q.mode,xe),xe.return=Q,Q=xe),y(Q)):a(Q,j)}return function(Q,j,ne,xe){try{uo=0;var at=Yt(Q,j,ne,xe);return cr=null,at}catch(et){if(et===lr||et===Ml)throw et;var Ot=ti(29,et,null,Q.mode);return Ot.lanes=xe,Ot.return=Q,Ot}finally{}}}var Rs=kp(!0),Xp=kp(!1),Ha=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Cp(e,null,a),n}return gl(e,o,n,a),vl(e)}function ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$i(e,a)}}function Pu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function po(){if(Fu){var e=or;if(e!==null)throw e}}function mo(e,n,a,o){Fu=!1;var u=e.updateQueue;Ha=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,ie=G.next;G.next=null,y===null?f=ie:y.next=ie,y=G;var ve=e.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==y&&(w===null?ve.firstBaseUpdate=ie:w.next=ie,ve.lastBaseUpdate=G))}if(f!==null){var ye=u.baseState;y=0,ve=ie=G=null,w=f;do{var re=w.lane&-536870913,ue=re!==w.lane;if(ue?(Rt&re)===re:(o&re)===re){re!==0&&re===rr&&(Fu=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ze=e,ct=w;re=n;var Yt=a;switch(ct.tag){case 1:if(Ze=ct.payload,typeof Ze=="function"){ye=Ze.call(Yt,ye,re);break e}ye=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=ct.payload,re=typeof Ze=="function"?Ze.call(Yt,ye,re):Ze,re==null)break e;ye=g({},ye,re);break e;case 2:Ha=!0}}re=w.callback,re!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[re]:ue.push(re))}else ue={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(ie=ve=ue,G=ye):ve=ve.next=ue,y|=re;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ue=w,w=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);ve===null&&(G=ye),u.baseState=G,u.firstBaseUpdate=ie,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Wa|=y,e.lanes=y,e.memoizedState=ye}}function jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var ur=z(null),Cl=z(0);function Wp(e,n){e=xa,me(Cl,e),me(ur,n),xa=e|n.baseLanes}function zu(){me(Cl,xa),me(ur,ur.current)}function Iu(){xa=Cl.current,te(ur),te(Cl)}var ni=z(null),vi=null;function ka(e){var n=e.alternate;me(an,an.current&1),me(ni,e),vi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(vi=e)}function Bu(e){me(an,an.current),me(ni,e),vi===null&&(vi=e)}function Yp(e){e.tag===22?(me(an,an.current),me(ni,e),vi===null&&(vi=e)):Xa()}function Xa(){me(an,an.current),me(ni,ni.current)}function ii(e){te(ni),vi===e&&(vi=null),te(an)}var an=z(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,yt=null,qt=null,ln=null,wl=!1,fr=!1,ws=!1,Dl=0,go=0,dr=null,xx=0;function tn(){throw Error(s(321))}function Hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Gu(e,n,a,o,u,f){return fa=f,yt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Nm:nf,ws=!1,f=a(o,u),ws=!1,fr&&(f=Kp(n,a,o,u)),Zp(e),f}function Zp(e){F.H=xo;var n=qt!==null&&qt.next!==null;if(fa=0,ln=qt=yt=null,wl=!1,go=0,dr=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&yl(e)&&(cn=!0))}function Kp(e,n,a,o){yt=e;var u=0;do{if(fr&&(dr=null),go=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,ln=qt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Um,f=n(a,o)}while(fr);return f}function yx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(qt!==null?qt.memoizedState:null)!==e&&(yt.flags|=1024),n}function Vu(){var e=Dl!==0;return Dl=0,e}function ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Xu(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}fa=0,ln=qt=yt=null,fr=!1,go=Dl=0,dr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?yt.memoizedState=ln=e:ln=ln.next=e,ln}function sn(){if(qt===null){var e=yt.alternate;e=e!==null?e.memoizedState:null}else e=qt.next;var n=ln===null?yt.memoizedState:ln.next;if(n!==null)ln=n,qt=e;else{if(e===null)throw yt.alternate===null?Error(s(467)):Error(s(310));qt=e,e={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},ln===null?yt.memoizedState=ln=e:ln=ln.next=e}return ln}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=go;return go+=1,dr===null&&(dr=[]),e=Hp(dr,e,n),n=yt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Nm:nf),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===D)return Rn(e)}throw Error(s(438,String(e)))}function ju(e){var n=null,a=yt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=yt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),yt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function da(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=sn();return qu(n,qt,e)}function qu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var w=y=null,G=null,ie=n,ve=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(Rt&ye)===ye:(fa&ye)===ye){var re=ie.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===rr&&(ve=!0);else if((fa&re)===re){ie=ie.next,re===rr&&(ve=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(w=G=ye,y=f):G=G.next=ye,yt.lanes|=re,Wa|=re;ye=ie.action,ws&&a(f,ye),f=ie.hasEagerState?ie.eagerState:a(f,ye)}else re={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(w=G=re,y=f):G=G.next=re,yt.lanes|=ye,Wa|=ye;ie=ie.next}while(ie!==null&&ie!==n);if(G===null?y=f:G.next=w,!ei(f,e.memoizedState)&&(cn=!0,ve&&(a=or,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);ei(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Qp(e,n,a){var o=yt,u=sn(),f=Nt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ei((qt||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,Ku(em.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},$p.bind(null,o,u,a,n),null),Zt===null)throw Error(s(349));f||(fa&127)!==0||Jp(o,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=yt.updateQueue,n===null?(n=Nl(),yt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&nm(e)}function em(e,n,a){return a(function(){tm(n)&&nm(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function nm(e){var n=ys(e,2);n!==null&&Kn(n,e,2)}function Yu(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),ws){ke(!0);try{a()}finally{ke(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},n}function im(e,n,a,o){return e.baseState=a,qu(e,qt,typeof o=="function"?o:da)}function Sx(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var w=a(u,o),G=F.S;G!==null&&G(y,w),sm(e,n,w)}catch(ie){Zu(e,n,ie)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),sm(e,n,f)}catch(ie){Zu(e,n,ie)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(e,n,o)},function(o){return Zu(e,n,o)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function Zu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Nt){var a=Zt.formState;if(a!==null){e:{var o=yt;if(Nt){if(Kt){t:{for(var u=Kt,f=gi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=_i(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=Rm.bind(null,yt,o),o.dispatch=a,o=Yu(!1),f=tf.bind(null,yt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Sx.bind(null,yt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function um(e){var n=sn();return fm(n,qt,e)}function fm(e,n,a){if(n=qu(e,n,lm)[0],e=Ll(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(y){throw y===lr?Ml:y}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(yt.flags|=2048,hr(9,{destroy:void 0},bx.bind(null,u,a),null)),[o,f,e]}function bx(e,n){e.action=n}function dm(e){var n=sn(),a=qt;if(a!==null)return fm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=yt.updateQueue,n===null&&(n=Nl(),yt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function hm(){return sn().memoizedState}function Ol(e,n,a,o){var u=In();yt.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;qt!==null&&o!==null&&Hu(o,qt.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(yt.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function pm(e,n){Ol(8390656,8,e,n)}function Ku(e,n){Pl(2048,8,e,n)}function Mx(e){yt.flags|=4;var n=yt.updateQueue;if(n===null)n=Nl(),yt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=sn().memoizedState;return Mx({ref:n,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gm(e,n){return Pl(4,2,e,n)}function vm(e,n){return Pl(4,4,e,n)}function _m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,_m.bind(null,n,e),a)}function Qu(){}function ym(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hu(n,o[1]))return o[0];if(o=e(),ws){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[o,n],o}function Ju(e,n,a){return a===void 0||(fa&1073741824)!==0&&(Rt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=bg(),yt.lanes|=e,Wa|=e,a)}function bm(e,n,a,o){return ei(a,n)?a:ur.current!==null?(e=Ju(e,a,o),ei(e,n)||(cn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(Rt&261930)===0?(cn=!0,e.memoizedState=a):(e=bg(),yt.lanes|=e,Wa|=e,n)}function Mm(e,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var y=F.T,w={};F.T=w,tf(e,!1,n,a);try{var G=u(),ie=F.S;if(ie!==null&&ie(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=_x(G,o);_o(e,n,ve,ri(e))}else _o(e,n,o,ri(e))}catch(ye){_o(e,n,{then:function(){},status:"rejected",reason:ye},ri())}finally{k.p=f,y!==null&&w.types!==null&&(y.types=w.types),F.T=y}}function Ex(){}function $u(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Em(e).queue;Mm(e,u,n,J,a===null?Ex:function(){return Tm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=Em(e);n.next===null&&(n=e.alternate.memoizedState),_o(e,n.next.queue,{},ri())}function ef(){return Rn(Po)}function Am(){return sn().memoizedState}function Cm(){return sn().memoizedState}function Tx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Ga(a);var o=Va(n,e,a);o!==null&&(Kn(o,n,a),ho(o,n,a)),n={cache:wu()},e.payload=n;return}n=n.return}}function Ax(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?wm(n,a):(a=_u(e,n,a,o),a!==null&&(Kn(a,e,o),Dm(a,n,o)))}function Rm(e,n,a){var o=ri();_o(e,n,a,o)}function _o(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,w=f(y,a);if(u.hasEagerState=!0,u.eagerState=w,ei(w,y))return gl(e,n,u,0),Zt===null&&ml(),!1}catch{}finally{}if(a=_u(e,n,u,o),a!==null)return Kn(a,e,o),Dm(a,n,o),!0}return!1}function tf(e,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=_u(e,a,o,2),n!==null&&Kn(n,e,2)}function Fl(e){var n=e.alternate;return e===yt||n!==null&&n===yt}function wm(e,n){fr=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$i(e,a)}}var xo={readContext:Rn,use:Ul,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};xo.useEffectEvent=tn;var Nm={readContext:Rn,use:Ul,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,_m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(ws){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(ws){ke(!0);try{a(n)}finally{ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ax.bind(null,yt,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Yu(e);var n=e.queue,a=Rm.bind(null,yt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(e,n){var a=In();return Ju(a,e,n)},useTransition:function(){var e=Yu(!1);return e=Mm.bind(null,yt,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=yt,u=In();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(Rt&127)!==0||Jp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(em.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},$p.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=Zt.identifierPrefix;if(Nt){var a=Bi,o=Ii;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,yt,!0,a),a.dispatch=n,[e,n]},useMemoCache:ju,useCacheRefresh:function(){return In().memoizedState=Tx.bind(null,yt)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:Rn,use:Ul,useCallback:ym,useContext:Rn,useEffect:Ku,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Sm,useReducer:Ll,useRef:hm,useState:function(){return Ll(da)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=sn();return bm(a,qt.memoizedState,e,n)},useTransition:function(){var e=Ll(da)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=sn();return im(a,qt,e,n)},useMemoCache:ju,useCacheRefresh:Cm};nf.useEffectEvent=mm;var Um={readContext:Rn,use:Ul,useCallback:ym,useContext:Rn,useEffect:Ku,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Sm,useReducer:Wu,useRef:hm,useState:function(){return Wu(da)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=sn();return qt===null?Ju(a,e,n):bm(a,qt.memoizedState,e,n)},useTransition:function(){var e=Wu(da)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=sn();return qt!==null?im(a,qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Cm};Um.useEffectEvent=mm;function af(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ga(o);u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,o),n!==null&&(Kn(n,e,o),ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,o),n!==null&&(Kn(n,e,o),ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Ga(a);o.tag=2,n!=null&&(o.callback=n),n=Va(e,o,a),n!==null&&(Kn(n,e,a),ho(n,e,a))}};function Lm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,f):!0}function Om(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function Ds(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Pm(e){pl(e)}function Fm(e){console.error(e)}function zm(e){pl(e)}function zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Im(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(e,n)},a}function Bm(e){return e=Ga(e),e.tag=3,e}function Hm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Im(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Im(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Cx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Zl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(s(435,a.tag))}return Nf(e,o,u),Zl(),!1}if(Nt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(e=Error(s(422),{cause:o}),oo(hi(e,a)))):(o!==Eu&&(n=Error(s(423),{cause:o}),oo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=rf(e.stateNode,o,u),Pu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Co===null?Co=[f]:Co.push(f),nn!==4&&(nn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=rf(a.stateNode,o,e),Pu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Bm(u),Hm(u,e,a,o),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(s(461)),cn=!1;function wn(e,n,a,o){n.child=e===null?Xp(n,null,a,o):Rs(n,e.child,a,o)}function Gm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var w in o)w!=="ref"&&(y[w]=o[w])}else y=o;return Es(n),o=Gu(e,n,a,y,f,u),w=Vu(),e!==null&&!cn?(ku(e,n,u),ha(e,n,u)):(Nt&&w&&bu(n),n.flags|=1,wn(e,n,o,u),n.child)}function Vm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,o,u)):(e=_l(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(y,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=oa(f,o),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ao(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,mf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ha(e,n,u)}return lf(e,n,a,o,u)}function Xm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return jm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):zu(),Yp(n);else return o=n.lanes=536870912,jm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),Wp(n,f),Xa(),n.memoizedState=null):(e!==null&&bl(n,null),zu(),Xa());return wn(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jm(e,n,a,o,u){var f=Nu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),zu(),Yp(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qm(e,n,a){return Rs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function Rx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Nt){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,yo(null,e);if(Bu(n),(e=Kt)?(e=a0(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Cn=n,Kt=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Il(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=Zt,o!==null&&(y=ea(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ys(e,y),Kn(o,e,y),of;Zl(),n=qm(e,n,a)}else e=f.treeContext,Kt=_i(y.nextSibling),Cn=n,Nt=!0,za=null,gi=!1,e!==null&&Up(n,e),n=Il(n,o),n.flags|=4096;return n}return e=oa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lf(e,n,a,o,u){return Es(n),a=Gu(e,n,a,o,void 0,u),o=Vu(),e!==null&&!cn?(ku(e,n,u),ha(e,n,u)):(Nt&&o&&bu(n),n.flags|=1,wn(e,n,a,u),n.child)}function Wm(e,n,a,o,u,f){return Es(n),n.updateQueue=null,a=Kp(n,o,a,u),Zp(e),o=Vu(),e!==null&&!cn?(ku(e,n,f),ha(e,n,f)):(Nt&&o&&bu(n),n.flags|=1,wn(e,n,a,f),n.child)}function Ym(e,n,a,o,u){if(Es(n),n.stateNode===null){var f=tr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):tr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(af(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&sf.enqueueReplaceState(f,f.state,null),mo(n,o,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,G=Ds(a,w);f.props=G;var ie=f.context,ve=a.contextType;y=tr,typeof ve=="object"&&ve!==null&&(y=Rn(ve));var ye=a.getDerivedStateFromProps;ve=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ie!==y)&&Om(n,f,o,y),Ha=!1;var re=n.memoizedState;f.state=re,mo(n,o,f,u),po(),ie=n.memoizedState,w||re!==ie||Ha?(typeof ye=="function"&&(af(n,a,ye,o),ie=n.memoizedState),(G=Ha||Lm(n,a,G,o,re,ie,y))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ou(e,n),y=n.memoizedProps,ve=Ds(a,y),f.props=ve,ye=n.pendingProps,re=f.context,ie=a.contextType,G=tr,typeof ie=="object"&&ie!==null&&(G=Rn(ie)),w=a.getDerivedStateFromProps,(ie=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ye||re!==G)&&Om(n,f,o,G),Ha=!1,re=n.memoizedState,f.state=re,mo(n,o,f,u),po();var ue=n.memoizedState;y!==ye||re!==ue||Ha||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof w=="function"&&(af(n,a,w,o),ue=n.memoizedState),(ve=Ha||Lm(n,a,ve,o,re,ue,G)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=G,o=ve):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Rs(n,e.child,null,u),n.child=Rs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ha(e,n,u),e}function Zm(e,n,a,o){return bs(),n.flags|=256,wn(e,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Ip()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Km(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Nt){if(u?ka(n):Xa(),(e=Kt)?(e=a0(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Cn=n,Kt=null)):e=null,e===null)throw Ia(n);return Wf(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Xa(),u=n.mode,w=Hl({mode:"hidden",children:w},u),o=Ss(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=uf(a),o.childLanes=ff(e,y,a),n.memoizedState=cf,yo(null,o)):(ka(n),df(n,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),w=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),w=Ss(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Rs(n,e.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(e,y,a),n.memoizedState=cf,n=yo(null,o));else if(ka(n),Wf(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var ie=y.dgst;y=ie,o=Error(s(419)),o.stack="",o.digest=y,oo({value:o,source:null,stack:null}),n=hf(e,n,a)}else if(cn||sr(e,n,a,!1),y=(a&e.childLanes)!==0,cn||y){if(y=Zt,y!==null&&(o=ea(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ys(e,o),Kn(y,e,o),of;qf(w)||Zl(),n=hf(e,n,a)}else qf(w)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Kt=_i(w.nextSibling),Cn=n,Nt=!0,za=null,gi=!1,e!==null&&Up(n,e),n=df(n,o.children),n.flags|=4096);return n}return u?(Xa(),w=o.fallback,u=n.mode,G=e.child,ie=G.sibling,o=oa(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ie!==null?w=oa(ie,w):(w=Ss(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,yo(null,o),o=n.child,w=e.child.memoizedState,w===null?w=uf(a):(u=w.cachePool,u!==null?(G=on._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Ip(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=ff(e,y,a),n.memoizedState=cf,yo(e.child,o)):(ka(n),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function hf(e,n,a){return Rs(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Cu(e.return,n,a)}function pf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Jm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=an.current,w=(y&2)!==0;if(w?(y=y&1|2,n.flags|=128):y&=1,me(an,y),wn(e,n,o,a),o=Nt?ro:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}pf(n,!0,a,null,f,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=oa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function wx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ba(n,on,e.memoizedState.cache),bs();break;case 27:case 5:Ne(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(ka(n),e=ha(e,n,a),e!==null?e.sibling:null);ka(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Jm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),me(an,an.current),o)break;return null;case 22:return n.lanes=0,Xm(e,n,a,n.pendingProps);case 24:Ba(n,on,e.memoizedState.cache)}return ha(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return cn=!1,wx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Nt&&(n.flags&1048576)!==0&&Np(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=As(n.elementType),n.type=e,typeof e=="function")xu(e)?(o=Ds(e,o),n.tag=1,n=Ym(null,n,e,o,a)):(n.tag=0,n=lf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Gm(null,n,e,o,a);break e}else if(u===B){n.tag=14,n=Vm(null,n,e,o,a);break e}}throw n=ae(e)||e,Error(s(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),Ym(e,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(e,n),mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ba(n,on,o),o!==f.cache&&Ru(n,[on],a,!0),po(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(e,n,o,a);break e}else if(o!==u){u=hi(Error(s(424)),n),oo(u),n=Zm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=_i(e.firstChild),Cn=n,Nt=!0,za=null,gi=!0,a=Xp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bs(),o===u){n=ha(e,n,a);break e}wn(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=u0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,e=n.pendingProps,o=nc(ee.current).createElement(a),o[en]=n,o[pn]=e,Dn(o,a,e),C(o),n.stateNode=o):n.memoizedState=u0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ne(n),e===null&&Nt&&(o=n.stateNode=o0(n.type,n.pendingProps,ee.current),Cn=n,gi=!0,u=Kt,Ja(n.type)?(Yf=u,Kt=_i(o.firstChild)):Kt=u),wn(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Nt&&((u=o=Kt)&&(o=sy(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,Cn=n,Kt=_i(o.firstChild),gi=!1,u=!0):u=!1),u||Ia(n)),Ne(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,kf(u,f)?o=null:y!==null&&kf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(e,n,yx,null,null,a),Po._currentValue=u),Bl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Nt&&((e=a=Kt)&&(a=ry(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Cn=n,Kt=null,e=!0):e=!1),e||Ia(n)),null;case 13:return Km(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Rs(n,null,o,a):wn(e,n,o,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Es(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return Rx(e,n,a);case 22:return Xm(e,n,a,n.pendingProps);case 24:return Es(n),o=Rn(on),e===null?(u=Nu(),u===null&&(u=Zt,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lu(n),Ba(n,on,u)):((e.lanes&a)!==0&&(Ou(e,n),mo(n,null,null,a),po()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,on,o)):(o=f.cache,Ba(n,on,o),o!==u.cache&&Ru(n,[on],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(e){e.flags|=4}function gf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ag())e.flags|=8192;else throw Cs=El,Uu}else e.flags&=-16777217}function eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m0(n))if(Ag())e.flags|=8192;else throw Cs=El,Uu}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?It():536870912,e.lanes|=n,vr|=n)}function So(e,n){if(!Nt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Dx(e,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(on),Ee(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(pa(n),f!==null?(Qt(n),eg(n,f)):(Qt(n),gf(n,u,null,o,a))):f?f!==e.memoizedState?(pa(n),Qt(n),eg(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&pa(n),Qt(n),gf(n,u,e,o,a)),null;case 27:if(Je(n),a=ee.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=Ce.current,ar(n)?Lp(n):(e=o0(u,o,a),n.stateNode=e,pa(n))}return Qt(n),null;case 5:if(Je(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=Ce.current,ar(n))Lp(n);else{var y=nc(ee.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[en]=n,f[pn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pa(n)}}return Qt(n),gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ee.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kg(e.nodeValue,a)),e||Ia(n,!0)}else e=nc(e).createTextNode(o),e[en]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[en]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[en]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Qt(n),null);case 4:return Ee(),e===null&&If(n.stateNode.containerInfo),Qt(n),null;case 10:return ua(n.type),Qt(n),null;case 19:if(te(an),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)So(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,So(o,!1),e=f.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rp(a,e),a=a.sibling;return me(an,an.current&1|2),Nt&&la(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>ql&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(e=Rl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Nt)return Qt(n),null}else 2*M()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=an.current,me(an,u?a&1|2:a&1),Nt&&la(n,o.treeForkCount),e):(Qt(n),null);case 22:case 23:return ii(n),Iu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&te(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(on),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Nx(e,n){switch(Mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(on),Ee(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(an),null;case 4:return Ee(),null;case 10:return ua(n.type),null;case 22:case 23:return ii(n),Iu(),e!==null&&te(Ts),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(on),null;case 25:return null;default:return null}}function tg(e,n){switch(Mu(n),n.tag){case 3:ua(on),Ee();break;case 26:case 27:case 5:Je(n);break;case 4:Ee();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:te(an);break;case 10:ua(n.type);break;case 22:case 23:ii(n),Iu(),e!==null&&te(Ts);break;case 24:ua(on)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(w){kt(n,n.return,w)}}function ja(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=n;var G=a,ie=w;try{ie()}catch(ve){kt(u,G,ve)}}}o=o.next}while(o!==f)}}catch(ve){kt(n,n.return,ve)}}function ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(o){kt(e,e.return,o)}}}function ig(e,n,a){a.props=Ds(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){kt(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){kt(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(e,n,u)}else a.current=null}function ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(e,e.return,u)}}function vf(e,n,a){try{var o=e.stateNode;$x(o,e.type,a,n),o[pn]=n}catch(u){kt(e,e.return,u)}}function sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function rg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[en]=e,n[pn]=a}catch(f){kt(e,e.return,f)}}var ma=!1,un=!1,yf=!1,og=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Ux(e,n){if(e=e.containerInfo,Gf=cc,e=xp(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,w=-1,G=-1,ie=0,ve=0,ye=e,re=null;t:for(;;){for(var ue;ye!==a||u!==0&&ye.nodeType!==3||(w=y+u),ye!==f||o!==0&&ye.nodeType!==3||(G=y+o),ye.nodeType===3&&(y+=ye.nodeValue.length),(ue=ye.firstChild)!==null;)re=ye,ye=ue;for(;;){if(ye===e)break t;if(re===a&&++ie===u&&(w=y),re===f&&++ve===o&&(G=y),(ue=ye.nextSibling)!==null)break;ye=re,re=ye.parentNode}ye=ue}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},cc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=Ds(a.type,u);e=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ct){kt(a,a.return,ct)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),o&4&&bo(5,a);break;case 1:if(va(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}o&64&&ng(a),o&512&&Mo(a,a.return);break;case 3:if(va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&o&4&&rg(a);case 26:case 5:va(e,a),n===null&&o&4&&ag(a),o&512&&Mo(a,a.return);break;case 12:va(e,a);break;case 31:va(e,a),o&4&&fg(e,a);break;case 13:va(e,a),o&4&&dg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gx.bind(null,a),oy(e,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||un,u=ma;var f=un;ma=o,(un=n)&&!f?_a(e,a,(a.subtreeFlags&8772)!==0):va(e,a),ma=u,un=f}break;case 30:break;default:va(e,a)}}function cg(e){var n=e.alternate;n!==null&&(e.alternate=null,cg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&gs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,qn=!1;function ga(e,n,a){for(a=a.child;a!==null;)ug(e,n,a),a=a.sibling}function ug(e,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:un||Hi(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Hi(a,n);var o=Jt,u=qn;Ja(a.type)&&(Jt=a.stateNode,qn=!1),ga(e,n,a),Uo(a.stateNode),Jt=o,qn=u;break;case 5:un||Hi(a,n);case 6:if(o=Jt,u=qn,Jt=null,ga(e,n,a),Jt=o,qn=u,Jt!==null)if(qn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:Jt!==null&&(qn?(e=Jt,n0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):n0(Jt,a.stateNode));break;case 4:o=Jt,u=qn,Jt=a.stateNode.containerInfo,qn=!0,ga(e,n,a),Jt=o,qn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),un||ja(4,a,n),ga(e,n,a);break;case 1:un||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ig(a,n,o)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,ga(e,n,a),un=o;break;default:ga(e,n,a)}}function fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){kt(n,n.return,a)}}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){kt(n,n.return,a)}}function Lx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new og),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=Lx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Vx.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ja(w.type)){Jt=w.stateNode,qn=!1;break e}break;case 5:Jt=w.stateNode,qn=!1;break e;case 3:case 4:Jt=w.stateNode.containerInfo,qn=!0;break e}w=w.return}if(Jt===null)throw Error(s(160));ug(f,y,u),Jt=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)hg(n,e),n=n.sibling}var wi=null;function hg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(ja(3,e,e.return),bo(3,e),ja(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(un||a===null||Hi(a,a.return)),o&64&&ma&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Wn(n,e),Yn(e),o&512&&(un||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ia]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[en]=e,C(f),o=f;break e;case"link":var y=h0("link","href",u).get(o+(a.href||""));if(y){for(var w=0;w<y.length;w++)if(f=y[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(w,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=h0("meta","content",u).get(o+(a.content||""))){for(w=0;w<y.length;w++)if(f=y[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(w,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[en]=e,C(f),o=f}e.stateNode=o}else p0(u,e.type,e.stateNode);else e.stateNode=d0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?p0(u,e.type,e.stateNode):d0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(un||a===null||Hi(a,a.return)),a!==null&&o&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(un||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Ze){kt(e,e.return,Ze)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ze){kt(e,e.return,Ze)}}break;case 3:if(sc=null,u=wi,wi=ic(n.containerInfo),Wn(n,e),wi=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Ze){kt(e,e.return,Ze)}yf&&(yf=!1,pg(e));break;case 4:o=wi,wi=ic(e.stateNode.containerInfo),Wn(n,e),Yn(e),wi=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ie=ma,ve=un;if(ma=ie||u,un=ve||G,Wn(n,e),un=ve,ma=ie,Yn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ma||un||Ns(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=G.stateNode;var ye=G.memoizedProps.style,re=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ze){kt(G,G.return,Ze)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ze){kt(G,G.return,Ze)}}}else if(n.tag===18){if(a===null){G=n;try{var ue=G.stateNode;u?i0(ue,!0):i0(G.stateNode,!1)}catch(Ze){kt(G,G.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(e);Vl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(mn(y,""),a.flags&=-33);var w=_f(e);Vl(e,w,y);break;case 3:case 4:var G=a.stateNode.containerInfo,ie=_f(e);xf(e,ie,G);break;default:throw Error(s(161))}}catch(ve){kt(e,e.return,ve)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(e,n.alternate,n),n=n.sibling}function Ns(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Ns(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ig(n,n.return,a),Ns(n);break;case 27:Uo(n.stateNode);case 26:case 5:Hi(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:_a(u,f,a),bo(4,f);break;case 1:if(_a(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){kt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)jp(G[u],w)}catch(ie){kt(o,o.return,ie)}}a&&y&64&&ng(f),Mo(f,f.return);break;case 27:rg(f);case 26:case 5:_a(u,f,a),a&&o===null&&y&4&&ag(f),Mo(f,f.return);break;case 12:_a(u,f,a);break;case 31:_a(u,f,a),a&&y&4&&fg(u,f);break;case 13:_a(u,f,a),a&&y&4&&dg(u,f);break;case 22:f.memoizedState===null&&_a(u,f,a),Mo(f,f.return);break;case 30:break;default:_a(u,f,a)}n=n.sibling}}function Sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&lo(a))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)mg(e,n,a,o),n=n.sibling}function mg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),u&2048&&bo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e)));break;case 12:if(u&2048){Di(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,w=f.onPostCommit;typeof w=="function"&&w(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){kt(n,n.return,G)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,o):Eo(e,n):f._visibility&2?Di(e,n,a,o):(f._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(y,n);break;case 24:Di(e,n,a,o),u&2048&&bf(n.alternate,n);break;default:Di(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,w=a,G=o,ie=y.flags;switch(y.tag){case 0:case 11:case 15:pr(f,y,w,G,u),bo(8,y);break;case 23:break;case 22:var ve=y.stateNode;y.memoizedState!==null?ve._visibility&2?pr(f,y,w,G,u):Eo(f,y):(ve._visibility|=2,pr(f,y,w,G,u)),u&&ie&2048&&Sf(y.alternate,y);break;case 24:pr(f,y,w,G,u),u&&ie&2048&&bf(y.alternate,y);break;default:pr(f,y,w,G,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&bf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function mr(e,n,a){if(e.subtreeFlags&To)for(e=e.child;e!==null;)gg(e,n,a),e=e.sibling}function gg(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&To&&e.memoizedState!==null&&xy(a,wi,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=wi;wi=ic(e.stateNode.containerInfo),mr(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,mr(e,n,a),To=o):mr(e,n,a));break;default:mr(e,n,a)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,xg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):Ao(e);break;default:Ao(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,xg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function xg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(cg(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Ox={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(on).controller.signal}},Px=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,Tt=null,Rt=0,Vt=0,ai=null,qa=!1,gr=!1,Mf=!1,xa=0,nn=0,Wa=0,Us=0,Ef=0,si=0,vr=0,Co=null,Zn=null,Tf=!1,jl=0,yg=0,ql=1/0,Wl=null,Ya=null,gn=0,Za=null,_r=null,ya=0,Af=0,Cf=null,Sg=null,Ro=0,Rf=null;function ri(){return(Bt&2)!==0&&Rt!==0?Rt&-Rt:F.T!==null?Of():kn()}function bg(){if(si===0)if((Rt&536870912)===0||Nt){var e=De;De<<=1,(De&3932160)===0&&(De=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===Zt&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Ka(e,Rt,si,!1)),xn(e,a),((Bt&2)===0||e!==Zt)&&(e===Zt&&((Bt&2)===0&&(Us|=a),nn===4&&Ka(e,Rt,si,!1)),Gi(e))}function Mg(e,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ue(e,n),u=o?Ix(e,n):Df(e,n,!0),f=o;do{if(u===0){gr&&!o&&Ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Fx(a)){u=Df(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var w=e;u=Co;var G=w.current.memoizedState.isDehydrated;if(G&&(xr(w,y).flags|=256),y=Df(w,y,!1),y!==2){if(Mf&&!G){w.errorRecoveryDisabledLanes|=f,Us|=f,u=4;break e}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){xr(e,0),Ka(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,si,!qa);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-M(),10<u)){if(Ka(o,n,si,!qa),Se(o,0,!0)!==0)break e;ya=n,o.timeoutHandle=e0(Eg.bind(null,o,a,Zn,Wl,Tf,n,si,Us,vr,qa,f,"Throttled",-0,0),u);break e}Eg(o,a,Zn,Wl,Tf,n,si,Us,vr,qa,f,null,-0,0)}}break}while(!0);Gi(e)}function Eg(e,n,a,o,u,f,y,w,G,ie,ve,ye,re,ue){if(e.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},gg(n,f,ye);var Ze=(f&62914560)===f?jl-M():(f&4194048)===f?yg-M():0;if(Ze=yy(ye,Ze),Ze!==null){ya=f,e.cancelPendingCommit=Ze(Ug.bind(null,e,n,f,a,o,u,y,w,G,ve,ye,null,re,ue)),Ka(e,f,y,!ie);return}}Ug(e,n,f,a,o,u,y,w,G)}function Fx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(e,n,a,o){n&=~Ef,n&=~Us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-He(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&hn(e,a,n)}function Yl(){return(Bt&6)===0?(wo(0),!1):!0}function wf(){if(Tt!==null){if(Vt===0)var e=Tt.return;else e=Tt,ca=Ms=null,Xu(e),cr=null,uo=0,e=Tt;for(;e!==null;)tg(e.alternate,e),e=e.return;Tt=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ny(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,wf(),Zt=e,Tt=a=oa(e.current,null),Rt=n,Vt=0,ai=null,qa=!1,gr=Ue(e,n),Mf=!1,vr=si=Ef=Us=Wa=nn=0,Zn=Co=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-He(o),f=1<<u;n|=e[u],o&=~f}return xa=n,ml(),a}function Tg(e,n){yt=null,F.H=xo,n===lr||n===Ml?(n=Gp(),Vt=3):n===Uu?(n=Gp(),Vt=4):Vt=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Tt===null&&(nn=1,zl(e,hi(n,e.current)))}function Ag(){var e=ni.current;return e===null?!0:(Rt&4194048)===Rt?vi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?e===vi:!1}function Cg(){var e=F.H;return F.H=xo,e===null?xo:e}function Rg(){var e=F.A;return F.A=Ox,e}function Zl(){nn=4,qa||(Rt&4194048)!==Rt&&ni.current!==null||(gr=!0),(Wa&134217727)===0&&(Us&134217727)===0||Zt===null||Ka(Zt,Rt,si,!1)}function Df(e,n,a){var o=Bt;Bt|=2;var u=Cg(),f=Rg();(Zt!==e||Rt!==n)&&(Wl=null,xr(e,n)),n=!1;var y=nn;e:do try{if(Vt!==0&&Tt!==null){var w=Tt,G=ai;switch(Vt){case 8:wf(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var ie=Vt;if(Vt=0,ai=null,yr(e,w,G,ie),a&&gr){y=0;break e}break;default:ie=Vt,Vt=0,ai=null,yr(e,w,G,ie)}}zx(),y=nn;break}catch(ve){Tg(e,ve)}while(!0);return n&&e.shellSuspendCounter++,ca=Ms=null,Bt=o,F.H=u,F.A=f,Tt===null&&(Zt=null,Rt=0,ml()),y}function zx(){for(;Tt!==null;)wg(Tt)}function Ix(e,n){var a=Bt;Bt|=2;var o=Cg(),u=Rg();Zt!==e||Rt!==n?(Wl=null,ql=M()+500,xr(e,n)):gr=Ue(e,n);e:do try{if(Vt!==0&&Tt!==null){n=Tt;var f=ai;t:switch(Vt){case 1:Vt=0,ai=null,yr(e,n,f,1);break;case 2:case 9:if(Bp(f)){Vt=0,ai=null,Dg(n);break}n=function(){Vt!==2&&Vt!==9||Zt!==e||(Vt=7),Gi(e)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Bp(f)?(Vt=0,ai=null,Dg(n)):(Vt=0,ai=null,yr(e,n,f,7));break;case 5:var y=null;switch(Tt.tag){case 26:y=Tt.memoizedState;case 5:case 27:var w=Tt;if(y?m0(y):w.stateNode.complete){Vt=0,ai=null;var G=w.sibling;if(G!==null)Tt=G;else{var ie=w.return;ie!==null?(Tt=ie,Kl(ie)):Tt=null}break t}}Vt=0,ai=null,yr(e,n,f,5);break;case 6:Vt=0,ai=null,yr(e,n,f,6);break;case 8:wf(),nn=6;break e;default:throw Error(s(462))}}Bx();break}catch(ve){Tg(e,ve)}while(!0);return ca=Ms=null,F.H=o,F.A=u,Bt=a,Tt!==null?0:(Zt=null,Rt=0,ml(),nn)}function Bx(){for(;Tt!==null&&!je();)wg(Tt)}function wg(e){var n=$m(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?Kl(e):Tt=n}function Dg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Wm(a,n,n.pendingProps,n.type,void 0,Rt);break;case 11:n=Wm(a,n,n.pendingProps,n.type.render,n.ref,Rt);break;case 5:Xu(n);default:tg(a,n),n=Tt=Rp(n,xa),n=$m(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?Kl(e):Tt=n}function yr(e,n,a,o){ca=Ms=null,Xu(n),cr=null,uo=0;var u=n.return;try{if(Cx(e,u,n,a,Rt)){nn=1,zl(e,hi(a,e.current)),Tt=null;return}}catch(f){if(u!==null)throw Tt=u,f;nn=1,zl(e,hi(a,e.current)),Tt=null;return}n.flags&32768?(Nt||o===1?e=!0:gr||(Rt&536870912)!==0?e=!1:(qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ng(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){Ng(n,qa);return}e=n.return;var a=Dx(n.alternate,n,xa);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=e}while(n!==null);nn===0&&(nn=5)}function Ng(e,n){do{var a=Nx(e.alternate,e);if(a!==null){a.flags&=32767,Tt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Tt=e;return}Tt=e=a}while(e!==null);nn=6,Tt=null}function Ug(e,n,a,o,u,f,y,w,G){e.cancelPendingCommit=null;do Ql();while(gn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=vu,ui(e,a,f,y,w,G),e===Zt&&(Tt=Zt=null,Rt=0),_r=n,Za=e,ya=a,Af=f,Cf=u,Sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kx(de,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=k.p,k.p=2,y=Bt,Bt|=4;try{Ux(e,n,a)}finally{Bt=y,k.p=u,F.T=o}}gn=1,Lg(),Og(),Pg()}}function Lg(){if(gn===1){gn=0;var e=Za,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=k.p;k.p=2;var u=Bt;Bt|=4;try{hg(n,e);var f=Vf,y=xp(e.containerInfo),w=f.focusedElem,G=f.selectionRange;if(y!==w&&w&&w.ownerDocument&&_p(w.ownerDocument.documentElement,w)){if(G!==null&&du(w)){var ie=G.start,ve=G.end;if(ve===void 0&&(ve=ie),"selectionStart"in w)w.selectionStart=ie,w.selectionEnd=Math.min(ve,w.value.length);else{var ye=w.ownerDocument||document,re=ye&&ye.defaultView||window;if(re.getSelection){var ue=re.getSelection(),Ze=w.textContent.length,ct=Math.min(G.start,Ze),Yt=G.end===void 0?ct:Math.min(G.end,Ze);!ue.extend&&ct>Yt&&(y=Yt,Yt=ct,ct=y);var Q=vp(w,ct),j=vp(w,Yt);if(Q&&j&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==j.node||ue.focusOffset!==j.offset)){var ne=ye.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),ct>Yt?(ue.addRange(ne),ue.extend(j.node,j.offset)):(ne.setEnd(j.node,j.offset),ue.addRange(ne))}}}}for(ye=[],ue=w;ue=ue.parentNode;)ue.nodeType===1&&ye.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var xe=ye[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}cc=!!Gf,Vf=Gf=null}finally{Bt=u,k.p=o,F.T=a}}e.current=n,gn=2}}function Og(){if(gn===2){gn=0;var e=Za,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=k.p;k.p=2;var u=Bt;Bt|=4;try{lg(e,n.alternate,n)}finally{Bt=u,k.p=o,F.T=a}}gn=3}}function Pg(){if(gn===4||gn===3){gn=0,I();var e=Za,n=_r,a=ya,o=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,_r=Za=null,Fg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),Vn(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=k.p,k.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var w=o[y];f(w.value,{componentStack:w.stack})}}finally{F.T=n,k.p=u}}(ya&3)!==0&&Ql(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Rf?Ro++:(Ro=0,Rf=e):Ro=0,wo(0)}}function Fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,lo(n)))}function Ql(){return Lg(),Og(),Pg(),zg()}function zg(){if(gn!==5)return!1;var e=Za,n=Af;Af=0;var a=Vn(ya),o=F.T,u=k.p;try{k.p=32>a?32:a,F.T=null,a=Cf,Cf=null;var f=Za,y=ya;if(gn=0,_r=Za=null,ya=0,(Bt&6)!==0)throw Error(s(331));var w=Bt;if(Bt|=4,_g(f.current),mg(f,f.current,y,a),Bt=w,wo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{k.p=u,F.T=o,Fg(e,n)}}function Ig(e,n,a){n=hi(a,n),n=rf(e.stateNode,n,2),e=Va(e,n,2),e!==null&&(xn(e,2),Gi(e))}function kt(e,n,a){if(e.tag===3)Ig(e,e,a);else for(;n!==null;){if(n.tag===3){Ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=hi(a,e),a=Bm(2),o=Va(n,a,2),o!==null&&(Hm(a,o,n,e),xn(o,2),Gi(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Px;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Mf=!0,u.add(a),e=Hx.bind(null,e,n,a),n.then(e,e))}function Hx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Rt&a)===a&&(nn===4||nn===3&&(Rt&62914560)===Rt&&300>M()-jl?(Bt&2)===0&&xr(e,0):Ef|=a,vr===Rt&&(vr=0)),Gi(e)}function Bg(e,n){n===0&&(n=It()),e=ys(e,n),e!==null&&(xn(e,n),Gi(e))}function Gx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bg(e,a)}function Vx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Bg(e,a)}function kx(e,n){return ut(e,n)}var Jl=null,Sr=null,Uf=!1,$l=!1,Lf=!1,Qa=0;function Gi(e){e!==Sr&&e.next===null&&(Sr===null?Jl=Sr=e:Sr=Sr.next=e),$l=!0,Uf||(Uf=!0,jx())}function wo(e,n){if(!Lf&&$l){Lf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-He(42|e)+1)-1,f&=u&~(y&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,kg(o,f))}else f=Rt,f=Se(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,kg(o,f));o=o.next}while(a);Lf=!1}}function Xx(){Hg()}function Hg(){$l=Uf=!1;var e=0;Qa!==0&&ty()&&(e=Qa);for(var n=M(),a=null,o=Jl;o!==null;){var u=o.next,f=Gg(o,n);f===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(f&3)!==0)&&($l=!0)),o=u}gn!==0&&gn!==5||wo(e),Qa!==0&&(Qa=0)}function Gg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-He(f),w=1<<y,G=u[y];G===-1?((w&a)===0||(w&o)!==0)&&(u[y]=ft(w,n)):G<=n&&(e.expiredLanes|=w),f&=~w}if(n=Zt,a=Rt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Vt===2||Vt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&_t(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ue(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&_t(o),Vn(a)){case 2:case 8:a=Me;break;case 32:a=de;break;case 268435456:a=Le;break;default:a=de}return o=Vg.bind(null,e),a=ut(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&_t(o),e.callbackPriority=2,e.callbackNode=null,2}function Vg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var o=Rt;return o=Se(e,e===Zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Mg(e,o,n),Gg(e,M()),e.callbackNode!=null&&e.callbackNode===a?Vg.bind(null,e):null)}function kg(e,n){if(Ql())return null;Mg(e,n,!0)}function jx(){iy(function(){(Bt&6)!==0?ut(ge,Xx):Hg()})}function Of(){if(Qa===0){var e=rr;e===0&&(e=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Qa=e}return Qa}function Xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Xg((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?Xg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var w=new fl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var G=y?jg(u,y):new FormData(u);$u(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(w.preventDefault(),G=y?jg(u,y):new FormData(u),$u(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Pf=0;Pf<gu.length;Pf++){var Ff=gu[Pf],Wx=Ff.toLowerCase(),Yx=Ff[0].toUpperCase()+Ff.slice(1);Ri(Wx,"on"+Yx)}Ri(bp,"onAnimationEnd"),Ri(Mp,"onAnimationIteration"),Ri(Ep,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(ux,"onTransitionRun"),Ri(fx,"onTransitionStart"),Ri(dx,"onTransitionCancel"),Ri(Tp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function qg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var w=o[y],G=w.instance,ie=w.currentTarget;if(w=w.listener,G!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ie;try{f(u)}catch(ve){pl(ve)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(w=o[y],G=w.instance,ie=w.currentTarget,w=w.listener,G!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ie;try{f(u)}catch(ve){pl(ve)}u.currentTarget=null,f=G}}}}function At(e,n){var a=n[Jn];a===void 0&&(a=n[Jn]=new Set);var o=e+"__bubble";a.has(o)||(Wg(n,e,2,!1),a.add(o))}function zf(e,n,a){var o=0;n&&(o|=4),Wg(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[ec]){e[ec]=!0,K.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||zf(a,!1,e),zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,zf("selectionchange",!1,n))}}function Wg(e,n,a,o){switch(b0(n)){case 2:var u=My;break;case 8:u=Ey;break;default:u=$f}a=u.bind(null,n,a,e),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Bf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var w=o.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=Ti(w),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue e}w=w.parentNode}}o=o.return}Jh(function(){var ie=f,ve=tu(a),ye=[];e:{var re=Ap.get(e);if(re!==void 0){var ue=fl,Ze=e;switch(e){case"keypress":if(cl(a)===0)break e;case"keydown":case"keyup":ue=V_;break;case"focusin":Ze="focus",ue=ou;break;case"focusout":Ze="blur",ue=ou;break;case"beforeblur":case"afterblur":ue=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=j_;break;case bp:case Mp:case Ep:ue=L_;break;case Tp:ue=W_;break;case"scroll":case"scrollend":ue=R_;break;case"wheel":ue=Z_;break;case"copy":case"cut":case"paste":ue=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ip;break;case"toggle":case"beforetoggle":ue=Q_}var ct=(n&4)!==0,Yt=!ct&&(e==="scroll"||e==="scrollend"),Q=ct?re!==null?re+"Capture":null:re;ct=[];for(var j=ie,ne;j!==null;){var xe=j;if(ne=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ne===null||Q===null||(xe=Qr(j,Q),xe!=null&&ct.push(No(j,xe,ne))),Yt)break;j=j.return}0<ct.length&&(re=new ue(re,Ze,null,a,ve),ye.push({event:re,listeners:ct}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",re&&a!==eu&&(Ze=a.relatedTarget||a.fromElement)&&(Ti(Ze)||Ze[Ln]))break e;if((ue||re)&&(re=ve.window===ve?ve:(re=ve.ownerDocument)?re.defaultView||re.parentWindow:window,ue?(Ze=a.relatedTarget||a.toElement,ue=ie,Ze=Ze?Ti(Ze):null,Ze!==null&&(Yt=c(Ze),ct=Ze.tag,Ze!==Yt||ct!==5&&ct!==27&&ct!==6)&&(Ze=null)):(ue=null,Ze=ie),ue!==Ze)){if(ct=tp,xe="onMouseLeave",Q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ct=ip,xe="onPointerLeave",Q="onPointerEnter",j="pointer"),Yt=ue==null?re:$n(ue),ne=Ze==null?re:$n(Ze),re=new ct(xe,j+"leave",ue,a,ve),re.target=Yt,re.relatedTarget=ne,xe=null,Ti(ve)===ie&&(ct=new ct(Q,j+"enter",Ze,a,ve),ct.target=ne,ct.relatedTarget=Yt,xe=ct),Yt=xe,ue&&Ze)t:{for(ct=Kx,Q=ue,j=Ze,ne=0,xe=Q;xe;xe=ct(xe))ne++;xe=0;for(var at=j;at;at=ct(at))xe++;for(;0<ne-xe;)Q=ct(Q),ne--;for(;0<xe-ne;)j=ct(j),xe--;for(;ne--;){if(Q===j||j!==null&&Q===j.alternate){ct=Q;break t}Q=ct(Q),j=ct(j)}ct=null}else ct=null;ue!==null&&Yg(ye,re,ue,ct,!1),Ze!==null&&Yt!==null&&Yg(ye,Yt,Ze,ct,!0)}}e:{if(re=ie?$n(ie):window,ue=re.nodeName&&re.nodeName.toLowerCase(),ue==="select"||ue==="input"&&re.type==="file")var Ot=fp;else if(cp(re))if(dp)Ot=ox;else{Ot=sx;var et=ax}else ue=re.nodeName,!ue||ue.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ie&&Ci(ie.elementType)&&(Ot=fp):Ot=rx;if(Ot&&(Ot=Ot(e,ie))){up(ye,Ot,a,ve);break e}et&&et(e,re,ie),e==="focusout"&&ie&&re.type==="number"&&ie.memoizedProps.value!=null&&Mn(re,"number",re.value)}switch(et=ie?$n(ie):window,e){case"focusin":(cp(et)||et.contentEditable==="true")&&(Js=et,hu=ie,so=null);break;case"focusout":so=hu=Js=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,yp(ye,a,ve);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":yp(ye,a,ve)}var St;if(cu)e:{switch(e){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Qs?op(e,a)&&(wt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(ap&&a.locale!=="ko"&&(Qs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Qs&&(St=$h()):(Pa=ve,au="value"in Pa?Pa.value:Pa.textContent,Qs=!0)),et=tc(ie,wt),0<et.length&&(wt=new np(wt,e,null,a,ve),ye.push({event:wt,listeners:et}),St?wt.data=St:(St=lp(a),St!==null&&(wt.data=St)))),(St=$_?ex(e,a):tx(e,a))&&(wt=tc(ie,"onBeforeInput"),0<wt.length&&(et=new np("onBeforeInput","beforeinput",null,a,ve),ye.push({event:et,listeners:wt}),et.data=St)),qx(ye,e,ie,a,ve)}qg(ye,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qr(e,a),u!=null&&o.unshift(No(e,u,f)),u=Qr(e,n),u!=null&&o.push(No(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Kx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var w=a,G=w.alternate,ie=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||ie===null||(G=ie,u?(ie=Qr(a,f),ie!=null&&y.unshift(No(a,ie,G))):u||(ie=Qr(a,f),ie!=null&&y.push(No(a,ie,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Jx,"")}function Kg(e,n){return n=Zg(n),Zg(e)===n}function Wt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":it(e,"class",o);break;case"tabIndex":it(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(e,a,o);break;case"style":Ys(e,o,f);break;case"data":if(n!=="object"){it(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",u.name,u,null),Wt(e,n,"formEncType",u.formEncType,u,null),Wt(e,n,"formMethod",u.formMethod,u,null),Wt(e,n,"formTarget",u.formTarget,u,null)):(Wt(e,n,"encType",u.encType,u,null),Wt(e,n,"method",u.method,u,null),Wt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sa);break;case"onScroll":o!=null&&At("scroll",e);break;case"onScrollEnd":o!=null&&At("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":At("beforetoggle",e),At("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":Ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A_.get(a)||a,Ye(e,a,o))}}function Hf(e,n,a,o,u,f){switch(a){case"style":Ys(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&At("scroll",e);break;case"onScrollEnd":o!=null&&At("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ye(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",e),At("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,f,y,a,null)}}u&&Wt(e,n,"srcSet",a.srcSet,a,null),o&&Wt(e,n,"src",a.src,a,null);return;case"input":At("invalid",e);var w=f=y=u=null,G=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":y=ve;break;case"checked":G=ve;break;case"defaultChecked":ie=ve;break;case"value":f=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Wt(e,n,o,ve,a,null)}}aa(e,f,w,G,ie,y,u,!1);return;case"select":At("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":y=w;break;case"multiple":o=w;default:Wt(e,n,u,w,a,null)}n=f,a=y,e.multiple=!!o,n!=null?fi(e,!!o,n,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":At("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(w=a[y],w!=null))switch(y){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Wt(e,n,y,w,a,null)}En(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(e,n,G,o,a,null)}return;case"dialog":At("beforetoggle",e),At("toggle",e),At("cancel",e),At("close",e);break;case"iframe":case"object":At("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)At(Do[o],e);break;case"image":At("error",e),At("load",e);break;case"details":At("toggle",e);break;case"embed":case"source":case"link":At("error",e),At("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,ie,o,a,null)}return;default:if(Ci(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&Hf(e,n,ve,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Wt(e,n,w,o,a,null))}function $x(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,w=null,G=null,ie=null,ve=null;for(ue in a){var ye=a[ue];if(a.hasOwnProperty(ue)&&ye!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":G=ye;default:o.hasOwnProperty(ue)||Wt(e,n,ue,null,o,ye)}}for(var re in o){var ue=o[re];if(ye=a[re],o.hasOwnProperty(re)&&(ue!=null||ye!=null))switch(re){case"type":f=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":ve=ue;break;case"value":y=ue;break;case"defaultValue":w=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ye&&Wt(e,n,re,ue,o,ye)}}bn(e,y,w,G,ie,ve,f,u);return;case"select":ue=y=w=re=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ue=G;default:o.hasOwnProperty(f)||Wt(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":re=f;break;case"defaultValue":w=f;break;case"multiple":y=f;default:f!==G&&Wt(e,n,u,f,o,G)}n=w,a=y,o=ue,re!=null?fi(e,!!a,re,!1):!!o!=!!a&&(n!=null?fi(e,!!a,n,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ue=re=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Wt(e,n,w,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":re=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(e,n,y,u,o,f)}Gt(e,re,ue);return;case"option":for(var Ze in a)if(re=a[Ze],a.hasOwnProperty(Ze)&&re!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":e.selected=!1;break;default:Wt(e,n,Ze,null,o,re)}for(G in o)if(re=o[G],ue=a[G],o.hasOwnProperty(G)&&re!==ue&&(re!=null||ue!=null))switch(G){case"selected":e.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Wt(e,n,G,re,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)re=a[ct],a.hasOwnProperty(ct)&&re!=null&&!o.hasOwnProperty(ct)&&Wt(e,n,ct,null,o,re);for(ie in o)if(re=o[ie],ue=a[ie],o.hasOwnProperty(ie)&&re!==ue&&(re!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Wt(e,n,ie,re,o,ue)}return;default:if(Ci(n)){for(var Yt in a)re=a[Yt],a.hasOwnProperty(Yt)&&re!==void 0&&!o.hasOwnProperty(Yt)&&Hf(e,n,Yt,void 0,o,re);for(ve in o)re=o[ve],ue=a[ve],!o.hasOwnProperty(ve)||re===ue||re===void 0&&ue===void 0||Hf(e,n,ve,re,o,ue);return}}for(var Q in a)re=a[Q],a.hasOwnProperty(Q)&&re!=null&&!o.hasOwnProperty(Q)&&Wt(e,n,Q,null,o,re);for(ye in o)re=o[ye],ue=a[ye],!o.hasOwnProperty(ye)||re===ue||re==null&&ue==null||Wt(e,n,ye,re,o,ue)}function Qg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,w=u.duration;if(f&&w&&Qg(y)){for(y=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ie=G.startTime;if(ie>w)break;var ve=G.transferSize,ye=G.initiatorType;ve&&Qg(ye)&&(G=G.responseEnd,y+=ve*(G<w?1:(w-ie)/(G-ie)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gf=null,Vf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(e){return t0.resolve(null).then(e).catch(ay)}:e0;function ay(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function n0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,w=f.nodeName;f[ia]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Uo(e.ownerDocument.body);a=u}while(a);Tr(n)}function i0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ia])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function ry(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function a0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function qf(e){return e.data==="$?"||e.data==="$~"}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yf=null;function s0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function r0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function o0(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);gs(e)}var xi=new Map,l0=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sa=k.d;k.d={f:ly,r:cy,D:uy,C:fy,L:dy,m:hy,X:my,S:py,M:gy};function ly(){var e=Sa.f(),n=Yl();return e||n}function cy(e){var n=Ai(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):Sa.r(e)}var br=typeof document>"u"?null:document;function c0(e,n,a){var o=br;if(o&&typeof n=="string"&&n){var u=pt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l0.has(u)||(l0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),C(n),o.head.appendChild(n)))}}function uy(e){Sa.D(e),c0("dns-prefetch",e,null)}function fy(e,n){Sa.C(e,n),c0("preconnect",e,n)}function dy(e,n,a){Sa.L(e,n,a);var o=br;if(o&&e&&n){var u='link[rel="preload"][as="'+pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pt(a.imageSizes)+'"]')):u+='[href="'+pt(e)+'"]';var f=u;switch(n){case"style":f=Mr(e);break;case"script":f=Er(e)}xi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(f))||n==="script"&&o.querySelector(Oo(f))||(n=o.createElement("link"),Dn(n,"link",e),C(n),o.head.appendChild(n)))}}function hy(e,n){Sa.m(e,n);var a=br;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pt(o)+'"][href="'+pt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!xi.has(f)&&(e=g({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}o=a.createElement("link"),Dn(o,"link",e),C(o),a.head.appendChild(o)}}}function py(e,n,a){Sa.S(e,n,a);var o=br;if(o&&e){var u=zi(o).hoistableStyles,f=Mr(e);n=n||"default";var y=u.get(f);if(!y){var w={loading:0,preload:null};if(y=o.querySelector(Lo(f)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&Zf(e,a);var G=y=o.createElement("link");C(G),Dn(G,"link",e),G._p=new Promise(function(ie,ve){G.onload=ie,G.onerror=ve}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ac(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(f,y)}}}function my(e,n){Sa.X(e,n);var a=br;if(a&&e){var o=zi(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0},n),(n=xi.get(u))&&Kf(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function gy(e,n){Sa.M(e,n);var a=br;if(a&&e){var o=zi(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&Kf(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function u0(e,n,a,o){var u=(u=ee.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=zi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mr(a.href);var f=zi(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Lo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||vy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=zi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Mr(e){return'href="'+pt(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function f0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function vy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),C(n),e.head.appendChild(n))}function Er(e){return'[src="'+pt(e)+'"]'}function Oo(e){return"script[async]"+e}function d0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Dn(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=Mr(a.href);var f=e.querySelector(Lo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=f0(a),(u=xi.get(u))&&Zf(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var y=f;return y._p=new Promise(function(w,G){y.onload=w,y.onerror=G}),Dn(f,"link",o),n.state.loading|=4,ac(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Oo(f)))?(n.instance=u,C(u),u):(o=a,(u=xi.get(f))&&(o=g({},a),Kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var w=o[y];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function h0(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ia]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var w=o.get(y);w?w.push(f):o.set(y,[f])}}return o}function p0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(Lo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=f0(o),(u=xi.get(u))&&Zf(o,u),f=f.createElement("link"),C(f);var y=f;y._p=new Promise(function(w,G){y.onload=w,y.onerror=G}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function yy(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Qf===0&&(Qf=62500*ey());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(Sy,e),oc=null,rc.call(e))}function Sy(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:D,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function by(e,n,a,o,u,f,y,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function g0(e,n,a,o,u,f,y,w,G,ie,ve,ye){return e=new by(e,n,a,y,G,ie,ve,ye,w),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lu(f),e}function v0(e){return e?(e=tr,e):tr}function _0(e,n,a,o,u,f){u=v0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(e,o,n),a!==null&&(Kn(a,e,n),ho(a,e,n))}function x0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){x0(e,n),(e=e.alternate)&&x0(e,n)}function y0(e){if(e.tag===13||e.tag===31){var n=ys(e,67108864);n!==null&&Kn(n,e,67108864),Jf(e,67108864)}}function S0(e){if(e.tag===13||e.tag===31){var n=ri();n=ta(n);var a=ys(e,n);a!==null&&Kn(a,e,n),Jf(e,n)}}var cc=!0;function My(e,n,a,o){var u=F.T;F.T=null;var f=k.p;try{k.p=2,$f(e,n,a,o)}finally{k.p=f,F.T=u}}function Ey(e,n,a,o){var u=F.T;F.T=null;var f=k.p;try{k.p=8,$f(e,n,a,o)}finally{k.p=f,F.T=u}}function $f(e,n,a,o){if(cc){var u=ed(o);if(u===null)Bf(e,n,o,uc,a),M0(e,o);else if(Ay(u,e,n,a,o))o.stopPropagation();else if(M0(e,o),n&4&&-1<Ty.indexOf(e)){for(;u!==null;){var f=Ai(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ae(f.pendingLanes);if(y!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var G=1<<31-He(y);w.entanglements[1]|=G,y&=~G}Gi(f),(Bt&6)===0&&(ql=M()+500,wo(0))}}break;case 31:case 13:w=ys(f,2),w!==null&&Kn(w,f,2),Yl(),Jf(f,2)}if(f=ed(o),f===null&&Bf(e,n,o,uc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Bf(e,n,o,null,a)}}function ed(e){return e=tu(e),td(e)}var uc=null;function td(e){if(uc=null,e=Ti(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function b0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case ge:return 2;case Me:return 8;case de:case $e:return 32;case Le:return 268435456;default:return 32}default:return 32}}var nd=!1,$a=null,es=null,ts=null,Fo=new Map,zo=new Map,ns=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M0(e,n){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Io(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ai(n),n!==null&&y0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ay(e,n,a,o,u){switch(n){case"focusin":return $a=Io($a,e,n,a,o,u),!0;case"dragenter":return es=Io(es,e,n,a,o,u),!0;case"mouseover":return ts=Io(ts,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Io(Fo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Io(zo.get(f)||null,e,n,a,o,u)),!0}return!1}function E0(e){var n=Ti(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){S0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){S0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ed(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=Ai(a),n!==null&&y0(n),e.blockedOn=a,!1;n.shift()}return!0}function T0(e,n,a){fc(e)&&a.delete(n)}function Cy(){nd=!1,$a!==null&&fc($a)&&($a=null),es!==null&&fc(es)&&(es=null),ts!==null&&fc(ts)&&(ts=null),Fo.forEach(T0),zo.forEach(T0)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,nd||(nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var hc=null;function A0(e){hc!==e&&(hc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(td(o||a)===null)continue;break}var f=Ai(a);f!==null&&(e.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(G){return dc(G,e)}$a!==null&&dc($a,e),es!==null&&dc(es,e),ts!==null&&dc(ts,e),Fo.forEach(n),zo.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&ns.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||A0(a);else if(y){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)w=y.formAction;else if(td(u)!==null)continue}else w=y.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),A0(a)}}}function C0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function id(e){this._internalRoot=e}pc.prototype.render=id.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();_0(a,o,e,n,null,null)},pc.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_0(e.current,2,null,e,null,null),Yl(),n[Ln]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=kn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,e),a===0&&E0(e)}};var R0=t.version;if(R0!=="19.2.4")throw Error(s(527,R0,"19.2.4"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Re=mc.inject(Ry),we=mc}catch{}}return Ho.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Pm,f=Fm,y=zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=g0(e,1,!1,null,null,a,o,null,u,f,y,C0),e[Ln]=n.current,If(e),new id(n)},Ho.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Pm,y=Fm,w=zm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=g0(e,1,!0,n,a??null,o,u,G,f,y,w,C0),n.context=v0(null),a=n.current,o=ri(),o=ta(o),u=Ga(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,xn(n,a),Gi(n),e[Ln]=n.current,If(e),new pc(n)},Ho.version="19.2.4",Ho}var I0;function Iy(){if(I0)return rd.exports;I0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=zy(),rd.exports}var By=Iy();const Hy=Vv(By);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="182",Gy=0,B0=1,Vy=2,zc=1,ky=2,Wo=3,ps=0,Qn=1,Ca=2,Da=0,Gr=1,H0=2,G0=3,V0=4,Xy=5,Hs=100,jy=101,qy=102,Wy=103,Yy=104,Zy=200,Ky=201,Qy=202,Jy=203,Hd=204,Gd=205,$y=206,eS=207,tS=208,nS=209,iS=210,aS=211,sS=212,rS=213,oS=214,Vd=0,kd=1,Xd=2,kr=3,jd=4,qd=5,Wd=6,Yd=7,kv=0,lS=1,cS=2,qi=0,Xv=1,jv=2,qv=3,Wv=4,Yv=5,Zv=6,Kv=7,Qv=300,qs=301,Xr=302,Zd=303,Kd=304,Zc=306,Qd=1e3,wa=1001,Jd=1002,Nn=1003,uS=1004,gc=1005,zn=1006,ud=1007,Vs=1008,Mi=1009,Jv=1010,$v=1011,$o=1012,zh=1013,Ki=1014,Xi=1015,Ua=1016,Ih=1017,Bh=1018,el=1020,e_=35902,t_=35899,n_=1021,i_=1022,Pi=1023,La=1026,ks=1027,a_=1028,Hh=1029,jr=1030,Gh=1031,Vh=1033,Ic=33776,Bc=33777,Hc=33778,Gc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,lh=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,xh=37817,yh=37818,Sh=37819,bh=37820,Mh=37821,Eh=36492,Th=36494,Ah=36495,Ch=36283,Rh=36284,wh=36285,Dh=36286,fS=3200,dS=0,hS=1,fs="",Si="srgb",qr="srgb-linear",Xc="linear",Xt="srgb",Ar=7680,k0=519,pS=512,mS=513,gS=514,kh=515,vS=516,_S=517,Xh=518,xS=519,X0=35044,j0="300 es",ji=2e3,jc=2001;function s_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yS(){const r=qc("canvas");return r.style.display="block",r}const q0={};function W0(...r){const t="THREE."+r.shift();console.log(t,...r)}function mt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ft(...r){const t="THREE."+r.shift();console.error(t,...r)}function tl(...r){const t=r.join(" ");t in q0||(q0[t]=!0,mt(...r))}function SS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Yr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y0=1234567;const Ko=Math.PI/180,nl=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Dt(r,t,i){return Math.max(t,Math.min(i,r))}function jh(r,t){return(r%t+t)%t}function bS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function MS(r,t,i){return r!==t?(i-r)/(t-r):0}function Qo(r,t,i){return(1-i)*r+i*t}function ES(r,t,i,s){return Qo(r,t,1-Math.exp(-i*s))}function TS(r,t=1){return t-Math.abs(jh(r,t*2)-t)}function AS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function CS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function RS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function wS(r,t){return r+Math.random()*(t-r)}function DS(r){return r*(.5-Math.random())}function NS(r){r!==void 0&&(Y0=r);let t=Y0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function US(r){return r*Ko}function LS(r){return r*nl}function OS(r){return(r&r-1)===0&&r!==0}function PS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function FS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zS(r,t,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+s)/2),v=d((t+s)/2),g=c((t-s)/2),_=d((t-s)/2),S=c((s-t)/2),E=d((s-t)/2);switch(l){case"XYX":r.set(h*v,m*g,m*_,h*p);break;case"YZY":r.set(m*_,h*v,m*g,h*p);break;case"ZXZ":r.set(m*g,m*_,h*v,h*p);break;case"XZX":r.set(h*v,m*E,m*S,h*p);break;case"YXY":r.set(m*S,h*v,m*E,h*p);break;case"ZYZ":r.set(m*E,m*S,h*v,h*p);break;default:mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Hr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fd={DEG2RAD:Ko,RAD2DEG:nl,generateUUID:Zr,clamp:Dt,euclideanModulo:jh,mapLinear:bS,inverseLerp:MS,lerp:Qo,damp:ES,pingpong:TS,smoothstep:AS,smootherstep:CS,randInt:RS,randFloat:wS,randFloatSpread:DS,seededRandom:NS,degToRad:US,radToDeg:LS,isPowerOfTwo:OS,ceilPowerOfTwo:PS,floorPowerOfTwo:FS,setQuaternionFromProperEuler:zS,normalize:Bn,denormalize:Hr};class Ht{constructor(t=0,i=0){Ht.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],_=c[d+0],S=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h>=1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==_||p!==S||v!==E){let b=m*_+p*S+v*E+g*A;b<0&&(_=-_,S=-S,E=-E,A=-A,b=-b);let x=1-h;if(b<.9995){const N=Math.acos(b),D=Math.sin(N);x=Math.sin(x*N)/D,h=Math.sin(h*N)/D,m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h}else{m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h;const N=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=N,p*=N,v*=N,g*=N}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[d],_=c[d+1],S=c[d+2],E=c[d+3];return t[i]=h*E+v*g+m*S-p*_,t[i+1]=m*E+v*_+p*g-h*S,t[i+2]=p*E+v*S+h*_-m*g,t[i+3]=v*E-h*g-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(c/2),_=m(s/2),S=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"YZX":this._x=_*v*g+p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g-_*S*E;break;case"XZY":this._x=_*v*g-p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g+_*S*E;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=s+h+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*v,this.y=s+m*v+h*p-c*g,this.z=l+m*g+c*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dd.copy(this).projectOnVector(t),this.sub(dd)}reflect(t){return this.sub(dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Dt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new oe,Z0=new al;class bt{constructor(t,i,s,l,c,d,h,m,p){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],S=s[5],E=s[8],A=l[0],b=l[3],x=l[6],N=l[1],D=l[4],U=l[7],L=l[2],P=l[5],B=l[8];return c[0]=d*A+h*N+m*L,c[3]=d*b+h*D+m*P,c[6]=d*x+h*U+m*B,c[1]=p*A+v*N+g*L,c[4]=p*b+v*D+g*P,c[7]=p*x+v*U+g*B,c[2]=_*A+S*N+E*L,c[5]=_*b+S*D+E*P,c[8]=_*x+S*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,_=h*m-v*c,S=p*c-d*m,E=i*g+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-v*s)*A,t[2]=(h*s-l*d)*A,t[3]=_*A,t[4]=(v*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(d*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(hd.makeScale(t,i)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new bt,K0=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:Xc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Xt,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Lt=IS();function Na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class BS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=qc("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Na(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:t.width,height:t.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HS=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?BS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let GS=0;const md=new oe;class Gn extends Yr{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=wa,l=wa,c=zn,d=Vs,h=Pi,m=Mi,p=Gn.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Zr(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){mt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Qv;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],_=m[1],S=m[5],E=m[9],A=m[2],b=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-A)<.01&&Math.abs(E-b)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+A)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(S+1)/2,L=(x+1)/2,P=(v+_)/4,B=(g+A)/4,X=(E+b)/4;return D>U&&D>L?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=P/s,c=B/s):U>L?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=P/l,c=X/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=B/c,l=X/c),this.set(s,l,c,i),this}let N=Math.sqrt((b-E)*(b-E)+(g-A)*(g-A)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(b-E)/N,this.y=(g-A)/N,this.z=(_-v)/N,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Dt(this.x,t.x,i.x),this.y=Dt(this.y,t.y,i.y),this.z=Dt(this.z,t.z,i.z),this.w=Dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Dt(this.x,t,i),this.y=Dt(this.y,t,i),this.z=Dt(this.z,t,i),this.w=Dt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends Yr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends VS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class r_ extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),_c.subVectors(this.max,Go),Rr.subVectors(t.a,Go),wr.subVectors(t.b,Go),Dr.subVectors(t.c,Go),as.subVectors(wr,Rr),ss.subVectors(Dr,wr),Ls.subVectors(Rr,Dr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ls.z,Ls.y,as.z,0,-as.x,ss.z,0,-ss.x,Ls.z,0,-Ls.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ls.y,Ls.x,0];return!gd(i,Rr,wr,Dr,_c)||(i=[1,0,0,0,1,0,0,0,1],!gd(i,Rr,wr,Dr,_c))?!1:(xc.crossVectors(as,ss),i=[xc.x,xc.y,xc.z],gd(i,Rr,wr,Dr,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ni=new oe,vc=new sl,Rr=new oe,wr=new oe,Dr=new oe,as=new oe,ss=new oe,Ls=new oe,Go=new oe,_c=new oe,xc=new oe,Os=new oe;function gd(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Os.fromArray(r,c);const h=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=t.dot(Os),p=i.dot(Os),v=s.dot(Os);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const XS=new sl,Vo=new oe,vd=new oe;class Wh{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):XS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(vd)),this.expandByPoint(Vo.copy(t.center).sub(vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ma=new oe,_d=new oe,yc=new oe,rs=new oe,xd=new oe,Sc=new oe,yd=new oe;class jS{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){_d.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),rs.copy(this.origin).sub(_d);const c=t.distanceTo(i)*.5,d=-this.direction.dot(yc),h=rs.dot(this.direction),m=-rs.dot(yc),p=rs.lengthSq(),v=Math.abs(1-d*d);let g,_,S,E;if(v>0)if(g=d*m-h,_=d*h-m,E=c*v,g>=0)if(_>=-E)if(_<=E){const A=1/v;g*=A,_*=A,S=g*(g+d*_+2*h)+_*(d*g+_+2*m)+p}else _=c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-d*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(g=Math.max(0,-(d*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p);else _=d>0?-c:c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(_d).addScaledVector(yc,_),S}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),v>=0?(c=(t.min.y-_.y)*v,d=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,d=(t.min.y-_.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){xd.subVectors(i,t),Sc.subVectors(s,t),yd.crossVectors(xd,Sc);let d=this.direction.dot(yd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;rs.subVectors(this.origin,t);const m=h*this.direction.dot(Sc.crossVectors(rs,Sc));if(m<0)return null;const p=h*this.direction.dot(xd.cross(rs));if(p<0||m+p>d)return null;const v=-h*rs.dot(yd);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b)}set(t,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=A,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Nr.setFromMatrixColumn(t,0).length(),c=1/Nr.setFromMatrixColumn(t,1).length(),d=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=_-A*p,i[9]=-h*m,i[2]=A-_*p,i[6]=E+S*p,i[10]=d*m}else if(t.order==="YXZ"){const _=m*v,S=m*g,E=p*v,A=p*g;i[0]=_+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=S*h-E,i[6]=A+_*h,i[10]=d*m}else if(t.order==="ZXY"){const _=m*v,S=m*g,E=p*v,A=p*g;i[0]=_-A*h,i[4]=-d*g,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*v,i[9]=A-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const _=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-S,i[8]=_*p+A,i[1]=m*g,i[5]=A*p+_,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const _=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-_*g,i[8]=E*g+S,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=S*g+E,i[10]=_-A*g}else if(t.order==="XZY"){const _=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+A,i[5]=d*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=h*v,i[10]=A*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qS,t,WS)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),os.crossVectors(s,oi),os.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),os.crossVectors(s,oi)),os.normalize(),bc.crossVectors(oi,os),l[0]=os.x,l[4]=bc.x,l[8]=oi.x,l[1]=os.y,l[5]=bc.y,l[9]=oi.y,l[2]=os.z,l[6]=bc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],S=s[13],E=s[2],A=s[6],b=s[10],x=s[14],N=s[3],D=s[7],U=s[11],L=s[15],P=l[0],B=l[4],X=l[8],T=l[12],R=l[1],H=l[5],q=l[9],Y=l[13],ae=l[2],le=l[6],F=l[10],k=l[14],J=l[3],be=l[7],_e=l[11],z=l[15];return c[0]=d*P+h*R+m*ae+p*J,c[4]=d*B+h*H+m*le+p*be,c[8]=d*X+h*q+m*F+p*_e,c[12]=d*T+h*Y+m*k+p*z,c[1]=v*P+g*R+_*ae+S*J,c[5]=v*B+g*H+_*le+S*be,c[9]=v*X+g*q+_*F+S*_e,c[13]=v*T+g*Y+_*k+S*z,c[2]=E*P+A*R+b*ae+x*J,c[6]=E*B+A*H+b*le+x*be,c[10]=E*X+A*q+b*F+x*_e,c[14]=E*T+A*Y+b*k+x*z,c[3]=N*P+D*R+U*ae+L*J,c[7]=N*B+D*H+U*le+L*be,c[11]=N*X+D*q+U*F+L*_e,c[15]=N*T+D*Y+U*k+L*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],_=t[10],S=t[14],E=t[3],A=t[7],b=t[11],x=t[15],N=m*S-p*_,D=h*S-p*g,U=h*_-m*g,L=d*S-p*v,P=d*_-m*v,B=d*g-h*v;return i*(A*N-b*D+x*U)-s*(E*N-b*L+x*P)+l*(E*D-A*L+x*B)-c*(E*U-A*P+b*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],_=t[10],S=t[11],E=t[12],A=t[13],b=t[14],x=t[15],N=g*b*p-A*_*p+A*m*S-h*b*S-g*m*x+h*_*x,D=E*_*p-v*b*p-E*m*S+d*b*S+v*m*x-d*_*x,U=v*A*p-E*g*p+E*h*S-d*A*S-v*h*x+d*g*x,L=E*g*m-v*A*m-E*h*_+d*A*_+v*h*b-d*g*b,P=i*N+s*D+l*U+c*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=N*B,t[1]=(A*_*c-g*b*c-A*l*S+s*b*S+g*l*x-s*_*x)*B,t[2]=(h*b*c-A*m*c+A*l*p-s*b*p-h*l*x+s*m*x)*B,t[3]=(g*m*c-h*_*c-g*l*p+s*_*p+h*l*S-s*m*S)*B,t[4]=D*B,t[5]=(v*b*c-E*_*c+E*l*S-i*b*S-v*l*x+i*_*x)*B,t[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*x-i*m*x)*B,t[7]=(d*_*c-v*m*c+v*l*p-i*_*p-d*l*S+i*m*S)*B,t[8]=U*B,t[9]=(E*g*c-v*A*c-E*s*S+i*A*S+v*s*x-i*g*x)*B,t[10]=(d*A*c-E*h*c+E*s*p-i*A*p-d*s*x+i*h*x)*B,t[11]=(v*h*c-d*g*c-v*s*p+i*g*p+d*s*S-i*h*S)*B,t[12]=L*B,t[13]=(v*A*l-E*g*l+E*s*_-i*A*_-v*s*b+i*g*b)*B,t[14]=(E*h*l-d*A*l-E*s*m+i*A*m+d*s*b-i*h*b)*B,t[15]=(d*g*l-v*h*l+v*s*m-i*g*m-d*s*_+i*h*_)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,g=h+h,_=c*p,S=c*v,E=c*g,A=d*v,b=d*g,x=h*g,N=m*p,D=m*v,U=m*g,L=s.x,P=s.y,B=s.z;return l[0]=(1-(A+x))*L,l[1]=(S+U)*L,l[2]=(E-D)*L,l[3]=0,l[4]=(S-U)*P,l[5]=(1-(_+x))*P,l[6]=(b+N)*P,l[7]=0,l[8]=(E+D)*B,l[9]=(b-N)*B,l[10]=(1-(_+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Nr.set(l[0],l[1],l[2]).length();const d=Nr.set(l[4],l[5],l[6]).length(),h=Nr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const p=1/c,v=1/d,g=1/h;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,i.setFromRotationMatrix(Ui),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=ji,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===ji)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===jc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=ji,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),_=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===ji)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===jc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Nr=new oe,Ui=new dn,qS=new oe(0,0,0),WS=new oe(1,1,1),os=new oe,bc=new oe,oi=new oe,J0=new dn,$0=new al;class Oa{constructor(t=0,i=0,s=0,l=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return J0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $0.setFromEuler(this),this.setFromQuaternion($0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class o_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YS=0;const ev=new oe,Ur=new al,Ea=new dn,Mc=new oe,ko=new oe,ZS=new oe,KS=new al,tv=new oe(1,0,0),nv=new oe(0,1,0),iv=new oe(0,0,1),av={type:"added"},QS={type:"removed"},Lr={type:"childadded",child:null},Sd={type:"childremoved",child:null};class ci extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new oe,i=new Oa,s=new al,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new bt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,i){return Ur.setFromAxisAngle(t,i),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(tv,t)}rotateY(t){return this.rotateOnAxis(nv,t)}rotateZ(t){return this.rotateOnAxis(iv,t)}translateOnAxis(t,i){return ev.copy(t).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(tv,t)}translateY(t){return this.translateOnAxis(nv,t)}translateZ(t){return this.translateOnAxis(iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(ko,Mc,this.up):Ea.lookAt(Mc,ko,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(Ea),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(av),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QS),Sd.child=t,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(av),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,ZS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,KS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),_=d(t.skeletons),S=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ci.DEFAULT_UP=new oe(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new oe,Ta=new oe,bd=new oe,Aa=new oe,Or=new oe,Pr=new oe,sv=new oe,Md=new oe,Ed=new oe,Td=new oe,Ad=new rn,Cd=new rn,Rd=new rn;class Oi{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Li.subVectors(l,i),Ta.subVectors(s,i),bd.subVectors(t,i);const d=Li.dot(Li),h=Li.dot(Ta),m=Li.dot(bd),p=Ta.dot(Ta),v=Ta.dot(bd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,S=(p*m-h*v)*_,E=(d*v-h*m)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(d,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Ad.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),Ad.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,s),Rd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ad,c.x),d.addScaledVector(Cd,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),Ta.subVectors(t,i),Li.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Li.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Oi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Oi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Or.subVectors(l,s),Pr.subVectors(c,s),Md.subVectors(t,s);const m=Or.dot(Md),p=Pr.dot(Md);if(m<=0&&p<=0)return i.copy(s);Ed.subVectors(t,l);const v=Or.dot(Ed),g=Pr.dot(Ed);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Or,d);Td.subVectors(t,c);const S=Or.dot(Td),E=Pr.dot(Td);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Pr,h);const b=v*E-S*g;if(b<=0&&g-v>=0&&S-E>=0)return sv.subVectors(c,l),h=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(sv,h);const x=1/(b+A+_);return d=A*x,h=_*x,i.copy(s).addScaledVector(Or,d).addScaledVector(Pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function wd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class zt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Lt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Lt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Lt.workingColorSpace){if(t=jh(t,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=wd(d,c,t+1/3),this.g=wd(d,c,t),this.b=wd(d,c,t-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&mt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:mt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);mt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=l_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):mt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Lt.workingToColorSpace(Fn.copy(this),t),Math.round(Dt(Fn.r*255,0,255))*65536+Math.round(Dt(Fn.g*255,0,255))*256+Math.round(Dt(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Lt.workingColorSpace){Lt.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){Lt.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+i,ls.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ls),t.getHSL(Ec);const s=Qo(ls.h,Ec.h,i),l=Qo(ls.s,Ec.s,i),c=Qo(ls.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new zt;zt.NAMES=l_;let JS=0;class Kc extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Gr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){mt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hd&&(s.blendSrc=this.blendSrc),this.blendDst!==Gd&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wc extends Kc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oa,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new oe,Tc=new Ht;let $S=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=X0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Hr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Hr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Hr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Hr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Hr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==X0&&(t.usage=this.usage),t}}class c_ extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class u_ extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ei extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eb=0;const yi=new dn,Dd=new ci,Fr=new oe,li=new sl,Xo=new sl,Sn=new oe;class Ji extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(s_(t)?u_:c_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new bt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Dd.lookAt(t),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ei(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(li.min,Xo.min),li.expandByPoint(Sn),Sn.addVectors(li.max,Xo.max),li.expandByPoint(Sn)):(li.expandByPoint(Xo.min),li.expandByPoint(Xo.max))}li.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Sn.fromBufferAttribute(h,p),m&&(Fr.fromBufferAttribute(t,p),Sn.add(Fr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new oe,m[X]=new oe;const p=new oe,v=new oe,g=new oe,_=new Ht,S=new Ht,E=new Ht,A=new oe,b=new oe;function x(X,T,R){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),_.fromBufferAttribute(c,X),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,R),v.sub(p),g.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),b.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),h[X].add(A),h[T].add(A),h[R].add(A),m[X].add(b),m[T].add(b),m[R].add(b))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,T=N.length;X<T;++X){const R=N[X],H=R.start,q=R.count;for(let Y=H,ae=H+q;Y<ae;Y+=3)x(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const D=new oe,U=new oe,L=new oe,P=new oe;function B(X){L.fromBufferAttribute(l,X),P.copy(L);const T=h[X];D.copy(T),D.sub(L.multiplyScalar(L.dot(T))).normalize(),U.crossVectors(P,T);const H=U.dot(m[X])<0?-1:1;d.setXYZW(X,D.x,D.y,D.z,H)}for(let X=0,T=N.length;X<T;++X){const R=N[X],H=R.start,q=R.count;for(let Y=H,ae=H+q;Y<ae;Y+=3)B(t.getX(Y+0)),B(t.getX(Y+1)),B(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new oe,c=new oe,d=new oe,h=new oe,m=new oe,p=new oe,v=new oe,g=new oe;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),A=t.getX(_+1),b=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,b),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,_=new p.constructor(m.length*v);let S=0,E=0;for(let A=0,b=m.length;A<b;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*v;for(let x=0;x<v;x++)_[E++]=p[S++]}return new Yi(_,v,g)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=t(_,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rv=new dn,Ps=new jS,Ac=new Wh,ov=new oe,Cc=new oe,Rc=new oe,wc=new oe,Nd=new oe,Dc=new oe,lv=new oe,Nc=new oe;class Fi extends ci{constructor(t=new Ji,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Nd.fromBufferAttribute(g,t),d?Dc.addScaledVector(Nd,v):Dc.addScaledVector(Nd.sub(i),v))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),Ps.copy(t.ray).recast(t.near),!(Ac.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Ac,ov)===null||Ps.origin.distanceToSquared(ov)>(t.far-t.near)**2))&&(rv.copy(c).invert(),Ps.copy(t.ray).applyMatrix4(rv),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=_.length;E<A;E++){const b=_[E],x=d[b.materialIndex],N=Math.max(b.start,S.start),D=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let U=N,L=D;U<L;U+=3){const P=h.getX(U),B=h.getX(U+1),X=h.getX(U+2);l=Uc(this,x,t,s,p,v,g,P,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const N=h.getX(b),D=h.getX(b+1),U=h.getX(b+2);l=Uc(this,d,t,s,p,v,g,N,D,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=_.length;E<A;E++){const b=_[E],x=d[b.materialIndex],N=Math.max(b.start,S.start),D=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let U=N,L=D;U<L;U+=3){const P=U,B=U+1,X=U+2;l=Uc(this,x,t,s,p,v,g,P,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const N=b,D=b+1,U=b+2;l=Uc(this,d,t,s,p,v,g,N,D,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function tb(r,t,i,s,l,c,d,h){let m;if(t.side===Qn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===ps,h),m===null)return null;Nc.copy(h),Nc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:r}}function Uc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Cc),r.getVertexPosition(m,Rc),r.getVertexPosition(p,wc);const v=tb(r,t,i,s,Cc,Rc,wc,lv);if(v){const g=new oe;Oi.getBarycoord(lv,Cc,Rc,wc,g),l&&(v.uv=Oi.getInterpolatedAttribute(l,h,m,p,g,new Ht)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,h,m,p,g,new Ht)),d&&(v.normal=Oi.getInterpolatedAttribute(d,h,m,p,g,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new oe,materialIndex:0};Oi.getNormal(Cc,Rc,wc,_.normal),v.face=_,v.barycoord=g}return v}class rl extends Ji{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(v,3)),this.setAttribute("uv",new Ei(g,2));function E(A,b,x,N,D,U,L,P,B,X,T){const R=U/B,H=L/X,q=U/2,Y=L/2,ae=P/2,le=B+1,F=X+1;let k=0,J=0;const be=new oe;for(let _e=0;_e<F;_e++){const z=_e*H-Y;for(let te=0;te<le;te++){const me=te*R-q;be[A]=me*N,be[b]=z*D,be[x]=ae,p.push(be.x,be.y,be.z),be[A]=0,be[b]=0,be[x]=P>0?1:-1,v.push(be.x,be.y,be.z),g.push(te/B),g.push(1-_e/X),k+=1}}for(let _e=0;_e<X;_e++)for(let z=0;z<B;z++){const te=_+z+le*_e,me=_+z+le*(_e+1),Ce=_+(z+1)+le*(_e+1),ze=_+(z+1)+le*_e;m.push(te,me,ze),m.push(me,Ce,ze),J+=6}h.addGroup(S,J,T),S+=J,_+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function nb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function f_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}const ib={clone:Wr,merge:Hn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Kc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class d_ extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new oe,cv=new Ht,uv=new Ht;class bi extends d_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,i){return this.getViewBounds(t,cv,uv),i.subVectors(uv,cv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ko*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const zr=-90,Ir=1;class rb extends ci{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(zr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new bi(zr,Ir,t,i);c.layers=this.layers,this.add(c);const d=new bi(zr,Ir,t,i);d.layers=this.layers,this.add(d);const h=new bi(zr,Ir,t,i);h.layers=this.layers,this.add(h);const m=new bi(zr,Ir,t,i);m.layers=this.layers,this.add(m);const p=new bi(zr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,_,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class h_ extends Gn{constructor(t=[],i=qs,s,l,c,d,h,m,p,v){super(t,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p_ extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new h_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Da});c.uniforms.tEquirect.value=i;const d=new Fi(l,c),h=i.minFilter;return i.minFilter===Vs&&(i.minFilter=zn),new rb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Yo extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,s),x=this._getHandJoint(p,A);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Yo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class lb extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oa,this.environmentIntensity=1,this.environmentRotation=new Oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cb extends Gn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Nn,v=Nn,g,_){super(null,d,h,m,p,v,l,c,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new oe,ub=new oe,fb=new bt;class Bs{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ld.subVectors(s,i).cross(ub.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ld),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||fb.getNormalMatrix(t),l=this.coplanarPoint(Ld).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Wh,db=new Ht(.5,.5),Lc=new oe;class m_{constructor(t=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,d=new Bs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ji,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],S=c[7],E=c[8],A=c[9],b=c[10],x=c[11],N=c[12],D=c[13],U=c[14],L=c[15];if(l[0].setComponents(p-d,S-v,x-E,L-N).normalize(),l[1].setComponents(p+d,S+v,x+E,L+N).normalize(),l[2].setComponents(p+h,S+g,x+A,L+D).normalize(),l[3].setComponents(p-h,S-g,x-A,L-D).normalize(),s)l[4].setComponents(m,_,b,U).normalize(),l[5].setComponents(p-m,S-_,x-b,L-U).normalize();else if(l[4].setComponents(p-m,S-_,x-b,L-U).normalize(),i===ji)l[5].setComponents(p+m,S+_,x+b,L+U).normalize();else if(i===jc)l[5].setComponents(m,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=db.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends Gn{constructor(t,i,s=Ki,l,c,d,h=Nn,m=Nn,p,v=La,g=1){if(v!==La&&v!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hb extends il{constructor(t,i=Ki,s=qs,l,c,d=Nn,h=Nn,m,p=La){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class g_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yh extends Ji{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),v(),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(c.slice(),3)),this.setAttribute("uv",new Ei(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const D=new oe,U=new oe,L=new oe;for(let P=0;P<i.length;P+=3)S(i[P+0],D),S(i[P+1],U),S(i[P+2],L),m(D,U,L,N)}function m(N,D,U,L){const P=L+1,B=[];for(let X=0;X<=P;X++){B[X]=[];const T=N.clone().lerp(U,X/P),R=D.clone().lerp(U,X/P),H=P-X;for(let q=0;q<=H;q++)q===0&&X===P?B[X][q]=T:B[X][q]=T.clone().lerp(R,q/H)}for(let X=0;X<P;X++)for(let T=0;T<2*(P-X)-1;T++){const R=Math.floor(T/2);T%2===0?(_(B[X][R+1]),_(B[X+1][R]),_(B[X][R])):(_(B[X][R+1]),_(B[X+1][R+1]),_(B[X+1][R]))}}function p(N){const D=new oe;for(let U=0;U<c.length;U+=3)D.x=c[U+0],D.y=c[U+1],D.z=c[U+2],D.normalize().multiplyScalar(N),c[U+0]=D.x,c[U+1]=D.y,c[U+2]=D.z}function v(){const N=new oe;for(let D=0;D<c.length;D+=3){N.x=c[D+0],N.y=c[D+1],N.z=c[D+2];const U=b(N)/2/Math.PI+.5,L=x(N)/Math.PI+.5;d.push(U,1-L)}E(),g()}function g(){for(let N=0;N<d.length;N+=6){const D=d[N+0],U=d[N+2],L=d[N+4],P=Math.max(D,U,L),B=Math.min(D,U,L);P>.9&&B<.1&&(D<.2&&(d[N+0]+=1),U<.2&&(d[N+2]+=1),L<.2&&(d[N+4]+=1))}}function _(N){c.push(N.x,N.y,N.z)}function S(N,D){const U=N*3;D.x=t[U+0],D.y=t[U+1],D.z=t[U+2]}function E(){const N=new oe,D=new oe,U=new oe,L=new oe,P=new Ht,B=new Ht,X=new Ht;for(let T=0,R=0;T<c.length;T+=9,R+=6){N.set(c[T+0],c[T+1],c[T+2]),D.set(c[T+3],c[T+4],c[T+5]),U.set(c[T+6],c[T+7],c[T+8]),P.set(d[R+0],d[R+1]),B.set(d[R+2],d[R+3]),X.set(d[R+4],d[R+5]),L.copy(N).add(D).add(U).divideScalar(3);const H=b(L);A(P,R+0,N,H),A(B,R+2,D,H),A(X,R+4,U,H)}}function A(N,D,U,L){L<0&&N.x===1&&(d[D]=N.x-1),U.x===0&&U.z===0&&(d[D]=L/2/Math.PI+.5)}function b(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yh(t.vertices,t.indices,t.radius,t.detail)}}class Yc extends Yh{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yc(t.radius,t.detail)}}class Qc extends Ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=t/h,_=i/m,S=[],E=[],A=[],b=[];for(let x=0;x<v;x++){const N=x*_-d;for(let D=0;D<p;D++){const U=D*g-c;E.push(U,-N,0),A.push(0,0,1),b.push(D/h),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<h;N++){const D=N+p*x,U=N+p*(x+1),L=N+1+p*(x+1),P=N+1+p*x;S.push(D,U,P),S.push(U,L,P)}this.setIndex(S),this.setAttribute("position",new Ei(E,3)),this.setAttribute("normal",new Ei(A,3)),this.setAttribute("uv",new Ei(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.width,t.height,t.widthSegments,t.heightSegments)}}class pb extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mb extends Kc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gb extends Kc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class v_ extends d_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class vb extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class _b{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function fv(r,t,i,s){const l=xb(s);switch(i){case n_:return r*t;case a_:return r*t/l.components*l.byteLength;case Hh:return r*t/l.components*l.byteLength;case jr:return r*t*2/l.components*l.byteLength;case Gh:return r*t*2/l.components*l.byteLength;case i_:return r*t*3/l.components*l.byteLength;case Pi:return r*t*4/l.components*l.byteLength;case Vh:return r*t*4/l.components*l.byteLength;case Ic:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case eh:case nh:return Math.max(r,16)*Math.max(t,8)/4;case $d:case th:return Math.max(r,8)*Math.max(t,8)/2;case ih:case ah:case rh:case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sh:case lh:case ch:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Eh:case Th:case Ah:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ch:case Rh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wh:case Dh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xb(r){switch(r){case Mi:case Jv:return{byteLength:1,components:1};case $o:case $v:case Ua:return{byteLength:2,components:1};case Ih:case Bh:return{byteLength:2,components:4};case Ki:case zh:case Xi:return{byteLength:4,components:1};case e_:case t_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function __(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function yb(r){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,g[_]=A)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
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
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
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
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xb=`#define PI 3.141592653589793
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
} // validated`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,hM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,xM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DM=`#if defined( USE_POINTS_UV )
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
#endif`,NM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,CE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
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
}`,wE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,LE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,IE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VE=`#define PHONG
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
}`,kE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,XE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qE=`#define TOON
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
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,YE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,JE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$E=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Sb,alphahash_pars_fragment:bb,alphamap_fragment:Mb,alphamap_pars_fragment:Eb,alphatest_fragment:Tb,alphatest_pars_fragment:Ab,aomap_fragment:Cb,aomap_pars_fragment:Rb,batching_pars_vertex:wb,batching_vertex:Db,begin_vertex:Nb,beginnormal_vertex:Ub,bsdfs:Lb,iridescence_fragment:Ob,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Bb,color_fragment:Hb,color_pars_fragment:Gb,color_pars_vertex:Vb,color_vertex:kb,common:Xb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:qb,displacementmap_pars_vertex:Wb,displacementmap_vertex:Yb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Kb,colorspace_fragment:Qb,colorspace_pars_fragment:Jb,envmap_fragment:$b,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:hM,envmap_vertex:iM,fog_vertex:aM,fog_pars_vertex:sM,fog_fragment:rM,fog_pars_fragment:oM,gradientmap_pars_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:fM,lights_pars_begin:dM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:xM,lights_fragment_begin:yM,lights_fragment_maps:SM,lights_fragment_end:bM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:AM,map_fragment:CM,map_pars_fragment:RM,map_particle_fragment:wM,map_particle_pars_fragment:DM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:UM,morphinstance_vertex:LM,morphcolor_vertex:OM,morphnormal_vertex:PM,morphtarget_pars_vertex:FM,morphtarget_vertex:zM,normal_fragment_begin:IM,normal_fragment_maps:BM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:VM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:jM,clearcoat_pars_fragment:qM,iridescence_pars_fragment:WM,opaque_fragment:YM,packing:ZM,premultiplied_alpha_fragment:KM,project_vertex:QM,dithering_fragment:JM,dithering_pars_fragment:$M,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:sE,skinbase_vertex:rE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:dE,tonemapping_pars_fragment:hE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:xE,background_vert:yE,background_frag:SE,backgroundCube_vert:bE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:TE,depth_vert:AE,depth_frag:CE,distance_vert:RE,distance_frag:wE,equirect_vert:DE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:LE,meshbasic_vert:OE,meshbasic_frag:PE,meshlambert_vert:FE,meshlambert_frag:zE,meshmatcap_vert:IE,meshmatcap_frag:BE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:kE,meshphysical_vert:XE,meshphysical_frag:jE,meshtoon_vert:qE,meshtoon_frag:WE,points_vert:YE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Ge={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Hn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Hn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Hn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Hn([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Hn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Hn([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Hn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Hn([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Hn([Ge.common,Ge.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Hn([Ge.lights,Ge.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Oc={r:0,b:0,g:0},zs=new Oa,e1=new dn;function t1(r,t,i,s,l,c,d){const h=new zt(0);let m=c===!0?0:1,p,v,g=null,_=0,S=null;function E(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function A(D){let U=!1;const L=E(D);L===null?x(h,m):L&&L.isColor&&(x(L,1),U=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(D,U){const L=E(U);L&&(L.isCubeTexture||L.mapping===Zc)?(v===void 0&&(v=new Fi(new rl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Wr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),zs.copy(U.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(zs)),v.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Xt,(g!==L||_!==L.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=L,_=L.version,S=r.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Fi(new Qc(2,2),new Qi({name:"BackgroundMaterial",uniforms:Wr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=L,_=L.version,S=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,U){D.getRGB(Oc,f_(r)),s.buffers.color.setClear(Oc.r,Oc.g,Oc.b,U,d)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,U=1){h.set(D),m=U,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(h,m)},render:A,addToRenderList:b,dispose:N}}function n1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,d=!1;function h(R,H,q,Y,ae){let le=!1;const F=g(Y,q,H);c!==F&&(c=F,p(c.object)),le=S(R,Y,q,ae),le&&E(R,Y,q,ae),ae!==null&&t.update(ae,r.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,U(R,H,q,Y),ae!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ae).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function v(R){return r.deleteVertexArray(R)}function g(R,H,q){const Y=q.wireframe===!0;let ae=s[R.id];ae===void 0&&(ae={},s[R.id]=ae);let le=ae[H.id];le===void 0&&(le={},ae[H.id]=le);let F=le[Y];return F===void 0&&(F=_(m()),le[Y]=F),F}function _(R){const H=[],q=[],Y=[];for(let ae=0;ae<i;ae++)H[ae]=0,q[ae]=0,Y[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:Y,object:R,attributes:{},index:null}}function S(R,H,q,Y){const ae=c.attributes,le=H.attributes;let F=0;const k=q.getAttributes();for(const J in k)if(k[J].location>=0){const _e=ae[J];let z=le[J];if(z===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),_e===void 0||_e.attribute!==z||z&&_e.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==Y}function E(R,H,q,Y){const ae={},le=H.attributes;let F=0;const k=q.getAttributes();for(const J in k)if(k[J].location>=0){let _e=le[J];_e===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor));const z={};z.attribute=_e,_e&&_e.data&&(z.data=_e.data),ae[J]=z,F++}c.attributes=ae,c.attributesNum=F,c.index=Y}function A(){const R=c.newAttributes;for(let H=0,q=R.length;H<q;H++)R[H]=0}function b(R){x(R,0)}function x(R,H){const q=c.newAttributes,Y=c.enabledAttributes,ae=c.attributeDivisors;q[R]=1,Y[R]===0&&(r.enableVertexAttribArray(R),Y[R]=1),ae[R]!==H&&(r.vertexAttribDivisor(R,H),ae[R]=H)}function N(){const R=c.newAttributes,H=c.enabledAttributes;for(let q=0,Y=H.length;q<Y;q++)H[q]!==R[q]&&(r.disableVertexAttribArray(q),H[q]=0)}function D(R,H,q,Y,ae,le,F){F===!0?r.vertexAttribIPointer(R,H,q,ae,le):r.vertexAttribPointer(R,H,q,Y,ae,le)}function U(R,H,q,Y){A();const ae=Y.attributes,le=q.getAttributes(),F=H.defaultAttributeValues;for(const k in le){const J=le[k];if(J.location>=0){let be=ae[k];if(be===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),be!==void 0){const _e=be.normalized,z=be.itemSize,te=t.get(be);if(te===void 0)continue;const me=te.buffer,Ce=te.type,ze=te.bytesPerElement,ee=Ce===r.INT||Ce===r.UNSIGNED_INT||be.gpuType===zh;if(be.isInterleavedBufferAttribute){const fe=be.data,Te=fe.stride,Ee=be.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<J.locationSize;Ne++)x(J.location+Ne,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<J.locationSize;Ne++)b(J.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Ne=0;Ne<J.locationSize;Ne++)D(J.location+Ne,z/J.locationSize,Ce,_e,Te*ze,(Ee+z/J.locationSize*Ne)*ze,ee)}else{if(be.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)x(J.location+fe,be.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let fe=0;fe<J.locationSize;fe++)b(J.location+fe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let fe=0;fe<J.locationSize;fe++)D(J.location+fe,z/J.locationSize,Ce,_e,z*ze,z/J.locationSize*fe*ze,ee)}}else if(F!==void 0){const _e=F[k];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(J.location,_e);break;case 3:r.vertexAttrib3fv(J.location,_e);break;case 4:r.vertexAttrib4fv(J.location,_e);break;default:r.vertexAttrib1fv(J.location,_e)}}}}N()}function L(){X();for(const R in s){const H=s[R];for(const q in H){const Y=H[q];for(const ae in Y)v(Y[ae].object),delete Y[ae];delete H[q]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const q in H){const Y=H[q];for(const ae in Y)v(Y[ae].object),delete Y[ae];delete H[q]}delete s[R.id]}function B(R){for(const H in s){const q=s[H];if(q[R.id]===void 0)continue;const Y=q[R.id];for(const ae in Y)v(Y[ae].object),delete Y[ae];delete q[R.id]}}function X(){T(),d=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:b,disableUnusedAttributes:N}}function i1(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,_){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*_[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function a1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Pi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Mi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Xi&&!X)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(mt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:U,maxSamples:L,samples:P}}function s1(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Bs,h=new bt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||l;return l=_,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,x=r.get(g);if(!l||E===null||E.length===0||c&&!b)c?v(null):p();else{const N=c?0:s,D=N*4;let U=x.clippingState||null;m.value=U,U=v(E,_,D,S);for(let L=0;L!==D;++L)U[L]=i[L];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,S,E){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=m.value,E!==!0||b===null){const x=S+A*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(b===null||b.length<x)&&(b=new Float32Array(x));for(let D=0,U=S;D!==A;++D,U+=4)d.copy(g[D]).applyMatrix4(N,h),d.normal.toArray(b,U),b[U+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}function r1(r){let t=new WeakMap;function i(d,h){return h===Zd?d.mapping=qs:h===Kd&&(d.mapping=Xr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Zd||h===Kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new p_(m.height);return p.fromEquirectangularTexture(r,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const hs=4,dv=[.125,.215,.35,.446,.526,.582],Gs=20,o1=256,jo=new v_,hv=new zt;let Od=null,Pd=0,Fd=0,zd=!1;const l1=new oe;class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=l1}=c;Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Od,Pd,Fd),this._renderer.xr.enabled=zd,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ua,format:Pi,colorSpace:qr,depthBuffer:!1},l=mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(c)),this._blurMaterial=f1(c,t,i),this._ggxMaterial=u1(c,t,i)}return l}_compileMaterial(t){const i=new Fi(new Ji,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new bi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(hv),g.toneMapping=qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new rl,new Wc({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let x=!1;const N=t.background;N?N.isColor&&(b.color.copy(N),t.background=null,x=!0):(b.color.copy(hv),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const L=this._cubeSize;Br(l,U*L,D>2?L:0,L,L),g.setRenderTarget(l),x&&g.render(A,m),g.render(t,m)}g.toneMapping=S,g.autoClear=_,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),_=0+p*1.25,S=g*_,{_lodMax:E}=this,A=this._sizeLods[s],b=3*A*(s>E-hs?s-E+hs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Br(c,b,x,3*A,2*A),l.setRenderTarget(c),l.render(h,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Br(t,b,x,3*A,2*A),l.setRenderTarget(t),l.render(h,jo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Gs-1),A=c/E,b=isFinite(c)?1+Math.floor(v*A):Gs;b>Gs&&mt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Gs}`);const x=[];let N=0;for(let B=0;B<Gs;++B){const X=B/A,T=Math.exp(-X*X/2);x.push(T),B===0?N+=T:B<b&&(N+=2*T)}for(let B=0;B<x.length;B++)x[B]=x[B]/N;_.envMap.value=t.texture,_.samples.value=b,_.weights.value=x,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-s;const U=this._sizeLods[l],L=3*U*(l>D-hs?l-D+hs:0),P=4*(this._cubeSize-U);Br(i,L,P,3*U,2*U),m.setRenderTarget(i),m.render(g,jo)}}function c1(r){const t=[],i=[],s=[];let l=r;const c=r-hs+1+dv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>r-hs?m=dv[d-r+hs-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,A=3,b=2,x=1,N=new Float32Array(A*E*S),D=new Float32Array(b*E*S),U=new Float32Array(x*E*S);for(let P=0;P<S;P++){const B=P%3*2/3-1,X=P>2?0:-1,T=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];N.set(T,A*E*P),D.set(_,b*E*P);const R=[P,P,P,P,P,P];U.set(R,x*E*P)}const L=new Ji;L.setAttribute("position",new Yi(N,A)),L.setAttribute("uv",new Yi(D,b)),L.setAttribute("faceIndex",new Yi(U,x)),s.push(new Fi(L,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function mv(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function u1(r,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function f1(r,t,i){const s=new Float32Array(Gs),l=new oe(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function gv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function vv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function d1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Zd||m===Kd,v=m===qs||m===Xr;if(p||v){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new pv(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new pv(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function h1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function p1(r,t,i,s){const l={},c=new WeakMap;function d(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",d),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const S in _)t.update(_[S],r.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let D=0,U=N.length;D<U;D+=3){const L=N[D+0],P=N[D+1],B=N[D+2];_.push(L,P,P,B,B,L)}}else if(E!==void 0){const N=E.array;A=E.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const L=D+0,P=D+1,B=D+2;_.push(L,P,P,B,B,L)}}else return;const b=new(s_(_)?u_:c_)(_,1);b.version=A;const x=c.get(g);x&&t.remove(x),c.set(g,b)}function v(g){const _=c.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function m1(r,t,i){let s;function l(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function m(_,S){r.drawElements(s,S,c,_*d),i.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,_*d,E),i.update(S,s,E))}function v(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,_,0,E);let b=0;for(let x=0;x<E;x++)b+=S[x];i.update(b,s,1)}function g(_,S,E,A){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<_.length;x++)p(_[x]/d,S[x],A[x]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,_,0,A,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*A[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function g1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ft("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v1(r,t,i){const s=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let T=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",T)};_!==void 0&&_.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;S===!0&&(D=1),E===!0&&(D=2),A===!0&&(D=3);let U=h.attributes.position.count*D,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*L*4*g),B=new r_(P,U,L,g);B.type=Xi,B.needsUpdate=!0;const X=D*4;for(let R=0;R<g;R++){const H=b[R],q=x[R],Y=N[R],ae=U*L*4*R;for(let le=0;le<H.count;le++){const F=le*X;S===!0&&(l.fromBufferAttribute(H,le),P[ae+F+0]=l.x,P[ae+F+1]=l.y,P[ae+F+2]=l.z,P[ae+F+3]=0),E===!0&&(l.fromBufferAttribute(q,le),P[ae+F+4]=l.x,P[ae+F+5]=l.y,P[ae+F+6]=l.z,P[ae+F+7]=0),A===!0&&(l.fromBufferAttribute(Y,le),P[ae+F+8]=l.x,P[ae+F+9]=l.y,P[ae+F+10]=l.z,P[ae+F+11]=Y.itemSize===4?l.w:1)}}_={count:g,texture:B,size:new Ht(U,L)},s.set(h,_),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let S=0;for(let A=0;A<p.length;A++)S+=p[A];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function _1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const x1={[Xv]:"LINEAR_TONE_MAPPING",[jv]:"REINHARD_TONE_MAPPING",[qv]:"CINEON_TONE_MAPPING",[Wv]:"ACES_FILMIC_TONE_MAPPING",[Zv]:"AGX_TONE_MAPPING",[Kv]:"NEUTRAL_TONE_MAPPING",[Yv]:"CUSTOM_TONE_MAPPING"};function y1(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Wi(t,i,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),h=new Ji;h.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ei([0,2,0,0,2,0],2));const m=new pb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Fi(h,m),v=new v_(-1,1,1,-1,0,1);let g=null,_=null,S=!1,E,A=null,b=[],x=!1;this.setSize=function(N,D){c.setSize(N,D),d.setSize(N,D);for(let U=0;U<b.length;U++){const L=b[U];L.setSize&&L.setSize(N,D)}},this.setEffects=function(N){b=N,x=b.length>0&&b[0].isRenderPass===!0;const D=c.width,U=c.height;for(let L=0;L<b.length;L++){const P=b[L];P.setSize&&P.setSize(D,U)}},this.begin=function(N,D){if(S||N.toneMapping===qi&&b.length===0)return!1;if(A=D,D!==null){const U=D.width,L=D.height;(c.width!==U||c.height!==L)&&this.setSize(U,L)}return x===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(N,D){N.toneMapping=E,S=!0;let U=c,L=d;for(let P=0;P<b.length;P++){const B=b[P];if(B.enabled!==!1&&(B.render(N,L,U,D),B.needsSwap!==!1)){const X=U;U=L,L=X}}if(g!==N.outputColorSpace||_!==N.toneMapping){g=N.outputColorSpace,_=N.toneMapping,m.defines={},Lt.getTransfer(g)===Xt&&(m.defines.SRGB_TRANSFER="");const P=x1[_];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(A),N.render(p,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const x_=new Gn,Nh=new il(1,1),y_=new r_,S_=new kS,b_=new h_,_v=[],xv=[],yv=new Float32Array(16),Sv=new Float32Array(9),bv=new Float32Array(4);function Kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=_v[l];if(c===void 0&&(c=new Float32Array(l),_v[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function $c(r,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function S1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function T1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;bv.set(s),r.uniformMatrix2fv(this.addr,!1,bv),_n(i,s)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;Sv.set(s),r.uniformMatrix3fv(this.addr,!1,Sv),_n(i,s)}}function C1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(vn(i,s))return;yv.set(s),r.uniformMatrix4fv(this.addr,!1,yv),_n(i,s)}}function R1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function U1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function L1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function P1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Nh.compareFunction=i.isReversedDepthBuffer()?Xh:kh,c=Nh):c=x_,i.setTexture2D(t||c,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||S_,l)}function I1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||b_,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||y_,l)}function H1(r){switch(r){case 5126:return S1;case 35664:return b1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return A1;case 35676:return C1;case 5124:case 35670:return R1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return L1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return B1}}function G1(r,t){r.uniform1fv(this.addr,t)}function V1(r,t){const i=Kr(t,this.size,2);r.uniform2fv(this.addr,i)}function k1(r,t){const i=Kr(t,this.size,3);r.uniform3fv(this.addr,i)}function X1(r,t){const i=Kr(t,this.size,4);r.uniform4fv(this.addr,i)}function j1(r,t){const i=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function q1(r,t){const i=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function W1(r,t){const i=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Y1(r,t){r.uniform1iv(this.addr,t)}function Z1(r,t){r.uniform2iv(this.addr,t)}function K1(r,t){r.uniform3iv(this.addr,t)}function Q1(r,t){r.uniform4iv(this.addr,t)}function J1(r,t){r.uniform1uiv(this.addr,t)}function $1(r,t){r.uniform2uiv(this.addr,t)}function eT(r,t){r.uniform3uiv(this.addr,t)}function tT(r,t){r.uniform4uiv(this.addr,t)}function nT(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Nh:d=x_;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function iT(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||S_,c[d])}function aT(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||b_,c[d])}function sT(r,t,i){const s=this.cache,l=t.length,c=$c(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||y_,c[d])}function rT(r){switch(r){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return j1;case 35675:return q1;case 35676:return W1;case 5124:case 35670:return Y1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return sT}}class oT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rT(i.type)}}class cT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Mv(r,t){r.seq.push(t),r.map[t.id]=t}function uT(r,t,i){const s=r.name,l=s.length;for(Id.lastIndex=0;;){const c=Id.exec(s),d=Id.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Mv(i,p===void 0?new oT(h,r,t):new lT(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new cT(h),Mv(i,g)),i=g}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);uT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Ev(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const fT=37297;let dT=0;function hT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Tv=new bt;function pT(r){Lt._getMatrix(Tv,Lt.workingColorSpace,r);const t=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Xc:return[t,"LinearTransferOETF"];case Xt:return[t,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Av(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+hT(r.getShaderSource(t),h)}else return c}function mT(r,t){const i=pT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gT={[Xv]:"Linear",[jv]:"Reinhard",[qv]:"Cineon",[Wv]:"ACESFilmic",[Zv]:"AgX",[Kv]:"Neutral",[Yv]:"Custom"};function vT(r,t){const i=gT[t];return i===void 0?(mt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new oe;function _T(){Lt.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function yT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ST(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Zo(r){return r!==""}function Cv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(r){return r.replace(bT,ET)}const MT=new Map;function ET(r,t){let i=Mt[t];if(i===void 0){const s=MT.get(t);if(s!==void 0)i=Mt[s],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Uh(i)}const TT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(r){return r.replace(TT,AT)}function AT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const CT={[zc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function RT(r){return CT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wT={[qs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function DT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NT={[Xr]:"ENVMAP_MODE_REFRACTION"};function UT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LT={[kv]:"ENVMAP_BLENDING_MULTIPLY",[lS]:"ENVMAP_BLENDING_MIX",[cS]:"ENVMAP_BLENDING_ADD"};function OT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LT[r.combine]||"ENVMAP_BLENDING_NONE"}function PT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=RT(i),p=DT(i),v=UT(i),g=OT(i),_=PT(i),S=xT(i),E=yT(c),A=l.createProgram();let b,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Zo).join(`
`),x.length>0&&(x+=`
`)):(b=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),x=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?Mt.tonemapping_pars_fragment:"",i.toneMapping!==qi?vT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,mT("linearToOutputTexel",i.outputColorSpace),_T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),d=Uh(d),d=Cv(d,i),d=Rv(d,i),h=Uh(h),h=Cv(h,i),h=Rv(h,i),d=wv(d),h=wv(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",i.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+b+d,U=N+x+h,L=Ev(l,l.VERTEX_SHADER,D),P=Ev(l,l.FRAGMENT_SHADER,U);l.attachShader(A,L),l.attachShader(A,P),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(H){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",Y=l.getShaderInfoLog(L)||"",ae=l.getShaderInfoLog(P)||"",le=q.trim(),F=Y.trim(),k=ae.trim();let J=!0,be=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,L,P);else{const _e=Av(l,L,"vertex"),z=Av(l,P,"fragment");Ft("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+le+`
`+_e+`
`+z)}else le!==""?mt("WebGLProgram: Program Info Log:",le):(F===""||k==="")&&(be=!1);be&&(H.diagnostics={runnable:J,programLog:le,vertexShader:{log:F,prefix:b},fragmentShader:{log:k,prefix:x}})}l.deleteShader(L),l.deleteShader(P),X=new Vc(l,A),T=ST(l,A)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,fT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=P,this}let zT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new BT(t),i.set(t,s)),s}}class BT{constructor(t){this.id=zT++,this.code=t,this.usedTimes=0}}function HT(r,t,i,s,l,c,d){const h=new o_,m=new IT,p=new Set,v=[],g=new Map,_=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,R,H,q,Y){const ae=q.fog,le=Y.geometry,F=T.isMeshStandardMaterial?q.environment:null,k=(T.isMeshStandardMaterial?i:t).get(T.envMap||F),J=k&&k.mapping===Zc?k.image.height:null,be=E[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&mt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const _e=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,z=_e!==void 0?_e.length:0;let te=0;le.morphAttributes.position!==void 0&&(te=1),le.morphAttributes.normal!==void 0&&(te=2),le.morphAttributes.color!==void 0&&(te=3);let me,Ce,ze,ee;if(be){const Ct=ki[be];me=Ct.vertexShader,Ce=Ct.fragmentShader}else me=T.vertexShader,Ce=T.fragmentShader,m.update(T),ze=m.getVertexShaderID(T),ee=m.getFragmentShaderID(T);const fe=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,Ne=Y.isBatchedMesh===!0,Je=!!T.map,ht=!!T.matcap,st=!!k,ot=!!T.aoMap,vt=!!T.lightMap,lt=!!T.bumpMap,jt=!!T.normalMap,V=!!T.displacementMap,Ut=!!T.emissiveMap,ut=!!T.metalnessMap,_t=!!T.roughnessMap,je=T.anisotropy>0,I=T.clearcoat>0,M=T.dispersion>0,Z=T.iridescence>0,ge=T.sheen>0,Me=T.transmission>0,de=je&&!!T.anisotropyMap,$e=I&&!!T.clearcoatMap,Le=I&&!!T.clearcoatNormalMap,We=I&&!!T.clearcoatRoughnessMap,tt=Z&&!!T.iridescenceMap,Re=Z&&!!T.iridescenceThicknessMap,we=ge&&!!T.sheenColorMap,ke=ge&&!!T.sheenRoughnessMap,He=!!T.specularMap,Pe=!!T.specularColorMap,xt=!!T.specularIntensityMap,W=Me&&!!T.transmissionMap,Ie=Me&&!!T.thicknessMap,De=!!T.gradientMap,Ve=!!T.alphaMap,Ae=T.alphaTest>0,Se=!!T.alphaHash,Ue=!!T.extensions;let ft=qi;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ft=r.toneMapping);const It={shaderID:be,shaderType:T.type,shaderName:T.name,vertexShader:me,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ze,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Ne,batchingColor:Ne&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:qr,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:ht,envMap:st,envMapMode:st&&k.mapping,envMapCubeUVHeight:J,aoMap:ot,lightMap:vt,bumpMap:lt,normalMap:jt,displacementMap:V,emissiveMap:Ut,normalMapObjectSpace:jt&&T.normalMapType===hS,normalMapTangentSpace:jt&&T.normalMapType===dS,metalnessMap:ut,roughnessMap:_t,anisotropy:je,anisotropyMap:de,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Le,clearcoatRoughnessMap:We,dispersion:M,iridescence:Z,iridescenceMap:tt,iridescenceThicknessMap:Re,sheen:ge,sheenColorMap:we,sheenRoughnessMap:ke,specularMap:He,specularColorMap:Pe,specularIntensityMap:xt,transmission:Me,transmissionMap:W,thicknessMap:Ie,gradientMap:De,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Ae,alphaHash:Se,combine:T.combine,mapUv:Je&&A(T.map.channel),aoMapUv:ot&&A(T.aoMap.channel),lightMapUv:vt&&A(T.lightMap.channel),bumpMapUv:lt&&A(T.bumpMap.channel),normalMapUv:jt&&A(T.normalMap.channel),displacementMapUv:V&&A(T.displacementMap.channel),emissiveMapUv:Ut&&A(T.emissiveMap.channel),metalnessMapUv:ut&&A(T.metalnessMap.channel),roughnessMapUv:_t&&A(T.roughnessMap.channel),anisotropyMapUv:de&&A(T.anisotropyMap.channel),clearcoatMapUv:$e&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(T.sheenRoughnessMap.channel),specularMapUv:He&&A(T.specularMap.channel),specularColorMapUv:Pe&&A(T.specularColorMap.channel),specularIntensityMapUv:xt&&A(T.specularIntensityMap.channel),transmissionMapUv:W&&A(T.transmissionMap.channel),thicknessMapUv:Ie&&A(T.thicknessMap.channel),alphaMapUv:Ve&&A(T.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(jt||je),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(Je||Ve),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ut&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ca,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Ne)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)R.push(H),R.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(N(R,T),D(R,T),R.push(r.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function N(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function D(T,R){h.disableAll(),R.instancing&&h.enable(0),R.instancingColor&&h.enable(1),R.instancingMorph&&h.enable(2),R.matcap&&h.enable(3),R.envMap&&h.enable(4),R.normalMapObjectSpace&&h.enable(5),R.normalMapTangentSpace&&h.enable(6),R.clearcoat&&h.enable(7),R.iridescence&&h.enable(8),R.alphaTest&&h.enable(9),R.vertexColors&&h.enable(10),R.vertexAlphas&&h.enable(11),R.vertexUv1s&&h.enable(12),R.vertexUv2s&&h.enable(13),R.vertexUv3s&&h.enable(14),R.vertexTangents&&h.enable(15),R.anisotropy&&h.enable(16),R.alphaHash&&h.enable(17),R.batching&&h.enable(18),R.dispersion&&h.enable(19),R.batchingColor&&h.enable(20),R.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),T.push(h.mask)}function U(T){const R=E[T.type];let H;if(R){const q=ki[R];H=ib.clone(q.uniforms)}else H=T.uniforms;return H}function L(T,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new FT(r,R,T,c),v.push(H),g.set(R,H)),H}function P(T){if(--T.usedTimes===0){const R=v.indexOf(T);v[R]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function B(T){m.remove(T)}function X(){m.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:U,acquireProgram:L,releaseProgram:P,releaseShaderCache:B,programs:v,dispose:X}}function GT(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function VT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g,_,S,E,A,b){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:b},r[t]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=A,x.group=b),t++,x}function h(g,_,S,E,A,b){const x=d(g,_,S,E,A,b);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,_,S,E,A,b){const x=d(g,_,S,E,A,b);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,_){i.length>1&&i.sort(g||VT),s.length>1&&s.sort(_||Nv),l.length>1&&l.sort(_||Nv)}function v(){for(let g=t,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function kT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Uv,r.set(s,[d])):l>=c.length?(d=new Uv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function XT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new oe,color:new zt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[t.id]=i,i}}}function jT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let qT=0;function WT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YT(r){const t=new XT,i=jT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const l=new oe,c=new dn,d=new dn;function h(p){let v=0,g=0,_=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let S=0,E=0,A=0,b=0,x=0,N=0,D=0,U=0,L=0,P=0,B=0;p.sort(WT);for(let T=0,R=p.length;T<R;T++){const H=p[T],q=H.color,Y=H.intensity,ae=H.distance;let le=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===jr?le=H.shadow.map.texture:le=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=q.r*Y,g+=q.g*Y,_+=q.b*Y;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],Y);B++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=le,s.directionalShadowMatrix[S]=H.shadow.matrix,N++}s.directional[S]=F,S++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(q).multiplyScalar(Y),F.distance=ae,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[A]=F;const k=H.shadow;if(H.map&&(s.spotLightMap[L]=H.map,L++,k.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[A]=k.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,s.spotShadow[A]=J,s.spotShadowMap[A]=le,U++}A++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(q).multiplyScalar(Y),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[b]=F,b++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const k=H.shadow,J=i.get(H);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=le,s.pointShadowMatrix[E]=H.shadow.matrix,D++}s.point[E]=F,E++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(Y),F.groundColor.copy(H.groundColor).multiplyScalar(Y),s.hemi[x]=F,x++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==b||X.hemiLength!==x||X.numDirectionalShadows!==N||X.numPointShadows!==D||X.numSpotShadows!==U||X.numSpotMaps!==L||X.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=b,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+L-P,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,X.directionalLength=S,X.pointLength=E,X.spotLength=A,X.rectAreaLength=b,X.hemiLength=x,X.numDirectionalShadows=N,X.numPointShadows=D,X.numSpotShadows=U,X.numSpotMaps=L,X.numLightProbes=B,s.version=qT++)}function m(p,v){let g=0,_=0,S=0,E=0,A=0;const b=v.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const D=p[x];if(D.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),g++}else if(D.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),S++}else if(D.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),d.identity(),c.copy(D.matrixWorld),c.premultiply(b),d.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),E++}else if(D.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),_++}else if(D.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(b),A++}}}return{setup:h,setupView:m,state:s}}function Lv(r){const t=new YT(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function ZT(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Lv(r),t.set(l,[h])):c>=d.length?(h=new Lv(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JT=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],$T=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Ov=new dn,qo=new oe,Bd=new oe;function eA(r,t,i){let s=new m_;const l=new Ht,c=new Ht,d=new rn,h=new mb,m=new gb,p={},v=i.maxTextureSize,g={[ps]:Qn,[Qn]:ps,[Ca]:Ca},_=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:KT,fragmentShader:QT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ji;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fi(E,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let x=this.type;this.render=function(P,B,X){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||P.length===0)return;P.type===ky&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=zc);const T=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Da),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=x!==this.type;Y&&B.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(le=>le.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,le=P.length;ae<le;ae++){const F=P[ae],k=F.shadow;if(k===void 0){mt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const J=k.getFrameExtents();if(l.multiply(J),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/J.x),l.x=c.x*J.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/J.y),l.y=c.y*J.y,k.mapSize.y=c.y)),k.map===null||Y===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Wo){if(F.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Wi(l.x,l.y,{format:jr,type:Ua,minFilter:zn,magFilter:zn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new il(l.x,l.y,Xi),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=La,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn}else{F.isPointLight?(k.map=new p_(l.x),k.map.depthTexture=new hb(l.x,Ki)):(k.map=new Wi(l.x,l.y),k.map.depthTexture=new il(l.x,l.y,Ki)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=La;const _e=r.state.buffers.depth.getReversed();this.type===zc?(k.map.depthTexture.compareFunction=_e?Xh:kh,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn)}k.camera.updateProjectionMatrix()}const be=k.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<be;_e++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(k.map),r.clear());const z=k.getViewport(_e);d.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),q.viewport(d)}if(F.isPointLight){const z=k.camera,te=k.matrix,me=F.distance||z.far;me!==z.far&&(z.far=me,z.updateProjectionMatrix()),qo.setFromMatrixPosition(F.matrixWorld),z.position.copy(qo),Bd.copy(z.position),Bd.add(JT[_e]),z.up.copy($T[_e]),z.lookAt(Bd),z.updateMatrixWorld(),te.makeTranslation(-qo.x,-qo.y,-qo.z),Ov.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ov,z.coordinateSystem,z.reversedDepth)}else k.updateMatrices(F);s=k.getFrustum(),U(B,X,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Wo&&N(k,X),k.needsUpdate=!1}x=this.type,b.needsUpdate=!1,r.setRenderTarget(T,R,H)};function N(P,B){const X=t.update(A);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(l.x,l.y,{format:jr,type:Ua})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(B,null,X,_,A,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(B,null,X,S,A,null)}function D(P,B,X,T){let R=null;const H=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=R.uuid,Y=B.uuid;let ae=p[q];ae===void 0&&(ae={},p[q]=ae);let le=ae[Y];le===void 0&&(le=R.clone(),ae[Y]=le,B.addEventListener("dispose",L)),R=le}if(R.visible=B.visible,R.wireframe=B.wireframe,T===Wo?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=r.properties.get(R);q.light=X}return R}function U(P,B,X,T,R){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Wo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const Y=t.update(P),ae=P.material;if(Array.isArray(ae)){const le=Y.groups;for(let F=0,k=le.length;F<k;F++){const J=le[F],be=ae[J.materialIndex];if(be&&be.visible){const _e=D(P,be,T,R);P.onBeforeShadow(r,P,B,X,Y,_e,J),r.renderBufferDirect(X,null,Y,_e,P,J),P.onAfterShadow(r,P,B,X,Y,_e,J)}}}else if(ae.visible){const le=D(P,ae,T,R);P.onBeforeShadow(r,P,B,X,Y,le,null),r.renderBufferDirect(X,null,Y,le,P,null),P.onAfterShadow(r,P,B,X,Y,le,null)}}const q=P.children;for(let Y=0,ae=q.length;Y<ae;Y++)U(q[Y],B,X,T,R)}function L(P){P.target.removeEventListener("dispose",L);for(const X in p){const T=p[X],R=P.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}const tA={[Vd]:kd,[Xd]:Wd,[jd]:Yd,[kr]:qd,[kd]:Vd,[Wd]:Xd,[Yd]:jd,[qd]:kr};function nA(r,t){function i(){let W=!1;const Ie=new rn;let De=null;const Ve=new rn(0,0,0,0);return{setMask:function(Ae){De!==Ae&&!W&&(r.colorMask(Ae,Ae,Ae,Ae),De=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Se,Ue,ft,It){It===!0&&(Ae*=ft,Se*=ft,Ue*=ft),Ie.set(Ae,Se,Ue,ft),Ve.equals(Ie)===!1&&(r.clearColor(Ae,Se,Ue,ft),Ve.copy(Ie))},reset:function(){W=!1,De=null,Ve.set(-1,0,0,0)}}}function s(){let W=!1,Ie=!1,De=null,Ve=null,Ae=null;return{setReversed:function(Se){if(Ie!==Se){const Ue=t.get("EXT_clip_control");Se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return Ie},setTest:function(Se){Se?fe(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Se){De!==Se&&!W&&(r.depthMask(Se),De=Se)},setFunc:function(Se){if(Ie&&(Se=tA[Se]),Ve!==Se){switch(Se){case Vd:r.depthFunc(r.NEVER);break;case kd:r.depthFunc(r.ALWAYS);break;case Xd:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case jd:r.depthFunc(r.EQUAL);break;case qd:r.depthFunc(r.GEQUAL);break;case Wd:r.depthFunc(r.GREATER);break;case Yd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Ae!==Se&&(Ie&&(Se=1-Se),r.clearDepth(Se),Ae=Se)},reset:function(){W=!1,De=null,Ve=null,Ae=null,Ie=!1}}}function l(){let W=!1,Ie=null,De=null,Ve=null,Ae=null,Se=null,Ue=null,ft=null,It=null;return{setTest:function(Ct){W||(Ct?fe(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!W&&(r.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,xn,ui){(De!==Ct||Ve!==xn||Ae!==ui)&&(r.stencilFunc(Ct,xn,ui),De=Ct,Ve=xn,Ae=ui)},setOp:function(Ct,xn,ui){(Se!==Ct||Ue!==xn||ft!==ui)&&(r.stencilOp(Ct,xn,ui),Se=Ct,Ue=xn,ft=ui)},setLocked:function(Ct){W=Ct},setClear:function(Ct){It!==Ct&&(r.clearStencil(Ct),It=Ct)},reset:function(){W=!1,Ie=null,De=null,Ve=null,Ae=null,Se=null,Ue=null,ft=null,It=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,A=!1,b=null,x=null,N=null,D=null,U=null,L=null,P=null,B=new zt(0,0,0),X=0,T=!1,R=null,H=null,q=null,Y=null,ae=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=k>=2);let be=null,_e={};const z=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),me=new rn().fromArray(z),Ce=new rn().fromArray(te);function ze(W,Ie,De,Ve){const Ae=new Uint8Array(4),Se=r.createTexture();r.bindTexture(W,Se),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ue=0;Ue<De;Ue++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Ie+Ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Se}const ee={};ee[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(r.DEPTH_TEST),d.setFunc(kr),lt(!1),jt(B0),fe(r.CULL_FACE),ot(Da);function fe(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function Te(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Ee(W,Ie){return g[W]!==Ie?(r.bindFramebuffer(W,Ie),g[W]=Ie,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ie),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ne(W,Ie){let De=S,Ve=!1;if(W){De=_.get(Ie),De===void 0&&(De=[],_.set(Ie,De));const Ae=W.textures;if(De.length!==Ae.length||De[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Ue=Ae.length;Se<Ue;Se++)De[Se]=r.COLOR_ATTACHMENT0+Se;De.length=Ae.length,Ve=!0}}else De[0]!==r.BACK&&(De[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(De)}function Je(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const ht={[Hs]:r.FUNC_ADD,[jy]:r.FUNC_SUBTRACT,[qy]:r.FUNC_REVERSE_SUBTRACT};ht[Wy]=r.MIN,ht[Yy]=r.MAX;const st={[Zy]:r.ZERO,[Ky]:r.ONE,[Qy]:r.SRC_COLOR,[Hd]:r.SRC_ALPHA,[iS]:r.SRC_ALPHA_SATURATE,[tS]:r.DST_COLOR,[$y]:r.DST_ALPHA,[Jy]:r.ONE_MINUS_SRC_COLOR,[Gd]:r.ONE_MINUS_SRC_ALPHA,[nS]:r.ONE_MINUS_DST_COLOR,[eS]:r.ONE_MINUS_DST_ALPHA,[aS]:r.CONSTANT_COLOR,[sS]:r.ONE_MINUS_CONSTANT_COLOR,[rS]:r.CONSTANT_ALPHA,[oS]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(W,Ie,De,Ve,Ae,Se,Ue,ft,It,Ct){if(W===Da){A===!0&&(Te(r.BLEND),A=!1);return}if(A===!1&&(fe(r.BLEND),A=!0),W!==Xy){if(W!==b||Ct!==T){if((x!==Hs||U!==Hs)&&(r.blendEquation(r.FUNC_ADD),x=Hs,U=Hs),Ct)switch(W){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case H0:r.blendFunc(r.ONE,r.ONE);break;case G0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case V0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",W);break}else switch(W){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case H0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case G0:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case V0:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",W);break}N=null,D=null,L=null,P=null,B.set(0,0,0),X=0,b=W,T=Ct}return}Ae=Ae||Ie,Se=Se||De,Ue=Ue||Ve,(Ie!==x||Ae!==U)&&(r.blendEquationSeparate(ht[Ie],ht[Ae]),x=Ie,U=Ae),(De!==N||Ve!==D||Se!==L||Ue!==P)&&(r.blendFuncSeparate(st[De],st[Ve],st[Se],st[Ue]),N=De,D=Ve,L=Se,P=Ue),(ft.equals(B)===!1||It!==X)&&(r.blendColor(ft.r,ft.g,ft.b,It),B.copy(ft),X=It),b=W,T=!1}function vt(W,Ie){W.side===Ca?Te(r.CULL_FACE):fe(r.CULL_FACE);let De=W.side===Qn;Ie&&(De=!De),lt(De),W.blending===Gr&&W.transparent===!1?ot(Da):ot(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ve=W.stencilWrite;h.setTest(Ve),Ve&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){R!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),R=W)}function jt(W){W!==Gy?(fe(r.CULL_FACE),W!==H&&(W===B0?r.cullFace(r.BACK):W===Vy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),H=W}function V(W){W!==q&&(F&&r.lineWidth(W),q=W)}function Ut(W,Ie,De){W?(fe(r.POLYGON_OFFSET_FILL),(Y!==Ie||ae!==De)&&(r.polygonOffset(Ie,De),Y=Ie,ae=De)):Te(r.POLYGON_OFFSET_FILL)}function ut(W){W?fe(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function _t(W){W===void 0&&(W=r.TEXTURE0+le-1),be!==W&&(r.activeTexture(W),be=W)}function je(W,Ie,De){De===void 0&&(be===null?De=r.TEXTURE0+le-1:De=be);let Ve=_e[De];Ve===void 0&&(Ve={type:void 0,texture:void 0},_e[De]=Ve),(Ve.type!==W||Ve.texture!==Ie)&&(be!==De&&(r.activeTexture(De),be=De),r.bindTexture(W,Ie||ee[W]),Ve.type=W,Ve.texture=Ie)}function I(){const W=_e[be];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function ge(){try{r.texSubImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Me(){try{r.texSubImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Le(){try{r.texStorage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function We(){try{r.texStorage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function tt(){try{r.texImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Re(){try{r.texImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function we(W){me.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function ke(W){Ce.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function He(W,Ie){let De=p.get(Ie);De===void 0&&(De=new WeakMap,p.set(Ie,De));let Ve=De.get(W);Ve===void 0&&(Ve=r.getUniformBlockIndex(Ie,W.name),De.set(W,Ve))}function Pe(W,Ie){const Ve=p.get(Ie).get(W);m.get(Ie)!==Ve&&(r.uniformBlockBinding(Ie,Ve,W.__bindingPointIndex),m.set(Ie,Ve))}function xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},be=null,_e={},g={},_=new WeakMap,S=[],E=null,A=!1,b=null,x=null,N=null,D=null,U=null,L=null,P=null,B=new zt(0,0,0),X=0,T=!1,R=null,H=null,q=null,Y=null,ae=null,me.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:Te,bindFramebuffer:Ee,drawBuffers:Ne,useProgram:Je,setBlending:ot,setMaterial:vt,setFlipSided:lt,setCullFace:jt,setLineWidth:V,setPolygonOffset:Ut,setScissorTest:ut,activeTexture:_t,bindTexture:je,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:Z,texImage2D:tt,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Le,texStorage3D:We,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:$e,scissor:we,viewport:ke,reset:xt}}function iA(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,M){return S?new OffscreenCanvas(I,M):qc("canvas")}function A(I,M,Z){let ge=1;const Me=je(I);if((Me.width>Z||Me.height>Z)&&(ge=Z/Math.max(Me.width,Me.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(ge*Me.width),$e=Math.floor(ge*Me.height);g===void 0&&(g=E(de,$e));const Le=M?E(de,$e):g;return Le.width=de,Le.height=$e,Le.getContext("2d").drawImage(I,0,0,de,$e),mt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+de+"x"+$e+")."),Le}else return"data"in I&&mt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function b(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(I,M,Z,ge,Me=!1){if(I!==null){if(r[I]!==void 0)return r[I];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=M;if(M===r.RED&&(Z===r.FLOAT&&(de=r.R32F),Z===r.HALF_FLOAT&&(de=r.R16F),Z===r.UNSIGNED_BYTE&&(de=r.R8)),M===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.R8UI),Z===r.UNSIGNED_SHORT&&(de=r.R16UI),Z===r.UNSIGNED_INT&&(de=r.R32UI),Z===r.BYTE&&(de=r.R8I),Z===r.SHORT&&(de=r.R16I),Z===r.INT&&(de=r.R32I)),M===r.RG&&(Z===r.FLOAT&&(de=r.RG32F),Z===r.HALF_FLOAT&&(de=r.RG16F),Z===r.UNSIGNED_BYTE&&(de=r.RG8)),M===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RG8UI),Z===r.UNSIGNED_SHORT&&(de=r.RG16UI),Z===r.UNSIGNED_INT&&(de=r.RG32UI),Z===r.BYTE&&(de=r.RG8I),Z===r.SHORT&&(de=r.RG16I),Z===r.INT&&(de=r.RG32I)),M===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Z===r.UNSIGNED_INT&&(de=r.RGB32UI),Z===r.BYTE&&(de=r.RGB8I),Z===r.SHORT&&(de=r.RGB16I),Z===r.INT&&(de=r.RGB32I)),M===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Z===r.UNSIGNED_INT&&(de=r.RGBA32UI),Z===r.BYTE&&(de=r.RGBA8I),Z===r.SHORT&&(de=r.RGBA16I),Z===r.INT&&(de=r.RGBA32I)),M===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),M===r.RGBA){const $e=Me?Xc:Lt.getTransfer(ge);Z===r.FLOAT&&(de=r.RGBA32F),Z===r.HALF_FLOAT&&(de=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(de=$e===Xt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function U(I,M){let Z;return I?M===null||M===Ki||M===el?Z=r.DEPTH24_STENCIL8:M===Xi?Z=r.DEPTH32F_STENCIL8:M===$o&&(Z=r.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===el?Z=r.DEPTH_COMPONENT24:M===Xi?Z=r.DEPTH_COMPONENT32F:M===$o&&(Z=r.DEPTH_COMPONENT16),Z}function L(I,M){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function P(I){const M=I.target;M.removeEventListener("dispose",P),X(M),M.isVideoTexture&&v.delete(M)}function B(I){const M=I.target;M.removeEventListener("dispose",B),R(M)}function X(I){const M=s.get(I);if(M.__webglInit===void 0)return;const Z=I.source,ge=_.get(Z);if(ge){const Me=ge[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&T(I),Object.keys(ge).length===0&&_.delete(Z)}s.remove(I)}function T(I){const M=s.get(I);r.deleteTexture(M.__webglTexture);const Z=I.source,ge=_.get(Z);delete ge[M.__cacheKey],d.memory.textures--}function R(I){const M=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let Me=0;Me<M.__webglFramebuffer[ge].length;Me++)r.deleteFramebuffer(M.__webglFramebuffer[ge][Me]);else r.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[ge]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=I.textures;for(let ge=0,Me=Z.length;ge<Me;ge++){const de=s.get(Z[ge]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),d.memory.textures--),s.remove(Z[ge])}s.remove(I)}let H=0;function q(){H=0}function Y(){const I=H;return I>=l.maxTextures&&mt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function ae(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function le(I,M){const Z=s.get(I);if(I.isVideoTexture&&ut(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const ge=I.image;if(ge===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,I,M);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+M)}function F(I,M){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){ee(Z,I,M);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+M)}function k(I,M){const Z=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){ee(Z,I,M);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+M)}function J(I,M){const Z=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){fe(Z,I,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+M)}const be={[Qd]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[Jd]:r.MIRRORED_REPEAT},_e={[Nn]:r.NEAREST,[uS]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},z={[pS]:r.NEVER,[xS]:r.ALWAYS,[mS]:r.LESS,[kh]:r.LEQUAL,[gS]:r.EQUAL,[Xh]:r.GEQUAL,[vS]:r.GREATER,[_S]:r.NOTEQUAL};function te(I,M){if(M.type===Xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===ud||M.magFilter===gc||M.magFilter===Vs||M.minFilter===zn||M.minFilter===ud||M.minFilter===gc||M.minFilter===Vs)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,be[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,be[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,be[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,_e[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==gc&&M.minFilter!==Vs||M.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function me(I,M){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",P));const ge=M.source;let Me=_.get(ge);Me===void 0&&(Me={},_.set(ge,Me));const de=ae(M);if(de!==I.__cacheKey){Me[de]===void 0&&(Me[de]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),Me[de].usedTimes++;const $e=Me[I.__cacheKey];$e!==void 0&&(Me[I.__cacheKey].usedTimes--,$e.usedTimes===0&&T(M)),I.__cacheKey=de,I.__webglTexture=Me[de].texture}return Z}function Ce(I,M,Z){return Math.floor(Math.floor(I/Z)/M)}function ze(I,M,Z,ge){const de=I.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Z,ge,M.data);else{de.sort((Re,we)=>Re.start-we.start);let $e=0;for(let Re=1;Re<de.length;Re++){const we=de[$e],ke=de[Re],He=we.start+we.count,Pe=Ce(ke.start,M.width,4),xt=Ce(we.start,M.width,4);ke.start<=He+1&&Pe===xt&&Ce(ke.start+ke.count-1,M.width,4)===Pe?we.count=Math.max(we.count,ke.start+ke.count-we.start):(++$e,de[$e]=ke)}de.length=$e+1;const Le=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Re=0,we=de.length;Re<we;Re++){const ke=de[Re],He=Math.floor(ke.start/4),Pe=Math.ceil(ke.count/4),xt=He%M.width,W=Math.floor(He/M.width),Ie=Pe,De=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,xt,W,Ie,De,Z,ge,M.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,tt)}}function ee(I,M,Z){let ge=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=r.TEXTURE_3D);const Me=me(I,M),de=M.source;i.bindTexture(ge,I.__webglTexture,r.TEXTURE0+Z);const $e=s.get(de);if(de.version!==$e.__version||Me===!0){i.activeTexture(r.TEXTURE0+Z);const Le=Lt.getPrimaries(Lt.workingColorSpace),We=M.colorSpace===fs?null:Lt.getPrimaries(M.colorSpace),tt=M.colorSpace===fs||Le===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Re=A(M.image,!1,l.maxTextureSize);Re=_t(M,Re);const we=c.convert(M.format,M.colorSpace),ke=c.convert(M.type);let He=D(M.internalFormat,we,ke,M.colorSpace,M.isVideoTexture);te(ge,M);let Pe;const xt=M.mipmaps,W=M.isVideoTexture!==!0,Ie=$e.__version===void 0||Me===!0,De=de.dataReady,Ve=L(M,Re);if(M.isDepthTexture)He=U(M.format===ks,M.type),Ie&&(W?i.texStorage2D(r.TEXTURE_2D,1,He,Re.width,Re.height):i.texImage2D(r.TEXTURE_2D,0,He,Re.width,Re.height,0,we,ke,null));else if(M.isDataTexture)if(xt.length>0){W&&Ie&&i.texStorage2D(r.TEXTURE_2D,Ve,He,xt[0].width,xt[0].height);for(let Ae=0,Se=xt.length;Ae<Se;Ae++)Pe=xt[Ae],W?De&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,we,ke,Pe.data):i.texImage2D(r.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,we,ke,Pe.data);M.generateMipmaps=!1}else W?(Ie&&i.texStorage2D(r.TEXTURE_2D,Ve,He,Re.width,Re.height),De&&ze(M,Re,we,ke)):i.texImage2D(r.TEXTURE_2D,0,He,Re.width,Re.height,0,we,ke,Re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,He,xt[0].width,xt[0].height,Re.depth);for(let Ae=0,Se=xt.length;Ae<Se;Ae++)if(Pe=xt[Ae],M.format!==Pi)if(we!==null)if(W){if(De)if(M.layerUpdates.size>0){const Ue=fv(Pe.width,Pe.height,M.format,M.type);for(const ft of M.layerUpdates){const It=Pe.data.subarray(ft*Ue/Pe.data.BYTES_PER_ELEMENT,(ft+1)*Ue/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,ft,Pe.width,Pe.height,1,we,It)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,Re.depth,we,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,He,Pe.width,Pe.height,Re.depth,0,Pe.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?De&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,Re.depth,we,ke,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ae,He,Pe.width,Pe.height,Re.depth,0,we,ke,Pe.data)}else{W&&Ie&&i.texStorage2D(r.TEXTURE_2D,Ve,He,xt[0].width,xt[0].height);for(let Ae=0,Se=xt.length;Ae<Se;Ae++)Pe=xt[Ae],M.format!==Pi?we!==null?W?De&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,we,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,Pe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?De&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,we,ke,Pe.data):i.texImage2D(r.TEXTURE_2D,Ae,He,Pe.width,Pe.height,0,we,ke,Pe.data)}else if(M.isDataArrayTexture)if(W){if(Ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,He,Re.width,Re.height,Re.depth),De)if(M.layerUpdates.size>0){const Ae=fv(Re.width,Re.height,M.format,M.type);for(const Se of M.layerUpdates){const Ue=Re.data.subarray(Se*Ae/Re.data.BYTES_PER_ELEMENT,(Se+1)*Ae/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Re.width,Re.height,1,we,ke,Ue)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,we,ke,Re.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Re.width,Re.height,Re.depth,0,we,ke,Re.data);else if(M.isData3DTexture)W?(Ie&&i.texStorage3D(r.TEXTURE_3D,Ve,He,Re.width,Re.height,Re.depth),De&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,we,ke,Re.data)):i.texImage3D(r.TEXTURE_3D,0,He,Re.width,Re.height,Re.depth,0,we,ke,Re.data);else if(M.isFramebufferTexture){if(Ie)if(W)i.texStorage2D(r.TEXTURE_2D,Ve,He,Re.width,Re.height);else{let Ae=Re.width,Se=Re.height;for(let Ue=0;Ue<Ve;Ue++)i.texImage2D(r.TEXTURE_2D,Ue,He,Ae,Se,0,we,ke,null),Ae>>=1,Se>>=1}}else if(xt.length>0){if(W&&Ie){const Ae=je(xt[0]);i.texStorage2D(r.TEXTURE_2D,Ve,He,Ae.width,Ae.height)}for(let Ae=0,Se=xt.length;Ae<Se;Ae++)Pe=xt[Ae],W?De&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,we,ke,Pe):i.texImage2D(r.TEXTURE_2D,Ae,He,we,ke,Pe);M.generateMipmaps=!1}else if(W){if(Ie){const Ae=je(Re);i.texStorage2D(r.TEXTURE_2D,Ve,He,Ae.width,Ae.height)}De&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we,ke,Re)}else i.texImage2D(r.TEXTURE_2D,0,He,we,ke,Re);b(M)&&x(ge),$e.__version=de.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function fe(I,M,Z){if(M.image.length!==6)return;const ge=me(I,M),Me=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Z);const de=s.get(Me);if(Me.version!==de.__version||ge===!0){i.activeTexture(r.TEXTURE0+Z);const $e=Lt.getPrimaries(Lt.workingColorSpace),Le=M.colorSpace===fs?null:Lt.getPrimaries(M.colorSpace),We=M.colorSpace===fs||$e===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,we=[];for(let Se=0;Se<6;Se++)!tt&&!Re?we[Se]=A(M.image[Se],!0,l.maxCubemapSize):we[Se]=Re?M.image[Se].image:M.image[Se],we[Se]=_t(M,we[Se]);const ke=we[0],He=c.convert(M.format,M.colorSpace),Pe=c.convert(M.type),xt=D(M.internalFormat,He,Pe,M.colorSpace),W=M.isVideoTexture!==!0,Ie=de.__version===void 0||ge===!0,De=Me.dataReady;let Ve=L(M,ke);te(r.TEXTURE_CUBE_MAP,M);let Ae;if(tt){W&&Ie&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,xt,ke.width,ke.height);for(let Se=0;Se<6;Se++){Ae=we[Se].mipmaps;for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];M.format!==Pi?He!==null?W?De&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,ft.width,ft.height,He,ft.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,xt,ft.width,ft.height,0,ft.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?De&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,ft.width,ft.height,He,Pe,ft.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,xt,ft.width,ft.height,0,He,Pe,ft.data)}}}else{if(Ae=M.mipmaps,W&&Ie){Ae.length>0&&Ve++;const Se=je(we[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,xt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){W?De&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we[Se].width,we[Se].height,He,Pe,we[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xt,we[Se].width,we[Se].height,0,He,Pe,we[Se].data);for(let Ue=0;Ue<Ae.length;Ue++){const It=Ae[Ue].image[Se].image;W?De&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,It.width,It.height,He,Pe,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,xt,It.width,It.height,0,He,Pe,It.data)}}else{W?De&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,He,Pe,we[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xt,He,Pe,we[Se]);for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];W?De&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,He,Pe,ft.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,xt,He,Pe,ft.image[Se])}}}b(M)&&x(r.TEXTURE_CUBE_MAP),de.__version=Me.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Te(I,M,Z,ge,Me,de){const $e=c.convert(Z.format,Z.colorSpace),Le=c.convert(Z.type),We=D(Z.internalFormat,$e,Le,Z.colorSpace),tt=s.get(M),Re=s.get(Z);if(Re.__renderTarget=M,!tt.__hasExternalTextures){const we=Math.max(1,M.width>>de),ke=Math.max(1,M.height>>de);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?i.texImage3D(Me,de,We,we,ke,M.depth,0,$e,Le,null):i.texImage2D(Me,de,We,we,ke,0,$e,Le,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),Ut(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Me,Re.__webglTexture,0,V(M)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Me,Re.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(I,M,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const ge=M.depthTexture,Me=ge&&ge.isDepthTexture?ge.type:null,de=U(M.stencilBuffer,Me),$e=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ut(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),de,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,I)}else{const ge=M.textures;for(let Me=0;Me<ge.length;Me++){const de=ge[Me],$e=c.convert(de.format,de.colorSpace),Le=c.convert(de.type),We=D(de.internalFormat,$e,Le,de.colorSpace);Ut(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(M),We,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(M),We,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,We,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(I,M,Z){const ge=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(M.depthTexture);if(Me.__renderTarget=M,(!Me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ge){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),te(r.TEXTURE_CUBE_MAP,M.depthTexture);const tt=c.convert(M.depthTexture.format),Re=c.convert(M.depthTexture.type);let we;M.depthTexture.format===La?we=r.DEPTH_COMPONENT24:M.depthTexture.format===ks&&(we=r.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,we,M.width,M.height,0,tt,Re,null)}}else le(M.depthTexture,0);const de=Me.__webglTexture,$e=V(M),Le=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,We=M.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===La)Ut(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Le,de,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,We,Le,de,0);else if(M.depthTexture.format===ks)Ut(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Le,de,0,$e):r.framebufferTexture2D(r.FRAMEBUFFER,We,Le,de,0);else throw new Error("Unknown depthTexture format")}function Je(I){const M=s.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",Me)};ge.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=ge}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)Ne(M.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?Ne(M.__webglFramebuffer[0],I,0):Ne(M.__webglFramebuffer,I,0)}else if(Z){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=r.createRenderbuffer(),Ee(M.__webglDepthbuffer[ge],I,!1);else{const Me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ee(M.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(I,M,Z){const ge=s.get(I);M!==void 0&&Te(ge.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Je(I)}function st(I){const M=I.texture,Z=s.get(I),ge=s.get(M);I.addEventListener("dispose",B);const Me=I.textures,de=I.isWebGLCubeRenderTarget===!0,$e=Me.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=M.version,d.memory.textures++),de){Z.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[Le]=[];for(let We=0;We<M.mipmaps.length;We++)Z.__webglFramebuffer[Le][We]=r.createFramebuffer()}else Z.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Le=0;Le<M.mipmaps.length;Le++)Z.__webglFramebuffer[Le]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if($e)for(let Le=0,We=Me.length;Le<We;Le++){const tt=s.get(Me[Le]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),d.memory.textures++)}if(I.samples>0&&Ut(I)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Le=0;Le<Me.length;Le++){const We=Me[Le];Z.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Le]);const tt=c.convert(We.format,We.colorSpace),Re=c.convert(We.type),we=D(We.internalFormat,tt,Re,We.colorSpace,I.isXRRenderTarget===!0),ke=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,we,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(Z.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),te(r.TEXTURE_CUBE_MAP,M);for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Te(Z.__webglFramebuffer[Le][We],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,We);else Te(Z.__webglFramebuffer[Le],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);b(M)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Le=0,We=Me.length;Le<We;Le++){const tt=Me[Le],Re=s.get(tt);let we=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,Re.__webglTexture),te(we,tt),Te(Z.__webglFramebuffer,I,tt,r.COLOR_ATTACHMENT0+Le,we,0),b(tt)&&x(we)}i.unbindTexture()}else{let Le=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,ge.__webglTexture),te(Le,M),M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Te(Z.__webglFramebuffer[We],I,M,r.COLOR_ATTACHMENT0,Le,We);else Te(Z.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,Le,0);b(M)&&x(Le),i.unbindTexture()}I.depthBuffer&&Je(I)}function ot(I){const M=I.textures;for(let Z=0,ge=M.length;Z<ge;Z++){const Me=M[Z];if(b(Me)){const de=N(I),$e=s.get(Me).__webglTexture;i.bindTexture(de,$e),x(de),i.unbindTexture()}}}const vt=[],lt=[];function jt(I){if(I.samples>0){if(Ut(I)===!1){const M=I.textures,Z=I.width,ge=I.height;let Me=r.COLOR_BUFFER_BIT;const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=s.get(I),Le=M.length>1;if(Le)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const We=I.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[tt]);const Re=s.get(M[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,Me,r.NEAREST),m===!0&&(vt.length=0,lt.length=0,vt.push(r.COLOR_ATTACHMENT0+tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push(de),lt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,$e.__webglColorRenderbuffer[tt]);const Re=s.get(M[tt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,Re,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function V(I){return Math.min(l.maxSamples,I.samples)}function Ut(I){const M=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(I){const M=d.render.frame;v.get(I)!==M&&(v.set(I,M),I.update())}function _t(I,M){const Z=I.colorSpace,ge=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==qr&&Z!==fs&&(Lt.getTransfer(Z)===Xt?(ge!==Pi||Me!==Mi)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",Z)),M}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=le,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=ht,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function aA(r,t){function i(s,l=fs){let c;const d=Lt.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===Ih)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===e_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===t_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Jv)return r.BYTE;if(s===$v)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===zh)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ua)return r.HALF_FLOAT;if(s===n_)return r.ALPHA;if(s===i_)return r.RGB;if(s===Pi)return r.RGBA;if(s===La)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===a_)return r.RED;if(s===Hh)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===Gh)return r.RG_INTEGER;if(s===Vh)return r.RGBA_INTEGER;if(s===Ic||s===Bc||s===Hc||s===Gc)if(d===Xt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===eh||s===th||s===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ih||s===ah)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lh)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh||s===bh||s===Mh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh||s===Th||s===Ah)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Eh)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===Rh||s===wh||s===Dh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new g_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qi({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new Qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends Yr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,_=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",b=new oA,x={},N=i.getContextAttributes();let D=null,U=null;const L=[],P=[],B=new Ht;let X=null;const T=new bi;T.viewport=new rn;const R=new bi;R.viewport=new rn;const H=[T,R],q=new vb;let Y=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=L[ee];return fe===void 0&&(fe=new Ud,L[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=L[ee];return fe===void 0&&(fe=new Ud,L[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=L[ee];return fe===void 0&&(fe=new Ud,L[ee]=fe),fe.getHandSpace()};function le(ee){const fe=P.indexOf(ee.inputSource);if(fe===-1)return;const Te=L[fe];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,p||d),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",k);for(let ee=0;ee<L.length;ee++){const fe=P[ee];fe!==null&&(P[ee]=null,L[ee].disconnect(fe))}Y=null,ae=null,b.reset();for(const ee in x)delete x[ee];t.setRenderTarget(D),S=null,_=null,g=null,l=null,U=null,ze.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,s.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",F),l.addEventListener("inputsourceschange",k),N.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ee=null,Ne=null;N.depth&&(Ne=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=N.stencil?ks:La,Ee=N.stencil?el:Ki);const Je={colorFormat:i.RGBA8,depthFormat:Ne,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(Je),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Wi(_.textureWidth,_.textureHeight,{format:Pi,type:Mi,depthTexture:new il(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Wi(S.framebufferWidth,S.framebufferHeight,{format:Pi,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(ee){for(let fe=0;fe<ee.removed.length;fe++){const Te=ee.removed[fe],Ee=P.indexOf(Te);Ee>=0&&(P[Ee]=null,L[Ee].disconnect(Te))}for(let fe=0;fe<ee.added.length;fe++){const Te=ee.added[fe];let Ee=P.indexOf(Te);if(Ee===-1){for(let Je=0;Je<L.length;Je++)if(Je>=P.length){P.push(Te),Ee=Je;break}else if(P[Je]===null){P[Je]=Te,Ee=Je;break}if(Ee===-1)break}const Ne=L[Ee];Ne&&Ne.connect(Te)}}const J=new oe,be=new oe;function _e(ee,fe,Te){J.setFromMatrixPosition(fe.matrixWorld),be.setFromMatrixPosition(Te.matrixWorld);const Ee=J.distanceTo(be),Ne=fe.projectionMatrix.elements,Je=Te.projectionMatrix.elements,ht=Ne[14]/(Ne[10]-1),st=Ne[14]/(Ne[10]+1),ot=(Ne[9]+1)/Ne[5],vt=(Ne[9]-1)/Ne[5],lt=(Ne[8]-1)/Ne[0],jt=(Je[8]+1)/Je[0],V=ht*lt,Ut=ht*jt,ut=Ee/(-lt+jt),_t=ut*-lt;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(_t),ee.translateZ(ut),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ne[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=ht+ut,I=st+ut,M=V-_t,Z=Ut+(Ee-_t),ge=ot*st/I*je,Me=vt*st/I*je;ee.projectionMatrix.makePerspective(M,Z,ge,Me,je,I),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function z(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let fe=ee.near,Te=ee.far;b.texture!==null&&(b.depthNear>0&&(fe=b.depthNear),b.depthFar>0&&(Te=b.depthFar)),q.near=R.near=T.near=fe,q.far=R.far=T.far=Te,(Y!==q.near||ae!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),Y=q.near,ae=q.far),q.layers.mask=ee.layers.mask|6,T.layers.mask=q.layers.mask&3,R.layers.mask=q.layers.mask&5;const Ee=ee.parent,Ne=q.cameras;z(q,Ee);for(let Je=0;Je<Ne.length;Je++)z(Ne[Je],Ee);Ne.length===2?_e(q,T,R):q.projectionMatrix.copy(T.projectionMatrix),te(ee,q,Ee)};function te(ee,fe,Te){Te===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=nl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(ee){m=ee,_!==null&&(_.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(q)},this.getCameraTexture=function(ee){return x[ee]};let me=null;function Ce(ee,fe){if(v=fe.getViewerPose(p||d),E=fe,v!==null){const Te=v.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Ee=!1;Te.length!==q.cameras.length&&(q.cameras.length=0,Ee=!0);for(let st=0;st<Te.length;st++){const ot=Te[st];let vt=null;if(S!==null)vt=S.getViewport(ot);else{const jt=g.getViewSubImage(_,ot);vt=jt.viewport,st===0&&(t.setRenderTargetTextures(U,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(U))}let lt=H[st];lt===void 0&&(lt=new bi,lt.layers.enable(st),lt.viewport=new rn,H[st]=lt),lt.matrix.fromArray(ot.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ot.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(vt.x,vt.y,vt.width,vt.height),st===0&&(q.matrix.copy(lt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ee===!0&&q.cameras.push(lt)}const Ne=l.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const st=g.getDepthInformation(Te[0]);st&&st.isValid&&st.texture&&b.init(st,l.renderState)}if(Ne&&Ne.includes("camera-access")&&A){t.state.unbindTexture(),g=s.getBinding();for(let st=0;st<Te.length;st++){const ot=Te[st].camera;if(ot){let vt=x[ot];vt||(vt=new g_,x[ot]=vt);const lt=g.getCameraImage(ot);vt.sourceTexture=lt}}}}for(let Te=0;Te<L.length;Te++){const Ee=P[Te],Ne=L[Te];Ee!==null&&Ne!==void 0&&Ne.update(Ee,fe,p||d)}me&&me(ee,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const ze=new __;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}}const Is=new Oa,cA=new dn;function uA(r,t){function i(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function s(b,x){x.color.getRGB(b.fogColor.value,f_(r)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function l(b,x,N,D,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),v(b,x)):x.isMeshStandardMaterial?(c(b,x),_(b,x),x.isMeshPhysicalMaterial&&S(b,x,U)):x.isMeshMatcapMaterial?(c(b,x),E(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),A(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(d(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?m(b,x,N,D):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,i(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Qn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,i(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Qn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,i(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,i(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const N=t.get(x),D=N.envMap,U=N.envMapRotation;D&&(b.envMap.value=D,Is.copy(U),Is.x*=-1,Is.y*=-1,Is.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),b.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Is)),b.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,b.aoMapTransform))}function d(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,N,D){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*N,b.scale.value=D*.5,x.map&&(b.map.value=x.map,i(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function _(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,N){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=N.texture,b.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,x){x.matcap&&(b.matcap.value=x.matcap)}function A(b,x){const N=t.get(x).light;b.referencePosition.value.setFromMatrixPosition(N.matrixWorld),b.nearDistance.value=N.shadow.camera.near,b.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fA(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const U=D.program;s.uniformBlockBinding(N,U)}function p(N,D){let U=l[N.id];U===void 0&&(E(N),U=v(N),l[N.id]=U,N.addEventListener("dispose",b));const L=D.program;s.updateUBOMapping(N,L);const P=t.render.frame;c[N.id]!==P&&(_(N),c[N.id]=P)}function v(N){const D=g();N.__bindingPointIndex=D;const U=r.createBuffer(),L=N.__size,P=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,U),U}function g(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const D=l[N.id],U=N.uniforms,L=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let P=0,B=U.length;P<B;P++){const X=Array.isArray(U[P])?U[P]:[U[P]];for(let T=0,R=X.length;T<R;T++){const H=X[T];if(S(H,P,T,L)===!0){const q=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let ae=0;for(let le=0;le<Y.length;le++){const F=Y[le],k=A(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,q+ae,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ae),ae+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,D,U,L){const P=N.value,B=D+"_"+U;if(L[B]===void 0)return typeof P=="number"||typeof P=="boolean"?L[B]=P:L[B]=P.clone(),!0;{const X=L[B];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return L[B]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function E(N){const D=N.uniforms;let U=0;const L=16;for(let B=0,X=D.length;B<X;B++){const T=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,H=T.length;R<H;R++){const q=T[R],Y=Array.isArray(q.value)?q.value:[q.value];for(let ae=0,le=Y.length;ae<le;ae++){const F=Y[ae],k=A(F),J=U%L,be=J%k.boundary,_e=J+be;U+=be,_e!==0&&L-_e<k.storage&&(U+=L-_e),q.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=U,U+=k.storage}}}const P=U%L;return P>0&&(U+=L-P),N.__size=U,N.__cache={},this}function A(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):mt("WebGLRenderer: Unsupported uniform value type.",N),D}function b(N){const D=N.target;D.removeEventListener("dispose",b);const U=d.indexOf(D.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const dA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function hA(){return Vi===null&&(Vi=new cb(dA,16,16,jr,Ua),Vi.name="DFG_LUT",Vi.minFilter=zn,Vi.magFilter=zn,Vi.wrapS=wa,Vi.wrapT=wa,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class pA{constructor(t={}){const{canvas:i=yS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Mi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const A=S,b=new Set([Vh,Gh,Hh]),x=new Set([Mi,Ki,$o,el,Ih,Bh]),N=new Uint32Array(4),D=new Int32Array(4);let U=null,L=null;const P=[],B=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=Si;let H=0,q=0,Y=null,ae=-1,le=null;const F=new rn,k=new rn;let J=null;const be=new zt(0);let _e=0,z=i.width,te=i.height,me=1,Ce=null,ze=null;const ee=new rn(0,0,z,te),fe=new rn(0,0,z,te);let Te=!1;const Ee=new m_;let Ne=!1,Je=!1;const ht=new dn,st=new oe,ot=new rn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function jt(){return Y===null?me:1}let V=s;function Ut(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",ft,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const K="webgl2";if(V=Ut(K,C),V===null)throw Ut(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ft("WebGLRenderer: "+C.message),C}let ut,_t,je,I,M,Z,ge,Me,de,$e,Le,We,tt,Re,we,ke,He,Pe,xt,W,Ie,De,Ve,Ae;function Se(){ut=new h1(V),ut.init(),De=new aA(V,ut),_t=new a1(V,ut,t,De),je=new nA(V,ut),_t.reversedDepthBuffer&&_&&je.buffers.depth.setReversed(!0),I=new g1(V),M=new GT,Z=new iA(V,ut,je,M,_t,De,I),ge=new r1(T),Me=new d1(T),de=new yb(V),Ve=new n1(V,de),$e=new p1(V,de,I,Ve),Le=new _1(V,$e,de,I),xt=new v1(V,_t,Z),ke=new s1(M),We=new HT(T,ge,Me,ut,_t,Ve,ke),tt=new uA(T,M),Re=new kT,we=new ZT(ut),Pe=new t1(T,ge,Me,je,Le,E,m),He=new eA(T,Le,_t),Ae=new fA(V,I,_t,je),W=new i1(V,ut,I),Ie=new m1(V,ut,I),I.programs=We.programs,T.capabilities=_t,T.extensions=ut,T.properties=M,T.renderLists=Re,T.shadowMap=He,T.state=je,T.info=I}Se(),A!==Mi&&(X=new y1(A,i.width,i.height,l,c));const Ue=new lA(T,V);this.xr=Ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(z,te,!1))},this.getSize=function(C){return C.set(z,te)},this.setSize=function(C,K,ce=!0){if(Ue.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,te=K,i.width=Math.floor(C*me),i.height=Math.floor(K*me),ce===!0&&(i.style.width=C+"px",i.style.height=K+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(z*me,te*me).floor()},this.setDrawingBufferSize=function(C,K,ce){z=C,te=K,me=ce,i.width=Math.floor(C*ce),i.height=Math.floor(K*ce),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(A===Mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,K,ce,se){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,K,ce,se),je.viewport(F.copy(ee).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,K,ce,se){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,K,ce,se),je.scissor(k.copy(fe).multiplyScalar(me).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){je.setScissorTest(Te=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ce=!0){let se=0;if(C){let $=!1;if(Y!==null){const Fe=Y.texture.format;$=b.has(Fe)}if($){const Fe=Y.texture.type,Xe=x.has(Fe),Be=Pe.getClearColor(),qe=Pe.getClearAlpha(),Ye=Be.r,it=Be.g,Ke=Be.b;Xe?(N[0]=Ye,N[1]=it,N[2]=Ke,N[3]=qe,V.clearBufferuiv(V.COLOR,0,N)):(D[0]=Ye,D[1]=it,D[2]=Ke,D[3]=qe,V.clearBufferiv(V.COLOR,0,D))}else se|=V.COLOR_BUFFER_BIT}K&&(se|=V.DEPTH_BUFFER_BIT),ce&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ft,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Pe.dispose(),Re.dispose(),we.dispose(),M.dispose(),ge.dispose(),Me.dispose(),Le.dispose(),Ve.dispose(),Ae.dispose(),We.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Vn),Ue.removeEventListener("sessionend",kn),Xn.stop()};function ft(C){C.preventDefault(),W0("WebGLRenderer: Context Lost."),R=!0}function It(){W0("WebGLRenderer: Context Restored."),R=!1;const C=I.autoReset,K=He.enabled,ce=He.autoUpdate,se=He.needsUpdate,$=He.type;Se(),I.autoReset=C,He.enabled=K,He.autoUpdate=ce,He.needsUpdate=se,He.type=$}function Ct(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xn(C){const K=C.target;K.removeEventListener("dispose",xn),ui(K)}function ui(C){hn(C),M.remove(C)}function hn(C){const K=M.get(C).programs;K!==void 0&&(K.forEach(function(ce){We.releaseProgram(ce)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ce,se,$,Fe){K===null&&(K=vt);const Xe=$.isMesh&&$.matrixWorld.determinant()<0,Be=ia(C,K,ce,se,$);je.setMaterial(se,Xe);let qe=ce.index,Ye=1;if(se.wireframe===!0){if(qe=$e.getWireframeAttribute(ce),qe===void 0)return;Ye=2}const it=ce.drawRange,Ke=ce.attributes.position;let he=it.start*Ye,Oe=(it.start+it.count)*Ye;Fe!==null&&(he=Math.max(he,Fe.start*Ye),Oe=Math.min(Oe,(Fe.start+Fe.count)*Ye)),qe!==null?(he=Math.max(he,0),Oe=Math.min(Oe,qe.count)):Ke!=null&&(he=Math.max(he,0),Oe=Math.min(Oe,Ke.count));const nt=Oe-he;if(nt<0||nt===1/0)return;Ve.setup($,se,Be,ce,qe);let dt,rt=W;if(qe!==null&&(dt=de.get(qe),rt=Ie,rt.setIndex(dt)),$.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*jt()),rt.setMode(V.LINES)):rt.setMode(V.TRIANGLES);else if($.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*jt()),$.isLineSegments?rt.setMode(V.LINES):$.isLineLoop?rt.setMode(V.LINE_LOOP):rt.setMode(V.LINE_STRIP)}else $.isPoints?rt.setMode(V.POINTS):$.isSprite&&rt.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))rt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,Et=$._multiDrawCounts,pt=$._multiDrawCount,bn=qe?de.get(qe).bytesPerElement:1,aa=M.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<pt;Mn++)aa.setValue(V,"_gl_DrawID",Mn),rt.render(Qe[Mn]/bn,Et[Mn])}else if($.isInstancedMesh)rt.renderInstances(he,nt,$.count);else if(ce.isInstancedBufferGeometry){const Qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Et=Math.min(ce.instanceCount,Qe);rt.renderInstances(he,nt,Et)}else rt.render(he,nt)};function $i(C,K,ce){C.transparent===!0&&C.side===Ca&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,ms(C,K,ce),C.side=ps,C.needsUpdate=!0,ms(C,K,ce),C.side=Ca):ms(C,K,ce)}this.compile=function(C,K,ce=null){ce===null&&(ce=C),L=we.get(ce),L.init(K),B.push(L),ce.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),C!==ce&&C.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const se=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Fe=$.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const Be=Fe[Xe];$i(Be,ce,$),se.add(Be)}else $i(Fe,ce,$),se.add(Fe)}),L=B.pop(),se},this.compileAsync=function(C,K,ce=null){const se=this.compile(C,K,ce);return new Promise($=>{function Fe(){if(se.forEach(function(Xe){M.get(Xe).currentProgram.isReady()&&se.delete(Xe)}),se.size===0){$(C);return}setTimeout(Fe,10)}ut.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ea=null;function ta(C){ea&&ea(C)}function Vn(){Xn.stop()}function kn(){Xn.start()}const Xn=new __;Xn.setAnimationLoop(ta),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(C){ea=C,Ue.setAnimationLoop(C),C===null?Xn.stop():Xn.start()},Ue.addEventListener("sessionstart",Vn),Ue.addEventListener("sessionend",kn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ce=Ue.enabled===!0&&Ue.isPresenting===!0,se=X!==null&&(Y===null||ce)&&X.begin(T,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(K),K=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,K,Y),L=we.get(C,B.length),L.init(K),B.push(L),ht.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ee.setFromProjectionMatrix(ht,ji,K.reversedDepth),Je=this.localClippingEnabled,Ne=ke.init(this.clippingPlanes,Je),U=Re.get(C,P.length),U.init(),P.push(U),Ue.enabled===!0&&Ue.isPresenting===!0){const Xe=T.xr.getDepthSensingMesh();Xe!==null&&Un(Xe,K,-1/0,T.sortObjects)}Un(C,K,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(Ce,ze),lt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,lt&&Pe.addToRenderList(U,C),this.info.render.frame++,Ne===!0&&ke.beginShadows();const $=L.state.shadowsArray;if(He.render($,C,K),Ne===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&X.hasRenderPass())===!1){const Xe=U.opaque,Be=U.transmissive;if(L.setupLights(),K.isArrayCamera){const qe=K.cameras;if(Be.length>0)for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ke=qe[Ye];pn(Xe,Be,C,Ke)}lt&&Pe.render(C);for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ke=qe[Ye];en(U,C,Ke,Ke.viewport)}}else Be.length>0&&pn(Xe,Be,C,K),lt&&Pe.render(C),en(U,C,K)}Y!==null&&q===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),se&&X.end(T),C.isScene===!0&&C.onAfterRender(T,C,K),Ve.resetDefaultState(),ae=-1,le=null,B.pop(),B.length>0?(L=B[B.length-1],Ne===!0&&ke.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function Un(C,K,ce,se){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ee.intersectsSprite(C)){se&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Xe=Le.update(C),Be=C.material;Be.visible&&U.push(C,Xe,Be,ce,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ee.intersectsObject(C))){const Xe=Le.update(C),Be=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ot.copy(Xe.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Be)){const qe=Xe.groups;for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ke=qe[Ye],he=Be[Ke.materialIndex];he&&he.visible&&U.push(C,Xe,he,ce,ot.z,Ke)}}else Be.visible&&U.push(C,Xe,Be,ce,ot.z,null)}}const Fe=C.children;for(let Xe=0,Be=Fe.length;Xe<Be;Xe++)Un(Fe[Xe],K,ce,se)}function en(C,K,ce,se){const{opaque:$,transmissive:Fe,transparent:Xe}=C;L.setupLightsView(ce),Ne===!0&&ke.setGlobalState(T.clippingPlanes,ce),se&&je.viewport(F.copy(se)),$.length>0&&Ln($,K,ce),Fe.length>0&&Ln(Fe,K,ce),Xe.length>0&&Ln(Xe,K,ce),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function pn(C,K,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const he=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Wi(1,1,{generateMipmaps:!0,type:he?Ua:Mi,minFilter:Vs,samples:_t.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[se.id],Xe=se.viewport||F;Fe.setSize(Xe.z*T.transmissionResolutionScale,Xe.w*T.transmissionResolutionScale);const Be=T.getRenderTarget(),qe=T.getActiveCubeFace(),Ye=T.getActiveMipmapLevel();T.setRenderTarget(Fe),T.getClearColor(be),_e=T.getClearAlpha(),_e<1&&T.setClearColor(16777215,.5),T.clear(),lt&&Pe.render(ce);const it=T.toneMapping;T.toneMapping=qi;const Ke=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),Ne===!0&&ke.setGlobalState(T.clippingPlanes,se),Ln(C,ce,se),Z.updateMultisampleRenderTarget(Fe),Z.updateRenderTargetMipmap(Fe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Oe=0,nt=K.length;Oe<nt;Oe++){const dt=K[Oe],{object:rt,geometry:Qe,material:Et,group:pt}=dt;if(Et.side===Ca&&rt.layers.test(se.layers)){const bn=Et.side;Et.side=Qn,Et.needsUpdate=!0,Jn(rt,ce,se,Qe,Et,pt),Et.side=bn,Et.needsUpdate=!0,he=!0}}he===!0&&(Z.updateMultisampleRenderTarget(Fe),Z.updateRenderTargetMipmap(Fe))}T.setRenderTarget(Be,qe,Ye),T.setClearColor(be,_e),Ke!==void 0&&(se.viewport=Ke),T.toneMapping=it}function Ln(C,K,ce){const se=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Fe=C.length;$<Fe;$++){const Xe=C[$],{object:Be,geometry:qe,group:Ye}=Xe;let it=Xe.material;it.allowOverride===!0&&se!==null&&(it=se),Be.layers.test(ce.layers)&&Jn(Be,K,ce,qe,it,Ye)}}function Jn(C,K,ce,se,$,Fe){C.onBeforeRender(T,K,ce,se,$,Fe),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(T,K,ce,se,C,Fe),$.transparent===!0&&$.side===Ca&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,T.renderBufferDirect(ce,K,se,$,C,Fe),$.side=ps,$.needsUpdate=!0,T.renderBufferDirect(ce,K,se,$,C,Fe),$.side=Ca):T.renderBufferDirect(ce,K,se,$,C,Fe),C.onAfterRender(T,K,ce,se,$,Fe)}function ms(C,K,ce){K.isScene!==!0&&(K=vt);const se=M.get(C),$=L.state.lights,Fe=L.state.shadowsArray,Xe=$.state.version,Be=We.getParameters(C,$.state,Fe,K,ce),qe=We.getProgramCacheKey(Be);let Ye=se.programs;se.environment=C.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(C.isMeshStandardMaterial?Me:ge).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",xn),Ye=new Map,se.programs=Ye);let it=Ye.get(qe);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===Xe)return Ws(C,Be),it}else Be.uniforms=We.getUniforms(C),C.onBeforeCompile(Be,T),it=We.acquireProgram(Be,qe),Ye.set(qe,it),se.uniforms=Be.uniforms;const Ke=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=ke.uniform),Ws(C,Be),se.needsLights=Ti(C),se.lightsStateVersion=Xe,se.needsLights&&(Ke.ambientLightColor.value=$.state.ambient,Ke.lightProbe.value=$.state.probe,Ke.directionalLights.value=$.state.directional,Ke.directionalLightShadows.value=$.state.directionalShadow,Ke.spotLights.value=$.state.spot,Ke.spotLightShadows.value=$.state.spotShadow,Ke.rectAreaLights.value=$.state.rectArea,Ke.ltc_1.value=$.state.rectAreaLTC1,Ke.ltc_2.value=$.state.rectAreaLTC2,Ke.pointLights.value=$.state.point,Ke.pointLightShadows.value=$.state.pointShadow,Ke.hemisphereLights.value=$.state.hemi,Ke.directionalShadowMap.value=$.state.directionalShadowMap,Ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ke.spotShadowMap.value=$.state.spotShadowMap,Ke.spotLightMatrix.value=$.state.spotLightMatrix,Ke.spotLightMap.value=$.state.spotLightMap,Ke.pointShadowMap.value=$.state.pointShadowMap,Ke.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function na(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Vc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Ws(C,K){const ce=M.get(C);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function ia(C,K,ce,se,$){K.isScene!==!0&&(K=vt),Z.resetTextureUnits();const Fe=K.fog,Xe=se.isMeshStandardMaterial?K.environment:null,Be=Y===null?T.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qr,qe=(se.isMeshStandardMaterial?Me:ge).get(se.envMap||Xe),Ye=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,it=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!ce.morphAttributes.position,he=!!ce.morphAttributes.normal,Oe=!!ce.morphAttributes.color;let nt=qi;se.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(nt=T.toneMapping);const dt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rt=dt!==void 0?dt.length:0,Qe=M.get(se),Et=L.state.lights;if(Ne===!0&&(Je===!0||C!==le)){const Tn=C===le&&se.id===ae;ke.setState(se,C,Tn)}let pt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Et.state.version||Qe.outputColorSpace!==Be||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==qe||se.fog===!0&&Qe.fog!==Fe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==Ye||Qe.vertexTangents!==it||Qe.morphTargets!==Ke||Qe.morphNormals!==he||Qe.morphColors!==Oe||Qe.toneMapping!==nt||Qe.morphTargetsCount!==rt)&&(pt=!0):(pt=!0,Qe.__version=se.version);let bn=Qe.currentProgram;pt===!0&&(bn=ms(se,K,$));let aa=!1,Mn=!1,fi=!1;const Gt=bn.getUniforms(),En=Qe.uniforms;if(je.useProgram(bn.program)&&(aa=!0,Mn=!0,fi=!0),se.id!==ae&&(ae=se.id,Mn=!0),aa||le!==C){je.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(V,"projectionMatrix",C.projectionMatrix),Gt.setValue(V,"viewMatrix",C.matrixWorldInverse);const An=Gt.map.cameraPosition;An!==void 0&&An.setValue(V,st.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&Gt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,Mn=!0,fi=!0)}if(Qe.needsLights&&(Et.state.directionalShadowMap.length>0&&Gt.setValue(V,"directionalShadowMap",Et.state.directionalShadowMap,Z),Et.state.spotShadowMap.length>0&&Gt.setValue(V,"spotShadowMap",Et.state.spotShadowMap,Z),Et.state.pointShadowMap.length>0&&Gt.setValue(V,"pointShadowMap",Et.state.pointShadowMap,Z)),$.isSkinnedMesh){Gt.setOptional(V,$,"bindMatrix"),Gt.setOptional(V,$,"bindMatrixInverse");const Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Gt.setValue(V,"boneTexture",Tn.boneTexture,Z))}$.isBatchedMesh&&(Gt.setOptional(V,$,"batchingTexture"),Gt.setValue(V,"batchingTexture",$._matricesTexture,Z),Gt.setOptional(V,$,"batchingIdTexture"),Gt.setValue(V,"batchingIdTexture",$._indirectTexture,Z),Gt.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Gt.setValue(V,"batchingColorTexture",$._colorsTexture,Z));const mn=ce.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&xt.update($,ce,bn),(Mn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Gt.setValue(V,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(En.envMap.value=qe,En.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(En.envMapIntensity.value=K.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=hA()),Mn&&(Gt.setValue(V,"toneMappingExposure",T.toneMappingExposure),Qe.needsLights&&gs(En,fi),Fe&&se.fog===!0&&tt.refreshFogUniforms(En,Fe),tt.refreshMaterialUniforms(En,se,me,te,L.state.transmissionRenderTarget[C.id]),Vc.upload(V,na(Qe),En,Z)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Vc.upload(V,na(Qe),En,Z),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(V,"center",$.center),Gt.setValue(V,"modelViewMatrix",$.modelViewMatrix),Gt.setValue(V,"normalMatrix",$.normalMatrix),Gt.setValue(V,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Tn=se.uniformsGroups;for(let An=0,Ys=Tn.length;An<Ys;An++){const Ci=Tn[An];Ae.update(Ci,bn),Ae.bind(Ci,bn)}}return bn}function gs(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Ti(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,K,ce){const se=M.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=K,M.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ce=M.get(C);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const Ai=V.createFramebuffer();this.setRenderTarget=function(C,K=0,ce=0){Y=C,H=K,q=ce;let se=null,$=!1,Fe=!1;if(C){const Be=M.get(C);if(Be.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(V.FRAMEBUFFER,Be.__webglFramebuffer),F.copy(C.viewport),k.copy(C.scissor),J=C.scissorTest,je.viewport(F),je.scissor(k),je.setScissorTest(J),ae=-1;return}else if(Be.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(Be.__hasExternalTextures)Z.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Be.__boundDepthTexture!==it){if(it!==null&&M.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Fe=!0);const Ye=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[K])?se=Ye[K][ce]:se=Ye[K],$=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?se=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?se=Ye[ce]:se=Ye,F.copy(C.viewport),k.copy(C.scissor),J=C.scissorTest}else F.copy(ee).multiplyScalar(me).floor(),k.copy(fe).multiplyScalar(me).floor(),J=Te;if(ce!==0&&(se=Ai),je.bindFramebuffer(V.FRAMEBUFFER,se)&&je.drawBuffers(C,se),je.viewport(F),je.scissor(k),je.setScissorTest(J),$){const Be=M.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,ce)}else if(Fe){const Be=K;for(let qe=0;qe<C.textures.length;qe++){const Ye=M.get(C.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ce,Be)}}else if(C!==null&&ce!==0){const Be=M.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,ce)}ae=-1},this.readRenderTargetPixels=function(C,K,ce,se,$,Fe,Xe,Be=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){je.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ye=C.textures[Be],it=Ye.format,Ke=Ye.type;if(!_t.textureFormatReadable(it)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ke)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-se&&ce>=0&&ce<=C.height-$&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels(K,ce,se,$,De.convert(it),De.convert(Ke),Fe))}finally{const Ye=Y!==null?M.get(Y).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,K,ce,se,$,Fe,Xe,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(K>=0&&K<=C.width-se&&ce>=0&&ce<=C.height-$){je.bindFramebuffer(V.FRAMEBUFFER,qe);const Ye=C.textures[Be],it=Ye.format,Ke=Ye.type;if(!_t.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.bufferData(V.PIXEL_PACK_BUFFER,Fe.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be),V.readPixels(K,ce,se,$,De.convert(it),De.convert(Ke),0);const Oe=Y!==null?M.get(Y).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Oe);const nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await SS(V,nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Fe),V.deleteBuffer(he),V.deleteSync(nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ce=0){const se=Math.pow(2,-ce),$=Math.floor(C.image.width*se),Fe=Math.floor(C.image.height*se),Xe=K!==null?K.x:0,Be=K!==null?K.y:0;Z.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Xe,Be,$,Fe),je.unbindTexture()};const $n=V.createFramebuffer(),zi=V.createFramebuffer();this.copyTextureToTexture=function(C,K,ce=null,se=null,$=0,Fe=null){Fe===null&&($!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=$,$=0):Fe=0);let Xe,Be,qe,Ye,it,Ke,he,Oe,nt;const dt=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(ce!==null)Xe=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,qe=ce.isBox3?ce.max.z-ce.min.z:1,Ye=ce.min.x,it=ce.min.y,Ke=ce.isBox3?ce.min.z:0;else{const mn=Math.pow(2,-$);Xe=Math.floor(dt.width*mn),Be=Math.floor(dt.height*mn),C.isDataArrayTexture?qe=dt.depth:C.isData3DTexture?qe=Math.floor(dt.depth*mn):qe=1,Ye=0,it=0,Ke=0}se!==null?(he=se.x,Oe=se.y,nt=se.z):(he=0,Oe=0,nt=0);const rt=De.convert(K.format),Qe=De.convert(K.type);let Et;K.isData3DTexture?(Z.setTexture3D(K,0),Et=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Z.setTexture2DArray(K,0),Et=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(K,0),Et=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const pt=V.getParameter(V.UNPACK_ROW_LENGTH),bn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),aa=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),fi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke);const Gt=C.isDataArrayTexture||C.isData3DTexture,En=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const mn=M.get(C),Tn=M.get(K),An=M.get(mn.__renderTarget),Ys=M.get(Tn.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,An.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ci=0;Ci<qe;Ci++)Gt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(C).__webglTexture,$,Ke+Ci),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(K).__webglTexture,Fe,nt+Ci)),V.blitFramebuffer(Ye,it,Xe,Be,he,Oe,Xe,Be,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||M.has(C)){const mn=M.get(C),Tn=M.get(K);je.bindFramebuffer(V.READ_FRAMEBUFFER,$n),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi);for(let An=0;An<qe;An++)Gt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,$,Ke+An):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,$),En?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,Fe,nt+An):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,Fe),$!==0?V.blitFramebuffer(Ye,it,Xe,Be,he,Oe,Xe,Be,V.COLOR_BUFFER_BIT,V.NEAREST):En?V.copyTexSubImage3D(Et,Fe,he,Oe,nt+An,Ye,it,Xe,Be):V.copyTexSubImage2D(Et,Fe,he,Oe,Ye,it,Xe,Be);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Et,Fe,he,Oe,nt,Xe,Be,qe,rt,Qe,dt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Et,Fe,he,Oe,nt,Xe,Be,qe,rt,dt.data):V.texSubImage3D(Et,Fe,he,Oe,nt,Xe,Be,qe,rt,Qe,dt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Fe,he,Oe,Xe,Be,rt,Qe,dt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Fe,he,Oe,dt.width,dt.height,rt,dt.data):V.texSubImage2D(V.TEXTURE_2D,Fe,he,Oe,Xe,Be,rt,Qe,dt);V.pixelStorei(V.UNPACK_ROW_LENGTH,pt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,aa),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fi),Fe===0&&K.generateMipmaps&&V.generateMipmap(Et),je.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){H=0,q=0,Y=null,je.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const M_={type:"bird",bird:{tubeRadius:.08,segments:120,radialSegments:8,flapIntensity:1,deformIntensity:1},outerSphere:{size:7,segments:4,opacity:.6,deformationFactor:1,spikeFactor:1,isWireframe:!0},innerSphere:{size:3.5,segments:2,opacity:.3,deformationFactor:1,spikeFactor:.5,isWireframe:!0},globalRotationSpeed:1};function mA(r,t){const i=((r==null?void 0:r.bass)||0)/255,s=((r==null?void 0:r.mid)||0)/255,l=((r==null?void 0:r.high)||0)/255,c=(i+s+l)/3,d=Date.now()*.01,h=Math.sin(d*1.5)*c*4;return{rotation:{x:i*40+h,y:s*50+Math.cos(d)*c*12,z:l*30+h},offset:{x:Math.sin(d*.2)*s*6+Math.sin(d*2)*c*3,y:i*10+Math.cos(d*1.5)*c*4,z:-l*15+Math.sin(d*3)*c*5}}}const Pv=({className:r="",speed:t=1,color:i="#ffffff",bands:s,rotation:l={x:0,y:0,z:0},position:c={x:0,y:0,z:0},side:d="left",scale:h=1,config:m=M_,combo:p=0,onClick:v,lightingEnabled:g=!1})=>{const _=pe.useRef(null),S=pe.useRef(s),E=pe.useRef(l),A=pe.useRef(c),b=pe.useRef(h),x=pe.useRef(m),N=pe.useRef(p),D=pe.useRef(g);pe.useEffect(()=>{S.current=s},[s]),pe.useEffect(()=>{E.current=l},[l]),pe.useEffect(()=>{A.current=c},[c]),pe.useEffect(()=>{b.current=h},[h]),pe.useEffect(()=>{x.current=m},[m]),pe.useEffect(()=>{N.current=p},[p]),pe.useEffect(()=>{D.current=g},[g]);const[U,L]=Zi.useState(new zt(i));return pe.useEffect(()=>{L(new zt(i))},[i]),pe.useEffect(()=>{if(!_.current)return;const P=new lb,B=new bi(75,1,.1,1e3),X=new pA({alpha:!0,antialias:!0}),T=_.current.clientWidth||400,R=_.current.clientHeight||400;X.setSize(T,R),_.current.appendChild(X.domElement);const H=new Yo;P.add(H),B.position.z=10;let q=null,Y=null,ae=null,le=null;const F=new zt(i),k=x.current.outerSphere,J=x.current.innerSphere,be=new Yc(k.size,k.segments),_e=new Wc({color:F,wireframe:k.isWireframe,transparent:!0,opacity:k.opacity});q=new Fi(be,_e),ae=be.attributes.position.array.slice();const z=new Yc(J.size,J.segments),te=new Wc({color:F,wireframe:J.isWireframe,transparent:!0,opacity:J.opacity});Y=new Fi(z,te),le=z.attributes.position.array.slice(),H.add(q),H.add(Y);const me=new Worker(new URL("/OveTyp_/assets/modeling.worker-BjLKqQYL.js",import.meta.url),{type:"module"});let Ce=!1,ze=!1;me.onmessage=Je=>{const{positions:ht,name:st}=Je.data;st==="outer"&&q?(q.geometry.attributes.position.array.set(ht),q.geometry.attributes.position.needsUpdate=!0,Ce=!1):st==="inner"&&Y&&(Y.geometry.attributes.position.array.set(ht),Y.geometry.attributes.position.needsUpdate=!0,ze=!1)};const ee=new _b;let fe;function Te(){fe=requestAnimationFrame(Te);const Je=ee.getElapsedTime(),ht=S.current,st=x.current,ot=N.current;if(D.current){const ut=(((ht==null?void 0:ht.bass)||0)+((ht==null?void 0:ht.mid)||0))/512,_t=d==="left"?220:340,je=.7+ut*.3,I=.5+ut*.4,M=new zt().setHSL(_t/360,je,I);q&&q.material.color.copy(M),Y&&Y.material.color.copy(M)}else q&&q.material.color.copy(F),Y&&Y.material.color.copy(F);if(q&&Y){if(ae&&!Ce){Ce=!0;const _t=q.geometry.attributes.position.array.slice();me.postMessage({name:"outer",positions:_t,originalPositions:ae,time:Je,bands:ht,config:st.outerSphere,combo:ot},[_t.buffer])}if(le&&!ze){ze=!0;const _t=Y.geometry.attributes.position.array.slice();me.postMessage({name:"inner",positions:_t,originalPositions:le,time:Je,bands:ht,config:st.innerSphere,combo:ot},[_t.buffer])}q.rotation.y+=.005*st.globalRotationSpeed,Y.rotation.y-=.01*st.globalRotationSpeed;const ut=(((ht==null?void 0:ht.bass)||0)+((ht==null?void 0:ht.high)||0))/512;q.rotation.x+=ut*.1,Y.rotation.z+=ut*.15}const vt=E.current,lt=A.current,jt=b.current,V=d==="right"?-1:1,Ut=mA(ht);H.rotation.x=fd.degToRad(vt.x+Ut.rotation.x),H.rotation.y=fd.degToRad(vt.y*V+Ut.rotation.y*V),H.rotation.z=fd.degToRad(vt.z*V+Ut.rotation.z*V),H.position.set(lt.x*V+Ut.offset.x*V,lt.y+Ut.offset.y,lt.z+Ut.offset.z),H.scale.set(jt,jt,jt),X.render(P,B)}Te();const Ee=X.domElement,Ne=_.current;return()=>{cancelAnimationFrame(fe),me.terminate(),Ne&&Ne.contains(Ee)&&Ne.removeChild(Ee),X.dispose(),P.clear()}},[i,d,t,m.type]),O.jsx("div",{ref:_,className:`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${r}`,onClick:v})},Jo={name:"Berlín Techno",bpm:128,layers:[{id:"kick_basic",type:"percussion",minCombo:1,maxCombo:100,color:"var(--text-primary)",opacity:.6,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"hihat_basic",type:"percussion",minCombo:5,maxCombo:80,color:"#00FFFF",opacity:.8,yOffset:-5,pattern:r=>r%4===2,play:r=>r.playHiHat()},{id:"bass_acid_low",type:"bass",minCombo:12,maxCombo:120,color:"var(--accent-primary)",opacity:.4,yOffset:5,pattern:r=>r%2===0,play:(r,t,i)=>{const s=[55,65,73,82];r.playBass(s[t%s.length],i)}},{id:"snare_break",type:"percussion",minCombo:25,maxCombo:150,color:"#FF00FF",opacity:.7,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"ghost_hats",type:"percussion",minCombo:50,maxCombo:180,color:"#AAAAAA",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"acid_arp",type:"lead",minCombo:80,color:"#CCFF00",opacity:.5,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[110,130,165,196];r.playLead(s[t%s.length],i)}},{id:"fm_pulsar",type:"fx",minCombo:120,color:"#FF5500",opacity:.6,yOffset:0,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(440,i*2)},{id:"ultra_lead",type:"lead",minCombo:160,color:"#FFFFFF",opacity:.9,yOffset:-15,pattern:r=>r%3===0,play:(r,t,i)=>{const s=[220,330,440,660];r.playLead(s[Math.floor(Math.random()*s.length)],i*3)}},{id:"heavenly_lead",type:"lead",minCombo:200,color:"#00FFFF",opacity:.8,yOffset:-20,pattern:r=>r%8===4,play:(r,t,i)=>r.playLead(880,i)}]},Lh={name:"Cyber Ambient",bpm:90,layers:[{id:"pad",type:"lead",minCombo:1,color:"var(--accent-primary)",opacity:.3,yOffset:10,pattern:r=>r%16===0,play:(r,t,i)=>r.playBass(110,i)},{id:"glitch",type:"fx",minCombo:10,color:"#00FFFF",opacity:.6,pattern:r=>Math.random()>.8,play:r=>r.playHiHat()},{id:"shimmer",type:"lead",minCombo:40,color:"#FFFFFF",opacity:.4,yOffset:-15,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(880,i)},{id:"deep_pulse",type:"bass",minCombo:80,color:"#5500FF",opacity:.5,yOffset:15,pattern:r=>r%32===0,play:(r,t,i)=>r.playBass(40,i*2)},{id:"celestial",type:"lead",minCombo:150,color:"#00FF88",opacity:.7,pattern:r=>r%16===12,play:(r,t,i)=>r.playLead(1320,i)}]},Oh={name:"Acid House 303",bpm:124,layers:[{id:"kick",type:"percussion",minCombo:1,color:"var(--text-primary)",opacity:.5,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"snare",type:"percussion",minCombo:5,color:"#FF00FF",opacity:.6,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"acid",type:"bass",minCombo:15,maxCombo:120,color:"#CCFF00",opacity:.8,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[33,44,55,66];r.playBass(s[t%s.length],i*2)}},{id:"ghost",type:"percussion",minCombo:40,color:"#CCFF00",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"high_acid",type:"lead",minCombo:80,color:"#00FF00",opacity:.6,yOffset:-20,pattern:r=>r%8===0,play:(r,t,i)=>r.playLead(440,i)},{id:"squelch_peak",type:"fx",minCombo:140,color:"#FF00FF",opacity:.8,pattern:r=>r%4===3,play:r=>r.playSnare()},{id:"cosmic_resonance",type:"lead",minCombo:200,color:"#FFFFFF",opacity:.9,pattern:r=>r%16===0,play:(r,t,i)=>r.playLead(1320,i)}]},kc={oneStar:{stars:1,levels:[{id:1,phrases:["el sol sale cada mañana en el este la casa es grande y de color azul mi perro corre por el campo verde me gusta comer pan tostado con miel el agua del rio esta muy fria hoy el gato duerme tranquilo sobre el sofa viejo los niños juegan felices en el parque tengo un libro nuevo para leer esta tarde","la mesa tiene cuatro patas de madera fuerte el jardinero riega las flores con agua fresca cada tarde de verano la mama cocina una sopa muy rica para toda la familia el pajaro vuela alto en el cielo azul y claro busca comida entre los arboles verdes del bosque"]},{id:2,phrases:["hoy el cielo esta despejado y hace mucho calor caminamos por la calle principal de la ciudad el coche de mi padre es rapido y seguro la madre prepara una cena rica para todos siento mucha paz cuando escucho la lluvia caer vamos al cine a ver una pelicula de risas el jardin tiene flores rojas y blancas muy bonitas y grandes","el abuelo cuenta historias de viajes antiguos a otros paises lejanos nos gusta sentarnos cerca del fuego cuando hace frio en invierno la ventana esta abierta y entra un aire fresco que huele a campo recien cortado busco las llaves de casa en mi mochila pequeña pero no las encuentro por ninguna parte"]},{id:3,phrases:["un dia en el campo es lo mejor para descansar del ruido de los autos podemos ver vacas ovejas y caballos comiendo hierba fresca bajo la sombra de un gran arbol verde la comida sabe mejor cuando estamos todos juntos compartiendo risas y momentos felices bajo el sol de la tarde que ya se va","mañana sera un dia de mucho trabajo pero ahora quiero descansar un poco mas el sofa es comodo y la manta es suave y caliente me quedo dormido pensando en mis planes para las vacaciones de verano cerca del mar azul con olas grandes para jugar con mis amigos de siempre de la escuela"]}]},twoStars:{stars:2,levels:[{id:1,phrases:["Aunque el camino sea difícil, siempre hay una luz al final del túnel que nos guía. La paciencia es una virtud que pocos poseen, pero que todos necesitamos cultivar para alcanzar nuestras metas más ambiciosas. Mañana será un día mejor si hoy nos esforzamos al máximo en nuestras tareas diarias y mostramos gratitud por lo que tenemos.","¿Has pensado alguna vez en la inmensidad del universo y en lo pequeños que somos nosotros en comparación con las estrellas? El tiempo vuela cuando estamos disfrutando de una buena conversación con amigos sinceros. Las palabras tienen el poder de construir puentes o levantar muros, por eso es importante elegir bien qué decir en cada momento preciso."]},{id:2,phrases:["¡Qué alegría verte de nuevo por aquí después de tanto tiempo sin saber de ti! Me pregunto si habrás cumplido todos esos sueños que tenías guardados en el cajón de las ilusiones. A veces, la vida nos sorprende con giros inesperados que nos obligan a cambiar de rumbo radicalmente, pero siempre aprendemos algo nuevo y valioso en el proceso de adaptación.","¿Sabías que la música es el lenguaje universal que conecta los corazones de personas de diferentes culturas? No importa de dónde vengas ni qué lengua hables, una melodía hermosa puede evocar sentimientos profundos en cualquier ser humano sensible. Me gusta cerrar los ojos y dejarme llevar por el ritmo suave de una guitarra española en una noche estrellada."]},{id:3,phrases:["El otoño trae consigo una melancolía dulce, con sus hojas secas crujiendo bajo nuestros pies cansados de caminar. El olor a tierra mojada tras la tormenta es uno de los perfumes más exquisitos que la naturaleza nos regala generosamente. Cada estación tiene su propio encanto, pero la transición entre el verano y el invierno parece tener una magia especial y única.","Si decides emprender un viaje largo, asegúrate de llevar contigo solo lo indispensable para no cargar con peso innecesario. La libertad se encuentra en la simplicidad de las cosas pequeñas: un amanecer, una taza de café caliente, una mirada cómplice. No busques la felicidad en objetos materiales, pues ella reside en los momentos compartidos con las personas que amas de verdad."]}]},threeStars:{stars:3,levels:[{id:1,phrases:["Para implementar correctamente un sistema asíncrono en Rust, es vital entender el concepto de Ownership y Borrowing profundamente. El uso de `tokio` permite gestionar múltiples hilos de ejecución sin bloquear el Event Loop principal del sistema operativo host. Si la latencia supera los 20ms, debemos optimizar el canal de comunicación usando UDP (osc) en lugar de protocolos pesados como HTTP o JSON serializado.","El patrón de diseño 'Hexagonal Architecture' separa el dominio lógico de los detalles de infraestructura mediante puertos y adaptadores. Esto permite que el núcleo de la aplicación sea agnóstico a la base de datos o al framework de interfaz de usuario utilizado. En un entorno de alto rendimiento, la gestión manual de la memoria y la reducción de las asignaciones en el montón (heap allocations) son estrategias clave para el éxito."]},{id:2,phrases:["const pipeline = (data) => data.filter(x => x.score > 80).map(x => ({ ...x, status: 'active' })); La recursividad puede ser elegante pero peligrosa si no se maneja el caso base adecuadamente, provocando un StackOverflowError. El uso de clausuras (closures) en JavaScript permite capturar el estado léxico circundante, creando potentes abstracciones para la programación funcional moderna y reactiva.","docker-run --rm -v $(pwd):/app node:alpine npm install && npm run build --module-resolution=node. La seguridad en las APIs RESTful se garantiza habitualmente mediante el uso de tokens JWT (JSON Web Tokens) firmados digitalmente. Es fundamental implementar políticas de CORS estrictas y sanitizar todas las entradas de los usuarios para prevenir ataques de inyección SQL o Cross-Site Scripting (XSS) en producción."]},{id:3,phrases:["El algoritmo de Dijkstra encuentra el camino más corto en un grafo con pesos no negativos utilizando una cola de prioridad. En machine learning, el descenso de gradiente estocástico es la base para entrenar redes neuronales profundas mediante la actualización iterativa de los pesos. La complejidad temporal O(n log n) es típica de algoritmos de ordenación eficientes como QuickSort o MergeSort en el caso promedio.","La transformada de Fourier convierte una señal del dominio del tiempo al dominio de la frecuencia, revelando sus componentes espectrales. En sistemas distribuidos, el teorema CAP establece que es imposible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones. La implementación de un Sidecar en Rust para procesamiento de audio requiere una sincronización precisa mediante buffers circulares y comunicación atómica."]}]}},gA=Object.values(kc).flatMap(r=>r.levels.flatMap(t=>t.phrases)),Xs=[{id:"fase_estrellas",title:"🏆 Desafíos por Estrellas",description:"Niveles de dificultad real con frases de 60+ palabras.",levels:[...kc.oneStar.levels.map(r=>({id:`star_1_lvl_${r.id}`,title:`1 Estrella - Nivel ${r.id}`,description:"Vocabulario esencial y fluidez básica.",fingers:[],keys:[],difficulty:1,phrases:r.phrases})),...kc.twoStars.levels.map(r=>({id:`star_2_lvl_${r.id}`,title:`2 Estrellas - Nivel ${r.id}`,description:"Puntuación, tildes y gramática compleja.",fingers:[],keys:[],difficulty:2,phrases:r.phrases})),...kc.threeStars.levels.map(r=>({id:`star_3_lvl_${r.id}`,title:`3 Estrellas - Nivel ${r.id}`,description:"Símbolos, código y términos técnicos densos.",fingers:[],keys:[],difficulty:3,phrases:r.phrases}))]},{id:"fase_1",title:"Fase 1: Pares de Dedos (Homólogos)",description:"Coordinación estricta de dedos equivalentes.",levels:[{id:"nivel_1_pares_indices",title:"Pares: Índices (L2 + R2)",description:"Teclas: F, G, V, B, R, T + J, H, N, M, Y, U (Solo U)",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U","4","5","6","7"],difficulty:1,phrases:["un muy tu hutu run fun gun bun my ugh","tu hutu muy un tu hutu muy un tu hutu","muy tu run un fun gun bun y hutu","unum hum tum bum rum gum yum","frt vbg jyh nm u frt vbg jyh nm u"]},{id:"nivel_1_pares_medios",title:"Pares: Corazón (L3 + R3)",description:"Teclas: D, E, C + K, I (Solo E, I)",fingers:["L3","R3"],keys:["D","E","C","K","I","3","8",","],difficulty:1,phrases:["dice kiki decide ceder ese cedi de kiev","kiki dice cede ese dique y decide","decide ceder dice kiki ece de cedec","cedi mi dique y decidi ceder ese cedi","ded cdc kik iii ded cdc kik iii"]},{id:"nivel_1_pares_anulares",title:"Pares: Anulares (L4 + R4)",description:"Teclas: S, W, X + L, O (Solo O)",fingers:["L4","R4"],keys:["S","W","X","L","O","2","9","."],difficulty:1,phrases:["oso soso solo lo olo los sol","lolo olo los osos solos o lo olo","sol solo o los osos sos o lo olo","so los olo o lolo solo lo olo","sws xws lol olo sws xws lol olo"]},{id:"nivel_1_pares_meniques",title:"Pares: Meñiques (L5 + R5)",description:"Teclas: A, Q, Z + Ñ, P (Solo A)",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P","1","0","-","´","'"],difficulty:1,phrases:["papa aña zapa a aza paña a papa","aza a paña a papa aña a zapa","paña zapa a aza aña a papa","apa aña aza paña zapa papa","aqa aza ñpñ aqa aza ñpñ"]}]},{id:"fase_2",title:"Fase 2: Dedos Individuales (Mano Izquierda)",description:"Control independiente de cada dedo izquierdo.",levels:[{id:"nivel_2_indice_izq",title:"1. Índice Izquierdo",description:"F, R, T, G, V, B (Sin Vocales)",fingers:["L2"],keys:["F","R","T","G","V","B","4","5"],difficulty:2,phrases:["frt gvb frt gvb frt gvb frt gvb","fgf rtr vbv fgf rtr vbv fgf rtr","bgt rfv bgt rfv bgt rfv bgt rfv","vfr tgb vfr tgb vfr tgb vfr tgb","ff rr tt gg vv bb ff rr tt gg"]},{id:"nivel_2_medio_izq",title:"2. Corazón Izquierdo",description:"D, E, C (Vocal E)",fingers:["L3"],keys:["D","E","C","3"],difficulty:2,phrases:["cede de cede de cede de cede","dede cede dede cede dede cede","ece de cedec ece de cedec ece","ded cdc ded cdc ded cdc ded","cede ese cede ese cede ese"]},{id:"nivel_2_anular_izq",title:"3. Anular Izquierdo",description:"S, W, X (Sin Vocales)",fingers:["L4"],keys:["S","W","X","2"],difficulty:2,phrases:["sws xws sws xws sws xws sws","wxw sxs wxw sxs wxw sxs wxw","ss ww xx ss ww xx ss ww xx","swx xws swx xws swx xws swx","xsw wsx xsw wsx xsw wsx xsw"]},{id:"nivel_2_menique_izq",title:"4. Meñique Izquierdo",description:"A, Q, Z (Vocal A)",fingers:["L5"],keys:["A","Q","Z","1","<",">"],difficulty:2,phrases:["aza aqa aza aqa aza aqa aza","aqa zaza aqa zaza aqa zaza","qaz aza qaz aza qaz aza qaz","aa qq zz aa qq zz aa qq zz","zqa aqz zqa aqz zqa aqz zqa"]}]},{id:"fase_3",title:"Fase 3: Dedos Individuales (Mano Derecha)",description:"Control independiente de cada dedo derecho.",levels:[{id:"nivel_3_indice_der",title:"1. Índice Derecho",description:"J, H, N, M, U, Y (Vocales U, Y)",fingers:["R2"],keys:["J","H","N","M","U","Y","6","7"],difficulty:2,phrases:["un muy hum un muy hum un muy","muum nunn muum nunn muum nunn","juy hum juy hum juy hum juy","yny umu yny umu yny umu yny","muy un muy un muy un muy un"]},{id:"nivel_3_medio_der",title:"2. Corazón Derecho",description:"K, I (Vocal I)",fingers:["R3"],keys:["K","I","8",","],difficulty:2,phrases:["kik iii kik iii kik iii kik","ki ik ki ik ki ik ki ik ki","kiki ikik kiki ikik kiki ikik","iii kkk iii kkk iii kkk iii","ik ki ik ki ik ki ik ki ik"]},{id:"nivel_3_anular_der",title:"3. Anular Derecho",description:"L, O (Vocal O)",fingers:["R4"],keys:["L","O","9","."],difficulty:2,phrases:["lol olo lol olo lol olo lol","lo ol lo ol lo ol lo ol lo","lolo olol lolo olol lolo olol","ooo lll ooo lll ooo lll ooo","lloo ooll lloo ooll lloo ooll"]},{id:"nivel_3_menique_der",title:"4. Meñique Derecho",description:"Ñ, P (Sin Vocales)",fingers:["R5"],keys:["Ñ","P","0","-","´"],difficulty:2,phrases:["ñpñ pñp ñpñ pñp ñpñ pñp ñpñ","ññ pp ññ pp ññ pp ññ pp ññ","pñ ñp pñ ñp pñ ñp pñ ñp pñ","ñpñp pñpñ ñpñp pñpñ ñpñp pñpñ","ppññ ppññ ppññ ppññ ppññ ppññ"]}]},{id:"fase_4",title:"Fase 4: Combinaciones Reales",description:"Palabras completas usando ambas manos.",levels:[{id:"nivel_4_comunes",title:"Palabras Comunes",description:"Las 100 palabras más usadas.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:["A","B","C","D","E","F","G","H","I","J","L","M","N","Ñ","O","P","Q","R","S","T","U","V","Y","Z"],difficulty:3,phrases:["para que sirve la vida si no hacemos cosas buenas por los demas cada dia","como estan las cosas en tu casa despues de todo lo que paso ayer","todo el mundo sabe eso desde hace mucho tiempo y nadie dice nada al respecto","cuando vienes a casa para comer algo rico y hablar de nuestros planes"]}]},{id:"fase_6",title:"Fase 6: Texto Completo (Pangramas)",description:"Todas las letras.",levels:[{id:"nivel_6_texto_completo",title:"Pangramas",description:"Todas las letras.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:[],difficulty:3,phrases:["el veloz murciélago hindú comía feliz cardillo y kiwi","la cigüeña tocaba el saxofón detrás del palenque de paja","queda gazpacho, fibra, latex, jamon, kiwi y viñas"]}]},{id:"fase_7",title:"Fase 7: Acentos",description:"Práctica con tildes.",levels:[{id:"fase_7_acentos",title:"Acentos",description:"Vocales acentuadas.",fingers:["R5","L2","L3","L5","R2","R3","R4"],keys:["´","A","E","I","O","U"],difficulty:3,phrases:["á é í ó ú","mamá comió puré","allí durmió él","avión camión canción"]}]}],vA=({currentPhrase:r,normalizedTypedText:t,currentWordInfo:i,isComposingState:s,palette:l,customColor:c,frequencyBands:d,birdRotation:h,birdPos3D:m,birdSize:p,visualsConfig:v,combo:g,comboMultiplier:_,isMusicLightingEnabled:S,onDimensionalMenu:E,PALETTE_COLORS:A,isCircuitMode:b,circuitTimer:x,circuitTitle:N,onCircuitCycle:D,isLevelActive:U,onSelectLevel:L,themeScheme:P="dark",currentMusicStyle:B=Jo,onMusicStyleChange:X,currentLevelProgress:T=0,currentLevelScore:R=0,currentLevelAccuracy:H=100})=>{const q=P==="light"?"text-black":"text-white",Y="text-[var(--accent-primary)]",ae=[Jo,Lh,Oh],le=["fa-bolt","fa-leaf","fa-flask"],[F,k]=pe.useState(null),[J,be]=pe.useState(!1),[_e,z]=pe.useState(!1),te=()=>{be(!J)},me=[{id:"practice_indice",title:"Dedos Índices",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U"]},{id:"practice_anular",title:"Dedos Anulares",fingers:["L4","R4"],keys:["S","W","X","L","O"]},{id:"practice_corazon",title:"Dedos Corazón",fingers:["L3","R3"],keys:["D","E","C","K","I"]},{id:"practice_anular_izq",title:"Anular Izquierdo",fingers:["L4"],keys:["S","W","X"]},{id:"practice_menique",title:"Meñique",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P"]}];Xs.flatMap(Te=>Te.levels.filter(Ee=>Ee.difficulty===1)),Xs.flatMap(Te=>Te.levels.filter(Ee=>Ee.difficulty===2)),Xs.flatMap(Te=>Te.levels.filter(Ee=>Ee.difficulty===3));const Ce=Te=>{k(F===Te?null:Te)},ze=()=>{const Te=Ee=>{var Ne;return((Ne=Xs.find(Je=>Je.id==="fase_estrellas"))==null?void 0:Ne.levels.filter(Je=>Je.difficulty===Ee))||[]};return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-6 flex flex-col items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsxs("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-6",children:[O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🏆 Niveles"}),[1,2,3].map(Ee=>{const Ne=Te(Ee),Je=F===Ee,ht=Ee===1?"Novato":Ee===2?"Experto":"Maestro";return O.jsxs("div",{className:"w-full flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>Ce(Ee),className:`w-full p-4 flex items-center justify-between transition-all ${Je?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("div",{className:"flex gap-1 mb-1",children:Array.from({length:Ee}).map((st,ot)=>O.jsx("i",{className:`fa fa-star text-[12px] ${Je?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`},ot))}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${Je?"text-[var(--accent-primary)]":"text-white"}`,children:ht})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${Je?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${Je?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:Ne.slice(0,4).map(st=>{const ot=typeof window<"u"?Number(localStorage.getItem(`typ_progress_${st.id}`)||0):0,vt=ot>=100;return O.jsxs("button",{onClick:()=>L&&L(st),className:`w-full p-3 rounded-xl text-left border hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden ${vt?"border-green-500/50 bg-green-500/10":"border-transparent"}`,children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:`text-[11px] font-black uppercase tracking-widest ${vt?"text-green-400":"text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"} transition-colors`,children:st.title}),O.jsxs("div",{className:"flex items-center gap-1",children:[ot>0&&O.jsxs("span",{className:`text-[8px] font-bold ${vt?"text-green-400":"text-[var(--text-ghost)]"}`,children:[ot,"%"]}),O.jsx("i",{className:`fa ${vt?"fa-check":"fa-play"} text-[8px] ${vt?"text-green-400":"text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"}`})]})]}),ot>0&&O.jsx("div",{className:"w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden",children:O.jsx("div",{className:`absolute inset-y-0 left-0 ${vt?"bg-green-500 shadow-[0_0_8px_#22c55e]":"bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]"} transition-all duration-1000`,style:{width:`${ot}%`}})})]},st.id)})})})})]},Ee)})]}),O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"✋ Práctica"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:te,className:`w-full p-4 flex items-center justify-between transition-all ${J?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa fa-hand-paper-o text-[14px] mb-1 ${J?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${J?"text-[var(--accent-primary)]":"text-white"}`,children:"Práctica de Dedos"})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${J?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${J?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:me.map(Ee=>O.jsxs("button",{onClick:()=>L&&L({...Ee,phrases:[`${Ee.keys.join(" ")} ${Ee.keys.join(" ")}`]}),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:Ee.title}),O.jsx("i",{className:"fa fa-play text-[8px] text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"})]})]},Ee.id))})})})]}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🎵 Música"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>z(!_e),className:`w-full p-4 flex items-center justify-between transition-all ${_e?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa ${le[ae.indexOf(B)]||"fa-music"} text-[14px] mb-1 ${_e?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${_e?"text-[var(--accent-primary)]":"text-white"}`,children:B.name})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${_e?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${_e?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-1 gap-2",children:ae.filter(Ee=>Ee.name!==B.name).map((Ee,Ne)=>O.jsxs("button",{onClick:()=>X&&X(Ee),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex items-center gap-3 transition-all group relative overflow-hidden",children:[O.jsx("i",{className:`fa ${le[ae.indexOf(Ee)]||"fa-music"} text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]`}),O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:Ee.name})]},Ee.name))})})})]})]})]}),O.jsx("div",{className:"mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] animate-pulse text-center",children:"Selecciona un nivel para comenzar"})]})},ee=()=>{const Te=t.length;return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[160px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsx("div",{className:"absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsx("div",{className:"absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsxs("div",{className:"font-mono text-xl md:text-3xl relative overflow-hidden h-20 w-full max-w-2xl flex items-center",children:[O.jsx("div",{className:"absolute top-0 left-0 h-full text-white/40 whitespace-nowrap leading-none transition-transform duration-300 ease-out flex items-center will-change-transform",style:{transform:`translateX(calc(-${Te}ch))`},children:r.split("").map((Ee,Ne)=>{let Je="text-white",ht="";if(Ne<t.length){const st=t[Ne]!==Ee,ot=Ne===t.length-1;st?ot&&s?Je="text-white border-b-2 border-[var(--accent-primary)] animate-pulse":Je="text-red-400 bg-red-500/10 border-b-2 border-red-500/30":(Je="text-white",ht="drop-shadow-[0_0_8px_var(--accent-primary)]")}return O.jsxs("span",{className:`${Je} ${ht} transition-all inline-block relative font-black`,children:[Ee===" "?" ":Ee,Ne===t.length&&O.jsx("span",{className:"absolute left-0 bottom-[-8px] w-full h-[4px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_20px_var(--accent-primary)] rounded-full"})]},Ne)})}),U&&T>=100&&O.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"PTS"}),O.jsx("span",{className:"text-[14px] font-bold text-green-400",children:R.toLocaleString()})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"%"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[T,"%"]})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"ACC"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[H,"%"]})]})]})]})]})},fe=l==="custom"?c:A[l]||c;return O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsx("div",{className:"w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:O.jsxs("div",{className:"w-full flex-grow flex flex-col items-center justify-center select-none",children:[O.jsx("div",{className:"w-full flex justify-center",children:U?ee():ze()}),O.jsxs("div",{className:`w-full flex flex-col items-center gap-4 mt-6 relative transition-all duration-1000 ${U?"opacity-100":"opacity-0 h-0 pointer-events-none"}`,children:[O.jsx("div",{className:"absolute hidden md:block",style:{left:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:O.jsx(Pv,{color:fe,speed:.75,bands:d,rotation:h,position:m,side:"left",scale:p*.8/180,config:v,combo:g*_,lightingEnabled:S,onClick:E},"circle-left")}),O.jsx("div",{className:"absolute hidden md:block",style:{right:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:O.jsx(Pv,{color:fe,speed:.75,bands:d,rotation:h,position:m,side:"right",scale:p*.8/180,config:v,combo:g*_,lightingEnabled:S,onClick:E},"circle-right")}),b&&x!==void 0&&O.jsxs("button",{onClick:D,className:"relative z-50 flex items-center justify-center gap-4 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer hover:scale-105 transition-transform active:scale-95 group",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] rounded-full px-5 py-1.5 flex items-center gap-3 transition-colors group-hover:bg-[var(--accent-primary)]/10",children:[O.jsx("i",{className:"fa fa-refresh fa-spin text-xs"}),O.jsxs("span",{className:"font-mono font-bold text-lg tracking-wider",children:[x,"s"]})]}),N&&O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]",children:N})]}),O.jsx("div",{className:"relative overflow-visible flex items-center justify-center gap-8",style:{height:`${p*.8}px`},children:O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible",children:O.jsxs("div",{className:"relative font-mono text-4xl flex items-center h-full min-w-[200px]",children:[O.jsx("div",{className:`absolute inset-0 whitespace-pre flex items-center justify-start pointer-events-none ${q}`,children:i.word}),O.jsxs("div",{className:"relative flex items-center whitespace-pre h-full",children:[i.userTypedSlice.split("").map((Te,Ee)=>{const Ne=Te===(i.word[Ee]||""),Je=s&&Ee===i.userTypedSlice.length-1?"text-yellow-400":Ne?Y:"text-red-400 bg-red-500/10 border-b-2 border-red-500/30";return O.jsx("span",{className:`relative inline-block ${Je}`,children:Te===" "?" ":Te},Ee)}),O.jsx("span",{className:"inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1"})]})]})})})]})]})})})},js={"left-pinky":"#f472b6","left-ring":"#c084fc","left-middle":"#60a5fa","left-index":"#22d3ee",thumb:"#9ca3af","right-index":"#4ade80","right-middle":"#facc15","right-ring":"#fb923c","right-pinky":"#f87171"},_A={"left-pinky":"Meñique Izquierdo","left-ring":"Anular Izquierdo","left-middle":"Corazón Izquierdo","left-index":"Índice Izquierdo",thumb:"Pulgares (Espacio)","right-index":"Índice Derecho","right-middle":"Corazón Derecho","right-ring":"Anular Derecho","right-pinky":"Meñique Derecho"},Zh=[[{key:"1",label:"1",finger:"left-pinky",row:0,why:"Alcance natural exterior."},{key:"2",label:"2",finger:"left-ring",row:0,why:"Extensión diagonal superior."},{key:"3",label:"3",finger:"left-middle",row:0,why:"Extensión diagonal superior."},{key:"4",label:"4",finger:"left-index",row:0,why:"Alcance interior izquierdo."},{key:"5",label:"5",finger:"left-index",row:0,why:"Extensión interior izquierda."},{key:"6",label:"6",finger:"right-index",row:0,why:"Extensión interior derecha."},{key:"7",label:"7",finger:"right-index",row:0,why:"Alcance interior derecho."},{key:"8",label:"8",finger:"right-middle",row:0,why:"Extensión diagonal superior."},{key:"9",label:"9",finger:"right-ring",row:0,why:"Extensión diagonal superior."},{key:"0",label:"0",finger:"right-pinky",row:0,why:"Alcance natural exterior."}],[{key:"q",label:"Q",finger:"left-pinky",row:1,why:"Posición superior externa."},{key:"w",label:"W",finger:"left-ring",row:1,why:"Movimiento vertical desde S."},{key:"e",label:"E",finger:"left-middle",row:1,why:"Movimiento vertical desde D."},{key:"r",label:"R",finger:"left-index",row:1,why:"Movimiento vertical desde F."},{key:"t",label:"T",finger:"left-index",row:1,why:"Extensión lateral desde F."},{key:"y",label:"Y",finger:"right-index",row:1,why:"Extensión lateral desde J."},{key:"u",label:"U",finger:"right-index",row:1,why:"Movimiento vertical desde J."},{key:"i",label:"I",finger:"right-middle",row:1,why:"Movimiento vertical desde K."},{key:"o",label:"O",finger:"right-ring",row:1,why:"Movimiento vertical desde L."},{key:"p",label:"P",finger:"right-pinky",row:1,why:"Posición superior externa."}],[{key:"a",label:"A",finger:"left-pinky",row:2,why:"Posición de reposo base."},{key:"s",label:"S",finger:"left-ring",row:2,why:"Posición de reposo base."},{key:"d",label:"D",finger:"left-middle",row:2,why:"Posición de reposo base."},{key:"f",label:"F",finger:"left-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"g",label:"G",finger:"left-index",row:2,why:"Extensión lateral cómoda."},{key:"h",label:"H",finger:"right-index",row:2,why:"Extensión lateral cómoda."},{key:"j",label:"J",finger:"right-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"k",label:"K",finger:"right-middle",row:2,why:"Posición de reposo base."},{key:"l",label:"L",finger:"right-ring",row:2,why:"Posición de reposo base."},{key:"ñ",label:"Ñ",finger:"right-pinky",row:2,why:"Posición de reposo base (Español)."}],[{key:"<",label:"<",finger:"left-pinky",row:3,why:"Tecla ISO para programación."},{key:"z",label:"Z",finger:"left-pinky",row:3,why:"Extensión inferior externa."},{key:"x",label:"X",finger:"left-ring",row:3,why:"Extensión diagonal inferior."},{key:"c",label:"C",finger:"left-middle",row:3,why:"Extensión diagonal inferior."},{key:"v",label:"V",finger:"left-index",row:3,why:"Extensión diagonal inferior."},{key:"b",label:"B",finger:"left-index",row:3,why:"Extensión lateral inferior."},{key:"n",label:"N",finger:"right-index",row:3,why:"Extensión lateral inferior."},{key:"m",label:"M",finger:"right-index",row:3,why:"Extensión diagonal inferior."},{key:",",label:",",finger:"right-middle",row:3,why:"Puntuación esencial."},{key:".",label:".",finger:"right-ring",row:3,why:"Fin de frase y decimales."},{key:"-",label:"-",finger:"right-pinky",row:3,why:"Barra alta y guiones."},{key:"-",label:"_",finger:"right-pinky",row:3,why:"Barra baja muy usada en código."}]],$t={};Zh.flat().forEach(r=>{$t[r.key.toLowerCase()]=r,$t[r.label.toLowerCase()]=r,r.key==="1"&&($t["!"]=r),r.key==="2"&&($t['"']=r),r.key==="3"&&($t["·"]=r),r.key==="4"&&($t.$=r),r.key==="5"&&($t["%"]=r),r.key==="6"&&($t["&"]=r),r.key==="7"&&($t["/"]=r),r.key==="8"&&($t["("]=r),r.key==="9"&&($t[")"]=r),r.key==="0"&&($t["="]=r),r.key==="<"&&($t[">"]=r),r.key===","&&($t[";"]=r),r.key==="."&&($t[":"]=r),r.key==="-"&&($t._=r)});const xA={á:"a",é:"e",í:"i",ó:"o",ú:"u",ü:"u",ï:"i",Á:"a",É:"e",Í:"i",Ó:"o",Ú:"u",Ñ:"ñ"};Object.entries(xA).forEach(([r,t])=>{$t[t]&&($t[r]={...$t[t],key:r,label:r.toUpperCase()})});const E_={key:" ",label:"Espacio",finger:"thumb",row:5,why:"Dedo más fuerte para la tecla más frecuente."};$t[" "]=E_;const yA=({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0}})=>{const l=(c,d,h,m)=>{const p=t.toLowerCase()===c.key.toLowerCase()||t===" "&&c.key===" ",v=r.toLowerCase()===c.key.toLowerCase();let g="mac-key ",_={};if(c.key===" "?g+="w-[250px] h-[44px] ":g+="w-[44px] h-[44px] ",v&&(g+="active "),p&&(g+="target "),i&&!v&&!p){const S=js[c.finger];_={borderColor:S,color:S,backgroundColor:`${S}10`,boxShadow:`0 0 10px ${S}20`}}else if(!v&&!p&&s){const S=h/(m||1),E=Math.max(0,1-S*2),A=Math.max(0,1-Math.abs(S-.5)*4),b=Math.max(0,(S-.5)*2),x=s.bass*E+s.mid*A+s.high*b;if(x>.02){const N=220+S*120;_={backgroundColor:`hsla(${N}, 70%, 50%, ${x*.25})`,boxShadow:`0 0 ${x*15}px hsla(${N}, 70%, 50%, 0.4)`,borderColor:`hsla(${N}, 70%, 50%, ${x*.5})`,color:`hsla(${N}, 70%, 90%, ${.6+x*.4})`}}}return O.jsxs("div",{className:g,style:_,children:[c.label,p&&O.jsx("div",{className:"absolute -bottom-1 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-glow)]"})]},c.key)};return O.jsxs("div",{className:"flex flex-col items-center gap-2 p-2 select-none opacity-80 hover:opacity-100 transition-opacity",children:[Zh.map((c,d)=>O.jsx("div",{className:`flex gap-1.5 ${d===3?"ml-6":""}`,children:c.map((h,m)=>l(h,d,m,c.length))},d)),O.jsx("div",{className:"flex justify-center mt-3",children:l(E_,5,0,1)})]})},Fv=[[{id:"esc",base:"Escape",shift:"Escape",alt:"Escape",special:"esc",width:"w-[60px]",h:"h-[22px]"},{id:"f1",base:"F1",shift:"F1",alt:"F1",label:"F1",special:"f",h:"h-[22px]"},{id:"f2",base:"F2",shift:"F2",alt:"F2",label:"F2",special:"f",h:"h-[22px]"},{id:"f3",base:"F3",shift:"F3",alt:"F3",label:"F3",special:"f",h:"h-[22px]"},{id:"f4",base:"F4",shift:"F4",alt:"F4",label:"F4",special:"f",h:"h-[22px]"},{id:"f5",base:"F5",shift:"F5",alt:"F5",label:"F5",special:"f",h:"h-[22px]"},{id:"f6",base:"F6",shift:"F6",alt:"F6",label:"F6",special:"f",h:"h-[22px]"},{id:"f7",base:"F7",shift:"F7",alt:"F7",label:"F7",special:"f",h:"h-[22px]"},{id:"f8",base:"F8",shift:"F8",alt:"F8",label:"F8",special:"f",h:"h-[22px]"},{id:"f9",base:"F9",shift:"F9",alt:"F9",label:"F9",special:"f",h:"h-[22px]"},{id:"f10",base:"F10",shift:"F10",alt:"F10",label:"F10",special:"f",h:"h-[22px]"},{id:"f11",base:"F11",shift:"F11",alt:"F11",label:"F11",special:"f",h:"h-[22px]"},{id:"f12",base:"F12",shift:"F12",alt:"F12",label:"F12",special:"f",h:"h-[22px]"},{id:"eject",base:"",shift:"",alt:"",label:"⚙",special:"eject",h:"h-[22px]",width:"w-[60px]"}],[{id:"row1_0",base:"º",shift:"ª",alt:"\\"},{id:"row1_1",base:"1",shift:"!",alt:"|"},{id:"row1_2",base:"2",shift:'"',alt:"@"},{id:"row1_3",base:"3",shift:"·",alt:"#"},{id:"row1_4",base:"4",shift:"$",alt:"~"},{id:"row1_5",base:"5",shift:"%",alt:"€"},{id:"row1_6",base:"6",shift:"&",alt:"¬"},{id:"row1_7",base:"7",shift:"/",alt:""},{id:"row1_8",base:"8",shift:"(",alt:""},{id:"row1_9",base:"9",shift:")",alt:""},{id:"row1_10",base:"0",shift:"=",alt:""},{id:"row1_11",base:"'",shift:"?",alt:""},{id:"row1_12",base:"¡",shift:"¿",alt:""},{id:"delete",base:"Backspace",shift:"Backspace",alt:"Backspace",label:"⌫",special:"delete",width:"w-[80px]"}],[{id:"tab",base:"Tab",shift:"Tab",alt:"Tab",label:"⇥",special:"tab",width:"w-[80px]"},{id:"q",base:"q",shift:"Q",alt:"q"},{id:"w",base:"w",shift:"W",alt:"w"},{id:"e",base:"e",shift:"E",alt:"é"},{id:"r",base:"r",shift:"R",alt:"r"},{id:"t",base:"t",shift:"T",alt:"t"},{id:"y",base:"y",shift:"Y",alt:"y"},{id:"u",base:"u",shift:"U",alt:"ú"},{id:"i",base:"i",shift:"I",alt:"í"},{id:"o",base:"o",shift:"O",alt:"ó"},{id:"p",base:"p",shift:"P",alt:"p"},{id:"row2_11",base:"`",shift:"^",alt:"["},{id:"row2_12",base:"+",shift:"*",alt:"]"},{id:"return",base:"Enter",shift:"Enter",alt:"Enter",label:"↵",special:"return",width:"w-[44px]",h:"h-[96px]"}],[{id:"caps",base:"CapsLock",shift:"CapsLock",alt:"CapsLock",label:"⇪",special:"caps",width:"w-[88px]"},{id:"a",base:"a",shift:"A",alt:"á"},{id:"s",base:"s",shift:"S",alt:"s"},{id:"d",base:"d",shift:"D",alt:"d"},{id:"f",base:"f",shift:"F",alt:"f"},{id:"g",base:"g",shift:"G",alt:"g"},{id:"h",base:"h",shift:"H",alt:"h"},{id:"j",base:"j",shift:"J",alt:"j"},{id:"k",base:"k",shift:"K",alt:"k"},{id:"l",base:"l",shift:"L",alt:"l"},{id:"ñ",base:"ñ",shift:"Ñ",alt:"ñ"},{id:"row3_11",base:"´",shift:"¨",alt:"{"},{id:"row3_12",base:"ç",shift:"Ç",alt:"}"}],[{id:"shift_l",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[56px]"},{id:"row4_1",base:"<",shift:">",alt:""},{id:"z",base:"z",shift:"Z",alt:"z"},{id:"x",base:"x",shift:"X",alt:"x"},{id:"c",base:"c",shift:"C",alt:"c"},{id:"v",base:"v",shift:"V",alt:"v"},{id:"b",base:"b",shift:"B",alt:"b"},{id:"n",base:"n",shift:"N",alt:"n"},{id:"m",base:"m",shift:"M",alt:"m"},{id:"row4_9",base:",",shift:";",alt:""},{id:"row4_10",base:".",shift:":",alt:""},{id:"row4_11",base:"-",shift:"_",alt:""},{id:"shift_r",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[118px]"}],[{id:"fn",base:"Fn",shift:"Fn",alt:"Fn",label:"fn",special:"fn",width:"w-[44px]"},{id:"ctrl",base:"Control",shift:"Control",alt:"Control",label:"⌃",special:"ctrl"},{id:"opt_l",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"cmd_l",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"space",base:" ",shift:" ",alt:" ",label:"",special:"space",width:"w-[250px]"},{id:"cmd_r",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"opt_r",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"left",base:"ArrowLeft",shift:"ArrowLeft",alt:"ArrowLeft",label:"◀",special:"left",h:"h-[22px]"},{id:"up",base:"ArrowUp",shift:"ArrowUp",alt:"ArrowUp",label:"▲",special:"up",h:"h-[22px]"},{id:"down",base:"ArrowDown",shift:"ArrowDown",alt:"ArrowDown",label:"▼",special:"down",h:"h-[22px]"},{id:"right",base:"ArrowRight",shift:"ArrowRight",alt:"ArrowRight",label:"▶",special:"right",h:"h-[22px]"}]],SA=({top:r,bottom:t,right:i})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full pt-0 pb-[2px]",children:[O.jsx("span",{className:"text-[10px] leading-none font-medium mb-1 opacity-80",children:r}),O.jsx("span",{className:"text-[13px] font-bold leading-none",children:t})]}),i&&O.jsx("span",{className:"absolute bottom-[4px] right-[4px] text-[10px] leading-none font-medium opacity-70",children:i})]}),bA=({t:r,b:t})=>O.jsxs("div",{className:"flex flex-col items-center justify-center",children:[O.jsx("span",{className:"text-[10px] mb-0.5 opacity-70",children:r}),O.jsx("span",{className:"text-[12px] font-bold",children:t})]}),zv=({l:r,s:t})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:O.jsx("span",{className:"text-[12px] font-medium",children:r})}),t&&O.jsx("span",{className:"absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium",children:t})]}),MA=Zi.memo(({focused:r})=>{let t="rgba(255,255,255,0.05)",i="rgba(255,255,255,0.12)",s="rgba(255,255,255,0.8)";return r&&(t="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3)",i="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 1)",s="#fff"),O.jsxs("div",{style:{position:"relative",width:"44px",height:"94px",flexShrink:0},children:[O.jsx("svg",{fill:"none",width:"44",height:"94",style:{position:"absolute",top:0,left:0},children:O.jsx("path",{d:"M 6.5,0.5 L 37.5,0.5 Q 43.5,0.5 43.5,6.5 L 43.5,87.5 Q 43.5,93.5 37.5,93.5 L 14.5,93.5 Q 8.5,93.5 8.5,87.5 L 8.5,48.5 Q 8.5,44.5 6.5,44.5 Q 0.5,44.5 0.5,38.5 L 0.5,6.5 Q 0.5,0.5 6.5,0.5 Z",fill:t,stroke:i,strokeWidth:"1",style:{transition:"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)"}})}),O.jsx("div",{style:{position:"absolute",top:0,left:6,width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",color:s,fontSize:"14px",transition:"color 0.1s"},children:"↵"})]})}),us=Zi.memo(({keyDef:r,active:t,target:i,highlighted:s,showZones:l,fingerColor:c})=>{if(r.special==="return")return O.jsx("div",{className:`transition-all ${t||i?"scale-105 -translate-y-[2px] z-20":""}`,style:{marginLeft:"-8px",height:"44px",zIndex:10,position:"relative"},children:O.jsx(MA,{focused:t||i})});let d=`mac-key ${r.width||"w-[44px]"} ${r.h||"h-[44px]"} ${r.className||""} `;t&&(d+="active "),i&&(d+="target "),s&&(d+="highlighted ");let h={};l&&!t&&!i&&!s&&c&&(h={borderColor:c,color:c,backgroundColor:`${c}10`,boxShadow:`0 0 8px ${c}20`});let m=r.label||r.base;return r.id.startsWith("row1_")||r.id==="row2_11"||r.id==="row2_12"||r.id==="row3_11"?m=O.jsx(SA,{top:r.shift,bottom:r.base,right:r.alt===r.base?void 0:r.alt}):r.id==="row3_12"?m=O.jsx(zv,{l:"Ç",s:"}"}):r.id.match(/^[a-zñ]$/)?m=O.jsx(zv,{l:r.base.toUpperCase(),s:r.alt===r.base?"":r.alt}):r.shift&&r.shift!==r.base&&!r.special&&(m=O.jsx(bA,{t:r.shift,b:r.base})),O.jsxs("div",{className:d.trim(),style:h,children:[r.special==="caps"&&O.jsx("div",{className:`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${t?"opacity-100":"opacity-0"}`}),m]})}),EA=Zi.memo(({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0},highlightedKeys:l=[],isWaveActive:c=!1})=>{const d=pe.useCallback(g=>g.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),[]),h=pe.useCallback(g=>{const _=g.id.toLowerCase(),S=g.base.toLowerCase(),E=t.toLowerCase(),A=d(t);if(g.special==="space"&&t===" "||g.special==="return"&&(t==="enter"||t==="return")||S===A||_===A||g.shift.toLowerCase()===E||g.alt.toLowerCase()===E)return!0;const b={row1_0:["º","\\","ª"],row1_1:["1","!","|"],row1_2:["2",'"',"@"],row1_3:["3","·","#"],row1_4:["4","$","~"],row1_5:["5","%","€"],row1_6:["6","&","¬"],row2_11:["[","^","`"],row2_12:["]","*","+"],row3_11:["{","¨","´"],row3_12:["}","ç","Ç"]};return b[g.id]?b[g.id].includes(t):!1},[t,d]),m=pe.useCallback(g=>{var A;const _=g.id.toLowerCase(),S=g.base.toLowerCase(),E=r.toLowerCase();return g.special==="space"&&r===" "||g.special==="return"&&E==="enter"||g.special==="delete"&&(E==="backspace"||E==="delete")?!0:_===E||S===E||g.shift.toLowerCase()===E||((A=g.label)==null?void 0:A.toLowerCase())===E},[r]),p=pe.useCallback(g=>l.some(_=>_.toLowerCase()===g.id.toLowerCase()||_.toLowerCase()===g.base.toLowerCase()),[l]),v=pe.useCallback(g=>{let _=g.id.toLowerCase();if(g.special==="tab"||g.special==="caps"||g.special==="shift"||g.special==="ctrl"||g.special==="fn")return js["left-pinky"];if(g.special==="return"||g.special==="delete")return js["right-pinky"];if(g.special==="space"||g.special==="opt"||g.special==="cmd")return js.thumb;const S=$t[_]||$t[g.base.toLowerCase()];return S?js[S.finger]:null},[]);return O.jsx("div",{className:"scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none",children:O.jsx("div",{className:"bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]",children:Fv.map((g,_)=>{if(_===3)return null;if(_===2)return O.jsxs("div",{className:"flex flex-row gap-[6px] items-start",children:[O.jsxs("div",{className:"flex flex-col gap-[6px]",children:[O.jsx("div",{className:"flex flex-row gap-[6px]",children:g.slice(0,-1).map(E=>O.jsx(us,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))}),O.jsx("div",{className:"flex flex-row gap-[6px]",children:Fv[3].map(E=>O.jsx(us,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))})]}),O.jsx(us,{keyDef:g[g.length-1],active:m(g[g.length-1]),target:h(g[g.length-1]),highlighted:p(g[g.length-1]),showZones:i,fingerColor:v(g[g.length-1])})]},"merged-row-2-3");const S=_===5;return O.jsx("div",{className:"flex flex-row gap-[6px] items-end",children:g.map((E,A)=>S&&(E.id==="left"||E.id==="up"||E.id==="down"||E.id==="right")?E.id!=="left"?null:O.jsxs(Zi.Fragment,{children:[O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(us,{keyDef:g[A],active:m(g[A]),target:h(g[A]),highlighted:p(g[A]),showZones:i,fingerColor:v(g[A])})}),O.jsxs("div",{className:"flex flex-col gap-[2px] w-[44px]",children:[O.jsx(us,{keyDef:g[A+1],active:m(g[A+1]),target:h(g[A+1]),highlighted:p(g[A+1]),showZones:i,fingerColor:v(g[A+1])}),O.jsx(us,{keyDef:g[A+2],active:m(g[A+2]),target:h(g[A+2]),highlighted:p(g[A+2]),showZones:i,fingerColor:v(g[A+2])})]}),O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(us,{keyDef:g[A+3],active:m(g[A+3]),target:h(g[A+3]),highlighted:p(g[A+3]),showZones:i,fingerColor:v(g[A+3])})})]},"arrows"):O.jsx(us,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))},_)})})})}),TA=({analyser:r,active:t,color:i,type:s,opacityMultiplier:l=1,yOffset:c=0})=>{const d=pe.useRef(null),h=pe.useRef(null);return pe.useEffect(()=>{let m,p=0,v=0;const g=new Uint8Array(r.frequencyBinCount),_=()=>{r.getByteFrequencyData(g);let S=0;if(s==="kick"){for(let L=0;L<4;L++)S+=g[L];S/=4}else if(s==="bass"){for(let L=2;L<12;L++)S+=g[L];S/=10}else if(s==="hihat"||s==="percussion"||s==="snare"||s==="ghost"){for(let L=30;L<60;L++)S+=g[L];S/=30,S*=3}else if(s==="lead"){for(let L=10;L<30;L++)S+=g[L];S/=20}else if(s==="ambient"){for(let L=0;L<20;L++)S+=g[L];S/=20}else{for(let L=0;L<20;L++)S+=g[L];S/=20}const E=Math.min(S/255,1);v+=(E-v)*.15;const A=200,x=40/2+c,N=24;p+=.02+v*.05;const D=[];for(let L=0;L<=N;L++){const P=L/N*A,B=L/N*2-1,X=Math.exp(-Math.pow(B*1.8,2));let T=0;const R=5+v*25;s==="kick"?T=Math.sin(p*8)*R*X*Math.cos(B*Math.PI):s==="hihat"||s==="snare"||s==="ghost"?(T=Math.sin(B*20+p*30)*R*.4*X,T+=(Math.random()-.5)*R*.2*X):(T=Math.sin(B*4+p*5)*R*X,T+=Math.sin(B*8-p*3)*(R*.3)*X),D.push({x:P,y:x+T})}const U=D.reduce((L,P,B)=>{if(B===0)return`M ${P.x},${P.y}`;const X=D[B-1],T=X.x+(P.x-X.x)/2;return L+` C ${T},${X.y} ${T},${P.y} ${P.x},${P.y}`},"");if(d.current&&(d.current.setAttribute("d",U),d.current.setAttribute("stroke-width",(.8+v*1.5).toFixed(2))),h.current){const L=t?(.6+v*.4)*l:.1;h.current.style.opacity=L.toString()}m=requestAnimationFrame(_)};return _(),()=>cancelAnimationFrame(m)},[r,s,c,t,l]),O.jsx("div",{ref:h,className:"absolute inset-0 pointer-events-none overflow-hidden rounded-xl bg-blend-screen",style:{transition:"opacity 0.2s ease-out"},children:O.jsx("svg",{className:"w-full h-full",viewBox:"0 0 200 40",preserveAspectRatio:"none",children:O.jsx("path",{ref:d,fill:"none",stroke:i,strokeLinecap:"round",strokeLinejoin:"round"})})})},AA=Zi.memo(({keyboardType:r,activeKey:t,targetChar:i,showZones:s,isMusicLightingEnabled:l,frequencyBands:c,stats:d,isZenMode:h,score:m,onRestart:p,onZenToggle:v,audioReady:g,audioSystem:_,currentMusicStyle:S,startTime:E,isFinished:A,combo:b,comboMultiplier:x,onDimensionalMenu:N,hexToRgba:D,customColor:U,highlightedKeys:L=[],isWaveActive:P=!1,isLevelActive:B=!1,onGoHome:X})=>{const T=l?c:{bass:0,mid:0,high:0};return O.jsxs("div",{className:"flex flex-col items-center w-full transition-all duration-500 z-20 pb-2 gap-2",children:[O.jsxs("div",{className:"w-full max-w-[900px] flex items-center justify-between gap-4 px-2",children:[O.jsx("div",{className:"flex gap-2",children:O.jsx("button",{onClick:p,className:"h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-lg",title:"Reiniciar",children:O.jsx("i",{className:"fa fa-refresh"})})}),O.jsxs("div",{className:"h-11 flex-grow max-w-[420px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-6 overflow-hidden shadow-2xl transition-all duration-500 relative",style:{boxShadow:b>15?`0 0 30px ${D(U,.3)}`:"none"},children:[g&&_&&S.layers.map(R=>b*x>=R.minCombo&&(R.maxCombo===void 0||b*x<=R.maxCombo)&&O.jsx(TA,{analyser:_.getAnalysers()[R.id]||_.getAnalysers().master,type:R.type,color:R.color,active:E!==null&&!A,opacityMultiplier:R.opacity,yOffset:R.yOffset},R.id)),O.jsxs("div",{className:"flex items-center gap-4 relative z-10 w-full justify-between",children:[O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:d.wpm}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"WPM"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--text-primary)] font-mono",children:d.accuracy}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"%ACC"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:`text-[12px] font-black font-mono transition-all ${b>0?"text-[var(--accent-primary)]":"text-[var(--text-muted)]"}`,children:b}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"COMBO"})]}),O.jsxs("div",{className:"flex items-baseline gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:m.toLocaleString()}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase ml-1",children:"SCORE"})]}),O.jsxs("div",{className:"flex items-center gap-1 opacity-40 animate-pulse",children:[O.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"}),O.jsx("span",{className:"text-[6px] font-black text-[var(--text-secondary)]",children:"LIVE"})]})]})]}),O.jsxs("div",{className:"flex flex-col gap-2 relative",children:[O.jsx("button",{onClick:N,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg hover:scale-105 active:scale-95",title:"Control Center",children:O.jsx("i",{className:"fa fa-gear"})}),B&&O.jsx("button",{onClick:X,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-top-2 duration-300",title:"Volver al Selector",children:O.jsx("i",{className:"fa fa-home"})})]})]}),O.jsx("div",{className:"flex justify-center w-full transition-all duration-500 transform hover:scale-[1.01]",children:r==="standard"?O.jsx(yA,{activeKey:t,targetKey:i,showZones:s,bands:T}):O.jsx(EA,{activeKey:t,targetKey:i,showZones:s,bands:T,highlightedKeys:L,isWaveActive:P})})]})}),CA=({isOpen:r,onClose:t,language:i,onLanguageChange:s,currentMusicStyle:l,onMusicStyleChange:c,TECHNO_STYLE:d,AMBIENT_STYLE:h,ACID_HOUSE_STYLE:m,getBtnClass:p,themes:v,currentTheme:g,onThemeChange:_})=>{const S=Zi.useMemo(()=>{const E={};return Zh.flat().forEach(A=>{E[A.finger]||(E[A.finger]=[]),E[A.finger].includes(A.label)||E[A.finger].push(A.label)}),E},[]);return O.jsxs("aside",{className:`fixed top-0 left-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${r?"translate-x-0":"-translate-x-full"} overflow-y-auto custom-scrollbar`,children:[O.jsxs("div",{className:"flex items-center justify-between mb-12",children:[O.jsxs("div",{className:"flex items-center gap-4",children:[O.jsx("div",{className:"w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]",children:"Typ_"}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]",children:"System_Core"})]}),O.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{className:"space-y-4 mb-12",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Idioma del Sistema"}),O.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[O.jsxs("button",{onClick:()=>s("es"),className:p(i==="es"),children:[O.jsx("span",{children:"Español"})," ",O.jsx("span",{children:"🇪🇸"})]}),O.jsxs("button",{onClick:()=>s("en"),className:p(i==="en"),children:[O.jsx("span",{children:"English"})," ",O.jsx("span",{children:"🇺🇸"})]})]})]}),O.jsxs("div",{className:"mt-12 space-y-6",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Mapeo de Dedos"}),O.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.entries(_A).filter(([E])=>E!=="thumb").map(([E,A])=>O.jsxs("div",{className:"p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group",children:[O.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[O.jsx("span",{className:"w-2 h-2 rounded-full shadow-[0_0_8px]",style:{backgroundColor:js[E],boxShadow:`0 0 10px ${js[E]}`}}),O.jsx("span",{className:"text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate",children:A})]}),O.jsx("div",{className:"flex flex-wrap gap-1",children:(S[E]||[]).sort().map(b=>O.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]",children:b},b))})]},E))})]})]})},RA=({isOpen:r,onClose:t,getBtnClass:i,currentMusicStyle:s,onMusicStyleChange:l,TECHNO_STYLE:c,AMBIENT_STYLE:d,ACID_HOUSE_STYLE:h,score:m})=>O.jsx("aside",{className:`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:O.jsxs("div",{className:"flex flex-col gap-8 mb-8 shrink-0",children:[O.jsxs("div",{className:"flex items-center justify-between mb-4",children:[O.jsxs("div",{className:"flex flex-col",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-1",children:"Estado de Sesión"}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("span",{className:"text-[24px] font-black text-[var(--text-primary)] tracking-tighter",children:m.toLocaleString()}),O.jsx("span",{className:"text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-2 italic opacity-50",children:"Pts"})]})]}),O.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4",children:"Estilos de Música"}),O.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[O.jsxs("button",{onClick:()=>l(c),className:i(s===c),children:[O.jsx("span",{children:c.name})," ",O.jsx("i",{className:"fa fa-bolt"})]}),O.jsxs("button",{onClick:()=>l(d),className:i(s===d),children:[O.jsx("span",{children:d.name})," ",O.jsx("i",{className:"fa fa-leaf"})]}),O.jsxs("button",{onClick:()=>l(h),className:i(s===h),children:[O.jsx("span",{children:h.name})," ",O.jsx("i",{className:"fa fa-flask"})]})]})]})]})});function Fc(r,t,i){return r*i+t}function wA(r,t,i){const s=Math.max(0,Math.min(1,(i-r)/(t-r)));return s*s*(3-2*s)}class Ra{constructor(t=0,i=0){this.x=t,this.y=i}zero(){this.reset(0,0)}reset(t=0,i=0){this.x=t,this.y=i}clone(){return new Ra(this.x,this.y)}add(t){return this.x+=t.x,this.y+=t.y,this}addNew(t){return this.clone().add(t)}subtract(t){return this.x-=t.x,this.y-=t.y,this}subtractNew(t){return this.clone().subtract(t)}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyNew(t){return this.clone().multiply(t)}scale(t){return this.x*=t,this.y*=t,this}scaleNew(t){return this.clone().scale(t)}get lengthSquared(){return this.x**2+this.y**2}get length(){return Math.hypot(this.x,this.y)}get angle(){return Math.atan2(this.y,this.x)}}class DA{constructor({x:t=0,y:i=0,pinned:s=!1,id:l=0,char:c=" "}={}){this.pos=new Ra(t,i),this.oldPos=new Ra(t,i),this.velocity=new Ra,this.acceleration=new Ra,this.pinned=s,this.originalPinnedState=s,this.id=l,this.char=c,this.gravityVec=new Ra}contain(t){if(this.pinned)return;const i=5;this.pos.x<i?(this.pos.x=i,this.oldPos.x=this.pos.x+Math.abs(this.oldPos.x-this.pos.x)*.8):this.pos.x>t.awidth-i&&(this.pos.x=t.awidth-i,this.oldPos.x=this.pos.x-Math.abs(this.oldPos.x-this.pos.x)*.8)}update(t,i){if(this.pinned){this.acceleration.zero();return}this.velocity.reset((this.pos.x-this.oldPos.x)*i.damping,(this.pos.y-this.oldPos.y)*i.damping),this.oldPos.reset(this.pos.x,this.pos.y);const s=t**2;this.gravityVec.reset(0,i.gravity/s),this.applyForce(this.gravityVec),this.pos.x+=this.velocity.x+this.acceleration.x*s,this.pos.y+=this.velocity.y+this.acceleration.y*s,this.acceleration.reset()}applyForce(t){this.acceleration.add(t)}}class Iv{constructor({p1:t,p2:i,length:s,id:l,compressFactor:c,stretchFactor:d,isSpacer:h=!1}){this.p1=t,this.p2=i,this.length=s,this.id=l,this.minLength=s*c,this.maxLength=s*d,this.isSpacer=h}solve(){const t=this.p2.pos.x-this.p1.pos.x,i=this.p2.pos.y-this.p1.pos.y,s=Math.hypot(t,i);if(s===0)return;let l=this.length;if(s<this.minLength)l=this.minLength;else if(s>this.maxLength)l=this.maxLength;else return;const d=(l-s)/s/2,h=t*d,m=i*d;this.p1.pinned||(this.p1.pos.x-=h,this.p1.pos.y-=m),this.p2.pinned||(this.p2.pos.x+=h,this.p2.pos.y+=m)}}class NA{constructor({c:t,particles:i,CONFIG:s}){this.grabbedParticle=null,this.pointerIsDown=!1,this.c=t,this.particles=i,this.CONFIG=s,this.mousePos=new Ra,this.grabRadius=20,this.bind()}pointerdown(t){const i=this.c.getBoundingClientRect();this.mousePos.x=t.clientX-i.left-(this.c.width/2-this.CONFIG.awidth/2),this.mousePos.y=t.clientY-i.top-(this.c.height/2-this.CONFIG.aheight/2);for(const s of this.particles)if(this.mousePos.subtractNew(s.pos).length<this.grabRadius){this.grabbedParticle=s,this.grabbedParticle.originalPinnedState=this.grabbedParticle.pinned,this.grabbedParticle.pinned=!0;break}this.grabbedParticle||(this.pointerIsDown=!0)}pointerup(t){this.grabbedParticle&&(this.grabbedParticle.pinned=this.grabbedParticle.originalPinnedState,this.grabbedParticle=null),clearTimeout(this.pointerUpTimer),this.pointerUpTimer=setTimeout(()=>{this.pointerIsDown=!1},1e3)}pointermove(t){const i=this.c.getBoundingClientRect();this.mousePos.x=t.clientX-i.left-(this.c.width/2-this.CONFIG.awidth/2),this.mousePos.y=t.clientY-i.top-(this.c.height/2-this.CONFIG.aheight/2),this.grabbedParticle&&(this.grabbedParticle.pos.reset(this.mousePos.x,this.mousePos.y),this.grabbedParticle.oldPos.reset(this.mousePos.x,this.mousePos.y));for(const s of this.particles){const l=this.mousePos.subtractNew(s.pos),c=l.lengthSquared;if(c<this.CONFIG.mouseSize){const d=l.angle-Math.PI,h=wA(this.CONFIG.mouseSize,-2e3,c)*this.CONFIG.mouseStrength/300,m=new Ra(Math.cos(d)*h,Math.sin(d)*h);s.applyForce(m)}}}bind(){this.pointerdown=this.pointerdown.bind(this),this.pointerup=this.pointerup.bind(this),this.pointermove=this.pointermove.bind(this),this.c.addEventListener("pointerdown",this.pointerdown),window.addEventListener("pointerup",this.pointerup),window.addEventListener("pointermove",this.pointermove)}unbind(){this.c.removeEventListener("pointerdown",this.pointerdown),window.removeEventListener("pointerup",this.pointerup),window.removeEventListener("pointermove",this.pointermove)}}const Bv=({text:r,color:t="#FFFFFF",frequencyBands:i={bass:0,mid:0,high:0}})=>{const s=pe.useRef(null),l=pe.useRef(null),c=pe.useRef([]),d=pe.useRef({}),h=pe.useRef(i),m=pe.useRef({}),[p,v]=pe.useState({w:0,h:0});return pe.useEffect(()=>{h.current=i},[i]),pe.useEffect(()=>{const g=l.current;if(!g)return;const _=new ResizeObserver(S=>{for(let E of S)v({w:Math.floor(E.contentRect.width),h:Math.floor(E.contentRect.height)})});return _.observe(g),()=>_.disconnect()},[]),pe.useEffect(()=>{const g=s.current,_=l.current;if(!g||!_||p.w<=0||p.h<=0)return;const S=g.getContext("2d");if(!S)return;const{w:E,h:A}=p,b={awidth:E,aheight:A,gridW:Math.max(5,Math.floor(E/18)),gridH:Math.max(10,Math.floor(A/18)),gravity:.2,damping:.98,iterationsPerFrame:5,compressFactor:.1,stretchFactor:1.1,mouseSize:4e3,mouseStrength:5,contain:!0,randomSolve:!1},x=b.awidth/b.gridW,N=b.aheight/b.gridH;d.current={...b,cellWidth:x,cellHeight:N},g.width=E,g.height=A;const D=[],U=[];for(let R=0;R<b.gridH;R++)for(let H=0;H<b.gridW;H++){const q=(H+.5)*x,Y=(R+.5)*N,ae=R===0,le=new DA({x:q,y:Y,pinned:ae,id:Fc(R,H,b.gridW)});D.push(le)}for(let R=0;R<b.gridH;R++)for(let H=0;H<b.gridW;H++){const q=Fc(R,H,b.gridW),Y=D[q];if(Y){if(R<b.gridH-1){const ae=D[Fc(R+1,H,b.gridW)];if(ae){const le=new Iv({p1:Y,p2:ae,length:N,compressFactor:b.compressFactor,stretchFactor:b.stretchFactor});U.push(le),Y.downConstraint=le}}if(H<b.gridW-1){const ae=D[Fc(R,H+1,b.gridW)];if(ae){const le=new Iv({p1:Y,p2:ae,length:x,compressFactor:.6,stretchFactor:4,isSpacer:!0});U.push(le)}}}}c.current=D;const L=new NA({c:g,particles:D,CONFIG:d.current});let P,B=performance.now();function X(){if(!g||!S)return;S.clearRect(0,0,g.width,g.height);const R=[g.width/2-d.current.awidth/2,0];D.forEach(H=>{if(H.char&&H.char!==" "){const q=m.current[H.char];if(!q)return;const Y=q.width/2;S.drawImage(q,H.pos.x+R[0]-Y,H.pos.y+R[1]-Y)}})}function T(R){P=requestAnimationFrame(T);let H=R-B;H>50&&(H=16),B=R,D.forEach(le=>le.update(H,d.current));const{bass:q,mid:Y,high:ae}=h.current;if(q>.05||Y>.05){const le=-q*30,F=(Y-ae)*30;D.forEach(k=>{if(!k.pinned){const J=.8+Math.random()*.4;k.pos.y+=le*J,k.pos.x+=F*(k.pos.y/b.aheight)*J}})}for(let le=0;le<b.iterationsPerFrame;le++)U.forEach(F=>F.solve());D.forEach(le=>le.contain(d.current)),X()}return P=requestAnimationFrame(T),()=>{cancelAnimationFrame(P),L.unbind()}},[p.w,p.h]),pe.useEffect(()=>{const g=d.current;if(!g.gridW)return;const _=Array.from(r||""),S=Math.max(7,g.cellHeight*.9);d.current.lastColor!==t&&(m.current={},d.current.lastColor=t);const E={...m.current};for(const A of new Set(_)){if(A===" "||E[A])continue;const b=document.createElement("canvas");b.width=b.height=Math.ceil(S*1.5);const x=b.getContext("2d");x&&(x.font=`bold ${S}px monospace`,x.textAlign="center",x.textBaseline="middle",x.fillStyle=t,x.fillText(A,b.width/2,b.height/2)),E[A]=b}m.current=E,c.current.forEach((A,b)=>{A.char=b<_.length?_[b]:" "})},[r,t]),O.jsx("div",{ref:l,className:"absolute inset-0 w-full h-full pointer-events-auto",children:O.jsx("canvas",{ref:s,className:"w-full h-full block"})})};class UA{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterAnalyser=this.ctx.createAnalyser(),this.masterAnalyser.fftSize=512,this.masterAnalyser.smoothingTimeConstant=.88,this.masterGain.connect(this.masterAnalyser),this.masterAnalyser.connect(this.ctx.destination),this.kickGain=this.ctx.createGain(),this.kickAnalyser=this.ctx.createAnalyser(),this.kickAnalyser.fftSize=256,this.kickGain.connect(this.kickAnalyser),this.kickAnalyser.connect(this.masterGain),this.bassGain=this.ctx.createGain(),this.bassAnalyser=this.ctx.createAnalyser(),this.bassAnalyser.fftSize=512,this.bassGain.connect(this.bassAnalyser),this.bassAnalyser.connect(this.masterGain),this.hihatGain=this.ctx.createGain(),this.hihatAnalyser=this.ctx.createAnalyser(),this.hihatAnalyser.fftSize=256,this.hihatGain.connect(this.hihatAnalyser),this.hihatAnalyser.connect(this.masterGain),this.snareGain=this.ctx.createGain(),this.snareAnalyser=this.ctx.createAnalyser(),this.snareAnalyser.fftSize=256,this.snareGain.connect(this.snareAnalyser),this.snareAnalyser.connect(this.masterGain),this.leadGain=this.ctx.createGain(),this.leadAnalyser=this.ctx.createAnalyser(),this.leadAnalyser.fftSize=256,this.leadGain.connect(this.leadAnalyser),this.leadAnalyser.connect(this.masterGain),this.ghostGain=this.ctx.createGain(),this.ghostAnalyser=this.ctx.createAnalyser(),this.ghostAnalyser.fftSize=256,this.ghostGain.connect(this.ghostAnalyser),this.ghostAnalyser.connect(this.masterGain)}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}playKick(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),t.connect(i),i.connect(this.kickGain),t.start(),t.stop(this.ctx.currentTime+.3)}playHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=8e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.05,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.hihatGain),t.start()}playSnare(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.1,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=1;const d=this.ctx.createGain();d.gain.setValueAtTime(.1,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.connect(c),c.connect(d),d.connect(this.snareGain),t.start()}playGhostHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=12e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.02,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.ghostGain),t.start()}playLead(t,i){this.resume();const s=this.ctx.currentTime,l=[this.ctx.createOscillator(),this.ctx.createOscillator(),this.ctx.createOscillator()],c=this.ctx.createGain(),d=this.ctx.createBiquadFilter();l[0].type="sawtooth",l[1].type="sawtooth",l[2].type="sawtooth",l[0].frequency.setValueAtTime(t,s),l[1].frequency.setValueAtTime(t*1.005,s),l[2].frequency.setValueAtTime(t*.995,s),d.type="lowpass";const h=t*3+i*50;d.frequency.setValueAtTime(h,s),d.frequency.exponentialRampToValueAtTime(t*.5,s+.35),d.Q.value=12,c.gain.setValueAtTime(.06,s),c.gain.exponentialRampToValueAtTime(.001,s+.4),l.forEach(m=>{m.connect(d),m.start(s),m.stop(s+.4)}),d.connect(c),c.connect(this.leadGain)}playBass(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter();l.type="sawtooth",c.type="sine",l.frequency.setValueAtTime(t,s),c.frequency.setValueAtTime(t*.5,s),h.type="lowpass";const m=200+Math.min(i,30)*150;h.frequency.setValueAtTime(m,s),h.frequency.exponentialRampToValueAtTime(100,s+.15),h.Q.value=20,d.gain.setValueAtTime(.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.15),l.connect(h),c.connect(h),h.connect(d),d.connect(this.bassGain),l.start(s),c.start(s),l.stop(s+.15),c.stop(s+.15)}playSuccess(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter(),p=(i?440:880)+t%8*110;l.type="sawtooth",c.type="square",l.frequency.setValueAtTime(p,s),c.frequency.setValueAtTime(p*2.01,s),h.type="highpass",h.frequency.setValueAtTime(2e3,s),h.frequency.exponentialRampToValueAtTime(8e3,s+.1),d.gain.setValueAtTime(i?.03:.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.2),l.connect(h),c.connect(h),h.connect(d),d.connect(this.masterGain),l.start(s),c.start(s),l.stop(s+.2),c.stop(s+.2)}playError(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(30,this.ctx.currentTime+.2),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.2)}getAnalysers(){return{master:this.masterAnalyser,kick:this.kickAnalyser,bass:this.bassAnalyser,hihat:this.hihatAnalyser,snare:this.snareAnalyser,lead:this.leadAnalyser,ghost:this.ghostAnalyser}}getEnergy(){if(!this.masterAnalyser)return 0;const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);let i=0;for(let s=0;s<t.length;s++)i+=t[s];return i/t.length/255}getFrequencyBands(){if(!this.masterAnalyser)return{bass:0,mid:0,high:0};const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);const i=t.length,s=Math.floor(i*.1),l=Math.floor(i*.5);let c=0,d=0,h=0;for(let m=0;m<s;m++)c+=t[m];for(let m=s;m<l;m++)d+=t[m];for(let m=l;m<i;m++)h+=t[m];return{bass:c/(s||1)/255,mid:d/(l-s||1)/255,high:h/(i-l||1)/255}}}class LA{constructor(t,i){this.intervalId=null,this.step=0,this.comboMultiplier=1,this.audioSystem=t,this.currentStyle=i}setStyle(t){!!this.intervalId&&this.stop(),this.currentStyle=t,this.step=0}setMultiplier(t){this.comboMultiplier=t}start(t){if(this.intervalId)return;const s=60/this.currentStyle.bpm/4;this.intervalId=window.setInterval(()=>{const l=t(),c=this.step%16;if(l>0){const d=l*this.comboMultiplier;this.currentStyle.layers.forEach(h=>{d>=h.minCombo&&(h.maxCombo===void 0||d<=h.maxCombo)&&h.pattern(c)&&h.play(this.audioSystem,c,l)})}this.step++},s*1e3)}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}const Hv={es:{basico:["El veloz murciélago hindú comía feliz cardillo y kiwi.","La constancia es la clave del éxito en cualquier disciplina.","Mañana será un gran día para aprender algo nuevo.","Caminar por la playa al atardecer es muy relajante.","La mecanografía veloz requiere práctica diaria y paciencia."],programacion:["const pipeline = (data) => data.map(x => x * 2);","function initApp() { return new Promise(resolve => {}); }","export default class MyComponent extends React.Component {","if (process.env.NODE_ENV === 'production') { console.log('Live'); }","const { name, version } = JSON.parse(fs.readFileSync('package.json'));"],teclas_raras:["¿Viste cómo el pingüino corría hacia el iglú? ¡Increíble!","Los caracteres [ corchetes ] y { llaves } son vitales en JSON.","El símbolo ~ (tilde de la ñ) y ^ (circunflejo) son poco usados.","La ruta C:\\Users\\Admin\\Documents/test.txt usa barras inversas.","¿Sabías que 2^10 es igual a 1024? ¡Es potencia binaria!"],acentuacion:["El capitán pidió un café exprés y un té tras el festín en el jardín.","Álvaro compró un jarrón de mármol azul y un sillón ortopédico.","Sé que él no te dio el libro, pero tú aún no sabes qué pasó allí.","El murciélago sobrevoló el área de forma frenética y enigmática.","Raúl leía la biografía de un héroe que vivía en un país lejano.","¿Cuándo vendrás? Dime si el examen de matemáticas fue difícil o fácil.","El árbol de caoba creció rápido gracias al fértil césped del jardín.","Sólo tú sabes qué es lo que más te conviene para el próximo decenio.","Ojalá el médico apruebe el análisis del líquido cefalorraquídeo hoy.","Escribía con ímpetu mientras el búho observaba desde el ático vacío."]},en:{basico:["The quick brown fox jumps over the lazy dog.","Consistency is more important than intensity.","Every day is a second chance to improve your skills.","Reading books opens your mind to new perspectives.","Success is the sum of small efforts repeated daily."],programacion:["const fetchData = async (url) => await fetch(url).json();","git commit -m 'feat: add localization to phrase system'","while (true) { if (battery < 20) break; }","import { useState, useEffect } from 'react';","array.reduce((acc, curr) => acc + curr, 0);"],teclas_raras:["Wait! Did you see the [bracketed] text in the {curly} braces?","The pipe | symbol is used for redirects in Linux terminals.","Is it true that 5 > 3 and 2 < 4? Let's check logic!","Type 'cd ../../' to go back two directories in the shell.","The #hashtag is used for comments in many config files."],acentuacion:["The résumé of the employé was impeccable and very detailed.","She visited the café to drink a frappé during her vacation.","The façade of the building had a beautiful décor in the façade.","Please cooperate with the naïve protégé during the soirée.","It is a cliché to say that the jalapeño is very spicy."]},fr:{basico:["Portez ce vieux vieux vieux vieux vieux vieux vieux vieux vieux.","La vie est belle quand on prend le temps de l'apprécier.","Apprendre à taper vite demande de la rigueur et du temps.","Le succès est le fruit d'un travail acharné et constant.","Chaque jour est une nouvelle opportunité de grandir."],programacion:["let reponse = await prompt('Voulez-vous continuer ?');","const config = { langue: 'fr', theme: 'sombre' };","console.error(`Erreur fatale : ${error.message}`);","for (let i = 0; i < liste.length; i++) { doSomething(); }","document.querySelector('.app').addEventListener('click', e => {});"],teclas_raras:["L'élève a-t-il reçu ses 100€ pour son déjeuner ?","Regardez l'icône { } et [ ] dans l'éditeur de code.","Le carácter ~ est rare, tout comme le symbole | (pipe).","Utilisez-vous souvent el guion bajo _ o el guion medio - ?","Attention aux caractères spéciaux comme ^ y ¨ !"],acentuacion:["L'événement théâtral a été un succès grâce à l'héroïne.","Où est le garçon qui a mangé le gâteau à la crème fraîche ?","C'est l'été, le maïs mûrit sous le château de la forêt.","L'étudiant a étudié l'algèbre et la géométrie à l'école.","Il paraît que le poète déteste les huîtres et le thé glacé."]}},OA=(r,t,i=5)=>{var m;let s="basico";const l=t.toLowerCase();(l.includes("raras")||l.includes("especial"))&&(s="teclas_raras"),(l.includes("progra")||l.includes("código"))&&(s="programacion"),(l.includes("acent")||l.includes("ácent"))&&(s="acentuacion");const d=[...((m=Hv[r])==null?void 0:m[s])||Hv.es.basico].sort(()=>Math.random()-.5),h=[];for(;h.length<i;)h.push(...d);return h.slice(0,i)},ds=[{id:"alpine",name:"Alpino",r:162,g:173,b:145,scheme:"dark"},{id:"ocean",name:"Océano",r:90,g:150,b:220,scheme:"dark"},{id:"crimson",name:"Carmesí",r:220,g:80,b:80,scheme:"dark"},{id:"amethyst",name:"Amatista",r:160,g:100,b:200,scheme:"dark"},{id:"amber",name:"Ámbar",r:240,g:180,b:60,scheme:"dark"},{id:"frost",name:"Frosty (Light)",r:100,g:149,b:237,scheme:"light"},{id:"emerald",name:"Esmeralda",r:16,g:185,b:129,scheme:"dark"}];class PA{constructor(){this.currentTheme=ds[0]}getCurrentTheme(){return this.currentTheme}setTheme(t){const i=ds.find(s=>s.id===t);i&&(this.currentTheme=i,this.applyThemeToDocument(i))}applyThemeToDocument(t,i={}){const s=document.documentElement;s.style.setProperty("--theme-r",t.r.toString()),s.style.setProperty("--theme-g",t.g.toString()),s.style.setProperty("--theme-b",t.b.toString()),s.style.setProperty("--accent-primary",`rgb(${t.r}, ${t.g}, ${t.b})`),s.style.setProperty("--accent-glow",`rgba(${t.r}, ${t.g}, ${t.b}, 0.4)`);const l=i.forceScheme||t.scheme||"dark";if(s.setAttribute("data-color-scheme",l),l==="light")s.style.setProperty("--bg-app","#f0f2f5"),s.style.setProperty("--text-primary","#1a1a1b"),s.style.setProperty("--text-secondary","#4b5563"),s.style.setProperty("--bg-glass","rgba(255, 255, 255, 0.7)"),s.style.setProperty("--bg-glass-strong","rgba(255, 255, 255, 0.85)"),s.style.setProperty("--border-glass","rgba(0, 0, 0, 0.1)"),s.style.setProperty("--bg-tint","transparent");else{if(i.isPureBlack)s.style.setProperty("--bg-app","#020202"),s.style.setProperty("--bg-tint","transparent");else{const c=Math.floor(t.r*.12),d=Math.floor(t.g*.12),h=Math.floor(t.b*.12);s.style.setProperty("--bg-app",`rgb(${c}, ${d}, ${h})`);const m=i.forceScheme?.15:t.bgAlpha??.35;s.style.setProperty("--bg-tint",`rgba(${t.r}, ${t.g}, ${t.b}, ${m})`)}s.style.setProperty("--text-primary","#ffffff"),s.style.setProperty("--text-secondary","#9ca3af"),s.style.setProperty("--bg-glass","rgba(0, 0, 0, 0.4)"),s.style.setProperty("--bg-glass-strong","rgba(0, 0, 0, 0.7)"),s.style.setProperty("--border-glass","rgba(255, 255, 255, 0.1)")}}getAllThemes(){return ds}}class FA{processInput(t,i,s,l,c,d){const h=t.length-1;if(h<0)return{stats:{wpm:0,accuracy:100,mistakes:0,totalChars:0},combo:0,isCorrect:!0,isPhraseComplete:!1};const m=t[h],p=i[h];let v=m===p,g=l,_=c;return!v&&!d?(g++,_=0):v?(m===" "||h===i.length-1)&&_++:d&&(v=!0),{stats:this.calculateStats(s||Date.now(),t,i,g),combo:_,isCorrect:v,isPhraseComplete:t===i}}calculateStats(t,i,s,l){const c=(Date.now()-t)/6e4,d=i.length;let h=0;for(let v=0;v<i.length;v++)i[v]===s[v]&&h++;const m=Math.round(h/5/(c||.001))||0,p=d>0?Math.round((d-l)/d*100):100;return{wpm:m,accuracy:p,mistakes:l,totalChars:d}}calculateScore(t,i){return Math.floor(t*(i/100)*10)}isCharCorrect(t,i,s){return t===s[i]}}class zA{async getPhrases(t,i){return[]}getZenPhrases(){return gA}}class IA{constructor(){this.SCORE_KEY="typ_total_score"}getScore(){return Number(localStorage.getItem(this.SCORE_KEY)||0)}saveScore(t){localStorage.setItem(this.SCORE_KEY,t.toString())}}const BA=(r,t,i,s)=>{const[l,c]=pe.useState([]),[d,h]=pe.useState(0),[m,p]=pe.useState(""),[v,g]=pe.useState({wpm:0,accuracy:100,mistakes:0,totalChars:0}),[_,S]=pe.useState(null),[E,A]=pe.useState(!1),[b,x]=pe.useState(0),[N,D]=pe.useState(()=>t.getScore()),[U,L]=pe.useState(!1),[P,B]=pe.useState(null),X=pe.useCallback((q,Y)=>{const ae=Number(localStorage.getItem(`typ_progress_${q}`)||0);Y>ae&&localStorage.setItem(`typ_progress_${q}`,Math.round(Y).toString())},[]),T=l[d]||"",R=pe.useCallback(()=>{p(""),S(null),A(!1),x(0),g({wpm:0,accuracy:100,mistakes:0,totalChars:0})},[]),H=pe.useCallback(q=>{var k,J,be;if(E)return;let Y=_;!Y&&q.length>0&&(Y=Date.now(),S(Y));const ae=m.length;if(q.length<ae){p(q);return}const F=i.processInput(q,T,Y,v.mistakes,b,U);if(p(q),g(F.stats),x(F.combo),F.isCorrect){const _e=q[q.length-1];(k=s==null?void 0:s.onCorrectChar)==null||k.call(s,_e,F.combo)}else(J=s==null?void 0:s.onErrorChar)==null||J.call(s,q[q.length-1]);if(F.isPhraseComplete)if((be=s==null?void 0:s.onPhraseComplete)==null||be.call(s,T),U){const _e=i.calculateScore(F.stats.wpm,F.stats.accuracy),z=N+_e;D(z),t.saveScore(z);const te=r.getZenPhrases(),me=te[Math.floor(Math.random()*te.length)];setTimeout(()=>{c([me]),h(0),p("")},50)}else if(d<l.length-1){if(P){const _e=(d+1)/l.length*100;X(P,_e)}setTimeout(()=>{h(_e=>_e+1),p("")},50)}else P&&X(P,100),A(!0)},[E,_,m.length,T,v.mistakes,b,U,i,s,d,l.length,N,t,r]);return pe.useEffect(()=>{if(_&&!E&&m.length>0){const q=setInterval(()=>{const Y=i.calculateStats(_,m,T,v.mistakes);g(ae=>({...ae,wpm:Y.wpm,accuracy:Y.accuracy}))},1e3);return()=>clearInterval(q)}},[_,E,m,T,v.mistakes,i]),{phrases:l,setPhrases:c,phraseIndex:d,setPhraseIndex:h,currentPhrase:T,typedText:m,setTypedText:p,processNewValue:H,stats:v,setStats:g,combo:b,setCombo:x,score:N,setScore:D,isFinished:E,setIsFinished:A,startTime:_,setStartTime:S,isInfiniteMode:U,setIsInfiniteMode:L,currentLevelId:P,setCurrentLevelId:B,restart:R}},T_=Zi.memo(({inputRef:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c})=>O.jsx("textarea",{ref:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c,className:"absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[-1] caret-transparent cursor-none resize-none m-0 p-0 border-0 outline-none",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",tabIndex:0}));T_.displayName="HiddenInput";const HA=()=>O.jsx("style",{children:`
    @keyframes light-on-pop {
      0% { filter: brightness(0.2); }
      15% { filter: brightness(1.4) contrast(1.1); }
      30% { filter: brightness(0.6); }
      45% { filter: brightness(1.2); }
      60% { filter: brightness(0.9); }
      100% { filter: brightness(1); }
    }
    }
    .light-off-transition {
      transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .light-on-anim {
      animation: light-on-pop 0.6s ease-out;
    }
  `}),Gv=new PA,GA=()=>{const[r,t]=pe.useState(ds.find(he=>he.id==="emerald")||ds[0]),[i,s]=pe.useState(!1),[l,c]=pe.useState(null),[d,h]=pe.useState("es"),[m,p]=pe.useState("Básico"),[v,g]=pe.useState([]),_=pe.useRef(""),S=pe.useMemo(()=>new zA,[]),E=pe.useMemo(()=>new IA,[]),A=pe.useMemo(()=>new FA,[]),{phrases:b,setPhrases:x,phraseIndex:N,setPhraseIndex:D,currentPhrase:U,typedText:L,setTypedText:P,processNewValue:B,stats:X,combo:T,setCombo:R,score:H,isFinished:q,setIsFinished:Y,startTime:ae,setStartTime:le,setCurrentLevelId:F,restart:k}=BA(S,E,A,{onCorrectChar:(he,Oe)=>{var nt;if(je&&he===" "&&((nt=Vn.current)==null||nt.playSuccess(Oe,!1)),he===" "){const dt=_.current.trim().split(/\s+/),rt=dt[dt.length-1];rt&&g(Qe=>[...Qe,rt].slice(-100))}},onErrorChar:()=>{var he;je&&((he=Vn.current)==null||he.playError()),me(!0)},onPhraseComplete:he=>{me(!1),hn.current&&(hn.current.value="");const Oe=he.trim().split(/\s+/),nt=Oe[Oe.length-1];nt&&g(dt=>dt[dt.length-1]===nt?dt:[...dt,nt].slice(-100))}});pe.useEffect(()=>{_.current=L},[L]);const[J,be]=pe.useState(""),[_e,z]=pe.useState(!1),[te,me]=pe.useState(!1),[Ce,ze]=pe.useState(!0),[ee,fe]=pe.useState(1),[Te,Ee]=pe.useState(!1),[Ne,Je]=pe.useState(!1),[ht,st]=pe.useState("mac");pe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",ee.toString()),Gv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,ee,i,l]),pe.useEffect(()=>{const he=()=>{const nt=window.innerHeight;if(nt<980){const dt=Math.max(.7,nt/980);fe(dt)}else fe(1)};return he(),window.addEventListener("resize",he),()=>window.removeEventListener("resize",he)},[]);const[ot,vt]=pe.useState("config"),[lt,jt]=pe.useState(!1),[V,Ut]=pe.useState(!0),[ut,_t]=pe.useState(Jo),[je,I]=pe.useState(!0),[M,Z]=pe.useState(1),[ge,Me]=pe.useState(!1),[de,$e]=pe.useState({bass:0,mid:0,high:0}),[Le,We]=pe.useState(!1),[tt,Re]=pe.useState(!1),we=pe.useRef(null),[ke,He]=pe.useState(!1),[Pe,xt]=pe.useState({x:0,y:0,z:20}),[W,Ie]=pe.useState({x:0,y:0,z:0}),[De,Ve]=pe.useState(180),[Ae,Se]=pe.useState({...M_,type:"circle"}),[Ue,ft]=pe.useState(!1),[It,Ct]=pe.useState([]),[xn,ui]=pe.useState(!1),hn=pe.useRef(null),$i=pe.useRef(null),ea=pe.useRef(!1),ta=pe.useRef(""),Vn=pe.useRef(null),kn=pe.useRef(null),Xn=pe.useRef(T),[Un,en]=pe.useState(!1),[pn,Ln]=pe.useState(30),[Jn,ms]=pe.useState(30),[na,Ws]=pe.useState(!1),[ia,gs]=pe.useState(""),[Ti,Ai]=pe.useState(0),$n=pe.useMemo(()=>{var dt,rt,Qe;const he=((dt=Xs.find(Et=>Et.id==="fase_1"))==null?void 0:dt.levels)||[],Oe=((rt=Xs.find(Et=>Et.id==="fase_2"))==null?void 0:rt.levels)||[],nt=((Qe=Xs.find(Et=>Et.id==="fase_3"))==null?void 0:Qe.levels)||[];return[...he,...Oe,...nt]},[]);pe.useEffect(()=>{if(tt){We(!0);const he=$n;if(he.length===0)return;const Oe=he[Ti%he.length];Oe&&(Ct(Oe.keys),x(Oe.phrases),gs(Oe.title.replace(/^Pares: |^\d+\.\s+/g,"")),P(""),ta.current="",D(0),R(nt=>{const dt=ut.layers.filter(rt=>rt.minCombo<=nt).sort((rt,Qe)=>Qe.minCombo-rt.minCombo);if(dt.length>0){const rt=dt[0].minCombo-1;return Math.max(0,rt)}return 0}),me(!1),hn.current&&(hn.current.value=""),setTimeout(()=>{var nt;return(nt=hn.current)==null?void 0:nt.focus()},10))}},[tt,Ti,ut]),pe.useEffect(()=>{if(!tt){we.current&&(clearInterval(we.current),we.current=null),Ln(Jn);return}const he=$n;Ln(Jn);const Oe=setInterval(()=>{Ln(nt=>nt<=1?(Ai(dt=>{if(na){let rt=Math.floor(Math.random()*he.length);return he.length>1&&rt===dt&&(rt=(rt+1)%he.length),rt}return(dt+1)%he.length}),Jn):nt-1)},1e3);return we.current=Oe,()=>clearInterval(Oe)},[tt,Jn,na,$n]);const zi=pe.useCallback(()=>{if(!tt)return;const he=$n;Ai(Oe=>na?Math.floor(Math.random()*he.length):(Oe+1)%he.length),Ln(Jn)},[tt,na,Jn,$n]),C=pe.useMemo(()=>L.normalize("NFC"),[L]),K=pe.useMemo(()=>{const he=U.split(" "),Oe=L.split(" "),nt=Math.min(Oe.length-1,he.length-1),dt=he[nt]||"",rt=Oe[Oe.length-1]||"";return{word:dt,userTypedSlice:rt}},[U,L]),ce=pe.useMemo(()=>q||Ce?"":L.length<U.length?U[L.length]:"",[U,L,q,Ce]),se=pe.useMemo(()=>ce&&$t[ce.toLowerCase()]||null,[ce]);pe.useEffect(()=>{Xn.current=T},[T]),pe.useEffect(()=>{const he=new UA;return Vn.current=he,kn.current=new LA(he,ut),en(!0),()=>{var Oe;(Oe=kn.current)==null||Oe.stop()}},[]),pe.useEffect(()=>{var he,Oe;V&&Un?(he=kn.current)==null||he.start(()=>Xn.current):(Oe=kn.current)==null||Oe.stop()},[V,Un]),pe.useEffect(()=>{kn.current&&(kn.current.setStyle(ut),kn.current.setMultiplier(M),V&&kn.current.start(()=>Xn.current))},[ut,V,M]),pe.useEffect(()=>{let he;const Oe=()=>{const nt=_e&&!q&&!te;Vn.current&&V&&nt?$e(Vn.current.getFrequencyBands()):$e({bass:0,mid:0,high:0}),he=requestAnimationFrame(Oe)};return he=requestAnimationFrame(Oe),()=>cancelAnimationFrame(he)},[V,_e,q,te]),pe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",ee.toString()),Gv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,ee,i,l]),pe.useEffect(()=>{const he=()=>{!Te&&!Ne&&!Ce&&!q&&document.activeElement!==$i.current&&setTimeout(()=>{var Oe;return(Oe=hn.current)==null?void 0:Oe.focus()},10)};return window.addEventListener("click",he),window.addEventListener("focus",he),()=>{window.removeEventListener("click",he),window.removeEventListener("focus",he)}},[Te,Ne,Ce,q]),pe.useEffect(()=>{(async()=>{ze(!0),We(!1);const Oe=OA(d,m,10);x(Oe.map(nt=>nt.normalize("NFC"))),P(""),ta.current="",D(0),R(0),me(!1),hn.current&&(hn.current.value=""),ze(!1),m==="Básico"&&F(null)})()},[d,m]),pe.useRef(!1),pe.useEffect(()=>{let he;return()=>clearInterval(he)},[tt]),pe.useEffect(()=>{},[N,b.length,d,m,Ce,Le]);const $=pe.useCallback(he=>{const Oe=he.currentTarget.value.normalize("NFC");B(Oe)},[B]),Fe=pe.useCallback(()=>{ea.current=!0,He(!0)},[]),Xe=pe.useCallback(he=>{ea.current=!1,He(!1);const Oe=he.currentTarget.value.normalize("NFC");P(Oe)},[]),Be=pe.useCallback(he=>{var Oe;be(he.key),setTimeout(()=>be(""),150),(Oe=Vn.current)==null||Oe.resume()},[]),qe=he=>`w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${he?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]":"bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]"}`,Ye=pe.useCallback((he,Oe)=>{!he||he.length===0||(We(!0),Oe&&F(Oe),x(he.map(nt=>nt.normalize("NFC"))),P(""),ta.current="",D(0),R(0),g([]),s(!0),me(!1),hn.current&&(hn.current.value=""),le(null),Y(!1),ze(!1),z(!0),setTimeout(()=>{var nt;return(nt=hn.current)==null?void 0:nt.focus()},10))},[F,x,P,D,R,le,Y,ze]),it=pe.useCallback(()=>{k(),D(0),me(!1),g([]),hn.current&&(hn.current.value="")},[k,D]),Ke=pe.useCallback(()=>{z(!1),s(!1),g([])},[]);return O.jsxs("div",{className:`min-h-screen relative flex flex-col items-center overflow-y-auto overflow-x-hidden light-off-transition ${i?"light-off-anim":"light-on-anim"}`,style:{width:"100%",backgroundColor:i?"#000000":"transparent",transition:"background-color 0.6s ease-in-out"},children:[O.jsx(HA,{}),O.jsx(T_,{inputRef:hn,onInput:$,onCompositionStart:Fe,onCompositionEnd:Xe,onKeyDown:Be,onBlur:()=>He(!1)}),O.jsx("input",{type:"color",ref:$i,onChange:he=>{const Oe=he.target.value,nt=parseInt(Oe.slice(1,3),16),dt=parseInt(Oe.slice(3,5),16),rt=parseInt(Oe.slice(5,7),16);t({id:"custom",name:"Custom",r:nt,g:dt,b:rt})},className:"fixed opacity-0 pointer-events-none -z-10"}),O.jsx("button",{onClick:()=>Ee(!0),className:`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${Te?"translate-x-[-100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"})}),O.jsx("button",{onClick:()=>Je(!0),className:`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${Ne?"translate-x-[100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"})}),O.jsx("div",{className:`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${Te||Ne?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>{Ee(!1),Je(!1)}}),O.jsx(CA,{isOpen:Te,onClose:()=>Ee(!1),language:d,onLanguageChange:h,currentMusicStyle:ut,onMusicStyleChange:_t,TECHNO_STYLE:Jo,AMBIENT_STYLE:Lh,ACID_HOUSE_STYLE:Oh,getBtnClass:qe,themes:ds,currentTheme:r,onThemeChange:t}),O.jsx(RA,{isOpen:Ne,onClose:()=>Je(!1),targetKeyData:se,onSelectLevel:Ct,onSelectPhrases:Ye,themes:ds,currentTheme:r,onThemeChange:t,focus:m,onFocusChange:p,getBtnClass:qe,currentMusicStyle:ut,onMusicStyleChange:_t,TECHNO_STYLE:Jo,AMBIENT_STYLE:Lh,ACID_HOUSE_STYLE:Oh,isInfiniteMode:!1,onToggleZenMode:()=>{},score:H}),O.jsx("div",{className:"w-full h-full flex flex-col items-center",style:{transform:`scale(${ee})`,transformOrigin:"top center",flexShrink:0},children:O.jsx("main",{className:"flex-grow flex flex-col items-center justify-start py-8 xl:py-12 px-4 relative transition-all duration-500",style:{opacity:Te||Ne?.3:1},children:O.jsxs("div",{className:"flex flex-row items-stretch justify-center gap-4 xl:gap-12 relative w-full px-4 overflow-visible",children:[O.jsx("div",{className:"hidden xl:flex w-[250px] shrink-0 z-0 overflow-hidden relative",children:O.jsx(Bv,{text:v.join("  "),color:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:de})}),O.jsxs("div",{className:"w-full max-w-5xl flex flex-col items-center gap-4 relative",children:[!Ce&&!q&&O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsxs("div",{className:"w-full theme-glass backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:[O.jsx(vA,{currentPhrase:U,normalizedTypedText:C,currentWordInfo:K,isComposingState:ke,palette:r.id,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:de,birdRotation:Pe,birdPos3D:W,birdSize:De,visualsConfig:Ae,combo:T,comboMultiplier:M,isMusicLightingEnabled:ge,PALETTE_COLORS:{},isCircuitMode:tt,circuitTimer:pn,circuitTitle:ia,onCircuitCycle:zi,onDimensionalMenu:he=>{ft(!Ue)},isLevelActive:_e,onSelectLevel:he=>Ye(he.phrases,he.id),themeScheme:l==="light"||r.scheme==="light"&&!l?"light":r.scheme,currentMusicStyle:ut,onMusicStyleChange:_t,currentLevelProgress:U.length>0?Math.min(100,Math.round(C.length/U.length*100)):0,currentLevelScore:H,currentLevelAccuracy:X.accuracy}),O.jsx(AA,{keyboardType:ht,activeKey:J,targetChar:ce,showZones:lt,isMusicLightingEnabled:ge,frequencyBands:de,stats:X,isZenMode:!1,score:H,onRestart:it,onZenToggle:()=>{},audioReady:Un,audioSystem:Vn.current,currentMusicStyle:ut,startTime:ae,isFinished:q,combo:T,comboMultiplier:M,onDimensionalMenu:he=>{ft(!Ue)},hexToRgba:(he,Oe)=>`rgba(${r.r}, ${r.g}, ${r.b}, ${Oe})`,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,highlightedKeys:It,isWaveActive:xn,isLevelActive:_e,onGoHome:Ke})]})}),O.jsx("div",{className:`fixed theme-glass backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${Ue?"opacity-100 scale-y-100 pointer-events-auto":"opacity-0 scale-y-95 pointer-events-none"}`,style:{right:"4.5rem",bottom:"6.5rem",width:"180px",transformOrigin:"top right"},children:O.jsxs("div",{className:"flex flex-col divide-y divide-[var(--border-glass)] max-h-[400px] overflow-y-auto custom-scrollbar",children:[O.jsxs("div",{className:"p-4 bg-[var(--accent-primary)]/5 border-b border-[var(--border-glass)]",children:[O.jsx("div",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60",children:"Puntos Totales"}),O.jsx("div",{className:"text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums",children:H.toLocaleString()})]}),O.jsxs("div",{className:"p-4",children:[O.jsxs("div",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2",children:[O.jsx("i",{className:"fa fa-paint-brush"}),O.jsx("span",{children:"Personalización"})]}),O.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[ds.map(he=>O.jsx("button",{onClick:()=>t(he),className:`w-full aspect-square rounded-full border-2 transition-all duration-300 flex items-center justify-center ${r.id===he.id?"border-[var(--accent-primary)] ring-2 ring-[var(--accent-glow)]":"border-white/10 hover:border-white/40"}`,style:{backgroundColor:`rgb(${he.r}, ${he.g}, ${he.b})`},title:he.name,children:r.id===he.id&&O.jsx("i",{className:"fa fa-check text-[10px] text-white mix-blend-difference"})},he.id)),O.jsx("button",{onClick:()=>{var he;return(he=$i.current)==null?void 0:he.click()},className:"w-full aspect-square rounded-full border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-all font-bold text-[18px] text-[var(--text-secondary)]",title:"Color Personalizado",children:"+"})]})]}),O.jsxs("div",{className:"px-4 py-3 space-y-3",children:[O.jsxs("div",{onClick:()=>s(!i),className:"flex items-center justify-between cursor-pointer group",children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Negro Puro"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${i?"bg-[var(--accent-primary)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${i?"left-4.5":"left-0.5"}`})})]}),O.jsx("div",{onClick:()=>{const he=l==="light"||r.scheme==="light"&&l===null;c(he?"dark":"light")},className:"flex items-center justify-between cursor-pointer group",children:(()=>{const he=l==="light"||r.scheme==="light"&&!l;return O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Día"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${he?"bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${he?"left-4.5":"left-0.5"}`})})]})})()})]}),O.jsxs("button",{onClick:()=>{I(!je)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${je?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-keyboard-o w-4"}),O.jsx("span",{children:"Sonido"})]}),O.jsxs("button",{onClick:()=>{Ut(!V)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${V?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-music w-4"}),O.jsx("span",{children:"Música"})]}),O.jsxs("button",{onClick:()=>{Me(!ge)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${ge?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-lightbulb-o w-4"}),O.jsx("span",{children:"Luces"})]}),O.jsxs("button",{onClick:()=>{jt(!lt)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${lt?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-hand-paper-o w-4"}),O.jsx("span",{children:"Guía"})]})]})})]}),O.jsx("div",{className:"hidden xl:flex w-[250px] shrink-0 z-0 overflow-hidden relative",children:O.jsx(Bv,{text:v.join("  "),color:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:de})})]})})}),O.jsx("footer",{className:"fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none",children:"ALPINE_ECODECOR_PRO // 2025"})]})};console.log("OveTyp_ entry point loaded");class VA extends Zi.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,i){console.error("React Error Boundary caught:",t,i)}render(){var t,i;return this.state.hasError?O.jsxs("div",{style:{color:"white",padding:"2rem",fontFamily:"monospace"},children:[O.jsx("h1",{children:"⚠️ App Error"}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#ff6b6b"},children:(t=this.state.error)==null?void 0:t.message}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#aaa",fontSize:"12px"},children:(i=this.state.error)==null?void 0:i.stack})]}):this.props.children}}const Kh=document.getElementById("root");console.log("Root element found:",!!Kh);if(!Kh)throw new Error("Could not find root element to mount to");const kA=Hy.createRoot(Kh);kA.render(O.jsx(Zi.StrictMode,{children:O.jsx(VA,{children:O.jsx(GA,{})})}));
