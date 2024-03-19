/*! For license information please see c65290f2.668655ae.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7844],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},171:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(5072),a=(n(6952),n(5788));const o={sidebar_position:1,id:"Card",title:"Card",sidebar_label:"Card"},i=void 0,l={unversionedId:"components/layout/Card/Card",id:"components/layout/Card/Card",isDocsHomePage:!1,title:"Card",description:"Customizable card component that handles press events",source:"@site/../docs/components/layout/Card/Card.md",sourceDirName:"components/layout/Card",slug:"/components/layout/Card/Card",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layout/Card/Card.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Card",title:"Card",sidebar_label:"Card"},sidebar:"tutorialSidebar",previous:{title:"Step",permalink:"/react-native-ui-lib/docs/components/navigation/Wizard/Wizard.Step"},next:{title:"Image",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card.Image"}},s=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"blurOptions",id:"bluroptions",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"elevation",id:"elevation",children:[]},{value:"enableBlur",id:"enableblur",children:[]},{value:"enableShadow",id:"enableshadow",children:[]},{value:"height",id:"height",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"row",id:"row",children:[]},{value:"selected",id:"selected",children:[]},{value:"selectionOptions",id:"selectionoptions",children:[]},{value:"width",id:"width",children:[]}]}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Customizable card component that handles press events",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.tsx"},"(code example)")),(0,a.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"This component extends ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/components/basic/TouchableOpacity"},"TouchableOpacity"))," props."))),(0,a.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"This component support ",(0,a.yg)("strong",{parentName:"p"},"margin, padding")," modifiers."))),(0,a.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,a.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Card/Cards_01.png?raw=true"}),(0,a.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Card/Cards_02.png?raw=true"}),(0,a.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Card/Cards_03.png?raw=true"})),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<Card flex center onPress={() => console.log('pressed')}>\n <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>\n</Card>\n")),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("h3",{id:"bluroptions"},"blurOptions"),(0,a.yg)("p",null,"Blur options for blur effect according to @react-native-community/blur lib (make sure enableBlur is on)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"object ")," "),(0,a.yg)("h3",{id:"borderradius"},"borderRadius"),(0,a.yg)("p",null,"Card border radius (will be passed to inner Card.Image component)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,a.yg)("h3",{id:"containerstyle"},"containerStyle"),(0,a.yg)("p",null,"Additional styles for the card container",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.yg)("h3",{id:"elevation"},"elevation"),(0,a.yg)("h4",{id:"android-only"},"Android only"),(0,a.yg)("p",null,"Elevation value",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,a.yg)("h3",{id:"enableblur"},"enableBlur"),(0,a.yg)("h4",{id:"ios-only"},"iOS only"),(0,a.yg)("p",null,"Enable blur effect",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.yg)("h3",{id:"enableshadow"},"enableShadow"),(0,a.yg)("p",null,"Whether the card should have shadow or not",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.yg)("h3",{id:"height"},"height"),(0,a.yg)("p",null,"Card custom height",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"number | string ")," "),(0,a.yg)("h3",{id:"onpress"},"onPress"),(0,a.yg)("p",null,"Callback function for card press event",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"function ")," "),(0,a.yg)("h3",{id:"row"},"row"),(0,a.yg)("p",null,"Should inner card flow direction be horizontal",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.yg)("h3",{id:"selected"},"selected"),(0,a.yg)("p",null,"Adds visual indication that the card is selected",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.yg)("h3",{id:"selectionoptions"},"selectionOptions"),(0,a.yg)("p",null,"Custom options for styling the selection indication",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"CardSelectionOptions ")," "),(0,a.yg)("h3",{id:"width"},"width"),(0,a.yg)("p",null,"Card custom width",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"number | string ")))}d.isMDXComponent=!0},955:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),y=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var w=v.prototype=new b;w.constructor=v,g(w,h.prototype),w.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,O={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:O.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+k(s,0):o,C(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",C(e))for(var c=0;c<e.length;c++){var p=o+k(l=e[c],c);s+=P(l,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,p=o+k(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function E(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null}},6952:(e,t,n)=>{n(955)}}]);