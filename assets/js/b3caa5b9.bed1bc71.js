/*! For license information please see b3caa5b9.bed1bc71.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2793:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7378),n(3905));const o={id:"View",title:"View",sidebar_label:"View"},i=void 0,c={unversionedId:"components/basic/View",id:"components/basic/View",isDocsHomePage:!1,title:"View",description:"An enhanced View component",source:"@site/../docs/components/basic/View.md",sourceDirName:"components/basic",slug:"/components/basic/View",permalink:"/react-native-ui-lib/docs/components/basic/View",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/basic/View.md",tags:[],version:"current",frontMatter:{id:"View",title:"View",sidebar_label:"View"},sidebar:"tutorialSidebar",previous:{title:"TouchableOpacity",permalink:"/react-native-ui-lib/docs/components/basic/TouchableOpacity"},next:{title:"PageControl",permalink:"/react-native-ui-lib/docs/components/navigation/PageControl"}},l=[{value:"API",id:"api",children:[{value:"animated",id:"animated",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"inaccessible",id:"inaccessible",children:[]},{value:"reanimated",id:"reanimated",children:[]},{value:"recorderTag",id:"recordertag",children:[]},{value:"renderDelay",id:"renderdelay",children:[]},{value:"style",id:"style",children:[]},{value:"useSafeArea",id:"usesafearea",children:[]}]}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An enhanced View component",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ViewScreen.js"},"(code example)")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component extends ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/view"},"View"))," props."))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component support ",(0,a.kt)("strong",{parentName:"p"},"margins, paddings, alignments, background, borderRadius")," modifiers."))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"animated"},"animated"),(0,a.kt)("p",null,"Use Animate.View as a container",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,a.kt)("p",null,"Set background color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"inaccessible"},"inaccessible"),(0,a.kt)("p",null,"Turn off accessibility for this view and its nested children",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"reanimated"},"reanimated"),(0,a.kt)("p",null,"Use Animate.View (from react-native-reanimated) as a container",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"recordertag"},"recorderTag"),(0,a.kt)("p",null,"Recorder Tag",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"'mask' | 'unmask' ")," "),(0,a.kt)("h3",{id:"renderdelay"},"renderDelay"),(0,a.kt)("p",null,"Experimental: Pass time in ms to delay render",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("p",null,"Custom style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"usesafearea"},"useSafeArea"),(0,a.kt)("p",null,"If true, will render as SafeAreaView",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")))}p.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function h(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var w=k.prototype=new h;w.constructor=k,b(w,v.prototype),w.isPureReactComponent=!0;var g=Array.isArray,N=Object.prototype.hasOwnProperty,O={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,o={},i=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:n,type:e,key:i,ref:c,props:o,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===o?"."+C(l,0):o,g(i)?(a="",null!=e&&(a=e.replace(x,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=""===o?".":o+":",g(e))for(var s=0;s<e.length;s++){var p=o+C(c=e[s],s);l+=P(c,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(c=e.next()).done;)l+=P(c=c.value,t,a,p=o+C(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function V(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},E={transition:null}},7378:(e,t,n)=>{n(1535)}}]);