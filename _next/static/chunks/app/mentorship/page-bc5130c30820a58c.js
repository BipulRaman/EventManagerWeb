(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4516],{93817:(e,t,r)=>{Promise.resolve().then(r.bind(r,18855))},24309:(e,t,r)=>{"use strict";r.d(t,{a:()=>w});var n=r(95155),s=r(12115),a=r(10979),i=r(9561),l=r(70152),o=r(26603),c=r(1396),u=r(44522),d=r(96854),h=r(59620),x=r(87550),m=r(36645),j=r(92437),g=r(76046),p=r(57061),v=r(73365),f=r(39161),b=r(23686),y=r(79845),A=r(5565);let C={alignSelf:"center"},S={minHeight:"50px"},w=e=>{let{setAuthData:t}=(0,s.useContext)(f.c),[r,w]=(0,s.useState)(""),[P,I]=(0,s.useState)(""),[k,E]=(0,s.useState)(!1),[L,O]=(0,s.useState)(!1),[T,_]=(0,s.useState)(""),[D,F]=(0,s.useState)(""),[U,R]=(0,s.useState)(!1),[M,N]=(0,s.useState)(!1),[J,q]=(0,s.useState)(!1),z=e.pathname||b.ts.Root,B=(0,g.useRouter)(),$=()=>{O(!1),E(!1)},G=()=>{$(),q(!0),y.p$.CreateToken({email:r,otp:P}).then(e=>{let r=e.data,n={name:r.result.name,email:r.result.resource};(0,v.uj)(r.result),t(n),q(!1),E(!0),_("Login successful."),r.result.roles.includes(p.YK.InvitedUser)?B.push("/profile"):B.push(z)}).catch(e=>{q(!1),O(!0),403===e.response.status?F("Access denied. Please contact support."):400===e.response.status?F("Invalid email or otp."):404===e.response.status?F("User not found. Please Register first."):F("An unexpected error occurred. Please try again.")})};return(0,n.jsxs)(a.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,n.jsx)(h._,{children:(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),G()},children:(0,n.jsxs)(a.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,n.jsx)(A.default,{src:j.v.logo,alt:"Logo",width:100,height:100,style:C}),(0,n.jsx)(i.A,{variant:"h6",style:C,children:"Login to Portal"}),(0,n.jsx)(l.A,{id:"user-email",label:"Email",variant:"outlined",value:r,required:!0,onChange:e=>{$(),w(e.target.value),p.Dr.IsEmail(e.target.value)?R(!0):(R(!1),N(!1))},error:null!==r&&""!==r&&!p.Dr.IsEmail(r)}),(0,n.jsx)(l.A,{id:"otp",label:"OTP",variant:"outlined",value:P,required:!0,onChange:e=>{$(),I(e.target.value),6===e.target.value.length?N(!0):N(!1)},error:null!==P&&""!==P&&6!==P.length&&!p.Dr.IsNumber(P)}),(0,n.jsxs)(a.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,n.jsx)(o.A,{variant:"outlined",endIcon:(0,n.jsx)(m.A,{}),disabled:!U,onClick:()=>{$(),q(!0),y.p$.CreateOtp({email:r}).then(()=>{q(!1),E(!0),_("OTP sent successfully.")}).catch(e=>{q(!1),O(!0),400===e.response.status?F("Invalid email."):403===e.response.status?F("Access denied. Please contact support."):404===e.response.status?F("User not found. Please Register first."):F("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,n.jsx)(o.A,{type:"submit",variant:"contained",endIcon:(0,n.jsx)(x.A,{}),disabled:!M,children:"Login"})]})]})})}),(0,n.jsxs)("div",{style:S,children:[L&&(0,n.jsx)(c.A,{severity:"error",children:D}),k&&(0,n.jsx)(c.A,{severity:"success",children:T}),!L&&!k&&(0,n.jsx)(c.A,{severity:"info",children:"Enter your credential to login."})]}),(0,n.jsx)(u.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:J,onClick:()=>{q(!1)},children:(0,n.jsx)(d.A,{color:"inherit"})})]})}},18855:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(95155);r(12115);var s=r(63342),a=r(5029);let i=()=>{let e=[{Position:0,Label:"Mentorship",Component:(0,n.jsx)(s.M,{})}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.j,{Components:e})})};var l=r(66437);let o=()=>(0,n.jsx)(l.F,{children:(0,n.jsx)(i,{})})},66437:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});var n=r(95155),s=r(12115),a=r(76046),i=r(24309),l=r(42336);let o=e=>{let t=(0,l.A)(),[r,o]=s.useState(!1),c=(0,a.usePathname)();return(0,s.useEffect)(()=>{window.scrollTo(0,0),o(!0)},[c]),(0,n.jsx)(n.Fragment,{children:r&&(t?e.children:(0,n.jsx)(i.a,{pathname:c}))})}},5029:(e,t,r)=>{"use strict";r.d(t,{j:()=>u});var n=r(95155),s=r(12115),a=r(88648),i=r(79987),l=r(68998);let o={marginTop:10};function c(e){let{children:t,value:r,index:s,idPrefix:a,...i}=e;return(0,n.jsx)("div",{role:"tabpanel",hidden:r!==s,id:"".concat(a,"-tabpanel-").concat(s),"aria-labelledby":"".concat(a,"-tab-").concat(s),...i,style:o,children:r===s&&(0,n.jsx)(l.A,{style:o,children:(0,n.jsx)("div",{children:t})})})}let u=e=>{let[t,r]=s.useState(0),{Components:o}=e,u=o[0].Label.replace(/\s/g,"").toLowerCase();return(0,n.jsxs)(l.A,{sx:{width:"100%"},children:[(0,n.jsx)(l.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsx)(a.A,{value:t,onChange:(e,t)=>{r(t)},"aria-label":"basic tabs example",centered:!0,children:o.map((e,t)=>(0,n.jsx)(i.A,{label:e.Label,...function(e,t){return{id:"".concat(t,"-tab-").concat(e),"aria-controls":"".concat(t,"-tabpanel-").concat(e)}}(t,u)},t))})}),(0,n.jsx)("div",{style:{justifyContent:"center"},children:o.map((e,r)=>(0,n.jsx)(c,{value:t,index:r,idPrefix:u,children:e.Component},r))})]})}},63342:(e,t,r)=>{"use strict";r.d(t,{M:()=>i});var n=r(95155);r(12115);var s=r(9561),a=r(59620);let i=()=>(0,n.jsxs)(a._,{children:[(0,n.jsx)(s.A,{gutterBottom:!0,variant:"h5",children:"Coming soon!"}),(0,n.jsx)(s.A,{variant:"body2",color:"text.secondary",children:"We are currently working on this feature to make it available soon. Until then, you can check out other features."})]})},42336:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,h:()=>o});var n=r(95155),s=r(12115),a=r(39161),i=r(4753),l=r(73365);let o=e=>{let{children:t}=e,[r,o]=(0,s.useState)({}),[c,u]=(0,s.useState)(!1);(0,s.useEffect)(()=>{u((0,l.AJ)())},[]),(0,s.useEffect)(()=>{(0,i.Jv)(r)||u(!0)},[r]),(0,s.useEffect)(()=>{c||o({})},[c]);let d=(0,s.useMemo)(()=>({isAuthenticated:c,setIsAuthenticated:u,authData:r,setAuthData:o}),[c,u,r,o]);return(0,n.jsx)(a.c.Provider,{value:d,children:t})},c=()=>{let{isAuthenticated:e}=(0,s.useContext)(a.c);return e}},4753:(e,t,r)=>{"use strict";r.d(t,{Jv:()=>n,Ok:()=>a,eR:()=>s});let n=e=>"object"!=typeof e||null===e||!(Object.keys(e).length>0),s=e=>{let t=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t),n=r.indexOf(",")+2;return"".concat(r.substring(0,n)," ").concat(r.substring(n).toLowerCase())},a=e=>{let t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(e),r=t.indexOf(",")+2;return"".concat(t.substring(0,r)," ").concat(t.substring(r).toLowerCase())}}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,6544,6402,2627,6165,5937,8441,1517,7358],()=>t(93817)),_N_E=e.O()}]);