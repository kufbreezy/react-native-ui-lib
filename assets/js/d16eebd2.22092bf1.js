/*! For license information please see d16eebd2.22092bf1.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[1544],{5788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>g});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3892:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(5072),o=(n(6952),n(5788));const i={id:"SegmentedControl",title:"SegmentedControl",sidebar_label:"SegmentedControl"},l=void 0,a={unversionedId:"components/form/SegmentedControl",id:"components/form/SegmentedControl",isDocsHomePage:!1,title:"SegmentedControl",description:"SegmentedControl component for toggling two values or more",source:"@site/../docs/components/form/SegmentedControl.md",sourceDirName:"components/form",slug:"/components/form/SegmentedControl",permalink:"/react-native-ui-lib/docs/components/form/SegmentedControl",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/SegmentedControl.md",tags:[],version:"current",frontMatter:{id:"SegmentedControl",title:"SegmentedControl",sidebar_label:"SegmentedControl"},sidebar:"tutorialSidebar",previous:{title:"SectionsWheelPicker",permalink:"/react-native-ui-lib/docs/components/form/SectionsWheelPicker"},next:{title:"Stepper",permalink:"/react-native-ui-lib/docs/components/form/Stepper"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"activeBackgroundColor",id:"activebackgroundcolor",children:[]},{value:"activeColor",id:"activecolor",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"iconOnRight",id:"icononright",children:[]},{value:"initialIndex",id:"initialindex",children:[]},{value:"onChangeIndex",id:"onchangeindex",children:[]},{value:"outlineColor",id:"outlinecolor",children:[]},{value:"outlineWidth",id:"outlinewidth",children:[]},{value:"segmentLabelStyle",id:"segmentlabelstyle",children:[]},{value:"segments",id:"segments",children:[]},{value:"segmentsStyle",id:"segmentsstyle",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"throttleTime",id:"throttletime",children:[]}]}],u={toc:c},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"SegmentedControl component for toggling two values or more",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SegmentedControlScreen.tsx"},"(code example)")),(0,o.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<SegmentedControl segments={[{label: '1st'}, {label: '2nd'}]}/>\n")),(0,o.yg)("h2",{id:"api"},"API"),(0,o.yg)("h3",{id:"activebackgroundcolor"},"activeBackgroundColor"),(0,o.yg)("p",null,"The background color of the active segment",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"activecolor"},"activeColor"),(0,o.yg)("p",null,"The color of the active segment label",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,o.yg)("p",null,"The background color of the inactive segments",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"borderradius"},"borderRadius"),(0,o.yg)("p",null,"The segmentedControl borderRadius",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"containerstyle"},"containerStyle"),(0,o.yg)("p",null,"Additional spacing styles for the container",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.yg)("h3",{id:"icononright"},"iconOnRight"),(0,o.yg)("p",null,"Should the icon be on right of the label",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.yg)("h3",{id:"initialindex"},"initialIndex"),(0,o.yg)("p",null,"Initial index to be active",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"onchangeindex"},"onChangeIndex"),(0,o.yg)("p",null,"Callback for when index has change.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"(index: number) => void ")," "),(0,o.yg)("h3",{id:"outlinecolor"},"outlineColor"),(0,o.yg)("p",null,"The color of the active segment outline",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"outlinewidth"},"outlineWidth"),(0,o.yg)("p",null,"The width of the active segment outline",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"segmentlabelstyle"},"segmentLabelStyle"),(0,o.yg)("p",null,"Segment label style",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,o.yg)("h3",{id:"segments"},"segments"),(0,o.yg)("p",null,"Array on segments",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"SegmentedControlItemProps ")," "),(0,o.yg)("h3",{id:"segmentsstyle"},"segmentsStyle"),(0,o.yg)("p",null,"Additional style for the segments",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.yg)("h3",{id:"style"},"style"),(0,o.yg)("p",null,"Custom style to inner container",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.yg)("h3",{id:"testid"},"testID"),(0,o.yg)("p",null,"Component test id",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,o.yg)("h3",{id:"throttletime"},"throttleTime"),(0,o.yg)("p",null,"Trailing throttle time of changing index in ms.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")))}p.isMDXComponent=!0},955:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var S=v.prototype=new b;S.constructor=v,m(S,h.prototype),S.isPureReactComponent=!0;var C=Array.isArray,w=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,i={},l=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,o)&&!k.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:l,ref:a,props:i,_owner:N.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return l=l(c=e),e=""===i?"."+_(c,0):i,C(l)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),P(l,t,o,"",(function(e){return e}))):null!=l&&(x(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(j,"$&/")+"/")+e)),t.push(l)),1;if(c=0,i=""===i?".":i+":",C(e))for(var u=0;u<e.length;u++){var s=i+_(a=e[u],u);c+=P(a,t,o,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(a=e.next()).done;)c+=P(a=a.value,t,o,s=i+_(a,u++),l);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},E={transition:null}},6952:(e,t,n)=>{n(955)}}]);