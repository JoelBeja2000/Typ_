(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function B_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ed={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function Cy(){if(T0)return zo;T0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var A0;function Ry(){return A0||(A0=1,ed.exports=Cy()),ed.exports}var B=Ry(),td={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function wy(){if(C0)return ct;C0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function y(z,ne,_e){this.props=z,this.context=ne,this.refs=b,this.updater=_e||E}y.prototype.isReactComponent={},y.prototype.setState=function(z,ne){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ne,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=y.prototype;function N(z,ne,_e){this.props=z,this.context=ne,this.refs=b,this.updater=_e||E}var U=N.prototype=new D;U.constructor=N,A(U,y.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function T(z,ne,_e){var Ce=_e.ref;return{$$typeof:r,type:z,key:ne,ref:Ce!==void 0?Ce:null,props:_e}}function w(z,ne){return T(z.type,ne,z.props)}function X(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function J(z){var ne={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_e){return ne[_e]})}var K=/\/+/g;function ce(z,ne){return typeof z=="object"&&z!==null&&z.key!=null?J(""+z.key):ne.toString(36)}function he(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(ne){z.status==="pending"&&(z.status="fulfilled",z.value=ne)},function(ne){z.status==="pending"&&(z.status="rejected",z.reason=ne)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,ne,_e,Ce,Ie){var $=typeof z;($==="undefined"||$==="boolean")&&(z=null);var ue=!1;if(z===null)ue=!0;else switch($){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(z.$$typeof){case r:case t:ue=!0;break;case _:return ue=z._init,I(ue(z._payload),ne,_e,Ce,Ie)}}if(ue)return Ie=Ie(z),ue=Ce===""?"."+ce(z,0):Ce,L(Ie)?(_e="",ue!=null&&(_e=ue.replace(K,"$&/")+"/"),I(Ie,ne,_e,"",function(ke){return ke})):Ie!=null&&(X(Ie)&&(Ie=w(Ie,_e+(Ie.key==null||z&&z.key===Ie.key?"":(""+Ie.key).replace(K,"$&/")+"/")+ue)),ne.push(Ie)),1;ue=0;var Ue=Ce===""?".":Ce+":";if(L(z))for(var We=0;We<z.length;We++)Ce=z[We],$=Ue+ce(Ce,We),ue+=I(Ce,ne,_e,$,Ie);else if(We=S(z),typeof We=="function")for(z=We.call(z),We=0;!(Ce=z.next()).done;)Ce=Ce.value,$=Ue+ce(Ce,We++),ue+=I(Ce,ne,_e,$,Ie);else if($==="object"){if(typeof z.then=="function")return I(he(z),ne,_e,Ce,Ie);throw ne=String(z),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function k(z,ne,_e){if(z==null)return z;var Ce=[],Ie=0;return I(z,Ce,"","",function($){return ne.call(_e,$,Ie++)}),Ce}function te(z){if(z._status===-1){var ne=z._result;ne=ne(),ne.then(function(_e){(z._status===0||z._status===-1)&&(z._status=1,z._result=_e)},function(_e){(z._status===0||z._status===-1)&&(z._status=2,z._result=_e)}),z._status===-1&&(z._status=0,z._result=ne)}if(z._status===1)return z._result.default;throw z._result}var Me=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ye={map:k,forEach:function(z,ne,_e){k(z,function(){ne.apply(this,arguments)},_e)},count:function(z){var ne=0;return k(z,function(){ne++}),ne},toArray:function(z){return k(z,function(ne){return ne})||[]},only:function(z){if(!X(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ct.Activity=g,ct.Children=ye,ct.Component=y,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},ct.cache=function(z){return function(){return z.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(z,ne,_e){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ce=A({},z.props),Ie=z.key;if(ne!=null)for($ in ne.key!==void 0&&(Ie=""+ne.key),ne)!V.call(ne,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ne.ref===void 0||(Ce[$]=ne[$]);var $=arguments.length-2;if($===1)Ce.children=_e;else if(1<$){for(var ue=Array($),Ue=0;Ue<$;Ue++)ue[Ue]=arguments[Ue+2];Ce.children=ue}return T(z.type,Ie,Ce)},ct.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ct.createElement=function(z,ne,_e){var Ce,Ie={},$=null;if(ne!=null)for(Ce in ne.key!==void 0&&($=""+ne.key),ne)V.call(ne,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ie[Ce]=ne[Ce]);var ue=arguments.length-2;if(ue===1)Ie.children=_e;else if(1<ue){for(var Ue=Array(ue),We=0;We<ue;We++)Ue[We]=arguments[We+2];Ie.children=Ue}if(z&&z.defaultProps)for(Ce in ue=z.defaultProps,ue)Ie[Ce]===void 0&&(Ie[Ce]=ue[Ce]);return T(z,$,Ie)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(z){return{$$typeof:h,render:z}},ct.isValidElement=X,ct.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:te}},ct.memo=function(z,ne){return{$$typeof:p,type:z,compare:ne===void 0?null:ne}},ct.startTransition=function(z){var ne=F.T,_e={};F.T=_e;try{var Ce=z(),Ie=F.S;Ie!==null&&Ie(_e,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(O,Me)}catch($){Me($)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),F.T=ne}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(z){return F.H.use(z)},ct.useActionState=function(z,ne,_e){return F.H.useActionState(z,ne,_e)},ct.useCallback=function(z,ne){return F.H.useCallback(z,ne)},ct.useContext=function(z){return F.H.useContext(z)},ct.useDebugValue=function(){},ct.useDeferredValue=function(z,ne){return F.H.useDeferredValue(z,ne)},ct.useEffect=function(z,ne){return F.H.useEffect(z,ne)},ct.useEffectEvent=function(z){return F.H.useEffectEvent(z)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(z,ne,_e){return F.H.useImperativeHandle(z,ne,_e)},ct.useInsertionEffect=function(z,ne){return F.H.useInsertionEffect(z,ne)},ct.useLayoutEffect=function(z,ne){return F.H.useLayoutEffect(z,ne)},ct.useMemo=function(z,ne){return F.H.useMemo(z,ne)},ct.useOptimistic=function(z,ne){return F.H.useOptimistic(z,ne)},ct.useReducer=function(z,ne,_e){return F.H.useReducer(z,ne,_e)},ct.useRef=function(z){return F.H.useRef(z)},ct.useState=function(z){return F.H.useState(z)},ct.useSyncExternalStore=function(z,ne,_e){return F.H.useSyncExternalStore(z,ne,_e)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.2.4",ct}var R0;function Nh(){return R0||(R0=1,td.exports=wy()),td.exports}var be=Nh();const Ca=B_(be);var nd={exports:{}},Io={},id={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function Dy(){return w0||(w0=1,(function(r){function t(I,k){var te=I.length;I.push(k);e:for(;0<te;){var Me=te-1>>>1,ye=I[Me];if(0<l(ye,k))I[Me]=k,I[te]=ye,te=Me;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var k=I[0],te=I.pop();if(te!==k){I[0]=te;e:for(var Me=0,ye=I.length,z=ye>>>1;Me<z;){var ne=2*(Me+1)-1,_e=I[ne],Ce=ne+1,Ie=I[Ce];if(0>l(_e,te))Ce<ye&&0>l(Ie,_e)?(I[Me]=Ie,I[Ce]=te,Me=Ce):(I[Me]=_e,I[ne]=te,Me=ne);else if(Ce<ye&&0>l(Ie,te))I[Me]=Ie,I[Ce]=te,Me=Ce;else break e}}return k}function l(I,k){var te=I.sortIndex-k.sortIndex;return te!==0?te:I.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,x=3,S=!1,E=!1,A=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=I)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function L(I){if(A=!1,U(I),!E)if(i(m)!==null)E=!0,O||(O=!0,J());else{var k=i(p);k!==null&&he(L,k.startTime-I)}}var O=!1,F=-1,V=5,T=-1;function w(){return b?!0:!(r.unstable_now()-T<V)}function X(){if(b=!1,O){var I=r.unstable_now();T=I;var k=!0;try{e:{E=!1,A&&(A=!1,D(F),F=-1),S=!0;var te=x;try{t:{for(U(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,x=g.priorityLevel;var ye=Me(g.expirationTime<=I);if(I=r.unstable_now(),typeof ye=="function"){g.callback=ye,U(I),k=!0;break t}g===i(m)&&s(m),U(I)}else s(m);g=i(m)}if(g!==null)k=!0;else{var z=i(p);z!==null&&he(L,z.startTime-I),k=!1}}break e}finally{g=null,x=te,S=!1}k=void 0}}finally{k?J():O=!1}}}var J;if(typeof N=="function")J=function(){N(X)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ce=K.port2;K.port1.onmessage=X,J=function(){ce.postMessage(null)}}else J=function(){y(X,0)};function he(I,k){F=y(function(){I(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var te=x;x=k;try{return I()}finally{x=te}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var te=x;x=I;try{return k()}finally{x=te}},r.unstable_scheduleCallback=function(I,k,te){var Me=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Me+te:Me):te=Me,I){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,I={id:_++,callback:k,priorityLevel:I,startTime:te,expirationTime:ye,sortIndex:-1},te>Me?(I.sortIndex=te,t(p,I),i(m)===null&&I===i(p)&&(A?(D(F),F=-1):A=!0,he(L,te-Me))):(I.sortIndex=ye,t(m,I),E||S||(E=!0,O||(O=!0,J()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var k=x;return function(){var te=x;x=k;try{return I.apply(this,arguments)}finally{x=te}}}})(ad)),ad}var D0;function Ny(){return D0||(D0=1,id.exports=Dy()),id.exports}var sd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Uy(){if(N0)return Ln;N0=1;var r=Nh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Ln.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var U0;function Ly(){if(U0)return sd.exports;U0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),sd.exports=Uy(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Oy(){if(L0)return Io;L0=1;var r=Ny(),t=Nh(),i=Ly();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case O:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var he=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Me=[],ye=-1;function z(e){return{current:e}}function ne(e){0>ye||(e.current=Me[ye],Me[ye]=null,ye--)}function _e(e,n){ye++,Me[ye]=e.current,e.current=n}var Ce=z(null),Ie=z(null),$=z(null),ue=z(null);function Ue(e,n){switch(_e($,n),_e(Ie,e),_e(Ce,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yg(n),e=Zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ce),_e(Ce,e)}function We(){ne(Ce),ne(Ie),ne($)}function ke(e){e.memoizedState!==null&&_e(ue,e);var n=Ce.current,a=Zg(n,e.type);n!==a&&(_e(Ie,e),_e(Ce,a))}function ut(e){Ie.current===e&&(ne(Ce),ne(Ie)),ue.current===e&&(ne(ue),Lo._currentValue=te)}var ht,st;function pt(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+st}var mt=!1;function at(e,n){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var se=le}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(le){se=le}e.call(Se.prototype)}}else{try{throw Error()}catch(le){se=le}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var H=v.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var me=`
`+H[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pt(a):""}function wt(e,n){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return pt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=wt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bt=Object.prototype.hasOwnProperty,gt=r.unstable_scheduleCallback,ft=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,P=r.unstable_requestPaint,M=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,Xe=r.log,it=r.unstable_setDisableYieldValue,Te=null,Re=null;function Be(e){if(typeof Xe=="function"&&it(e),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,e)}catch{}}var He=Math.clz32?Math.clz32:j,Le=Math.log,dt=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Le(e)/dt|0)|0}var Pe=256,we=262144,Ge=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ae(o):(v&=R,v!==0?u=Ae(v):a||(a=R&~e,a!==0&&(u=Ae(a))))):(R=o&~f,R!==0?u=Ae(R):v!==0?u=Ae(v):a||(a=o&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function Dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jt(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ie=e.hiddenUpdates;for(a=v&~a;0<a;){var me=31-He(a),Se=1<<me;R[me]=0,H[me]=-1;var se=ie[me];if(se!==null)for(ie[me]=null,me=0;me<se.length;me++){var le=se[me];le!==null&&(le.lane&=-536870913)}a&=~Se}o!==0&&Na(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Na(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-He(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ua(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-He(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Pi(e,n){var a=n&-n;return a=(a&42)!==0?1:Vn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Vn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qi(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:v0(e.type))}function kn(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var Xn=Math.random().toString(36).slice(2),tn="__reactFiber$"+Xn,nn="__reactProps$"+Xn,xn="__reactContainer$"+Xn,hs="__reactEvents$"+Xn,Mi="__reactListeners$"+Xn,Yr="__reactHandles$"+Xn,ps="__reactResources$"+Xn,Ji="__reactMarker$"+Xn;function La(e){delete e[tn],delete e[nn],delete e[hs],delete e[Mi],delete e[Yr]}function Ei(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xn]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=n0(e);e!==null;){if(a=e[tn])return a;e=n0(e)}return n}e=a,a=e.parentNode}return null}function qn(e){if(e=e[tn]||e[xn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $i(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Fi(e){var n=e[ps];return n||(n=e[ps]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[Ji]=!0}var Y=new Set,oe={};function ae(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(oe[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qe={},ze={};function je(e){return bt.call(ze,e)?!0:bt.call(qe,e)?!1:Oe.test(e)?ze[e]=!0:(qe[e]=!0,!1)}function Ke(e,n,a){if(je(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _t(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function It(e){if(!e._valueTracker){var n=tt(e)?"checked":"value";e._valueTracker=_t(e,n,""+e[n])}}function Tt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=tt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function ot(e){return e.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Fe(n)):e.value!==""+Fe(n)&&(e.value=""+Fe(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?En(e,v,Fe(n)):a!=null?En(e,v,Fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Fe(R):e.removeAttribute("name")}function ea(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){It(e);return}a=a!=null?""+Fe(a):"",n=n!=null?""+Fe(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),It(e)}function En(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Vt(e,n,a){if(n!=null&&(n=""+Fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Fe(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(he(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),It(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Cn(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return Ev.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Ws=null;function Wh(e){var n=qn(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[nn]||null;if(!u)throw Error(s(90));Mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Tt(o)}break e;case"textarea":Vt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var Jc=!1;function Yh(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var o=e(n);return o}finally{if(Jc=!1,(js!==null||Ws!==null)&&(jl(),js&&(n=js,e=Ws,Ws=js=null,Wh(n),e)))for(n=0;n<e.length;n++)Wh(e[n])}}function Zr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(na)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{$c=!1}var Oa=null,eu=null,rl=null;function Zh(){if(rl)return rl;var e,n=eu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return rl=u.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Kh(){return!1}function jn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:Kh,this.isPropagationStopped=Kh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=jn(ms),Qr=g({},ms,{view:0,detail:0}),Tv=jn(Qr),tu,nu,Jr,ul=g({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(tu=e.screenX-Jr.screenX,nu=e.screenY-Jr.screenY):nu=tu=0,Jr=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),Qh=jn(ul),Av=g({},ul,{dataTransfer:0}),Cv=jn(Av),Rv=g({},Qr,{relatedTarget:0}),iu=jn(Rv),wv=g({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=jn(wv),Nv=g({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uv=jn(Nv),Lv=g({},ms,{data:0}),Jh=jn(Lv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fv[e])?!!n[e]:!1}function au(){return zv}var Iv=g({},Qr,{key:function(e){if(e.key){var n=Ov[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=jn(Iv),Hv=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=jn(Hv),Gv=g({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Vv=jn(Gv),kv=g({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=jn(kv),qv=g({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=jn(qv),Wv=g({},ms,{newState:0,oldState:0}),Yv=jn(Wv),Zv=[9,13,27,32],su=na&&"CompositionEvent"in window,$r=null;na&&"documentMode"in document&&($r=document.documentMode);var Kv=na&&"TextEvent"in window&&!$r,ep=na&&(!su||$r&&8<$r&&11>=$r),tp=" ",np=!1;function ip(e,n){switch(e){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Qv(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return e=n.data,e===tp&&np?null:e;default:return null}}function Jv(e,n){if(Ys)return e==="compositionend"||!su&&ip(e,n)?(e=Zh(),rl=eu=Oa=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$v[e.type]:n==="textarea"}function rp(e,n,a,o){js?Ws?Ws.push(o):Ws=[o]:js=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,to=null;function ex(e){Vg(e,0)}function fl(e){var n=$i(e);if(Tt(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(na){var ru;if(na){var ou="oninput"in document;if(!ou){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),ou=typeof cp.oninput=="function"}ru=ou}else ru=!1;lp=ru&&(!document.documentMode||9<document.documentMode)}function up(){eo&&(eo.detachEvent("onpropertychange",fp),to=eo=null)}function fp(e){if(e.propertyName==="value"&&fl(to)){var n=[];rp(n,to,e,Qc(e)),Yh(ex,n)}}function tx(e,n,a){e==="focusin"?(up(),eo=n,to=a,eo.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(to)}function ix(e,n){if(e==="click")return fl(n)}function ax(e,n){if(e==="input"||e==="change")return fl(n)}function sx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:sx;function no(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bt.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=dp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rx=na&&"documentMode"in document&&11>=document.documentMode,Zs=null,cu=null,io=null,uu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||Zs==null||Zs!==$e(o)||(o=Zs,"selectionStart"in o&&lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=$l(cu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},fu={},_p={};na&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function _s(e){if(fu[e])return fu[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return fu[e]=n[a];return e}var vp=_s("animationend"),xp=_s("animationiteration"),yp=_s("animationstart"),ox=_s("transitionrun"),lx=_s("transitionstart"),cx=_s("transitioncancel"),Sp=_s("transitionend"),bp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Ai(e,n){bp.set(e,n),ae(n,[e])}var dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Qs=0,hu=0;function hl(){for(var e=Qs,n=hu=Qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Mp(a,u,f)}}function pl(e,n,a,o){ui[Qs++]=e,ui[Qs++]=n,ui[Qs++]=a,ui[Qs++]=o,hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,n,a,o){return pl(e,n,a,o),ml(e)}function vs(e,n){return pl(e,null,null,n),ml(e)}function Mp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-He(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<Ao)throw Ao=0,Ef=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new ux(e,n,a,o)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")mu(e)&&(v=1);else if(typeof e=="string")v=my(e,a,Ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case T:return e=ei(31,a,n,u),e.elementType=T,e.lanes=f,e;case A:return xs(a.children,u,f,n);case b:v=8,u|=24;break;case y:return e=ei(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case L:return e=ei(13,a,n,u),e.elementType=L,e.lanes=f,e;case O:return e=ei(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case D:v=9;break e;case U:v=11;break e;case F:v=14;break e;case V:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function xs(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Tp(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function _u(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ap=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var $s=[],er=0,_l=null,ao=0,di=[],hi=0,Pa=null,zi=1,Ii="";function aa(e,n){$s[er++]=ao,$s[er++]=_l,_l=e,ao=n}function Cp(e,n,a){di[hi++]=zi,di[hi++]=Ii,di[hi++]=Pa,Pa=e;var o=zi;e=Ii;var u=32-He(o)-1;o&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,zi=1<<32-He(n)+u|a<<u|o,Ii=f+e}else zi=1<<f|a<<u|o,Ii=e}function vu(e){e.return!==null&&(aa(e,1),Cp(e,1,0))}function xu(e){for(;e===_l;)_l=$s[--er],$s[er]=null,ao=$s[--er],$s[er]=null;for(;e===Pa;)Pa=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null,zi=di[--hi],di[hi]=null}function Rp(e,n){di[hi++]=zi,di[hi++]=Ii,di[hi++]=Pa,zi=n.id,Ii=n.overflow,Pa=e}var Rn=null,Kt=null,Nt=!1,Fa=null,pi=!1,yu=Error(s(519));function za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(fi(n,e)),yu}function wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[tn]=e,n[nn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Et(Ro[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),ea(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||jg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||za(e,!0)}function Dp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function tr(e){if(e!==Rn)return!1;if(!Nt)return Dp(e),Nt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Kt&&za(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=t0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=t0(e)}else n===27?(n=Kt,Qa(e.type)?(e=Xf,Xf=null,Kt=e):Kt=n):Kt=Rn?gi(e.stateNode.nextSibling):null;return!0}function ys(){Kt=Rn=null,Nt=!1}function Su(){var e=Fa;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Fa=null),e}function so(e){Fa===null?Fa=[e]:Fa.push(e)}var bu=z(null),Ss=null,sa=null;function Ia(e,n,a){_e(bu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=bu.current,ne(bu)}function Mu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Mu(f.return,a,e),o||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Mu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function nr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;$n(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===ue.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Eu(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Ss=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Np(Ss,e)}function xl(e,n){return Ss===null&&bs(e),Np(e,n)}function Np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dx=r.unstable_scheduleCallback,hx=r.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new fx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&dx(hx,function(){e.controller.abort()})}var oo=null,Au=0,ir=0,ar=null;function px(e,n){if(oo===null){var a=oo=[];Au=0,ir=Df(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Au++,n.then(Up,Up),n}function Up(){if(--Au===0&&oo!==null){ar!==null&&(ar.status="fulfilled");var e=oo;oo=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Lp=I.S;I.S=function(e,n){gg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(e,n),Lp!==null&&Lp(e,n)};var Ms=z(null);function Cu(){var e=Ms.current;return e!==null?e:Zt.pooledCache}function yl(e,n){n===null?_e(Ms,Ms.current):_e(Ms,n.pool)}function Op(){var e=Cu();return e===null?null:{parent:cn._currentValue,pool:e}}var sr=Error(s(460)),Ru=Error(s(474)),Sl=Error(s(542)),bl={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e}throw Ts=n,sr}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,sr):a}}var Ts=null;function zp(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Ip(e){if(e===sr||e===Sl)throw Error(s(483))}var rr=null,lo=0;function Ml(e){var n=lo;return lo+=1,rr===null&&(rr=[]),Fp(rr,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(Z,q){if(e){var ee=Z.deletions;ee===null?(Z.deletions=[q],Z.flags|=16):ee.push(q)}}function a(Z,q){if(!e)return null;for(;q!==null;)n(Z,q),q=q.sibling;return null}function o(Z){for(var q=new Map;Z!==null;)Z.key!==null?q.set(Z.key,Z):q.set(Z.index,Z),Z=Z.sibling;return q}function u(Z,q){return Z=ia(Z,q),Z.index=0,Z.sibling=null,Z}function f(Z,q,ee){return Z.index=ee,e?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<q?(Z.flags|=67108866,q):ee):(Z.flags|=67108866,q)):(Z.flags|=1048576,q)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,q,ee,ve){return q===null||q.tag!==6?(q=gu(ee,Z.mode,ve),q.return=Z,q):(q=u(q,ee),q.return=Z,q)}function H(Z,q,ee,ve){var et=ee.type;return et===A?me(Z,q,ee.props.children,ve,ee.key):q!==null&&(q.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===V&&Es(et)===q.type)?(q=u(q,ee.props),co(q,ee),q.return=Z,q):(q=gl(ee.type,ee.key,ee.props,null,Z.mode,ve),co(q,ee),q.return=Z,q)}function ie(Z,q,ee,ve){return q===null||q.tag!==4||q.stateNode.containerInfo!==ee.containerInfo||q.stateNode.implementation!==ee.implementation?(q=_u(ee,Z.mode,ve),q.return=Z,q):(q=u(q,ee.children||[]),q.return=Z,q)}function me(Z,q,ee,ve,et){return q===null||q.tag!==7?(q=xs(ee,Z.mode,ve,et),q.return=Z,q):(q=u(q,ee),q.return=Z,q)}function Se(Z,q,ee){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=gu(""+q,Z.mode,ee),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return ee=gl(q.type,q.key,q.props,null,Z.mode,ee),co(ee,q),ee.return=Z,ee;case E:return q=_u(q,Z.mode,ee),q.return=Z,q;case V:return q=Es(q),Se(Z,q,ee)}if(he(q)||J(q))return q=xs(q,Z.mode,ee,null),q.return=Z,q;if(typeof q.then=="function")return Se(Z,Ml(q),ee);if(q.$$typeof===N)return Se(Z,xl(Z,q),ee);El(Z,q)}return null}function se(Z,q,ee,ve){var et=q!==null?q.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(Z,q,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===et?H(Z,q,ee,ve):null;case E:return ee.key===et?ie(Z,q,ee,ve):null;case V:return ee=Es(ee),se(Z,q,ee,ve)}if(he(ee)||J(ee))return et!==null?null:me(Z,q,ee,ve,null);if(typeof ee.then=="function")return se(Z,q,Ml(ee),ve);if(ee.$$typeof===N)return se(Z,q,xl(Z,ee),ve);El(Z,ee)}return null}function le(Z,q,ee,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(ee)||null,R(q,Z,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return Z=Z.get(ve.key===null?ee:ve.key)||null,H(q,Z,ve,et);case E:return Z=Z.get(ve.key===null?ee:ve.key)||null,ie(q,Z,ve,et);case V:return ve=Es(ve),le(Z,q,ee,ve,et)}if(he(ve)||J(ve))return Z=Z.get(ee)||null,me(q,Z,ve,et,null);if(typeof ve.then=="function")return le(Z,q,ee,Ml(ve),et);if(ve.$$typeof===N)return le(Z,q,ee,xl(q,ve),et);El(q,ve)}return null}function Ze(Z,q,ee,ve){for(var et=null,Ot=null,Je=q,xt=q=0,Ct=null;Je!==null&&xt<ee.length;xt++){Je.index>xt?(Ct=Je,Je=null):Ct=Je.sibling;var Pt=se(Z,Je,ee[xt],ve);if(Pt===null){Je===null&&(Je=Ct);break}e&&Je&&Pt.alternate===null&&n(Z,Je),q=f(Pt,q,xt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt,Je=Ct}if(xt===ee.length)return a(Z,Je),Nt&&aa(Z,xt),et;if(Je===null){for(;xt<ee.length;xt++)Je=Se(Z,ee[xt],ve),Je!==null&&(q=f(Je,q,xt),Ot===null?et=Je:Ot.sibling=Je,Ot=Je);return Nt&&aa(Z,xt),et}for(Je=o(Je);xt<ee.length;xt++)Ct=le(Je,Z,xt,ee[xt],ve),Ct!==null&&(e&&Ct.alternate!==null&&Je.delete(Ct.key===null?xt:Ct.key),q=f(Ct,q,xt),Ot===null?et=Ct:Ot.sibling=Ct,Ot=Ct);return e&&Je.forEach(function(ns){return n(Z,ns)}),Nt&&aa(Z,xt),et}function nt(Z,q,ee,ve){if(ee==null)throw Error(s(151));for(var et=null,Ot=null,Je=q,xt=q=0,Ct=null,Pt=ee.next();Je!==null&&!Pt.done;xt++,Pt=ee.next()){Je.index>xt?(Ct=Je,Je=null):Ct=Je.sibling;var ns=se(Z,Je,Pt.value,ve);if(ns===null){Je===null&&(Je=Ct);break}e&&Je&&ns.alternate===null&&n(Z,Je),q=f(ns,q,xt),Ot===null?et=ns:Ot.sibling=ns,Ot=ns,Je=Ct}if(Pt.done)return a(Z,Je),Nt&&aa(Z,xt),et;if(Je===null){for(;!Pt.done;xt++,Pt=ee.next())Pt=Se(Z,Pt.value,ve),Pt!==null&&(q=f(Pt,q,xt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt);return Nt&&aa(Z,xt),et}for(Je=o(Je);!Pt.done;xt++,Pt=ee.next())Pt=le(Je,Z,xt,Pt.value,ve),Pt!==null&&(e&&Pt.alternate!==null&&Je.delete(Pt.key===null?xt:Pt.key),q=f(Pt,q,xt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt);return e&&Je.forEach(function(Ay){return n(Z,Ay)}),Nt&&aa(Z,xt),et}function Yt(Z,q,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===A&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var et=ee.key;q!==null;){if(q.key===et){if(et=ee.type,et===A){if(q.tag===7){a(Z,q.sibling),ve=u(q,ee.props.children),ve.return=Z,Z=ve;break e}}else if(q.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===V&&Es(et)===q.type){a(Z,q.sibling),ve=u(q,ee.props),co(ve,ee),ve.return=Z,Z=ve;break e}a(Z,q);break}else n(Z,q);q=q.sibling}ee.type===A?(ve=xs(ee.props.children,Z.mode,ve,ee.key),ve.return=Z,Z=ve):(ve=gl(ee.type,ee.key,ee.props,null,Z.mode,ve),co(ve,ee),ve.return=Z,Z=ve)}return v(Z);case E:e:{for(et=ee.key;q!==null;){if(q.key===et)if(q.tag===4&&q.stateNode.containerInfo===ee.containerInfo&&q.stateNode.implementation===ee.implementation){a(Z,q.sibling),ve=u(q,ee.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,q);break}else n(Z,q);q=q.sibling}ve=_u(ee,Z.mode,ve),ve.return=Z,Z=ve}return v(Z);case V:return ee=Es(ee),Yt(Z,q,ee,ve)}if(he(ee))return Ze(Z,q,ee,ve);if(J(ee)){if(et=J(ee),typeof et!="function")throw Error(s(150));return ee=et.call(ee),nt(Z,q,ee,ve)}if(typeof ee.then=="function")return Yt(Z,q,Ml(ee),ve);if(ee.$$typeof===N)return Yt(Z,q,xl(Z,ee),ve);El(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,q!==null&&q.tag===6?(a(Z,q.sibling),ve=u(q,ee),ve.return=Z,Z=ve):(a(Z,q),ve=gu(ee,Z.mode,ve),ve.return=Z,Z=ve),v(Z)):a(Z,q)}return function(Z,q,ee,ve){try{lo=0;var et=Yt(Z,q,ee,ve);return rr=null,et}catch(Je){if(Je===sr||Je===Sl)throw Je;var Ot=ei(29,Je,null,Z.mode);return Ot.lanes=ve,Ot.return=Z,Ot}finally{}}}var As=Bp(!0),Hp=Bp(!1),Ba=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Mp(e,null,a),n}return pl(e,o,n,a),ml(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ua(e,a)}}function Nu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uu=!1;function fo(){if(Uu){var e=ar;if(e!==null)throw e}}function ho(e,n,a,o){Uu=!1;var u=e.updateQueue;Ba=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,v===null?f=ie:v.next=ie,v=H;var me=e.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==v&&(R===null?me.firstBaseUpdate=ie:R.next=ie,me.lastBaseUpdate=H))}if(f!==null){var Se=u.baseState;v=0,me=ie=H=null,R=f;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(At&se)===se:(o&se)===se){se!==0&&se===ir&&(Uu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=e,nt=R;se=n;var Yt=a;switch(nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Se=Ze.call(Yt,Se,se);break e}Se=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,se=typeof Ze=="function"?Ze.call(Yt,Se,se):Ze,se==null)break e;Se=g({},Se,se);break e;case 2:Ba=!0}}se=R.callback,se!==null&&(e.flags|=64,le&&(e.flags|=8192),le=u.callbacks,le===null?u.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ie=me=le,H=Se):me=me.next=le,v|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);me===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),ja|=v,e.lanes=v,e.memoizedState=Se}}function Gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var or=z(null),Tl=z(0);function kp(e,n){e=ma,_e(Tl,e),_e(or,n),ma=e|n.baseLanes}function Lu(){_e(Tl,ma),_e(or,or.current)}function Ou(){ma=Tl.current,ne(or),ne(Tl)}var ti=z(null),mi=null;function Va(e){var n=e.alternate;_e(rn,rn.current&1),_e(ti,e),mi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(mi=e)}function Pu(e){_e(rn,rn.current),_e(ti,e),mi===null&&(mi=e)}function Xp(e){e.tag===22?(_e(rn,rn.current),_e(ti,e),mi===null&&(mi=e)):ka()}function ka(){_e(rn,rn.current),_e(ti,ti.current)}function ni(e){ne(ti),mi===e&&(mi=null),ne(rn)}var rn=z(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,vt=null,jt=null,un=null,Cl=!1,lr=!1,Cs=!1,Rl=0,po=0,cr=null,gx=0;function an(){throw Error(s(321))}function Fu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function zu(e,n,a,o,u,f){return oa=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Cm:Ju,Cs=!1,f=a(o,u),Cs=!1,lr&&(f=jp(n,a,o,u)),qp(e),f}function qp(e){I.H=_o;var n=jt!==null&&jt.next!==null;if(oa=0,un=jt=vt=null,Cl=!1,po=0,cr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&vl(e)&&(fn=!0))}function jp(e,n,a,o){vt=e;var u=0;do{if(lr&&(cr=null),po=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,un=jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Rm,f=n(a,o)}while(lr);return f}function _x(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(jt!==null?jt.memoizedState:null)!==e&&(vt.flags|=1024),n}function Iu(){var e=Rl!==0;return Rl=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(Cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cl=!1}oa=0,un=jt=vt=null,lr=!1,po=Rl=0,cr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?vt.memoizedState=un=e:un=un.next=e,un}function on(){if(jt===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=jt.next;var n=un===null?vt.memoizedState:un.next;if(n!==null)un=n,jt=e;else{if(e===null)throw vt.alternate===null?Error(s(467)):Error(s(310));jt=e,e={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},un===null?vt.memoizedState=un=e:un=un.next=e}return un}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,cr===null&&(cr=[]),e=Fp(cr,e,n),n=vt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Cm:Ju),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===N)return wn(e)}throw Error(s(438,String(e)))}function Gu(e){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=on();return Vu(n,jt,e)}function Vu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,H=null,ie=n,me=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(At&Se)===Se:(oa&Se)===Se){var se=ie.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===ir&&(me=!0);else if((oa&se)===se){ie=ie.next,se===ir&&(me=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=Se,v=f):H=H.next=Se,vt.lanes|=se,ja|=se;Se=ie.action,Cs&&a(f,Se),f=ie.hasEagerState?ie.eagerState:a(f,Se)}else se={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=se,v=f):H=H.next=se,vt.lanes|=Se,ja|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?v=f:H.next=R,!$n(f,e.memoizedState)&&(fn=!0,me&&(a=ar,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ku(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);$n(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Wp(e,n,a){var o=vt,u=on(),f=Nt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!$n((jt||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,ju(Kp.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},Zp.bind(null,o,u,a,n),null),Zt===null)throw Error(s(349));f||(oa&127)!==0||Yp(o,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=wl(),vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,o){n.value=a,n.getSnapshot=o,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Jp(e){var n=vs(e,2);n!==null&&Qn(n,e,2)}function Xu(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),Cs){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function $p(e,n,a,o){return e.baseState=a,Vu(e,jt,typeof o=="function"?o:la)}function vx(e,n,a,o,u){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var R=a(u,o),H=I.S;H!==null&&H(v,R),tm(e,n,R)}catch(ie){qu(e,n,ie)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(u,o),tm(e,n,f)}catch(ie){qu(e,n,ie)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(e,n,o)},function(o){return qu(e,n,o)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,em(e,a)))}function qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function sm(e,n){if(Nt){var a=Zt.formState;if(a!==null){e:{var o=vt;if(Nt){if(Kt){t:{for(var u=Kt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=gi(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=Em.bind(null,vt,o),o.dispatch=a,o=Xu(!1),f=Qu.bind(null,vt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=vx.bind(null,vt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function rm(e){var n=on();return om(n,jt,e)}function om(e,n,a){if(n=Vu(e,n,am)[0],e=Nl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(v){throw v===sr?Sl:v}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,ur(9,{destroy:void 0},xx.bind(null,u,a),null)),[o,f,e]}function xx(e,n){e.action=n}function lm(e){var n=on(),a=jt;if(a!==null)return om(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ur(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=wl(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function cm(){return on().memoizedState}function Ul(e,n,a,o){var u=In();vt.flags|=e,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;jt!==null&&o!==null&&Fu(o,jt.memoizedState.deps)?u.memoizedState=ur(n,f,a,o):(vt.flags|=e,u.memoizedState=ur(1|n,f,a,o))}function um(e,n){Ul(8390656,8,e,n)}function ju(e,n){Ll(2048,8,e,n)}function yx(e){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=wl(),vt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fm(e){var n=on().memoizedState;return yx({ref:n,nextImpl:e}),function(){if((Ht&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dm(e,n){return Ll(4,2,e,n)}function hm(e,n){return Ll(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,pm.bind(null,n,e),a)}function Wu(){}function gm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=e(),Cs){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function Yu(e,n,a){return a===void 0||(oa&1073741824)!==0&&(At&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=vg(),vt.lanes|=e,ja|=e,a)}function vm(e,n,a,o){return $n(a,n)?a:or.current!==null?(e=Yu(e,a,o),$n(e,n)||(fn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(At&261930)===0?(fn=!0,e.memoizedState=a):(e=vg(),vt.lanes|=e,ja|=e,n)}function xm(e,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var v=I.T,R={};I.T=R,Qu(e,!1,n,a);try{var H=u(),ie=I.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=mx(H,o);go(e,n,me,si(e))}else go(e,n,o,si(e))}catch(Se){go(e,n,{then:function(){},status:"rejected",reason:Se},si())}finally{k.p=f,v!==null&&R.types!==null&&(v.types=R.types),I.T=v}}function Sx(){}function Zu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ym(e).queue;xm(e,u,n,te,a===null?Sx:function(){return Sm(e),a(o)})}function ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=ym(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},si())}function Ku(){return wn(Lo)}function bm(){return on().memoizedState}function Mm(){return on().memoizedState}function bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ha(a);var o=Ga(n,e,a);o!==null&&(Qn(o,n,a),uo(o,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function Mx(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Tm(n,a):(a=pu(e,n,a,o),a!==null&&(Qn(a,e,o),Am(a,n,o)))}function Em(e,n,a){var o=si();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Tm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,v))return pl(e,n,u,0),Zt===null&&hl(),!1}catch{}finally{}if(a=pu(e,n,u,o),a!==null)return Qn(a,e,o),Am(a,n,o),!0}return!1}function Qu(e,n,a,o){if(o={lane:2,revertLane:Df(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=pu(e,a,o,2),n!==null&&Qn(n,e,2)}function Ol(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function Tm(e,n){lr=Cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ua(e,a)}}var _o={readContext:wn,use:Dl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};_o.useEffectEvent=an;var Cm={readContext:wn,use:Dl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(Cs){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(Cs){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Mx.bind(null,vt,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=Em.bind(null,vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=In();return Yu(a,e,n)},useTransition:function(){var e=Xu(!1);return e=xm.bind(null,vt,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=vt,u=In();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(At&127)!==0||Yp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,um(Kp.bind(null,o,f,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},Zp.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=Zt.identifierPrefix;if(Nt){var a=Ii,o=zi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,vt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return In().memoizedState=bx.bind(null,vt)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ju={readContext:wn,use:Dl,useCallback:gm,useContext:wn,useEffect:ju,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:Nl,useRef:cm,useState:function(){return Nl(la)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=on();return vm(a,jt.memoizedState,e,n)},useTransition:function(){var e=Nl(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Wp,useId:bm,useHostTransitionStatus:Ku,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=on();return $p(a,jt,e,n)},useMemoCache:Gu,useCacheRefresh:Mm};Ju.useEffectEvent=fm;var Rm={readContext:wn,use:Dl,useCallback:gm,useContext:wn,useEffect:ju,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:ku,useRef:cm,useState:function(){return ku(la)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=on();return jt===null?Yu(a,e,n):vm(a,jt.memoizedState,e,n)},useTransition:function(){var e=ku(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Wp,useId:bm,useHostTransitionStatus:Ku,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=on();return jt!==null?$p(a,jt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Mm};Rm.useEffectEvent=fm;function $u(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Qn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Qn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(Qn(n,e,a),uo(n,e,a))}};function wm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function Dm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Nm(e){dl(e)}function Um(e){console.error(e)}function Lm(e){dl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Pm(e){return e=Ha(e),e.tag=3,e}function Fm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Om(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ex(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Wl():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(s(435,a.tag))}return Cf(e,o,u),Wl(),!1}if(Nt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yu&&(e=Error(s(422),{cause:o}),so(fi(e,a)))):(o!==yu&&(n=Error(s(423),{cause:o}),so(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=tf(e.stateNode,o,u),Nu(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),To===null?To=[f]:To.push(f),sn!==4&&(sn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=tf(a.stateNode,o,e),Nu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),Fm(u,e,a,o),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var nf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?Hp(n,null,a,o):As(n,e.child,a,o)}function zm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return bs(n),o=zu(e,n,a,v,f,u),R=Iu(),e!==null&&!fn?(Bu(e,n,u),ca(e,n,u)):(Nt&&R&&vu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function Im(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(e,n,f,o,u)):(e=gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ff(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(v,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(no(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,ff(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return af(e,n,a,o,u)}function Hm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Gm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Lu(),Xp(n);else return o=n.lanes=536870912,Gm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(yl(n,f.cachePool),kp(n,f),ka(),n.memoizedState=null):(e!==null&&yl(n,null),Lu(),ka());return Dn(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(e,n,a,o,u){var f=Cu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&yl(n,null),Lu(),Xp(n),e!==null&&nr(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Vm(e,n,a){return As(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function Tx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Nt){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,vo(null,e);if(Pu(n),(e=Kt)?(e=e0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Rn=n,Kt=null)):e=null,e===null)throw za(n);return n.lanes=536870912,null}return Fl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Pu(n),u)if(n.flags&256)n.flags&=-257,n=Vm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||nr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=Zt,o!==null&&(v=Pi(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,vs(e,v),Qn(o,e,v),nf;Wl(),n=Vm(e,n,a)}else e=f.treeContext,Kt=gi(v.nextSibling),Rn=n,Nt=!0,Fa=null,pi=!1,e!==null&&Rp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function af(e,n,a,o,u){return bs(n),a=zu(e,n,a,o,void 0,u),o=Iu(),e!==null&&!fn?(Bu(e,n,u),ca(e,n,u)):(Nt&&o&&vu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function km(e,n,a,o,u,f){return bs(n),n.updateQueue=null,a=jp(n,o,a,u),qp(e),o=Iu(),e!==null&&!fn?(Bu(e,n,f),ca(e,n,f)):(Nt&&o&&vu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Xm(e,n,a,o,u){if(bs(n),n.stateNode===null){var f=Js,v=a.contextType;typeof v=="object"&&v!==null&&(f=wn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?wn(v):Js,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&($u(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ef.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Rs(a,R);f.props=H;var ie=f.context,me=a.contextType;v=Js,typeof me=="object"&&me!==null&&(v=wn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ie!==v)&&Dm(n,f,o,v),Ba=!1;var se=n.memoizedState;f.state=se,ho(n,o,f,u),fo(),ie=n.memoizedState,R||se!==ie||Ba?(typeof Se=="function"&&($u(n,a,Se,o),ie=n.memoizedState),(H=Ba||wm(n,a,H,o,se,ie,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Du(e,n),v=n.memoizedProps,me=Rs(a,v),f.props=me,Se=n.pendingProps,se=f.context,ie=a.contextType,H=Js,typeof ie=="object"&&ie!==null&&(H=wn(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Se||se!==H)&&Dm(n,f,o,H),Ba=!1,se=n.memoizedState,f.state=se,ho(n,o,f,u),fo();var le=n.memoizedState;v!==Se||se!==le||Ba||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof R=="function"&&($u(n,a,R,o),le=n.memoizedState),(me=Ba||wm(n,a,me,o,se,le,H)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=H,o=me):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ca(e,n,u),e}function qm(e,n,a,o){return ys(),n.flags|=256,Dn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Op()}}function of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function jm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Nt){if(u?Va(n):ka(),(e=Kt)?(e=e0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Rn=n,Kt=null)):e=null,e===null)throw za(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=Il({mode:"hidden",children:R},u),o=xs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=rf(a),o.childLanes=of(e,v,a),n.memoizedState=sf,vo(null,o)):(Va(n),lf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),R=xs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,As(n,e.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=of(e,v,a),n.memoizedState=sf,n=vo(null,o));else if(Va(n),kf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ie=v.dgst;v=ie,o=Error(s(419)),o.stack="",o.digest=v,so({value:o,source:null,stack:null}),n=cf(e,n,a)}else if(fn||nr(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Zt,v!==null&&(o=Pi(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,vs(e,o),Qn(v,e,o),nf;Vf(R)||Wl(),n=cf(e,n,a)}else Vf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Kt=gi(R.nextSibling),Rn=n,Nt=!0,Fa=null,pi=!1,e!==null&&Rp(n,e),n=lf(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,H=e.child,ie=H.sibling,o=ia(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=ia(ie,R):(R=xs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=rf(a):(u=R.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Op(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=of(e,v,a),n.memoizedState=sf,vo(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function lf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function cf(e,n,a){return As(n,e.child,null,a),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mu(e.return,n,a)}function uf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Ym(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=rn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,_e(rn,v),Dn(e,n,o,a),o=Nt?ao:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uf(n,!0,a,null,f,o);break;case"together":uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function Ax(e,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),Ia(n,cn,e.memoizedState.cache),ys();break;case 27:case 5:ke(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jm(e,n,a):(Va(n),e=ca(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(rn,rn.current),o)break;return null;case 22:return n.lanes=0,Hm(e,n,a,n.pendingProps);case 24:Ia(n,cn,e.memoizedState.cache)}return ca(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!ff(e,a)&&(n.flags&128)===0)return fn=!1,Ax(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Nt&&(n.flags&1048576)!==0&&Cp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")mu(e)?(o=Rs(e,o),n.tag=1,n=Xm(null,n,e,o,a)):(n.tag=0,n=af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=zm(null,n,e,o,a);break e}else if(u===F){n.tag=14,n=Im(null,n,e,o,a);break e}}throw n=ce(e)||e,Error(s(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),Xm(e,n,o,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),ho(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ia(n,cn,o),o!==f.cache&&Eu(n,[cn],a,!0),fo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(e,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),so(u),n=qm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=gi(e.firstChild),Rn=n,Nt=!0,Fa=null,pi=!0,a=Hp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=ca(e,n,a);break e}Dn(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,e=n.pendingProps,o=ec($.current).createElement(a),o[tn]=n,o[nn]=e,Nn(o,a,e),C(o),n.stateNode=o):n.memoizedState=r0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&Nt&&(o=n.stateNode=i0(n.type,n.pendingProps,$.current),Rn=n,pi=!0,u=Kt,Qa(n.type)?(Xf=u,Kt=gi(o.firstChild)):Kt=u),Dn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Nt&&((u=o=Kt)&&(o=ny(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Kt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||za(n)),ke(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Bf(u,f)?o=null:v!==null&&Bf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(e,n,_x,null,null,a),Lo._currentValue=u),zl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Nt&&((e=a=Kt)&&(a=iy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Kt=null,e=!0):e=!1),e||za(n)),null;case 13:return jm(e,n,a);case 4:return Ue(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return zm(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 31:return Tx(e,n,a);case 22:return Hm(e,n,a,n.pendingProps);case 24:return bs(n),o=wn(cn),e===null?(u=Cu(),u===null&&(u=Zt,f=Tu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},wu(n),Ia(n,cn,u)):((e.lanes&a)!==0&&(Du(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,cn,o)):(o=f.cache,Ia(n,cn,o),o!==u.cache&&Eu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function df(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw Ts=bl,Ru}else e.flags&=-16777217}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(n))if(bg())e.flags|=8192;else throw Ts=bl,Ru}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,pr|=n)}function xo(e,n){if(!Nt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Cx(e,n,a){var o=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(cn),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?(Qt(n),Km(n,f)):(Qt(n),df(n,u,null,o,a))):f?f!==e.memoizedState?(ua(n),Qt(n),Km(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Qt(n),df(n,u,e,o,a)),null;case 27:if(ut(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=Ce.current,tr(n)?wp(n):(e=i0(u,o,a),n.stateNode=e,ua(n))}return Qt(n),null;case 5:if(ut(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=Ce.current,tr(n))wp(n);else{var v=ec($.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[tn]=n,f[nn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return Qt(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=$.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||za(n,!0)}else e=ec(e).createTextNode(o),e[tn]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Qt(n),null);case 4:return We(),e===null&&Of(n.stateNode.containerInfo),Qt(n),null;case 10:return ra(n.type),Qt(n),null;case 19:if(ne(rn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,xo(o,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ep(a,e),a=a.sibling;return _e(rn,rn.current&1|2),Nt&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>Xl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Al(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Nt)return Qt(n),null}else 2*M()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=rn.current,_e(rn,u?a&1|2:a&1),Nt&&aa(n,o.treeForkCount),e):(Qt(n),null);case 22:case 23:return ni(n),Ou(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ne(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(cn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Rx(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(cn),We(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(rn),null;case 4:return We(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),Ou(),e!==null&&ne(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(cn),null;case 25:return null;default:return null}}function Qm(e,n){switch(xu(n),n.tag){case 3:ra(cn),We();break;case 26:case 27:case 5:ut(n);break;case 4:We();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:ne(rn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),Ou(),e!==null&&ne(Ms);break;case 24:ra(cn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Xt(n,n.return,R)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var H=a,ie=R;try{ie()}catch(me){Xt(u,H,me)}}}o=o.next}while(o!==f)}}catch(me){Xt(n,n.return,me)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(o){Xt(e,e.return,o)}}}function $m(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Xt(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Xt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Xt(e,e.return,u)}}function hf(e,n,a){try{var o=e.stateNode;Kx(o,e.type,a,n),o[nn]=n}catch(u){Xt(e,e.return,u)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[tn]=e,n[nn]=a}catch(f){Xt(e,e.return,f)}}var fa=!1,dn=!1,gf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,yn=null;function wx(e,n){if(e=e.containerInfo,zf=oc,e=mp(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,H=-1,ie=0,me=0,Se=e,se=null;t:for(;;){for(var le;Se!==a||u!==0&&Se.nodeType!==3||(R=v+u),Se!==f||o!==0&&Se.nodeType!==3||(H=v+o),Se.nodeType===3&&(v+=Se.nodeValue.length),(le=Se.firstChild)!==null;)se=Se,Se=le;for(;;){if(Se===e)break t;if(se===a&&++ie===u&&(R=v),se===f&&++me===o&&(H=v),(le=Se.nextSibling)!==null)break;Se=se,se=Se.parentNode}Se=le}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},oc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=Rs(a.type,u);e=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(nt){Xt(a,a.return,nt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function ag(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&yo(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}o&64&&Jm(a),o&512&&So(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(v){Xt(a,a.return,v)}}break;case 27:n===null&&o&4&&ng(a);case 26:case 5:ha(e,a),n===null&&o&4&&eg(a),o&512&&So(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&og(e,a);break;case 13:ha(e,a),o&4&&lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ix.bind(null,a),ay(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||dn,u=fa;var f=dn;fa=o,(dn=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,dn=f}break;case 30:break;default:ha(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&La(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $t=null,Wn=!1;function da(e,n,a){for(a=a.child;a!==null;)rg(e,n,a),a=a.sibling}function rg(e,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var o=$t,u=Wn;Qa(a.type)&&($t=a.stateNode,Wn=!1),da(e,n,a),Do(a.stateNode),$t=o,Wn=u;break;case 5:dn||Bi(a,n);case 6:if(o=$t,u=Wn,$t=null,da(e,n,a),$t=o,Wn=u,$t!==null)if(Wn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Xt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Xt(a,n,f)}break;case 18:$t!==null&&(Wn?(e=$t,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):Jg($t,a.stateNode));break;case 4:o=$t,u=Wn,$t=a.stateNode.containerInfo,Wn=!0,da(e,n,a),$t=o,Wn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),dn||Xa(4,a,n),da(e,n,a);break;case 1:dn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&$m(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,da(e,n,a),dn=o;break;default:da(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Xt(n,n.return,a)}}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Xt(n,n.return,a)}}function Dx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=Dx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Bx.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){$t=R.stateNode,Wn=!1;break e}break;case 5:$t=R.stateNode,Wn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if($t===null)throw Error(s(160));rg(f,v,u),$t=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var Ci=null;function cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),o&4&&(Xa(3,e,e.return),yo(3,e),Xa(5,e,e.return));break;case 1:Yn(n,e),Zn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Yn(n,e),Zn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ji]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[tn]=e,C(f),o=f;break e;case"link":var v=c0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=c0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[tn]=e,C(f),o=f}e.stateNode=o}else u0(u,e.type,e.stateNode);else e.stateNode=l0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?u0(u,e.type,e.stateNode):l0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),o&512&&(dn||a===null||Bi(a,a.return)),a!==null&&o&4&&hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),o&512&&(dn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Ze){Xt(e,e.return,Ze)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(gf=!0);break;case 6:if(Yn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ze){Xt(e,e.return,Ze)}}break;case 3:if(ic=null,u=Ci,Ci=tc(n.containerInfo),Yn(n,e),Ci=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Ze){Xt(e,e.return,Ze)}gf&&(gf=!1,ug(e));break;case 4:o=Ci,Ci=tc(e.stateNode.containerInfo),Yn(n,e),Zn(e),Ci=o;break;case 12:Yn(n,e),Zn(e);break;case 31:Yn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=fa,me=dn;if(fa=ie||u,dn=me||H,Yn(n,e),dn=me,fa=ie,Zn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||fa||dn||ws(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=H.stateNode;var Se=H.memoizedProps.style,se=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Ze){Xt(H,H.return,Ze)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ze){Xt(H,H.return,Ze)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?$g(le,!0):$g(H.stateNode,!1)}catch(Ze){Xt(H,H.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(e,a))));break;case 19:Yn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(tg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=pf(e);Hl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(mn(v,""),a.flags&=-33);var R=pf(e);Hl(e,R,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=pf(e);mf(e,ie,H);break;default:throw Error(s(161))}}catch(me){Xt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),ws(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),ws(n);break;case 27:Do(n.stateNode);case 26:case 5:Bi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),yo(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Xt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Gp(H[u],R)}catch(ie){Xt(o,o.return,ie)}}a&&v&64&&Jm(f),So(f,f.return);break;case 27:ng(f);case 26:case 5:pa(u,f,a),a&&o===null&&v&4&&eg(f),So(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&v&4&&og(u,f);break;case 13:pa(u,f,a),a&&v&4&&lg(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),So(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function _f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,o),n=n.sibling}function fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Xt(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,o):bo(e,n):f._visibility&2?Ri(e,n,a,o):(f._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(v,n);break;case 24:Ri(e,n,a,o),u&2048&&vf(n.alternate,n);break;default:Ri(e,n,a,o)}}function fr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,H=o,ie=v.flags;switch(v.tag){case 0:case 11:case 15:fr(f,v,R,H,u),yo(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?fr(f,v,R,H,u):bo(f,v):(me._visibility|=2,fr(f,v,R,H,u)),u&&ie&2048&&_f(v.alternate,v);break;case 24:fr(f,v,R,H,u),u&&ie&2048&&vf(v.alternate,v);break;default:fr(f,v,R,H,u)}n=n.sibling}}function bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&_f(o.alternate,o);break;case 24:bo(a,o),u&2048&&vf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var Mo=8192;function dr(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)dg(e,n,a),e=e.sibling}function dg(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&Mo&&e.memoizedState!==null&&gy(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Ci;Ci=tc(e.stateNode.containerInfo),dr(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,dr(e,n,a),Mo=o):dr(e,n,a));break;default:dr(e,n,a)}}function hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,mg(o,e)}hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):Eo(e);break;default:Eo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,mg(o,e)}hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function mg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(sg(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Nx={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},Ux=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Zt=null,Mt=null,At=0,kt=0,ii=null,qa=!1,hr=!1,xf=!1,ma=0,sn=0,ja=0,Ds=0,yf=0,ai=0,pr=0,To=null,Kn=null,Sf=!1,kl=0,gg=0,Xl=1/0,ql=null,Wa=null,gn=0,Ya=null,mr=null,ga=0,bf=0,Mf=null,_g=null,Ao=0,Ef=null;function si(){return(Ht&2)!==0&&At!==0?At&-At:I.T!==null?Df():Qi()}function vg(){if(ai===0)if((At&536870912)===0||Nt){var e=we;we<<=1,(we&3932160)===0&&(we=262144),ai=e}else ai=536870912;return e=ti.current,e!==null&&(e.flags|=32),ai}function Qn(e,n,a){(e===Zt&&(kt===2||kt===9)||e.cancelPendingCommit!==null)&&(gr(e,0),Za(e,At,ai,!1)),bn(e,a),((Ht&2)===0||e!==Zt)&&(e===Zt&&((Ht&2)===0&&(Ds|=a),sn===4&&Za(e,At,ai,!1)),Hi(e))}function xg(e,n,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||De(e,n),u=o?Px(e,n):Af(e,n,!0),f=o;do{if(u===0){hr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Lx(a)){u=Af(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=e;u=To;var H=R.current.memoizedState.isDehydrated;if(H&&(gr(R,v).flags|=256),v=Af(R,v,!1),v!==2){if(xf&&!H){R.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){gr(e,0),Za(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ai,!qa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-M(),10<u)){if(Za(o,n,ai,!qa),xe(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=Kg(yg.bind(null,o,a,Kn,ql,Sf,n,ai,Ds,pr,qa,f,"Throttled",-0,0),u);break e}yg(o,a,Kn,ql,Sf,n,ai,Ds,pr,qa,f,null,-0,0)}}break}while(!0);Hi(e)}function yg(e,n,a,o,u,f,v,R,H,ie,me,Se,se,le){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},dg(n,f,Se);var Ze=(f&62914560)===f?kl-M():(f&4194048)===f?gg-M():0;if(Ze=_y(Se,Ze),Ze!==null){ga=f,e.cancelPendingCommit=Ze(Rg.bind(null,e,n,f,a,o,u,v,R,H,me,Se,null,se,le)),Za(e,f,v,!ie);return}}Rg(e,n,f,a,o,u,v,R,H)}function Lx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~yf,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-He(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Na(e,a,n)}function jl(){return(Ht&6)===0?(Co(0),!1):!0}function Tf(){if(Mt!==null){if(kt===0)var e=Mt.return;else e=Mt,sa=Ss=null,Hu(e),rr=null,lo=0,e=Mt;for(;e!==null;)Qm(e.alternate,e),e=e.return;Mt=null}}function gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$x(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,Tf(),Zt=e,Mt=a=ia(e.current,null),At=n,kt=0,ii=null,qa=!1,hr=De(e,n),xf=!1,pr=ai=yf=Ds=ja=sn=0,Kn=To=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-He(o),f=1<<u;n|=e[u],o&=~f}return ma=n,hl(),a}function Sg(e,n){vt=null,I.H=_o,n===sr||n===Sl?(n=zp(),kt=3):n===Ru?(n=zp(),kt=4):kt=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Mt===null&&(sn=1,Pl(e,fi(n,e.current)))}function bg(){var e=ti.current;return e===null?!0:(At&4194048)===At?mi===null:(At&62914560)===At||(At&536870912)!==0?e===mi:!1}function Mg(){var e=I.H;return I.H=_o,e===null?_o:e}function Eg(){var e=I.A;return I.A=Nx,e}function Wl(){sn=4,qa||(At&4194048)!==At&&ti.current!==null||(hr=!0),(ja&134217727)===0&&(Ds&134217727)===0||Zt===null||Za(Zt,At,ai,!1)}function Af(e,n,a){var o=Ht;Ht|=2;var u=Mg(),f=Eg();(Zt!==e||At!==n)&&(ql=null,gr(e,n)),n=!1;var v=sn;e:do try{if(kt!==0&&Mt!==null){var R=Mt,H=ii;switch(kt){case 8:Tf(),v=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ie=kt;if(kt=0,ii=null,_r(e,R,H,ie),a&&hr){v=0;break e}break;default:ie=kt,kt=0,ii=null,_r(e,R,H,ie)}}Ox(),v=sn;break}catch(me){Sg(e,me)}while(!0);return n&&e.shellSuspendCounter++,sa=Ss=null,Ht=o,I.H=u,I.A=f,Mt===null&&(Zt=null,At=0,hl()),v}function Ox(){for(;Mt!==null;)Tg(Mt)}function Px(e,n){var a=Ht;Ht|=2;var o=Mg(),u=Eg();Zt!==e||At!==n?(ql=null,Xl=M()+500,gr(e,n)):hr=De(e,n);e:do try{if(kt!==0&&Mt!==null){n=Mt;var f=ii;t:switch(kt){case 1:kt=0,ii=null,_r(e,n,f,1);break;case 2:case 9:if(Pp(f)){kt=0,ii=null,Ag(n);break}n=function(){kt!==2&&kt!==9||Zt!==e||(kt=7),Hi(e)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Pp(f)?(kt=0,ii=null,Ag(n)):(kt=0,ii=null,_r(e,n,f,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var R=Mt;if(v?f0(v):R.stateNode.complete){kt=0,ii=null;var H=R.sibling;if(H!==null)Mt=H;else{var ie=R.return;ie!==null?(Mt=ie,Yl(ie)):Mt=null}break t}}kt=0,ii=null,_r(e,n,f,5);break;case 6:kt=0,ii=null,_r(e,n,f,6);break;case 8:Tf(),sn=6;break e;default:throw Error(s(462))}}Fx();break}catch(me){Sg(e,me)}while(!0);return sa=Ss=null,I.H=o,I.A=u,Ht=a,Mt!==null?0:(Zt=null,At=0,hl(),sn)}function Fx(){for(;Mt!==null&&!Ye();)Tg(Mt)}function Tg(e){var n=Zm(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?Yl(e):Mt=n}function Ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Hu(n);default:Qm(a,n),n=Mt=Ep(n,ma),n=Zm(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?Yl(e):Mt=n}function _r(e,n,a,o){sa=Ss=null,Hu(n),rr=null,lo=0;var u=n.return;try{if(Ex(e,u,n,a,At)){sn=1,Pl(e,fi(a,e.current)),Mt=null;return}}catch(f){if(u!==null)throw Mt=u,f;sn=1,Pl(e,fi(a,e.current)),Mt=null;return}n.flags&32768?(Nt||o===1?e=!0:hr||(At&536870912)!==0?e=!1:(qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Cg(n,qa);return}e=n.return;var a=Cx(n.alternate,n,ma);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=e}while(n!==null);sn===0&&(sn=5)}function Cg(e,n){do{var a=Rx(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);sn=6,Mt=null}function Rg(e,n,a,o,u,f,v,R,H){e.cancelPendingCommit=null;do Zl();while(gn!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,Jt(e,a,f,v,R,H),e===Zt&&(Mt=Zt=null,At=0),mr=n,Ya=e,ga=a,bf=f,Mf=u,_g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hx(fe,function(){return Lg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=k.p,k.p=2,v=Ht,Ht|=4;try{wx(e,n,a)}finally{Ht=v,k.p=u,I.T=o}}gn=1,wg(),Dg(),Ng()}}function wg(){if(gn===1){gn=0;var e=Ya,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Ht;Ht|=4;try{cg(n,e);var f=If,v=mp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(H!==null&&lu(R)){var ie=H.start,me=H.end;if(me===void 0&&(me=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(me,R.value.length);else{var Se=R.ownerDocument||document,se=Se&&Se.defaultView||window;if(se.getSelection){var le=se.getSelection(),Ze=R.textContent.length,nt=Math.min(H.start,Ze),Yt=H.end===void 0?nt:Math.min(H.end,Ze);!le.extend&&nt>Yt&&(v=Yt,Yt=nt,nt=v);var Z=hp(R,nt),q=hp(R,Yt);if(Z&&q&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==q.node||le.focusOffset!==q.offset)){var ee=Se.createRange();ee.setStart(Z.node,Z.offset),le.removeAllRanges(),nt>Yt?(le.addRange(ee),le.extend(q.node,q.offset)):(ee.setEnd(q.node,q.offset),le.addRange(ee))}}}}for(Se=[],le=R;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ve=Se[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}oc=!!zf,If=zf=null}finally{Ht=u,k.p=o,I.T=a}}e.current=n,gn=2}}function Dg(){if(gn===2){gn=0;var e=Ya,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=k.p;k.p=2;var u=Ht;Ht|=4;try{ag(e,n.alternate,n)}finally{Ht=u,k.p=o,I.T=a}}gn=3}}function Ng(){if(gn===4||gn===3){gn=0,P();var e=Ya,n=mr,a=ga,o=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,mr=Ya=null,Ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),zn(a),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=k.p,k.p=2,I.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{I.T=n,k.p=u}}(ga&3)!==0&&Zl(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ef?Ao++:(Ao=0,Ef=e):Ao=0,Co(0)}}function Ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Zl(){return wg(),Dg(),Ng(),Lg()}function Lg(){if(gn!==5)return!1;var e=Ya,n=bf;bf=0;var a=zn(ga),o=I.T,u=k.p;try{k.p=32>a?32:a,I.T=null,a=Mf,Mf=null;var f=Ya,v=ga;if(gn=0,mr=Ya=null,ga=0,(Ht&6)!==0)throw Error(s(331));var R=Ht;if(Ht|=4,pg(f.current),fg(f,f.current,v,a),Ht=R,Co(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{k.p=u,I.T=o,Ug(e,n)}}function Og(e,n,a){n=fi(a,n),n=tf(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(bn(e,2),Hi(e))}function Xt(e,n,a){if(e.tag===3)Og(e,e,a);else for(;n!==null;){if(n.tag===3){Og(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=fi(a,e),a=Pm(2),o=Ga(n,a,2),o!==null&&(Fm(a,o,n,e),bn(o,2),Hi(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ux;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(xf=!0,u.add(a),e=zx.bind(null,e,n,a),n.then(e,e))}function zx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(At&a)===a&&(sn===4||sn===3&&(At&62914560)===At&&300>M()-kl?(Ht&2)===0&&gr(e,0):yf|=a,pr===At&&(pr=0)),Hi(e)}function Pg(e,n){n===0&&(n=Lt()),e=vs(e,n),e!==null&&(bn(e,n),Hi(e))}function Ix(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(e,a)}function Bx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Pg(e,a)}function Hx(e,n){return gt(e,n)}var Kl=null,vr=null,Rf=!1,Ql=!1,wf=!1,Ka=0;function Hi(e){e!==vr&&e.next===null&&(vr===null?Kl=vr=e:vr=vr.next=e),Ql=!0,Rf||(Rf=!0,Vx())}function Co(e,n){if(!wf&&Ql){wf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-He(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(o,f))}else f=At,f=xe(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,Bg(o,f));o=o.next}while(a);wf=!1}}function Gx(){Fg()}function Fg(){Ql=Rf=!1;var e=0;Ka!==0&&Jx()&&(e=Ka);for(var n=M(),a=null,o=Kl;o!==null;){var u=o.next,f=zg(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(vr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ql=!0)),o=u}gn!==0&&gn!==5||Co(e),Ka!==0&&(Ka=0)}function zg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-He(f),R=1<<v,H=u[v];H===-1?((R&a)===0||(R&o)!==0)&&(u[v]=rt(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Zt,a=At,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(kt===2||kt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ft(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||De(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ft(o),zn(a)){case 2:case 8:a=Ee;break;case 32:a=fe;break;case 268435456:a=Ne;break;default:a=fe}return o=Ig.bind(null,e),a=gt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ft(o),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=At;return o=xe(e,e===Zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xg(e,o,n),zg(e,M()),e.callbackNode!=null&&e.callbackNode===a?Ig.bind(null,e):null)}function Bg(e,n){if(Zl())return null;xg(e,n,!0)}function Vx(){ey(function(){(Ht&6)!==0?gt(ge,Gx):Fg()})}function Df(){if(Ka===0){var e=ir;e===0&&(e=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Ka=e}return Ka}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function Gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hg((u[nn]||null).action),v=o.submitter;v&&(n=(n=v[nn]||null)?Hg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new cl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var H=v?Gg(u,v):new FormData(u);Zu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=v?Gg(u,v):new FormData(u),Zu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Nf=0;Nf<du.length;Nf++){var Uf=du[Nf],Xx=Uf.toLowerCase(),qx=Uf[0].toUpperCase()+Uf.slice(1);Ai(Xx,"on"+qx)}Ai(vp,"onAnimationEnd"),Ai(xp,"onAnimationIteration"),Ai(yp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(ox,"onTransitionRun"),Ai(lx,"onTransitionStart"),Ai(cx,"onTransitionCancel"),Ai(Sp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(me){dl(me)}u.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(R=o[v],H=R.instance,ie=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(me){dl(me)}u.currentTarget=null,f=H}}}}function Et(e,n){var a=n[hs];a===void 0&&(a=n[hs]=new Set);var o=e+"__bubble";a.has(o)||(kg(n,e,2,!1),a.add(o))}function Lf(e,n,a){var o=0;n&&(o|=4),kg(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[Jl]){e[Jl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(jx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Lf("selectionchange",!1,n))}}function kg(e,n,a,o){switch(v0(n)){case 2:var u=yy;break;case 8:u=Sy;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Pf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ei(R),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue e}R=R.parentNode}}o=o.return}Yh(function(){var ie=f,me=Qc(a),Se=[];e:{var se=bp.get(e);if(se!==void 0){var le=cl,Ze=e;switch(e){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":le=Bv;break;case"focusin":Ze="focus",le=iu;break;case"focusout":Ze="blur",le=iu;break;case"beforeblur":case"afterblur":le=iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Vv;break;case vp:case xp:case yp:le=Dv;break;case Sp:le=Xv;break;case"scroll":case"scrollend":le=Tv;break;case"wheel":le=jv;break;case"copy":case"cut":case"paste":le=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=$h;break;case"toggle":case"beforetoggle":le=Yv}var nt=(n&4)!==0,Yt=!nt&&(e==="scroll"||e==="scrollend"),Z=nt?se!==null?se+"Capture":null:se;nt=[];for(var q=ie,ee;q!==null;){var ve=q;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Z===null||(ve=Zr(q,Z),ve!=null&&nt.push(wo(q,ve,ee))),Yt)break;q=q.return}0<nt.length&&(se=new le(se,Ze,null,a,me),Se.push({event:se,listeners:nt}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",se&&a!==Kc&&(Ze=a.relatedTarget||a.fromElement)&&(Ei(Ze)||Ze[xn]))break e;if((le||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,le?(Ze=a.relatedTarget||a.toElement,le=ie,Ze=Ze?Ei(Ze):null,Ze!==null&&(Yt=c(Ze),nt=Ze.tag,Ze!==Yt||nt!==5&&nt!==27&&nt!==6)&&(Ze=null)):(le=null,Ze=ie),le!==Ze)){if(nt=Qh,ve="onMouseLeave",Z="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(nt=$h,ve="onPointerLeave",Z="onPointerEnter",q="pointer"),Yt=le==null?se:$i(le),ee=Ze==null?se:$i(Ze),se=new nt(ve,q+"leave",le,a,me),se.target=Yt,se.relatedTarget=ee,ve=null,Ei(me)===ie&&(nt=new nt(Z,q+"enter",Ze,a,me),nt.target=ee,nt.relatedTarget=Yt,ve=nt),Yt=ve,le&&Ze)t:{for(nt=Wx,Z=le,q=Ze,ee=0,ve=Z;ve;ve=nt(ve))ee++;ve=0;for(var et=q;et;et=nt(et))ve++;for(;0<ee-ve;)Z=nt(Z),ee--;for(;0<ve-ee;)q=nt(q),ve--;for(;ee--;){if(Z===q||q!==null&&Z===q.alternate){nt=Z;break t}Z=nt(Z),q=nt(q)}nt=null}else nt=null;le!==null&&Xg(Se,se,le,nt,!1),Ze!==null&&Yt!==null&&Xg(Se,Yt,Ze,nt,!0)}}e:{if(se=ie?$i(ie):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var Ot=op;else if(sp(se))if(lp)Ot=ax;else{Ot=nx;var Je=tx}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&Ti(ie.elementType)&&(Ot=op):Ot=ix;if(Ot&&(Ot=Ot(e,ie))){rp(Se,Ot,a,me);break e}Je&&Je(e,se,ie),e==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&En(se,"number",se.value)}switch(Je=ie?$i(ie):window,e){case"focusin":(sp(Je)||Je.contentEditable==="true")&&(Zs=Je,cu=ie,io=null);break;case"focusout":io=cu=Zs=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,gp(Se,a,me);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":gp(Se,a,me)}var xt;if(su)e:{switch(e){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ys?ip(e,a)&&(Ct="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(ep&&a.locale!=="ko"&&(Ys||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ys&&(xt=Zh()):(Oa=me,eu="value"in Oa?Oa.value:Oa.textContent,Ys=!0)),Je=$l(ie,Ct),0<Je.length&&(Ct=new Jh(Ct,e,null,a,me),Se.push({event:Ct,listeners:Je}),xt?Ct.data=xt:(xt=ap(a),xt!==null&&(Ct.data=xt)))),(xt=Kv?Qv(e,a):Jv(e,a))&&(Ct=$l(ie,"onBeforeInput"),0<Ct.length&&(Je=new Jh("onBeforeInput","beforeinput",null,a,me),Se.push({event:Je,listeners:Ct}),Je.data=xt)),kx(Se,e,ie,a,me)}Vg(Se,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zr(e,a),u!=null&&o.unshift(wo(e,u,f)),u=Zr(e,n),u!=null&&o.push(wo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Wx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=Zr(a,f),ie!=null&&v.unshift(wo(a,ie,H))):u||(ie=Zr(a,f),ie!=null&&v.push(wo(a,ie,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Yx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(Yx,`
`).replace(Zx,"")}function jg(e,n){return n=qg(n),qg(e)===n}function Wt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":qs(e,o,f);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",u.name,u,null),Wt(e,n,"formEncType",u.formEncType,u,null),Wt(e,n,"formMethod",u.formMethod,u,null),Wt(e,n,"formTarget",u.formTarget,u,null)):(Wt(e,n,"encType",u.encType,u,null),Wt(e,n,"method",u.method,u,null),Wt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&Et("scroll",e);break;case"onScrollEnd":o!=null&&Et("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Et("beforetoggle",e),Et("toggle",e),Ke(e,"popover",o);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mv.get(a)||a,Ke(e,a,o))}}function Ff(e,n,a,o,u,f){switch(a){case"style":qs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Et("scroll",e);break;case"onScrollEnd":o!=null&&Et("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ke(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",e),Et("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,f,v,a,null)}}u&&Wt(e,n,"srcSet",a.srcSet,a,null),o&&Wt(e,n,"src",a.src,a,null);return;case"input":Et("invalid",e);var R=f=v=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":ie=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Wt(e,n,o,me,a,null)}}ea(e,f,R,H,ie,v,u,!1);return;case"select":Et("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Wt(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":Et("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Wt(e,n,v,R,a,null)}Tn(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(e,n,H,o,a,null)}return;case"dialog":Et("beforetoggle",e),Et("toggle",e),Et("cancel",e),Et("close",e);break;case"iframe":case"object":Et("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Et(Ro[o],e);break;case"image":Et("error",e),Et("load",e);break;case"details":Et("toggle",e);break;case"embed":case"source":case"link":Et("error",e),Et("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,ie,o,a,null)}return;default:if(Ti(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Ff(e,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Wt(e,n,R,o,a,null))}function Kx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,H=null,ie=null,me=null;for(le in a){var Se=a[le];if(a.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=Se;default:o.hasOwnProperty(le)||Wt(e,n,le,null,o,Se)}}for(var se in o){var le=o[se];if(Se=a[se],o.hasOwnProperty(se)&&(le!=null||Se!=null))switch(se){case"type":f=le;break;case"name":u=le;break;case"checked":ie=le;break;case"defaultChecked":me=le;break;case"value":v=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==Se&&Wt(e,n,se,le,o,Se)}}Mn(e,v,R,H,ie,me,f,u);return;case"select":le=v=R=se=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(f)||Wt(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":se=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==H&&Wt(e,n,u,f,o,H)}n=R,a=v,o=le,se!=null?ci(e,!!a,se,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":se=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(e,n,v,u,o,f)}Vt(e,se,le);return;case"option":for(var Ze in a)if(se=a[Ze],a.hasOwnProperty(Ze)&&se!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":e.selected=!1;break;default:Wt(e,n,Ze,null,o,se)}for(H in o)if(se=o[H],le=a[H],o.hasOwnProperty(H)&&se!==le&&(se!=null||le!=null))switch(H){case"selected":e.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Wt(e,n,H,se,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)se=a[nt],a.hasOwnProperty(nt)&&se!=null&&!o.hasOwnProperty(nt)&&Wt(e,n,nt,null,o,se);for(ie in o)if(se=o[ie],le=a[ie],o.hasOwnProperty(ie)&&se!==le&&(se!=null||le!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Wt(e,n,ie,se,o,le)}return;default:if(Ti(n)){for(var Yt in a)se=a[Yt],a.hasOwnProperty(Yt)&&se!==void 0&&!o.hasOwnProperty(Yt)&&Ff(e,n,Yt,void 0,o,se);for(me in o)se=o[me],le=a[me],!o.hasOwnProperty(me)||se===le||se===void 0&&le===void 0||Ff(e,n,me,se,o,le);return}}for(var Z in a)se=a[Z],a.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&Wt(e,n,Z,null,o,se);for(Se in o)se=o[Se],le=a[Se],!o.hasOwnProperty(Se)||se===le||se==null&&le==null||Wt(e,n,Se,se,o,le)}function Wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&Wg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>R)break;var me=H.transferSize,Se=H.initiatorType;me&&Wg(Se)&&(H=H.responseEnd,v+=me*(H<R?1:(R-ie)/(H-ie)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,If=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function Jx(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(ty)}:Kg;function ty(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function Jg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ji]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);br(n)}function $g(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ny(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ji])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function e0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ay(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xf=null;function t0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function n0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function i0(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);La(e)}var _i=new Map,a0=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=k.d;k.d={f:sy,r:ry,D:oy,C:ly,L:cy,m:uy,X:dy,S:fy,M:hy};function sy(){var e=_a.f(),n=jl();return e||n}function ry(e){var n=qn(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):_a.r(e)}var xr=typeof document>"u"?null:document;function s0(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function oy(e){_a.D(e),s0("dns-prefetch",e,null)}function ly(e,n){_a.C(e,n),s0("preconnect",e,n)}function cy(e,n,a){_a.L(e,n,a);var o=xr;if(o&&e&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(e)+'"]';var f=u;switch(n){case"style":f=yr(e);break;case"script":f=Sr(e)}_i.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function uy(e,n){_a.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(o)+'"][href="'+ot(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!_i.has(f)&&(e=g({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function fy(e,n,a){_a.S(e,n,a);var o=xr;if(o&&e){var u=Fi(o).hoistableStyles,f=yr(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(No(f)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&qf(e,a);var H=v=o.createElement("link");C(H),Nn(H,"link",e),H._p=new Promise(function(ie,me){H.onload=ie,H.onerror=me}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function dy(e,n){_a.X(e,n);var a=xr;if(a&&e){var o=Fi(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0},n),(n=_i.get(u))&&jf(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hy(e,n){_a.M(e,n);var a=xr;if(a&&e){var o=Fi(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&jf(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function r0(e,n,a,o){var u=(u=$.current)?tc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Fi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var f=Fi(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(No(e)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||py(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Fi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+ot(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function o0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),e.head.appendChild(n))}function Sr(e){return'[src="'+ot(e)+'"]'}function Uo(e){return"script[async]"+e}function l0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=o0(a),(u=_i.get(u))&&qf(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var v=f;return v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Nn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,C(u),u):(o=a,(u=_i.get(f))&&(o=g({},a),jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function c0(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ji]||f[tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function u0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function my(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=o0(o),(u=_i.get(u))&&qf(o,u),f=f.createElement("link"),C(f);var v=f;v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function _y(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*Qx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(vy,e),sc=null,ac.call(e))}function vy(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function xy(e,n,a,o,u,f,v,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function d0(e,n,a,o,u,f,v,R,H,ie,me,Se){return e=new xy(e,n,a,v,H,ie,me,Se,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wu(f),e}function h0(e){return e?(e=Js,e):Js}function p0(e,n,a,o,u,f){u=h0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ga(e,o,n),a!==null&&(Qn(a,e,n),uo(a,e,n))}function m0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yf(e,n){m0(e,n),(e=e.alternate)&&m0(e,n)}function g0(e){if(e.tag===13||e.tag===31){var n=vs(e,67108864);n!==null&&Qn(n,e,67108864),Yf(e,67108864)}}function _0(e){if(e.tag===13||e.tag===31){var n=si();n=Vn(n);var a=vs(e,n);a!==null&&Qn(a,e,n),Yf(e,n)}}var oc=!0;function yy(e,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=2,Zf(e,n,a,o)}finally{k.p=f,I.T=u}}function Sy(e,n,a,o){var u=I.T;I.T=null;var f=k.p;try{k.p=8,Zf(e,n,a,o)}finally{k.p=f,I.T=u}}function Zf(e,n,a,o){if(oc){var u=Kf(o);if(u===null)Pf(e,n,o,lc,a),x0(e,o);else if(My(u,e,n,a,o))o.stopPropagation();else if(x0(e,o),n&4&&-1<by.indexOf(e)){for(;u!==null;){var f=qn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ae(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var H=1<<31-He(v);R.entanglements[1]|=H,v&=~H}Hi(f),(Ht&6)===0&&(Xl=M()+500,Co(0))}}break;case 31:case 13:R=vs(f,2),R!==null&&Qn(R,f,2),jl(),Yf(f,2)}if(f=Kf(o),f===null&&Pf(e,n,o,lc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Pf(e,n,o,null,a)}}function Kf(e){return e=Qc(e),Qf(e)}var lc=null;function Qf(e){if(lc=null,e=Ei(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function v0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ge:return 2;case Ee:return 8;case fe:case Qe:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ja=null,$a=null,es=null,Oo=new Map,Po=new Map,ts=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Fo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=qn(n),n!==null&&g0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function My(e,n,a,o,u){switch(n){case"focusin":return Ja=Fo(Ja,e,n,a,o,u),!0;case"dragenter":return $a=Fo($a,e,n,a,o,u),!0;case"mouseover":return es=Fo(es,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Fo(Oo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Fo(Po.get(f)||null,e,n,a,o,u)),!0}return!1}function y0(e){var n=Ei(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,kn(e.priority,function(){_0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,kn(e.priority,function(){_0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Kc=o,a.target.dispatchEvent(o),Kc=null}else return n=qn(a),n!==null&&g0(n),e.blockedOn=a,!1;n.shift()}return!0}function S0(e,n,a){cc(e)&&a.delete(n)}function Ey(){Jf=!1,Ja!==null&&cc(Ja)&&(Ja=null),$a!==null&&cc($a)&&($a=null),es!==null&&cc(es)&&(es=null),Oo.forEach(S0),Po.forEach(S0)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ey)))}var fc=null;function b0(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var f=qn(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(H){return uc(H,e)}Ja!==null&&uc(Ja,e),$a!==null&&uc($a,e),es!==null&&uc(es,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)y0(a),a.blockedOn===null&&ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[nn]||null;if(typeof f=="function")v||b0(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[nn]||null)R=v.formAction;else if(Qf(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),b0(a)}}}function M0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $f(e){this._internalRoot=e}dc.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();p0(a,o,e,n,null,null)},dc.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p0(e.current,2,null,e,null,null),jl(),n[xn]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,e),a===0&&y0(e)}};var E0=t.version;if(E0!=="19.2.4")throw Error(s(527,E0,"19.2.4"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Te=hc.inject(Ty),Re=hc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Nm,f=Um,v=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=d0(e,1,!1,null,null,a,o,null,u,f,v,M0),e[xn]=n.current,Of(e),new $f(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Nm,v=Um,R=Lm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=d0(e,1,!0,n,a??null,o,u,H,f,v,R,M0),n.context=h0(null),a=n.current,o=si(),o=Vn(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,bn(n,a),Hi(n),e[xn]=n.current,Of(e),new dc(n)},Io.version="19.2.4",Io}var O0;function Py(){if(O0)return nd.exports;O0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nd.exports=Oy(),nd.exports}var Fy=Py();const zy=B_(Fy);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="182",Iy=0,P0=1,By=2,Oc=1,Hy=2,qo=3,ds=0,Jn=1,Ma=2,Ta=0,Ir=1,F0=2,z0=3,I0=4,Gy=5,Is=100,Vy=101,ky=102,Xy=103,qy=104,jy=200,Wy=201,Yy=202,Zy=203,zd=204,Id=205,Ky=206,Qy=207,Jy=208,$y=209,eS=210,tS=211,nS=212,iS=213,aS=214,Bd=0,Hd=1,Gd=2,Hr=3,Vd=4,kd=5,Xd=6,qd=7,H_=0,sS=1,rS=2,qi=0,G_=1,V_=2,k_=3,X_=4,q_=5,j_=6,W_=7,Y_=300,Xs=301,Gr=302,jd=303,Wd=304,qc=306,Yd=1e3,Ea=1001,Zd=1002,Un=1003,oS=1004,pc=1005,Fn=1006,rd=1007,Hs=1008,Si=1009,Z_=1010,K_=1011,Qo=1012,Lh=1013,Yi=1014,ki=1015,Ra=1016,Oh=1017,Ph=1018,Jo=1020,Q_=35902,J_=35899,$_=1021,ev=1022,Li=1023,wa=1026,Gs=1027,tv=1028,Fh=1029,Vr=1030,zh=1031,Ih=1033,Pc=33776,Fc=33777,zc=33778,Ic=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37488,ah=37489,sh=37490,rh=37491,oh=37808,lh=37809,ch=37810,uh=37811,fh=37812,dh=37813,hh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,yh=37821,Sh=36492,bh=36494,Mh=36495,Eh=36283,Th=36284,Ah=36285,Ch=36286,lS=3200,cS=0,uS=1,us="",xi="srgb",kr="srgb-linear",Hc="linear",qt="srgb",Mr=7680,B0=519,fS=512,dS=513,hS=514,Bh=515,pS=516,mS=517,Hh=518,gS=519,H0=35044,G0="300 es",Xi=2e3,Gc=2001;function nv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Vc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _S(){const r=Vc("canvas");return r.style.display="block",r}const V0={};function k0(...r){const t="THREE."+r.shift();console.log(t,...r)}function lt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ft(...r){const t="THREE."+r.shift();console.error(t,...r)}function $o(...r){const t=r.join(" ");t in V0||(V0[t]=!0,lt(...r))}function vS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X0=1234567;const Yo=Math.PI/180,el=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Rt(r,t,i){return Math.max(t,Math.min(i,r))}function Gh(r,t){return(r%t+t)%t}function xS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function yS(r,t,i){return r!==t?(i-r)/(t-r):0}function Zo(r,t,i){return(1-i)*r+i*t}function SS(r,t,i,s){return Zo(r,t,1-Math.exp(-i*s))}function bS(r,t=1){return t-Math.abs(Gh(r,t*2)-t)}function MS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function ES(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function TS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function AS(r,t){return r+Math.random()*(t-r)}function CS(r){return r*(.5-Math.random())}function RS(r){r!==void 0&&(X0=r);let t=X0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wS(r){return r*Yo}function DS(r){return r*el}function NS(r){return(r&r-1)===0&&r!==0}function US(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function LS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function OS(r,t,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+s)/2),_=d((t+s)/2),g=c((t-s)/2),x=d((t-s)/2),S=c((s-t)/2),E=d((s-t)/2);switch(l){case"XYX":r.set(h*_,m*g,m*x,h*p);break;case"YZY":r.set(m*x,h*_,m*g,h*p);break;case"ZXZ":r.set(m*g,m*x,h*_,h*p);break;case"XZX":r.set(h*_,m*E,m*S,h*p);break;case"YXY":r.set(m*S,h*_,m*E,h*p);break;case"ZYZ":r.set(m*E,m*S,h*_,h*p);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function zr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const od={DEG2RAD:Yo,RAD2DEG:el,generateUUID:jr,clamp:Rt,euclideanModulo:Gh,mapLinear:xS,inverseLerp:yS,lerp:Zo,damp:SS,pingpong:bS,smoothstep:MS,smootherstep:ES,randInt:TS,randFloat:AS,randFloatSpread:CS,seededRandom:RS,degToRad:wS,radToDeg:DS,isPowerOfTwo:NS,ceilPowerOfTwo:US,floorPowerOfTwo:LS,setQuaternionFromProperEuler:OS,normalize:Bn,denormalize:zr};class Gt{constructor(t=0,i=0){Gt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Rt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],x=c[d+0],S=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==x||p!==S||_!==E){let b=m*x+p*S+_*E+g*A;b<0&&(x=-x,S=-S,E=-E,A=-A,b=-b);let y=1-h;if(b<.9995){const D=Math.acos(b),N=Math.sin(D);y=Math.sin(y*D)/N,h=Math.sin(h*D)/N,m=m*y+x*h,p=p*y+S*h,_=_*y+E*h,g=g*y+A*h}else{m=m*y+x*h,p=p*y+S*h,_=_*y+E*h,g=g*y+A*h;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[d],x=c[d+1],S=c[d+2],E=c[d+3];return t[i]=h*E+_*g+m*S-p*x,t[i+1]=m*E+_*x+p*g-h*S,t[i+2]=p*E+_*S+h*x-m*g,t[i+3]=_*E-h*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=x*_*g+p*S*E,this._y=p*S*g-x*_*E,this._z=p*_*E+x*S*g,this._w=p*_*g-x*S*E;break;case"YXZ":this._x=x*_*g+p*S*E,this._y=p*S*g-x*_*E,this._z=p*_*E-x*S*g,this._w=p*_*g+x*S*E;break;case"ZXY":this._x=x*_*g-p*S*E,this._y=p*S*g+x*_*E,this._z=p*_*E+x*S*g,this._w=p*_*g-x*S*E;break;case"ZYX":this._x=x*_*g-p*S*E,this._y=p*S*g+x*_*E,this._z=p*_*E-x*S*g,this._w=p*_*g+x*S*E;break;case"YZX":this._x=x*_*g+p*S*E,this._y=p*S*g+x*_*E,this._z=p*_*E-x*S*g,this._w=p*_*g-x*S*E;break;case"XZY":this._x=x*_*g-p*S*E,this._y=p*S*g-x*_*E,this._z=p*_*E+x*S*g,this._w=p*_*g+x*S*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+h+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(q0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(q0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Rt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new re,q0=new nl;class yt{constructor(t,i,s,l,c,d,h,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],E=s[8],A=l[0],b=l[3],y=l[6],D=l[1],N=l[4],U=l[7],L=l[2],O=l[5],F=l[8];return c[0]=d*A+h*D+m*L,c[3]=d*b+h*N+m*O,c[6]=d*y+h*U+m*F,c[1]=p*A+_*D+g*L,c[4]=p*b+_*N+g*O,c[7]=p*y+_*U+g*F,c[2]=x*A+S*D+E*L,c[5]=x*b+S*N+E*O,c[8]=x*y+S*U+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,x=h*m-_*c,S=p*c-d*m,E=i*g+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-_*s)*A,t[2]=(h*s-l*d)*A,t[3]=x*A,t[4]=(_*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(d*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new yt,j0=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PS(){const r={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=Br(l.r),l.g=Br(l.g),l.b=Br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[kr]:{primaries:t,whitePoint:s,transfer:Hc,toXYZ:j0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:j0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Ut=PS();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class FS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=Vc("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Aa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:t.width,height:t.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zS=0;class Vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ud(l[d].image)):c.push(ud(l[d]))}else c=ud(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let IS=0;const fd=new re;class Gn extends qr{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ea,l=Ea,c=Fn,d=Hs,h=Li,m=Si,p=Gn.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=jr(),this.name="",this.source=new Vh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Y_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Y_;Gn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],S=m[5],E=m[9],A=m[2],b=m[6],y=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-b)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(S+1)/2,L=(y+1)/2,O=(_+x)/4,F=(g+A)/4,V=(E+b)/4;return N>U&&N>L?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=O/s,c=F/s):U>L?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=O/l,c=V/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=F/c,l=V/c),this.set(s,l,c,i),this}let D=Math.sqrt((b-E)*(b-E)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(b-E)/D,this.y=(g-A)/D,this.z=(x-_)/D,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this.w=Rt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this.w=Rt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Vh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends BS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class iv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HS extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),gc.subVectors(this.max,Bo),Tr.subVectors(t.a,Bo),Ar.subVectors(t.b,Bo),Cr.subVectors(t.c,Bo),is.subVectors(Ar,Tr),as.subVectors(Cr,Ar),Ns.subVectors(Tr,Cr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!dd(i,Tr,Ar,Cr,gc)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,Tr,Ar,Cr,gc))?!1:(_c.crossVectors(is,as),i=[_c.x,_c.y,_c.z],dd(i,Tr,Ar,Cr,gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new re,new re,new re,new re,new re,new re,new re,new re],wi=new re,mc=new il,Tr=new re,Ar=new re,Cr=new re,is=new re,as=new re,Ns=new re,Bo=new re,gc=new re,_c=new re,Us=new re;function dd(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const h=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),_=s.dot(Us);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const GS=new il,Ho=new re,hd=new re;class kh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):GS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(hd)),this.expandByPoint(Ho.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const xa=new re,pd=new re,vc=new re,ss=new re,md=new re,xc=new re,gd=new re;class VS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){pd.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(pd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(vc),h=ss.dot(this.direction),m=-ss.dot(vc),p=ss.lengthSq(),_=Math.abs(1-d*d);let g,x,S,E;if(_>0)if(g=d*m-h,x=d*h-m,E=c*_,g>=0)if(x>=-E)if(x<=E){const A=1/_;g*=A,x*=A,S=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-d*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(d*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=d>0?-c:c,g=Math.max(0,-(d*x+h)),S=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(pd).addScaledVector(vc,x),S}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,d=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,d=(t.min.y-x.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){md.subVectors(i,t),xc.subVectors(s,t),gd.crossVectors(md,xc);let d=this.direction.dot(gd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ss.subVectors(this.origin,t);const m=h*this.direction.dot(xc.crossVectors(ss,xc));if(m<0)return null;const p=h*this.direction.dot(md.cross(ss));if(p<0||m+p>d)return null;const _=-h*ss.dot(gd);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,i,s,l,c,d,h,m,p,_,g,x,S,E,A,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,_,g,x,S,E,A,b)}set(t,i,s,l,c,d,h,m,p,_,g,x,S,E,A,b){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=g,y[14]=x,y[3]=S,y[7]=E,y[11]=A,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),d=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=d*_,S=d*g,E=h*_,A=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=x-A*p,i[9]=-h*m,i[2]=A-x*p,i[6]=E+S*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*_,S=m*g,E=p*_,A=p*g;i[0]=x+A*h,i[4]=E*h-S,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=S*h-E,i[6]=A+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*_,S=m*g,E=p*_,A=p*g;i[0]=x-A*h,i[4]=-d*g,i[8]=E+S*h,i[1]=S+E*h,i[5]=d*_,i[9]=A-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*_,S=d*g,E=h*_,A=h*g;i[0]=m*_,i[4]=E*p-S,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*_,i[4]=A-x*g,i[8]=E*g+S,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*g+E,i[10]=x-A*g}else if(t.order==="XZY"){const x=d*m,S=d*p,E=h*m,A=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+A,i[5]=d*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=h*_,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kS,t,XS)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),rs.crossVectors(s,ri),rs.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),rs.crossVectors(s,ri)),rs.normalize(),yc.crossVectors(ri,rs),l[0]=rs.x,l[4]=yc.x,l[8]=ri.x,l[1]=rs.y,l[5]=yc.y,l[9]=ri.y,l[2]=rs.z,l[6]=yc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],E=s[2],A=s[6],b=s[10],y=s[14],D=s[3],N=s[7],U=s[11],L=s[15],O=l[0],F=l[4],V=l[8],T=l[12],w=l[1],X=l[5],J=l[9],K=l[13],ce=l[2],he=l[6],I=l[10],k=l[14],te=l[3],Me=l[7],ye=l[11],z=l[15];return c[0]=d*O+h*w+m*ce+p*te,c[4]=d*F+h*X+m*he+p*Me,c[8]=d*V+h*J+m*I+p*ye,c[12]=d*T+h*K+m*k+p*z,c[1]=_*O+g*w+x*ce+S*te,c[5]=_*F+g*X+x*he+S*Me,c[9]=_*V+g*J+x*I+S*ye,c[13]=_*T+g*K+x*k+S*z,c[2]=E*O+A*w+b*ce+y*te,c[6]=E*F+A*X+b*he+y*Me,c[10]=E*V+A*J+b*I+y*ye,c[14]=E*T+A*K+b*k+y*z,c[3]=D*O+N*w+U*ce+L*te,c[7]=D*F+N*X+U*he+L*Me,c[11]=D*V+N*J+U*I+L*ye,c[15]=D*T+N*K+U*k+L*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],S=t[14],E=t[3],A=t[7],b=t[11],y=t[15],D=m*S-p*x,N=h*S-p*g,U=h*x-m*g,L=d*S-p*_,O=d*x-m*_,F=d*g-h*_;return i*(A*D-b*N+y*U)-s*(E*D-b*L+y*O)+l*(E*N-A*L+y*F)-c*(E*U-A*O+b*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],S=t[11],E=t[12],A=t[13],b=t[14],y=t[15],D=g*b*p-A*x*p+A*m*S-h*b*S-g*m*y+h*x*y,N=E*x*p-_*b*p-E*m*S+d*b*S+_*m*y-d*x*y,U=_*A*p-E*g*p+E*h*S-d*A*S-_*h*y+d*g*y,L=E*g*m-_*A*m-E*h*x+d*A*x+_*h*b-d*g*b,O=i*D+s*N+l*U+c*L;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=D*F,t[1]=(A*x*c-g*b*c-A*l*S+s*b*S+g*l*y-s*x*y)*F,t[2]=(h*b*c-A*m*c+A*l*p-s*b*p-h*l*y+s*m*y)*F,t[3]=(g*m*c-h*x*c-g*l*p+s*x*p+h*l*S-s*m*S)*F,t[4]=N*F,t[5]=(_*b*c-E*x*c+E*l*S-i*b*S-_*l*y+i*x*y)*F,t[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*y-i*m*y)*F,t[7]=(d*x*c-_*m*c+_*l*p-i*x*p-d*l*S+i*m*S)*F,t[8]=U*F,t[9]=(E*g*c-_*A*c-E*s*S+i*A*S+_*s*y-i*g*y)*F,t[10]=(d*A*c-E*h*c+E*s*p-i*A*p-d*s*y+i*h*y)*F,t[11]=(_*h*c-d*g*c-_*s*p+i*g*p+d*s*S-i*h*S)*F,t[12]=L*F,t[13]=(_*A*l-E*g*l+E*s*x-i*A*x-_*s*b+i*g*b)*F,t[14]=(E*h*l-d*A*l-E*s*m+i*A*m+d*s*b-i*h*b)*F,t[15]=(d*g*l-_*h*l+_*s*m-i*g*m-d*s*x+i*h*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,g=h+h,x=c*p,S=c*_,E=c*g,A=d*_,b=d*g,y=h*g,D=m*p,N=m*_,U=m*g,L=s.x,O=s.y,F=s.z;return l[0]=(1-(A+y))*L,l[1]=(S+U)*L,l[2]=(E-N)*L,l[3]=0,l[4]=(S-U)*O,l[5]=(1-(x+y))*O,l[6]=(b+D)*O,l[7]=0,l[8]=(E+N)*F,l[9]=(b-D)*F,l[10]=(1-(x+A))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const d=Rr.set(l[4],l[5],l[6]).length(),h=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,_=1/d,g=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Xi)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Gc)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Xi)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===Gc)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new re,Di=new pn,kS=new re(0,0,0),XS=new re(1,1,1),rs=new re,yc=new re,ri=new re,Y0=new pn,Z0=new nl;class Da{constructor(t=0,i=0,s=0,l=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qS=0;const K0=new re,wr=new nl,ya=new pn,Sc=new re,Go=new re,jS=new re,WS=new nl,Q0=new re(1,0,0),J0=new re(0,1,0),$0=new re(0,0,1),e_={type:"added"},YS={type:"removed"},Dr={type:"childadded",child:null},_d={type:"childremoved",child:null};class li extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const t=new re,i=new Da,s=new nl,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new yt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Q0,t)}rotateY(t){return this.rotateOnAxis(J0,t)}rotateZ(t){return this.rotateOnAxis($0,t)}translateOnAxis(t,i){return K0.copy(t).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q0,t)}translateY(t){return this.translateOnAxis(J0,t)}translateZ(t){return this.translateOnAxis($0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Sc.copy(t):Sc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Go,Sc,this.up):ya.lookAt(Sc,Go,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(ya),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YS),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,jS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,WS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),x=d(t.skeletons),S=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}li.DEFAULT_UP=new re(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new re,Sa=new re,vd=new re,ba=new re,Nr=new re,Ur=new re,t_=new re,xd=new re,yd=new re,Sd=new re,bd=new ln,Md=new ln,Ed=new ln;class Ui{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),Sa.subVectors(s,i),vd.subVectors(t,i);const d=Ni.dot(Ni),h=Ni.dot(Sa),m=Ni.dot(vd),p=Sa.dot(Sa),_=Sa.dot(vd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-h*_)*x,E=(d*_-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(d,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return bd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),bd.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(bd,c.x),d.addScaledVector(Md,c.y),d.addScaledVector(Ed,c.z),d}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),Sa.subVectors(t,i),Ni.cross(Sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ni.cross(Sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Nr.subVectors(l,s),Ur.subVectors(c,s),xd.subVectors(t,s);const m=Nr.dot(xd),p=Ur.dot(xd);if(m<=0&&p<=0)return i.copy(s);yd.subVectors(t,l);const _=Nr.dot(yd),g=Ur.dot(yd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Nr,d);Sd.subVectors(t,c);const S=Nr.dot(Sd),E=Ur.dot(Sd);if(E>=0&&S<=E)return i.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Ur,h);const b=_*E-S*g;if(b<=0&&g-_>=0&&S-E>=0)return t_.subVectors(c,l),h=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(t_,h);const y=1/(b+A+x);return d=A*y,h=x*y,i.copy(s).addScaledVector(Nr,d).addScaledVector(Ur,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Td(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class zt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ut.workingColorSpace){if(t=Gh(t,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Td(d,c,t+1/3),this.g=Td(d,c,t),this.b=Td(d,c,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=sv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ut.workingToColorSpace(Pn.copy(this),t),Math.round(Rt(Pn.r*255,0,255))*65536+Math.round(Rt(Pn.g*255,0,255))*256+Math.round(Rt(Pn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=xi){Ut.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(bc);const s=Zo(os.h,bc.h,i),l=Zo(os.s,bc.s,i),c=Zo(os.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new zt;zt.NAMES=sv;let ZS=0;class jc extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Ir,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Id,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Id&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kc extends jc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new re,Mc=new Gt;let KS=0;class Wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=H0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H0&&(t.usage=this.usage),t}}class rv extends Wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ov extends Wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bi extends Wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let QS=0;const vi=new pn,Ad=new li,Lr=new re,oi=new il,Vo=new il,Sn=new re;class Ki extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nv(t)?ov:rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new yt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(oi.min,Vo.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Vo.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Vo.min),oi.expandByPoint(Vo.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Sn.fromBufferAttribute(h,p),m&&(Lr.fromBufferAttribute(t,p),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let V=0;V<s.count;V++)h[V]=new re,m[V]=new re;const p=new re,_=new re,g=new re,x=new Gt,S=new Gt,E=new Gt,A=new re,b=new re;function y(V,T,w){p.fromBufferAttribute(s,V),_.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,w),_.sub(p),g.sub(p),S.sub(x),E.sub(x);const X=1/(S.x*E.y-E.x*S.y);isFinite(X)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(X),b.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(X),h[V].add(A),h[T].add(A),h[w].add(A),m[V].add(b),m[T].add(b),m[w].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let V=0,T=D.length;V<T;++V){const w=D[V],X=w.start,J=w.count;for(let K=X,ce=X+J;K<ce;K+=3)y(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const N=new re,U=new re,L=new re,O=new re;function F(V){L.fromBufferAttribute(l,V),O.copy(L);const T=h[V];N.copy(T),N.sub(L.multiplyScalar(L.dot(T))).normalize(),U.crossVectors(O,T);const X=U.dot(m[V])<0?-1:1;d.setXYZW(V,N.x,N.y,N.z,X)}for(let V=0,T=D.length;V<T;++V){const w=D[V],X=w.start,J=w.count;for(let K=X,ce=X+J;K<ce;K+=3)F(t.getX(K+0)),F(t.getX(K+1)),F(t.getX(K+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new re,c=new re,d=new re,h=new re,m=new re,p=new re,_=new re,g=new re;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),A=t.getX(x+1),b=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,b),h.add(_),m.add(_),p.add(_),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let S=0,E=0;for(let A=0,b=m.length;A<b;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*_;for(let y=0;y<_;y++)x[E++]=p[S++]}return new Wi(x,_,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=t(x,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new pn,Ls=new VS,Ec=new kh,i_=new re,Tc=new re,Ac=new re,Cc=new re,Cd=new re,Rc=new re,a_=new re,wc=new re;class Oi extends li{constructor(t=new Ki,i=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Cd.fromBufferAttribute(g,t),d?Rc.addScaledVector(Cd,_):Rc.addScaledVector(Cd.sub(i),_))}i.add(Rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Ec.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ec,i_)===null||Ls.origin.distanceToSquared(i_)>(t.far-t.near)**2))&&(n_.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(n_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=x.length;E<A;E++){const b=x[E],y=d[b.materialIndex],D=Math.max(b.start,S.start),N=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let U=D,L=N;U<L;U+=3){const O=h.getX(U),F=h.getX(U+1),V=h.getX(U+2);l=Dc(this,y,t,s,p,_,g,O,F,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let b=E,y=A;b<y;b+=3){const D=h.getX(b),N=h.getX(b+1),U=h.getX(b+2);l=Dc(this,d,t,s,p,_,g,D,N,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=x.length;E<A;E++){const b=x[E],y=d[b.materialIndex],D=Math.max(b.start,S.start),N=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let U=D,L=N;U<L;U+=3){const O=U,F=U+1,V=U+2;l=Dc(this,y,t,s,p,_,g,O,F,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let b=E,y=A;b<y;b+=3){const D=b,N=b+1,U=b+2;l=Dc(this,d,t,s,p,_,g,D,N,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function JS(r,t,i,s,l,c,d,h){let m;if(t.side===Jn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===ds,h),m===null)return null;wc.copy(h),wc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:r}}function Dc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Tc),r.getVertexPosition(m,Ac),r.getVertexPosition(p,Cc);const _=JS(r,t,i,s,Tc,Ac,Cc,a_);if(_){const g=new re;Ui.getBarycoord(a_,Tc,Ac,Cc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new Gt)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new Gt)),d&&(_.normal=Ui.getInterpolatedAttribute(d,h,m,p,g,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};Ui.getNormal(Tc,Ac,Cc,x.normal),_.face=x,_.barycoord=g}return _}class al extends Ki{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(g,2));function E(A,b,y,D,N,U,L,O,F,V,T){const w=U/F,X=L/V,J=U/2,K=L/2,ce=O/2,he=F+1,I=V+1;let k=0,te=0;const Me=new re;for(let ye=0;ye<I;ye++){const z=ye*X-K;for(let ne=0;ne<he;ne++){const _e=ne*w-J;Me[A]=_e*D,Me[b]=z*N,Me[y]=ce,p.push(Me.x,Me.y,Me.z),Me[A]=0,Me[b]=0,Me[y]=O>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ne/F),g.push(1-ye/V),k+=1}}for(let ye=0;ye<V;ye++)for(let z=0;z<F;z++){const ne=x+z+he*ye,_e=x+z+he*(ye+1),Ce=x+(z+1)+he*(ye+1),Ie=x+(z+1)+he*ye;m.push(ne,_e,Ie),m.push(_e,Ce,Ie),te+=6}h.addGroup(S,te,T),S+=te,x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Xr(r[i]);for(const l in s)t[l]=s[l]}return t}function $S(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function lv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const eb={clone:Xr,merge:Hn};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=$S(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class cv extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new re,s_=new Gt,r_=new Gt;class yi extends cv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,s_,r_),i.subVectors(r_,s_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class ib extends li{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Or,Pr,t,i);l.layers=this.layers,this.add(l);const c=new yi(Or,Pr,t,i);c.layers=this.layers,this.add(c);const d=new yi(Or,Pr,t,i);d.layers=this.layers,this.add(d);const h=new yi(Or,Pr,t,i);h.layers=this.layers,this.add(h);const m=new yi(Or,Pr,t,i);m.layers=this.layers,this.add(m);const p=new yi(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class uv extends Gn{constructor(t=[],i=Xs,s,l,c,d,h,m,p,_){super(t,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fv extends ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new uv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Xr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ta});c.uniforms.tEquirect.value=i;const d=new Oi(l,c),h=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Fn),new ib(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class jo extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,s),y=this._getHandJoint(p,A);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new jo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class sb extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class rb extends Gn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=Un,_=Un,g,x){super(null,d,h,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new re,ob=new re,lb=new yt;class zs{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=wd.subVectors(s,i).cross(ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(wd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||lb.getNormalMatrix(t),l=this.coplanarPoint(wd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new kh,cb=new Gt(.5,.5),Nc=new re;class dv{constructor(t=new zs,i=new zs,s=new zs,l=new zs,c=new zs,d=new zs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],S=c[7],E=c[8],A=c[9],b=c[10],y=c[11],D=c[12],N=c[13],U=c[14],L=c[15];if(l[0].setComponents(p-d,S-_,y-E,L-D).normalize(),l[1].setComponents(p+d,S+_,y+E,L+D).normalize(),l[2].setComponents(p+h,S+g,y+A,L+N).normalize(),l[3].setComponents(p-h,S-g,y-A,L-N).normalize(),s)l[4].setComponents(m,x,b,U).normalize(),l[5].setComponents(p-m,S-x,y-b,L-U).normalize();else if(l[4].setComponents(p-m,S-x,y-b,L-U).normalize(),i===Xi)l[5].setComponents(p+m,S+x,y+b,L+U).normalize();else if(i===Gc)l[5].setComponents(m,x,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=cb.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?t.max.x:t.min.x,Nc.y=l.normal.y>0?t.max.y:t.min.y,Nc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tl extends Gn{constructor(t,i,s=Yi,l,c,d,h=Un,m=Un,p,_=wa,g=1){if(_!==wa&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ub extends tl{constructor(t,i=Yi,s=Xs,l,c,d=Un,h=Un,m,p=wa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xh extends Ki{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),_(),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(c.slice(),3)),this.setAttribute("uv",new bi(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const N=new re,U=new re,L=new re;for(let O=0;O<i.length;O+=3)S(i[O+0],N),S(i[O+1],U),S(i[O+2],L),m(N,U,L,D)}function m(D,N,U,L){const O=L+1,F=[];for(let V=0;V<=O;V++){F[V]=[];const T=D.clone().lerp(U,V/O),w=N.clone().lerp(U,V/O),X=O-V;for(let J=0;J<=X;J++)J===0&&V===O?F[V][J]=T:F[V][J]=T.clone().lerp(w,J/X)}for(let V=0;V<O;V++)for(let T=0;T<2*(O-V)-1;T++){const w=Math.floor(T/2);T%2===0?(x(F[V][w+1]),x(F[V+1][w]),x(F[V][w])):(x(F[V][w+1]),x(F[V+1][w+1]),x(F[V+1][w]))}}function p(D){const N=new re;for(let U=0;U<c.length;U+=3)N.x=c[U+0],N.y=c[U+1],N.z=c[U+2],N.normalize().multiplyScalar(D),c[U+0]=N.x,c[U+1]=N.y,c[U+2]=N.z}function _(){const D=new re;for(let N=0;N<c.length;N+=3){D.x=c[N+0],D.y=c[N+1],D.z=c[N+2];const U=b(D)/2/Math.PI+.5,L=y(D)/Math.PI+.5;d.push(U,1-L)}E(),g()}function g(){for(let D=0;D<d.length;D+=6){const N=d[D+0],U=d[D+2],L=d[D+4],O=Math.max(N,U,L),F=Math.min(N,U,L);O>.9&&F<.1&&(N<.2&&(d[D+0]+=1),U<.2&&(d[D+2]+=1),L<.2&&(d[D+4]+=1))}}function x(D){c.push(D.x,D.y,D.z)}function S(D,N){const U=D*3;N.x=t[U+0],N.y=t[U+1],N.z=t[U+2]}function E(){const D=new re,N=new re,U=new re,L=new re,O=new Gt,F=new Gt,V=new Gt;for(let T=0,w=0;T<c.length;T+=9,w+=6){D.set(c[T+0],c[T+1],c[T+2]),N.set(c[T+3],c[T+4],c[T+5]),U.set(c[T+6],c[T+7],c[T+8]),O.set(d[w+0],d[w+1]),F.set(d[w+2],d[w+3]),V.set(d[w+4],d[w+5]),L.copy(D).add(N).add(U).divideScalar(3);const X=b(L);A(O,w+0,D,X),A(F,w+2,N,X),A(V,w+4,U,X)}}function A(D,N,U,L){L<0&&D.x===1&&(d[N]=D.x-1),U.x===0&&U.z===0&&(d[N]=L/2/Math.PI+.5)}function b(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xh(t.vertices,t.indices,t.radius,t.detail)}}class Xc extends Xh{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Xc(t.radius,t.detail)}}class Wc extends Ki{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,x=i/m,S=[],E=[],A=[],b=[];for(let y=0;y<_;y++){const D=y*x-d;for(let N=0;N<p;N++){const U=N*g-c;E.push(U,-D,0),A.push(0,0,1),b.push(N/h),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<h;D++){const N=D+p*y,U=D+p*(y+1),L=D+1+p*(y+1),O=D+1+p*y;S.push(N,U,O),S.push(U,L,O)}this.setIndex(S),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(A,3)),this.setAttribute("uv",new bi(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class fb extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class db extends jc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hb extends jc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pv extends cv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pb extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function o_(r,t,i,s){const l=gb(s);switch(i){case $_:return r*t;case tv:return r*t/l.components*l.byteLength;case Fh:return r*t/l.components*l.byteLength;case Vr:return r*t*2/l.components*l.byteLength;case zh:return r*t*2/l.components*l.byteLength;case ev:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case Ih:return r*t*4/l.components*l.byteLength;case Pc:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zc:case Ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(r,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(r,8)*Math.max(t,8)/2;case eh:case th:case ih:case ah:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nh:case sh:case rh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ch:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ph:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case mh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Sh:case bh:case Mh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Eh:case Th:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ah:case Ch:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gb(r){switch(r){case Si:case Z_:return{byteLength:1,components:1};case Qo:case K_:case Ra:return{byteLength:2,components:1};case Oh:case Ph:return{byteLength:2,components:4};case Yi:case Lh:case ki:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mv(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function _b(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
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
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
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
#endif`,Cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ub=`#ifdef USE_BUMPMAP
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,rM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`uniform sampler2D dfgLUT;
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
}`,_M=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nE=`float getShadowMask() {
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
}`,TE=`#define DISTANCE
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
}`,AE=`#define DISTANCE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,UE=`uniform vec3 diffuse;
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
}`,LE=`#define LAMBERT
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
}`,OE=`#define LAMBERT
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
}`,PE=`#define MATCAP
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
}`,FE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,BE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,VE=`#define STANDARD
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
}`,kE=`#define TOON
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
}`,XE=`#define TOON
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
}`,qE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,YE=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,KE=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:yb,alphamap_pars_fragment:Sb,alphatest_fragment:bb,alphatest_pars_fragment:Mb,aomap_fragment:Eb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:Cb,begin_vertex:Rb,beginnormal_vertex:wb,bsdfs:Db,iridescence_fragment:Nb,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Pb,clipping_planes_vertex:Fb,color_fragment:zb,color_pars_fragment:Ib,color_pars_vertex:Bb,color_vertex:Hb,common:Gb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:kb,displacementmap_pars_vertex:Xb,displacementmap_vertex:qb,emissivemap_fragment:jb,emissivemap_pars_fragment:Wb,colorspace_fragment:Yb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:Jb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:aM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:rM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:fM,lights_toon_pars_fragment:dM,lights_phong_fragment:hM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:xM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:CM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:wM,morphinstance_vertex:DM,morphcolor_vertex:NM,morphnormal_vertex:UM,morphtarget_pars_vertex:LM,morphtarget_vertex:OM,normal_fragment_begin:PM,normal_fragment_maps:FM,normal_pars_fragment:zM,normal_pars_vertex:IM,normal_vertex:BM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:XM,opaque_fragment:qM,packing:jM,premultiplied_alpha_fragment:WM,project_vertex:YM,dithering_fragment:ZM,dithering_pars_fragment:KM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:sE,skinnormal_vertex:rE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:dE,uv_pars_fragment:hE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:SE,cube_frag:bE,depth_vert:ME,depth_frag:EE,distance_vert:TE,distance_frag:AE,equirect_vert:CE,equirect_frag:RE,linedashed_vert:wE,linedashed_frag:DE,meshbasic_vert:NE,meshbasic_frag:UE,meshlambert_vert:LE,meshlambert_frag:OE,meshmatcap_vert:PE,meshmatcap_frag:FE,meshnormal_vert:zE,meshnormal_frag:IE,meshphong_vert:BE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:XE,points_vert:qE,points_frag:jE,shadow_vert:WE,shadow_frag:YE,sprite_vert:ZE,sprite_frag:KE},Ve={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Vi={basic:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Hn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Hn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Hn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Hn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Hn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Hn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Hn([Ve.common,Ve.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Hn([Ve.lights,Ve.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Vi.physical={uniforms:Hn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Uc={r:0,b:0,g:0},Ps=new Da,QE=new pn;function JE(r,t,i,s,l,c,d){const h=new zt(0);let m=c===!0?0:1,p,_,g=null,x=0,S=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function A(N){let U=!1;const L=E(N);L===null?y(h,m):L&&L.isColor&&(y(L,1),U=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(N,U){const L=E(U);L&&(L.isCubeTexture||L.mapping===qc)?(_===void 0&&(_=new Oi(new al(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Xr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ps.copy(U.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(Ps)),_.material.toneMapped=Ut.getTransfer(L.colorSpace)!==qt,(g!==L||x!==L.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=L,x=L.version,S=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Oi(new Wc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Xr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(L.colorSpace)!==qt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||x!==L.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=L,x=L.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function y(N,U){N.getRGB(Uc,lv(r)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,U,d)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,U=1){h.set(N),m=U,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,y(h,m)},render:A,addToRenderList:b,dispose:D}}function $E(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function h(w,X,J,K,ce){let he=!1;const I=g(K,J,X);c!==I&&(c=I,p(c.object)),he=S(w,K,J,ce),he&&E(w,K,J,ce),ce!==null&&t.update(ce,r.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,U(w,X,J,K),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function _(w){return r.deleteVertexArray(w)}function g(w,X,J){const K=J.wireframe===!0;let ce=s[w.id];ce===void 0&&(ce={},s[w.id]=ce);let he=ce[X.id];he===void 0&&(he={},ce[X.id]=he);let I=he[K];return I===void 0&&(I=x(m()),he[K]=I),I}function x(w){const X=[],J=[],K=[];for(let ce=0;ce<i;ce++)X[ce]=0,J[ce]=0,K[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:K,object:w,attributes:{},index:null}}function S(w,X,J,K){const ce=c.attributes,he=X.attributes;let I=0;const k=J.getAttributes();for(const te in k)if(k[te].location>=0){const ye=ce[te];let z=he[te];if(z===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),ye===void 0||ye.attribute!==z||z&&ye.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==K}function E(w,X,J,K){const ce={},he=X.attributes;let I=0;const k=J.getAttributes();for(const te in k)if(k[te].location>=0){let ye=he[te];ye===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor));const z={};z.attribute=ye,ye&&ye.data&&(z.data=ye.data),ce[te]=z,I++}c.attributes=ce,c.attributesNum=I,c.index=K}function A(){const w=c.newAttributes;for(let X=0,J=w.length;X<J;X++)w[X]=0}function b(w){y(w,0)}function y(w,X){const J=c.newAttributes,K=c.enabledAttributes,ce=c.attributeDivisors;J[w]=1,K[w]===0&&(r.enableVertexAttribArray(w),K[w]=1),ce[w]!==X&&(r.vertexAttribDivisor(w,X),ce[w]=X)}function D(){const w=c.newAttributes,X=c.enabledAttributes;for(let J=0,K=X.length;J<K;J++)X[J]!==w[J]&&(r.disableVertexAttribArray(J),X[J]=0)}function N(w,X,J,K,ce,he,I){I===!0?r.vertexAttribIPointer(w,X,J,ce,he):r.vertexAttribPointer(w,X,J,K,ce,he)}function U(w,X,J,K){A();const ce=K.attributes,he=J.getAttributes(),I=X.defaultAttributeValues;for(const k in he){const te=he[k];if(te.location>=0){let Me=ce[k];if(Me===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const ye=Me.normalized,z=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ce=ne.type,Ie=ne.bytesPerElement,$=Ce===r.INT||Ce===r.UNSIGNED_INT||Me.gpuType===Lh;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ue=ue.stride,We=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<te.locationSize;ke++)y(te.location+ke,ue.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<te.locationSize;ke++)b(te.location+ke);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let ke=0;ke<te.locationSize;ke++)N(te.location+ke,z/te.locationSize,Ce,ye,Ue*Ie,(We+z/te.locationSize*ke)*Ie,$)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)y(te.location+ue,Me.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<te.locationSize;ue++)b(te.location+ue);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let ue=0;ue<te.locationSize;ue++)N(te.location+ue,z/te.locationSize,Ce,ye,z*Ie,z/te.locationSize*ue*Ie,$)}}else if(I!==void 0){const ye=I[k];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(te.location,ye);break;case 3:r.vertexAttrib3fv(te.location,ye);break;case 4:r.vertexAttrib4fv(te.location,ye);break;default:r.vertexAttrib1fv(te.location,ye)}}}}D()}function L(){V();for(const w in s){const X=s[w];for(const J in X){const K=X[J];for(const ce in K)_(K[ce].object),delete K[ce];delete X[J]}delete s[w]}}function O(w){if(s[w.id]===void 0)return;const X=s[w.id];for(const J in X){const K=X[J];for(const ce in K)_(K[ce].object),delete K[ce];delete X[J]}delete s[w.id]}function F(w){for(const X in s){const J=s[X];if(J[w.id]===void 0)continue;const K=J[w.id];for(const ce in K)_(K[ce].object),delete K[ce];delete J[w.id]}}function V(){T(),d=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:b,disableUnusedAttributes:D}}function e1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,s,1)}function m(p,_,g,x){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)d(p[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function t1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Li&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const V=F===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Si&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!V)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:L,samples:O}}function n1(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new zs,h=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,A=g.clipIntersection,b=g.clipShadows,y=r.get(g);if(!l||E===null||E.length===0||c&&!b)c?_(null):p();else{const D=c?0:s,N=D*4;let U=y.clippingState||null;m.value=U,U=_(E,x,N,S);for(let L=0;L!==N;++L)U[L]=i[L];y.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,S,E){const A=g!==null?g.length:0;let b=null;if(A!==0){if(b=m.value,E!==!0||b===null){const y=S+A*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(b===null||b.length<y)&&(b=new Float32Array(y));for(let N=0,U=S;N!==A;++N,U+=4)d.copy(g[N]).applyMatrix4(D,h),d.normal.toArray(b,U),b[U+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}function i1(r){let t=new WeakMap;function i(d,h){return h===jd?d.mapping=Xs:h===Wd&&(d.mapping=Gr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===jd||h===Wd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new fv(m.height);return p.fromEquirectangularTexture(r,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const fs=4,l_=[.125,.215,.35,.446,.526,.582],Bs=20,a1=256,ko=new pv,c_=new zt;let Dd=null,Nd=0,Ud=0,Ld=!1;const s1=new re;class u_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=s1}=c;Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Nd,Ud),this._renderer.xr.enabled=Ld,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xs||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ra,format:Li,colorSpace:kr,depthBuffer:!1},l=f_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r1(c)),this._blurMaterial=l1(c,t,i),this._ggxMaterial=o1(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new Ki,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(c_),g.toneMapping=qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new al,new kc({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let y=!1;const D=t.background;D?D.isColor&&(b.color.copy(D),t.background=null,y=!0):(b.color.copy(c_),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const L=this._cubeSize;Fr(l,U*L,N>2?L:0,L,L),g.setRenderTarget(l),y&&g.render(A,m),g.render(t,m)}g.toneMapping=S,g.autoClear=x,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Xs||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,S=g*x,{_lodMax:E}=this,A=this._sizeLods[s],b=3*A*(s>E-fs?s-E+fs:0),y=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Fr(c,b,y,3*A,2*A),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Fr(t,b,y,3*A,2*A),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),A=c/E,b=isFinite(c)?1+Math.floor(_*A):Bs;b>Bs&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Bs}`);const y=[];let D=0;for(let F=0;F<Bs;++F){const V=F/A,T=Math.exp(-V*V/2);y.push(T),F===0?D+=T:F<b&&(D+=2*T)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;x.envMap.value=t.texture,x.samples.value=b,x.weights.value=y,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const U=this._sizeLods[l],L=3*U*(l>N-fs?l-N+fs:0),O=4*(this._cubeSize-U);Fr(i,L,O,3*U,2*U),m.setRenderTarget(i),m.render(g,ko)}}function r1(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+l_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>r-fs?m=l_[d-r+fs-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,A=3,b=2,y=1,D=new Float32Array(A*E*S),N=new Float32Array(b*E*S),U=new Float32Array(y*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,V=O>2?0:-1,T=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];D.set(T,A*E*O),N.set(x,b*E*O);const w=[O,O,O,O,O,O];U.set(w,y*E*O)}const L=new Ki;L.setAttribute("position",new Wi(D,A)),L.setAttribute("uv",new Wi(N,b)),L.setAttribute("faceIndex",new Wi(U,y)),s.push(new Oi(L,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function f_(r,t,i){const s=new ji(r,t,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function o1(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function l1(r,t,i){const s=new Float32Array(Bs),l=new re(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function d_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function h_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function c1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===jd||m===Wd,_=m===Xs||m===Gr;if(p||_){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new u_(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new u_(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function u1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$o("WebGLRenderer: "+s+" extension not supported."),l}}}function f1(r,t,i,s){const l={},c=new WeakMap;function d(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let N=0,U=D.length;N<U;N+=3){const L=D[N+0],O=D[N+1],F=D[N+2];x.push(L,O,O,F,F,L)}}else if(E!==void 0){const D=E.array;A=E.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const L=N+0,O=N+1,F=N+2;x.push(L,O,O,F,F,L)}}else return;const b=new(nv(x)?ov:rv)(x,1);b.version=A;const y=c.get(g);y&&t.remove(y),c.set(g,b)}function _(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function d1(r,t,i){let s;function l(x){s=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*d),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*d,E),i.update(S,s,E))}function _(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let b=0;for(let y=0;y<E;y++)b+=S[y];i.update(b,s,1)}function g(x,S,E,A){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<x.length;y++)p(x[y]/d,S[y],A[y]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,A,0,E);let y=0;for(let D=0;D<E;D++)y+=S[D]*A[D];i.update(y,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function h1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ft("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function p1(r,t,i){const s=new WeakMap,l=new ln;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let T=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),A===!0&&(N=3);let U=h.attributes.position.count*N,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const O=new Float32Array(U*L*4*g),F=new iv(O,U,L,g);F.type=ki,F.needsUpdate=!0;const V=N*4;for(let w=0;w<g;w++){const X=b[w],J=y[w],K=D[w],ce=U*L*4*w;for(let he=0;he<X.count;he++){const I=he*V;S===!0&&(l.fromBufferAttribute(X,he),O[ce+I+0]=l.x,O[ce+I+1]=l.y,O[ce+I+2]=l.z,O[ce+I+3]=0),E===!0&&(l.fromBufferAttribute(J,he),O[ce+I+4]=l.x,O[ce+I+5]=l.y,O[ce+I+6]=l.z,O[ce+I+7]=0),A===!0&&(l.fromBufferAttribute(K,he),O[ce+I+8]=l.x,O[ce+I+9]=l.y,O[ce+I+10]=l.z,O[ce+I+11]=K.itemSize===4?l.w:1)}}x={count:g,texture:F,size:new Gt(U,L)},s.set(h,x),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let S=0;for(let A=0;A<p.length;A++)S+=p[A];const E=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function m1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const g1={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[W_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function _1(r,t,i,s,l){const c=new ji(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new ji(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),h=new Ki;h.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(h,m),_=new pv(-1,1,1,-1,0,1);let g=null,x=null,S=!1,E,A=null,b=[],y=!1;this.setSize=function(D,N){c.setSize(D,N),d.setSize(D,N);for(let U=0;U<b.length;U++){const L=b[U];L.setSize&&L.setSize(D,N)}},this.setEffects=function(D){b=D,y=b.length>0&&b[0].isRenderPass===!0;const N=c.width,U=c.height;for(let L=0;L<b.length;L++){const O=b[L];O.setSize&&O.setSize(N,U)}},this.begin=function(D,N){if(S||D.toneMapping===qi&&b.length===0)return!1;if(A=N,N!==null){const U=N.width,L=N.height;(c.width!==U||c.height!==L)&&this.setSize(U,L)}return y===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=qi,!0},this.hasRenderPass=function(){return y},this.end=function(D,N){D.toneMapping=E,S=!0;let U=c,L=d;for(let O=0;O<b.length;O++){const F=b[O];if(F.enabled!==!1&&(F.render(D,L,U,N),F.needsSwap!==!1)){const V=U;U=L,L=V}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},Ut.getTransfer(g)===qt&&(m.defines.SRGB_TRANSFER="");const O=g1[x];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(A),D.render(p,_),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const gv=new Gn,Rh=new tl(1,1),_v=new iv,vv=new HS,xv=new uv,p_=[],m_=[],g_=new Float32Array(16),__=new Float32Array(9),v_=new Float32Array(4);function Wr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=p_[l];if(c===void 0&&(c=new Float32Array(l),p_[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Zc(r,t){let i=m_[t];i===void 0&&(i=new Int32Array(t),m_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function v1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function b1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;v_.set(s),r.uniformMatrix2fv(this.addr,!1,v_),vn(i,s)}}function M1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;__.set(s),r.uniformMatrix3fv(this.addr,!1,__),vn(i,s)}}function E1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;g_.set(s),r.uniformMatrix4fv(this.addr,!1,g_),vn(i,s)}}function T1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function A1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function C1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function R1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function w1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function U1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function L1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Hh:Bh,c=Rh):c=gv,i.setTexture2D(t||c,l)}function O1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vv,l)}function P1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xv,l)}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_v,l)}function z1(r){switch(r){case 5126:return v1;case 35664:return x1;case 35665:return y1;case 35666:return S1;case 35674:return b1;case 35675:return M1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return w1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return F1}}function I1(r,t){r.uniform1fv(this.addr,t)}function B1(r,t){const i=Wr(t,this.size,2);r.uniform2fv(this.addr,i)}function H1(r,t){const i=Wr(t,this.size,3);r.uniform3fv(this.addr,i)}function G1(r,t){const i=Wr(t,this.size,4);r.uniform4fv(this.addr,i)}function V1(r,t){const i=Wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function k1(r,t){const i=Wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function X1(r,t){const i=Wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function q1(r,t){r.uniform1iv(this.addr,t)}function j1(r,t){r.uniform2iv(this.addr,t)}function W1(r,t){r.uniform3iv(this.addr,t)}function Y1(r,t){r.uniform4iv(this.addr,t)}function Z1(r,t){r.uniform1uiv(this.addr,t)}function K1(r,t){r.uniform2uiv(this.addr,t)}function Q1(r,t){r.uniform3uiv(this.addr,t)}function J1(r,t){r.uniform4uiv(this.addr,t)}function $1(r,t,i){const s=this.cache,l=t.length,c=Zc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Rh:d=gv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function eT(r,t,i){const s=this.cache,l=t.length,c=Zc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||vv,c[d])}function tT(r,t,i){const s=this.cache,l=t.length,c=Zc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||xv,c[d])}function nT(r,t,i){const s=this.cache,l=t.length,c=Zc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||_v,c[d])}function iT(r){switch(r){case 5126:return I1;case 35664:return B1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return q1;case 35667:case 35671:return j1;case 35668:case 35672:return W1;case 35669:case 35673:return Y1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}class aT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=z1(i.type)}}class sT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iT(i.type)}}class rT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function x_(r,t){r.seq.push(t),r.map[t.id]=t}function oT(r,t,i){const s=r.name,l=s.length;for(Od.lastIndex=0;;){const c=Od.exec(s),d=Od.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){x_(i,p===void 0?new aT(h,r,t):new sT(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new rT(h),x_(i,g)),i=g}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);oT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function y_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const lT=37297;let cT=0;function uT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const S_=new yt;function fT(r){Ut._getMatrix(S_,Ut.workingColorSpace,r);const t=`mat3( ${S_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(r)){case Hc:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function b_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+uT(r.getShaderSource(t),h)}else return c}function dT(r,t){const i=fT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const hT={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[X_]:"ACESFilmic",[j_]:"AgX",[W_]:"Neutral",[q_]:"Custom"};function pT(r,t){const i=hT[t];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new re;function mT(){Ut.getLuminanceCoefficients(Lc);const r=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function _T(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function vT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Wo(r){return r!==""}function M_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function E_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(r){return r.replace(xT,ST)}const yT=new Map;function ST(r,t){let i=St[t];if(i===void 0){const s=yT.get(t);if(s!==void 0)i=St[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return wh(i)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(r){return r.replace(bT,MT)}function MT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function A_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const ET={[Oc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function TT(r){return ET[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AT={[Xs]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function CT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":AT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const RT={[Gr]:"ENVMAP_MODE_REFRACTION"};function wT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":RT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DT={[H_]:"ENVMAP_BLENDING_MULTIPLY",[sS]:"ENVMAP_BLENDING_MIX",[rS]:"ENVMAP_BLENDING_ADD"};function NT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":DT[r.combine]||"ENVMAP_BLENDING_NONE"}function UT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=TT(i),p=CT(i),_=wT(i),g=NT(i),x=UT(i),S=gT(i),E=_T(c),A=l.createProgram();let b,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`)):(b=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),y=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?St.tonemapping_pars_fragment:"",i.toneMapping!==qi?pT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,dT("linearToOutputTexel",i.outputColorSpace),mT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=wh(d),d=M_(d,i),d=E_(d,i),h=wh(h),h=M_(h,i),h=E_(h,i),d=T_(d),h=T_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=D+b+d,U=D+y+h,L=y_(l,l.VERTEX_SHADER,N),O=y_(l,l.FRAGMENT_SHADER,U);l.attachShader(A,L),l.attachShader(A,O),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(X){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",K=l.getShaderInfoLog(L)||"",ce=l.getShaderInfoLog(O)||"",he=J.trim(),I=K.trim(),k=ce.trim();let te=!0,Me=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,L,O);else{const ye=b_(l,L,"vertex"),z=b_(l,O,"fragment");Ft("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+he+`
`+ye+`
`+z)}else he!==""?lt("WebGLProgram: Program Info Log:",he):(I===""||k==="")&&(Me=!1);Me&&(X.diagnostics={runnable:te,programLog:he,vertexShader:{log:I,prefix:b},fragmentShader:{log:k,prefix:y}})}l.deleteShader(L),l.deleteShader(O),V=new Bc(l,A),T=vT(l,A)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,lT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=O,this}let OT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new FT(t),i.set(t,s)),s}}class FT{constructor(t){this.id=OT++,this.code=t,this.usedTimes=0}}function zT(r,t,i,s,l,c,d){const h=new av,m=new PT,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,w,X,J,K){const ce=J.fog,he=K.geometry,I=T.isMeshStandardMaterial?J.environment:null,k=(T.isMeshStandardMaterial?i:t).get(T.envMap||I),te=k&&k.mapping===qc?k.image.height:null,Me=E[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const ye=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,z=ye!==void 0?ye.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let _e,Ce,Ie,$;if(Me){const Dt=Vi[Me];_e=Dt.vertexShader,Ce=Dt.fragmentShader}else _e=T.vertexShader,Ce=T.fragmentShader,m.update(T),Ie=m.getVertexShaderID(T),$=m.getFragmentShaderID(T);const ue=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),We=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,ut=!!T.map,ht=!!T.matcap,st=!!k,pt=!!T.aoMap,mt=!!T.lightMap,at=!!T.bumpMap,wt=!!T.normalMap,G=!!T.displacementMap,bt=!!T.emissiveMap,gt=!!T.metalnessMap,ft=!!T.roughnessMap,Ye=T.anisotropy>0,P=T.clearcoat>0,M=T.dispersion>0,W=T.iridescence>0,ge=T.sheen>0,Ee=T.transmission>0,fe=Ye&&!!T.anisotropyMap,Qe=P&&!!T.clearcoatMap,Ne=P&&!!T.clearcoatNormalMap,Xe=P&&!!T.clearcoatRoughnessMap,it=W&&!!T.iridescenceMap,Te=W&&!!T.iridescenceThicknessMap,Re=ge&&!!T.sheenColorMap,Be=ge&&!!T.sheenRoughnessMap,He=!!T.specularMap,Le=!!T.specularColorMap,dt=!!T.specularIntensityMap,j=Ee&&!!T.transmissionMap,Pe=Ee&&!!T.thicknessMap,we=!!T.gradientMap,Ge=!!T.alphaMap,Ae=T.alphaTest>0,xe=!!T.alphaHash,De=!!T.extensions;let rt=qi;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Lt={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:Ce,defines:T.defines,customVertexShaderID:Ie,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:We,instancingColor:We&&K.instanceColor!==null,instancingMorph:We&&K.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:kr,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:ht,envMap:st,envMapMode:st&&k.mapping,envMapCubeUVHeight:te,aoMap:pt,lightMap:mt,bumpMap:at,normalMap:wt,displacementMap:G,emissiveMap:bt,normalMapObjectSpace:wt&&T.normalMapType===uS,normalMapTangentSpace:wt&&T.normalMapType===cS,metalnessMap:gt,roughnessMap:ft,anisotropy:Ye,anisotropyMap:fe,clearcoat:P,clearcoatMap:Qe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:W,iridescenceMap:it,iridescenceThicknessMap:Te,sheen:ge,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:He,specularColorMap:Le,specularIntensityMap:dt,transmission:Ee,transmissionMap:j,thicknessMap:Pe,gradientMap:we,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:xe,combine:T.combine,mapUv:ut&&A(T.map.channel),aoMapUv:pt&&A(T.aoMap.channel),lightMapUv:mt&&A(T.lightMap.channel),bumpMapUv:at&&A(T.bumpMap.channel),normalMapUv:wt&&A(T.normalMap.channel),displacementMapUv:G&&A(T.displacementMap.channel),emissiveMapUv:bt&&A(T.emissiveMap.channel),metalnessMapUv:gt&&A(T.metalnessMap.channel),roughnessMapUv:ft&&A(T.roughnessMap.channel),anisotropyMapUv:fe&&A(T.anisotropyMap.channel),clearcoatMapUv:Qe&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(T.sheenRoughnessMap.channel),specularMapUv:He&&A(T.specularMap.channel),specularColorMapUv:Le&&A(T.specularColorMap.channel),specularIntensityMapUv:dt&&A(T.specularIntensityMap.channel),transmissionMapUv:j&&A(T.transmissionMap.channel),thicknessMapUv:Pe&&A(T.thicknessMap.channel),alphaMapUv:Ge&&A(T.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(wt||Ye),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(ut||Ge),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ue,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&Ut.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:bt&&T.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function y(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)w.push(X),w.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(D(w,T),N(w,T),w.push(r.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function D(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function N(T,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),T.push(h.mask)}function U(T){const w=E[T.type];let X;if(w){const J=Vi[w];X=eb.clone(J.uniforms)}else X=T.uniforms;return X}function L(T,w){let X=g.get(w);return X!==void 0?++X.usedTimes:(X=new LT(r,w,T,c),_.push(X),g.set(w,X)),X}function O(T){if(--T.usedTimes===0){const w=_.indexOf(T);_[w]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function F(T){m.remove(T)}function V(){m.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:U,acquireProgram:L,releaseProgram:O,releaseShaderCache:F,programs:_,dispose:V}}function IT(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function BT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function C_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function R_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g,x,S,E,A,b){let y=r[t];return y===void 0?(y={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:b},r[t]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=A,y.group=b),t++,y}function h(g,x,S,E,A,b){const y=d(g,x,S,E,A,b);S.transmission>0?s.push(y):S.transparent===!0?l.push(y):i.push(y)}function m(g,x,S,E,A,b){const y=d(g,x,S,E,A,b);S.transmission>0?s.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function p(g,x){i.length>1&&i.sort(g||BT),s.length>1&&s.sort(x||C_),l.length>1&&l.sort(x||C_)}function _(){for(let g=t,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function HT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new R_,r.set(s,[d])):l>=c.length?(d=new R_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function GT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new zt};break;case"SpotLight":i={position:new re,direction:new re,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[t.id]=i,i}}}function VT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let kT=0;function XT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qT(r){const t=new GT,i=VT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new pn,d=new pn;function h(p){let _=0,g=0,x=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let S=0,E=0,A=0,b=0,y=0,D=0,N=0,U=0,L=0,O=0,F=0;p.sort(XT);for(let T=0,w=p.length;T<w;T++){const X=p[T],J=X.color,K=X.intensity,ce=X.distance;let he=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Vr?he=X.shadow.map.texture:he=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=J.r*K,g+=J.g*K,x+=J.b*K;else if(X.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(X.sh.coefficients[I],K);F++}else if(X.isDirectionalLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const k=X.shadow,te=i.get(X);te.shadowIntensity=k.intensity,te.shadowBias=k.bias,te.shadowNormalBias=k.normalBias,te.shadowRadius=k.radius,te.shadowMapSize=k.mapSize,s.directionalShadow[S]=te,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=X.shadow.matrix,D++}s.directional[S]=I,S++}else if(X.isSpotLight){const I=t.get(X);I.position.setFromMatrixPosition(X.matrixWorld),I.color.copy(J).multiplyScalar(K),I.distance=ce,I.coneCos=Math.cos(X.angle),I.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),I.decay=X.decay,s.spot[A]=I;const k=X.shadow;if(X.map&&(s.spotLightMap[L]=X.map,L++,k.updateMatrices(X),X.castShadow&&O++),s.spotLightMatrix[A]=k.matrix,X.castShadow){const te=i.get(X);te.shadowIntensity=k.intensity,te.shadowBias=k.bias,te.shadowNormalBias=k.normalBias,te.shadowRadius=k.radius,te.shadowMapSize=k.mapSize,s.spotShadow[A]=te,s.spotShadowMap[A]=he,U++}A++}else if(X.isRectAreaLight){const I=t.get(X);I.color.copy(J).multiplyScalar(K),I.halfWidth.set(X.width*.5,0,0),I.halfHeight.set(0,X.height*.5,0),s.rectArea[b]=I,b++}else if(X.isPointLight){const I=t.get(X);if(I.color.copy(X.color).multiplyScalar(X.intensity),I.distance=X.distance,I.decay=X.decay,X.castShadow){const k=X.shadow,te=i.get(X);te.shadowIntensity=k.intensity,te.shadowBias=k.bias,te.shadowNormalBias=k.normalBias,te.shadowRadius=k.radius,te.shadowMapSize=k.mapSize,te.shadowCameraNear=k.camera.near,te.shadowCameraFar=k.camera.far,s.pointShadow[E]=te,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=X.shadow.matrix,N++}s.point[E]=I,E++}else if(X.isHemisphereLight){const I=t.get(X);I.skyColor.copy(X.color).multiplyScalar(K),I.groundColor.copy(X.groundColor).multiplyScalar(K),s.hemi[y]=I,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==A||V.rectAreaLength!==b||V.hemiLength!==y||V.numDirectionalShadows!==D||V.numPointShadows!==N||V.numSpotShadows!==U||V.numSpotMaps!==L||V.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=b,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+L-O,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,V.directionalLength=S,V.pointLength=E,V.spotLength=A,V.rectAreaLength=b,V.hemiLength=y,V.numDirectionalShadows=D,V.numPointShadows=N,V.numSpotShadows=U,V.numSpotMaps=L,V.numLightProbes=F,s.version=kT++)}function m(p,_){let g=0,x=0,S=0,E=0,A=0;const b=_.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const N=p[y];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),g++}else if(N.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),S++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),d.identity(),c.copy(N.matrixWorld),c.premultiply(b),d.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(b),x++}else if(N.isHemisphereLight){const U=s.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(b),A++}}}return{setup:h,setupView:m,state:s}}function w_(r){const t=new qT(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function jT(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new w_(r),t.set(l,[h])):c>=d.length?(h=new w_(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
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
}`,ZT=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],KT=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],D_=new pn,Xo=new re,Pd=new re;function QT(r,t,i){let s=new dv;const l=new Gt,c=new Gt,d=new ln,h=new db,m=new hb,p={},_=i.maxTextureSize,g={[ds]:Jn,[Jn]:ds,[Ma]:Ma},x=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:WT,fragmentShader:YT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ki;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oi(E,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let y=this.type;this.render=function(O,F,V){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;O.type===Hy&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Oc);const T=r.getRenderTarget(),w=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ta),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const K=y!==this.type;K&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(he=>he.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,he=O.length;ce<he;ce++){const I=O[ce],k=I.shadow;if(k===void 0){lt("WebGLShadowMap:",I,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const te=k.getFrameExtents();if(l.multiply(te),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/te.x),l.x=c.x*te.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/te.y),l.y=c.y*te.y,k.mapSize.y=c.y)),k.map===null||K===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===qo){if(I.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ji(l.x,l.y,{format:Vr,type:Ra,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),k.map.texture.name=I.name+".shadowMap",k.map.depthTexture=new tl(l.x,l.y,ki),k.map.depthTexture.name=I.name+".shadowMapDepth",k.map.depthTexture.format=wa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un}else{I.isPointLight?(k.map=new fv(l.x),k.map.depthTexture=new ub(l.x,Yi)):(k.map=new ji(l.x,l.y),k.map.depthTexture=new tl(l.x,l.y,Yi)),k.map.depthTexture.name=I.name+".shadowMap",k.map.depthTexture.format=wa;const ye=r.state.buffers.depth.getReversed();this.type===Oc?(k.map.depthTexture.compareFunction=ye?Hh:Bh,k.map.depthTexture.minFilter=Fn,k.map.depthTexture.magFilter=Fn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Un,k.map.depthTexture.magFilter=Un)}k.camera.updateProjectionMatrix()}const Me=k.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Me;ye++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(k.map),r.clear());const z=k.getViewport(ye);d.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),J.viewport(d)}if(I.isPointLight){const z=k.camera,ne=k.matrix,_e=I.distance||z.far;_e!==z.far&&(z.far=_e,z.updateProjectionMatrix()),Xo.setFromMatrixPosition(I.matrixWorld),z.position.copy(Xo),Pd.copy(z.position),Pd.add(ZT[ye]),z.up.copy(KT[ye]),z.lookAt(Pd),z.updateMatrixWorld(),ne.makeTranslation(-Xo.x,-Xo.y,-Xo.z),D_.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k._frustum.setFromProjectionMatrix(D_,z.coordinateSystem,z.reversedDepth)}else k.updateMatrices(I);s=k.getFrustum(),U(F,V,k.camera,I,this.type)}k.isPointLightShadow!==!0&&this.type===qo&&D(k,V),k.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(T,w,X)};function D(O,F){const V=t.update(A);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ji(l.x,l.y,{format:Vr,type:Ra})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,V,x,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,V,S,A,null)}function N(O,F,V,T){let w=null;const X=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)w=X;else if(w=V.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=w.uuid,K=F.uuid;let ce=p[J];ce===void 0&&(ce={},p[J]=ce);let he=ce[K];he===void 0&&(he=w.clone(),ce[K]=he,F.addEventListener("dispose",L)),w=he}if(w.visible=F.visible,w.wireframe=F.wireframe,T===qo?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:g[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=V}return w}function U(O,F,V,T,w){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===qo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const K=t.update(O),ce=O.material;if(Array.isArray(ce)){const he=K.groups;for(let I=0,k=he.length;I<k;I++){const te=he[I],Me=ce[te.materialIndex];if(Me&&Me.visible){const ye=N(O,Me,T,w);O.onBeforeShadow(r,O,F,V,K,ye,te),r.renderBufferDirect(V,null,K,ye,O,te),O.onAfterShadow(r,O,F,V,K,ye,te)}}}else if(ce.visible){const he=N(O,ce,T,w);O.onBeforeShadow(r,O,F,V,K,he,null),r.renderBufferDirect(V,null,K,he,O,null),O.onAfterShadow(r,O,F,V,K,he,null)}}const J=O.children;for(let K=0,ce=J.length;K<ce;K++)U(J[K],F,V,T,w)}function L(O){O.target.removeEventListener("dispose",L);for(const V in p){const T=p[V],w=O.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const JT={[Bd]:Hd,[Gd]:Xd,[Vd]:qd,[Hr]:kd,[Hd]:Bd,[Xd]:Gd,[qd]:Vd,[kd]:Hr};function $T(r,t){function i(){let j=!1;const Pe=new ln;let we=null;const Ge=new ln(0,0,0,0);return{setMask:function(Ae){we!==Ae&&!j&&(r.colorMask(Ae,Ae,Ae,Ae),we=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,xe,De,rt,Lt){Lt===!0&&(Ae*=rt,xe*=rt,De*=rt),Pe.set(Ae,xe,De,rt),Ge.equals(Pe)===!1&&(r.clearColor(Ae,xe,De,rt),Ge.copy(Pe))},reset:function(){j=!1,we=null,Ge.set(-1,0,0,0)}}}function s(){let j=!1,Pe=!1,we=null,Ge=null,Ae=null;return{setReversed:function(xe){if(Pe!==xe){const De=t.get("EXT_clip_control");xe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;const rt=Ae;Ae=null,this.setClear(rt)}},getReversed:function(){return Pe},setTest:function(xe){xe?ue(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(xe){we!==xe&&!j&&(r.depthMask(xe),we=xe)},setFunc:function(xe){if(Pe&&(xe=JT[xe]),Ge!==xe){switch(xe){case Bd:r.depthFunc(r.NEVER);break;case Hd:r.depthFunc(r.ALWAYS);break;case Gd:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case Vd:r.depthFunc(r.EQUAL);break;case kd:r.depthFunc(r.GEQUAL);break;case Xd:r.depthFunc(r.GREATER);break;case qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ge=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Ae!==xe&&(Pe&&(xe=1-xe),r.clearDepth(xe),Ae=xe)},reset:function(){j=!1,we=null,Ge=null,Ae=null,Pe=!1}}}function l(){let j=!1,Pe=null,we=null,Ge=null,Ae=null,xe=null,De=null,rt=null,Lt=null;return{setTest:function(Dt){j||(Dt?ue(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Dt){Pe!==Dt&&!j&&(r.stencilMask(Dt),Pe=Dt)},setFunc:function(Dt,bn,Jt){(we!==Dt||Ge!==bn||Ae!==Jt)&&(r.stencilFunc(Dt,bn,Jt),we=Dt,Ge=bn,Ae=Jt)},setOp:function(Dt,bn,Jt){(xe!==Dt||De!==bn||rt!==Jt)&&(r.stencilOp(Dt,bn,Jt),xe=Dt,De=bn,rt=Jt)},setLocked:function(Dt){j=Dt},setClear:function(Dt){Lt!==Dt&&(r.clearStencil(Dt),Lt=Dt)},reset:function(){j=!1,Pe=null,we=null,Ge=null,Ae=null,xe=null,De=null,rt=null,Lt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],E=null,A=!1,b=null,y=null,D=null,N=null,U=null,L=null,O=null,F=new zt(0,0,0),V=0,T=!1,w=null,X=null,J=null,K=null,ce=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(te)[1]),I=k>=1):te.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),I=k>=2);let Me=null,ye={};const z=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),_e=new ln().fromArray(z),Ce=new ln().fromArray(ne);function Ie(j,Pe,we,Ge){const Ae=new Uint8Array(4),xe=r.createTexture();r.bindTexture(j,xe),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<we;De++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Pe+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return xe}const $={};$[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(r.DEPTH_TEST),d.setFunc(Hr),at(!1),wt(P0),ue(r.CULL_FACE),pt(Ta);function ue(j){_[j]!==!0&&(r.enable(j),_[j]=!0)}function Ue(j){_[j]!==!1&&(r.disable(j),_[j]=!1)}function We(j,Pe){return g[j]!==Pe?(r.bindFramebuffer(j,Pe),g[j]=Pe,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ke(j,Pe){let we=S,Ge=!1;if(j){we=x.get(Pe),we===void 0&&(we=[],x.set(Pe,we));const Ae=j.textures;if(we.length!==Ae.length||we[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,De=Ae.length;xe<De;xe++)we[xe]=r.COLOR_ATTACHMENT0+xe;we.length=Ae.length,Ge=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ge=!0);Ge&&r.drawBuffers(we)}function ut(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const ht={[Is]:r.FUNC_ADD,[Vy]:r.FUNC_SUBTRACT,[ky]:r.FUNC_REVERSE_SUBTRACT};ht[Xy]=r.MIN,ht[qy]=r.MAX;const st={[jy]:r.ZERO,[Wy]:r.ONE,[Yy]:r.SRC_COLOR,[zd]:r.SRC_ALPHA,[eS]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[Zy]:r.ONE_MINUS_SRC_COLOR,[Id]:r.ONE_MINUS_SRC_ALPHA,[$y]:r.ONE_MINUS_DST_COLOR,[Qy]:r.ONE_MINUS_DST_ALPHA,[tS]:r.CONSTANT_COLOR,[nS]:r.ONE_MINUS_CONSTANT_COLOR,[iS]:r.CONSTANT_ALPHA,[aS]:r.ONE_MINUS_CONSTANT_ALPHA};function pt(j,Pe,we,Ge,Ae,xe,De,rt,Lt,Dt){if(j===Ta){A===!0&&(Ue(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),j!==Gy){if(j!==b||Dt!==T){if((y!==Is||U!==Is)&&(r.blendEquation(r.FUNC_ADD),y=Is,U=Is),Dt)switch(j){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case F0:r.blendFunc(r.ONE,r.ONE);break;case z0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",j);break}else switch(j){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case F0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case z0:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",j);break}D=null,N=null,L=null,O=null,F.set(0,0,0),V=0,b=j,T=Dt}return}Ae=Ae||Pe,xe=xe||we,De=De||Ge,(Pe!==y||Ae!==U)&&(r.blendEquationSeparate(ht[Pe],ht[Ae]),y=Pe,U=Ae),(we!==D||Ge!==N||xe!==L||De!==O)&&(r.blendFuncSeparate(st[we],st[Ge],st[xe],st[De]),D=we,N=Ge,L=xe,O=De),(rt.equals(F)===!1||Lt!==V)&&(r.blendColor(rt.r,rt.g,rt.b,Lt),F.copy(rt),V=Lt),b=j,T=!1}function mt(j,Pe){j.side===Ma?Ue(r.CULL_FACE):ue(r.CULL_FACE);let we=j.side===Jn;Pe&&(we=!we),at(we),j.blending===Ir&&j.transparent===!1?pt(Ta):pt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ge=j.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),bt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(j){w!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),w=j)}function wt(j){j!==Iy?(ue(r.CULL_FACE),j!==X&&(j===P0?r.cullFace(r.BACK):j===By?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),X=j}function G(j){j!==J&&(I&&r.lineWidth(j),J=j)}function bt(j,Pe,we){j?(ue(r.POLYGON_OFFSET_FILL),(K!==Pe||ce!==we)&&(r.polygonOffset(Pe,we),K=Pe,ce=we)):Ue(r.POLYGON_OFFSET_FILL)}function gt(j){j?ue(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function ft(j){j===void 0&&(j=r.TEXTURE0+he-1),Me!==j&&(r.activeTexture(j),Me=j)}function Ye(j,Pe,we){we===void 0&&(Me===null?we=r.TEXTURE0+he-1:we=Me);let Ge=ye[we];Ge===void 0&&(Ge={type:void 0,texture:void 0},ye[we]=Ge),(Ge.type!==j||Ge.texture!==Pe)&&(Me!==we&&(r.activeTexture(we),Me=we),r.bindTexture(j,Pe||$[j]),Ge.type=j,Ge.texture=Pe)}function P(){const j=ye[Me];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function ge(){try{r.texSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Qe(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Ne(){try{r.texStorage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Xe(){try{r.texStorage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function it(){try{r.texImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Te(){try{r.texImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Re(j){_e.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function Be(j){Ce.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Ce.copy(j))}function He(j,Pe){let we=p.get(Pe);we===void 0&&(we=new WeakMap,p.set(Pe,we));let Ge=we.get(j);Ge===void 0&&(Ge=r.getUniformBlockIndex(Pe,j.name),we.set(j,Ge))}function Le(j,Pe){const Ge=p.get(Pe).get(j);m.get(Pe)!==Ge&&(r.uniformBlockBinding(Pe,Ge,j.__bindingPointIndex),m.set(Pe,Ge))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Me=null,ye={},g={},x=new WeakMap,S=[],E=null,A=!1,b=null,y=null,D=null,N=null,U=null,L=null,O=null,F=new zt(0,0,0),V=0,T=!1,w=null,X=null,J=null,K=null,ce=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:Ue,bindFramebuffer:We,drawBuffers:ke,useProgram:ut,setBlending:pt,setMaterial:mt,setFlipSided:at,setCullFace:wt,setLineWidth:G,setPolygonOffset:bt,setScissorTest:gt,activeTexture:ft,bindTexture:Ye,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:it,texImage3D:Te,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:Xe,texSubImage2D:ge,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Qe,scissor:Re,viewport:Be,reset:dt}}function eA(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Gt,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,M){return S?new OffscreenCanvas(P,M):Vc("canvas")}function A(P,M,W){let ge=1;const Ee=Ye(P);if((Ee.width>W||Ee.height>W)&&(ge=W/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(ge*Ee.width),Qe=Math.floor(ge*Ee.height);g===void 0&&(g=E(fe,Qe));const Ne=M?E(fe,Qe):g;return Ne.width=fe,Ne.height=Qe,Ne.getContext("2d").drawImage(P,0,0,fe,Qe),lt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+fe+"x"+Qe+")."),Ne}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function b(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,M,W,ge,Ee=!1){if(P!==null){if(r[P]!==void 0)return r[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=M;if(M===r.RED&&(W===r.FLOAT&&(fe=r.R32F),W===r.HALF_FLOAT&&(fe=r.R16F),W===r.UNSIGNED_BYTE&&(fe=r.R8)),M===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.R8UI),W===r.UNSIGNED_SHORT&&(fe=r.R16UI),W===r.UNSIGNED_INT&&(fe=r.R32UI),W===r.BYTE&&(fe=r.R8I),W===r.SHORT&&(fe=r.R16I),W===r.INT&&(fe=r.R32I)),M===r.RG&&(W===r.FLOAT&&(fe=r.RG32F),W===r.HALF_FLOAT&&(fe=r.RG16F),W===r.UNSIGNED_BYTE&&(fe=r.RG8)),M===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RG8UI),W===r.UNSIGNED_SHORT&&(fe=r.RG16UI),W===r.UNSIGNED_INT&&(fe=r.RG32UI),W===r.BYTE&&(fe=r.RG8I),W===r.SHORT&&(fe=r.RG16I),W===r.INT&&(fe=r.RG32I)),M===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),W===r.UNSIGNED_INT&&(fe=r.RGB32UI),W===r.BYTE&&(fe=r.RGB8I),W===r.SHORT&&(fe=r.RGB16I),W===r.INT&&(fe=r.RGB32I)),M===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),W===r.UNSIGNED_INT&&(fe=r.RGBA32UI),W===r.BYTE&&(fe=r.RGBA8I),W===r.SHORT&&(fe=r.RGBA16I),W===r.INT&&(fe=r.RGBA32I)),M===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),M===r.RGBA){const Qe=Ee?Hc:Ut.getTransfer(ge);W===r.FLOAT&&(fe=r.RGBA32F),W===r.HALF_FLOAT&&(fe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(fe=Qe===qt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&t.get("EXT_color_buffer_float"),fe}function U(P,M){let W;return P?M===null||M===Yi||M===Jo?W=r.DEPTH24_STENCIL8:M===ki?W=r.DEPTH32F_STENCIL8:M===Qo&&(W=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===Jo?W=r.DEPTH_COMPONENT24:M===ki?W=r.DEPTH_COMPONENT32F:M===Qo&&(W=r.DEPTH_COMPONENT16),W}function L(P,M){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function O(P){const M=P.target;M.removeEventListener("dispose",O),V(M),M.isVideoTexture&&_.delete(M)}function F(P){const M=P.target;M.removeEventListener("dispose",F),w(M)}function V(P){const M=s.get(P);if(M.__webglInit===void 0)return;const W=P.source,ge=x.get(W);if(ge){const Ee=ge[M.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&T(P),Object.keys(ge).length===0&&x.delete(W)}s.remove(P)}function T(P){const M=s.get(P);r.deleteTexture(M.__webglTexture);const W=P.source,ge=x.get(W);delete ge[M.__cacheKey],d.memory.textures--}function w(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let Ee=0;Ee<M.__webglFramebuffer[ge].length;Ee++)r.deleteFramebuffer(M.__webglFramebuffer[ge][Ee]);else r.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[ge]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let ge=0,Ee=W.length;ge<Ee;ge++){const fe=s.get(W[ge]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),d.memory.textures--),s.remove(W[ge])}s.remove(P)}let X=0;function J(){X=0}function K(){const P=X;return P>=l.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),X+=1,P}function ce(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function he(P,M){const W=s.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const ge=P.image;if(ge===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+M)}function I(P,M){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+M)}function k(P,M){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,M);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+M)}function te(P,M){const W=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){ue(W,P,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+M)}const Me={[Yd]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[Zd]:r.MIRRORED_REPEAT},ye={[Un]:r.NEAREST,[oS]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[rd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},z={[fS]:r.NEVER,[gS]:r.ALWAYS,[dS]:r.LESS,[Bh]:r.LEQUAL,[hS]:r.EQUAL,[Hh]:r.GEQUAL,[pS]:r.GREATER,[mS]:r.NOTEQUAL};function ne(P,M){if(M.type===ki&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===rd||M.magFilter===pc||M.magFilter===Hs||M.minFilter===Fn||M.minFilter===rd||M.minFilter===pc||M.minFilter===Hs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Me[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Me[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Me[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ye[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==pc&&M.minFilter!==Hs||M.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _e(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const ge=M.source;let Ee=x.get(ge);Ee===void 0&&(Ee={},x.set(ge,Ee));const fe=ce(M);if(fe!==P.__cacheKey){Ee[fe]===void 0&&(Ee[fe]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Ee[fe].usedTimes++;const Qe=Ee[P.__cacheKey];Qe!==void 0&&(Ee[P.__cacheKey].usedTimes--,Qe.usedTimes===0&&T(M)),P.__cacheKey=fe,P.__webglTexture=Ee[fe].texture}return W}function Ce(P,M,W){return Math.floor(Math.floor(P/W)/M)}function Ie(P,M,W,ge){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,ge,M.data);else{fe.sort((Te,Re)=>Te.start-Re.start);let Qe=0;for(let Te=1;Te<fe.length;Te++){const Re=fe[Qe],Be=fe[Te],He=Re.start+Re.count,Le=Ce(Be.start,M.width,4),dt=Ce(Re.start,M.width,4);Be.start<=He+1&&Le===dt&&Ce(Be.start+Be.count-1,M.width,4)===Le?Re.count=Math.max(Re.count,Be.start+Be.count-Re.start):(++Qe,fe[Qe]=Be)}fe.length=Qe+1;const Ne=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),it=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Te=0,Re=fe.length;Te<Re;Te++){const Be=fe[Te],He=Math.floor(Be.start/4),Le=Math.ceil(Be.count/4),dt=He%M.width,j=Math.floor(He/M.width),Pe=Le,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,dt,j,Pe,we,W,ge,M.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,it)}}function $(P,M,W){let ge=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=r.TEXTURE_3D);const Ee=_e(P,M),fe=M.source;i.bindTexture(ge,P.__webglTexture,r.TEXTURE0+W);const Qe=s.get(fe);if(fe.version!==Qe.__version||Ee===!0){i.activeTexture(r.TEXTURE0+W);const Ne=Ut.getPrimaries(Ut.workingColorSpace),Xe=M.colorSpace===us?null:Ut.getPrimaries(M.colorSpace),it=M.colorSpace===us||Ne===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Te=A(M.image,!1,l.maxTextureSize);Te=ft(M,Te);const Re=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let He=N(M.internalFormat,Re,Be,M.colorSpace,M.isVideoTexture);ne(ge,M);let Le;const dt=M.mipmaps,j=M.isVideoTexture!==!0,Pe=Qe.__version===void 0||Ee===!0,we=fe.dataReady,Ge=L(M,Te);if(M.isDepthTexture)He=U(M.format===Gs,M.type),Pe&&(j?i.texStorage2D(r.TEXTURE_2D,1,He,Te.width,Te.height):i.texImage2D(r.TEXTURE_2D,0,He,Te.width,Te.height,0,Re,Be,null));else if(M.isDataTexture)if(dt.length>0){j&&Pe&&i.texStorage2D(r.TEXTURE_2D,Ge,He,dt[0].width,dt[0].height);for(let Ae=0,xe=dt.length;Ae<xe;Ae++)Le=dt[Ae],j?we&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Re,Be,Le.data):i.texImage2D(r.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Re,Be,Le.data);M.generateMipmaps=!1}else j?(Pe&&i.texStorage2D(r.TEXTURE_2D,Ge,He,Te.width,Te.height),we&&Ie(M,Te,Re,Be)):i.texImage2D(r.TEXTURE_2D,0,He,Te.width,Te.height,0,Re,Be,Te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,He,dt[0].width,dt[0].height,Te.depth);for(let Ae=0,xe=dt.length;Ae<xe;Ae++)if(Le=dt[Ae],M.format!==Li)if(Re!==null)if(j){if(we)if(M.layerUpdates.size>0){const De=o_(Le.width,Le.height,M.format,M.type);for(const rt of M.layerUpdates){const Lt=Le.data.subarray(rt*De/Le.data.BYTES_PER_ELEMENT,(rt+1)*De/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,rt,Le.width,Le.height,1,Re,Lt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Te.depth,Re,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Te.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Te.depth,Re,Be,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ae,He,Le.width,Le.height,Te.depth,0,Re,Be,Le.data)}else{j&&Pe&&i.texStorage2D(r.TEXTURE_2D,Ge,He,dt[0].width,dt[0].height);for(let Ae=0,xe=dt.length;Ae<xe;Ae++)Le=dt[Ae],M.format!==Li?Re!==null?j?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Re,Be,Le.data):i.texImage2D(r.TEXTURE_2D,Ae,He,Le.width,Le.height,0,Re,Be,Le.data)}else if(M.isDataArrayTexture)if(j){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,He,Te.width,Te.height,Te.depth),we)if(M.layerUpdates.size>0){const Ae=o_(Te.width,Te.height,M.format,M.type);for(const xe of M.layerUpdates){const De=Te.data.subarray(xe*Ae/Te.data.BYTES_PER_ELEMENT,(xe+1)*Ae/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Te.width,Te.height,1,Re,Be,De)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Be,Te.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Te.width,Te.height,Te.depth,0,Re,Be,Te.data);else if(M.isData3DTexture)j?(Pe&&i.texStorage3D(r.TEXTURE_3D,Ge,He,Te.width,Te.height,Te.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Be,Te.data)):i.texImage3D(r.TEXTURE_3D,0,He,Te.width,Te.height,Te.depth,0,Re,Be,Te.data);else if(M.isFramebufferTexture){if(Pe)if(j)i.texStorage2D(r.TEXTURE_2D,Ge,He,Te.width,Te.height);else{let Ae=Te.width,xe=Te.height;for(let De=0;De<Ge;De++)i.texImage2D(r.TEXTURE_2D,De,He,Ae,xe,0,Re,Be,null),Ae>>=1,xe>>=1}}else if(dt.length>0){if(j&&Pe){const Ae=Ye(dt[0]);i.texStorage2D(r.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}for(let Ae=0,xe=dt.length;Ae<xe;Ae++)Le=dt[Ae],j?we&&i.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Re,Be,Le):i.texImage2D(r.TEXTURE_2D,Ae,He,Re,Be,Le);M.generateMipmaps=!1}else if(j){if(Pe){const Ae=Ye(Te);i.texStorage2D(r.TEXTURE_2D,Ge,He,Ae.width,Ae.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Be,Te)}else i.texImage2D(r.TEXTURE_2D,0,He,Re,Be,Te);b(M)&&y(ge),Qe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,W){if(M.image.length!==6)return;const ge=_e(P,M),Ee=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const fe=s.get(Ee);if(Ee.version!==fe.__version||ge===!0){i.activeTexture(r.TEXTURE0+W);const Qe=Ut.getPrimaries(Ut.workingColorSpace),Ne=M.colorSpace===us?null:Ut.getPrimaries(M.colorSpace),Xe=M.colorSpace===us||Qe===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let xe=0;xe<6;xe++)!it&&!Te?Re[xe]=A(M.image[xe],!0,l.maxCubemapSize):Re[xe]=Te?M.image[xe].image:M.image[xe],Re[xe]=ft(M,Re[xe]);const Be=Re[0],He=c.convert(M.format,M.colorSpace),Le=c.convert(M.type),dt=N(M.internalFormat,He,Le,M.colorSpace),j=M.isVideoTexture!==!0,Pe=fe.__version===void 0||ge===!0,we=Ee.dataReady;let Ge=L(M,Be);ne(r.TEXTURE_CUBE_MAP,M);let Ae;if(it){j&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,dt,Be.width,Be.height);for(let xe=0;xe<6;xe++){Ae=Re[xe].mipmaps;for(let De=0;De<Ae.length;De++){const rt=Ae[De];M.format!==Li?He!==null?j?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,0,0,rt.width,rt.height,He,rt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,dt,rt.width,rt.height,0,rt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,0,0,rt.width,rt.height,He,Le,rt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,dt,rt.width,rt.height,0,He,Le,rt.data)}}}else{if(Ae=M.mipmaps,j&&Pe){Ae.length>0&&Ge++;const xe=Ye(Re[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,dt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Te){j?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Re[xe].width,Re[xe].height,He,Le,Re[xe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,dt,Re[xe].width,Re[xe].height,0,He,Le,Re[xe].data);for(let De=0;De<Ae.length;De++){const Lt=Ae[De].image[xe].image;j?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,0,0,Lt.width,Lt.height,He,Le,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,dt,Lt.width,Lt.height,0,He,Le,Lt.data)}}else{j?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,He,Le,Re[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,dt,He,Le,Re[xe]);for(let De=0;De<Ae.length;De++){const rt=Ae[De];j?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,0,0,He,Le,rt.image[xe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,dt,He,Le,rt.image[xe])}}}b(M)&&y(r.TEXTURE_CUBE_MAP),fe.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ue(P,M,W,ge,Ee,fe){const Qe=c.convert(W.format,W.colorSpace),Ne=c.convert(W.type),Xe=N(W.internalFormat,Qe,Ne,W.colorSpace),it=s.get(M),Te=s.get(W);if(Te.__renderTarget=M,!it.__hasExternalTextures){const Re=Math.max(1,M.width>>fe),Be=Math.max(1,M.height>>fe);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?i.texImage3D(Ee,fe,Xe,Re,Be,M.depth,0,Qe,Ne,null):i.texImage2D(Ee,fe,Xe,Re,Be,0,Qe,Ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),bt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Ee,Te.__webglTexture,0,G(M)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Ee,Te.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(P,M,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const ge=M.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,fe=U(M.stencilBuffer,Ee),Qe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;bt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),fe,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),fe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,fe,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qe,r.RENDERBUFFER,P)}else{const ge=M.textures;for(let Ee=0;Ee<ge.length;Ee++){const fe=ge[Ee],Qe=c.convert(fe.format,fe.colorSpace),Ne=c.convert(fe.type),Xe=N(fe.internalFormat,Qe,Ne,fe.colorSpace);bt(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(M),Xe,M.width,M.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(M),Xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(P,M,W){const ge=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(M.depthTexture);if(Ee.__renderTarget=M,(!Ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ge){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),ne(r.TEXTURE_CUBE_MAP,M.depthTexture);const it=c.convert(M.depthTexture.format),Te=c.convert(M.depthTexture.type);let Re;M.depthTexture.format===wa?Re=r.DEPTH_COMPONENT24:M.depthTexture.format===Gs&&(Re=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Re,M.width,M.height,0,it,Te,null)}}else he(M.depthTexture,0);const fe=Ee.__webglTexture,Qe=G(M),Ne=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Xe=M.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===wa)bt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ne,fe,0,Qe):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ne,fe,0);else if(M.depthTexture.format===Gs)bt(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ne,fe,0,Qe):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function ut(P){const M=s.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ge=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const Ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),M.__depthDisposeCallback=Ee}M.__boundDepthTexture=ge}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ge=0;ge<6;ge++)ke(M.__webglFramebuffer[ge],P,ge);else{const ge=P.texture.mipmaps;ge&&ge.length>0?ke(M.__webglFramebuffer[0],P,0):ke(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=r.createRenderbuffer(),We(M.__webglDepthbuffer[ge],P,!1);else{const Ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}else{const ge=P.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),We(M.__webglDepthbuffer,P,!1);else{const Ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(P,M,W){const ge=s.get(P);M!==void 0&&Ue(ge.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ut(P)}function st(P){const M=P.texture,W=s.get(P),ge=s.get(M);P.addEventListener("dispose",F);const Ee=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Qe=Ee.length>1;if(Qe||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=M.version,d.memory.textures++),fe){W.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ne]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)W.__webglFramebuffer[Ne][Xe]=r.createFramebuffer()}else W.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)W.__webglFramebuffer[Ne]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Qe)for(let Ne=0,Xe=Ee.length;Ne<Xe;Ne++){const it=s.get(Ee[Ne]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&bt(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ee.length;Ne++){const Xe=Ee[Ne];W.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ne]);const it=c.convert(Xe.format,Xe.colorSpace),Te=c.convert(Xe.type),Re=N(Xe.internalFormat,it,Te,Xe.colorSpace,P.isXRRenderTarget===!0),Be=G(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Re,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),We(W.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(r.TEXTURE_CUBE_MAP,M);for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ue(W.__webglFramebuffer[Ne][Xe],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Xe);else Ue(W.__webglFramebuffer[Ne],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(M)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qe){for(let Ne=0,Xe=Ee.length;Ne<Xe;Ne++){const it=Ee[Ne],Te=s.get(it);let Re=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),ne(Re,it),Ue(W.__webglFramebuffer,P,it,r.COLOR_ATTACHMENT0+Ne,Re,0),b(it)&&y(Re)}i.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,ge.__webglTexture),ne(Ne,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ue(W.__webglFramebuffer[Xe],P,M,r.COLOR_ATTACHMENT0,Ne,Xe);else Ue(W.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,Ne,0);b(M)&&y(Ne),i.unbindTexture()}P.depthBuffer&&ut(P)}function pt(P){const M=P.textures;for(let W=0,ge=M.length;W<ge;W++){const Ee=M[W];if(b(Ee)){const fe=D(P),Qe=s.get(Ee).__webglTexture;i.bindTexture(fe,Qe),y(fe),i.unbindTexture()}}}const mt=[],at=[];function wt(P){if(P.samples>0){if(bt(P)===!1){const M=P.textures,W=P.width,ge=P.height;let Ee=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qe=s.get(P),Ne=M.length>1;if(Ne)for(let it=0;it<M.length;it++)i.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const Xe=P.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let it=0;it<M.length;it++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),Ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[it]);const Te=s.get(M[it]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,W,ge,0,0,W,ge,Ee,r.NEAREST),m===!0&&(mt.length=0,at.length=0,mt.push(r.COLOR_ATTACHMENT0+it),P.depthBuffer&&P.resolveDepthBuffer===!1&&(mt.push(fe),at.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let it=0;it<M.length;it++){i.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[it]);const Te=s.get(M[it]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,Te,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function G(P){return Math.min(l.maxSamples,P.samples)}function bt(P){const M=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(P){const M=d.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function ft(P,M){const W=P.colorSpace,ge=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==kr&&W!==us&&(Ut.getTransfer(W)===qt?(ge!==Li||Ee!==Si)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",W)),M}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=J,this.setTexture2D=he,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=te,this.rebindTextures=ht,this.setupRenderTarget=st,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function tA(r,t){function i(s,l=us){let c;const d=Ut.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===Oh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Q_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===J_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z_)return r.BYTE;if(s===K_)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===Lh)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===$_)return r.ALPHA;if(s===ev)return r.RGB;if(s===Li)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===tv)return r.RED;if(s===Fh)return r.RED_INTEGER;if(s===Vr)return r.RG;if(s===zh)return r.RG_INTEGER;if(s===Ih)return r.RGBA_INTEGER;if(s===Pc||s===Fc||s===zc||s===Ic)if(d===qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kd||s===Qd||s===Jd||s===$d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===eh||s===th||s===nh||s===ih||s===ah||s===sh||s===rh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===eh||s===th)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ih)return c.COMPRESSED_R11_EAC;if(s===ah)return c.COMPRESSED_SIGNED_R11_EAC;if(s===sh)return c.COMPRESSED_RG11_EAC;if(s===rh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===oh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ph)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_h)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sh||s===bh||s===Mh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Sh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Eh||s===Th||s===Ah||s===Ch)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Eh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Th)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ah)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new hv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new Wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends qr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",b=new aA,y={},D=i.getContextAttributes();let N=null,U=null;const L=[],O=[],F=new Gt;let V=null;const T=new yi;T.viewport=new ln;const w=new yi;w.viewport=new ln;const X=[T,w],J=new pb;let K=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=L[$];return ue===void 0&&(ue=new Rd,L[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=L[$];return ue===void 0&&(ue=new Rd,L[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=L[$];return ue===void 0&&(ue=new Rd,L[$]=ue),ue.getHandSpace()};function he($){const ue=O.indexOf($.inputSource);if(ue===-1)return;const Ue=L[ue];Ue!==void 0&&(Ue.update($.inputSource,$.frame,p||d),Ue.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",k);for(let $=0;$<L.length;$++){const ue=O[$];ue!==null&&(O[$]=null,L[$].disconnect(ue))}K=null,ce=null,b.reset();for(const $ in y)delete y[$];t.setRenderTarget(N),S=null,x=null,g=null,l=null,U=null,Ie.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",I),l.addEventListener("inputsourceschange",k),D.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,We=null,ke=null;D.depth&&(ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=D.stencil?Gs:wa,We=D.stencil?Jo:Yi);const ut={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ut),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new ji(x.textureWidth,x.textureHeight,{format:Li,type:Si,depthTexture:new tl(x.textureWidth,x.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ue={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new ji(S.framebufferWidth,S.framebufferHeight,{format:Li,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ie.setContext(l),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k($){for(let ue=0;ue<$.removed.length;ue++){const Ue=$.removed[ue],We=O.indexOf(Ue);We>=0&&(O[We]=null,L[We].disconnect(Ue))}for(let ue=0;ue<$.added.length;ue++){const Ue=$.added[ue];let We=O.indexOf(Ue);if(We===-1){for(let ut=0;ut<L.length;ut++)if(ut>=O.length){O.push(Ue),We=ut;break}else if(O[ut]===null){O[ut]=Ue,We=ut;break}if(We===-1)break}const ke=L[We];ke&&ke.connect(Ue)}}const te=new re,Me=new re;function ye($,ue,Ue){te.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);const We=te.distanceTo(Me),ke=ue.projectionMatrix.elements,ut=Ue.projectionMatrix.elements,ht=ke[14]/(ke[10]-1),st=ke[14]/(ke[10]+1),pt=(ke[9]+1)/ke[5],mt=(ke[9]-1)/ke[5],at=(ke[8]-1)/ke[0],wt=(ut[8]+1)/ut[0],G=ht*at,bt=ht*wt,gt=We/(-at+wt),ft=gt*-at;if(ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ft),$.translateZ(gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ke[10]===-1)$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=ht+gt,P=st+gt,M=G-ft,W=bt+(We-ft),ge=pt*st/P*Ye,Ee=mt*st/P*Ye;$.projectionMatrix.makePerspective(M,W,ge,Ee,Ye,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function z($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ue=$.near,Ue=$.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(Ue=b.depthFar)),J.near=w.near=T.near=ue,J.far=w.far=T.far=Ue,(K!==J.near||ce!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),K=J.near,ce=J.far),J.layers.mask=$.layers.mask|6,T.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const We=$.parent,ke=J.cameras;z(J,We);for(let ut=0;ut<ke.length;ut++)z(ke[ut],We);ke.length===2?ye(J,T,w):J.projectionMatrix.copy(T.projectionMatrix),ne($,J,We)};function ne($,ue,Ue){Ue===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(Ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=el*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(J)},this.getCameraTexture=function($){return y[$]};let _e=null;function Ce($,ue){if(_=ue.getViewerPose(p||d),E=ue,_!==null){const Ue=_.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let We=!1;Ue.length!==J.cameras.length&&(J.cameras.length=0,We=!0);for(let st=0;st<Ue.length;st++){const pt=Ue[st];let mt=null;if(S!==null)mt=S.getViewport(pt);else{const wt=g.getViewSubImage(x,pt);mt=wt.viewport,st===0&&(t.setRenderTargetTextures(U,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(U))}let at=X[st];at===void 0&&(at=new yi,at.layers.enable(st),at.viewport=new ln,X[st]=at),at.matrix.fromArray(pt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(pt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(mt.x,mt.y,mt.width,mt.height),st===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),We===!0&&J.cameras.push(at)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const st=g.getDepthInformation(Ue[0]);st&&st.isValid&&st.texture&&b.init(st,l.renderState)}if(ke&&ke.includes("camera-access")&&A){t.state.unbindTexture(),g=s.getBinding();for(let st=0;st<Ue.length;st++){const pt=Ue[st].camera;if(pt){let mt=y[pt];mt||(mt=new hv,y[pt]=mt);const at=g.getCameraImage(pt);mt.sourceTexture=at}}}}for(let Ue=0;Ue<L.length;Ue++){const We=O[Ue],ke=L[Ue];We!==null&&ke!==void 0&&ke.update(We,ue,p||d)}_e&&_e($,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ie=new mv;Ie.setAnimationLoop(Ce),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}}const Fs=new Da,rA=new pn;function oA(r,t){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function s(b,y){y.color.getRGB(b.fogColor.value,lv(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,D,N,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(b,y):y.isMeshToonMaterial?(c(b,y),g(b,y)):y.isMeshPhongMaterial?(c(b,y),_(b,y)):y.isMeshStandardMaterial?(c(b,y),x(b,y),y.isMeshPhysicalMaterial&&S(b,y,U)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),A(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(d(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?m(b,y,D,N):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===Jn&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===Jn&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const D=t.get(y),N=D.envMap,U=D.envMapRotation;N&&(b.envMap.value=N,Fs.copy(U),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),b.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(Fs)),b.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,D,N){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*D,b.scale.value=N*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function _(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function g(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function x(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,D){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function A(b,y){const D=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function lA(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;s.uniformBlockBinding(D,U)}function p(D,N){let U=l[D.id];U===void 0&&(E(D),U=_(D),l[D.id]=U,D.addEventListener("dispose",b));const L=N.program;s.updateUBOMapping(D,L);const O=t.render.frame;c[D.id]!==O&&(x(D),c[D.id]=O)}function _(D){const N=g();D.__bindingPointIndex=N;const U=r.createBuffer(),L=D.__size,O=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,L,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const N=l[D.id],U=D.uniforms,L=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let O=0,F=U.length;O<F;O++){const V=Array.isArray(U[O])?U[O]:[U[O]];for(let T=0,w=V.length;T<w;T++){const X=V[T];if(S(X,O,T,L)===!0){const J=X.__offset,K=Array.isArray(X.value)?X.value:[X.value];let ce=0;for(let he=0;he<K.length;he++){const I=K[he],k=A(I);typeof I=="number"||typeof I=="boolean"?(X.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,J+ce,X.__data)):I.isMatrix3?(X.__data[0]=I.elements[0],X.__data[1]=I.elements[1],X.__data[2]=I.elements[2],X.__data[3]=0,X.__data[4]=I.elements[3],X.__data[5]=I.elements[4],X.__data[6]=I.elements[5],X.__data[7]=0,X.__data[8]=I.elements[6],X.__data[9]=I.elements[7],X.__data[10]=I.elements[8],X.__data[11]=0):(I.toArray(X.__data,ce),ce+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,N,U,L){const O=D.value,F=N+"_"+U;if(L[F]===void 0)return typeof O=="number"||typeof O=="boolean"?L[F]=O:L[F]=O.clone(),!0;{const V=L[F];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return L[F]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function E(D){const N=D.uniforms;let U=0;const L=16;for(let F=0,V=N.length;F<V;F++){const T=Array.isArray(N[F])?N[F]:[N[F]];for(let w=0,X=T.length;w<X;w++){const J=T[w],K=Array.isArray(J.value)?J.value:[J.value];for(let ce=0,he=K.length;ce<he;ce++){const I=K[ce],k=A(I),te=U%L,Me=te%k.boundary,ye=te+Me;U+=Me,ye!==0&&L-ye<k.storage&&(U+=L-ye),J.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=k.storage}}}const O=U%L;return O>0&&(U+=L-O),D.__size=U,D.__cache={},this}function A(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",D),N}function b(D){const N=D.target;N.removeEventListener("dispose",b);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:p,dispose:y}}const cA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function uA(){return Gi===null&&(Gi=new rb(cA,16,16,Vr,Ra),Gi.name="DFG_LUT",Gi.minFilter=Fn,Gi.magFilter=Fn,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class fA{constructor(t={}){const{canvas:i=_S(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=Si}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const A=S,b=new Set([Ih,zh,Fh]),y=new Set([Si,Yi,Qo,Jo,Oh,Ph]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,L=null;const O=[],F=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=xi;let X=0,J=0,K=null,ce=-1,he=null;const I=new ln,k=new ln;let te=null;const Me=new zt(0);let ye=0,z=i.width,ne=i.height,_e=1,Ce=null,Ie=null;const $=new ln(0,0,z,ne),ue=new ln(0,0,z,ne);let Ue=!1;const We=new dv;let ke=!1,ut=!1;const ht=new pn,st=new re,pt=new ln,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function wt(){return K===null?_e:1}let G=s;function bt(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Uh}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),G===null){const Y="webgl2";if(G=bt(Y,C),G===null)throw bt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ft("WebGLRenderer: "+C.message),C}let gt,ft,Ye,P,M,W,ge,Ee,fe,Qe,Ne,Xe,it,Te,Re,Be,He,Le,dt,j,Pe,we,Ge,Ae;function xe(){gt=new u1(G),gt.init(),we=new tA(G,gt),ft=new t1(G,gt,t,we),Ye=new $T(G,gt),ft.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),P=new h1(G),M=new IT,W=new eA(G,gt,Ye,M,ft,we,P),ge=new i1(T),Ee=new c1(T),fe=new _b(G),Ge=new $E(G,fe),Qe=new f1(G,fe,P,Ge),Ne=new m1(G,Qe,fe,P),dt=new p1(G,ft,W),Be=new n1(M),Xe=new zT(T,ge,Ee,gt,ft,Ge,Be),it=new oA(T,M),Te=new HT,Re=new jT(gt),Le=new JE(T,ge,Ee,Ye,Ne,E,m),He=new QT(T,Ne,ft),Ae=new lA(G,P,ft,Ye),j=new e1(G,gt,P),Pe=new d1(G,gt,P),P.programs=Xe.programs,T.capabilities=ft,T.extensions=gt,T.properties=M,T.renderLists=Te,T.shadowMap=He,T.state=Ye,T.info=P}xe(),A!==Si&&(V=new _1(A,i.width,i.height,l,c));const De=new sA(T,G);this.xr=De,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(z,ne,!1))},this.getSize=function(C){return C.set(z,ne)},this.setSize=function(C,Y,oe=!0){if(De.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,ne=Y,i.width=Math.floor(C*_e),i.height=Math.floor(Y*_e),oe===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(z*_e,ne*_e).floor()},this.setDrawingBufferSize=function(C,Y,oe){z=C,ne=Y,_e=oe,i.width=Math.floor(C*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(A===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,Y,oe,ae){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,Y,oe,ae),Ye.viewport(I.copy($).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,Y,oe,ae){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Y,oe,ae),Ye.scissor(k.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(C){Ye.setScissorTest(Ue=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Ie=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,oe=!0){let ae=0;if(C){let Q=!1;if(K!==null){const Oe=K.texture.format;Q=b.has(Oe)}if(Q){const Oe=K.texture.type,qe=y.has(Oe),ze=Le.getClearColor(),je=Le.getClearAlpha(),Ke=ze.r,de=ze.g,pe=ze.b;qe?(D[0]=Ke,D[1]=de,D[2]=pe,D[3]=je,G.clearBufferuiv(G.COLOR,0,D)):(N[0]=Ke,N[1]=de,N[2]=pe,N[3]=je,G.clearBufferiv(G.COLOR,0,N))}else ae|=G.COLOR_BUFFER_BIT}Y&&(ae|=G.DEPTH_BUFFER_BIT),oe&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Le.dispose(),Te.dispose(),Re.dispose(),M.dispose(),ge.dispose(),Ee.dispose(),Ne.dispose(),Ge.dispose(),Ae.dispose(),Xe.dispose(),De.dispose(),De.removeEventListener("sessionstart",zn),De.removeEventListener("sessionend",Qi),kn.stop()};function rt(C){C.preventDefault(),k0("WebGLRenderer: Context Lost."),w=!0}function Lt(){k0("WebGLRenderer: Context Restored."),w=!1;const C=P.autoReset,Y=He.enabled,oe=He.autoUpdate,ae=He.needsUpdate,Q=He.type;xe(),P.autoReset=C,He.enabled=Y,He.autoUpdate=oe,He.needsUpdate=ae,He.type=Q}function Dt(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bn(C){const Y=C.target;Y.removeEventListener("dispose",bn),Jt(Y)}function Jt(C){Na(C),M.remove(C)}function Na(C){const Y=M.get(C).programs;Y!==void 0&&(Y.forEach(function(oe){Xe.releaseProgram(oe)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,oe,ae,Q,Oe){Y===null&&(Y=mt);const qe=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Ji(C,Y,oe,ae,Q);Ye.setMaterial(ae,qe);let je=oe.index,Ke=1;if(ae.wireframe===!0){if(je=Qe.getWireframeAttribute(oe),je===void 0)return;Ke=2}const de=oe.drawRange,pe=oe.attributes.position;let Fe=de.start*Ke,tt=(de.start+de.count)*Ke;Oe!==null&&(Fe=Math.max(Fe,Oe.start*Ke),tt=Math.min(tt,(Oe.start+Oe.count)*Ke)),je!==null?(Fe=Math.max(Fe,0),tt=Math.min(tt,je.count)):pe!=null&&(Fe=Math.max(Fe,0),tt=Math.min(tt,pe.count));const _t=tt-Fe;if(_t<0||_t===1/0)return;Ge.setup(Q,ae,ze,oe,je);let It,Tt=j;if(je!==null&&(It=fe.get(je),Tt=Pe,Tt.setIndex(It)),Q.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*wt()),Tt.setMode(G.LINES)):Tt.setMode(G.TRIANGLES);else if(Q.isLine){let $e=ae.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*wt()),Q.isLineSegments?Tt.setMode(G.LINES):Q.isLineLoop?Tt.setMode(G.LINE_LOOP):Tt.setMode(G.LINE_STRIP)}else Q.isPoints?Tt.setMode(G.POINTS):Q.isSprite&&Tt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,Bt=Q._multiDrawCounts,ot=Q._multiDrawCount,Mn=je?fe.get(je).bytesPerElement:1,ea=M.get(ae).currentProgram.getUniforms();for(let En=0;En<ot;En++)ea.setValue(G,"_gl_DrawID",En),Tt.render($e[En]/Mn,Bt[En])}else if(Q.isInstancedMesh)Tt.renderInstances(Fe,_t,Q.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Bt=Math.min(oe.instanceCount,$e);Tt.renderInstances(Fe,_t,Bt)}else Tt.render(Fe,_t)};function Ua(C,Y,oe){C.transparent===!0&&C.side===Ma&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Mi(C,Y,oe),C.side=ds,C.needsUpdate=!0,Mi(C,Y,oe),C.side=Ma):Mi(C,Y,oe)}this.compile=function(C,Y,oe=null){oe===null&&(oe=C),L=Re.get(oe),L.init(Y),F.push(L),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),C!==oe&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(L.pushLight(Q),Q.castShadow&&L.pushShadow(Q))}),L.setupLights();const ae=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Oe=Q.material;if(Oe)if(Array.isArray(Oe))for(let qe=0;qe<Oe.length;qe++){const ze=Oe[qe];Ua(ze,oe,Q),ae.add(ze)}else Ua(Oe,oe,Q),ae.add(Oe)}),L=F.pop(),ae},this.compileAsync=function(C,Y,oe=null){const ae=this.compile(C,Y,oe);return new Promise(Q=>{function Oe(){if(ae.forEach(function(qe){M.get(qe).currentProgram.isReady()&&ae.delete(qe)}),ae.size===0){Q(C);return}setTimeout(Oe,10)}gt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Pi=null;function Vn(C){Pi&&Pi(C)}function zn(){kn.stop()}function Qi(){kn.start()}const kn=new mv;kn.setAnimationLoop(Vn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Pi=C,De.setAnimationLoop(C),C===null?kn.stop():kn.start()},De.addEventListener("sessionstart",zn),De.addEventListener("sessionend",Qi),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=De.enabled===!0&&De.isPresenting===!0,ae=V!==null&&(K===null||oe)&&V.begin(T,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Y),Y=De.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Y,K),L=Re.get(C,F.length),L.init(Y),F.push(L),ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),We.setFromProjectionMatrix(ht,Xi,Y.reversedDepth),ut=this.localClippingEnabled,ke=Be.init(this.clippingPlanes,ut),U=Te.get(C,O.length),U.init(),O.push(U),De.enabled===!0&&De.isPresenting===!0){const qe=T.xr.getDepthSensingMesh();qe!==null&&Xn(qe,Y,-1/0,T.sortObjects)}Xn(C,Y,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(Ce,Ie),at=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,at&&Le.addToRenderList(U,C),this.info.render.frame++,ke===!0&&Be.beginShadows();const Q=L.state.shadowsArray;if(He.render(Q,C,Y),ke===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&V.hasRenderPass())===!1){const qe=U.opaque,ze=U.transmissive;if(L.setupLights(),Y.isArrayCamera){const je=Y.cameras;if(ze.length>0)for(let Ke=0,de=je.length;Ke<de;Ke++){const pe=je[Ke];nn(qe,ze,C,pe)}at&&Le.render(C);for(let Ke=0,de=je.length;Ke<de;Ke++){const pe=je[Ke];tn(U,C,pe,pe.viewport)}}else ze.length>0&&nn(qe,ze,C,Y),at&&Le.render(C),tn(U,C,Y)}K!==null&&J===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),ae&&V.end(T),C.isScene===!0&&C.onAfterRender(T,C,Y),Ge.resetDefaultState(),ce=-1,he=null,F.pop(),F.length>0?(L=F[F.length-1],ke===!0&&Be.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?U=O[O.length-1]:U=null};function Xn(C,Y,oe,ae){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){ae&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const qe=Ne.update(C),ze=C.material;ze.visible&&U.push(C,qe,ze,oe,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const qe=Ne.update(C),ze=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),pt.copy(qe.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(ze)){const je=qe.groups;for(let Ke=0,de=je.length;Ke<de;Ke++){const pe=je[Ke],Fe=ze[pe.materialIndex];Fe&&Fe.visible&&U.push(C,qe,Fe,oe,pt.z,pe)}}else ze.visible&&U.push(C,qe,ze,oe,pt.z,null)}}const Oe=C.children;for(let qe=0,ze=Oe.length;qe<ze;qe++)Xn(Oe[qe],Y,oe,ae)}function tn(C,Y,oe,ae){const{opaque:Q,transmissive:Oe,transparent:qe}=C;L.setupLightsView(oe),ke===!0&&Be.setGlobalState(T.clippingPlanes,oe),ae&&Ye.viewport(I.copy(ae)),Q.length>0&&xn(Q,Y,oe),Oe.length>0&&xn(Oe,Y,oe),qe.length>0&&xn(qe,Y,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function nn(C,Y,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Fe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:Fe?Ra:Si,minFilter:Hs,samples:ft.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[ae.id],qe=ae.viewport||I;Oe.setSize(qe.z*T.transmissionResolutionScale,qe.w*T.transmissionResolutionScale);const ze=T.getRenderTarget(),je=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(Oe),T.getClearColor(Me),ye=T.getClearAlpha(),ye<1&&T.setClearColor(16777215,.5),T.clear(),at&&Le.render(oe);const de=T.toneMapping;T.toneMapping=qi;const pe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),ke===!0&&Be.setGlobalState(T.clippingPlanes,ae),xn(C,oe,ae),W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let tt=0,_t=Y.length;tt<_t;tt++){const It=Y[tt],{object:Tt,geometry:$e,material:Bt,group:ot}=It;if(Bt.side===Ma&&Tt.layers.test(ae.layers)){const Mn=Bt.side;Bt.side=Jn,Bt.needsUpdate=!0,hs(Tt,oe,ae,$e,Bt,ot),Bt.side=Mn,Bt.needsUpdate=!0,Fe=!0}}Fe===!0&&(W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe))}T.setRenderTarget(ze,je,Ke),T.setClearColor(Me,ye),pe!==void 0&&(ae.viewport=pe),T.toneMapping=de}function xn(C,Y,oe){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Oe=C.length;Q<Oe;Q++){const qe=C[Q],{object:ze,geometry:je,group:Ke}=qe;let de=qe.material;de.allowOverride===!0&&ae!==null&&(de=ae),ze.layers.test(oe.layers)&&hs(ze,Y,oe,je,de,Ke)}}function hs(C,Y,oe,ae,Q,Oe){C.onBeforeRender(T,Y,oe,ae,Q,Oe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(T,Y,oe,ae,C,Oe),Q.transparent===!0&&Q.side===Ma&&Q.forceSinglePass===!1?(Q.side=Jn,Q.needsUpdate=!0,T.renderBufferDirect(oe,Y,ae,Q,C,Oe),Q.side=ds,Q.needsUpdate=!0,T.renderBufferDirect(oe,Y,ae,Q,C,Oe),Q.side=Ma):T.renderBufferDirect(oe,Y,ae,Q,C,Oe),C.onAfterRender(T,Y,oe,ae,Q,Oe)}function Mi(C,Y,oe){Y.isScene!==!0&&(Y=mt);const ae=M.get(C),Q=L.state.lights,Oe=L.state.shadowsArray,qe=Q.state.version,ze=Xe.getParameters(C,Q.state,Oe,Y,oe),je=Xe.getProgramCacheKey(ze);let Ke=ae.programs;ae.environment=C.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(C.isMeshStandardMaterial?Ee:ge).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",bn),Ke=new Map,ae.programs=Ke);let de=Ke.get(je);if(de!==void 0){if(ae.currentProgram===de&&ae.lightsStateVersion===qe)return ps(C,ze),de}else ze.uniforms=Xe.getUniforms(C),C.onBeforeCompile(ze,T),de=Xe.acquireProgram(ze,je),Ke.set(je,de),ae.uniforms=ze.uniforms;const pe=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(pe.clippingPlanes=Be.uniform),ps(C,ze),ae.needsLights=Ei(C),ae.lightsStateVersion=qe,ae.needsLights&&(pe.ambientLightColor.value=Q.state.ambient,pe.lightProbe.value=Q.state.probe,pe.directionalLights.value=Q.state.directional,pe.directionalLightShadows.value=Q.state.directionalShadow,pe.spotLights.value=Q.state.spot,pe.spotLightShadows.value=Q.state.spotShadow,pe.rectAreaLights.value=Q.state.rectArea,pe.ltc_1.value=Q.state.rectAreaLTC1,pe.ltc_2.value=Q.state.rectAreaLTC2,pe.pointLights.value=Q.state.point,pe.pointLightShadows.value=Q.state.pointShadow,pe.hemisphereLights.value=Q.state.hemi,pe.directionalShadowMap.value=Q.state.directionalShadowMap,pe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,pe.spotShadowMap.value=Q.state.spotShadowMap,pe.spotLightMatrix.value=Q.state.spotLightMatrix,pe.spotLightMap.value=Q.state.spotLightMap,pe.pointShadowMap.value=Q.state.pointShadowMap,pe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=de,ae.uniformsList=null,de}function Yr(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ps(C,Y){const oe=M.get(C);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Ji(C,Y,oe,ae,Q){Y.isScene!==!0&&(Y=mt),W.resetTextureUnits();const Oe=Y.fog,qe=ae.isMeshStandardMaterial?Y.environment:null,ze=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:kr,je=(ae.isMeshStandardMaterial?Ee:ge).get(ae.envMap||qe),Ke=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,de=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),pe=!!oe.morphAttributes.position,Fe=!!oe.morphAttributes.normal,tt=!!oe.morphAttributes.color;let _t=qi;ae.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(_t=T.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Tt=It!==void 0?It.length:0,$e=M.get(ae),Bt=L.state.lights;if(ke===!0&&(ut===!0||C!==he)){const An=C===he&&ae.id===ce;Be.setState(ae,C,An)}let ot=!1;ae.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Bt.state.version||$e.outputColorSpace!==ze||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==je||ae.fog===!0&&$e.fog!==Oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Be.numPlanes||$e.numIntersection!==Be.numIntersection)||$e.vertexAlphas!==Ke||$e.vertexTangents!==de||$e.morphTargets!==pe||$e.morphNormals!==Fe||$e.morphColors!==tt||$e.toneMapping!==_t||$e.morphTargetsCount!==Tt)&&(ot=!0):(ot=!0,$e.__version=ae.version);let Mn=$e.currentProgram;ot===!0&&(Mn=Mi(ae,Y,Q));let ea=!1,En=!1,ci=!1;const Vt=Mn.getUniforms(),Tn=$e.uniforms;if(Ye.useProgram(Mn.program)&&(ea=!0,En=!0,ci=!0),ae.id!==ce&&(ce=ae.id,En=!0),ea||he!==C){Ye.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(G,"projectionMatrix",C.projectionMatrix),Vt.setValue(G,"viewMatrix",C.matrixWorldInverse);const Cn=Vt.map.cameraPosition;Cn!==void 0&&Cn.setValue(G,st.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&Vt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),he!==C&&(he=C,En=!0,ci=!0)}if($e.needsLights&&(Bt.state.directionalShadowMap.length>0&&Vt.setValue(G,"directionalShadowMap",Bt.state.directionalShadowMap,W),Bt.state.spotShadowMap.length>0&&Vt.setValue(G,"spotShadowMap",Bt.state.spotShadowMap,W),Bt.state.pointShadowMap.length>0&&Vt.setValue(G,"pointShadowMap",Bt.state.pointShadowMap,W)),Q.isSkinnedMesh){Vt.setOptional(G,Q,"bindMatrix"),Vt.setOptional(G,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Vt.setValue(G,"boneTexture",An.boneTexture,W))}Q.isBatchedMesh&&(Vt.setOptional(G,Q,"batchingTexture"),Vt.setValue(G,"batchingTexture",Q._matricesTexture,W),Vt.setOptional(G,Q,"batchingIdTexture"),Vt.setValue(G,"batchingIdTexture",Q._indirectTexture,W),Vt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Vt.setValue(G,"batchingColorTexture",Q._colorsTexture,W));const mn=oe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&dt.update(Q,oe,Mn),(En||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,Vt.setValue(G,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Tn.envMap.value=je,Tn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=uA()),En&&(Vt.setValue(G,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&La(Tn,ci),Oe&&ae.fog===!0&&it.refreshFogUniforms(Tn,Oe),it.refreshMaterialUniforms(Tn,ae,_e,ne,L.state.transmissionRenderTarget[C.id]),Bc.upload(G,Yr($e),Tn,W)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bc.upload(G,Yr($e),Tn,W),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(G,"center",Q.center),Vt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Vt.setValue(G,"normalMatrix",Q.normalMatrix),Vt.setValue(G,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const An=ae.uniformsGroups;for(let Cn=0,qs=An.length;Cn<qs;Cn++){const Ti=An[Cn];Ae.update(Ti,Mn),Ae.bind(Ti,Mn)}}return Mn}function La(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ei(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,Y,oe){const ae=M.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=Y,M.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const oe=M.get(C);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const qn=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,oe=0){K=C,X=Y,J=oe;let ae=null,Q=!1,Oe=!1;if(C){const ze=M.get(C);if(ze.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,ze.__webglFramebuffer),I.copy(C.viewport),k.copy(C.scissor),te=C.scissorTest,Ye.viewport(I),Ye.scissor(k),Ye.setScissorTest(te),ce=-1;return}else if(ze.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(ze.__hasExternalTextures)W.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const de=C.depthTexture;if(ze.__boundDepthTexture!==de){if(de!==null&&M.has(de)&&(C.width!==de.image.width||C.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);const Ke=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?ae=Ke[Y][oe]:ae=Ke[Y],Q=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?ae=M.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?ae=Ke[oe]:ae=Ke,I.copy(C.viewport),k.copy(C.scissor),te=C.scissorTest}else I.copy($).multiplyScalar(_e).floor(),k.copy(ue).multiplyScalar(_e).floor(),te=Ue;if(oe!==0&&(ae=qn),Ye.bindFramebuffer(G.FRAMEBUFFER,ae)&&Ye.drawBuffers(C,ae),Ye.viewport(I),Ye.scissor(k),Ye.setScissorTest(te),Q){const ze=M.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,oe)}else if(Oe){const ze=Y;for(let je=0;je<C.textures.length;je++){const Ke=M.get(C.textures[je]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+je,Ke.__webglTexture,oe,ze)}}else if(C!==null&&oe!==0){const ze=M.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,oe)}ce=-1},this.readRenderTargetPixels=function(C,Y,oe,ae,Q,Oe,qe,ze=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je){Ye.bindFramebuffer(G.FRAMEBUFFER,je);try{const Ke=C.textures[ze],de=Ke.format,pe=Ke.type;if(!ft.textureFormatReadable(de)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(pe)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ae&&oe>=0&&oe<=C.height-Q&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(Y,oe,ae,Q,we.convert(de),we.convert(pe),Oe))}finally{const Ke=K!==null?M.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,Y,oe,ae,Q,Oe,qe,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je)if(Y>=0&&Y<=C.width-ae&&oe>=0&&oe<=C.height-Q){Ye.bindFramebuffer(G.FRAMEBUFFER,je);const Ke=C.textures[ze],de=Ke.format,pe=Ke.type;if(!ft.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Fe),G.bufferData(G.PIXEL_PACK_BUFFER,Oe.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),G.readPixels(Y,oe,ae,Q,we.convert(de),we.convert(pe),0);const tt=K!==null?M.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,tt);const _t=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await vS(G,_t,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Fe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Oe),G.deleteBuffer(Fe),G.deleteSync(_t),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,oe=0){const ae=Math.pow(2,-oe),Q=Math.floor(C.image.width*ae),Oe=Math.floor(C.image.height*ae),qe=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;W.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,qe,ze,Q,Oe),Ye.unbindTexture()};const $i=G.createFramebuffer(),Fi=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,oe=null,ae=null,Q=0,Oe=null){Oe===null&&(Q!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=Q,Q=0):Oe=0);let qe,ze,je,Ke,de,pe,Fe,tt,_t;const It=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(oe!==null)qe=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,de=oe.min.y,pe=oe.isBox3?oe.min.z:0;else{const mn=Math.pow(2,-Q);qe=Math.floor(It.width*mn),ze=Math.floor(It.height*mn),C.isDataArrayTexture?je=It.depth:C.isData3DTexture?je=Math.floor(It.depth*mn):je=1,Ke=0,de=0,pe=0}ae!==null?(Fe=ae.x,tt=ae.y,_t=ae.z):(Fe=0,tt=0,_t=0);const Tt=we.convert(Y.format),$e=we.convert(Y.type);let Bt;Y.isData3DTexture?(W.setTexture3D(Y,0),Bt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Bt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Bt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ea=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),ci=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,de),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pe);const Vt=C.isDataArrayTexture||C.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const mn=M.get(C),An=M.get(Y),Cn=M.get(mn.__renderTarget),qs=M.get(An.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let Ti=0;Ti<je;Ti++)Vt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(C).__webglTexture,Q,pe+Ti),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Oe,_t+Ti)),G.blitFramebuffer(Ke,de,qe,ze,Fe,tt,qe,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||M.has(C)){const mn=M.get(C),An=M.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,$i),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fi);for(let Cn=0;Cn<je;Cn++)Vt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,Q,pe+Cn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,Q),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,Oe,_t+Cn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,Oe),Q!==0?G.blitFramebuffer(Ke,de,qe,ze,Fe,tt,qe,ze,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(Bt,Oe,Fe,tt,_t+Cn,Ke,de,qe,ze):G.copyTexSubImage2D(Bt,Oe,Fe,tt,Ke,de,qe,ze);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Bt,Oe,Fe,tt,_t,qe,ze,je,Tt,$e,It.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Bt,Oe,Fe,tt,_t,qe,ze,je,Tt,It.data):G.texSubImage3D(Bt,Oe,Fe,tt,_t,qe,ze,je,Tt,$e,It):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Oe,Fe,tt,qe,ze,Tt,$e,It.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Oe,Fe,tt,It.width,It.height,Tt,It.data):G.texSubImage2D(G.TEXTURE_2D,Oe,Fe,tt,qe,ze,Tt,$e,It);G.pixelStorei(G.UNPACK_ROW_LENGTH,ot),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ea),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),Oe===0&&Y.generateMipmaps&&G.generateMipmap(Bt),Ye.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){X=0,J=0,K=null,Ye.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const yv={type:"bird",bird:{tubeRadius:.08,segments:120,radialSegments:8,flapIntensity:1,deformIntensity:1},outerSphere:{size:7,segments:4,opacity:.6,deformationFactor:1,spikeFactor:1,isWireframe:!0},innerSphere:{size:3.5,segments:2,opacity:.3,deformationFactor:1,spikeFactor:.5,isWireframe:!0},globalRotationSpeed:1};function dA(r,t){const i=((r==null?void 0:r.bass)||0)/255,s=((r==null?void 0:r.mid)||0)/255,l=((r==null?void 0:r.high)||0)/255,c=(i+s+l)/3,d=Date.now()*.01,h=Math.sin(d*1.5)*c*4;return{rotation:{x:i*40+h,y:s*50+Math.cos(d)*c*12,z:l*30+h},offset:{x:Math.sin(d*.2)*s*6+Math.sin(d*2)*c*3,y:i*10+Math.cos(d*1.5)*c*4,z:-l*15+Math.sin(d*3)*c*5}}}const N_=({className:r="",speed:t=1,color:i="#ffffff",bands:s,rotation:l={x:0,y:0,z:0},position:c={x:0,y:0,z:0},side:d="left",scale:h=1,config:m=yv,combo:p=0,onClick:_,lightingEnabled:g=!1})=>{const x=be.useRef(null),S=be.useRef(s),E=be.useRef(l),A=be.useRef(c),b=be.useRef(h),y=be.useRef(m),D=be.useRef(p),N=be.useRef(g);be.useEffect(()=>{S.current=s},[s]),be.useEffect(()=>{E.current=l},[l]),be.useEffect(()=>{A.current=c},[c]),be.useEffect(()=>{b.current=h},[h]),be.useEffect(()=>{y.current=m},[m]),be.useEffect(()=>{D.current=p},[p]),be.useEffect(()=>{N.current=g},[g]);const[U,L]=Ca.useState(new zt(i));return be.useEffect(()=>{L(new zt(i))},[i]),be.useEffect(()=>{if(!x.current)return;const O=new sb,F=new yi(75,1,.1,1e3),V=new fA({alpha:!0,antialias:!0}),T=x.current.clientWidth||400,w=x.current.clientHeight||400;V.setSize(T,w),x.current.appendChild(V.domElement);const X=new jo;O.add(X),F.position.z=10;let J=null,K=null,ce=null,he=null;const I=new zt(i),k=y.current.outerSphere,te=y.current.innerSphere,Me=new Xc(k.size,k.segments),ye=new kc({color:I,wireframe:k.isWireframe,transparent:!0,opacity:k.opacity});J=new Oi(Me,ye),ce=Me.attributes.position.array.slice();const z=new Xc(te.size,te.segments),ne=new kc({color:I,wireframe:te.isWireframe,transparent:!0,opacity:te.opacity});K=new Oi(z,ne),he=z.attributes.position.array.slice(),X.add(J),X.add(K);const _e=new Worker(new URL("/OveTyp_/assets/modeling.worker-BjLKqQYL.js",import.meta.url),{type:"module"});let Ce=!1,Ie=!1;_e.onmessage=ut=>{const{positions:ht,name:st}=ut.data;st==="outer"&&J?(J.geometry.attributes.position.array.set(ht),J.geometry.attributes.position.needsUpdate=!0,Ce=!1):st==="inner"&&K&&(K.geometry.attributes.position.array.set(ht),K.geometry.attributes.position.needsUpdate=!0,Ie=!1)};const $=new mb;let ue;function Ue(){ue=requestAnimationFrame(Ue);const ut=$.getElapsedTime(),ht=S.current,st=y.current,pt=D.current;if(N.current){const gt=(((ht==null?void 0:ht.bass)||0)+((ht==null?void 0:ht.mid)||0))/512,ft=d==="left"?220:340,Ye=.7+gt*.3,P=.5+gt*.4,M=new zt().setHSL(ft/360,Ye,P);J&&J.material.color.copy(M),K&&K.material.color.copy(M)}else J&&J.material.color.copy(I),K&&K.material.color.copy(I);if(J&&K){if(ce&&!Ce){Ce=!0;const ft=J.geometry.attributes.position.array.slice();_e.postMessage({name:"outer",positions:ft,originalPositions:ce,time:ut,bands:ht,config:st.outerSphere,combo:pt},[ft.buffer])}if(he&&!Ie){Ie=!0;const ft=K.geometry.attributes.position.array.slice();_e.postMessage({name:"inner",positions:ft,originalPositions:he,time:ut,bands:ht,config:st.innerSphere,combo:pt},[ft.buffer])}J.rotation.y+=.005*st.globalRotationSpeed,K.rotation.y-=.01*st.globalRotationSpeed;const gt=(((ht==null?void 0:ht.bass)||0)+((ht==null?void 0:ht.high)||0))/512;J.rotation.x+=gt*.1,K.rotation.z+=gt*.15}const mt=E.current,at=A.current,wt=b.current,G=d==="right"?-1:1,bt=dA(ht);X.rotation.x=od.degToRad(mt.x+bt.rotation.x),X.rotation.y=od.degToRad(mt.y*G+bt.rotation.y*G),X.rotation.z=od.degToRad(mt.z*G+bt.rotation.z*G),X.position.set(at.x*G+bt.offset.x*G,at.y+bt.offset.y,at.z+bt.offset.z),X.scale.set(wt,wt,wt),V.render(O,F)}Ue();const We=V.domElement,ke=x.current;return()=>{cancelAnimationFrame(ue),_e.terminate(),ke&&ke.contains(We)&&ke.removeChild(We),V.dispose(),O.clear()}},[i,d,t,m.type]),B.jsx("div",{ref:x,className:`w-full h-full flex items-center justify-center pointer-events-auto cursor-pointer ${r}`,onClick:_})},hA=({currentPhrase:r,normalizedTypedText:t,currentWordInfo:i,isComposingState:s,palette:l,customColor:c,frequencyBands:d,birdRotation:h,birdPos3D:m,birdSize:p,visualsConfig:_,combo:g,comboMultiplier:x,isMusicLightingEnabled:S,onDimensionalMenu:E,PALETTE_COLORS:A,isCircuitMode:b,circuitTimer:y,circuitTitle:D,onCircuitCycle:N})=>{const U=()=>B.jsx("div",{className:"w-full bg-[var(--bg-glass-strong)] border border-[var(--border-glass)] rounded-[2.5rem] p-10 md:p-14 min-h-[180px] flex flex-col justify-center relative overflow-hidden transition-all duration-1000 shadow-inner",children:B.jsx("div",{className:"font-mono text-2xl md:text-3xl relative mx-12 md:mx-20",children:B.jsx("div",{className:"text-[var(--text-ghost)] whitespace-pre-wrap leading-relaxed font-sans",children:r.split("").map((O,F)=>{let V="text-[var(--text-ghost)]";if(F<t.length){const T=t[F]!==O,w=F===t.length-1;T?w&&s?V="text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] animate-pulse":V="text-red-400 bg-red-500/10 border-b-2 border-red-500/30":V="text-[var(--accent-primary)]"}return B.jsxs("span",{className:`${V} transition-all inline-block relative`,children:[O===" "?" ":O,F===t.length&&B.jsx("span",{className:"absolute left-0 bottom-[-4px] w-full h-[3px] bg-[var(--accent-primary)] animate-pulse shadow-[0_0_15px_var(--accent-primary)]"})]},F)})})})}),L=l==="custom"?c:A[l]||c;return B.jsx("div",{className:"w-full relative group flex justify-center",children:B.jsx("div",{className:"w-full bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:B.jsxs("div",{className:"w-full flex-grow flex flex-col items-center select-none",children:[B.jsx("div",{className:"w-full",children:U()}),B.jsxs("div",{className:"w-full flex flex-col items-center gap-4 mt-6 relative",children:[B.jsx("div",{className:"absolute hidden md:block",style:{left:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:B.jsx(N_,{color:L,speed:.75,bands:d,rotation:h,position:m,side:"left",scale:p*.8/180,config:_,combo:g*x,lightingEnabled:S,onClick:E},"circle-left")}),B.jsx("div",{className:"absolute hidden md:block",style:{right:"0px",top:"50%",transform:"translateY(-50%)",width:`${p*.8}px`,height:`${p*.8}px`,pointerEvents:"auto",zIndex:50,opacity:.8},children:B.jsx(N_,{color:L,speed:.75,bands:d,rotation:h,position:m,side:"right",scale:p*.8/180,config:_,combo:g*x,lightingEnabled:S,onClick:E},"circle-right")}),b&&y!==void 0&&B.jsxs("button",{onClick:N,className:"relative z-50 flex items-center justify-center gap-4 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer hover:scale-105 transition-transform active:scale-95 group",children:[B.jsxs("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] rounded-full px-5 py-1.5 flex items-center gap-3 transition-colors group-hover:bg-[var(--accent-primary)]/10",children:[B.jsx("i",{className:"fa fa-refresh fa-spin text-xs"}),B.jsxs("span",{className:"font-mono font-bold text-lg tracking-wider",children:[y,"s"]})]}),D&&B.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-md border border-[var(--border-strong)] text-[var(--text-primary)] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]",children:D})]}),B.jsx("div",{className:"relative overflow-visible flex items-center justify-center gap-8",style:{height:`${p*.8}px`},children:B.jsx("div",{className:"bg-[var(--bg-floating)] backdrop-blur-3xl border border-[var(--border-strong)] rounded-[2.5rem] px-14 h-24 flex items-center justify-center min-w-[400px] shadow-3xl scale-110 z-30 relative overflow-visible",children:B.jsxs("div",{className:"relative font-mono text-4xl flex items-center h-full min-w-[200px]",children:[B.jsx("div",{className:"absolute inset-0 text-[var(--text-ghost)] whitespace-pre flex items-center justify-start pointer-events-none opacity-40",children:i.word}),B.jsxs("div",{className:"relative flex items-center whitespace-pre h-full",children:[i.userTypedSlice.split("").map((O,F)=>{const V=O===(i.word[F]||""),T=s&&F===i.userTypedSlice.length-1?"text-yellow-400":V?"text-[var(--accent-primary)]":"text-red-400 bg-red-500/10 border-b-2 border-red-500/30";return B.jsx("span",{className:`relative inline-block ${T}`,children:O===" "?" ":O},F)}),B.jsx("span",{className:"inline-block w-0.5 h-10 bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)] animate-pulse rounded-full ml-1"})]})]})})})]})]})})})},Vs={"left-pinky":"#f472b6","left-ring":"#c084fc","left-middle":"#60a5fa","left-index":"#22d3ee",thumb:"#9ca3af","right-index":"#4ade80","right-middle":"#facc15","right-ring":"#fb923c","right-pinky":"#f87171"},pA={"left-pinky":"Meñique Izquierdo","left-ring":"Anular Izquierdo","left-middle":"Corazón Izquierdo","left-index":"Índice Izquierdo",thumb:"Pulgares (Espacio)","right-index":"Índice Derecho","right-middle":"Corazón Derecho","right-ring":"Anular Derecho","right-pinky":"Meñique Derecho"},qh=[[{key:"1",label:"1",finger:"left-pinky",row:0,why:"Alcance natural exterior."},{key:"2",label:"2",finger:"left-ring",row:0,why:"Extensión diagonal superior."},{key:"3",label:"3",finger:"left-middle",row:0,why:"Extensión diagonal superior."},{key:"4",label:"4",finger:"left-index",row:0,why:"Alcance interior izquierdo."},{key:"5",label:"5",finger:"left-index",row:0,why:"Extensión interior izquierda."},{key:"6",label:"6",finger:"right-index",row:0,why:"Extensión interior derecha."},{key:"7",label:"7",finger:"right-index",row:0,why:"Alcance interior derecho."},{key:"8",label:"8",finger:"right-middle",row:0,why:"Extensión diagonal superior."},{key:"9",label:"9",finger:"right-ring",row:0,why:"Extensión diagonal superior."},{key:"0",label:"0",finger:"right-pinky",row:0,why:"Alcance natural exterior."}],[{key:"q",label:"Q",finger:"left-pinky",row:1,why:"Posición superior externa."},{key:"w",label:"W",finger:"left-ring",row:1,why:"Movimiento vertical desde S."},{key:"e",label:"E",finger:"left-middle",row:1,why:"Movimiento vertical desde D."},{key:"r",label:"R",finger:"left-index",row:1,why:"Movimiento vertical desde F."},{key:"t",label:"T",finger:"left-index",row:1,why:"Extensión lateral desde F."},{key:"y",label:"Y",finger:"right-index",row:1,why:"Extensión lateral desde J."},{key:"u",label:"U",finger:"right-index",row:1,why:"Movimiento vertical desde J."},{key:"i",label:"I",finger:"right-middle",row:1,why:"Movimiento vertical desde K."},{key:"o",label:"O",finger:"right-ring",row:1,why:"Movimiento vertical desde L."},{key:"p",label:"P",finger:"right-pinky",row:1,why:"Posición superior externa."}],[{key:"a",label:"A",finger:"left-pinky",row:2,why:"Posición de reposo base."},{key:"s",label:"S",finger:"left-ring",row:2,why:"Posición de reposo base."},{key:"d",label:"D",finger:"left-middle",row:2,why:"Posición de reposo base."},{key:"f",label:"F",finger:"left-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"g",label:"G",finger:"left-index",row:2,why:"Extensión lateral cómoda."},{key:"h",label:"H",finger:"right-index",row:2,why:"Extensión lateral cómoda."},{key:"j",label:"J",finger:"right-index",row:2,why:"Posición de reposo con muesca táctil."},{key:"k",label:"K",finger:"right-middle",row:2,why:"Posición de reposo base."},{key:"l",label:"L",finger:"right-ring",row:2,why:"Posición de reposo base."},{key:"ñ",label:"Ñ",finger:"right-pinky",row:2,why:"Posición de reposo base (Español)."}],[{key:"<",label:"<",finger:"left-pinky",row:3,why:"Tecla ISO para programación."},{key:"z",label:"Z",finger:"left-pinky",row:3,why:"Extensión inferior externa."},{key:"x",label:"X",finger:"left-ring",row:3,why:"Extensión diagonal inferior."},{key:"c",label:"C",finger:"left-middle",row:3,why:"Extensión diagonal inferior."},{key:"v",label:"V",finger:"left-index",row:3,why:"Extensión diagonal inferior."},{key:"b",label:"B",finger:"left-index",row:3,why:"Extensión lateral inferior."},{key:"n",label:"N",finger:"right-index",row:3,why:"Extensión lateral inferior."},{key:"m",label:"M",finger:"right-index",row:3,why:"Extensión diagonal inferior."},{key:",",label:",",finger:"right-middle",row:3,why:"Puntuación esencial."},{key:".",label:".",finger:"right-ring",row:3,why:"Fin de frase y decimales."},{key:"-",label:"-",finger:"right-pinky",row:3,why:"Barra alta y guiones."},{key:"-",label:"_",finger:"right-pinky",row:3,why:"Barra baja muy usada en código."}]],en={};qh.flat().forEach(r=>{en[r.key.toLowerCase()]=r,en[r.label.toLowerCase()]=r,r.key==="1"&&(en["!"]=r),r.key==="2"&&(en['"']=r),r.key==="3"&&(en["·"]=r),r.key==="4"&&(en.$=r),r.key==="5"&&(en["%"]=r),r.key==="6"&&(en["&"]=r),r.key==="7"&&(en["/"]=r),r.key==="8"&&(en["("]=r),r.key==="9"&&(en[")"]=r),r.key==="0"&&(en["="]=r),r.key==="<"&&(en[">"]=r),r.key===","&&(en[";"]=r),r.key==="."&&(en[":"]=r),r.key==="-"&&(en._=r)});const mA={á:"a",é:"e",í:"i",ó:"o",ú:"u",ü:"u",ï:"i",Á:"a",É:"e",Í:"i",Ó:"o",Ú:"u",Ñ:"ñ"};Object.entries(mA).forEach(([r,t])=>{en[t]&&(en[r]={...en[t],key:r,label:r.toUpperCase()})});const Sv={key:" ",label:"Espacio",finger:"thumb",row:5,why:"Dedo más fuerte para la tecla más frecuente."};en[" "]=Sv;const gA=({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0}})=>{const l=(c,d,h,m)=>{const p=t.toLowerCase()===c.key.toLowerCase()||t===" "&&c.key===" ",_=r.toLowerCase()===c.key.toLowerCase();let g="mac-key ",x={};if(c.key===" "?g+="w-[250px] h-[44px] ":g+="w-[44px] h-[44px] ",_&&(g+="active "),p&&(g+="target "),i&&!_&&!p){const S=Vs[c.finger];x={borderColor:S,color:S,backgroundColor:`${S}10`,boxShadow:`0 0 10px ${S}20`}}else if(!_&&!p&&s){const S=h/(m||1),E=Math.max(0,1-S*2),A=Math.max(0,1-Math.abs(S-.5)*4),b=Math.max(0,(S-.5)*2),y=s.bass*E+s.mid*A+s.high*b;if(y>.02){const D=220+S*120;x={backgroundColor:`hsla(${D}, 70%, 50%, ${y*.25})`,boxShadow:`0 0 ${y*15}px hsla(${D}, 70%, 50%, 0.4)`,borderColor:`hsla(${D}, 70%, 50%, ${y*.5})`,color:`hsla(${D}, 70%, 90%, ${.6+y*.4})`}}}return B.jsxs("div",{className:g,style:x,children:[c.label,p&&B.jsx("div",{className:"absolute -bottom-1 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-glow)]"})]},c.key)};return B.jsxs("div",{className:"flex flex-col items-center gap-2 p-2 select-none opacity-80 hover:opacity-100 transition-opacity",children:[qh.map((c,d)=>B.jsx("div",{className:`flex gap-1.5 ${d===3?"ml-6":""}`,children:c.map((h,m)=>l(h,d,m,c.length))},d)),B.jsx("div",{className:"flex justify-center mt-3",children:l(Sv,5,0,1)})]})},U_=[[{id:"esc",base:"Escape",shift:"Escape",alt:"Escape",special:"esc",width:"w-[60px]",h:"h-[22px]"},{id:"f1",base:"F1",shift:"F1",alt:"F1",label:"F1",special:"f",h:"h-[22px]"},{id:"f2",base:"F2",shift:"F2",alt:"F2",label:"F2",special:"f",h:"h-[22px]"},{id:"f3",base:"F3",shift:"F3",alt:"F3",label:"F3",special:"f",h:"h-[22px]"},{id:"f4",base:"F4",shift:"F4",alt:"F4",label:"F4",special:"f",h:"h-[22px]"},{id:"f5",base:"F5",shift:"F5",alt:"F5",label:"F5",special:"f",h:"h-[22px]"},{id:"f6",base:"F6",shift:"F6",alt:"F6",label:"F6",special:"f",h:"h-[22px]"},{id:"f7",base:"F7",shift:"F7",alt:"F7",label:"F7",special:"f",h:"h-[22px]"},{id:"f8",base:"F8",shift:"F8",alt:"F8",label:"F8",special:"f",h:"h-[22px]"},{id:"f9",base:"F9",shift:"F9",alt:"F9",label:"F9",special:"f",h:"h-[22px]"},{id:"f10",base:"F10",shift:"F10",alt:"F10",label:"F10",special:"f",h:"h-[22px]"},{id:"f11",base:"F11",shift:"F11",alt:"F11",label:"F11",special:"f",h:"h-[22px]"},{id:"f12",base:"F12",shift:"F12",alt:"F12",label:"F12",special:"f",h:"h-[22px]"},{id:"eject",base:"",shift:"",alt:"",label:"⚙",special:"eject",h:"h-[22px]",width:"w-[60px]"}],[{id:"row1_0",base:"º",shift:"ª",alt:"\\"},{id:"row1_1",base:"1",shift:"!",alt:"|"},{id:"row1_2",base:"2",shift:'"',alt:"@"},{id:"row1_3",base:"3",shift:"·",alt:"#"},{id:"row1_4",base:"4",shift:"$",alt:"~"},{id:"row1_5",base:"5",shift:"%",alt:"€"},{id:"row1_6",base:"6",shift:"&",alt:"¬"},{id:"row1_7",base:"7",shift:"/",alt:""},{id:"row1_8",base:"8",shift:"(",alt:""},{id:"row1_9",base:"9",shift:")",alt:""},{id:"row1_10",base:"0",shift:"=",alt:""},{id:"row1_11",base:"'",shift:"?",alt:""},{id:"row1_12",base:"¡",shift:"¿",alt:""},{id:"delete",base:"Backspace",shift:"Backspace",alt:"Backspace",label:"⌫",special:"delete",width:"w-[80px]"}],[{id:"tab",base:"Tab",shift:"Tab",alt:"Tab",label:"⇥",special:"tab",width:"w-[80px]"},{id:"q",base:"q",shift:"Q",alt:"q"},{id:"w",base:"w",shift:"W",alt:"w"},{id:"e",base:"e",shift:"E",alt:"é"},{id:"r",base:"r",shift:"R",alt:"r"},{id:"t",base:"t",shift:"T",alt:"t"},{id:"y",base:"y",shift:"Y",alt:"y"},{id:"u",base:"u",shift:"U",alt:"ú"},{id:"i",base:"i",shift:"I",alt:"í"},{id:"o",base:"o",shift:"O",alt:"ó"},{id:"p",base:"p",shift:"P",alt:"p"},{id:"row2_11",base:"`",shift:"^",alt:"["},{id:"row2_12",base:"+",shift:"*",alt:"]"},{id:"return",base:"Enter",shift:"Enter",alt:"Enter",label:"↵",special:"return",width:"w-[44px]",h:"h-[96px]"}],[{id:"caps",base:"CapsLock",shift:"CapsLock",alt:"CapsLock",label:"⇪",special:"caps",width:"w-[88px]"},{id:"a",base:"a",shift:"A",alt:"á"},{id:"s",base:"s",shift:"S",alt:"s"},{id:"d",base:"d",shift:"D",alt:"d"},{id:"f",base:"f",shift:"F",alt:"f"},{id:"g",base:"g",shift:"G",alt:"g"},{id:"h",base:"h",shift:"H",alt:"h"},{id:"j",base:"j",shift:"J",alt:"j"},{id:"k",base:"k",shift:"K",alt:"k"},{id:"l",base:"l",shift:"L",alt:"l"},{id:"ñ",base:"ñ",shift:"Ñ",alt:"ñ"},{id:"row3_11",base:"´",shift:"¨",alt:"{"},{id:"row3_12",base:"ç",shift:"Ç",alt:"}"}],[{id:"shift_l",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[56px]"},{id:"row4_1",base:"<",shift:">",alt:""},{id:"z",base:"z",shift:"Z",alt:"z"},{id:"x",base:"x",shift:"X",alt:"x"},{id:"c",base:"c",shift:"C",alt:"c"},{id:"v",base:"v",shift:"V",alt:"v"},{id:"b",base:"b",shift:"B",alt:"b"},{id:"n",base:"n",shift:"N",alt:"n"},{id:"m",base:"m",shift:"M",alt:"m"},{id:"row4_9",base:",",shift:";",alt:""},{id:"row4_10",base:".",shift:":",alt:""},{id:"row4_11",base:"-",shift:"_",alt:""},{id:"shift_r",base:"Shift",shift:"Shift",alt:"Shift",label:"⇧",special:"shift",width:"w-[118px]"}],[{id:"fn",base:"Fn",shift:"Fn",alt:"Fn",label:"fn",special:"fn",width:"w-[44px]"},{id:"ctrl",base:"Control",shift:"Control",alt:"Control",label:"⌃",special:"ctrl"},{id:"opt_l",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"cmd_l",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"space",base:" ",shift:" ",alt:" ",label:"",special:"space",width:"w-[250px]"},{id:"cmd_r",base:"Command",shift:"Command",alt:"Command",label:"⌘",special:"cmd",width:"w-[64px]"},{id:"opt_r",base:"Option",shift:"Option",alt:"Option",label:"⌥",special:"opt",width:"w-[44px]"},{id:"left",base:"ArrowLeft",shift:"ArrowLeft",alt:"ArrowLeft",label:"◀",special:"left",h:"h-[22px]"},{id:"up",base:"ArrowUp",shift:"ArrowUp",alt:"ArrowUp",label:"▲",special:"up",h:"h-[22px]"},{id:"down",base:"ArrowDown",shift:"ArrowDown",alt:"ArrowDown",label:"▼",special:"down",h:"h-[22px]"},{id:"right",base:"ArrowRight",shift:"ArrowRight",alt:"ArrowRight",label:"▶",special:"right",h:"h-[22px]"}]],_A=({top:r,bottom:t,right:i})=>B.jsxs("div",{className:"w-full h-full relative",children:[B.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full pt-0 pb-[2px]",children:[B.jsx("span",{className:"text-[10px] leading-none font-medium mb-1 opacity-80",children:r}),B.jsx("span",{className:"text-[13px] font-bold leading-none",children:t})]}),i&&B.jsx("span",{className:"absolute bottom-[4px] right-[4px] text-[10px] leading-none font-medium opacity-70",children:i})]}),vA=({t:r,b:t})=>B.jsxs("div",{className:"flex flex-col items-center justify-center",children:[B.jsx("span",{className:"text-[10px] mb-0.5 opacity-70",children:r}),B.jsx("span",{className:"text-[12px] font-bold",children:t})]}),L_=({l:r,s:t})=>B.jsxs("div",{className:"w-full h-full relative",children:[B.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:B.jsx("span",{className:"text-[12px] font-medium",children:r})}),t&&B.jsx("span",{className:"absolute bottom-[4px] right-[5px] text-[11px] opacity-70 leading-none font-medium",children:t})]}),xA=Ca.memo(({focused:r})=>{let t="rgba(255,255,255,0.05)",i="rgba(255,255,255,0.12)",s="rgba(255,255,255,0.8)";return r&&(t="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3)",i="rgba(var(--theme-r), var(--theme-g), var(--theme-b), 1)",s="#fff"),B.jsxs("div",{style:{position:"relative",width:"44px",height:"94px",flexShrink:0},children:[B.jsx("svg",{fill:"none",width:"44",height:"94",style:{position:"absolute",top:0,left:0},children:B.jsx("path",{d:"M 6.5,0.5 L 37.5,0.5 Q 43.5,0.5 43.5,6.5 L 43.5,87.5 Q 43.5,93.5 37.5,93.5 L 14.5,93.5 Q 8.5,93.5 8.5,87.5 L 8.5,48.5 Q 8.5,44.5 6.5,44.5 Q 0.5,44.5 0.5,38.5 L 0.5,6.5 Q 0.5,0.5 6.5,0.5 Z",fill:t,stroke:i,strokeWidth:"1",style:{transition:"all 0.1s cubic-bezier(0.4, 0, 0.2, 1)"}})}),B.jsx("div",{style:{position:"absolute",top:0,left:6,width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",color:s,fontSize:"14px",transition:"color 0.1s"},children:"↵"})]})}),cs=Ca.memo(({keyDef:r,active:t,target:i,highlighted:s,showZones:l,fingerColor:c})=>{if(r.special==="return")return B.jsx("div",{className:`transition-all ${t||i?"scale-105 -translate-y-[2px] z-20":""}`,style:{marginLeft:"-8px",height:"44px",zIndex:10,position:"relative"},children:B.jsx(xA,{focused:t||i})});let d=`mac-key ${r.width||"w-[44px]"} ${r.h||"h-[44px]"} ${r.className||""} `;t&&(d+="active "),i&&(d+="target "),s&&(d+="highlighted ");let h={};l&&!t&&!i&&!s&&c&&(h={borderColor:c,color:c,backgroundColor:`${c}10`,boxShadow:`0 0 8px ${c}20`});let m=r.label||r.base;return r.id.startsWith("row1_")||r.id==="row2_11"||r.id==="row2_12"||r.id==="row3_11"?m=B.jsx(_A,{top:r.shift,bottom:r.base,right:r.alt===r.base?void 0:r.alt}):r.id==="row3_12"?m=B.jsx(L_,{l:"Ç",s:"}"}):r.id.match(/^[a-zñ]$/)?m=B.jsx(L_,{l:r.base.toUpperCase(),s:r.alt===r.base?"":r.alt}):r.shift&&r.shift!==r.base&&!r.special&&(m=B.jsx(vA,{t:r.shift,b:r.base})),B.jsxs("div",{className:d.trim(),style:h,children:[r.special==="caps"&&B.jsx("div",{className:`w-1 h-1 rounded-full bg-green-500 absolute top-2 left-2 ${t?"opacity-100":"opacity-0"}`}),m]})}),yA=Ca.memo(({activeKey:r,targetKey:t,showZones:i=!1,bands:s={bass:0,mid:0,high:0},highlightedKeys:l=[],isWaveActive:c=!1})=>{const d=be.useCallback(g=>g.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),[]),h=be.useCallback(g=>{const x=g.id.toLowerCase(),S=g.base.toLowerCase(),E=t.toLowerCase(),A=d(t);if(g.special==="space"&&t===" "||g.special==="return"&&(t==="enter"||t==="return")||S===A||x===A||g.shift.toLowerCase()===E||g.alt.toLowerCase()===E)return!0;const b={row1_0:["º","\\","ª"],row1_1:["1","!","|"],row1_2:["2",'"',"@"],row1_3:["3","·","#"],row1_4:["4","$","~"],row1_5:["5","%","€"],row1_6:["6","&","¬"],row2_11:["[","^","`"],row2_12:["]","*","+"],row3_11:["{","¨","´"],row3_12:["}","ç","Ç"]};return b[g.id]?b[g.id].includes(t):!1},[t,d]),m=be.useCallback(g=>{var A;const x=g.id.toLowerCase(),S=g.base.toLowerCase(),E=r.toLowerCase();return g.special==="space"&&r===" "||g.special==="return"&&E==="enter"||g.special==="delete"&&(E==="backspace"||E==="delete")?!0:x===E||S===E||g.shift.toLowerCase()===E||((A=g.label)==null?void 0:A.toLowerCase())===E},[r]),p=be.useCallback(g=>l.some(x=>x.toLowerCase()===g.id.toLowerCase()||x.toLowerCase()===g.base.toLowerCase()),[l]),_=be.useCallback(g=>{let x=g.id.toLowerCase();if(g.special==="tab"||g.special==="caps"||g.special==="shift"||g.special==="ctrl"||g.special==="fn")return Vs["left-pinky"];if(g.special==="return"||g.special==="delete")return Vs["right-pinky"];if(g.special==="space"||g.special==="opt"||g.special==="cmd")return Vs.thumb;const S=en[x]||en[g.base.toLowerCase()];return S?Vs[S.finger]:null},[]);return B.jsx("div",{className:"scale-[0.55] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] origin-center flex justify-center select-none",children:B.jsx("div",{className:"bg-transparent rounded-[10px] p-1 flex flex-col gap-[6px] w-[755px]",children:U_.map((g,x)=>{if(x===3)return null;if(x===2)return B.jsxs("div",{className:"flex flex-row gap-[6px] items-start",children:[B.jsxs("div",{className:"flex flex-col gap-[6px]",children:[B.jsx("div",{className:"flex flex-row gap-[6px]",children:g.slice(0,-1).map(E=>B.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:_(E)},E.id))}),B.jsx("div",{className:"flex flex-row gap-[6px]",children:U_[3].map(E=>B.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:_(E)},E.id))})]}),B.jsx(cs,{keyDef:g[g.length-1],active:m(g[g.length-1]),target:h(g[g.length-1]),highlighted:p(g[g.length-1]),showZones:i,fingerColor:_(g[g.length-1])})]},"merged-row-2-3");const S=x===5;return B.jsx("div",{className:"flex flex-row gap-[6px] items-end",children:g.map((E,A)=>S&&(E.id==="left"||E.id==="up"||E.id==="down"||E.id==="right")?E.id!=="left"?null:B.jsxs(Ca.Fragment,{children:[B.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:B.jsx(cs,{keyDef:g[A],active:m(g[A]),target:h(g[A]),highlighted:p(g[A]),showZones:i,fingerColor:_(g[A])})}),B.jsxs("div",{className:"flex flex-col gap-[2px] w-[44px]",children:[B.jsx(cs,{keyDef:g[A+1],active:m(g[A+1]),target:h(g[A+1]),highlighted:p(g[A+1]),showZones:i,fingerColor:_(g[A+1])}),B.jsx(cs,{keyDef:g[A+2],active:m(g[A+2]),target:h(g[A+2]),highlighted:p(g[A+2]),showZones:i,fingerColor:_(g[A+2])})]}),B.jsx("div",{className:"flex flex-col justify-end h-[44px] w-[44px]",children:B.jsx(cs,{keyDef:g[A+3],active:m(g[A+3]),target:h(g[A+3]),highlighted:p(g[A+3]),showZones:i,fingerColor:_(g[A+3])})})]},"arrows"):B.jsx(cs,{keyDef:E,active:m(E),target:h(E),highlighted:p(E),showZones:i,fingerColor:_(E)},E.id))},x)})})})}),SA=({analyser:r,active:t,color:i,type:s,opacityMultiplier:l=1,yOffset:c=0})=>{const d=be.useRef(null),h=be.useRef(null);return be.useEffect(()=>{let m,p=0,_=0;const g=new Uint8Array(r.frequencyBinCount),x=()=>{r.getByteFrequencyData(g);let S=0;if(s==="kick"){for(let L=0;L<4;L++)S+=g[L];S/=4}else if(s==="bass"){for(let L=2;L<12;L++)S+=g[L];S/=10}else if(s==="hihat"||s==="percussion"||s==="snare"||s==="ghost"){for(let L=30;L<60;L++)S+=g[L];S/=30,S*=3}else if(s==="lead"){for(let L=10;L<30;L++)S+=g[L];S/=20}else if(s==="ambient"){for(let L=0;L<20;L++)S+=g[L];S/=20}else{for(let L=0;L<20;L++)S+=g[L];S/=20}const E=Math.min(S/255,1);_+=(E-_)*.15;const A=200,y=40/2+c,D=24;p+=.02+_*.05;const N=[];for(let L=0;L<=D;L++){const O=L/D*A,F=L/D*2-1,V=Math.exp(-Math.pow(F*1.8,2));let T=0;const w=5+_*25;s==="kick"?T=Math.sin(p*8)*w*V*Math.cos(F*Math.PI):s==="hihat"||s==="snare"||s==="ghost"?(T=Math.sin(F*20+p*30)*w*.4*V,T+=(Math.random()-.5)*w*.2*V):(T=Math.sin(F*4+p*5)*w*V,T+=Math.sin(F*8-p*3)*(w*.3)*V),N.push({x:O,y:y+T})}const U=N.reduce((L,O,F)=>{if(F===0)return`M ${O.x},${O.y}`;const V=N[F-1],T=V.x+(O.x-V.x)/2;return L+` C ${T},${V.y} ${T},${O.y} ${O.x},${O.y}`},"");if(d.current&&(d.current.setAttribute("d",U),d.current.setAttribute("stroke-width",(.8+_*1.5).toFixed(2))),h.current){const L=t?(.6+_*.4)*l:.1;h.current.style.opacity=L.toString()}m=requestAnimationFrame(x)};return x(),()=>cancelAnimationFrame(m)},[r,s,c,t,l]),B.jsx("div",{ref:h,className:"absolute inset-0 pointer-events-none overflow-hidden rounded-xl bg-blend-screen",style:{transition:"opacity 0.2s ease-out"},children:B.jsx("svg",{className:"w-full h-full",viewBox:"0 0 200 40",preserveAspectRatio:"none",children:B.jsx("path",{ref:d,fill:"none",stroke:i,strokeLinecap:"round",strokeLinejoin:"round"})})})},bA=Ca.memo(({keyboardType:r,activeKey:t,targetChar:i,showZones:s,isMusicLightingEnabled:l,frequencyBands:c,stats:d,isZenMode:h,score:m,onRestart:p,onZenToggle:_,audioReady:g,audioSystem:x,currentMusicStyle:S,startTime:E,isFinished:A,combo:b,comboMultiplier:y,onDimensionalMenu:D,hexToRgba:N,customColor:U,highlightedKeys:L=[],isWaveActive:O=!1})=>{const F=l?c:{bass:0,mid:0,high:0};return B.jsxs("div",{className:"flex flex-col items-center w-full transition-all duration-500 z-20 pb-2 gap-2",children:[B.jsxs("div",{className:"w-full max-w-[900px] flex items-center justify-between gap-4 px-2",children:[B.jsxs("div",{className:"flex gap-2",children:[B.jsx("button",{onClick:p,className:"h-11 w-11 flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-lg",title:"Reiniciar",children:B.jsx("i",{className:"fa fa-refresh"})}),B.jsxs("button",{onClick:_,className:`h-11 px-6 flex items-center justify-center border rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg ${h?"bg-[var(--accent-primary)] text-[var(--bg-app)] border-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]":"bg-[var(--bg-glass)] text-[var(--text-secondary)] border-[var(--border-strong)]"}`,children:["ZEN ",h?"ON":"OFF"]})]}),B.jsxs("div",{className:"h-11 flex-grow max-w-[420px] bg-[var(--bg-glass)] border border-[var(--border-strong)] rounded-2xl flex items-center px-6 overflow-hidden shadow-2xl transition-all duration-500 relative",style:{boxShadow:b>15?`0 0 30px ${N(U,.3)}`:"none"},children:[g&&x&&S.layers.map(V=>b*y>=V.minCombo&&(V.maxCombo===void 0||b*y<=V.maxCombo)&&B.jsx(SA,{analyser:x.getAnalysers()[V.id]||x.getAnalysers().master,type:V.type,color:V.color,active:E!==null&&!A,opacityMultiplier:V.opacity,yOffset:V.yOffset},V.id)),B.jsxs("div",{className:"flex items-center gap-4 relative z-10 w-full justify-between",children:[B.jsxs("div",{className:"flex items-baseline gap-1",children:[B.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:d.wpm}),B.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"WPM"})]}),B.jsxs("div",{className:"flex items-baseline gap-1",children:[B.jsx("span",{className:"text-[12px] font-black text-[var(--text-primary)] font-mono",children:d.accuracy}),B.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"%ACC"})]}),B.jsxs("div",{className:"flex items-baseline gap-1",children:[B.jsx("span",{className:`text-[12px] font-black font-mono transition-all ${b>0?"text-[var(--accent-primary)]":"text-[var(--text-muted)]"}`,children:b}),B.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase",children:"COMBO"})]}),B.jsxs("div",{className:"flex items-baseline gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/5",children:[B.jsx("span",{className:"text-[12px] font-black text-[var(--accent-primary)] font-mono",children:m.toLocaleString()}),B.jsx("span",{className:"text-[6px] font-bold text-[var(--text-secondary)] opacity-60 uppercase ml-1",children:"SCORE"})]}),B.jsxs("div",{className:"flex items-center gap-1 opacity-40 animate-pulse",children:[B.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"}),B.jsx("span",{className:"text-[6px] font-black text-[var(--text-secondary)]",children:"LIVE"})]})]})]}),B.jsx("div",{className:"",children:B.jsx("button",{onClick:D,className:"h-11 w-11 flex items-center justify-center backdrop-blur-xl border rounded-2xl transition-all duration-500 bg-[var(--bg-glass)] border-[var(--border-strong)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] shadow-lg",title:"Control Center",children:B.jsx("i",{className:"fa fa-gear"})})})]}),B.jsx("div",{className:"flex justify-center w-full transition-all duration-500 transform hover:scale-[1.01]",children:r==="standard"?B.jsx(gA,{activeKey:t,targetKey:i,showZones:s,bands:F}):B.jsx(yA,{activeKey:t,targetKey:i,showZones:s,bands:F,highlightedKeys:L,isWaveActive:O})})]})}),MA=({isOpen:r,onClose:t,language:i,onLanguageChange:s,currentMusicStyle:l,onMusicStyleChange:c,TECHNO_STYLE:d,AMBIENT_STYLE:h,ACID_HOUSE_STYLE:m,getBtnClass:p,themes:_,currentTheme:g,onThemeChange:x})=>{const S=Ca.useMemo(()=>{const E={};return qh.flat().forEach(A=>{E[A.finger]||(E[A.finger]=[]),E[A.finger].includes(A.label)||E[A.finger].push(A.label)}),E},[]);return B.jsxs("aside",{className:`fixed top-0 left-0 h-full w-[400px] z-[2001] theme-glass backdrop-blur-3xl border-r border-[var(--border-glass)] p-8 transition-all duration-500 transform ${r?"translate-x-0":"-translate-x-full"} overflow-y-auto custom-scrollbar`,children:[B.jsxs("div",{className:"flex items-center justify-between mb-12",children:[B.jsxs("div",{className:"flex items-center gap-4",children:[B.jsx("div",{className:"w-14 h-10 flex items-center justify-center rounded-xl border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-black text-xl shadow-[0_0_15px_var(--accent-glow)]",children:"Typ_"}),B.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-primary)]",children:"System_Core"})]}),B.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)]",children:B.jsx("i",{className:"fa fa-close"})})]}),B.jsxs("div",{className:"space-y-4 mb-12",children:[B.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Idioma del Sistema"}),B.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[B.jsxs("button",{onClick:()=>s("es"),className:p(i==="es"),children:[B.jsx("span",{children:"Español"})," ",B.jsx("span",{children:"🇪🇸"})]}),B.jsxs("button",{onClick:()=>s("en"),className:p(i==="en"),children:[B.jsx("span",{children:"English"})," ",B.jsx("span",{children:"🇺🇸"})]})]})]}),B.jsxs("div",{className:"mt-12 space-y-6",children:[B.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6",children:"Mapeo de Dedos"}),B.jsx("div",{className:"grid grid-cols-2 gap-4",children:Object.entries(pA).filter(([E])=>E!=="thumb").map(([E,A])=>B.jsxs("div",{className:"p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group",children:[B.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[B.jsx("span",{className:"w-2 h-2 rounded-full shadow-[0_0_8px]",style:{backgroundColor:Vs[E],boxShadow:`0 0 10px ${Vs[E]}`}}),B.jsx("span",{className:"text-[10px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate",children:A})]}),B.jsx("div",{className:"flex flex-wrap gap-1",children:(S[E]||[]).sort().map(b=>B.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-mono rounded bg-[var(--bg-app)]/50 border border-[var(--border-glass)] text-[var(--text-secondary)]",children:b},b))})]},E))})]})]})},Ko=[{id:"fase_1",title:"Fase 1: Pares de Dedos (Homólogos)",description:"Coordinación estricta de dedos equivalentes.",levels:[{id:"nivel_1_pares_indices",title:"Pares: Índices (L2 + R2)",description:"Teclas: F, G, V, B, R, T + J, H, N, M, Y, U (Solo U)",fingers:["L2","R2"],keys:["F","G","V","B","R","T","J","H","N","M","Y","U","4","5","6","7"],difficulty:1,phrases:["un muy tu hutu run fun gun bun my ugh","tu hutu muy un tu hutu muy un tu hutu","muy tu run un fun gun bun y hutu","unum hum tum bum rum gum yum","frt vbg jyh nm u frt vbg jyh nm u"]},{id:"nivel_1_pares_medios",title:"Pares: Corazón (L3 + R3)",description:"Teclas: D, E, C + K, I (Solo E, I)",fingers:["L3","R3"],keys:["D","E","C","K","I","3","8",","],difficulty:1,phrases:["dice kiki decide ceder ese cedi de kiev","kiki dice cede ese dique y decide","decide ceder dice kiki ece de cedec","cedi mi dique y decidi ceder ese cedi","ded cdc kik iii ded cdc kik iii"]},{id:"nivel_1_pares_anulares",title:"Pares: Anulares (L4 + R4)",description:"Teclas: S, W, X + L, O (Solo O)",fingers:["L4","R4"],keys:["S","W","X","L","O","2","9","."],difficulty:1,phrases:["oso soso solo lo olo los sol","lolo olo los osos solos o lo olo","sol solo o los osos sos o lo olo","so los olo o lolo solo lo olo","sws xws lol olo sws xws lol olo"]},{id:"nivel_1_pares_meniques",title:"Pares: Meñiques (L5 + R5)",description:"Teclas: A, Q, Z + Ñ, P (Solo A)",fingers:["L5","R5"],keys:["A","Q","Z","Ñ","P","1","0","-","´","'"],difficulty:1,phrases:["papa aña zapa a aza paña a papa","aza a paña a papa aña a zapa","paña zapa a aza aña a papa","apa aña aza paña zapa papa","aqa aza ñpñ aqa aza ñpñ"]}]},{id:"fase_2",title:"Fase 2: Dedos Individuales (Mano Izquierda)",description:"Control independiente de cada dedo izquierdo.",levels:[{id:"nivel_2_indice_izq",title:"1. Índice Izquierdo",description:"F, R, T, G, V, B (Sin Vocales)",fingers:["L2"],keys:["F","R","T","G","V","B","4","5"],difficulty:2,phrases:["frt gvb frt gvb frt gvb frt gvb","fgf rtr vbv fgf rtr vbv fgf rtr","bgt rfv bgt rfv bgt rfv bgt rfv","vfr tgb vfr tgb vfr tgb vfr tgb","ff rr tt gg vv bb ff rr tt gg"]},{id:"nivel_2_medio_izq",title:"2. Corazón Izquierdo",description:"D, E, C (Vocal E)",fingers:["L3"],keys:["D","E","C","3"],difficulty:2,phrases:["cede de cede de cede de cede","dede cede dede cede dede cede","ece de cedec ece de cedec ece","ded cdc ded cdc ded cdc ded","cede ese cede ese cede ese"]},{id:"nivel_2_anular_izq",title:"3. Anular Izquierdo",description:"S, W, X (Sin Vocales)",fingers:["L4"],keys:["S","W","X","2"],difficulty:2,phrases:["sws xws sws xws sws xws sws","wxw sxs wxw sxs wxw sxs wxw","ss ww xx ss ww xx ss ww xx","swx xws swx xws swx xws swx","xsw wsx xsw wsx xsw wsx xsw"]},{id:"nivel_2_menique_izq",title:"4. Meñique Izquierdo",description:"A, Q, Z (Vocal A)",fingers:["L5"],keys:["A","Q","Z","1","<",">"],difficulty:2,phrases:["aza aqa aza aqa aza aqa aza","aqa zaza aqa zaza aqa zaza","qaz aza qaz aza qaz aza qaz","aa qq zz aa qq zz aa qq zz","zqa aqz zqa aqz zqa aqz zqa"]}]},{id:"fase_3",title:"Fase 3: Dedos Individuales (Mano Derecha)",description:"Control independiente de cada dedo derecho.",levels:[{id:"nivel_3_indice_der",title:"1. Índice Derecho",description:"J, H, N, M, U, Y (Vocales U, Y)",fingers:["R2"],keys:["J","H","N","M","U","Y","6","7"],difficulty:2,phrases:["un muy hum un muy hum un muy","muum nunn muum nunn muum nunn","juy hum juy hum juy hum juy","yny umu yny umu yny umu yny","muy un muy un muy un muy un"]},{id:"nivel_3_medio_der",title:"2. Corazón Derecho",description:"K, I (Vocal I)",fingers:["R3"],keys:["K","I","8",","],difficulty:2,phrases:["kik iii kik iii kik iii kik","ki ik ki ik ki ik ki ik ki","kiki ikik kiki ikik kiki ikik","iii kkk iii kkk iii kkk iii","ik ki ik ki ik ki ik ki ik"]},{id:"nivel_3_anular_der",title:"3. Anular Derecho",description:"L, O (Vocal O)",fingers:["R4"],keys:["L","O","9","."],difficulty:2,phrases:["lol olo lol olo lol olo lol","lo ol lo ol lo ol lo ol lo","lolo olol lolo olol lolo olol","ooo lll ooo lll ooo lll ooo","lloo ooll lloo ooll lloo ooll"]},{id:"nivel_3_menique_der",title:"4. Meñique Derecho",description:"Ñ, P (Sin Vocales)",fingers:["R5"],keys:["Ñ","P","0","-","´"],difficulty:2,phrases:["ñpñ pñp ñpñ pñp ñpñ pñp ñpñ","ññ pp ññ pp ññ pp ññ pp ññ","pñ ñp pñ ñp pñ ñp pñ ñp pñ","ñpñp pñpñ ñpñp pñpñ ñpñp pñpñ","ppññ ppññ ppññ ppññ ppññ ppññ"]}]},{id:"fase_4",title:"Fase 4: Combinaciones Reales",description:"Palabras completas usando ambas manos.",levels:[{id:"nivel_4_comunes",title:"Palabras Comunes",description:"Las 100 palabras más usadas.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:["A","B","C","D","E","F","G","H","I","J","L","M","N","Ñ","O","P","Q","R","S","T","U","V","Y","Z"],difficulty:3,phrases:["para que sirve la vida si no hacemos cosas buenas por los demas cada dia","como estan las cosas en tu casa despues de todo lo que paso ayer","todo el mundo sabe eso desde hace mucho tiempo y nadie dice nada al respecto","cuando vienes a casa para comer algo rico y hablar de nuestros planes"]}]},{id:"fase_6",title:"Fase 6: Texto Completo (Pangramas)",description:"Todas las letras.",levels:[{id:"nivel_6_texto_completo",title:"Pangramas",description:"Todas las letras.",fingers:["L2","L3","L4","L5","R2","R3","R4","R5"],keys:[],difficulty:3,phrases:["el veloz murciélago hindú comía feliz cardillo y kiwi","la cigüeña tocaba el saxofón detrás del palenque de paja","queda gazpacho, fibra, latex, jamon, kiwi y viñas"]}]},{id:"fase_7",title:"Fase 7: Acentos",description:"Práctica con tildes.",levels:[{id:"fase_7_acentos",title:"Acentos",description:"Vocales acentuadas.",fingers:["R5","L2","L3","L5","R2","R3","R4"],keys:["´","A","E","I","O","U"],difficulty:3,phrases:["á é í ó ú","mamá comió puré","allí durmió él","avión camión canción"]}]}],EA=({targetKeyData:r,onSelectLevel:t,onSelectPhrases:i})=>{const[s,l]=be.useState(null),[c,d]=be.useState(null),h=be.useMemo(()=>Ko.flatMap(m=>m.levels).find(m=>m.id===c),[c]);return be.useEffect(()=>{h&&(t&&t(h.keys),i&&i(h.phrases))},[h,t,i]),B.jsxs("div",{className:"flex flex-col h-full min-h-0 bg-[var(--bg-glass-strong)] rounded-2xl border border-[var(--border-glass)] overflow-hidden transition-all duration-500",children:[B.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar",children:B.jsx("div",{className:"space-y-6",children:B.jsx("div",{className:"space-y-6 animate-fade-in",children:B.jsxs("div",{className:"space-y-3",children:[B.jsx("h4",{className:"text-xs uppercase text-[var(--text-secondary)] font-bold tracking-wider mb-2",children:"Fases de Aprendizaje"}),Ko.map(m=>B.jsxs("div",{className:"rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass)] overflow-hidden",children:[B.jsxs("button",{onClick:()=>l(s===m.id?null:m.id),className:`w-full p-4 flex items-center justify-between transition-colors ${s===m.id?"bg-[var(--bg-glass-strong)]":"hover:bg-[var(--bg-glass-strong)]"}`,children:[B.jsxs("div",{className:"flex flex-col items-start text-left",children:[B.jsx("span",{className:`text-sm font-black uppercase ${s===m.id?"text-[var(--accent-primary)]":"text-[var(--text-primary)]"}`,children:m.title}),B.jsx("span",{className:"text-[10px] text-[var(--text-secondary)] opacity-70",children:m.description})]}),B.jsx("i",{className:`fa fa-chevron-down transition-transform text-[var(--text-secondary)] ${s===m.id?"rotate-180 text-[var(--accent-primary)]":""}`})]}),s===m.id&&B.jsx("div",{className:"p-2 space-y-1 bg-[var(--bg-app)]/30 border-t border-[var(--border-glass)]",children:m.levels.map(p=>B.jsxs("button",{onClick:()=>d(String(p.id)),className:`w-full p-3 rounded-lg text-left border flex items-center justify-between transition-all ${c===p.id?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]":"border-transparent hover:bg-[var(--bg-glass)]"}`,children:[B.jsxs("div",{className:"flex flex-col",children:[B.jsx("span",{className:`text-[11px] font-black uppercase tracking-wider ${c===p.id?"text-[var(--accent-primary)]":"text-[var(--text-primary)]"}`,children:p.title}),B.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[B.jsx("div",{className:"flex gap-0.5",children:[...Array(3)].map((_,g)=>B.jsx("i",{className:`fa ${g<p.difficulty?"fa-star text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]":"fa-star-o text-white/10"} text-[8px]`},g))}),B.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-[var(--text-secondary)] opacity-40",children:p.difficulty===1?"Básico":p.difficulty===2?"Medio":"Experto"})]}),c===p.id&&B.jsxs("span",{className:"text-[9px] text-[var(--text-secondary)] mt-2 font-mono leading-relaxed opacity-60",children:['"',p.phrases[0].substring(0,30),'..."']})]}),c===p.id&&B.jsx("i",{className:"fa fa-chevron-right text-[var(--accent-primary)] text-[10px] animate-pulse"})]},p.id))})]},m.id))]})})})}),B.jsx("div",{className:"p-4 border-t border-[var(--border-glass)] bg-[var(--bg-glass)] text-[10px] text-[var(--text-secondary)] text-center",children:"Selecciona una fase y nivel para practicar."})]})},TA=({isOpen:r,onClose:t,targetKeyData:i,onSelectLevel:s,onSelectPhrases:l,focus:c,onFocusChange:d,getBtnClass:h,currentMusicStyle:m,onMusicStyleChange:p,TECHNO_STYLE:_,AMBIENT_STYLE:g,ACID_HOUSE_STYLE:x,isInfiniteMode:S,onToggleZenMode:E,score:A})=>B.jsxs("aside",{className:`fixed top-0 right-0 h-full w-[450px] z-[2001] theme-glass backdrop-blur-3xl border-l border-[var(--border-glass)] p-8 transition-all duration-500 transform flex flex-col ${r?"translate-x-0":"translate-x-full"}`,children:[B.jsxs("div",{className:"flex flex-col gap-8 mb-8 shrink-0",children:[B.jsxs("div",{className:"flex items-center justify-between mb-4",children:[B.jsxs("div",{className:"flex flex-col",children:[B.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-1",children:"Estado de Sesión"}),B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"text-[24px] font-black text-[var(--text-primary)] tracking-tighter",children:A.toLocaleString()}),B.jsx("span",{className:"text-[10px] uppercase font-bold text-[var(--text-secondary)] mt-2 italic opacity-50",children:"Pts"})]})]}),B.jsx("button",{onClick:t,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] transition-all",children:B.jsx("i",{className:"fa fa-close"})})]}),B.jsxs("div",{children:[B.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4",children:"Modo Especial"}),B.jsxs("button",{onClick:E,className:`w-full p-4 rounded-2xl flex items-center justify-between border transition-all duration-500 group relative overflow-hidden ${S?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] shadow-[0_0_20px_rgba(var(--accent-glow-rgb),0.3)]":"bg-[var(--bg-glass)] border-[var(--border-glass)] hover:border-white/20"}`,children:[B.jsxs("div",{className:"flex items-center gap-4 relative z-10",children:[B.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${S?"bg-[var(--accent-primary)] text-black":"bg-white/5 text-[var(--text-secondary)] group-hover:bg-white/10"}`,children:B.jsx("i",{className:`fa ${S?"fa-bolt":"fa-leaf"} text-lg`})}),B.jsxs("div",{className:"flex flex-col items-start",children:[B.jsx("span",{className:`text-[12px] font-black uppercase tracking-wider ${S?"text-[var(--text-primary)]":"text-[var(--text-secondary)]"}`,children:"Modo Infinito"}),B.jsx("span",{className:"text-[9px] text-[var(--text-secondary)] opacity-60",children:"Palíndromos y Score sin fin"})]})]}),B.jsx("div",{className:`w-2 h-2 rounded-full transition-all ${S?"bg-[var(--accent-primary)] animate-pulse":"bg-white/10"}`})]})]}),B.jsxs("div",{children:[B.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-primary)] mb-4",children:"Estilos de Música"}),B.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[B.jsxs("button",{onClick:()=>p(_),className:h(m===_),children:[B.jsx("span",{children:_.name})," ",B.jsx("i",{className:"fa fa-bolt"})]}),B.jsxs("button",{onClick:()=>p(g),className:h(m===g),children:[B.jsx("span",{children:g.name})," ",B.jsx("i",{className:"fa fa-leaf"})]}),B.jsxs("button",{onClick:()=>p(x),className:h(m===x),children:[B.jsx("span",{children:x.name})," ",B.jsx("i",{className:"fa fa-flask"})]})]})]})]}),B.jsx("div",{className:"flex-1 min-h-0",children:B.jsx(EA,{targetKeyData:i,onSelectLevel:s,onSelectPhrases:l})})]});class AA{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterAnalyser=this.ctx.createAnalyser(),this.masterAnalyser.fftSize=512,this.masterAnalyser.smoothingTimeConstant=.88,this.masterGain.connect(this.masterAnalyser),this.masterAnalyser.connect(this.ctx.destination),this.kickGain=this.ctx.createGain(),this.kickAnalyser=this.ctx.createAnalyser(),this.kickAnalyser.fftSize=256,this.kickGain.connect(this.kickAnalyser),this.kickAnalyser.connect(this.masterGain),this.bassGain=this.ctx.createGain(),this.bassAnalyser=this.ctx.createAnalyser(),this.bassAnalyser.fftSize=512,this.bassGain.connect(this.bassAnalyser),this.bassAnalyser.connect(this.masterGain),this.hihatGain=this.ctx.createGain(),this.hihatAnalyser=this.ctx.createAnalyser(),this.hihatAnalyser.fftSize=256,this.hihatGain.connect(this.hihatAnalyser),this.hihatAnalyser.connect(this.masterGain),this.snareGain=this.ctx.createGain(),this.snareAnalyser=this.ctx.createAnalyser(),this.snareAnalyser.fftSize=256,this.snareGain.connect(this.snareAnalyser),this.snareAnalyser.connect(this.masterGain),this.leadGain=this.ctx.createGain(),this.leadAnalyser=this.ctx.createAnalyser(),this.leadAnalyser.fftSize=256,this.leadGain.connect(this.leadAnalyser),this.leadAnalyser.connect(this.masterGain),this.ghostGain=this.ctx.createGain(),this.ghostAnalyser=this.ctx.createAnalyser(),this.ghostAnalyser.fftSize=256,this.ghostGain.connect(this.ghostAnalyser),this.ghostAnalyser.connect(this.masterGain)}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}playKick(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.3),t.connect(i),i.connect(this.kickGain),t.start(),t.stop(this.ctx.currentTime+.3)}playHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=8e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.05,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.hihatGain),t.start()}playSnare(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.1,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1500,c.Q.value=1;const d=this.ctx.createGain();d.gain.setValueAtTime(.1,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.connect(c),c.connect(d),d.connect(this.snareGain),t.start()}playGhostHiHat(){this.resume();const t=this.ctx.createBufferSource(),i=this.ctx.sampleRate*.05,s=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=s.getChannelData(0);for(let h=0;h<i;h++)l[h]=Math.random()*2-1;t.buffer=s;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.value=12e3;const d=this.ctx.createGain();d.gain.setValueAtTime(.02,this.ctx.currentTime),d.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(c),c.connect(d),d.connect(this.ghostGain),t.start()}playLead(t,i){this.resume();const s=this.ctx.currentTime,l=[this.ctx.createOscillator(),this.ctx.createOscillator(),this.ctx.createOscillator()],c=this.ctx.createGain(),d=this.ctx.createBiquadFilter();l[0].type="sawtooth",l[1].type="sawtooth",l[2].type="sawtooth",l[0].frequency.setValueAtTime(t,s),l[1].frequency.setValueAtTime(t*1.005,s),l[2].frequency.setValueAtTime(t*.995,s),d.type="lowpass";const h=t*3+i*50;d.frequency.setValueAtTime(h,s),d.frequency.exponentialRampToValueAtTime(t*.5,s+.35),d.Q.value=12,c.gain.setValueAtTime(.06,s),c.gain.exponentialRampToValueAtTime(.001,s+.4),l.forEach(m=>{m.connect(d),m.start(s),m.stop(s+.4)}),d.connect(c),c.connect(this.leadGain)}playBass(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter();l.type="sawtooth",c.type="sine",l.frequency.setValueAtTime(t,s),c.frequency.setValueAtTime(t*.5,s),h.type="lowpass";const m=200+Math.min(i,30)*150;h.frequency.setValueAtTime(m,s),h.frequency.exponentialRampToValueAtTime(100,s+.15),h.Q.value=20,d.gain.setValueAtTime(.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.15),l.connect(h),c.connect(h),h.connect(d),d.connect(this.bassGain),l.start(s),c.start(s),l.stop(s+.15),c.stop(s+.15)}playSuccess(t,i){this.resume();const s=this.ctx.currentTime,l=this.ctx.createOscillator(),c=this.ctx.createOscillator(),d=this.ctx.createGain(),h=this.ctx.createBiquadFilter(),p=(i?440:880)+t%8*110;l.type="sawtooth",c.type="square",l.frequency.setValueAtTime(p,s),c.frequency.setValueAtTime(p*2.01,s),h.type="highpass",h.frequency.setValueAtTime(2e3,s),h.frequency.exponentialRampToValueAtTime(8e3,s+.1),d.gain.setValueAtTime(i?.03:.06,s),d.gain.exponentialRampToValueAtTime(.001,s+.2),l.connect(h),c.connect(h),h.connect(d),d.connect(this.masterGain),l.start(s),c.start(s),l.stop(s+.2),c.stop(s+.2)}playError(){this.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(100,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(30,this.ctx.currentTime+.2),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(i),i.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.2)}getAnalysers(){return{master:this.masterAnalyser,kick:this.kickAnalyser,bass:this.bassAnalyser,hihat:this.hihatAnalyser,snare:this.snareAnalyser,lead:this.leadAnalyser,ghost:this.ghostAnalyser}}getEnergy(){if(!this.masterAnalyser)return 0;const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);let i=0;for(let s=0;s<t.length;s++)i+=t[s];return i/t.length/255}getFrequencyBands(){if(!this.masterAnalyser)return{bass:0,mid:0,high:0};const t=new Uint8Array(this.masterAnalyser.frequencyBinCount);this.masterAnalyser.getByteFrequencyData(t);const i=t.length,s=Math.floor(i*.1),l=Math.floor(i*.5);let c=0,d=0,h=0;for(let m=0;m<s;m++)c+=t[m];for(let m=s;m<l;m++)d+=t[m];for(let m=l;m<i;m++)h+=t[m];return{bass:c/(s||1)/255,mid:d/(l-s||1)/255,high:h/(i-l||1)/255}}}class CA{constructor(t,i){this.intervalId=null,this.step=0,this.comboMultiplier=1,this.audioSystem=t,this.currentStyle=i}setStyle(t){!!this.intervalId&&this.stop(),this.currentStyle=t,this.step=0}setMultiplier(t){this.comboMultiplier=t}start(t){if(this.intervalId)return;const s=60/this.currentStyle.bpm/4;this.intervalId=window.setInterval(()=>{const l=t(),c=this.step%16;if(l>0){const d=l*this.comboMultiplier;this.currentStyle.layers.forEach(h=>{d>=h.minCombo&&(h.maxCombo===void 0||d<=h.maxCombo)&&h.pattern(c)&&h.play(this.audioSystem,c,l)})}this.step++},s*1e3)}stop(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}const Fd={name:"Berlín Techno",bpm:128,layers:[{id:"kick_basic",type:"percussion",minCombo:1,maxCombo:100,color:"var(--text-primary)",opacity:.6,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"hihat_basic",type:"percussion",minCombo:5,maxCombo:80,color:"#00FFFF",opacity:.8,yOffset:-5,pattern:r=>r%4===2,play:r=>r.playHiHat()},{id:"bass_acid_low",type:"bass",minCombo:12,maxCombo:120,color:"var(--accent-primary)",opacity:.4,yOffset:5,pattern:r=>r%2===0,play:(r,t,i)=>{const s=[55,65,73,82];r.playBass(s[t%s.length],i)}},{id:"snare_break",type:"percussion",minCombo:25,maxCombo:150,color:"#FF00FF",opacity:.7,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"ghost_hats",type:"percussion",minCombo:50,maxCombo:180,color:"#AAAAAA",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"acid_arp",type:"lead",minCombo:80,color:"#CCFF00",opacity:.5,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[110,130,165,196];r.playLead(s[t%s.length],i)}},{id:"fm_pulsar",type:"fx",minCombo:120,color:"#FF5500",opacity:.6,yOffset:0,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(440,i*2)},{id:"ultra_lead",type:"lead",minCombo:160,color:"#FFFFFF",opacity:.9,yOffset:-15,pattern:r=>r%3===0,play:(r,t,i)=>{const s=[220,330,440,660];r.playLead(s[Math.floor(Math.random()*s.length)],i*3)}},{id:"heavenly_lead",type:"lead",minCombo:200,color:"#00FFFF",opacity:.8,yOffset:-20,pattern:r=>r%8===4,play:(r,t,i)=>r.playLead(880,i)}]},O_={name:"Cyber Ambient",bpm:90,layers:[{id:"pad",type:"lead",minCombo:1,color:"var(--accent-primary)",opacity:.3,yOffset:10,pattern:r=>r%16===0,play:(r,t,i)=>r.playBass(110,i)},{id:"glitch",type:"fx",minCombo:10,color:"#00FFFF",opacity:.6,pattern:r=>Math.random()>.8,play:r=>r.playHiHat()},{id:"shimmer",type:"lead",minCombo:40,color:"#FFFFFF",opacity:.4,yOffset:-15,pattern:r=>r%16===8,play:(r,t,i)=>r.playLead(880,i)},{id:"deep_pulse",type:"bass",minCombo:80,color:"#5500FF",opacity:.5,yOffset:15,pattern:r=>r%32===0,play:(r,t,i)=>r.playBass(40,i*2)},{id:"celestial",type:"lead",minCombo:150,color:"#00FF88",opacity:.7,pattern:r=>r%16===12,play:(r,t,i)=>r.playLead(1320,i)}]},P_={name:"Acid House 303",bpm:124,layers:[{id:"kick",type:"percussion",minCombo:1,color:"var(--text-primary)",opacity:.5,pattern:r=>r%4===0,play:r=>r.playKick()},{id:"snare",type:"percussion",minCombo:5,color:"#FF00FF",opacity:.6,pattern:r=>r===4||r===12,play:r=>r.playSnare()},{id:"acid",type:"bass",minCombo:15,maxCombo:120,color:"#CCFF00",opacity:.8,yOffset:-10,pattern:r=>!0,play:(r,t,i)=>{const s=[33,44,55,66];r.playBass(s[t%s.length],i*2)}},{id:"ghost",type:"percussion",minCombo:40,color:"#CCFF00",opacity:.4,pattern:r=>r%2!==0,play:r=>r.playGhostHiHat()},{id:"high_acid",type:"lead",minCombo:80,color:"#00FF00",opacity:.6,yOffset:-20,pattern:r=>r%8===0,play:(r,t,i)=>r.playLead(440,i)},{id:"squelch_peak",type:"fx",minCombo:140,color:"#FF00FF",opacity:.8,pattern:r=>r%4===3,play:r=>r.playSnare()},{id:"cosmic_resonance",type:"lead",minCombo:200,color:"#FFFFFF",opacity:.9,pattern:r=>r%16===0,play:(r,t,i)=>r.playLead(1320,i)}]},F_={es:{basico:["El veloz murciélago hindú comía feliz cardillo y kiwi.","La constancia es la clave del éxito en cualquier disciplina.","Mañana será un gran día para aprender algo nuevo.","Caminar por la playa al atardecer es muy relajante.","La mecanografía veloz requiere práctica diaria y paciencia."],programacion:["const pipeline = (data) => data.map(x => x * 2);","function initApp() { return new Promise(resolve => {}); }","export default class MyComponent extends React.Component {","if (process.env.NODE_ENV === 'production') { console.log('Live'); }","const { name, version } = JSON.parse(fs.readFileSync('package.json'));"],teclas_raras:["¿Viste cómo el pingüino corría hacia el iglú? ¡Increíble!","Los caracteres [ corchetes ] y { llaves } son vitales en JSON.","El símbolo ~ (tilde de la ñ) y ^ (circunflejo) son poco usados.","La ruta C:\\Users\\Admin\\Documents/test.txt usa barras inversas.","¿Sabías que 2^10 es igual a 1024? ¡Es potencia binaria!"],acentuacion:["El capitán pidió un café exprés y un té tras el festín en el jardín.","Álvaro compró un jarrón de mármol azul y un sillón ortopédico.","Sé que él no te dio el libro, pero tú aún no sabes qué pasó allí.","El murciélago sobrevoló el área de forma frenética y enigmática.","Raúl leía la biografía de un héroe que vivía en un país lejano.","¿Cuándo vendrás? Dime si el examen de matemáticas fue difícil o fácil.","El árbol de caoba creció rápido gracias al fértil césped del jardín.","Sólo tú sabes qué es lo que más te conviene para el próximo decenio.","Ojalá el médico apruebe el análisis del líquido cefalorraquídeo hoy.","Escribía con ímpetu mientras el búho observaba desde el ático vacío."]},en:{basico:["The quick brown fox jumps over the lazy dog.","Consistency is more important than intensity.","Every day is a second chance to improve your skills.","Reading books opens your mind to new perspectives.","Success is the sum of small efforts repeated daily."],programacion:["const fetchData = async (url) => await fetch(url).json();","git commit -m 'feat: add localization to phrase system'","while (true) { if (battery < 20) break; }","import { useState, useEffect } from 'react';","array.reduce((acc, curr) => acc + curr, 0);"],teclas_raras:["Wait! Did you see the [bracketed] text in the {curly} braces?","The pipe | symbol is used for redirects in Linux terminals.","Is it true that 5 > 3 and 2 < 4? Let's check logic!","Type 'cd ../../' to go back two directories in the shell.","The #hashtag is used for comments in many config files."],acentuacion:["The résumé of the employé was impeccable and very detailed.","She visited the café to drink a frappé during her vacation.","The façade of the building had a beautiful décor in the façade.","Please cooperate with the naïve protégé during the soirée.","It is a cliché to say that the jalapeño is very spicy."]},fr:{basico:["Portez ce vieux vieux vieux vieux vieux vieux vieux vieux vieux.","La vie est belle quand on prend le temps de l'apprécier.","Apprendre à taper vite demande de la rigueur et du temps.","Le succès est le fruit d'un travail acharné et constant.","Chaque jour est une nouvelle opportunité de grandir."],programacion:["let reponse = await prompt('Voulez-vous continuer ?');","const config = { langue: 'fr', theme: 'sombre' };","console.error(`Erreur fatale : ${error.message}`);","for (let i = 0; i < liste.length; i++) { doSomething(); }","document.querySelector('.app').addEventListener('click', e => {});"],teclas_raras:["L'élève a-t-il reçu ses 100€ pour son déjeuner ?","Regardez l'icône { } et [ ] dans l'éditeur de code.","Le carácter ~ est rare, tout comme le symbole | (pipe).","Utilisez-vous souvent el guion bajo _ o el guion medio - ?","Attention aux caractères spéciaux comme ^ y ¨ !"],acentuacion:["L'événement théâtral a été un succès grâce à l'héroïne.","Où est le garçon qui a mangé le gâteau à la crème fraîche ?","C'est l'été, le maïs mûrit sous le château de la forêt.","L'étudiant a étudié l'algèbre et la géométrie à l'école.","Il paraît que le poète déteste les huîtres et le thé glacé."]}},z_=(r,t,i=5)=>{var m;let s="basico";const l=t.toLowerCase();(l.includes("raras")||l.includes("especial"))&&(s="teclas_raras"),(l.includes("progra")||l.includes("código"))&&(s="programacion"),(l.includes("acent")||l.includes("ácent"))&&(s="acentuacion");const d=[...((m=F_[r])==null?void 0:m[s])||F_.es.basico].sort(()=>Math.random()-.5),h=[];for(;h.length<i;)h.push(...d);return h.slice(0,i)},ks=[{id:"alpine",name:"Alpino",r:162,g:173,b:145,scheme:"dark"},{id:"ocean",name:"Océano",r:90,g:150,b:220,scheme:"dark"},{id:"crimson",name:"Carmesí",r:220,g:80,b:80,scheme:"dark"},{id:"amethyst",name:"Amatista",r:160,g:100,b:200,scheme:"dark"},{id:"amber",name:"Ámbar",r:240,g:180,b:60,scheme:"dark"},{id:"frost",name:"Frosty (Light)",r:100,g:149,b:237,scheme:"light"},{id:"emerald",name:"Esmeralda",r:16,g:185,b:129,scheme:"dark"}];class RA{constructor(){this.currentTheme=ks[0]}getCurrentTheme(){return this.currentTheme}setTheme(t){const i=ks.find(s=>s.id===t);i&&(this.currentTheme=i,this.applyThemeToDocument(i))}applyThemeToDocument(t,i={}){const s=document.documentElement;s.style.setProperty("--theme-r",t.r.toString()),s.style.setProperty("--theme-g",t.g.toString()),s.style.setProperty("--theme-b",t.b.toString()),s.style.setProperty("--accent-primary",`rgb(${t.r}, ${t.g}, ${t.b})`),s.style.setProperty("--accent-glow",`rgba(${t.r}, ${t.g}, ${t.b}, 0.4)`);const l=i.forceScheme||t.scheme||"dark";if(s.setAttribute("data-color-scheme",l),l==="light")s.style.setProperty("--bg-app","#f0f2f5"),s.style.setProperty("--text-primary","#1a1a1b"),s.style.setProperty("--text-secondary","#4b5563"),s.style.setProperty("--bg-glass","rgba(255, 255, 255, 0.7)"),s.style.setProperty("--bg-glass-strong","rgba(255, 255, 255, 0.85)"),s.style.setProperty("--border-glass","rgba(0, 0, 0, 0.1)"),s.style.setProperty("--bg-tint","transparent");else{if(i.isPureBlack)s.style.setProperty("--bg-app","#020202"),s.style.setProperty("--bg-tint","transparent");else{const c=Math.floor(t.r*.12),d=Math.floor(t.g*.12),h=Math.floor(t.b*.12);s.style.setProperty("--bg-app",`rgb(${c}, ${d}, ${h})`);const m=i.forceScheme?.15:t.bgAlpha??.35;s.style.setProperty("--bg-tint",`rgba(${t.r}, ${t.g}, ${t.b}, ${m})`)}s.style.setProperty("--text-primary","#ffffff"),s.style.setProperty("--text-secondary","#9ca3af"),s.style.setProperty("--bg-glass","rgba(0, 0, 0, 0.4)"),s.style.setProperty("--bg-glass-strong","rgba(0, 0, 0, 0.7)"),s.style.setProperty("--border-glass","rgba(255, 255, 255, 0.1)")}}getAllThemes(){return ks}}const Dh=["Anita lava la tina","La ruta nos aportó otro paso natural","Dábale arroz a la zorra el abad","Somos o no somos","Isaac no ronca así","Sé verlas al revés","Amo la paloma","Son robos o sobornos","Atar a la rata","Ojo rojo","Acá solo laca","Allí si María avisa y así va a ir a mi silla","Adán no cede con nada","Arde ya la yedra","A ti no, bonita","Luz azul","Yo hago yoga hoy","Oirás orar a Rosario","Oso come mocoso","No deseo yo ese don","Adivina ya te opone, el que oponetaya envidia","Clean code is like a joke: if you have to explain it, it's bad.","Software is a gas; it expands to fill its container.","It's not a bug, it's a feature.","Talk is cheap. Show me the code.","Code is like humor. When you have to explain it, it’s bad.","First, solve the problem. Then, write the code.","Experience is the name everyone gives to their mistakes.","In order to be irreplaceable, one must always be different.","The best way to predict the future is to invent it.","Simplicity is the soul of efficiency.","Make it work, make it right, make it fast.","Stay hungry, stay foolish.","Deleted code is debugged code.","Programming is the art of telling another human what he wants the computer to do.","Programs must be written for people to read, and only incidentally for machines to execute.","Optimization is the root of all evil.","Quality is not an act, it is a habit."];class wA{processInput(t,i,s,l,c,d){const h=t.length-1;if(h<0)return{stats:{wpm:0,accuracy:100,mistakes:0,totalChars:0},combo:0,isCorrect:!0,isPhraseComplete:!1};const m=t[h],p=i[h];let _=m===p,g=l,x=c;return!_&&!d?(g++,x=0):_?(m===" "||h===i.length-1)&&x++:d&&(_=!0),{stats:this.calculateStats(s||Date.now(),t,i,g),combo:x,isCorrect:_,isPhraseComplete:t===i}}calculateStats(t,i,s,l){const c=(Date.now()-t)/6e4,d=i.length;let h=0;for(let _=0;_<i.length;_++)i[_]===s[_]&&h++;const m=Math.round(h/5/(c||.001))||0,p=d>0?Math.round((d-l)/d*100):100;return{wpm:m,accuracy:p,mistakes:l,totalChars:d}}calculateScore(t,i){return Math.floor(t*(i/100)*10)}isCharCorrect(t,i,s){return t===s[i]}}class DA{async getPhrases(t,i){return[]}getZenPhrases(){return Dh}}class NA{constructor(){this.SCORE_KEY="typ_total_score"}getScore(){return Number(localStorage.getItem(this.SCORE_KEY)||0)}saveScore(t){localStorage.setItem(this.SCORE_KEY,t.toString())}}const UA=(r,t,i,s)=>{const[l,c]=be.useState([]),[d,h]=be.useState(0),[m,p]=be.useState(""),[_,g]=be.useState({wpm:0,accuracy:100,mistakes:0,totalChars:0}),[x,S]=be.useState(null),[E,A]=be.useState(!1),[b,y]=be.useState(0),[D,N]=be.useState(()=>t.getScore()),[U,L]=be.useState(!1),O=l[d]||"",F=be.useCallback(()=>{p(""),S(null),A(!1),y(0),g({wpm:0,accuracy:100,mistakes:0,totalChars:0})},[]),V=be.useCallback(T=>{var ce,he,I;if(E)return;let w=x;!w&&T.length>0&&(w=Date.now(),S(w));const X=m.length;if(T.length<X){p(T);return}const K=i.processInput(T,O,w,_.mistakes,b,U);if(p(T),g(K.stats),y(K.combo),K.isCorrect){const k=T[T.length-1];(ce=s==null?void 0:s.onCorrectChar)==null||ce.call(s,k,K.combo)}else(he=s==null?void 0:s.onErrorChar)==null||he.call(s,T[T.length-1]);if(K.isPhraseComplete)if((I=s==null?void 0:s.onPhraseComplete)==null||I.call(s,O),U){const k=i.calculateScore(K.stats.wpm,K.stats.accuracy),te=D+k;N(te),t.saveScore(te);const Me=r.getZenPhrases(),ye=Me[Math.floor(Math.random()*Me.length)];setTimeout(()=>{c([ye]),h(0),p("")},50)}else d<l.length-1?setTimeout(()=>{h(k=>k+1),p("")},50):A(!0)},[E,x,m.length,O,_.mistakes,b,U,i,s,d,l.length,D,t,r]);return be.useEffect(()=>{if(x&&!E&&m.length>0){const T=setInterval(()=>{const w=i.calculateStats(x,m,O,_.mistakes);g(X=>({...X,wpm:w.wpm,accuracy:w.accuracy}))},1e3);return()=>clearInterval(T)}},[x,E,m,O,_.mistakes,i]),{phrases:l,setPhrases:c,phraseIndex:d,setPhraseIndex:h,currentPhrase:O,typedText:m,setTypedText:p,processNewValue:V,stats:_,setStats:g,combo:b,setCombo:y,score:D,setScore:N,isFinished:E,setIsFinished:A,startTime:x,setStartTime:S,isInfiniteMode:U,setIsInfiniteMode:L,restart:F}},bv=Ca.memo(({inputRef:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c})=>B.jsx("textarea",{ref:r,onInput:t,onCompositionStart:i,onCompositionEnd:s,onKeyDown:l,onBlur:c,className:"absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[-1] caret-transparent cursor-none resize-none m-0 p-0 border-0 outline-none",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",tabIndex:0}));bv.displayName="HiddenInput";const I_=new RA,LA=()=>{const[r,t]=be.useState(ks[0]),[i,s]=be.useState(!1),[l,c]=be.useState(null),[d,h]=be.useState("es"),[m,p]=be.useState("Básico"),_=be.useMemo(()=>new DA,[]),g=be.useMemo(()=>new NA,[]),x=be.useMemo(()=>new wA,[]),{phrases:S,setPhrases:E,phraseIndex:A,setPhraseIndex:b,currentPhrase:y,typedText:D,setTypedText:N,processNewValue:U,stats:L,combo:O,setCombo:F,score:V,isFinished:T,setIsFinished:w,startTime:X,setStartTime:J,isInfiniteMode:K,setIsInfiniteMode:ce,restart:he}=UA(_,g,x,{onCorrectChar:(de,pe)=>{var Fe,tt;ft&&(de===" "?(Fe=Vn.current)==null||Fe.playSuccess(pe,bt):K&&((tt=Vn.current)==null||tt.playSuccess(pe,bt)))},onErrorChar:()=>{var de;ft&&((de=Vn.current)==null||de.playError()),Me(!0)},onPhraseComplete:()=>{Me(!1),Jt.current&&(Jt.current.value="")}}),[I,k]=be.useState(""),[te,Me]=be.useState(!1),[ye,z]=be.useState(!0),[ne,_e]=be.useState(1),[Ce,Ie]=be.useState(!1),[$,ue]=be.useState(!1),[Ue,We]=be.useState("mac");be.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",ne.toString()),I_.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,ne,i,l]);const ke=()=>{if(K)ce(!1);else{const de=Math.floor(Math.random()*Dh.length);E([Dh[de]]),b(0),w(!1),Ne(!1),ce(!0)}},[ut,ht]=be.useState("config"),[st,pt]=be.useState(!1),[mt,at]=be.useState(!1),[wt,G]=be.useState(Fd),[bt,gt]=be.useState(!1),[ft,Ye]=be.useState(!0),[P,M]=be.useState(1),[W,ge]=be.useState(!1),[Ee,fe]=be.useState({bass:0,mid:0,high:0}),[Qe,Ne]=be.useState(!1),[Xe,it]=be.useState(!1),Te=be.useRef(null),[Re,Be]=be.useState(!1),[He,Le]=be.useState({x:0,y:0,z:20}),[dt,j]=be.useState({x:0,y:0,z:0}),[Pe,we]=be.useState(180),[Ge,Ae]=be.useState({...yv,type:"circle"}),[xe,De]=be.useState(!1),[rt,Lt]=be.useState([]),[Dt,bn]=be.useState(!1),Jt=be.useRef(null),Na=be.useRef(null),Ua=be.useRef(!1),Pi=be.useRef(""),Vn=be.useRef(null),zn=be.useRef(null),Qi=be.useRef(O),[kn,Xn]=be.useState(!1),[tn,nn]=be.useState(30),[xn,hs]=be.useState(30),[Mi,Yr]=be.useState(!1),[ps,Ji]=be.useState(""),[La,Ei]=be.useState(0),qn=be.useMemo(()=>{var tt,_t,It;const de=((tt=Ko.find(Tt=>Tt.id==="fase_1"))==null?void 0:tt.levels)||[],pe=((_t=Ko.find(Tt=>Tt.id==="fase_2"))==null?void 0:_t.levels)||[],Fe=((It=Ko.find(Tt=>Tt.id==="fase_3"))==null?void 0:It.levels)||[];return[...de,...pe,...Fe]},[]);be.useEffect(()=>{if(Xe){Ne(!0);const de=qn;if(de.length===0)return;const pe=de[La%de.length];pe&&(Lt(pe.keys),E(pe.phrases),Ji(pe.title.replace(/^Pares: |^\d+\.\s+/g,"")),N(""),Pi.current="",b(0),F(Fe=>{const tt=wt.layers.filter(_t=>_t.minCombo<=Fe).sort((_t,It)=>It.minCombo-_t.minCombo);if(tt.length>0){const _t=tt[0].minCombo-1;return Math.max(0,_t)}return 0}),Me(!1),Jt.current&&(Jt.current.value=""),setTimeout(()=>{var Fe;return(Fe=Jt.current)==null?void 0:Fe.focus()},10))}},[Xe,La,wt]),be.useEffect(()=>{if(!Xe){Te.current&&(clearInterval(Te.current),Te.current=null),nn(xn);return}const de=qn;nn(xn);const pe=setInterval(()=>{nn(Fe=>Fe<=1?(Ei(tt=>{if(Mi){let _t=Math.floor(Math.random()*de.length);return de.length>1&&_t===tt&&(_t=(_t+1)%de.length),_t}return(tt+1)%de.length}),xn):Fe-1)},1e3);return Te.current=pe,()=>clearInterval(pe)},[Xe,xn,Mi,qn]);const $i=be.useCallback(()=>{if(!Xe)return;const de=qn;Ei(pe=>Mi?Math.floor(Math.random()*de.length):(pe+1)%de.length),nn(xn)},[Xe,Mi,xn,qn]),Fi=be.useMemo(()=>D.normalize("NFC"),[D]),C=be.useMemo(()=>{const de=y.split(" "),pe=D.split(" "),Fe=Math.min(pe.length-1,de.length-1),tt=de[Fe]||"",_t=pe[pe.length-1]||"";return{word:tt,userTypedSlice:_t}},[y,D]),Y=be.useMemo(()=>T||ye?"":D.length<y.length?y[D.length]:"",[y,D,T,ye]),oe=be.useMemo(()=>Y&&en[Y.toLowerCase()]||null,[Y]);be.useEffect(()=>{Qi.current=O},[O]),be.useEffect(()=>{const de=new AA;return Vn.current=de,zn.current=new CA(de,wt),Xn(!0),()=>{var pe;(pe=zn.current)==null||pe.stop()}},[]),be.useEffect(()=>{var de,pe;mt&&kn?(de=zn.current)==null||de.start(()=>Qi.current):(pe=zn.current)==null||pe.stop()},[mt,kn]),be.useEffect(()=>{zn.current&&(zn.current.setStyle(wt),zn.current.setMultiplier(P),mt&&zn.current.start(()=>Qi.current))},[wt,mt,P]),be.useEffect(()=>{let de;const pe=()=>{Vn.current?fe(Vn.current.getFrequencyBands()):fe({bass:0,mid:0,high:0}),de=requestAnimationFrame(pe)};return de=requestAnimationFrame(pe),()=>cancelAnimationFrame(de)},[]),be.useEffect(()=>{document.documentElement.style.setProperty("--ui-scale",ne.toString()),I_.applyThemeToDocument(r,{isPureBlack:i,forceScheme:l||void 0})},[r,ne,i,l]),be.useEffect(()=>{const de=()=>{!Ce&&!$&&!ye&&!T&&document.activeElement!==Na.current&&setTimeout(()=>{var pe;return(pe=Jt.current)==null?void 0:pe.focus()},10)};return window.addEventListener("click",de),window.addEventListener("focus",de),()=>{window.removeEventListener("click",de),window.removeEventListener("focus",de)}},[Ce,$,ye,T]),be.useEffect(()=>{(async()=>{z(!0),Ne(!1);const pe=z_(d,m,10);E(pe.map(Fe=>Fe.normalize("NFC"))),N(""),Pi.current="",b(0),F(0),Me(!1),Jt.current&&(Jt.current.value=""),z(!1)})()},[d,m]);const ae=be.useRef(!1);be.useEffect(()=>{let de;return()=>clearInterval(de)},[Xe]),be.useEffect(()=>{K&&!ye&&!ae.current&&A>=S.length-5&&!Qe&&(async()=>{ae.current=!0;try{const pe=z_(d,m,10);if(pe&&pe.length>0){const Fe=pe.map(tt=>tt.normalize("NFC"));E(tt=>[...tt,...Fe])}}catch(pe){console.error("Failed to fetch more Zen phrases:",pe)}finally{ae.current=!1}})()},[K,A,S.length,d,m,ye,Qe]);const Q=be.useCallback(de=>{let pe=de.currentTarget.value.normalize("NFC");if(bt){const Fe=S[A]||"";pe.length<=Fe.length?(pe=Fe.substring(0,pe.length),de.currentTarget.value=pe):(pe=Fe,de.currentTarget.value=pe)}U(pe)},[bt,S,A,U]),Oe=be.useCallback(()=>{Ua.current=!0,Be(!0)},[]),qe=be.useCallback(de=>{Ua.current=!1,Be(!1);let pe=de.currentTarget.value.normalize("NFC");if(bt){const Fe=S[A]||"";pe.length<=Fe.length&&(pe=Fe.substring(0,pe.length),de.currentTarget.value=pe)}N(pe)},[K,S,A]),ze=be.useCallback(de=>{var pe;k(de.key),setTimeout(()=>k(""),150),(pe=Vn.current)==null||pe.resume()},[]),je=de=>`w-full p-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-between group ${de?"bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-glow)]":"bg-transparent border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]"}`,Ke=be.useCallback(de=>{!de||de.length===0||(Ne(!0),E(de.map(pe=>pe.normalize("NFC"))),N(""),Pi.current="",b(0),F(0),Me(!1),Jt.current&&(Jt.current.value=""),J(null),w(!1),z(!1),setTimeout(()=>{var pe;return(pe=Jt.current)==null?void 0:pe.focus()},10))},[]);return B.jsxs("div",{className:"min-h-screen relative flex flex-row items-stretch overflow-hidden transition-colors duration-500",style:{transform:`scale(${ne})`,transformOrigin:"center center",width:"100%",height:"100%"},children:[B.jsx(bv,{inputRef:Jt,onInput:Q,onCompositionStart:Oe,onCompositionEnd:qe,onKeyDown:ze,onBlur:()=>Be(!1)}),B.jsx("input",{type:"color",ref:Na,onChange:de=>{const pe=de.target.value,Fe=parseInt(pe.slice(1,3),16),tt=parseInt(pe.slice(3,5),16),_t=parseInt(pe.slice(5,7),16);t({id:"custom",name:"Custom",r:Fe,g:tt,b:_t})},className:"fixed opacity-0 pointer-events-none -z-10"}),B.jsx("button",{onClick:()=>Ie(!0),className:`fixed left-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-l-0 rounded-r-2xl transition-all duration-500 group ${Ce?"translate-x-[-100%] opacity-0":"opacity-100"}`,children:B.jsx("i",{className:"fa fa-chevron-right text-[10px] text-[var(--text-secondary)]"})}),B.jsx("button",{onClick:()=>ue(!0),className:`fixed right-0 top-1/2 -translate-y-1/2 z-[1000] h-16 w-8 flex items-center justify-center bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-glass)] border-r-0 rounded-l-2xl transition-all duration-500 group ${$?"translate-x-[100%] opacity-0":"opacity-100"}`,children:B.jsx("i",{className:"fa fa-chevron-left text-[10px] text-[var(--text-secondary)]"})}),B.jsx("div",{className:`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-md transition-all duration-500 ${Ce||$?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>{Ie(!1),ue(!1)}}),B.jsx(MA,{isOpen:Ce,onClose:()=>Ie(!1),language:d,onLanguageChange:h,currentMusicStyle:wt,onMusicStyleChange:G,TECHNO_STYLE:Fd,AMBIENT_STYLE:O_,ACID_HOUSE_STYLE:P_,getBtnClass:je,themes:ks,currentTheme:r,onThemeChange:t}),B.jsx(TA,{isOpen:$,onClose:()=>ue(!1),targetKeyData:oe,onSelectLevel:Lt,onSelectPhrases:Ke,themes:ks,currentTheme:r,onThemeChange:t,focus:m,onFocusChange:p,getBtnClass:je,currentMusicStyle:wt,onMusicStyleChange:G,TECHNO_STYLE:Fd,AMBIENT_STYLE:O_,ACID_HOUSE_STYLE:P_,isInfiniteMode:K,onToggleZenMode:ke,score:V}),B.jsx("main",{className:"flex-grow flex flex-col items-center justify-center p-4 pt-2 relative transition-all duration-500",style:{opacity:Ce||$?.3:1},children:B.jsxs("div",{className:"w-full max-w-5xl flex flex-col items-center gap-4 relative",children:[!ye&&!T&&B.jsx("div",{className:"w-full relative group flex justify-center",children:B.jsxs("div",{className:"w-full theme-glass backdrop-blur-xl border border-[var(--border-glass)] rounded-[2.5rem] p-6 pt-6 flex flex-col items-center shadow-2xl relative",style:{overflow:"visible"},children:[B.jsx(hA,{currentPhrase:y,normalizedTypedText:Fi,currentWordInfo:C,isComposingState:Re,palette:r.id,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,frequencyBands:Ee,birdRotation:He,birdPos3D:dt,birdSize:Pe,visualsConfig:Ge,combo:O,comboMultiplier:P,isMusicLightingEnabled:W,PALETTE_COLORS:{},isCircuitMode:Xe,circuitTimer:tn,circuitTitle:ps,onCircuitCycle:$i,onDimensionalMenu:de=>{De(!xe)}}),B.jsx(bA,{keyboardType:Ue,activeKey:I,targetChar:Y,showZones:st,isMusicLightingEnabled:W,frequencyBands:Ee,stats:L,isZenMode:bt,score:V,onRestart:he,onZenToggle:()=>gt(!bt),audioReady:kn,audioSystem:Vn.current,currentMusicStyle:wt,startTime:X,isFinished:T,combo:O,comboMultiplier:P,onDimensionalMenu:de=>{De(!xe)},hexToRgba:(de,pe)=>`rgba(${r.r}, ${r.g}, ${r.b}, ${pe})`,customColor:`rgb(${r.r}, ${r.g}, ${r.b})`,highlightedKeys:rt,isWaveActive:Dt})]})}),B.jsx("div",{className:`fixed theme-glass backdrop-blur-3xl border border-[var(--border-glass)] rounded-lg shadow-2xl z-[2000] transition-all duration-300 origin-top-right ${xe?"opacity-100 scale-y-100 pointer-events-auto":"opacity-0 scale-y-95 pointer-events-none"}`,style:{right:"4.5rem",bottom:"6.5rem",width:"180px",transformOrigin:"top right"},children:B.jsxs("div",{className:"flex flex-col divide-y divide-[var(--border-glass)] max-h-[400px] overflow-y-auto custom-scrollbar",children:[B.jsxs("div",{className:"p-4 bg-[var(--accent-primary)]/5 border-b border-[var(--border-glass)]",children:[B.jsx("div",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1 opacity-60",children:"Puntos Totales"}),B.jsx("div",{className:"text-2xl font-black text-[var(--text-primary)] tracking-tighter tabular-nums",children:V.toLocaleString()})]}),B.jsxs("div",{className:"p-4",children:[B.jsxs("div",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 flex items-center gap-2",children:[B.jsx("i",{className:"fa fa-paint-brush"}),B.jsx("span",{children:"Personalización"})]}),B.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[ks.map(de=>B.jsx("button",{onClick:()=>t(de),className:`w-full aspect-square rounded-full border-2 transition-all duration-300 flex items-center justify-center ${r.id===de.id?"border-[var(--accent-primary)] ring-2 ring-[var(--accent-glow)]":"border-white/10 hover:border-white/40"}`,style:{backgroundColor:`rgb(${de.r}, ${de.g}, ${de.b})`},title:de.name,children:r.id===de.id&&B.jsx("i",{className:"fa fa-check text-[10px] text-white mix-blend-difference"})},de.id)),B.jsx("button",{onClick:()=>{var de;return(de=Na.current)==null?void 0:de.click()},className:"w-full aspect-square rounded-full border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-all font-bold text-[18px] text-[var(--text-secondary)]",title:"Color Personalizado",children:"+"})]})]}),B.jsxs("div",{className:"px-4 py-3 space-y-3",children:[B.jsxs("div",{onClick:()=>s(!i),className:"flex items-center justify-between cursor-pointer group",children:[B.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Negro Puro"}),B.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${i?"bg-[var(--accent-primary)]":"bg-white/10"}`,children:B.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${i?"left-4.5":"left-0.5"}`})})]}),B.jsx("div",{onClick:()=>{const de=l==="light"||r.scheme==="light"&&l===null;c(de?"dark":"light")},className:"flex items-center justify-between cursor-pointer group",children:(()=>{const de=l==="light"||r.scheme==="light"&&!l;return B.jsxs(B.Fragment,{children:[B.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors",children:"Modo Día"}),B.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${de?"bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)]":"bg-white/10"}`,children:B.jsx("div",{className:`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${de?"left-4.5":"left-0.5"}`})})]})})()})]}),B.jsxs("button",{onClick:()=>{Ye(!ft)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${ft?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[B.jsx("i",{className:"fa fa-keyboard-o w-4"}),B.jsx("span",{children:"Sonido"})]}),B.jsxs("button",{onClick:()=>{at(!mt)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${mt?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[B.jsx("i",{className:"fa fa-music w-4"}),B.jsx("span",{children:"Música"})]}),B.jsxs("button",{onClick:()=>{ge(!W)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${W?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[B.jsx("i",{className:"fa fa-lightbulb-o w-4"}),B.jsx("span",{children:"Luces"})]}),B.jsxs("button",{onClick:()=>{pt(!st)},className:`w-full px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider flex items-center gap-3 transition-all ${st?"text-[var(--accent-primary)] bg-[var(--accent-primary)]/10":"text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"}`,children:[B.jsx("i",{className:"fa fa-hand-paper-o w-4"}),B.jsx("span",{children:"Guía"})]})]})})]})}),B.jsx("footer",{className:"fixed bottom-6 right-8 text-[var(--text-secondary)] text-[8px] font-black uppercase tracking-[0.5em] font-mono opacity-20 select-none",children:"ALPINE_ECODECOR_PRO // 2025"})]})};console.log("OveTyp_ entry point loaded");const jh=document.getElementById("root");console.log("Root element found:",!!jh);if(!jh)throw new Error("Could not find root element to mount to");const OA=zy.createRoot(jh);OA.render(B.jsx(Ca.StrictMode,{children:B.jsx(LA,{})}));
