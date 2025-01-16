(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1369],{2710:(e,t,s)=>{Promise.resolve().then(s.bind(s,81857))},24309:(e,t,s)=>{"use strict";s.d(t,{a:()=>C});var a=s(95155),i=s(12115),r=s(10979),n=s(9561),l=s(70152),o=s(26603),u=s(1396),c=s(44522),d=s(96854),h=s(59620),p=s(87550),S=s(36645),x=s(92437),m=s(76046),f=s(57061),b=s(73365),j=s(39161),g=s(23686),y=s(48173),v=s.n(y),A=s(79845),P=s(5565);let L={alignSelf:"center"},w={minHeight:"50px"},C=e=>{let{setAuthData:t}=(0,i.useContext)(j.c),[s,y]=(0,i.useState)(""),[C,I]=(0,i.useState)(""),[T,O]=(0,i.useState)(!1),[D,k]=(0,i.useState)(!1),[E,B]=(0,i.useState)(""),[J,N]=(0,i.useState)(""),[F,R]=(0,i.useState)(!1),[_,z]=(0,i.useState)(!1),[U,G]=(0,i.useState)(!1),M=e.pathname||g.ts.Root,Y=(0,m.useRouter)(),$=()=>{k(!1),O(!1)},q=()=>{$(),G(!0),A.p$.CreateToken({email:s,otp:C}).then(e=>{let s=e.data,a={name:s.result.name,email:s.result.resource};(0,b.uj)(s.result),t(a),G(!1),O(!0),B("Login successful."),s.result.roles.includes(f.YK.InvitedUser)?Y.push("/profile"):Y.push(M)}).catch(e=>{G(!1),k(!0),403===e.response.status?N("Access denied. Please contact support."):400===e.response.status?N("Invalid email or otp."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})};return(0,a.jsxs)(r.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,a.jsx)(h._,{children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault(),q()},children:(0,a.jsxs)(r.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,a.jsx)(P.default,{src:x.v.logo,alt:"Logo",width:100,height:100,style:L}),(0,a.jsx)(n.A,{variant:"h6",style:L,children:"Login to Alumni Portal"}),(0,a.jsx)(l.A,{id:"user-email",label:"Email",variant:"outlined",value:s,required:!0,onChange:e=>{$(),y(e.target.value),f.Dr.IsEmail(e.target.value)?R(!0):(R(!1),z(!1))},error:null!==s&&""!==s&&!f.Dr.IsEmail(s)}),(0,a.jsx)(l.A,{id:"otp",label:"OTP",variant:"outlined",value:C,required:!0,onChange:e=>{$(),I(e.target.value),6===e.target.value.length?z(!0):z(!1)},error:null!==C&&""!==C&&6!==C.length&&!f.Dr.IsNumber(C)}),(0,a.jsxs)(r.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,a.jsx)(o.A,{variant:"outlined",endIcon:(0,a.jsx)(S.A,{}),disabled:!F,onClick:()=>{$(),G(!0),A.p$.CreateOtp({email:s}).then(()=>{G(!1),O(!0),B("OTP sent successfully.")}).catch(e=>{G(!1),k(!0),400===e.response.status?N("Invalid email."):403===e.response.status?N("Access denied. Please contact support."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,a.jsx)(o.A,{type:"submit",variant:"contained",endIcon:(0,a.jsx)(p.A,{}),disabled:!_,children:"Login"})]}),(0,a.jsxs)(n.A,{variant:"body2",color:"textSecondary",children:["First time here? ",(0,a.jsx)(v(),{href:g.ts.Register,children:"Register now"})]})]})})}),(0,a.jsxs)("div",{style:w,children:[D&&(0,a.jsx)(u.A,{severity:"error",children:J}),T&&(0,a.jsx)(u.A,{severity:"success",children:E}),!D&&!T&&(0,a.jsx)(u.A,{severity:"info",children:"Enter your credential to login."})]}),(0,a.jsx)(c.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:U,onClick:()=>{G(!1)},children:(0,a.jsx)(d.A,{color:"inherit"})})]})}},81857:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var a=s(95155),i=s(66437),r=s(23686),n=s(12115),l=s(59620),o=s(9561),u=s(35417),c=s(70152),d=s(894),h=s(6020),p=s(57061),S=s(2743),x=s(73365),m=s(27312),f=s(79845);let b={width:"100%"},j=()=>{let{otpSecretState:e,setOtpSecretState:t}=(0,m.A)(),s=(0,x.uy)();return(0,n.useEffect)(()=>{f.p$.GetOtpSecret().then(e=>{t({data:e.data.result,status:p.JT.Success,timestamp:new Date})}).catch(()=>{t({data:"",status:p.JT.Failure,timestamp:new Date})})},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l._,{children:[(0,a.jsx)(o.A,{variant:"h6",gutterBottom:!0,children:"Setup offline OTP"}),(0,a.jsxs)(o.A,{variant:"body2",component:"div",children:[(0,a.jsx)("span",{children:"Follow below steps to setup offline OTP:"}),(0,a.jsxs)("ol",{style:{padding:"20px"},children:[(0,a.jsx)("li",{children:"Install Google Authenticator: If you have not already, download and install the Google Authenticator app on your smartphone or tablet. It is available for both iOS and Android."}),(0,a.jsx)("li",{children:"Click on the button below to setup offline OTP."}),(0,a.jsx)("li",{children:"Scan the QR code using the Authenticator app."}),(0,a.jsx)("li",{children:"Alternatively you can also add manually if scan does not work. Copy below secret key and create a new entry manually."})]}),e.status===p.JT.Success&&(0,a.jsxs)(u.Ay,{container:!0,spacing:1,children:[(0,a.jsx)(u.Ay,{item:!0,xs:10,children:(0,a.jsx)("span",{children:(0,a.jsx)(c.A,{disabled:!0,id:"outlined-disabled",label:"Secret",defaultValue:e.data,style:b})})}),(0,a.jsx)(u.Ay,{item:!0,xs:1,children:(0,a.jsx)(d.A,{"aria-label":"copy",size:"large",onClick:()=>{navigator.clipboard.writeText(e.data)},children:(0,a.jsx)(S.A,{fontSize:"inherit"})})})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:e.status===p.JT.Success&&(0,a.jsx)("div",{style:{height:"auto",maxWidth:64,width:"100%"},children:(0,a.jsx)(h.Ay,{size:200,style:{height:"auto",maxWidth:"400"},value:"otpauth://totp/".concat(s,"?secret=").concat(e.data,"&issuer=JNVSAlumni"),viewBox:"0 0 200 200"})})})]})})};var g=s(2014);let y=()=>(0,a.jsxs)(i.F,{children:[(0,a.jsx)(g.Y,{tabs:r.fM}),(0,a.jsx)(j,{})]})},2014:(e,t,s)=>{"use strict";s.d(t,{Y:()=>u});var a=s(95155),i=s(12115),r=s(68998),n=s(88648),l=s(79987),o=s(76046);let u=e=>{let{tabs:t}=e,[s,u]=i.useState(0),c=(0,o.useRouter)(),d=(0,o.usePathname)();i.useEffect(()=>{u(t.findIndex(e=>e.path===d))},[d]);let h=i.useCallback((e,s)=>{u(s),c.push(t[s].path.split("?")[0].split("#")[0])},[]),p=i.useMemo(()=>t.map((e,t)=>(0,a.jsx)(l.A,{label:e.label},t)),[t]);return(0,a.jsx)(r.A,{sx:{width:"100%",borderBottom:1,borderColor:"divider",marginBottom:1},children:(0,a.jsx)(n.A,{value:s,onChange:h,centered:!0,children:p})})}},66437:(e,t,s)=>{"use strict";s.d(t,{F:()=>o});var a=s(95155),i=s(12115),r=s(76046),n=s(24309),l=s(42336);let o=e=>{let t=(0,l.A)(),[s,o]=i.useState(!1),u=(0,r.usePathname)();return(0,i.useEffect)(()=>{window.scrollTo(0,0),o(!0)},[u]),(0,a.jsx)(a.Fragment,{children:s&&(t?e.children:(0,a.jsx)(n.a,{pathname:u}))})}},27312:(e,t,s)=>{"use strict";s.d(t,{A:()=>u,z:()=>o});var a=s(99827),i=s(57061);let r=e=>({data:e,status:i.JT.NotStarted,timestamp:new Date}),n=e=>({data:e,page:0,isLastPage:!1,status:i.JT.NotStarted,timestamp:new Date}),l=(0,a.v)()(e=>({otpSecretState:r(""),publicPostListState:n([]),privatePostListState:n([]),profileState:r({}),publicProfileState:r({}),nearbyProfileListState:r([]),businessState:r({}),businessStateList:r([]),nearbyBusinessListState:r([]),nearbyDoctorsListState:r([]),setOtpSecretState:t=>e(()=>({otpSecretState:t})),setPublicPostListState:t=>e(()=>({publicPostListState:t})),setPrivatePostListState:t=>e(()=>({privatePostListState:t})),setProfileState:t=>e(()=>({profileState:t})),setPublicProfileState:t=>e(()=>({publicProfileState:t})),setNearbyProfileListState:t=>e(()=>({nearbyProfileListState:t})),setBusinessState:t=>e(()=>({businessState:t})),setBusinessStateList:t=>e(()=>({businessStateList:t})),setNearbyBusinessListState:t=>e(()=>({nearbyBusinessListState:t})),setNearbyDoctorsListState:t=>e(()=>({nearbyDoctorsListState:t}))})),o=()=>{l.setState(()=>({otpSecretState:r(""),publicPostListState:n([]),privatePostListState:n([]),profileState:r({}),publicProfileState:r({}),nearbyProfileListState:r([]),businessState:r({}),businessStateList:r([]),nearbyBusinessListState:r([]),nearbyDoctorsListState:r([])}))},u=l},42336:(e,t,s)=>{"use strict";s.d(t,{A:()=>u,h:()=>o});var a=s(95155),i=s(12115),r=s(39161),n=s(4753),l=s(73365);let o=e=>{let{children:t}=e,[s,o]=(0,i.useState)({}),[u,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{c((0,l.AJ)())},[]),(0,i.useEffect)(()=>{(0,n.Jv)(s)||c(!0)},[s]),(0,i.useEffect)(()=>{u||o({})},[u]);let d=(0,i.useMemo)(()=>({isAuthenticated:u,setIsAuthenticated:c,authData:s,setAuthData:o}),[u,c,s,o]);return(0,a.jsx)(r.c.Provider,{value:d,children:t})},u=()=>{let{isAuthenticated:e}=(0,i.useContext)(r.c);return e}},4753:(e,t,s)=>{"use strict";s.d(t,{Jv:()=>a,Ok:()=>r,eR:()=>i});let a=e=>"object"!=typeof e||null===e||!(Object.keys(e).length>0),i=e=>{let t=new Date(e),s=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(t),a=s.indexOf(",")+2;return"".concat(s.substring(0,a)," ").concat(s.substring(a).toLowerCase())},r=e=>{let t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(e),s=t.indexOf(",")+2;return"".concat(t.substring(0,s)," ").concat(t.substring(s).toLowerCase())}}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,4973,5565,6594,8173,6165,6020,172,5937,8441,1517,7358],()=>t(2710)),_N_E=e.O()}]);