/*! For license information please see 316d5c80.75f40dea.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[3424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7277:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7378),n(3905));const a={id:"NumberInput",title:"NumberInput",sidebar_label:"NumberInput"},o=void 0,l={unversionedId:"components/form/NumberInput",id:"components/form/NumberInput",isDocsHomePage:!1,title:"NumberInput",description:"Number Input to create an input with a formatted number",source:"@site/../docs/components/form/NumberInput.md",sourceDirName:"components/form",slug:"/components/form/NumberInput",permalink:"/react-native-ui-lib/docs/components/form/NumberInput",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/NumberInput.md",tags:[],version:"current",frontMatter:{id:"NumberInput",title:"NumberInput",sidebar_label:"NumberInput"},sidebar:"tutorialSidebar",previous:{title:"MaskedInput",permalink:"/react-native-ui-lib/docs/components/form/MaskedInput"},next:{title:"Picker",permalink:"/react-native-ui-lib/docs/components/form/Picker/Picker"}},u=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"containerStyle",id:"containerstyle",children:[]},{value:"contextMenuHidden",id:"contextmenuhidden",children:[]},{value:"fractionDigits",id:"fractiondigits",children:[]},{value:"initialNumber",id:"initialnumber",children:[]},{value:"leadingText",id:"leadingtext",children:[]},{value:"leadingTextStyle",id:"leadingtextstyle",children:[]},{value:"onChangeNumber",id:"onchangenumber",children:[]},{value:"textFieldProps",id:"textfieldprops",children:[]},{value:"trailingText",id:"trailingtext",children:[]},{value:"trailingTextStyle",id:"trailingtextstyle",children:[]}]}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Number Input to create an input with a formatted number",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/NumberInputScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This requires RN67 to work on Android."))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<NumberInput initialValue={1506} onChange={onChange} placeholder={'Price'}/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Container style of the whole component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"contextmenuhidden"},"contextMenuHidden"),(0,i.kt)("h4",{id:"requires-react-native-communityclipboard-to-be-installed"},"Requires @react-native-community/clipboard to be installed."),(0,i.kt)("p",null,"If true, context menu is hidden.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"fractiondigits"},"fractionDigits"),(0,i.kt)("p",null,"Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"initialnumber"},"initialNumber"),(0,i.kt)("p",null,"A valid number (in en locale, i.e. only digits and a decimal point).",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"leadingtext"},"leadingText"),(0,i.kt)("p",null,"A leading text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"leadingtextstyle"},"leadingTextStyle"),(0,i.kt)("p",null,"The style of the leading text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"onchangenumber"},"onChangeNumber"),(0,i.kt)("p",null,"Callback that is called when the number value has changed.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(data: NumberInputData) => void ")," "),(0,i.kt)("h3",{id:"textfieldprops"},"textFieldProps"),(0,i.kt)("p",null,"Most of TextField's props can be applied, except for ones that are passed directly via named props.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextFieldProps ")," "),(0,i.kt)("h3",{id:"trailingtext"},"trailingText"),(0,i.kt)("p",null,"A trailing text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"trailingtextstyle"},"trailingTextStyle"),(0,i.kt)("p",null,"The style of the trailing text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")))}p.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function k(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var g=v.prototype=new k;g.constructor=v,b(g,h.prototype),g.isPureReactComponent=!0;var N=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var i,a={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=t[i]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===a[i]&&(a[i]=u[i]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,i,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return o=o(u=e),e=""===a?"."+P(u,0):a,N(o)?(i="",null!=e&&(i=e.replace(_,"$&/")+"/"),I(o,t,i,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(u=0,a=""===a?".":a+":",N(e))for(var c=0;c<e.length;c++){var p=a+P(l=e[c],c);u+=I(l,t,i,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)u+=I(l=l.value,t,i,p=a+P(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},D={transition:null}},7378:(e,t,n)=>{n(1535)}}]);