/*! For license information please see c9a63a4e.62da550b.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8660:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7378),n(3905));const i={sidebar_position:4,sidebar_label:"Modifiers",title:"Modifiers"},o=void 0,l={unversionedId:"foundation/modifiers",id:"foundation/modifiers",isDocsHomePage:!1,title:"Modifiers",description:"As you have probably noticed already, we translate our style presets into modifiers.",source:"@site/../docs/foundation/modifiers.md",sourceDirName:"foundation",slug:"/foundation/modifiers",permalink:"/react-native-ui-lib/docs/foundation/modifiers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/modifiers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Modifiers",title:"Modifiers"},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/react-native-ui-lib/docs/foundation/assets"},next:{title:"ThemeManager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager"}},s=[{value:"Layout Modifiers",id:"layout-modifiers",children:[]},{value:"Spacing Modifiers",id:"spacing-modifiers",children:[]},{value:"Position Modifiers",id:"position-modifiers",children:[]},{value:"Styling Modifiers",id:"styling-modifiers",children:[]}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you have probably noticed already, we translate our style presets into modifiers.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Modifiers")," help you create a stunning UI easily and quickly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[!IMPORTANT]"),(0,a.kt)("br",{parentName:"p"}),"\n","Make sure to use modifiers only on UILib components, as some modifiers can cause issues on Android when used on React Native components directly."),(0,a.kt)("h2",{id:"layout-modifiers"},"Layout Modifiers"),(0,a.kt)("p",null,"Use our alignment properties to quickly position the content of your view without getting confused calculating all those flex rules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flex - apply ",(0,a.kt)("inlineCode",{parentName:"li"},"flex:1")," on a view "),(0,a.kt)("li",{parentName:"ul"},"flex-","[value]"," - When you want to control the flex value"),(0,a.kt)("li",{parentName:"ul"},"flexS - FlexShrink "),(0,a.kt)("li",{parentName:"ul"},"flexG - FlexGrow"),(0,a.kt)("li",{parentName:"ul"},"left"),(0,a.kt)("li",{parentName:"ul"},"top"),(0,a.kt)("li",{parentName:"ul"},"right"),(0,a.kt)("li",{parentName:"ul"},"bottom"),(0,a.kt)("li",{parentName:"ul"},"row - change direction to row (default is column)"),(0,a.kt)("li",{parentName:"ul"},"center"),(0,a.kt)("li",{parentName:"ul"},"centerH - center content horizontally"),(0,a.kt)("li",{parentName:"ul"},"centerV - center content vertically"),(0,a.kt)("li",{parentName:"ul"},"spread - spread content (similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"space-between"),")")),(0,a.kt)("p",null,"! Notice that the layout modifiers affect the View's children"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<View flex left>\n  <Button label="Button" />\n</View>\n\n<View flex right>\n  <Button label="Button" />\n</View>\n\n<View flex top>\n  <Button label="Button" />\n</View>\n\n<View flex bottom>\n  <Button label="Button" />\n</View>\n\n<View flex center>\n  <Button label="Button" />\n</View>\n')),(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798566/4de91efc-1b9f-11e7-9974-e06e3daa7c63.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798569/50dc99a4-1b9f-11e7-8231-fbcbb139a010.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798571/52766d08-1b9f-11e7-95a3-b2b262e81170.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798572/545b7abe-1b9f-11e7-9098-409ceee6ff22.png",width:"160"})," ",(0,a.kt)("img",{src:"https://cloud.githubusercontent.com/assets/1780255/24798575/55e3c4f4-1b9f-11e7-998d-7986a038abb6.png",width:"160"}),(0,a.kt)("h2",{id:"spacing-modifiers"},"Spacing Modifiers"),(0,a.kt)("p",null,"It's always important to use your margins and paddings correctly, and that's also easier to do with modifiers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"padding-","[value]"," - will add padding to all corners (e.g. padding-30 will add 30 pt of padding)"),(0,a.kt)("li",{parentName:"ul"},"paddingL-","[value]"," - Left padding"),(0,a.kt)("li",{parentName:"ul"},"paddingT-","[value]"," - Top padding"),(0,a.kt)("li",{parentName:"ul"},"paddingR-","[value]"," - Right padding"),(0,a.kt)("li",{parentName:"ul"},"paddingB-","[value]"," - Bottom padding"),(0,a.kt)("li",{parentName:"ul"},"paddingH-","[value]"," - Horizontal padding"),(0,a.kt)("li",{parentName:"ul"},"paddingV-","[value]"," - Vertical padding")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View paddingV-20 paddingH-30>...</View>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"margin-","[value]"),(0,a.kt)("li",{parentName:"ul"},"marginL-","[value]"," - Left margin"),(0,a.kt)("li",{parentName:"ul"},"marginT-","[value]"," - Top margin"),(0,a.kt)("li",{parentName:"ul"},"marginR-","[value]"," - Right margin"),(0,a.kt)("li",{parentName:"ul"},"marginB-","[value]"," - Bottom margin"),(0,a.kt)("li",{parentName:"ul"},"marginH-","[value]"," - Horizontal margin"),(0,a.kt)("li",{parentName:"ul"},"marginV-","[value]"," - Vertical margin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View marginT-5 marginB-10>...</View>\n")),(0,a.kt)("p",null,"! padding and margin modifiers can also take ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/style/spacings.ts"},"Spacing")," constants. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View margin-s5 padding-s2>...</View>\n")),(0,a.kt)("h2",{id:"position-modifiers"},"Position Modifiers"),(0,a.kt)("p",null,"Use the position modifiers to quickly set an absolute position for your views."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"abs")," will set the absolute position on your View"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absT"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absR"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"absB")," - set the absolute position and align to Left, Top, Right, Bottom accordingly"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absH")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"absV")," - position absolute and stretch horizontally or vertically"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"absF")," will set the absolute position and fill the parent view (similar to StyleSheet.absoluteFillObject)")),(0,a.kt)("h2",{id:"styling-modifiers"},"Styling Modifiers"),(0,a.kt)("p",null,"The last type of modifiers is for styling your components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[colorKey]"," - Controls the color of text components"),(0,a.kt)("li",{parentName:"ul"},"background-","[colorKey]"," (or bg-","[colorKey]",") - Background color ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text blue30>...</Text>\n<View bg-grey70>...</View>\n<TouchableOpacity bg-red30/>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[typographyKey]"," - Controls the typography of text components ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text text70>...</Text>\n<TextInput text80/>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"br","[borderRadiusKey]"," - Set the border radius for the view (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"br10"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"br20"),", .., ",(0,a.kt)("inlineCode",{parentName:"li"},"br60"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View br40>...</View>\n")),(0,a.kt)("p",null,"! all styling modifiers are based on our ",(0,a.kt)("a",{parentName:"p",href:"/docs/foundation/style"},(0,a.kt)("inlineCode",{parentName:"a"},"Colors")," & ",(0,a.kt)("inlineCode",{parentName:"a"},"Typography")," presets"),".",(0,a.kt)("br",{parentName:"p"}),"\n","You can load your own presets and use them as modifiers. "),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/usage"},"this example")," where we use most of these props."))}c.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function k(){}function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var v=h.prototype=new k;v.constructor=h,y(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,N=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,a)&&!j.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function V(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+V(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),C(o,t,a,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var p=i+V(l=e[u],u);s+=C(l,t,a,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)s+=C(l=l.value,t,a,p=i+V(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},B={transition:null}},7378:(e,t,n)=>{n(1535)}}]);