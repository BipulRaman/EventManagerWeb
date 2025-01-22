(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7220],{76047:(e,t,a)=>{Promise.resolve().then(a.bind(a,7259))},78562:(e,t,a)=>{"use strict";a.d(t,{A:()=>y});var i=a(12115),r=a(43463),n=a(7123),o=a(17280),s=a(89142),l=a(35761),d=a(98330),c=a(10314),u=a(3255),p=a(81045),m=a(37157);function h(e){return(0,m.Ay)("MuiPaper",e)}(0,p.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=a(95155);let f=e=>{let{square:t,elevation:a,variant:i,classes:r}=e;return(0,n.A)({root:["root",i,!t&&"rounded","elevation"===i&&"elevation".concat(a)]},h,r)},v=(0,s.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t["elevation".concat(a.elevation)]]}})((0,d.A)(e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:e=>{let{ownerState:t}=e;return!t.square},style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:"1px solid ".concat((t.vars||t).palette.divider)}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}})),y=i.forwardRef(function(e,t){var a;let i=(0,c.b)({props:e,name:"MuiPaper"}),n=(0,l.A)(),{className:s,component:d="div",elevation:p=1,square:m=!1,variant:h="elevation",...y}=i,b={...i,component:d,elevation:p,square:m,variant:h},x=f(b);return(0,g.jsx)(v,{as:d,ownerState:b,className:(0,r.A)(x.root,s),ref:t,...y,style:{..."elevation"===h&&{"--Paper-shadow":(n.vars||n).shadows[p],...n.vars&&{"--Paper-overlay":null===(a=n.vars.overlays)||void 0===a?void 0:a[p]},...!n.vars&&"dark"===n.palette.mode&&{"--Paper-overlay":"linear-gradient(".concat((0,o.X4)("#fff",(0,u.A)(p)),", ").concat((0,o.X4)("#fff",(0,u.A)(p)),")")}},...y.style}})})},35761:(e,t,a)=>{"use strict";a.d(t,{A:()=>o}),a(12115);var i=a(66307),r=a(92739),n=a(26366);function o(){let e=(0,i.A)(r.A);return e[n.A]||e}},45353:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return r}});let i=a(12115);function r(e,t){let a=(0,i.useRef)(()=>{}),r=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(a.current(),r.current()):(a.current=n(e,i),r.current=n(t,i))}:e||t,[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54041:(e,t,a)=>{"use strict";a.d(t,{I:()=>c});var i=a(95155);a(12115);var r=a(59620),n=a(23686),o=a(9561),s=a(48173),l=a.n(s);let d={padding:"1rem",paddingBottom:"0.5rem"},c=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r._,{children:[(0,i.jsxs)("div",{style:d,children:[(0,i.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:"Welcome to the Samagam Portal."}),(0,i.jsx)(o.A,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,children:"Secure and Privacy focused event management portal. Built with love by Navodayans for Navodayans from Bihar."}),(0,i.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:"How to use the portal:"}),(0,i.jsx)(o.A,{component:"div",variant:"body2",color:"textSecondary",children:(0,i.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,i.jsx)("li",{children:"Menu items are available at the bottom of the page in mobile view and on left side in Desktop view."}),(0,i.jsx)("li",{children:"Use the tabs on the page to navigate to different sections."})]})})]}),(0,i.jsxs)("div",{style:d,children:[(0,i.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:"Features available on this portal:"}),(0,i.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,i.jsxs)("li",{children:[(0,i.jsxs)(o.A,{variant:"body1",children:[(0,i.jsx)("b",{children:"Profile:"})," [",(0,i.jsx)(l(),{href:n.ts.Profile,children:"View"}),"] | [",(0,i.jsx)(l(),{href:n.ts.Profile_Edit,children:"Update"}),"]"]}),(0,i.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Manage your profile and keep your information private. Your profile information will be used to create your digital identity badge."})]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)(o.A,{variant:"body1",children:[(0,i.jsx)("b",{children:"Expenses:"})," [",(0,i.jsx)(l(),{href:n.ts.Expense,children:"View Expenses"}),"] | [",(0,i.jsx)(l(),{href:n.ts.Expense_Add,children:"Add Expense"}),"]"]}),(0,i.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Manage and View Expenses."})]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)(o.A,{variant:"body1",children:[(0,i.jsx)("b",{children:"Check-In:"})," [",(0,i.jsx)(l(),{href:n.ts.CheckIn,children:"Attendee CheckIn"}),"]"]}),(0,i.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Checkin to the event."})]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)(o.A,{variant:"body1",children:[(0,i.jsx)("b",{children:"Security:"})," [",(0,i.jsx)(l(),{href:n.ts.Security,children:"Offline OTP"}),"] | [",(0,i.jsx)(l(),{href:n.ts.Security_Reset,children:"Reset Authentication"}),"]"]}),(0,i.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Manage your security settings and reset your authentication."})]})]})]})]})})},7259:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var i=a(95155),r=a(34039),n=a(54041);let o=()=>(0,i.jsx)(r.f,{children:(0,i.jsx)(n.I,{})})},59620:(e,t,a)=>{"use strict";a.d(t,{_:()=>o});var i=a(95155);a(12115);var r=a(78562);let n={padding:15,marginBottom:15},o=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.A,{component:"div",elevation:3,style:n,children:(0,i.jsx)("div",{style:e.style,children:e.children})})})},34039:(e,t,a)=>{"use strict";a.d(t,{f:()=>o});var i=a(95155),r=a(12115),n=a(76046);let o=e=>{let t=(0,n.usePathname)();return r.useEffect(()=>{window.scrollTo(0,0)},[t]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{paddingTop:"15px",width:"100%"},children:e.children})})}},23686:(e,t,a)=>{"use strict";a.d(t,{$q:()=>u,Ey:()=>c,SB:()=>r,Sk:()=>p,fM:()=>d,jW:()=>l,qN:()=>s,rS:()=>o,ts:()=>i,we:()=>m,yj:()=>n});var i=function(e){return e.Root="/",e.About="/about",e.Newsfeed="/newsfeed",e.Newsfeed_Manage="/newsfeed/manage",e.Newsfeed_Create="/newsfeed/create",e.Profile="/profile",e.Profile_Edit="/profile/edit",e.NearBy="/nearby",e.NearBy_Business="/nearby/business",e.NearBy_Medico="/nearby/medico",e.Business="/business",e.Business_Add="/business/add",e.Business_Edit="/business/edit",e.Expense="/expense",e.Expense_Add="/expense/add",e.CheckIn="/checkin",e.Notifications="/notifications",e.Events="/events",e.Mentorship="/mentorship",e.Poll="/poll",e.Identity="/identity",e.Identity_Verify="/identity/verify",e.Security="/security",e.Security_Reset="/security/reset",e.NotFound="/404",e.Expired="/expired",e.Privacy="/privacy",e.Disclaimer="/disclaimer",e.License="/license",e.Register="/register",e.Login="/login",e.Logout="/logout",e.Default="*",e}({});let r=[{label:"Home",path:"/"}],n=[{label:"Profile",path:"/profile"},{label:"Update",path:"/profile/edit"}],o=[{label:"My Business",path:"/business"},{label:"Add",path:"/business/add"}],s=[{label:"Alumni",path:"/nearby"},{label:"Business",path:"/nearby/business"},{label:"Medico",path:"/nearby/medico"}],l=[{label:"Identity",path:"/identity"},{label:"Verify",path:"/identity/verify"}],d=[{label:"Security",path:"/security"},{label:"Reset Auth",path:"/security/reset"}],c=[{label:"Feed",path:"/newsfeed"},{label:"Manage",path:"/newsfeed/manage"},{label:"Create",path:"/newsfeed/create"}],u=[{label:"Expense",path:"/expense"},{label:"Add",path:"/expense/add"}],p=[{label:"Check-In",path:"/checkin"}],m=[{title:"Home | Samagam",route:"/",description:"The home page of Samagam."},{title:"Newsfeed | Samagam",route:"/newsfeed",description:"The newsfeed page of Samagam."},{title:"Profile | Samagam",route:"/profile",description:"The profile page of Samagam."},{title:"Profile Edit | Samagam",route:"/profile/edit",description:"The profile edit page of Samagam."},{title:"NearBy Alumni | Samagam",route:"/nearby",description:"The nearby page of Samagam."},{title:"NearBy Business | Samagam",route:"/nearby/business",description:"The nearby business page of Samagam."},{title:"NearBy Medico | Samagam",route:"/nearby/medico",description:"The nearby medico page of Samagam."},{title:"My Business | Samagam",route:"/business",description:"The business page of Samagam."},{title:"Business Add | Samagam",route:"/business/add",description:"The business add page of Samagam."},{title:"Business Edit | Samagam",route:"/business/edit",description:"The business edit page of Samagam."},{title:"Notifications | Samagam",route:"/notifications",description:"The notifications page of Samagam."},{title:"Events | Samagam",route:"/events",description:"The events page of Samagam."},{title:"Expense | Samagam",route:"/expense",description:"The expense page of Samagam."},{title:"Expense Add | Samagam",route:"/expense/add",description:"The expense add page of Samagam."},{title:"Check-In | Samagam",route:"/checkin",description:"The check-in page of Samagam."},{title:"Mentorship | Samagam",route:"/mentorship",description:"The mentorship page of Samagam."},{title:"Poll | Samagam",route:"/poll",description:"The poll page of Samagam."},{title:"Identity | Samagam",route:"/identity",description:"The identity page of Samagam."},{title:"Security | Samagam",route:"/security",description:"The security page of Samagam."},{title:"Auth Reset | Samagam",route:"/security/reset",description:"The auth reset page of Samagam."},{title:"404 | Samagam",route:"/404",description:"The 404 page of Samagam."},{title:"Expired | Samagam",route:"/expired",description:"The expired page of Samagam."},{title:"Privacy | Samagam",route:"/privacy",description:"The privacy page of Samagam."},{title:"Disclaimer | Samagam",route:"/disclaimer",description:"The disclaimer page of Samagam."},{title:"License | Samagam",route:"/license",description:"The license page of Samagam."},{title:"Register | Samagam",route:"/register",description:"The register page of Samagam."},{title:"Login | Samagam",route:"/login",description:"The login page of Samagam."},{title:"Logout | Samagam",route:"/logout",description:"The logout page of Samagam."},{title:"Default | Samagam",route:"*",description:"The default page of Samagam."}]}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,8173,8441,1517,7358],()=>t(76047)),_N_E=e.O()}]);