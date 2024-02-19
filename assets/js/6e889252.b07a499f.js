/*! For license information please see 6e889252.b07a499f.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[9253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5637:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7378),n(3905));const a={id:"Modal.TopBar",title:"Modal.TopBar",sidebar_label:"TopBar"},l=void 0,i={unversionedId:"components/overlays/Modal/Modal.TopBar",id:"components/overlays/Modal/Modal.TopBar",isDocsHomePage:!1,title:"Modal.TopBar",description:"Modal.TopBar, inner component for configuring the Modal component's title, buttons and statusBar",source:"@site/../docs/components/overlays/Modal/Modal.TopBar.md",sourceDirName:"components/overlays/Modal",slug:"/components/overlays/Modal/Modal.TopBar",permalink:"/react-native-ui-lib/docs/components/overlays/Modal/Modal.TopBar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/overlays/Modal/Modal.TopBar.md",tags:[],version:"current",frontMatter:{id:"Modal.TopBar",title:"Modal.TopBar",sidebar_label:"TopBar"},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/react-native-ui-lib/docs/components/overlays/Modal/Modal"},next:{title:"Toast",permalink:"/react-native-ui-lib/docs/components/overlays/Toast"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"cancelButtonProps",id:"cancelbuttonprops",children:[]},{value:"cancelIcon",id:"cancelicon",children:[]},{value:"cancelLabel",id:"cancellabel",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"doneButtonProps",id:"donebuttonprops",children:[]},{value:"doneIcon",id:"doneicon",children:[]},{value:"doneLabel",id:"donelabel",children:[]},{value:"includeStatusBar",id:"includestatusbar",children:[]},{value:"leftButtons",id:"leftbuttons",children:[]},{value:"onCancel",id:"oncancel",children:[]},{value:"onDone",id:"ondone",children:[]},{value:"rightButtons",id:"rightbuttons",children:[]},{value:"subtitle",id:"subtitle",children:[]},{value:"subtitleStyle",id:"subtitlestyle",children:[]},{value:"title",id:"title",children:[]},{value:"titleStyle",id:"titlestyle",children:[]}]}],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modal.TopBar, inner component for configuring the Modal component's title, buttons and statusBar",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ModalScreen.tsx"},"(code example)")),(0,r.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,r.kt)("img",{style:{maxHeight:"420px"},src:"https://media.giphy.com/media/3oFzmfSX8KgvctI4Ks/giphy.gif"})),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<Modal.TopBar\n title={'Title'}\n onCancel={() => console.log('cancel')}\n onDone={() => console.log('done')}\n/>\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"cancelbuttonprops"},"cancelButtonProps"),(0,r.kt)("p",null,"Cancel action props",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,r.kt)("h3",{id:"cancelicon"},"cancelIcon"),(0,r.kt)("p",null,"Cancel action icon",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ImageSource ")," "),(0,r.kt)("h3",{id:"cancellabel"},"cancelLabel"),(0,r.kt)("p",null,"Cancel action label",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Style for the TopBar container",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,r.kt)("h3",{id:"donebuttonprops"},"doneButtonProps"),(0,r.kt)("p",null,"Done action props",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,r.kt)("h3",{id:"doneicon"},"doneIcon"),(0,r.kt)("p",null,"Done action icon",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ImageSource ")," "),(0,r.kt)("h3",{id:"donelabel"},"doneLabel"),(0,r.kt)("p",null,"Done action label",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"includestatusbar"},"includeStatusBar"),(0,r.kt)("p",null,"Whether to include status bar or not (height calculations)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,r.kt)("h3",{id:"leftbuttons"},"leftButtons"),(0,r.kt)("p",null,"Buttons to render on the left side of the top bar",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"topBarButtonProp | topBarButtonProp[] ")," "),(0,r.kt)("h3",{id:"oncancel"},"onCancel"),(0,r.kt)("p",null,"Cancel action callback",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(props?: any) => void ")," "),(0,r.kt)("h3",{id:"ondone"},"onDone"),(0,r.kt)("p",null,"Done action callback",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(props?: any) => void ")," "),(0,r.kt)("h3",{id:"rightbuttons"},"rightButtons"),(0,r.kt)("p",null,"Buttons to render on the right side of the top bar",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"topBarButtonProp | topBarButtonProp[] ")," "),(0,r.kt)("h3",{id:"subtitle"},"subtitle"),(0,r.kt)("p",null,"Subtitle to display below the top bar title",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"subtitlestyle"},"subtitleStyle"),(0,r.kt)("p",null,"Subtitle custom style",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"Title to display in the center of the top bar",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,r.kt)("h3",{id:"titlestyle"},"titleStyle"),(0,r.kt)("p",null,"Title custom style",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"TextStyle ")))}s.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function k(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var g=v.prototype=new k;g.constructor=v,y(g,h.prototype),g.isPureReactComponent=!0;var S=Array.isArray,B=Object.prototype.hasOwnProperty,N={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,o){var r,a={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)B.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:l,ref:i,props:a,_owner:N.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return l=l(c=e),e=""===a?"."+j(c,0):a,S(l)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),C(l,t,r,"",(function(e){return e}))):null!=l&&(M(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(T,"$&/")+"/")+e)),t.push(l)),1;if(c=0,a=""===a?".":a+":",S(e))for(var p=0;p<e.length;p++){var u=a+j(i=e[p],p);c+=C(i,t,r,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(i=e.next()).done;)c+=C(i=i.value,t,r,u=a+j(i,p++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var o=[],r=0;return C(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function _(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},D={transition:null}},7378:(e,t,n)=>{n(1535)}}]);