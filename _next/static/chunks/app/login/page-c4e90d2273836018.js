(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4520],{50359:(e,t,s)=>{Promise.resolve().then(s.bind(s,27527))},24309:(e,t,s)=>{"use strict";s.d(t,{a:()=>S});var r=s(95155),n=s(12115),a=s(10979),i=s(9561),l=s(70152),o=s(26603),u=s(1396),c=s(44522),d=s(96854),h=s(59620),p=s(87550),x=s(36645),g=s(92437),j=s(76046),v=s(57061),f=s(73365),m=s(39161),A=s(23686),y=s(79845),C=s(5565);let P={alignSelf:"center"},I={minHeight:"50px"},S=e=>{let{setAuthData:t}=(0,n.useContext)(m.c),[s,S]=(0,n.useState)(""),[b,w]=(0,n.useState)(""),[E,k]=(0,n.useState)(!1),[_,O]=(0,n.useState)(!1),[T,D]=(0,n.useState)(""),[L,N]=(0,n.useState)(""),[R,U]=(0,n.useState)(!1),[q,z]=(0,n.useState)(!1),[$,F]=(0,n.useState)(!1),G=e.pathname||A.ts.Root,H=(0,j.useRouter)(),K=()=>{O(!1),k(!1)},Y=()=>{K(),F(!0),y.p$.CreateToken({email:s,otp:b}).then(e=>{let s=e.data,r={name:s.result.name,email:s.result.resource};(0,f.uj)(s.result),t(r),F(!1),k(!0),D("Login successful."),s.result.roles.includes(v.YK.InvitedUser)?H.push("/profile"):H.push(G)}).catch(e=>{F(!1),O(!0),403===e.response.status?N("Access denied. Please contact support."):400===e.response.status?N("Invalid email or otp."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})};return(0,r.jsxs)(a.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,r.jsx)(h._,{children:(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),Y()},children:(0,r.jsxs)(a.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,r.jsx)(C.default,{src:g.v.logo,alt:"Logo",width:100,height:100,style:P}),(0,r.jsx)(i.A,{variant:"h6",style:P,children:"Login to Portal"}),(0,r.jsx)(l.A,{id:"user-email",label:"Email",variant:"outlined",value:s,required:!0,onChange:e=>{K(),S(e.target.value),v.Dr.IsEmail(e.target.value)?U(!0):(U(!1),z(!1))},error:null!==s&&""!==s&&!v.Dr.IsEmail(s)}),(0,r.jsx)(l.A,{id:"otp",label:"OTP",variant:"outlined",value:b,required:!0,onChange:e=>{K(),w(e.target.value),6===e.target.value.length?z(!0):z(!1)},error:null!==b&&""!==b&&6!==b.length&&!v.Dr.IsNumber(b)}),(0,r.jsxs)(a.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,r.jsx)(o.A,{variant:"outlined",endIcon:(0,r.jsx)(x.A,{}),disabled:!R,onClick:()=>{K(),F(!0),y.p$.CreateOtp({email:s}).then(()=>{F(!1),k(!0),D("OTP sent successfully.")}).catch(e=>{F(!1),O(!0),400===e.response.status?N("Invalid email."):403===e.response.status?N("Access denied. Please contact support."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,r.jsx)(o.A,{type:"submit",variant:"contained",endIcon:(0,r.jsx)(p.A,{}),disabled:!q,children:"Login"})]})]})})}),(0,r.jsxs)("div",{style:I,children:[_&&(0,r.jsx)(u.A,{severity:"error",children:L}),E&&(0,r.jsx)(u.A,{severity:"success",children:T}),!_&&!E&&(0,r.jsx)(u.A,{severity:"info",children:"Enter your credential to login."})]}),(0,r.jsx)(c.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:$,onClick:()=>{F(!1)},children:(0,r.jsx)(d.A,{color:"inherit"})})]})}},27527:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(95155),n=s(24309),a=s(34039);let i=()=>(0,r.jsx)(a.f,{children:(0,r.jsx)(n.a,{})})},34039:(e,t,s)=>{"use strict";s.d(t,{f:()=>i});var r=s(95155),n=s(12115),a=s(76046);let i=e=>{let t=(0,a.usePathname)();return n.useEffect(()=>{window.scrollTo(0,0)},[t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{paddingTop:"15px",width:"100%"},children:e.children})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,6544,6402,2627,5937,8441,1517,7358],()=>t(50359)),_N_E=e.O()}]);