(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4905],{58182:(e,t,r)=>{Promise.resolve().then(r.bind(r,43445))},64665:(e,t,r)=>{"use strict";r.d(t,{A:()=>v});var n=r(12115),s=r(43463),o=r(7123),a=r(89142),i=r(10314),l=r(78562),u=r(81045),d=r(37157);function c(e){return(0,d.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var h=r(95155);let m=e=>{let{classes:t}=e;return(0,o.A)({root:["root"]},c,t)},f=(0,a.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),v=n.forwardRef(function(e,t){let r=(0,i.b)({props:e,name:"MuiCard"}),{className:n,raised:o=!1,...a}=r,l={...r,raised:o},u=m(l);return(0,h.jsx)(f,{className:(0,s.A)(u.root,n),elevation:o?8:void 0,ref:t,ownerState:l,...a})})},42479:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(12115),s=r(43463),o=r(7123),a=r(89142),i=r(10314),l=r(81045),u=r(37157);function d(e){return(0,u.Ay)("MuiCardContent",e)}(0,l.A)("MuiCardContent",["root"]);var c=r(95155);let h=e=>{let{classes:t}=e;return(0,o.A)({root:["root"]},d,t)},m=(0,a.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),f=n.forwardRef(function(e,t){let r=(0,i.b)({props:e,name:"MuiCardContent"}),{className:n,component:o="div",...a}=r,l={...r,component:o},u=h(l);return(0,c.jsx)(m,{as:o,className:(0,s.A)(u.root,n),ownerState:l,ref:t,...a})})},24309:(e,t,r)=>{"use strict";r.d(t,{a:()=>w});var n=r(95155),s=r(12115),o=r(10979),a=r(9561),i=r(70152),l=r(26603),u=r(1396),d=r(44522),c=r(96854),h=r(59620),m=r(87550),f=r(36645),v=r(92437),g=r(76046),p=r(57061),x=r(73365),A=r(39161),j=r(23686),C=r(79845),y=r(5565);let b={alignSelf:"center"},S={minHeight:"50px"},w=e=>{let{setAuthData:t}=(0,s.useContext)(A.c),[r,w]=(0,s.useState)(""),[I,P]=(0,s.useState)(""),[E,R]=(0,s.useState)(!1),[M,O]=(0,s.useState)(!1),[k,D]=(0,s.useState)(""),[T,U]=(0,s.useState)(""),[_,L]=(0,s.useState)(!1),[N,F]=(0,s.useState)(!1),[B,z]=(0,s.useState)(!1),J=e.pathname||j.ts.Root,Y=(0,g.useRouter)(),q=()=>{O(!1),R(!1)},$=()=>{q(),z(!0),C.p$.CreateToken({email:r,otp:I}).then(e=>{let r=e.data,n={name:r.result.name,email:r.result.resource};(0,x.uj)(r.result),t(n),z(!1),R(!0),D("Login successful."),r.result.roles.includes(p.YK.InvitedUser)?Y.push("/profile"):Y.push(J)}).catch(e=>{z(!1),O(!0),403===e.response.status?U("Access denied. Please contact support."):400===e.response.status?U("Invalid email or otp."):404===e.response.status?U("User not found. Please Register first."):U("An unexpected error occurred. Please try again.")})};return(0,n.jsxs)(o.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,n.jsx)(h._,{children:(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),$()},children:(0,n.jsxs)(o.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,n.jsx)(y.default,{src:v.v.logo,alt:"Logo",width:100,height:100,style:b}),(0,n.jsx)(a.A,{variant:"h6",style:b,children:"Login to Portal"}),(0,n.jsx)(i.A,{id:"user-email",label:"Email",variant:"outlined",value:r,required:!0,onChange:e=>{q(),w(e.target.value),p.Dr.IsEmail(e.target.value)?L(!0):(L(!1),F(!1))},error:null!==r&&""!==r&&!p.Dr.IsEmail(r)}),(0,n.jsx)(i.A,{id:"otp",label:"OTP",variant:"outlined",value:I,required:!0,onChange:e=>{q(),P(e.target.value),6===e.target.value.length?F(!0):F(!1)},error:null!==I&&""!==I&&6!==I.length&&!p.Dr.IsNumber(I)}),(0,n.jsxs)(o.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,n.jsx)(l.A,{variant:"outlined",endIcon:(0,n.jsx)(f.A,{}),disabled:!_,onClick:()=>{q(),z(!0),C.p$.CreateOtp({email:r}).then(()=>{z(!1),R(!0),D("OTP sent successfully.")}).catch(e=>{z(!1),O(!0),400===e.response.status?U("Invalid email."):403===e.response.status?U("Access denied. Please contact support."):404===e.response.status?U("User not found. Please Register first."):U("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,n.jsx)(l.A,{type:"submit",variant:"contained",endIcon:(0,n.jsx)(m.A,{}),disabled:!N,children:"Login"})]})]})})}),(0,n.jsxs)("div",{style:S,children:[M&&(0,n.jsx)(u.A,{severity:"error",children:T}),E&&(0,n.jsx)(u.A,{severity:"success",children:k}),!M&&!E&&(0,n.jsx)(u.A,{severity:"info",children:"Enter your credential to login."})]}),(0,n.jsx)(d.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:B,onClick:()=>{z(!1)},children:(0,n.jsx)(c.A,{color:"inherit"})})]})}},43445:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(95155),s=r(66437),o=r(23686),a=r(2014),i=r(64665),l=r(42479),u=r(9561);r(12115);let d=()=>(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{children:(0,n.jsx)(u.A,{gutterBottom:!0,variant:"h5",component:"div",children:"Under Construction!"})})}),c=()=>(0,n.jsxs)(s.F,{children:[(0,n.jsx)(a.Y,{tabs:o.Ey}),(0,n.jsx)(d,{})]})},2014:(e,t,r)=>{"use strict";r.d(t,{Y:()=>u});var n=r(95155),s=r(12115),o=r(68998),a=r(88648),i=r(79987),l=r(76046);let u=e=>{let{tabs:t}=e,[r,u]=s.useState(0),d=(0,l.useRouter)(),c=(0,l.usePathname)();s.useEffect(()=>{u(t.findIndex(e=>e.path===c))},[c]);let h=s.useCallback((e,r)=>{u(r),d.push(t[r].path.split("?")[0].split("#")[0])},[]),m=s.useMemo(()=>t.map((e,t)=>(0,n.jsx)(i.A,{label:e.label},t)),[t]);return(0,n.jsx)(o.A,{sx:{width:"100%",borderBottom:1,borderColor:"divider",marginBottom:1},children:(0,n.jsx)(a.A,{value:r,onChange:h,centered:!0,children:m})})}},66437:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var n=r(95155),s=r(12115),o=r(76046),a=r(24309),i=r(42336);let l=e=>{let t=(0,i.A)(),[r,l]=s.useState(!1),u=(0,o.usePathname)();return(0,s.useEffect)(()=>{window.scrollTo(0,0),l(!0)},[u]),(0,n.jsx)(n.Fragment,{children:r&&(t?e.children:(0,n.jsx)(a.a,{pathname:u}))})}},42336:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,h:()=>l});var n=r(95155),s=r(12115),o=r(39161),a=r(4753),i=r(73365);let l=e=>{let{children:t}=e,[r,l]=(0,s.useState)({}),[u,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{d((0,i.AJ)())},[]),(0,s.useEffect)(()=>{(0,a.Jv)(r)||d(!0)},[r]),(0,s.useEffect)(()=>{u||l({})},[u]);let c=(0,s.useMemo)(()=>({isAuthenticated:u,setIsAuthenticated:d,authData:r,setAuthData:l}),[u,d,r,l]);return(0,n.jsx)(o.c.Provider,{value:c,children:t})},u=()=>{let{isAuthenticated:e}=(0,s.useContext)(o.c);return e}},4753:(e,t,r)=>{"use strict";r.d(t,{Jv:()=>n,Ok:()=>l,SP:()=>i,eR:()=>s,rU:()=>a,zu:()=>o});let n=e=>"object"!=typeof e||null===e||!(Object.keys(e).length>0),s=e=>{let t=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t),n=r.indexOf(",")+2;return"".concat(r.substring(0,n)," ").concat(r.substring(n).toLowerCase())},o=e=>s(new Date(1e3*e).toISOString()),a=e=>Math.floor(e.getTime()/1e3),i=e=>a(new Date(e)),l=e=>{let t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(e),r=t.indexOf(",")+2;return"".concat(t.substring(0,r)," ").concat(t.substring(r).toLowerCase())}}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,6544,6402,2627,6165,5937,8441,1517,7358],()=>t(58182)),_N_E=e.O()}]);