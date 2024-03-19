/*! For license information please see 7562e1f0.7a3b7700.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7232],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},460:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(5072),o=(r(6952),r(5788));const a={sidebar_position:1,sidebar_label:"Style",title:"Style"},i=void 0,l={unversionedId:"foundation/style",id:"foundation/style",isDocsHomePage:!1,title:"Style",description:"The base foundation of each UI component is its style.",source:"@site/../docs/foundation/style.md",sourceDirName:"foundation",slug:"/foundation/style",permalink:"/react-native-ui-lib/docs/foundation/style",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/style.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Style",title:"Style"},sidebar:"tutorialSidebar",previous:{title:"Migrating v6 -> v7",permalink:"/react-native-ui-lib/docs/getting-started/v7"},next:{title:"Colors",permalink:"/react-native-ui-lib/docs/foundation/colors"}},s=[],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The base foundation of each UI component is its style.\nWe use basic style presets to define the rules and the style guide we follow."),(0,o.yg)("p",null,"Our presets include: ",(0,o.yg)("strong",{parentName:"p"},"Colors"),", ",(0,o.yg)("strong",{parentName:"p"},"Typography"),", ",(0,o.yg)("strong",{parentName:"p"},"Spacings"),", ",(0,o.yg)("strong",{parentName:"p"},"Shadows"),", ",(0,o.yg)("strong",{parentName:"p"},"Border Radius")," and more.."),(0,o.yg)("p",null,"The UILib already comes with a set of predefined constants and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/tree/master/src/style"},"presets"),"."),(0,o.yg)("p",null,"You can easily use it anywhere in your code (as you would use any other constant value), or as a component modifier."),(0,o.yg)("p",null,"It's also very easy to define your own presets.."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"import {Typography, Colors, Spacings} from 'react-native-ui-lib';\n\nColors.loadColors({\n  pink: '#FF69B4',\n  gold: '#FFD700',\n});\n\nTypography.loadTypographies({\n  h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},\n  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},\n});\n\nSpacings.loadSpacings({\n  page: isSmallScreen ? 16 : 20\n});\n")),(0,o.yg)("p",null,"For example, the following line"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"<Text h1 pink>Hello World</Text>\n")),(0,o.yg)("p",null,"Will generate this text"),(0,o.yg)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24792314/296b7ebc-1b86-11e7-8580-9252d1ddf5d9.png",width:"250"}),(0,o.yg)("p",null,"It will use the ",(0,o.yg)("em",{parentName:"p"},"h1")," preset for typography and the ",(0,o.yg)("em",{parentName:"p"},"pink")," color value we set to style the Text element."))}p.isMDXComponent=!0},955:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var w=v.prototype=new h;w.constructor=v,g(w,b.prototype),w.isPureReactComponent=!0;var S=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+T(s,0):a,S(i)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),N(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",S(e))for(var u=0;u<e.length;u++){var c=a+T(l=e[u],u);s+=N(l,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=N(l=l.value,t,o,c=a+T(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function C(e,t,r){if(null==e)return e;var n=[],o=0;return N(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null}},6952:(e,t,r)=>{r(955)}}]);