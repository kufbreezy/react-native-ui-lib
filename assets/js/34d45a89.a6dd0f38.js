/*! For license information please see 34d45a89.a6dd0f38.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[3763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5561:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7378),n(3905));const l={id:"TextField",title:"TextField",sidebar_label:"TextField"},o=void 0,i={unversionedId:"components/form/TextField",id:"components/form/TextField",isDocsHomePage:!1,title:"TextField",description:"An enhanced customizable TextField with validation support",source:"@site/../docs/components/form/TextField.md",sourceDirName:"components/form",slug:"/components/form/TextField",permalink:"/react-native-ui-lib/docs/components/form/TextField",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/TextField.md",tags:[],version:"current",frontMatter:{id:"TextField",title:"TextField",sidebar_label:"TextField"},sidebar:"tutorialSidebar",previous:{title:"Stepper",permalink:"/react-native-ui-lib/docs/components/form/Stepper"},next:{title:"WheelPicker",permalink:"/react-native-ui-lib/docs/components/form/WheelPicker"}},d=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"centered",id:"centered",children:[]},{value:"charCounterStyle",id:"charcounterstyle",children:[]},{value:"color",id:"color",children:[]},{value:"containerProps",id:"containerprops",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"enableErrors",id:"enableerrors",children:[]},{value:"fieldStyle",id:"fieldstyle",children:[]},{value:"floatOnFocus",id:"floatonfocus",children:[]},{value:"floatingPlaceholder",id:"floatingplaceholder",children:[]},{value:"floatingPlaceholderColor",id:"floatingplaceholdercolor",children:[]},{value:"floatingPlaceholderStyle",id:"floatingplaceholderstyle",children:[]},{value:"floatingPlaceholderStyle",id:"floatingplaceholderstyle-1",children:[]},{value:"formatter",id:"formatter",children:[]},{value:"hint",id:"hint",children:[]},{value:"label",id:"label",children:[]},{value:"labelColor",id:"labelcolor",children:[]},{value:"labelProps",id:"labelprops",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"leadingAccessory",id:"leadingaccessory",children:[]},{value:"onChangeValidity",id:"onchangevalidity",children:[]},{value:"onValidationFailed",id:"onvalidationfailed",children:[]},{value:"placeholder",id:"placeholder",children:[]},{value:"placeholderTextColor",id:"placeholdertextcolor",children:[]},{value:"preset",id:"preset",children:[]},{value:"readonly",id:"readonly",children:[]},{value:"recorderTag",id:"recordertag",children:[]},{value:"retainValidationSpace",id:"retainvalidationspace",children:[]},{value:"showCharCounter",id:"showcharcounter",children:[]},{value:"showMandatoryIndication",id:"showmandatoryindication",children:[]},{value:"trailingAccessory",id:"trailingaccessory",children:[]},{value:"useGestureHandlerInput",id:"usegesturehandlerinput",children:[]},{value:"validate",id:"validate",children:[]},{value:"validateOnBlur",id:"validateonblur",children:[]},{value:"validateOnChange",id:"validateonchange",children:[]},{value:"validateOnStart",id:"validateonstart",children:[]},{value:"validationMessage",id:"validationmessage",children:[]},{value:"validationMessagePosition",id:"validationmessageposition",children:[]},{value:"validationMessageStyle",id:"validationmessagestyle",children:[]}]}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An enhanced customizable TextField with validation support",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/incubatorScreens/IncubatorTextFieldScreen.tsx"},"(code example)")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This component extends ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/textinput"},"TextInput"))," props."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This component support ",(0,r.kt)("strong",{parentName:"p"},"margin, color, typography")," modifiers."))),(0,r.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,r.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Incubator.TextField/FloatingPlaceholder.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Incubator.TextField/Validation.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Incubator.TextField/ColorByState.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Incubator.TextField/CharCounter.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Incubator.TextField/Hint.gif?raw=true"})),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<TextField\n  placeholder={'Placeholder'}\n  floatingPlaceholder\n  onChangeText={onChangeText}\n  enableErrors\n  validate={['required', 'email', (value) => value.length > 6]}\n  validationMessage={['Field is required', 'Email is invalid', 'Password is too short']}\n  showCharCounter\n  maxLength={30}\n/>\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"centered"},"centered"),(0,r.kt)("p",null,"Whether to center the TextField - container and label",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"charcounterstyle"},"charCounterStyle"),(0,r.kt)("p",null,"Pass custom style to character counter text",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("p",null,"Input color",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ColorType ")," "),(0,r.kt)("h3",{id:"containerprops"},"containerProps"),(0,r.kt)("p",null,"Container props of the whole component",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<ViewProps, 'style'> ")," "),(0,r.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Container style of the whole component",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,r.kt)("h3",{id:"enableerrors"},"enableErrors"),(0,r.kt)("p",null,"Should support showing validation error message",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"fieldstyle"},"fieldStyle"),(0,r.kt)("p",null,"Internal style for the field container to style the field underline, outline and fill color",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ViewStyle | (context: FieldContextType, props) => ViewStyle ")," "),(0,r.kt)("h3",{id:"floatonfocus"},"floatOnFocus"),(0,r.kt)("p",null,"Should placeholder float on focus or when start typing",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"floatingplaceholder"},"floatingPlaceholder"),(0,r.kt)("p",null,"Pass to add floating placeholder support",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"floatingplaceholdercolor"},"floatingPlaceholderColor"),(0,r.kt)("p",null,"The floating placeholder color",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ColorType ")," "),(0,r.kt)("h3",{id:"floatingplaceholderstyle"},"floatingPlaceholderStyle"),(0,r.kt)("p",null,"Custom style for the floating placeholder",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,r.kt)("h3",{id:"floatingplaceholderstyle-1"},"floatingPlaceholderStyle"),(0,r.kt)("p",null,"Custom style to pass to the floating placeholder",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,r.kt)("h3",{id:"formatter"},"formatter"),(0,r.kt)("p",null,"Custom formatter for the input value (used only when input if not focused)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(value) => string | undefined ")," "),(0,r.kt)("h3",{id:"hint"},"hint"),(0,r.kt)("p",null,"A hint text to display when focusing the field",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"label"},"label"),(0,r.kt)("p",null,"Field label",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"labelcolor"},"labelColor"),(0,r.kt)("p",null,"Field label color. Either a string or color by state map ({default, focus, error, disabled, readonly})",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ColorType ")," "),(0,r.kt)("h3",{id:"labelprops"},"labelProps"),(0,r.kt)("p",null,"Pass extra props to the label Text element",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextProps ")," "),(0,r.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,r.kt)("p",null,"Custom style for the field label",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,r.kt)("h3",{id:"leadingaccessory"},"leadingAccessory"),(0,r.kt)("p",null,"Pass to render a leading element",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement ")," "),(0,r.kt)("h3",{id:"onchangevalidity"},"onChangeValidity"),(0,r.kt)("p",null,"Callback for when field validity has changed",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(isValid: boolean) => void ")," "),(0,r.kt)("h3",{id:"onvalidationfailed"},"onValidationFailed"),(0,r.kt)("p",null,"Callback for when field validated and failed",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(failedValidatorIndex: number) => void ")," "),(0,r.kt)("h3",{id:"placeholder"},"placeholder"),(0,r.kt)("p",null,"The placeholder for the field",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"placeholdertextcolor"},"placeholderTextColor"),(0,r.kt)("p",null,"Placeholder text color",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ColorType ")," "),(0,r.kt)("h3",{id:"preset"},"preset"),(0,r.kt)("p",null,"Predefined preset to use for styling the field",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'default' | null | string ")," "),(0,r.kt)("h3",{id:"readonly"},"readonly"),(0,r.kt)("p",null,"A UI preset for read only state",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"recordertag"},"recorderTag"),(0,r.kt)("p",null,"Recorder Tag",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'mask' | 'unmask' ")," "),(0,r.kt)("h3",{id:"retainvalidationspace"},"retainValidationSpace"),(0,r.kt)("p",null,"Keep the validation space even if there is no validation message",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"showcharcounter"},"showCharCounter"),(0,r.kt)("p",null,"Should show a character counter (works only with maxLength)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"showmandatoryindication"},"showMandatoryIndication"),(0,r.kt)("p",null,"Whether to show a mandatory field indication",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"trailingaccessory"},"trailingAccessory"),(0,r.kt)("p",null,"Pass to render a trailing element",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement ")," "),(0,r.kt)("h3",{id:"usegesturehandlerinput"},"useGestureHandlerInput"),(0,r.kt)("p",null,"Use react-native-gesture-handler instead of react-native for the base TextInput",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"validate"},"validate"),(0,r.kt)("p",null,"A single or multiple validator. Can be a string (required, email) or custom function.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Validator | Validator[] ")," "),(0,r.kt)("h3",{id:"validateonblur"},"validateOnBlur"),(0,r.kt)("p",null,"Should validate when losing focus of TextField",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"validateonchange"},"validateOnChange"),(0,r.kt)("p",null,"Should validate when the TextField value changes",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"validateonstart"},"validateOnStart"),(0,r.kt)("p",null,"Should validate when the TextField mounts",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"validationmessage"},"validationMessage"),(0,r.kt)("p",null,"The validation message to display when field is invalid (depends on validate)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string | string[] ")," "),(0,r.kt)("h3",{id:"validationmessageposition"},"validationMessagePosition"),(0,r.kt)("p",null,"The position of the validation message (top/bottom)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationMessagePosition ")," "),(0,r.kt)("h3",{id:"validationmessagestyle"},"validationMessageStyle"),(0,r.kt)("p",null,"Custom style for the validation message",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")))}s.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),h=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,k={};function v(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=y.prototype=new b;g.constructor=y,f(g,v.prototype),g.isPureReactComponent=!0;var N=Array.isArray,w=Object.prototype.hasOwnProperty,C={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var r,l={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,r)&&!x.hasOwnProperty(r)&&(l[r]=t[r]);var d=arguments.length-2;if(1===d)l.children=a;else if(1<d){for(var p=Array(d),s=0;s<d;s++)p[s]=arguments[s+2];l.children=p}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===l[r]&&(l[r]=d[r]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,r,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var d=!1;if(null===e)d=!0;else switch(i){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case a:d=!0}}if(d)return o=o(d=e),e=""===l?"."+O(d,0):l,N(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),F(o,t,r,"",(function(e){return e}))):null!=o&&(T(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||d&&d.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(d=0,l=""===l?".":l+":",N(e))for(var p=0;p<e.length;p++){var s=l+O(i=e[p],p);d+=F(i,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(i=e.next()).done;)d+=F(i=i.value,t,r,s=l+O(i,p++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function j(e,t,n){if(null==e)return e;var a=[],r=0;return F(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null}},7378:(e,t,n)=>{n(1535)}}]);