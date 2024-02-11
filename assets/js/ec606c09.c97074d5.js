/*! For license information please see ec606c09.c97074d5.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3896:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7378),r(3905));const o={id:"FeatureHighlight",title:"FeatureHighlight",sidebar_label:"FeatureHighlight"},a=void 0,l={unversionedId:"components/overlays/FeatureHighlight",id:"components/overlays/FeatureHighlight",isDocsHomePage:!1,title:"FeatureHighlight",description:"Component for feature discovery",source:"@site/../docs/components/overlays/FeatureHighlight.md",sourceDirName:"components/overlays",slug:"/components/overlays/FeatureHighlight",permalink:"/react-native-ui-lib/docs/components/overlays/FeatureHighlight",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/overlays/FeatureHighlight.md",tags:[],version:"current",frontMatter:{id:"FeatureHighlight",title:"FeatureHighlight",sidebar_label:"FeatureHighlight"},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/react-native-ui-lib/docs/components/overlays/Dialog/Dialog"},next:{title:"FloatingButton",permalink:"/react-native-ui-lib/docs/components/overlays/FloatingButton"}},s=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"borderColor",id:"bordercolor",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"borderWidth",id:"borderwidth",children:[]},{value:"confirmButtonProps",id:"confirmbuttonprops",children:[]},{value:"getTarget",id:"gettarget",children:[]},{value:"highlightFrame",id:"highlightframe",children:[]},{value:"innerPadding",id:"innerpadding",children:[]},{value:"message",id:"message",children:[]},{value:"messageNumberOfLines",id:"messagenumberoflines",children:[]},{value:"messageStyle",id:"messagestyle",children:[]},{value:"minimumRectSize",id:"minimumrectsize",children:[]},{value:"onBackgroundPress",id:"onbackgroundpress",children:[]},{value:"overlayColor",id:"overlaycolor",children:[]},{value:"pageControlProps",id:"pagecontrolprops",children:[]},{value:"testID",id:"testid",children:[]},{value:"textColor",id:"textcolor",children:[]},{value:"title",id:"title",children:[]},{value:"titleNumberOfLines",id:"titlenumberoflines",children:[]},{value:"titleStyle",id:"titlestyle",children:[]},{value:"visible",id:"visible",children:[]}]}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Component for feature discovery",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FeatureHighlightScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"FeatureHighlight component must be a direct child of the root view returned in render(),If the element to be highlighted doesn't have a style attribute add 'style={{opacity: 1}}' so the Android OS can detect it,FeatureHighlight uses a native library. You MUST add and link the native library to both iOS and Android projects. For instruction please see: ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking-libraries-ios.html"},"https://facebook.github.io/react-native/docs/linking-libraries-ios.html")))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/FeatureHighlight/FeatureHighlight.gif?raw=true"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<FeatureHighlight\n visible={isVisible}\n title={'Title'}\n message={'Message goes here'}\n getTarget={targets[currentTarget]}\n confirmButtonProps={{label: 'Got It', onPress: () => console.log('confirmed')}}\n onBackgroundPress={() => console.log('background pressed')}\n/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"bordercolor"},"borderColor"),(0,i.kt)("p",null,"Color of the border around the highlighted element",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"borderradius"},"borderRadius"),(0,i.kt)("p",null,"Border radius for the border corners around the highlighted element",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"borderwidth"},"borderWidth"),(0,i.kt)("p",null,"Width of the border around the highlighted element",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"confirmbuttonprops"},"confirmButtonProps"),(0,i.kt)("p",null,"Props that will be passed to the dismiss button",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,i.kt)("h3",{id:"gettarget"},"getTarget"),(0,i.kt)("p",null,"Callback that extract the ref of the element to be highlighted",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => any ")," "),(0,i.kt)("h3",{id:"highlightframe"},"highlightFrame"),(0,i.kt)("p",null,"Frame of the area to highlight {x, y, width, height}",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"HighlightFrame ")," "),(0,i.kt)("h3",{id:"innerpadding"},"innerPadding"),(0,i.kt)("p",null,"The padding of the highlight frame around the highlighted element's frame (only when passing ref in 'getTarget')",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"Message to be displayed",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"messagenumberoflines"},"messageNumberOfLines"),(0,i.kt)("p",null,"Message's max number of lines",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"messagestyle"},"messageStyle"),(0,i.kt)("p",null,"Message text style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"minimumrectsize"},"minimumRectSize"),(0,i.kt)("h4",{id:"android-api-21-and-only-when-passing-a-ref-in-gettarget"},"Android API 21+, and only when passing a ref in 'getTarget'"),(0,i.kt)("p",null,"The minimum size of the highlighted component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"RectSize ")," "),(0,i.kt)("h3",{id:"onbackgroundpress"},"onBackgroundPress"),(0,i.kt)("p",null,"Called the background pressed",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedbackProps['onPress'] ")," "),(0,i.kt)("h3",{id:"overlaycolor"},"overlayColor"),(0,i.kt)("p",null,"Color of the content's background (usually includes alpha for transparency)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"pagecontrolprops"},"pageControlProps"),(0,i.kt)("p",null,"PageControl component's props",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"PageControlProps ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The test id for e2e tests",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"textcolor"},"textColor"),(0,i.kt)("p",null,"Color of the content's text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"title"},"title"),(0,i.kt)("p",null,"Title of the content to be displayed",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"titlenumberoflines"},"titleNumberOfLines"),(0,i.kt)("p",null,"Title's max number of lines",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"titlestyle"},"titleStyle"),(0,i.kt)("p",null,"Title text style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"visible"},"visible"),(0,i.kt)("p",null,"Determines if to present the feature highlight component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},1535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,f={};function b(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}function k(){}function y(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=y.prototype=new k;v.constructor=y,g(v,b.prototype),v.isPureReactComponent=!0;var N=Array.isArray,w=Object.prototype.hasOwnProperty,C={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var i,o={},a=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];o.children=p}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:r,type:e,key:a,ref:l,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return a=a(s=e),e=""===o?"."+j(s,0):o,N(a)?(i="",null!=e&&(i=e.replace(x,"$&/")+"/"),F(a,t,i,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",N(e))for(var p=0;p<e.length;p++){var u=o+j(l=e[p],p);s+=F(l,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)s+=F(l=l.value,t,i,u=o+j(l,p++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,r){if(null==e)return e;var n=[],i=0;return F(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var H={current:null},D={transition:null}},7378:(e,t,r)=>{r(1535)}}]);