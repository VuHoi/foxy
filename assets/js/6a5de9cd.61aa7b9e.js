"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3672],{668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=n(4848),r=n(8453),i=n(3935),a=n(9048);const c={title:"Introduction",tags:["content-releases"]},o="Content Releases",l={id:"docs/core/content-releases/intro",title:"Introduction",description:"A release contains various content entries, each capable of being assigned a specific action such as publish or unpublish. Within a release, entries may be in different locales or come from different content types. With a simple click of a button, a release can execute the designated action for each entry. Content Releases is an enterprise edition feature.",source:"@site/docs/docs/01-core/content-releases/00-intro.md",sourceDirName:"docs/01-core/content-releases",slug:"/docs/core/content-releases/intro",permalink:"/docs/core/content-releases/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-releases/00-intro.md",tags:[{label:"content-releases",permalink:"/tags/content-releases"}],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",tags:["content-releases"]},sidebar:"docs",previous:{title:"useDragAndDrop",permalink:"/docs/core/content-manager/hooks/use-drag-and-drop"},next:{title:"Backend Design",permalink:"/docs/core/content-releases/backend"}},d={},u=[{value:"Architecture",id:"architecture",level:3},{value:"Release&#39;s status",id:"releases-status",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"content-releases",children:"Content Releases"}),"\n",(0,s.jsx)(t.p,{children:"A release contains various content entries, each capable of being assigned a specific action such as publish or unpublish. Within a release, entries may be in different locales or come from different content types. With a simple click of a button, a release can execute the designated action for each entry. Content Releases is an enterprise edition feature."}),"\n",(0,s.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["As opposed to other EE features built in the ",(0,s.jsx)(t.a,{href:"/docs/core/admin/ee/intro",children:"EE folder"}),", Releases is built as a plugin. The plugin can be found in:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"packages/core/content-releases\n"})}),"\n","\n","\n",(0,s.jsx)(i.A,{items:(0,a.$S)().items}),"\n",(0,s.jsx)(t.h3,{id:"releases-status",children:"Release's status"}),"\n",(0,s.jsx)(t.p,{children:"Releases are assigned one of five statuses:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ready"}),": Indicates that the release is fully prepared for publishing, with no invalid entries present."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Blocked"}),": Release has at least one invalid entry preventing publishing."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Empty"}),": Release contains no entries and cannot be published."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Failed"}),": Indicates that the publishing attempt for the release has encountered an error with no changes since then."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Done"}),": Confirms that the release has been successfully published without encountering any errors."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These statuses are dynamically updated based on actions such as creation, addition/removal of entries, updates, and publishing attempts. They provide a concise overview of release readiness and validity, ensuring smooth operations and data integrity."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var s=n(8215),r=n(9048),i=n(4783),a=n(877),c=n(3230),o=n(5225);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.A,{as:"h2",className:(0,s.A)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),i&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",l.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);