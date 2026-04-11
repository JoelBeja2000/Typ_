(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Iv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function Ay(){if(C0)return Io;C0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var R0;function Cy(){return R0||(R0=1,nd.exports=Ay()),nd.exports}var O=Cy(),id={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Ry(){if(w0)return ht;w0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(P,ee,pe){this.props=P,this.context=ee,this.refs=b,this.updater=pe||E}x.prototype.isReactComponent={},x.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=x.prototype;function N(P,ee,pe){this.props=P,this.context=ee,this.refs=b,this.updater=pe||E}var U=N.prototype=new D;U.constructor=N,A(U,x.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function T(P,ee,pe){var we=pe.ref;return{$$typeof:r,type:P,key:ee,ref:we!==void 0?we:null,props:pe}}function w(P,ee){return T(P.type,ee,P.props)}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Y(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pe){return ee[pe]})}var Q=/\/+/g;function le(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):ee.toString(36)}function he(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,ee,pe,we,Fe){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var ue=!1;if(P===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(P.$$typeof){case r:case t:ue=!0;break;case v:return ue=P._init,I(ue(P._payload),ee,pe,we,Fe)}}if(ue)return Fe=Fe(P),ue=we===""?"."+le(P,0):we,L(Fe)?(pe="",ue!=null&&(pe=ue.replace(Q,"$&/")+"/"),I(Fe,ee,pe,"",function(Oe){return Oe})):Fe!=null&&(X(Fe)&&(Fe=w(Fe,pe+(Fe.key==null||P&&P.key===Fe.key?"":(""+Fe.key).replace(Q,"$&/")+"/")+ue)),ee.push(Fe)),1;ue=0;var Ce=we===""?".":we+":";if(L(P))for(var Te=0;Te<P.length;Te++)we=P[Te],te=Ce+le(we,Te),ue+=I(we,ee,pe,te,Fe);else if(Te=S(P),typeof Te=="function")for(P=Te.call(P),Te=0;!(we=P.next()).done;)we=we.value,te=Ce+le(we,Te++),ue+=I(we,ee,pe,te,Fe);else if(te==="object"){if(typeof P.then=="function")return I(he(P),ee,pe,we,Fe);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ue}function k(P,ee,pe){if(P==null)return P;var we=[],Fe=0;return I(P,we,"","",function(te){return ee.call(pe,te,Fe++)}),we}function $(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(pe){(P._status===0||P._status===-1)&&(P._status=1,P._result=pe)},function(pe){(P._status===0||P._status===-1)&&(P._status=2,P._result=pe)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var Ee=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},me={map:k,forEach:function(P,ee,pe){k(P,function(){ee.apply(this,arguments)},pe)},count:function(P){var ee=0;return k(P,function(){ee++}),ee},toArray:function(P){return k(P,function(ee){return ee})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ht.Activity=g,ht.Children=me,ht.Component=x,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=N,ht.StrictMode=s,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ht.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ht.cache=function(P){return function(){return P.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(P,ee,pe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=A({},P.props),Fe=P.key;if(ee!=null)for(te in ee.key!==void 0&&(Fe=""+ee.key),ee)!V.call(ee,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ee.ref===void 0||(we[te]=ee[te]);var te=arguments.length-2;if(te===1)we.children=pe;else if(1<te){for(var ue=Array(te),Ce=0;Ce<te;Ce++)ue[Ce]=arguments[Ce+2];we.children=ue}return T(P.type,Fe,we)},ht.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ht.createElement=function(P,ee,pe){var we,Fe={},te=null;if(ee!=null)for(we in ee.key!==void 0&&(te=""+ee.key),ee)V.call(ee,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Fe[we]=ee[we]);var ue=arguments.length-2;if(ue===1)Fe.children=pe;else if(1<ue){for(var Ce=Array(ue),Te=0;Te<ue;Te++)Ce[Te]=arguments[Te+2];Fe.children=Ce}if(P&&P.defaultProps)for(we in ue=P.defaultProps,ue)Fe[we]===void 0&&(Fe[we]=ue[we]);return T(P,te,Fe)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(P){return{$$typeof:h,render:P}},ht.isValidElement=X,ht.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:$}},ht.memo=function(P,ee){return{$$typeof:p,type:P,compare:ee===void 0?null:ee}},ht.startTransition=function(P){var ee=B.T,pe={};B.T=pe;try{var we=P(),Fe=B.S;Fe!==null&&Fe(pe,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(z,Ee)}catch(te){Ee(te)}finally{ee!==null&&pe.types!==null&&(ee.types=pe.types),B.T=ee}},ht.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ht.use=function(P){return B.H.use(P)},ht.useActionState=function(P,ee,pe){return B.H.useActionState(P,ee,pe)},ht.useCallback=function(P,ee){return B.H.useCallback(P,ee)},ht.useContext=function(P){return B.H.useContext(P)},ht.useDebugValue=function(){},ht.useDeferredValue=function(P,ee){return B.H.useDeferredValue(P,ee)},ht.useEffect=function(P,ee){return B.H.useEffect(P,ee)},ht.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ht.useId=function(){return B.H.useId()},ht.useImperativeHandle=function(P,ee,pe){return B.H.useImperativeHandle(P,ee,pe)},ht.useInsertionEffect=function(P,ee){return B.H.useInsertionEffect(P,ee)},ht.useLayoutEffect=function(P,ee){return B.H.useLayoutEffect(P,ee)},ht.useMemo=function(P,ee){return B.H.useMemo(P,ee)},ht.useOptimistic=function(P,ee){return B.H.useOptimistic(P,ee)},ht.useReducer=function(P,ee,pe){return B.H.useReducer(P,ee,pe)},ht.useRef=function(P){return B.H.useRef(P)},ht.useState=function(P){return B.H.useState(P)},ht.useSyncExternalStore=function(P,ee,pe){return B.H.useSyncExternalStore(P,ee,pe)},ht.useTransition=function(){return B.H.useTransition()},ht.version="19.2.4",ht}var D0;function Lh(){return D0||(D0=1,id.exports=Ry()),id.exports}var xe=Lh();const Zi=Iv(xe);var ad={exports:{}},Bo={},sd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function wy(){return N0||(N0=1,(function(r){function t(I,k){var $=I.length;I.push(k);e:for(;0<$;){var Ee=$-1>>>1,me=I[Ee];if(0<l(me,k))I[Ee]=k,I[$]=me,$=Ee;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var k=I[0],$=I.pop();if($!==k){I[0]=$;e:for(var Ee=0,me=I.length,P=me>>>1;Ee<P;){var ee=2*(Ee+1)-1,pe=I[ee],we=ee+1,Fe=I[we];if(0>l(pe,$))we<me&&0>l(Fe,pe)?(I[Ee]=Fe,I[we]=$,Ee=we):(I[Ee]=pe,I[ee]=$,Ee=ee);else if(we<me&&0>l(Fe,$))I[Ee]=Fe,I[we]=$,Ee=we;else break e}}return k}function l(I,k){var $=I.sortIndex-k.sortIndex;return $!==0?$:I.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,y=3,S=!1,E=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=I)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function L(I){if(A=!1,U(I),!E)if(i(m)!==null)E=!0,z||(z=!0,Y());else{var k=i(p);k!==null&&he(L,k.startTime-I)}}var z=!1,B=-1,V=5,T=-1;function w(){return b?!0:!(r.unstable_now()-T<V)}function X(){if(b=!1,z){var I=r.unstable_now();T=I;var k=!0;try{e:{E=!1,A&&(A=!1,D(B),B=-1),S=!0;var $=y;try{t:{for(U(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,y=g.priorityLevel;var me=Ee(g.expirationTime<=I);if(I=r.unstable_now(),typeof me=="function"){g.callback=me,U(I),k=!0;break t}g===i(m)&&s(m),U(I)}else s(m);g=i(m)}if(g!==null)k=!0;else{var P=i(p);P!==null&&he(L,P.startTime-I),k=!1}}break e}finally{g=null,y=$,S=!1}k=void 0}}finally{k?Y():z=!1}}}var Y;if(typeof N=="function")Y=function(){N(X)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,le=Q.port2;Q.port1.onmessage=X,Y=function(){le.postMessage(null)}}else Y=function(){x(X,0)};function he(I,k){B=x(function(){I(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(I){switch(y){case 1:case 2:case 3:var k=3;break;default:k=y}var $=y;y=k;try{return I()}finally{y=$}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=y;y=I;try{return k()}finally{y=$}},r.unstable_scheduleCallback=function(I,k,$){var Ee=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Ee+$:Ee):$=Ee,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=$+me,I={id:v++,callback:k,priorityLevel:I,startTime:$,expirationTime:me,sortIndex:-1},$>Ee?(I.sortIndex=$,t(p,I),i(m)===null&&I===i(p)&&(A?(D(B),B=-1):A=!0,he(L,$-Ee))):(I.sortIndex=me,t(m,I),E||S||(E=!0,z||(z=!0,Y()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var k=y;return function(){var $=y;y=k;try{return I.apply(this,arguments)}finally{y=$}}}})(rd)),rd}var U0;function Dy(){return U0||(U0=1,sd.exports=wy()),sd.exports}var od={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Ny(){if(L0)return Ln;L0=1;var r=Lh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var O0;function Uy(){if(O0)return od.exports;O0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),od.exports=Ny(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Ly(){if(P0)return Bo;P0=1;var r=Dy(),t=Lh(),i=Uy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var he=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Ee=[],me=-1;function P(e){return{current:e}}function ee(e){0>me||(e.current=Ee[me],Ee[me]=null,me--)}function pe(e,n){me++,Ee[me]=e.current,e.current=n}var we=P(null),Fe=P(null),te=P(null),ue=P(null);function Ce(e,n){switch(pe(te,n),pe(Fe,e),pe(we,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Kg(n),e=Qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(we),pe(we,e)}function Te(){ee(we),ee(Fe),ee(te)}function Oe(e){e.memoizedState!==null&&pe(ue,e);var n=we.current,a=Qg(n,e.type);n!==a&&(pe(Fe,e),pe(we,a))}function Je(e){Fe.current===e&&(ee(we),ee(Fe)),ue.current===e&&(ee(ue),Oo._currentValue=$)}var ct,et;function it(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+et}var rt=!1;function ot(e,n){if(!e||rt)return"";rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(fe){var re=fe}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(fe){re=fe}e.call(Se.prototype)}}else{try{throw Error()}catch(fe){re=fe}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(fe){if(fe&&re&&typeof fe.stack=="string")return[fe.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var ge=`
`+H[o].replace(" at new "," at ");return e.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",e.displayName)),ge}while(1<=o&&0<=u);break}}}finally{rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?it(a):""}function Et(e,n){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==n&&n!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Et(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tt=Object.prototype.hasOwnProperty,gt=r.unstable_scheduleCallback,pt=r.unstable_cancelCallback,Ke=r.unstable_shouldYield,F=r.unstable_requestPaint,M=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Me=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,je=r.unstable_LowPriority,Pe=r.unstable_IdlePriority,We=r.log,at=r.unstable_setDisableYieldValue,Re=null,De=null;function Xe(e){if(typeof We=="function"&&at(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:j,ze=Math.log,mt=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(ze(e)/mt|0)|0}var He=256,Ne=262144,Ge=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ae(o):(_&=R,_!==0?u=Ae(_):a||(a=R&~e,a!==0&&(u=Ae(a))))):(R=o&~f,R!==0?u=Ae(R):_!==0?u=Ae(_):a||(a=o&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function lt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function on(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vn(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ie=e.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-Ve(a),Se=1<<ge;R[ge]=0,H[ge]=-1;var re=ie[ge];if(re!==null)for(ie[ge]=null,ge=0;ge<re.length;ge++){var fe=re[ge];fe!==null&&(fe.lane&=-536870913)}a&=~Se}o!==0&&Na(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Na(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ve(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function zn(e,n){var a=n&-n;return a=(a&42)!==0?1:$i(a),(a&(e.suspendedLanes|n))!==0?0:a}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hs(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:y0(e.type))}function li(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var Sn=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Sn,_n="__reactProps$"+Sn,Un="__reactContainer$"+Sn,ps="__reactEvents$"+Sn,Ua="__reactListeners$"+Sn,js="__reactHandles$"+Sn,La="__reactResources$"+Sn,Fi="__reactMarker$"+Sn;function Mi(e){delete e[Wt],delete e[_n],delete e[ps],delete e[Ua],delete e[js]}function zi(e){var n=e[Wt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Un]||a[Wt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=a0(e);e!==null;){if(a=e[Wt])return a;e=a0(e)}return n}e=a,a=e.parentNode}return null}function Ei(e){if(e=e[Wt]||e[Un]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ea(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Qn(e){var n=e[La];return n||(n=e[La]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[Fi]=!0}var Z=new Set,ce={};function ae(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(ce[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qe={},se={};function be(e){return Tt.call(se,e)?!0:Tt.call(qe,e)?!1:Ie.test(e)?se[e]=!0:(qe[e]=!0,!1)}function Le(e,n,a){if(be(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ye(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function St(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zt(e){if(!e._valueTracker){var n=St(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function Bt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=St(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pt=/[\n"\\]/g;function ft(e){return e.replace(Pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(e,n,a,o,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+tt(n)):e.value!==""+tt(n)&&(e.value=""+tt(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,_,tt(n)):a!=null?Mn(e,_,tt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+tt(R):e.removeAttribute("name")}function ta(e,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zt(e);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Zt(e)}function Mn(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ht(e,n,a){if(n!=null&&(n=""+tt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+tt(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(he(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Zt(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ws(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&An(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return M_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Jc=null;function $c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function Zh(e){var n=Ei(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;e:switch(e=n.stateNode,n.type){case"input":if(bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bt(o)}break e;case"textarea":Ht(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var eu=!1;function Kh(e,n,a){if(eu)return e(n,a);eu=!0;try{var o=e(n);return o}finally{if(eu=!1,(Ys!==null||Zs!==null)&&(Wl(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,Zh(n),e)))for(n=0;n<e.length;n++)Zh(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(ia)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{tu=!1}var Oa=null,nu=null,ol=null;function Qh(){if(ol)return ol;var e,n=nu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return ol=u.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function Jh(){return!1}function kn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:Jh,this.isPropagationStopped=Jh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=kn(ms),Jr=g({},ms,{view:0,detail:0}),E_=kn(Jr),iu,au,$r,fl=g({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(iu=e.screenX-$r.screenX,au=e.screenY-$r.screenY):au=iu=0,$r=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),$h=kn(fl),T_=g({},fl,{dataTransfer:0}),A_=kn(T_),C_=g({},Jr,{relatedTarget:0}),su=kn(C_),R_=g({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=kn(R_),D_=g({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N_=kn(D_),U_=g({},ms,{data:0}),ep=kn(U_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P_[e])?!!n[e]:!1}function ru(){return F_}var z_=g({},Jr,{key:function(e){if(e.key){var n=L_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I_=kn(z_),B_=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=kn(B_),H_=g({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),G_=kn(H_),V_=g({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=kn(V_),X_=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=kn(X_),j_=g({},ms,{newState:0,oldState:0}),W_=kn(j_),Y_=[9,13,27,32],ou=ia&&"CompositionEvent"in window,eo=null;ia&&"documentMode"in document&&(eo=document.documentMode);var Z_=ia&&"TextEvent"in window&&!eo,np=ia&&(!ou||eo&&8<eo&&11>=eo),ip=" ",ap=!1;function sp(e,n){switch(e){case"keyup":return Y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function K_(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function Q_(e,n){if(Ks)return e==="compositionend"||!ou&&sp(e,n)?(e=Qh(),ol=nu=Oa=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!J_[e.type]:n==="textarea"}function lp(e,n,a,o){Ys?Zs?Zs.push(o):Zs=[o]:Ys=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,no=null;function $_(e){Xg(e,0)}function dl(e){var n=ea(e);if(Bt(n))return e}function cp(e,n){if(e==="change")return n}var up=!1;if(ia){var lu;if(ia){var cu="oninput"in document;if(!cu){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),cu=typeof fp.oninput=="function"}lu=cu}else lu=!1;up=lu&&(!document.documentMode||9<document.documentMode)}function dp(){to&&(to.detachEvent("onpropertychange",hp),no=to=null)}function hp(e){if(e.propertyName==="value"&&dl(no)){var n=[];lp(n,no,e,$c(e)),Kh($_,n)}}function ex(e,n,a){e==="focusin"?(dp(),to=n,no=a,to.attachEvent("onpropertychange",hp)):e==="focusout"&&dp()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(no)}function nx(e,n){if(e==="click")return dl(n)}function ix(e,n){if(e==="input"||e==="change")return dl(n)}function ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:ax;function io(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tt.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var a=pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sx=ia&&"documentMode"in document&&11>=document.documentMode,Qs=null,fu=null,ao=null,du=!1;function _p(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Qs==null||Qs!==$e(o)||(o=Qs,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ec(fu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},hu={},xp={};ia&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function vs(e){if(hu[e])return hu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return hu[e]=n[a];return e}var yp=vs("animationend"),Sp=vs("animationiteration"),bp=vs("animationstart"),rx=vs("transitionrun"),ox=vs("transitionstart"),lx=vs("transitioncancel"),Mp=vs("transitionend"),Ep=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Ai(e,n){Ep.set(e,n),ae(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],$s=0,mu=0;function pl(){for(var e=$s,n=mu=$s=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Tp(a,u,f)}}function ml(e,n,a,o){ui[$s++]=e,ui[$s++]=n,ui[$s++]=a,ui[$s++]=o,mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function gu(e,n,a,o){return ml(e,n,a,o),gl(e)}function _s(e,n){return ml(e,null,null,n),gl(e)}function Tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ve(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gl(e){if(50<Co)throw Co=0,Af=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function cx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new cx(e,n,a,o)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ap(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")vu(e)&&(_=1);else if(typeof e=="string")_=py(e,a,we.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case T:return e=$n(31,a,n,u),e.elementType=T,e.lanes=f,e;case A:return xs(a.children,u,f,n);case b:_=8,u|=24;break;case x:return e=$n(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case L:return e=$n(13,a,n,u),e.elementType=L,e.lanes=f,e;case z:return e=$n(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break e;case D:_=9;break e;case U:_=11;break e;case B:_=14;break e;case V:_=16,o=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function xs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function _u(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Cp(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var tr=[],nr=0,_l=null,so=0,di=[],hi=0,Pa=null,Ii=1,Bi="";function sa(e,n){tr[nr++]=so,tr[nr++]=_l,_l=e,so=n}function wp(e,n,a){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Pa,Pa=e;var o=Ii;e=Bi;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ii=1<<32-Ve(n)+u|a<<u|o,Bi=f+e}else Ii=1<<f|a<<u|o,Bi=e}function yu(e){e.return!==null&&(sa(e,1),wp(e,1,0))}function Su(e){for(;e===_l;)_l=tr[--nr],tr[nr]=null,so=tr[--nr],tr[nr]=null;for(;e===Pa;)Pa=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null}function Dp(e,n){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Pa,Ii=n.id,Bi=n.overflow,Pa=e}var Cn=null,Kt=null,wt=!1,Fa=null,pi=!1,bu=Error(s(519));function za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(fi(n,e)),bu}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Wt]=e,n[_n]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)Mt(wo[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||za(e,!0)}function Up(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Cn=Cn.return}}function ir(e){if(e!==Cn)return!1;if(!wt)return Up(e),wt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gf(e.type,e.memoizedProps)),a=!a),a&&Kt&&za(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=i0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=i0(e)}else n===27?(n=Kt,Qa(e.type)?(e=jf,jf=null,Kt=e):Kt=n):Kt=Cn?gi(e.stateNode.nextSibling):null;return!0}function ys(){Kt=Cn=null,wt=!1}function Mu(){var e=Fa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Fa=null),e}function ro(e){Fa===null?Fa=[e]:Fa.push(e)}var Eu=P(null),Ss=null,ra=null;function Ia(e,n,a){pe(Eu,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=Eu.current,ee(Eu)}function Tu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Au(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Tu(f.return,a,e),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Tu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;Jn(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===ue.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}u=u.return}e!==null&&Au(n,e,a,o),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Ss=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Lp(Ss,e)}function yl(e,n){return Ss===null&&bs(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fx=r.unstable_scheduleCallback,dx=r.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new ux,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&fx(dx,function(){e.controller.abort()})}var lo=null,Ru=0,sr=0,rr=null;function hx(e,n){if(lo===null){var a=lo=[];Ru=0,sr=Uf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Op,Op),n}function Op(){if(--Ru===0&&lo!==null){rr!==null&&(rr.status="fulfilled");var e=lo;lo=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Pp=I.S;I.S=function(e,n){_g=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(e,n),Pp!==null&&Pp(e,n)};var Ms=P(null);function wu(){var e=Ms.current;return e!==null?e:Yt.pooledCache}function Sl(e,n){n===null?pe(Ms,Ms.current):pe(Ms,n.pool)}function Fp(){var e=wu();return e===null?null:{parent:ln._currentValue,pool:e}}var or=Error(s(460)),Du=Error(s(474)),bl=Error(s(542)),Ml={then:function(){}};function zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e}throw Ts=n,or}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,or):a}}var Ts=null;function Bp(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Hp(e){if(e===or||e===bl)throw Error(s(483))}var lr=null,co=0;function El(e){var n=co;return co+=1,lr===null&&(lr=[]),Ip(lr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Gp(e){function n(K,q){if(e){var ne=K.deletions;ne===null?(K.deletions=[q],K.flags|=16):ne.push(q)}}function a(K,q){if(!e)return null;for(;q!==null;)n(K,q),q=q.sibling;return null}function o(K){for(var q=new Map;K!==null;)K.key!==null?q.set(K.key,K):q.set(K.index,K),K=K.sibling;return q}function u(K,q){return K=aa(K,q),K.index=0,K.sibling=null,K}function f(K,q,ne){return K.index=ne,e?(ne=K.alternate,ne!==null?(ne=ne.index,ne<q?(K.flags|=67108866,q):ne):(K.flags|=67108866,q)):(K.flags|=1048576,q)}function _(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,q,ne,_e){return q===null||q.tag!==6?(q=_u(ne,K.mode,_e),q.return=K,q):(q=u(q,ne),q.return=K,q)}function H(K,q,ne,_e){var nt=ne.type;return nt===A?ge(K,q,ne.props.children,_e,ne.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===V&&Es(nt)===q.type)?(q=u(q,ne.props),uo(q,ne),q.return=K,q):(q=vl(ne.type,ne.key,ne.props,null,K.mode,_e),uo(q,ne),q.return=K,q)}function ie(K,q,ne,_e){return q===null||q.tag!==4||q.stateNode.containerInfo!==ne.containerInfo||q.stateNode.implementation!==ne.implementation?(q=xu(ne,K.mode,_e),q.return=K,q):(q=u(q,ne.children||[]),q.return=K,q)}function ge(K,q,ne,_e,nt){return q===null||q.tag!==7?(q=xs(ne,K.mode,_e,nt),q.return=K,q):(q=u(q,ne),q.return=K,q)}function Se(K,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=_u(""+q,K.mode,ne),q.return=K,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return ne=vl(q.type,q.key,q.props,null,K.mode,ne),uo(ne,q),ne.return=K,ne;case E:return q=xu(q,K.mode,ne),q.return=K,q;case V:return q=Es(q),Se(K,q,ne)}if(he(q)||Y(q))return q=xs(q,K.mode,ne,null),q.return=K,q;if(typeof q.then=="function")return Se(K,El(q),ne);if(q.$$typeof===N)return Se(K,yl(K,q),ne);Tl(K,q)}return null}function re(K,q,ne,_e){var nt=q!==null?q.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return nt!==null?null:R(K,q,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===nt?H(K,q,ne,_e):null;case E:return ne.key===nt?ie(K,q,ne,_e):null;case V:return ne=Es(ne),re(K,q,ne,_e)}if(he(ne)||Y(ne))return nt!==null?null:ge(K,q,ne,_e,null);if(typeof ne.then=="function")return re(K,q,El(ne),_e);if(ne.$$typeof===N)return re(K,q,yl(K,ne),_e);Tl(K,ne)}return null}function fe(K,q,ne,_e,nt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(ne)||null,R(q,K,""+_e,nt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return K=K.get(_e.key===null?ne:_e.key)||null,H(q,K,_e,nt);case E:return K=K.get(_e.key===null?ne:_e.key)||null,ie(q,K,_e,nt);case V:return _e=Es(_e),fe(K,q,ne,_e,nt)}if(he(_e)||Y(_e))return K=K.get(ne)||null,ge(q,K,_e,nt,null);if(typeof _e.then=="function")return fe(K,q,ne,El(_e),nt);if(_e.$$typeof===N)return fe(K,q,ne,yl(q,_e),nt);Tl(q,_e)}return null}function Ze(K,q,ne,_e){for(var nt=null,Nt=null,Qe=q,_t=q=0,Ct=null;Qe!==null&&_t<ne.length;_t++){Qe.index>_t?(Ct=Qe,Qe=null):Ct=Qe.sibling;var Ut=re(K,Qe,ne[_t],_e);if(Ut===null){Qe===null&&(Qe=Ct);break}e&&Qe&&Ut.alternate===null&&n(K,Qe),q=f(Ut,q,_t),Nt===null?nt=Ut:Nt.sibling=Ut,Nt=Ut,Qe=Ct}if(_t===ne.length)return a(K,Qe),wt&&sa(K,_t),nt;if(Qe===null){for(;_t<ne.length;_t++)Qe=Se(K,ne[_t],_e),Qe!==null&&(q=f(Qe,q,_t),Nt===null?nt=Qe:Nt.sibling=Qe,Nt=Qe);return wt&&sa(K,_t),nt}for(Qe=o(Qe);_t<ne.length;_t++)Ct=fe(Qe,K,_t,ne[_t],_e),Ct!==null&&(e&&Ct.alternate!==null&&Qe.delete(Ct.key===null?_t:Ct.key),q=f(Ct,q,_t),Nt===null?nt=Ct:Nt.sibling=Ct,Nt=Ct);return e&&Qe.forEach(function(ns){return n(K,ns)}),wt&&sa(K,_t),nt}function st(K,q,ne,_e){if(ne==null)throw Error(s(151));for(var nt=null,Nt=null,Qe=q,_t=q=0,Ct=null,Ut=ne.next();Qe!==null&&!Ut.done;_t++,Ut=ne.next()){Qe.index>_t?(Ct=Qe,Qe=null):Ct=Qe.sibling;var ns=re(K,Qe,Ut.value,_e);if(ns===null){Qe===null&&(Qe=Ct);break}e&&Qe&&ns.alternate===null&&n(K,Qe),q=f(ns,q,_t),Nt===null?nt=ns:Nt.sibling=ns,Nt=ns,Qe=Ct}if(Ut.done)return a(K,Qe),wt&&sa(K,_t),nt;if(Qe===null){for(;!Ut.done;_t++,Ut=ne.next())Ut=Se(K,Ut.value,_e),Ut!==null&&(q=f(Ut,q,_t),Nt===null?nt=Ut:Nt.sibling=Ut,Nt=Ut);return wt&&sa(K,_t),nt}for(Qe=o(Qe);!Ut.done;_t++,Ut=ne.next())Ut=fe(Qe,K,_t,Ut.value,_e),Ut!==null&&(e&&Ut.alternate!==null&&Qe.delete(Ut.key===null?_t:Ut.key),q=f(Ut,q,_t),Nt===null?nt=Ut:Nt.sibling=Ut,Nt=Ut);return e&&Qe.forEach(function(Ty){return n(K,Ty)}),wt&&sa(K,_t),nt}function jt(K,q,ne,_e){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var nt=ne.key;q!==null;){if(q.key===nt){if(nt=ne.type,nt===A){if(q.tag===7){a(K,q.sibling),_e=u(q,ne.props.children),_e.return=K,K=_e;break e}}else if(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===V&&Es(nt)===q.type){a(K,q.sibling),_e=u(q,ne.props),uo(_e,ne),_e.return=K,K=_e;break e}a(K,q);break}else n(K,q);q=q.sibling}ne.type===A?(_e=xs(ne.props.children,K.mode,_e,ne.key),_e.return=K,K=_e):(_e=vl(ne.type,ne.key,ne.props,null,K.mode,_e),uo(_e,ne),_e.return=K,K=_e)}return _(K);case E:e:{for(nt=ne.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===ne.containerInfo&&q.stateNode.implementation===ne.implementation){a(K,q.sibling),_e=u(q,ne.children||[]),_e.return=K,K=_e;break e}else{a(K,q);break}else n(K,q);q=q.sibling}_e=xu(ne,K.mode,_e),_e.return=K,K=_e}return _(K);case V:return ne=Es(ne),jt(K,q,ne,_e)}if(he(ne))return Ze(K,q,ne,_e);if(Y(ne)){if(nt=Y(ne),typeof nt!="function")throw Error(s(150));return ne=nt.call(ne),st(K,q,ne,_e)}if(typeof ne.then=="function")return jt(K,q,El(ne),_e);if(ne.$$typeof===N)return jt(K,q,yl(K,ne),_e);Tl(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,q!==null&&q.tag===6?(a(K,q.sibling),_e=u(q,ne),_e.return=K,K=_e):(a(K,q),_e=_u(ne,K.mode,_e),_e.return=K,K=_e),_(K)):a(K,q)}return function(K,q,ne,_e){try{co=0;var nt=jt(K,q,ne,_e);return lr=null,nt}catch(Qe){if(Qe===or||Qe===bl)throw Qe;var Nt=$n(29,Qe,null,K.mode);return Nt.lanes=_e,Nt.return=K,Nt}finally{}}}var As=Gp(!0),Vp=Gp(!1),Ba=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(e),Tp(e,null,a),n}return ml(e,o,n,a),gl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kn(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ou=!1;function ho(){if(Ou){var e=rr;if(e!==null)throw e}}function po(e,n,a,o){Ou=!1;var u=e.updateQueue;Ba=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,_===null?f=ie:_.next=ie,_=H;var ge=e.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==_&&(R===null?ge.firstBaseUpdate=ie:R.next=ie,ge.lastBaseUpdate=H))}if(f!==null){var Se=u.baseState;_=0,ge=ie=H=null,R=f;do{var re=R.lane&-536870913,fe=re!==R.lane;if(fe?(At&re)===re:(o&re)===re){re!==0&&re===sr&&(Ou=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=e,st=R;re=n;var jt=a;switch(st.tag){case 1:if(Ze=st.payload,typeof Ze=="function"){Se=Ze.call(jt,Se,re);break e}Se=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=st.payload,re=typeof Ze=="function"?Ze.call(jt,Se,re):Ze,re==null)break e;Se=g({},Se,re);break e;case 2:Ba=!0}}re=R.callback,re!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[re]:fe.push(re))}else fe={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ie=ge=fe,H=Se):ge=ge.next=fe,_|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);ge===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),ja|=_,e.lanes=_,e.memoizedState=Se}}function kp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kp(a[e],n)}var cr=P(null),Al=P(0);function qp(e,n){e=ga,pe(Al,e),pe(cr,n),ga=e|n.baseLanes}function Pu(){pe(Al,ga),pe(cr,cr.current)}function Fu(){ga=Al.current,ee(cr),ee(Al)}var ei=P(null),mi=null;function Va(e){var n=e.alternate;pe(an,an.current&1),pe(ei,e),mi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(mi=e)}function zu(e){pe(an,an.current),pe(ei,e),mi===null&&(mi=e)}function jp(e){e.tag===22?(pe(an,an.current),pe(ei,e),mi===null&&(mi=e)):ka()}function ka(){pe(an,an.current),pe(ei,ei.current)}function ti(e){ee(ei),mi===e&&(mi=null),ee(an)}var an=P(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,vt=null,Xt=null,cn=null,Rl=!1,ur=!1,Cs=!1,wl=0,mo=0,fr=null,mx=0;function tn(){throw Error(s(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,u,f){return la=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?wm:ef,Cs=!1,f=a(o,u),Cs=!1,ur&&(f=Yp(n,a,o,u)),Wp(e),f}function Wp(e){I.H=_o;var n=Xt!==null&&Xt.next!==null;if(la=0,cn=Xt=vt=null,Rl=!1,mo=0,fr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&xl(e)&&(un=!0))}function Yp(e,n,a,o){vt=e;var u=0;do{if(ur&&(fr=null),mo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,cn=Xt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Dm,f=n(a,o)}while(ur);return f}function gx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(vt.flags|=1024),n}function Hu(){var e=wl!==0;return wl=0,e}function Gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Vu(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}la=0,cn=Xt=vt=null,ur=!1,mo=wl=0,fr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?vt.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(Xt===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var n=cn===null?vt.memoizedState:cn.next;if(n!==null)cn=n,Xt=e;else{if(e===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},cn===null?vt.memoizedState=cn=e:cn=cn.next=e}return cn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,fr===null&&(fr=[]),e=Ip(fr,e,n),n=vt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?wm:ef),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===N)return Rn(e)}throw Error(s(438,String(e)))}function ku(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ca(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=sn();return Xu(n,Xt,e)}function Xu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,H=null,ie=n,ge=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(At&Se)===Se:(la&Se)===Se){var re=ie.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===sr&&(ge=!0);else if((la&re)===re){ie=ie.next,re===sr&&(ge=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=Se,_=f):H=H.next=Se,vt.lanes|=re,ja|=re;Se=ie.action,Cs&&a(f,Se),f=ie.hasEagerState?ie.eagerState:a(f,Se)}else re={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=re,_=f):H=H.next=re,vt.lanes|=Se,ja|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?_=f:H.next=R,!Jn(f,e.memoizedState)&&(un=!0,ge&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function qu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Zp(e,n,a){var o=vt,u=sn(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Jn((Xt||u).memoizedState,a);if(_&&(u.memoizedState=a,un=!0),u=u.queue,Yu(Jp.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Qp.bind(null,o,u,a,n),null),Yt===null)throw Error(s(349));f||(la&127)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=Dl(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qp(e,n,a,o){n.value=a,n.getSnapshot=o,$p(n)&&em(e)}function Jp(e,n,a){return a(function(){$p(n)&&em(e)})}function $p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function em(e){var n=_s(e,2);n!==null&&Yn(n,e,2)}function ju(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),Cs){Xe(!0);try{a()}finally{Xe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function tm(e,n,a,o){return e.baseState=a,Xu(e,Xt,typeof o=="function"?o:ca)}function vx(e,n,a,o,u){if(Pl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,_={};I.T=_;try{var R=a(u,o),H=I.S;H!==null&&H(_,R),im(e,n,R)}catch(ie){Wu(e,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),I.T=f}}else try{f=a(u,o),im(e,n,f)}catch(ie){Wu(e,n,ie)}}function im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,n,o)},function(o){return Wu(e,n,o)}):am(e,n,a)}function am(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,nm(e,a)))}function Wu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function om(e,n){if(wt){var a=Yt.formState;if(a!==null){e:{var o=vt;if(wt){if(Kt){t:{for(var u=Kt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=gi(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=Am.bind(null,vt,o),o.dispatch=a,o=ju(!1),f=$u.bind(null,vt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=vx.bind(null,vt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function lm(e){var n=sn();return cm(n,Xt,e)}function cm(e,n,a){if(n=Xu(e,n,rm)[0],e=Ul(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(_){throw _===or?bl:_}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,dr(9,{destroy:void 0},_x.bind(null,u,a),null)),[o,f,e]}function _x(e,n){e.action=n}function um(e){var n=sn(),a=Xt;if(a!==null)return cm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function dr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=Dl(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function fm(){return sn().memoizedState}function Ll(e,n,a,o){var u=In();vt.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&Iu(o,Xt.memoizedState.deps)?u.memoizedState=dr(n,f,a,o):(vt.flags|=e,u.memoizedState=dr(1|n,f,a,o))}function dm(e,n){Ll(8390656,8,e,n)}function Yu(e,n){Ol(2048,8,e,n)}function xx(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=Dl(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function hm(e){var n=sn().memoizedState;return xx({ref:n,nextImpl:e}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function pm(e,n){return Ol(4,2,e,n)}function mm(e,n){return Ol(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,Ol(4,4,gm.bind(null,n,e),a)}function Zu(){}function _m(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=e(),Cs){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[o,n],o}function Ku(e,n,a){return a===void 0||(la&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=yg(),vt.lanes|=e,ja|=e,a)}function ym(e,n,a,o){return Jn(a,n)?a:cr.current!==null?(e=Ku(e,a,o),Jn(e,n)||(un=!0),e):(la&42)===0||(la&1073741824)!==0&&(At&261930)===0?(un=!0,e.memoizedState=a):(e=yg(),vt.lanes|=e,ja|=e,n)}function Sm(e,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var _=I.T,R={};I.T=R,$u(e,!1,n,a);try{var H=u(),ie=I.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=px(H,o);vo(e,n,ge,ai(e))}else vo(e,n,o,ai(e))}catch(Se){vo(e,n,{then:function(){},status:"rejected",reason:Se},ai())}finally{k.p=f,_!==null&&R.types!==null&&(_.types=R.types),I.T=_}}function yx(){}function Qu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=bm(e).queue;Sm(e,u,n,$,a===null?yx:function(){return Mm(e),a(o)})}function bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=bm(e);n.next===null&&(n=e.alternate.memoizedState),vo(e,n.next.queue,{},ai())}function Ju(){return Rn(Oo)}function Em(){return sn().memoizedState}function Tm(){return sn().memoizedState}function Sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Ha(a);var o=Ga(n,e,a);o!==null&&(Yn(o,n,a),fo(o,n,a)),n={cache:Cu()},e.payload=n;return}n=n.return}}function bx(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)?Cm(n,a):(a=gu(e,n,a,o),a!==null&&(Yn(a,e,o),Rm(a,n,o)))}function Am(e,n,a){var o=ai();vo(e,n,a,o)}function vo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))Cm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,Jn(R,_))return ml(e,n,u,0),Yt===null&&pl(),!1}catch{}finally{}if(a=gu(e,n,u,o),a!==null)return Yn(a,e,o),Rm(a,n,o),!0}return!1}function $u(e,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(n)throw Error(s(479))}else n=gu(e,a,o,2),n!==null&&Yn(n,e,2)}function Pl(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function Cm(e,n){ur=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kn(e,a)}}var _o={readContext:Rn,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};_o.useEffectEvent=tn;var wm={readContext:Rn,use:Nl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(Cs){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(Cs){Xe(!0);try{a(n)}finally{Xe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=bx.bind(null,vt,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=ju(e);var n=e.queue,a=Am.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(e,n){var a=In();return Ku(a,e,n)},useTransition:function(){var e=ju(!1);return e=Sm.bind(null,vt,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=vt,u=In();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(At&127)!==0||Kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,dm(Jp.bind(null,o,f,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Qp.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=Yt.identifierPrefix;if(wt){var a=Bi,o=Ii;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ju,useFormState:om,useActionState:om,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:ku,useCacheRefresh:function(){return In().memoizedState=Sx.bind(null,vt)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:Rn,use:Nl,useCallback:_m,useContext:Rn,useEffect:Yu,useImperativeHandle:vm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Ul,useRef:fm,useState:function(){return Ul(ca)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=sn();return ym(a,Xt.memoizedState,e,n)},useTransition:function(){var e=Ul(ca)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:Zp,useId:Em,useHostTransitionStatus:Ju,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=sn();return tm(a,Xt,e,n)},useMemoCache:ku,useCacheRefresh:Tm};ef.useEffectEvent=hm;var Dm={readContext:Rn,use:Nl,useCallback:_m,useContext:Rn,useEffect:Yu,useImperativeHandle:vm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:qu,useRef:fm,useState:function(){return qu(ca)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=sn();return Xt===null?Ku(a,e,n):ym(a,Xt.memoizedState,e,n)},useTransition:function(){var e=qu(ca)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:Zp,useId:Em,useHostTransitionStatus:Ju,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=sn();return Xt!==null?tm(a,Xt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Tm};Dm.useEffectEvent=hm;function tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(Yn(n,e,a),fo(n,e,a))}};function Nm(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,f):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&nf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Lm(e){hl(e)}function Om(e){console.error(e)}function Pm(e){hl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Fm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function zm(e){return e=Ha(e),e.tag=3,e}function Im(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Fm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Fm(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Mx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Yl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(e,o,u)),!1}throw Error(s(435,a.tag))}return wf(e,o,u),Yl(),!1}if(wt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(e=Error(s(422),{cause:o}),ro(fi(e,a)))):(o!==bu&&(n=Error(s(423),{cause:o}),ro(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=af(e.stateNode,o,u),Lu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Ao===null?Ao=[f]:Ao.push(f),nn!==4&&(nn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=af(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=zm(u),Im(u,e,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),un=!1;function wn(e,n,a,o){n.child=e===null?Vp(n,null,a,o):As(n,e.child,a,o)}function Bm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return bs(n),o=Bu(e,n,a,_,f,u),R=Hu(),e!==null&&!un?(Gu(e,n,u),ua(e,n,u)):(wt&&R&&yu(n),n.flags|=1,wn(e,n,o,u),n.child)}function Hm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gm(e,n,f,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(_,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=aa(f,o),e.ref=n.ref,e.return=n,n.child=e}function Gm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(io(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,hf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ua(e,n,u)}return rf(e,n,a,o,u)}function Vm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return km(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?qp(n,f):Pu(),jp(n);else return o=n.lanes=536870912,km(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),qp(n,f),ka(),n.memoizedState=null):(e!==null&&Sl(n,null),Pu(),ka());return wn(e,n,u,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function km(e,n,a,o,u){var f=wu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),Pu(),jp(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function zl(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Xm(e,n,a){return As(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Ex(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(wt){if(o.mode==="hidden")return e=zl(n,o),n.lanes=536870912,xo(null,e);if(zu(n),(e=Kt)?(e=n0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,Cn=n,Kt=null)):e=null,e===null)throw za(n);return n.lanes=536870912,null}return zl(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=Xm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||ar(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=Yt,o!==null&&(_=zn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,_s(e,_),Yn(o,e,_),sf;Yl(),n=Xm(e,n,a)}else e=f.treeContext,Kt=gi(_.nextSibling),Cn=n,wt=!0,Fa=null,pi=!1,e!==null&&Dp(n,e),n=zl(n,o),n.flags|=4096;return n}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return bs(n),a=Bu(e,n,a,o,void 0,u),o=Hu(),e!==null&&!un?(Gu(e,n,u),ua(e,n,u)):(wt&&o&&yu(n),n.flags|=1,wn(e,n,a,u),n.child)}function qm(e,n,a,o,u,f){return bs(n),n.updateQueue=null,a=Yp(n,o,a,u),Wp(e),o=Hu(),e!==null&&!un?(Gu(e,n,f),ua(e,n,f)):(wt&&o&&yu(n),n.flags|=1,wn(e,n,a,f),n.child)}function jm(e,n,a,o,u){if(bs(n),n.stateNode===null){var f=er,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):er,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(tf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&nf.enqueueReplaceState(f,f.state,null),po(n,o,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Rs(a,R);f.props=H;var ie=f.context,ge=a.contextType;_=er,typeof ge=="object"&&ge!==null&&(_=Rn(ge));var Se=a.getDerivedStateFromProps;ge=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ie!==_)&&Um(n,f,o,_),Ba=!1;var re=n.memoizedState;f.state=re,po(n,o,f,u),ho(),ie=n.memoizedState,R||re!==ie||Ba?(typeof Se=="function"&&(tf(n,a,Se,o),ie=n.memoizedState),(H=Ba||Nm(n,a,H,o,re,ie,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=_,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),_=n.memoizedProps,ge=Rs(a,_),f.props=ge,Se=n.pendingProps,re=f.context,ie=a.contextType,H=er,typeof ie=="object"&&ie!==null&&(H=Rn(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Se||re!==H)&&Um(n,f,o,H),Ba=!1,re=n.memoizedState,f.state=re,po(n,o,f,u),ho();var fe=n.memoizedState;_!==Se||re!==fe||Ba||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof R=="function"&&(tf(n,a,R,o),fe=n.memoizedState),(ge=Ba||Nm(n,a,ge,o,re,fe,H)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=H,o=ge):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ua(e,n,u),e}function Wm(e,n,a,o){return ys(),n.flags|=256,wn(e,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:Fp()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Ym(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(wt){if(u?Va(n):ka(),(e=Kt)?(e=n0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,Cn=n,Kt=null)):e=null,e===null)throw za(n);return qf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=Bl({mode:"hidden",children:R},u),o=xs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=lf(a),o.childLanes=cf(e,_,a),n.memoizedState=of,xo(null,o)):(Va(n),uf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=ff(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=Bl({mode:"visible",children:o.children},u),R=xs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,As(n,e.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=cf(e,_,a),n.memoizedState=of,n=xo(null,o));else if(Va(n),qf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ie=_.dgst;_=ie,o=Error(s(419)),o.stack="",o.digest=_,ro({value:o,source:null,stack:null}),n=ff(e,n,a)}else if(un||ar(e,n,a,!1),_=(a&e.childLanes)!==0,un||_){if(_=Yt,_!==null&&(o=zn(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,_s(e,o),Yn(_,e,o),sf;Xf(R)||Yl(),n=ff(e,n,a)}else Xf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Kt=gi(R.nextSibling),Cn=n,wt=!0,Fa=null,pi=!1,e!==null&&Dp(n,e),n=uf(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,H=e.child,ie=H.sibling,o=aa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=aa(ie,R):(R=xs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,xo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=lf(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Fp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=cf(e,_,a),n.memoizedState=of,xo(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function ff(e,n,a){return As(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Tu(e.return,n,a)}function df(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Km(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=an.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,pe(an,_),wn(e,n,o,a),o=wt?so:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zm(e,a,n);else if(e.tag===19)Zm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}df(n,!0,a,null,f,o);break;case"together":df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Tx(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Ia(n,ln,e.memoizedState.cache),ys();break;case 27:case 5:Oe(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(Va(n),e=ua(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Km(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(an,an.current),o)break;return null;case 22:return n.lanes=0,Vm(e,n,a,n.pendingProps);case 24:Ia(n,ln,e.memoizedState.cache)}return ua(e,n,a)}function Qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return un=!1,Tx(e,n,a);un=(e.flags&131072)!==0}else un=!1,wt&&(n.flags&1048576)!==0&&wp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")vu(e)?(o=Rs(e,o),n.tag=1,n=jm(null,n,e,o,a)):(n.tag=0,n=rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Bm(null,n,e,o,a);break e}else if(u===B){n.tag=14,n=Hm(null,n,e,o,a);break e}}throw n=le(e)||e,Error(s(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),jm(e,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),po(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ia(n,ln,o),o!==f.cache&&Au(n,[ln],a,!0),ho(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(e,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),ro(u),n=Wm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=gi(e.firstChild),Cn=n,wt=!0,Fa=null,pi=!0,a=Vp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=ua(e,n,a);break e}wn(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=l0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,e=n.pendingProps,o=tc(te.current).createElement(a),o[Wt]=n,o[_n]=e,Dn(o,a,e),C(o),n.stateNode=o):n.memoizedState=l0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Oe(n),e===null&&wt&&(o=n.stateNode=s0(n.type,n.pendingProps,te.current),Cn=n,pi=!0,u=Kt,Qa(n.type)?(jf=u,Kt=gi(o.firstChild)):Kt=u),wn(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&wt&&((u=o=Kt)&&(o=ty(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Cn=n,Kt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||za(n)),Oe(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,Gf(u,f)?o=null:_!==null&&Gf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,gx,null,null,a),Oo._currentValue=u),Il(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&wt&&((e=a=Kt)&&(a=ny(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Cn=n,Kt=null,e=!0):e=!1),e||za(n)),null;case 13:return Ym(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,a):wn(e,n,o,a),n.child;case 11:return Bm(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=Rn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,a);case 15:return Gm(e,n,n.type,n.pendingProps,a);case 19:return Km(e,n,a);case 31:return Ex(e,n,a);case 22:return Vm(e,n,a,n.pendingProps);case 24:return bs(n),o=Rn(ln),e===null?(u=wu(),u===null&&(u=Yt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Nu(n),Ia(n,ln,u)):((e.lanes&a)!==0&&(Uu(e,n),po(n,null,null,a),ho()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,ln,o)):(o=f.cache,Ia(n,ln,o),o!==u.cache&&Au(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(e){e.flags|=4}function pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Eg())e.flags|=8192;else throw Ts=Ml,Du}else e.flags&=-16777217}function Jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h0(n))if(Eg())e.flags|=8192;else throw Ts=Ml,Du}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?It():536870912,e.lanes|=n,gr|=n)}function yo(e,n){if(!wt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ax(e,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(ln),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(fa(n),f!==null?(Qt(n),Jm(n,f)):(Qt(n),pf(n,u,null,o,a))):f?f!==e.memoizedState?(fa(n),Qt(n),Jm(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(n),Qt(n),pf(n,u,e,o,a)),null;case 27:if(Je(n),a=te.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=we.current,ir(n)?Np(n):(e=s0(u,o,a),n.stateNode=e,fa(n))}return Qt(n),null;case 5:if(Je(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=we.current,ir(n))Np(n);else{var _=tc(te.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[Wt]=n,f[_n]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&fa(n)}}return Qt(n),pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Wt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||za(n,!0)}else e=tc(e).createTextNode(o),e[Wt]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Wt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Wt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Qt(n),null);case 4:return Te(),e===null&&Ff(n.stateNode.containerInfo),Qt(n),null;case 10:return oa(n.type),Qt(n),null;case 19:if(ee(an),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)yo(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,yo(o,!1),e=f.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ap(a,e),a=a.sibling;return pe(an,an.current&1|2),wt&&sa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>ql&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!wt)return Qt(n),null}else 2*M()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=an.current,pe(an,u?a&1|2:a&1),wt&&sa(n,o.treeForkCount),e):(Qt(n),null);case 22:case 23:return ti(n),Fu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ee(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(ln),Te(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(an),null;case 4:return Te(),null;case 10:return oa(n.type),null;case 22:case 23:return ti(n),Fu(),e!==null&&ee(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(ln),null;case 25:return null;default:return null}}function $m(e,n){switch(Su(n),n.tag){case 3:oa(ln),Te();break;case 26:case 27:case 5:Je(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:ee(an);break;case 10:oa(n.type);break;case 22:case 23:ti(n),Fu(),e!==null&&ee(Ms);break;case 24:oa(ln)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Vt(n,n.return,R)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var H=a,ie=R;try{ie()}catch(ge){Vt(u,H,ge)}}}o=o.next}while(o!==f)}}catch(ge){Vt(n,n.return,ge)}}function eg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xp(n,a)}catch(o){Vt(e,e.return,o)}}}function tg(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(e,n,o)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Vt(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(e,n,u)}else a.current=null}function ng(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(e,e.return,u)}}function mf(e,n,a){try{var o=e.stateNode;Zx(o,e.type,a,n),o[_n]=n}catch(u){Vt(e,e.return,u)}}function ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function ag(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[Wt]=e,n[_n]=a}catch(f){Vt(e,e.return,f)}}var da=!1,fn=!1,_f=!1,sg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Rx(e,n){if(e=e.containerInfo,Bf=lc,e=vp(e),uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,ie=0,ge=0,Se=e,re=null;t:for(;;){for(var fe;Se!==a||u!==0&&Se.nodeType!==3||(R=_+u),Se!==f||o!==0&&Se.nodeType!==3||(H=_+o),Se.nodeType===3&&(_+=Se.nodeValue.length),(fe=Se.firstChild)!==null;)re=Se,Se=fe;for(;;){if(Se===e)break t;if(re===a&&++ie===u&&(R=_),re===f&&++ge===o&&(H=_),(fe=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=fe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:e,selectionRange:a},lc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=Rs(a.type,u);e=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(st){Vt(a,a.return,st)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&So(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Vt(a,a.return,_)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Vt(a,a.return,_)}}o&64&&eg(a),o&512&&bo(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(e,n)}catch(_){Vt(a,a.return,_)}}break;case 27:n===null&&o&4&&ag(a);case 26:case 5:pa(e,a),n===null&&o&4&&ng(a),o&512&&bo(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&cg(e,a);break;case 13:pa(e,a),o&4&&ug(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zx.bind(null,a),iy(e,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||fn,u=da;var f=fn;da=o,(fn=n)&&!f?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),da=u,fn=f}break;case 30:break;default:pa(e,a)}}function og(e){var n=e.alternate;n!==null&&(e.alternate=null,og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Mi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $t=null,Xn=!1;function ha(e,n,a){for(a=a.child;a!==null;)lg(e,n,a),a=a.sibling}function lg(e,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:fn||Hi(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Hi(a,n);var o=$t,u=Xn;Qa(a.type)&&($t=a.stateNode,Xn=!1),ha(e,n,a),No(a.stateNode),$t=o,Xn=u;break;case 5:fn||Hi(a,n);case 6:if(o=$t,u=Xn,$t=null,ha(e,n,a),$t=o,Xn=u,$t!==null)if(Xn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Vt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Vt(a,n,f)}break;case 18:$t!==null&&(Xn?(e=$t,e0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):e0($t,a.stateNode));break;case 4:o=$t,u=Xn,$t=a.stateNode.containerInfo,Xn=!0,ha(e,n,a),$t=o,Xn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),fn||Xa(4,a,n),ha(e,n,a);break;case 1:fn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tg(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ha(e,n,a),fn=o;break;default:ha(e,n,a)}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Vt(n,n.return,a)}}}function ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Vt(n,n.return,a)}}function wx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new sg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new sg),n;default:throw Error(s(435,e.tag))}}function Vl(e,n){var a=wx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ix.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){$t=R.stateNode,Xn=!1;break e}break;case 5:$t=R.stateNode,Xn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if($t===null)throw Error(s(160));lg(f,_,u),$t=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fg(n,e),n=n.sibling}var Ci=null;function fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),jn(e),o&4&&(Xa(3,e,e.return),So(3,e),Xa(5,e,e.return));break;case 1:qn(n,e),jn(e),o&512&&(fn||a===null||Hi(a,a.return)),o&64&&da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(qn(n,e),jn(e),o&512&&(fn||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Fi]||f[Wt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[Wt]=e,C(f),o=f;break e;case"link":var _=f0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=f0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Wt]=e,C(f),o=f}e.stateNode=o}else d0(u,e.type,e.stateNode);else e.stateNode=u0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?d0(u,e.type,e.stateNode):u0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),jn(e),o&512&&(fn||a===null||Hi(a,a.return)),a!==null&&o&4&&mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),jn(e),o&512&&(fn||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Ze){Vt(e,e.return,Ze)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(_f=!0);break;case 6:if(qn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ze){Vt(e,e.return,Ze)}}break;case 3:if(ac=null,u=Ci,Ci=nc(n.containerInfo),qn(n,e),Ci=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Ze){Vt(e,e.return,Ze)}_f&&(_f=!1,dg(e));break;case 4:o=Ci,Ci=nc(e.stateNode.containerInfo),qn(n,e),jn(e),Ci=o;break;case 12:qn(n,e),jn(e);break;case 31:qn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 13:qn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=da,ge=fn;if(da=ie||u,fn=ge||H,qn(n,e),fn=ge,da=ie,jn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||da||fn||ws(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var Se=H.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ze){Vt(H,H.return,Ze)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ze){Vt(H,H.return,Ze)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?t0(fe,!0):t0(H.stateNode,!1)}catch(Ze){Vt(H,H.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(e,a))));break;case 19:qn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 30:break;case 21:break;default:qn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ig(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(e);Gl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(pn(_,""),a.flags&=-33);var R=gf(e);Gl(e,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=gf(e);vf(e,ie,H);break;default:throw Error(s(161))}}catch(ge){Vt(e,e.return,ge)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),ws(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),ws(n);break;case 27:No(n.stateNode);case 26:case 5:Hi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,a),So(4,f);break;case 1:if(ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Vt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)kp(H[u],R)}catch(ie){Vt(o,o.return,ie)}}a&&_&64&&eg(f),bo(f,f.return);break;case 27:ag(f);case 26:case 5:ma(u,f,a),a&&o===null&&_&4&&ng(f),bo(f,f.return);break;case 12:ma(u,f,a);break;case 31:ma(u,f,a),a&&_&4&&cg(u,f);break;case 13:ma(u,f,a),a&&_&4&&ug(u,f);break;case 22:f.memoizedState===null&&ma(u,f,a),bo(f,f.return);break;case 30:break;default:ma(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(e,n,a,o),n=n.sibling}function hg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&So(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Vt(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,o):Mo(e,n):f._visibility&2?Ri(e,n,a,o):(f._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(_,n);break;case 24:Ri(e,n,a,o),u&2048&&yf(n.alternate,n);break;default:Ri(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,H=o,ie=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,R,H,u),So(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?hr(f,_,R,H,u):Mo(f,_):(ge._visibility|=2,hr(f,_,R,H,u)),u&&ie&2048&&xf(_.alternate,_);break;case 24:hr(f,_,R,H,u),u&&ie&2048&&yf(_.alternate,_);break;default:hr(f,_,R,H,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&xf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&yf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function pr(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)pg(e,n,a),e=e.sibling}function pg(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Eo&&e.memoizedState!==null&&my(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Ci;Ci=nc(e.stateNode.containerInfo),pr(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,pr(e,n,a),Eo=o):pr(e,n,a));break;default:pr(e,n,a)}}function mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,vg(o,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):To(e);break;default:To(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,vg(o,e)}mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function vg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(og(o),o===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var Dx={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Yt=null,bt=null,At=0,Gt=0,ni=null,qa=!1,mr=!1,Sf=!1,ga=0,nn=0,ja=0,Ds=0,bf=0,ii=0,gr=0,Ao=null,Wn=null,Mf=!1,Xl=0,_g=0,ql=1/0,jl=null,Wa=null,mn=0,Ya=null,vr=null,va=0,Ef=0,Tf=null,xg=null,Co=0,Af=null;function ai(){return(Ft&2)!==0&&At!==0?At&-At:I.T!==null?Uf():hs()}function yg(){if(ii===0)if((At&536870912)===0||wt){var e=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),ii=e}else ii=536870912;return e=ei.current,e!==null&&(e.flags|=32),ii}function Yn(e,n,a){(e===Yt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Za(e,At,ii,!1)),on(e,a),((Ft&2)===0||e!==Yt)&&(e===Yt&&((Ft&2)===0&&(Ds|=a),nn===4&&Za(e,At,ii,!1)),Gi(e))}function Sg(e,n,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ue(e,n),u=o?Ox(e,n):Rf(e,n,!0),f=o;do{if(u===0){mr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ux(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;u=Ao;var H=R.current.memoizedState.isDehydrated;if(H&&(_r(R,_).flags|=256),_=Rf(R,_,!1),_!==2){if(Sf&&!H){R.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){_r(e,0),Za(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ii,!qa);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-M(),10<u)){if(Za(o,n,ii,!qa),ye(o,0,!0)!==0)break e;va=n,o.timeoutHandle=Jg(bg.bind(null,o,a,Wn,jl,Mf,n,ii,Ds,gr,qa,f,"Throttled",-0,0),u);break e}bg(o,a,Wn,jl,Mf,n,ii,Ds,gr,qa,f,null,-0,0)}}break}while(!0);Gi(e)}function bg(e,n,a,o,u,f,_,R,H,ie,ge,Se,re,fe){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},pg(n,f,Se);var Ze=(f&62914560)===f?Xl-M():(f&4194048)===f?_g-M():0;if(Ze=gy(Se,Ze),Ze!==null){va=f,e.cancelPendingCommit=Ze(Dg.bind(null,e,n,f,a,o,u,_,R,H,ge,Se,null,re,fe)),Za(e,f,_,!ie);return}}Dg(e,n,f,a,o,u,_,R,H)}function Ux(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~bf,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Na(e,a,n)}function Wl(){return(Ft&6)===0?(Ro(0),!1):!0}function Cf(){if(bt!==null){if(Gt===0)var e=bt.return;else e=bt,ra=Ss=null,Vu(e),lr=null,co=0,e=bt;for(;e!==null;)$m(e.alternate,e),e=e.return;bt=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Jx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,Cf(),Yt=e,bt=a=aa(e.current,null),At=n,Gt=0,ni=null,qa=!1,mr=Ue(e,n),Sf=!1,gr=ii=bf=Ds=ja=nn=0,Wn=Ao=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ve(o),f=1<<u;n|=e[u],o&=~f}return ga=n,pl(),a}function Mg(e,n){vt=null,I.H=_o,n===or||n===bl?(n=Bp(),Gt=3):n===Du?(n=Bp(),Gt=4):Gt=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,bt===null&&(nn=1,Fl(e,fi(n,e.current)))}function Eg(){var e=ei.current;return e===null?!0:(At&4194048)===At?mi===null:(At&62914560)===At||(At&536870912)!==0?e===mi:!1}function Tg(){var e=I.H;return I.H=_o,e===null?_o:e}function Ag(){var e=I.A;return I.A=Dx,e}function Yl(){nn=4,qa||(At&4194048)!==At&&ei.current!==null||(mr=!0),(ja&134217727)===0&&(Ds&134217727)===0||Yt===null||Za(Yt,At,ii,!1)}function Rf(e,n,a){var o=Ft;Ft|=2;var u=Tg(),f=Ag();(Yt!==e||At!==n)&&(jl=null,_r(e,n)),n=!1;var _=nn;e:do try{if(Gt!==0&&bt!==null){var R=bt,H=ni;switch(Gt){case 8:Cf(),_=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ie=Gt;if(Gt=0,ni=null,xr(e,R,H,ie),a&&mr){_=0;break e}break;default:ie=Gt,Gt=0,ni=null,xr(e,R,H,ie)}}Lx(),_=nn;break}catch(ge){Mg(e,ge)}while(!0);return n&&e.shellSuspendCounter++,ra=Ss=null,Ft=o,I.H=u,I.A=f,bt===null&&(Yt=null,At=0,pl()),_}function Lx(){for(;bt!==null;)Cg(bt)}function Ox(e,n){var a=Ft;Ft|=2;var o=Tg(),u=Ag();Yt!==e||At!==n?(jl=null,ql=M()+500,_r(e,n)):mr=Ue(e,n);e:do try{if(Gt!==0&&bt!==null){n=bt;var f=ni;t:switch(Gt){case 1:Gt=0,ni=null,xr(e,n,f,1);break;case 2:case 9:if(zp(f)){Gt=0,ni=null,Rg(n);break}n=function(){Gt!==2&&Gt!==9||Yt!==e||(Gt=7),Gi(e)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:zp(f)?(Gt=0,ni=null,Rg(n)):(Gt=0,ni=null,xr(e,n,f,7));break;case 5:var _=null;switch(bt.tag){case 26:_=bt.memoizedState;case 5:case 27:var R=bt;if(_?h0(_):R.stateNode.complete){Gt=0,ni=null;var H=R.sibling;if(H!==null)bt=H;else{var ie=R.return;ie!==null?(bt=ie,Zl(ie)):bt=null}break t}}Gt=0,ni=null,xr(e,n,f,5);break;case 6:Gt=0,ni=null,xr(e,n,f,6);break;case 8:Cf(),nn=6;break e;default:throw Error(s(462))}}Px();break}catch(ge){Mg(e,ge)}while(!0);return ra=Ss=null,I.H=o,I.A=u,Ft=a,bt!==null?0:(Yt=null,At=0,pl(),nn)}function Px(){for(;bt!==null&&!Ke();)Cg(bt)}function Cg(e){var n=Qm(e.alternate,e,ga);e.memoizedProps=e.pendingProps,n===null?Zl(e):bt=n}function Rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Vu(n);default:$m(a,n),n=bt=Ap(n,ga),n=Qm(a,n,ga)}e.memoizedProps=e.pendingProps,n===null?Zl(e):bt=n}function xr(e,n,a,o){ra=Ss=null,Vu(n),lr=null,co=0;var u=n.return;try{if(Mx(e,u,n,a,At)){nn=1,Fl(e,fi(a,e.current)),bt=null;return}}catch(f){if(u!==null)throw bt=u,f;nn=1,Fl(e,fi(a,e.current)),bt=null;return}n.flags&32768?(wt||o===1?e=!0:mr||(At&536870912)!==0?e=!1:(qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),wg(n,e)):Zl(n)}function Zl(e){var n=e;do{if((n.flags&32768)!==0){wg(n,qa);return}e=n.return;var a=Ax(n.alternate,n,ga);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=e}while(n!==null);nn===0&&(nn=5)}function wg(e,n){do{var a=Cx(e.alternate,e);if(a!==null){a.flags&=32767,bt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){bt=e;return}bt=e=a}while(e!==null);nn=6,bt=null}function Dg(e,n,a,o,u,f,_,R,H){e.cancelPendingCommit=null;do Kl();while(mn!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,Vn(e,a,f,_,R,H),e===Yt&&(bt=Yt=null,At=0),vr=n,Ya=e,va=a,Ef=f,Tf=u,xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bx(de,function(){return Pg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=k.p,k.p=2,_=Ft,Ft|=4;try{Rx(e,n,a)}finally{Ft=_,k.p=u,I.T=o}}mn=1,Ng(),Ug(),Lg()}}function Ng(){if(mn===1){mn=0;var e=Ya,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Ft;Ft|=4;try{fg(n,e);var f=Hf,_=vp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&gp(R.ownerDocument.documentElement,R)){if(H!==null&&uu(R)){var ie=H.start,ge=H.end;if(ge===void 0&&(ge=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var fe=re.getSelection(),Ze=R.textContent.length,st=Math.min(H.start,Ze),jt=H.end===void 0?st:Math.min(H.end,Ze);!fe.extend&&st>jt&&(_=jt,jt=st,st=_);var K=mp(R,st),q=mp(R,jt);if(K&&q&&(fe.rangeCount!==1||fe.anchorNode!==K.node||fe.anchorOffset!==K.offset||fe.focusNode!==q.node||fe.focusOffset!==q.offset)){var ne=Se.createRange();ne.setStart(K.node,K.offset),fe.removeAllRanges(),st>jt?(fe.addRange(ne),fe.extend(q.node,q.offset)):(ne.setEnd(q.node,q.offset),fe.addRange(ne))}}}}for(Se=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Se.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}lc=!!Bf,Hf=Bf=null}finally{Ft=u,k.p=o,I.T=a}}e.current=n,mn=2}}function Ug(){if(mn===2){mn=0;var e=Ya,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Ft;Ft|=4;try{rg(e,n.alternate,n)}finally{Ft=u,k.p=o,I.T=a}}mn=3}}function Lg(){if(mn===4||mn===3){mn=0,F();var e=Ya,n=vr,a=va,o=xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,vr=Ya=null,Og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Pi(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=k.p,k.p=2,I.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{I.T=n,k.p=u}}(va&3)!==0&&Kl(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Af?Co++:(Co=0,Af=e):Co=0,Ro(0)}}function Og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Kl(){return Ng(),Ug(),Lg(),Pg()}function Pg(){if(mn!==5)return!1;var e=Ya,n=Ef;Ef=0;var a=Pi(va),o=I.T,u=k.p;try{k.p=32>a?32:a,I.T=null,a=Tf,Tf=null;var f=Ya,_=va;if(mn=0,vr=Ya=null,va=0,(Ft&6)!==0)throw Error(s(331));var R=Ft;if(Ft|=4,gg(f.current),hg(f,f.current,_,a),Ft=R,Ro(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{k.p=u,I.T=o,Og(e,n)}}function Fg(e,n,a){n=fi(a,n),n=af(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(on(e,2),Gi(e))}function Vt(e,n,a){if(e.tag===3)Fg(e,e,a);else for(;n!==null;){if(n.tag===3){Fg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=fi(a,e),a=zm(2),o=Ga(n,a,2),o!==null&&(Im(a,o,n,e),on(o,2),Gi(o));break}}n=n.return}}function wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Nx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Fx.bind(null,e,n,a),n.then(e,e))}function Fx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(At&a)===a&&(nn===4||nn===3&&(At&62914560)===At&&300>M()-Xl?(Ft&2)===0&&_r(e,0):bf|=a,gr===At&&(gr=0)),Gi(e)}function zg(e,n){n===0&&(n=It()),e=_s(e,n),e!==null&&(on(e,n),Gi(e))}function zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),zg(e,a)}function Ix(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),zg(e,a)}function Bx(e,n){return gt(e,n)}var Ql=null,yr=null,Df=!1,Jl=!1,Nf=!1,Ka=0;function Gi(e){e!==yr&&e.next===null&&(yr===null?Ql=yr=e:yr=yr.next=e),Jl=!0,Df||(Df=!0,Gx())}function Ro(e,n){if(!Nf&&Jl){Nf=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gg(o,f))}else f=At,f=ye(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,Gg(o,f));o=o.next}while(a);Nf=!1}}function Hx(){Ig()}function Ig(){Jl=Df=!1;var e=0;Ka!==0&&Qx()&&(e=Ka);for(var n=M(),a=null,o=Ql;o!==null;){var u=o.next,f=Bg(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(f&3)!==0)&&(Jl=!0)),o=u}mn!==0&&mn!==5||Ro(e),Ka!==0&&(Ka=0)}function Bg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ve(f),R=1<<_,H=u[_];H===-1?((R&a)===0||(R&o)!==0)&&(u[_]=lt(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Yt,a=At,a=ye(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&pt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ue(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&pt(o),Pi(a)){case 2:case 8:a=Me;break;case 32:a=de;break;case 268435456:a=Pe;break;default:a=de}return o=Hg.bind(null,e),a=gt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&pt(o),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=At;return o=ye(e,e===Yt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Sg(e,o,n),Bg(e,M()),e.callbackNode!=null&&e.callbackNode===a?Hg.bind(null,e):null)}function Gg(e,n){if(Kl())return null;Sg(e,n,!0)}function Gx(){$x(function(){(Ft&6)!==0?gt(ve,Hx):Ig()})}function Uf(){if(Ka===0){var e=sr;e===0&&(e=He,He<<=1,(He&261888)===0&&(He=256)),Ka=e}return Ka}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function kg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Vx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Vg((u[_n]||null).action),_=o.submitter;_&&(n=(n=_[_n]||null)?Vg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ul("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var H=_?kg(u,_):new FormData(u);Qu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?kg(u,_):new FormData(u),Qu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Lf=0;Lf<pu.length;Lf++){var Of=pu[Lf],kx=Of.toLowerCase(),Xx=Of[0].toUpperCase()+Of.slice(1);Ai(kx,"on"+Xx)}Ai(yp,"onAnimationEnd"),Ai(Sp,"onAnimationIteration"),Ai(bp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(rx,"onTransitionRun"),Ai(ox,"onTransitionStart"),Ai(lx,"onTransitionCancel"),Ai(Mp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function Xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(ge){hl(ge)}u.currentTarget=null,f=H}else for(_=0;_<o.length;_++){if(R=o[_],H=R.instance,ie=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(ge){hl(ge)}u.currentTarget=null,f=H}}}}function Mt(e,n){var a=n[ps];a===void 0&&(a=n[ps]=new Set);var o=e+"__bubble";a.has(o)||(qg(n,e,2,!1),a.add(o))}function Pf(e,n,a){var o=0;n&&(o|=4),qg(a,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[$l]){e[$l]=!0,Z.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Pf(a,!1,e),Pf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Pf("selectionchange",!1,n))}}function qg(e,n,a,o){switch(y0(n)){case 2:var u=xy;break;case 8:u=yy;break;default:u=Qf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=zi(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=f=_;continue e}R=R.parentNode}}o=o.return}Kh(function(){var ie=f,ge=$c(a),Se=[];e:{var re=Ep.get(e);if(re!==void 0){var fe=ul,Ze=e;switch(e){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":fe=I_;break;case"focusin":Ze="focus",fe=su;break;case"focusout":Ze="blur",fe=su;break;case"beforeblur":case"afterblur":fe=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=G_;break;case yp:case Sp:case bp:fe=w_;break;case Mp:fe=k_;break;case"scroll":case"scrollend":fe=E_;break;case"wheel":fe=q_;break;case"copy":case"cut":case"paste":fe=N_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=tp;break;case"toggle":case"beforetoggle":fe=W_}var st=(n&4)!==0,jt=!st&&(e==="scroll"||e==="scrollend"),K=st?re!==null?re+"Capture":null:re;st=[];for(var q=ie,ne;q!==null;){var _e=q;if(ne=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ne===null||K===null||(_e=Kr(q,K),_e!=null&&st.push(Do(q,_e,ne))),jt)break;q=q.return}0<st.length&&(re=new fe(re,Ze,null,a,ge),Se.push({event:re,listeners:st}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",re&&a!==Jc&&(Ze=a.relatedTarget||a.fromElement)&&(zi(Ze)||Ze[Un]))break e;if((fe||re)&&(re=ge.window===ge?ge:(re=ge.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(Ze=a.relatedTarget||a.toElement,fe=ie,Ze=Ze?zi(Ze):null,Ze!==null&&(jt=c(Ze),st=Ze.tag,Ze!==jt||st!==5&&st!==27&&st!==6)&&(Ze=null)):(fe=null,Ze=ie),fe!==Ze)){if(st=$h,_e="onMouseLeave",K="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(st=tp,_e="onPointerLeave",K="onPointerEnter",q="pointer"),jt=fe==null?re:ea(fe),ne=Ze==null?re:ea(Ze),re=new st(_e,q+"leave",fe,a,ge),re.target=jt,re.relatedTarget=ne,_e=null,zi(ge)===ie&&(st=new st(K,q+"enter",Ze,a,ge),st.target=ne,st.relatedTarget=jt,_e=st),jt=_e,fe&&Ze)t:{for(st=jx,K=fe,q=Ze,ne=0,_e=K;_e;_e=st(_e))ne++;_e=0;for(var nt=q;nt;nt=st(nt))_e++;for(;0<ne-_e;)K=st(K),ne--;for(;0<_e-ne;)q=st(q),_e--;for(;ne--;){if(K===q||q!==null&&K===q.alternate){st=K;break t}K=st(K),q=st(q)}st=null}else st=null;fe!==null&&jg(Se,re,fe,st,!1),Ze!==null&&jt!==null&&jg(Se,jt,Ze,st,!0)}}e:{if(re=ie?ea(ie):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var Nt=cp;else if(op(re))if(up)Nt=ix;else{Nt=tx;var Qe=ex}else fe=re.nodeName,!fe||fe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ie&&Ti(ie.elementType)&&(Nt=cp):Nt=nx;if(Nt&&(Nt=Nt(e,ie))){lp(Se,Nt,a,ge);break e}Qe&&Qe(e,re,ie),e==="focusout"&&ie&&re.type==="number"&&ie.memoizedProps.value!=null&&Mn(re,"number",re.value)}switch(Qe=ie?ea(ie):window,e){case"focusin":(op(Qe)||Qe.contentEditable==="true")&&(Qs=Qe,fu=ie,ao=null);break;case"focusout":ao=fu=Qs=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,_p(Se,a,ge);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":_p(Se,a,ge)}var _t;if(ou)e:{switch(e){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ks?sp(e,a)&&(Ct="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(np&&a.locale!=="ko"&&(Ks||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ks&&(_t=Qh()):(Oa=ge,nu="value"in Oa?Oa.value:Oa.textContent,Ks=!0)),Qe=ec(ie,Ct),0<Qe.length&&(Ct=new ep(Ct,e,null,a,ge),Se.push({event:Ct,listeners:Qe}),_t?Ct.data=_t:(_t=rp(a),_t!==null&&(Ct.data=_t)))),(_t=Z_?K_(e,a):Q_(e,a))&&(Ct=ec(ie,"onBeforeInput"),0<Ct.length&&(Qe=new ep("onBeforeInput","beforeinput",null,a,ge),Se.push({event:Qe,listeners:Ct}),Qe.data=_t)),Vx(Se,e,ie,a,ge)}Xg(Se,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Kr(e,a),u!=null&&o.unshift(Do(e,u,f)),u=Kr(e,n),u!=null&&o.push(Do(e,u,f))),e.tag===3)return o;e=e.return}return[]}function jx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jg(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=Kr(a,f),ie!=null&&_.unshift(Do(a,ie,H))):u||(ie=Kr(a,f),ie!=null&&_.push(Do(a,ie,H)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Wx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(Yx,"")}function Yg(e,n){return n=Wg(n),Wg(e)===n}function qt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":Ye(e,"class",o);break;case"tabIndex":Ye(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(e,a,o);break;case"style":Ws(e,o,f);break;case"data":if(n!=="object"){Ye(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",u.name,u,null),qt(e,n,"formEncType",u.formEncType,u,null),qt(e,n,"formMethod",u.formMethod,u,null),qt(e,n,"formTarget",u.formTarget,u,null)):(qt(e,n,"encType",u.encType,u,null),qt(e,n,"method",u.method,u,null),qt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),Le(e,"popover",o);break;case"xlinkActuate":Be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=b_.get(a)||a,Le(e,a,o))}}function If(e,n,a,o,u,f){switch(a){case"style":Ws(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Le(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,f,_,a,null)}}u&&qt(e,n,"srcSet",a.srcSet,a,null),o&&qt(e,n,"src",a.src,a,null);return;case"input":Mt("invalid",e);var R=f=_=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":_=ge;break;case"checked":H=ge;break;case"defaultChecked":ie=ge;break;case"value":f=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:qt(e,n,o,ge,a,null)}}ta(e,f,R,H,ie,_,u,!1);return;case"select":Mt("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:qt(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":Mt("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(e,n,_,R,a,null)}En(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(e,n,H,o,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)Mt(wo[o],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(e,n,ie,o,a,null)}return;default:if(Ti(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&If(e,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qt(e,n,R,o,a,null))}function Zx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,H=null,ie=null,ge=null;for(fe in a){var Se=a[fe];if(a.hasOwnProperty(fe)&&Se!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Se;default:o.hasOwnProperty(fe)||qt(e,n,fe,null,o,Se)}}for(var re in o){var fe=o[re];if(Se=a[re],o.hasOwnProperty(re)&&(fe!=null||Se!=null))switch(re){case"type":f=fe;break;case"name":u=fe;break;case"checked":ie=fe;break;case"defaultChecked":ge=fe;break;case"value":_=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Se&&qt(e,n,re,fe,o,Se)}}bn(e,_,R,H,ie,ge,f,u);return;case"select":fe=_=R=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(f)||qt(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&qt(e,n,u,f,o,H)}n=R,a=_,o=fe,re!=null?ci(e,!!a,re,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":fe=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(e,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":re=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qt(e,n,_,u,o,f)}Ht(e,re,fe);return;case"option":for(var Ze in a)if(re=a[Ze],a.hasOwnProperty(Ze)&&re!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":e.selected=!1;break;default:qt(e,n,Ze,null,o,re)}for(H in o)if(re=o[H],fe=a[H],o.hasOwnProperty(H)&&re!==fe&&(re!=null||fe!=null))switch(H){case"selected":e.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:qt(e,n,H,re,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)re=a[st],a.hasOwnProperty(st)&&re!=null&&!o.hasOwnProperty(st)&&qt(e,n,st,null,o,re);for(ie in o)if(re=o[ie],fe=a[ie],o.hasOwnProperty(ie)&&re!==fe&&(re!=null||fe!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:qt(e,n,ie,re,o,fe)}return;default:if(Ti(n)){for(var jt in a)re=a[jt],a.hasOwnProperty(jt)&&re!==void 0&&!o.hasOwnProperty(jt)&&If(e,n,jt,void 0,o,re);for(ge in o)re=o[ge],fe=a[ge],!o.hasOwnProperty(ge)||re===fe||re===void 0&&fe===void 0||If(e,n,ge,re,o,fe);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&qt(e,n,K,null,o,re);for(Se in o)re=o[Se],fe=a[Se],!o.hasOwnProperty(Se)||re===fe||re==null&&fe==null||qt(e,n,Se,re,o,fe)}function Zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&Zg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>R)break;var ge=H.transferSize,Se=H.initiatorType;ge&&Zg(Se)&&(H=H.responseEnd,_+=ge*(H<R?1:(R-ie)/(H-ie)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,Hf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function Qx(){var e=window.event;return e&&e.type==="popstate"?e===Vf?!1:(Vf=e,!0):(Vf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(ey)}:Jg;function ey(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function e0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Fi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&No(e.ownerDocument.body);a=u}while(a);Er(n)}function t0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Mi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ty(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Fi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function ny(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function n0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function Xf(e){return e.data==="$?"||e.data==="$~"}function qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jf=null;function i0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function a0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function s0(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Mi(e)}var vi=new Map,r0=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=k.d;k.d={f:ay,r:sy,D:ry,C:oy,L:ly,m:cy,X:fy,S:uy,M:dy};function ay(){var e=_a.f(),n=Wl();return e||n}function sy(e){var n=Ei(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):_a.r(e)}var Sr=typeof document>"u"?null:document;function o0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),r0.has(u)||(r0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),C(n),o.head.appendChild(n)))}}function ry(e){_a.D(e),o0("dns-prefetch",e,null)}function oy(e,n){_a.C(e,n),o0("preconnect",e,n)}function ly(e,n,a){_a.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(e)+'"]';var f=u;switch(n){case"style":f=br(e);break;case"script":f=Mr(e)}vi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(f))||n==="script"&&o.querySelector(Lo(f))||(n=o.createElement("link"),Dn(n,"link",e),C(n),o.head.appendChild(n)))}}function cy(e,n){_a.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!vi.has(f)&&(e=g({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}o=a.createElement("link"),Dn(o,"link",e),C(o),a.head.appendChild(o)}}}function uy(e,n,a){_a.S(e,n,a);var o=Sr;if(o&&e){var u=Qn(o).hoistableStyles,f=br(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Uo(f)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&Wf(e,a);var H=_=o.createElement("link");C(H),Dn(H,"link",e),H._p=new Promise(function(ie,ge){H.onload=ie,H.onerror=ge}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function fy(e,n){_a.X(e,n);var a=Sr;if(a&&e){var o=Qn(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(e=g({src:e,async:!0},n),(n=vi.get(u))&&Yf(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function dy(e,n){_a.M(e,n);var a=Sr;if(a&&e){var o=Qn(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Yf(e,n),f=a.createElement("script"),C(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function l0(e,n,a,o){var u=(u=te.current)?nc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=Qn(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var f=Qn(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Uo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||hy(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Qn(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+ft(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function c0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function hy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),C(n),e.head.appendChild(n))}function Mr(e){return'[src="'+ft(e)+'"]'}function Lo(e){return"script[async]"+e}function u0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Dn(o,"style",u),ic(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var f=e.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=c0(a),(u=vi.get(u))&&Wf(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Dn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Lo(f)))?(n.instance=u,C(u),u):(o=a,(u=vi.get(f))&&(o=g({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,e));return n.instance}function ic(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function f0(e,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Fi]||f[Wt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function d0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function my(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=c0(o),(u=vi.get(u))&&Wf(o,u),f=f.createElement("link"),C(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function gy(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Zf===0&&(Zf=62500*Kx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(vy,e),rc=null,sc.call(e))}function vy(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var o=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:N,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function _y(e,n,a,o,u,f,_,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function p0(e,n,a,o,u,f,_,R,H,ie,ge,Se){return e=new _y(e,n,a,_,H,ie,ge,Se,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),e}function m0(e){return e?(e=er,e):er}function g0(e,n,a,o,u,f){u=m0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ga(e,o,n),a!==null&&(Yn(a,e,n),fo(a,e,n))}function v0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kf(e,n){v0(e,n),(e=e.alternate)&&v0(e,n)}function _0(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&Yn(n,e,67108864),Kf(e,67108864)}}function x0(e){if(e.tag===13||e.tag===31){var n=ai();n=$i(n);var a=_s(e,n);a!==null&&Yn(a,e,n),Kf(e,n)}}var lc=!0;function xy(e,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=2,Qf(e,n,a,o)}finally{k.p=f,I.T=u}}function yy(e,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=8,Qf(e,n,a,o)}finally{k.p=f,I.T=u}}function Qf(e,n,a,o){if(lc){var u=Jf(o);if(u===null)zf(e,n,o,cc,a),S0(e,o);else if(by(u,e,n,a,o))o.stopPropagation();else if(S0(e,o),n&4&&-1<Sy.indexOf(e)){for(;u!==null;){var f=Ei(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-Ve(_);R.entanglements[1]|=H,_&=~H}Gi(f),(Ft&6)===0&&(ql=M()+500,Ro(0))}}break;case 31:case 13:R=_s(f,2),R!==null&&Yn(R,f,2),Wl(),Kf(f,2)}if(f=Jf(o),f===null&&zf(e,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Jf(e){return e=$c(e),$f(e)}var cc=null;function $f(e){if(cc=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function y0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ve:return 2;case Me:return 8;case de:case je:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var ed=!1,Ja=null,$a=null,es=null,Po=new Map,Fo=new Map,ts=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S0(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ei(n),n!==null&&_0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function by(e,n,a,o,u){switch(n){case"focusin":return Ja=zo(Ja,e,n,a,o,u),!0;case"dragenter":return $a=zo($a,e,n,a,o,u),!0;case"mouseover":return es=zo(es,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,zo(Po.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,zo(Fo.get(f)||null,e,n,a,o,u)),!0}return!1}function b0(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,li(e.priority,function(){x0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,li(e.priority,function(){x0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=Ei(a),n!==null&&_0(n),e.blockedOn=a,!1;n.shift()}return!0}function M0(e,n,a){uc(e)&&a.delete(n)}function My(){ed=!1,Ja!==null&&uc(Ja)&&(Ja=null),$a!==null&&uc($a)&&($a=null),es!==null&&uc(es)&&(es=null),Po.forEach(M0),Fo.forEach(M0)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,My)))}var dc=null;function E0(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if($f(o||a)===null)continue;break}var f=Ei(a);f!==null&&(e.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(H){return fc(H,e)}Ja!==null&&fc(Ja,e),$a!==null&&fc($a,e),es!==null&&fc(es,e),Po.forEach(n),Fo.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)b0(a),a.blockedOn===null&&ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[_n]||null;if(typeof f=="function")_||E0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[_n]||null)R=_.formAction;else if($f(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),E0(a)}}}function T0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function td(e){this._internalRoot=e}hc.prototype.render=td.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();g0(a,o,e,n,null,null)},hc.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;g0(e.current,2,null,e,null,null),Wl(),n[Un]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,e),a===0&&b0(e)}};var A0=t.version;if(A0!=="19.2.4")throw Error(s(527,A0,"19.2.4"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Ey={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Re=pc.inject(Ey),De=pc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Lm,f=Om,_=Pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=p0(e,1,!1,null,null,a,o,null,u,f,_,T0),e[Un]=n.current,Ff(e),new td(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Lm,_=Om,R=Pm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=p0(e,1,!0,n,a??null,o,u,H,f,_,R,T0),n.context=m0(null),a=n.current,o=ai(),o=$i(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,on(n,a),Gi(n),e[Un]=n.current,Ff(e),new hc(n)},Bo.version="19.2.4",Bo}var F0;function Oy(){if(F0)return ad.exports;F0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ad.exports=Ly(),ad.exports}var Py=Oy();const Fy=Iv(Py);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="182",zy=0,z0=1,Iy=2,Pc=1,By=2,jo=3,ds=0,Zn=1,Ea=2,Aa=0,Hr=1,I0=2,B0=3,H0=4,Hy=5,Is=100,Gy=101,Vy=102,ky=103,Xy=104,qy=200,jy=201,Wy=202,Yy=203,Id=204,Bd=205,Zy=206,Ky=207,Qy=208,Jy=209,$y=210,eS=211,tS=212,nS=213,iS=214,Hd=0,Gd=1,Vd=2,Vr=3,kd=4,Xd=5,qd=6,jd=7,Bv=0,aS=1,sS=2,ji=0,Hv=1,Gv=2,Vv=3,kv=4,Xv=5,qv=6,jv=7,Wv=300,qs=301,kr=302,Wd=303,Yd=304,Wc=306,Zd=1e3,Ta=1001,Kd=1002,Nn=1003,rS=1004,mc=1005,Fn=1006,ld=1007,Hs=1008,Si=1009,Yv=1010,Zv=1011,Jo=1012,Ph=1013,Ki=1014,Xi=1015,Ra=1016,Fh=1017,zh=1018,$o=1020,Kv=35902,Qv=35899,Jv=1021,$v=1022,Li=1023,wa=1026,Gs=1027,e_=1028,Ih=1029,Xr=1030,Bh=1031,Hh=1033,Fc=33776,zc=33777,Ic=33778,Bc=33779,Qd=35840,Jd=35841,$d=35842,eh=35843,th=36196,nh=37492,ih=37496,ah=37488,sh=37489,rh=37490,oh=37491,lh=37808,ch=37809,uh=37810,fh=37811,dh=37812,hh=37813,ph=37814,mh=37815,gh=37816,vh=37817,_h=37818,xh=37819,yh=37820,Sh=37821,bh=36492,Mh=36494,Eh=36495,Th=36283,Ah=36284,Ch=36285,Rh=36286,oS=3200,lS=0,cS=1,us="",xi="srgb",qr="srgb-linear",Vc="linear",kt="srgb",Tr=7680,G0=519,uS=512,fS=513,dS=514,Gh=515,hS=516,pS=517,Vh=518,mS=519,V0=35044,k0="300 es",qi=2e3,kc=2001;function t_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gS(){const r=Xc("canvas");return r.style.display="block",r}const X0={};function q0(...r){const t="THREE."+r.shift();console.log(t,...r)}function dt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Lt(...r){const t="THREE."+r.shift();console.error(t,...r)}function el(...r){const t=r.join(" ");t in X0||(X0[t]=!0,dt(...r))}function vS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Wr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j0=1234567;const Zo=Math.PI/180,tl=180/Math.PI;function Yr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Rt(r,t,i){return Math.max(t,Math.min(i,r))}function kh(r,t){return(r%t+t)%t}function _S(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function xS(r,t,i){return r!==t?(i-r)/(t-r):0}function Ko(r,t,i){return(1-i)*r+i*t}function yS(r,t,i,s){return Ko(r,t,1-Math.exp(-i*s))}function SS(r,t=1){return t-Math.abs(kh(r,t*2)-t)}function bS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function MS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function ES(r,t){return r+Math.floor(Math.random()*(t-r+1))}function TS(r,t){return r+Math.random()*(t-r)}function AS(r){return r*(.5-Math.random())}function CS(r){r!==void 0&&(j0=r);let t=j0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function RS(r){return r*Zo}function wS(r){return r*tl}function DS(r){return(r&r-1)===0&&r!==0}function NS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function US(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function LS(r,t,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+s)/2),v=d((t+s)/2),g=c((t-s)/2),y=d((t-s)/2),S=c((s-t)/2),E=d((s-t)/2);switch(l){case"XYX":r.set(h*v,m*g,m*y,h*p);break;case"YZY":r.set(m*y,h*v,m*g,h*p);break;case"ZXZ":r.set(m*g,m*y,h*v,h*p);break;case"XZX":r.set(h*v,m*E,m*S,h*p);break;case"YXY":r.set(m*S,h*v,m*E,h*p);break;case"ZYZ":r.set(m*E,m*S,h*v,h*p);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Br(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cd={DEG2RAD:Zo,RAD2DEG:tl,generateUUID:Yr,clamp:Rt,euclideanModulo:kh,mapLinear:_S,inverseLerp:xS,lerp:Ko,damp:yS,pingpong:SS,smoothstep:bS,smootherstep:MS,randInt:ES,randFloat:TS,randFloatSpread:AS,seededRandom:CS,degToRad:RS,radToDeg:wS,isPowerOfTwo:DS,ceilPowerOfTwo:NS,floorPowerOfTwo:US,setQuaternionFromProperEuler:LS,normalize:Bn,denormalize:Br};class zt{constructor(t=0,i=0){zt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Rt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],y=c[d+0],S=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h>=1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==y||p!==S||v!==E){let b=m*y+p*S+v*E+g*A;b<0&&(y=-y,S=-S,E=-E,A=-A,b=-b);let x=1-h;if(b<.9995){const D=Math.acos(b),N=Math.sin(D);x=Math.sin(x*D)/N,h=Math.sin(h*D)/N,m=m*x+y*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h}else{m=m*x+y*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[d],y=c[d+1],S=c[d+2],E=c[d+3];return t[i]=h*E+v*g+m*S-p*y,t[i+1]=m*E+v*y+p*g-h*S,t[i+2]=p*E+v*S+h*y-m*g,t[i+3]=v*E-h*g-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(c/2),y=m(s/2),S=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=y*v*g+p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g-y*S*E;break;case"YXZ":this._x=y*v*g+p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g+y*S*E;break;case"ZXY":this._x=y*v*g-p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g-y*S*E;break;case"ZYX":this._x=y*v*g-p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g+y*S*E;break;case"YZX":this._x=y*v*g+p*S*E,this._y=p*S*g+y*v*E,this._z=p*v*E-y*S*g,this._w=p*v*g-y*S*E;break;case"XZY":this._x=y*v*g-p*S*E,this._y=p*S*g-y*v*E,this._z=p*v*E+y*S*g,this._w=p*v*g+y*S*E;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=s+h+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(W0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(W0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*v,this.y=s+m*v+h*p-c*g,this.z=l+m*g+c*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ud.copy(this).projectOnVector(t),this.sub(ud)}reflect(t){return this.sub(ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Rt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new oe,W0=new il;class xt{constructor(t,i,s,l,c,d,h,m,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],y=s[2],S=s[5],E=s[8],A=l[0],b=l[3],x=l[6],D=l[1],N=l[4],U=l[7],L=l[2],z=l[5],B=l[8];return c[0]=d*A+h*D+m*L,c[3]=d*b+h*N+m*z,c[6]=d*x+h*U+m*B,c[1]=p*A+v*D+g*L,c[4]=p*b+v*N+g*z,c[7]=p*x+v*U+g*B,c[2]=y*A+S*D+E*L,c[5]=y*b+S*N+E*z,c[8]=y*x+S*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,y=h*m-v*c,S=p*c-d*m,E=i*g+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-v*s)*A,t[2]=(h*s-l*d)*A,t[3]=y*A,t[4]=(v*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(d*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(fd.makeScale(t,i)),this}rotate(t){return this.premultiply(fd.makeRotation(-t)),this}translate(t,i){return this.premultiply(fd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new xt,Y0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:Vc,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:kt,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Dt=OS();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class PS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=Xc("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ca(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FS=0;class Xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(dd(l[d].image)):c.push(dd(l[d]))}else c=dd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function dd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let zS=0;const hd=new oe;class Gn extends Wr{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ta,l=Ta,c=Fn,d=Hs,h=Li,m=Si,p=Gn.DEFAULT_ANISOTROPY,v=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Yr(),this.name="",this.source=new Xh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zd:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case Kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zd:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case Kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Wv;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],y=m[1],S=m[5],E=m[9],A=m[2],b=m[6],x=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(E-b)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(S+1)/2,L=(x+1)/2,z=(v+y)/4,B=(g+A)/4,V=(E+b)/4;return N>U&&N>L?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=B/s):U>L?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=V/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=B/c,l=V/c),this.set(s,l,c,i),this}let D=Math.sqrt((b-E)*(b-E)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(b-E)/D,this.y=(g-A)/D,this.z=(y-v)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this.w=Rt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this.w=Rt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Wr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends IS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class n_ extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BS extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),vc.subVectors(this.max,Ho),Cr.subVectors(t.a,Ho),Rr.subVectors(t.b,Ho),wr.subVectors(t.c,Ho),is.subVectors(Rr,Cr),as.subVectors(wr,Rr),Ns.subVectors(Cr,wr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!pd(i,Cr,Rr,wr,vc)||(i=[1,0,0,0,1,0,0,0,1],!pd(i,Cr,Rr,wr,vc))?!1:(_c.crossVectors(is,as),i=[_c.x,_c.y,_c.z],pd(i,Cr,Rr,wr,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],wi=new oe,gc=new al,Cr=new oe,Rr=new oe,wr=new oe,is=new oe,as=new oe,Ns=new oe,Ho=new oe,vc=new oe,_c=new oe,Us=new oe;function pd(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const h=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),v=s.dot(Us);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const HS=new al,Go=new oe,md=new oe;class qh{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):HS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(md)),this.expandByPoint(Go.copy(t.center).sub(md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new oe,gd=new oe,xc=new oe,ss=new oe,vd=new oe,yc=new oe,_d=new oe;class GS{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gd.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(gd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(xc),h=ss.dot(this.direction),m=-ss.dot(xc),p=ss.lengthSq(),v=Math.abs(1-d*d);let g,y,S,E;if(v>0)if(g=d*m-h,y=d*h-m,E=c*v,g>=0)if(y>=-E)if(y<=E){const A=1/v;g*=A,y*=A,S=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-d*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(d*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=d>0?-c:c,g=Math.max(0,-(d*y+h)),S=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(gd).addScaledVector(xc,y),S}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(c=(t.min.y-y.y)*v,d=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,d=(t.min.y-y.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(h=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){vd.subVectors(i,t),yc.subVectors(s,t),_d.crossVectors(vd,yc);let d=this.direction.dot(_d),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ss.subVectors(this.origin,t);const m=h*this.direction.dot(yc.crossVectors(ss,yc));if(m<0)return null;const p=h*this.direction.dot(vd.cross(ss));if(p<0||m+p>d)return null;const v=-h*ss.dot(_d);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(t,i,s,l,c,d,h,m,p,v,g,y,S,E,A,b){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,v,g,y,S,E,A,b)}set(t,i,s,l,c,d,h,m,p,v,g,y,S,E,A,b){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=A,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),d=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=E+S*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*v,S=m*g,E=p*v,A=p*g;i[0]=y+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=S*h-E,i[6]=A+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*v,S=m*g,E=p*v,A=p*g;i[0]=y-A*h,i[4]=-d*g,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*v,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-S,i[8]=y*p+A,i[1]=m*g,i[5]=A*p+y,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-y*g,i[8]=E*g+S,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=S*g+E,i[10]=y-A*g}else if(t.order==="XZY"){const y=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+A,i[5]=d*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=h*v,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VS,t,kS)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),rs.crossVectors(s,si),rs.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),rs.crossVectors(s,si)),rs.normalize(),Sc.crossVectors(si,rs),l[0]=rs.x,l[4]=Sc.x,l[8]=si.x,l[1]=rs.y,l[5]=Sc.y,l[9]=si.y,l[2]=rs.z,l[6]=Sc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],y=s[9],S=s[13],E=s[2],A=s[6],b=s[10],x=s[14],D=s[3],N=s[7],U=s[11],L=s[15],z=l[0],B=l[4],V=l[8],T=l[12],w=l[1],X=l[5],Y=l[9],Q=l[13],le=l[2],he=l[6],I=l[10],k=l[14],$=l[3],Ee=l[7],me=l[11],P=l[15];return c[0]=d*z+h*w+m*le+p*$,c[4]=d*B+h*X+m*he+p*Ee,c[8]=d*V+h*Y+m*I+p*me,c[12]=d*T+h*Q+m*k+p*P,c[1]=v*z+g*w+y*le+S*$,c[5]=v*B+g*X+y*he+S*Ee,c[9]=v*V+g*Y+y*I+S*me,c[13]=v*T+g*Q+y*k+S*P,c[2]=E*z+A*w+b*le+x*$,c[6]=E*B+A*X+b*he+x*Ee,c[10]=E*V+A*Y+b*I+x*me,c[14]=E*T+A*Q+b*k+x*P,c[3]=D*z+N*w+U*le+L*$,c[7]=D*B+N*X+U*he+L*Ee,c[11]=D*V+N*Y+U*I+L*me,c[15]=D*T+N*Q+U*k+L*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],y=t[10],S=t[14],E=t[3],A=t[7],b=t[11],x=t[15],D=m*S-p*y,N=h*S-p*g,U=h*y-m*g,L=d*S-p*v,z=d*y-m*v,B=d*g-h*v;return i*(A*D-b*N+x*U)-s*(E*D-b*L+x*z)+l*(E*N-A*L+x*B)-c*(E*U-A*z+b*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],y=t[10],S=t[11],E=t[12],A=t[13],b=t[14],x=t[15],D=g*b*p-A*y*p+A*m*S-h*b*S-g*m*x+h*y*x,N=E*y*p-v*b*p-E*m*S+d*b*S+v*m*x-d*y*x,U=v*A*p-E*g*p+E*h*S-d*A*S-v*h*x+d*g*x,L=E*g*m-v*A*m-E*h*y+d*A*y+v*h*b-d*g*b,z=i*D+s*N+l*U+c*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=D*B,t[1]=(A*y*c-g*b*c-A*l*S+s*b*S+g*l*x-s*y*x)*B,t[2]=(h*b*c-A*m*c+A*l*p-s*b*p-h*l*x+s*m*x)*B,t[3]=(g*m*c-h*y*c-g*l*p+s*y*p+h*l*S-s*m*S)*B,t[4]=N*B,t[5]=(v*b*c-E*y*c+E*l*S-i*b*S-v*l*x+i*y*x)*B,t[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*x-i*m*x)*B,t[7]=(d*y*c-v*m*c+v*l*p-i*y*p-d*l*S+i*m*S)*B,t[8]=U*B,t[9]=(E*g*c-v*A*c-E*s*S+i*A*S+v*s*x-i*g*x)*B,t[10]=(d*A*c-E*h*c+E*s*p-i*A*p-d*s*x+i*h*x)*B,t[11]=(v*h*c-d*g*c-v*s*p+i*g*p+d*s*S-i*h*S)*B,t[12]=L*B,t[13]=(v*A*l-E*g*l+E*s*y-i*A*y-v*s*b+i*g*b)*B,t[14]=(E*h*l-d*A*l-E*s*m+i*A*m+d*s*b-i*h*b)*B,t[15]=(d*g*l-v*h*l+v*s*m-i*g*m-d*s*y+i*h*y)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,g=h+h,y=c*p,S=c*v,E=c*g,A=d*v,b=d*g,x=h*g,D=m*p,N=m*v,U=m*g,L=s.x,z=s.y,B=s.z;return l[0]=(1-(A+x))*L,l[1]=(S+U)*L,l[2]=(E-N)*L,l[3]=0,l[4]=(S-U)*z,l[5]=(1-(y+x))*z,l[6]=(b+D)*z,l[7]=0,l[8]=(E+N)*B,l[9]=(b-D)*B,l[10]=(1-(y+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Dr.set(l[0],l[1],l[2]).length();const d=Dr.set(l[4],l[5],l[6]).length(),h=Dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,v=1/d,g=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=qi,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===qi)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===kc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=qi,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===qi)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===kc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dr=new oe,Di=new hn,VS=new oe(0,0,0),kS=new oe(1,1,1),rs=new oe,Sc=new oe,si=new oe,K0=new hn,Q0=new il;class Da{constructor(t=0,i=0,s=0,l=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return K0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XS=0;const J0=new oe,Nr=new il,Sa=new hn,bc=new oe,Vo=new oe,qS=new oe,jS=new il,$0=new oe(1,0,0),ev=new oe(0,1,0),tv=new oe(0,0,1),nv={type:"added"},WS={type:"removed"},Ur={type:"childadded",child:null},xd={type:"childremoved",child:null};class oi extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new oe,i=new Da,s=new il,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new xt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis($0,t)}rotateY(t){return this.rotateOnAxis(ev,t)}rotateZ(t){return this.rotateOnAxis(tv,t)}translateOnAxis(t,i){return J0.copy(t).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($0,t)}translateY(t){return this.translateOnAxis(ev,t)}translateZ(t){return this.translateOnAxis(tv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(Vo,bc,this.up):Sa.lookAt(bc,Vo,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WS),xd.child=t,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,qS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,jS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),y=d(t.skeletons),S=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}oi.DEFAULT_UP=new oe(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new oe,ba=new oe,yd=new oe,Ma=new oe,Lr=new oe,Or=new oe,iv=new oe,Sd=new oe,bd=new oe,Md=new oe,Ed=new rn,Td=new rn,Ad=new rn;class Ui{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),ba.subVectors(s,i),yd.subVectors(t,i);const d=Ni.dot(Ni),h=Ni.dot(ba),m=Ni.dot(yd),p=ba.dot(ba),v=ba.dot(yd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-h*v)*y,E=(d*v-h*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(d,Ma.y),m.addScaledVector(h,Ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,s),Ad.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(Td,c.y),d.addScaledVector(Ad,c.z),d}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),ba.subVectors(t,i),Ni.cross(ba).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ni.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Lr.subVectors(l,s),Or.subVectors(c,s),Sd.subVectors(t,s);const m=Lr.dot(Sd),p=Or.dot(Sd);if(m<=0&&p<=0)return i.copy(s);bd.subVectors(t,l);const v=Lr.dot(bd),g=Or.dot(bd);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Lr,d);Md.subVectors(t,c);const S=Lr.dot(Md),E=Or.dot(Md);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Or,h);const b=v*E-S*g;if(b<=0&&g-v>=0&&S-E>=0)return iv.subVectors(c,l),h=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(iv,h);const x=1/(b+A+y);return d=A*x,h=y*x,i.copy(s).addScaledVector(Lr,d).addScaledVector(Or,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Cd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ot{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Dt.workingColorSpace){if(t=kh(t,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Cd(d,c,t+1/3),this.g=Cd(d,c,t),this.b=Cd(d,c,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=a_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Dt.workingToColorSpace(Pn.copy(this),t),Math.round(Rt(Pn.r*255,0,255))*65536+Math.round(Rt(Pn.g*255,0,255))*256+Math.round(Rt(Pn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=xi){Dt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(Mc);const s=Ko(os.h,Mc.h,i),l=Ko(os.s,Mc.s,i),c=Ko(os.l,Mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ot;Ot.NAMES=a_;let YS=0;class Yc extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Hr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Bd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Id&&(s.blendSrc=this.blendSrc),this.blendDst!==Bd&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qc extends Yc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new oe,Ec=new zt;let ZS=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=V0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Br(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Br(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Br(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Br(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Br(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==V0&&(t.usage=this.usage),t}}class s_ extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class r_ extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bi extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let KS=0;const _i=new hn,Rd=new oi,Pr=new oe,ri=new al,ko=new al,yn=new oe;class Ji extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t_(t)?r_:s_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return Rd.lookAt(t),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ri.min,ko.min),ri.expandByPoint(yn),yn.addVectors(ri.max,ko.max),ri.expandByPoint(yn)):(ri.expandByPoint(ko.min),ri.expandByPoint(ko.max))}ri.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)yn.fromBufferAttribute(h,p),m&&(Pr.fromBufferAttribute(t,p),yn.add(Pr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let V=0;V<s.count;V++)h[V]=new oe,m[V]=new oe;const p=new oe,v=new oe,g=new oe,y=new zt,S=new zt,E=new zt,A=new oe,b=new oe;function x(V,T,w){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),y.fromBufferAttribute(c,V),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,w),v.sub(p),g.sub(p),S.sub(y),E.sub(y);const X=1/(S.x*E.y-E.x*S.y);isFinite(X)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(X),b.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(X),h[V].add(A),h[T].add(A),h[w].add(A),m[V].add(b),m[T].add(b),m[w].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let V=0,T=D.length;V<T;++V){const w=D[V],X=w.start,Y=w.count;for(let Q=X,le=X+Y;Q<le;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const N=new oe,U=new oe,L=new oe,z=new oe;function B(V){L.fromBufferAttribute(l,V),z.copy(L);const T=h[V];N.copy(T),N.sub(L.multiplyScalar(L.dot(T))).normalize(),U.crossVectors(z,T);const X=U.dot(m[V])<0?-1:1;d.setXYZW(V,N.x,N.y,N.z,X)}for(let V=0,T=D.length;V<T;++V){const w=D[V],X=w.start,Y=w.count;for(let Q=X,le=X+Y;Q<le;Q+=3)B(t.getX(Q+0)),B(t.getX(Q+1)),B(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new oe,c=new oe,d=new oe,h=new oe,m=new oe,p=new oe,v=new oe,g=new oe;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),A=t.getX(y+1),b=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,b),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,y=new p.constructor(m.length*v);let S=0,E=0;for(let A=0,b=m.length;A<b;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*v;for(let x=0;x<v;x++)y[E++]=p[S++]}return new Yi(y,v,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ji,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const y=p[v],S=t(y,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,S=g.length;y<S;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new hn,Ls=new GS,Tc=new qh,sv=new oe,Ac=new oe,Cc=new oe,Rc=new oe,wd=new oe,wc=new oe,rv=new oe,Dc=new oe;class Oi extends oi{constructor(t=new Ji,i=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(wd.fromBufferAttribute(g,t),d?wc.addScaledVector(wd,v):wc.addScaledVector(wd.sub(i),v))}i.add(wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Tc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Tc,sv)===null||Ls.origin.distanceToSquared(sv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(av),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const b=y[E],x=d[b.materialIndex],D=Math.max(b.start,S.start),N=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let U=D,L=N;U<L;U+=3){const z=h.getX(U),B=h.getX(U+1),V=h.getX(U+2);l=Nc(this,x,t,s,p,v,g,z,B,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const D=h.getX(b),N=h.getX(b+1),U=h.getX(b+2);l=Nc(this,d,t,s,p,v,g,D,N,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=y.length;E<A;E++){const b=y[E],x=d[b.materialIndex],D=Math.max(b.start,S.start),N=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let U=D,L=N;U<L;U+=3){const z=U,B=U+1,V=U+2;l=Nc(this,x,t,s,p,v,g,z,B,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const D=b,N=b+1,U=b+2;l=Nc(this,d,t,s,p,v,g,D,N,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function QS(r,t,i,s,l,c,d,h){let m;if(t.side===Zn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===ds,h),m===null)return null;Dc.copy(h),Dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:r}}function Nc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Ac),r.getVertexPosition(m,Cc),r.getVertexPosition(p,Rc);const v=QS(r,t,i,s,Ac,Cc,Rc,rv);if(v){const g=new oe;Ui.getBarycoord(rv,Ac,Cc,Rc,g),l&&(v.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new zt)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new zt)),d&&(v.normal=Ui.getInterpolatedAttribute(d,h,m,p,g,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new oe,materialIndex:0};Ui.getNormal(Ac,Cc,Rc,y.normal),v.face=y,v.barycoord=g}return v}class sl extends Ji{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(g,2));function E(A,b,x,D,N,U,L,z,B,V,T){const w=U/B,X=L/V,Y=U/2,Q=L/2,le=z/2,he=B+1,I=V+1;let k=0,$=0;const Ee=new oe;for(let me=0;me<I;me++){const P=me*X-Q;for(let ee=0;ee<he;ee++){const pe=ee*w-Y;Ee[A]=pe*D,Ee[b]=P*N,Ee[x]=le,p.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[b]=0,Ee[x]=z>0?1:-1,v.push(Ee.x,Ee.y,Ee.z),g.push(ee/B),g.push(1-me/V),k+=1}}for(let me=0;me<V;me++)for(let P=0;P<B;P++){const ee=y+P+he*me,pe=y+P+he*(me+1),we=y+(P+1)+he*(me+1),Fe=y+(P+1)+he*me;m.push(ee,pe,Fe),m.push(pe,we,Fe),$+=6}h.addGroup(S,$,T),S+=$,y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function JS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function o_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const $S={clone:jr,merge:Hn};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Yc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=JS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class l_ extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new oe,ov=new zt,lv=new zt;class yi extends l_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,ov,lv),i.subVectors(lv,ov)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Fr=-90,zr=1;class nb extends oi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Fr,zr,t,i);l.layers=this.layers,this.add(l);const c=new yi(Fr,zr,t,i);c.layers=this.layers,this.add(c);const d=new yi(Fr,zr,t,i);d.layers=this.layers,this.add(d);const h=new yi(Fr,zr,t,i);h.layers=this.layers,this.add(h);const m=new yi(Fr,zr,t,i);m.layers=this.layers,this.add(m);const p=new yi(Fr,zr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class c_ extends Gn{constructor(t=[],i=qs,s,l,c,d,h,m,p,v){super(t,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class u_ extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new c_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sl(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Aa});c.uniforms.tEquirect.value=i;const d=new Oi(l,c),h=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Fn),new nb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Wo extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,s),x=this._getHandJoint(p,A);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Wo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ab extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class sb extends Gn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Nn,v=Nn,g,y){super(null,d,h,m,p,v,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new oe,rb=new oe,ob=new xt;class zs{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Nd.subVectors(s,i).cross(rb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Nd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ob.getNormalMatrix(t),l=this.coplanarPoint(Nd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new qh,lb=new zt(.5,.5),Uc=new oe;class f_{constructor(t=new zs,i=new zs,s=new zs,l=new zs,c=new zs,d=new zs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],S=c[7],E=c[8],A=c[9],b=c[10],x=c[11],D=c[12],N=c[13],U=c[14],L=c[15];if(l[0].setComponents(p-d,S-v,x-E,L-D).normalize(),l[1].setComponents(p+d,S+v,x+E,L+D).normalize(),l[2].setComponents(p+h,S+g,x+A,L+N).normalize(),l[3].setComponents(p-h,S-g,x-A,L-N).normalize(),s)l[4].setComponents(m,y,b,U).normalize(),l[5].setComponents(p-m,S-y,x-b,L-U).normalize();else if(l[4].setComponents(p-m,S-y,x-b,L-U).normalize(),i===qi)l[5].setComponents(p+m,S+y,x+b,L+U).normalize();else if(i===kc)l[5].setComponents(m,y,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=lb.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nl extends Gn{constructor(t,i,s=Ki,l,c,d,h=Nn,m=Nn,p,v=wa,g=1){if(v!==wa&&v!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cb extends nl{constructor(t,i=Ki,s=qs,l,c,d=Nn,h=Nn,m,p=wa){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class d_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class jh extends Ji{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),v(),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(c.slice(),3)),this.setAttribute("uv",new bi(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const N=new oe,U=new oe,L=new oe;for(let z=0;z<i.length;z+=3)S(i[z+0],N),S(i[z+1],U),S(i[z+2],L),m(N,U,L,D)}function m(D,N,U,L){const z=L+1,B=[];for(let V=0;V<=z;V++){B[V]=[];const T=D.clone().lerp(U,V/z),w=N.clone().lerp(U,V/z),X=z-V;for(let Y=0;Y<=X;Y++)Y===0&&V===z?B[V][Y]=T:B[V][Y]=T.clone().lerp(w,Y/X)}for(let V=0;V<z;V++)for(let T=0;T<2*(z-V)-1;T++){const w=Math.floor(T/2);T%2===0?(y(B[V][w+1]),y(B[V+1][w]),y(B[V][w])):(y(B[V][w+1]),y(B[V+1][w+1]),y(B[V+1][w]))}}function p(D){const N=new oe;for(let U=0;U<c.length;U+=3)N.x=c[U+0],N.y=c[U+1],N.z=c[U+2],N.normalize().multiplyScalar(D),c[U+0]=N.x,c[U+1]=N.y,c[U+2]=N.z}function v(){const D=new oe;for(let N=0;N<c.length;N+=3){D.x=c[N+0],D.y=c[N+1],D.z=c[N+2];const U=b(D)/2/Math.PI+.5,L=x(D)/Math.PI+.5;d.push(U,1-L)}E(),g()}function g(){for(let D=0;D<d.length;D+=6){const N=d[D+0],U=d[D+2],L=d[D+4],z=Math.max(N,U,L),B=Math.min(N,U,L);z>.9&&B<.1&&(N<.2&&(d[D+0]+=1),U<.2&&(d[D+2]+=1),L<.2&&(d[D+4]+=1))}}function y(D){c.push(D.x,D.y,D.z)}function S(D,N){const U=D*3;N.x=t[U+0],N.y=t[U+1],N.z=t[U+2]}function E(){const D=new oe,N=new oe,U=new oe,L=new oe,z=new zt,B=new zt,V=new zt;for(let T=0,w=0;T<c.length;T+=9,w+=6){D.set(c[T+0],c[T+1],c[T+2]),N.set(c[T+3],c[T+4],c[T+5]),U.set(c[T+6],c[T+7],c[T+8]),z.set(d[w+0],d[w+1]),B.set(d[w+2],d[w+3]),V.set(d[w+4],d[w+5]),L.copy(D).add(N).add(U).divideScalar(3);const X=b(L);A(z,w+0,D,X),A(B,w+2,N,X),A(V,w+4,U,X)}}function A(D,N,U,L){L<0&&D.x===1&&(d[N]=D.x-1),U.x===0&&U.z===0&&(d[N]=L/2/Math.PI+.5)}function b(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.vertices,t.indices,t.radius,t.detail)}}class jc extends jh{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new jc(t.radius,t.detail)}}class Zc extends Ji{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=t/h,y=i/m,S=[],E=[],A=[],b=[];for(let x=0;x<v;x++){const D=x*y-d;for(let N=0;N<p;N++){const U=N*g-c;E.push(U,-D,0),A.push(0,0,1),b.push(N/h),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<h;D++){const N=D+p*x,U=D+p*(x+1),L=D+1+p*(x+1),z=D+1+p*x;S.push(N,U,z),S.push(U,L,z)}this.setIndex(S),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ub extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fb extends Yc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class db extends Yc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class h_ extends l_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hb extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function cv(r,t,i,s){const l=mb(s);switch(i){case Jv:return r*t;case e_:return r*t/l.components*l.byteLength;case Ih:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case Bh:return r*t*2/l.components*l.byteLength;case $v:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case Hh:return r*t*4/l.components*l.byteLength;case Fc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jd:case eh:return Math.max(r,16)*Math.max(t,8)/4;case Qd:case $d:return Math.max(r,8)*Math.max(t,8)/2;case th:case nh:case ah:case sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ih:case rh:case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case uh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case hh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case bh:case Mh:case Eh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Th:case Ah:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ch:case Rh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mb(r){switch(r){case Si:case Yv:return{byteLength:1,components:1};case Jo:case Zv:case Ra:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case Ki:case Ph:case Xi:return{byteLength:4,components:1};case Kv:case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p_(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gb(r){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,g[y]=A)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
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
#endif`,Eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`uniform sampler2D dfgLUT;
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
}`,gM=`
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tE=`float getShadowMask() {
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
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
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
}`,ME=`#if DEPTH_PACKING == 3200
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
}`,EE=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
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
}`,wE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,NE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,LE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,PE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,IE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,VE=`#define TOON
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
}`,kE=`#define TOON
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
}`,XE=`uniform float size;
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
}`,qE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,WE=`uniform vec3 color;
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
}`,YE=`uniform float rotation;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:vb,alphahash_pars_fragment:_b,alphamap_fragment:xb,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:bb,aomap_fragment:Mb,aomap_pars_fragment:Eb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Cb,beginnormal_vertex:Rb,bsdfs:wb,iridescence_fragment:Db,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Ob,clipping_planes_vertex:Pb,color_fragment:Fb,color_pars_fragment:zb,color_pars_vertex:Ib,color_vertex:Bb,common:Hb,cube_uv_reflection_fragment:Gb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:kb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:jb,colorspace_fragment:Wb,colorspace_pars_fragment:Yb,envmap_fragment:Zb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Qb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:cM,envmap_vertex:$b,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:sM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:oM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:vM,lights_fragment_end:_M,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:bM,map_fragment:MM,map_pars_fragment:EM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:wM,morphcolor_vertex:DM,morphnormal_vertex:NM,morphtarget_pars_vertex:UM,morphtarget_vertex:LM,normal_fragment_begin:OM,normal_fragment_maps:PM,normal_pars_fragment:FM,normal_pars_vertex:zM,normal_vertex:IM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:kM,opaque_fragment:XM,packing:qM,premultiplied_alpha_fragment:jM,project_vertex:WM,dithering_fragment:YM,dithering_pars_fragment:ZM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:$M,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:aE,skinnormal_vertex:sE,specularmap_fragment:rE,specularmap_pars_fragment:oE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:vE,backgroundCube_vert:_E,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:bE,depth_frag:ME,distance_vert:EE,distance_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:wE,meshbasic_vert:DE,meshbasic_frag:NE,meshlambert_vert:UE,meshlambert_frag:LE,meshmatcap_vert:OE,meshmatcap_frag:PE,meshnormal_vert:FE,meshnormal_frag:zE,meshphong_vert:IE,meshphong_frag:BE,meshphysical_vert:HE,meshphysical_frag:GE,meshtoon_vert:VE,meshtoon_frag:kE,points_vert:XE,points_frag:qE,shadow_vert:jE,shadow_frag:WE,sprite_vert:YE,sprite_frag:ZE},ke={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Hn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Hn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Hn([ke.points,ke.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Hn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Hn([ke.common,ke.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Hn([ke.sprite,ke.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Hn([ke.common,ke.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Hn([ke.lights,ke.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Lc={r:0,b:0,g:0},Ps=new Da,KE=new hn;function QE(r,t,i,s,l,c,d){const h=new Ot(0);let m=c===!0?0:1,p,v,g=null,y=0,S=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function A(N){let U=!1;const L=E(N);L===null?x(h,m):L&&L.isColor&&(x(L,1),U=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(N,U){const L=E(U);L&&(L.isCubeTexture||L.mapping===Wc)?(v===void 0&&(v=new Oi(new sl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:jr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,B,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ps.copy(U.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(Ps)),v.material.toneMapped=Dt.getTransfer(L.colorSpace)!==kt,(g!==L||y!==L.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=L,y=L.version,S=r.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Oi(new Zc(2,2),new Qi({name:"BackgroundMaterial",uniforms:jr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(L.colorSpace)!==kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||y!==L.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=L,y=L.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(Lc,o_(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,U,d)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,U=1){h.set(N),m=U,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:A,addToRenderList:b,dispose:D}}function JE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(w,X,Y,Q,le){let he=!1;const I=g(Q,Y,X);c!==I&&(c=I,p(c.object)),he=S(w,Q,Y,le),he&&E(w,Q,Y,le),le!==null&&t.update(le,r.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,U(w,X,Y,Q),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,X,Y){const Q=Y.wireframe===!0;let le=s[w.id];le===void 0&&(le={},s[w.id]=le);let he=le[X.id];he===void 0&&(he={},le[X.id]=he);let I=he[Q];return I===void 0&&(I=y(m()),he[Q]=I),I}function y(w){const X=[],Y=[],Q=[];for(let le=0;le<i;le++)X[le]=0,Y[le]=0,Q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:Q,object:w,attributes:{},index:null}}function S(w,X,Y,Q){const le=c.attributes,he=X.attributes;let I=0;const k=Y.getAttributes();for(const $ in k)if(k[$].location>=0){const me=le[$];let P=he[$];if(P===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),me===void 0||me.attribute!==P||P&&me.data!==P.data)return!0;I++}return c.attributesNum!==I||c.index!==Q}function E(w,X,Y,Q){const le={},he=X.attributes;let I=0;const k=Y.getAttributes();for(const $ in k)if(k[$].location>=0){let me=he[$];me===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const P={};P.attribute=me,me&&me.data&&(P.data=me.data),le[$]=P,I++}c.attributes=le,c.attributesNum=I,c.index=Q}function A(){const w=c.newAttributes;for(let X=0,Y=w.length;X<Y;X++)w[X]=0}function b(w){x(w,0)}function x(w,X){const Y=c.newAttributes,Q=c.enabledAttributes,le=c.attributeDivisors;Y[w]=1,Q[w]===0&&(r.enableVertexAttribArray(w),Q[w]=1),le[w]!==X&&(r.vertexAttribDivisor(w,X),le[w]=X)}function D(){const w=c.newAttributes,X=c.enabledAttributes;for(let Y=0,Q=X.length;Y<Q;Y++)X[Y]!==w[Y]&&(r.disableVertexAttribArray(Y),X[Y]=0)}function N(w,X,Y,Q,le,he,I){I===!0?r.vertexAttribIPointer(w,X,Y,le,he):r.vertexAttribPointer(w,X,Y,Q,le,he)}function U(w,X,Y,Q){A();const le=Q.attributes,he=Y.getAttributes(),I=X.defaultAttributeValues;for(const k in he){const $=he[k];if($.location>=0){let Ee=le[k];if(Ee===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Ee!==void 0){const me=Ee.normalized,P=Ee.itemSize,ee=t.get(Ee);if(ee===void 0)continue;const pe=ee.buffer,we=ee.type,Fe=ee.bytesPerElement,te=we===r.INT||we===r.UNSIGNED_INT||Ee.gpuType===Ph;if(Ee.isInterleavedBufferAttribute){const ue=Ee.data,Ce=ue.stride,Te=Ee.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<$.locationSize;Oe++)x($.location+Oe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<$.locationSize;Oe++)b($.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let Oe=0;Oe<$.locationSize;Oe++)N($.location+Oe,P/$.locationSize,we,me,Ce*Fe,(Te+P/$.locationSize*Oe)*Fe,te)}else{if(Ee.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)x($.location+ue,Ee.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ue=0;ue<$.locationSize;ue++)b($.location+ue);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let ue=0;ue<$.locationSize;ue++)N($.location+ue,P/$.locationSize,we,me,P*Fe,P/$.locationSize*ue*Fe,te)}}else if(I!==void 0){const me=I[k];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv($.location,me);break;case 3:r.vertexAttrib3fv($.location,me);break;case 4:r.vertexAttrib4fv($.location,me);break;default:r.vertexAttrib1fv($.location,me)}}}}D()}function L(){V();for(const w in s){const X=s[w];for(const Y in X){const Q=X[Y];for(const le in Q)v(Q[le].object),delete Q[le];delete X[Y]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const X=s[w.id];for(const Y in X){const Q=X[Y];for(const le in Q)v(Q[le].object),delete Q[le];delete X[Y]}delete s[w.id]}function B(w){for(const X in s){const Y=s[X];if(Y[w.id]===void 0)continue;const Q=Y[w.id];for(const le in Q)v(Q[le].object),delete Q[le];delete Y[w.id]}}function V(){T(),d=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:b,disableUnusedAttributes:D}}function $E(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],v[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*y[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function e1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Li&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const V=B===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Si&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Xi&&!V)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(dt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:L,samples:z}}function t1(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new zs,h=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||l;return l=y,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,x=r.get(g);if(!l||E===null||E.length===0||c&&!b)c?v(null):p();else{const D=c?0:s,N=D*4;let U=x.clippingState||null;m.value=U,U=v(E,y,N,S);for(let L=0;L!==N;++L)U[L]=i[L];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,S,E){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=m.value,E!==!0||b===null){const x=S+A*4,D=y.matrixWorldInverse;h.getNormalMatrix(D),(b===null||b.length<x)&&(b=new Float32Array(x));for(let N=0,U=S;N!==A;++N,U+=4)d.copy(g[N]).applyMatrix4(D,h),d.normal.toArray(b,U),b[U+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}function n1(r){let t=new WeakMap;function i(d,h){return h===Wd?d.mapping=qs:h===Yd&&(d.mapping=kr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wd||h===Yd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new u_(m.height);return p.fromEquirectangularTexture(r,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const fs=4,uv=[.125,.215,.35,.446,.526,.582],Bs=20,i1=256,Xo=new h_,fv=new Ot;let Ud=null,Ld=0,Od=0,Pd=!1;const a1=new oe;class dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=a1}=c;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ra,format:Li,colorSpace:qr,depthBuffer:!1},l=hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=s1(c)),this._blurMaterial=o1(c,t,i),this._ggxMaterial=r1(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new Ji,t);this._renderer.compile(i,Xo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(fv),g.toneMapping=ji,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new sl,new qc({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let x=!1;const D=t.background;D?D.isColor&&(b.color.copy(D),t.background=null,x=!0):(b.color.copy(fv),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[N]));const L=this._cubeSize;Ir(l,U*L,N>2?L:0,L,L),g.setRenderTarget(l),x&&g.render(A,m),g.render(t,m)}g.toneMapping=S,g.autoClear=y,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ir(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Xo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),y=0+p*1.25,S=g*y,{_lodMax:E}=this,A=this._sizeLods[s],b=3*A*(s>E-fs?s-E+fs:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Ir(c,b,x,3*A,2*A),l.setRenderTarget(c),l.render(h,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ir(t,b,x,3*A,2*A),l.setRenderTarget(t),l.render(h,Xo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),A=c/E,b=isFinite(c)?1+Math.floor(v*A):Bs;b>Bs&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Bs}`);const x=[];let D=0;for(let B=0;B<Bs;++B){const V=B/A,T=Math.exp(-V*V/2);x.push(T),B===0?D+=T:B<b&&(D+=2*T)}for(let B=0;B<x.length;B++)x[B]=x[B]/D;y.envMap.value=t.texture,y.samples.value=b,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-s;const U=this._sizeLods[l],L=3*U*(l>N-fs?l-N+fs:0),z=4*(this._cubeSize-U);Ir(i,L,z,3*U,2*U),m.setRenderTarget(i),m.render(g,Xo)}}function s1(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+uv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>r-fs?m=uv[d-r+fs-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,A=3,b=2,x=1,D=new Float32Array(A*E*S),N=new Float32Array(b*E*S),U=new Float32Array(x*E*S);for(let z=0;z<S;z++){const B=z%3*2/3-1,V=z>2?0:-1,T=[B,V,0,B+2/3,V,0,B+2/3,V+1,0,B,V,0,B+2/3,V+1,0,B,V+1,0];D.set(T,A*E*z),N.set(y,b*E*z);const w=[z,z,z,z,z,z];U.set(w,x*E*z)}const L=new Ji;L.setAttribute("position",new Yi(D,A)),L.setAttribute("uv",new Yi(N,b)),L.setAttribute("faceIndex",new Yi(U,x)),s.push(new Oi(L,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function hv(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function r1(r,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function o1(r,t,i){const s=new Float32Array(Bs),l=new oe(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function pv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function mv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function l1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Wd||m===Yd,v=m===qs||m===kr;if(p||v){let g=t.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new dv(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new dv(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function c1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function u1(r,t,i,s){const l={},c=new WeakMap;function d(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let N=0,U=D.length;N<U;N+=3){const L=D[N+0],z=D[N+1],B=D[N+2];y.push(L,z,z,B,B,L)}}else if(E!==void 0){const D=E.array;A=E.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const L=N+0,z=N+1,B=N+2;y.push(L,z,z,B,B,L)}}else return;const b=new(t_(y)?r_:s_)(y,1);b.version=A;const x=c.get(g);x&&t.remove(x),c.set(g,b)}function v(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function f1(r,t,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,S){r.drawElements(s,S,c,y*d),i.update(S,s,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,y*d,E),i.update(S,s,E))}function v(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let b=0;for(let x=0;x<E;x++)b+=S[x];i.update(b,s,1)}function g(y,S,E,A){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<y.length;x++)p(y[x]/d,S[x],A[x]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,A,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*A[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function d1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function h1(r,t,i){const s=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let T=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",T)};y!==void 0&&y.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),A===!0&&(N=3);let U=h.attributes.position.count*N,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const z=new Float32Array(U*L*4*g),B=new n_(z,U,L,g);B.type=Xi,B.needsUpdate=!0;const V=N*4;for(let w=0;w<g;w++){const X=b[w],Y=x[w],Q=D[w],le=U*L*4*w;for(let he=0;he<X.count;he++){const I=he*V;S===!0&&(l.fromBufferAttribute(X,he),z[le+I+0]=l.x,z[le+I+1]=l.y,z[le+I+2]=l.z,z[le+I+3]=0),E===!0&&(l.fromBufferAttribute(Y,he),z[le+I+4]=l.x,z[le+I+5]=l.y,z[le+I+6]=l.z,z[le+I+7]=0),A===!0&&(l.fromBufferAttribute(Q,he),z[le+I+8]=l.x,z[le+I+9]=l.y,z[le+I+10]=l.z,z[le+I+11]=Q.itemSize===4?l.w:1)}}y={count:g,texture:B,size:new zt(U,L)},s.set(h,y),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let S=0;for(let A=0;A<p.length;A++)S+=p[A];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function p1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const m1={[Hv]:"LINEAR_TONE_MAPPING",[Gv]:"REINHARD_TONE_MAPPING",[Vv]:"CINEON_TONE_MAPPING",[kv]:"ACES_FILMIC_TONE_MAPPING",[qv]:"AGX_TONE_MAPPING",[jv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function g1(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Wi(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),h=new Ji;h.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(h,m),v=new h_(-1,1,1,-1,0,1);let g=null,y=null,S=!1,E,A=null,b=[],x=!1;this.setSize=function(D,N){c.setSize(D,N),d.setSize(D,N);for(let U=0;U<b.length;U++){const L=b[U];L.setSize&&L.setSize(D,N)}},this.setEffects=function(D){b=D,x=b.length>0&&b[0].isRenderPass===!0;const N=c.width,U=c.height;for(let L=0;L<b.length;L++){const z=b[L];z.setSize&&z.setSize(N,U)}},this.begin=function(D,N){if(S||D.toneMapping===ji&&b.length===0)return!1;if(A=N,N!==null){const U=N.width,L=N.height;(c.width!==U||c.height!==L)&&this.setSize(U,L)}return x===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return x},this.end=function(D,N){D.toneMapping=E,S=!0;let U=c,L=d;for(let z=0;z<b.length;z++){const B=b[z];if(B.enabled!==!1&&(B.render(D,L,U,N),B.needsSwap!==!1)){const V=U;U=L,L=V}}if(g!==D.outputColorSpace||y!==D.toneMapping){g=D.outputColorSpace,y=D.toneMapping,m.defines={},Dt.getTransfer(g)===kt&&(m.defines.SRGB_TRANSFER="");const z=m1[y];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(A),D.render(p,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const m_=new Gn,wh=new nl(1,1),g_=new n_,v_=new BS,__=new c_,gv=[],vv=[],_v=new Float32Array(16),xv=new Float32Array(9),yv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=gv[l];if(c===void 0&&(c=new Float32Array(l),gv[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Qc(r,t){let i=vv[t];i===void 0&&(i=new Int32Array(t),vv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function v1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function S1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;yv.set(s),r.uniformMatrix2fv(this.addr,!1,yv),vn(i,s)}}function b1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;xv.set(s),r.uniformMatrix3fv(this.addr,!1,xv),vn(i,s)}}function M1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;_v.set(s),r.uniformMatrix4fv(this.addr,!1,_v),vn(i,s)}}function E1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function A1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function C1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function R1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function U1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(wh.compareFunction=i.isReversedDepthBuffer()?Vh:Gh,c=wh):c=m_,i.setTexture2D(t||c,l)}function L1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||v_,l)}function O1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||__,l)}function P1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||g_,l)}function F1(r){switch(r){case 5126:return v1;case 35664:return _1;case 35665:return x1;case 35666:return y1;case 35674:return S1;case 35675:return b1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return C1;case 5125:return R1;case 36294:return w1;case 36295:return D1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return P1}}function z1(r,t){r.uniform1fv(this.addr,t)}function I1(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function B1(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function H1(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function G1(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function V1(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function k1(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function X1(r,t){r.uniform1iv(this.addr,t)}function q1(r,t){r.uniform2iv(this.addr,t)}function j1(r,t){r.uniform3iv(this.addr,t)}function W1(r,t){r.uniform4iv(this.addr,t)}function Y1(r,t){r.uniform1uiv(this.addr,t)}function Z1(r,t){r.uniform2uiv(this.addr,t)}function K1(r,t){r.uniform3uiv(this.addr,t)}function Q1(r,t){r.uniform4uiv(this.addr,t)}function J1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=wh:d=m_;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function $1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||v_,c[d])}function eT(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||__,c[d])}function tT(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||g_,c[d])}function nT(r){switch(r){case 5126:return z1;case 35664:return I1;case 35665:return B1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return k1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return j1;case 35669:case 35673:return W1;case 5125:return Y1;case 36294:return Z1;case 36295:return K1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=F1(i.type)}}class aT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nT(i.type)}}class sT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function Sv(r,t){r.seq.push(t),r.map[t.id]=t}function rT(r,t,i){const s=r.name,l=s.length;for(Fd.lastIndex=0;;){const c=Fd.exec(s),d=Fd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Sv(i,p===void 0?new iT(h,r,t):new aT(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new sT(h),Sv(i,g)),i=g}}}class Hc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);rT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function bv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const oT=37297;let lT=0;function cT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Mv=new xt;function uT(r){Dt._getMatrix(Mv,Dt.workingColorSpace,r);const t=`mat3( ${Mv.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(r)){case Vc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ev(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+cT(r.getShaderSource(t),h)}else return c}function fT(r,t){const i=uT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const dT={[Hv]:"Linear",[Gv]:"Reinhard",[Vv]:"Cineon",[kv]:"ACESFilmic",[qv]:"AgX",[jv]:"Neutral",[Xv]:"Custom"};function hT(r,t){const i=dT[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new oe;function pT(){Dt.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function gT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function vT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Yo(r){return r!==""}function Tv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Av(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(r){return r.replace(_T,yT)}const xT=new Map;function yT(r,t){let i=yt[t];if(i===void 0){const s=xT.get(t);if(s!==void 0)i=yt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Dh(i)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(r){return r.replace(ST,bT)}function bT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Rv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const MT={[Pc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function ET(r){return MT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TT={[qs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function AT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":TT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const CT={[kr]:"ENVMAP_MODE_REFRACTION"};function RT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":CT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wT={[Bv]:"ENVMAP_BLENDING_MULTIPLY",[aS]:"ENVMAP_BLENDING_MIX",[sS]:"ENVMAP_BLENDING_ADD"};function DT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wT[r.combine]||"ENVMAP_BLENDING_NONE"}function NT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=ET(i),p=AT(i),v=RT(i),g=DT(i),y=NT(i),S=mT(i),E=gT(c),A=l.createProgram();let b,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),x.length>0&&(x+=`
`)):(b=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),x=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?yt.tonemapping_pars_fragment:"",i.toneMapping!==ji?hT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,fT("linearToOutputTexel",i.outputColorSpace),pT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Dh(d),d=Tv(d,i),d=Av(d,i),h=Dh(h),h=Tv(h,i),h=Av(h,i),d=Cv(d),h=Cv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",i.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+b+d,U=D+x+h,L=bv(l,l.VERTEX_SHADER,N),z=bv(l,l.FRAGMENT_SHADER,U);l.attachShader(A,L),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(X){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(L)||"",le=l.getShaderInfoLog(z)||"",he=Y.trim(),I=Q.trim(),k=le.trim();let $=!0,Ee=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,L,z);else{const me=Ev(l,L,"vertex"),P=Ev(l,z,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+he+`
`+me+`
`+P)}else he!==""?dt("WebGLProgram: Program Info Log:",he):(I===""||k==="")&&(Ee=!1);Ee&&(X.diagnostics={runnable:$,programLog:he,vertexShader:{log:I,prefix:b},fragmentShader:{log:k,prefix:x}})}l.deleteShader(L),l.deleteShader(z),V=new Hc(l,A),T=vT(l,A)}let V;this.getUniforms=function(){return V===void 0&&B(this),V};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,oT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=z,this}let LT=0;class OT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new PT(t),i.set(t,s)),s}}class PT{constructor(t){this.id=LT++,this.code=t,this.usedTimes=0}}function FT(r,t,i,s,l,c,d){const h=new i_,m=new OT,p=new Set,v=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,w,X,Y,Q){const le=Y.fog,he=Q.geometry,I=T.isMeshStandardMaterial?Y.environment:null,k=(T.isMeshStandardMaterial?i:t).get(T.envMap||I),$=k&&k.mapping===Wc?k.image.height:null,Ee=E[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const me=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,P=me!==void 0?me.length:0;let ee=0;he.morphAttributes.position!==void 0&&(ee=1),he.morphAttributes.normal!==void 0&&(ee=2),he.morphAttributes.color!==void 0&&(ee=3);let pe,we,Fe,te;if(Ee){const ut=ki[Ee];pe=ut.vertexShader,we=ut.fragmentShader}else pe=T.vertexShader,we=T.fragmentShader,m.update(T),Fe=m.getVertexShaderID(T),te=m.getFragmentShaderID(T);const ue=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Te=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,Je=!!T.map,ct=!!T.matcap,et=!!k,it=!!T.aoMap,rt=!!T.lightMap,ot=!!T.bumpMap,Et=!!T.normalMap,G=!!T.displacementMap,Tt=!!T.emissiveMap,gt=!!T.metalnessMap,pt=!!T.roughnessMap,Ke=T.anisotropy>0,F=T.clearcoat>0,M=T.dispersion>0,W=T.iridescence>0,ve=T.sheen>0,Me=T.transmission>0,de=Ke&&!!T.anisotropyMap,je=F&&!!T.clearcoatMap,Pe=F&&!!T.clearcoatNormalMap,We=F&&!!T.clearcoatRoughnessMap,at=W&&!!T.iridescenceMap,Re=W&&!!T.iridescenceThicknessMap,De=ve&&!!T.sheenColorMap,Xe=ve&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,ze=!!T.specularColorMap,mt=!!T.specularIntensityMap,j=Me&&!!T.transmissionMap,He=Me&&!!T.thicknessMap,Ne=!!T.gradientMap,Ge=!!T.alphaMap,Ae=T.alphaTest>0,ye=!!T.alphaHash,Ue=!!T.extensions;let lt=ji;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(lt=r.toneMapping);const It={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:we,defines:T.defines,customVertexShaderID:Fe,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:Te,instancingColor:Te&&Q.instanceColor!==null,instancingMorph:Te&&Q.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qr,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:ct,envMap:et,envMapMode:et&&k.mapping,envMapCubeUVHeight:$,aoMap:it,lightMap:rt,bumpMap:ot,normalMap:Et,displacementMap:G,emissiveMap:Tt,normalMapObjectSpace:Et&&T.normalMapType===cS,normalMapTangentSpace:Et&&T.normalMapType===lS,metalnessMap:gt,roughnessMap:pt,anisotropy:Ke,anisotropyMap:de,clearcoat:F,clearcoatMap:je,clearcoatNormalMap:Pe,clearcoatRoughnessMap:We,dispersion:M,iridescence:W,iridescenceMap:at,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Xe,specularMap:Ve,specularColorMap:ze,specularIntensityMap:mt,transmission:Me,transmissionMap:j,thicknessMap:He,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:ye,combine:T.combine,mapUv:Je&&A(T.map.channel),aoMapUv:it&&A(T.aoMap.channel),lightMapUv:rt&&A(T.lightMap.channel),bumpMapUv:ot&&A(T.bumpMap.channel),normalMapUv:Et&&A(T.normalMap.channel),displacementMapUv:G&&A(T.displacementMap.channel),emissiveMapUv:Tt&&A(T.emissiveMap.channel),metalnessMapUv:gt&&A(T.metalnessMap.channel),roughnessMapUv:pt&&A(T.roughnessMap.channel),anisotropyMapUv:de&&A(T.anisotropyMap.channel),clearcoatMapUv:je&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&A(T.sheenRoughnessMap.channel),specularMapUv:Ve&&A(T.specularMap.channel),specularColorMapUv:ze&&A(T.specularColorMap.channel),specularIntensityMapUv:mt&&A(T.specularIntensityMap.channel),transmissionMapUv:j&&A(T.transmissionMap.channel),thicknessMapUv:He&&A(T.thicknessMap.channel),alphaMapUv:Ge&&A(T.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Et||Ke),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!he.attributes.uv&&(Je||Ge),fog:!!le,useFog:T.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:Tt&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ea,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Oe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)w.push(X),w.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(D(w,T),N(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function D(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function N(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function U(T){const w=E[T.type];let X;if(w){const Y=ki[w];X=$S.clone(Y.uniforms)}else X=T.uniforms;return X}function L(T,w){let X=g.get(w);return X!==void 0?++X.usedTimes:(X=new UT(r,w,T,c),v.push(X),g.set(w,X)),X}function z(T){if(--T.usedTimes===0){const w=v.indexOf(T);v[w]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function B(T){m.remove(T)}function V(){m.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:U,acquireProgram:L,releaseProgram:z,releaseShaderCache:B,programs:v,dispose:V}}function zT(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function IT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function wv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Dv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g,y,S,E,A,b){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:b},r[t]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=A,x.group=b),t++,x}function h(g,y,S,E,A,b){const x=d(g,y,S,E,A,b);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,E,A,b){const x=d(g,y,S,E,A,b);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||IT),s.length>1&&s.sort(y||wv),l.length>1&&l.sort(y||wv)}function v(){for(let g=t,y=r.length;g<y;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function BT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Dv,r.set(s,[d])):l>=c.length?(d=new Dv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function HT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new oe,color:new Ot};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[t.id]=i,i}}}function GT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let VT=0;function kT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function XT(r){const t=new HT,i=GT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const l=new oe,c=new hn,d=new hn;function h(p){let v=0,g=0,y=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let S=0,E=0,A=0,b=0,x=0,D=0,N=0,U=0,L=0,z=0,B=0;p.sort(kT);for(let T=0,w=p.length;T<w;T++){const X=p[T],Y=X.color,Q=X.intensity,le=X.distance;let he=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Xr?he=X.shadow.map.texture:he=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=Y.r*Q,g+=Y.g*Q,y+=Y.b*Q;else if(X.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(X.sh.coefficients[I],Q);B++}else if(X.isDirectionalLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const k=X.shadow,$=i.get(X);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,s.directionalShadow[S]=$,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=X.shadow.matrix,D++}s.directional[S]=I,S++}else if(X.isSpotLight){const I=t.get(X);I.position.setFromMatrixPosition(X.matrixWorld),I.color.copy(Y).multiplyScalar(Q),I.distance=le,I.coneCos=Math.cos(X.angle),I.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),I.decay=X.decay,s.spot[A]=I;const k=X.shadow;if(X.map&&(s.spotLightMap[L]=X.map,L++,k.updateMatrices(X),X.castShadow&&z++),s.spotLightMatrix[A]=k.matrix,X.castShadow){const $=i.get(X);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=he,U++}A++}else if(X.isRectAreaLight){const I=t.get(X);I.color.copy(Y).multiplyScalar(Q),I.halfWidth.set(X.width*.5,0,0),I.halfHeight.set(0,X.height*.5,0),s.rectArea[b]=I,b++}else if(X.isPointLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),I.distance=X.distance,I.decay=X.decay,X.castShadow){const k=X.shadow,$=i.get(X);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=X.shadow.matrix,N++}s.point[E]=I,E++}else if(X.isHemisphereLight){const I=t.get(X);I.skyColor.copy(X.color).multiplyScalar(Q),I.groundColor.copy(X.groundColor).multiplyScalar(Q),s.hemi[x]=I,x++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==A||V.rectAreaLength!==b||V.hemiLength!==x||V.numDirectionalShadows!==D||V.numPointShadows!==N||V.numSpotShadows!==U||V.numSpotMaps!==L||V.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=b,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+L-z,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,V.directionalLength=S,V.pointLength=E,V.spotLength=A,V.rectAreaLength=b,V.hemiLength=x,V.numDirectionalShadows=D,V.numPointShadows=N,V.numSpotShadows=U,V.numSpotMaps=L,V.numLightProbes=B,s.version=VT++)}function m(p,v){let g=0,y=0,S=0,E=0,A=0;const b=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const N=p[x];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),g++}else if(N.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),S++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),d.identity(),c.copy(N.matrixWorld),c.premultiply(b),d.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),y++}else if(N.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(b),A++}}}return{setup:h,setupView:m,state:s}}function Nv(r){const t=new XT(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function qT(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Nv(r),t.set(l,[h])):c>=d.length?(h=new Nv(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
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
}`,YT=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],ZT=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Uv=new hn,qo=new oe,zd=new oe;function KT(r,t,i){let s=new f_;const l=new zt,c=new zt,d=new rn,h=new fb,m=new db,p={},v=i.maxTextureSize,g={[ds]:Zn,[Zn]:ds,[Ea]:Ea},y=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:jT,fragmentShader:WT}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ji;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oi(E,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let x=this.type;this.render=function(z,B,V){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||z.length===0)return;z.type===By&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=Pc);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Aa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=x!==this.type;Q&&B.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(he=>he.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,he=z.length;le<he;le++){const I=z[le],k=I.shadow;if(k===void 0){dt("WebGLShadowMap:",I,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const $=k.getFrameExtents();if(l.multiply($),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,k.mapSize.y=c.y)),k.map===null||Q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===jo){if(I.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Wi(l.x,l.y,{format:Xr,type:Ra,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),k.map.texture.name=I.name+".shadowMap",k.map.depthTexture=new nl(l.x,l.y,Xi),k.map.depthTexture.name=I.name+".shadowMapDepth",k.map.depthTexture.format=wa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn}else{I.isPointLight?(k.map=new u_(l.x),k.map.depthTexture=new cb(l.x,Ki)):(k.map=new Wi(l.x,l.y),k.map.depthTexture=new nl(l.x,l.y,Ki)),k.map.depthTexture.name=I.name+".shadowMap",k.map.depthTexture.format=wa;const me=r.state.buffers.depth.getReversed();this.type===Pc?(k.map.depthTexture.compareFunction=me?Vh:Gh,k.map.depthTexture.minFilter=Fn,k.map.depthTexture.magFilter=Fn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn)}k.camera.updateProjectionMatrix()}const Ee=k.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<Ee;me++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,me),r.clear();else{me===0&&(r.setRenderTarget(k.map),r.clear());const P=k.getViewport(me);d.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Y.viewport(d)}if(I.isPointLight){const P=k.camera,ee=k.matrix,pe=I.distance||P.far;pe!==P.far&&(P.far=pe,P.updateProjectionMatrix()),qo.setFromMatrixPosition(I.matrixWorld),P.position.copy(qo),zd.copy(P.position),zd.add(YT[me]),P.up.copy(ZT[me]),P.lookAt(zd),P.updateMatrixWorld(),ee.makeTranslation(-qo.x,-qo.y,-qo.z),Uv.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Uv,P.coordinateSystem,P.reversedDepth)}else k.updateMatrices(I);s=k.getFrustum(),U(B,V,k.camera,I,this.type)}k.isPointLightShadow!==!0&&this.type===jo&&D(k,V),k.needsUpdate=!1}x=this.type,b.needsUpdate=!1,r.setRenderTarget(T,w,X)};function D(z,B){const V=t.update(A);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Wi(l.x,l.y,{format:Xr,type:Ra})),y.uniforms.shadow_pass.value=z.map.depthTexture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,V,y,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,V,S,A,null)}function N(z,B,V,T){let w=null;const X=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(X!==void 0)w=X;else if(w=V.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=w.uuid,Q=B.uuid;let le=p[Y];le===void 0&&(le={},p[Y]=le);let he=le[Q];he===void 0&&(he=w.clone(),le[Q]=he,B.addEventListener("dispose",L)),w=he}if(w.visible=B.visible,w.wireframe=B.wireframe,T===jo?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:g[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=r.properties.get(w);Y.light=V}return w}function U(z,B,V,T,w){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===jo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const Q=t.update(z),le=z.material;if(Array.isArray(le)){const he=Q.groups;for(let I=0,k=he.length;I<k;I++){const $=he[I],Ee=le[$.materialIndex];if(Ee&&Ee.visible){const me=N(z,Ee,T,w);z.onBeforeShadow(r,z,B,V,Q,me,$),r.renderBufferDirect(V,null,Q,me,z,$),z.onAfterShadow(r,z,B,V,Q,me,$)}}}else if(le.visible){const he=N(z,le,T,w);z.onBeforeShadow(r,z,B,V,Q,he,null),r.renderBufferDirect(V,null,Q,he,z,null),z.onAfterShadow(r,z,B,V,Q,he,null)}}const Y=z.children;for(let Q=0,le=Y.length;Q<le;Q++)U(Y[Q],B,V,T,w)}function L(z){z.target.removeEventListener("dispose",L);for(const V in p){const T=p[V],w=z.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const QT={[Hd]:Gd,[Vd]:qd,[kd]:jd,[Vr]:Xd,[Gd]:Hd,[qd]:Vd,[jd]:kd,[Xd]:Vr};function JT(r,t){function i(){let j=!1;const He=new rn;let Ne=null;const Ge=new rn(0,0,0,0);return{setMask:function(Ae){Ne!==Ae&&!j&&(r.colorMask(Ae,Ae,Ae,Ae),Ne=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,ye,Ue,lt,It){It===!0&&(Ae*=lt,ye*=lt,Ue*=lt),He.set(Ae,ye,Ue,lt),Ge.equals(He)===!1&&(r.clearColor(Ae,ye,Ue,lt),Ge.copy(He))},reset:function(){j=!1,Ne=null,Ge.set(-1,0,0,0)}}}function s(){let j=!1,He=!1,Ne=null,Ge=null,Ae=null;return{setReversed:function(ye){if(He!==ye){const Ue=t.get("EXT_clip_control");ye?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),He=ye;const lt=Ae;Ae=null,this.setClear(lt)}},getReversed:function(){return He},setTest:function(ye){ye?ue(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(ye){Ne!==ye&&!j&&(r.depthMask(ye),Ne=ye)},setFunc:function(ye){if(He&&(ye=QT[ye]),Ge!==ye){switch(ye){case Hd:r.depthFunc(r.NEVER);break;case Gd:r.depthFunc(r.ALWAYS);break;case Vd:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case kd:r.depthFunc(r.EQUAL);break;case Xd:r.depthFunc(r.GEQUAL);break;case qd:r.depthFunc(r.GREATER);break;case jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ge=ye}},setLocked:function(ye){j=ye},setClear:function(ye){Ae!==ye&&(He&&(ye=1-ye),r.clearDepth(ye),Ae=ye)},reset:function(){j=!1,Ne=null,Ge=null,Ae=null,He=!1}}}function l(){let j=!1,He=null,Ne=null,Ge=null,Ae=null,ye=null,Ue=null,lt=null,It=null;return{setTest:function(ut){j||(ut?ue(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(ut){He!==ut&&!j&&(r.stencilMask(ut),He=ut)},setFunc:function(ut,on,Vn){(Ne!==ut||Ge!==on||Ae!==Vn)&&(r.stencilFunc(ut,on,Vn),Ne=ut,Ge=on,Ae=Vn)},setOp:function(ut,on,Vn){(ye!==ut||Ue!==on||lt!==Vn)&&(r.stencilOp(ut,on,Vn),ye=ut,Ue=on,lt=Vn)},setLocked:function(ut){j=ut},setClear:function(ut){It!==ut&&(r.clearStencil(ut),It=ut)},reset:function(){j=!1,He=null,Ne=null,Ge=null,Ae=null,ye=null,Ue=null,lt=null,It=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,S=[],E=null,A=!1,b=null,x=null,D=null,N=null,U=null,L=null,z=null,B=new Ot(0,0,0),V=0,T=!1,w=null,X=null,Y=null,Q=null,le=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),I=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=k>=2);let Ee=null,me={};const P=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),pe=new rn().fromArray(P),we=new rn().fromArray(ee);function Fe(j,He,Ne,Ge){const Ae=new Uint8Array(4),ye=r.createTexture();r.bindTexture(j,ye),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ue=0;Ue<Ne;Ue++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(He,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(He+Ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return ye}const te={};te[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(r.DEPTH_TEST),d.setFunc(Vr),ot(!1),Et(z0),ue(r.CULL_FACE),it(Aa);function ue(j){v[j]!==!0&&(r.enable(j),v[j]=!0)}function Ce(j){v[j]!==!1&&(r.disable(j),v[j]=!1)}function Te(j,He){return g[j]!==He?(r.bindFramebuffer(j,He),g[j]=He,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=He),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=He),!0):!1}function Oe(j,He){let Ne=S,Ge=!1;if(j){Ne=y.get(He),Ne===void 0&&(Ne=[],y.set(He,Ne));const Ae=j.textures;if(Ne.length!==Ae.length||Ne[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Ue=Ae.length;ye<Ue;ye++)Ne[ye]=r.COLOR_ATTACHMENT0+ye;Ne.length=Ae.length,Ge=!0}}else Ne[0]!==r.BACK&&(Ne[0]=r.BACK,Ge=!0);Ge&&r.drawBuffers(Ne)}function Je(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const ct={[Is]:r.FUNC_ADD,[Gy]:r.FUNC_SUBTRACT,[Vy]:r.FUNC_REVERSE_SUBTRACT};ct[ky]=r.MIN,ct[Xy]=r.MAX;const et={[qy]:r.ZERO,[jy]:r.ONE,[Wy]:r.SRC_COLOR,[Id]:r.SRC_ALPHA,[$y]:r.SRC_ALPHA_SATURATE,[Qy]:r.DST_COLOR,[Zy]:r.DST_ALPHA,[Yy]:r.ONE_MINUS_SRC_COLOR,[Bd]:r.ONE_MINUS_SRC_ALPHA,[Jy]:r.ONE_MINUS_DST_COLOR,[Ky]:r.ONE_MINUS_DST_ALPHA,[eS]:r.CONSTANT_COLOR,[tS]:r.ONE_MINUS_CONSTANT_COLOR,[nS]:r.CONSTANT_ALPHA,[iS]:r.ONE_MINUS_CONSTANT_ALPHA};function it(j,He,Ne,Ge,Ae,ye,Ue,lt,It,ut){if(j===Aa){A===!0&&(Ce(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),j!==Hy){if(j!==b||ut!==T){if((x!==Is||U!==Is)&&(r.blendEquation(r.FUNC_ADD),x=Is,U=Is),ut)switch(j){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case I0:r.blendFunc(r.ONE,r.ONE);break;case B0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case H0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",j);break}else switch(j){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case I0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case B0:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",j);break}D=null,N=null,L=null,z=null,B.set(0,0,0),V=0,b=j,T=ut}return}Ae=Ae||He,ye=ye||Ne,Ue=Ue||Ge,(He!==x||Ae!==U)&&(r.blendEquationSeparate(ct[He],ct[Ae]),x=He,U=Ae),(Ne!==D||Ge!==N||ye!==L||Ue!==z)&&(r.blendFuncSeparate(et[Ne],et[Ge],et[ye],et[Ue]),D=Ne,N=Ge,L=ye,z=Ue),(lt.equals(B)===!1||It!==V)&&(r.blendColor(lt.r,lt.g,lt.b,It),B.copy(lt),V=It),b=j,T=!1}function rt(j,He){j.side===Ea?Ce(r.CULL_FACE):ue(r.CULL_FACE);let Ne=j.side===Zn;He&&(Ne=!Ne),ot(Ne),j.blending===Hr&&j.transparent===!1?it(Aa):it(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ge=j.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Tt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(j){w!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),w=j)}function Et(j){j!==zy?(ue(r.CULL_FACE),j!==X&&(j===z0?r.cullFace(r.BACK):j===Iy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),X=j}function G(j){j!==Y&&(I&&r.lineWidth(j),Y=j)}function Tt(j,He,Ne){j?(ue(r.POLYGON_OFFSET_FILL),(Q!==He||le!==Ne)&&(r.polygonOffset(He,Ne),Q=He,le=Ne)):Ce(r.POLYGON_OFFSET_FILL)}function gt(j){j?ue(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function pt(j){j===void 0&&(j=r.TEXTURE0+he-1),Ee!==j&&(r.activeTexture(j),Ee=j)}function Ke(j,He,Ne){Ne===void 0&&(Ee===null?Ne=r.TEXTURE0+he-1:Ne=Ee);let Ge=me[Ne];Ge===void 0&&(Ge={type:void 0,texture:void 0},me[Ne]=Ge),(Ge.type!==j||Ge.texture!==He)&&(Ee!==Ne&&(r.activeTexture(Ne),Ee=Ne),r.bindTexture(j,He||te[j]),Ge.type=j,Ge.texture=He)}function F(){const j=me[Ee];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function ve(){try{r.texSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Me(){try{r.texSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Pe(){try{r.texStorage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function We(){try{r.texStorage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function at(){try{r.texImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Re(){try{r.texImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function De(j){pe.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),pe.copy(j))}function Xe(j){we.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),we.copy(j))}function Ve(j,He){let Ne=p.get(He);Ne===void 0&&(Ne=new WeakMap,p.set(He,Ne));let Ge=Ne.get(j);Ge===void 0&&(Ge=r.getUniformBlockIndex(He,j.name),Ne.set(j,Ge))}function ze(j,He){const Ge=p.get(He).get(j);m.get(He)!==Ge&&(r.uniformBlockBinding(He,Ge,j.__bindingPointIndex),m.set(He,Ge))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Ee=null,me={},g={},y=new WeakMap,S=[],E=null,A=!1,b=null,x=null,D=null,N=null,U=null,L=null,z=null,B=new Ot(0,0,0),V=0,T=!1,w=null,X=null,Y=null,Q=null,le=null,pe.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:Ce,bindFramebuffer:Te,drawBuffers:Oe,useProgram:Je,setBlending:it,setMaterial:rt,setFlipSided:ot,setCullFace:Et,setLineWidth:G,setPolygonOffset:Tt,setScissorTest:gt,activeTexture:pt,bindTexture:Ke,unbindTexture:F,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:at,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:We,texSubImage2D:ve,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:je,scissor:De,viewport:Xe,reset:mt}}function $T(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,v=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,M){return S?new OffscreenCanvas(F,M):Xc("canvas")}function A(F,M,W){let ve=1;const Me=Ke(F);if((Me.width>W||Me.height>W)&&(ve=W/Math.max(Me.width,Me.height)),ve<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const de=Math.floor(ve*Me.width),je=Math.floor(ve*Me.height);g===void 0&&(g=E(de,je));const Pe=M?E(de,je):g;return Pe.width=de,Pe.height=je,Pe.getContext("2d").drawImage(F,0,0,de,je),dt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+de+"x"+je+")."),Pe}else return"data"in F&&dt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),F;return F}function b(F){return F.generateMipmaps}function x(F){r.generateMipmap(F)}function D(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(F,M,W,ve,Me=!1){if(F!==null){if(r[F]!==void 0)return r[F];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let de=M;if(M===r.RED&&(W===r.FLOAT&&(de=r.R32F),W===r.HALF_FLOAT&&(de=r.R16F),W===r.UNSIGNED_BYTE&&(de=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.R8UI),W===r.UNSIGNED_SHORT&&(de=r.R16UI),W===r.UNSIGNED_INT&&(de=r.R32UI),W===r.BYTE&&(de=r.R8I),W===r.SHORT&&(de=r.R16I),W===r.INT&&(de=r.R32I)),M===r.RG&&(W===r.FLOAT&&(de=r.RG32F),W===r.HALF_FLOAT&&(de=r.RG16F),W===r.UNSIGNED_BYTE&&(de=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RG8UI),W===r.UNSIGNED_SHORT&&(de=r.RG16UI),W===r.UNSIGNED_INT&&(de=r.RG32UI),W===r.BYTE&&(de=r.RG8I),W===r.SHORT&&(de=r.RG16I),W===r.INT&&(de=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RGB8UI),W===r.UNSIGNED_SHORT&&(de=r.RGB16UI),W===r.UNSIGNED_INT&&(de=r.RGB32UI),W===r.BYTE&&(de=r.RGB8I),W===r.SHORT&&(de=r.RGB16I),W===r.INT&&(de=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),W===r.UNSIGNED_INT&&(de=r.RGBA32UI),W===r.BYTE&&(de=r.RGBA8I),W===r.SHORT&&(de=r.RGBA16I),W===r.INT&&(de=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),M===r.RGBA){const je=Me?Vc:Dt.getTransfer(ve);W===r.FLOAT&&(de=r.RGBA32F),W===r.HALF_FLOAT&&(de=r.RGBA16F),W===r.UNSIGNED_BYTE&&(de=je===kt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function U(F,M){let W;return F?M===null||M===Ki||M===$o?W=r.DEPTH24_STENCIL8:M===Xi?W=r.DEPTH32F_STENCIL8:M===Jo&&(W=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===$o?W=r.DEPTH_COMPONENT24:M===Xi?W=r.DEPTH_COMPONENT32F:M===Jo&&(W=r.DEPTH_COMPONENT16),W}function L(F,M){return b(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nn&&F.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function z(F){const M=F.target;M.removeEventListener("dispose",z),V(M),M.isVideoTexture&&v.delete(M)}function B(F){const M=F.target;M.removeEventListener("dispose",B),w(M)}function V(F){const M=s.get(F);if(M.__webglInit===void 0)return;const W=F.source,ve=y.get(W);if(ve){const Me=ve[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&T(F),Object.keys(ve).length===0&&y.delete(W)}s.remove(F)}function T(F){const M=s.get(F);r.deleteTexture(M.__webglTexture);const W=F.source,ve=y.get(W);delete ve[M.__cacheKey],d.memory.textures--}function w(F){const M=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(M.__webglFramebuffer[ve]))for(let Me=0;Me<M.__webglFramebuffer[ve].length;Me++)r.deleteFramebuffer(M.__webglFramebuffer[ve][Me]);else r.deleteFramebuffer(M.__webglFramebuffer[ve]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ve])}else{if(Array.isArray(M.__webglFramebuffer))for(let ve=0;ve<M.__webglFramebuffer.length;ve++)r.deleteFramebuffer(M.__webglFramebuffer[ve]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ve=0;ve<M.__webglColorRenderbuffer.length;ve++)M.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ve]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=F.textures;for(let ve=0,Me=W.length;ve<Me;ve++){const de=s.get(W[ve]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),d.memory.textures--),s.remove(W[ve])}s.remove(F)}let X=0;function Y(){X=0}function Q(){const F=X;return F>=l.maxTextures&&dt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),X+=1,F}function le(F){const M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.colorSpace),M.join()}function he(F,M){const W=s.get(F);if(F.isVideoTexture&&gt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&W.__version!==F.version){const ve=F.image;if(ve===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,F,M);return}}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function I(F,M){const W=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){te(W,F,M);return}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function k(F,M){const W=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){te(W,F,M);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function $(F,M){const W=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&W.__version!==F.version){ue(W,F,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}const Ee={[Zd]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[Kd]:r.MIRRORED_REPEAT},me={[Nn]:r.NEAREST,[rS]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[ld]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},P={[uS]:r.NEVER,[mS]:r.ALWAYS,[fS]:r.LESS,[Gh]:r.LEQUAL,[dS]:r.EQUAL,[Vh]:r.GEQUAL,[hS]:r.GREATER,[pS]:r.NOTEQUAL};function ee(F,M){if(M.type===Xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===ld||M.magFilter===mc||M.magFilter===Hs||M.minFilter===Fn||M.minFilter===ld||M.minFilter===mc||M.minFilter===Hs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,Ee[M.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,Ee[M.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,Ee[M.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,me[M.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==mc&&M.minFilter!==Hs||M.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(F,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function pe(F,M){let W=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",z));const ve=M.source;let Me=y.get(ve);Me===void 0&&(Me={},y.set(ve,Me));const de=le(M);if(de!==F.__cacheKey){Me[de]===void 0&&(Me[de]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Me[de].usedTimes++;const je=Me[F.__cacheKey];je!==void 0&&(Me[F.__cacheKey].usedTimes--,je.usedTimes===0&&T(M)),F.__cacheKey=de,F.__webglTexture=Me[de].texture}return W}function we(F,M,W){return Math.floor(Math.floor(F/W)/M)}function Fe(F,M,W,ve){const de=F.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,ve,M.data);else{de.sort((Re,De)=>Re.start-De.start);let je=0;for(let Re=1;Re<de.length;Re++){const De=de[je],Xe=de[Re],Ve=De.start+De.count,ze=we(Xe.start,M.width,4),mt=we(De.start,M.width,4);Xe.start<=Ve+1&&ze===mt&&we(Xe.start+Xe.count-1,M.width,4)===ze?De.count=Math.max(De.count,Xe.start+Xe.count-De.start):(++je,de[je]=Xe)}de.length=je+1;const Pe=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Re=0,De=de.length;Re<De;Re++){const Xe=de[Re],Ve=Math.floor(Xe.start/4),ze=Math.ceil(Xe.count/4),mt=Ve%M.width,j=Math.floor(Ve/M.width),He=ze,Ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,mt,j,He,Ne,W,ve,M.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function te(F,M,W){let ve=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=r.TEXTURE_3D);const Me=pe(F,M),de=M.source;i.bindTexture(ve,F.__webglTexture,r.TEXTURE0+W);const je=s.get(de);if(de.version!==je.__version||Me===!0){i.activeTexture(r.TEXTURE0+W);const Pe=Dt.getPrimaries(Dt.workingColorSpace),We=M.colorSpace===us?null:Dt.getPrimaries(M.colorSpace),at=M.colorSpace===us||Pe===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Re=A(M.image,!1,l.maxTextureSize);Re=pt(M,Re);const De=c.convert(M.format,M.colorSpace),Xe=c.convert(M.type);let Ve=N(M.internalFormat,De,Xe,M.colorSpace,M.isVideoTexture);ee(ve,M);let ze;const mt=M.mipmaps,j=M.isVideoTexture!==!0,He=je.__version===void 0||Me===!0,Ne=de.dataReady,Ge=L(M,Re);if(M.isDepthTexture)Ve=U(M.format===Gs,M.type),He&&(j?i.texStorage2D(r.TEXTURE_2D,1,Ve,Re.width,Re.height):i.texImage2D(r.TEXTURE_2D,0,Ve,Re.width,Re.height,0,De,Xe,null));else if(M.isDataTexture)if(mt.length>0){j&&He&&i.texStorage2D(r.TEXTURE_2D,Ge,Ve,mt[0].width,mt[0].height);for(let Ae=0,ye=mt.length;Ae<ye;Ae++)ze=mt[Ae],j?Ne&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,De,Xe,ze.data):i.texImage2D(r.TEXTURE_2D,Ae,Ve,ze.width,ze.height,0,De,Xe,ze.data);M.generateMipmaps=!1}else j?(He&&i.texStorage2D(r.TEXTURE_2D,Ge,Ve,Re.width,Re.height),Ne&&Fe(M,Re,De,Xe)):i.texImage2D(r.TEXTURE_2D,0,Ve,Re.width,Re.height,0,De,Xe,Re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&He&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,Ve,mt[0].width,mt[0].height,Re.depth);for(let Ae=0,ye=mt.length;Ae<ye;Ae++)if(ze=mt[Ae],M.format!==Li)if(De!==null)if(j){if(Ne)if(M.layerUpdates.size>0){const Ue=cv(ze.width,ze.height,M.format,M.type);for(const lt of M.layerUpdates){const It=ze.data.subarray(lt*Ue/ze.data.BYTES_PER_ELEMENT,(lt+1)*Ue/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,lt,ze.width,ze.height,1,De,It)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,ze.width,ze.height,Re.depth,De,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,Ve,ze.width,ze.height,Re.depth,0,ze.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ne&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,ze.width,ze.height,Re.depth,De,Xe,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ae,Ve,ze.width,ze.height,Re.depth,0,De,Xe,ze.data)}else{j&&He&&i.texStorage2D(r.TEXTURE_2D,Ge,Ve,mt[0].width,mt[0].height);for(let Ae=0,ye=mt.length;Ae<ye;Ae++)ze=mt[Ae],M.format!==Li?De!==null?j?Ne&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,De,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,Ae,Ve,ze.width,ze.height,0,ze.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ne&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ze.width,ze.height,De,Xe,ze.data):i.texImage2D(r.TEXTURE_2D,Ae,Ve,ze.width,ze.height,0,De,Xe,ze.data)}else if(M.isDataArrayTexture)if(j){if(He&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,Ve,Re.width,Re.height,Re.depth),Ne)if(M.layerUpdates.size>0){const Ae=cv(Re.width,Re.height,M.format,M.type);for(const ye of M.layerUpdates){const Ue=Re.data.subarray(ye*Ae/Re.data.BYTES_PER_ELEMENT,(ye+1)*Ae/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,De,Xe,Ue)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,De,Xe,Re.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,Re.width,Re.height,Re.depth,0,De,Xe,Re.data);else if(M.isData3DTexture)j?(He&&i.texStorage3D(r.TEXTURE_3D,Ge,Ve,Re.width,Re.height,Re.depth),Ne&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,De,Xe,Re.data)):i.texImage3D(r.TEXTURE_3D,0,Ve,Re.width,Re.height,Re.depth,0,De,Xe,Re.data);else if(M.isFramebufferTexture){if(He)if(j)i.texStorage2D(r.TEXTURE_2D,Ge,Ve,Re.width,Re.height);else{let Ae=Re.width,ye=Re.height;for(let Ue=0;Ue<Ge;Ue++)i.texImage2D(r.TEXTURE_2D,Ue,Ve,Ae,ye,0,De,Xe,null),Ae>>=1,ye>>=1}}else if(mt.length>0){if(j&&He){const Ae=Ke(mt[0]);i.texStorage2D(r.TEXTURE_2D,Ge,Ve,Ae.width,Ae.height)}for(let Ae=0,ye=mt.length;Ae<ye;Ae++)ze=mt[Ae],j?Ne&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,De,Xe,ze):i.texImage2D(r.TEXTURE_2D,Ae,Ve,De,Xe,ze);M.generateMipmaps=!1}else if(j){if(He){const Ae=Ke(Re);i.texStorage2D(r.TEXTURE_2D,Ge,Ve,Ae.width,Ae.height)}Ne&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Xe,Re)}else i.texImage2D(r.TEXTURE_2D,0,Ve,De,Xe,Re);b(M)&&x(ve),je.__version=de.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function ue(F,M,W){if(M.image.length!==6)return;const ve=pe(F,M),Me=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+W);const de=s.get(Me);if(Me.version!==de.__version||ve===!0){i.activeTexture(r.TEXTURE0+W);const je=Dt.getPrimaries(Dt.workingColorSpace),Pe=M.colorSpace===us?null:Dt.getPrimaries(M.colorSpace),We=M.colorSpace===us||je===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const at=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,De=[];for(let ye=0;ye<6;ye++)!at&&!Re?De[ye]=A(M.image[ye],!0,l.maxCubemapSize):De[ye]=Re?M.image[ye].image:M.image[ye],De[ye]=pt(M,De[ye]);const Xe=De[0],Ve=c.convert(M.format,M.colorSpace),ze=c.convert(M.type),mt=N(M.internalFormat,Ve,ze,M.colorSpace),j=M.isVideoTexture!==!0,He=de.__version===void 0||ve===!0,Ne=Me.dataReady;let Ge=L(M,Xe);ee(r.TEXTURE_CUBE_MAP,M);let Ae;if(at){j&&He&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,mt,Xe.width,Xe.height);for(let ye=0;ye<6;ye++){Ae=De[ye].mipmaps;for(let Ue=0;Ue<Ae.length;Ue++){const lt=Ae[Ue];M.format!==Li?Ve!==null?j?Ne&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,lt.width,lt.height,Ve,lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,mt,lt.width,lt.height,0,lt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,lt.width,lt.height,Ve,ze,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,mt,lt.width,lt.height,0,Ve,ze,lt.data)}}}else{if(Ae=M.mipmaps,j&&He){Ae.length>0&&Ge++;const ye=Ke(De[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,mt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){j?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,De[ye].width,De[ye].height,Ve,ze,De[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,mt,De[ye].width,De[ye].height,0,Ve,ze,De[ye].data);for(let Ue=0;Ue<Ae.length;Ue++){const It=Ae[Ue].image[ye].image;j?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,It.width,It.height,Ve,ze,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,mt,It.width,It.height,0,Ve,ze,It.data)}}else{j?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ve,ze,De[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,mt,Ve,ze,De[ye]);for(let Ue=0;Ue<Ae.length;Ue++){const lt=Ae[Ue];j?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Ve,ze,lt.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,mt,Ve,ze,lt.image[ye])}}}b(M)&&x(r.TEXTURE_CUBE_MAP),de.__version=Me.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function Ce(F,M,W,ve,Me,de){const je=c.convert(W.format,W.colorSpace),Pe=c.convert(W.type),We=N(W.internalFormat,je,Pe,W.colorSpace),at=s.get(M),Re=s.get(W);if(Re.__renderTarget=M,!at.__hasExternalTextures){const De=Math.max(1,M.width>>de),Xe=Math.max(1,M.height>>de);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?i.texImage3D(Me,de,We,De,Xe,M.depth,0,je,Pe,null):i.texImage2D(Me,de,We,De,Xe,0,je,Pe,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),Tt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Me,Re.__webglTexture,0,G(M)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Me,Re.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(F,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,F),M.depthBuffer){const ve=M.depthTexture,Me=ve&&ve.isDepthTexture?ve.type:null,de=U(M.stencilBuffer,Me),je=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Tt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),de,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,F)}else{const ve=M.textures;for(let Me=0;Me<ve.length;Me++){const de=ve[Me],je=c.convert(de.format,de.colorSpace),Pe=c.convert(de.type),We=N(de.internalFormat,je,Pe,de.colorSpace);Tt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),We,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),We,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,We,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(F,M,W){const ve=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(M.depthTexture);if(Me.__renderTarget=M,(!Me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ve){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),ee(r.TEXTURE_CUBE_MAP,M.depthTexture);const at=c.convert(M.depthTexture.format),Re=c.convert(M.depthTexture.type);let De;M.depthTexture.format===wa?De=r.DEPTH_COMPONENT24:M.depthTexture.format===Gs&&(De=r.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,De,M.width,M.height,0,at,Re,null)}}else he(M.depthTexture,0);const de=Me.__webglTexture,je=G(M),Pe=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,We=M.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===wa)Tt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Pe,de,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,We,Pe,de,0);else if(M.depthTexture.format===Gs)Tt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Pe,de,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,We,Pe,de,0);else throw new Error("Unknown depthTexture format")}function Je(F){const M=s.get(F),W=F.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==F.depthTexture){const ve=F.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ve){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ve.removeEventListener("dispose",Me)};ve.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=ve}if(F.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ve=0;ve<6;ve++)Oe(M.__webglFramebuffer[ve],F,ve);else{const ve=F.texture.mipmaps;ve&&ve.length>0?Oe(M.__webglFramebuffer[0],F,0):Oe(M.__webglFramebuffer,F,0)}else if(W){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]===void 0)M.__webglDepthbuffer[ve]=r.createRenderbuffer(),Te(M.__webglDepthbuffer[ve],F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}else{const ve=F.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Te(M.__webglDepthbuffer,F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(F,M,W){const ve=s.get(F);M!==void 0&&Ce(ve.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Je(F)}function et(F){const M=F.texture,W=s.get(F),ve=s.get(M);F.addEventListener("dispose",B);const Me=F.textures,de=F.isWebGLCubeRenderTarget===!0,je=Me.length>1;if(je||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=M.version,d.memory.textures++),de){W.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Pe]=[];for(let We=0;We<M.mipmaps.length;We++)W.__webglFramebuffer[Pe][We]=r.createFramebuffer()}else W.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)W.__webglFramebuffer[Pe]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(je)for(let Pe=0,We=Me.length;Pe<We;Pe++){const at=s.get(Me[Pe]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),d.memory.textures++)}if(F.samples>0&&Tt(F)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Me.length;Pe++){const We=Me[Pe];W.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Pe]);const at=c.convert(We.format,We.colorSpace),Re=c.convert(We.type),De=N(We.internalFormat,at,Re,We.colorSpace,F.isXRRenderTarget===!0),Xe=G(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,De,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,W.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(W.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),ee(r.TEXTURE_CUBE_MAP,M);for(let Pe=0;Pe<6;Pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Ce(W.__webglFramebuffer[Pe][We],F,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We);else Ce(W.__webglFramebuffer[Pe],F,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);b(M)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Pe=0,We=Me.length;Pe<We;Pe++){const at=Me[Pe],Re=s.get(at);let De=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(De=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,Re.__webglTexture),ee(De,at),Ce(W.__webglFramebuffer,F,at,r.COLOR_ATTACHMENT0+Pe,De,0),b(at)&&x(De)}i.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,ve.__webglTexture),ee(Pe,M),M.mipmaps&&M.mipmaps.length>0)for(let We=0;We<M.mipmaps.length;We++)Ce(W.__webglFramebuffer[We],F,M,r.COLOR_ATTACHMENT0,Pe,We);else Ce(W.__webglFramebuffer,F,M,r.COLOR_ATTACHMENT0,Pe,0);b(M)&&x(Pe),i.unbindTexture()}F.depthBuffer&&Je(F)}function it(F){const M=F.textures;for(let W=0,ve=M.length;W<ve;W++){const Me=M[W];if(b(Me)){const de=D(F),je=s.get(Me).__webglTexture;i.bindTexture(de,je),x(de),i.unbindTexture()}}}const rt=[],ot=[];function Et(F){if(F.samples>0){if(Tt(F)===!1){const M=F.textures,W=F.width,ve=F.height;let Me=r.COLOR_BUFFER_BIT;const de=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(F),Pe=M.length>1;if(Pe)for(let at=0;at<M.length;at++)i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const We=F.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let at=0;at<M.length;at++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const Re=s.get(M[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,W,ve,0,0,W,ve,Me,r.NEAREST),m===!0&&(rt.length=0,ot.length=0,rt.push(r.COLOR_ATTACHMENT0+at),F.depthBuffer&&F.resolveDepthBuffer===!1&&(rt.push(de),ot.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let at=0;at<M.length;at++){i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,je.__webglColorRenderbuffer[at]);const Re=s.get(M[at]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,Re,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const M=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function G(F){return Math.min(l.maxSamples,F.samples)}function Tt(F){const M=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(F){const M=d.render.frame;v.get(F)!==M&&(v.set(F,M),F.update())}function pt(F,M){const W=F.colorSpace,ve=F.format,Me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||W!==qr&&W!==us&&(Dt.getTransfer(W)===kt?(ve!==Li||Me!==Si)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",W)),M}function Ke(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=he,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=ct,this.setupRenderTarget=et,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function eA(r,t){function i(s,l=us){let c;const d=Dt.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===Fh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Qv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Yv)return r.BYTE;if(s===Zv)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===Ph)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===Jv)return r.ALPHA;if(s===$v)return r.RGB;if(s===Li)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===e_)return r.RED;if(s===Ih)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===Bh)return r.RG_INTEGER;if(s===Hh)return r.RGBA_INTEGER;if(s===Fc||s===zc||s===Ic||s===Bc)if(d===kt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qd||s===Jd||s===$d||s===eh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Qd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===th||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===th||s===nh)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ih)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ah)return c.COMPRESSED_R11_EAC;if(s===sh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===rh)return c.COMPRESSED_RG11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===lh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ch)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bh||s===Mh||s===Eh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bh)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Eh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Th||s===Ah||s===Ch||s===Rh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Th)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ah)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nA=`
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

}`;class iA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new d_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qi({vertexShader:tA,fragmentShader:nA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new Zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends Wr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,y=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",b=new iA,x={},D=i.getContextAttributes();let N=null,U=null;const L=[],z=[],B=new zt;let V=null;const T=new yi;T.viewport=new rn;const w=new yi;w.viewport=new rn;const X=[T,w],Y=new hb;let Q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=L[te];return ue===void 0&&(ue=new Dd,L[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=L[te];return ue===void 0&&(ue=new Dd,L[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=L[te];return ue===void 0&&(ue=new Dd,L[te]=ue),ue.getHandSpace()};function he(te){const ue=z.indexOf(te.inputSource);if(ue===-1)return;const Ce=L[ue];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,p||d),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",k);for(let te=0;te<L.length;te++){const ue=z[te];ue!==null&&(z[te]=null,L[te].disconnect(ue))}Q=null,le=null,b.reset();for(const te in x)delete x[te];t.setRenderTarget(N),S=null,y=null,g=null,l=null,U=null,Fe.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",I),l.addEventListener("inputsourceschange",k),D.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Te=null,Oe=null;D.depth&&(Oe=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=D.stencil?Gs:wa,Te=D.stencil?$o:Ki);const Je={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(Je),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new Wi(y.textureWidth,y.textureHeight,{format:Li,type:Si,depthTexture:new nl(y.textureWidth,y.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Wi(S.framebufferWidth,S.framebufferHeight,{format:Li,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(te){for(let ue=0;ue<te.removed.length;ue++){const Ce=te.removed[ue],Te=z.indexOf(Ce);Te>=0&&(z[Te]=null,L[Te].disconnect(Ce))}for(let ue=0;ue<te.added.length;ue++){const Ce=te.added[ue];let Te=z.indexOf(Ce);if(Te===-1){for(let Je=0;Je<L.length;Je++)if(Je>=z.length){z.push(Ce),Te=Je;break}else if(z[Je]===null){z[Je]=Ce,Te=Je;break}if(Te===-1)break}const Oe=L[Te];Oe&&Oe.connect(Ce)}}const $=new oe,Ee=new oe;function me(te,ue,Ce){$.setFromMatrixPosition(ue.matrixWorld),Ee.setFromMatrixPosition(Ce.matrixWorld);const Te=$.distanceTo(Ee),Oe=ue.projectionMatrix.elements,Je=Ce.projectionMatrix.elements,ct=Oe[14]/(Oe[10]-1),et=Oe[14]/(Oe[10]+1),it=(Oe[9]+1)/Oe[5],rt=(Oe[9]-1)/Oe[5],ot=(Oe[8]-1)/Oe[0],Et=(Je[8]+1)/Je[0],G=ct*ot,Tt=ct*Et,gt=Te/(-ot+Et),pt=gt*-ot;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Oe[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ke=ct+gt,F=et+gt,M=G-pt,W=Tt+(Te-pt),ve=it*et/F*Ke,Me=rt*et/F*Ke;te.projectionMatrix.makePerspective(M,W,ve,Me,Ke,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,Ce=te.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),Y.near=w.near=T.near=ue,Y.far=w.far=T.far=Ce,(Q!==Y.near||le!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,le=Y.far),Y.layers.mask=te.layers.mask|6,T.layers.mask=Y.layers.mask&3,w.layers.mask=Y.layers.mask&5;const Te=te.parent,Oe=Y.cameras;P(Y,Te);for(let Je=0;Je<Oe.length;Je++)P(Oe[Je],Te);Oe.length===2?me(Y,T,w):Y.projectionMatrix.copy(T.projectionMatrix),ee(te,Y,Te)};function ee(te,ue,Ce){Ce===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=tl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Y)},this.getCameraTexture=function(te){return x[te]};let pe=null;function we(te,ue){if(v=ue.getViewerPose(p||d),E=ue,v!==null){const Ce=v.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Te=!1;Ce.length!==Y.cameras.length&&(Y.cameras.length=0,Te=!0);for(let et=0;et<Ce.length;et++){const it=Ce[et];let rt=null;if(S!==null)rt=S.getViewport(it);else{const Et=g.getViewSubImage(y,it);rt=Et.viewport,et===0&&(t.setRenderTargetTextures(U,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(U))}let ot=X[et];ot===void 0&&(ot=new yi,ot.layers.enable(et),ot.viewport=new rn,X[et]=ot),ot.matrix.fromArray(it.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(it.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(rt.x,rt.y,rt.width,rt.height),et===0&&(Y.matrix.copy(ot.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Te===!0&&Y.cameras.push(ot)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const et=g.getDepthInformation(Ce[0]);et&&et.isValid&&et.texture&&b.init(et,l.renderState)}if(Oe&&Oe.includes("camera-access")&&A){t.state.unbindTexture(),g=s.getBinding();for(let et=0;et<Ce.length;et++){const it=Ce[et].camera;if(it){let rt=x[it];rt||(rt=new d_,x[it]=rt);const ot=g.getCameraImage(it);rt.sourceTexture=ot}}}}for(let Ce=0;Ce<L.length;Ce++){const Te=z[Ce],Oe=L[Ce];Te!==null&&Oe!==void 0&&Oe.update(Te,ue,p||d)}pe&&pe(te,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Fe=new p_;Fe.setAnimationLoop(we),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}}const Fs=new Da,sA=new hn;function rA(r,t){function i(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function s(b,x){x.color.getRGB(b.fogColor.value,o_(r)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function l(b,x,D,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),v(b,x)):x.isMeshStandardMaterial?(c(b,x),y(b,x),x.isMeshPhysicalMaterial&&S(b,x,U)):x.isMeshMatcapMaterial?(c(b,x),E(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),A(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(d(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?m(b,x,D,N):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,i(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Zn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,i(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Zn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,i(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,i(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const D=t.get(x),N=D.envMap,U=D.envMapRotation;N&&(b.envMap.value=N,Fs.copy(U),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),b.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(Fs)),b.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,b.aoMapTransform))}function d(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,D,N){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*D,b.scale.value=N*.5,x.map&&(b.map.value=x.map,i(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function y(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,D){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,x){x.matcap&&(b.matcap.value=x.matcap)}function A(b,x){const D=t.get(x).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oA(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;s.uniformBlockBinding(D,U)}function p(D,N){let U=l[D.id];U===void 0&&(E(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",b));const L=N.program;s.updateUBOMapping(D,L);const z=t.render.frame;c[D.id]!==z&&(y(D),c[D.id]=z)}function v(D){const N=g();D.__bindingPointIndex=N;const U=r.createBuffer(),L=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,L,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const N=l[D.id],U=D.uniforms,L=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,B=U.length;z<B;z++){const V=Array.isArray(U[z])?U[z]:[U[z]];for(let T=0,w=V.length;T<w;T++){const X=V[T];if(S(X,z,T,L)===!0){const Y=X.__offset,Q=Array.isArray(X.value)?X.value:[X.value];let le=0;for(let he=0;he<Q.length;he++){const I=Q[he],k=A(I);typeof I=="number"||typeof I=="boolean"?(X.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Y+le,X.__data)):I.isMatrix3?(X.__data[0]=I.elements[0],X.__data[1]=I.elements[1],X.__data[2]=I.elements[2],X.__data[3]=0,X.__data[4]=I.elements[3],X.__data[5]=I.elements[4],X.__data[6]=I.elements[5],X.__data[7]=0,X.__data[8]=I.elements[6],X.__data[9]=I.elements[7],X.__data[10]=I.elements[8],X.__data[11]=0):(I.toArray(X.__data,le),le+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,N,U,L){const z=D.value,B=N+"_"+U;if(L[B]===void 0)return typeof z=="number"||typeof z=="boolean"?L[B]=z:L[B]=z.clone(),!0;{const V=L[B];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return L[B]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function E(D){const N=D.uniforms;let U=0;const L=16;for(let B=0,V=N.length;B<V;B++){const T=Array.isArray(N[B])?N[B]:[N[B]];for(let w=0,X=T.length;w<X;w++){const Y=T[w],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let le=0,he=Q.length;le<he;le++){const I=Q[le],k=A(I),$=U%L,Ee=$%k.boundary,me=$+Ee;U+=Ee,me!==0&&L-me<k.storage&&(U+=L-me),Y.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=k.storage}}}const z=U%L;return z>0&&(U+=L-z),D.__size=U,D.__cache={},this}function A(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",D),N}function b(D){const N=D.target;N.removeEventListener("dispose",b);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const lA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function cA(){return Vi===null&&(Vi=new sb(lA,16,16,Xr,Ra),Vi.name="DFG_LUT",Vi.minFilter=Fn,Vi.magFilter=Fn,Vi.wrapS=Ta,Vi.wrapT=Ta,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class uA{constructor(t={}){const{canvas:i=gS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=Si}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const A=S,b=new Set([Hh,Bh,Ih]),x=new Set([Si,Ki,Jo,$o,Fh,zh]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,L=null;const z=[],B=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=xi;let X=0,Y=0,Q=null,le=-1,he=null;const I=new rn,k=new rn;let $=null;const Ee=new Ot(0);let me=0,P=i.width,ee=i.height,pe=1,we=null,Fe=null;const te=new rn(0,0,P,ee),ue=new rn(0,0,P,ee);let Ce=!1;const Te=new f_;let Oe=!1,Je=!1;const ct=new hn,et=new oe,it=new rn,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Et(){return Q===null?pe:1}let G=s;function Tt(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",lt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",ut,!1),G===null){const Z="webgl2";if(G=Tt(Z,C),G===null)throw Tt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let gt,pt,Ke,F,M,W,ve,Me,de,je,Pe,We,at,Re,De,Xe,Ve,ze,mt,j,He,Ne,Ge,Ae;function ye(){gt=new c1(G),gt.init(),Ne=new eA(G,gt),pt=new e1(G,gt,t,Ne),Ke=new JT(G,gt),pt.reversedDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),F=new d1(G),M=new zT,W=new $T(G,gt,Ke,M,pt,Ne,F),ve=new n1(T),Me=new l1(T),de=new gb(G),Ge=new JE(G,de),je=new u1(G,de,F,Ge),Pe=new p1(G,je,de,F),mt=new h1(G,pt,W),Xe=new t1(M),We=new FT(T,ve,Me,gt,pt,Ge,Xe),at=new rA(T,M),Re=new BT,De=new qT(gt),ze=new QE(T,ve,Me,Ke,Pe,E,m),Ve=new KT(T,Pe,pt),Ae=new oA(G,F,pt,Ke),j=new $E(G,gt,F),He=new f1(G,gt,F),F.programs=We.programs,T.capabilities=pt,T.extensions=gt,T.properties=M,T.renderLists=Re,T.shadowMap=Ve,T.state=Ke,T.info=F}ye(),A!==Si&&(V=new g1(A,i.width,i.height,l,c));const Ue=new aA(T,G);this.xr=Ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(P,ee,!1))},this.getSize=function(C){return C.set(P,ee)},this.setSize=function(C,Z,ce=!0){if(Ue.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,ee=Z,i.width=Math.floor(C*pe),i.height=Math.floor(Z*pe),ce===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(P*pe,ee*pe).floor()},this.setDrawingBufferSize=function(C,Z,ce){P=C,ee=Z,pe=ce,i.width=Math.floor(C*ce),i.height=Math.floor(Z*ce),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(A===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,Z,ce,ae){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Z,ce,ae),Ke.viewport(I.copy(te).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,Z,ce,ae){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Z,ce,ae),Ke.scissor(k.copy(ue).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Ke.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ce=!0){let ae=0;if(C){let J=!1;if(Q!==null){const Ie=Q.texture.format;J=b.has(Ie)}if(J){const Ie=Q.texture.type,qe=x.has(Ie),se=ze.getClearColor(),be=ze.getClearAlpha(),Le=se.r,Ye=se.g,Be=se.b;qe?(D[0]=Le,D[1]=Ye,D[2]=Be,D[3]=be,G.clearBufferuiv(G.COLOR,0,D)):(N[0]=Le,N[1]=Ye,N[2]=Be,N[3]=be,G.clearBufferiv(G.COLOR,0,N))}else ae|=G.COLOR_BUFFER_BIT}Z&&(ae|=G.DEPTH_BUFFER_BIT),ce&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",lt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",ut,!1),ze.dispose(),Re.dispose(),De.dispose(),M.dispose(),ve.dispose(),Me.dispose(),Pe.dispose(),Ge.dispose(),Ae.dispose(),We.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Pi),Ue.removeEventListener("sessionend",hs),li.stop()};function lt(C){C.preventDefault(),q0("WebGLRenderer: Context Lost."),w=!0}function It(){q0("WebGLRenderer: Context Restored."),w=!1;const C=F.autoReset,Z=Ve.enabled,ce=Ve.autoUpdate,ae=Ve.needsUpdate,J=Ve.type;ye(),F.autoReset=C,Ve.enabled=Z,Ve.autoUpdate=ce,Ve.needsUpdate=ae,Ve.type=J}function ut(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function on(C){const Z=C.target;Z.removeEventListener("dispose",on),Vn(Z)}function Vn(C){Na(C),M.remove(C)}function Na(C){const Z=M.get(C).programs;Z!==void 0&&(Z.forEach(function(ce){We.releaseProgram(ce)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ce,ae,J,Ie){Z===null&&(Z=rt);const qe=J.isMesh&&J.matrixWorld.determinant()<0,se=Fi(C,Z,ce,ae,J);Ke.setMaterial(ae,qe);let be=ce.index,Le=1;if(ae.wireframe===!0){if(be=je.getWireframeAttribute(ce),be===void 0)return;Le=2}const Ye=ce.drawRange,Be=ce.attributes.position;let tt=Ye.start*Le,St=(Ye.start+Ye.count)*Le;Ie!==null&&(tt=Math.max(tt,Ie.start*Le),St=Math.min(St,(Ie.start+Ie.count)*Le)),be!==null?(tt=Math.max(tt,0),St=Math.min(St,be.count)):Be!=null&&(tt=Math.max(tt,0),St=Math.min(St,Be.count));const Jt=St-tt;if(Jt<0||Jt===1/0)return;Ge.setup(J,ae,se,ce,be);let Zt,Bt=j;if(be!==null&&(Zt=de.get(be),Bt=He,Bt.setIndex(Zt)),J.isMesh)ae.wireframe===!0?(Ke.setLineWidth(ae.wireframeLinewidth*Et()),Bt.setMode(G.LINES)):Bt.setMode(G.TRIANGLES);else if(J.isLine){let $e=ae.linewidth;$e===void 0&&($e=1),Ke.setLineWidth($e*Et()),J.isLineSegments?Bt.setMode(G.LINES):J.isLineLoop?Bt.setMode(G.LINE_LOOP):Bt.setMode(G.LINE_STRIP)}else J.isPoints?Bt.setMode(G.POINTS):J.isSprite&&Bt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $e=J._multiDrawStarts,Pt=J._multiDrawCounts,ft=J._multiDrawCount,bn=be?de.get(be).bytesPerElement:1,ta=M.get(ae).currentProgram.getUniforms();for(let Mn=0;Mn<ft;Mn++)ta.setValue(G,"_gl_DrawID",Mn),Bt.render($e[Mn]/bn,Pt[Mn])}else if(J.isInstancedMesh)Bt.renderInstances(tt,Jt,J.count);else if(ce.isInstancedBufferGeometry){const $e=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Pt=Math.min(ce.instanceCount,$e);Bt.renderInstances(tt,Jt,Pt)}else Bt.render(tt,Jt)};function Kn(C,Z,ce){C.transparent===!0&&C.side===Ea&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Ua(C,Z,ce),C.side=ds,C.needsUpdate=!0,Ua(C,Z,ce),C.side=Ea):Ua(C,Z,ce)}this.compile=function(C,Z,ce=null){ce===null&&(ce=C),L=De.get(ce),L.init(Z),B.push(L),ce.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),C!==ce&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ae=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let qe=0;qe<Ie.length;qe++){const se=Ie[qe];Kn(se,ce,J),ae.add(se)}else Kn(Ie,ce,J),ae.add(Ie)}),L=B.pop(),ae},this.compileAsync=function(C,Z,ce=null){const ae=this.compile(C,Z,ce);return new Promise(J=>{function Ie(){if(ae.forEach(function(qe){M.get(qe).currentProgram.isReady()&&ae.delete(qe)}),ae.size===0){J(C);return}setTimeout(Ie,10)}gt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let zn=null;function $i(C){zn&&zn(C)}function Pi(){li.stop()}function hs(){li.start()}const li=new p_;li.setAnimationLoop($i),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(C){zn=C,Ue.setAnimationLoop(C),C===null?li.stop():li.start()},Ue.addEventListener("sessionstart",Pi),Ue.addEventListener("sessionend",hs),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ce=Ue.enabled===!0&&Ue.isPresenting===!0,ae=V!==null&&(Q===null||ce)&&V.begin(T,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Z),Z=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Z,Q),L=De.get(C,B.length),L.init(Z),B.push(L),ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Te.setFromProjectionMatrix(ct,qi,Z.reversedDepth),Je=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,Je),U=Re.get(C,z.length),U.init(),z.push(U),Ue.enabled===!0&&Ue.isPresenting===!0){const qe=T.xr.getDepthSensingMesh();qe!==null&&Sn(qe,Z,-1/0,T.sortObjects)}Sn(C,Z,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(we,Fe),ot=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,ot&&ze.addToRenderList(U,C),this.info.render.frame++,Oe===!0&&Xe.beginShadows();const J=L.state.shadowsArray;if(Ve.render(J,C,Z),Oe===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&V.hasRenderPass())===!1){const qe=U.opaque,se=U.transmissive;if(L.setupLights(),Z.isArrayCamera){const be=Z.cameras;if(se.length>0)for(let Le=0,Ye=be.length;Le<Ye;Le++){const Be=be[Le];_n(qe,se,C,Be)}ot&&ze.render(C);for(let Le=0,Ye=be.length;Le<Ye;Le++){const Be=be[Le];Wt(U,C,Be,Be.viewport)}}else se.length>0&&_n(qe,se,C,Z),ot&&ze.render(C),Wt(U,C,Z)}Q!==null&&Y===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),ae&&V.end(T),C.isScene===!0&&C.onAfterRender(T,C,Z),Ge.resetDefaultState(),le=-1,he=null,B.pop(),B.length>0?(L=B[B.length-1],Oe===!0&&Xe.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function Sn(C,Z,ce,ae){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Te.intersectsSprite(C)){ae&&it.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);const qe=Pe.update(C),se=C.material;se.visible&&U.push(C,qe,se,ce,it.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Te.intersectsObject(C))){const qe=Pe.update(C),se=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),it.copy(C.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),it.copy(qe.boundingSphere.center)),it.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(se)){const be=qe.groups;for(let Le=0,Ye=be.length;Le<Ye;Le++){const Be=be[Le],tt=se[Be.materialIndex];tt&&tt.visible&&U.push(C,qe,tt,ce,it.z,Be)}}else se.visible&&U.push(C,qe,se,ce,it.z,null)}}const Ie=C.children;for(let qe=0,se=Ie.length;qe<se;qe++)Sn(Ie[qe],Z,ce,ae)}function Wt(C,Z,ce,ae){const{opaque:J,transmissive:Ie,transparent:qe}=C;L.setupLightsView(ce),Oe===!0&&Xe.setGlobalState(T.clippingPlanes,ce),ae&&Ke.viewport(I.copy(ae)),J.length>0&&Un(J,Z,ce),Ie.length>0&&Un(Ie,Z,ce),qe.length>0&&Un(qe,Z,ce),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function _n(C,Z,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const tt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Wi(1,1,{generateMipmaps:!0,type:tt?Ra:Si,minFilter:Hs,samples:pt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[ae.id],qe=ae.viewport||I;Ie.setSize(qe.z*T.transmissionResolutionScale,qe.w*T.transmissionResolutionScale);const se=T.getRenderTarget(),be=T.getActiveCubeFace(),Le=T.getActiveMipmapLevel();T.setRenderTarget(Ie),T.getClearColor(Ee),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),ot&&ze.render(ce);const Ye=T.toneMapping;T.toneMapping=ji;const Be=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),Oe===!0&&Xe.setGlobalState(T.clippingPlanes,ae),Un(C,ce,ae),W.updateMultisampleRenderTarget(Ie),W.updateRenderTargetMipmap(Ie),gt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let St=0,Jt=Z.length;St<Jt;St++){const Zt=Z[St],{object:Bt,geometry:$e,material:Pt,group:ft}=Zt;if(Pt.side===Ea&&Bt.layers.test(ae.layers)){const bn=Pt.side;Pt.side=Zn,Pt.needsUpdate=!0,ps(Bt,ce,ae,$e,Pt,ft),Pt.side=bn,Pt.needsUpdate=!0,tt=!0}}tt===!0&&(W.updateMultisampleRenderTarget(Ie),W.updateRenderTargetMipmap(Ie))}T.setRenderTarget(se,be,Le),T.setClearColor(Ee,me),Be!==void 0&&(ae.viewport=Be),T.toneMapping=Ye}function Un(C,Z,ce){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ie=C.length;J<Ie;J++){const qe=C[J],{object:se,geometry:be,group:Le}=qe;let Ye=qe.material;Ye.allowOverride===!0&&ae!==null&&(Ye=ae),se.layers.test(ce.layers)&&ps(se,Z,ce,be,Ye,Le)}}function ps(C,Z,ce,ae,J,Ie){C.onBeforeRender(T,Z,ce,ae,J,Ie),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(T,Z,ce,ae,C,Ie),J.transparent===!0&&J.side===Ea&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,T.renderBufferDirect(ce,Z,ae,J,C,Ie),J.side=ds,J.needsUpdate=!0,T.renderBufferDirect(ce,Z,ae,J,C,Ie),J.side=Ea):T.renderBufferDirect(ce,Z,ae,J,C,Ie),C.onAfterRender(T,Z,ce,ae,J,Ie)}function Ua(C,Z,ce){Z.isScene!==!0&&(Z=rt);const ae=M.get(C),J=L.state.lights,Ie=L.state.shadowsArray,qe=J.state.version,se=We.getParameters(C,J.state,Ie,Z,ce),be=We.getProgramCacheKey(se);let Le=ae.programs;ae.environment=C.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(C.isMeshStandardMaterial?Me:ve).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Le===void 0&&(C.addEventListener("dispose",on),Le=new Map,ae.programs=Le);let Ye=Le.get(be);if(Ye!==void 0){if(ae.currentProgram===Ye&&ae.lightsStateVersion===qe)return La(C,se),Ye}else se.uniforms=We.getUniforms(C),C.onBeforeCompile(se,T),Ye=We.acquireProgram(se,be),Le.set(be,Ye),ae.uniforms=se.uniforms;const Be=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=Xe.uniform),La(C,se),ae.needsLights=zi(C),ae.lightsStateVersion=qe,ae.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.directionalShadowMap.value=J.state.directionalShadowMap,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotShadowMap.value=J.state.spotShadowMap,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMap.value=J.state.pointShadowMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=Ye,ae.uniformsList=null,Ye}function js(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function La(C,Z){const ce=M.get(C);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Fi(C,Z,ce,ae,J){Z.isScene!==!0&&(Z=rt),W.resetTextureUnits();const Ie=Z.fog,qe=ae.isMeshStandardMaterial?Z.environment:null,se=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qr,be=(ae.isMeshStandardMaterial?Me:ve).get(ae.envMap||qe),Le=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ye=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Be=!!ce.morphAttributes.position,tt=!!ce.morphAttributes.normal,St=!!ce.morphAttributes.color;let Jt=ji;ae.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Jt=T.toneMapping);const Zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Bt=Zt!==void 0?Zt.length:0,$e=M.get(ae),Pt=L.state.lights;if(Oe===!0&&(Je===!0||C!==he)){const Tn=C===he&&ae.id===le;Xe.setState(ae,C,Tn)}let ft=!1;ae.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Pt.state.version||$e.outputColorSpace!==se||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==be||ae.fog===!0&&$e.fog!==Ie||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Xe.numPlanes||$e.numIntersection!==Xe.numIntersection)||$e.vertexAlphas!==Le||$e.vertexTangents!==Ye||$e.morphTargets!==Be||$e.morphNormals!==tt||$e.morphColors!==St||$e.toneMapping!==Jt||$e.morphTargetsCount!==Bt)&&(ft=!0):(ft=!0,$e.__version=ae.version);let bn=$e.currentProgram;ft===!0&&(bn=Ua(ae,Z,J));let ta=!1,Mn=!1,ci=!1;const Ht=bn.getUniforms(),En=$e.uniforms;if(Ke.useProgram(bn.program)&&(ta=!0,Mn=!0,ci=!0),ae.id!==le&&(le=ae.id,Mn=!0),ta||he!==C){Ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(G,"projectionMatrix",C.projectionMatrix),Ht.setValue(G,"viewMatrix",C.matrixWorldInverse);const An=Ht.map.cameraPosition;An!==void 0&&An.setValue(G,et.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Ht.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),he!==C&&(he=C,Mn=!0,ci=!0)}if($e.needsLights&&(Pt.state.directionalShadowMap.length>0&&Ht.setValue(G,"directionalShadowMap",Pt.state.directionalShadowMap,W),Pt.state.spotShadowMap.length>0&&Ht.setValue(G,"spotShadowMap",Pt.state.spotShadowMap,W),Pt.state.pointShadowMap.length>0&&Ht.setValue(G,"pointShadowMap",Pt.state.pointShadowMap,W)),J.isSkinnedMesh){Ht.setOptional(G,J,"bindMatrix"),Ht.setOptional(G,J,"bindMatrixInverse");const Tn=J.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(G,"boneTexture",Tn.boneTexture,W))}J.isBatchedMesh&&(Ht.setOptional(G,J,"batchingTexture"),Ht.setValue(G,"batchingTexture",J._matricesTexture,W),Ht.setOptional(G,J,"batchingIdTexture"),Ht.setValue(G,"batchingIdTexture",J._indirectTexture,W),Ht.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Ht.setValue(G,"batchingColorTexture",J._colorsTexture,W));const pn=ce.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&mt.update(J,ce,bn),(Mn||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,Ht.setValue(G,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(En.envMap.value=be,En.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Z.environment!==null&&(En.envMapIntensity.value=Z.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=cA()),Mn&&(Ht.setValue(G,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&Mi(En,ci),Ie&&ae.fog===!0&&at.refreshFogUniforms(En,Ie),at.refreshMaterialUniforms(En,ae,pe,ee,L.state.transmissionRenderTarget[C.id]),Hc.upload(G,js($e),En,W)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Hc.upload(G,js($e),En,W),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(G,"center",J.center),Ht.setValue(G,"modelViewMatrix",J.modelViewMatrix),Ht.setValue(G,"normalMatrix",J.normalMatrix),Ht.setValue(G,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Tn=ae.uniformsGroups;for(let An=0,Ws=Tn.length;An<Ws;An++){const Ti=Tn[An];Ae.update(Ti,bn),Ae.bind(Ti,bn)}}return bn}function Mi(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function zi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,Z,ce){const ae=M.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=Z,M.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ce=M.get(C);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const Ei=G.createFramebuffer();this.setRenderTarget=function(C,Z=0,ce=0){Q=C,X=Z,Y=ce;let ae=null,J=!1,Ie=!1;if(C){const se=M.get(C);if(se.__useDefaultFramebuffer!==void 0){Ke.bindFramebuffer(G.FRAMEBUFFER,se.__webglFramebuffer),I.copy(C.viewport),k.copy(C.scissor),$=C.scissorTest,Ke.viewport(I),Ke.scissor(k),Ke.setScissorTest($),le=-1;return}else if(se.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(se.__hasExternalTextures)W.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(se.__boundDepthTexture!==Ye){if(Ye!==null&&M.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Ie=!0);const Le=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Le[Z])?ae=Le[Z][ce]:ae=Le[Z],J=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?ae=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Le)?ae=Le[ce]:ae=Le,I.copy(C.viewport),k.copy(C.scissor),$=C.scissorTest}else I.copy(te).multiplyScalar(pe).floor(),k.copy(ue).multiplyScalar(pe).floor(),$=Ce;if(ce!==0&&(ae=Ei),Ke.bindFramebuffer(G.FRAMEBUFFER,ae)&&Ke.drawBuffers(C,ae),Ke.viewport(I),Ke.scissor(k),Ke.setScissorTest($),J){const se=M.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se.__webglTexture,ce)}else if(Ie){const se=Z;for(let be=0;be<C.textures.length;be++){const Le=M.get(C.textures[be]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+be,Le.__webglTexture,ce,se)}}else if(C!==null&&ce!==0){const se=M.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,se.__webglTexture,ce)}le=-1},this.readRenderTargetPixels=function(C,Z,ce,ae,J,Ie,qe,se=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(be=be[qe]),be){Ke.bindFramebuffer(G.FRAMEBUFFER,be);try{const Le=C.textures[se],Ye=Le.format,Be=Le.type;if(!pt.textureFormatReadable(Ye)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Be)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ae&&ce>=0&&ce<=C.height-J&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+se),G.readPixels(Z,ce,ae,J,Ne.convert(Ye),Ne.convert(Be),Ie))}finally{const Le=Q!==null?M.get(Q).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ce,ae,J,Ie,qe,se=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(be=be[qe]),be)if(Z>=0&&Z<=C.width-ae&&ce>=0&&ce<=C.height-J){Ke.bindFramebuffer(G.FRAMEBUFFER,be);const Le=C.textures[se],Ye=Le.format,Be=Le.type;if(!pt.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.bufferData(G.PIXEL_PACK_BUFFER,Ie.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+se),G.readPixels(Z,ce,ae,J,Ne.convert(Ye),Ne.convert(Be),0);const St=Q!==null?M.get(Q).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,St);const Jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await vS(G,Jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,tt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ie),G.deleteBuffer(tt),G.deleteSync(Jt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ce=0){const ae=Math.pow(2,-ce),J=Math.floor(C.image.width*ae),Ie=Math.floor(C.image.height*ae),qe=Z!==null?Z.x:0,se=Z!==null?Z.y:0;W.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,qe,se,J,Ie),Ke.unbindTexture()};const ea=G.createFramebuffer(),Qn=G.createFramebuffer();this.copyTextureToTexture=function(C,Z,ce=null,ae=null,J=0,Ie=null){Ie===null&&(J!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=J,J=0):Ie=0);let qe,se,be,Le,Ye,Be,tt,St,Jt;const Zt=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ce!==null)qe=ce.max.x-ce.min.x,se=ce.max.y-ce.min.y,be=ce.isBox3?ce.max.z-ce.min.z:1,Le=ce.min.x,Ye=ce.min.y,Be=ce.isBox3?ce.min.z:0;else{const pn=Math.pow(2,-J);qe=Math.floor(Zt.width*pn),se=Math.floor(Zt.height*pn),C.isDataArrayTexture?be=Zt.depth:C.isData3DTexture?be=Math.floor(Zt.depth*pn):be=1,Le=0,Ye=0,Be=0}ae!==null?(tt=ae.x,St=ae.y,Jt=ae.z):(tt=0,St=0,Jt=0);const Bt=Ne.convert(Z.format),$e=Ne.convert(Z.type);let Pt;Z.isData3DTexture?(W.setTexture3D(Z,0),Pt=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),Pt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),Pt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const ft=G.getParameter(G.UNPACK_ROW_LENGTH),bn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ta=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),ci=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Le),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ye),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Be);const Ht=C.isDataArrayTexture||C.isData3DTexture,En=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const pn=M.get(C),Tn=M.get(Z),An=M.get(pn.__renderTarget),Ws=M.get(Tn.__renderTarget);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ti=0;Ti<be;Ti++)Ht&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(C).__webglTexture,J,Be+Ti),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Z).__webglTexture,Ie,Jt+Ti)),G.blitFramebuffer(Le,Ye,qe,se,tt,St,qe,se,G.DEPTH_BUFFER_BIT,G.NEAREST);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||M.has(C)){const pn=M.get(C),Tn=M.get(Z);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,ea),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Qn);for(let An=0;An<be;An++)Ht?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,J,Be+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,J),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ie,Jt+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ie),J!==0?G.blitFramebuffer(Le,Ye,qe,se,tt,St,qe,se,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Pt,Ie,tt,St,Jt+An,Le,Ye,qe,se):G.copyTexSubImage2D(Pt,Ie,tt,St,Le,Ye,qe,se);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Pt,Ie,tt,St,Jt,qe,se,be,Bt,$e,Zt.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Pt,Ie,tt,St,Jt,qe,se,be,Bt,Zt.data):G.texSubImage3D(Pt,Ie,tt,St,Jt,qe,se,be,Bt,$e,Zt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ie,tt,St,qe,se,Bt,$e,Zt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ie,tt,St,Zt.width,Zt.height,Bt,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Ie,tt,St,qe,se,Bt,$e,Zt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ft),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ta),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),Ie===0&&Z.generateMipmaps&&G.generateMipmap(Pt),Ke.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){X=0,Y=0,Q=null,Ke.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const x_={type:"bird",bird:{tubeRadius:.08,segments:120,radialSegments:8,flapIntensity:1,deformIntensity:1},outerSphere:{size:7,segments:4,opacity:.6,deformationFactor:1,spikeFactor:1,isWireframe:!0},innerSphere:{size:3.5,segments:2,opacity:.3,deformationFactor:1,spikeFactor:.5,isWireframe:!0},globalRotationSpeed:1};function fA(r,t){const i=((r==null?void 0:r.bass)||0)/255,s=((r==null?void 0:r.mid)||0)/255,l=((r==null?void 0:r.high)||0)/255,c=(i+s+l)/3,d=Date.now()*.01,h=Math.sin(d*1.5)*c*4;return{rotation:{x:i*40+h,y:s*50+Math.cos(d)*c*12,z:l*30+h},offset:{x:Math.sin(d*.2)*s*6+Math.sin(d*2)*c*3,y:i*10+Math.cos(d*1.5)*c*4,z:-l*15+Math.sin(d*3)*c*5}}}const Lv=({className:r="",speed:t=1,color:i="#ffffff",bands:s,rotation:l={x:0,y:0,z:0},position:c={x:0,y:0,z:0},side:d="left",scale:h=1,config:m=x_,combo:p=0,onClick:v,lightingEnabled:g=!1})=>{const y=xe.useRef(null),S=xe.useRef(s),E=xe.useRef(l),A=xe.useRef(c),b=xe.useRef(h),x=xe.useRef(m),D=xe.useRef(p),N=xe.useRef(g);xe.useEffect(()=>{S.current=s},[s]),xe.useEffect(()=>{E.current=l},[l]),xe.useEffect(()=>{A.current=c},[c]),xe.useEffect(()=>{b.current=h},[h]),xe.useEffect(()=>{x.current=m},[m]),xe.useEffect(()=>{D.current=p},[p]),xe.useEffect(()=>{N.current=g},[g]);const[U,L]=Zi.useState(new Ot(i));return xe.useEffect(()=>{L(new Ot(i))},[i]),xe.useEffect(()=>{if(!y.current)return;const z=new ab,B=new yi(75,1,.1,1e3),V=new uA({alpha:!0,antialias:!0}),T=y.current.clientWidth||400,w=y.current.clientHeight||400;V.setSize(T,w),y.current.appendChild(V.domElement);const X=new Wo;z.add(X),B.position.z=10;let Y=null,Q=null,le=null,he=null;const I=new Ot(i),k=x.current.outerSphere,$=x.current.innerSphere,Ee=new jc(k.size,k.segments),me=new qc({color:I,wireframe:k.isWireframe,transparent:!0,opacity:k.opacity});Y=new Oi(Ee,me),le=Ee.attributes.position.array.slice();const P=new jc($.size,$.segments),ee=new qc({color:I,wireframe:$.isWireframe,transparent:!0,opacity:$.opacity});Q=new Oi(P,ee),he=P.attributes.position.array.slice(),X.add(Y),X.add(Q);const pe=new Worker(new URL("/OveTyp_/assets/modeling.worker-BjLKqQYL.js",import.meta.url),{type:"module"});let we=!1,Fe=!1;pe.onmessage=Je=>{const{positions:ct,name:et}=Je.data;et==="outer"&&Y?(Y.geometry.attributes.position.array.set(ct),Y.geometry.attributes.position.needsUpdate=!0,we=!1):et==="inner"&&Q&&(Q.geometry.attributes.position.array.set(ct),Q.geometry.attributes.position.needsUpdate=!0,Fe=!1)};const te=new pb;let ue;function Ce(){ue=requestAnimationFrame(Ce);const Je=te.getElapsedTime(),ct=S.current,et=x.current,it=D.current;if(N.current){const gt=(((ct==null?void 0:ct.bass)||0)+((ct==null?void 0:ct.mid)||0))/512,pt=d==="left"?220:340,Ke=.7+gt*.3,F=.5+gt*.4,M=new Ot().setHSL(pt/360,Ke,F);Y&&Y.material.color.copy(M),Q&&Q.material.color.copy(M)}else Y&&Y.material.color.copy(I),Q&&Q.material.color.copy(I);if(Y&&Q){if(le&&!we){we=!0;const pt=Y.geometry.attributes.position.array.slice();pe.postMessage({name:"outer",positions:pt,originalPositions:le,time:Je,bands:ct,config:et.outerSphere,combo:it},[pt.buffer])}if(he&&!Fe){Fe=!0;const pt=Q.geometry.attributes.position.array.slice();pe.postMessage({name:"inner",positions:pt,originalPositions:he,time:Je,bands:ct,config:et.innerSphere,combo:it},[pt.buffer])}Y.rotation.y+=.005*et.globalRotationSpeed,Q.rotation.y-=.01*et.globalRotationSpeed;const gt=(((ct==null?void 0:ct.bass)||0)+((ct==null?void 0:ct.high)||0))/512;Y.rotation.x+=gt*.1,Q.rotation.z+=gt*.15}const rt=E.current,ot=A.current,Et=b.current,G=d==="right"?-1:1,Tt=fA(ct);X.rotation.x=cd.degToRad(rt.x+Tt.rotation.x),X.rotation.y=cd.degToRad(rt.y*G+Tt.rotation.y*G),X.rotation.z=cd.degToRad(rt.z*G+Tt.rotation.z*G),X.position.set(ot.x*G+Tt.offset.x*G,ot.y+Tt.offset.y,ot.z+Tt.offset.z),X.scale.set(Et,Et,Et),V.render(z,B)}Ce();const Te=V.domElement,Oe=y.current;return()=>{cancelAnimationFrame(ue),pe.terminate(),Oe&&Oe.contains(Te)&&Oe.removeChild(Te),V.dispose(),z.clear()}},[i,d,t,m.type]),O.jsx("div",{ref:y,className:`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${r}`,onClick:v})},Qo={name:"Berlín Techno",bpm:128,layers:[{id:"kick_basic",type:"percussion",minCombo:1,maxCombo:100,color:"var(--text-primary)",opacity:.6,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"hihat_basic",type:"percussion",minCombo:5,maxCombo:80,color:"#00FFFF",opacity:.8,yOffset:-5,pattern:r=>r%4===2,play:r=>r.playHiHat()},{id:"bass_acid_low",type:"bass",minCombo:12,maxCombo:120,color:"var(--accent-primary)",opacity:.4,yOffset:5,pattern:r=>r%2===0,play:(r,t,i)=>{const s=[55,65,73,82];r.playBass(s[t%s.length],i)}},{id:"snare_break",type:"percussion",minCombo:25,maxCombo:150,color:"#FF00FF",opacity:.7,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"ghost_hats",type:"percussion",minCombo:50,maxCombo:180,color:"#AAAAAA",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"acid_arp",type:"lead",minCombo:80,color:"#CCFF00",opacity:.5,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[110,130,165,196];r.playLead(s[t%s.length],i)}},{id:"fm_pulsar",type:"fx",minCombo:120,color:"#FF5500",opacity:.6,yOffset:0,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(440,i*2)},{id:"ultra_lead",type:"lead",minCombo:160,color:"#FFFFFF",opacity:.9,yOffset:-15,pattern:r=>r%3===0,play:(r,t,i)=>{const s=[220,330,440,660];r.playLead(s[Math.floor(Math.random()*s.length)],i*3)}},{id:"heavenly_lead",type:"lead",minCombo:200,color:"#00FFFF",opacity:.8,yOffset:-20,pattern:r=>r%8===4,play:(r,t,i)=>r.playLead(880,i)}]},Nh={name:"Cyber Ambient",bpm:90,layers:[{id:"pad",type:"lead",minCombo:1,color:"var(--accent-primary)",opacity:.3,yOffset:10,pattern:r=>r%16===0,play:(r,t,i)=>r.playBass(110,i)},{id:"glitch",type:"fx",minCombo:10,color:"#00FFFF",opacity:.6,pattern:r=>Math.random()>.8,play:r=>r.playHiHat()},{id:"shimmer",type:"lead",minCombo:40,color:"#FFFFFF",opacity:.4,yOffset:-15,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(880,i)},{id:"deep_pulse",type:"bass",minCombo:80,color:"#5500FF",opacity:.5,yOffset:15,pattern:r=>r%32===0,play:(r,t,i)=>r.playBass(40,i*2)},{id:"celestial",type:"lead",minCombo:150,color:"#00FF88",opacity:.7,pattern:r=>r%16===12,play:(r,t,i)=>r.playLead(1320,i)}]},Uh={name:"Acid House 303",bpm:124,layers:[{id:"kick",type:"percussion",minCombo:1,color:"var(--text-primary)",opacity:.5,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"snare",type:"percussion",minCombo:5,color:"#FF00FF",opacity:.6,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"acid",type:"bass",minCombo:15,maxCombo:120,color:"#CCFF00",opacity:.8,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[33,44,55,66];r.playBass(s[t%s.length],i*2)}},{id:"ghost",type:"percussion",minCombo:40,color:"#CCFF00",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"high_acid",type:"lead",minCombo:80,color:"#00FF00",opacity:.6,yOffset:-20,pattern:r=>r%8===0,play:(r,t,i)=>r.playLead(440,i)},{id:"squelch_peak",type:"fx",minCombo:140,color:"#FF00FF",opacity:.8,pattern:r=>r%4===3,play:r=>r.playSnare()},{id:"cosmic_resonance",type:"lead",minCombo:200,color:"#FFFFFF",opacity:.9,pattern:r=>r%16===0,play:(r,t,i)=>r.playLead(1320,i)}]},Gc={oneStar:{stars:1,levels:[{id:1,phrases:["el sol sale cada mañana en el este la casa es grande y de color azul mi perro corre por el campo verde me gusta comer pan tostado con miel el agua del rio esta muy fria hoy el gato duerme tranquilo sobre el sofa viejo los niños juegan felices en el parque tengo un libro nuevo para leer esta tarde","la mesa tiene cuatro patas de madera fuerte el jardinero riega las flores con agua fresca cada tarde de verano la mama cocina una sopa muy rica para toda la familia el pajaro vuela alto en el cielo azul y claro busca comida entre los arboles verdes del bosque"]},{id:2,phrases:["hoy el cielo esta despejado y hace mucho calor caminamos por la calle principal de la ciudad el coche de mi padre es rapido y seguro la madre prepara una cena rica para todos siento mucha paz cuando escucho la lluvia caer vamos al cine a ver una pelicula de risas el jardin tiene flores rojas y blancas muy bonitas y grandes","el abuelo cuenta historias de viajes antiguos a otros paises lejanos nos gusta sentarnos cerca del fuego cuando hace frio en invierno la ventana esta abierta y entra un aire fresco que huele a campo recien cortado busco las llaves de casa en mi mochila pequeña pero no las encuentro por ninguna parte"]},{id:3,phrases:["un dia en el campo es lo mejor para descansar del ruido de los autos podemos ver vacas ovejas y caballos comiendo hierba fresca bajo la sombra de un gran arbol verde la comida sabe mejor cuando estamos todos juntos compartiendo risas y momentos felices bajo el sol de la tarde que ya se va","mañana sera un dia de mucho trabajo pero ahora quiero descansar un poco mas el sofa es comodo y la manta es suave y caliente me quedo dormido pensando en mis planes para las vacaciones de verano cerca del mar azul con olas grandes para jugar con mis amigos de siempre de la escuela"]}]},twoStars:{stars:2,levels:[{id:1,phrases:["Aunque el camino sea difícil, siempre hay una luz al final del túnel que nos guía. La paciencia es una virtud que pocos poseen, pero que todos necesitamos cultivar para alcanzar nuestras metas más ambiciosas. Mañana será un día mejor si hoy nos esforzamos al máximo en nuestras tareas diarias y mostramos gratitud por lo que tenemos.","¿Has pensado alguna vez en la inmensidad del universo y en lo pequeños que somos nosotros en comparación con las estrellas? El tiempo vuela cuando estamos disfrutando de una buena conversación con amigos sinceros. Las palabras tienen el poder de construir puentes o levantar muros, por eso es importante elegir bien qué decir en cada momento preciso."]},{id:2,phrases:["¡Qué alegría verte de nuevo por aquí después de tanto tiempo sin saber de ti! Me pregunto si habrás cumplido todos esos sueños que tenías guardados en el cajón de las ilusiones. A veces, la vida nos sorprende con giros inesperados que nos obligan a cambiar de rumbo radicalmente, pero siempre aprendemos algo nuevo y valioso en el proceso de adaptación.","¿Sabías que la música es el lenguaje universal que conecta los corazones de personas de diferentes culturas? No importa de dónde vengas ni qué lengua hables, una melodía hermosa puede evocar sentimientos profundos en cualquier ser humano sensible. Me gusta cerrar los ojos y dejarme llevar por el ritmo suave de una guitarra española en una noche estrellada."]},{id:3,phrases:["El otoño trae consigo una melancolía dulce, con sus hojas secas crujiendo bajo nuestros pies cansados de caminar. El olor a tierra mojada tras la tormenta es uno de los perfumes más exquisitos que la naturaleza nos regala generosamente. Cada estación tiene su propio encanto, pero la transición entre el verano y el invierno parece tener una magia especial y única.","Si decides emprender un viaje largo, asegúrate de llevar contigo solo lo indispensable para no cargar con peso innecesario. La libertad se encuentra en la simplicidad de las cosas pequeñas: un amanecer, una taza de café caliente, una mirada cómplice. No busques la felicidad en objetos materiales, pues ella reside en los momentos compartidos con las personas que amas de verdad."]}]},threeStars:{stars:3,levels:[{id:1,phrases:["Para implementar correctamente un sistema asíncrono en Rust, es vital entender el concepto de Ownership y Borrowing profundamente. El uso de `tokio` permite gestionar múltiples hilos de ejecución sin bloquear el Event Loop principal del sistema operativo host. Si la latencia supera los 20ms, debemos optimizar el canal de comunicación usando UDP (osc) en lugar de protocolos pesados como HTTP o JSON serializado.","El patrón de diseño 'Hexagonal Architecture' separa el dominio lógico de los detalles de infraestructura mediante puertos y adaptadores. Esto permite que el núcleo de la aplicación sea agnóstico a la base de datos o al framework de interfaz de usuario utilizado. En un entorno de alto rendimiento, la gestión manual de la memoria y la reducción de las asignaciones en el montón (heap allocations) son estrategias clave para el éxito."]},{id:2,phrases:["const pipeline = (data) => data.filter(x => x.score > 80).map(x => ({ ...x, status: 'active' })); La recursividad puede ser elegante pero peligrosa si no se maneja el caso base adecuadamente, provocando un StackOverflowError. El uso de clausuras (closures) en JavaScript permite capturar el estado léxico circundante, creando potentes abstracciones para la programación funcional moderna y reactiva.","docker-run --rm -v $(pwd):/app node:alpine npm install && npm run build --module-resolution=node. La seguridad en las APIs RESTful se garantiza habitualmente mediante el uso de tokens JWT (JSON Web Tokens) firmados digitalmente. Es fundamental implementar políticas de CORS estrictas y sanitizar todas las entradas de los usuarios para prevenir ataques de inyección SQL o Cross-Site Scripting (XSS) en producción."]},{id:3,phrases:["El algoritmo de Dijkstra encuentra el camino más corto en un grafo con pesos no negativos utilizando una cola de prioridad. En machine learning, el descenso de gradiente estocástico es la base para entrenar redes neuronales profundas mediante la actualización iterativa de los pesos. La complejidad temporal O(n log n) es típica de algoritmos de ordenación eficientes como QuickSort o MergeSort en el caso promedio.","La transformada de Fourier convierte una señal del dominio del tiempo al dominio de la frecuencia, revelando sus componentes espectrales. En sistemas distribuidos, el teorema CAP establece que es imposible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones. La implementación de un Sidecar en Rust para procesamiento de audio requiere una sincronización precisa mediante buffers circulares y comunicación atómica."]}]}},dA=Object.values(Gc).flatMap(r=>r.levels.flatMap(t=>t.phrases)),Vs=[{id:"fase_estrellas",title:"🏆 Desafíos por Estrellas",description:"Niveles de dificultad real con frases de 60+ palabras.",levels:[...Gc.oneStar.levels.map(r=>({id:`star_1_lvl_${r.id}`,title:`1 Estrella - Nivel ${r.id}`,description:"Vocabulario esencial y fluidez básica.",fingers:[],keys:[],difficulty:1,phrases:r.phrases})),...Gc.twoStars.levels.map(r=>({id:`star_2_lvl_${r.id}`,title:`2 Estrellas - Nivel ${r.id}`,description:"Puntuación, tildes y gramática compleja.",fingers:[],keys:[],difficulty:2,phrases:r.phrases})),...Gc.threeStars.levels.map(r=>({id:`star_3_lvl_${r.id}`,title:`3 Estrellas - Nivel ${r.id}`,description:"Símbolos, código y términos técnicos densos.",fingers:[],keys:[],difficulty:3,phrases:r.phrases}))]},{id:"fase_1",title:"Fase 1: Pares de Dedos (Homólogos)",description:"Coordinación estricta de dedos equivalentes.",levels:[{id:"nivel_1_pares_indices",title:"Pares: Índices (L2 + R2)",description:"Teclas: F, G, V, B, R, T + J, H, N, M, Y, U (Solo U)",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U","4","5","6","7"],difficulty:1,phrases:["un muy tu hutu run fun gun bun my ugh","tu hutu muy un tu hutu muy un tu hutu","muy tu run un fun gun bun y hutu","unum hum tum bum rum gum yum","frt vbg jyh nm u frt vbg jyh nm u"]},{id:"nivel_1_pares_medios",title:"Pares: Corazón (L3 + R3)",description:"Teclas: D, E, C + K, I (Solo E, I)",fingers:["L3","R3"],keys:["D","E","C","K","I","3","8",","],difficulty:1,phrases:["dice kiki decide ceder ese cedi de kiev","kiki dice cede ese dique y decide","decide ceder dice kiki ece de cedec","cedi mi dique y decidi ceder ese cedi","ded cdc kik iii ded cdc kik iii"]},{id:"nivel_1_pares_anulares",title:"Pares: Anulares (L4 + R4)",description:"Teclas: S, W, X + L, O (Solo O)",fingers:["L4","R4"],keys:["S","W","X","L","O","2","9","."],difficulty:1,phrases:["oso soso solo lo olo los sol","lolo olo los osos solos o lo olo","sol solo o los osos sos o lo olo","so los olo o lolo solo lo olo","sws xws lol olo sws xws lol olo"]},{id:"nivel_1_pares_meniques",title:"Pares: Meñiques (L5 + R5)",description:"Teclas: A, Q, Z + Ñ, P (Solo A)",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P","1","0","-","´","'"],difficulty:1,phrases:["papa aña zapa a aza paña a papa","aza a paña a papa aña a zapa","paña zapa a aza aña a papa","apa aña aza paña zapa papa","aqa aza ñpñ aqa aza ñpñ"]}]},{id:"fase_2",title:"Fase 2: Dedos Individuales (Mano Izquierda)",description:"Control independiente de cada dedo izquierdo.",levels:[{id:"nivel_2_indice_izq",title:"1. Índice Izquierdo",description:"F, R, T, G, V, B (Sin Vocales)",fingers:["L2"],keys:["F","R","T","G","V","B","4","5"],difficulty:2,phrases:["frt gvb frt gvb frt gvb frt gvb","fgf rtr vbv fgf rtr vbv fgf rtr","bgt rfv bgt rfv bgt rfv bgt rfv","vfr tgb vfr tgb vfr tgb vfr tgb","ff rr tt gg vv bb ff rr tt gg"]},{id:"nivel_2_medio_izq",title:"2. Corazón Izquierdo",description:"D, E, C (Vocal E)",fingers:["L3"],keys:["D","E","C","3"],difficulty:2,phrases:["cede de cede de cede de cede","dede cede dede cede dede cede","ece de cedec ece de cedec ece","ded cdc ded cdc ded cdc ded","cede ese cede ese cede ese"]},{id:"nivel_2_anular_izq",title:"3. Anular Izquierdo",description:"S, W, X (Sin Vocales)",fingers:["L4"],keys:["S","W","X","2"],difficulty:2,phrases:["sws xws sws xws sws xws sws","wxw sxs wxw sxs wxw sxs wxw","ss ww xx ss ww xx ss ww xx","swx xws swx xws swx xws swx","xsw wsx xsw wsx xsw wsx xsw"]},{id:"nivel_2_menique_izq",title:"4. Meñique Izquierdo",description:"A, Q, Z (Vocal A)",fingers:["L5"],keys:["A","Q","Z","1","<",">"],difficulty:2,phrases:["aza aqa aza aqa aza aqa aza","aqa zaza aqa zaza aqa zaza","qaz aza qaz aza qaz aza qaz","aa qq zz aa qq zz aa qq zz","zqa aqz zqa aqz zqa aqz zqa"]}]},{id:"fase_3",title:"Fase 3: Dedos Individuales (Mano Derecha)",description:"Control independiente de cada dedo derecho.",levels:[{id:"nivel_3_indice_der",title:"1. Índice Derecho",description:"J, H, N, M, U, Y (Vocales U, Y)",fingers:["R2"],keys:["J","H","N","M","U","Y","6","7"],difficulty:2,phrases:["un muy hum un muy hum un muy","muum nunn muum nunn muum nunn","juy hum juy hum juy hum juy","yny umu yny umu yny umu yny","muy un muy un muy un muy un"]},{id:"nivel_3_medio_der",title:"2. Corazón Derecho",description:"K, I (Vocal I)",fingers:["R3"],keys:["K","I","8",","],difficulty:2,phrases:["kik iii kik iii kik iii kik","ki ik ki ik ki ik ki ik ki","kiki ikik kiki ikik kiki ikik","iii kkk iii kkk iii kkk iii","ik ki ik ki ik ki ik ki ik"]},{id:"nivel_3_anular_der",title:"3. Anular Derecho",description:"L, O (Vocal O)",fingers:["R4"],keys:["L","O","9","."],difficulty:2,phrases:["lol olo lol olo lol olo lol","lo ol lo ol lo ol lo ol lo","lolo olol lolo olol lolo olol","ooo lll ooo lll ooo lll ooo","lloo ooll lloo ooll lloo ooll"]},{id:"nivel_3_menique_der",title:"4. Meñique Derecho",description:"Ñ, P (Sin Vocales)",fingers:["R5"],keys:["Ñ","P","0","-","´"],difficulty:2,phrases:["ñpñ pñp ñpñ pñp ñpñ pñp ñpñ","ññ pp ññ pp ññ pp ññ pp ññ","pñ ñp pñ ñp pñ ñp pñ ñp pñ","ñpñp pñpñ ñpñp pñpñ ñpñp pñpñ","ppññ ppññ ppññ ppññ ppññ ppññ"]}]},{id:"fase_4",title:"Fase 4: Combinaciones Reales",description:"Palabras completas usando ambas manos.",levels:[{id:"nivel_4_comunes",title:"Palabras Comunes",description:"Las 100 palabras más usadas.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:["A","B","C","D","E","F","G","H","I","J","L","M","N","Ñ","O","P","Q","R","S","T","U","V","Y","Z"],difficulty:3,phrases:["para que sirve la vida si no hacemos cosas buenas por los demas cada dia","como estan las cosas en tu casa despues de todo lo que paso ayer","todo el mundo sabe eso desde hace mucho tiempo y nadie dice nada al respecto","cuando vienes a casa para comer algo rico y hablar de nuestros planes"]}]},{id:"fase_6",title:"Fase 6: Texto Completo (Pangramas)",description:"Todas las letras.",levels:[{id:"nivel_6_texto_completo",title:"Pangramas",description:"Todas las letras.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:[],difficulty:3,phrases:["el veloz murciélago hindú comía feliz cardillo y kiwi","la cigüeña tocaba el saxofón detrás del palenque de paja","queda gazpacho, fibra, latex, jamon, kiwi y viñas"]}]},{id:"fase_7",title:"Fase 7: Acentos",description:"Práctica con tildes.",levels:[{id:"fase_7_acentos",title:"Acentos",description:"Vocales acentuadas.",fingers:["R5","L2","L3","L5","R2","R3","R4"],keys:["´","A","E","I","O","U"],difficulty:3,phrases:["á é í ó ú","mamá comió puré","allí durmió él","avión camión canción"]}]}],hA=({currentPhrase:r,normalizedTypedText:t,currentWordInfo:i,isComposingState:s,palette:l,customColor:c,frequencyBands:d,birdRotation:h,birdPos3D:m,birdSize:p,visualsConfig:v,combo:g,comboMultiplier:y,isMusicLightingEnabled:S,onDimensionalMenu:E,PALETTE_COLORS:A,isCircuitMode:b,circuitTimer:x,circuitTitle:D,onCircuitCycle:N,isLevelActive:U,onSelectLevel:L,themeScheme:z="dark",currentMusicStyle:B=Qo,onMusicStyleChange:V,currentLevelProgress:T=0,currentLevelScore:w=0,currentLevelAccuracy:X=100})=>{const Y=z==="light"?"text-black":"text-white",Q="text-[var(--accent-primary)]",le=[Qo,Nh,Uh],he=["fa-bolt","fa-leaf","fa-flask"],[I,k]=xe.useState(null),[$,Ee]=xe.useState(!1),[me,P]=xe.useState(!1),ee=()=>{Ee(!$)},pe=[{id:"practice_indice",title:"Dedos Índices",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U"]},{id:"practice_anular",title:"Dedos Anulares",fingers:["L4","R4"],keys:["S","W","X","L","O"]},{id:"practice_corazon",title:"Dedos Corazón",fingers:["L3","R3"],keys:["D","E","C","K","I"]},{id:"practice_anular_izq",title:"Anular Izquierdo",fingers:["L4"],keys:["S","W","X"]},{id:"practice_menique",title:"Meñique",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P"]}];Vs.flatMap(Ce=>Ce.levels.filter(Te=>Te.difficulty===1)),Vs.flatMap(Ce=>Ce.levels.filter(Te=>Te.difficulty===2)),Vs.flatMap(Ce=>Ce.levels.filter(Te=>Te.difficulty===3));const we=Ce=>{k(I===Ce?null:Ce)},Fe=()=>{const Ce=Te=>{var Oe;return((Oe=Vs.find(Je=>Je.id==="fase_estrellas"))==null?void 0:Oe.levels.filter(Je=>Je.difficulty===Te))||[]};return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-6 flex flex-col items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsxs("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-6",children:[O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🏆 Niveles"}),[1,2,3].map(Te=>{const Oe=Ce(Te),Je=I===Te,ct=Te===1?"Novato":Te===2?"Experto":"Maestro";return O.jsxs("div",{className:"w-full flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>we(Te),className:`w-full p-4 flex items-center justify-between transition-all ${Je?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("div",{className:"flex gap-1 mb-1",children:Array.from({length:Te}).map((et,it)=>O.jsx("i",{className:`fa fa-star text-[12px] ${Je?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`},it))}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${Je?"text-[var(--accent-primary)]":"text-white"}`,children:ct})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${Je?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${Je?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:Oe.slice(0,4).map(et=>{const it=typeof window<"u"?Number(localStorage.getItem(`typ_progress_${et.id}`)||0):0,rt=it>=100;return O.jsxs("button",{onClick:()=>L&&L(et),className:`w-full p-3 rounded-xl text-left border hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden ${rt?"border-green-500/50 bg-green-500/10":"border-transparent"}`,children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:`text-[11px] font-black uppercase tracking-widest ${rt?"text-green-400":"text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"} transition-colors`,children:et.title}),O.jsxs("div",{className:"flex items-center gap-1",children:[it>0&&O.jsxs("span",{className:`text-[8px] font-bold ${rt?"text-green-400":"text-[var(--text-ghost)]"}`,children:[it,"%"]}),O.jsx("i",{className:`fa ${rt?"fa-check":"fa-play"} text-[8px] ${rt?"text-green-400":"text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"}`})]})]}),it>0&&O.jsx("div",{className:"w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden",children:O.jsx("div",{className:`absolute inset-y-0 left-0 ${rt?"bg-green-500 shadow-[0_0_8px_#22c55e]":"bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]"} transition-all duration-1000`,style:{width:`${it}%`}})})]},et.id)})})})})]},Te)})]}),O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"✋ Práctica"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:ee,className:`w-full p-4 flex items-center justify-between transition-all ${$?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa fa-hand-paper-o text-[14px] mb-1 ${$?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${$?"text-[var(--accent-primary)]":"text-white"}`,children:"Práctica de Dedos"})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${$?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${$?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:pe.map(Te=>O.jsxs("button",{onClick:()=>L&&L({...Te,phrases:[`${Te.keys.join(" ")} ${Te.keys.join(" ")}`]}),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:Te.title}),O.jsx("i",{className:"fa fa-play text-[8px] text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"})]})]},Te.id))})})})]}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🎵 Música"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>P(!me),className:`w-full p-4 flex items-center justify-between transition-all ${me?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa ${he[le.indexOf(B)]||"fa-music"} text-[14px] mb-1 ${me?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${me?"text-[var(--accent-primary)]":"text-white"}`,children:B.name})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${me?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${me?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-1 gap-2",children:le.filter(Te=>Te.name!==B.name).map((Te,Oe)=>O.jsxs("button",{onClick:()=>V&&V(Te),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex items-center gap-3 transition-all group relative overflow-hidden",children:[O.jsx("i",{className:`fa ${he[le.indexOf(Te)]||"fa-music"} text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]`}),O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:Te.name})]},Te.name))})})})]})]})]}),O.jsx("div",{className:"mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] animate-pulse text-center",children:"Selecciona un nivel para comenzar"})]})},te=()=>{const Ce=t.length;return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[160px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsx("div",{className:"absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsx("div",{className:"absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsxs("div",{className:"font-mono text-xl md:text-3xl relative overflow-hidden h-20 w-full max-w-2xl flex items-center",children:[O.jsx("div",{className:"absolute top-0 left-0 h-full text-white/40 whitespace-nowrap leading-none transition-transform duration-300 ease-out flex items-center will-change-transform",style:{transform:`translateX(calc(-${Ce}ch))`},children:r.split("").map((Te,Oe)=>{let Je="text-white",ct="";if(Oe<t.length){const et=t[Oe]!==Te,it=Oe===t.length-1;et?it&&s?Je="text-white border-b-2 border-[var(--accent-primary)] animate-pulse":Je="text-red-400 bg-red-500/10 border-b-2 border-red-500/30":(Je="text-white",ct="drop-shadow-[0_0_8px_var(--accent-primary)]")}return O.jsxs("span",{className:`${Je} ${ct} transition-all inline-block relative font-black`,children:[Te===" "?" ":Te,Oe===t.length&&O.jsx("span",{className:"absolute left-0 bottom-[-8px] w-full h-[4px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_20px_var(--accent-primary)] rounded-full"})]},Oe)})}),U&&T>=100&&O.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"PTS"}),O.jsx("span",{className:"text-[14px] font-bold text-green-400",children:w.toLocaleString()})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"%"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[T,"%"]})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"ACC"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[X,"%"]})]})]})]})]})},ue=l==="custom"?c:A[l]||c;return O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsx("div",{className:"w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:O.jsxs("div",{className:"w-full flex-grow flex flex-col items-center justify-center select-none",children:[O.jsx("div",{className:"w-full flex justify-center",children:U?te():Fe()}),O.jsxs("div",{className:`w-full flex flex-col items-center gap-4 mt-6 relative transition-all duration-1000 ${U?"opacity-100":"opacity-0 h-0 pointer-events-none"}`,children:[O.jsx("div",{className:"absolute hidden md:block",style:{left:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:O.jsx(Lv,{color:ue,speed:.75,bands:d,rotation:h,position:m,side:"left",scale:p*.8/180,config:v,combo:g*y,lightingEnabled:S,onClick:E},"circle-left")}),O.jsx("div",{className:"absolute hidden md:block",style:{right:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:O.jsx(Lv,{color:ue,speed:.75,bands:d,rotation:h,position:m,side:"right",scale:p*.8/180,config:v,combo:g*y,lightingEnabled:S,onClick:E},"circle-right")}),b&&x!==void 0&&O.jsxs("button",{onClick:N,className:"relative z-50 flex items-center justify-center gap-4 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer hover:scale-105 transition-transform active:scale-95 group",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] rounded-full px-5 py-1.5 flex items-center gap-3 transition-colors group-hover:bg-[var(--accent-primary)]/10",children:[O.jsx("i",{className:"fa fa-refresh fa-spin text-xs"}),O.jsxs("span",{className:"font-mono font-bold text-lg tracking-wider",children:[x,"s"]})]}),D&&O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]",children:D})]}),O.jsx("div",{className:"relative overflow-visible flex items-center justify-center gap-8",style:{height:`${p*.8}px`},children:O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible",children:O.jsxs("div",{className:"relative font-mono text-4xl flex items-center h-full min-w-[200px]",children:[O.jsx("div",{className:`absolute inset-0 whitespace-pre flex items-center justify-start pointer-events-none ${Y}`,children:i.word}),O.jsxs("div",{className:"relative flex items-center whitespace-pre h-full",children:[i.userTypedSlice.split("").map((Ce,Te)=>{const Oe=Ce===(i.word[Te]||""),Je=s&&Te===i.userTypedSlice.length-1?"text-yellow-400":Oe?Q:"text-red-400 bg-red-500/10 border-b-2 border-red-500/30";return O.jsx("span",{className:`relative inline-block ${Je}`,children:Ce===" "?" ":Ce},Te)}),O.jsx("span",{className:"inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1"})]})]})})})]})]})})})},ks={"left-pinky":"#f472b6","left-ring":"#c084fc","left-middle":"#60a5fa","left-index":"#22d3ee",thumb:"#9ca3af","right-index":"#4ade80","right-middle":"#facc15","right-ring":"#fb923c","right-pinky":"#f87171"},pA={"left-pinky":"Meñique Izquierdo","left-ring":"Anular Izquierdo","left-middle":"Corazón Izquierdo","left-index":"Índice Izquierdo",thumb:"Pulgares (Espacio)","right-index":"Índice Derecho","right-middle":"Corazón Derecho","right-ring":"Anular Derecho","right-pinky":"Meñique Derecho"},Wh=[[{key:"1",label:"1",finger:"left-pinky",row:0,why:"Alcance natural exterior."},{key:"2",label:"2",finger:"left-ring",row:0,why:"Extensión diagonal superior."},{key:"3",label:"3",finger:"left-middle",row:0,why:"Extensión diagonal superior."},{key:"4",label:"4",finger:"left-index",row:0,why:"Alcance interior izquierdo."},{key:"5",label:"5",finger:"left-index",row:0,why:"Extensión interior izquierda."},{key:"6",label:"6",finger:"right-index",row:0,why:"Extensión interior derecha."},{key:"7",label:"7",finger:"right-index",row:0,why:"Alcance interior derecho."},{key:"8",label:"8",finger:"right-middle",row:0,why:"Extensión diagonal superior."},{key:"9",label:"9",finger:"right-ring",row:0,why:"Extensión diagonal superior."},{key:"0",label:"0",finger:"right-pinky",row:0,why:"Alcance natural exterior."}],[{key:"q",label:"Q",finger:"left-pinky",row:1,why:"Posición superior externa."},{key:"w",label:"W",finger:"left-ring",row:1,why:"Movimiento vertical desde S."},{key:"e",label:"E",finger:"left-middle",row:1,why:"Movimiento vertical desde D."},{key:"r",label:"R",finger:"left-index",row:1,why:"Movimiento vertical desde F."},{key:"t",label:"T",finger:"left-index",row:1,why:"Extensión lateral desde F."},{key:"y",label:"Y",finger:"right-index",row:1,why:"Extensión lateral desde J."},{key:"u",label:"U",finger:"right-index",row:1,why:"Movimiento vertical desde J."},{key:"i",label:"I",finger:"right-middle",row:1,why:"Movimiento vertical desde K."},{key:"o",label:"O",finger:"right-ring",row:1,why:"Movimiento vertical desde L."},{key:"p",label:"P",finger:"right-pinky",row:1,why:"Posición superior externa."}],[{key:"a",label:"A",finger:"left-pinky",row:2,why:"Posición de reposo base."},{key:"s",label:"S",finger:"left-ring",row:2,why:"Posición de reposo base."},{key:"d",label:"D",finger:"left-middle",row:2,why:"Posición de reposo base."},{key:"f",label:"F",finger:"left-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"g",label:"G",finger:"left-index",row:2,why:"Extensión lateral cómoda."},{key:"h",label:"H",finger:"right-index",row:2,why:"Extensión lateral cómoda."},{key:"j",label:"J",finger:"right-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"k",label:"K",finger:"right-middle",row:2,why:"Posición de reposo base."},{key:"l",label:"L",finger:"right-ring",row:2,why:"Posición de reposo base."},{key:"ñ",label:"Ñ",finger:"right-pinky",row:2,why:"Posición de reposo base (Español)."}],[{key:"<",label:"<",finger:"left-pinky",row:3,why:"Tecla ISO para programación."},{key:"z",label:"Z",finger:"left-pinky",row:3,why:"Extensión inferior externa."},{key:"x",label:"X",finger:"left-ring",row:3,why:"Extensión diagonal inferior."},{key:"c",label:"C",finger:"left-middle",row:3,why:"Extensión diagonal inferior."},{key:"v",label:"V",finger:"left-index",row:3,why:"Extensión diagonal inferior."},{key:"b",label:"B",finger:"left-index",row:3,why:"Extensión lateral inferior."},{key:"n",label:"N",finger:"right-index",row:3,why:"Extensión lateral inferior."},{key:"m",label:"M",finger:"right-index",row:3,why:"Extensión diagonal inferior."},{key:",",label:",",finger:"right-middle",row:3,why:"Puntuación esencial."},{key:".",label:".",finger:"right-ring",row:3,why:"Fin de frase y decimales."},{key:"-",label:"-",finger:"right-pinky",row:3,why:"Barra alta y guiones."},{key:"-",label:"_",finger:"right-pinky",row:3,why:"Barra baja muy usada en código."}]],en={};Wh.flat().forEach(r=>{en[r.key.toLowerCase()]=r,en[r.label.toLowerCase()]=r,r.key==="1"&&(en["!"]=r),r.key==="2"&&(en['"']=r),r.key==="3"&&(en["·"]=r),r.key==="4"&&(en.$=r),r.key==="5"&&(en["%"]=r),r.key==="6"&&(en["&"]=r),r.key==="7"&&(en["/"]=r),r.key==="8"&&(en["("]=r),r.key==="9"&&(en[")"]=r),r.key==="0"&&(en["="]=r),r.key==="<"&&(en[">"]=r),r.key===","&&(en[";"]=r),r.key==="."&&(en[":"]=r),r.key==="-"&&(en._=r)});const mA={á:"a",é:"e",í:"i",ó:"o",ú:"u",ü:"u",ï:"i",Á:"a",É:"e",Í:"i",Ó:"o",Ú:"u",Ñ:"ñ"};Object.entries(mA).forEach(([r,t])=>{en[t]&&(en[r]={...en[t],key:r,label:r.toUpperCase()})});const y_={key:" ",label:"Espacio",finger:"thumb",row:5,why:"Dedo más fuerte para la tecla más frecuente."};en[" "]=y_;const gA=({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0}})=>{const l=(c,d,h,m)=>{const p=t.toLowerCase()===c.key.toLowerCase()||t===" "&&c.key===" ",v=r.toLowerCase()===c.key.toLowerCase();let g="mac-key ",y={};if(c.key===" "?g+="w-[250px] h-[44px] ":g+="w-[44px] h-[44px] ",v&&(g+="active "),p&&(g+="target "),i&&!v&&!p){const S=ks[c.finger];y={borderColor:S,color:S,backgroundColor:`${S}10`,boxShadow:`0 0 10px ${S}20`}}else if(!v&&!p&&s){const S=h/(m||1),E=Math.max(0,1-S*2),A=Math.max(0,1-Math.abs(S-.5)*4),b=Math.max(0,(S-.5)*2),x=s.bass*E+s.mid*A+s.high*b;if(x>.02){const D=220+S*120;y={backgroundColor:`hsla(${D}, 70%, 50%, ${x*.25})`,boxShadow:`0 0 ${x*15}px hsla(${D}, 70%, 50%, 0.4)`,borderColor:`hsla(${D}, 70%, 50%, ${x*.5})`,color:`hsla(${D}, 70%, 90%, ${.6+x*.4})`}}}return O.jsxs("div",{className:g,style:y,children:[c.label,p&&O.jsx("div",{className:"absolute -bottom-1 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-glow)]"})]},c.key)};return O.jsxs("div",{className:"flex flex-col items-center gap-2 p-2 select-none opacity-80 hover:opacity-100 transition-opacity",children:[Wh.map((c,d)=>O.jsx("div",{className:`flex gap-1.5 ${d===3?"ml-6":""}`,children:c.map((h,m)=>l(h,d,m,c.length))},d)),O.jsx("div",{className:"flex justify-center mt-3",children:l(y_,5,0,1)})]})},Ov=[[{id:"esc",base:"Escape",shift:"Escape",alt:"Escape",special:"esc",width:"w-[60px]",h:"h-[22px]"},{id:"f1",base:"F1",shift:"F1",alt:"F1",label:"F1",special:"f",h:"h-[22px]"},{id:"f2",base:"F2",shift:"F2",alt:"F2",label:"F2",special:"f",h:"h-[22px]"},{id:"f3",base:"F3",shift:"F3",alt:"F3",label:"F3",special:"f",h:"h-[22px]"},{id:"f4",base:"F4",shift:"F4",alt:"F4",label:"F4",special:"f",h:"h-[22px]"},{id:"f5",base:"F5",shift:"F5",alt:"F5",label:"F5",special:"f",h:"h-[22px]"},{id:"f6",base:"F6",shift:"F6",alt:"F6",label:"F6",special:"f",h:"h-[22px]"},{id:"f7",base:"F7",shift:"F7",alt:"F7",label:"F7",special:"f",h:"h-[22px]"},{id:"f8",base:"F8",shift:"F8",alt:"F8",label:"F8",special:"f",h:"h-[22px]"},{id:"f9",base:"F9",shift:"F9",alt:"F9",label:"F9",special:"f",h:"h-[22px]"},{id:"f10",base:"F10",shift:"F10",alt:"F10",label:"F10",special:"f",h:"h-[22px]"},{id:"f11",base:"F11",shift:"F11",alt:"F11",label:"F11",special:"f",h:"h-[22px]"},{id:"f12",base:"F12",shift:"F12",alt:"F12",label:"F12",special:"f",h:"h-[22px]"},{id:"eject",base:"",shift:"",alt:"",label:"⚙",special:"eject",h:"h-[22px]",width:"w-[60px]"}],[{id:"row1_0",base:"º",shift:"ª",alt:"\\"},{id:"row1_1",base:"1",shift:"!",alt:"|"},{id:"row1_2",base:"2",shift:'"',alt:"@"},{id:"row1_3",base:"3",shift:"·",alt:"#"},{id:"row1_4",base:"4",shift:"$",alt:"~"},{id:"row1_5",base:"5",shift:"%",alt:"€"},{id:"row1_6",base:"6",shift:"&",alt:"¬"},{id:"row1_7",base:"7",shift:"/",alt:""},{id:"row1_8",base:"8",shift:"(",alt:""},{id:"row1_9",base:"9",shift:")",alt:""},{id:"row1_10",base:"0",shift:"=",alt:""},{id:"row1_11",base:"'",shift:"?",alt:""},{id:"row1_12",base:"¡",shift:"¿",alt:""},{id:"delete",base:"Backspace",shift:"Backspace",alt:"Backspace",label:"⌫",special:"delete",width:"w-[80px]"}],[{id:"tab",base:"Tab",shift:"Tab",alt:"Tab",label:"⇥",special:"tab",width:"w-[80px]"},{id:"q",base:"q",shift:"Q",alt:"q"},{id:"w",base:"w",shift:"W",alt:"w"},{id:"e",base:"e",shift:"E",alt:"é"},{id:"r",base:"r",shift:"R",alt:"r"},{id:"t",base:"t",shift:"T",alt:"t"},{id:"y",base:"y",shift:"Y",alt:"y"},{id:"u",base:"u",shift:"U",alt:"ú"},{id:"i",base:"i",shift:"I",alt:"í"},{id:"o",base:"o",shift:"O",alt:"ó"},{id:"p",base:"p",shift:"P",alt:"p"},{id:"row2_11",base:"`",shift:"^",alt:"["},{id:"row2_12",base:"+",shift:"*",alt:"]"},{id:"return",base:"Enter",shift:"Enter",alt:"Enter",label:"↵",special:"return",width:"w-[44px]",h:"h-[96px]"}],[{id:"caps",base:"CapsLock",shift:"CapsLock",alt:"CapsLock",label:"⇪",special:"caps",width:"w-[88px]"},{id:"a",base:"a",shift:"A",alt:"á"},{id:"s",base:"s",shift:"S",alt:"s"},{id:"d",base:"d",shift:"D",alt:"d"},{id:"f",base:"f",shift:"F",alt:"f"},{id:"g",base:"g",shift:"G",alt:"g"},{id:"h",base:"h",shift:"H",alt:"h"},{id:"j",base:"j",shift:"J",alt:"j"},{id:"k",base:"k",shift:"K",alt:"k"},{id:"l",base:"l",shift:"L",alt:"l"},{id:"ñ",base:"ñ",shift:"Ñ",alt:"ñ"},{id:"row3_11",base:"´",shift:"¨",alt:"{"},{id:"row3_12",base:"ç",shift:"Ç",alt:"}"}],[{id:"shift_l",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[56px]"},{id:"row4_1",base:"<",shift:">",alt:""},{id:"z",base:"z",shift:"Z",alt:"z"},{id:"x",base:"x",shift:"X",alt:"x"},{id:"c",base:"c",shift:"C",alt:"c"},{id:"v",base:"v",shift:"V",alt:"v"},{id:"b",base:"b",shift:"B",alt:"b"},{id:"n",base:"n",shift:"N",alt:"n"},{id:"m",base:"m",shift:"M",alt:"m"},{id:"row4_9",base:",",shift:";",alt:""},{id:"row4_10",base:".",shift:":",alt:""},{id:"row4_11",base:"-",shift:"_",alt:""},{id:"shift_r",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[118px]"}],[{id:"fn",base:"Fn",shift:"Fn",alt:"Fn",label:"fn",special:"fn",width:"w-[44px]"},{id:"ctrl",base:"Control",shift:"Control",alt:"Control",label:"⌃",special:"ctrl"},{id:"opt_l",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"cmd_l",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"space",base:" ",shift:" ",alt:" ",label:"",special:"space",width:"w-[250px]"},{id:"cmd_r",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"opt_r",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"left",base:"ArrowLeft",shift:"ArrowLeft",alt:"ArrowLeft",label:"◀",special:"left",h:"h-[22px]"},{id:"up",base:"ArrowUp",shift:"ArrowUp",alt:"ArrowUp",label:"▲",special:"up",h:"h-[22px]"},{id:"down",base:"ArrowDown",shift:"ArrowDown",alt:"ArrowDown",label:"▼",special:"down",h:"h-[22px]"},{id:"right",base:"ArrowRight",shift:"ArrowRight",alt:"ArrowRight",label:"▶",special:"right",h:"h-[22px]"}]],vA=({top:r,bottom:t,right:i})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full pt-0 pb-[2px]",children:[O.jsx("span",{className:"text-[10px] leading-none font-medium mb-1 opacity-80",children:r}),O.jsx("span",{className:"text-[13px] font-bold leading-none",children:t})]}),i&&O.jsx("span",{className:"absolute bottom-[4px] right-[4px] text-[10px] leading-none font-medium opacity-70",children:i})]}),_A=({t:r,b:t})=>O.jsxs("div",{className:"flex flex-col items-center justify-center",children:[O.jsx("span",{className:"text-[10px] mb-0.5 opacity-70",children:r}),O.jsx("span",{className:"text-[12px] font-bold",children:t})]}),Pv=({l:r,s:t})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:O.jsx("span",{className:"text-[12px] font-medium",children:r})}),t&&O.jsx("span",{className:"absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium",children:t})]}),xA=Zi.memo(({focused:r})=>{let t="rgba(255,255,255,0.05)",i="rgba(255,255,255,0.12)",s="rgba(255,255,255,0.8)";return r&&(t="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3)",i="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 1)",s="#fff"),O.jsxs("div",{style:{position:"relative",width:"44px",height:"94px",flexShrink:0},children:[O.jsx("svg",{fill:"none",width:"44",height:"94",style:{position:"absolute",top:0,left:0},children:O.jsx("path",{d:"M 6.5,0.5 L 37.5,0.5 Q 43.5,0.5 43.5,6.5 L 43.5,87.5 Q 43.5,93.5 37.5,93.5 L 14.5,93.5 Q 8.5,93.5 8.5,87.5 L 8.5,48.5 Q 8.5,44.5 6.5,44.5 Q 0.5,44.5 0.5,38.5 L 0.5,6.5 Q 0.5,0.5 6.5,0.5 Z",fill:t,stroke:i,strokeWidth:"1",style:{transition:"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)"}})}),O.jsx("div",{style:{position:"absolute",top:0,left:6,width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",color:s,fontSize:"14px",transition:"color 0.1s"},children:"↵"})]})}),cs=Zi.memo(({keyDef:r,active:t,target:i,highlighted:s,showZones:l,fingerColor:c})=>{if(r.special==="return")return O.jsx("div",{className:`transition-all ${t||i?"scale-105 -translate-y-[2px] z-20":""}`,style:{marginLeft:"-8px",height:"44px",zIndex:10,position:"relative"},children:O.jsx(xA,{focused:t||i})});let d=`mac-key ${r.width||"w-[44px]"} ${r.h||"h-[44px]"} ${r.className||""} `;t&&(d+="active "),i&&(d+="target "),s&&(d+="highlighted ");let h={};l&&!t&&!i&&!s&&c&&(h={borderColor:c,color:c,backgroundColor:`${c}10`,boxShadow:`0 0 8px ${c}20`});let m=r.label||r.base;return r.id.startsWith("row1_")||r.id==="row2_11"||r.id==="row2_12"||r.id==="row3_11"?m=O.jsx(vA,{top:r.shift,bottom:r.base,right:r.alt===r.base?void 0:r.alt}):r.id==="row3_12"?m=O.jsx(Pv,{l:"Ç",s:"}"}):r.id.match(/^[a-zñ]$/)?m=O.jsx(Pv,{l:r.base.toUpperCase(),s:r.alt===r.base?"":r.alt}):r.shift&&r.shift!==r.base&&!r.special&&(m=O.jsx(_A,{t:r.shift,b:r.base})),O.jsxs("div",{className:d.trim(),style:h,children:[r.special==="caps"&&O.jsx("div",{className:`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${t?"opacity-100":"opacity-0"}`}),m]})}),yA=Zi.memo(({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0},highlightedKeys:l=[],isWaveActive:c=!1})=>{const d=xe.useCallback(g=>g.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),[]),h=xe.useCallback(g=>{const y=g.id.toLowerCase(),S=g.base.toLowerCase(),E=t.toLowerCase(),A=d(t);if(g.special==="space"&&t===" "||g.special==="return"&&(t==="enter"||t==="return")||S===A||y===A||g.shift.toLowerCase()===E||g.alt.toLowerCase()===E)return!0;const b={row1_0:["º","\\","ª"],row1_1:["1","!","|"],row1_2:["2",'"',"@"],row1_3:["3","·","#"],row1_4:["4","$","~"],row1_5:["5","%","€"],row1_6:["6","&","¬"],row2_11:["[","^","`"],row2_12:["]","*","+"],row3_11:["{","¨","´"],row3_12:["}","ç","Ç"]};return b[g.id]?b[g.id].includes(t):!1},[t,d]),m=xe.useCallback(g=>{var A;const y=g.id.toLowerCase(),S=g.base.toLowerCase(),E=r.toLowerCase();return g.special==="space"&&r===" "||g.special==="return"&&E==="enter"||g.special==="delete"&&(E==="backspace"||E==="delete")?!0:y===E||S===E||g.shift.toLowerCase()===E||((A=g.label)==null?void 0:A.toLowerCase())===E},[r]),p=xe.useCallback(g=>l.some(y=>y.toLowerCase()===g.id.toLowerCase()||y.toLowerCase()===g.base.toLowerCase()),[l]),v=xe.useCallback(g=>{let y=g.id.toLowerCase();if(g.special==="tab"||g.special==="caps"||g.special==="shift"||g.special==="ctrl"||g.special==="fn")return ks["left-pinky"];if(g.special==="return"||g.special==="delete")return ks["right-pinky"];if(g.special==="space"||g.special==="opt"||g.special==="cmd")return ks.thumb;const S=en[y]||en[g.base.toLowerCase()];return S?ks[S.finger]:null},[]);return O.jsx("div",{className:"scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none",children:O.jsx("div",{className:"bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]",children:Ov.map((g,y)=>{if(y===3)return null;if(y===2)return O.jsxs("div",{className:"flex flex-row gap-[6px] items-start",children:[O.jsxs("div",{className:"flex flex-col gap-[6px]",children:[O.jsx("div",{className:"flex flex-row gap-[6px]",children:g.slice(0,-1).map(E=>O.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))}),O.jsx("div",{className:"flex flex-row gap-[6px]",children:Ov[3].map(E=>O.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))})]}),O.jsx(cs,{keyDef:g[g.length-1],active:m(g[g.length-1]),target:h(g[g.length-1]),highlighted:p(g[g.length-1]),showZones:i,fingerColor:v(g[g.length-1])})]},"merged-row-2-3");const S=y===5;return O.jsx("div",{className:"flex flex-row gap-[6px] items-end",children:g.map((E,A)=>S&&(E.id==="left"||E.id==="up"||E.id==="down"||E.id==="right")?E.id!=="left"?null:O.jsxs(Zi.Fragment,{children:[O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(cs,{keyDef:g[A],active:m(g[A]),target:h(g[A]),highlighted:p(g[A]),showZones:i,fingerColor:v(g[A])})}),O.jsxs("div",{className:"flex flex-col gap-[2px] w-[44px]",children:[O.jsx(cs,{keyDef:g[A+1],active:m(g[A+1]),target:h(g[A+1]),highlighted:p(g[A+1]),showZones:i,fingerColor:v(g[A+1])}),O.jsx(cs,{keyDef:g[A+2],active:m(g[A+2]),target:h(g[A+2]),highlighted:p(g[A+2]),showZones:i,fingerColor:v(g[A+2])})]}),O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(cs,{keyDef:g[A+3],active:m(g[A+3]),target:h(g[A+3]),highlighted:p(g[A+3]),showZones:i,fingerColor:v(g[A+3])})})]},"arrows"):O.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))},y)})})})}),SA=({analyser:r,active:t,color:i,type:s,opacityMultiplier:l=1,yOffset:c=0})=>{const d=xe.useRef(null),h=xe.useRef(null);return xe.useEffect(()=>{let m,p=0,v=0;const g=new Uint8Array(r.frequencyBinCount),y=()=>{r.getByteFrequencyData(g);let S=0;if(s==="kick"){for(let L=0;L<4;L++)S+=g[L];S/=4}else if(s==="bass"){for(let L=2;L<12;L++)S+=g[L];S/=10}else if(s==="hihat"||s==="percussion"||s==="snare"||s==="ghost"){for(let L=30;L<60;L++)S+=g[L];S/=30,S*=3}else if(s==="lead"){for(let L=10;L<30;L++)S+=g[L];S/=20}else if(s==="ambient"){for(let L=0;L<20;L++)S+=g[L];S/=20}else{for(let L=0;L<20;L++)S+=g[L];S/=20}const E=Math.min(S/255,1);v+=(E-v)*.15;const A=200,x=40/2+c,D=24;p+=.02+v*.05;const N=[];for(let L=0;L<=D;L++){const z=L/D*A,B=L/D*2-1,V=Math.exp(-Math.pow(B*1.8,2));let T=0;const w=5+v*25;s==="kick"?T=Math.sin(p*8)*w*V*Math.cos(B*Math.PI):s==="hihat"||s==="snare"||s==="ghost"?(T=Math.sin(B*20+p*30)*w*.4*V,T+=(Math.random()-.5)*w*.2*V):(T=Math.sin(B*4+p*5)*w*V,T+=Math.sin(B*8-p*3)*(w*.3)*V),N.push({x:z,y:x+T})}const U=N.reduce((L,z,B)=>{if(B===0)return`M ${z.x},${z.y}`;const V=N[B-1],T=V.x+(z.x-V.x)/2;return L+` C ${T},${V.y} ${T},${z.y} ${z.x},${z.y}`},"");if(d.current&&(d.current.setAttribute("d",U),d.current.setAttribute("stroke-width",(.8+v*1.5).toFixed(2))),h.current){const L=t?(.6+v*.4)*l:.1;h.current.style.opacity=L.toString()}m=requestAnimationFrame(y)};return y(),()=>cancelAnimationFrame(m)},[r,s,c,t,l]),O.jsx("div",{ref:h,className:"absolute inset-0 pointer-events-none overflow-hidden rounded-xl bg-blend-screen",style:{transition:"opacity 0.2s ease-out"},children:O.jsx("svg",{className:"w-full h-full",viewBox:"0 0 200 40",preserveAspectRatio:"none",children:O.jsx("path",{ref:d,fill:"none",stroke:i,strokeLinecap:"round",strokeLinejoin:"round"})})})},bA=Zi.memo(({keyboardType:r,activeKey:t,targetChar:i,showZones:s,isMusicLightingEnabled:l,frequencyBands:c,stats:d,isZenMode:h,score:m,onRestart:p,onZenToggle:v,audioReady:g,audioSystem:y,currentMusicStyle:S,startTime:E,isFinished:A,combo:b,comboMultiplier:x,onDimensionalMenu:D,hexToRgba:N,customColor:U,highlightedKeys:L=[],isWaveActive:z=!1})=>{const B=l?c:{bass:0,mid:0,high:0};return O.jsxs("div",{className:"flex flex-col items-center w-full transition-all duration-500 z-20 pb-2 gap-2",children:[O.jsxs("div",{className:"w-full max-w-[900px] flex items-center justify-between gap-4 px-2",children:[O.jsx("div",{className:"flex gap-2",children:O.jsx("button",{onClick:p,className:"h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-lg",title:"Reiniciar",children:O.jsx("i",{className:"fa fa-refresh"})})}),O.jsxs("div",{className:"h-11 flex-grow max-w-[420px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-6 overflow-hidden shadow-2xl transition-all duration-500 relative",style:{boxShadow:b>15?`0 0 30px ${N(U,.3)}`:"none"},children:[g&&y&&S.layers.map(V=>b*x>=V.minCombo&&(V.maxCombo===void 0||b*x<=V.maxCombo)&&O.jsx(SA,{analyser:y.getAnalysers()[V.id]||y.getAnalysers().master,type:V.type,color:V.color,active:E!==null&&!A,opacityMultiplier:V.opacity,yOffset:V.yOffset},V.id)),O.jsxs("div",{className:"flex items-center gap-4 relative z-10 w-full justify-between",children:[O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:d.wpm}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"WPM"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--text-primary)] font-mono",children:d.accuracy}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"%ACC"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:`text-[12px] font-black font-mono transition-all ${b>0?"text-[var(--accent-primary)]":"text-[var(--text-muted)]"}`,children:b}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"COMBO"})]}),O.jsxs("div",{className:"flex items-baseline gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:m.toLocaleString()}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase ml-1",children:"SCORE"})]}),O.jsxs("div",{className:"flex items-center gap-1 opacity-40 animate-pulse",children:[O.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"}),O.jsx("span",{className:"text-[6px] font-black text-[var(--text-secondary)]",children:"LIVE"})]})]})]}),O.jsx("div",{className:"",children:O.jsx("button",{onClick:D,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg",title:"Control Center",children:O.jsx("i",{className:"fa fa-gear"})})})]}),O.jsx("div",{className:"flex justify-center w-full transition-all duration-500 transform hover:scale-[1.01]",children:r==="standard"?O.jsx(gA,{activeKey:t,targetKey:i,showZones:s,bands:B}):O.jsx(yA,{activeKey:t,targetKey:i,showZones:s,bands:B,highlightedKeys:L,isWaveActive:z})})]})}),MA=({isOpen:r,onClose:t,language:i,onLanguageChange:s,currentMusicStyle:l,onMusicStyleChange:c,TECHNO_STYLE:d,AMBIENT_STYLE:h,ACID_HOUSE_STYLE:m,getBtnClass:p,themes:v,currentTheme:g,onThemeChange:y})=>{const S=Zi.useMemo(()=>{const E={};return Wh.flat().forEach(A=>{E[A.finger]||(E[A.finger]=[]),E[A.finger].includes(A.label)||E[A.finger].push(A.label)}),E},[]);return O.jsxs("aside",{className:`fixed top-0 left-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${r?"translate-x-0":"-translate-x-full"} overflow-y-auto custom-scrollbar`,children:[O.jsxs("div",{className:"flex items-center justify-between mb-12",children:[O.jsxs("div",{className:"flex items-center gap-4",children:[O.jsx("div",{className:"w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]",children:"Typ_"}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]",children:"System_Core"})]}),O.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{className:"space-y-4 mb-12",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Idioma del Sistema"}),O.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[O.jsxs("button",{onClick:()=>s("es"),className:p(i==="es"),children:[O.jsx("span",{children:"Español"})," ",O.jsx("span",{children:"🇪🇸"})]}),O.jsxs("button",{onClick:()=>s("en"),className:p(i==="en"),children:[O.jsx("span",{children:"English"})," ",O.jsx("span",{children:"🇺🇸"})]})]})]}),O.jsxs("div",{className:"mt-12 space-y-6",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Mapeo de Dedos"}),O.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.entries(pA).filter(([E])=>E!=="thumb").map(([E,A])=>O.jsxs("div",{className:"p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group",children:[O.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[O.jsx("span",{className:"w-2 h-2 rounded-full shadow-[0_0_8px]",style:{backgroundColor:ks[E],boxShadow:`0 0 10px ${ks[E]}`}}),O.jsx("span",{className:"text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate",children:A})]}),O.jsx("div",{className:"flex flex-wrap gap-1",children:(S[E]||[]).sort().map(b=>O.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]",children:b},b))})]},E))})]})]})},EA=({isOpen:r,onClose:t,getBtnClass:i,currentMusicStyle:s,onMusicStyleChange:l,TECHNO_STYLE:c,AMBIENT_STYLE:d,ACID_HOUSE_STYLE:h,score:m})=>O.jsx("aside",{className:`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:O.jsxs("div",{className:"flex flex-col gap-8 mb-8 shrink-0",children:[O.jsxs("div",{className:"flex items-center justify-between mb-4",children:[O.jsxs("div",{className:"flex flex-col",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-1",children:"Estado de Sesión"}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("span",{className:"text-[24px] font-black text-[var(--text-primary)] tracking-tighter",children:m.toLocaleString()}),O.jsx("span",{className:"text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-2 italic opacity-50",children:"Pts"})]})]}),O.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4",children:"Estilos de Música"}),O.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[O.jsxs("button",{onClick:()=>l(c),className:i(s===c),children:[O.jsx("span",{children:c.name})," ",O.jsx("i",{className:"fa fa-bolt"})]}),O.jsxs("button",{onClick:()=>l(d),className:i(s===d),children:[O.jsx("span",{children:d.name})," ",O.jsx("i",{className:"fa fa-leaf"})]}),O.jsxs("button",{onClick:()=>l(h),className:i(s===h),children:[O.jsx("span",{children:h.name})," ",O.jsx("i",{className:"fa fa-flask"})]})]})]})]})});class TA{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterAnalyser=this.ctx.createAnalyser(),this.masterAnalyser.fftSize=512,this.masterAnalyser.smoothingTimeConstant=.88,this.masterGain.connect(this.masterAnalyser),this.masterAnalyser.connect(this.ctx.destination),this.kickGain=this.ctx.createGain(),this.kickAnalyser=this.ctx.createAnalyser(),this.kickAnalyser.fftSize=256,this.kickGain.connect(this.kickAnalyser),this.kickAnalyser.connect(this.masterGain),this.bassGain=this.ctx.createGain(),this.bassAnalyser=this.ctx.createAnalyser(),this.bassAnalyser.fftSize=512,this.bassGain.connect(this.bassAnalyser),this.bassAnalyser.connect(this.masterGain),this.hihatGain=this.ctx.createGain(),this.hihatAnalyser=this.ctx.createAnalyser(),this.hihatAnalyser.fftSize=256,this.hihatGain.connect(this.hihatAnalyser),this.hihatAnalyser.connect(this.masterGain),this.snareGain=this.ctx.createGain(),this.snareAnalyser=this.ctx.createAnalyser(),this.snareAnalyser.fftSize=256,this.snareGain.connect(this.snareAnalyser),this.snareAnalyser.connect(this.masterGain),this.leadGain=this.ctx.createGain(),this.leadAnalyser=this.ctx.createAnalyser(),this.leadAnalyser.fftSize=256,this.leadGain.connect(this.leadAnalyser),this.leadAnalyser.connect(this.masterGain),this.ghostGain=this.ctx.createGain(),this.ghostAnalyser=this.ctx.createAnalyser(),this.ghostAnalyser.fftSize=256,this.ghostGain.connect(this.ghostAnalyser),this.ghostAnalyser.connect(this.masterGain)}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}playKick(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),t.connect(i),i.connect(this.kickGain),t.start(),t.stop(this.ctx.currentTime+.3)}playHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=8e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.05,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.hihatGain),t.start()}playSnare(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.1,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=1;const d=this.ctx.createGain();d.gain.setValueAtTime(.1,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.connect(c),c.connect(d),d.connect(this.snareGain),t.start()}playGhostHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=12e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.02,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.ghostGain),t.start()}playLead(t,i){this.resume();const s=this.ctx.currentTime,l=[this.ctx.createOscillator(),this.ctx.createOscillator(),this.ctx.createOscillator()],c=this.ctx.createGain(),d=this.ctx.createBiquadFilter();l[0].type="sawtooth",l[1].type="sawtooth",l[2].type="sawtooth",l[0].frequency.setValueAtTime(t,s),l[1].frequency.setValueAtTime(t*1.005,s),l[2].frequency.setValueAtTime(t*.995,s),d.type="lowpass";const h=t*3+i*50;d.frequency.setValueAtTime(h,s),d.frequency.exponentialRampToValueAtTime(t*.5,s+.35),d.Q.value=12,c.gain.setValueAtTime(.06,s),c.gain.exponentialRampToValueAtTime(.001,s+.4),l.forEach(m=>{m.connect(d),m.start(s),m.stop(s+.4)}),d.connect(c),c.connect(this.leadGain)}playBass(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter();l.type="sawtooth",c.type="sine",l.frequency.setValueAtTime(t,s),c.frequency.setValueAtTime(t*.5,s),h.type="lowpass";const m=200+Math.min(i,30)*150;h.frequency.setValueAtTime(m,s),h.frequency.exponentialRampToValueAtTime(100,s+.15),h.Q.value=20,d.gain.setValueAtTime(.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.15),l.connect(h),c.connect(h),h.connect(d),d.connect(this.bassGain),l.start(s),c.start(s),l.stop(s+.15),c.stop(s+.15)}playSuccess(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter(),p=(i?440:880)+t%8*110;l.type="sawtooth",c.type="square",l.frequency.setValueAtTime(p,s),c.frequency.setValueAtTime(p*2.01,s),h.type="highpass",h.frequency.setValueAtTime(2e3,s),h.frequency.exponentialRampToValueAtTime(8e3,s+.1),d.gain.setValueAtTime(i?.03:.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.2),l.connect(h),c.connect(h),h.connect(d),d.connect(this.masterGain),l.start(s),c.start(s),l.stop(s+.2),c.stop(s+.2)}playError(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(30,this.ctx.currentTime+.2),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.2)}getAnalysers(){return{master:this.masterAnalyser,kick:this.kickAnalyser,bass:this.bassAnalyser,hihat:this.hihatAnalyser,snare:this.snareAnalyser,lead:this.leadAnalyser,ghost:this.ghostAnalyser}}getEnergy(){if(!this.masterAnalyser)return 0;const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);let i=0;for(let s=0;s<t.length;s++)i+=t[s];return i/t.length/255}getFrequencyBands(){if(!this.masterAnalyser)return{bass:0,mid:0,high:0};const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);const i=t.length,s=Math.floor(i*.1),l=Math.floor(i*.5);let c=0,d=0,h=0;for(let m=0;m<s;m++)c+=t[m];for(let m=s;m<l;m++)d+=t[m];for(let m=l;m<i;m++)h+=t[m];return{bass:c/(s||1)/255,mid:d/(l-s||1)/255,high:h/(i-l||1)/255}}}class AA{constructor(t,i){this.intervalId=null,this.step=0,this.comboMultiplier=1,this.audioSystem=t,this.currentStyle=i}setStyle(t){!!this.intervalId&&this.stop(),this.currentStyle=t,this.step=0}setMultiplier(t){this.comboMultiplier=t}start(t){if(this.intervalId)return;const s=60/this.currentStyle.bpm/4;this.intervalId=window.setInterval(()=>{const l=t(),c=this.step%16;if(l>0){const d=l*this.comboMultiplier;this.currentStyle.layers.forEach(h=>{d>=h.minCombo&&(h.maxCombo===void 0||d<=h.maxCombo)&&h.pattern(c)&&h.play(this.audioSystem,c,l)})}this.step++},s*1e3)}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}const Fv={es:{basico:["El veloz murciélago hindú comía feliz cardillo y kiwi.","La constancia es la clave del éxito en cualquier disciplina.","Mañana será un gran día para aprender algo nuevo.","Caminar por la playa al atardecer es muy relajante.","La mecanografía veloz requiere práctica diaria y paciencia."],programacion:["const pipeline = (data) => data.map(x => x * 2);","function initApp() { return new Promise(resolve => {}); }","export default class MyComponent extends React.Component {","if (process.env.NODE_ENV === 'production') { console.log('Live'); }","const { name, version } = JSON.parse(fs.readFileSync('package.json'));"],teclas_raras:["¿Viste cómo el pingüino corría hacia el iglú? ¡Increíble!","Los caracteres [ corchetes ] y { llaves } son vitales en JSON.","El símbolo ~ (tilde de la ñ) y ^ (circunflejo) son poco usados.","La ruta C:\\Users\\Admin\\Documents/test.txt usa barras inversas.","¿Sabías que 2^10 es igual a 1024? ¡Es potencia binaria!"],acentuacion:["El capitán pidió un café exprés y un té tras el festín en el jardín.","Álvaro compró un jarrón de mármol azul y un sillón ortopédico.","Sé que él no te dio el libro, pero tú aún no sabes qué pasó allí.","El murciélago sobrevoló el área de forma frenética y enigmática.","Raúl leía la biografía de un héroe que vivía en un país lejano.","¿Cuándo vendrás? Dime si el examen de matemáticas fue difícil o fácil.","El árbol de caoba creció rápido gracias al fértil césped del jardín.","Sólo tú sabes qué es lo que más te conviene para el próximo decenio.","Ojalá el médico apruebe el análisis del líquido cefalorraquídeo hoy.","Escribía con ímpetu mientras el búho observaba desde el ático vacío."]},en:{basico:["The quick brown fox jumps over the lazy dog.","Consistency is more important than intensity.","Every day is a second chance to improve your skills.","Reading books opens your mind to new perspectives.","Success is the sum of small efforts repeated daily."],programacion:["const fetchData = async (url) => await fetch(url).json();","git commit -m 'feat: add localization to phrase system'","while (true) { if (battery < 20) break; }","import { useState, useEffect } from 'react';","array.reduce((acc, curr) => acc + curr, 0);"],teclas_raras:["Wait! Did you see the [bracketed] text in the {curly} braces?","The pipe | symbol is used for redirects in Linux terminals.","Is it true that 5 > 3 and 2 < 4? Let's check logic!","Type 'cd ../../' to go back two directories in the shell.","The #hashtag is used for comments in many config files."],acentuacion:["The résumé of the employé was impeccable and very detailed.","She visited the café to drink a frappé during her vacation.","The façade of the building had a beautiful décor in the façade.","Please cooperate with the naïve protégé during the soirée.","It is a cliché to say that the jalapeño is very spicy."]},fr:{basico:["Portez ce vieux vieux vieux vieux vieux vieux vieux vieux vieux.","La vie est belle quand on prend le temps de l'apprécier.","Apprendre à taper vite demande de la rigueur et du temps.","Le succès est le fruit d'un travail acharné et constant.","Chaque jour est une nouvelle opportunité de grandir."],programacion:["let reponse = await prompt('Voulez-vous continuer ?');","const config = { langue: 'fr', theme: 'sombre' };","console.error(`Erreur fatale : ${error.message}`);","for (let i = 0; i < liste.length; i++) { doSomething(); }","document.querySelector('.app').addEventListener('click', e => {});"],teclas_raras:["L'élève a-t-il reçu ses 100€ pour son déjeuner ?","Regardez l'icône { } et [ ] dans l'éditeur de code.","Le carácter ~ est rare, tout comme le symbole | (pipe).","Utilisez-vous souvent el guion bajo _ o el guion medio - ?","Attention aux caractères spéciaux comme ^ y ¨ !"],acentuacion:["L'événement théâtral a été un succès grâce à l'héroïne.","Où est le garçon qui a mangé le gâteau à la crème fraîche ?","C'est l'été, le maïs mûrit sous le château de la forêt.","L'étudiant a étudié l'algèbre et la géométrie à l'école.","Il paraît que le poète déteste les huîtres et le thé glacé."]}},CA=(r,t,i=5)=>{var m;let s="basico";const l=t.toLowerCase();(l.includes("raras")||l.includes("especial"))&&(s="teclas_raras"),(l.includes("progra")||l.includes("código"))&&(s="programacion"),(l.includes("acent")||l.includes("ácent"))&&(s="acentuacion");const d=[...((m=Fv[r])==null?void 0:m[s])||Fv.es.basico].sort(()=>Math.random()-.5),h=[];for(;h.length<i;)h.push(...d);return h.slice(0,i)},Xs=[{id:"alpine",name:"Alpino",r:162,g:173,b:145,scheme:"dark"},{id:"ocean",name:"Océano",r:90,g:150,b:220,scheme:"dark"},{id:"crimson",name:"Carmesí",r:220,g:80,b:80,scheme:"dark"},{id:"amethyst",name:"Amatista",r:160,g:100,b:200,scheme:"dark"},{id:"amber",name:"Ámbar",r:240,g:180,b:60,scheme:"dark"},{id:"frost",name:"Frosty (Light)",r:100,g:149,b:237,scheme:"light"},{id:"emerald",name:"Esmeralda",r:16,g:185,b:129,scheme:"dark"}];class RA{constructor(){this.currentTheme=Xs[0]}getCurrentTheme(){return this.currentTheme}setTheme(t){const i=Xs.find(s=>s.id===t);i&&(this.currentTheme=i,this.applyThemeToDocument(i))}applyThemeToDocument(t,i={}){const s=document.documentElement;s.style.setProperty("--theme-r",t.r.toString()),s.style.setProperty("--theme-g",t.g.toString()),s.style.setProperty("--theme-b",t.b.toString()),s.style.setProperty("--accent-primary",`rgb(${t.r}, ${t.g}, ${t.b})`),s.style.setProperty("--accent-glow",`rgba(${t.r}, ${t.g}, ${t.b}, 0.4)`);const l=i.forceScheme||t.scheme||"dark";if(s.setAttribute("data-color-scheme",l),l==="light")s.style.setProperty("--bg-app","#f0f2f5"),s.style.setProperty("--text-primary","#1a1a1b"),s.style.setProperty("--text-secondary","#4b5563"),s.style.setProperty("--bg-glass","rgba(255, 255, 255, 0.7)"),s.style.setProperty("--bg-glass-strong","rgba(255, 255, 255, 0.85)"),s.style.setProperty("--border-glass","rgba(0, 0, 0, 0.1)"),s.style.setProperty("--bg-tint","transparent");else{if(i.isPureBlack)s.style.setProperty("--bg-app","#020202"),s.style.setProperty("--bg-tint","transparent");else{const c=Math.floor(t.r*.12),d=Math.floor(t.g*.12),h=Math.floor(t.b*.12);s.style.setProperty("--bg-app",`rgb(${c}, ${d}, ${h})`);const m=i.forceScheme?.15:t.bgAlpha??.35;s.style.setProperty("--bg-tint",`rgba(${t.r}, ${t.g}, ${t.b}, ${m})`)}s.style.setProperty("--text-primary","#ffffff"),s.style.setProperty("--text-secondary","#9ca3af"),s.style.setProperty("--bg-glass","rgba(0, 0, 0, 0.4)"),s.style.setProperty("--bg-glass-strong","rgba(0, 0, 0, 0.7)"),s.style.setProperty("--border-glass","rgba(255, 255, 255, 0.1)")}}getAllThemes(){return Xs}}class wA{processInput(t,i,s,l,c,d){const h=t.length-1;if(h<0)return{stats:{wpm:0,accuracy:100,mistakes:0,totalChars:0},combo:0,isCorrect:!0,isPhraseComplete:!1};const m=t[h],p=i[h];let v=m===p,g=l,y=c;return!v&&!d?(g++,y=0):v?(m===" "||h===i.length-1)&&y++:d&&(v=!0),{stats:this.calculateStats(s||Date.now(),t,i,g),combo:y,isCorrect:v,isPhraseComplete:t===i}}calculateStats(t,i,s,l){const c=(Date.now()-t)/6e4,d=i.length;let h=0;for(let v=0;v<i.length;v++)i[v]===s[v]&&h++;const m=Math.round(h/5/(c||.001))||0,p=d>0?Math.round((d-l)/d*100):100;return{wpm:m,accuracy:p,mistakes:l,totalChars:d}}calculateScore(t,i){return Math.floor(t*(i/100)*10)}isCharCorrect(t,i,s){return t===s[i]}}class DA{async getPhrases(t,i){return[]}getZenPhrases(){return dA}}class NA{constructor(){this.SCORE_KEY="typ_total_score"}getScore(){return Number(localStorage.getItem(this.SCORE_KEY)||0)}saveScore(t){localStorage.setItem(this.SCORE_KEY,t.toString())}}const UA=(r,t,i,s)=>{const[l,c]=xe.useState([]),[d,h]=xe.useState(0),[m,p]=xe.useState(""),[v,g]=xe.useState({wpm:0,accuracy:100,mistakes:0,totalChars:0}),[y,S]=xe.useState(null),[E,A]=xe.useState(!1),[b,x]=xe.useState(0),[D,N]=xe.useState(()=>t.getScore()),[U,L]=xe.useState(!1),[z,B]=xe.useState(null),V=xe.useCallback((Y,Q)=>{const le=Number(localStorage.getItem(`typ_progress_${Y}`)||0);Q>le&&localStorage.setItem(`typ_progress_${Y}`,Math.round(Q).toString())},[]),T=l[d]||"",w=xe.useCallback(()=>{p(""),S(null),A(!1),x(0),g({wpm:0,accuracy:100,mistakes:0,totalChars:0})},[]),X=xe.useCallback(Y=>{var k,$,Ee;if(E)return;let Q=y;!Q&&Y.length>0&&(Q=Date.now(),S(Q));const le=m.length;if(Y.length<le){p(Y);return}const I=i.processInput(Y,T,Q,v.mistakes,b,U);if(p(Y),g(I.stats),x(I.combo),I.isCorrect){const me=Y[Y.length-1];(k=s==null?void 0:s.onCorrectChar)==null||k.call(s,me,I.combo)}else($=s==null?void 0:s.onErrorChar)==null||$.call(s,Y[Y.length-1]);if(I.isPhraseComplete)if((Ee=s==null?void 0:s.onPhraseComplete)==null||Ee.call(s,T),U){const me=i.calculateScore(I.stats.wpm,I.stats.accuracy),P=D+me;N(P),t.saveScore(P);const ee=r.getZenPhrases(),pe=ee[Math.floor(Math.random()*ee.length)];setTimeout(()=>{c([pe]),h(0),p("")},50)}else if(d<l.length-1){if(z){const me=(d+1)/l.length*100;V(z,me)}setTimeout(()=>{h(me=>me+1),p("")},50)}else z&&V(z,100),A(!0)},[E,y,m.length,T,v.mistakes,b,U,i,s,d,l.length,D,t,r]);return xe.useEffect(()=>{if(y&&!E&&m.length>0){const Y=setInterval(()=>{const Q=i.calculateStats(y,m,T,v.mistakes);g(le=>({...le,wpm:Q.wpm,accuracy:Q.accuracy}))},1e3);return()=>clearInterval(Y)}},[y,E,m,T,v.mistakes,i]),{phrases:l,setPhrases:c,phraseIndex:d,setPhraseIndex:h,currentPhrase:T,typedText:m,setTypedText:p,processNewValue:X,stats:v,setStats:g,combo:b,setCombo:x,score:D,setScore:N,isFinished:E,setIsFinished:A,startTime:y,setStartTime:S,isInfiniteMode:U,setIsInfiniteMode:L,currentLevelId:z,setCurrentLevelId:B,restart:w}},S_=Zi.memo(({inputRef:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c})=>O.jsx("textarea",{ref:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c,className:"absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[-1] caret-transparent cursor-none resize-none m-0 p-0 border-0 outline-none",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",tabIndex:0}));S_.displayName="HiddenInput";const zv=new RA,LA=()=>{const[r,t]=xe.useState(Xs[0]),[i,s]=xe.useState(!1),[l,c]=xe.useState(null),[d,h]=xe.useState("es"),[m,p]=xe.useState("Básico"),v=xe.useMemo(()=>new DA,[]),g=xe.useMemo(()=>new NA,[]),y=xe.useMemo(()=>new wA,[]),{phrases:S,setPhrases:E,phraseIndex:A,setPhraseIndex:b,currentPhrase:x,typedText:D,setTypedText:N,processNewValue:U,stats:L,combo:z,setCombo:B,score:V,isFinished:T,setIsFinished:w,startTime:X,setStartTime:Y,setCurrentLevelId:Q,restart:le}=UA(v,g,y,{onCorrectChar:(se,be)=>{var Le;Tt&&se===" "&&((Le=Kn.current)==null||Le.playSuccess(be,!1))},onErrorChar:()=>{var se;Tt&&((se=Kn.current)==null||se.playError()),me(!0)},onPhraseComplete:()=>{me(!1),ut.current&&(ut.current.value="")}}),[he,I]=xe.useState(""),[k,$]=xe.useState(!1),[Ee,me]=xe.useState(!1),[P,ee]=xe.useState(!0),[pe,we]=xe.useState(1),[Fe,te]=xe.useState(!1),[ue,Ce]=xe.useState(!1),[Te,Oe]=xe.useState("mac");xe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",pe.toString()),zv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,pe,i,l]);const[Je,ct]=xe.useState("config"),[et,it]=xe.useState(!1),[rt,ot]=xe.useState(!0),[Et,G]=xe.useState(Qo),[Tt,gt]=xe.useState(!0),[pt,Ke]=xe.useState(1),[F,M]=xe.useState(!1),[W,ve]=xe.useState({bass:0,mid:0,high:0}),[Me,de]=xe.useState(!1),[je,Pe]=xe.useState(!1),We=xe.useRef(null),[at,Re]=xe.useState(!1),[De,Xe]=xe.useState({x:0,y:0,z:20}),[Ve,ze]=xe.useState({x:0,y:0,z:0}),[mt,j]=xe.useState(180),[He,Ne]=xe.useState({...x_,type:"circle"}),[Ge,Ae]=xe.useState(!1),[ye,Ue]=xe.useState([]),[lt,It]=xe.useState(!1),ut=xe.useRef(null),on=xe.useRef(null),Vn=xe.useRef(!1),Na=xe.useRef(""),Kn=xe.useRef(null),zn=xe.useRef(null),$i=xe.useRef(z),[Pi,hs]=xe.useState(!1),[li,Sn]=xe.useState(30),[Wt,_n]=xe.useState(30),[Un,ps]=xe.useState(!1),[Ua,js]=xe.useState(""),[La,Fi]=xe.useState(0),Mi=xe.useMemo(()=>{var Ye,Be,tt;const se=((Ye=Vs.find(St=>St.id==="fase_1"))==null?void 0:Ye.levels)||[],be=((Be=Vs.find(St=>St.id==="fase_2"))==null?void 0:Be.levels)||[],Le=((tt=Vs.find(St=>St.id==="fase_3"))==null?void 0:tt.levels)||[];return[...se,...be,...Le]},[]);xe.useEffect(()=>{if(je){de(!0);const se=Mi;if(se.length===0)return;const be=se[La%se.length];be&&(Ue(be.keys),E(be.phrases),js(be.title.replace(/^Pares: |^\d+\.\s+/g,"")),N(""),Na.current="",b(0),B(Le=>{const Ye=Et.layers.filter(Be=>Be.minCombo<=Le).sort((Be,tt)=>tt.minCombo-Be.minCombo);if(Ye.length>0){const Be=Ye[0].minCombo-1;return Math.max(0,Be)}return 0}),me(!1),ut.current&&(ut.current.value=""),setTimeout(()=>{var Le;return(Le=ut.current)==null?void 0:Le.focus()},10))}},[je,La,Et]),xe.useEffect(()=>{if(!je){We.current&&(clearInterval(We.current),We.current=null),Sn(Wt);return}const se=Mi;Sn(Wt);const be=setInterval(()=>{Sn(Le=>Le<=1?(Fi(Ye=>{if(Un){let Be=Math.floor(Math.random()*se.length);return se.length>1&&Be===Ye&&(Be=(Be+1)%se.length),Be}return(Ye+1)%se.length}),Wt):Le-1)},1e3);return We.current=be,()=>clearInterval(be)},[je,Wt,Un,Mi]);const zi=xe.useCallback(()=>{if(!je)return;const se=Mi;Fi(be=>Un?Math.floor(Math.random()*se.length):(be+1)%se.length),Sn(Wt)},[je,Un,Wt,Mi]),Ei=xe.useMemo(()=>D.normalize("NFC"),[D]),ea=xe.useMemo(()=>{const se=x.split(" "),be=D.split(" "),Le=Math.min(be.length-1,se.length-1),Ye=se[Le]||"",Be=be[be.length-1]||"";return{word:Ye,userTypedSlice:Be}},[x,D]),Qn=xe.useMemo(()=>T||P?"":D.length<x.length?x[D.length]:"",[x,D,T,P]),C=xe.useMemo(()=>Qn&&en[Qn.toLowerCase()]||null,[Qn]);xe.useEffect(()=>{$i.current=z},[z]),xe.useEffect(()=>{const se=new TA;return Kn.current=se,zn.current=new AA(se,Et),hs(!0),()=>{var be;(be=zn.current)==null||be.stop()}},[]),xe.useEffect(()=>{var se,be;rt&&Pi?(se=zn.current)==null||se.start(()=>$i.current):(be=zn.current)==null||be.stop()},[rt,Pi]),xe.useEffect(()=>{zn.current&&(zn.current.setStyle(Et),zn.current.setMultiplier(pt),rt&&zn.current.start(()=>$i.current))},[Et,rt,pt]),xe.useEffect(()=>{let se;const be=()=>{Kn.current?ve(Kn.current.getFrequencyBands()):ve({bass:0,mid:0,high:0}),se=requestAnimationFrame(be)};return se=requestAnimationFrame(be),()=>cancelAnimationFrame(se)},[]),xe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",pe.toString()),zv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,pe,i,l]),xe.useEffect(()=>{const se=()=>{!Fe&&!ue&&!P&&!T&&document.activeElement!==on.current&&setTimeout(()=>{var be;return(be=ut.current)==null?void 0:be.focus()},10)};return window.addEventListener("click",se),window.addEventListener("focus",se),()=>{window.removeEventListener("click",se),window.removeEventListener("focus",se)}},[Fe,ue,P,T]),xe.useEffect(()=>{(async()=>{ee(!0),de(!1);const be=CA(d,m,10);E(be.map(Le=>Le.normalize("NFC"))),N(""),Na.current="",b(0),B(0),me(!1),ut.current&&(ut.current.value=""),ee(!1),m==="Básico"&&Q(null)})()},[d,m]),xe.useRef(!1),xe.useEffect(()=>{let se;return()=>clearInterval(se)},[je]),xe.useEffect(()=>{},[A,S.length,d,m,P,Me]);const Z=xe.useCallback(se=>{const be=se.currentTarget.value.normalize("NFC");U(be)},[U]),ce=xe.useCallback(()=>{Vn.current=!0,Re(!0)},[]),ae=xe.useCallback(se=>{Vn.current=!1,Re(!1);const be=se.currentTarget.value.normalize("NFC");N(be)},[]),J=xe.useCallback(se=>{var be;I(se.key),setTimeout(()=>I(""),150),(be=Kn.current)==null||be.resume()},[]),Ie=se=>`w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${se?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]":"bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]"}`,qe=xe.useCallback((se,be)=>{!se||se.length===0||(de(!0),be&&Q(be),E(se.map(Le=>Le.normalize("NFC"))),N(""),Na.current="",b(0),B(0),me(!1),ut.current&&(ut.current.value=""),Y(null),w(!1),ee(!1),$(!0),setTimeout(()=>{var Le;return(Le=ut.current)==null?void 0:Le.focus()},10))},[Q,E,N,b,B,Y,w,ee]);return O.jsxs("div",{className:"min-h-screen relative flex flex-row items-stretch overflow-hidden transition-colors duration-500",style:{transform:`scale(${pe})`,transformOrigin:"center center",width:"100%",height:"100%"},children:[O.jsx(S_,{inputRef:ut,onInput:Z,onCompositionStart:ce,onCompositionEnd:ae,onKeyDown:J,onBlur:()=>Re(!1)}),O.jsx("input",{type:"color",ref:on,onChange:se=>{const be=se.target.value,Le=parseInt(be.slice(1,3),16),Ye=parseInt(be.slice(3,5),16),Be=parseInt(be.slice(5,7),16);t({id:"custom",name:"Custom",r:Le,g:Ye,b:Be})},className:"fixed opacity-0 pointer-events-none -z-10"}),O.jsx("button",{onClick:()=>te(!0),className:`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${Fe?"translate-x-[-100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"})}),O.jsx("button",{onClick:()=>Ce(!0),className:`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${ue?"translate-x-[100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"})}),O.jsx("div",{className:`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${Fe||ue?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>{te(!1),Ce(!1)}}),O.jsx(MA,{isOpen:Fe,onClose:()=>te(!1),language:d,onLanguageChange:h,currentMusicStyle:Et,onMusicStyleChange:G,TECHNO_STYLE:Qo,AMBIENT_STYLE:Nh,ACID_HOUSE_STYLE:Uh,getBtnClass:Ie,themes:Xs,currentTheme:r,onThemeChange:t}),O.jsx(EA,{isOpen:ue,onClose:()=>Ce(!1),targetKeyData:C,onSelectLevel:Ue,onSelectPhrases:qe,themes:Xs,currentTheme:r,onThemeChange:t,focus:m,onFocusChange:p,getBtnClass:Ie,currentMusicStyle:Et,onMusicStyleChange:G,TECHNO_STYLE:Qo,AMBIENT_STYLE:Nh,ACID_HOUSE_STYLE:Uh,isInfiniteMode:!1,onToggleZenMode:()=>{},score:V}),O.jsx("main",{className:"flex-grow flex flex-col items-center justify-center p-4 pt-2 relative transition-all duration-500",style:{opacity:Fe||ue?.3:1},children:O.jsxs("div",{className:"w-full max-w-5xl flex flex-col items-center gap-4 relative",children:[!P&&!T&&O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsxs("div",{className:"w-full theme-glass backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:[O.jsx(hA,{currentPhrase:x,normalizedTypedText:Ei,currentWordInfo:ea,isComposingState:at,palette:r.id,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:W,birdRotation:De,birdPos3D:Ve,birdSize:mt,visualsConfig:He,combo:z,comboMultiplier:pt,isMusicLightingEnabled:F,PALETTE_COLORS:{},isCircuitMode:je,circuitTimer:li,circuitTitle:Ua,onCircuitCycle:zi,onDimensionalMenu:se=>{Ae(!Ge)},isLevelActive:k,onSelectLevel:se=>qe(se.phrases,se.id),themeScheme:l==="light"||r.scheme==="light"&&!l?"light":r.scheme,currentMusicStyle:Et,onMusicStyleChange:G,currentLevelProgress:x.length>0?Math.min(100,Math.round(Ei.length/x.length*100)):0,currentLevelScore:V,currentLevelAccuracy:L.accuracy}),k&&O.jsxs("button",{onClick:()=>$(!1),className:"absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all hover:scale-110 active:scale-95 group shadow-2xl backdrop-blur-xl",title:"Volver al Selector",children:[O.jsx("i",{className:"fa fa-home text-xl transition-transform group-hover:rotate-12"}),O.jsx("div",{className:"absolute top-[-30px] right-0 bg-[var(--bg-floating)] px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",children:"Volver"})]}),O.jsx(bA,{keyboardType:Te,activeKey:he,targetChar:Qn,showZones:et,isMusicLightingEnabled:F,frequencyBands:W,stats:L,isZenMode:!1,score:V,onRestart:le,onZenToggle:()=>{},audioReady:Pi,audioSystem:Kn.current,currentMusicStyle:Et,startTime:X,isFinished:T,combo:z,comboMultiplier:pt,onDimensionalMenu:se=>{Ae(!Ge)},hexToRgba:(se,be)=>`rgba(${r.r}, ${r.g}, ${r.b}, ${be})`,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,highlightedKeys:ye,isWaveActive:lt})]})}),O.jsx("div",{className:`fixed theme-glass backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${Ge?"opacity-100 scale-y-100 pointer-events-auto":"opacity-0 scale-y-95 pointer-events-none"}`,style:{right:"4.5rem",bottom:"6.5rem",width:"180px",transformOrigin:"top right"},children:O.jsxs("div",{className:"flex flex-col divide-y divide-[var(--border-glass)] max-h-[400px] overflow-y-auto custom-scrollbar",children:[O.jsxs("div",{className:"p-4 bg-[var(--accent-primary)]/5 border-b border-[var(--border-glass)]",children:[O.jsx("div",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60",children:"Puntos Totales"}),O.jsx("div",{className:"text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums",children:V.toLocaleString()})]}),O.jsxs("div",{className:"p-4",children:[O.jsxs("div",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2",children:[O.jsx("i",{className:"fa fa-paint-brush"}),O.jsx("span",{children:"Personalización"})]}),O.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[Xs.map(se=>O.jsx("button",{onClick:()=>t(se),className:`w-full aspect-square rounded-full border-2 transition-all duration-300 flex items-center justify-center ${r.id===se.id?"border-[var(--accent-primary)] ring-2 ring-[var(--accent-glow)]":"border-white/10 hover:border-white/40"}`,style:{backgroundColor:`rgb(${se.r}, ${se.g}, ${se.b})`},title:se.name,children:r.id===se.id&&O.jsx("i",{className:"fa fa-check text-[10px] text-white mix-blend-difference"})},se.id)),O.jsx("button",{onClick:()=>{var se;return(se=on.current)==null?void 0:se.click()},className:"w-full aspect-square rounded-full border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-all font-bold text-[18px] text-[var(--text-secondary)]",title:"Color Personalizado",children:"+"})]})]}),O.jsxs("div",{className:"px-4 py-3 space-y-3",children:[O.jsxs("div",{onClick:()=>s(!i),className:"flex items-center justify-between cursor-pointer group",children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Negro Puro"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${i?"bg-[var(--accent-primary)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${i?"left-4.5":"left-0.5"}`})})]}),O.jsx("div",{onClick:()=>{const se=l==="light"||r.scheme==="light"&&l===null;c(se?"dark":"light")},className:"flex items-center justify-between cursor-pointer group",children:(()=>{const se=l==="light"||r.scheme==="light"&&!l;return O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Día"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${se?"bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${se?"left-4.5":"left-0.5"}`})})]})})()})]}),O.jsxs("button",{onClick:()=>{gt(!Tt)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${Tt?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-keyboard-o w-4"}),O.jsx("span",{children:"Sonido"})]}),O.jsxs("button",{onClick:()=>{ot(!rt)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${rt?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-music w-4"}),O.jsx("span",{children:"Música"})]}),O.jsxs("button",{onClick:()=>{M(!F)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${F?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-lightbulb-o w-4"}),O.jsx("span",{children:"Luces"})]}),O.jsxs("button",{onClick:()=>{it(!et)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${et?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-hand-paper-o w-4"}),O.jsx("span",{children:"Guía"})]})]})})]})}),O.jsx("footer",{className:"fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none",children:"ALPINE_ECODECOR_PRO // 2025"})]})};console.log("OveTyp_ entry point loaded");class OA extends Zi.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,i){console.error("React Error Boundary caught:",t,i)}render(){var t,i;return this.state.hasError?O.jsxs("div",{style:{color:"white",padding:"2rem",fontFamily:"monospace"},children:[O.jsx("h1",{children:"⚠️ App Error"}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#ff6b6b"},children:(t=this.state.error)==null?void 0:t.message}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#aaa",fontSize:"12px"},children:(i=this.state.error)==null?void 0:i.stack})]}):this.props.children}}const Yh=document.getElementById("root");console.log("Root element found:",!!Yh);if(!Yh)throw new Error("Could not find root element to mount to");const PA=Fy.createRoot(Yh);PA.render(O.jsx(Zi.StrictMode,{children:O.jsx(OA,{children:O.jsx(LA,{})})}));
