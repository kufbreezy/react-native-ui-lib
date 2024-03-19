/*! For license information please see 832aba72.0331bde5.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[8184],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=o,d=s["".concat(p,".").concat(y)]||s[y]||f[y]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5096:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(5072),o=(r(6952),r(5788));const a={id:"Stepper",title:"Stepper",sidebar_label:"Stepper"},i=void 0,l={unversionedId:"components/form/Stepper",id:"components/form/Stepper",isDocsHomePage:!1,title:"Stepper",description:"A stepper component",source:"@site/../docs/components/form/Stepper.md",sourceDirName:"components/form",slug:"/components/form/Stepper",permalink:"/react-native-ui-lib/docs/components/form/Stepper",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/Stepper.md",tags:[],version:"current",frontMatter:{id:"Stepper",title:"Stepper",sidebar_label:"Stepper"},sidebar:"tutorialSidebar",previous:{title:"SegmentedControl",permalink:"/react-native-ui-lib/docs/components/form/SegmentedControl"},next:{title:"TextField",permalink:"/react-native-ui-lib/docs/components/form/TextField"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"accessibilityLabel",id:"accessibilitylabel",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"maxValue",id:"maxvalue",children:[]},{value:"minValue",id:"minvalue",children:[]},{value:"onValueChange",id:"onvaluechange",children:[]},{value:"small",id:"small",children:[]},{value:"step",id:"step",children:[]},{value:"testID",id:"testid",children:[]},{value:"value",id:"value",children:[]}]}],u={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"A stepper component",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/StepperScreen.tsx"},"(code example)")),(0,o.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<Stepper/>\n")),(0,o.yg)("h2",{id:"api"},"API"),(0,o.yg)("h3",{id:"accessibilitylabel"},"accessibilityLabel"),(0,o.yg)("p",null,"Component accessibility label",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"disabled"},"disabled"),(0,o.yg)("p",null,"Disables interaction with the stepper",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.yg)("h3",{id:"maxvalue"},"maxValue"),(0,o.yg)("p",null,"Maximum value",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"minvalue"},"minValue"),(0,o.yg)("p",null,"Minimum value",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"onvaluechange"},"onValueChange"),(0,o.yg)("p",null,"Value change callback function",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"(value: number, testID?: string) => void ")," "),(0,o.yg)("h3",{id:"small"},"small"),(0,o.yg)("p",null,"Renders a small sized Stepper",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.yg)("h3",{id:"step"},"step"),(0,o.yg)("p",null,"The step to increase and decrease by (default is 1)",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"testid"},"testID"),(0,o.yg)("p",null,"Test id for component",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"value"},"value"),(0,o.yg)("p",null,"Stepper value",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")))}s.isMDXComponent=!0},955:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),p=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function v(){}function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var S=h.prototype=new v;S.constructor=h,m(S,g.prototype),S.isPureReactComponent=!0;var w=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){for(var u=Array(p),c=0;c<p;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in p=e.defaultProps)void 0===a[o]&&(a[o]=p[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case r:case n:p=!0}}if(p)return i=i(p=e),e=""===a?"."+C(p,0):a,w(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(p=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+C(l=e[u],u);p+=P(l,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)p+=P(l=l.value,t,o,c=a+C(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return p}function D(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},$={transition:null}},6952:(e,t,r)=>{r(955)}}]);