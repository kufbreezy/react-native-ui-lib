/*! For license information please see 411b5d95.9531df53.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7378),n(3905));const a={id:"Toast",title:"Incubator.Toast",sidebar_label:"Toast"},i=void 0,s={unversionedId:"components/incubator/Toast",id:"components/incubator/Toast",isDocsHomePage:!1,title:"Incubator.Toast",description:"A toast component for displaying non-disruptive messages to the user",source:"@site/../docs/components/incubator/Toast.md",sourceDirName:"components/incubator",slug:"/components/incubator/Toast",permalink:"/react-native-ui-lib/docs/components/incubator/Toast",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/incubator/Toast.md",tags:[],version:"current",frontMatter:{id:"Toast",title:"Incubator.Toast",sidebar_label:"Toast"},sidebar:"tutorialSidebar",previous:{title:"Slider",permalink:"/react-native-ui-lib/docs/components/incubator/Slider"},next:{title:"Dash",permalink:"/react-native-ui-lib/docs/components/infra/Dash"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"action",id:"action",children:[]},{value:"autoDismiss",id:"autodismiss",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"centerMessage",id:"centermessage",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"elevation",id:"elevation",children:[]},{value:"enableHapticFeedback",id:"enablehapticfeedback",children:[]},{value:"icon",id:"icon",children:[]},{value:"iconColor",id:"iconcolor",children:[]},{value:"message",id:"message",children:[]},{value:"messageProps",id:"messageprops",children:[]},{value:"messageStyle",id:"messagestyle",children:[]},{value:"onAnimationEnd",id:"onanimationend",children:[]},{value:"onDismiss",id:"ondismiss",children:[]},{value:"position",id:"position",children:[]},{value:"preset",id:"preset",children:[]},{value:"renderAttachment",id:"renderattachment",children:[]},{value:"showLoader",id:"showloader",children:[]},{value:"style",id:"style",children:[]},{value:"swipeable",id:"swipeable",children:[]},{value:"testID",id:"testid",children:[]},{value:"visible",id:"visible",children:[]},{value:"zIndex",id:"zindex",children:[]}]}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A toast component for displaying non-disruptive messages to the user",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/incubatorScreens/IncubatorToastScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<Toast\n  visible={isVisible}\n  position={'top'}\n  autoDismiss={5000}\n  onDismiss={onDismiss}\n>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"action"},"action"),(0,o.kt)("p",null,"A single action for the user (showLoader will override this)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,o.kt)("h3",{id:"autodismiss"},"autoDismiss"),(0,o.kt)("p",null,"Time of milliseconds to automatically invoke the onDismiss callback",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,o.kt)("p",null,"The toast background color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"centermessage"},"centerMessage"),(0,o.kt)("p",null,"Should message be centered in the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Toast container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"elevation"},"elevation"),(0,o.kt)("h4",{id:"android-only"},"Android only"),(0,o.kt)("p",null,"Custom elevation",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"enablehapticfeedback"},"enableHapticFeedback"),(0,o.kt)("p",null,"Whether to trigger an haptic feedback once the toast is shown (requires react-native-haptic-feedback dependency)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"icon"},"icon"),(0,o.kt)("p",null,"A custom icon to render on the left side of the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,o.kt)("h3",{id:"iconcolor"},"iconColor"),(0,o.kt)("p",null,"The icon color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"Toast message",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"messageprops"},"messageProps"),(0,o.kt)("p",null,"Toast message props",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"TextProps ")," "),(0,o.kt)("h3",{id:"messagestyle"},"messageStyle"),(0,o.kt)("p",null,"Toast message style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"StyleProp<TextStyle> ")," "),(0,o.kt)("h3",{id:"onanimationend"},"onAnimationEnd"),(0,o.kt)("p",null,"Callback for end of toast animation",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(visible?: boolean) => void ")," "),(0,o.kt)("h3",{id:"ondismiss"},"onDismiss"),(0,o.kt)("p",null,"Callback for the toast dismissal",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("p",null,"The position of the toast. 'top' or 'bottom'.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"'top' | 'bottom' ")," "),(0,o.kt)("h3",{id:"preset"},"preset"),(0,o.kt)("p",null,"Pass to have preset UI",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ToastPreset ('success' | 'failure' | 'general' | 'offline') ")," "),(0,o.kt)("h3",{id:"renderattachment"},"renderAttachment"),(0,o.kt)("p",null,"Render a custom view that will appear permanently above or below a Toast, depends on the Toast's position and animate with it when the Toast is made visible or dismissed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => JSX.Element | undefined ")," "),(0,o.kt)("h3",{id:"showloader"},"showLoader"),(0,o.kt)("p",null,"Whether to show a loader",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"Toast style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"swipeable"},"swipeable"),(0,o.kt)("p",null,"Whether to support dismissing the toast with a swipe gesture. Requires to pass onDismiss method to control visibility",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"The component test id",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"visible"},"visible"),(0,o.kt)("p",null,"Whether to show or hide the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"zindex"},"zIndex"),(0,o.kt)("p",null,"Custom zIndex for toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}u.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,h={};function k(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var g=v.prototype=new y;g.constructor=v,b(g,k.prototype),g.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,o)&&!T.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];a.children=p}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:S.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===a?"."+P(l,0):a,w(i)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),_(i,t,o,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",w(e))for(var p=0;p<e.length;p++){var c=a+P(s=e[p],p);l+=_(s,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(s=e.next()).done;)l+=_(s=s.value,t,o,c=a+P(s,p++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function x(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null}},7378:(e,t,n)=>{n(1535)}}]);