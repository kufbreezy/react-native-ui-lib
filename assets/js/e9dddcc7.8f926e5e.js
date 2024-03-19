/*! For license information please see e9dddcc7.8f926e5e.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[3512],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2920:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(5072),o=(r(6952),r(5788));const a={id:"ProgressBar",title:"ProgressBar",sidebar_label:"ProgressBar"},s=void 0,i={unversionedId:"components/status/ProgressBar",id:"components/status/ProgressBar",isDocsHomePage:!1,title:"ProgressBar",description:"Progress bar",source:"@site/../docs/components/status/ProgressBar.md",sourceDirName:"components/status",slug:"/components/status/ProgressBar",permalink:"/react-native-ui-lib/docs/components/status/ProgressBar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/status/ProgressBar.md",tags:[],version:"current",frontMatter:{id:"ProgressBar",title:"ProgressBar",sidebar_label:"ProgressBar"},sidebar:"tutorialSidebar",previous:{title:"ConnectionStatusBar",permalink:"/react-native-ui-lib/docs/components/status/ConnectionStatusBar"},next:{title:"SkeletonView",permalink:"/react-native-ui-lib/docs/components/status/SkeletonView"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"customElement",id:"customelement",children:[]},{value:"fullWidth",id:"fullwidth",children:[]},{value:"progress",id:"progress",children:[]},{value:"progressColor",id:"progresscolor",children:[]},{value:"style",id:"style",children:[]}]}],u={toc:l},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Progress bar",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ProgressBarScreen.tsx"},"(code example)")),(0,o.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<ProgressBar progress={55} progressColor={Colors.red30}/>\n")),(0,o.yg)("h2",{id:"api"},"API"),(0,o.yg)("h3",{id:"customelement"},"customElement"),(0,o.yg)("p",null,"Custom element to render on top of the animated progress",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.yg)("h3",{id:"fullwidth"},"fullWidth"),(0,o.yg)("p",null,"FullWidth Ui preset",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.yg)("h3",{id:"progress"},"progress"),(0,o.yg)("p",null,"The progress of the bar from 0 to 100",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"progresscolor"},"progressColor"),(0,o.yg)("p",null,"Progress color",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"style"},"style"),(0,o.yg)("p",null,"Override container style",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"ViewStyle ")))}p.isMDXComponent=!0},955:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var w=v.prototype=new h;w.constructor=v,m(w,b.prototype),w.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)O.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function B(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return s=s(l=e),e=""===a?"."+C(l,0):a,P(s)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),B(s,t,o,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",P(e))for(var u=0;u<e.length;u++){var c=a+C(i=e[u],u);l+=B(i,t,o,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)l+=B(i=i.value,t,o,c=a+C(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function N(e,t,r){if(null==e)return e;var n=[],o=0;return B(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null}},6952:(e,t,r)=>{r(955)}}]);