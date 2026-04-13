(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ad={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Oy(){if(P0)return Go;P0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var F0;function Py(){return F0||(F0=1,ad.exports=Oy()),ad.exports}var O=Py(),sd={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function Fy(){if(z0)return gt;z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function x(z,Q,de){this.props=z,this.context=Q,this.refs=b,this.updater=de||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,Q){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Q,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=x.prototype;function L(z,Q,de){this.props=z,this.context=Q,this.refs=b,this.updater=de||E}var D=L.prototype=new N;D.constructor=L,A(D,x.prototype),D.isPureReactComponent=!0;var U=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function T(z,Q,de){var me=de.ref;return{$$typeof:r,type:z,key:Q,ref:me!==void 0?me:null,props:de}}function R(z,Q){return T(z.type,Q,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function X(z){var Q={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(de){return Q[de]})}var J=/\/+/g;function ne(z,Q){return typeof z=="object"&&z!==null&&z.key!=null?X(""+z.key):Q.toString(36)}function re(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(Q){z.status==="pending"&&(z.status="fulfilled",z.value=Q)},function(Q){z.status==="pending"&&(z.status="rejected",z.reason=Q)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,Q,de,me,Ue){var Z=typeof z;(Z==="undefined"||Z==="boolean")&&(z=null);var ie=!1;if(z===null)ie=!0;else switch(Z){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(z.$$typeof){case r:case e:ie=!0;break;case v:return ie=z._init,I(ie(z._payload),Q,de,me,Ue)}}if(ie)return Ue=Ue(z),ie=me===""?"."+ne(z,0):me,U(Ue)?(de="",ie!=null&&(de=ie.replace(J,"$&/")+"/"),I(Ue,Q,de,"",function(Pe){return Pe})):Ue!=null&&(H(Ue)&&(Ue=R(Ue,de+(Ue.key==null||z&&z.key===Ue.key?"":(""+Ue.key).replace(J,"$&/")+"/")+ie)),Q.push(Ue)),1;ie=0;var Me=me===""?".":me+":";if(U(z))for(var be=0;be<z.length;be++)me=z[be],Z=Me+ne(me,be),ie+=I(me,Q,de,Z,Ue);else if(be=S(z),typeof be=="function")for(z=be.call(z),be=0;!(me=z.next()).done;)me=me.value,Z=Me+ne(me,be++),ie+=I(me,Q,de,Z,Ue);else if(Z==="object"){if(typeof z.then=="function")return I(re(z),Q,de,me,Ue);throw Q=String(z),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function G(z,Q,de){if(z==null)return z;var me=[],Ue=0;return I(z,me,"","",function(Z){return Q.call(de,Z,Ue++)}),me}function $(z){if(z._status===-1){var Q=z._result;Q=Q(),Q.then(function(de){(z._status===0||z._status===-1)&&(z._status=1,z._result=de)},function(de){(z._status===0||z._status===-1)&&(z._status=2,z._result=de)}),z._status===-1&&(z._status=0,z._result=Q)}if(z._status===1)return z._result.default;throw z._result}var ve=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xe={map:G,forEach:function(z,Q,de){G(z,function(){Q.apply(this,arguments)},de)},count:function(z){var Q=0;return G(z,function(){Q++}),Q},toArray:function(z){return G(z,function(Q){return Q})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return gt.Activity=g,gt.Children=xe,gt.Component=x,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=L,gt.StrictMode=s,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,gt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},gt.cache=function(z){return function(){return z.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(z,Q,de){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var me=A({},z.props),Ue=z.key;if(Q!=null)for(Z in Q.key!==void 0&&(Ue=""+Q.key),Q)!q.call(Q,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&Q.ref===void 0||(me[Z]=Q[Z]);var Z=arguments.length-2;if(Z===1)me.children=de;else if(1<Z){for(var ie=Array(Z),Me=0;Me<Z;Me++)ie[Me]=arguments[Me+2];me.children=ie}return T(z.type,Ue,me)},gt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},gt.createElement=function(z,Q,de){var me,Ue={},Z=null;if(Q!=null)for(me in Q.key!==void 0&&(Z=""+Q.key),Q)q.call(Q,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Ue[me]=Q[me]);var ie=arguments.length-2;if(ie===1)Ue.children=de;else if(1<ie){for(var Me=Array(ie),be=0;be<ie;be++)Me[be]=arguments[be+2];Ue.children=Me}if(z&&z.defaultProps)for(me in ie=z.defaultProps,ie)Ue[me]===void 0&&(Ue[me]=ie[me]);return T(z,Z,Ue)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(z){return{$$typeof:h,render:z}},gt.isValidElement=H,gt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:$}},gt.memo=function(z,Q){return{$$typeof:p,type:z,compare:Q===void 0?null:Q}},gt.startTransition=function(z){var Q=P.T,de={};P.T=de;try{var me=z(),Ue=P.S;Ue!==null&&Ue(de,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(F,ve)}catch(Z){ve(Z)}finally{Q!==null&&de.types!==null&&(Q.types=de.types),P.T=Q}},gt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},gt.use=function(z){return P.H.use(z)},gt.useActionState=function(z,Q,de){return P.H.useActionState(z,Q,de)},gt.useCallback=function(z,Q){return P.H.useCallback(z,Q)},gt.useContext=function(z){return P.H.useContext(z)},gt.useDebugValue=function(){},gt.useDeferredValue=function(z,Q){return P.H.useDeferredValue(z,Q)},gt.useEffect=function(z,Q){return P.H.useEffect(z,Q)},gt.useEffectEvent=function(z){return P.H.useEffectEvent(z)},gt.useId=function(){return P.H.useId()},gt.useImperativeHandle=function(z,Q,de){return P.H.useImperativeHandle(z,Q,de)},gt.useInsertionEffect=function(z,Q){return P.H.useInsertionEffect(z,Q)},gt.useLayoutEffect=function(z,Q){return P.H.useLayoutEffect(z,Q)},gt.useMemo=function(z,Q){return P.H.useMemo(z,Q)},gt.useOptimistic=function(z,Q){return P.H.useOptimistic(z,Q)},gt.useReducer=function(z,Q,de){return P.H.useReducer(z,Q,de)},gt.useRef=function(z){return P.H.useRef(z)},gt.useState=function(z){return P.H.useState(z)},gt.useSyncExternalStore=function(z,Q,de){return P.H.useSyncExternalStore(z,Q,de)},gt.useTransition=function(){return P.H.useTransition()},gt.version="19.2.4",gt}var I0;function zh(){return I0||(I0=1,sd.exports=Fy()),sd.exports}var fe=zh();const Da=Wv(fe);var rd={exports:{}},Vo={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function zy(){return B0||(B0=1,(function(r){function e(I,G){var $=I.length;I.push(G);e:for(;0<$;){var ve=$-1>>>1,xe=I[ve];if(0<l(xe,G))I[ve]=G,I[$]=xe,$=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var G=I[0],$=I.pop();if($!==G){I[0]=$;e:for(var ve=0,xe=I.length,z=xe>>>1;ve<z;){var Q=2*(ve+1)-1,de=I[Q],me=Q+1,Ue=I[me];if(0>l(de,$))me<xe&&0>l(Ue,de)?(I[ve]=Ue,I[me]=$,ve=me):(I[ve]=de,I[Q]=$,ve=Q);else if(me<xe&&0>l(Ue,$))I[ve]=Ue,I[me]=$,ve=me;else break e}}return G}function l(I,G){var $=I.sortIndex-G.sortIndex;return $!==0?$:I.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,_=3,S=!1,E=!1,A=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=I)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function U(I){if(A=!1,D(I),!E)if(i(m)!==null)E=!0,F||(F=!0,X());else{var G=i(p);G!==null&&re(U,G.startTime-I)}}var F=!1,P=-1,q=5,T=-1;function R(){return b?!0:!(r.unstable_now()-T<q)}function H(){if(b=!1,F){var I=r.unstable_now();T=I;var G=!0;try{e:{E=!1,A&&(A=!1,N(P),P=-1),S=!0;var $=_;try{t:{for(D(I),g=i(m);g!==null&&!(g.expirationTime>I&&R());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,_=g.priorityLevel;var xe=ve(g.expirationTime<=I);if(I=r.unstable_now(),typeof xe=="function"){g.callback=xe,D(I),G=!0;break t}g===i(m)&&s(m),D(I)}else s(m);g=i(m)}if(g!==null)G=!0;else{var z=i(p);z!==null&&re(U,z.startTime-I),G=!1}}break e}finally{g=null,_=$,S=!1}G=void 0}}finally{G?X():F=!1}}}var X;if(typeof L=="function")X=function(){L(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ne=J.port2;J.port1.onmessage=H,X=function(){ne.postMessage(null)}}else X=function(){x(H,0)};function re(I,G){P=x(function(){I(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var $=_;_=G;try{return I()}finally{_=$}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=_;_=I;try{return G()}finally{_=$}},r.unstable_scheduleCallback=function(I,G,$){var ve=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ve+$:ve):$=ve,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,I={id:v++,callback:G,priorityLevel:I,startTime:$,expirationTime:xe,sortIndex:-1},$>ve?(I.sortIndex=$,e(p,I),i(m)===null&&I===i(p)&&(A?(N(P),P=-1):A=!0,re(U,$-ve))):(I.sortIndex=xe,e(m,I),E||S||(E=!0,F||(F=!0,X()))),I},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(I){var G=_;return function(){var $=_;_=G;try{return I.apply(this,arguments)}finally{_=$}}}})(ld)),ld}var H0;function Iy(){return H0||(H0=1,od.exports=zy()),od.exports}var cd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function By(){if(G0)return zn;G0=1;var r=zh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},zn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},zn.useFormStatus=function(){return d.H.useHostTransitionStatus()},zn.version="19.2.4",zn}var V0;function Hy(){if(V0)return cd.exports;V0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cd.exports=By(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function Gy(){if(k0)return Vo;k0=1;var r=Iy(),e=zh(),i=Hy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case U:return"Suspense";case F:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ne(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return ne(t(n))}catch{}}return null}var re=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ve=[],xe=-1;function z(t){return{current:t}}function Q(t){0>xe||(t.current=ve[xe],ve[xe]=null,xe--)}function de(t,n){xe++,ve[xe]=t.current,t.current=n}var me=z(null),Ue=z(null),Z=z(null),ie=z(null);function Me(t,n){switch(de(Z,n),de(Ue,t),de(me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?a0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=a0(n),t=s0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(me),de(me,t)}function be(){Q(me),Q(Ue),Q(Z)}function Pe(t){t.memoizedState!==null&&de(ie,t);var n=me.current,a=s0(n,t.type);n!==a&&(de(Ue,t),de(me,a))}function Ze(t){Ue.current===t&&(Q(me),Q(Ue)),ie.current===t&&(Q(ie),zo._currentValue=$)}var ut,st;function at(t){if(ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+st}var mt=!1;function ot(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(pe){var ue=pe}Reflect.construct(t,[],we)}else{try{we.call()}catch(pe){ue=pe}t.call(we.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var V=y.split(`
`),oe=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===oe.length)for(o=V.length-1,u=oe.length-1;1<=o&&0<=u&&V[o]!==oe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==oe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==oe[u]){var Se=`
`+V[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function It(t,n){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return at("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=It(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Mt=Object.prototype.hasOwnProperty,ct=r.unstable_scheduleCallback,dt=r.unstable_cancelCallback,Ge=r.unstable_shouldYield,B=r.unstable_requestPaint,M=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,_e=r.unstable_UserBlockingPriority,le=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Be=r.unstable_IdlePriority,ke=r.log,$e=r.unstable_setDisableYieldValue,Ne=null,Re=null;function ze(t){if(typeof ke=="function"&&$e(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ne,t)}catch{}}var Fe=Math.clz32?Math.clz32:j,Te=Math.log,Xe=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Te(t)/Xe|0)|0}var Le=256,Oe=262144,je=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=De(o):(y&=C,y!==0?u=De(y):a||(a=C&~t,a!==0&&(u=De(a))))):(C=o&~f,C!==0?u=De(C):y!==0?u=De(y):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function pt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var t=je;return je<<=1,(je&62914560)===0&&(je=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function En(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qn(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(a=y&~a;0<a;){var Se=31-Fe(a),we=1<<Se;C[Se]=0,V[Se]=-1;var ue=oe[Se];if(ue!==null)for(oe[Se]=null,Se=0;Se<ue.length;Se++){var pe=ue[Se];pe!==null&&(pe.lane&=-536870913)}a&=~we}o!==0&&js(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function js(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Xs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function on(t,n){var a=n&-n;return a=(a&42)!==0?1:ta(a),(a&(t.suspendedLanes|n))!==0?0:a}function ta(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function na(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ia(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:C0(t.type))}function Tn(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ln=Math.random().toString(36).slice(2),en="__reactFiber$"+ln,nn="__reactProps$"+ln,$n="__reactContainer$"+ln,Oa="__reactEvents$"+ln,Ti="__reactListeners$"+ln,Ai="__reactHandles$"+ln,Ws="__reactResources$"+ln,fi="__reactMarker$"+ln;function Ys(t){delete t[en],delete t[nn],delete t[Oa],delete t[Ti],delete t[Ai]}function Ii(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[$n]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=d0(t);t!==null;){if(a=t[en])return a;t=d0(t)}return n}t=a,a=t.parentNode}return null}function Bi(t){if(t=t[en]||t[$n]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Hi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wi(t){var n=t[Ws];return n||(n=t[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(t){t[fi]=!0}var K=new Set,he={};function ce(t,n){te(t,n),te(t+"Capture",n)}function te(t,n){for(he[t]=n,t=0;t<n.length;t++)K.add(n[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),We={},Ve={};function Qe(t){return Mt.call(Ve,t)?!0:Mt.call(We,t)?!1:He.test(t)?Ve[t]=!0:(We[t]=!0,!1)}function nt(t,n,a){if(Qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function et(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Bt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function ye(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Je=/[\n"\\]/g;function Ye(t){return t.replace(Je,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xt(t,n,a,o,u,f,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ft(n)):t.value!==""+ft(n)&&(t.value=""+ft(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Zt(t,y,ft(n)):a!=null?Zt(t,y,ft(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+ft(C):t.removeAttribute("name")}function An(t,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Bt(t);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Bt(t)}function Zt(t,n,a){n==="number"&&Ce(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function di(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Vt(t,n,a){if(n!=null&&(n=""+ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ft(a):""}function Rn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(re(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ft(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Bt(t)}function yn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Dn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zs(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Nn(t,f,n[f])}function Ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return Nx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var eu=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Qs=null;function ip(t){var n=Bi(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;e:switch(t=n.stateNode,n.type){case"input":if(xt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[nn]||null;if(!u)throw Error(s(90));xt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&ye(o)}break e;case"textarea":Vt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&di(t,!!a.multiple,n,!1)}}}var nu=!1;function ap(t,n,a){if(nu)return t(n,a);nu=!0;try{var o=t(n);return o}finally{if(nu=!1,(Ks!==null||Qs!==null)&&(Wl(),Ks&&(n=Ks,t=Qs,Qs=Ks=null,ip(n),t)))for(n=0;n<t.length;n++)ip(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(sa)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){iu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{iu=!1}var Pa=null,au=null,ol=null;function sp(){if(ol)return ol;var t,n=au,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function rp(){return!1}function jn(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:rp,this.isPropagationStopped=rp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=jn(ms),to=g({},ms,{view:0,detail:0}),Ux=jn(to),su,ru,no,fl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(su=t.screenX-no.screenX,ru=t.screenY-no.screenY):ru=su=0,no=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),op=jn(fl),Lx=g({},fl,{dataTransfer:0}),Ox=jn(Lx),Px=g({},to,{relatedTarget:0}),ou=jn(Px),Fx=g({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=jn(Fx),Ix=g({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=jn(Ix),Hx=g({},ms,{data:0}),lp=jn(Hx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kx[t])?!!n[t]:!1}function lu(){return qx}var jx=g({},to,{key:function(t){if(t.key){var n=Gx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=jn(jx),Wx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=jn(Wx),Yx=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),Zx=jn(Yx),Kx=g({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=jn(Kx),Jx=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=jn(Jx),e_=g({},ms,{newState:0,oldState:0}),t_=jn(e_),n_=[9,13,27,32],cu=sa&&"CompositionEvent"in window,io=null;sa&&"documentMode"in document&&(io=document.documentMode);var i_=sa&&"TextEvent"in window&&!io,up=sa&&(!cu||io&&8<io&&11>=io),fp=" ",dp=!1;function hp(t,n){switch(t){case"keyup":return n_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function a_(t,n){switch(t){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(dp=!0,fp);case"textInput":return t=n.data,t===fp&&dp?null:t;default:return null}}function s_(t,n){if(Js)return t==="compositionend"||!cu&&hp(t,n)?(t=sp(),ol=au=Pa=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var r_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!r_[t.type]:n==="textarea"}function gp(t,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,so=null;function o_(t){Jg(t,0)}function dl(t){var n=Hi(t);if(ye(n))return t}function vp(t,n){if(t==="change")return n}var xp=!1;if(sa){var uu;if(sa){var fu="oninput"in document;if(!fu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),fu=typeof _p.oninput=="function"}uu=fu}else uu=!1;xp=uu&&(!document.documentMode||9<document.documentMode)}function yp(){ao&&(ao.detachEvent("onpropertychange",Sp),so=ao=null)}function Sp(t){if(t.propertyName==="value"&&dl(so)){var n=[];gp(n,so,t,tu(t)),ap(o_,n)}}function l_(t,n,a){t==="focusin"?(yp(),ao=n,so=a,ao.attachEvent("onpropertychange",Sp)):t==="focusout"&&yp()}function c_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(so)}function u_(t,n){if(t==="click")return dl(n)}function f_(t,n){if(t==="input"||t==="change")return dl(n)}function d_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:d_;function ro(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Mt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ce(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ce(t.document)}return n}function du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var h_=sa&&"documentMode"in document&&11>=document.documentMode,$s=null,hu=null,oo=null,pu=!1;function Ap(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||$s==null||$s!==Ce(o)||(o=$s,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=ec(hu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=$s)))}function gs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var er={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},mu={},wp={};sa&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function vs(t){if(mu[t])return mu[t];if(!er[t])return t;var n=er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return mu[t]=n[a];return t}var Cp=vs("animationend"),Rp=vs("animationiteration"),Dp=vs("animationstart"),p_=vs("transitionrun"),m_=vs("transitionstart"),g_=vs("transitioncancel"),Np=vs("transitionend"),Up=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ri(t,n){Up.set(t,n),ce(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],tr=0,vu=0;function pl(){for(var t=tr,n=vu=tr=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Lp(a,u,f)}}function ml(t,n,a,o){hi[tr++]=t,hi[tr++]=n,hi[tr++]=a,hi[tr++]=o,vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function xu(t,n,a,o){return ml(t,n,a,o),gl(t)}function xs(t,n){return ml(t,null,null,n),gl(t)}function Lp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<Do)throw Do=0,Cf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var nr={};function v_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new v_(t,n,a,o)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")_u(t)&&(y=1);else if(typeof t=="string")y=by(t,a,me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=ti(31,a,n,u),t.elementType=T,t.lanes=f,t;case A:return _s(a.children,u,f,n);case b:y=8,u|=24;break;case x:return t=ti(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case U:return t=ti(13,a,n,u),t.elementType=U,t.lanes=f,t;case F:return t=ti(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case N:y=9;break e;case D:y=11;break e;case P:y=14;break e;case q:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ti(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function _s(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function yu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Pp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Su(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Fp.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var ir=[],ar=0,xl=null,lo=0,mi=[],gi=0,Fa=null,Gi=1,Vi="";function oa(t,n){ir[ar++]=lo,ir[ar++]=xl,xl=t,lo=n}function zp(t,n,a){mi[gi++]=Gi,mi[gi++]=Vi,mi[gi++]=Fa,Fa=t;var o=Gi;t=Vi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Gi=1<<32-Fe(n)+u|a<<u|o,Vi=f+t}else Gi=1<<f|a<<u|o,Vi=t}function bu(t){t.return!==null&&(oa(t,1),zp(t,1,0))}function Mu(t){for(;t===xl;)xl=ir[--ar],ir[ar]=null,lo=ir[--ar],ir[ar]=null;for(;t===Fa;)Fa=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null}function Ip(t,n){mi[gi++]=Gi,mi[gi++]=Vi,mi[gi++]=Fa,Gi=n.id,Vi=n.overflow,Fa=t}var Un=null,Jt=null,Dt=!1,za=null,vi=!1,Eu=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(pi(n,t)),Eu}function Bp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[en]=t,n[nn]=o,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)At(Uo[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),An(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n0(n.textContent,a)?(o.popover!=null&&(At("beforetoggle",n),At("toggle",n)),o.onScroll!=null&&At("scroll",n),o.onScrollEnd!=null&&At("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Ia(t,!0)}function Hp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function sr(t){if(t!==Un)return!1;if(!Dt)return Hp(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&Jt&&Ia(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=f0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=f0(t)}else n===27?(n=Jt,Ja(t.type)?(t=Yf,Yf=null,Jt=t):Jt=n):Jt=Un?_i(t.stateNode.nextSibling):null;return!0}function ys(){Jt=Un=null,Dt=!1}function Tu(){var t=za;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),za=null),t}function co(t){za===null?za=[t]:za.push(t)}var Au=z(null),Ss=null,la=null;function Ba(t,n,a){de(Au,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=Au.current,Q(Au)}function wu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Cu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),wu(f.return,a,t),o||(y=null);break e}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),wu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function rr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;ei(u.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(u===ie.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Cu(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ss=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Gp(Ss,t)}function yl(t,n){return Ss===null&&bs(t),Gp(t,n)}function Gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(t===null)throw Error(s(308));la=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else la=la.next=n;return a}var x_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},__=r.unstable_scheduleCallback,y_=r.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new x_,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&__(y_,function(){t.controller.abort()})}var fo=null,Du=0,or=0,lr=null;function S_(t,n){if(fo===null){var a=fo=[];Du=0,or=Of(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Du++,n.then(Vp,Vp),n}function Vp(){if(--Du===0&&fo!==null){lr!==null&&(lr.status="fulfilled");var t=fo;fo=null,or=0,lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function b_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=I.S;I.S=function(t,n){Ag=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&S_(t,n),kp!==null&&kp(t,n)};var Ms=z(null);function Nu(){var t=Ms.current;return t!==null?t:Kt.pooledCache}function Sl(t,n){n===null?de(Ms,Ms.current):de(Ms,n.pool)}function qp(){var t=Nu();return t===null?null:{parent:hn._currentValue,pool:t}}var cr=Error(s(460)),Uu=Error(s(474)),bl=Error(s(542)),Ml={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(aa,aa);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw Ts=n,cr}}function Es(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,cr):a}}var Ts=null;function Wp(){if(Ts===null)throw Error(s(459));var t=Ts;return Ts=null,t}function Yp(t){if(t===cr||t===bl)throw Error(s(483))}var ur=null,ho=0;function El(t){var n=ho;return ho+=1,ur===null&&(ur=[]),Xp(ur,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zp(t){function n(ee,W){if(t){var se=ee.deletions;se===null?(ee.deletions=[W],ee.flags|=16):se.push(W)}}function a(ee,W){if(!t)return null;for(;W!==null;)n(ee,W),W=W.sibling;return null}function o(ee){for(var W=new Map;ee!==null;)ee.key!==null?W.set(ee.key,ee):W.set(ee.index,ee),ee=ee.sibling;return W}function u(ee,W){return ee=ra(ee,W),ee.index=0,ee.sibling=null,ee}function f(ee,W,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<W?(ee.flags|=67108866,W):se):(ee.flags|=67108866,W)):(ee.flags|=1048576,W)}function y(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function C(ee,W,se,Ee){return W===null||W.tag!==6?(W=yu(se,ee.mode,Ee),W.return=ee,W):(W=u(W,se),W.return=ee,W)}function V(ee,W,se,Ee){var lt=se.type;return lt===A?Se(ee,W,se.props.children,Ee,se.key):W!==null&&(W.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===q&&Es(lt)===W.type)?(W=u(W,se.props),po(W,se),W.return=ee,W):(W=vl(se.type,se.key,se.props,null,ee.mode,Ee),po(W,se),W.return=ee,W)}function oe(ee,W,se,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Su(se,ee.mode,Ee),W.return=ee,W):(W=u(W,se.children||[]),W.return=ee,W)}function Se(ee,W,se,Ee,lt){return W===null||W.tag!==7?(W=_s(se,ee.mode,Ee,lt),W.return=ee,W):(W=u(W,se),W.return=ee,W)}function we(ee,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=yu(""+W,ee.mode,se),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return se=vl(W.type,W.key,W.props,null,ee.mode,se),po(se,W),se.return=ee,se;case E:return W=Su(W,ee.mode,se),W.return=ee,W;case q:return W=Es(W),we(ee,W,se)}if(re(W)||X(W))return W=_s(W,ee.mode,se,null),W.return=ee,W;if(typeof W.then=="function")return we(ee,El(W),se);if(W.$$typeof===L)return we(ee,yl(ee,W),se);Tl(ee,W)}return null}function ue(ee,W,se,Ee){var lt=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return lt!==null?null:C(ee,W,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case S:return se.key===lt?V(ee,W,se,Ee):null;case E:return se.key===lt?oe(ee,W,se,Ee):null;case q:return se=Es(se),ue(ee,W,se,Ee)}if(re(se)||X(se))return lt!==null?null:Se(ee,W,se,Ee,null);if(typeof se.then=="function")return ue(ee,W,El(se),Ee);if(se.$$typeof===L)return ue(ee,W,yl(ee,se),Ee);Tl(ee,se)}return null}function pe(ee,W,se,Ee,lt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ee=ee.get(se)||null,C(W,ee,""+Ee,lt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case S:return ee=ee.get(Ee.key===null?se:Ee.key)||null,V(W,ee,Ee,lt);case E:return ee=ee.get(Ee.key===null?se:Ee.key)||null,oe(W,ee,Ee,lt);case q:return Ee=Es(Ee),pe(ee,W,se,Ee,lt)}if(re(Ee)||X(Ee))return ee=ee.get(se)||null,Se(W,ee,Ee,lt,null);if(typeof Ee.then=="function")return pe(ee,W,se,El(Ee),lt);if(Ee.$$typeof===L)return pe(ee,W,se,yl(W,Ee),lt);Tl(W,Ee)}return null}function tt(ee,W,se,Ee){for(var lt=null,Ot=null,it=W,yt=W=0,Ct=null;it!==null&&yt<se.length;yt++){it.index>yt?(Ct=it,it=null):Ct=it.sibling;var Pt=ue(ee,it,se[yt],Ee);if(Pt===null){it===null&&(it=Ct);break}t&&it&&Pt.alternate===null&&n(ee,it),W=f(Pt,W,yt),Ot===null?lt=Pt:Ot.sibling=Pt,Ot=Pt,it=Ct}if(yt===se.length)return a(ee,it),Dt&&oa(ee,yt),lt;if(it===null){for(;yt<se.length;yt++)it=we(ee,se[yt],Ee),it!==null&&(W=f(it,W,yt),Ot===null?lt=it:Ot.sibling=it,Ot=it);return Dt&&oa(ee,yt),lt}for(it=o(it);yt<se.length;yt++)Ct=pe(it,ee,yt,se[yt],Ee),Ct!==null&&(t&&Ct.alternate!==null&&it.delete(Ct.key===null?yt:Ct.key),W=f(Ct,W,yt),Ot===null?lt=Ct:Ot.sibling=Ct,Ot=Ct);return t&&it.forEach(function(is){return n(ee,is)}),Dt&&oa(ee,yt),lt}function ht(ee,W,se,Ee){if(se==null)throw Error(s(151));for(var lt=null,Ot=null,it=W,yt=W=0,Ct=null,Pt=se.next();it!==null&&!Pt.done;yt++,Pt=se.next()){it.index>yt?(Ct=it,it=null):Ct=it.sibling;var is=ue(ee,it,Pt.value,Ee);if(is===null){it===null&&(it=Ct);break}t&&it&&is.alternate===null&&n(ee,it),W=f(is,W,yt),Ot===null?lt=is:Ot.sibling=is,Ot=is,it=Ct}if(Pt.done)return a(ee,it),Dt&&oa(ee,yt),lt;if(it===null){for(;!Pt.done;yt++,Pt=se.next())Pt=we(ee,Pt.value,Ee),Pt!==null&&(W=f(Pt,W,yt),Ot===null?lt=Pt:Ot.sibling=Pt,Ot=Pt);return Dt&&oa(ee,yt),lt}for(it=o(it);!Pt.done;yt++,Pt=se.next())Pt=pe(it,ee,yt,Pt.value,Ee),Pt!==null&&(t&&Pt.alternate!==null&&it.delete(Pt.key===null?yt:Pt.key),W=f(Pt,W,yt),Ot===null?lt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&it.forEach(function(Ly){return n(ee,Ly)}),Dt&&oa(ee,yt),lt}function Yt(ee,W,se,Ee){if(typeof se=="object"&&se!==null&&se.type===A&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case S:e:{for(var lt=se.key;W!==null;){if(W.key===lt){if(lt=se.type,lt===A){if(W.tag===7){a(ee,W.sibling),Ee=u(W,se.props.children),Ee.return=ee,ee=Ee;break e}}else if(W.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===q&&Es(lt)===W.type){a(ee,W.sibling),Ee=u(W,se.props),po(Ee,se),Ee.return=ee,ee=Ee;break e}a(ee,W);break}else n(ee,W);W=W.sibling}se.type===A?(Ee=_s(se.props.children,ee.mode,Ee,se.key),Ee.return=ee,ee=Ee):(Ee=vl(se.type,se.key,se.props,null,ee.mode,Ee),po(Ee,se),Ee.return=ee,ee=Ee)}return y(ee);case E:e:{for(lt=se.key;W!==null;){if(W.key===lt)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(ee,W.sibling),Ee=u(W,se.children||[]),Ee.return=ee,ee=Ee;break e}else{a(ee,W);break}else n(ee,W);W=W.sibling}Ee=Su(se,ee.mode,Ee),Ee.return=ee,ee=Ee}return y(ee);case q:return se=Es(se),Yt(ee,W,se,Ee)}if(re(se))return tt(ee,W,se,Ee);if(X(se)){if(lt=X(se),typeof lt!="function")throw Error(s(150));return se=lt.call(se),ht(ee,W,se,Ee)}if(typeof se.then=="function")return Yt(ee,W,El(se),Ee);if(se.$$typeof===L)return Yt(ee,W,yl(ee,se),Ee);Tl(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(ee,W.sibling),Ee=u(W,se),Ee.return=ee,ee=Ee):(a(ee,W),Ee=yu(se,ee.mode,Ee),Ee.return=ee,ee=Ee),y(ee)):a(ee,W)}return function(ee,W,se,Ee){try{ho=0;var lt=Yt(ee,W,se,Ee);return ur=null,lt}catch(it){if(it===cr||it===bl)throw it;var Ot=ti(29,it,null,ee.mode);return Ot.lanes=Ee,Ot.return=ee,Ot}finally{}}}var As=Zp(!0),Kp=Zp(!1),Ha=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),Lp(t,null,a),n}return ml(t,o,n,a),gl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xs(t,a)}}function Pu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function go(){if(Fu){var t=lr;if(t!==null)throw t}}function vo(t,n,a,o){Fu=!1;var u=t.updateQueue;Ha=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,oe=V.next;V.next=null,y===null?f=oe:y.next=oe,y=V;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,C=Se.lastBaseUpdate,C!==y&&(C===null?Se.firstBaseUpdate=oe:C.next=oe,Se.lastBaseUpdate=V))}if(f!==null){var we=u.baseState;y=0,Se=oe=V=null,C=f;do{var ue=C.lane&-536870913,pe=ue!==C.lane;if(pe?(wt&ue)===ue:(o&ue)===ue){ue!==0&&ue===or&&(Fu=!0),Se!==null&&(Se=Se.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var tt=t,ht=C;ue=n;var Yt=a;switch(ht.tag){case 1:if(tt=ht.payload,typeof tt=="function"){we=tt.call(Yt,we,ue);break e}we=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ht.payload,ue=typeof tt=="function"?tt.call(Yt,we,ue):tt,ue==null)break e;we=g({},we,ue);break e;case 2:Ha=!0}}ue=C.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Se===null?(oe=Se=pe,V=we):Se=Se.next=pe,y|=ue;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;pe=C,C=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);Se===null&&(V=we),u.baseState=V,u.firstBaseUpdate=oe,u.lastBaseUpdate=Se,f===null&&(u.shared.lanes=0),Wa|=y,t.lanes=y,t.memoizedState=we}}function Qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var fr=z(null),Al=z(0);function $p(t,n){t=xa,de(Al,t),de(fr,n),xa=t|n.baseLanes}function zu(){de(Al,xa),de(fr,fr.current)}function Iu(){xa=Al.current,Q(fr),Q(Al)}var ni=z(null),xi=null;function ka(t){var n=t.alternate;de(cn,cn.current&1),de(ni,t),xi===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(xi=t)}function Bu(t){de(cn,cn.current),de(ni,t),xi===null&&(xi=t)}function em(t){t.tag===22?(de(cn,cn.current),de(ni,t),xi===null&&(xi=t)):qa()}function qa(){de(cn,cn.current),de(ni,ni.current)}function ii(t){Q(ni),xi===t&&(xi=null),Q(cn)}var cn=z(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,_t=null,Xt=null,pn=null,Cl=!1,dr=!1,ws=!1,Rl=0,xo=0,hr=null,M_=0;function sn(){throw Error(s(321))}function Hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Gu(t,n,a,o,u,f){return ua=f,_t=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?zm:nf,ws=!1,f=a(o,u),ws=!1,dr&&(f=nm(n,a,o,u)),tm(t),f}function tm(t){I.H=So;var n=Xt!==null&&Xt.next!==null;if(ua=0,pn=Xt=_t=null,Cl=!1,xo=0,hr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&_l(t)&&(mn=!0))}function nm(t,n,a,o){_t=t;var u=0;do{if(dr&&(hr=null),xo=0,dr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Im,f=n(a,o)}while(dr);return f}function E_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(_t.flags|=1024),n}function Vu(){var t=Rl!==0;return Rl=0,t}function ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function qu(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}ua=0,pn=Xt=_t=null,dr=!1,xo=Rl=0,hr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?_t.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Xt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=pn===null?_t.memoizedState:pn.next;if(n!==null)pn=n,Xt=t;else{if(t===null)throw _t.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},pn===null?_t.memoizedState=pn=t:pn=pn.next=t}return pn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=xo;return xo+=1,hr===null&&(hr=[]),t=Xp(hr,t,n),n=_t,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?zm:nf),t}function Nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===L)return Ln(t)}throw Error(s(438,String(t)))}function ju(t){var n=null,a=_t.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_t.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),_t.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function fa(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=un();return Xu(n,Xt,t)}function Xu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=y=null,V=null,oe=n,Se=!1;do{var we=oe.lane&-536870913;if(we!==oe.lane?(wt&we)===we:(ua&we)===we){var ue=oe.revertLane;if(ue===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),we===or&&(Se=!0);else if((ua&ue)===ue){oe=oe.next,ue===or&&(Se=!0);continue}else we={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(C=V=we,y=f):V=V.next=we,_t.lanes|=ue,Wa|=ue;we=oe.action,ws&&a(f,we),f=oe.hasEagerState?oe.eagerState:a(f,we)}else ue={lane:we,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(C=V=ue,y=f):V=V.next=ue,_t.lanes|=we,Wa|=we;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?y=f:V.next=C,!ei(f,t.memoizedState)&&(mn=!0,Se&&(a=lr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wu(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);ei(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function im(t,n,a){var o=_t,u=un(),f=Dt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ei((Xt||u).memoizedState,a);if(y&&(u.memoizedState=a,mn=!0),u=u.queue,Ku(rm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},sm.bind(null,o,u,a,n),null),Kt===null)throw Error(s(349));f||(ua&127)!==0||am(o,n,a)}return a}function am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_t.updateQueue,n===null?(n=Dl(),_t.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sm(t,n,a,o){n.value=a,n.getSnapshot=o,om(n)&&lm(t)}function rm(t,n,a){return a(function(){om(n)&&lm(t)})}function om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function lm(t){var n=xs(t,2);n!==null&&Kn(n,t,2)}function Yu(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),ws){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n}function cm(t,n,a,o){return t.baseState=a,Xu(t,Xt,typeof o=="function"?o:fa)}function T_(t,n,a,o,u){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var C=a(u,o),V=I.S;V!==null&&V(y,C),fm(t,n,C)}catch(oe){Zu(t,n,oe)}finally{f!==null&&y.types!==null&&(f.types=y.types),I.T=f}}else try{f=a(u,o),fm(t,n,f)}catch(oe){Zu(t,n,oe)}}function fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dm(t,n,o)},function(o){return Zu(t,n,o)}):dm(t,n,a)}function dm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function Zu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==o)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pm(t,n){return n}function mm(t,n){if(Dt){var a=Kt.formState;if(a!==null){e:{var o=_t;if(Dt){if(Jt){t:{for(var u=Jt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=_i(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=o,a=Om.bind(null,_t,o),o.dispatch=a,o=Yu(!1),f=tf.bind(null,_t,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=T_.bind(null,_t,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function gm(t){var n=un();return vm(n,Xt,t)}function vm(t,n,a){if(n=Xu(t,n,pm)[0],t=Ul(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(y){throw y===cr?bl:y}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_t.flags|=2048,pr(9,{destroy:void 0},A_.bind(null,u,a),null)),[o,f,t]}function A_(t,n){t.action=n}function xm(t){var n=un(),a=Xt;if(a!==null)return vm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function pr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=_t.updateQueue,n===null&&(n=Dl(),_t.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function _m(){return un().memoizedState}function Ll(t,n,a,o){var u=Gn();_t.flags|=t,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&Hu(o,Xt.memoizedState.deps)?u.memoizedState=pr(n,f,a,o):(_t.flags|=t,u.memoizedState=pr(1|n,f,a,o))}function ym(t,n){Ll(8390656,8,t,n)}function Ku(t,n){Ol(2048,8,t,n)}function w_(t){_t.flags|=4;var n=_t.updateQueue;if(n===null)n=Dl(),_t.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Sm(t){var n=un().memoizedState;return w_({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function bm(t,n){return Ol(4,2,t,n)}function Mm(t,n){return Ol(4,4,t,n)}function Em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,Em.bind(null,n,t),a)}function Qu(){}function Am(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function wm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hu(n,o[1]))return o[0];if(o=t(),ws){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function Ju(t,n,a){return a===void 0||(ua&1073741824)!==0&&(wt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Cg(),_t.lanes|=t,Wa|=t,a)}function Cm(t,n,a,o){return ei(a,n)?a:fr.current!==null?(t=Ju(t,a,o),ei(t,n)||(mn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(wt&261930)===0?(mn=!0,t.memoizedState=a):(t=Cg(),_t.lanes|=t,Wa|=t,n)}function Rm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var y=I.T,C={};I.T=C,tf(t,!1,n,a);try{var V=u(),oe=I.S;if(oe!==null&&oe(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Se=b_(V,o);yo(t,n,Se,ri(t))}else yo(t,n,o,ri(t))}catch(we){yo(t,n,{then:function(){},status:"rejected",reason:we},ri())}finally{G.p=f,y!==null&&C.types!==null&&(y.types=C.types),I.T=y}}function C_(){}function $u(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Dm(t).queue;Rm(t,u,n,$,a===null?C_:function(){return Nm(t),a(o)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Dm(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ri())}function ef(){return Ln(zo)}function Um(){return un().memoizedState}function Lm(){return un().memoizedState}function R_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ga(a);var o=Va(n,t,a);o!==null&&(Kn(o,n,a),mo(o,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function D_(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Pm(n,a):(a=xu(t,n,a,o),a!==null&&(Kn(a,t,o),Fm(a,n,o)))}function Om(t,n,a){var o=ri();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Pm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,y))return ml(t,n,u,0),Kt===null&&pl(),!1}catch{}finally{}if(a=xu(t,n,u,o),a!==null)return Kn(a,t,o),Fm(a,n,o),!0}return!1}function tf(t,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=xu(t,a,o,2),n!==null&&Kn(n,t,2)}function Pl(t){var n=t.alternate;return t===_t||n!==null&&n===_t}function Pm(t,n){dr=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xs(t,a)}}var So={readContext:Ln,use:Nl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};So.useEffectEvent=sn;var zm={readContext:Ln,use:Nl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(ws){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(ws){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=D_.bind(null,_t,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=Om.bind(null,_t,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Gn();return Ju(a,t,n)},useTransition:function(){var t=Yu(!1);return t=Rm.bind(null,_t,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=_t,u=Gn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(wt&127)!==0||am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(rm.bind(null,o,f,t),[t]),o.flags|=2048,pr(9,{destroy:void 0},sm.bind(null,o,f,a,n),null),a},useId:function(){var t=Gn(),n=Kt.identifierPrefix;if(Dt){var a=Vi,o=Gi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=M_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:mm,useActionState:mm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,_t,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return Gn().memoizedState=R_.bind(null,_t)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:Ln,use:Nl,useCallback:Am,useContext:Ln,useEffect:Ku,useImperativeHandle:Tm,useInsertionEffect:bm,useLayoutEffect:Mm,useMemo:wm,useReducer:Ul,useRef:_m,useState:function(){return Ul(fa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=un();return Cm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Ul(fa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:im,useId:Um,useHostTransitionStatus:ef,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=un();return cm(a,Xt,t,n)},useMemoCache:ju,useCacheRefresh:Lm};nf.useEffectEvent=Sm;var Im={readContext:Ln,use:Nl,useCallback:Am,useContext:Ln,useEffect:Ku,useImperativeHandle:Tm,useInsertionEffect:bm,useLayoutEffect:Mm,useMemo:wm,useReducer:Wu,useRef:_m,useState:function(){return Wu(fa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=un();return Xt===null?Ju(a,t,n):Cm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Wu(fa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:im,useId:Um,useHostTransitionStatus:ef,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=un();return Xt!==null?cm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Lm};Im.useEffectEvent=Sm;function af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ga(o);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Kn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Kn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Ga(a);o.tag=2,n!=null&&(o.callback=n),n=Va(t,o,a),n!==null&&(Kn(n,t,a),mo(n,t,a))}};function Bm(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function Hm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function Cs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Gm(t){hl(t)}function Vm(t){console.error(t)}function km(t){hl(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function jm(t){return t=Ga(t),t.tag=3,t}function Xm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){qm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function N_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?Yl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(t,o,u)),!1}throw Error(s(435,a.tag))}return Nf(t,o,u),Yl(),!1}if(Dt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(t=Error(s(422),{cause:o}),co(pi(t,a)))):(o!==Eu&&(n=Error(s(423),{cause:o}),co(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=rf(t.stateNode,o,u),Pu(t,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,a),Ro===null?Ro=[f]:Ro.push(f),rn!==4&&(rn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rf(a.stateNode,o,t),Pu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Xm(u,t,a,o),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(s(461)),mn=!1;function On(t,n,a,o){n.child=t===null?Kp(n,null,a,o):As(n,t.child,a,o)}function Wm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return bs(n),o=Gu(t,n,a,y,f,u),C=Vu(),t!==null&&!mn?(ku(t,n,u),da(t,n,u)):(Dt&&C&&bu(n),n.flags|=1,On(t,n,o,u),n.child)}function Ym(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zm(t,n,f,o,u)):(t=vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(y,o)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=ra(f,o),t.ref=n.ref,t.return=n,n.child=t}function Zm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(ro(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,mf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,da(t,n,u)}return lf(t,n,a,o,u)}function Km(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Qm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?$p(n,f):zu(),em(n);else return o=n.lanes=536870912,Qm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),$p(n,f),qa(),n.memoizedState=null):(t!==null&&Sl(n,null),zu(),qa());return On(t,n,u,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qm(t,n,a,o,u){var f=Nu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),zu(),em(n),t!==null&&rr(t,n,o,!0),n.childLanes=u,null}function zl(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Jm(t,n,a){return As(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function U_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=zl(n,o),n.lanes=536870912,bo(null,t);if(Bu(n),(t=Jt)?(t=u0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,Un=n,Jt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return zl(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=Jm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||rr(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Kt,o!==null&&(y=on(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,xs(t,y),Kn(o,t,y),of;Yl(),n=Jm(t,n,a)}else t=f.treeContext,Jt=_i(y.nextSibling),Un=n,Dt=!0,za=null,vi=!1,t!==null&&Ip(n,t),n=zl(n,o),n.flags|=4096;return n}return t=ra(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,o,u){return bs(n),a=Gu(t,n,a,o,void 0,u),o=Vu(),t!==null&&!mn?(ku(t,n,u),da(t,n,u)):(Dt&&o&&bu(n),n.flags|=1,On(t,n,a,u),n.child)}function $m(t,n,a,o,u,f){return bs(n),n.updateQueue=null,a=nm(n,o,a,u),tm(t),o=Vu(),t!==null&&!mn?(ku(t,n,f),da(t,n,f)):(Dt&&o&&bu(n),n.flags|=1,On(t,n,a,f),n.child)}function eg(t,n,a,o,u){if(bs(n),n.stateNode===null){var f=nr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Ln(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Lu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Ln(y):nr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(af(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&sf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,V=Cs(a,C);f.props=V;var oe=f.context,Se=a.contextType;y=nr,typeof Se=="object"&&Se!==null&&(y=Ln(Se));var we=a.getDerivedStateFromProps;Se=typeof we=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Se||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||oe!==y)&&Hm(n,f,o,y),Ha=!1;var ue=n.memoizedState;f.state=ue,vo(n,o,f,u),go(),oe=n.memoizedState,C||ue!==oe||Ha?(typeof we=="function"&&(af(n,a,we,o),oe=n.memoizedState),(V=Ha||Bm(n,a,V,o,ue,oe,y))?(Se||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=y,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ou(t,n),y=n.memoizedProps,Se=Cs(a,y),f.props=Se,we=n.pendingProps,ue=f.context,oe=a.contextType,V=nr,typeof oe=="object"&&oe!==null&&(V=Ln(oe)),C=a.getDerivedStateFromProps,(oe=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==we||ue!==V)&&Hm(n,f,o,V),Ha=!1,ue=n.memoizedState,f.state=ue,vo(n,o,f,u),go();var pe=n.memoizedState;y!==we||ue!==pe||Ha||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof C=="function"&&(af(n,a,C,o),pe=n.memoizedState),(Se=Ha||Bm(n,a,Se,o,ue,pe,V)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,pe,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,pe,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),f.props=o,f.state=pe,f.context=V,o=Se):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=As(n,t.child,null,u),n.child=As(n,null,a,u)):On(t,n,a,u),n.memoizedState=f.state,t=n.child):t=da(t,n,u),t}function tg(t,n,a,o){return ys(),n.flags|=256,On(t,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:qp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function ng(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?ka(n):qa(),(t=Jt)?(t=u0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,Un=n,Jt=null)):t=null,t===null)throw Ia(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(qa(),u=n.mode,C=Bl({mode:"hidden",children:C},u),o=_s(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,y,a),n.memoizedState=cf,bo(null,o)):(ka(n),df(n,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=hf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),C=o.fallback,u=n.mode,o=Bl({mode:"visible",children:o.children},u),C=_s(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,As(n,t.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,y,a),n.memoizedState=cf,n=bo(null,o));else if(ka(n),Wf(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var oe=y.dgst;y=oe,o=Error(s(419)),o.stack="",o.digest=y,co({value:o,source:null,stack:null}),n=hf(t,n,a)}else if(mn||rr(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=Kt,y!==null&&(o=on(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,xs(t,o),Kn(y,t,o),of;Xf(C)||Yl(),n=hf(t,n,a)}else Xf(C)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Jt=_i(C.nextSibling),Un=n,Dt=!0,za=null,vi=!1,t!==null&&Ip(n,t),n=df(n,o.children),n.flags|=4096);return n}return u?(qa(),C=o.fallback,u=n.mode,V=t.child,oe=V.sibling,o=ra(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,oe!==null?C=ra(oe,C):(C=_s(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,bo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=uf(a):(u=C.cachePool,u!==null?(V=hn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=qp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=ff(t,y,a),n.memoizedState=cf,bo(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function df(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function hf(t,n,a){return As(n,t.child,null,a),t=df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ig(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),wu(t.return,n,a)}function pf(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function ag(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=cn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,de(cn,y),On(t,n,o,a),o=Dt?lo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,a,n);else if(t.tag===19)ig(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function L_(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ba(n,hn,t.memoizedState.cache),ys();break;case 27:case 5:Pe(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ng(t,n,a):(ka(n),t=da(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),de(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Km(t,n,a,n.pendingProps);case 24:Ba(n,hn,t.memoizedState.cache)}return da(t,n,a)}function sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return mn=!1,L_(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Dt&&(n.flags&1048576)!==0&&zp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Es(n.elementType),n.type=t,typeof t=="function")_u(t)?(o=Cs(t,o),n.tag=1,n=eg(null,n,t,o,a)):(n.tag=0,n=lf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Wm(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=Ym(null,n,t,o,a);break e}}throw n=ne(t)||t,Error(s(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),eg(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(t,n),vo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ba(n,hn,o),o!==f.cache&&Cu(n,[hn],a,!0),go(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=tg(t,n,o,a);break e}else if(o!==u){u=pi(Error(s(424)),n),co(u),n=tg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=_i(t.firstChild),Un=n,Dt=!0,za=null,vi=!0,a=Kp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=da(t,n,a);break e}On(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=g0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=tc(Z.current).createElement(a),o[en]=n,o[nn]=t,Pn(o,a,t),w(o),n.stateNode=o):n.memoizedState=g0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&Dt&&(o=n.stateNode=h0(n.type,n.pendingProps,Z.current),Un=n,vi=!0,u=Jt,Ja(n.type)?(Yf=u,Jt=_i(o.firstChild)):Jt=u),On(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=o=Jt)&&(o=cy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Un=n,Jt=_i(o.firstChild),vi=!1,u=!0):u=!1),u||Ia(n)),Pe(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,kf(u,f)?o=null:y!==null&&kf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(t,n,E_,null,null,a),zo._currentValue=u),Il(t,n),On(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=Jt)&&(a=uy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,Jt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return ng(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=As(n,null,o,a):On(t,n,o,a),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,a);case 7:return On(t,n,n.pendingProps,a),n.child;case 8:return On(t,n,n.pendingProps.children,a),n.child;case 12:return On(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),On(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=Ln(u),o=o(u),n.flags|=1,On(t,n,o,a),n.child;case 14:return Ym(t,n,n.type,n.pendingProps,a);case 15:return Zm(t,n,n.type,n.pendingProps,a);case 19:return ag(t,n,a);case 31:return U_(t,n,a);case 22:return Km(t,n,a,n.pendingProps);case 24:return bs(n),o=Ln(hn),t===null?(u=Nu(),u===null&&(u=Kt,f=Ru(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Lu(n),Ba(n,hn,u)):((t.lanes&a)!==0&&(Ou(t,n),vo(n,null,null,a),go()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,hn,o)):(o=f.cache,Ba(n,hn,o),o!==u.cache&&Cu(n,[hn],a,!0))),On(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function gf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ug())t.flags|=8192;else throw Ts=Ml,Uu}else t.flags&=-16777217}function rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S0(n))if(Ug())t.flags|=8192;else throw Ts=Ml,Uu}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Et():536870912,t.lanes|=n,xr|=n)}function Mo(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function O_(t,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(hn),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sr(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ha(n),f!==null?($t(n),rg(n,f)):($t(n),gf(n,u,null,o,a))):f?f!==t.memoizedState?(ha(n),$t(n),rg(n,f)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ha(n),$t(n),gf(n,u,t,o,a)),null;case 27:if(Ze(n),a=Z.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}t=me.current,sr(n)?Bp(n):(t=h0(u,o,a),n.stateNode=t,ha(n))}return $t(n),null;case 5:if(Ze(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}if(f=me.current,sr(n))Bp(n);else{var y=tc(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[en]=n,f[nn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Pn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ha(n)}}return $t(n),gf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Z.current,sr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||Ia(n,!0)}else t=tc(t).createTextNode(o),t[en]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=sr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[en]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[en]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),$t(n),null);case 4:return be(),t===null&&If(n.stateNode.containerInfo),$t(n),null;case 10:return ca(n.type),$t(n),null;case 19:if(Q(cn),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=wl(t),f!==null){for(n.flags|=128,Mo(o,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Op(a,t),a=a.sibling;return de(cn,cn.current&1|2),Dt&&oa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&M()>jl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=wl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Dt)return $t(n),null}else 2*M()-o.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=M(),t.sibling=null,a=cn.current,de(cn,u?a&1|2:a&1),Dt&&oa(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return ii(n),Iu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Ms),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(hn),$t(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function P_(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(hn),be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(cn),null;case 4:return be(),null;case 10:return ca(n.type),null;case 22:case 23:return ii(n),Iu(),t!==null&&Q(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(hn),null;case 25:return null;default:return null}}function og(t,n){switch(Mu(n),n.tag){case 3:ca(hn),be();break;case 26:case 27:case 5:Ze(n);break;case 4:be();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Q(cn);break;case 10:ca(n.type);break;case 22:case 23:ii(n),Iu(),t!==null&&Q(Ms);break;case 24:ca(hn)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){qt(n,n.return,C)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var V=a,oe=C;try{oe()}catch(Se){qt(u,V,Se)}}}o=o.next}while(o!==f)}}catch(Se){qt(n,n.return,Se)}}function lg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(o){qt(t,t.return,o)}}}function cg(t,n,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){qt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){qt(t,n,u)}}function ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qt(t,n,u)}else a.current=null}function ug(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qt(t,t.return,u)}}function vf(t,n,a){try{var o=t.stateNode;iy(o,t.type,a,n),o[nn]=n}catch(u){qt(t,t.return,u)}}function fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function dg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,o,a),n[en]=t,n[nn]=a}catch(f){qt(t,t.return,f)}}var pa=!1,gn=!1,yf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,wn=null;function F_(t,n){if(t=t.containerInfo,Gf=lc,t=Tp(t),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,C=-1,V=-1,oe=0,Se=0,we=t,ue=null;t:for(;;){for(var pe;we!==a||u!==0&&we.nodeType!==3||(C=y+u),we!==f||o!==0&&we.nodeType!==3||(V=y+o),we.nodeType===3&&(y+=we.nodeValue.length),(pe=we.firstChild)!==null;)ue=we,we=pe;for(;;){if(we===t)break t;if(ue===a&&++oe===u&&(C=y),ue===f&&++Se===o&&(V=y),(pe=we.nextSibling)!==null)break;we=ue,ue=we.parentNode}we=pe}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},lc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var tt=Cs(a.type,u);t=o.getSnapshotBeforeUpdate(tt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ht){qt(a,a.return,ht)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function pg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),o&4&&Eo(5,a);break;case 1:if(ga(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){qt(a,a.return,y)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){qt(a,a.return,y)}}o&64&&lg(a),o&512&&To(a,a.return);break;case 3:if(ga(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(y){qt(a,a.return,y)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:ga(t,a),n===null&&o&4&&ug(a),o&512&&To(a,a.return);break;case 12:ga(t,a);break;case 31:ga(t,a),o&4&&vg(t,a);break;case 13:ga(t,a),o&4&&xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=j_.bind(null,a),fy(t,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||gn,u=pa;var f=gn;pa=o,(gn=n)&&!f?va(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),pa=u,gn=f}break;case 30:break;default:ga(t,a)}}function mg(t){var n=t.alternate;n!==null&&(t.alternate=null,mg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ys(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Xn=!1;function ma(t,n,a){for(a=a.child;a!==null;)gg(t,n,a),a=a.sibling}function gg(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:gn||ki(a,n),ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||ki(a,n);var o=tn,u=Xn;Ja(a.type)&&(tn=a.stateNode,Xn=!1),ma(t,n,a),Oo(a.stateNode),tn=o,Xn=u;break;case 5:gn||ki(a,n);case 6:if(o=tn,u=Xn,tn=null,ma(t,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){qt(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){qt(a,n,f)}break;case 18:tn!==null&&(Xn?(t=tn,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ar(t)):l0(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,ma(t,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),gn||ja(4,a,n),ma(t,n,a);break;case 1:gn||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&cg(a,n,o)),ma(t,n,a);break;case 21:ma(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ma(t,n,a),gn=o;break;default:ma(t,n,a)}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(a){qt(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(a){qt(n,n.return,a)}}function z_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new hg),n;default:throw Error(s(435,t.tag))}}function Vl(t,n){var a=z_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=X_.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(Ja(C.type)){tn=C.stateNode,Xn=!1;break e}break;case 5:tn=C.stateNode,Xn=!1;break e;case 3:case 4:tn=C.stateNode.containerInfo,Xn=!0;break e}C=C.return}if(tn===null)throw Error(s(160));gg(f,y,u),tn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,t),n=n.sibling}var Di=null;function _g(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),Yn(t),o&4&&(ja(3,t,t.return),Eo(3,t),ja(5,t,t.return));break;case 1:Wn(n,t),Yn(t),o&512&&(gn||a===null||ki(a,a.return)),o&64&&pa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Wn(n,t),Yn(t),o&512&&(gn||a===null||ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fi]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Pn(f,o,a),f[en]=t,w(f),o=f;break e;case"link":var y=_0("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break t}}f=u.createElement(o),Pn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=_0("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break t}}f=u.createElement(o),Pn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[en]=t,w(f),o=f}t.stateNode=o}else y0(u,t.type,t.stateNode);else t.stateNode=x0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?y0(u,t.type,t.stateNode):x0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),Yn(t),o&512&&(gn||a===null||ki(a,a.return)),a!==null&&o&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),Yn(t),o&512&&(gn||a===null||ki(a,a.return)),t.flags&32){u=t.stateNode;try{yn(u,"")}catch(tt){qt(t,t.return,tt)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Wn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(tt){qt(t,t.return,tt)}}break;case 3:if(ac=null,u=Di,Di=nc(n.containerInfo),Wn(n,t),Di=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(tt){qt(t,t.return,tt)}yf&&(yf=!1,yg(t));break;case 4:o=Di,Di=nc(t.stateNode.containerInfo),Wn(n,t),Yn(t),Di=o;break;case 12:Wn(n,t),Yn(t);break;case 31:Wn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:Wn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=M()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,oe=pa,Se=gn;if(pa=oe||u,gn=Se||V,Wn(n,t),gn=Se,pa=oe,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||pa||gn||Rs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=V.stateNode;var we=V.memoizedProps.style,ue=we!=null&&we.hasOwnProperty("display")?we.display:null;C.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(tt){qt(V,V.return,tt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(tt){qt(V,V.return,tt)}}}else if(n.tag===18){if(a===null){V=n;try{var pe=V.stateNode;u?c0(pe,!0):c0(V.stateNode,!1)}catch(tt){qt(V,V.return,tt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(t,a))));break;case 19:Wn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(t);Gl(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(yn(y,""),a.flags&=-33);var C=xf(t);Gl(t,C,y);break;case 3:case 4:var V=a.stateNode.containerInfo,oe=xf(t);_f(t,oe,V);break;default:throw Error(s(161))}}catch(Se){qt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function yg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(t,n.alternate,n),n=n.sibling}function Rs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Rs(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cg(n,n.return,a),Rs(n);break;case 27:Oo(n.stateNode);case 26:case 5:ki(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:va(u,f,a),Eo(4,f);break;case 1:if(va(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){qt(o,o.return,oe)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Qp(V[u],C)}catch(oe){qt(o,o.return,oe)}}a&&y&64&&lg(f),To(f,f.return);break;case 27:dg(f);case 26:case 5:va(u,f,a),a&&o===null&&y&4&&ug(f),To(f,f.return);break;case 12:va(u,f,a);break;case 31:va(u,f,a),a&&y&4&&vg(u,f);break;case 13:va(u,f,a),a&&y&4&&xg(u,f);break;case 22:f.memoizedState===null&&va(u,f,a),To(f,f.return);break;case 30:break;default:va(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(t,n,a,o),n=n.sibling}function Sg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(n,n.return,V)}}else Ni(t,n,a,o);break;case 31:Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,o):Ao(t,n):f._visibility&2?Ni(t,n,a,o):(f._visibility|=2,mr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(y,n);break;case 24:Ni(t,n,a,o),u&2048&&bf(n.alternate,n);break;default:Ni(t,n,a,o)}}function mr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,C=a,V=o,oe=y.flags;switch(y.tag){case 0:case 11:case 15:mr(f,y,C,V,u),Eo(8,y);break;case 23:break;case 22:var Se=y.stateNode;y.memoizedState!==null?Se._visibility&2?mr(f,y,C,V,u):Ao(f,y):(Se._visibility|=2,mr(f,y,C,V,u)),u&&oe&2048&&Sf(y.alternate,y);break;case 24:mr(f,y,C,V,u),u&&oe&2048&&bf(y.alternate,y);break;default:mr(f,y,C,V,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Sf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&bf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function gr(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)bg(t,n,a),t=t.sibling}function bg(t,n,a){switch(t.tag){case 26:gr(t,n,a),t.flags&wo&&t.memoizedState!==null&&My(a,Di,t.memoizedState,t.memoizedProps);break;case 5:gr(t,n,a);break;case 3:case 4:var o=Di;Di=nc(t.stateNode.containerInfo),gr(t,n,a),Di=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,gr(t,n,a),wo=o):gr(t,n,a));break;default:gr(t,n,a)}}function Mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Tg(o,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eg(t),t=t.sibling}function Eg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):Co(t);break;default:Co(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Tg(o,t)}Mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function Tg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,f=o.return;if(mg(o),o===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var I_={getCacheForType:function(t){var n=Ln(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Ln(hn).controller.signal}},B_=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Kt=null,Tt=null,wt=0,kt=0,ai=null,Xa=!1,vr=!1,Mf=!1,xa=0,rn=0,Wa=0,Ds=0,Ef=0,si=0,xr=0,Ro=null,Zn=null,Tf=!1,ql=0,Ag=0,jl=1/0,Xl=null,Ya=null,Sn=0,Za=null,_r=null,_a=0,Af=0,wf=null,wg=null,Do=0,Cf=null;function ri(){return(Ht&2)!==0&&wt!==0?wt&-wt:I.T!==null?Of():ia()}function Cg(){if(si===0)if((wt&536870912)===0||Dt){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),si=t}else si=536870912;return t=ni.current,t!==null&&(t.flags|=32),si}function Kn(t,n,a){(t===Kt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Ka(t,wt,si,!1)),En(t,a),((Ht&2)===0||t!==Kt)&&(t===Kt&&((Ht&2)===0&&(Ds|=a),rn===4&&Ka(t,wt,si,!1)),qi(t))}function Rg(t,n,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?V_(t,n):Df(t,n,!0),f=o;do{if(u===0){vr&&!o&&Ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!H_(a)){u=Df(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var C=t;u=Ro;var V=C.current.memoizedState.isDehydrated;if(V&&(yr(C,y).flags|=256),y=Df(C,y,!1),y!==2){if(Mf&&!V){C.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break e}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){yr(t,0),Ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,si,!Xa);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-M(),10<u)){if(Ka(o,n,si,!Xa),Ae(o,0,!0)!==0)break e;_a=n,o.timeoutHandle=r0(Dg.bind(null,o,a,Zn,Xl,Tf,n,si,Ds,xr,Xa,f,"Throttled",-0,0),u);break e}Dg(o,a,Zn,Xl,Tf,n,si,Ds,xr,Xa,f,null,-0,0)}}break}while(!0);qi(t)}function Dg(t,n,a,o,u,f,y,C,V,oe,Se,we,ue,pe){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},bg(n,f,we);var tt=(f&62914560)===f?ql-M():(f&4194048)===f?Ag-M():0;if(tt=Ey(we,tt),tt!==null){_a=f,t.cancelPendingCommit=tt(Ig.bind(null,t,n,f,a,o,u,y,C,V,Se,we,null,ue,pe)),Ka(t,f,y,!oe);return}}Ig(t,n,f,a,o,u,y,C,V)}function H_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,a,o){n&=~Ef,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&js(t,a,n)}function Wl(){return(Ht&6)===0?(No(0),!1):!0}function Rf(){if(Tt!==null){if(kt===0)var t=Tt.return;else t=Tt,la=Ss=null,qu(t),ur=null,ho=0,t=Tt;for(;t!==null;)og(t.alternate,t),t=t.return;Tt=null}}function yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ry(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Rf(),Kt=t,Tt=a=ra(t.current,null),wt=n,kt=0,ai=null,Xa=!1,vr=Ie(t,n),Mf=!1,xr=si=Ef=Ds=Wa=rn=0,Zn=Ro=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return xa=n,pl(),a}function Ng(t,n){_t=null,I.H=So,n===cr||n===bl?(n=Wp(),kt=3):n===Uu?(n=Wp(),kt=4):kt=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Tt===null&&(rn=1,Fl(t,pi(n,t.current)))}function Ug(){var t=ni.current;return t===null?!0:(wt&4194048)===wt?xi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===xi:!1}function Lg(){var t=I.H;return I.H=So,t===null?So:t}function Og(){var t=I.A;return I.A=I_,t}function Yl(){rn=4,Xa||(wt&4194048)!==wt&&ni.current!==null||(vr=!0),(Wa&134217727)===0&&(Ds&134217727)===0||Kt===null||Ka(Kt,wt,si,!1)}function Df(t,n,a){var o=Ht;Ht|=2;var u=Lg(),f=Og();(Kt!==t||wt!==n)&&(Xl=null,yr(t,n)),n=!1;var y=rn;e:do try{if(kt!==0&&Tt!==null){var C=Tt,V=ai;switch(kt){case 8:Rf(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var oe=kt;if(kt=0,ai=null,Sr(t,C,V,oe),a&&vr){y=0;break e}break;default:oe=kt,kt=0,ai=null,Sr(t,C,V,oe)}}G_(),y=rn;break}catch(Se){Ng(t,Se)}while(!0);return n&&t.shellSuspendCounter++,la=Ss=null,Ht=o,I.H=u,I.A=f,Tt===null&&(Kt=null,wt=0,pl()),y}function G_(){for(;Tt!==null;)Pg(Tt)}function V_(t,n){var a=Ht;Ht|=2;var o=Lg(),u=Og();Kt!==t||wt!==n?(Xl=null,jl=M()+500,yr(t,n)):vr=Ie(t,n);e:do try{if(kt!==0&&Tt!==null){n=Tt;var f=ai;t:switch(kt){case 1:kt=0,ai=null,Sr(t,n,f,1);break;case 2:case 9:if(jp(f)){kt=0,ai=null,Fg(n);break}n=function(){kt!==2&&kt!==9||Kt!==t||(kt=7),qi(t)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:jp(f)?(kt=0,ai=null,Fg(n)):(kt=0,ai=null,Sr(t,n,f,7));break;case 5:var y=null;switch(Tt.tag){case 26:y=Tt.memoizedState;case 5:case 27:var C=Tt;if(y?S0(y):C.stateNode.complete){kt=0,ai=null;var V=C.sibling;if(V!==null)Tt=V;else{var oe=C.return;oe!==null?(Tt=oe,Zl(oe)):Tt=null}break t}}kt=0,ai=null,Sr(t,n,f,5);break;case 6:kt=0,ai=null,Sr(t,n,f,6);break;case 8:Rf(),rn=6;break e;default:throw Error(s(462))}}k_();break}catch(Se){Ng(t,Se)}while(!0);return la=Ss=null,I.H=o,I.A=u,Ht=a,Tt!==null?0:(Kt=null,wt=0,pl(),rn)}function k_(){for(;Tt!==null&&!Ge();)Pg(Tt)}function Pg(t){var n=sg(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?Zl(t):Tt=n}function Fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:qu(n);default:og(a,n),n=Tt=Op(n,xa),n=sg(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?Zl(t):Tt=n}function Sr(t,n,a,o){la=Ss=null,qu(n),ur=null,ho=0;var u=n.return;try{if(N_(t,u,n,a,wt)){rn=1,Fl(t,pi(a,t.current)),Tt=null;return}}catch(f){if(u!==null)throw Tt=u,f;rn=1,Fl(t,pi(a,t.current)),Tt=null;return}n.flags&32768?(Dt||o===1?t=!0:vr||(wt&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),zg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){zg(n,Xa);return}t=n.return;var a=O_(n.alternate,n,xa);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=t}while(n!==null);rn===0&&(rn=5)}function zg(t,n){do{var a=P_(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);rn=6,Tt=null}function Ig(t,n,a,o,u,f,y,C,V){t.cancelPendingCommit=null;do Kl();while(Sn!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=vu,qn(t,a,f,y,C,V),t===Kt&&(Tt=Kt=null,wt=0),_r=n,Za=t,_a=a,Af=f,wf=u,wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,W_(le,function(){return kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=G.p,G.p=2,y=Ht,Ht|=4;try{F_(t,n,a)}finally{Ht=y,G.p=u,I.T=o}}Sn=1,Bg(),Hg(),Gg()}}function Bg(){if(Sn===1){Sn=0;var t=Za,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Ht;Ht|=4;try{_g(n,t);var f=Vf,y=Tp(t.containerInfo),C=f.focusedElem,V=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&Ep(C.ownerDocument.documentElement,C)){if(V!==null&&du(C)){var oe=V.start,Se=V.end;if(Se===void 0&&(Se=oe),"selectionStart"in C)C.selectionStart=oe,C.selectionEnd=Math.min(Se,C.value.length);else{var we=C.ownerDocument||document,ue=we&&we.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),tt=C.textContent.length,ht=Math.min(V.start,tt),Yt=V.end===void 0?ht:Math.min(V.end,tt);!pe.extend&&ht>Yt&&(y=Yt,Yt=ht,ht=y);var ee=Mp(C,ht),W=Mp(C,Yt);if(ee&&W&&(pe.rangeCount!==1||pe.anchorNode!==ee.node||pe.anchorOffset!==ee.offset||pe.focusNode!==W.node||pe.focusOffset!==W.offset)){var se=we.createRange();se.setStart(ee.node,ee.offset),pe.removeAllRanges(),ht>Yt?(pe.addRange(se),pe.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),pe.addRange(se))}}}}for(we=[],pe=C;pe=pe.parentNode;)pe.nodeType===1&&we.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<we.length;C++){var Ee=we[C];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}lc=!!Gf,Vf=Gf=null}finally{Ht=u,G.p=o,I.T=a}}t.current=n,Sn=2}}function Hg(){if(Sn===2){Sn=0;var t=Za,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Ht;Ht|=4;try{pg(t,n.alternate,n)}finally{Ht=u,G.p=o,I.T=a}}Sn=3}}function Gg(){if(Sn===4||Sn===3){Sn=0,B();var t=Za,n=_r,a=_a,o=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,_r=Za=null,Vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),na(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{I.T=n,G.p=u}}(_a&3)!==0&&Kl(),qi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Cf?Do++:(Do=0,Cf=t):Do=0,No(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function Kl(){return Bg(),Hg(),Gg(),kg()}function kg(){if(Sn!==5)return!1;var t=Za,n=Af;Af=0;var a=na(_a),o=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=wf,wf=null;var f=Za,y=_a;if(Sn=0,_r=Za=null,_a=0,(Ht&6)!==0)throw Error(s(331));var C=Ht;if(Ht|=4,Eg(f.current),Sg(f,f.current,y,a),Ht=C,No(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ne,f)}catch{}return!0}finally{G.p=u,I.T=o,Vg(t,n)}}function qg(t,n,a){n=pi(a,n),n=rf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(En(t,2),qi(t))}function qt(t,n,a){if(t.tag===3)qg(t,t,a);else for(;n!==null;){if(n.tag===3){qg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){t=pi(a,t),a=jm(2),o=Va(n,a,2),o!==null&&(Xm(a,o,n,t),En(o,2),qi(o));break}}n=n.return}}function Nf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new B_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Mf=!0,u.add(a),t=q_.bind(null,t,n,a),n.then(t,t))}function q_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(wt&a)===a&&(rn===4||rn===3&&(wt&62914560)===wt&&300>M()-ql?(Ht&2)===0&&yr(t,0):Ef|=a,xr===wt&&(xr=0)),qi(t)}function jg(t,n){n===0&&(n=Et()),t=xs(t,n),t!==null&&(En(t,n),qi(t))}function j_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(t,a)}function X_(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),jg(t,a)}function W_(t,n){return ct(t,n)}var Ql=null,br=null,Uf=!1,Jl=!1,Lf=!1,Qa=0;function qi(t){t!==br&&t.next===null&&(br===null?Ql=br=t:br=br.next=t),Jl=!0,Uf||(Uf=!0,Z_())}function No(t,n){if(!Lf&&Jl){Lf=!0;do for(var a=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Zg(o,f))}else f=wt,f=Ae(o,o===Kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ie(o,f)||(a=!0,Zg(o,f));o=o.next}while(a);Lf=!1}}function Y_(){Xg()}function Xg(){Jl=Uf=!1;var t=0;Qa!==0&&sy()&&(t=Qa);for(var n=M(),a=null,o=Ql;o!==null;){var u=o.next,f=Wg(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(f&3)!==0)&&(Jl=!0)),o=u}Sn!==0&&Sn!==5||No(t),Qa!==0&&(Qa=0)}function Wg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Fe(f),C=1<<y,V=u[y];V===-1?((C&a)===0||(C&o)!==0)&&(u[y]=pt(C,n)):V<=n&&(t.expiredLanes|=C),f&=~C}if(n=Kt,a=wt,a=Ae(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&dt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&dt(o),na(a)){case 2:case 8:a=_e;break;case 32:a=le;break;case 268435456:a=Be;break;default:a=le}return o=Yg.bind(null,t),a=ct(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&dt(o),t.callbackPriority=2,t.callbackNode=null,2}function Yg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=wt;return o=Ae(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Rg(t,o,n),Wg(t,M()),t.callbackNode!=null&&t.callbackNode===a?Yg.bind(null,t):null)}function Zg(t,n){if(Kl())return null;Rg(t,n,!0)}function Z_(){oy(function(){(Ht&6)!==0?ct(ge,Y_):Xg()})}function Of(){if(Qa===0){var t=or;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Qa=t}return Qa}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function K_(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Kg((u[nn]||null).action),y=o.submitter;y&&(n=(n=y[nn]||null)?Kg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new ul("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var V=y?Qg(u,y):new FormData(u);$u(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(C.preventDefault(),V=y?Qg(u,y):new FormData(u),$u(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Pf=0;Pf<gu.length;Pf++){var Ff=gu[Pf],Q_=Ff.toLowerCase(),J_=Ff[0].toUpperCase()+Ff.slice(1);Ri(Q_,"on"+J_)}Ri(Cp,"onAnimationEnd"),Ri(Rp,"onAnimationIteration"),Ri(Dp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(p_,"onTransitionRun"),Ri(m_,"onTransitionStart"),Ri(g_,"onTransitionCancel"),Ri(Np,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],V=C.instance,oe=C.currentTarget;if(C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=oe;try{f(u)}catch(Se){hl(Se)}u.currentTarget=null,f=V}else for(y=0;y<o.length;y++){if(C=o[y],V=C.instance,oe=C.currentTarget,C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=oe;try{f(u)}catch(Se){hl(Se)}u.currentTarget=null,f=V}}}}function At(t,n){var a=n[Oa];a===void 0&&(a=n[Oa]=new Set);var o=t+"__bubble";a.has(o)||($g(n,t,2,!1),a.add(o))}function zf(t,n,a){var o=0;n&&(o|=4),$g(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[$l]){t[$l]=!0,K.forEach(function(a){a!=="selectionchange"&&($_.has(a)||zf(a,!1,t),zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,zf("selectionchange",!1,n))}}function $g(t,n,a,o){switch(C0(n)){case 2:var u=wy;break;case 8:u=Cy;break;default:u=$f}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Ii(C),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=f=y;continue e}C=C.parentNode}}o=o.return}ap(function(){var oe=f,Se=tu(a),we=[];e:{var ue=Up.get(t);if(ue!==void 0){var pe=ul,tt=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":pe=Xx;break;case"focusin":tt="focus",pe=ou;break;case"focusout":tt="blur",pe=ou;break;case"beforeblur":case"afterblur":pe=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Zx;break;case Cp:case Rp:case Dp:pe=zx;break;case Np:pe=Qx;break;case"scroll":case"scrollend":pe=Ux;break;case"wheel":pe=$x;break;case"copy":case"cut":case"paste":pe=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=cp;break;case"toggle":case"beforetoggle":pe=t_}var ht=(n&4)!==0,Yt=!ht&&(t==="scroll"||t==="scrollend"),ee=ht?ue!==null?ue+"Capture":null:ue;ht=[];for(var W=oe,se;W!==null;){var Ee=W;if(se=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||se===null||ee===null||(Ee=$r(W,ee),Ee!=null&&ht.push(Lo(W,Ee,se))),Yt)break;W=W.return}0<ht.length&&(ue=new pe(ue,tt,null,a,Se),we.push({event:ue,listeners:ht}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&a!==eu&&(tt=a.relatedTarget||a.fromElement)&&(Ii(tt)||tt[$n]))break e;if((pe||ue)&&(ue=Se.window===Se?Se:(ue=Se.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(tt=a.relatedTarget||a.toElement,pe=oe,tt=tt?Ii(tt):null,tt!==null&&(Yt=c(tt),ht=tt.tag,tt!==Yt||ht!==5&&ht!==27&&ht!==6)&&(tt=null)):(pe=null,tt=oe),pe!==tt)){if(ht=op,Ee="onMouseLeave",ee="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ht=cp,Ee="onPointerLeave",ee="onPointerEnter",W="pointer"),Yt=pe==null?ue:Hi(pe),se=tt==null?ue:Hi(tt),ue=new ht(Ee,W+"leave",pe,a,Se),ue.target=Yt,ue.relatedTarget=se,Ee=null,Ii(Se)===oe&&(ht=new ht(ee,W+"enter",tt,a,Se),ht.target=se,ht.relatedTarget=Yt,Ee=ht),Yt=Ee,pe&&tt)t:{for(ht=ey,ee=pe,W=tt,se=0,Ee=ee;Ee;Ee=ht(Ee))se++;Ee=0;for(var lt=W;lt;lt=ht(lt))Ee++;for(;0<se-Ee;)ee=ht(ee),se--;for(;0<Ee-se;)W=ht(W),Ee--;for(;se--;){if(ee===W||W!==null&&ee===W.alternate){ht=ee;break t}ee=ht(ee),W=ht(W)}ht=null}else ht=null;pe!==null&&e0(we,ue,pe,ht,!1),tt!==null&&Yt!==null&&e0(we,Yt,tt,ht,!0)}}e:{if(ue=oe?Hi(oe):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Ot=vp;else if(mp(ue))if(xp)Ot=f_;else{Ot=c_;var it=l_}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?oe&&Ci(oe.elementType)&&(Ot=vp):Ot=u_;if(Ot&&(Ot=Ot(t,oe))){gp(we,Ot,a,Se);break e}it&&it(t,ue,oe),t==="focusout"&&oe&&ue.type==="number"&&oe.memoizedProps.value!=null&&Zt(ue,"number",ue.value)}switch(it=oe?Hi(oe):window,t){case"focusin":(mp(it)||it.contentEditable==="true")&&($s=it,hu=oe,oo=null);break;case"focusout":oo=hu=$s=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Ap(we,a,Se);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Ap(we,a,Se)}var yt;if(cu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Js?hp(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(up&&a.locale!=="ko"&&(Js||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Js&&(yt=sp()):(Pa=Se,au="value"in Pa?Pa.value:Pa.textContent,Js=!0)),it=ec(oe,Ct),0<it.length&&(Ct=new lp(Ct,t,null,a,Se),we.push({event:Ct,listeners:it}),yt?Ct.data=yt:(yt=pp(a),yt!==null&&(Ct.data=yt)))),(yt=i_?a_(t,a):s_(t,a))&&(Ct=ec(oe,"onBeforeInput"),0<Ct.length&&(it=new lp("onBeforeInput","beforeinput",null,a,Se),we.push({event:it,listeners:Ct}),it.data=yt)),K_(we,t,oe,a,Se)}Jg(we,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(t,a),u!=null&&o.unshift(Lo(t,u,f)),u=$r(t,n),u!=null&&o.push(Lo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ey(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e0(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,V=C.alternate,oe=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||oe===null||(V=oe,u?(oe=$r(a,f),oe!=null&&y.unshift(Lo(a,oe,V))):u||(oe=$r(a,f),oe!=null&&y.push(Lo(a,oe,V)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(ty,`
`).replace(ny,"")}function n0(t,n){return n=t0(n),t0(t)===n}function Wt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yn(t,""+o);break;case"className":rt(t,"class",o);break;case"tabIndex":rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,a,o);break;case"style":Zs(t,o,f);break;case"data":if(n!=="object"){rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=aa);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":At("beforetoggle",t),At("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":et(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":et(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":et(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":et(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":et(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":et(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":et(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":et(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":et(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dx.get(a)||a,nt(t,a,o))}}function Hf(t,n,a,o,u,f){switch(a){case"style":Zs(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?yn(t,o):(typeof o=="number"||typeof o=="bigint")&&yn(t,""+o);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"onClick":o!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!he.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,f,y,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":At("invalid",t);var C=f=y=u=null,V=null,oe=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":y=Se;break;case"checked":V=Se;break;case"defaultChecked":oe=Se;break;case"value":f=Se;break;case"defaultValue":C=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Wt(t,n,o,Se,a,null)}}An(t,f,C,V,oe,y,u,!1);return;case"select":At("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Wt(t,n,u,C,a,null)}n=f,a=y,t.multiple=!!o,n!=null?di(t,!!o,n,!1):a!=null&&di(t,!!o,a,!0);return;case"textarea":At("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Wt(t,n,y,C,a,null)}Rn(t,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,V,o,a,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)At(Uo[o],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(o=a[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,oe,o,a,null)}return;default:if(Ci(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&Hf(t,n,Se,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Wt(t,n,C,o,a,null))}function iy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,V=null,oe=null,Se=null;for(pe in a){var we=a[pe];if(a.hasOwnProperty(pe)&&we!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=we;default:o.hasOwnProperty(pe)||Wt(t,n,pe,null,o,we)}}for(var ue in o){var pe=o[ue];if(we=a[ue],o.hasOwnProperty(ue)&&(pe!=null||we!=null))switch(ue){case"type":f=pe;break;case"name":u=pe;break;case"checked":oe=pe;break;case"defaultChecked":Se=pe;break;case"value":y=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:pe!==we&&Wt(t,n,ue,pe,o,we)}}xt(t,y,C,V,oe,Se,f,u);return;case"select":pe=y=C=ue=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":pe=V;default:o.hasOwnProperty(f)||Wt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ue=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==V&&Wt(t,n,u,f,o,V)}n=C,a=y,o=pe,ue!=null?di(t,!!a,ue,!1):!!o!=!!a&&(n!=null?di(t,!!a,n,!0):di(t,!!a,a?[]:"",!1));return;case"textarea":pe=ue=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Wt(t,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ue=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(t,n,y,u,o,f)}Vt(t,ue,pe);return;case"option":for(var tt in a)if(ue=a[tt],a.hasOwnProperty(tt)&&ue!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Wt(t,n,tt,null,o,ue)}for(V in o)if(ue=o[V],pe=a[V],o.hasOwnProperty(V)&&ue!==pe&&(ue!=null||pe!=null))switch(V){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Wt(t,n,V,ue,o,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in a)ue=a[ht],a.hasOwnProperty(ht)&&ue!=null&&!o.hasOwnProperty(ht)&&Wt(t,n,ht,null,o,ue);for(oe in o)if(ue=o[oe],pe=a[oe],o.hasOwnProperty(oe)&&ue!==pe&&(ue!=null||pe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Wt(t,n,oe,ue,o,pe)}return;default:if(Ci(n)){for(var Yt in a)ue=a[Yt],a.hasOwnProperty(Yt)&&ue!==void 0&&!o.hasOwnProperty(Yt)&&Hf(t,n,Yt,void 0,o,ue);for(Se in o)ue=o[Se],pe=a[Se],!o.hasOwnProperty(Se)||ue===pe||ue===void 0&&pe===void 0||Hf(t,n,Se,ue,o,pe);return}}for(var ee in a)ue=a[ee],a.hasOwnProperty(ee)&&ue!=null&&!o.hasOwnProperty(ee)&&Wt(t,n,ee,null,o,ue);for(we in o)ue=o[we],pe=a[we],!o.hasOwnProperty(we)||ue===pe||ue==null&&pe==null||Wt(t,n,we,ue,o,pe)}function i0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&i0(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],oe=V.startTime;if(oe>C)break;var Se=V.transferSize,we=V.initiatorType;Se&&i0(we)&&(V=V.responseEnd,y+=Se*(V<C?1:(C-oe)/(V-oe)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gf=null,Vf=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function a0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===qf?!1:(qf=t,!0):(qf=null,!1)}var r0=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(ly)}:r0;function ly(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function l0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[fi]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);Ar(n)}function c0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[fi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function uy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function u0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function f0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function d0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function h0(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ys(t)}var yi=new Map,p0=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=G.d;G.d={f:dy,r:hy,D:py,C:my,L:gy,m:vy,X:_y,S:xy,M:yy};function dy(){var t=ya.f(),n=Wl();return t||n}function hy(t){var n=Bi(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ya.r(t)}var Mr=typeof document>"u"?null:document;function m0(t,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),p0.has(u)||(p0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Pn(n,"link",t),w(n),o.head.appendChild(n)))}}function py(t){ya.D(t),m0("dns-prefetch",t,null)}function my(t,n){ya.C(t,n),m0("preconnect",t,n)}function gy(t,n,a){ya.L(t,n,a);var o=Mr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(t)+'"]';var f=u;switch(n){case"style":f=Er(t);break;case"script":f=Tr(t)}yi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Pn(n,"link",t),w(n),o.head.appendChild(n)))}}function vy(t,n){ya.m(t,n);var a=Mr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Tr(t)}if(!yi.has(f)&&(t=g({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Pn(o,"link",t),w(o),a.head.appendChild(o)}}}function xy(t,n,a){ya.S(t,n,a);var o=Mr;if(o&&t){var u=wi(o).hoistableStyles,f=Er(t);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Po(f)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Zf(t,a);var V=y=o.createElement("link");w(V),Pn(V,"link",t),V._p=new Promise(function(oe,Se){V.onload=oe,V.onerror=Se}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ic(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function _y(t,n){ya.X(t,n);var a=Mr;if(a&&t){var o=wi(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=g({src:t,async:!0},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),w(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function yy(t,n){ya.M(t,n);var a=Mr;if(a&&t){var o=wi(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),w(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function g0(t,n,a,o){var u=(u=Z.current)?nc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=wi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Er(a.href);var f=wi(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(Po(t)))&&!f._p&&(y.instance=f,y.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Sy(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=wi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Er(t){return'href="'+Ye(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function v0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Sy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pn(n,"link",a),w(n),t.head.appendChild(n))}function Tr(t){return'[src="'+Ye(t)+'"]'}function Fo(t){return"script[async]"+t}function x0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,w(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),w(o),Pn(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=Er(a.href);var f=t.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;o=v0(a),(u=yi.get(u))&&Zf(o,u),f=(t.ownerDocument||t).createElement("link"),w(f);var y=f;return y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),Pn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,t),n.instance=f;case"script":return f=Tr(a.src),(u=t.querySelector(Fo(f)))?(n.instance=u,w(u),u):(o=a,(u=yi.get(f))&&(o=g({},a),Kf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Pn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function _0(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[fi]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function y0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function by(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function S0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function My(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,o=v0(o),(u=yi.get(u))&&Zf(o,u),f=f.createElement("link"),w(f);var y=f;y._p=new Promise(function(C,V){y.onload=C,y.onerror=V}),Pn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Ey(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*ay());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(Ty,t),rc=null,sc.call(t))}function Ty(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ay(t,n,a,o,u,f,y,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function b0(t,n,a,o,u,f,y,C,V,oe,Se,we){return t=new Ay(t,n,a,y,V,oe,Se,we,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Lu(f),t}function M0(t){return t?(t=nr,t):nr}function E0(t,n,a,o,u,f){u=M0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(t,o,n),a!==null&&(Kn(a,t,n),mo(a,t,n))}function T0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){T0(t,n),(t=t.alternate)&&T0(t,n)}function A0(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Kn(n,t,67108864),Jf(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var n=ri();n=ta(n);var a=xs(t,n);a!==null&&Kn(a,t,n),Jf(t,n)}}var lc=!0;function wy(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=2,$f(t,n,a,o)}finally{G.p=f,I.T=u}}function Cy(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=8,$f(t,n,a,o)}finally{G.p=f,I.T=u}}function $f(t,n,a,o){if(lc){var u=ed(o);if(u===null)Bf(t,n,o,cc,a),R0(t,o);else if(Dy(u,t,n,a,o))o.stopPropagation();else if(R0(t,o),n&4&&-1<Ry.indexOf(t)){for(;u!==null;){var f=Bi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=De(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var V=1<<31-Fe(y);C.entanglements[1]|=V,y&=~V}qi(f),(Ht&6)===0&&(jl=M()+500,No(0))}}break;case 31:case 13:C=xs(f,2),C!==null&&Kn(C,f,2),Wl(),Jf(f,2)}if(f=ed(o),f===null&&Bf(t,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Bf(t,n,o,null,a)}}function ed(t){return t=tu(t),td(t)}var cc=null;function td(t){if(cc=null,t=Ii(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function C0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case ge:return 2;case _e:return 8;case le:case Ke:return 32;case Be:return 268435456;default:return 32}default:return 32}}var nd=!1,$a=null,es=null,ts=null,Io=new Map,Bo=new Map,ns=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Ho(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Bi(n),n!==null&&A0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Dy(t,n,a,o,u){switch(n){case"focusin":return $a=Ho($a,t,n,a,o,u),!0;case"dragenter":return es=Ho(es,t,n,a,o,u),!0;case"mouseover":return ts=Ho(ts,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Io.set(f,Ho(Io.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Ho(Bo.get(f)||null,t,n,a,o,u)),!0}return!1}function D0(t){var n=Ii(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Tn(t.priority,function(){w0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Tn(t.priority,function(){w0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=Bi(a),n!==null&&A0(n),t.blockedOn=a,!1;n.shift()}return!0}function N0(t,n,a){uc(t)&&a.delete(n)}function Ny(){nd=!1,$a!==null&&uc($a)&&($a=null),es!==null&&uc(es)&&(es=null),ts!==null&&uc(ts)&&(ts=null),Io.forEach(N0),Bo.forEach(N0)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,nd||(nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ny)))}var dc=null;function U0(t){dc!==t&&(dc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(td(o||a)===null)continue;break}var f=Bi(a);f!==null&&(t.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(t){function n(V){return fc(V,t)}$a!==null&&fc($a,t),es!==null&&fc(es,t),ts!==null&&fc(ts,t),Io.forEach(n),Bo.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)D0(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[nn]||null;if(typeof f=="function")y||U0(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[nn]||null)C=y.formAction;else if(td(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),U0(a)}}}function L0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function id(t){this._internalRoot=t}hc.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();E0(a,o,t,n,null,null)},hc.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;E0(t.current,2,null,t,null,null),Wl(),n[$n]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ia();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,t),a===0&&D0(t)}};var O0=e.version;if(O0!=="19.2.4")throw Error(s(527,O0,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Uy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Ne=pc.inject(Uy),Re=pc}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Gm,f=Vm,y=km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=b0(t,1,!1,null,null,a,o,null,u,f,y,L0),t[$n]=n.current,If(t),new id(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Gm,y=Vm,C=km,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=b0(t,1,!0,n,a??null,o,u,V,f,y,C,L0),n.context=M0(null),a=n.current,o=ri(),o=ta(o),u=Ga(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,En(n,a),qi(n),t[$n]=n.current,If(t),new hc(n)},Vo.version="19.2.4",Vo}var q0;function Vy(){if(q0)return rd.exports;q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rd.exports=Gy(),rd.exports}var ky=Vy();const qy=Wv(ky),Jo={name:"Berlín Techno",bpm:128,layers:[{id:"kick_basic",type:"percussion",minCombo:1,maxCombo:100,color:"var(--text-primary)",opacity:.6,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"hihat_basic",type:"percussion",minCombo:5,maxCombo:80,color:"#00FFFF",opacity:.8,yOffset:-5,pattern:r=>r%4===2,play:r=>r.playHiHat()},{id:"bass_acid_low",type:"bass",minCombo:12,maxCombo:120,color:"var(--accent-primary)",opacity:.4,yOffset:5,pattern:r=>r%2===0,play:(r,e,i)=>{const s=[55,65,73,82];r.playBass(s[e%s.length],i)}},{id:"snare_break",type:"percussion",minCombo:25,maxCombo:150,color:"#FF00FF",opacity:.7,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"ghost_hats",type:"percussion",minCombo:50,maxCombo:180,color:"#AAAAAA",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"acid_arp",type:"lead",minCombo:80,color:"#CCFF00",opacity:.5,yOffset:-10,pattern:r=>!0,play:(r,e,i)=>{const s=[110,130,165,196];r.playLead(s[e%s.length],i)}},{id:"fm_pulsar",type:"fx",minCombo:120,color:"#FF5500",opacity:.6,yOffset:0,pattern:r=>r%16===8,play:(r,e,i)=>r.playLead(440,i*2)},{id:"ultra_lead",type:"lead",minCombo:160,color:"#FFFFFF",opacity:.9,yOffset:-15,pattern:r=>r%3===0,play:(r,e,i)=>{const s=[220,330,440,660];r.playLead(s[Math.floor(Math.random()*s.length)],i*3)}},{id:"heavenly_lead",type:"lead",minCombo:200,color:"#00FFFF",opacity:.8,yOffset:-20,pattern:r=>r%8===4,play:(r,e,i)=>r.playLead(880,i)}]},Gd={name:"Cyber Ambient",bpm:90,layers:[{id:"pad",type:"lead",minCombo:1,color:"var(--accent-primary)",opacity:.3,yOffset:10,pattern:r=>r%16===0,play:(r,e,i)=>r.playBass(110,i)},{id:"glitch",type:"fx",minCombo:10,color:"#00FFFF",opacity:.6,pattern:r=>Math.random()>.8,play:r=>r.playHiHat()},{id:"shimmer",type:"lead",minCombo:40,color:"#FFFFFF",opacity:.4,yOffset:-15,pattern:r=>r%16===8,play:(r,e,i)=>r.playLead(880,i)},{id:"deep_pulse",type:"bass",minCombo:80,color:"#5500FF",opacity:.5,yOffset:15,pattern:r=>r%32===0,play:(r,e,i)=>r.playBass(40,i*2)},{id:"celestial",type:"lead",minCombo:150,color:"#00FF88",opacity:.7,pattern:r=>r%16===12,play:(r,e,i)=>r.playLead(1320,i)}]},Vd={name:"Acid House 303",bpm:124,layers:[{id:"kick",type:"percussion",minCombo:1,color:"var(--text-primary)",opacity:.5,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"snare",type:"percussion",minCombo:5,color:"#FF00FF",opacity:.6,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"acid",type:"bass",minCombo:15,maxCombo:120,color:"#CCFF00",opacity:.8,yOffset:-10,pattern:r=>!0,play:(r,e,i)=>{const s=[33,44,55,66];r.playBass(s[e%s.length],i*2)}},{id:"ghost",type:"percussion",minCombo:40,color:"#CCFF00",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"high_acid",type:"lead",minCombo:80,color:"#00FF00",opacity:.6,yOffset:-20,pattern:r=>r%8===0,play:(r,e,i)=>r.playLead(440,i)},{id:"squelch_peak",type:"fx",minCombo:140,color:"#FF00FF",opacity:.8,pattern:r=>r%4===3,play:r=>r.playSnare()},{id:"cosmic_resonance",type:"lead",minCombo:200,color:"#FFFFFF",opacity:.9,pattern:r=>r%16===0,play:(r,e,i)=>r.playLead(1320,i)}]},zc={oneStar:{stars:1,levels:[{id:1,phrases:["el sol sale cada mañana en el este la casa es grande y de color azul mi perro corre por el campo verde me gusta comer pan tostado con miel el agua del rio esta muy fria hoy el gato duerme tranquilo sobre el sofa viejo los niños juegan felices en el parque tengo un libro nuevo para leer esta tarde","la mesa tiene cuatro patas de madera fuerte el jardinero riega las flores con agua fresca cada tarde de verano la mama cocina una sopa muy rica para toda la familia el pajaro vuela alto en el cielo azul y claro busca comida entre los arboles verdes del bosque"]},{id:2,phrases:["hoy el cielo esta despejado y hace mucho calor caminamos por la calle principal de la ciudad el coche de mi padre es rapido y seguro la madre prepara una cena rica para todos siento mucha paz cuando escucho la lluvia caer vamos al cine a ver una pelicula de risas el jardin tiene flores rojas y blancas muy bonitas y grandes","el abuelo cuenta historias de viajes antiguos a otros paises lejanos nos gusta sentarnos cerca del fuego cuando hace frio en invierno la ventana esta abierta y entra un aire fresco que huele a campo recien cortado busco las llaves de casa en mi mochila pequeña pero no las encuentro por ninguna parte"]},{id:3,phrases:["un dia en el campo es lo mejor para descansar del ruido de los autos podemos ver vacas ovejas y caballos comiendo hierba fresca bajo la sombra de un gran arbol verde la comida sabe mejor cuando estamos todos juntos compartiendo risas y momentos felices bajo el sol de la tarde que ya se va","mañana sera un dia de mucho trabajo pero ahora quiero descansar un poco mas el sofa es comodo y la manta es suave y caliente me quedo dormido pensando en mis planes para las vacaciones de verano cerca del mar azul con olas grandes para jugar con mis amigos de siempre de la escuela"]}]},twoStars:{stars:2,levels:[{id:1,phrases:["Aunque el camino sea difícil, siempre hay una luz al final del túnel que nos guía. La paciencia es una virtud que pocos poseen, pero que todos necesitamos cultivar para alcanzar nuestras metas más ambiciosas. Mañana será un día mejor si hoy nos esforzamos al máximo en nuestras tareas diarias y mostramos gratitud por lo que tenemos.","¿Has pensado alguna vez en la inmensidad del universo y en lo pequeños que somos nosotros en comparación con las estrellas? El tiempo vuela cuando estamos disfrutando de una buena conversación con amigos sinceros. Las palabras tienen el poder de construir puentes o levantar muros, por eso es importante elegir bien qué decir en cada momento preciso."]},{id:2,phrases:["¡Qué alegría verte de nuevo por aquí después de tanto tiempo sin saber de ti! Me pregunto si habrás cumplido todos esos sueños que tenías guardados en el cajón de las ilusiones. A veces, la vida nos sorprende con giros inesperados que nos obligan a cambiar de rumbo radicalmente, pero siempre aprendemos algo nuevo y valioso en el proceso de adaptación.","¿Sabías que la música es el lenguaje universal que conecta los corazones de personas de diferentes culturas? No importa de dónde vengas ni qué lengua hables, una melodía hermosa puede evocar sentimientos profundos en cualquier ser humano sensible. Me gusta cerrar los ojos y dejarme llevar por el ritmo suave de una guitarra española en una noche estrellada."]},{id:3,phrases:["El otoño trae consigo una melancolía dulce, con sus hojas secas crujiendo bajo nuestros pies cansados de caminar. El olor a tierra mojada tras la tormenta es uno de los perfumes más exquisitos que la naturaleza nos regala generosamente. Cada estación tiene su propio encanto, pero la transición entre el verano y el invierno parece tener una magia especial y única.","Si decides emprender un viaje largo, asegúrate de llevar contigo solo lo indispensable para no cargar con peso innecesario. La libertad se encuentra en la simplicidad de las cosas pequeñas: un amanecer, una taza de café caliente, una mirada cómplice. No busques la felicidad en objetos materiales, pues ella reside en los momentos compartidos con las personas que amas de verdad."]}]},threeStars:{stars:3,levels:[{id:1,phrases:["Para implementar correctamente un sistema asíncrono en Rust, es vital entender el concepto de Ownership y Borrowing profundamente. El uso de `tokio` permite gestionar múltiples hilos de ejecución sin bloquear el Event Loop principal del sistema operativo host. Si la latencia supera los 20ms, debemos optimizar el canal de comunicación usando UDP (osc) en lugar de protocolos pesados como HTTP o JSON serializado.","El patrón de diseño 'Hexagonal Architecture' separa el dominio lógico de los detalles de infraestructura mediante puertos y adaptadores. Esto permite que el núcleo de la aplicación sea agnóstico a la base de datos o al framework de interfaz de usuario utilizado. En un entorno de alto rendimiento, la gestión manual de la memoria y la reducción de las asignaciones en el montón (heap allocations) son estrategias clave para el éxito."]},{id:2,phrases:["const pipeline = (data) => data.filter(x => x.score > 80).map(x => ({ ...x, status: 'active' })); La recursividad puede ser elegante pero peligrosa si no se maneja el caso base adecuadamente, provocando un StackOverflowError. El uso de clausuras (closures) en JavaScript permite capturar el estado léxico circundante, creando potentes abstracciones para la programación funcional moderna y reactiva.","docker-run --rm -v $(pwd):/app node:alpine npm install && npm run build --module-resolution=node. La seguridad en las APIs RESTful se garantiza habitualmente mediante el uso de tokens JWT (JSON Web Tokens) firmados digitalmente. Es fundamental implementar políticas de CORS estrictas y sanitizar todas las entradas de los usuarios para prevenir ataques de inyección SQL o Cross-Site Scripting (XSS) en producción."]},{id:3,phrases:["El algoritmo de Dijkstra encuentra el camino más corto en un grafo con pesos no negativos utilizando una cola de prioridad. En machine learning, el descenso de gradiente estocástico es la base para entrenar redes neuronales profundas mediante la actualización iterativa de los pesos. La complejidad temporal O(n log n) es típica de algoritmos de ordenación eficientes como QuickSort o MergeSort en el caso promedio.","La transformada de Fourier convierte una señal del dominio del tiempo al dominio de la frecuencia, revelando sus componentes espectrales. En sistemas distribuidos, el teorema CAP establece que es imposible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones. La implementación de un Sidecar en Rust para procesamiento de audio requiere una sincronización precisa mediante buffers circulares y comunicación atómica."]}]}},jy=Object.values(zc).flatMap(r=>r.levels.flatMap(e=>e.phrases)),Hs=[{id:"fase_estrellas",title:"🏆 Desafíos por Estrellas",description:"Niveles de dificultad real con frases de 60+ palabras.",levels:[...zc.oneStar.levels.map(r=>({id:`star_1_lvl_${r.id}`,title:`1 Estrella - Nivel ${r.id}`,description:"Vocabulario esencial y fluidez básica.",fingers:[],keys:[],difficulty:1,phrases:r.phrases})),...zc.twoStars.levels.map(r=>({id:`star_2_lvl_${r.id}`,title:`2 Estrellas - Nivel ${r.id}`,description:"Puntuación, tildes y gramática compleja.",fingers:[],keys:[],difficulty:2,phrases:r.phrases})),...zc.threeStars.levels.map(r=>({id:`star_3_lvl_${r.id}`,title:`3 Estrellas - Nivel ${r.id}`,description:"Símbolos, código y términos técnicos densos.",fingers:[],keys:[],difficulty:3,phrases:r.phrases}))]},{id:"fase_1",title:"Fase 1: Pares de Dedos (Homólogos)",description:"Coordinación estricta de dedos equivalentes.",levels:[{id:"nivel_1_pares_indices",title:"Pares: Índices (L2 + R2)",description:"Teclas: F, G, V, B, R, T + J, H, N, M, Y, U (Solo U)",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U","4","5","6","7"],difficulty:1,phrases:["un muy tu hutu run fun gun bun my ugh","tu hutu muy un tu hutu muy un tu hutu","muy tu run un fun gun bun y hutu","unum hum tum bum rum gum yum","frt vbg jyh nm u frt vbg jyh nm u"]},{id:"nivel_1_pares_medios",title:"Pares: Corazón (L3 + R3)",description:"Teclas: D, E, C + K, I (Solo E, I)",fingers:["L3","R3"],keys:["D","E","C","K","I","3","8",","],difficulty:1,phrases:["dice kiki decide ceder ese cedi de kiev","kiki dice cede ese dique y decide","decide ceder dice kiki ece de cedec","cedi mi dique y decidi ceder ese cedi","ded cdc kik iii ded cdc kik iii"]},{id:"nivel_1_pares_anulares",title:"Pares: Anulares (L4 + R4)",description:"Teclas: S, W, X + L, O (Solo O)",fingers:["L4","R4"],keys:["S","W","X","L","O","2","9","."],difficulty:1,phrases:["oso soso solo lo olo los sol","lolo olo los osos solos o lo olo","sol solo o los osos sos o lo olo","so los olo o lolo solo lo olo","sws xws lol olo sws xws lol olo"]},{id:"nivel_1_pares_meniques",title:"Pares: Meñiques (L5 + R5)",description:"Teclas: A, Q, Z + Ñ, P (Solo A)",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P","1","0","-","´","'"],difficulty:1,phrases:["papa aña zapa a aza paña a papa","aza a paña a papa aña a zapa","paña zapa a aza aña a papa","apa aña aza paña zapa papa","aqa aza ñpñ aqa aza ñpñ"]}]},{id:"fase_2",title:"Fase 2: Dedos Individuales (Mano Izquierda)",description:"Control independiente de cada dedo izquierdo.",levels:[{id:"nivel_2_indice_izq",title:"1. Índice Izquierdo",description:"F, R, T, G, V, B (Sin Vocales)",fingers:["L2"],keys:["F","R","T","G","V","B","4","5"],difficulty:2,phrases:["frt gvb frt gvb frt gvb frt gvb","fgf rtr vbv fgf rtr vbv fgf rtr","bgt rfv bgt rfv bgt rfv bgt rfv","vfr tgb vfr tgb vfr tgb vfr tgb","ff rr tt gg vv bb ff rr tt gg"]},{id:"nivel_2_medio_izq",title:"2. Corazón Izquierdo",description:"D, E, C (Vocal E)",fingers:["L3"],keys:["D","E","C","3"],difficulty:2,phrases:["cede de cede de cede de cede","dede cede dede cede dede cede","ece de cedec ece de cedec ece","ded cdc ded cdc ded cdc ded","cede ese cede ese cede ese"]},{id:"nivel_2_anular_izq",title:"3. Anular Izquierdo",description:"S, W, X (Sin Vocales)",fingers:["L4"],keys:["S","W","X","2"],difficulty:2,phrases:["sws xws sws xws sws xws sws","wxw sxs wxw sxs wxw sxs wxw","ss ww xx ss ww xx ss ww xx","swx xws swx xws swx xws swx","xsw wsx xsw wsx xsw wsx xsw"]},{id:"nivel_2_menique_izq",title:"4. Meñique Izquierdo",description:"A, Q, Z (Vocal A)",fingers:["L5"],keys:["A","Q","Z","1","<",">"],difficulty:2,phrases:["aza aqa aza aqa aza aqa aza","aqa zaza aqa zaza aqa zaza","qaz aza qaz aza qaz aza qaz","aa qq zz aa qq zz aa qq zz","zqa aqz zqa aqz zqa aqz zqa"]}]},{id:"fase_3",title:"Fase 3: Dedos Individuales (Mano Derecha)",description:"Control independiente de cada dedo derecho.",levels:[{id:"nivel_3_indice_der",title:"1. Índice Derecho",description:"J, H, N, M, U, Y (Vocales U, Y)",fingers:["R2"],keys:["J","H","N","M","U","Y","6","7"],difficulty:2,phrases:["un muy hum un muy hum un muy","muum nunn muum nunn muum nunn","juy hum juy hum juy hum juy","yny umu yny umu yny umu yny","muy un muy un muy un muy un"]},{id:"nivel_3_medio_der",title:"2. Corazón Derecho",description:"K, I (Vocal I)",fingers:["R3"],keys:["K","I","8",","],difficulty:2,phrases:["kik iii kik iii kik iii kik","ki ik ki ik ki ik ki ik ki","kiki ikik kiki ikik kiki ikik","iii kkk iii kkk iii kkk iii","ik ki ik ki ik ki ik ki ik"]},{id:"nivel_3_anular_der",title:"3. Anular Derecho",description:"L, O (Vocal O)",fingers:["R4"],keys:["L","O","9","."],difficulty:2,phrases:["lol olo lol olo lol olo lol","lo ol lo ol lo ol lo ol lo","lolo olol lolo olol lolo olol","ooo lll ooo lll ooo lll ooo","lloo ooll lloo ooll lloo ooll"]},{id:"nivel_3_menique_der",title:"4. Meñique Derecho",description:"Ñ, P (Sin Vocales)",fingers:["R5"],keys:["Ñ","P","0","-","´"],difficulty:2,phrases:["ñpñ pñp ñpñ pñp ñpñ pñp ñpñ","ññ pp ññ pp ññ pp ññ pp ññ","pñ ñp pñ ñp pñ ñp pñ ñp pñ","ñpñp pñpñ ñpñp pñpñ ñpñp pñpñ","ppññ ppññ ppññ ppññ ppññ ppññ"]}]},{id:"fase_4",title:"Fase 4: Combinaciones Reales",description:"Palabras completas usando ambas manos.",levels:[{id:"nivel_4_comunes",title:"Palabras Comunes",description:"Las 100 palabras más usadas.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:["A","B","C","D","E","F","G","H","I","J","L","M","N","Ñ","O","P","Q","R","S","T","U","V","Y","Z"],difficulty:3,phrases:["para que sirve la vida si no hacemos cosas buenas por los demas cada dia","como estan las cosas en tu casa despues de todo lo que paso ayer","todo el mundo sabe eso desde hace mucho tiempo y nadie dice nada al respecto","cuando vienes a casa para comer algo rico y hablar de nuestros planes"]}]},{id:"fase_6",title:"Fase 6: Texto Completo (Pangramas)",description:"Todas las letras.",levels:[{id:"nivel_6_texto_completo",title:"Pangramas",description:"Todas las letras.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:[],difficulty:3,phrases:["el veloz murciélago hindú comía feliz cardillo y kiwi","la cigüeña tocaba el saxofón detrás del palenque de paja","queda gazpacho, fibra, latex, jamon, kiwi y viñas"]}]},{id:"fase_7",title:"Fase 7: Acentos",description:"Práctica con tildes.",levels:[{id:"fase_7_acentos",title:"Acentos",description:"Vocales acentuadas.",fingers:["R5","L2","L3","L5","R2","R3","R4"],keys:["´","A","E","I","O","U"],difficulty:3,phrases:["á é í ó ú","mamá comió puré","allí durmió él","avión camión canción"]}]}],Xy=({currentPhrase:r,normalizedTypedText:e,currentWordInfo:i,isComposingState:s,palette:l,customColor:c,frequencyBands:d,birdRotation:h,birdPos3D:m,birdSize:p,visualsConfig:v,combo:g,comboMultiplier:_,isMusicLightingEnabled:S,onDimensionalMenu:E,PALETTE_COLORS:A,isCircuitMode:b,circuitTimer:x,circuitTitle:N,onCircuitCycle:L,isLevelActive:D,onSelectLevel:U,themeScheme:F="dark",currentMusicStyle:P=Jo,onMusicStyleChange:q,currentLevelProgress:T=0,currentLevelScore:R=0,currentLevelAccuracy:H=100,onCycleShapes:X})=>{const J=F==="light"?"text-black":"text-white",ne="text-[var(--accent-primary)]",re=[Jo,Gd,Vd],I=["fa-bolt","fa-leaf","fa-flask"],[G,$]=fe.useState(null),[ve,xe]=fe.useState(!1),[z,Q]=fe.useState(!1),de=()=>{xe(!ve)},me=[{id:"practice_indice",title:"Dedos Índices",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U"]},{id:"practice_anular",title:"Dedos Anulares",fingers:["L4","R4"],keys:["S","W","X","L","O"]},{id:"practice_corazon",title:"Dedos Corazón",fingers:["L3","R3"],keys:["D","E","C","K","I"]},{id:"practice_anular_izq",title:"Anular Izquierdo",fingers:["L4"],keys:["S","W","X"]},{id:"practice_menique",title:"Meñique",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P"]}];Hs.flatMap(Me=>Me.levels.filter(be=>be.difficulty===1)),Hs.flatMap(Me=>Me.levels.filter(be=>be.difficulty===2)),Hs.flatMap(Me=>Me.levels.filter(be=>be.difficulty===3));const Ue=Me=>{$(G===Me?null:Me)},Z=()=>{const Me=be=>{var Pe;return((Pe=Hs.find(Ze=>Ze.id==="fase_estrellas"))==null?void 0:Pe.levels.filter(Ze=>Ze.difficulty===be))||[]};return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-6 flex flex-col items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsxs("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 gap-6",children:[O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🏆 Niveles"}),[1,2,3].map(be=>{const Pe=Me(be),Ze=G===be,ut=be===1?"Novato":be===2?"Experto":"Maestro";return O.jsxs("div",{className:"w-full flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>Ue(be),className:`w-full p-4 flex items-center justify-between transition-all ${Ze?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("div",{className:"flex gap-1 mb-1",children:Array.from({length:be}).map((st,at)=>O.jsx("i",{className:`fa fa-star text-[12px] ${Ze?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`},at))}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${Ze?"text-[var(--accent-primary)]":"text-white"}`,children:ut})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${Ze?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${Ze?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:Pe.slice(0,4).map(st=>{const at=typeof window<"u"?Number(localStorage.getItem(`typ_progress_${st.id}`)||0):0,mt=at>=100;return O.jsxs("button",{onClick:()=>U&&U(st),className:`w-full p-3 rounded-xl text-left border hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden ${mt?"border-green-500/50 bg-green-500/10":"border-transparent"}`,children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:`text-[11px] font-black uppercase tracking-widest ${mt?"text-green-400":"text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"} transition-colors`,children:st.title}),O.jsxs("div",{className:"flex items-center gap-1",children:[at>0&&O.jsxs("span",{className:`text-[8px] font-bold ${mt?"text-green-400":"text-[var(--text-ghost)]"}`,children:[at,"%"]}),O.jsx("i",{className:`fa ${mt?"fa-check":"fa-play"} text-[8px] ${mt?"text-green-400":"text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"}`})]})]}),at>0&&O.jsx("div",{className:"w-full h-[2px] bg-white/10 rounded-full relative overflow-hidden",children:O.jsx("div",{className:`absolute inset-y-0 left-0 ${mt?"bg-green-500 shadow-[0_0_8px_#22c55e]":"bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]"} transition-all duration-1000`,style:{width:`${at}%`}})})]},st.id)})})})})]},be)})]}),O.jsxs("div",{className:"space-y-4",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"✋ Práctica"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:de,className:`w-full p-4 flex items-center justify-between transition-all ${ve?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa fa-hand-paper-o text-[14px] mb-1 ${ve?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${ve?"text-[var(--accent-primary)]":"text-white"}`,children:"Práctica de Dedos"})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${ve?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${ve?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-2 gap-2",children:me.map(be=>O.jsxs("button",{onClick:()=>U&&U({...be,phrases:[`${be.keys.join(" ")} ${be.keys.join(" ")}`]}),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex flex-col gap-2 transition-all group relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"}),O.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:be.title}),O.jsx("i",{className:"fa fa-play text-[8px] text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all"})]})]},be.id))})})})]}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4 text-center",children:"🎵 Música"}),O.jsxs("div",{className:"flex flex-col rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[O.jsxs("button",{onClick:()=>Q(!z),className:`w-full p-4 flex items-center justify-between transition-all ${z?"bg-[var(--accent-primary)]/10 shadow-[inset_0_0_20px_rgba(var(--accent-rgb),0.1)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[O.jsx("div",{className:"flex items-center gap-4",children:O.jsxs("div",{className:"flex flex-col",children:[O.jsx("i",{className:`fa ${I[re.indexOf(P)]||"fa-music"} text-[14px] mb-1 ${z?"text-[var(--accent-primary)] animate-pulse":"text-amber-400 opacity-60"}`}),O.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${z?"text-[var(--accent-primary)]":"text-white"}`,children:P.name})]})}),O.jsx("i",{className:`fa fa-chevron-down text-[10px] text-[var(--text-secondary)] transition-transform duration-500 ${z?"rotate-180 text-[var(--accent-primary)]":""}`})]}),O.jsx("div",{className:`grid transition-all duration-500 ease-in-out ${z?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:O.jsx("div",{className:"overflow-hidden",children:O.jsx("div",{className:"p-3 bg-[var(--bg-app)]/20 border-t border-[var(--border-glass)] grid grid-cols-1 gap-2",children:re.filter(be=>be.name!==P.name).map((be,Pe)=>O.jsxs("button",{onClick:()=>q&&q(be),className:"w-full p-3 rounded-xl text-left border border-transparent hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10 flex items-center gap-3 transition-all group relative overflow-hidden",children:[O.jsx("i",{className:`fa ${I[re.indexOf(be)]||"fa-music"} text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]`}),O.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:be.name})]},be.name))})})})]})]})]}),O.jsx("div",{className:"mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] animate-pulse text-center",children:"Selecciona un nivel para comenzar"})]})},ie=()=>{const Me=e.length;return O.jsxs("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[160px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:[O.jsx("div",{className:"absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsx("div",{className:"absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-glass-strong)] to-transparent z-20 pointer-events-none"}),O.jsxs("div",{className:"font-mono text-xl md:text-3xl relative overflow-hidden h-20 w-full max-w-2xl flex items-center",children:[O.jsx("div",{className:"absolute top-0 left-0 h-full text-white/40 whitespace-nowrap leading-none transition-transform duration-300 ease-out flex items-center will-change-transform",style:{transform:`translateX(calc(-${Me}ch))`},children:r.split("").map((be,Pe)=>{let Ze="text-white",ut="";if(Pe<e.length){const st=e[Pe]!==be,at=Pe===e.length-1;st?at&&s?Ze="text-white border-b-2 border-[var(--accent-primary)] animate-pulse":Ze="text-red-400 bg-red-500/10 border-b-2 border-red-500/30":(Ze="text-white",ut="drop-shadow-[0_0_8px_var(--accent-primary)]")}return O.jsxs("span",{className:`${Ze} ${ut} transition-all inline-block relative font-black`,children:[be===" "?" ":be,Pe===e.length&&O.jsx("span",{className:"absolute left-0 bottom-[-8px] w-full h-[4px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_20px_var(--accent-primary)] rounded-full"})]},Pe)})}),D&&T>=100&&O.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"PTS"}),O.jsx("span",{className:"text-[14px] font-bold text-green-400",children:R.toLocaleString()})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"%"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[T,"%"]})]}),O.jsxs("div",{className:"bg-[var(--bg-floating)]/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1.5 flex items-center gap-2 animate-pulse",children:[O.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-green-400",children:"ACC"}),O.jsxs("span",{className:"text-[14px] font-bold text-green-400",children:[H,"%"]})]})]})]})]})};return l==="custom"||A[l],O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsx("div",{className:"w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:O.jsxs("div",{className:"w-full flex-grow flex flex-col items-center justify-center select-none",children:[O.jsx("div",{className:"w-full flex justify-center",children:D?ie():Z()}),O.jsxs("div",{className:`w-full flex flex-col items-center gap-4 mt-6 relative transition-all duration-1000 ${D?"opacity-100":"opacity-0 h-0 pointer-events-none"}`,children:[b&&x!==void 0&&O.jsxs("button",{onClick:L,className:"relative z-50 flex items-center justify-center gap-4 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer hover:scale-105 transition-transform active:scale-95 group",children:[O.jsxs("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] rounded-full px-5 py-1.5 flex items-center gap-3 transition-colors group-hover:bg-[var(--accent-primary)]/10",children:[O.jsx("i",{className:"fa fa-refresh fa-spin text-xs"}),O.jsxs("span",{className:"font-mono font-bold text-lg tracking-wider",children:[x,"s"]})]}),N&&O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]",children:N})]}),O.jsx("div",{className:"relative overflow-visible flex items-center justify-center gap-8 min-h-[144px]",children:O.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible",children:O.jsxs("div",{className:"relative font-mono text-4xl flex items-center h-full min-w-[200px]",children:[O.jsx("div",{className:`absolute inset-0 whitespace-pre flex items-center justify-start pointer-events-none ${J}`,children:i.word.split("").map((Me,be)=>{const Pe=i.userTypedSlice[be],ut=Pe!==void 0&&Pe!==Me;return O.jsx("span",{className:ut?"opacity-0":"",children:Me},be)})}),O.jsxs("div",{className:"relative flex items-center whitespace-pre h-full",children:[i.userTypedSlice.split("").map((Me,be)=>{const Pe=Me===(i.word[be]||""),Ze=s&&be===i.userTypedSlice.length-1?"text-yellow-400":Pe?ne:"text-red-400 bg-red-500/10 border-b-2 border-red-500/30 z-10";return O.jsx("span",{className:`relative inline-block ${Ze}`,children:Me===" "?" ":Me},be)}),O.jsx("span",{className:"inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1"})]})]})})})]})]})})})},Gs={"left-pinky":"#f472b6","left-ring":"#c084fc","left-middle":"#60a5fa","left-index":"#22d3ee",thumb:"#9ca3af","right-index":"#4ade80","right-middle":"#facc15","right-ring":"#fb923c","right-pinky":"#f87171"},Wy={"left-pinky":"Meñique Izquierdo","left-ring":"Anular Izquierdo","left-middle":"Corazón Izquierdo","left-index":"Índice Izquierdo",thumb:"Pulgares (Espacio)","right-index":"Índice Derecho","right-middle":"Corazón Derecho","right-ring":"Anular Derecho","right-pinky":"Meñique Derecho"},Ih=[[{key:"1",label:"1",finger:"left-pinky",row:0,why:"Alcance natural exterior."},{key:"2",label:"2",finger:"left-ring",row:0,why:"Extensión diagonal superior."},{key:"3",label:"3",finger:"left-middle",row:0,why:"Extensión diagonal superior."},{key:"4",label:"4",finger:"left-index",row:0,why:"Alcance interior izquierdo."},{key:"5",label:"5",finger:"left-index",row:0,why:"Extensión interior izquierda."},{key:"6",label:"6",finger:"right-index",row:0,why:"Extensión interior derecha."},{key:"7",label:"7",finger:"right-index",row:0,why:"Alcance interior derecho."},{key:"8",label:"8",finger:"right-middle",row:0,why:"Extensión diagonal superior."},{key:"9",label:"9",finger:"right-ring",row:0,why:"Extensión diagonal superior."},{key:"0",label:"0",finger:"right-pinky",row:0,why:"Alcance natural exterior."}],[{key:"q",label:"Q",finger:"left-pinky",row:1,why:"Posición superior externa."},{key:"w",label:"W",finger:"left-ring",row:1,why:"Movimiento vertical desde S."},{key:"e",label:"E",finger:"left-middle",row:1,why:"Movimiento vertical desde D."},{key:"r",label:"R",finger:"left-index",row:1,why:"Movimiento vertical desde F."},{key:"t",label:"T",finger:"left-index",row:1,why:"Extensión lateral desde F."},{key:"y",label:"Y",finger:"right-index",row:1,why:"Extensión lateral desde J."},{key:"u",label:"U",finger:"right-index",row:1,why:"Movimiento vertical desde J."},{key:"i",label:"I",finger:"right-middle",row:1,why:"Movimiento vertical desde K."},{key:"o",label:"O",finger:"right-ring",row:1,why:"Movimiento vertical desde L."},{key:"p",label:"P",finger:"right-pinky",row:1,why:"Posición superior externa."}],[{key:"a",label:"A",finger:"left-pinky",row:2,why:"Posición de reposo base."},{key:"s",label:"S",finger:"left-ring",row:2,why:"Posición de reposo base."},{key:"d",label:"D",finger:"left-middle",row:2,why:"Posición de reposo base."},{key:"f",label:"F",finger:"left-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"g",label:"G",finger:"left-index",row:2,why:"Extensión lateral cómoda."},{key:"h",label:"H",finger:"right-index",row:2,why:"Extensión lateral cómoda."},{key:"j",label:"J",finger:"right-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"k",label:"K",finger:"right-middle",row:2,why:"Posición de reposo base."},{key:"l",label:"L",finger:"right-ring",row:2,why:"Posición de reposo base."},{key:"ñ",label:"Ñ",finger:"right-pinky",row:2,why:"Posición de reposo base (Español)."}],[{key:"<",label:"<",finger:"left-pinky",row:3,why:"Tecla ISO para programación."},{key:"z",label:"Z",finger:"left-pinky",row:3,why:"Extensión inferior externa."},{key:"x",label:"X",finger:"left-ring",row:3,why:"Extensión diagonal inferior."},{key:"c",label:"C",finger:"left-middle",row:3,why:"Extensión diagonal inferior."},{key:"v",label:"V",finger:"left-index",row:3,why:"Extensión diagonal inferior."},{key:"b",label:"B",finger:"left-index",row:3,why:"Extensión lateral inferior."},{key:"n",label:"N",finger:"right-index",row:3,why:"Extensión lateral inferior."},{key:"m",label:"M",finger:"right-index",row:3,why:"Extensión diagonal inferior."},{key:",",label:",",finger:"right-middle",row:3,why:"Puntuación esencial."},{key:".",label:".",finger:"right-ring",row:3,why:"Fin de frase y decimales."},{key:"-",label:"-",finger:"right-pinky",row:3,why:"Barra alta y guiones."},{key:"-",label:"_",finger:"right-pinky",row:3,why:"Barra baja muy usada en código."}]],an={};Ih.flat().forEach(r=>{an[r.key.toLowerCase()]=r,an[r.label.toLowerCase()]=r,r.key==="1"&&(an["!"]=r),r.key==="2"&&(an['"']=r),r.key==="3"&&(an["·"]=r),r.key==="4"&&(an.$=r),r.key==="5"&&(an["%"]=r),r.key==="6"&&(an["&"]=r),r.key==="7"&&(an["/"]=r),r.key==="8"&&(an["("]=r),r.key==="9"&&(an[")"]=r),r.key==="0"&&(an["="]=r),r.key==="<"&&(an[">"]=r),r.key===","&&(an[";"]=r),r.key==="."&&(an[":"]=r),r.key==="-"&&(an._=r)});const Yy={á:"a",é:"e",í:"i",ó:"o",ú:"u",ü:"u",ï:"i",Á:"a",É:"e",Í:"i",Ó:"o",Ú:"u",Ñ:"ñ"};Object.entries(Yy).forEach(([r,e])=>{an[e]&&(an[r]={...an[e],key:r,label:r.toUpperCase()})});const Yv={key:" ",label:"Espacio",finger:"thumb",row:5,why:"Dedo más fuerte para la tecla más frecuente."};an[" "]=Yv;const Zy=({activeKey:r,targetKey:e,showZones:i=!1,bands:s={bass:0,mid:0,high:0}})=>{const l=(c,d,h,m)=>{const p=e.toLowerCase()===c.key.toLowerCase()||e===" "&&c.key===" ",v=r.toLowerCase()===c.key.toLowerCase();let g="mac-key ",_={};if(c.key===" "?g+="w-[250px] h-[44px] ":g+="w-[44px] h-[44px] ",v&&(g+="active "),p&&(g+="target "),i&&!v&&!p){const S=Gs[c.finger];_={borderColor:S,color:S,backgroundColor:`${S}10`,boxShadow:`0 0 10px ${S}20`}}else if(!v&&!p&&s){const S=h/(m||1),E=Math.max(0,1-S*2),A=Math.max(0,1-Math.abs(S-.5)*4),b=Math.max(0,(S-.5)*2),x=s.bass*E+s.mid*A+s.high*b;if(x>.02){const N=220+S*120;_={backgroundColor:`hsla(${N}, 70%, 50%, ${x*.25})`,boxShadow:`0 0 ${x*15}px hsla(${N}, 70%, 50%, 0.4)`,borderColor:`hsla(${N}, 70%, 50%, ${x*.5})`,color:`hsla(${N}, 70%, 90%, ${.6+x*.4})`}}}return O.jsxs("div",{className:g,style:_,children:[c.label,p&&O.jsx("div",{className:"absolute -bottom-1 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-glow)]"})]},c.key)};return O.jsxs("div",{className:"flex flex-col items-center gap-2 p-2 select-none opacity-80 hover:opacity-100 transition-opacity",children:[Ih.map((c,d)=>O.jsx("div",{className:`flex gap-1.5 ${d===3?"ml-6":""}`,children:c.map((h,m)=>l(h,d,m,c.length))},d)),O.jsx("div",{className:"flex justify-center mt-3",children:l(Yv,5,0,1)})]})},j0=[[{id:"esc",base:"Escape",shift:"Escape",alt:"Escape",special:"esc",width:"w-[60px]",h:"h-[22px]"},{id:"f1",base:"F1",shift:"F1",alt:"F1",label:"F1",special:"f",h:"h-[22px]"},{id:"f2",base:"F2",shift:"F2",alt:"F2",label:"F2",special:"f",h:"h-[22px]"},{id:"f3",base:"F3",shift:"F3",alt:"F3",label:"F3",special:"f",h:"h-[22px]"},{id:"f4",base:"F4",shift:"F4",alt:"F4",label:"F4",special:"f",h:"h-[22px]"},{id:"f5",base:"F5",shift:"F5",alt:"F5",label:"F5",special:"f",h:"h-[22px]"},{id:"f6",base:"F6",shift:"F6",alt:"F6",label:"F6",special:"f",h:"h-[22px]"},{id:"f7",base:"F7",shift:"F7",alt:"F7",label:"F7",special:"f",h:"h-[22px]"},{id:"f8",base:"F8",shift:"F8",alt:"F8",label:"F8",special:"f",h:"h-[22px]"},{id:"f9",base:"F9",shift:"F9",alt:"F9",label:"F9",special:"f",h:"h-[22px]"},{id:"f10",base:"F10",shift:"F10",alt:"F10",label:"F10",special:"f",h:"h-[22px]"},{id:"f11",base:"F11",shift:"F11",alt:"F11",label:"F11",special:"f",h:"h-[22px]"},{id:"f12",base:"F12",shift:"F12",alt:"F12",label:"F12",special:"f",h:"h-[22px]"},{id:"eject",base:"",shift:"",alt:"",label:"⚙",special:"eject",h:"h-[22px]",width:"w-[60px]"}],[{id:"row1_0",base:"º",shift:"ª",alt:"\\"},{id:"row1_1",base:"1",shift:"!",alt:"|"},{id:"row1_2",base:"2",shift:'"',alt:"@"},{id:"row1_3",base:"3",shift:"·",alt:"#"},{id:"row1_4",base:"4",shift:"$",alt:"~"},{id:"row1_5",base:"5",shift:"%",alt:"€"},{id:"row1_6",base:"6",shift:"&",alt:"¬"},{id:"row1_7",base:"7",shift:"/",alt:""},{id:"row1_8",base:"8",shift:"(",alt:""},{id:"row1_9",base:"9",shift:")",alt:""},{id:"row1_10",base:"0",shift:"=",alt:""},{id:"row1_11",base:"'",shift:"?",alt:""},{id:"row1_12",base:"¡",shift:"¿",alt:""},{id:"delete",base:"Backspace",shift:"Backspace",alt:"Backspace",label:"⌫",special:"delete",width:"w-[80px]"}],[{id:"tab",base:"Tab",shift:"Tab",alt:"Tab",label:"⇥",special:"tab",width:"w-[80px]"},{id:"q",base:"q",shift:"Q",alt:"q"},{id:"w",base:"w",shift:"W",alt:"w"},{id:"e",base:"e",shift:"E",alt:"é"},{id:"r",base:"r",shift:"R",alt:"r"},{id:"t",base:"t",shift:"T",alt:"t"},{id:"y",base:"y",shift:"Y",alt:"y"},{id:"u",base:"u",shift:"U",alt:"ú"},{id:"i",base:"i",shift:"I",alt:"í"},{id:"o",base:"o",shift:"O",alt:"ó"},{id:"p",base:"p",shift:"P",alt:"p"},{id:"row2_11",base:"`",shift:"^",alt:"["},{id:"row2_12",base:"+",shift:"*",alt:"]"},{id:"return",base:"Enter",shift:"Enter",alt:"Enter",label:"↵",special:"return",width:"w-[44px]",h:"h-[96px]"}],[{id:"caps",base:"CapsLock",shift:"CapsLock",alt:"CapsLock",label:"⇪",special:"caps",width:"w-[88px]"},{id:"a",base:"a",shift:"A",alt:"á"},{id:"s",base:"s",shift:"S",alt:"s"},{id:"d",base:"d",shift:"D",alt:"d"},{id:"f",base:"f",shift:"F",alt:"f"},{id:"g",base:"g",shift:"G",alt:"g"},{id:"h",base:"h",shift:"H",alt:"h"},{id:"j",base:"j",shift:"J",alt:"j"},{id:"k",base:"k",shift:"K",alt:"k"},{id:"l",base:"l",shift:"L",alt:"l"},{id:"ñ",base:"ñ",shift:"Ñ",alt:"ñ"},{id:"row3_11",base:"´",shift:"¨",alt:"{"},{id:"row3_12",base:"ç",shift:"Ç",alt:"}"}],[{id:"shift_l",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[56px]"},{id:"row4_1",base:"<",shift:">",alt:""},{id:"z",base:"z",shift:"Z",alt:"z"},{id:"x",base:"x",shift:"X",alt:"x"},{id:"c",base:"c",shift:"C",alt:"c"},{id:"v",base:"v",shift:"V",alt:"v"},{id:"b",base:"b",shift:"B",alt:"b"},{id:"n",base:"n",shift:"N",alt:"n"},{id:"m",base:"m",shift:"M",alt:"m"},{id:"row4_9",base:",",shift:";",alt:""},{id:"row4_10",base:".",shift:":",alt:""},{id:"row4_11",base:"-",shift:"_",alt:""},{id:"shift_r",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[118px]"}],[{id:"fn",base:"Fn",shift:"Fn",alt:"Fn",label:"fn",special:"fn",width:"w-[44px]"},{id:"ctrl",base:"Control",shift:"Control",alt:"Control",label:"⌃",special:"ctrl"},{id:"opt_l",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"cmd_l",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"space",base:" ",shift:" ",alt:" ",label:"",special:"space",width:"w-[250px]"},{id:"cmd_r",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"opt_r",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"left",base:"ArrowLeft",shift:"ArrowLeft",alt:"ArrowLeft",label:"◀",special:"left",h:"h-[22px]"},{id:"up",base:"ArrowUp",shift:"ArrowUp",alt:"ArrowUp",label:"▲",special:"up",h:"h-[22px]"},{id:"down",base:"ArrowDown",shift:"ArrowDown",alt:"ArrowDown",label:"▼",special:"down",h:"h-[22px]"},{id:"right",base:"ArrowRight",shift:"ArrowRight",alt:"ArrowRight",label:"▶",special:"right",h:"h-[22px]"}]],Ky=({top:r,bottom:e,right:i})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full pt-0 pb-[2px]",children:[O.jsx("span",{className:"text-[10px] leading-none font-medium mb-1 opacity-80",children:r}),O.jsx("span",{className:"text-[13px] font-bold leading-none",children:e})]}),i&&O.jsx("span",{className:"absolute bottom-[4px] right-[4px] text-[10px] leading-none font-medium opacity-70",children:i})]}),Qy=({t:r,b:e})=>O.jsxs("div",{className:"flex flex-col items-center justify-center",children:[O.jsx("span",{className:"text-[10px] mb-0.5 opacity-70",children:r}),O.jsx("span",{className:"text-[12px] font-bold",children:e})]}),X0=({l:r,s:e})=>O.jsxs("div",{className:"w-full h-full relative",children:[O.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:O.jsx("span",{className:"text-[12px] font-medium",children:r})}),e&&O.jsx("span",{className:"absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium",children:e})]}),Jy=Da.memo(({focused:r})=>{let e="rgba(255,255,255,0.05)",i="rgba(255,255,255,0.12)",s="rgba(255,255,255,0.8)";return r&&(e="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3)",i="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 1)",s="#fff"),O.jsxs("div",{style:{position:"relative",width:"44px",height:"94px",flexShrink:0},children:[O.jsx("svg",{fill:"none",width:"44",height:"94",style:{position:"absolute",top:0,left:0},children:O.jsx("path",{d:"M 6.5,0.5 L 37.5,0.5 Q 43.5,0.5 43.5,6.5 L 43.5,87.5 Q 43.5,93.5 37.5,93.5 L 14.5,93.5 Q 8.5,93.5 8.5,87.5 L 8.5,48.5 Q 8.5,44.5 6.5,44.5 Q 0.5,44.5 0.5,38.5 L 0.5,6.5 Q 0.5,0.5 6.5,0.5 Z",fill:e,stroke:i,strokeWidth:"1",style:{transition:"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)"}})}),O.jsx("div",{style:{position:"absolute",top:0,left:6,width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",color:s,fontSize:"14px",transition:"color 0.1s"},children:"↵"})]})}),as=Da.memo(({keyDef:r,active:e,target:i,highlighted:s,showZones:l,fingerColor:c})=>{if(r.special==="return")return O.jsx("div",{className:`transition-all ${e||i?"scale-105 -translate-y-[2px] z-20":""}`,style:{marginLeft:"-8px",height:"44px",zIndex:10,position:"relative"},children:O.jsx(Jy,{focused:e||i})});let d=`mac-key ${r.width||"w-[44px]"} ${r.h||"h-[44px]"} ${r.className||""} `;e&&(d+="active "),i&&(d+="target "),s&&(d+="highlighted ");let h={};l&&!e&&!i&&!s&&c&&(h={borderColor:c,color:c,backgroundColor:`${c}10`,boxShadow:`0 0 8px ${c}20`});let m=r.label||r.base;return r.id.startsWith("row1_")||r.id==="row2_11"||r.id==="row2_12"||r.id==="row3_11"?m=O.jsx(Ky,{top:r.shift,bottom:r.base,right:r.alt===r.base?void 0:r.alt}):r.id==="row3_12"?m=O.jsx(X0,{l:"Ç",s:"}"}):r.id.match(/^[a-zñ]$/)?m=O.jsx(X0,{l:r.base.toUpperCase(),s:r.alt===r.base?"":r.alt}):r.shift&&r.shift!==r.base&&!r.special&&(m=O.jsx(Qy,{t:r.shift,b:r.base})),O.jsxs("div",{className:d.trim(),style:h,children:[r.special==="caps"&&O.jsx("div",{className:`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${e?"opacity-100":"opacity-0"}`}),m]})}),$y=Da.memo(({activeKey:r,targetKey:e,showZones:i=!1,bands:s={bass:0,mid:0,high:0},highlightedKeys:l=[],isWaveActive:c=!1})=>{const d=fe.useCallback(g=>g.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),[]),h=fe.useCallback(g=>{const _=g.id.toLowerCase(),S=g.base.toLowerCase(),E=e.toLowerCase(),A=d(e);if(g.special==="space"&&e===" "||g.special==="return"&&(e==="enter"||e==="return")||S===A||_===A||g.shift.toLowerCase()===E||g.alt.toLowerCase()===E)return!0;const b={row1_0:["º","\\","ª"],row1_1:["1","!","|"],row1_2:["2",'"',"@"],row1_3:["3","·","#"],row1_4:["4","$","~"],row1_5:["5","%","€"],row1_6:["6","&","¬"],row2_11:["[","^","`"],row2_12:["]","*","+"],row3_11:["{","¨","´"],row3_12:["}","ç","Ç"]};return b[g.id]?b[g.id].includes(e):!1},[e,d]),m=fe.useCallback(g=>{var A;const _=g.id.toLowerCase(),S=g.base.toLowerCase(),E=r.toLowerCase();return g.special==="space"&&r===" "||g.special==="return"&&E==="enter"||g.special==="delete"&&(E==="backspace"||E==="delete")?!0:_===E||S===E||g.shift.toLowerCase()===E||((A=g.label)==null?void 0:A.toLowerCase())===E},[r]),p=fe.useCallback(g=>l.some(_=>_.toLowerCase()===g.id.toLowerCase()||_.toLowerCase()===g.base.toLowerCase()),[l]),v=fe.useCallback(g=>{let _=g.id.toLowerCase();if(g.special==="tab"||g.special==="caps"||g.special==="shift"||g.special==="ctrl"||g.special==="fn")return Gs["left-pinky"];if(g.special==="return"||g.special==="delete")return Gs["right-pinky"];if(g.special==="space"||g.special==="opt"||g.special==="cmd")return Gs.thumb;const S=an[_]||an[g.base.toLowerCase()];return S?Gs[S.finger]:null},[]);return O.jsx("div",{className:"scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none",children:O.jsx("div",{className:"bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]",children:j0.map((g,_)=>{if(_===3)return null;if(_===2)return O.jsxs("div",{className:"flex flex-row gap-[6px] items-start",children:[O.jsxs("div",{className:"flex flex-col gap-[6px]",children:[O.jsx("div",{className:"flex flex-row gap-[6px]",children:g.slice(0,-1).map(E=>O.jsx(as,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))}),O.jsx("div",{className:"flex flex-row gap-[6px]",children:j0[3].map(E=>O.jsx(as,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))})]}),O.jsx(as,{keyDef:g[g.length-1],active:m(g[g.length-1]),target:h(g[g.length-1]),highlighted:p(g[g.length-1]),showZones:i,fingerColor:v(g[g.length-1])})]},"merged-row-2-3");const S=_===5;return O.jsx("div",{className:"flex flex-row gap-[6px] items-end",children:g.map((E,A)=>S&&(E.id==="left"||E.id==="up"||E.id==="down"||E.id==="right")?E.id!=="left"?null:O.jsxs(Da.Fragment,{children:[O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(as,{keyDef:g[A],active:m(g[A]),target:h(g[A]),highlighted:p(g[A]),showZones:i,fingerColor:v(g[A])})}),O.jsxs("div",{className:"flex flex-col gap-[2px] w-[44px]",children:[O.jsx(as,{keyDef:g[A+1],active:m(g[A+1]),target:h(g[A+1]),highlighted:p(g[A+1]),showZones:i,fingerColor:v(g[A+1])}),O.jsx(as,{keyDef:g[A+2],active:m(g[A+2]),target:h(g[A+2]),highlighted:p(g[A+2]),showZones:i,fingerColor:v(g[A+2])})]}),O.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:O.jsx(as,{keyDef:g[A+3],active:m(g[A+3]),target:h(g[A+3]),highlighted:p(g[A+3]),showZones:i,fingerColor:v(g[A+3])})})]},"arrows"):O.jsx(as,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:v(E)},E.id))},_)})})})}),eS=({analyser:r,active:e,color:i,type:s,opacityMultiplier:l=1,yOffset:c=0})=>{const d=fe.useRef(null),h=fe.useRef(null);return fe.useEffect(()=>{let m,p=0,v=0;const g=new Uint8Array(r.frequencyBinCount),_=()=>{r.getByteFrequencyData(g);let S=0;if(s==="kick"){for(let U=0;U<4;U++)S+=g[U];S/=4}else if(s==="bass"){for(let U=2;U<12;U++)S+=g[U];S/=10}else if(s==="hihat"||s==="percussion"||s==="snare"||s==="ghost"){for(let U=30;U<60;U++)S+=g[U];S/=30,S*=3}else if(s==="lead"){for(let U=10;U<30;U++)S+=g[U];S/=20}else if(s==="ambient"){for(let U=0;U<20;U++)S+=g[U];S/=20}else{for(let U=0;U<20;U++)S+=g[U];S/=20}const E=Math.min(S/255,1);v+=(E-v)*.15;const A=200,x=40/2+c,N=24;p+=.02+v*.05;const L=[];for(let U=0;U<=N;U++){const F=U/N*A,P=U/N*2-1,q=Math.exp(-Math.pow(P*1.8,2));let T=0;const R=5+v*25;s==="kick"?T=Math.sin(p*8)*R*q*Math.cos(P*Math.PI):s==="hihat"||s==="snare"||s==="ghost"?(T=Math.sin(P*20+p*30)*R*.4*q,T+=(Math.random()-.5)*R*.2*q):(T=Math.sin(P*4+p*5)*R*q,T+=Math.sin(P*8-p*3)*(R*.3)*q),L.push({x:F,y:x+T})}const D=L.reduce((U,F,P)=>{if(P===0)return`M ${F.x},${F.y}`;const q=L[P-1],T=q.x+(F.x-q.x)/2;return U+` C ${T},${q.y} ${T},${F.y} ${F.x},${F.y}`},"");if(d.current&&(d.current.setAttribute("d",D),d.current.setAttribute("stroke-width",(.8+v*1.5).toFixed(2))),h.current){const U=e?(.6+v*.4)*l:.1;h.current.style.opacity=U.toString()}m=requestAnimationFrame(_)};return _(),()=>cancelAnimationFrame(m)},[r,s,c,e,l]),O.jsx("div",{ref:h,className:"absolute inset-0 pointer-events-none overflow-hidden rounded-xl bg-blend-screen",style:{transition:"opacity 0.2s ease-out"},children:O.jsx("svg",{className:"w-full h-full",viewBox:"0 0 200 40",preserveAspectRatio:"none",children:O.jsx("path",{ref:d,fill:"none",stroke:i,strokeLinecap:"round",strokeLinejoin:"round"})})})},tS=Da.memo(({keyboardType:r,activeKey:e,targetChar:i,showZones:s,isMusicLightingEnabled:l,frequencyBands:c,stats:d,isZenMode:h,score:m,onRestart:p,onZenToggle:v,audioReady:g,audioSystem:_,currentMusicStyle:S,startTime:E,isFinished:A,combo:b,comboMultiplier:x,onDimensionalMenu:N,hexToRgba:L,customColor:D,highlightedKeys:U=[],isWaveActive:F=!1,isLevelActive:P=!1,onGoHome:q,onDebugFillCurtain:T})=>{const R=l?c:{bass:0,mid:0,high:0};return O.jsxs("div",{className:"flex flex-col items-center w-full transition-all duration-500 z-20 pb-2 gap-2",children:[O.jsxs("div",{className:"w-full max-w-[900px] flex items-center justify-between gap-4 px-2",children:[O.jsxs("div",{className:"flex gap-2",children:[O.jsx("button",{onClick:p,className:"h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-lg",title:"Reiniciar",children:O.jsx("i",{className:"fa fa-refresh"})}),T&&O.jsx("button",{onClick:T,className:"h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-pink-400 hover:text-pink-300 transition-all shadow-lg",title:"Debug: Llenar Cortinas",children:O.jsx("i",{className:"fa fa-bug"})})]}),O.jsxs("div",{className:"h-11 flex-grow max-w-[420px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-6 overflow-hidden shadow-2xl transition-all duration-500 relative",style:{boxShadow:b>15?`0 0 30px ${L(D,.3)}`:"none"},children:[g&&_&&S.layers.map(H=>b*x>=H.minCombo&&(H.maxCombo===void 0||b*x<=H.maxCombo)&&O.jsx(eS,{analyser:_.getAnalysers()[H.id]||_.getAnalysers().master,type:H.type,color:H.color,active:E!==null&&!A,opacityMultiplier:H.opacity,yOffset:H.yOffset},H.id)),O.jsxs("div",{className:"flex items-center gap-4 relative z-10 w-full justify-between",children:[O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:d.wpm}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"WPM"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--text-primary)] font-mono",children:d.accuracy}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"%ACC"})]}),O.jsxs("div",{className:"flex items-baseline gap-1",children:[O.jsx("span",{className:`text-[12px] font-black font-mono transition-all ${b>0?"text-[var(--accent-primary)]":"text-[var(--text-muted)]"}`,children:b}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"COMBO"})]}),O.jsxs("div",{className:"flex items-baseline gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5",children:[O.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:m.toLocaleString()}),O.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase ml-1",children:"SCORE"})]}),O.jsxs("div",{className:"flex items-center gap-1 opacity-40 animate-pulse",children:[O.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"}),O.jsx("span",{className:"text-[6px] font-black text-[var(--text-secondary)]",children:"LIVE"})]})]})]}),O.jsxs("div",{className:"flex flex-col gap-2 relative",children:[O.jsx("button",{onClick:N,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg hover:scale-105 active:scale-95",title:"Control Center",children:O.jsx("i",{className:"fa fa-gear"})}),P&&O.jsx("button",{onClick:q,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-top-2 duration-300",title:"Volver al Selector",children:O.jsx("i",{className:"fa fa-home"})})]})]}),O.jsx("div",{className:"flex justify-center w-full transition-all duration-500 transform hover:scale-[1.01]",children:r==="standard"?O.jsx(Zy,{activeKey:e,targetKey:i,showZones:s,bands:R}):O.jsx($y,{activeKey:e,targetKey:i,showZones:s,bands:R,highlightedKeys:U,isWaveActive:F})})]})}),nS=({isOpen:r,onClose:e,language:i,onLanguageChange:s,currentMusicStyle:l,onMusicStyleChange:c,TECHNO_STYLE:d,AMBIENT_STYLE:h,ACID_HOUSE_STYLE:m,getBtnClass:p,themes:v,currentTheme:g,onThemeChange:_})=>{const S=Da.useMemo(()=>{const E={};return Ih.flat().forEach(A=>{E[A.finger]||(E[A.finger]=[]),E[A.finger].includes(A.label)||E[A.finger].push(A.label)}),E},[]);return O.jsxs("aside",{className:`fixed top-0 left-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${r?"translate-x-0":"-translate-x-full"} overflow-y-auto custom-scrollbar`,children:[O.jsxs("div",{className:"flex items-center justify-between mb-12",children:[O.jsxs("div",{className:"flex items-center gap-4",children:[O.jsx("div",{className:"w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]",children:"Typ_"}),O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]",children:"System_Core"})]}),O.jsx("button",{onClick:e,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{className:"space-y-4 mb-12",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Idioma del Sistema"}),O.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[O.jsxs("button",{onClick:()=>s("es"),className:p(i==="es"),children:[O.jsx("span",{children:"Español"})," ",O.jsx("span",{children:"🇪🇸"})]}),O.jsxs("button",{onClick:()=>s("en"),className:p(i==="en"),children:[O.jsx("span",{children:"English"})," ",O.jsx("span",{children:"🇺🇸"})]})]})]}),O.jsxs("div",{className:"mt-12 space-y-6",children:[O.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Mapeo de Dedos"}),O.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.entries(Wy).filter(([E])=>E!=="thumb").map(([E,A])=>O.jsxs("div",{className:"p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group",children:[O.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[O.jsx("span",{className:"w-2 h-2 rounded-full shadow-[0_0_8px]",style:{backgroundColor:Gs[E],boxShadow:`0 0 10px ${Gs[E]}`}}),O.jsx("span",{className:"text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate",children:A})]}),O.jsx("div",{className:"flex flex-wrap gap-1",children:(S[E]||[]).sort().map(b=>O.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]",children:b},b))})]},E))})]})]})},iS=({isOpen:r,onClose:e,getBtnClass:i,currentMusicStyle:s,onMusicStyleChange:l,TECHNO_STYLE:c,AMBIENT_STYLE:d,ACID_HOUSE_STYLE:h,score:m})=>O.jsx("aside",{className:`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:O.jsxs("div",{className:"flex flex-col gap-8 mb-8 shrink-0",children:[O.jsxs("div",{className:"flex items-center justify-between mb-4",children:[O.jsxs("div",{className:"flex flex-col",children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-1",children:"Estado de Sesión"}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("span",{className:"text-[24px] font-black text-[var(--text-primary)] tracking-tighter",children:m.toLocaleString()}),O.jsx("span",{className:"text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-2 italic opacity-50",children:"Pts"})]})]}),O.jsx("button",{onClick:e,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all",children:O.jsx("i",{className:"fa fa-close"})})]}),O.jsxs("div",{children:[O.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4",children:"Estilos de Música"}),O.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[O.jsxs("button",{onClick:()=>l(c),className:i(s===c),children:[O.jsx("span",{children:c.name})," ",O.jsx("i",{className:"fa fa-bolt"})]}),O.jsxs("button",{onClick:()=>l(d),className:i(s===d),children:[O.jsx("span",{children:d.name})," ",O.jsx("i",{className:"fa fa-leaf"})]}),O.jsxs("button",{onClick:()=>l(h),className:i(s===h),children:[O.jsx("span",{children:h.name})," ",O.jsx("i",{className:"fa fa-flask"})]})]})]})]})}),xn={sphere:{baseSize:.45,bounceSpeed:.0025,squashIntensity:1.5,stretchIntensity:.8},audio:{bassWeight:.5,midWeight:.3,highWeight:.15,sizeMultiplier:1,innerMeshScale:.55},curtain:{repulsionPadding:1.1,frustumHeightReference:8.39}};function mc(r,e,i){return r*i+e}function aS(r,e,i){const s=Math.max(0,Math.min(1,(i-r)/(e-r)));return s*s*(3-2*s)}class Wi{constructor(e=0,i=0){this.x=e,this.y=i}zero(){this.reset(0,0)}reset(e=0,i=0){this.x=e,this.y=i}clone(){return new Wi(this.x,this.y)}add(e){return this.x+=e.x,this.y+=e.y,this}addNew(e){return this.clone().add(e)}subtract(e){return this.x-=e.x,this.y-=e.y,this}subtractNew(e){return this.clone().subtract(e)}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyNew(e){return this.clone().multiply(e)}scale(e){return this.x*=e,this.y*=e,this}scaleNew(e){return this.clone().scale(e)}get lengthSquared(){return this.x**2+this.y**2}get length(){return Math.hypot(this.x,this.y)}get angle(){return Math.atan2(this.y,this.x)}}class sS{constructor({x:e=0,y:i=0,pinned:s=!1,id:l=0,char:c=" ",wordId:d=-1}={}){this.pos=new Wi(e,i),this.oldPos=new Wi(e,i),this.velocity=new Wi,this.acceleration=new Wi,this.pinned=s,this.originalPinnedState=s,this.id=l,this.char=c,this.wordId=d,this.gravityVec=new Wi}contain(e){if(this.pinned)return;const i=5;this.pos.x<i?(this.pos.x=i,this.oldPos.x=this.pos.x+Math.abs(this.oldPos.x-this.pos.x)*.8):this.pos.x>e.awidth-i&&(this.pos.x=e.awidth-i,this.oldPos.x=this.pos.x-Math.abs(this.oldPos.x-this.pos.x)*.8)}update(e,i){if(this.pinned){this.acceleration.zero();return}this.velocity.reset((this.pos.x-this.oldPos.x)*i.damping,(this.pos.y-this.oldPos.y)*i.damping),this.oldPos.reset(this.pos.x,this.pos.y);const s=e**2;this.gravityVec.reset(0,i.gravity/s),this.applyForce(this.gravityVec),this.pos.x+=this.velocity.x+this.acceleration.x*s,this.pos.y+=this.velocity.y+this.acceleration.y*s,this.pos.y<5&&(this.pos.y=5,this.oldPos.y<this.pos.y&&(this.oldPos.y=this.pos.y)),this.acceleration.reset()}applyForce(e){this.acceleration.add(e)}}class W0{constructor({p1:e,p2:i,length:s,id:l,compressFactor:c,stretchFactor:d,isSpacer:h=!1}){this.p1=e,this.p2=i,this.length=s,this.id=l,this.minLength=s*c,this.maxLength=s*d,this.isSpacer=h}solve(){const e=this.p2.pos.x-this.p1.pos.x,i=this.p2.pos.y-this.p1.pos.y,s=Math.hypot(e,i);if(s===0)return;let l=this.length;if(s<this.minLength)l=this.minLength;else if(s>this.maxLength)l=this.maxLength;else return;const d=(l-s)/s/2,h=e*d,m=i*d;this.p1.pinned||(this.p1.pos.x-=h,this.p1.pos.y-=m),this.p2.pinned||(this.p2.pos.x+=h,this.p2.pos.y+=m)}}class rS{constructor({c:e,particles:i,CONFIG:s}){this.grabbedParticle=null,this.pointerIsDown=!1,this.c=e,this.particles=i,this.CONFIG=s,this.mousePos=new Wi(-1e3,-1e3),this.grabRadius=20,this.bind()}pointerdown(e){const i=this.c.getBoundingClientRect();this.mousePos.x=e.clientX-i.left-(this.c.width/2-this.CONFIG.awidth/2),this.mousePos.y=e.clientY-i.top-(this.c.height/2-this.CONFIG.aheight/2);for(const s of this.particles)if(this.mousePos.subtractNew(s.pos).length<this.grabRadius){this.grabbedParticle=s,this.grabbedParticle.originalPinnedState=this.grabbedParticle.pinned,this.grabbedParticle.pinned=!0;break}this.grabbedParticle||(this.pointerIsDown=!0)}pointerup(e){this.grabbedParticle&&(this.grabbedParticle.pinned=this.grabbedParticle.originalPinnedState,this.grabbedParticle=null),clearTimeout(this.pointerUpTimer),this.pointerUpTimer=setTimeout(()=>{this.pointerIsDown=!1},1e3)}pointermove(e){const i=this.c.getBoundingClientRect();this.mousePos.x=e.clientX-i.left-(this.c.width/2-this.CONFIG.awidth/2),this.mousePos.y=e.clientY-i.top-(this.c.height/2-this.CONFIG.aheight/2),this.grabbedParticle&&(this.grabbedParticle.pos.reset(this.mousePos.x,this.mousePos.y),this.grabbedParticle.oldPos.reset(this.mousePos.x,this.mousePos.y));for(const s of this.particles){const l=this.mousePos.subtractNew(s.pos),c=l.lengthSquared;if(c<this.CONFIG.mouseSize){const d=l.angle-Math.PI,h=aS(this.CONFIG.mouseSize,-2e3,c)*this.CONFIG.mouseStrength/300,m=new Wi(Math.cos(d)*h,Math.sin(d)*h);s.applyForce(m)}}}bind(){this.pointerdown=this.pointerdown.bind(this),this.pointerup=this.pointerup.bind(this),this.pointermove=this.pointermove.bind(this),this.c.addEventListener("pointerdown",this.pointerdown),window.addEventListener("pointerup",this.pointerup),window.addEventListener("pointermove",this.pointermove)}destroy(){this.c.removeEventListener("pointerdown",this.pointerdown),window.removeEventListener("pointerup",this.pointerup),window.removeEventListener("pointermove",this.pointermove)}}const Y0=({text:r,color:e="#00ffcc",className:i="",frequencyBands:s={bass:0,mid:0,high:0},combo:l=0,repulsionCenter:c={x:-1,y:-1},repulsionEnergy:d=0,repulsionShape:h="icosahedron",repulsionRotation:m=0,floorHeight:p=.62})=>{const v=fe.useRef(null),g=fe.useRef(null),_=fe.useRef([]),S=fe.useRef({});fe.useRef(0);const E=fe.useRef({}),[A,b]=fe.useState({w:0,h:0}),x=fe.useRef(d),N=fe.useRef(c),L=fe.useRef(h),D=fe.useRef(m),U=fe.useRef(A),F=fe.useRef(s),P=fe.useRef(p),q=fe.useRef(e);return fe.useEffect(()=>{F.current=s},[s]),fe.useEffect(()=>{x.current=d},[d]),fe.useEffect(()=>{N.current=c},[c]),fe.useEffect(()=>{L.current=h},[h]),fe.useEffect(()=>{D.current=m},[m]),fe.useEffect(()=>{U.current=A},[A]),fe.useEffect(()=>{P.current=p},[p]),fe.useEffect(()=>{q.current=e},[e]),fe.useEffect(()=>{const T=g.current;if(!T)return;const R=new ResizeObserver(H=>{for(let X of H)b({w:Math.floor(X.contentRect.width),h:Math.floor(X.contentRect.height)})});return R.observe(T),()=>R.disconnect()},[]),fe.useEffect(()=>{if(typeof window>"u"||A.w<=0||A.h<=0)return;const T=v.current,R=g.current;if(!T||!R||A.w<=0||A.h<=0)return;const H=T.getContext("2d");if(!H)return;const{w:X,h:J}=A,ne={awidth:X,aheight:J,gridW:Math.max(5,Math.floor(X/18)),gridH:Math.max(10,Math.floor(J/18)),gravity:.45,damping:.96,iterationsPerFrame:5,compressFactor:.1,stretchFactor:1.1,mouseSize:4e3,mouseStrength:5,contain:!0,randomSolve:!1},re=ne.awidth/ne.gridW,I=ne.aheight/ne.gridH;S.current={...ne,cellWidth:re,cellHeight:I},T.width=X,T.height=J;const G=[],$=[];for(let me=0;me<ne.gridH;me++)for(let Ue=0;Ue<ne.gridW;Ue++){const Z=(Ue+.5)*re,ie=(me+.5)*I,Me=me===0,be=new sS({x:Z,y:ie,pinned:Me,id:mc(me,Ue,ne.gridW)});G.push(be)}for(let me=0;me<ne.gridH;me++)for(let Ue=0;Ue<ne.gridW;Ue++){const Z=mc(me,Ue,ne.gridW),ie=G[Z];if(ie){if(me<ne.gridH-1){const Me=G[mc(me+1,Ue,ne.gridW)];if(Me){const be=new W0({p1:ie,p2:Me,length:I,compressFactor:ne.compressFactor,stretchFactor:ne.stretchFactor});$.push(be),ie.downConstraint=be}}if(Ue<ne.gridW-1){const Me=G[mc(me,Ue+1,ne.gridW)];if(Me){const be=new W0({p1:ie,p2:Me,length:re,compressFactor:.6,stretchFactor:4,isSpacer:!0});$.push(be)}}}}_.current=G;const ve=new rS({c:T,particles:G,CONFIG:S.current});let xe,z=performance.now();function Q(me){if(!T||!H)return;H.clearRect(0,0,T.width,T.height),H.beginPath();const Ue=P.current,Z=T.height*Ue,ie=H.createLinearGradient(T.width*.1,Z,T.width*.9,Z);ie.addColorStop(0,"transparent"),ie.addColorStop(.5,q.current),ie.addColorStop(1,"transparent"),H.strokeStyle=ie,H.lineWidth=2,H.globalAlpha=.3,H.moveTo(T.width*.1,Z),H.lineTo(T.width*.9,Z),H.stroke(),H.globalAlpha=1;const Me=[T.width/2-S.current.awidth/2,0];F.current;const be=0,Pe=1,Ze={};G.forEach(ut=>{if(ut.char&&ut.char!==" "){const st=E.current[ut.char];if(!st)return;if(ut.wordId!==-1&&!Ze[ut.wordId]){const Mt=me*.002,ct=be*2.5;Ze[ut.wordId]={x:(Math.sin(Mt*15+ut.wordId)+Math.sin(Mt*31+ut.wordId*2))*ct*.5,y:(Math.cos(Mt*12+ut.wordId)+Math.cos(Mt*22+ut.wordId*3))*ct*.3}}const at=Ze[ut.wordId]||{x:0,y:0},mt=st.width*Pe,ot=st.height*Pe,It=mt/2,k=ot/2;H.globalAlpha=.7+Math.min(.3,be),H.drawImage(st,ut.pos.x+Me[0]-It+at.x,ut.pos.y+Me[1]-k+at.y,mt,ot)}}),H.globalAlpha=1}function de(me){xe=requestAnimationFrame(de);const Ue=U.current;if(Ue.w<=0||Ue.h<=0)return;let Z=me-z;Z>50&&(Z=16),z=me;const ie=N.current,Me=x.current,be=L.current,Ze=D.current||0,ut=Math.cos(Ze),st=Math.sin(Ze),at=2.5432,It=-(P.current-.5)*xn.curtain.frustumHeightReference+xn.sphere.baseSize,k=at-It,Mt=performance.now()*xn.sphere.bounceSpeed,ct=(1-Math.abs(Math.cos(Mt)))*k,dt=at-ct,Ge=F.current||{bass:0,mid:0,high:0},B=Ge.bass*xn.audio.bassWeight+Ge.mid*xn.audio.midWeight+Ge.high*xn.audio.highWeight,M=1+B*xn.audio.sizeMultiplier,Y=1+B,ge=Ue.h/xn.curtain.frustumHeightReference,_e=xn.sphere.baseSize*ge*Y*M*xn.curtain.repulsionPadding;G.forEach(le=>{if(!(!le.char||le.char===" ")){if(ie){const Ke=ie.x===-1?Ue.w/2:ie.x,ke=(ie.y===-1?Ue.h*.5:ie.y)+ct*ge;let $e=le.pos.x-Ke,Ne=le.pos.y-ke;const Re=$e*ut-Ne*st,ze=$e*st+Ne*ut;let Fe=0;switch(be){case"box":{const Te=_e*.85,Xe=Math.abs(Re)-Te,j=Math.abs(ze)-Te,Le=Math.sqrt(Math.max(Xe,0)**2+Math.max(j,0)**2)+Math.min(Math.max(Xe,j),0);Le<0&&(Fe=Math.abs(Le));break}case"cylinder":{const Te=_e*.55,Xe=_e*1,j=Math.abs(Re)-Te,Le=Math.abs(ze)-Xe,Oe=Math.sqrt(Math.max(j,0)**2+Math.max(Le,0)**2)+Math.min(Math.max(j,Le),0);Oe<0&&(Fe=Math.abs(Oe));break}case"torus":{const Te=_e*.45,Xe=_e*.8,j=Math.sqrt(Re*Re+ze*ze),Le=Math.abs(j-(Te+Xe)/2)-(Xe-Te)/2;Le<0&&(Fe=Math.abs(Le));break}case"cone":case"tetrahedron":{const Te=_e*1.1,Xe=Math.abs(Re),j=ze,Le=Math.max(Xe*.866+j*.5,-j)-Te*.5;Le<0&&(Fe=Math.abs(Le));break}default:{const Te=_e*.75,Xe=Re*Re+ze*ze,j=Te*Te;if(Xe<j){const Le=Math.sqrt(Xe);Fe=Te-Le}break}}if(Fe>0){const Te=Math.atan2(Ne,$e);le.pos.x+=Math.cos(Te)*Fe,le.pos.y+=Math.sin(Te)*Fe,le.velocity.x*=.8,le.velocity.y*=.8;const Xe=Fe/_e*(2+(Me||0)*4)*.15;le.applyForce(new Wi(-Math.sin(Te)*Xe,Math.cos(Te)*Xe))}}le.update(Z,S.current)}});for(let le=0;le<ne.iterationsPerFrame;le++)$.forEach(Ke=>Ke.solve());if(ie){const le=ie.x===-1?Ue.w/2:ie.x,Be=(ie.y===-1?Ue.h*.5:ie.y)-dt*ge;G.forEach(ke=>{if(!ke.char||ke.char===" ")return;let $e=ke.pos.x-le,Ne=ke.pos.y-Be;const Re=$e*ut-Ne*st,ze=$e*st+Ne*ut;let Fe=0;switch(be){case"box":{const Te=_e*.85,Xe=Math.abs(Re)-Te,j=Math.abs(ze)-Te,Le=Math.sqrt(Math.max(Xe,0)**2+Math.max(j,0)**2)+Math.min(Math.max(Xe,j),0);Le<0&&(Fe=Math.abs(Le));break}case"cylinder":{const Te=_e*.55,Xe=_e*1,j=Math.abs(Re)-Te,Le=Math.abs(ze)-Xe,Oe=Math.sqrt(Math.max(j,0)**2+Math.max(Le,0)**2)+Math.min(Math.max(j,Le),0);Oe<0&&(Fe=Math.abs(Oe));break}case"torus":{const Te=_e*.45,Xe=_e*.8,j=Math.sqrt(Re*Re+ze*ze),Le=Math.abs(j-(Te+Xe)/2)-(Xe-Te)/2;Le<0&&(Fe=Math.abs(Le));break}case"cone":case"tetrahedron":{const Te=_e*1.1,Xe=Math.abs(Re),j=ze,Le=Math.max(Xe*.866+j*.5,-j)-Te*.5;Le<0&&(Fe=Math.abs(Le));break}default:{const Te=_e*.75,Xe=Re*Re+ze*ze,j=Te*Te;Xe<j&&(Fe=Te-Math.sqrt(Xe));break}}if(Fe>0){const Te=Math.atan2(Ne,$e);ke.pos.x+=Math.cos(Te)*Fe,ke.pos.y+=Math.sin(Te)*Fe,ke.velocity.x*=.5,ke.velocity.y*=.5}})}G.forEach(le=>le.contain(S.current)),Q(me)}return xe=requestAnimationFrame(de),()=>{cancelAnimationFrame(xe),ve.destroy()}},[A.w,A.h]),fe.useEffect(()=>{const T=S.current;if(!T.gridW)return;const R=Array.from(r||""),H=Math.max(7,T.cellHeight*.9);S.current.lastColor!==e&&(E.current={},S.current.lastColor=e);const X={...E.current};for(const G of new Set(R)){if(G===" "||X[G])continue;const $=document.createElement("canvas");$.width=$.height=Math.ceil(H*1.5);const ve=$.getContext("2d");ve&&(ve.font=`bold ${H}px monospace`,ve.textAlign="center",ve.textBaseline="middle",ve.fillStyle=e,ve.fillText(G,$.width/2,$.height/2)),X[G]=$}E.current=X;const ne=(r||"").split(/(\s+)/);let re=0,I=0;for(ne.forEach(G=>{const $=Array.from(G),ve=G.trim()==="";$.forEach(xe=>{if(re<_.current.length){const z=_.current[re];z.char=xe,z.wordId=ve?-1:I,re++}}),ve||I++});re<_.current.length;re++){const G=_.current[re];G.char=" ",G.wordId=-1}},[r,e,A.w,A.h]),O.jsx("div",{ref:g,className:"absolute inset-0 w-full h-full pointer-events-auto",children:O.jsx("canvas",{ref:v,className:"w-full h-full block"})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="182",oS=0,Z0=1,lS=2,Ic=1,cS=2,Ko=3,ps=0,Jn=1,Aa=2,Ca=0,Gr=1,K0=2,Q0=3,J0=4,uS=5,Is=100,fS=101,dS=102,hS=103,pS=104,mS=200,gS=201,vS=202,xS=203,kd=204,qd=205,_S=206,yS=207,SS=208,bS=209,MS=210,ES=211,TS=212,AS=213,wS=214,jd=0,Xd=1,Wd=2,qr=3,Yd=4,Zd=5,Kd=6,Qd=7,Zv=0,CS=1,RS=2,Ki=0,Kv=1,Qv=2,Jv=3,$v=4,ex=5,tx=6,nx=7,ix=300,qs=301,jr=302,Jd=303,$d=304,Yc=306,eh=1e3,wa=1001,th=1002,Fn=1003,DS=1004,gc=1005,Hn=1006,ud=1007,Vs=1008,Ei=1009,ax=1010,sx=1011,$o=1012,Hh=1013,$i=1014,Yi=1015,Na=1016,Gh=1017,Vh=1018,el=1020,rx=35902,ox=35899,lx=1021,cx=1022,Fi=1023,Ua=1026,ks=1027,ux=1028,kh=1029,Xr=1030,qh=1031,jh=1033,Bc=33776,Hc=33777,Gc=33778,Vc=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37488,uh=37489,fh=37490,dh=37491,hh=37808,ph=37809,mh=37810,gh=37811,vh=37812,xh=37813,_h=37814,yh=37815,Sh=37816,bh=37817,Mh=37818,Eh=37819,Th=37820,Ah=37821,wh=36492,Ch=36494,Rh=36495,Dh=36283,Nh=36284,Uh=36285,Lh=36286,NS=3200,US=0,LS=1,fs="",bi="srgb",Wr="srgb-linear",qc="linear",jt="srgb",wr=7680,$0=519,OS=512,PS=513,FS=514,Xh=515,zS=516,IS=517,Wh=518,BS=519,ev=35044,tv="300 es",Zi=2e3,jc=2001;function fx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function HS(){const r=Xc("canvas");return r.style.display="block",r}const nv={};function iv(...r){const e="THREE."+r.shift();console.log(e,...r)}function vt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ft(...r){const e="THREE."+r.shift();console.error(e,...r)}function tl(...r){const e=r.join(" ");e in nv||(nv[e]=!0,vt(...r))}function GS(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,Oh=180/Math.PI;function il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Nt(r,e,i){return Math.max(e,Math.min(i,r))}function VS(r,e){return(r%e+e)%e}function dd(r,e,i){return(1-i)*r+i*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class zt{constructor(e=0,i=0){zt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],_=c[d+0],S=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=_,e[i+1]=S,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==_||p!==S||v!==E){let b=m*_+p*S+v*E+g*A;b<0&&(_=-_,S=-S,E=-E,A=-A,b=-b);let x=1-h;if(b<.9995){const N=Math.acos(b),L=Math.sin(N);x=Math.sin(x*N)/L,h=Math.sin(h*N)/L,m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h}else{m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+A*h;const N=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=N,p*=N,v*=N,g*=N}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[d],_=c[d+1],S=c[d+2],E=c[d+3];return e[i]=h*E+v*g+m*S-p*_,e[i+1]=m*E+v*_+p*g-h*S,e[i+2]=p*E+v*S+h*_-m*g,e[i+3]=v*E-h*g-m*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(c/2),_=m(s/2),S=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"YZX":this._x=_*v*g+p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g-_*S*E;break;case"XZY":this._x=_*v*g-p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g+_*S*E;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=s+h+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(av.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(av.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),v=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*v,this.y=s+m*v+h*p-c*g,this.z=l+m*g+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new ae,av=new al;class St{constructor(e,i,s,l,c,d,h,m,p){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],S=s[5],E=s[8],A=l[0],b=l[3],x=l[6],N=l[1],L=l[4],D=l[7],U=l[2],F=l[5],P=l[8];return c[0]=d*A+h*N+m*U,c[3]=d*b+h*L+m*F,c[6]=d*x+h*D+m*P,c[1]=p*A+v*N+g*U,c[4]=p*b+v*L+g*F,c[7]=p*x+v*D+g*P,c[2]=_*A+S*N+E*U,c[5]=_*b+S*L+E*F,c[8]=_*x+S*D+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*d-h*p,_=h*m-v*c,S=p*c-d*m,E=i*g+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-v*s)*A,e[2]=(h*s-l*d)*A,e[3]=_*A,e[4]=(v*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=S*A,e[7]=(s*m-p*i)*A,e[8]=(d*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(pd.makeScale(e,i)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new St,sv=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:e,whitePoint:s,transfer:qc,toXYZ:sv,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:sv,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),r}const Lt=kS();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class qS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cr===void 0&&(Cr=Xc("canvas")),Cr.width=e.width,Cr.height=e.height;const l=Cr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ra(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(md(l[d].image)):c.push(md(l[d]))}else c=md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let XS=0;const gd=new ae;class kn extends Zr{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=wa,l=wa,c=Hn,d=Vs,h=Fi,m=Ei,p=kn.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=il(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){vt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=ix;kn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,s=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],_=m[1],S=m[5],E=m[9],A=m[2],b=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-A)<.01&&Math.abs(E-b)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+A)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(S+1)/2,U=(x+1)/2,F=(v+_)/4,P=(g+A)/4,q=(E+b)/4;return L>D&&L>U?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=P/s):D>U?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=q/l):U<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),s=P/c,l=q/c),this.set(s,l,c,i),this}let N=Math.sqrt((b-E)*(b-E)+(g-A)*(g-A)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(b-E)/N,this.y=(g-A)/N,this.z=(_-v)/N,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this.w=Nt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this.w=Nt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends Zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new kn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends WS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class dx extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),xc.subVectors(this.max,qo),Rr.subVectors(e.a,qo),Dr.subVectors(e.b,qo),Nr.subVectors(e.c,qo),ss.subVectors(Dr,Rr),rs.subVectors(Nr,Dr),Ns.subVectors(Rr,Nr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!vd(i,Rr,Dr,Nr,xc)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,Rr,Dr,Nr,xc))?!1:(_c.crossVectors(ss,rs),i=[_c.x,_c.y,_c.z],vd(i,Rr,Dr,Nr,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ui=new ae,vc=new sl,Rr=new ae,Dr=new ae,Nr=new ae,ss=new ae,rs=new ae,Ns=new ae,qo=new ae,xc=new ae,_c=new ae,Us=new ae;function vd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const h=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=e.dot(Us),p=i.dot(Us),v=s.dot(Us);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const ZS=new sl,jo=new ae,xd=new ae;class Zh{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ZS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(xd)),this.expandByPoint(jo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ba=new ae,_d=new ae,yc=new ae,os=new ae,yd=new ae,Sc=new ae,Sd=new ae;class KS{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_d.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(_d);const c=e.distanceTo(i)*.5,d=-this.direction.dot(yc),h=os.dot(this.direction),m=-os.dot(yc),p=os.lengthSq(),v=Math.abs(1-d*d);let g,_,S,E;if(v>0)if(g=d*m-h,_=d*h-m,E=c*v,g>=0)if(_>=-E)if(_<=E){const A=1/v;g*=A,_*=A,S=g*(g+d*_+2*h)+_*(d*g+_+2*m)+p}else _=c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-d*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(g=Math.max(0,-(d*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p);else _=d>0?-c:c,g=Math.max(0,-(d*_+h)),S=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(_d).addScaledVector(yc,_),S}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),v>=0?(c=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,c){yd.subVectors(i,e),Sc.subVectors(s,e),Sd.crossVectors(yd,Sc);let d=this.direction.dot(Sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;os.subVectors(this.origin,e);const m=h*this.direction.dot(Sc.crossVectors(os,Sc));if(m<0)return null;const p=h*this.direction.dot(yd.cross(os));if(p<0||m+p>d)return null;const v=-h*os.dot(Sd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(e,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b)}set(e,i,s,l,c,d,h,m,p,v,g,_,S,E,A,b){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=A,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),d=1/Ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=_-A*p,i[9]=-h*m,i[2]=A-_*p,i[6]=E+S*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*v,S=m*g,E=p*v,A=p*g;i[0]=_+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=S*h-E,i[6]=A+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*v,S=m*g,E=p*v,A=p*g;i[0]=_-A*h,i[4]=-d*g,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*v,i[9]=A-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*v,S=d*g,E=h*v,A=h*g;i[0]=m*v,i[4]=E*p-S,i[8]=_*p+A,i[1]=m*g,i[5]=A*p+_,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=A-_*g,i[8]=E*g+S,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=S*g+E,i[10]=_-A*g}else if(e.order==="XZY"){const _=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+A,i[5]=d*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=h*v,i[10]=A*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,i,s){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ls.crossVectors(s,oi),ls.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ls.crossVectors(s,oi)),ls.normalize(),bc.crossVectors(oi,ls),l[0]=ls.x,l[4]=bc.x,l[8]=oi.x,l[1]=ls.y,l[5]=bc.y,l[9]=oi.y,l[2]=ls.z,l[6]=bc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],S=s[13],E=s[2],A=s[6],b=s[10],x=s[14],N=s[3],L=s[7],D=s[11],U=s[15],F=l[0],P=l[4],q=l[8],T=l[12],R=l[1],H=l[5],X=l[9],J=l[13],ne=l[2],re=l[6],I=l[10],G=l[14],$=l[3],ve=l[7],xe=l[11],z=l[15];return c[0]=d*F+h*R+m*ne+p*$,c[4]=d*P+h*H+m*re+p*ve,c[8]=d*q+h*X+m*I+p*xe,c[12]=d*T+h*J+m*G+p*z,c[1]=v*F+g*R+_*ne+S*$,c[5]=v*P+g*H+_*re+S*ve,c[9]=v*q+g*X+_*I+S*xe,c[13]=v*T+g*J+_*G+S*z,c[2]=E*F+A*R+b*ne+x*$,c[6]=E*P+A*H+b*re+x*ve,c[10]=E*q+A*X+b*I+x*xe,c[14]=E*T+A*J+b*G+x*z,c[3]=N*F+L*R+D*ne+U*$,c[7]=N*P+L*H+D*re+U*ve,c[11]=N*q+L*X+D*I+U*xe,c[15]=N*T+L*J+D*G+U*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],_=e[10],S=e[14],E=e[3],A=e[7],b=e[11],x=e[15],N=m*S-p*_,L=h*S-p*g,D=h*_-m*g,U=d*S-p*v,F=d*_-m*v,P=d*g-h*v;return i*(A*N-b*L+x*D)-s*(E*N-b*U+x*F)+l*(E*L-A*U+x*P)-c*(E*D-A*F+b*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],_=e[10],S=e[11],E=e[12],A=e[13],b=e[14],x=e[15],N=g*b*p-A*_*p+A*m*S-h*b*S-g*m*x+h*_*x,L=E*_*p-v*b*p-E*m*S+d*b*S+v*m*x-d*_*x,D=v*A*p-E*g*p+E*h*S-d*A*S-v*h*x+d*g*x,U=E*g*m-v*A*m-E*h*_+d*A*_+v*h*b-d*g*b,F=i*N+s*L+l*D+c*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=N*P,e[1]=(A*_*c-g*b*c-A*l*S+s*b*S+g*l*x-s*_*x)*P,e[2]=(h*b*c-A*m*c+A*l*p-s*b*p-h*l*x+s*m*x)*P,e[3]=(g*m*c-h*_*c-g*l*p+s*_*p+h*l*S-s*m*S)*P,e[4]=L*P,e[5]=(v*b*c-E*_*c+E*l*S-i*b*S-v*l*x+i*_*x)*P,e[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*x-i*m*x)*P,e[7]=(d*_*c-v*m*c+v*l*p-i*_*p-d*l*S+i*m*S)*P,e[8]=D*P,e[9]=(E*g*c-v*A*c-E*s*S+i*A*S+v*s*x-i*g*x)*P,e[10]=(d*A*c-E*h*c+E*s*p-i*A*p-d*s*x+i*h*x)*P,e[11]=(v*h*c-d*g*c-v*s*p+i*g*p+d*s*S-i*h*S)*P,e[12]=U*P,e[13]=(v*A*l-E*g*l+E*s*_-i*A*_-v*s*b+i*g*b)*P,e[14]=(E*h*l-d*A*l-E*s*m+i*A*m+d*s*b-i*h*b)*P,e[15]=(d*g*l-v*h*l+v*s*m-i*g*m-d*s*_+i*h*_)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,g=h+h,_=c*p,S=c*v,E=c*g,A=d*v,b=d*g,x=h*g,N=m*p,L=m*v,D=m*g,U=s.x,F=s.y,P=s.z;return l[0]=(1-(A+x))*U,l[1]=(S+D)*U,l[2]=(E-L)*U,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(_+x))*F,l[6]=(b+N)*F,l[7]=0,l[8]=(E+L)*P,l[9]=(b-N)*P,l[10]=(1-(_+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),h=Ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,v=1/d,g=1/h;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=v,Li.elements[5]*=v,Li.elements[6]*=v,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,i.setFromRotationMatrix(Li),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Zi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),_=(i+e)/(i-e),S=(s+l)/(s-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Zi)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===jc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Zi,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),_=-(i+e)/(i-e),S=-(s+l)/(s-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Zi)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===jc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ur=new ae,Li=new _n,QS=new ae(0,0,0),JS=new ae(1,1,1),ls=new ae,bc=new ae,oi=new ae,ov=new _n,lv=new al;class La{constructor(e=0,i=0,s=0,l=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ov,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return lv.setFromEuler(this),this.setFromQuaternion(lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const cv=new ae,Lr=new al,Ma=new _n,Mc=new ae,Xo=new ae,eb=new ae,tb=new al,uv=new ae(1,0,0),fv=new ae(0,1,0),dv=new ae(0,0,1),hv={type:"added"},nb={type:"removed"},Or={type:"childadded",child:null},bd={type:"childremoved",child:null};class ci extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new ae,i=new La,s=new al,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new _n},normalMatrix:{value:new St}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Lr.setFromAxisAngle(e,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,i){return Lr.setFromAxisAngle(e,i),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(uv,e)}rotateY(e){return this.rotateOnAxis(fv,e)}rotateZ(e){return this.rotateOnAxis(dv,e)}translateOnAxis(e,i){return cv.copy(e).applyQuaternion(this.quaternion),this.position.add(cv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uv,e)}translateY(e){return this.translateOnAxis(fv,e)}translateZ(e){return this.translateOnAxis(dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mc.copy(e):Mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Xo,Mc,this.up):Ma.lookAt(Mc,Xo,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hv),Or.child=e,this.dispatchEvent(Or),Or.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nb),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hv),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),g=d(e.shapes),_=d(e.skeletons),S=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ci.DEFAULT_UP=new ae(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new ae,Ea=new ae,Md=new ae,Ta=new ae,Pr=new ae,Fr=new ae,pv=new ae,Ed=new ae,Td=new ae,Ad=new ae,wd=new fn,Cd=new fn,Rd=new fn;class Pi{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Oi.subVectors(e,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Oi.subVectors(l,i),Ea.subVectors(s,i),Md.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(Ea),m=Oi.dot(Md),p=Ea.dot(Ea),v=Ea.dot(Md),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,S=(p*m-h*v)*_,E=(d*v-h*m)*_;return c.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(d,Ta.y),m.addScaledVector(h,Ta.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return wd.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),wd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(wd,c.x),d.addScaledVector(Cd,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(e,i,s,l){return Oi.subVectors(s,i),Ea.subVectors(e,i),Oi.cross(Ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Oi.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Pr.subVectors(l,s),Fr.subVectors(c,s),Ed.subVectors(e,s);const m=Pr.dot(Ed),p=Fr.dot(Ed);if(m<=0&&p<=0)return i.copy(s);Td.subVectors(e,l);const v=Pr.dot(Td),g=Fr.dot(Td);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Pr,d);Ad.subVectors(e,c);const S=Pr.dot(Ad),E=Fr.dot(Ad);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Fr,h);const b=v*E-S*g;if(b<=0&&g-v>=0&&S-E>=0)return pv.subVectors(c,l),h=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(pv,h);const x=1/(b+A+_);return d=A*x,h=_*x,i.copy(s).addScaledVector(Pr,d).addScaledVector(Fr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Dd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Gt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Lt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Lt.workingColorSpace){if(e=VS(e,1),i=Nt(i,0,1),s=Nt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Dd(d,c,e+1/3),this.g=Dd(d,c,e),this.b=Dd(d,c,e-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(e,i=bi){function s(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:vt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bi){const s=px[e.toLowerCase()];return s!==void 0?this.setHex(s,i):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return Lt.workingToColorSpace(Bn.copy(this),e),Math.round(Nt(Bn.r*255,0,255))*65536+Math.round(Nt(Bn.g*255,0,255))*256+Math.round(Nt(Bn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=bi){Lt.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==bi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+i,cs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cs),e.getHSL(Ec);const s=dd(cs.h,Ec.h,i),l=dd(cs.s,Ec.s,i),c=dd(cs.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Gt;Gt.NAMES=px;let ib=0;class Zc extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Gr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=qd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){vt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){vt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==qd&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wc extends Zc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new ae,Tc=new zt;let ab=0;class Ji{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ev,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ev&&(e.usage=this.usage),e}}class mx extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class gx extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class dn extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}let sb=0;const Si=new _n,Nd=new ci,zr=new ae,li=new sl,Wo=new sl,Cn=new ae;class ui extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fx(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new St().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(li.min,Wo.min),li.expandByPoint(Cn),Cn.addVectors(li.max,Wo.max),li.expandByPoint(Cn)):(li.expandByPoint(Wo.min),li.expandByPoint(Wo.max))}li.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Cn.fromBufferAttribute(h,p),m&&(zr.fromBufferAttribute(e,p),Cn.add(zr)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new ae,m[q]=new ae;const p=new ae,v=new ae,g=new ae,_=new zt,S=new zt,E=new zt,A=new ae,b=new ae;function x(q,T,R){p.fromBufferAttribute(s,q),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),_.fromBufferAttribute(c,q),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,R),v.sub(p),g.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),b.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),h[q].add(A),h[T].add(A),h[R].add(A),m[q].add(b),m[T].add(b),m[R].add(b))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,T=N.length;q<T;++q){const R=N[q],H=R.start,X=R.count;for(let J=H,ne=H+X;J<ne;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new ae,D=new ae,U=new ae,F=new ae;function P(q){U.fromBufferAttribute(l,q),F.copy(U);const T=h[q];L.copy(T),L.sub(U.multiplyScalar(U.dot(T))).normalize(),D.crossVectors(F,T);const H=D.dot(m[q])<0?-1:1;d.setXYZW(q,L.x,L.y,L.z,H)}for(let q=0,T=N.length;q<T;++q){const R=N[q],H=R.start,X=R.count;for(let J=H,ne=H+X;J<ne;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new ae,c=new ae,d=new ae,h=new ae,m=new ae,p=new ae,v=new ae,g=new ae;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),A=e.getX(_+1),b=e.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,b),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,_=new p.constructor(m.length*v);let S=0,E=0;for(let A=0,b=m.length;A<b;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*v;for(let x=0;x<v;x++)_[E++]=p[S++]}return new Ji(_,v,g)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=e(_,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mv=new _n,Ls=new KS,Ac=new Zh,gv=new ae,wc=new ae,Cc=new ae,Rc=new ae,Ud=new ae,Dc=new ae,vv=new ae,Nc=new ae;class zi extends ci{constructor(e=new ui,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Ud.fromBufferAttribute(g,e),d?Dc.addScaledVector(Ud,v):Dc.addScaledVector(Ud.sub(i),v))}i.add(Dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),Ls.copy(e.ray).recast(e.near),!(Ac.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ac,gv)===null||Ls.origin.distanceToSquared(gv)>(e.far-e.near)**2))&&(mv.copy(c).invert(),Ls.copy(e.ray).applyMatrix4(mv),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ls)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=_.length;E<A;E++){const b=_[E],x=d[b.materialIndex],N=Math.max(b.start,S.start),L=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let D=N,U=L;D<U;D+=3){const F=h.getX(D),P=h.getX(D+1),q=h.getX(D+2);l=Uc(this,x,e,s,p,v,g,F,P,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const N=h.getX(b),L=h.getX(b+1),D=h.getX(b+2);l=Uc(this,d,e,s,p,v,g,N,L,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=_.length;E<A;E++){const b=_[E],x=d[b.materialIndex],N=Math.max(b.start,S.start),L=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let D=N,U=L;D<U;D+=3){const F=D,P=D+1,q=D+2;l=Uc(this,x,e,s,p,v,g,F,P,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let b=E,x=A;b<x;b+=3){const N=b,L=b+1,D=b+2;l=Uc(this,d,e,s,p,v,g,N,L,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function rb(r,e,i,s,l,c,d,h){let m;if(e.side===Jn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===ps,h),m===null)return null;Nc.copy(h),Nc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:r}}function Uc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,wc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,Rc);const v=rb(r,e,i,s,wc,Cc,Rc,vv);if(v){const g=new ae;Pi.getBarycoord(vv,wc,Cc,Rc,g),l&&(v.uv=Pi.getInterpolatedAttribute(l,h,m,p,g,new zt)),c&&(v.uv1=Pi.getInterpolatedAttribute(c,h,m,p,g,new zt)),d&&(v.normal=Pi.getInterpolatedAttribute(d,h,m,p,g,new ae),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new ae,materialIndex:0};Pi.getNormal(wc,Cc,Rc,_.normal),v.face=_,v.barycoord=g}return v}class Kr extends ui{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,s,i,e,d,c,0),E("z","y","x",1,-1,s,i,-e,d,c,1),E("x","z","y",1,1,e,s,i,l,d,2),E("x","z","y",1,-1,e,s,-i,l,d,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(g,2));function E(A,b,x,N,L,D,U,F,P,q,T){const R=D/P,H=U/q,X=D/2,J=U/2,ne=F/2,re=P+1,I=q+1;let G=0,$=0;const ve=new ae;for(let xe=0;xe<I;xe++){const z=xe*H-J;for(let Q=0;Q<re;Q++){const de=Q*R-X;ve[A]=de*N,ve[b]=z*L,ve[x]=ne,p.push(ve.x,ve.y,ve.z),ve[A]=0,ve[b]=0,ve[x]=F>0?1:-1,v.push(ve.x,ve.y,ve.z),g.push(Q/P),g.push(1-xe/q),G+=1}}for(let xe=0;xe<q;xe++)for(let z=0;z<P;z++){const Q=_+z+re*xe,de=_+z+re*(xe+1),me=_+(z+1)+re*(xe+1),Ue=_+(z+1)+re*xe;m.push(Q,de,Ue),m.push(de,me,Ue),$+=6}h.addGroup(S,$,T),S+=$,_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)e[l]=s[l]}return e}function ob(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function vx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const lb={clone:Yr,merge:Vn};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Zc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=ob(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xx extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new ae,xv=new zt,_v=new zt;class Mi extends xx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,xv,_v),i.subVectors(_v,xv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ir=-90,Br=1;class fb extends ci{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Ir,Br,e,i);l.layers=this.layers,this.add(l);const c=new Mi(Ir,Br,e,i);c.layers=this.layers,this.add(c);const d=new Mi(Ir,Br,e,i);d.layers=this.layers,this.add(d);const h=new Mi(Ir,Br,e,i);h.layers=this.layers,this.add(h);const m=new Mi(Ir,Br,e,i);m.layers=this.layers,this.add(m);const p=new Mi(Ir,Br,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class _x extends kn{constructor(e=[],i=qs,s,l,c,d,h,m,p,v){super(e,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Kr(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ca});c.uniforms.tEquirect.value=i;const d=new zi(l,c),h=i.minFilter;return i.minFilter===Vs&&(i.minFilter=Hn),new fb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Lc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const b=i.getJointPose(A,s),x=this._getHandJoint(p,A);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(db)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Lc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class hb extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pb extends kn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Fn,v=Fn,g,_){super(null,d,h,m,p,v,l,c,g,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new ae,mb=new ae,gb=new St;class zs{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Od.subVectors(s,i).cross(mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Od),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||gb.getNormalMatrix(e),l=this.coplanarPoint(Od).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Zh,vb=new zt(.5,.5),Oc=new ae;class Sx{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,d=new zs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Zi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],S=c[7],E=c[8],A=c[9],b=c[10],x=c[11],N=c[12],L=c[13],D=c[14],U=c[15];if(l[0].setComponents(p-d,S-v,x-E,U-N).normalize(),l[1].setComponents(p+d,S+v,x+E,U+N).normalize(),l[2].setComponents(p+h,S+g,x+A,U+L).normalize(),l[3].setComponents(p-h,S-g,x-A,U-L).normalize(),s)l[4].setComponents(m,_,b,D).normalize(),l[5].setComponents(p-m,S-_,x-b,U-D).normalize();else if(l[4].setComponents(p-m,S-_,x-b,U-D).normalize(),i===Zi)l[5].setComponents(p+m,S+_,x+b,U+D).normalize();else if(i===jc)l[5].setComponents(m,_,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const i=vb.distanceTo(e.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nl extends kn{constructor(e,i,s=$i,l,c,d,h=Fn,m=Fn,p,v=Ua,g=1){if(v!==Ua&&v!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xb extends nl{constructor(e,i=$i,s=qs,l,c,d=Fn,h=Fn,m,p=Ua){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kc extends ui{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],_=[],S=[];let E=0;const A=[],b=s/2;let x=0;N(),d===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(S,2));function N(){const D=new ae,U=new ae;let F=0;const P=(i-e)/s;for(let q=0;q<=c;q++){const T=[],R=q/c,H=R*(i-e)+e;for(let X=0;X<=l;X++){const J=X/l,ne=J*m+h,re=Math.sin(ne),I=Math.cos(ne);U.x=H*re,U.y=-R*s+b,U.z=H*I,g.push(U.x,U.y,U.z),D.set(re,P,I).normalize(),_.push(D.x,D.y,D.z),S.push(J,1-R),T.push(E++)}A.push(T)}for(let q=0;q<l;q++)for(let T=0;T<c;T++){const R=A[T][q],H=A[T+1][q],X=A[T+1][q+1],J=A[T][q+1];(e>0||T!==0)&&(v.push(R,H,J),F+=3),(i>0||T!==c-1)&&(v.push(H,X,J),F+=3)}p.addGroup(x,F,0),x+=F}function L(D){const U=E,F=new zt,P=new ae;let q=0;const T=D===!0?e:i,R=D===!0?1:-1;for(let X=1;X<=l;X++)g.push(0,b*R,0),_.push(0,R,0),S.push(.5,.5),E++;const H=E;for(let X=0;X<=l;X++){const ne=X/l*m+h,re=Math.cos(ne),I=Math.sin(ne);P.x=T*I,P.y=b*R,P.z=T*re,g.push(P.x,P.y,P.z),_.push(0,R,0),F.x=re*.5+.5,F.y=I*.5*R+.5,S.push(F.x,F.y),E++}for(let X=0;X<l;X++){const J=U+X,ne=H+X;D===!0?v.push(ne,ne+1,J):v.push(ne+1,ne,J),q+=3}p.addGroup(x,q,D===!0?1:2),x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kh extends Kc{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,h=Math.PI*2){super(0,e,i,s,l,c,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Kh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qr extends ui{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),v(),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(c.slice(),3)),this.setAttribute("uv",new dn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const L=new ae,D=new ae,U=new ae;for(let F=0;F<i.length;F+=3)S(i[F+0],L),S(i[F+1],D),S(i[F+2],U),m(L,D,U,N)}function m(N,L,D,U){const F=U+1,P=[];for(let q=0;q<=F;q++){P[q]=[];const T=N.clone().lerp(D,q/F),R=L.clone().lerp(D,q/F),H=F-q;for(let X=0;X<=H;X++)X===0&&q===F?P[q][X]=T:P[q][X]=T.clone().lerp(R,X/H)}for(let q=0;q<F;q++)for(let T=0;T<2*(F-q)-1;T++){const R=Math.floor(T/2);T%2===0?(_(P[q][R+1]),_(P[q+1][R]),_(P[q][R])):(_(P[q][R+1]),_(P[q+1][R+1]),_(P[q+1][R]))}}function p(N){const L=new ae;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(N),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function v(){const N=new ae;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const D=b(N)/2/Math.PI+.5,U=x(N)/Math.PI+.5;d.push(D,1-U)}E(),g()}function g(){for(let N=0;N<d.length;N+=6){const L=d[N+0],D=d[N+2],U=d[N+4],F=Math.max(L,D,U),P=Math.min(L,D,U);F>.9&&P<.1&&(L<.2&&(d[N+0]+=1),D<.2&&(d[N+2]+=1),U<.2&&(d[N+4]+=1))}}function _(N){c.push(N.x,N.y,N.z)}function S(N,L){const D=N*3;L.x=e[D+0],L.y=e[D+1],L.z=e[D+2]}function E(){const N=new ae,L=new ae,D=new ae,U=new ae,F=new zt,P=new zt,q=new zt;for(let T=0,R=0;T<c.length;T+=9,R+=6){N.set(c[T+0],c[T+1],c[T+2]),L.set(c[T+3],c[T+4],c[T+5]),D.set(c[T+6],c[T+7],c[T+8]),F.set(d[R+0],d[R+1]),P.set(d[R+2],d[R+3]),q.set(d[R+4],d[R+5]),U.copy(N).add(L).add(D).divideScalar(3);const H=b(U);A(F,R+0,N,H),A(P,R+2,L,H),A(q,R+4,D,H)}}function A(N,L,D,U){U<0&&N.x===1&&(d[L]=N.x-1),D.x===0&&D.z===0&&(d[L]=U/2/Math.PI+.5)}function b(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.vertices,e.indices,e.radius,e.detail)}}class Qh extends Qr{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,d,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Qh(e.radius,e.detail)}}class kr extends Qr{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new kr(e.radius,e.detail)}}class Jh extends Qr{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Jh(e.radius,e.detail)}}class Qc extends ui{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=e/h,_=i/m,S=[],E=[],A=[],b=[];for(let x=0;x<v;x++){const N=x*_-d;for(let L=0;L<p;L++){const D=L*g-c;E.push(D,-N,0),A.push(0,0,1),b.push(L/h),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<h;N++){const L=N+p*x,D=N+p*(x+1),U=N+1+p*(x+1),F=N+1+p*x;S.push(L,D,F),S.push(D,U,F)}this.setIndex(S),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $h extends ui{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const v=[],g=new ae,_=new ae,S=[],E=[],A=[],b=[];for(let x=0;x<=s;x++){const N=[],L=x/s;let D=0;x===0&&d===0?D=.5/i:x===s&&m===Math.PI&&(D=-.5/i);for(let U=0;U<=i;U++){const F=U/i;g.x=-e*Math.cos(l+F*c)*Math.sin(d+L*h),g.y=e*Math.cos(d+L*h),g.z=e*Math.sin(l+F*c)*Math.sin(d+L*h),E.push(g.x,g.y,g.z),_.copy(g).normalize(),A.push(_.x,_.y,_.z),b.push(F+D,1-L),N.push(p++)}v.push(N)}for(let x=0;x<s;x++)for(let N=0;N<i;N++){const L=v[x][N+1],D=v[x][N],U=v[x+1][N],F=v[x+1][N+1];(x!==0||d>0)&&S.push(L,D,F),(x!==s-1||m<Math.PI)&&S.push(D,U,F)}this.setIndex(S),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(A,3)),this.setAttribute("uv",new dn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ep extends Qr{constructor(e=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ep(e.radius,e.detail)}}class tp extends ui{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],m=[],p=[],v=new ae,g=new ae,_=new ae;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const A=E/l*c,b=S/s*Math.PI*2;g.x=(e+i*Math.cos(b))*Math.cos(A),g.y=(e+i*Math.cos(b))*Math.sin(A),g.z=i*Math.sin(b),h.push(g.x,g.y,g.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),_.subVectors(g,v).normalize(),m.push(_.x,_.y,_.z),p.push(E/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const A=(l+1)*S+E-1,b=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,N=(l+1)*S+E;d.push(A,b,N),d.push(b,x,N)}this.setIndex(d),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _b extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yb extends Zc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Zc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mx extends xx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bb extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function yv(r,e,i,s){const l=Mb(s);switch(i){case lx:return r*e;case ux:return r*e/l.components*l.byteLength;case kh:return r*e/l.components*l.byteLength;case Xr:return r*e*2/l.components*l.byteLength;case qh:return r*e*2/l.components*l.byteLength;case cx:return r*e*3/l.components*l.byteLength;case Fi:return r*e*4/l.components*l.byteLength;case jh:return r*e*4/l.components*l.byteLength;case Bc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(r,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(r,8)*Math.max(e,8)/2;case rh:case oh:case ch:case uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lh:case fh:case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wh:case Ch:case Rh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Dh:case Nh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Uh:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Mb(r){switch(r){case Ei:case ax:return{byteLength:1,components:1};case $o:case sx:case Na:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case $i:case Hh:case Yi:return{byteLength:4,components:1};case rx:case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Eb(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,g[_]=A)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];r.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ab=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
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
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb=`#ifdef USE_BATCHING
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
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yb=`#define PI 3.141592653589793
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
} // validated`,Zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
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
#endif`,MM=`uniform sampler2D dfgLUT;
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
}`,EM=`
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c1=`float getShadowMask() {
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
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,U1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
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
}`,z1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define LAMBERT
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
}`,V1=`#define MATCAP
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
}`,k1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,X1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,Y1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
}`,K1=`#define TOON
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
}`,Q1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,$1=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,tE=`uniform vec3 color;
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
}`,nE=`uniform float rotation;
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
}`,iE=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:Tb,alphahash_pars_fragment:Ab,alphamap_fragment:wb,alphamap_pars_fragment:Cb,alphatest_fragment:Rb,alphatest_pars_fragment:Db,aomap_fragment:Nb,aomap_pars_fragment:Ub,batching_pars_vertex:Lb,batching_vertex:Ob,begin_vertex:Pb,beginnormal_vertex:Fb,bsdfs:zb,iridescence_fragment:Ib,bumpmap_pars_fragment:Bb,clipping_planes_fragment:Hb,clipping_planes_pars_fragment:Gb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:kb,color_fragment:qb,color_pars_fragment:jb,color_pars_vertex:Xb,color_vertex:Wb,common:Yb,cube_uv_reflection_fragment:Zb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Qb,displacementmap_vertex:Jb,emissivemap_fragment:$b,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:aM,envmap_pars_fragment:sM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:xM,lights_toon_pars_fragment:_M,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:bM,lights_physical_pars_fragment:MM,lights_fragment_begin:EM,lights_fragment_maps:TM,lights_fragment_end:AM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:DM,map_fragment:NM,map_pars_fragment:UM,map_particle_fragment:LM,map_particle_pars_fragment:OM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:FM,morphinstance_vertex:zM,morphcolor_vertex:IM,morphnormal_vertex:BM,morphtarget_pars_vertex:HM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:qM,normal_pars_vertex:jM,normal_vertex:XM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:JM,packing:$M,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:_1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:b1,worldpos_vertex:M1,background_vert:E1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:w1,cube_vert:C1,cube_frag:R1,depth_vert:D1,depth_frag:N1,distance_vert:U1,distance_frag:L1,equirect_vert:O1,equirect_frag:P1,linedashed_vert:F1,linedashed_frag:z1,meshbasic_vert:I1,meshbasic_frag:B1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:k1,meshnormal_vert:q1,meshnormal_frag:j1,meshphong_vert:X1,meshphong_frag:W1,meshphysical_vert:Y1,meshphysical_frag:Z1,meshtoon_vert:K1,meshtoon_frag:Q1,points_vert:J1,points_frag:$1,shadow_vert:eE,shadow_frag:tE,sprite_vert:nE,sprite_frag:iE},qe={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Vn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Vn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Vn([qe.points,qe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Vn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Vn([qe.common,qe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Vn([qe.sprite,qe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Vn([qe.common,qe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Vn([qe.lights,qe.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Pc={r:0,b:0,g:0},Ps=new La,aE=new _n;function sE(r,e,i,s,l,c,d){const h=new Gt(0);let m=c===!0?0:1,p,v,g=null,_=0,S=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const U=E(L);U===null?x(h,m):U&&U.isColor&&(x(U,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(L,D){const U=E(D);U&&(U.isCubeTexture||U.mapping===Yc)?(v===void 0&&(v=new zi(new Kr(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Yr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ps.copy(D.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(Ps)),v.material.toneMapped=Lt.getTransfer(U.colorSpace)!==jt,(g!==U||_!==U.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=U,_=U.version,S=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new zi(new Qc(2,2),new ea({name:"BackgroundMaterial",uniforms:Yr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(U.colorSpace)!==jt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,_=U.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Pc,vx(r)),s.buffers.color.setClear(Pc.r,Pc.g,Pc.b,D,d)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:A,addToRenderList:b,dispose:N}}function rE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,d=!1;function h(R,H,X,J,ne){let re=!1;const I=g(J,X,H);c!==I&&(c=I,p(c.object)),re=S(R,J,X,ne),re&&E(R,J,X,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,D(R,H,X,J),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function v(R){return r.deleteVertexArray(R)}function g(R,H,X){const J=X.wireframe===!0;let ne=s[R.id];ne===void 0&&(ne={},s[R.id]=ne);let re=ne[H.id];re===void 0&&(re={},ne[H.id]=re);let I=re[J];return I===void 0&&(I=_(m()),re[J]=I),I}function _(R){const H=[],X=[],J=[];for(let ne=0;ne<i;ne++)H[ne]=0,X[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,H,X,J){const ne=c.attributes,re=H.attributes;let I=0;const G=X.getAttributes();for(const $ in G)if(G[$].location>=0){const xe=ne[$];let z=re[$];if(z===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),xe===void 0||xe.attribute!==z||z&&xe.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==J}function E(R,H,X,J){const ne={},re=H.attributes;let I=0;const G=X.getAttributes();for(const $ in G)if(G[$].location>=0){let xe=re[$];xe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor));const z={};z.attribute=xe,xe&&xe.data&&(z.data=xe.data),ne[$]=z,I++}c.attributes=ne,c.attributesNum=I,c.index=J}function A(){const R=c.newAttributes;for(let H=0,X=R.length;H<X;H++)R[H]=0}function b(R){x(R,0)}function x(R,H){const X=c.newAttributes,J=c.enabledAttributes,ne=c.attributeDivisors;X[R]=1,J[R]===0&&(r.enableVertexAttribArray(R),J[R]=1),ne[R]!==H&&(r.vertexAttribDivisor(R,H),ne[R]=H)}function N(){const R=c.newAttributes,H=c.enabledAttributes;for(let X=0,J=H.length;X<J;X++)H[X]!==R[X]&&(r.disableVertexAttribArray(X),H[X]=0)}function L(R,H,X,J,ne,re,I){I===!0?r.vertexAttribIPointer(R,H,X,ne,re):r.vertexAttribPointer(R,H,X,J,ne,re)}function D(R,H,X,J){A();const ne=J.attributes,re=X.getAttributes(),I=H.defaultAttributeValues;for(const G in re){const $=re[G];if($.location>=0){let ve=ne[G];if(ve===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),ve!==void 0){const xe=ve.normalized,z=ve.itemSize,Q=e.get(ve);if(Q===void 0)continue;const de=Q.buffer,me=Q.type,Ue=Q.bytesPerElement,Z=me===r.INT||me===r.UNSIGNED_INT||ve.gpuType===Hh;if(ve.isInterleavedBufferAttribute){const ie=ve.data,Me=ie.stride,be=ve.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<$.locationSize;Pe++)x($.location+Pe,ie.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)b($.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Pe=0;Pe<$.locationSize;Pe++)L($.location+Pe,z/$.locationSize,me,xe,Me*Ue,(be+z/$.locationSize*Pe)*Ue,Z)}else{if(ve.isInstancedBufferAttribute){for(let ie=0;ie<$.locationSize;ie++)x($.location+ie,ve.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ie=0;ie<$.locationSize;ie++)b($.location+ie);r.bindBuffer(r.ARRAY_BUFFER,de);for(let ie=0;ie<$.locationSize;ie++)L($.location+ie,z/$.locationSize,me,xe,z*Ue,z/$.locationSize*ie*Ue,Z)}}else if(I!==void 0){const xe=I[G];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv($.location,xe);break;case 3:r.vertexAttrib3fv($.location,xe);break;case 4:r.vertexAttrib4fv($.location,xe);break;default:r.vertexAttrib1fv($.location,xe)}}}}N()}function U(){q();for(const R in s){const H=s[R];for(const X in H){const J=H[X];for(const ne in J)v(J[ne].object),delete J[ne];delete H[X]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const X in H){const J=H[X];for(const ne in J)v(J[ne].object),delete J[ne];delete H[X]}delete s[R.id]}function P(R){for(const H in s){const X=s[H];if(X[R.id]===void 0)continue;const J=X[R.id];for(const ne in J)v(J[ne].object),delete J[ne];delete X[R.id]}}function q(){T(),d=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:b,disableUnusedAttributes:N}}function oE(r,e,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*_[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function lE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Fi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const q=P===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ei&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yi&&!q)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(vt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,maxSamples:U,samples:F}}function cE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new zs,h=new St,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||l;return l=_,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,x=r.get(g);if(!l||E===null||E.length===0||c&&!b)c?v(null):p();else{const N=c?0:s,L=N*4;let D=x.clippingState||null;m.value=D,D=v(E,_,L,S);for(let U=0;U!==L;++U)D[U]=i[U];x.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,_,S,E){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=m.value,E!==!0||b===null){const x=S+A*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(b===null||b.length<x)&&(b=new Float32Array(x));for(let L=0,D=S;L!==A;++L,D+=4)d.copy(g[L]).applyMatrix4(N,h),d.normal.toArray(b,D),b[D+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,b}}function uE(r){let e=new WeakMap;function i(d,h){return h===Jd?d.mapping=qs:h===$d&&(d.mapping=jr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Jd||h===$d)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new yx(m.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const hs=4,Sv=[.125,.215,.35,.446,.526,.582],Bs=20,fE=256,Yo=new Mx,bv=new Gt;let Pd=null,Fd=0,zd=0,Id=!1;const dE=new ae;class Mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=dE}=c;Pd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Fd,zd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===qs||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Na,format:Fi,colorSpace:Wr,depthBuffer:!1},l=Ev(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hE(c)),this._blurMaterial=mE(c,e,i),this._ggxMaterial=pE(c,e,i)}return l}_compileMaterial(e){const i=new zi(new ui,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(bv),g.toneMapping=Ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new Kr,new Wc({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let x=!1;const N=e.background;N?N.isColor&&(b.color.copy(N),e.background=null,x=!0):(b.color.copy(bv),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const U=this._cubeSize;Hr(l,D*U,L>2?U:0,U,U),g.setRenderTarget(l),x&&g.render(A,m),g.render(e,m)}g.toneMapping=S,g.autoClear=_,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===qs||e.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),_=0+p*1.25,S=g*_,{_lodMax:E}=this,A=this._sizeLods[s],b=3*A*(s>E-hs?s-E+hs:0),x=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Hr(c,b,x,3*A,2*A),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Hr(e,b,x,3*A,2*A),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),A=c/E,b=isFinite(c)?1+Math.floor(v*A):Bs;b>Bs&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Bs}`);const x=[];let N=0;for(let P=0;P<Bs;++P){const q=P/A,T=Math.exp(-q*q/2);x.push(T),P===0?N+=T:P<b&&(N+=2*T)}for(let P=0;P<x.length;P++)x[P]=x[P]/N;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=x,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const D=this._sizeLods[l],U=3*D*(l>L-hs?l-L+hs:0),F=4*(this._cubeSize-D);Hr(i,U,F,3*D,2*D),m.setRenderTarget(i),m.render(g,Yo)}}function hE(r){const e=[],i=[],s=[];let l=r;const c=r-hs+1+Sv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-hs?m=Sv[d-r+hs-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,A=3,b=2,x=1,N=new Float32Array(A*E*S),L=new Float32Array(b*E*S),D=new Float32Array(x*E*S);for(let F=0;F<S;F++){const P=F%3*2/3-1,q=F>2?0:-1,T=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];N.set(T,A*E*F),L.set(_,b*E*F);const R=[F,F,F,F,F,F];D.set(R,x*E*F)}const U=new ui;U.setAttribute("position",new Ji(N,A)),U.setAttribute("uv",new Ji(L,b)),U.setAttribute("faceIndex",new Ji(D,x)),s.push(new zi(U,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Ev(r,e,i){const s=new Qi(r,e,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function pE(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function mE(r,e,i){const s=new Float32Array(Bs),l=new ae(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Tv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Av(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function gE(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Jd||m===$d,v=m===qs||m===jr;if(p||v){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Mv(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Mv(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function vE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function xE(r,e,i,s){const l={},c=new WeakMap;function d(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",d),delete l[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let L=0,D=N.length;L<D;L+=3){const U=N[L+0],F=N[L+1],P=N[L+2];_.push(U,F,F,P,P,U)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const U=L+0,F=L+1,P=L+2;_.push(U,F,F,P,P,U)}}else return;const b=new(fx(_)?gx:mx)(_,1);b.version=A;const x=c.get(g);x&&e.remove(x),c.set(g,b)}function v(g){const _=c.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function _E(r,e,i){let s;function l(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function m(_,S){r.drawElements(s,S,c,_*d),i.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,_*d,E),i.update(S,s,E))}function v(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,_,0,E);let b=0;for(let x=0;x<E;x++)b+=S[x];i.update(b,s,1)}function g(_,S,E,A){if(E===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<_.length;x++)p(_[x]/d,S[x],A[x]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,_,0,A,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*A[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function yE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ft("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function SE(r,e,i){const s=new WeakMap,l=new fn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let R=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),b===!0&&(D=3);let U=h.attributes.position.count*D,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*F*4*g),q=new dx(P,U,F,g);q.type=Yi,q.needsUpdate=!0;const T=D*4;for(let H=0;H<g;H++){const X=x[H],J=N[H],ne=L[H],re=U*F*4*H;for(let I=0;I<X.count;I++){const G=I*T;E===!0&&(l.fromBufferAttribute(X,I),P[re+G+0]=l.x,P[re+G+1]=l.y,P[re+G+2]=l.z,P[re+G+3]=0),A===!0&&(l.fromBufferAttribute(J,I),P[re+G+4]=l.x,P[re+G+5]=l.y,P[re+G+6]=l.z,P[re+G+7]=0),b===!0&&(l.fromBufferAttribute(ne,I),P[re+G+8]=l.x,P[re+G+9]=l.y,P[re+G+10]=l.z,P[re+G+11]=ne.itemSize===4?l.w:1)}}_={count:g,texture:q,size:new zt(U,F)},s.set(h,_),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function bE(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const ME={[Kv]:"LINEAR_TONE_MAPPING",[Qv]:"REINHARD_TONE_MAPPING",[Jv]:"CINEON_TONE_MAPPING",[$v]:"ACES_FILMIC_TONE_MAPPING",[tx]:"AGX_TONE_MAPPING",[nx]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function EE(r,e,i,s,l){const c=new Qi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Qi(e,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),h=new ui;h.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dn([0,2,0,0,2,0],2));const m=new _b({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new zi(h,m),v=new Mx(-1,1,1,-1,0,1);let g=null,_=null,S=!1,E,A=null,b=[],x=!1;this.setSize=function(N,L){c.setSize(N,L),d.setSize(N,L);for(let D=0;D<b.length;D++){const U=b[D];U.setSize&&U.setSize(N,L)}},this.setEffects=function(N){b=N,x=b.length>0&&b[0].isRenderPass===!0;const L=c.width,D=c.height;for(let U=0;U<b.length;U++){const F=b[U];F.setSize&&F.setSize(L,D)}},this.begin=function(N,L){if(S||N.toneMapping===Ki&&b.length===0)return!1;if(A=L,L!==null){const D=L.width,U=L.height;(c.width!==D||c.height!==U)&&this.setSize(D,U)}return x===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(N,L){N.toneMapping=E,S=!0;let D=c,U=d;for(let F=0;F<b.length;F++){const P=b[F];if(P.enabled!==!1&&(P.render(N,U,D,L),P.needsSwap!==!1)){const q=D;D=U,U=q}}if(g!==N.outputColorSpace||_!==N.toneMapping){g=N.outputColorSpace,_=N.toneMapping,m.defines={},Lt.getTransfer(g)===jt&&(m.defines.SRGB_TRANSFER="");const F=ME[_];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,N.setRenderTarget(A),N.render(p,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Tx=new kn,Ph=new nl(1,1),Ax=new dx,wx=new YS,Cx=new _x,wv=[],Cv=[],Rv=new Float32Array(16),Dv=new Float32Array(9),Nv=new Float32Array(4);function Jr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=wv[l];if(c===void 0&&(c=new Float32Array(l),wv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function bn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function $c(r,e){let i=Cv[e];i===void 0&&(i=new Int32Array(e),Cv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function TE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function AE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function wE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(bn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function CE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function RE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(bn(i,s))return;Nv.set(s),r.uniformMatrix2fv(this.addr,!1,Nv),Mn(i,s)}}function DE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(bn(i,s))return;Dv.set(s),r.uniformMatrix3fv(this.addr,!1,Dv),Mn(i,s)}}function NE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(bn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(bn(i,s))return;Rv.set(s),r.uniformMatrix4fv(this.addr,!1,Rv),Mn(i,s)}}function UE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function LE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function OE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function PE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function FE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function zE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(bn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function IE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(bn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function BE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(bn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function HE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ph.compareFunction=i.isReversedDepthBuffer()?Wh:Xh,c=Ph):c=Tx,i.setTexture2D(e||c,l)}function GE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||wx,l)}function VE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Cx,l)}function kE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ax,l)}function qE(r){switch(r){case 5126:return TE;case 35664:return AE;case 35665:return wE;case 35666:return CE;case 35674:return RE;case 35675:return DE;case 35676:return NE;case 5124:case 35670:return UE;case 35667:case 35671:return LE;case 35668:case 35672:return OE;case 35669:case 35673:return PE;case 5125:return FE;case 36294:return zE;case 36295:return IE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return kE}}function jE(r,e){r.uniform1fv(this.addr,e)}function XE(r,e){const i=Jr(e,this.size,2);r.uniform2fv(this.addr,i)}function WE(r,e){const i=Jr(e,this.size,3);r.uniform3fv(this.addr,i)}function YE(r,e){const i=Jr(e,this.size,4);r.uniform4fv(this.addr,i)}function ZE(r,e){const i=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function KE(r,e){const i=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function QE(r,e){const i=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function JE(r,e){r.uniform1iv(this.addr,e)}function $E(r,e){r.uniform2iv(this.addr,e)}function eT(r,e){r.uniform3iv(this.addr,e)}function tT(r,e){r.uniform4iv(this.addr,e)}function nT(r,e){r.uniform1uiv(this.addr,e)}function iT(r,e){r.uniform2uiv(this.addr,e)}function aT(r,e){r.uniform3uiv(this.addr,e)}function sT(r,e){r.uniform4uiv(this.addr,e)}function rT(r,e,i){const s=this.cache,l=e.length,c=$c(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Ph:d=Tx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function oT(r,e,i){const s=this.cache,l=e.length,c=$c(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||wx,c[d])}function lT(r,e,i){const s=this.cache,l=e.length,c=$c(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Cx,c[d])}function cT(r,e,i){const s=this.cache,l=e.length,c=$c(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ax,c[d])}function uT(r){switch(r){case 5126:return jE;case 35664:return XE;case 35665:return WE;case 35666:return YE;case 35674:return ZE;case 35675:return KE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return $E;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return aT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}class fT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qE(i.type)}}class dT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=uT(i.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Uv(r,e){r.seq.push(e),r.map[e.id]=e}function pT(r,e,i){const s=r.name,l=s.length;for(Bd.lastIndex=0;;){const c=Bd.exec(s),d=Bd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Uv(i,p===void 0?new fT(h,r,e):new dT(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new hT(h),Uv(i,g)),i=g}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);pT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Lv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const mT=37297;let gT=0;function vT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Ov=new St;function xT(r){Lt._getMatrix(Ov,Lt.workingColorSpace,r);const e=`mat3( ${Ov.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(r)){case qc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Pv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+vT(r.getShaderSource(e),h)}else return c}function _T(r,e){const i=xT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const yT={[Kv]:"Linear",[Qv]:"Reinhard",[Jv]:"Cineon",[$v]:"ACESFilmic",[tx]:"AgX",[nx]:"Neutral",[ex]:"Custom"};function ST(r,e){const i=yT[e];return i===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new ae;function bT(){Lt.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function ET(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function TT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function Qo(r){return r!==""}function Fv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(r){return r.replace(AT,CT)}const wT=new Map;function CT(r,e){let i=bt[e];if(i===void 0){const s=wT.get(e);if(s!==void 0)i=bt[s],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Fh(i)}const RT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iv(r){return r.replace(RT,DT)}function DT(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bv(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NT={[Ic]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function UT(r){return NT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LT={[qs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function OT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PT={[jr]:"ENVMAP_MODE_REFRACTION"};function FT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zT={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[CS]:"ENVMAP_BLENDING_MIX",[RS]:"ENVMAP_BLENDING_ADD"};function IT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zT[r.combine]||"ENVMAP_BLENDING_NONE"}function BT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function HT(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=UT(i),p=OT(i),v=FT(i),g=IT(i),_=BT(i),S=MT(i),E=ET(c),A=l.createProgram();let b,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(b=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?bt.tonemapping_pars_fragment:"",i.toneMapping!==Ki?ST("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,_T("linearToOutputTexel",i.outputColorSpace),bT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),d=Fh(d),d=Fv(d,i),d=zv(d,i),h=Fh(h),h=Fv(h,i),h=zv(h,i),d=Iv(d),h=Iv(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",i.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+b+d,D=N+x+h,U=Lv(l,l.VERTEX_SHADER,L),F=Lv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,U),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(H){if(r.debug.checkShaderErrors){const X=l.getProgramInfoLog(A)||"",J=l.getShaderInfoLog(U)||"",ne=l.getShaderInfoLog(F)||"",re=X.trim(),I=J.trim(),G=ne.trim();let $=!0,ve=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,U,F);else{const xe=Pv(l,U,"vertex"),z=Pv(l,F,"fragment");Ft("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+re+`
`+xe+`
`+z)}else re!==""?vt("WebGLProgram: Program Info Log:",re):(I===""||G==="")&&(ve=!1);ve&&(H.diagnostics={runnable:$,programLog:re,vertexShader:{log:I,prefix:b},fragmentShader:{log:G,prefix:x}})}l.deleteShader(U),l.deleteShader(F),q=new kc(l,A),T=TT(l,A)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,mT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=F,this}let GT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new kT(e),i.set(e,s)),s}}class kT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function qT(r,e,i,s,l,c,d){const h=new hx,m=new VT,p=new Set,v=[],g=new Map,_=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,R,H,X,J){const ne=X.fog,re=J.geometry,I=T.isMeshStandardMaterial?X.environment:null,G=(T.isMeshStandardMaterial?i:e).get(T.envMap||I),$=G&&G.mapping===Yc?G.image.height:null,ve=E[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&vt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const xe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,z=xe!==void 0?xe.length:0;let Q=0;re.morphAttributes.position!==void 0&&(Q=1),re.morphAttributes.normal!==void 0&&(Q=2),re.morphAttributes.color!==void 0&&(Q=3);let de,me,Ue,Z;if(ve){const Rt=Xi[ve];de=Rt.vertexShader,me=Rt.fragmentShader}else de=T.vertexShader,me=T.fragmentShader,m.update(T),Ue=m.getVertexShaderID(T),Z=m.getFragmentShaderID(T);const ie=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),be=J.isInstancedMesh===!0,Pe=J.isBatchedMesh===!0,Ze=!!T.map,ut=!!T.matcap,st=!!G,at=!!T.aoMap,mt=!!T.lightMap,ot=!!T.bumpMap,It=!!T.normalMap,k=!!T.displacementMap,Mt=!!T.emissiveMap,ct=!!T.metalnessMap,dt=!!T.roughnessMap,Ge=T.anisotropy>0,B=T.clearcoat>0,M=T.dispersion>0,Y=T.iridescence>0,ge=T.sheen>0,_e=T.transmission>0,le=Ge&&!!T.anisotropyMap,Ke=B&&!!T.clearcoatMap,Be=B&&!!T.clearcoatNormalMap,ke=B&&!!T.clearcoatRoughnessMap,$e=Y&&!!T.iridescenceMap,Ne=Y&&!!T.iridescenceThicknessMap,Re=ge&&!!T.sheenColorMap,ze=ge&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Te=!!T.specularColorMap,Xe=!!T.specularIntensityMap,j=_e&&!!T.transmissionMap,Le=_e&&!!T.thicknessMap,Oe=!!T.gradientMap,je=!!T.alphaMap,De=T.alphaTest>0,Ae=!!T.alphaHash,Ie=!!T.extensions;let pt=Ki;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(pt=r.toneMapping);const Et={shaderID:ve,shaderType:T.type,shaderName:T.name,vertexShader:de,fragmentShader:me,defines:T.defines,customVertexShaderID:Ue,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Pe,batchingColor:Pe&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:ut,envMap:st,envMapMode:st&&G.mapping,envMapCubeUVHeight:$,aoMap:at,lightMap:mt,bumpMap:ot,normalMap:It,displacementMap:k,emissiveMap:Mt,normalMapObjectSpace:It&&T.normalMapType===LS,normalMapTangentSpace:It&&T.normalMapType===US,metalnessMap:ct,roughnessMap:dt,anisotropy:Ge,anisotropyMap:le,clearcoat:B,clearcoatMap:Ke,clearcoatNormalMap:Be,clearcoatRoughnessMap:ke,dispersion:M,iridescence:Y,iridescenceMap:$e,iridescenceThicknessMap:Ne,sheen:ge,sheenColorMap:Re,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:Te,specularIntensityMap:Xe,transmission:_e,transmissionMap:j,thicknessMap:Le,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:je,alphaTest:De,alphaHash:Ae,combine:T.combine,mapUv:Ze&&A(T.map.channel),aoMapUv:at&&A(T.aoMap.channel),lightMapUv:mt&&A(T.lightMap.channel),bumpMapUv:ot&&A(T.bumpMap.channel),normalMapUv:It&&A(T.normalMap.channel),displacementMapUv:k&&A(T.displacementMap.channel),emissiveMapUv:Mt&&A(T.emissiveMap.channel),metalnessMapUv:ct&&A(T.metalnessMap.channel),roughnessMapUv:dt&&A(T.roughnessMap.channel),anisotropyMapUv:le&&A(T.anisotropyMap.channel),clearcoatMapUv:Ke&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Be&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(T.sheenRoughnessMap.channel),specularMapUv:Fe&&A(T.specularMap.channel),specularColorMapUv:Te&&A(T.specularColorMap.channel),specularIntensityMapUv:Xe&&A(T.specularIntensityMap.channel),transmissionMapUv:j&&A(T.transmissionMap.channel),thicknessMapUv:Le&&A(T.thicknessMap.channel),alphaMapUv:je&&A(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(It||Ge),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!re.attributes.uv&&(Ze||je),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:J.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===jt,decodeVideoTextureEmissive:Mt&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Aa,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Pe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Et.vertexUv1s=p.has(1),Et.vertexUv2s=p.has(2),Et.vertexUv3s=p.has(3),p.clear(),Et}function x(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)R.push(H),R.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(N(R,T),L(R,T),R.push(r.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function N(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function L(T,R){h.disableAll(),R.instancing&&h.enable(0),R.instancingColor&&h.enable(1),R.instancingMorph&&h.enable(2),R.matcap&&h.enable(3),R.envMap&&h.enable(4),R.normalMapObjectSpace&&h.enable(5),R.normalMapTangentSpace&&h.enable(6),R.clearcoat&&h.enable(7),R.iridescence&&h.enable(8),R.alphaTest&&h.enable(9),R.vertexColors&&h.enable(10),R.vertexAlphas&&h.enable(11),R.vertexUv1s&&h.enable(12),R.vertexUv2s&&h.enable(13),R.vertexUv3s&&h.enable(14),R.vertexTangents&&h.enable(15),R.anisotropy&&h.enable(16),R.alphaHash&&h.enable(17),R.batching&&h.enable(18),R.dispersion&&h.enable(19),R.batchingColor&&h.enable(20),R.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),T.push(h.mask)}function D(T){const R=E[T.type];let H;if(R){const X=Xi[R];H=lb.clone(X.uniforms)}else H=T.uniforms;return H}function U(T,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new HT(r,R,T,c),v.push(H),g.set(R,H)),H}function F(T){if(--T.usedTimes===0){const R=v.indexOf(T);v[R]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){m.remove(T)}function q(){m.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:D,acquireProgram:U,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:q}}function jT(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function XT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g,_,S,E,A,b){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:b},r[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=A,x.group=b),e++,x}function h(g,_,S,E,A,b){const x=d(g,_,S,E,A,b);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,_,S,E,A,b){const x=d(g,_,S,E,A,b);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,_){i.length>1&&i.sort(g||XT),s.length>1&&s.sort(_||Hv),l.length>1&&l.sort(_||Hv)}function v(){for(let g=e,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function WT(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Gv,r.set(s,[d])):l>=c.length?(d=new Gv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function YT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Gt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":i={color:new Gt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=i,i}}}function ZT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let KT=0;function QT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JT(r){const e=new YT,i=ZT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new _n,d=new _n;function h(p){let v=0,g=0,_=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let S=0,E=0,A=0,b=0,x=0,N=0,L=0,D=0,U=0,F=0,P=0;p.sort(QT);for(let T=0,R=p.length;T<R;T++){const H=p[T],X=H.color,J=H.intensity,ne=H.distance;let re=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xr?re=H.shadow.map.texture:re=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=X.r*J,g+=X.g*J,_+=X.b*J;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],J);P++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,$=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.directionalShadow[S]=$,s.directionalShadowMap[S]=re,s.directionalShadowMatrix[S]=H.shadow.matrix,N++}s.directional[S]=I,S++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(X).multiplyScalar(J),I.distance=ne,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[A]=I;const G=H.shadow;if(H.map&&(s.spotLightMap[U]=H.map,U++,G.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[A]=G.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=re,D++}A++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(X).multiplyScalar(J),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[b]=I,b++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const G=H.shadow,$=i.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=re,s.pointShadowMatrix[E]=H.shadow.matrix,L++}s.point[E]=I,E++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(J),I.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[x]=I,x++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const q=s.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==b||q.hemiLength!==x||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==U||q.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=b,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+U-F,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=P,q.directionalLength=S,q.pointLength=E,q.spotLength=A,q.rectAreaLength=b,q.hemiLength=x,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=U,q.numLightProbes=P,s.version=KT++)}function m(p,v){let g=0,_=0,S=0,E=0,A=0;const b=v.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const L=p[x];if(L.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),g++}else if(L.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),S++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),d.identity(),c.copy(L.matrixWorld),c.premultiply(b),d.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),E++}else if(L.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(b),_++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(b),A++}}}return{setup:h,setupView:m,state:s}}function Vv(r){const e=new JT(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function $T(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Vv(r),e.set(l,[h])):c>=d.length?(h=new Vv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`,nA=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],iA=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],kv=new _n,Zo=new ae,Hd=new ae;function aA(r,e,i){let s=new Sx;const l=new zt,c=new zt,d=new fn,h=new yb,m=new Sb,p={},v=i.maxTextureSize,g={[ps]:Jn,[Jn]:ps,[Aa]:Aa},_=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:eA,fragmentShader:tA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ui;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zi(E,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let x=this.type;this.render=function(F,P,q){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||F.length===0)return;F.type===cS&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Ic);const T=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ca),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=x!==this.type;J&&P.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(re=>re.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,re=F.length;ne<re;ne++){const I=F[ne],G=I.shadow;if(G===void 0){vt("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const $=G.getFrameExtents();if(l.multiply($),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,G.mapSize.y=c.y)),G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ko){if(I.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qi(l.x,l.y,{format:Xr,type:Na,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new nl(l.x,l.y,Yi),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Ua,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn}else{I.isPointLight?(G.map=new yx(l.x),G.map.depthTexture=new xb(l.x,$i)):(G.map=new Qi(l.x,l.y),G.map.depthTexture=new nl(l.x,l.y,$i)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Ua;const xe=r.state.buffers.depth.getReversed();this.type===Ic?(G.map.depthTexture.compareFunction=xe?Wh:Xh,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn)}G.camera.updateProjectionMatrix()}const ve=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ve;xe++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(G.map),r.clear());const z=G.getViewport(xe);d.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),X.viewport(d)}if(I.isPointLight){const z=G.camera,Q=G.matrix,de=I.distance||z.far;de!==z.far&&(z.far=de,z.updateProjectionMatrix()),Zo.setFromMatrixPosition(I.matrixWorld),z.position.copy(Zo),Hd.copy(z.position),Hd.add(nA[xe]),z.up.copy(iA[xe]),z.lookAt(Hd),z.updateMatrixWorld(),Q.makeTranslation(-Zo.x,-Zo.y,-Zo.z),kv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(kv,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(I);s=G.getFrustum(),D(P,q,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===Ko&&N(G,q),G.needsUpdate=!1}x=this.type,b.needsUpdate=!1,r.setRenderTarget(T,R,H)};function N(F,P){const q=e.update(A);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Qi(l.x,l.y,{format:Xr,type:Na})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(P,null,q,_,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(P,null,q,S,A,null)}function L(F,P,q,T){let R=null;const H=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=q.isPointLight===!0?m:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const X=R.uuid,J=P.uuid;let ne=p[X];ne===void 0&&(ne={},p[X]=ne);let re=ne[J];re===void 0&&(re=R.clone(),ne[J]=re,P.addEventListener("dispose",U)),R=re}if(R.visible=P.visible,R.wireframe=P.wireframe,T===Ko?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const X=r.properties.get(R);X.light=q}return R}function D(F,P,q,T,R){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ko)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const J=e.update(F),ne=F.material;if(Array.isArray(ne)){const re=J.groups;for(let I=0,G=re.length;I<G;I++){const $=re[I],ve=ne[$.materialIndex];if(ve&&ve.visible){const xe=L(F,ve,T,R);F.onBeforeShadow(r,F,P,q,J,xe,$),r.renderBufferDirect(q,null,J,xe,F,$),F.onAfterShadow(r,F,P,q,J,xe,$)}}}else if(ne.visible){const re=L(F,ne,T,R);F.onBeforeShadow(r,F,P,q,J,re,null),r.renderBufferDirect(q,null,J,re,F,null),F.onAfterShadow(r,F,P,q,J,re,null)}}const X=F.children;for(let J=0,ne=X.length;J<ne;J++)D(X[J],P,q,T,R)}function U(F){F.target.removeEventListener("dispose",U);for(const q in p){const T=p[q],R=F.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}const sA={[jd]:Xd,[Wd]:Kd,[Yd]:Qd,[qr]:Zd,[Xd]:jd,[Kd]:Wd,[Qd]:Yd,[Zd]:qr};function rA(r,e){function i(){let j=!1;const Le=new fn;let Oe=null;const je=new fn(0,0,0,0);return{setMask:function(De){Oe!==De&&!j&&(r.colorMask(De,De,De,De),Oe=De)},setLocked:function(De){j=De},setClear:function(De,Ae,Ie,pt,Et){Et===!0&&(De*=pt,Ae*=pt,Ie*=pt),Le.set(De,Ae,Ie,pt),je.equals(Le)===!1&&(r.clearColor(De,Ae,Ie,pt),je.copy(Le))},reset:function(){j=!1,Oe=null,je.set(-1,0,0,0)}}}function s(){let j=!1,Le=!1,Oe=null,je=null,De=null;return{setReversed:function(Ae){if(Le!==Ae){const Ie=e.get("EXT_clip_control");Ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Le=Ae;const pt=De;De=null,this.setClear(pt)}},getReversed:function(){return Le},setTest:function(Ae){Ae?ie(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Ae){Oe!==Ae&&!j&&(r.depthMask(Ae),Oe=Ae)},setFunc:function(Ae){if(Le&&(Ae=sA[Ae]),je!==Ae){switch(Ae){case jd:r.depthFunc(r.NEVER);break;case Xd:r.depthFunc(r.ALWAYS);break;case Wd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case Yd:r.depthFunc(r.EQUAL);break;case Zd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}je=Ae}},setLocked:function(Ae){j=Ae},setClear:function(Ae){De!==Ae&&(Le&&(Ae=1-Ae),r.clearDepth(Ae),De=Ae)},reset:function(){j=!1,Oe=null,je=null,De=null,Le=!1}}}function l(){let j=!1,Le=null,Oe=null,je=null,De=null,Ae=null,Ie=null,pt=null,Et=null;return{setTest:function(Rt){j||(Rt?ie(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Rt){Le!==Rt&&!j&&(r.stencilMask(Rt),Le=Rt)},setFunc:function(Rt,En,qn){(Oe!==Rt||je!==En||De!==qn)&&(r.stencilFunc(Rt,En,qn),Oe=Rt,je=En,De=qn)},setOp:function(Rt,En,qn){(Ae!==Rt||Ie!==En||pt!==qn)&&(r.stencilOp(Rt,En,qn),Ae=Rt,Ie=En,pt=qn)},setLocked:function(Rt){j=Rt},setClear:function(Rt){Et!==Rt&&(r.clearStencil(Rt),Et=Rt)},reset:function(){j=!1,Le=null,Oe=null,je=null,De=null,Ae=null,Ie=null,pt=null,Et=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,A=!1,b=null,x=null,N=null,L=null,D=null,U=null,F=null,P=new Gt(0,0,0),q=0,T=!1,R=null,H=null,X=null,J=null,ne=null;const re=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),I=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=G>=2);let ve=null,xe={};const z=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),de=new fn().fromArray(z),me=new fn().fromArray(Q);function Ue(j,Le,Oe,je){const De=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(j,Ae),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<Oe;Ie++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,je,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Le+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Ae}const Z={};Z[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ie(r.DEPTH_TEST),d.setFunc(qr),ot(!1),It(Z0),ie(r.CULL_FACE),at(Ca);function ie(j){v[j]!==!0&&(r.enable(j),v[j]=!0)}function Me(j){v[j]!==!1&&(r.disable(j),v[j]=!1)}function be(j,Le){return g[j]!==Le?(r.bindFramebuffer(j,Le),g[j]=Le,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Pe(j,Le){let Oe=S,je=!1;if(j){Oe=_.get(Le),Oe===void 0&&(Oe=[],_.set(Le,Oe));const De=j.textures;if(Oe.length!==De.length||Oe[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Ie=De.length;Ae<Ie;Ae++)Oe[Ae]=r.COLOR_ATTACHMENT0+Ae;Oe.length=De.length,je=!0}}else Oe[0]!==r.BACK&&(Oe[0]=r.BACK,je=!0);je&&r.drawBuffers(Oe)}function Ze(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const ut={[Is]:r.FUNC_ADD,[fS]:r.FUNC_SUBTRACT,[dS]:r.FUNC_REVERSE_SUBTRACT};ut[hS]=r.MIN,ut[pS]=r.MAX;const st={[mS]:r.ZERO,[gS]:r.ONE,[vS]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[MS]:r.SRC_ALPHA_SATURATE,[SS]:r.DST_COLOR,[_S]:r.DST_ALPHA,[xS]:r.ONE_MINUS_SRC_COLOR,[qd]:r.ONE_MINUS_SRC_ALPHA,[bS]:r.ONE_MINUS_DST_COLOR,[yS]:r.ONE_MINUS_DST_ALPHA,[ES]:r.CONSTANT_COLOR,[TS]:r.ONE_MINUS_CONSTANT_COLOR,[AS]:r.CONSTANT_ALPHA,[wS]:r.ONE_MINUS_CONSTANT_ALPHA};function at(j,Le,Oe,je,De,Ae,Ie,pt,Et,Rt){if(j===Ca){A===!0&&(Me(r.BLEND),A=!1);return}if(A===!1&&(ie(r.BLEND),A=!0),j!==uS){if(j!==b||Rt!==T){if((x!==Is||D!==Is)&&(r.blendEquation(r.FUNC_ADD),x=Is,D=Is),Rt)switch(j){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K0:r.blendFunc(r.ONE,r.ONE);break;case Q0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",j);break}else switch(j){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q0:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",j);break}N=null,L=null,U=null,F=null,P.set(0,0,0),q=0,b=j,T=Rt}return}De=De||Le,Ae=Ae||Oe,Ie=Ie||je,(Le!==x||De!==D)&&(r.blendEquationSeparate(ut[Le],ut[De]),x=Le,D=De),(Oe!==N||je!==L||Ae!==U||Ie!==F)&&(r.blendFuncSeparate(st[Oe],st[je],st[Ae],st[Ie]),N=Oe,L=je,U=Ae,F=Ie),(pt.equals(P)===!1||Et!==q)&&(r.blendColor(pt.r,pt.g,pt.b,Et),P.copy(pt),q=Et),b=j,T=!1}function mt(j,Le){j.side===Aa?Me(r.CULL_FACE):ie(r.CULL_FACE);let Oe=j.side===Jn;Le&&(Oe=!Oe),ot(Oe),j.blending===Gr&&j.transparent===!1?at(Ca):at(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const je=j.stencilWrite;h.setTest(je),je&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Mt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(j){R!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),R=j)}function It(j){j!==oS?(ie(r.CULL_FACE),j!==H&&(j===Z0?r.cullFace(r.BACK):j===lS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),H=j}function k(j){j!==X&&(I&&r.lineWidth(j),X=j)}function Mt(j,Le,Oe){j?(ie(r.POLYGON_OFFSET_FILL),(J!==Le||ne!==Oe)&&(r.polygonOffset(Le,Oe),J=Le,ne=Oe)):Me(r.POLYGON_OFFSET_FILL)}function ct(j){j?ie(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function dt(j){j===void 0&&(j=r.TEXTURE0+re-1),ve!==j&&(r.activeTexture(j),ve=j)}function Ge(j,Le,Oe){Oe===void 0&&(ve===null?Oe=r.TEXTURE0+re-1:Oe=ve);let je=xe[Oe];je===void 0&&(je={type:void 0,texture:void 0},xe[Oe]=je),(je.type!==j||je.texture!==Le)&&(ve!==Oe&&(r.activeTexture(Oe),ve=Oe),r.bindTexture(j,Le||Z[j]),je.type=j,je.texture=Le)}function B(){const j=xe[ve];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function ge(){try{r.texSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function _e(){try{r.texSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Be(){try{r.texStorage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function ke(){try{r.texStorage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function $e(){try{r.texImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Ne(){try{r.texImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Re(j){de.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),de.copy(j))}function ze(j){me.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),me.copy(j))}function Fe(j,Le){let Oe=p.get(Le);Oe===void 0&&(Oe=new WeakMap,p.set(Le,Oe));let je=Oe.get(j);je===void 0&&(je=r.getUniformBlockIndex(Le,j.name),Oe.set(j,je))}function Te(j,Le){const je=p.get(Le).get(j);m.get(Le)!==je&&(r.uniformBlockBinding(Le,je,j.__bindingPointIndex),m.set(Le,je))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ve=null,xe={},g={},_=new WeakMap,S=[],E=null,A=!1,b=null,x=null,N=null,L=null,D=null,U=null,F=null,P=new Gt(0,0,0),q=0,T=!1,R=null,H=null,X=null,J=null,ne=null,de.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ie,disable:Me,bindFramebuffer:be,drawBuffers:Pe,useProgram:Ze,setBlending:at,setMaterial:mt,setFlipSided:ot,setCullFace:It,setLineWidth:k,setPolygonOffset:Mt,setScissorTest:ct,activeTexture:dt,bindTexture:Ge,unbindTexture:B,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:$e,texImage3D:Ne,updateUBOMapping:Fe,uniformBlockBinding:Te,texStorage2D:Be,texStorage3D:ke,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:le,compressedTexSubImage3D:Ke,scissor:Re,viewport:ze,reset:Xe}}function oA(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new zt,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,M){return S?new OffscreenCanvas(B,M):Xc("canvas")}function A(B,M,Y){let ge=1;const _e=Ge(B);if((_e.width>Y||_e.height>Y)&&(ge=Y/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const le=Math.floor(ge*_e.width),Ke=Math.floor(ge*_e.height);g===void 0&&(g=E(le,Ke));const Be=M?E(le,Ke):g;return Be.width=le,Be.height=Ke,Be.getContext("2d").drawImage(B,0,0,le,Ke),vt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+le+"x"+Ke+")."),Be}else return"data"in B&&vt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),B;return B}function b(B){return B.generateMipmaps}function x(B){r.generateMipmap(B)}function N(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(B,M,Y,ge,_e=!1){if(B!==null){if(r[B]!==void 0)return r[B];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let le=M;if(M===r.RED&&(Y===r.FLOAT&&(le=r.R32F),Y===r.HALF_FLOAT&&(le=r.R16F),Y===r.UNSIGNED_BYTE&&(le=r.R8)),M===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(le=r.R8UI),Y===r.UNSIGNED_SHORT&&(le=r.R16UI),Y===r.UNSIGNED_INT&&(le=r.R32UI),Y===r.BYTE&&(le=r.R8I),Y===r.SHORT&&(le=r.R16I),Y===r.INT&&(le=r.R32I)),M===r.RG&&(Y===r.FLOAT&&(le=r.RG32F),Y===r.HALF_FLOAT&&(le=r.RG16F),Y===r.UNSIGNED_BYTE&&(le=r.RG8)),M===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(le=r.RG8UI),Y===r.UNSIGNED_SHORT&&(le=r.RG16UI),Y===r.UNSIGNED_INT&&(le=r.RG32UI),Y===r.BYTE&&(le=r.RG8I),Y===r.SHORT&&(le=r.RG16I),Y===r.INT&&(le=r.RG32I)),M===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(le=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(le=r.RGB16UI),Y===r.UNSIGNED_INT&&(le=r.RGB32UI),Y===r.BYTE&&(le=r.RGB8I),Y===r.SHORT&&(le=r.RGB16I),Y===r.INT&&(le=r.RGB32I)),M===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),Y===r.UNSIGNED_INT&&(le=r.RGBA32UI),Y===r.BYTE&&(le=r.RGBA8I),Y===r.SHORT&&(le=r.RGBA16I),Y===r.INT&&(le=r.RGBA32I)),M===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(le=r.R11F_G11F_B10F)),M===r.RGBA){const Ke=_e?qc:Lt.getTransfer(ge);Y===r.FLOAT&&(le=r.RGBA32F),Y===r.HALF_FLOAT&&(le=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(le=Ke===jt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(B,M){let Y;return B?M===null||M===$i||M===el?Y=r.DEPTH24_STENCIL8:M===Yi?Y=r.DEPTH32F_STENCIL8:M===$o&&(Y=r.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===el?Y=r.DEPTH_COMPONENT24:M===Yi?Y=r.DEPTH_COMPONENT32F:M===$o&&(Y=r.DEPTH_COMPONENT16),Y}function U(B,M){return b(B)===!0||B.isFramebufferTexture&&B.minFilter!==Fn&&B.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?M.mipmaps.length:1}function F(B){const M=B.target;M.removeEventListener("dispose",F),q(M),M.isVideoTexture&&v.delete(M)}function P(B){const M=B.target;M.removeEventListener("dispose",P),R(M)}function q(B){const M=s.get(B);if(M.__webglInit===void 0)return;const Y=B.source,ge=_.get(Y);if(ge){const _e=ge[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(B),Object.keys(ge).length===0&&_.delete(Y)}s.remove(B)}function T(B){const M=s.get(B);r.deleteTexture(M.__webglTexture);const Y=B.source,ge=_.get(Y);delete ge[M.__cacheKey],d.memory.textures--}function R(B){const M=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let _e=0;_e<M.__webglFramebuffer[ge].length;_e++)r.deleteFramebuffer(M.__webglFramebuffer[ge][_e]);else r.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[ge]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=B.textures;for(let ge=0,_e=Y.length;ge<_e;ge++){const le=s.get(Y[ge]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),d.memory.textures--),s.remove(Y[ge])}s.remove(B)}let H=0;function X(){H=0}function J(){const B=H;return B>=l.maxTextures&&vt("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),H+=1,B}function ne(B){const M=[];return M.push(B.wrapS),M.push(B.wrapT),M.push(B.wrapR||0),M.push(B.magFilter),M.push(B.minFilter),M.push(B.anisotropy),M.push(B.internalFormat),M.push(B.format),M.push(B.type),M.push(B.generateMipmaps),M.push(B.premultiplyAlpha),M.push(B.flipY),M.push(B.unpackAlignment),M.push(B.colorSpace),M.join()}function re(B,M){const Y=s.get(B);if(B.isVideoTexture&&ct(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){const ge=B.image;if(ge===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,B,M);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+M)}function I(B,M){const Y=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){Z(Y,B,M);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+M)}function G(B,M){const Y=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){Z(Y,B,M);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+M)}function $(B,M){const Y=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){ie(Y,B,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+M)}const ve={[eh]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[th]:r.MIRRORED_REPEAT},xe={[Fn]:r.NEAREST,[DS]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},z={[OS]:r.NEVER,[BS]:r.ALWAYS,[PS]:r.LESS,[Xh]:r.LEQUAL,[FS]:r.EQUAL,[Wh]:r.GEQUAL,[zS]:r.GREATER,[IS]:r.NOTEQUAL};function Q(B,M){if(M.type===Yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===ud||M.magFilter===gc||M.magFilter===Vs||M.minFilter===Hn||M.minFilter===ud||M.minFilter===gc||M.minFilter===Vs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,ve[M.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,ve[M.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,ve[M.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,xe[M.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==gc&&M.minFilter!==Vs||M.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function de(B,M){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,M.addEventListener("dispose",F));const ge=M.source;let _e=_.get(ge);_e===void 0&&(_e={},_.set(ge,_e));const le=ne(M);if(le!==B.__cacheKey){_e[le]===void 0&&(_e[le]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),_e[le].usedTimes++;const Ke=_e[B.__cacheKey];Ke!==void 0&&(_e[B.__cacheKey].usedTimes--,Ke.usedTimes===0&&T(M)),B.__cacheKey=le,B.__webglTexture=_e[le].texture}return Y}function me(B,M,Y){return Math.floor(Math.floor(B/Y)/M)}function Ue(B,M,Y,ge){const le=B.updateRanges;if(le.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Y,ge,M.data);else{le.sort((Ne,Re)=>Ne.start-Re.start);let Ke=0;for(let Ne=1;Ne<le.length;Ne++){const Re=le[Ke],ze=le[Ne],Fe=Re.start+Re.count,Te=me(ze.start,M.width,4),Xe=me(Re.start,M.width,4);ze.start<=Fe+1&&Te===Xe&&me(ze.start+ze.count-1,M.width,4)===Te?Re.count=Math.max(Re.count,ze.start+ze.count-Re.start):(++Ke,le[Ke]=ze)}le.length=Ke+1;const Be=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),$e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,Re=le.length;Ne<Re;Ne++){const ze=le[Ne],Fe=Math.floor(ze.start/4),Te=Math.ceil(ze.count/4),Xe=Fe%M.width,j=Math.floor(Fe/M.width),Le=Te,Oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,Xe,j,Le,Oe,Y,ge,M.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,$e)}}function Z(B,M,Y){let ge=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=r.TEXTURE_3D);const _e=de(B,M),le=M.source;i.bindTexture(ge,B.__webglTexture,r.TEXTURE0+Y);const Ke=s.get(le);if(le.version!==Ke.__version||_e===!0){i.activeTexture(r.TEXTURE0+Y);const Be=Lt.getPrimaries(Lt.workingColorSpace),ke=M.colorSpace===fs?null:Lt.getPrimaries(M.colorSpace),$e=M.colorSpace===fs||Be===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ne=A(M.image,!1,l.maxTextureSize);Ne=dt(M,Ne);const Re=c.convert(M.format,M.colorSpace),ze=c.convert(M.type);let Fe=L(M.internalFormat,Re,ze,M.colorSpace,M.isVideoTexture);Q(ge,M);let Te;const Xe=M.mipmaps,j=M.isVideoTexture!==!0,Le=Ke.__version===void 0||_e===!0,Oe=le.dataReady,je=U(M,Ne);if(M.isDepthTexture)Fe=D(M.format===ks,M.type),Le&&(j?i.texStorage2D(r.TEXTURE_2D,1,Fe,Ne.width,Ne.height):i.texImage2D(r.TEXTURE_2D,0,Fe,Ne.width,Ne.height,0,Re,ze,null));else if(M.isDataTexture)if(Xe.length>0){j&&Le&&i.texStorage2D(r.TEXTURE_2D,je,Fe,Xe[0].width,Xe[0].height);for(let De=0,Ae=Xe.length;De<Ae;De++)Te=Xe[De],j?Oe&&i.texSubImage2D(r.TEXTURE_2D,De,0,0,Te.width,Te.height,Re,ze,Te.data):i.texImage2D(r.TEXTURE_2D,De,Fe,Te.width,Te.height,0,Re,ze,Te.data);M.generateMipmaps=!1}else j?(Le&&i.texStorage2D(r.TEXTURE_2D,je,Fe,Ne.width,Ne.height),Oe&&Ue(M,Ne,Re,ze)):i.texImage2D(r.TEXTURE_2D,0,Fe,Ne.width,Ne.height,0,Re,ze,Ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,je,Fe,Xe[0].width,Xe[0].height,Ne.depth);for(let De=0,Ae=Xe.length;De<Ae;De++)if(Te=Xe[De],M.format!==Fi)if(Re!==null)if(j){if(Oe)if(M.layerUpdates.size>0){const Ie=yv(Te.width,Te.height,M.format,M.type);for(const pt of M.layerUpdates){const Et=Te.data.subarray(pt*Ie/Te.data.BYTES_PER_ELEMENT,(pt+1)*Ie/Te.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,De,0,0,pt,Te.width,Te.height,1,Re,Et)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,De,0,0,0,Te.width,Te.height,Ne.depth,Re,Te.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,De,Fe,Te.width,Te.height,Ne.depth,0,Te.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Oe&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,De,0,0,0,Te.width,Te.height,Ne.depth,Re,ze,Te.data):i.texImage3D(r.TEXTURE_2D_ARRAY,De,Fe,Te.width,Te.height,Ne.depth,0,Re,ze,Te.data)}else{j&&Le&&i.texStorage2D(r.TEXTURE_2D,je,Fe,Xe[0].width,Xe[0].height);for(let De=0,Ae=Xe.length;De<Ae;De++)Te=Xe[De],M.format!==Fi?Re!==null?j?Oe&&i.compressedTexSubImage2D(r.TEXTURE_2D,De,0,0,Te.width,Te.height,Re,Te.data):i.compressedTexImage2D(r.TEXTURE_2D,De,Fe,Te.width,Te.height,0,Te.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Oe&&i.texSubImage2D(r.TEXTURE_2D,De,0,0,Te.width,Te.height,Re,ze,Te.data):i.texImage2D(r.TEXTURE_2D,De,Fe,Te.width,Te.height,0,Re,ze,Te.data)}else if(M.isDataArrayTexture)if(j){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,je,Fe,Ne.width,Ne.height,Ne.depth),Oe)if(M.layerUpdates.size>0){const De=yv(Ne.width,Ne.height,M.format,M.type);for(const Ae of M.layerUpdates){const Ie=Ne.data.subarray(Ae*De/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*De/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ae,Ne.width,Ne.height,1,Re,ze,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Re,ze,Ne.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Ne.width,Ne.height,Ne.depth,0,Re,ze,Ne.data);else if(M.isData3DTexture)j?(Le&&i.texStorage3D(r.TEXTURE_3D,je,Fe,Ne.width,Ne.height,Ne.depth),Oe&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Re,ze,Ne.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,Ne.width,Ne.height,Ne.depth,0,Re,ze,Ne.data);else if(M.isFramebufferTexture){if(Le)if(j)i.texStorage2D(r.TEXTURE_2D,je,Fe,Ne.width,Ne.height);else{let De=Ne.width,Ae=Ne.height;for(let Ie=0;Ie<je;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Fe,De,Ae,0,Re,ze,null),De>>=1,Ae>>=1}}else if(Xe.length>0){if(j&&Le){const De=Ge(Xe[0]);i.texStorage2D(r.TEXTURE_2D,je,Fe,De.width,De.height)}for(let De=0,Ae=Xe.length;De<Ae;De++)Te=Xe[De],j?Oe&&i.texSubImage2D(r.TEXTURE_2D,De,0,0,Re,ze,Te):i.texImage2D(r.TEXTURE_2D,De,Fe,Re,ze,Te);M.generateMipmaps=!1}else if(j){if(Le){const De=Ge(Ne);i.texStorage2D(r.TEXTURE_2D,je,Fe,De.width,De.height)}Oe&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,ze,Ne)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Re,ze,Ne);b(M)&&x(ge),Ke.__version=le.version,M.onUpdate&&M.onUpdate(M)}B.__version=M.version}function ie(B,M,Y){if(M.image.length!==6)return;const ge=de(B,M),_e=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+Y);const le=s.get(_e);if(_e.version!==le.__version||ge===!0){i.activeTexture(r.TEXTURE0+Y);const Ke=Lt.getPrimaries(Lt.workingColorSpace),Be=M.colorSpace===fs?null:Lt.getPrimaries(M.colorSpace),ke=M.colorSpace===fs||Ke===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let Ae=0;Ae<6;Ae++)!$e&&!Ne?Re[Ae]=A(M.image[Ae],!0,l.maxCubemapSize):Re[Ae]=Ne?M.image[Ae].image:M.image[Ae],Re[Ae]=dt(M,Re[Ae]);const ze=Re[0],Fe=c.convert(M.format,M.colorSpace),Te=c.convert(M.type),Xe=L(M.internalFormat,Fe,Te,M.colorSpace),j=M.isVideoTexture!==!0,Le=le.__version===void 0||ge===!0,Oe=_e.dataReady;let je=U(M,ze);Q(r.TEXTURE_CUBE_MAP,M);let De;if($e){j&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,je,Xe,ze.width,ze.height);for(let Ae=0;Ae<6;Ae++){De=Re[Ae].mipmaps;for(let Ie=0;Ie<De.length;Ie++){const pt=De[Ie];M.format!==Fi?Fe!==null?j?Oe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,pt.width,pt.height,Fe,pt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,Xe,pt.width,pt.height,0,pt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,0,0,pt.width,pt.height,Fe,Te,pt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie,Xe,pt.width,pt.height,0,Fe,Te,pt.data)}}}else{if(De=M.mipmaps,j&&Le){De.length>0&&je++;const Ae=Ge(Re[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,je,Xe,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ne){j?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Re[Ae].width,Re[Ae].height,Fe,Te,Re[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Xe,Re[Ae].width,Re[Ae].height,0,Fe,Te,Re[Ae].data);for(let Ie=0;Ie<De.length;Ie++){const Et=De[Ie].image[Ae].image;j?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,Et.width,Et.height,Fe,Te,Et.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,Xe,Et.width,Et.height,0,Fe,Te,Et.data)}}else{j?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Fe,Te,Re[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Xe,Fe,Te,Re[Ae]);for(let Ie=0;Ie<De.length;Ie++){const pt=De[Ie];j?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,0,0,Fe,Te,pt.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie+1,Xe,Fe,Te,pt.image[Ae])}}}b(M)&&x(r.TEXTURE_CUBE_MAP),le.__version=_e.version,M.onUpdate&&M.onUpdate(M)}B.__version=M.version}function Me(B,M,Y,ge,_e,le){const Ke=c.convert(Y.format,Y.colorSpace),Be=c.convert(Y.type),ke=L(Y.internalFormat,Ke,Be,Y.colorSpace),$e=s.get(M),Ne=s.get(Y);if(Ne.__renderTarget=M,!$e.__hasExternalTextures){const Re=Math.max(1,M.width>>le),ze=Math.max(1,M.height>>le);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?i.texImage3D(_e,le,ke,Re,ze,M.depth,0,Ke,Be,null):i.texImage2D(_e,le,ke,Re,ze,0,Ke,Be,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),Mt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,_e,Ne.__webglTexture,0,k(M)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,_e,Ne.__webglTexture,le),i.bindFramebuffer(r.FRAMEBUFFER,null)}function be(B,M,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,B),M.depthBuffer){const ge=M.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,le=D(M.stencilBuffer,_e),Ke=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Mt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),le,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),le,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,le,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,B)}else{const ge=M.textures;for(let _e=0;_e<ge.length;_e++){const le=ge[_e],Ke=c.convert(le.format,le.colorSpace),Be=c.convert(le.type),ke=L(le.internalFormat,Ke,Be,le.colorSpace);Mt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),ke,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),ke,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ke,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(B,M,Y){const ge=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(M.depthTexture);if(_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ge){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M.depthTexture);const $e=c.convert(M.depthTexture.format),Ne=c.convert(M.depthTexture.type);let Re;M.depthTexture.format===Ua?Re=r.DEPTH_COMPONENT24:M.depthTexture.format===ks&&(Re=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Re,M.width,M.height,0,$e,Ne,null)}}else re(M.depthTexture,0);const le=_e.__webglTexture,Ke=k(M),Be=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,ke=M.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ua)Mt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ke,Be,le,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,ke,Be,le,0);else if(M.depthTexture.format===ks)Mt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ke,Be,le,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,ke,Be,le,0);else throw new Error("Unknown depthTexture format")}function Ze(B){const M=s.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==B.depthTexture){const ge=B.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=ge}if(B.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let ge=0;ge<6;ge++)Pe(M.__webglFramebuffer[ge],B,ge);else{const ge=B.texture.mipmaps;ge&&ge.length>0?Pe(M.__webglFramebuffer[0],B,0):Pe(M.__webglFramebuffer,B,0)}else if(Y){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=r.createRenderbuffer(),be(M.__webglDepthbuffer[ge],B,!1);else{const _e=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,le)}}else{const ge=B.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),be(M.__webglDepthbuffer,B,!1);else{const _e=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,le)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(B,M,Y){const ge=s.get(B);M!==void 0&&Me(ge.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Ze(B)}function st(B){const M=B.texture,Y=s.get(B),ge=s.get(M);B.addEventListener("dispose",P);const _e=B.textures,le=B.isWebGLCubeRenderTarget===!0,Ke=_e.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=M.version,d.memory.textures++),le){Y.__webglFramebuffer=[];for(let Be=0;Be<6;Be++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Be]=[];for(let ke=0;ke<M.mipmaps.length;ke++)Y.__webglFramebuffer[Be][ke]=r.createFramebuffer()}else Y.__webglFramebuffer[Be]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Be=0;Be<M.mipmaps.length;Be++)Y.__webglFramebuffer[Be]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Be=0,ke=_e.length;Be<ke;Be++){const $e=s.get(_e[Be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),d.memory.textures++)}if(B.samples>0&&Mt(B)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Be=0;Be<_e.length;Be++){const ke=_e[Be];Y.__webglColorRenderbuffer[Be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Be]);const $e=c.convert(ke.format,ke.colorSpace),Ne=c.convert(ke.type),Re=L(ke.internalFormat,$e,Ne,ke.colorSpace,B.isXRRenderTarget===!0),ze=k(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Re,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Be])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),be(Y.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M);for(let Be=0;Be<6;Be++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Me(Y.__webglFramebuffer[Be][ke],B,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ke);else Me(Y.__webglFramebuffer[Be],B,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0);b(M)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Be=0,ke=_e.length;Be<ke;Be++){const $e=_e[Be],Ne=s.get($e);let Re=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Re=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Ne.__webglTexture),Q(Re,$e),Me(Y.__webglFramebuffer,B,$e,r.COLOR_ATTACHMENT0+Be,Re,0),b($e)&&x(Re)}i.unbindTexture()}else{let Be=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Be=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,ge.__webglTexture),Q(Be,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Me(Y.__webglFramebuffer[ke],B,M,r.COLOR_ATTACHMENT0,Be,ke);else Me(Y.__webglFramebuffer,B,M,r.COLOR_ATTACHMENT0,Be,0);b(M)&&x(Be),i.unbindTexture()}B.depthBuffer&&Ze(B)}function at(B){const M=B.textures;for(let Y=0,ge=M.length;Y<ge;Y++){const _e=M[Y];if(b(_e)){const le=N(B),Ke=s.get(_e).__webglTexture;i.bindTexture(le,Ke),x(le),i.unbindTexture()}}}const mt=[],ot=[];function It(B){if(B.samples>0){if(Mt(B)===!1){const M=B.textures,Y=B.width,ge=B.height;let _e=r.COLOR_BUFFER_BIT;const le=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(B),Be=M.length>1;if(Be)for(let $e=0;$e<M.length;$e++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const ke=B.texture.mipmaps;ke&&ke.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[$e]);const Ne=s.get(M[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,Y,ge,0,0,Y,ge,_e,r.NEAREST),m===!0&&(mt.length=0,ot.length=0,mt.push(r.COLOR_ATTACHMENT0+$e),B.depthBuffer&&B.resolveDepthBuffer===!1&&(mt.push(le),ot.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Be)for(let $e=0;$e<M.length;$e++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[$e]);const Ne=s.get(M[$e]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,Ne,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const M=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function k(B){return Math.min(l.maxSamples,B.samples)}function Mt(B){const M=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(B){const M=d.render.frame;v.get(B)!==M&&(v.set(B,M),B.update())}function dt(B,M){const Y=B.colorSpace,ge=B.format,_e=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==Wr&&Y!==fs&&(Lt.getTransfer(Y)===jt?(ge!==Fi||_e!==Ei)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",Y)),M}function Ge(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=re,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=ut,this.setupRenderTarget=st,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function lA(r,e){function i(s,l=fs){let c;const d=Lt.getTransfer(l);if(s===Ei)return r.UNSIGNED_BYTE;if(s===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===rx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ox)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ax)return r.BYTE;if(s===sx)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===Hh)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===lx)return r.ALPHA;if(s===cx)return r.RGB;if(s===Fi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===ux)return r.RED;if(s===kh)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===qh)return r.RG_INTEGER;if(s===jh)return r.RGBA_INTEGER;if(s===Bc||s===Hc||s===Gc||s===Vc)if(d===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===ah||s===sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rh||s===oh)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ch)return c.COMPRESSED_R11_EAC;if(s===uh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===fh)return c.COMPRESSED_RG11_EAC;if(s===dh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===hh||s===ph||s===mh||s===gh||s===vh||s===xh||s===_h||s===yh||s===Sh||s===bh||s===Mh||s===Eh||s===Th||s===Ah)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===hh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wh||s===Ch||s===Rh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===wh)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dh||s===Nh||s===Uh||s===Lh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const cA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uA=`
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

}`;class fA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:cA,fragmentShader:uA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zi(new Qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Zr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,_=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",b=new fA,x={},N=i.getContextAttributes();let L=null,D=null;const U=[],F=[],P=new zt;let q=null;const T=new Mi;T.viewport=new fn;const R=new Mi;R.viewport=new fn;const H=[T,R],X=new bb;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=U[Z];return ie===void 0&&(ie=new Ld,U[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=U[Z];return ie===void 0&&(ie=new Ld,U[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=U[Z];return ie===void 0&&(ie=new Ld,U[Z]=ie),ie.getHandSpace()};function re(Z){const ie=F.indexOf(Z.inputSource);if(ie===-1)return;const Me=U[ie];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,p||d),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function I(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let Z=0;Z<U.length;Z++){const ie=F[Z];ie!==null&&(F[Z]=null,U[Z].disconnect(ie))}J=null,ne=null,b.reset();for(const Z in x)delete x[Z];e.setRenderTarget(L),S=null,_=null,g=null,l=null,D=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),N.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,be=null,Pe=null;N.depth&&(Pe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=N.stencil?ks:Ua,be=N.stencil?el:$i);const Ze={colorFormat:i.RGBA8,depthFormat:Pe,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(Ze),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Qi(_.textureWidth,_.textureHeight,{format:Fi,type:Ei,depthTexture:new nl(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ue.setContext(l),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(Z){for(let ie=0;ie<Z.removed.length;ie++){const Me=Z.removed[ie],be=F.indexOf(Me);be>=0&&(F[be]=null,U[be].disconnect(Me))}for(let ie=0;ie<Z.added.length;ie++){const Me=Z.added[ie];let be=F.indexOf(Me);if(be===-1){for(let Ze=0;Ze<U.length;Ze++)if(Ze>=F.length){F.push(Me),be=Ze;break}else if(F[Ze]===null){F[Ze]=Me,be=Ze;break}if(be===-1)break}const Pe=U[be];Pe&&Pe.connect(Me)}}const $=new ae,ve=new ae;function xe(Z,ie,Me){$.setFromMatrixPosition(ie.matrixWorld),ve.setFromMatrixPosition(Me.matrixWorld);const be=$.distanceTo(ve),Pe=ie.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,ut=Pe[14]/(Pe[10]-1),st=Pe[14]/(Pe[10]+1),at=(Pe[9]+1)/Pe[5],mt=(Pe[9]-1)/Pe[5],ot=(Pe[8]-1)/Pe[0],It=(Ze[8]+1)/Ze[0],k=ut*ot,Mt=ut*It,ct=be/(-ot+It),dt=ct*-ot;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(dt),Z.translateZ(ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ge=ut+ct,B=st+ct,M=k-dt,Y=Mt+(be-dt),ge=at*st/B*Ge,_e=mt*st/B*Ge;Z.projectionMatrix.makePerspective(M,Y,ge,_e,Ge,B),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function z(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ie=Z.near,Me=Z.far;b.texture!==null&&(b.depthNear>0&&(ie=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),X.near=R.near=T.near=ie,X.far=R.far=T.far=Me,(J!==X.near||ne!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),J=X.near,ne=X.far),X.layers.mask=Z.layers.mask|6,T.layers.mask=X.layers.mask&3,R.layers.mask=X.layers.mask&5;const be=Z.parent,Pe=X.cameras;z(X,be);for(let Ze=0;Ze<Pe.length;Ze++)z(Pe[Ze],be);Pe.length===2?xe(X,T,R):X.projectionMatrix.copy(T.projectionMatrix),Q(Z,X,be)};function Q(Z,ie,Me){Me===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Oh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(X)},this.getCameraTexture=function(Z){return x[Z]};let de=null;function me(Z,ie){if(v=ie.getViewerPose(p||d),E=ie,v!==null){const Me=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let be=!1;Me.length!==X.cameras.length&&(X.cameras.length=0,be=!0);for(let st=0;st<Me.length;st++){const at=Me[st];let mt=null;if(S!==null)mt=S.getViewport(at);else{const It=g.getViewSubImage(_,at);mt=It.viewport,st===0&&(e.setRenderTargetTextures(D,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(D))}let ot=H[st];ot===void 0&&(ot=new Mi,ot.layers.enable(st),ot.viewport=new fn,H[st]=ot),ot.matrix.fromArray(at.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(at.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(mt.x,mt.y,mt.width,mt.height),st===0&&(X.matrix.copy(ot.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),be===!0&&X.cameras.push(ot)}const Pe=l.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const st=g.getDepthInformation(Me[0]);st&&st.isValid&&st.texture&&b.init(st,l.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),g=s.getBinding();for(let st=0;st<Me.length;st++){const at=Me[st].camera;if(at){let mt=x[at];mt||(mt=new bx,x[at]=mt);const ot=g.getCameraImage(at);mt.sourceTexture=ot}}}}for(let Me=0;Me<U.length;Me++){const be=F[Me],Pe=U[Me];be!==null&&Pe!==void 0&&Pe.update(be,ie,p||d)}de&&de(Z,ie),ie.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ie}),E=null}const Ue=new Ex;Ue.setAnimationLoop(me),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}const Fs=new La,hA=new _n;function pA(r,e){function i(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function s(b,x){x.color.getRGB(b.fogColor.value,vx(r)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function l(b,x,N,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),v(b,x)):x.isMeshStandardMaterial?(c(b,x),_(b,x),x.isMeshPhysicalMaterial&&S(b,x,D)):x.isMeshMatcapMaterial?(c(b,x),E(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),A(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(d(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?m(b,x,N,L):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,i(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Jn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,i(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Jn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,i(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,i(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const N=e.get(x),L=N.envMap,D=N.envMapRotation;L&&(b.envMap.value=L,Fs.copy(D),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),b.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(Fs)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,b.aoMapTransform))}function d(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,N,L){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*N,b.scale.value=L*.5,x.map&&(b.map.value=x.map,i(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function v(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function _(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,N){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=N.texture,b.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,x){x.matcap&&(b.matcap.value=x.matcap)}function A(b,x){const N=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(N.matrixWorld),b.nearDistance.value=N.shadow.camera.near,b.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function mA(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;s.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(E(N),D=v(N),l[N.id]=D,N.addEventListener("dispose",b));const U=L.program;s.updateUBOMapping(N,U);const F=e.render.frame;c[N.id]!==F&&(_(N),c[N.id]=F)}function v(N){const L=g();N.__bindingPointIndex=L;const D=r.createBuffer(),U=N.__size,F=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,U,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const L=l[N.id],D=N.uniforms,U=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,P=D.length;F<P;F++){const q=Array.isArray(D[F])?D[F]:[D[F]];for(let T=0,R=q.length;T<R;T++){const H=q[T];if(S(H,F,T,U)===!0){const X=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ne=0;for(let re=0;re<J.length;re++){const I=J[re],G=A(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,X+ne,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ne),ne+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,L,D,U){const F=N.value,P=L+"_"+D;if(U[P]===void 0)return typeof F=="number"||typeof F=="boolean"?U[P]=F:U[P]=F.clone(),!0;{const q=U[P];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return U[P]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function E(N){const L=N.uniforms;let D=0;const U=16;for(let P=0,q=L.length;P<q;P++){const T=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,H=T.length;R<H;R++){const X=T[R],J=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,re=J.length;ne<re;ne++){const I=J[ne],G=A(I),$=D%U,ve=$%G.boundary,xe=$+ve;D+=ve,xe!==0&&U-xe<G.storage&&(D+=U-xe),X.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=G.storage}}}const F=D%U;return F>0&&(D+=U-F),N.__size=D,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",N),L}function b(N){const L=N.target;L.removeEventListener("dispose",b);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const gA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function vA(){return ji===null&&(ji=new pb(gA,16,16,Xr,Na),ji.name="DFG_LUT",ji.minFilter=Hn,ji.magFilter=Hn,ji.wrapS=wa,ji.wrapT=wa,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class xA{constructor(e={}){const{canvas:i=HS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Ei}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const A=S,b=new Set([jh,qh,kh]),x=new Set([Ei,$i,$o,el,Gh,Vh]),N=new Uint32Array(4),L=new Int32Array(4);let D=null,U=null;const F=[],P=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=bi;let H=0,X=0,J=null,ne=-1,re=null;const I=new fn,G=new fn;let $=null;const ve=new Gt(0);let xe=0,z=i.width,Q=i.height,de=1,me=null,Ue=null;const Z=new fn(0,0,z,Q),ie=new fn(0,0,z,Q);let Me=!1;const be=new Sx;let Pe=!1,Ze=!1;const ut=new _n,st=new ae,at=new fn,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function It(){return J===null?de:1}let k=s;function Mt(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bh}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",Et,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const K="webgl2";if(k=Mt(K,w),k===null)throw Mt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ft("WebGLRenderer: "+w.message),w}let ct,dt,Ge,B,M,Y,ge,_e,le,Ke,Be,ke,$e,Ne,Re,ze,Fe,Te,Xe,j,Le,Oe,je,De;function Ae(){ct=new vE(k),ct.init(),Oe=new lA(k,ct),dt=new lE(k,ct,e,Oe),Ge=new rA(k,ct),dt.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),B=new yE(k),M=new jT,Y=new oA(k,ct,Ge,M,dt,Oe,B),ge=new uE(T),_e=new gE(T),le=new Eb(k),je=new rE(k,le),Ke=new xE(k,le,B,je),Be=new bE(k,Ke,le,B),Xe=new SE(k,dt,Y),ze=new cE(M),ke=new qT(T,ge,_e,ct,dt,je,ze),$e=new pA(T,M),Ne=new WT,Re=new $T(ct),Te=new sE(T,ge,_e,Ge,Be,E,m),Fe=new aA(T,Be,dt),De=new mA(k,B,dt,Ge),j=new oE(k,ct,B),Le=new _E(k,ct,B),B.programs=ke.programs,T.capabilities=dt,T.extensions=ct,T.properties=M,T.renderLists=Ne,T.shadowMap=Fe,T.state=Ge,T.info=B}Ae(),A!==Ei&&(q=new EE(A,i.width,i.height,l,c));const Ie=new dA(T,k);this.xr=Ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(z,Q,!1))},this.getSize=function(w){return w.set(z,Q)},this.setSize=function(w,K,he=!0){if(Ie.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Q=K,i.width=Math.floor(w*de),i.height=Math.floor(K*de),he===!0&&(i.style.width=w+"px",i.style.height=K+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(z*de,Q*de).floor()},this.setDrawingBufferSize=function(w,K,he){z=w,Q=K,de=he,i.width=Math.floor(w*he),i.height=Math.floor(K*he),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(A===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,K,he,ce){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,K,he,ce),Ge.viewport(I.copy(Z).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,K,he,ce){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,K,he,ce),Ge.scissor(G.copy(ie).multiplyScalar(de).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Ge.setScissorTest(Me=w)},this.setOpaqueSort=function(w){me=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,he=!0){let ce=0;if(w){let te=!1;if(J!==null){const He=J.texture.format;te=b.has(He)}if(te){const He=J.texture.type,We=x.has(He),Ve=Te.getClearColor(),Qe=Te.getClearAlpha(),nt=Ve.r,rt=Ve.g,et=Ve.b;We?(N[0]=nt,N[1]=rt,N[2]=et,N[3]=Qe,k.clearBufferuiv(k.COLOR,0,N)):(L[0]=nt,L[1]=rt,L[2]=et,L[3]=Qe,k.clearBufferiv(k.COLOR,0,L))}else ce|=k.COLOR_BUFFER_BIT}K&&(ce|=k.DEPTH_BUFFER_BIT),he&&(ce|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",Et,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Te.dispose(),Ne.dispose(),Re.dispose(),M.dispose(),ge.dispose(),_e.dispose(),Be.dispose(),je.dispose(),De.dispose(),ke.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",na),Ie.removeEventListener("sessionend",ia),Tn.stop()};function pt(w){w.preventDefault(),iv("WebGLRenderer: Context Lost."),R=!0}function Et(){iv("WebGLRenderer: Context Restored."),R=!1;const w=B.autoReset,K=Fe.enabled,he=Fe.autoUpdate,ce=Fe.needsUpdate,te=Fe.type;Ae(),B.autoReset=w,Fe.enabled=K,Fe.autoUpdate=he,Fe.needsUpdate=ce,Fe.type=te}function Rt(w){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function En(w){const K=w.target;K.removeEventListener("dispose",En),qn(K)}function qn(w){js(w),M.remove(w)}function js(w){const K=M.get(w).programs;K!==void 0&&(K.forEach(function(he){ke.releaseProgram(he)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,he,ce,te,He){K===null&&(K=mt);const We=te.isMesh&&te.matrixWorld.determinant()<0,Ve=fi(w,K,he,ce,te);Ge.setMaterial(ce,We);let Qe=he.index,nt=1;if(ce.wireframe===!0){if(Qe=Ke.getWireframeAttribute(he),Qe===void 0)return;nt=2}const rt=he.drawRange,et=he.attributes.position;let ft=rt.start*nt,Ut=(rt.start+rt.count)*nt;He!==null&&(ft=Math.max(ft,He.start*nt),Ut=Math.min(Ut,(He.start+He.count)*nt)),Qe!==null?(ft=Math.max(ft,0),Ut=Math.min(Ut,Qe.count)):et!=null&&(ft=Math.max(ft,0),Ut=Math.min(Ut,et.count));const Qt=Ut-ft;if(Qt<0||Qt===1/0)return;je.setup(te,ce,Ve,he,Qe);let Bt,ye=j;if(Qe!==null&&(Bt=le.get(Qe),ye=Le,ye.setIndex(Bt)),te.isMesh)ce.wireframe===!0?(Ge.setLineWidth(ce.wireframeLinewidth*It()),ye.setMode(k.LINES)):ye.setMode(k.TRIANGLES);else if(te.isLine){let Ce=ce.linewidth;Ce===void 0&&(Ce=1),Ge.setLineWidth(Ce*It()),te.isLineSegments?ye.setMode(k.LINES):te.isLineLoop?ye.setMode(k.LINE_LOOP):ye.setMode(k.LINE_STRIP)}else te.isPoints?ye.setMode(k.POINTS):te.isSprite&&ye.setMode(k.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ye.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ce=te._multiDrawStarts,Je=te._multiDrawCounts,Ye=te._multiDrawCount,xt=Qe?le.get(Qe).bytesPerElement:1,An=M.get(ce).currentProgram.getUniforms();for(let Zt=0;Zt<Ye;Zt++)An.setValue(k,"_gl_DrawID",Zt),ye.render(Ce[Zt]/xt,Je[Zt])}else if(te.isInstancedMesh)ye.renderInstances(ft,Qt,te.count);else if(he.isInstancedBufferGeometry){const Ce=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Je=Math.min(he.instanceCount,Ce);ye.renderInstances(ft,Qt,Je)}else ye.render(ft,Qt)};function Xs(w,K,he){w.transparent===!0&&w.side===Aa&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,Ti(w,K,he),w.side=ps,w.needsUpdate=!0,Ti(w,K,he),w.side=Aa):Ti(w,K,he)}this.compile=function(w,K,he=null){he===null&&(he=w),U=Re.get(he),U.init(K),P.push(U),he.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),w!==he&&w.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights();const ce=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let We=0;We<He.length;We++){const Ve=He[We];Xs(Ve,he,te),ce.add(Ve)}else Xs(He,he,te),ce.add(He)}),U=P.pop(),ce},this.compileAsync=function(w,K,he=null){const ce=this.compile(w,K,he);return new Promise(te=>{function He(){if(ce.forEach(function(We){M.get(We).currentProgram.isReady()&&ce.delete(We)}),ce.size===0){te(w);return}setTimeout(He,10)}ct.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let on=null;function ta(w){on&&on(w)}function na(){Tn.stop()}function ia(){Tn.start()}const Tn=new Ex;Tn.setAnimationLoop(ta),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(w){on=w,Ie.setAnimationLoop(w),w===null?Tn.stop():Tn.start()},Ie.addEventListener("sessionstart",na),Ie.addEventListener("sessionend",ia),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const he=Ie.enabled===!0&&Ie.isPresenting===!0,ce=q!==null&&(J===null||he)&&q.begin(T,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(K),K=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,K,J),U=Re.get(w,P.length),U.init(K),P.push(U),ut.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),be.setFromProjectionMatrix(ut,Zi,K.reversedDepth),Ze=this.localClippingEnabled,Pe=ze.init(this.clippingPlanes,Ze),D=Ne.get(w,F.length),D.init(),F.push(D),Ie.enabled===!0&&Ie.isPresenting===!0){const We=T.xr.getDepthSensingMesh();We!==null&&ln(We,K,-1/0,T.sortObjects)}ln(w,K,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(me,Ue),ot=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ot&&Te.addToRenderList(D,w),this.info.render.frame++,Pe===!0&&ze.beginShadows();const te=U.state.shadowsArray;if(Fe.render(te,w,K),Pe===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&q.hasRenderPass())===!1){const We=D.opaque,Ve=D.transmissive;if(U.setupLights(),K.isArrayCamera){const Qe=K.cameras;if(Ve.length>0)for(let nt=0,rt=Qe.length;nt<rt;nt++){const et=Qe[nt];nn(We,Ve,w,et)}ot&&Te.render(w);for(let nt=0,rt=Qe.length;nt<rt;nt++){const et=Qe[nt];en(D,w,et,et.viewport)}}else Ve.length>0&&nn(We,Ve,w,K),ot&&Te.render(w),en(D,w,K)}J!==null&&X===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),ce&&q.end(T),w.isScene===!0&&w.onAfterRender(T,w,K),je.resetDefaultState(),ne=-1,re=null,P.pop(),P.length>0?(U=P[P.length-1],Pe===!0&&ze.setGlobalState(T.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function ln(w,K,he,ce){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||be.intersectsSprite(w)){ce&&at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);const We=Be.update(w),Ve=w.material;Ve.visible&&D.push(w,We,Ve,he,at.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||be.intersectsObject(w))){const We=Be.update(w),Ve=w.material;if(ce&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),at.copy(w.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),at.copy(We.boundingSphere.center)),at.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(Ve)){const Qe=We.groups;for(let nt=0,rt=Qe.length;nt<rt;nt++){const et=Qe[nt],ft=Ve[et.materialIndex];ft&&ft.visible&&D.push(w,We,ft,he,at.z,et)}}else Ve.visible&&D.push(w,We,Ve,he,at.z,null)}}const He=w.children;for(let We=0,Ve=He.length;We<Ve;We++)ln(He[We],K,he,ce)}function en(w,K,he,ce){const{opaque:te,transmissive:He,transparent:We}=w;U.setupLightsView(he),Pe===!0&&ze.setGlobalState(T.clippingPlanes,he),ce&&Ge.viewport(I.copy(ce)),te.length>0&&$n(te,K,he),He.length>0&&$n(He,K,he),We.length>0&&$n(We,K,he),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function nn(w,K,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ce.id]===void 0){const ft=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ce.id]=new Qi(1,1,{generateMipmaps:!0,type:ft?Na:Ei,minFilter:Vs,samples:dt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const He=U.state.transmissionRenderTarget[ce.id],We=ce.viewport||I;He.setSize(We.z*T.transmissionResolutionScale,We.w*T.transmissionResolutionScale);const Ve=T.getRenderTarget(),Qe=T.getActiveCubeFace(),nt=T.getActiveMipmapLevel();T.setRenderTarget(He),T.getClearColor(ve),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),ot&&Te.render(he);const rt=T.toneMapping;T.toneMapping=Ki;const et=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),U.setupLightsView(ce),Pe===!0&&ze.setGlobalState(T.clippingPlanes,ce),$n(w,he,ce),Y.updateMultisampleRenderTarget(He),Y.updateRenderTargetMipmap(He),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ut=0,Qt=K.length;Ut<Qt;Ut++){const Bt=K[Ut],{object:ye,geometry:Ce,material:Je,group:Ye}=Bt;if(Je.side===Aa&&ye.layers.test(ce.layers)){const xt=Je.side;Je.side=Jn,Je.needsUpdate=!0,Oa(ye,he,ce,Ce,Je,Ye),Je.side=xt,Je.needsUpdate=!0,ft=!0}}ft===!0&&(Y.updateMultisampleRenderTarget(He),Y.updateRenderTargetMipmap(He))}T.setRenderTarget(Ve,Qe,nt),T.setClearColor(ve,xe),et!==void 0&&(ce.viewport=et),T.toneMapping=rt}function $n(w,K,he){const ce=K.isScene===!0?K.overrideMaterial:null;for(let te=0,He=w.length;te<He;te++){const We=w[te],{object:Ve,geometry:Qe,group:nt}=We;let rt=We.material;rt.allowOverride===!0&&ce!==null&&(rt=ce),Ve.layers.test(he.layers)&&Oa(Ve,K,he,Qe,rt,nt)}}function Oa(w,K,he,ce,te,He){w.onBeforeRender(T,K,he,ce,te,He),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(T,K,he,ce,w,He),te.transparent===!0&&te.side===Aa&&te.forceSinglePass===!1?(te.side=Jn,te.needsUpdate=!0,T.renderBufferDirect(he,K,ce,te,w,He),te.side=ps,te.needsUpdate=!0,T.renderBufferDirect(he,K,ce,te,w,He),te.side=Aa):T.renderBufferDirect(he,K,ce,te,w,He),w.onAfterRender(T,K,he,ce,te,He)}function Ti(w,K,he){K.isScene!==!0&&(K=mt);const ce=M.get(w),te=U.state.lights,He=U.state.shadowsArray,We=te.state.version,Ve=ke.getParameters(w,te.state,He,K,he),Qe=ke.getProgramCacheKey(Ve);let nt=ce.programs;ce.environment=w.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(w.isMeshStandardMaterial?_e:ge).get(w.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",En),nt=new Map,ce.programs=nt);let rt=nt.get(Qe);if(rt!==void 0){if(ce.currentProgram===rt&&ce.lightsStateVersion===We)return Ws(w,Ve),rt}else Ve.uniforms=ke.getUniforms(w),w.onBeforeCompile(Ve,T),rt=ke.acquireProgram(Ve,Qe),nt.set(Qe,rt),ce.uniforms=Ve.uniforms;const et=ce.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=ze.uniform),Ws(w,Ve),ce.needsLights=Ii(w),ce.lightsStateVersion=We,ce.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMap.value=te.state.directionalShadowMap,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotShadowMap.value=te.state.spotShadowMap,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMap.value=te.state.pointShadowMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=rt,ce.uniformsList=null,rt}function Ai(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=kc.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Ws(w,K){const he=M.get(w);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function fi(w,K,he,ce,te){K.isScene!==!0&&(K=mt),Y.resetTextureUnits();const He=K.fog,We=ce.isMeshStandardMaterial?K.environment:null,Ve=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Wr,Qe=(ce.isMeshStandardMaterial?_e:ge).get(ce.envMap||We),nt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,rt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),et=!!he.morphAttributes.position,ft=!!he.morphAttributes.normal,Ut=!!he.morphAttributes.color;let Qt=Ki;ce.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Qt=T.toneMapping);const Bt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ye=Bt!==void 0?Bt.length:0,Ce=M.get(ce),Je=U.state.lights;if(Pe===!0&&(Ze===!0||w!==re)){const Dn=w===re&&ce.id===ne;ze.setState(ce,w,Dn)}let Ye=!1;ce.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Je.state.version||Ce.outputColorSpace!==Ve||te.isBatchedMesh&&Ce.batching===!1||!te.isBatchedMesh&&Ce.batching===!0||te.isBatchedMesh&&Ce.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ce.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ce.instancing===!1||!te.isInstancedMesh&&Ce.instancing===!0||te.isSkinnedMesh&&Ce.skinning===!1||!te.isSkinnedMesh&&Ce.skinning===!0||te.isInstancedMesh&&Ce.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ce.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ce.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ce.instancingMorph===!1&&te.morphTexture!==null||Ce.envMap!==Qe||ce.fog===!0&&Ce.fog!==He||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ze.numPlanes||Ce.numIntersection!==ze.numIntersection)||Ce.vertexAlphas!==nt||Ce.vertexTangents!==rt||Ce.morphTargets!==et||Ce.morphNormals!==ft||Ce.morphColors!==Ut||Ce.toneMapping!==Qt||Ce.morphTargetsCount!==ye)&&(Ye=!0):(Ye=!0,Ce.__version=ce.version);let xt=Ce.currentProgram;Ye===!0&&(xt=Ti(ce,K,te));let An=!1,Zt=!1,di=!1;const Vt=xt.getUniforms(),Rn=Ce.uniforms;if(Ge.useProgram(xt.program)&&(An=!0,Zt=!0,di=!0),ce.id!==ne&&(ne=ce.id,Zt=!0),An||re!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(k,"projectionMatrix",w.projectionMatrix),Vt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Nn=Vt.map.cameraPosition;Nn!==void 0&&Nn.setValue(k,st.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&Vt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Vt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),re!==w&&(re=w,Zt=!0,di=!0)}if(Ce.needsLights&&(Je.state.directionalShadowMap.length>0&&Vt.setValue(k,"directionalShadowMap",Je.state.directionalShadowMap,Y),Je.state.spotShadowMap.length>0&&Vt.setValue(k,"spotShadowMap",Je.state.spotShadowMap,Y),Je.state.pointShadowMap.length>0&&Vt.setValue(k,"pointShadowMap",Je.state.pointShadowMap,Y)),te.isSkinnedMesh){Vt.setOptional(k,te,"bindMatrix"),Vt.setOptional(k,te,"bindMatrixInverse");const Dn=te.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Vt.setValue(k,"boneTexture",Dn.boneTexture,Y))}te.isBatchedMesh&&(Vt.setOptional(k,te,"batchingTexture"),Vt.setValue(k,"batchingTexture",te._matricesTexture,Y),Vt.setOptional(k,te,"batchingIdTexture"),Vt.setValue(k,"batchingIdTexture",te._indirectTexture,Y),Vt.setOptional(k,te,"batchingColorTexture"),te._colorsTexture!==null&&Vt.setValue(k,"batchingColorTexture",te._colorsTexture,Y));const yn=he.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Xe.update(te,he,xt),(Zt||Ce.receiveShadow!==te.receiveShadow)&&(Ce.receiveShadow=te.receiveShadow,Vt.setValue(k,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rn.envMap.value=Qe,Rn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(Rn.envMapIntensity.value=K.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=vA()),Zt&&(Vt.setValue(k,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&Ys(Rn,di),He&&ce.fog===!0&&$e.refreshFogUniforms(Rn,He),$e.refreshMaterialUniforms(Rn,ce,de,Q,U.state.transmissionRenderTarget[w.id]),kc.upload(k,Ai(Ce),Rn,Y)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(kc.upload(k,Ai(Ce),Rn,Y),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Vt.setValue(k,"center",te.center),Vt.setValue(k,"modelViewMatrix",te.modelViewMatrix),Vt.setValue(k,"normalMatrix",te.normalMatrix),Vt.setValue(k,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Dn=ce.uniformsGroups;for(let Nn=0,Zs=Dn.length;Nn<Zs;Nn++){const Ci=Dn[Nn];De.update(Ci,xt),De.bind(Ci,xt)}}return xt}function Ys(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Ii(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,K,he){const ce=M.get(w);ce.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=K,M.get(w.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const he=M.get(w);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0};const Bi=k.createFramebuffer();this.setRenderTarget=function(w,K=0,he=0){J=w,H=K,X=he;let ce=null,te=!1,He=!1;if(w){const Ve=M.get(w);if(Ve.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(k.FRAMEBUFFER,Ve.__webglFramebuffer),I.copy(w.viewport),G.copy(w.scissor),$=w.scissorTest,Ge.viewport(I),Ge.scissor(G),Ge.setScissorTest($),ne=-1;return}else if(Ve.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Ve.__hasExternalTextures)Y.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(Ve.__boundDepthTexture!==rt){if(rt!==null&&M.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(He=!0);const nt=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?ce=nt[K][he]:ce=nt[K],te=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?ce=M.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?ce=nt[he]:ce=nt,I.copy(w.viewport),G.copy(w.scissor),$=w.scissorTest}else I.copy(Z).multiplyScalar(de).floor(),G.copy(ie).multiplyScalar(de).floor(),$=Me;if(he!==0&&(ce=Bi),Ge.bindFramebuffer(k.FRAMEBUFFER,ce)&&Ge.drawBuffers(w,ce),Ge.viewport(I),Ge.scissor(G),Ge.setScissorTest($),te){const Ve=M.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,he)}else if(He){const Ve=K;for(let Qe=0;Qe<w.textures.length;Qe++){const nt=M.get(w.textures[Qe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,he,Ve)}}else if(w!==null&&he!==0){const Ve=M.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ve.__webglTexture,he)}ne=-1},this.readRenderTargetPixels=function(w,K,he,ce,te,He,We,Ve=0){if(!(w&&w.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe){Ge.bindFramebuffer(k.FRAMEBUFFER,Qe);try{const nt=w.textures[Ve],rt=nt.format,et=nt.type;if(!dt.textureFormatReadable(rt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(et)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ce&&he>=0&&he<=w.height-te&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(K,he,ce,te,Oe.convert(rt),Oe.convert(et),He))}finally{const nt=J!==null?M.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,K,he,ce,te,He,We,Ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe)if(K>=0&&K<=w.width-ce&&he>=0&&he<=w.height-te){Ge.bindFramebuffer(k.FRAMEBUFFER,Qe);const nt=w.textures[Ve],rt=nt.format,et=nt.type;if(!dt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.bufferData(k.PIXEL_PACK_BUFFER,He.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(K,he,ce,te,Oe.convert(rt),Oe.convert(et),0);const Ut=J!==null?M.get(J).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Ut);const Qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await GS(k,Qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ft),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,He),k.deleteBuffer(ft),k.deleteSync(Qt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,he=0){const ce=Math.pow(2,-he),te=Math.floor(w.image.width*ce),He=Math.floor(w.image.height*ce),We=K!==null?K.x:0,Ve=K!==null?K.y:0;Y.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,he,0,0,We,Ve,te,He),Ge.unbindTexture()};const Hi=k.createFramebuffer(),wi=k.createFramebuffer();this.copyTextureToTexture=function(w,K,he=null,ce=null,te=0,He=null){He===null&&(te!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),He=te,te=0):He=0);let We,Ve,Qe,nt,rt,et,ft,Ut,Qt;const Bt=w.isCompressedTexture?w.mipmaps[He]:w.image;if(he!==null)We=he.max.x-he.min.x,Ve=he.max.y-he.min.y,Qe=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,rt=he.min.y,et=he.isBox3?he.min.z:0;else{const yn=Math.pow(2,-te);We=Math.floor(Bt.width*yn),Ve=Math.floor(Bt.height*yn),w.isDataArrayTexture?Qe=Bt.depth:w.isData3DTexture?Qe=Math.floor(Bt.depth*yn):Qe=1,nt=0,rt=0,et=0}ce!==null?(ft=ce.x,Ut=ce.y,Qt=ce.z):(ft=0,Ut=0,Qt=0);const ye=Oe.convert(K.format),Ce=Oe.convert(K.type);let Je;K.isData3DTexture?(Y.setTexture3D(K,0),Je=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Y.setTexture2DArray(K,0),Je=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(K,0),Je=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const Ye=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),An=k.getParameter(k.UNPACK_SKIP_PIXELS),Zt=k.getParameter(k.UNPACK_SKIP_ROWS),di=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,et);const Vt=w.isDataArrayTexture||w.isData3DTexture,Rn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const yn=M.get(w),Dn=M.get(K),Nn=M.get(yn.__renderTarget),Zs=M.get(Dn.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Ci=0;Ci<Qe;Ci++)Vt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(w).__webglTexture,te,et+Ci),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(K).__webglTexture,He,Qt+Ci)),k.blitFramebuffer(nt,rt,We,Ve,ft,Ut,We,Ve,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||M.has(w)){const yn=M.get(w),Dn=M.get(K);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Hi),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,wi);for(let Nn=0;Nn<Qe;Nn++)Vt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,te,et+Nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,te),Rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dn.__webglTexture,He,Qt+Nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dn.__webglTexture,He),te!==0?k.blitFramebuffer(nt,rt,We,Ve,ft,Ut,We,Ve,k.COLOR_BUFFER_BIT,k.NEAREST):Rn?k.copyTexSubImage3D(Je,He,ft,Ut,Qt+Nn,nt,rt,We,Ve):k.copyTexSubImage2D(Je,He,ft,Ut,nt,rt,We,Ve);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Je,He,ft,Ut,Qt,We,Ve,Qe,ye,Ce,Bt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(Je,He,ft,Ut,Qt,We,Ve,Qe,ye,Bt.data):k.texSubImage3D(Je,He,ft,Ut,Qt,We,Ve,Qe,ye,Ce,Bt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,He,ft,Ut,We,Ve,ye,Ce,Bt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,He,ft,Ut,Bt.width,Bt.height,ye,Bt.data):k.texSubImage2D(k.TEXTURE_2D,He,ft,Ut,We,Ve,ye,Ce,Bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,An),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,di),He===0&&K.generateMipmaps&&k.generateMipmap(Je),Ge.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){H=0,X=0,J=null,Ge.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const _A=["icosahedron","sphere","torus","box","cone","octahedron","tetrahedron","dodecahedron","cylinder"],yA=(r,e,i)=>{switch(r){case"sphere":return new $h(e,32,32);case"torus":return new tp(e*.75,e*.25,32,64);case"box":return new Kr(e*1.5,e*1.5,e*1.5,10,10,10);case"cone":return new Kh(e*1.1,e*1.8,64,32);case"octahedron":return new Jh(e*1.2,2);case"tetrahedron":return new ep(e*1.2,2);case"dodecahedron":return new Qh(e*1.2,2);case"cylinder":return new Kc(e*.9,e*.9,e*1.8,64,32);case"icosahedron":default:return new kr(e,2)}},qv=({className:r="",color:e="#7F77DD",bands:i={bass:0,mid:0,high:0},side:s="left",onClick:l,lightingEnabled:c=!1,shape:d="icosahedron",floorHeight:h=.62})=>{const m=fe.useRef(null),p=fe.useRef(i),v=fe.useRef(null),g=fe.useRef(null),_=fe.useRef({t:1,src:new Float32Array(0),dst:new Float32Array(0),active:!1,currentShape:d}),S=fe.useRef({}),E=fe.useRef(0),A=fe.useRef(h);fe.useEffect(()=>{p.current=i},[i]),fe.useEffect(()=>{A.current=h},[h]),fe.useEffect(()=>{if(typeof window>"u")return;const x=m.current;if(!x)return;for(;x.firstChild;)x.removeChild(x.firstChild);const N=new hb,L=x.clientWidth||300,D=x.clientHeight||500,U=new Mi(50,L/D,.1,1e3);U.position.z=9;const F=new xA({alpha:!0,antialias:!0});F.setSize(L,D),F.setClearColor(0,0),x.appendChild(F.domElement);const P=new ResizeObserver(Q=>{if(!Q[0])return;const{width:de,height:me}=Q[0].contentRect;de===0||me===0||(F.setSize(de,me),U.aspect=de/me,U.updateProjectionMatrix())});P.observe(x);const q=xn.sphere.baseSize,T=2,R=new kr(q,T),H=R.attributes.position.count,X={};_A.forEach(Q=>{const de=yA(Q,q),me=de.attributes.position,Ue=new Float32Array(H*3);for(let Z=0;Z<H;Z++){const ie=Math.floor(Z/H*me.count);Ue[Z*3]=me.getX(ie),Ue[Z*3+1]=me.getY(ie),Ue[Z*3+2]=me.getZ(ie)}X[Q]=Ue,de.dispose()}),R.dispose();const J=new kr(q,T),ne=new kr(q,T),re=new Wc({color:new Gt(e),wireframe:!0,transparent:!0,opacity:.85}),I=new Wc({color:new Gt("#FFFFFF"),wireframe:!0,transparent:!0,opacity:.2}),G=new zi(J,re),$=new zi(ne,I);$.scale.setScalar(.55),v.current=G,g.current=$,N.add(G),N.add($),S.current=X,E.current=H;let ve=0;function xe(Q){return Q<.5?4*Q*Q*Q:1-Math.pow(-2*Q+2,3)/2}const z=()=>{requestAnimationFrame(z),ve+=.016;const Q=p.current,de=_.current;let me;if(de.active&&de.t<1){de.t=Math.min(1,de.t+.025);const dt=xe(de.t);me=new Float32Array(H*3);for(let Ge=0;Ge<H*3;Ge++)me[Ge]=de.src[Ge]+(de.dst[Ge]-de.src[Ge])*dt;de.t>=1&&(de.active=!1)}else me=X[de.currentShape];const Ue=J.attributes.position,Z=ne.attributes.position;for(let dt=0;dt<H;dt++)Ue.setXYZ(dt,me[dt*3],me[dt*3+1],me[dt*3+2]),Z.setXYZ(dt,me[dt*3],me[dt*3+1],me[dt*3+2]);Ue.needsUpdate=!0,Z.needsUpdate=!0;const ie=2.5432,Pe=-(A.current-.5)*8.39+xn.sphere.baseSize,Ze=ie-Pe,ut=Math.max(0,Ze-.4),st=performance.now()*xn.sphere.bounceSpeed,at=(1-Math.abs(Math.cos(st)))*Ze;G.position.y=ie-at,$.position.y=ie-at;const mt=at>ut?1-(at-ut)*xn.sphere.squashIntensity:1,ot=1+(1-mt)*xn.sphere.stretchIntensity,It=Q.bass*xn.audio.bassWeight+Q.mid*xn.audio.midWeight+Q.high*xn.audio.highWeight,k=1+It,Mt=1+It*xn.audio.sizeMultiplier;G.scale.set(ot*k*Mt,mt*k*Mt,ot*k*Mt);const ct=ot*k*Mt*xn.audio.innerMeshScale;if($.scale.set(ct,ct,ct),G.rotation.x+=.004+Q.bass*.015,G.rotation.y+=.006+Q.mid*.01,$.rotation.x-=.002,$.rotation.y-=.004,$.rotation.z+=.001,c){const dt=(ve*12+Q.bass*60)%360,Ge=.55+Q.bass*.35,B=.45+Q.mid*.3;re.color.setHSL(dt/360,Ge,B)}re.opacity=.7+Q.bass*.25,I.opacity=.25+Q.bass*.2,F.render(N,U)};return z(),()=>{for(P.disconnect();x.firstChild;)x.removeChild(x.firstChild);J.dispose(),ne.dispose(),re.dispose(),I.dispose(),F.dispose(),N.clear()}},[]),fe.useEffect(()=>{const x=v.current,N=E.current,L=S.current,D=_.current;if(!x||!N||!L[d]||D.currentShape===d)return;const U=x.geometry.attributes.position,F=new Float32Array(N*3);for(let P=0;P<N;P++)F[P*3]=U.getX(P),F[P*3+1]=U.getY(P),F[P*3+2]=U.getZ(P);D.src=F,D.dst=L[d],D.t=0,D.active=!0,D.currentShape=d},[d]);const b=x=>{x.stopPropagation(),l&&l(x)};return fe.useEffect(()=>{v.current&&v.current.material.color.set(e)},[e]),O.jsx("div",{ref:m,className:`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${r}`,onClick:b,style:{width:"100%",height:"100%"}})};class SA{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterAnalyser=this.ctx.createAnalyser(),this.masterAnalyser.fftSize=512,this.masterAnalyser.smoothingTimeConstant=.88,this.masterGain.connect(this.masterAnalyser),this.masterAnalyser.connect(this.ctx.destination),this.kickGain=this.ctx.createGain(),this.kickAnalyser=this.ctx.createAnalyser(),this.kickAnalyser.fftSize=256,this.kickGain.connect(this.kickAnalyser),this.kickAnalyser.connect(this.masterGain),this.bassGain=this.ctx.createGain(),this.bassAnalyser=this.ctx.createAnalyser(),this.bassAnalyser.fftSize=512,this.bassGain.connect(this.bassAnalyser),this.bassAnalyser.connect(this.masterGain),this.hihatGain=this.ctx.createGain(),this.hihatAnalyser=this.ctx.createAnalyser(),this.hihatAnalyser.fftSize=256,this.hihatGain.connect(this.hihatAnalyser),this.hihatAnalyser.connect(this.masterGain),this.snareGain=this.ctx.createGain(),this.snareAnalyser=this.ctx.createAnalyser(),this.snareAnalyser.fftSize=256,this.snareGain.connect(this.snareAnalyser),this.snareAnalyser.connect(this.masterGain),this.leadGain=this.ctx.createGain(),this.leadAnalyser=this.ctx.createAnalyser(),this.leadAnalyser.fftSize=256,this.leadGain.connect(this.leadAnalyser),this.leadAnalyser.connect(this.masterGain),this.ghostGain=this.ctx.createGain(),this.ghostAnalyser=this.ctx.createAnalyser(),this.ghostAnalyser.fftSize=256,this.ghostGain.connect(this.ghostAnalyser),this.ghostAnalyser.connect(this.masterGain)}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}playKick(){this.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),e.connect(i),i.connect(this.kickGain),e.start(),e.stop(this.ctx.currentTime+.3)}playHiHat(){this.resume();const e=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;e.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=8e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.05,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(c),c.connect(d),d.connect(this.hihatGain),e.start()}playSnare(){this.resume();const e=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.1,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;e.buffer=s;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=1;const d=this.ctx.createGain();d.gain.setValueAtTime(.1,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),e.connect(c),c.connect(d),d.connect(this.snareGain),e.start()}playGhostHiHat(){this.resume();const e=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;e.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=12e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.02,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(c),c.connect(d),d.connect(this.ghostGain),e.start()}playLead(e,i){this.resume();const s=this.ctx.currentTime,l=[this.ctx.createOscillator(),this.ctx.createOscillator(),this.ctx.createOscillator()],c=this.ctx.createGain(),d=this.ctx.createBiquadFilter();l[0].type="sawtooth",l[1].type="sawtooth",l[2].type="sawtooth",l[0].frequency.setValueAtTime(e,s),l[1].frequency.setValueAtTime(e*1.005,s),l[2].frequency.setValueAtTime(e*.995,s),d.type="lowpass";const h=e*3+i*50;d.frequency.setValueAtTime(h,s),d.frequency.exponentialRampToValueAtTime(e*.5,s+.35),d.Q.value=12,c.gain.setValueAtTime(.06,s),c.gain.exponentialRampToValueAtTime(.001,s+.4),l.forEach(m=>{m.connect(d),m.start(s),m.stop(s+.4)}),d.connect(c),c.connect(this.leadGain)}playBass(e,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter();l.type="sawtooth",c.type="sine",l.frequency.setValueAtTime(e,s),c.frequency.setValueAtTime(e*.5,s),h.type="lowpass";const m=200+Math.min(i,30)*150;h.frequency.setValueAtTime(m,s),h.frequency.exponentialRampToValueAtTime(100,s+.15),h.Q.value=20,d.gain.setValueAtTime(.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.15),l.connect(h),c.connect(h),h.connect(d),d.connect(this.bassGain),l.start(s),c.start(s),l.stop(s+.15),c.stop(s+.15)}playSuccess(e,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter(),p=(i?440:880)+e%8*110;l.type="sawtooth",c.type="square",l.frequency.setValueAtTime(p,s),c.frequency.setValueAtTime(p*2.01,s),h.type="highpass",h.frequency.setValueAtTime(2e3,s),h.frequency.exponentialRampToValueAtTime(8e3,s+.1),d.gain.setValueAtTime(i?.03:.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.2),l.connect(h),c.connect(h),h.connect(d),d.connect(this.masterGain),l.start(s),c.start(s),l.stop(s+.2),c.stop(s+.2)}playError(){this.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(30,this.ctx.currentTime+.2),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.2),e.connect(i),i.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.2)}getAnalysers(){return{master:this.masterAnalyser,kick:this.kickAnalyser,bass:this.bassAnalyser,hihat:this.hihatAnalyser,snare:this.snareAnalyser,lead:this.leadAnalyser,ghost:this.ghostAnalyser}}getEnergy(){if(!this.masterAnalyser)return 0;const e=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(e);let i=0;for(let s=0;s<e.length;s++)i+=e[s];return i/e.length/255}getFrequencyBands(){if(!this.masterAnalyser)return{bass:0,mid:0,high:0};const e=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(e);const i=e.length,s=Math.floor(i*.1),l=Math.floor(i*.5);let c=0,d=0,h=0;for(let m=0;m<s;m++)c+=e[m];for(let m=s;m<l;m++)d+=e[m];for(let m=l;m<i;m++)h+=e[m];return{bass:c/(s||1)/255,mid:d/(l-s||1)/255,high:h/(i-l||1)/255}}}class bA{constructor(e,i){this.intervalId=null,this.step=0,this.comboMultiplier=1,this.audioSystem=e,this.currentStyle=i}setStyle(e){!!this.intervalId&&this.stop(),this.currentStyle=e,this.step=0}setMultiplier(e){this.comboMultiplier=e}start(e){if(this.intervalId)return;const s=60/this.currentStyle.bpm/4;this.intervalId=window.setInterval(()=>{const l=e(),c=this.step%16;if(l>0){const d=l*this.comboMultiplier;this.currentStyle.layers.forEach(h=>{d>=h.minCombo&&(h.maxCombo===void 0||d<=h.maxCombo)&&h.pattern(c)&&h.play(this.audioSystem,c,l)})}this.step++},s*1e3)}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}const jv={es:{basico:["El veloz murciélago hindú comía feliz cardillo y kiwi.","La constancia es la clave del éxito en cualquier disciplina.","Mañana será un gran día para aprender algo nuevo.","Caminar por la playa al atardecer es muy relajante.","La mecanografía veloz requiere práctica diaria y paciencia."],programacion:["const pipeline = (data) => data.map(x => x * 2);","function initApp() { return new Promise(resolve => {}); }","export default class MyComponent extends React.Component {","if (process.env.NODE_ENV === 'production') { console.log('Live'); }","const { name, version } = JSON.parse(fs.readFileSync('package.json'));"],teclas_raras:["¿Viste cómo el pingüino corría hacia el iglú? ¡Increíble!","Los caracteres [ corchetes ] y { llaves } son vitales en JSON.","El símbolo ~ (tilde de la ñ) y ^ (circunflejo) son poco usados.","La ruta C:\\Users\\Admin\\Documents/test.txt usa barras inversas.","¿Sabías que 2^10 es igual a 1024? ¡Es potencia binaria!"],acentuacion:["El capitán pidió un café exprés y un té tras el festín en el jardín.","Álvaro compró un jarrón de mármol azul y un sillón ortopédico.","Sé que él no te dio el libro, pero tú aún no sabes qué pasó allí.","El murciélago sobrevoló el área de forma frenética y enigmática.","Raúl leía la biografía de un héroe que vivía en un país lejano.","¿Cuándo vendrás? Dime si el examen de matemáticas fue difícil o fácil.","El árbol de caoba creció rápido gracias al fértil césped del jardín.","Sólo tú sabes qué es lo que más te conviene para el próximo decenio.","Ojalá el médico apruebe el análisis del líquido cefalorraquídeo hoy.","Escribía con ímpetu mientras el búho observaba desde el ático vacío."]},en:{basico:["The quick brown fox jumps over the lazy dog.","Consistency is more important than intensity.","Every day is a second chance to improve your skills.","Reading books opens your mind to new perspectives.","Success is the sum of small efforts repeated daily."],programacion:["const fetchData = async (url) => await fetch(url).json();","git commit -m 'feat: add localization to phrase system'","while (true) { if (battery < 20) break; }","import { useState, useEffect } from 'react';","array.reduce((acc, curr) => acc + curr, 0);"],teclas_raras:["Wait! Did you see the [bracketed] text in the {curly} braces?","The pipe | symbol is used for redirects in Linux terminals.","Is it true that 5 > 3 and 2 < 4? Let's check logic!","Type 'cd ../../' to go back two directories in the shell.","The #hashtag is used for comments in many config files."],acentuacion:["The résumé of the employé was impeccable and very detailed.","She visited the café to drink a frappé during her vacation.","The façade of the building had a beautiful décor in the façade.","Please cooperate with the naïve protégé during the soirée.","It is a cliché to say that the jalapeño is very spicy."]},fr:{basico:["Portez ce vieux vieux vieux vieux vieux vieux vieux vieux vieux.","La vie est belle quand on prend le temps de l'apprécier.","Apprendre à taper vite demande de la rigueur et du temps.","Le succès est le fruit d'un travail acharné et constant.","Chaque jour est une nouvelle opportunité de grandir."],programacion:["let reponse = await prompt('Voulez-vous continuer ?');","const config = { langue: 'fr', theme: 'sombre' };","console.error(`Erreur fatale : ${error.message}`);","for (let i = 0; i < liste.length; i++) { doSomething(); }","document.querySelector('.app').addEventListener('click', e => {});"],teclas_raras:["L'élève a-t-il reçu ses 100€ pour son déjeuner ?","Regardez l'icône { } et [ ] dans l'éditeur de code.","Le carácter ~ est rare, tout comme le symbole | (pipe).","Utilisez-vous souvent el guion bajo _ o el guion medio - ?","Attention aux caractères spéciaux comme ^ y ¨ !"],acentuacion:["L'événement théâtral a été un succès grâce à l'héroïne.","Où est le garçon qui a mangé le gâteau à la crème fraîche ?","C'est l'été, le maïs mûrit sous le château de la forêt.","L'étudiant a étudié l'algèbre et la géométrie à l'école.","Il paraît que le poète déteste les huîtres et le thé glacé."]}},MA=(r,e,i=5)=>{var m;let s="basico";const l=e.toLowerCase();(l.includes("raras")||l.includes("especial"))&&(s="teclas_raras"),(l.includes("progra")||l.includes("código"))&&(s="programacion"),(l.includes("acent")||l.includes("ácent"))&&(s="acentuacion");const d=[...((m=jv[r])==null?void 0:m[s])||jv.es.basico].sort(()=>Math.random()-.5),h=[];for(;h.length<i;)h.push(...d);return h.slice(0,i)},EA={type:"circle",bird:{tubeRadius:.08,segments:120,radialSegments:8,flapIntensity:1,deformIntensity:1},outerSphere:{size:7,segments:4,opacity:.6,deformationFactor:1.2,spikeFactor:1,isWireframe:!0,shape:"icosahedron",morphSpeed:1.5,noiseScale:1},innerSphere:{size:3.5,segments:2,opacity:.3,deformationFactor:1.2,spikeFactor:.8,isWireframe:!0,shape:"icosahedron",morphSpeed:1.5,noiseScale:1},globalRotationSpeed:1},ds=[{id:"alpine",name:"Alpino",r:162,g:173,b:145,scheme:"dark"},{id:"ocean",name:"Océano",r:90,g:150,b:220,scheme:"dark"},{id:"crimson",name:"Carmesí",r:220,g:80,b:80,scheme:"dark"},{id:"amethyst",name:"Amatista",r:160,g:100,b:200,scheme:"dark"},{id:"amber",name:"Ámbar",r:240,g:180,b:60,scheme:"dark"},{id:"frost",name:"Frosty (Light)",r:100,g:149,b:237,scheme:"light"},{id:"emerald",name:"Esmeralda",r:16,g:185,b:129,scheme:"dark"}];class TA{constructor(){this.currentTheme=ds[0]}getCurrentTheme(){return this.currentTheme}setTheme(e){const i=ds.find(s=>s.id===e);i&&(this.currentTheme=i,this.applyThemeToDocument(i))}applyThemeToDocument(e,i={}){const s=document.documentElement;s.style.setProperty("--theme-r",e.r.toString()),s.style.setProperty("--theme-g",e.g.toString()),s.style.setProperty("--theme-b",e.b.toString()),s.style.setProperty("--accent-primary",`rgb(${e.r}, ${e.g}, ${e.b})`),s.style.setProperty("--accent-glow",`rgba(${e.r}, ${e.g}, ${e.b}, 0.4)`);const l=i.forceScheme||e.scheme||"dark";if(s.setAttribute("data-color-scheme",l),l==="light")s.style.setProperty("--bg-app","#f0f2f5"),s.style.setProperty("--text-primary","#1a1a1b"),s.style.setProperty("--text-secondary","#4b5563"),s.style.setProperty("--bg-glass","rgba(255, 255, 255, 0.7)"),s.style.setProperty("--bg-glass-strong","rgba(255, 255, 255, 0.85)"),s.style.setProperty("--border-glass","rgba(0, 0, 0, 0.1)"),s.style.setProperty("--bg-tint","transparent");else{if(i.isPureBlack)s.style.setProperty("--bg-app","#020202"),s.style.setProperty("--bg-tint","transparent");else{const c=Math.floor(e.r*.12),d=Math.floor(e.g*.12),h=Math.floor(e.b*.12);s.style.setProperty("--bg-app",`rgb(${c}, ${d}, ${h})`);const m=i.forceScheme?.15:e.bgAlpha??.35;s.style.setProperty("--bg-tint",`rgba(${e.r}, ${e.g}, ${e.b}, ${m})`)}s.style.setProperty("--text-primary","#ffffff"),s.style.setProperty("--text-secondary","#9ca3af"),s.style.setProperty("--bg-glass","rgba(0, 0, 0, 0.4)"),s.style.setProperty("--bg-glass-strong","rgba(0, 0, 0, 0.7)"),s.style.setProperty("--border-glass","rgba(255, 255, 255, 0.1)")}}getAllThemes(){return ds}}class AA{processInput(e,i,s,l,c,d){const h=e.length-1;if(h<0)return{stats:{wpm:0,accuracy:100,mistakes:0,totalChars:0},combo:0,isCorrect:!0,isPhraseComplete:!1};const m=e[h],p=i[h];let v=m===p,g=l,_=c;return!v&&!d?(g++,_=0):v?(m===" "||h===i.length-1)&&_++:d&&(v=!0),{stats:this.calculateStats(s||Date.now(),e,i,g),combo:_,isCorrect:v,isPhraseComplete:e===i}}calculateStats(e,i,s,l){const c=(Date.now()-e)/6e4,d=i.length;let h=0;for(let v=0;v<i.length;v++)i[v]===s[v]&&h++;const m=Math.round(h/5/(c||.001))||0,p=d>0?Math.round((d-l)/d*100):100;return{wpm:m,accuracy:p,mistakes:l,totalChars:d}}calculateScore(e,i){return Math.floor(e*(i/100)*10)}isCharCorrect(e,i,s){return e===s[i]}}class wA{async getPhrases(e,i){return[]}getZenPhrases(){return jy}}class CA{constructor(){this.SCORE_KEY="typ_total_score"}getScore(){return Number(localStorage.getItem(this.SCORE_KEY)||0)}saveScore(e){localStorage.setItem(this.SCORE_KEY,e.toString())}}const RA=(r,e,i,s)=>{const[l,c]=fe.useState([]),[d,h]=fe.useState(0),[m,p]=fe.useState(""),[v,g]=fe.useState({wpm:0,accuracy:100,mistakes:0,totalChars:0}),[_,S]=fe.useState(null),[E,A]=fe.useState(!1),[b,x]=fe.useState(0),[N,L]=fe.useState(()=>e.getScore()),[D,U]=fe.useState(!1),[F,P]=fe.useState(null),q=fe.useCallback((X,J)=>{const ne=Number(localStorage.getItem(`typ_progress_${X}`)||0);J>ne&&localStorage.setItem(`typ_progress_${X}`,Math.round(J).toString())},[]),T=l[d]||"",R=fe.useCallback(()=>{p(""),S(null),A(!1),x(0),g({wpm:0,accuracy:100,mistakes:0,totalChars:0})},[]),H=fe.useCallback(X=>{var G,$,ve;if(E)return;let J=_;!J&&X.length>0&&(J=Date.now(),S(J));const ne=m.length;if(X.length<ne){p(X);return}const I=i.processInput(X,T,J,v.mistakes,b,D);if(p(X),g(I.stats),x(I.combo),I.isCorrect){const xe=X[X.length-1];(G=s==null?void 0:s.onCorrectChar)==null||G.call(s,xe,I.combo)}else($=s==null?void 0:s.onErrorChar)==null||$.call(s,X[X.length-1]);if(I.isPhraseComplete)if((ve=s==null?void 0:s.onPhraseComplete)==null||ve.call(s,T),D){const xe=i.calculateScore(I.stats.wpm,I.stats.accuracy),z=N+xe;L(z),e.saveScore(z);const Q=r.getZenPhrases(),de=Q[Math.floor(Math.random()*Q.length)];setTimeout(()=>{c([de]),h(0),p("")},50)}else if(d<l.length-1){if(F){const xe=(d+1)/l.length*100;q(F,xe)}setTimeout(()=>{h(xe=>xe+1),p("")},50)}else F&&q(F,100),A(!0)},[E,_,m.length,T,v.mistakes,b,D,i,s,d,l.length,N,e,r]);return fe.useEffect(()=>{if(_&&!E&&m.length>0){const X=setInterval(()=>{const J=i.calculateStats(_,m,T,v.mistakes);g(ne=>({...ne,wpm:J.wpm,accuracy:J.accuracy}))},1e3);return()=>clearInterval(X)}},[_,E,m,T,v.mistakes,i]),{phrases:l,setPhrases:c,phraseIndex:d,setPhraseIndex:h,currentPhrase:T,typedText:m,setTypedText:p,processNewValue:H,stats:v,setStats:g,combo:b,setCombo:x,score:N,setScore:L,isFinished:E,setIsFinished:A,startTime:_,setStartTime:S,isInfiniteMode:D,setIsInfiniteMode:U,currentLevelId:F,setCurrentLevelId:P,restart:R}},Rx=Da.memo(({inputRef:r,onInput:e,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c})=>O.jsx("textarea",{ref:r,onInput:e,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c,className:"absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[-1] caret-transparent cursor-none resize-none m-0 p-0 border-0 outline-none",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",tabIndex:0}));Rx.displayName="HiddenInput";const DA=()=>O.jsx("style",{children:`
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
  `}),Xv=new TA,NA=()=>{const[r,e]=fe.useState(ds.find(ye=>ye.id==="emerald")||ds[0]),[i,s]=fe.useState(!1),[l,c]=fe.useState(null),[d,h]=fe.useState("es"),[m,p]=fe.useState("Básico"),[v,g]=fe.useState([]),_=fe.useRef(""),S=fe.useMemo(()=>new wA,[]),E=fe.useMemo(()=>new CA,[]),A=fe.useMemo(()=>new AA,[]),{phrases:b,setPhrases:x,phraseIndex:N,setPhraseIndex:L,currentPhrase:D,typedText:U,setTypedText:F,processNewValue:P,stats:q,combo:T,setCombo:R,score:H,isFinished:X,setIsFinished:J,startTime:ne,setStartTime:re,setCurrentLevelId:I,restart:G}=RA(S,E,A,{onCorrectChar:(ye,Ce)=>{var Je;if(Ge&&ye===" "&&((Je=Tn.current)==null||Je.playSuccess(Ce,!1)),ye===" "){const Ye=_.current.trim().split(/\s+/),xt=Ye[Ye.length-1];xt&&g(An=>[...An,xt].slice(-100))}},onErrorChar:()=>{var ye;Ge&&((ye=Tn.current)==null||ye.playError()),de(!0)},onPhraseComplete:ye=>{de(!1),on.current&&(on.current.value="");const Ce=ye.trim().split(/\s+/),Je=Ce[Ce.length-1];Je&&g(Ye=>Ye[Ye.length-1]===Je?Ye:[...Ye,Je].slice(-100))}});fe.useEffect(()=>{_.current=U},[U]);const[$,ve]=fe.useState(""),[xe,z]=fe.useState(!1),[Q,de]=fe.useState(!1),[me,Ue]=fe.useState(!0),[Z,ie]=fe.useState(1),[Me,be]=fe.useState(!1),[Pe,Ze]=fe.useState(!1),[ut,st]=fe.useState("mac");fe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",Z.toString()),Xv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,Z,i,l]),fe.useEffect(()=>{const ye=()=>{const Je=window.innerHeight;if(Je<980){const Ye=Math.max(.7,Je/980);ie(Ye)}else ie(1)};return ye(),window.addEventListener("resize",ye),()=>window.removeEventListener("resize",ye)},[]);const[at,mt]=fe.useState("config"),[ot,It]=fe.useState(!1),[k,Mt]=fe.useState(!0),[ct,dt]=fe.useState(Jo),[Ge,B]=fe.useState(!0),[M,Y]=fe.useState(1),[ge,_e]=fe.useState(!1),[le,Ke]=fe.useState({bass:0,mid:0,high:0}),[Be,ke]=fe.useState(!1),[$e,Ne]=fe.useState(!1),Re=fe.useRef(null),[ze,Fe]=fe.useState(!1),[Te,Xe]=fe.useState({x:0,y:0,z:20}),[j,Le]=fe.useState({x:0,y:0,z:0}),[Oe,je]=fe.useState(180),[De,Ae]=fe.useState({...EA,type:"circle"}),[Ie,pt]=fe.useState(!1),[Et,Rt]=fe.useState(()=>{if(typeof window<"u"){const ye=localStorage.getItem("ovetyp-floorHeight");if(ye)return parseFloat(ye)}return .62}),[En,qn]=fe.useState([]),[js,Xs]=fe.useState(!1),on=fe.useRef(null),ta=fe.useRef(null),na=fe.useRef(!1),ia=fe.useRef(""),Tn=fe.useRef(null),ln=fe.useRef(null),en=fe.useRef(T),[nn,$n]=fe.useState(!1),[Oa,Ti]=fe.useState(30),[Ai,Ws]=fe.useState(30),[fi,Ys]=fe.useState(!1),[Ii,Bi]=fe.useState(""),[Hi,wi]=fe.useState(0),w=fe.useMemo(()=>{var Ye,xt,An;const ye=((Ye=Hs.find(Zt=>Zt.id==="fase_1"))==null?void 0:Ye.levels)||[],Ce=((xt=Hs.find(Zt=>Zt.id==="fase_2"))==null?void 0:xt.levels)||[],Je=((An=Hs.find(Zt=>Zt.id==="fase_3"))==null?void 0:An.levels)||[];return[...ye,...Ce,...Je]},[]);fe.useEffect(()=>{localStorage.setItem("ovetyp-floorHeight",Et.toString())},[Et]),fe.useEffect(()=>{if($e){ke(!0);const ye=w;if(ye.length===0)return;const Ce=ye[Hi%ye.length];Ce&&(qn(Ce.keys),x(Ce.phrases),Bi(Ce.title.replace(/^Pares: |^\d+\.\s+/g,"")),F(""),ia.current="",L(0),R(Je=>{const Ye=ct.layers.filter(xt=>xt.minCombo<=Je).sort((xt,An)=>An.minCombo-xt.minCombo);if(Ye.length>0){const xt=Ye[0].minCombo-1;return Math.max(0,xt)}return 0}),de(!1),on.current&&(on.current.value=""),setTimeout(()=>{var Je;return(Je=on.current)==null?void 0:Je.focus()},10))}},[$e,Hi,ct]),fe.useEffect(()=>{if(!$e){Re.current&&(clearInterval(Re.current),Re.current=null),Ti(Ai);return}const ye=w;Ti(Ai);const Ce=setInterval(()=>{Ti(Je=>Je<=1?(wi(Ye=>{if(fi){let xt=Math.floor(Math.random()*ye.length);return ye.length>1&&xt===Ye&&(xt=(xt+1)%ye.length),xt}return(Ye+1)%ye.length}),Ai):Je-1)},1e3);return Re.current=Ce,()=>clearInterval(Ce)},[$e,Ai,fi,w]);const K=fe.useCallback(()=>{if(!$e)return;const ye=w;wi(Ce=>fi?Math.floor(Math.random()*ye.length):(Ce+1)%ye.length),Ti(Ai)},[$e,fi,Ai,w]),he=fe.useMemo(()=>U.normalize("NFC"),[U]),ce=fe.useMemo(()=>{const ye=D.split(" "),Ce=U.split(" "),Je=Math.min(Ce.length-1,ye.length-1),Ye=ye[Je]||"",xt=Ce[Ce.length-1]||"";return{word:Ye,userTypedSlice:xt}},[D,U]),te=fe.useMemo(()=>X||me?"":U.length<D.length?D[U.length]:"",[D,U,X,me]),He=fe.useMemo(()=>te&&an[te.toLowerCase()]||null,[te]);fe.useEffect(()=>{en.current=T},[T]),fe.useEffect(()=>{const ye=new SA;return Tn.current=ye,ln.current=new bA(ye,ct),$n(!0),()=>{var Ce;(Ce=ln.current)==null||Ce.stop()}},[]),fe.useEffect(()=>{var ye,Ce;k&&nn?(ye=ln.current)==null||ye.start(()=>en.current):(Ce=ln.current)==null||Ce.stop()},[k,nn]),fe.useEffect(()=>{ln.current&&(ln.current.setStyle(ct),ln.current.setMultiplier(M),k&&ln.current.start(()=>en.current))},[ct,k,M]),fe.useEffect(()=>{let ye;const Ce=()=>{Tn.current&&k&&nn?Ke(Tn.current.getFrequencyBands()):Ke({bass:0,mid:0,high:0}),ye=requestAnimationFrame(Ce)};return ye=requestAnimationFrame(Ce),()=>cancelAnimationFrame(ye)},[k,nn]),fe.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",Z.toString()),Xv.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,Z,i,l]),fe.useEffect(()=>{const ye=()=>{!Me&&!Pe&&!me&&!X&&document.activeElement!==ta.current&&setTimeout(()=>{var Ce;return(Ce=on.current)==null?void 0:Ce.focus()},10)};return window.addEventListener("click",ye),window.addEventListener("focus",ye),()=>{window.removeEventListener("click",ye),window.removeEventListener("focus",ye)}},[Me,Pe,me,X]),fe.useEffect(()=>{(async()=>{Ue(!0),ke(!1);const Ce=MA(d,m,10);x(Ce.map(Je=>Je.normalize("NFC"))),F(""),ia.current="",L(0),R(0),de(!1),on.current&&(on.current.value=""),Ue(!1),m==="Básico"&&I(null)})()},[d,m]),fe.useRef(!1),fe.useEffect(()=>{let ye;return()=>clearInterval(ye)},[$e]),fe.useEffect(()=>{},[N,b.length,d,m,me,Be]);const We=fe.useCallback(ye=>{const Ce=ye.currentTarget.value.normalize("NFC");P(Ce)},[P]),Ve=fe.useCallback(()=>{na.current=!0,Fe(!0)},[]),Qe=fe.useCallback(ye=>{na.current=!1,Fe(!1);const Ce=ye.currentTarget.value.normalize("NFC");F(Ce)},[]),nt=fe.useCallback(ye=>{var Ce;ve(ye.key),setTimeout(()=>ve(""),150),(Ce=Tn.current)==null||Ce.resume()},[]),rt=ye=>`w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${ye?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]":"bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]"}`,et=fe.useCallback((ye,Ce)=>{!ye||ye.length===0||(ke(!0),Ce&&I(Ce),x(ye.map(Je=>Je.normalize("NFC"))),F(""),ia.current="",L(0),R(0),g([]),s(!0),de(!1),on.current&&(on.current.value=""),re(null),J(!1),Ue(!1),z(!0),setTimeout(()=>{var Je;return(Je=on.current)==null?void 0:Je.focus()},10))},[I,x,F,L,R,re,J,Ue]),ft=fe.useCallback(()=>{G(),L(0),de(!1),g([]),on.current&&(on.current.value="")},[G,L]),Ut=fe.useCallback(()=>{if(!b||b.length===0)return;const ye=b.join(" ").trim().split(/\s+/).filter(Boolean);g(ye)},[b]),Qt=fe.useCallback(()=>{z(!1),s(!1),g([])},[]),Bt=fe.useCallback(ye=>{ye&&ye.stopPropagation();const Ce=["icosahedron","sphere","torus","box","cone","octahedron","tetrahedron","dodecahedron","cylinder"];Ae(Je=>{const Ye=Je.outerSphere.shape,xt=Ce.indexOf(Ye),An=(xt===-1?0:xt+1)%Ce.length,Zt=Ce[An];return{...Je,outerSphere:{...Je.outerSphere,shape:Zt},innerSphere:{...Je.innerSphere,shape:Zt}}})},[]);return O.jsxs("div",{className:`min-h-screen relative flex flex-col items-center overflow-y-auto overflow-x-hidden light-off-transition ${i?"light-off-anim":"light-on-anim"}`,style:{width:"100%",backgroundColor:i?"#000000":"transparent",transition:"background-color 0.6s ease-in-out"},children:[O.jsx(DA,{}),O.jsx(Rx,{inputRef:on,onInput:We,onCompositionStart:Ve,onCompositionEnd:Qe,onKeyDown:nt,onBlur:()=>Fe(!1)}),O.jsx("input",{type:"color",ref:ta,onChange:ye=>{const Ce=ye.target.value,Je=parseInt(Ce.slice(1,3),16),Ye=parseInt(Ce.slice(3,5),16),xt=parseInt(Ce.slice(5,7),16);e({id:"custom",name:"Custom",r:Je,g:Ye,b:xt})},className:"fixed opacity-0 pointer-events-none -z-10"}),O.jsx("button",{onClick:()=>be(!0),className:`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${Me?"translate-x-[-100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"})}),O.jsx("button",{onClick:()=>Ze(!0),className:`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${Pe?"translate-x-[100%] opacity-0":"opacity-100"}`,children:O.jsx("i",{className:"fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"})}),O.jsx("div",{className:`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${Me||Pe?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>{be(!1),Ze(!1)}}),O.jsx(nS,{isOpen:Me,onClose:()=>be(!1),language:d,onLanguageChange:h,currentMusicStyle:ct,onMusicStyleChange:dt,TECHNO_STYLE:Jo,AMBIENT_STYLE:Gd,ACID_HOUSE_STYLE:Vd,getBtnClass:rt,themes:ds,currentTheme:r,onThemeChange:e}),O.jsx(iS,{isOpen:Pe,onClose:()=>Ze(!1),targetKeyData:He,onSelectLevel:qn,onSelectPhrases:et,themes:ds,currentTheme:r,onThemeChange:e,focus:m,onFocusChange:p,getBtnClass:rt,currentMusicStyle:ct,onMusicStyleChange:dt,TECHNO_STYLE:Jo,AMBIENT_STYLE:Gd,ACID_HOUSE_STYLE:Vd,isInfiniteMode:!1,onToggleZenMode:()=>{},score:H}),O.jsx("div",{className:"w-full h-full flex flex-col items-center",style:{transform:`scale(${Z})`,transformOrigin:"top center",flexShrink:0},children:O.jsx("main",{className:"flex-grow flex flex-col items-center justify-start py-8 xl:py-12 px-4 relative transition-all duration-500",style:{opacity:Me||Pe?.3:1},children:O.jsxs("div",{className:"flex flex-row items-stretch justify-center gap-4 xl:gap-12 relative w-full px-4 overflow-visible",children:[O.jsxs("div",{className:"hidden xl:flex w-[450px] shrink-0 z-0 overflow-visible relative",children:[O.jsx("div",{className:"absolute inset-0 w-full h-full z-[60] pointer-events-none opacity-80",children:xe&&O.jsx(qv,{color:`rgb(${r.r}, ${r.g}, ${r.b})`,bands:le,side:"left",lightingEnabled:ge,onClick:Bt,shape:De.outerSphere.shape,floorHeight:Et})}),O.jsx(Y0,{text:v.join("  "),color:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:le,combo:T,repulsionCenter:{x:-1,y:-1},repulsionEnergy:.35,repulsionShape:De.outerSphere.shape,repulsionRotation:performance.now()*.002,floorHeight:Et})]}),O.jsxs("div",{className:"w-full max-w-5xl flex flex-col items-center gap-4 relative",children:[!me&&!X&&O.jsx("div",{className:"w-full relative group flex justify-center",children:O.jsxs("div",{className:"w-full theme-glass backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:[O.jsx(Xy,{currentPhrase:D,normalizedTypedText:he,currentWordInfo:ce,isComposingState:ze,palette:r.id,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:le,birdRotation:Te,birdPos3D:j,birdSize:Oe,visualsConfig:De,combo:T,comboMultiplier:M,isMusicLightingEnabled:ge,PALETTE_COLORS:{},isCircuitMode:$e,circuitTimer:Oa,circuitTitle:Ii,onCircuitCycle:K,onDimensionalMenu:ye=>{pt(!Ie)},onCycleShapes:Bt,isLevelActive:xe,onSelectLevel:ye=>et(ye.phrases,ye.id),themeScheme:l==="light"||r.scheme==="light"&&!l?"light":r.scheme,currentMusicStyle:ct,onMusicStyleChange:dt,currentLevelProgress:D.length>0?Math.min(100,Math.round(he.length/D.length*100)):0,currentLevelScore:H,currentLevelAccuracy:q.accuracy}),O.jsx(tS,{keyboardType:ut,activeKey:$,targetChar:te,showZones:ot,isMusicLightingEnabled:ge,frequencyBands:le,stats:q,isZenMode:!1,score:H,onRestart:ft,onZenToggle:()=>{},audioReady:nn,audioSystem:Tn.current,currentMusicStyle:ct,startTime:ne,isFinished:X,combo:T,comboMultiplier:M,onDimensionalMenu:ye=>{pt(!Ie)},hexToRgba:(ye,Ce)=>`rgba(${r.r}, ${r.g}, ${r.b}, ${Ce})`,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,highlightedKeys:En,isWaveActive:js,isLevelActive:xe,onGoHome:Qt,onDebugFillCurtain:Ut})]})}),O.jsx("div",{className:`fixed theme-glass backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${Ie?"opacity-100 scale-y-100 pointer-events-auto":"opacity-0 scale-y-95 pointer-events-none"}`,style:{right:"4.5rem",bottom:"6.5rem",width:"180px",transformOrigin:"top right"},children:O.jsxs("div",{className:"flex flex-col divide-y divide-[var(--border-glass)] max-h-[400px] overflow-y-auto custom-scrollbar",children:[O.jsxs("div",{className:"p-4 bg-[var(--accent-primary)]/5 border-b border-[var(--border-glass)]",children:[O.jsx("div",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60",children:"Puntos Totales"}),O.jsx("div",{className:"text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums",children:H.toLocaleString()})]}),O.jsxs("div",{className:"p-4",children:[O.jsxs("div",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2",children:[O.jsx("i",{className:"fa fa-paint-brush"}),O.jsx("span",{children:"Personalización"})]}),O.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[ds.map(ye=>O.jsx("button",{onClick:()=>e(ye),className:`w-full aspect-square rounded-full border-2 transition-all duration-300 flex items-center justify-center ${r.id===ye.id?"border-[var(--accent-primary)] ring-2 ring-[var(--accent-glow)]":"border-white/10 hover:border-white/40"}`,style:{backgroundColor:`rgb(${ye.r}, ${ye.g}, ${ye.b})`},title:ye.name,children:r.id===ye.id&&O.jsx("i",{className:"fa fa-check text-[10px] text-white mix-blend-difference"})},ye.id)),O.jsx("button",{onClick:()=>{var ye;return(ye=ta.current)==null?void 0:ye.click()},className:"w-full aspect-square rounded-full border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-all font-bold text-[18px] text-[var(--text-secondary)]",title:"Color Personalizado",children:"+"})]})]}),O.jsxs("div",{className:"px-4 py-3 space-y-3",children:[O.jsxs("div",{onClick:()=>s(!i),className:"flex items-center justify-between cursor-pointer group",children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Negro Puro"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${i?"bg-[var(--accent-primary)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${i?"left-4.5":"left-0.5"}`})})]}),O.jsx("div",{onClick:()=>{const ye=l==="light"||r.scheme==="light"&&l===null;c(ye?"dark":"light")},className:"flex items-center justify-between cursor-pointer group",children:(()=>{const ye=l==="light"||r.scheme==="light"&&!l;return O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Día"}),O.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${ye?"bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]":"bg-white/10"}`,children:O.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${ye?"left-4.5":"left-0.5"}`})})]})})()})]}),O.jsxs("button",{onClick:()=>{B(!Ge)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${Ge?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-keyboard-o w-4"}),O.jsx("span",{children:"Sonido"})]}),O.jsxs("button",{onClick:()=>{Mt(!k)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${k?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-music w-4"}),O.jsx("span",{children:"Música"})]}),O.jsxs("button",{onClick:()=>{_e(!ge)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${ge?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-lightbulb-o w-4"}),O.jsx("span",{children:"Luces"})]}),O.jsxs("button",{onClick:()=>{It(!ot)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${ot?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[O.jsx("i",{className:"fa fa-hand-paper-o w-4"}),O.jsx("span",{children:"Guía"})]}),O.jsxs("button",{onClick:Bt,className:"w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20",children:[O.jsx("i",{className:"fa fa-cube w-4"}),O.jsxs("div",{className:"flex flex-col",children:[O.jsx("span",{className:"text-[7px] opacity-60",children:"Geometría"}),O.jsx("span",{className:"leading-none",children:De.outerSphere.shape})]})]}),O.jsxs("div",{className:"w-full px-4 py-3 flex flex-col gap-2 transition-all text-[var(--accent-primary)] bg-black/40 hover:bg-black/60",children:[O.jsxs("div",{className:"flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider opacity-80",children:[O.jsxs("span",{children:[O.jsx("i",{className:"fa fa-level-up w-4"})," Altura Suelo"]}),O.jsxs("span",{children:[Math.round(Et*100),"%"]})]}),O.jsx("input",{type:"range",min:"0.5",max:"1.5",step:"0.01",value:Et,onChange:ye=>Rt(parseFloat(ye.target.value)),className:"w-full h-1 bg-[var(--border-glass)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-primary)]"})]})]})})]}),O.jsxs("div",{className:"hidden xl:flex w-[450px] shrink-0 z-0 overflow-visible relative",children:[O.jsx("div",{className:"absolute inset-0 w-full h-full z-[60] pointer-events-none opacity-80",children:xe&&O.jsx(qv,{color:`rgb(${r.r}, ${r.g}, ${r.b})`,bands:le,side:"right",lightingEnabled:ge,onClick:Bt,shape:De.outerSphere.shape,floorHeight:Et})}),O.jsx(Y0,{className:"relative z-[10]",text:v.join("  "),color:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:le,combo:T,repulsionCenter:{x:-1,y:-1},repulsionEnergy:.35,repulsionShape:De.outerSphere.shape,repulsionRotation:performance.now()*-.002,floorHeight:Et})]})]})})}),O.jsx("footer",{className:"fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none",children:"ALPINE_ECODECOR_PRO // 2025"})]})};console.log("OveTyp_ entry point loaded");class UA extends Da.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,i){console.error("React Error Boundary caught:",e,i)}render(){var e,i;return this.state.hasError?O.jsxs("div",{style:{color:"white",padding:"2rem",fontFamily:"monospace"},children:[O.jsx("h1",{children:"⚠️ App Error"}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#ff6b6b"},children:(e=this.state.error)==null?void 0:e.message}),O.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#aaa",fontSize:"12px"},children:(i=this.state.error)==null?void 0:i.stack})]}):this.props.children}}const np=document.getElementById("root");console.log("Root element found:",!!np);if(!np)throw new Error("Could not find root element to mount to");const LA=qy.createRoot(np);LA.render(O.jsx(Da.StrictMode,{children:O.jsx(UA,{children:O.jsx(NA,{})})}));
