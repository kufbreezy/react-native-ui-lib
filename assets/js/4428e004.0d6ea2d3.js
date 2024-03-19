/*! For license information please see 4428e004.0d6ea2d3.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[3940],{5788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>y});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7100:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(5072),o=(n(6952),n(5788));const a={sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},i=void 0,l={unversionedId:"foundation/theme-manager",id:"foundation/theme-manager",isDocsHomePage:!1,title:"ThemeManager",description:"Use ThemeManager to set default global behavior for your app.",source:"@site/../docs/foundation/theme-manager.md",sourceDirName:"foundation",slug:"/foundation/theme-manager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/theme-manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},sidebar:"tutorialSidebar",previous:{title:"Modifiers",permalink:"/react-native-ui-lib/docs/foundation/modifiers"},next:{title:"Text",permalink:"/react-native-ui-lib/docs/components/basic/Text"}},u=[],c={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"ThemeManager")," to set default global behavior for your app."),(0,o.yg)("h4",{id:"setcomponenttheme"},"setComponentTheme"),(0,o.yg)("p",null,"Set default props for a component by passing an object or a callback (for dynamic, runtime default props)\nThe default value will be overridden if a prop is being passed to the component instance (see ",(0,o.yg)("inlineCode",{parentName:"p"},"setComponentForcedTheme")," for that)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, defaultPropsObject);")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, componentProps => newDefaultPropsObject);"))),(0,o.yg)("p",null,"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import {ThemeManager} from 'react-native-ui-lib';\n\nThemeManager.setComponentTheme('Text', {\n    text70: true, // will set the text70 typography modifier prop to be true by default\n    grey10: true, // will set the grey10 color modifier prop to be true by default \n});\n\n\nThemeManager.setComponentTheme('Button', (props, context) => {\n\n  return {\n    // this will apply a different backgroundColor\n    // depending on whether the Button has an outline or not\n    backgroundColor: props.outline ? 'black' : 'green',\n  };\n});\n")),(0,o.yg)("h4",{id:"setcomponentforcedtheme"},"setComponentForcedTheme"),(0,o.yg)("p",null,"Same as ",(0,o.yg)("inlineCode",{parentName:"p"},"setComponentTheme"),", but can't be overridden by props passed to the component. "),(0,o.yg)("p",null,"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"ThemeManager.setComponentForcedTheme('Card', (props, context) => {\n  return {\n    containerStyle: [styles.defaultContainerStyle, props.containerStyle]\n  };\n});\n")))}p.isMDXComponent=!0},955:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var j=v.prototype=new g;j.constructor=v,d(j,h.prototype),j.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,T={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:T.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===a?"."+x(u,0):a,w(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(u=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var s=a+x(l=e[c],c);u+=P(l,t,o,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(l=e.next()).done;)u+=P(l=l.value,t,o,s=a+x(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function M(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},$={transition:null}},6952:(e,t,n)=>{n(955)}}]);