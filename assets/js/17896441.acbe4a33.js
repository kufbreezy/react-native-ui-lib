"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[6752],{7288:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(1504),l=a(4971),o=a(8072),c=a(4724),r=a(8710);const s=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(c.c,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(c.c,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var i=a(8264),d=a(3920),m=a(3100);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(c.c,{to:a,onClick:l},n.createElement(r.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,i.c)(),{pluginId:o}=(0,d.UF)({failfast:!0}),{savePreferredVersionName:c}=(0,m.iy)(o),{latestDocSuggestion:r,latestVersionSuggestion:s}=(0,d.i8)(o),u=r??(v=s).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.c)(m.Wu.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:s.label,to:u.path,onClick:()=>c(s.name)})))}const b=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(v,{versionMetadata:t}):n.createElement(n.Fragment,null)};var E=a(6068);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(r.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.Wu.common.lastUpdated},n.createElement(r.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(5072);const C="iconEdit_mS5F",k=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,N.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.c)(C,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.Wu.common.editThisPage},n.createElement(k,null),n.createElement(r.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var L=a(2515);const T={tags:"tags_NBRY",tag:"tag_F03v"};function y(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.c)(T.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:T.tag},n.createElement(L.c,{name:t,permalink:a}))}))))}const w={lastUpdated:"lastUpdated_mt2f"};function A(e){return n.createElement("div",{className:(0,l.c)(m.Wu.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y,e)))}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:o,formattedLastUpdatedAt:c}=e;return n.createElement("div",{className:(0,l.c)(m.Wu.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.c)("col",w.lastUpdated)},(a||o)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:c,lastUpdatedBy:o})))}function M(e){const{content:t}=e,{metadata:a}=t,{editUrl:o,lastUpdatedAt:c,formattedLastUpdatedAt:r,lastUpdatedBy:s,tags:i}=a,d=i.length>0,u=!!(o||c||s);return d||u?n.createElement("footer",{className:(0,l.c)(m.Wu.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(A,{tags:i}),u&&n.createElement(B,{editUrl:o,lastUpdatedAt:c,lastUpdatedBy:s,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}var S=a(828);const x={tocCollapsible:"tocCollapsible_aw-L",tocCollapsibleButton:"tocCollapsibleButton_zr6a",tocCollapsibleContent:"tocCollapsibleContent_0dom",tocCollapsibleExpanded:"tocCollapsibleExpanded_FSiv"};function W(e){let{toc:t,className:a}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.au)({initialState:!0});return n.createElement("div",{className:(0,l.c)(x.tocCollapsible,{[x.tocCollapsibleExpanded]:!o},a)},n.createElement("button",{type:"button",className:(0,l.c)("clean-btn",x.tocCollapsibleButton),onClick:c},n.createElement(r.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.Uv,{lazy:!0,className:x.tocCollapsibleContent,collapsed:o},n.createElement(S.m,{toc:t})))}var F=a(1620);const I={docItemContainer:"docItemContainer_oiyr",docItemCol:"docItemCol_zHA2",tocMobile:"tocMobile_Tx6Y"};function O(e){const{content:t,versionMetadata:a}=e,{metadata:c,frontMatter:r}=t,{image:i,keywords:d,hide_title:u,hide_table_of_contents:p}=r,{description:h,title:v}=c,g=!u&&void 0===t.contentTitle,f=(0,o.c)(),_=!p&&t.toc&&t.toc.length>0,N=_&&("desktop"===f||"ssr"===f);return n.createElement(n.Fragment,null,n.createElement(E.c,{title:v,description:h,keywords:d,image:i}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.c)("col",{[I.docItemCol]:!p})},n.createElement(b,{versionMetadata:a}),n.createElement("div",{className:I.docItemContainer},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.c)(m.Wu.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement(W,{toc:t.toc,className:(0,l.c)(m.Wu.docs.docTocMobile,I.tocMobile)}),n.createElement("div",{className:(0,l.c)(m.Wu.docs.docMarkdown,"markdown")},g&&n.createElement(F.a,null,v),n.createElement(t,null)),n.createElement(M,e)),n.createElement(s,{metadata:c}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(S.c,{toc:t.toc,className:m.Wu.docs.docTocDesktop}))))}},1620:(e,t,a)=>{a.d(t,{a:()=>d,c:()=>m});var n=a(5072),l=a(1504),o=a(4971),c=a(8710),r=a(3100);const s="anchorWithStickyNavbar_y2LR",i="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.c)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:d}}=(0,r.yw)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.c)("anchor",`anchor__${t}`,{[i]:d,[s]:!d}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,c.G)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},828:(e,t,a)=>{a.d(t,{m:()=>p,c:()=>h});var n=a(1504),l=a(4971),o=a(3100);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function r(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>c(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function s(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.yw)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,n.useRef)(void 0),a=s();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=r({anchorTopOffset:a.current}),c=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])},d="tableOfContents_vrFS",m="table-of-contents__link",u={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function p(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(p,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return i(u),n.createElement("div",{className:(0,l.c)(d,"thin-scrollbar")},n.createElement(p,{toc:t}))}},2515:(e,t,a)=>{a.d(t,{c:()=>i});var n=a(1504),l=a(4971),o=a(4724);const c="tag_WK-t",r="tagRegular_LXbV",s="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:a,count:i}=e;return n.createElement(o.c,{href:t,className:(0,l.c)(c,{[r]:!i,[s]:i})},a,i&&n.createElement("span",null,i))}}}]);