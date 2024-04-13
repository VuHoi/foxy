"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2069],{9689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),l=s(8453);const i={title:"Backend Design",description:"Content Releases backend",tags:["content-releases","tech design"]},r=void 0,a={id:"docs/core/content-releases/backend",title:"Backend Design",description:"Content Releases backend",source:"@site/docs/docs/01-core/content-releases/01-backend.md",sourceDirName:"docs/01-core/content-releases",slug:"/docs/core/content-releases/backend",permalink:"/docs/core/content-releases/backend",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-releases/01-backend.md",tags:[{label:"content-releases",permalink:"/tags/content-releases"},{label:"tech design",permalink:"/tags/tech-design"}],version:"current",sidebarPosition:1,frontMatter:{title:"Backend Design",description:"Content Releases backend",tags:["content-releases","tech design"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/content-releases/intro"},next:{title:"Introduction",permalink:"/docs/core/content-releases/frontend/intro"}},c={},d=[{value:"Content-types",id:"content-types",level:2},{value:"Release",id:"release",level:3},{value:"Release Action",id:"release-action",level:3},{value:"Routes",id:"routes",level:2},{value:"Release",id:"release-1",level:3},{value:"Release Action",id:"release-action-1",level:3},{value:"Controllers",id:"controllers",level:2},{value:"Release",id:"release-2",level:3},{value:"Release Action",id:"release-action-2",level:3},{value:"Services",id:"services",level:2},{value:"Release",id:"release-3",level:3},{value:"Release Validation",id:"release-validation",level:3},{value:"Scheduling",id:"scheduling",level:3},{value:"Release status update triggers:",id:"release-status-update-triggers",level:3},{value:"Creating a release:",id:"creating-a-release",level:4},{value:"Adding an entry to a release:",id:"adding-an-entry-to-a-release",level:4},{value:"Removing an entry from a release:",id:"removing-an-entry-from-a-release",level:4},{value:"Updating a release:",id:"updating-a-release",level:4},{value:"Publishing a release:",id:"publishing-a-release",level:4},{value:"Listening to events on entries:",id:"listening-to-events-on-entries",level:4},{value:"Migrations",id:"migrations",level:2},{value:"<code>deleteActionsOnDisableDraftAndPublish</code>",id:"deleteactionsondisabledraftandpublish",level:3},{value:"<code>deleteActionsOnDeleteContentType</code>",id:"deleteactionsondeletecontenttype",level:3},{value:"Subscribing to Lifecycles Events",id:"subscribing-to-lifecycles-events",level:2}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"All backend code can be found in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" packages/core/content-releases/server\n"})}),"\n",(0,t.jsx)(n.h2,{id:"content-types",children:"Content-types"}),"\n",(0,t.jsx)(n.p,{children:"The content-releases plugin creates two hidden content-types."}),"\n",(0,t.jsx)(n.h3,{id:"release",children:"Release"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Release"})," content type stores all the information about a release and its associated Release Actions. It is saved in the database as ",(0,t.jsx)(n.code,{children:"strapi_releases"}),". The schema can be found in:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/content-types/release/schema.ts\n"})}),"\n",(0,t.jsx)(n.h3,{id:"release-action",children:"Release Action"}),"\n",(0,t.jsxs)(n.p,{children:["Th ",(0,t.jsx)(n.code,{children:"Release Action"})," content type is associated with any entry from any content-type that has draft and publish enabled. It is responsible for storing the action to perform for an associated entry. It is saved in the database as ",(0,t.jsx)(n.code,{children:"strapi_release_actions"}),". The schema can be found in:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/content-types/release-action/schema.ts\n"})}),"\n",(0,t.jsx)(n.h2,{id:"routes",children:"Routes"}),"\n",(0,t.jsx)(n.p,{children:"Release and Release Action routes are only accessible on the Admin API."}),"\n",(0,t.jsx)(n.h3,{id:"release-1",children:"Release"}),"\n",(0,t.jsx)(n.p,{children:"Release routes can be found in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/routes/release.ts\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get all releases"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/"})]}),"\n",(0,t.jsxs)(n.li,{children:["params:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  page: number;\n  pageSize: number;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get all releases with/without an entry"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/"})]}),"\n",(0,t.jsxs)(n.li,{children:["params:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  contentTypeUid: string;\n  entryId: number;\n  hasEntryAttached?: boolean;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Get a single release"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:id"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create a release"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"POST"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/"})]}),"\n",(0,t.jsxs)(n.li,{children:["body:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  name: string;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update a release"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"PUT"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:id"})]}),"\n",(0,t.jsxs)(n.li,{children:["body:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  name: string;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Delete a release"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"DELETE"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:id"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Publish a release"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"POST"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:id/publish"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"release-action-1",children:"Release Action"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a release action"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["method: ",(0,t.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:releaseId/actions"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"body:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  entry: {\n    id: number,\n    contentType: string,\n    locale: string,\n  }\n  type: 'publish' | 'unpublish'\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Get release actions from a release"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:releaseId/actions"})]}),"\n",(0,t.jsxs)(n.li,{children:["body:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  page: number;\n  pageSize: number;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Update a release action"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"PUT"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:releaseId/actions/:actionId"})]}),"\n",(0,t.jsxs)(n.li,{children:["body:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  type: 'publish' | 'unpublish';\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Delete a release action"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"DELETE"})]}),"\n",(0,t.jsxs)(n.li,{children:["endpoint: ",(0,t.jsx)(n.code,{children:"/content-releases/:releaseId/actions/:actionId"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"controllers",children:"Controllers"}),"\n",(0,t.jsx)(n.h3,{id:"release-2",children:"Release"}),"\n",(0,t.jsx)(n.p,{children:"Handles requests to interact with the Release content type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/controllers/release.ts\n"})}),"\n",(0,t.jsx)(n.h3,{id:"release-action-2",children:"Release Action"}),"\n",(0,t.jsx)(n.p,{children:"Handles requests to interact with the Release Action content type"}),"\n",(0,t.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,t.jsx)(n.h3,{id:"release-3",children:"Release"}),"\n",(0,t.jsx)(n.p,{children:"Interacts with the database for Release and Release Action CRUD operations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/services/release.ts\n"})}),"\n",(0,t.jsx)(n.h3,{id:"release-validation",children:"Release Validation"}),"\n",(0,t.jsx)(n.p,{children:"Exposes validation functions to run before performing operations on a Release"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/services/validation.ts\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scheduling",children:"Scheduling"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Scheduling is still under development, but you can try it ",(0,t.jsx)(n.strong,{children:"at your own risk"})," with future flags. The future flag to enable scheduling is ",(0,t.jsx)(n.code,{children:"contentReleasesScheduling"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Exposes methods to schedule release date for releases."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"packages/core/content-releases/server/src/services/scheduling.ts\n"})}),"\n",(0,t.jsx)(n.h3,{id:"release-status-update-triggers",children:"Release status update triggers:"}),"\n",(0,t.jsx)(n.p,{children:"Considering that retrieving the status of all entries in a release is a heavy operation, we don't fetch it every time a user wants to access a release. Instead, we store the status in a field within the Release Content Type, and we only update it when an action that changes the status is triggered. These actions include:"}),"\n",(0,t.jsx)(n.h4,{id:"creating-a-release",children:"Creating a release:"}),"\n",(0,t.jsx)(n.p,{children:'When creating a release, its status is automatically set to "Empty" as there are no entries initially.'}),"\n",(0,t.jsx)(n.h4,{id:"adding-an-entry-to-a-release",children:"Adding an entry to a release:"}),"\n",(0,t.jsx)(n.p,{children:'Upon adding an entry to a release, its status is recalculated to either "Ready" or "Blocked" based on the validity of the added entry.'}),"\n",(0,t.jsx)(n.h4,{id:"removing-an-entry-from-a-release",children:"Removing an entry from a release:"}),"\n",(0,t.jsx)(n.p,{children:'After removing an entry from a release, the status is recalculated to determine if the release is now "Ready", "Blocked", or "Empty".'}),"\n",(0,t.jsx)(n.h4,{id:"updating-a-release",children:"Updating a release:"}),"\n",(0,t.jsx)(n.p,{children:"Whenever a release is updated, its status is recalculated based on the validity of the actions performed during the update."}),"\n",(0,t.jsx)(n.h4,{id:"publishing-a-release",children:"Publishing a release:"}),"\n",(0,t.jsx)(n.p,{children:'During the publishing process, if successful, the status changes to "Done"; otherwise, it changes to "Failed".'}),"\n",(0,t.jsx)(n.h4,{id:"listening-to-events-on-entries",children:"Listening to events on entries:"}),"\n",(0,t.jsx)(n.p,{children:"When an entry is updated or deleted, the status of all releases containing that entry is recalculated to reflect any changes in validity."}),"\n",(0,t.jsx)(n.h2,{id:"migrations",children:"Migrations"}),"\n",(0,t.jsx)(n.p,{children:"We have two migrations that we run every time we sync the content types."}),"\n",(0,t.jsx)(n.h3,{id:"deleteactionsondisabledraftandpublish",children:(0,t.jsx)(n.code,{children:"deleteActionsOnDisableDraftAndPublish"})}),"\n",(0,t.jsx)(n.p,{children:"When a user disables Draft and Publish in one Content Type we make sure to remove all the release actions related to entries of that content type to avoid errors."}),"\n",(0,t.jsx)(n.h3,{id:"deleteactionsondeletecontenttype",children:(0,t.jsx)(n.code,{children:"deleteActionsOnDeleteContentType"})}),"\n",(0,t.jsx)(n.p,{children:"When a Content Type is deleted, delete all actions containing entries from that Content Type."}),"\n",(0,t.jsx)(n.h2,{id:"subscribing-to-lifecycles-events",children:"Subscribing to Lifecycles Events"}),"\n",(0,t.jsx)(n.p,{children:"When an entry is deleted delete all actions containing that entry."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);