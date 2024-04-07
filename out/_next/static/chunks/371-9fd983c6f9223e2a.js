"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{8792:function(e,t,n){n.d(t,{default:function(){return u.a}});var r=n(5250),u=n.n(r)},699:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4090),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,l=r.useLayoutEffect,i=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var c=void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,c=r[1];return l(function(){u.value=n,u.getSnapshot=t,s(u)&&c({inst:u})},[e,n,t]),a(function(){return s(u)&&c({inst:u}),e(function(){s(u)&&c({inst:u})})},[e]),i(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},220:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4090),u=n(2362),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=u.useSyncExternalStore,l=r.useRef,i=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=l(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var v=a(e,(f=s(function(){function e(e){if(!i){if(i=!0,a=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return l=t}return l=e}if(t=l,o(a,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(a=e,l=n)}var a,l,i=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,u]))[0],f[1]);return i(function(){d.hasValue=!0,d.value=v},[v]),c(v),v}},2362:function(e,t,n){e.exports=n(699)},9292:function(e,t,n){e.exports=n(220)},9010:function(e,t,n){n.d(t,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},6574:function(e,t,n){n.d(t,{O:function(){return L}});var r,u,o,a=n(4090),l=n(9010),i=n(641),s=n(2381),c=n(9790),f=n(5235);function d(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var v=n(6601),p=n(2219),m=n(7700);function h(e){let{onFocus:t}=e,[n,r]=(0,a.useState)(!0),u=(0,p.t)();return n?a.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus:e=>{e.preventDefault();let n,o=50;n=requestAnimationFrame(function e(){if(o--<=0){n&&cancelAnimationFrame(n);return}if(t()){if(cancelAnimationFrame(n),!u.current)return;r(!1);return}n=requestAnimationFrame(e)})}}):null}var g=n(8803),b=n(2640),E=n(1210),y=n(4819),T=n(8318);let x=a.createContext(null);function S(e){let{children:t}=e,n=a.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let u=null!=(n=r.get(t))?n:0;return r.set(t,u+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return a.createElement(x.Provider,{value:n},t)}function w(e){let t=a.useContext(x);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let u=[],o=r;for(;o;)u.push(o.index),o=o.return;return"$."+u.join(".")}(),[r,u]=t.current.get(e,n);return a.useEffect(()=>u,[]),r}var A=((r=A||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),O=((u=O||{})[u.Less=-1]="Less",u[u.Equal=0]="Equal",u[u.Greater=1]="Greater",u),P=((o=P||{})[o.SetSelectedIndex=0]="SetSelectedIndex",o[o.RegisterTab=1]="RegisterTab",o[o.UnregisterTab=2]="UnregisterTab",o[o.RegisterPanel=3]="RegisterPanel",o[o.UnregisterPanel=4]="UnregisterPanel",o);let F={0(e,t){var n;let r=(0,g.z2)(e.tabs,e=>e.current),u=(0,g.z2)(e.panels,e=>e.current),o=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:r,panels:u};if(t.index<0||t.index>r.length-1){let n=(0,b.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,b.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===o.length)return a;let u=(0,b.E)(n,{0:()=>r.indexOf(o[0]),1:()=>r.indexOf(o[o.length-1])});return{...a,selectedIndex:-1===u?e.selectedIndex:u}}let l=r.slice(0,t.index),i=[...r.slice(t.index),...l].find(e=>o.includes(e));if(!i)return a;let s=null!=(n=r.indexOf(i))?n:e.selectedIndex;return -1===s&&(s=e.selectedIndex),{...a,selectedIndex:s}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],u=(0,g.z2)([...e.tabs,t.tab],e=>e.current),o=null!=(n=u.indexOf(r))?n:e.selectedIndex;return -1===o&&(o=e.selectedIndex),{...e,tabs:u,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,g.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},N=(0,a.createContext)(null);function I(e){let t=(0,a.useContext)(N);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return t}N.displayName="TabsDataContext";let R=(0,a.createContext)(null);function C(e){let t=(0,a.useContext)(R);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}function k(e,t){return(0,b.E)(t.type,F,e,t)}R.displayName="TabsActionsContext";let M=a.Fragment,j=T.AN.RenderStrategy|T.AN.Static,L=Object.assign((0,T.yV)(function(e,t){var n,r;let u=(0,s.M)(),{id:o=`headlessui-tabs-tab-${u}`,...f}=e,{orientation:p,activation:m,selectedIndex:h,tabs:x,panels:S}=I("Tab"),A=C("Tab"),O=I("Tab"),P=(0,a.useRef)(null),F=(0,v.T)(P,t);(0,c.e)(()=>A.registerTab(P),[A,P]);let N=w("tabs"),R=x.indexOf(P);-1===R&&(R=N);let k=R===h,M=(0,i.z)(e=>{var t;let n=e();if(n===g.fE.Success&&"auto"===m){let e=null==(t=(0,y.r)(P))?void 0:t.activeElement,n=O.tabs.findIndex(t=>t.current===e);-1!==n&&A.change(n)}return n}),j=(0,i.z)(e=>{let t=x.map(e=>e.current).filter(Boolean);if(e.key===l.R.Space||e.key===l.R.Enter){e.preventDefault(),e.stopPropagation(),A.change(R);return}switch(e.key){case l.R.Home:case l.R.PageUp:return e.preventDefault(),e.stopPropagation(),M(()=>(0,g.jA)(t,g.TO.First));case l.R.End:case l.R.PageDown:return e.preventDefault(),e.stopPropagation(),M(()=>(0,g.jA)(t,g.TO.Last))}if(M(()=>(0,b.E)(p,{vertical:()=>e.key===l.R.ArrowUp?(0,g.jA)(t,g.TO.Previous|g.TO.WrapAround):e.key===l.R.ArrowDown?(0,g.jA)(t,g.TO.Next|g.TO.WrapAround):g.fE.Error,horizontal:()=>e.key===l.R.ArrowLeft?(0,g.jA)(t,g.TO.Previous|g.TO.WrapAround):e.key===l.R.ArrowRight?(0,g.jA)(t,g.TO.Next|g.TO.WrapAround):g.fE.Error}))===g.fE.Success)return e.preventDefault()}),L=(0,a.useRef)(!1),D=(0,i.z)(()=>{var e;L.current||(L.current=!0,null==(e=P.current)||e.focus({preventScroll:!0}),A.change(R),(0,E.Y)(()=>{L.current=!1}))}),z=(0,i.z)(e=>{e.preventDefault()}),_=(0,a.useMemo)(()=>({selected:k}),[k]),U={ref:F,onKeyDown:j,onMouseDown:z,onClick:D,id:o,role:"tab",type:function(e,t){let[n,r]=(0,a.useState)(()=>d(e));return(0,c.e)(()=>{r(d(e))},[e.type,e.as]),(0,c.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,P),"aria-controls":null==(r=null==(n=S[R])?void 0:n.current)?void 0:r.id,"aria-selected":k,tabIndex:k?0:-1};return(0,T.sY)({ourProps:U,theirProps:f,slot:_,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,T.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:u=!1,onChange:o,selectedIndex:l=null,...s}=e,d=r?"vertical":"horizontal",p=u?"manual":"auto",m=null!==l,b=(0,v.T)(t),[E,y]=(0,a.useReducer)(k,{selectedIndex:null!=l?l:n,tabs:[],panels:[]}),x=(0,a.useMemo)(()=>({selectedIndex:E.selectedIndex}),[E.selectedIndex]),w=(0,f.E)(o||(()=>{})),A=(0,f.E)(E.tabs),O=(0,a.useMemo)(()=>({orientation:d,activation:p,...E}),[d,p,E]),P=(0,i.z)(e=>(y({type:1,tab:e}),()=>y({type:2,tab:e}))),F=(0,i.z)(e=>(y({type:3,panel:e}),()=>y({type:4,panel:e}))),I=(0,i.z)(e=>{C.current!==e&&w.current(e),m||y({type:0,index:e})}),C=(0,f.E)(m?e.selectedIndex:E.selectedIndex),j=(0,a.useMemo)(()=>({registerTab:P,registerPanel:F,change:I}),[]);return(0,c.e)(()=>{y({type:0,index:null!=l?l:n})},[l]),(0,c.e)(()=>{if(void 0===C.current||E.tabs.length<=0)return;let e=(0,g.z2)(E.tabs,e=>e.current);e.some((e,t)=>E.tabs[t]!==e)&&I(e.indexOf(E.tabs[C.current]))}),a.createElement(S,null,a.createElement(R.Provider,{value:j},a.createElement(N.Provider,{value:O},O.tabs.length<=0&&a.createElement(h,{onFocus:()=>{var e,t;for(let n of A.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,T.sY)({ourProps:{ref:b},theirProps:s,slot:x,defaultTag:M,name:"Tabs"}))))}),List:(0,T.yV)(function(e,t){let{orientation:n,selectedIndex:r}=I("Tab.List"),u=(0,v.T)(t);return(0,T.sY)({ourProps:{ref:u,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,T.yV)(function(e,t){let{selectedIndex:n}=I("Tab.Panels"),r=(0,v.T)(t),u=(0,a.useMemo)(()=>({selectedIndex:n}),[n]);return(0,T.sY)({ourProps:{ref:r},theirProps:e,slot:u,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,T.yV)(function(e,t){var n,r,u,o;let l=(0,s.M)(),{id:i=`headlessui-tabs-panel-${l}`,tabIndex:f=0,...d}=e,{selectedIndex:p,tabs:h,panels:g}=I("Tab.Panel"),b=C("Tab.Panel"),E=(0,a.useRef)(null),y=(0,v.T)(E,t);(0,c.e)(()=>b.registerPanel(E),[b,E]);let x=w("panels"),S=g.indexOf(E);-1===S&&(S=x);let A=S===p,O=(0,a.useMemo)(()=>({selected:A}),[A]),P={ref:y,id:i,role:"tabpanel","aria-labelledby":null==(r=null==(n=h[S])?void 0:n.current)?void 0:r.id,tabIndex:A?f:-1};return A||null!=(u=d.unmount)&&!u||null!=(o=d.static)&&o?(0,T.sY)({ourProps:P,theirProps:d,slot:O,defaultTag:"div",features:j,visible:A,name:"Tabs.Panel"}):a.createElement(m._,{as:"span","aria-hidden":"true",...P})})})},129:function(e,t,n){n.d(t,{u:function(){return C}});var r,u=n(4090),o=n(44),a=n(641),l=n(2219),i=n(9790),s=n(5235),c=n(2144),f=n(6601),d=n(5205),v=n(2640);function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.add(...n)}function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&n.length>0&&e.classList.remove(...n)}var h=n(8358),g=n(2466),b=n(8318);function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(/\s+/).filter(e=>e.length>1)}let y=(0,u.createContext)(null);y.displayName="TransitionContext";var T=((r=T||{}).Visible="visible",r.Hidden="hidden",r);let x=(0,u.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function w(e,t){let n=(0,s.E)(e),r=(0,u.useRef)([]),i=(0,l.t)(),c=(0,o.G)(),f=(0,a.z)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.l4.Hidden,u=r.current.findIndex(t=>{let{el:n}=t;return n===e});-1!==u&&((0,v.E)(t,{[b.l4.Unmount](){r.current.splice(u,1)},[b.l4.Hidden](){r.current[u].state="hidden"}}),c.microTask(()=>{var e;!S(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,a.z)(e=>{let t=r.current.find(t=>{let{el:n}=t;return n===e});return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,b.l4.Unmount)}),p=(0,u.useRef)([]),m=(0,u.useRef)(Promise.resolve()),h=(0,u.useRef)({enter:[],leave:[],idle:[]}),g=(0,a.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(t=>{let[n]=t;return n!==e})),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(e=>{let[t,n]=e;return n})).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),E=(0,a.z)((e,t,n)=>{Promise.all(h.current[t].splice(0).map(e=>{let[t,n]=e;return n})).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:d,unregister:f,onStart:g,onStop:E,wait:m,chains:h}),[d,f,r,g,E,h,m])}function A(){}x.displayName="NestingContext";let O=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of O)n[r]=null!=(t=e[r])?t:A;return n}let F=b.AN.RenderStrategy,N=(0,b.yV)(function(e,t){let{show:n,appear:r=!1,unmount:o=!0,...l}=e,s=(0,u.useRef)(null),d=(0,f.T)(s,t);(0,c.H)();let v=(0,h.oJ)();if(void 0===n&&null!==v&&(n=(v&h.ZM.Open)===h.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,m]=(0,u.useState)(n?"visible":"hidden"),g=w(()=>{m("hidden")}),[E,T]=(0,u.useState)(!0),A=(0,u.useRef)([n]);(0,i.e)(()=>{!1!==E&&A.current[A.current.length-1]!==n&&(A.current.push(n),T(!1))},[A,n]);let O=(0,u.useMemo)(()=>({show:n,appear:r,initial:E}),[n,r,E]);(0,u.useEffect)(()=>{if(n)m("visible");else if(S(g)){let e=s.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")},[n,g]);let P={unmount:o},N=(0,a.z)(()=>{var t;E&&T(!1),null==(t=e.beforeEnter)||t.call(e)}),R=(0,a.z)(()=>{var t;E&&T(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(x.Provider,{value:g},u.createElement(y.Provider,{value:O},(0,b.sY)({ourProps:{...P,as:u.Fragment,children:u.createElement(I,{ref:d,...P,...l,beforeEnter:N,beforeLeave:R})},theirProps:{},defaultTag:u.Fragment,features:F,visible:"visible"===p,name:"Transition"})))}),I=(0,b.yV)(function(e,t){var n,r,T;let A;let{beforeEnter:O,afterEnter:N,beforeLeave:I,afterLeave:R,enter:C,enterFrom:k,enterTo:M,entered:j,leave:L,leaveFrom:D,leaveTo:z,..._}=e,U=(0,u.useRef)(null),H=(0,f.T)(U,t),V=null==(n=_.unmount)||n?b.l4.Unmount:b.l4.Hidden,{show:Y,appear:q,initial:W}=function(){let e=(0,u.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Z,G]=(0,u.useState)(Y?"visible":"hidden"),$=function(){let e=(0,u.useContext)(x);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:K}=$;(0,u.useEffect)(()=>B(U),[B,U]),(0,u.useEffect)(()=>{if(V===b.l4.Hidden&&U.current){if(Y&&"visible"!==Z){G("visible");return}return(0,v.E)(Z,{hidden:()=>K(U),visible:()=>B(U)})}},[Z,U,B,K,Y,V]);let J=(0,s.E)({base:E(_.className),enter:E(C),enterFrom:E(k),enterTo:E(M),entered:E(j),leave:E(L),leaveFrom:E(D),leaveTo:E(z)}),X=(T={beforeEnter:O,afterEnter:N,beforeLeave:I,afterLeave:R},A=(0,u.useRef)(P(T)),(0,u.useEffect)(()=>{A.current=P(T)},[T]),A),Q=(0,c.H)();(0,u.useEffect)(()=>{if(Q&&"visible"===Z&&null===U.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[U,Z,Q]);let ee=q&&Y&&W,et=Q&&(!W||q)?Y?"enter":"leave":"idle",en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,u.useState)(e),r=(0,l.t)(),o=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),a=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:a,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,a.z)(e=>(0,v.E)(e,{enter:()=>{en.addFlag(h.ZM.Opening),X.current.beforeEnter()},leave:()=>{en.addFlag(h.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),eu=(0,a.z)(e=>(0,v.E)(e,{enter:()=>{en.removeFlag(h.ZM.Opening),X.current.afterEnter()},leave:()=>{en.removeFlag(h.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),eo=w(()=>{G("hidden"),K(U)},$),ea=(0,u.useRef)(!1);!function(e){let{immediate:t,container:n,direction:r,classes:u,onStart:a,onStop:c}=e,f=(0,l.t)(),h=(0,o.G)(),g=(0,s.E)(r);(0,i.e)(()=>{t&&(g.current="enter")},[t]),(0,i.e)(()=>{let e=(0,d.k)();h.add(e.dispose);let t=n.current;if(t&&"idle"!==g.current&&f.current){var r,o,l;let n,i,s,f,h,b,E;return e.dispose(),a.current(g.current),e.add((r=u.current,o="enter"===g.current,l=()=>{e.dispose(),c.current(g.current)},i=o?"enter":"leave",s=(0,d.k)(),f=void 0!==l?(n={called:!1},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!n.called)return n.called=!0,l(...t)}):()=>{},"enter"===i&&(t.removeAttribute("hidden"),t.style.display=""),h=(0,v.E)(i,{enter:()=>r.enter,leave:()=>r.leave}),b=(0,v.E)(i,{enter:()=>r.enterTo,leave:()=>r.leaveTo}),E=(0,v.E)(i,{enter:()=>r.enterFrom,leave:()=>r.leaveFrom}),m(t,...r.base,...r.enter,...r.enterTo,...r.enterFrom,...r.leave,...r.leaveFrom,...r.leaveTo,...r.entered),p(t,...r.base,...h,...E),s.nextFrame(()=>{m(t,...r.base,...h,...E),p(t,...r.base,...h,...b),function(e,t){let n=(0,d.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[o,a]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=o+a;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(t,()=>(m(t,...r.base,...h),p(t,...r.base,...r.entered),f()))}),s.dispose)),e.dispose}},[r])}({immediate:ee,container:U,classes:J,direction:et,onStart:(0,s.E)(e=>{ea.current=!0,eo.onStart(U,e,er)}),onStop:(0,s.E)(e=>{ea.current=!1,eo.onStop(U,e,eu),"leave"!==e||S(eo)||(G("hidden"),K(U))})});let el=_;return ee?el={...el,className:(0,g.A)(_.className,...J.current.enter,...J.current.enterFrom)}:ea.current&&(el.className=(0,g.A)(_.className,null==(r=U.current)?void 0:r.className),""===el.className&&delete el.className),u.createElement(x.Provider,{value:eo},u.createElement(h.up,{value:(0,v.E)(Z,{visible:h.ZM.Open,hidden:h.ZM.Closed})|en.flags},(0,b.sY)({ourProps:{ref:H},theirProps:el,defaultTag:"div",features:F,visible:"visible"===Z,name:"Transition.Child"})))}),R=(0,b.yV)(function(e,t){let n=null!==(0,u.useContext)(y),r=null!==(0,h.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(N,{ref:t,...e}):u.createElement(I,{ref:t,...e}))}),C=Object.assign(N,{Child:R,Root:N})},44:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(4090),u=n(5205);function o(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},641:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(4090),u=n(5235);let o=function(e){let t=(0,u.E)(e);return r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])}},2381:function(e,t,n){n.d(t,{M:function(){return i}});var r,u=n(4090),o=n(1879),a=n(9790),l=n(2144);let i=null!=(r=u.useId)?r:function(){let e=(0,l.H)(),[t,n]=u.useState(e?()=>o.O.nextId():null);return(0,a.e)(()=>{null===t&&n(o.O.nextId())},[t]),null!=t?""+t:void 0}},2219:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(4090),u=n(9790);function o(){let e=(0,r.useRef)(!1);return(0,u.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},9790:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(4090),u=n(1879);let o=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},5235:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(4090),u=n(9790);function o(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},2144:function(e,t,n){n.d(t,{H:function(){return a}});var r,u=n(4090),o=n(1879);function a(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(u,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[a,l]=u.useState(o.O.isHandoffComplete);return a&&!1===o.O.isHandoffComplete&&l(!1),u.useEffect(()=>{!0!==a&&l(!0)},[a]),u.useEffect(()=>o.O.handoff(),[]),!t&&a}},6601:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return a}});var r=n(4090),u=n(641);let o=Symbol();function a(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[o]:t})}function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a=(0,r.useRef)(t);(0,r.useEffect)(()=>{a.current=t},[t]);let l=(0,u.z)(e=>{for(let t of a.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[o]))?void 0:l}},7700:function(e,t,n){n.d(t,{A:function(){return o},_:function(){return a}});var r,u=n(8318),o=((r=o||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,u.yV)(function(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(2&r)==2||(null!=(n=o["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,u.sY)({ourProps:a,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})})},8358:function(e,t,n){n.d(t,{ZM:function(){return a},oJ:function(){return l},up:function(){return i}});var r,u=n(4090);let o=(0,u.createContext)(null);o.displayName="OpenClosedContext";var a=((r=a||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(o)}function i(e){let{value:t,children:n}=e;return u.createElement(o.Provider,{value:t},n)}},2466:function(e,t,n){n.d(t,{A:function(){return r}});function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},5205:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let u=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(u))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let u=setTimeout(...t);return n.add(()=>clearTimeout(u))},microTask(){for(var e=arguments.length,t=Array(e),u=0;u<e;u++)t[u]=arguments[u];let o={current:!0};return(0,r.Y)(()=>{o.current&&t[0]()}),n.add(()=>{o.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(1210)},1879:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);class a{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let l=new a},8803:function(e,t,n){n.d(t,{C5:function(){return g},TO:function(){return f},fE:function(){return d},jA:function(){return E},sP:function(){return m},tJ:function(){return p},z2:function(){return b}});var r,u,o,a,l,i=n(2640),s=n(4819);let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var f=((r=f||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),d=((u=d||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),v=((o=v||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o),p=((a=p||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a);function m(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=(0,s.r)(e))?void 0:t.body)&&(0,i.E)(n,{0:()=>e.matches(c),1(){let t=e;for(;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1}})}var h=((l=h||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function g(e){null==e||e.focus({preventScroll:!0})}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let o=r.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t){var n,r,u;let{sorted:o=!0,relativeTo:a=null,skipElements:l=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?o?b(e):e:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);l.length>0&&s.length>1&&(s=s.filter(e=>!l.includes(e))),a=null!=a?a:i.activeElement;let f=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(a))-1;if(4&t)return Math.max(0,s.indexOf(a))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=32&t?{preventScroll:!0}:{},p=0,m=s.length,h;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(h=s[e])||h.focus(v),p+=f}while(h!==i.activeElement);return 6&t&&null!=(u=null==(r=null==(n=h)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&u&&h.select(),2}"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},2640:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t){for(var n=arguments.length,u=Array(n>2?n-2:0),o=2;o<n;o++)u[o-2]=arguments[o];if(e in t){let n=t[e];return"function"==typeof n?n(...u):n}let a=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}},1210:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},4819:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(1879);function u(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},8318:function(e,t,n){n.d(t,{AN:function(){return i},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,u,o=n(4090),a=n(2466),l=n(2640),i=((r=i||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:u,features:o,visible:a=!0,name:i,mergeRefs:s}=e;s=null!=s?s:d;let c=v(n,t);if(a)return f(c,r,u,i,s);let p=null!=o?o:0;if(2&p){let{static:e=!1,...t}=c;if(e)return f(t,r,u,i,s)}if(1&p){let{unmount:e=!0,...t}=c;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},r,u,i,s)})}return f(c,r,u,i,s)}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,u=arguments.length>4?arguments[4]:void 0,{as:l=n,children:i,refName:s="ref",...c}=h(e,["unmount","static"]),f=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof i?i(t):i;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let p={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(l===o.Fragment&&Object.keys(m(c)).length>0){if(!(0,o.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,a.A)(null==e?void 0:e.className(...n),c.className)}:(0,a.A)(null==e?void 0:e.className,c.className);return(0,o.cloneElement)(d,Object.assign({},v(d.props,m(h(c,["ref"]))),p,f,{ref:u(d.ref,f.ref)},t?{className:t}:{}))}return(0,o.createElement)(l,Object.assign({},h(c,["ref"]),l!==o.Fragment&&f,l!==o.Fragment&&p),d)}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},u={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=u[t]||(u[t]=[]),u[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(u).map(e=>[e,void 0])));for(let e in u)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(let n of u[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},3167:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",u=arguments.length;n<u;n++)(e=arguments[n])&&(t=function e(t){var n,r,u="";if("string"==typeof t||"number"==typeof t)u+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(r=e(t[n]))&&(u&&(u+=" "),u+=r)}else for(r in t)t[r]&&(u&&(u+=" "),u+=r)}return u}(e))&&(r&&(r+=" "),r+=t);return r}},4637:function(e,t,n){n.d(t,{I:function(){return u}});var r=n(9908);function u(e,t,n){var u;if("string"==typeof e){let o=document;t&&((0,r.k)(!!t.current,"Scope provided, but no element detected."),o=t.current),n?(null!==(u=n[e])&&void 0!==u||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},9908:function(e,t,n){n.d(t,{K:function(){return u},k:function(){return o}});var r=n(3393);let u=r.Z,o=r.Z},3393:function(e,t,n){n.d(t,{Z:function(){return r}});let r=e=>e},9159:function(e,t,n){n.d(t,{Y:function(){return a}});var r=n(4090),u=n(4637);let o={some:0,all:1};function a(e){let{root:t,margin:n,amount:a,once:l=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[i,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||l&&i)return;let r={root:t&&t.current||void 0,margin:n,amount:a};return function(e,t){let{root:n,margin:r,amount:a="some"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=(0,u.I)(e),i=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=i.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?i.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),i.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof a?a:o[a]});return l.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(s(!0),l?void 0:()=>s(!1)),r)},[t,e,n,l,a]),i}},4505:function(e,t,n){n.d(t,{Ue:function(){return d},oR:function(){return c}});var r=n(8625),u=n(4090),o=n(9292);let{useDebugValue:a}=u,{useSyncExternalStoreWithSelector:l}=o,i=!1,s=e=>e;function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n=arguments.length>2?arguments[2]:void 0;n&&!i&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),i=!0);let r=l(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return a(r),r}let f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?(0,r.M)(e):e,n=(e,n)=>c(t,e,n);return Object.assign(n,t),n},d=e=>e?f(e):f},8625:function(e,t,n){n.d(t,{M:function(){return u}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u||null===u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,o={setState:r,getState:u,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},a=t=e(r,u,o);return o},u=e=>e?r(e):r}}]);