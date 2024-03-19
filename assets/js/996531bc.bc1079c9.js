/*! For license information please see 996531bc.bc1079c9.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[2460],{5788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>y});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6940:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(5072),o=(n(6952),n(5788));const a={id:"ExpandableSection",title:"ExpandableSection",sidebar_label:"ExpandableSection"},i=void 0,l={unversionedId:"components/infra/ExpandableSection",id:"components/infra/ExpandableSection",isDocsHomePage:!1,title:"ExpandableSection",description:"Component to render expanded section below or above the SectionHeader",source:"@site/../docs/components/infra/ExpandableSection.md",sourceDirName:"components/infra",slug:"/components/infra/ExpandableSection",permalink:"/react-native-ui-lib/docs/components/infra/ExpandableSection",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/infra/ExpandableSection.md",tags:[],version:"current",frontMatter:{id:"ExpandableSection",title:"ExpandableSection",sidebar_label:"ExpandableSection"},sidebar:"tutorialSidebar",previous:{title:"Dash",permalink:"/react-native-ui-lib/docs/components/infra/Dash"},next:{title:"Fader",permalink:"/react-native-ui-lib/docs/components/infra/Fader"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"children",id:"children",children:[]},{value:"expanded",id:"expanded",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"sectionHeader",id:"sectionheader",children:[]},{value:"testID",id:"testid",children:[]},{value:"top",id:"top",children:[]}]}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Component to render expanded section below or above the SectionHeader",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ExpandableSectionScreen.tsx"},"(code example)")),(0,o.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ExpandableSection/ExpandableSection.gif?raw=true"})),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<ExpandableSection\n top\n expanded={false}\n sectionHeader={<Text grey10 text60>The section header</Text>}\n onPress={() => console.log('pressed')}\n>\n")),(0,o.yg)("h2",{id:"api"},"API"),(0,o.yg)("h3",{id:"children"},"children"),(0,o.yg)("p",null,"The expandable's children",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"React.ReactNode ")," "),(0,o.yg)("h3",{id:"expanded"},"expanded"),(0,o.yg)("p",null,"Should the ExpandableSection be expanded",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.yg)("h3",{id:"onpress"},"onPress"),(0,o.yg)("p",null,"Called when pressing the header of the ExpandableSection",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"() => void ")," "),(0,o.yg)("h3",{id:"sectionheader"},"sectionHeader"),(0,o.yg)("p",null,"Header element",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,o.yg)("h3",{id:"testid"},"testID"),(0,o.yg)("p",null,"testing identifier",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"top"},"top"),(0,o.yg)("p",null,"Should it open above the 'sectionHeader'",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},955:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var x=v.prototype=new g;x.constructor=v,b(x,h.prototype),x.isPureReactComponent=!0;var S=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];a.children=p}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var k=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+P(c,0):a,S(i)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),N(i,t,o,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",S(e))for(var p=0;p<e.length;p++){var s=a+P(l=e[p],p);c+=N(l,t,o,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(l=e.next()).done;)c+=N(l=l.value,t,o,s=a+P(l,p++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},$={transition:null}},6952:(e,t,n)=>{n(955)}}]);