(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{76479:(e,t,r)=>{Promise.resolve().then(r.bind(r,9809))},54041:(e,t,r)=>{"use strict";r.d(t,{I:()=>c});var n=r(95155);r(12115);var s=r(59620),i=r(23686),a=r(9561),l=r(48173),o=r.n(l);let d={padding:"1rem",paddingBottom:"0.5rem"},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s._,{children:[(0,n.jsxs)("div",{style:d,children:[(0,n.jsx)(a.A,{variant:"h6",gutterBottom:!0,children:"Welcome to the Samagam Portal."}),(0,n.jsx)(a.A,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,children:"Secure and Privacy focused event management portal. Built with love by Navodayans for Navodayans from Bihar."}),(0,n.jsx)(a.A,{variant:"subtitle1",gutterBottom:!0,children:"How to use the portal:"}),(0,n.jsx)(a.A,{component:"div",variant:"body2",color:"textSecondary",children:(0,n.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,n.jsx)("li",{children:"Menu items are available at the bottom of the page in mobile view and on left side in Desktop view."}),(0,n.jsx)("li",{children:"Use the tabs on the page to navigate to different sections."})]})})]}),(0,n.jsxs)("div",{style:d,children:[(0,n.jsx)(a.A,{variant:"subtitle1",gutterBottom:!0,children:"Features available on this portal:"}),(0,n.jsxs)("ul",{style:{paddingLeft:"20px"},children:[(0,n.jsxs)("li",{children:[(0,n.jsxs)(a.A,{variant:"body1",children:[(0,n.jsx)("b",{children:"Profile:"})," [",(0,n.jsx)(o(),{href:i.ts.Profile,children:"View"}),"] | [",(0,n.jsx)(o(),{href:i.ts.Profile_Edit,children:"Update"}),"]"]}),(0,n.jsx)(a.A,{variant:"body2",color:"textSecondary",children:"Manage your profile and keep your information private. Your profile information will be used to create your digital identity badge."})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(a.A,{variant:"body1",children:[(0,n.jsx)("b",{children:"Expenses:"})," [",(0,n.jsx)(o(),{href:i.ts.Expense,children:"View Expenses"}),"] | [",(0,n.jsx)(o(),{href:i.ts.Expense_Add,children:"Add Expense"}),"]"]}),(0,n.jsx)(a.A,{variant:"body2",color:"textSecondary",children:"Manage and View Expenses."})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(a.A,{variant:"body1",children:[(0,n.jsx)("b",{children:"Check-In:"})," [",(0,n.jsx)(o(),{href:i.ts.CheckIn,children:"Attendee CheckIn"}),"]"]}),(0,n.jsx)(a.A,{variant:"body2",color:"textSecondary",children:"Checkin to the event."})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(a.A,{variant:"body1",children:[(0,n.jsx)("b",{children:"Security:"})," [",(0,n.jsx)(o(),{href:i.ts.Security,children:"Offline OTP"}),"] | [",(0,n.jsx)(o(),{href:i.ts.Security_Reset,children:"Reset Authentication"}),"]"]}),(0,n.jsx)(a.A,{variant:"body2",color:"textSecondary",children:"Manage your security settings and reset your authentication."})]})]})]})]})})},24309:(e,t,r)=>{"use strict";r.d(t,{a:()=>C});var n=r(95155),s=r(12115),i=r(10979),a=r(9561),l=r(70152),o=r(26603),d=r(1396),c=r(44522),u=r(96854),h=r(59620),x=r(87550),j=r(36645),m=r(92437),v=r(76046),f=r(57061),g=r(73365),p=r(39161),y=r(23686),b=r(79845),A=r(5565);let S={alignSelf:"center"},w={minHeight:"50px"},C=e=>{let{setAuthData:t}=(0,s.useContext)(p.c),[r,C]=(0,s.useState)(""),[P,I]=(0,s.useState)(""),[E,k]=(0,s.useState)(!1),[O,_]=(0,s.useState)(!1),[B,D]=(0,s.useState)(""),[T,F]=(0,s.useState)(""),[L,R]=(0,s.useState)(!1),[U,M]=(0,s.useState)(!1),[N,Y]=(0,s.useState)(!1),z=e.pathname||y.ts.Root,J=(0,v.useRouter)(),V=()=>{_(!1),k(!1)},q=()=>{V(),Y(!0),b.p$.CreateToken({email:r,otp:P}).then(e=>{let r=e.data,n={name:r.result.name,email:r.result.resource};(0,g.uj)(r.result),t(n),Y(!1),k(!0),D("Login successful."),r.result.roles.includes(f.YK.InvitedUser)?J.push("/profile"):J.push(z)}).catch(e=>{Y(!1),_(!0),403===e.response.status?F("Access denied. Please contact support."):400===e.response.status?F("Invalid email or otp."):404===e.response.status?F("User not found. Please Register first."):F("An unexpected error occurred. Please try again.")})};return(0,n.jsxs)(i.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,n.jsx)(h._,{children:(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),q()},children:(0,n.jsxs)(i.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,n.jsx)(A.default,{src:m.v.logo,alt:"Logo",width:100,height:100,style:S}),(0,n.jsx)(a.A,{variant:"h6",style:S,children:"Login to Portal"}),(0,n.jsx)(l.A,{id:"user-email",label:"Email",variant:"outlined",value:r,required:!0,onChange:e=>{V(),C(e.target.value),f.Dr.IsEmail(e.target.value)?R(!0):(R(!1),M(!1))},error:null!==r&&""!==r&&!f.Dr.IsEmail(r)}),(0,n.jsx)(l.A,{id:"otp",label:"OTP",variant:"outlined",value:P,required:!0,onChange:e=>{V(),I(e.target.value),6===e.target.value.length?M(!0):M(!1)},error:null!==P&&""!==P&&6!==P.length&&!f.Dr.IsNumber(P)}),(0,n.jsxs)(i.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,n.jsx)(o.A,{variant:"outlined",endIcon:(0,n.jsx)(j.A,{}),disabled:!L,onClick:()=>{V(),Y(!0),b.p$.CreateOtp({email:r}).then(()=>{Y(!1),k(!0),D("OTP sent successfully.")}).catch(e=>{Y(!1),_(!0),400===e.response.status?F("Invalid email."):403===e.response.status?F("Access denied. Please contact support."):404===e.response.status?F("User not found. Please Register first."):F("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,n.jsx)(o.A,{type:"submit",variant:"contained",endIcon:(0,n.jsx)(x.A,{}),disabled:!U,children:"Login"})]})]})})}),(0,n.jsxs)("div",{style:w,children:[O&&(0,n.jsx)(d.A,{severity:"error",children:T}),E&&(0,n.jsx)(d.A,{severity:"success",children:B}),!O&&!E&&(0,n.jsx)(d.A,{severity:"info",children:"Enter your credential to login."})]}),(0,n.jsx)(c.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:N,onClick:()=>{Y(!1)},children:(0,n.jsx)(u.A,{color:"inherit"})})]})}},9809:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(95155),s=r(23686);r(12115);var i=r(2014),a=r(54041),l=r(66437);function o(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.F,{children:[(0,n.jsx)(i.Y,{tabs:s.SB}),(0,n.jsx)(a.I,{})]})})}},2014:(e,t,r)=>{"use strict";r.d(t,{Y:()=>d});var n=r(95155),s=r(12115),i=r(68998),a=r(88648),l=r(79987),o=r(76046);let d=e=>{let{tabs:t}=e,[r,d]=s.useState(0),c=(0,o.useRouter)(),u=(0,o.usePathname)();s.useEffect(()=>{d(t.findIndex(e=>e.path===u))},[u]);let h=s.useCallback((e,r)=>{d(r),c.push(t[r].path.split("?")[0].split("#")[0])},[]),x=s.useMemo(()=>t.map((e,t)=>(0,n.jsx)(l.A,{label:e.label},t)),[t]);return(0,n.jsx)(i.A,{sx:{width:"100%",borderBottom:1,borderColor:"divider",marginBottom:1},children:(0,n.jsx)(a.A,{value:r,onChange:h,centered:!0,children:x})})}},66437:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});var n=r(95155),s=r(12115),i=r(76046),a=r(24309),l=r(42336);let o=e=>{let t=(0,l.A)(),[r,o]=s.useState(!1),d=(0,i.usePathname)();return(0,s.useEffect)(()=>{window.scrollTo(0,0),o(!0)},[d]),(0,n.jsx)(n.Fragment,{children:r&&(t?e.children:(0,n.jsx)(a.a,{pathname:d}))})}},42336:(e,t,r)=>{"use strict";r.d(t,{A:()=>d,h:()=>o});var n=r(95155),s=r(12115),i=r(39161),a=r(4753),l=r(73365);let o=e=>{let{children:t}=e,[r,o]=(0,s.useState)({}),[d,c]=(0,s.useState)(!1);(0,s.useEffect)(()=>{c((0,l.AJ)())},[]),(0,s.useEffect)(()=>{(0,a.Jv)(r)||c(!0)},[r]),(0,s.useEffect)(()=>{d||o({})},[d]);let u=(0,s.useMemo)(()=>({isAuthenticated:d,setIsAuthenticated:c,authData:r,setAuthData:o}),[d,c,r,o]);return(0,n.jsx)(i.c.Provider,{value:u,children:t})},d=()=>{let{isAuthenticated:e}=(0,s.useContext)(i.c);return e}},4753:(e,t,r)=>{"use strict";r.d(t,{Jv:()=>n,Ok:()=>o,SP:()=>l,eR:()=>s,rU:()=>a,zu:()=>i});let n=e=>"object"!=typeof e||null===e||!(Object.keys(e).length>0),s=e=>{let t=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t),n=r.indexOf(",")+2;return"".concat(r.substring(0,n)," ").concat(r.substring(n).toLowerCase())},i=e=>s(new Date(1e3*e).toISOString()),a=e=>Math.floor(e.getTime()/1e3),l=e=>a(new Date(e)),o=e=>{let t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(e),r=t.indexOf(",")+2;return"".concat(t.substring(0,r)," ").concat(t.substring(r).toLowerCase())}}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,6544,6402,2627,6165,8173,5937,8441,1517,7358],()=>t(76479)),_N_E=e.O()}]);