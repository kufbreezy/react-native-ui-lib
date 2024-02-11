/*! For license information please see 4f3edbfe.1be005c4.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,d=u["".concat(c,".").concat(y)]||u[y]||f[y]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1551:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7378),r(3905));const a={id:"Overlay",title:"Overlay",sidebar_label:"Overlay"},i=void 0,l={unversionedId:"components/infra/Overlay",id:"components/infra/Overlay",isDocsHomePage:!1,title:"Overlay",description:"Overlay view with types",source:"@site/../docs/components/infra/Overlay.md",sourceDirName:"components/infra",slug:"/components/infra/Overlay",permalink:"/react-native-ui-lib/docs/components/infra/Overlay",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/infra/Overlay.md",tags:[],version:"current",frontMatter:{id:"Overlay",title:"Overlay",sidebar_label:"Overlay"},sidebar:"tutorialSidebar",previous:{title:"KeyboardTrackingView",permalink:"/react-native-ui-lib/docs/components/infra/KeyboardTrackingView"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"color",id:"color",children:[]},{value:"customContent",id:"customcontent",children:[]},{value:"intensity",id:"intensity",children:[]},{value:"type",id:"type",children:[]}]}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Overlay view with types",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/OverlaysScreen.tsx"},"(code example)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This component extends ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/image"},"Image"))," props."))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<Image\n source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}\n overlayType={Image.overlayTypes.BOTTOM}\n/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("p",null,"The overlay color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"customcontent"},"customContent"),(0,o.kt)("p",null,"Custom overlay content to be rendered on top of the image",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.kt)("h3",{id:"intensity"},"intensity"),(0,o.kt)("p",null,"The intensity of the gradient.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"low | medium | high ")," "),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"The type of overlay to set on top of the image",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"vertical | top | bottom | solid (OverlayTypeType) ")))}p.isMDXComponent=!0},1535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function h(){}function k(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=k.prototype=new h;g.constructor=k,m(g,b.prototype),g.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:j.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+P(c,0):a,O(i)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),T(i,t,o,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",O(e))for(var s=0;s<e.length;s++){var p=a+P(l=e[s],s);c+=T(l,t,o,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)c+=T(l=l.value,t,o,p=a+P(l,s++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null}},7378:(e,t,r)=>{r(1535)}}]);