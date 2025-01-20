(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8017],{94658:(e,t,s)=>{Promise.resolve().then(s.bind(s,4186))},4186:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var a=s(95155),r=s(66437),n=s(23686),i=s(2014),l=s(12115),u=s(59620),o=s(10979),c=s(9561),d=s(70152),S=s(26603),h=s(78750),p=s(79845),m=s(18238),g=s(27312);let x={width:90},f=()=>{let{setExpenseStateList:e}=(0,g.A)(),[t,s]=l.useState(!1),[r,n]=l.useState(!1),[i,f]=l.useState({}),[b,y]=l.useState({title:"",amount:0,dateTime:new Date().toISOString()}),v=e=>""!==e&&null!==e&&e.length>=3,j=e=>!isNaN(e)&&e>0;return(0,a.jsx)(u._,{children:(0,a.jsx)("form",{onSubmit:t=>{t.preventDefault(),(0,h.m)(p.Z9.CreateExpense(b),f).then(()=>{(0,h.o)(p.Z9.GetExpenses(),e)})},onChange:()=>{s(v(b.title)&&j(b.amount))},children:(0,a.jsxs)(o.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,maxWidth:400,children:[(0,a.jsx)(c.A,{variant:"h6",color:"textSecondary",gutterBottom:!0,children:"Add an Expense"}),(0,a.jsx)(d.A,{label:"Particular",onChange:e=>{y({...b,title:e.target.value}),n(!0)},error:r&&!v(b.title)}),(0,a.jsx)(d.A,{label:"Amount in ₹",onChange:e=>{y({...b,amount:parseFloat(e.target.value)}),n(!0)},error:r&&!j(b.amount)}),(0,a.jsx)(d.A,{label:"Date",type:"date",slotProps:{inputLabel:{shrink:!0}},value:b.dateTime.split("T")[0],onChange:e=>y({...b,dateTime:e.target.value})}),(0,a.jsx)(S.A,{style:x,disabled:!t,variant:"contained",type:"submit",children:"Submit"}),(0,a.jsx)(m.M,{display:!1,notStartedMessage:"Please fill the form and submit.",successMessage:"Expense added successfully.",failureMessage:"Failed to add expense.",currentStatus:i.status})]})})})},b=()=>(0,a.jsxs)(r.F,{children:[(0,a.jsx)(i.Y,{tabs:n.$q}),(0,a.jsx)(f,{})]})},24309:(e,t,s)=>{"use strict";s.d(t,{a:()=>L});var a=s(95155),r=s(12115),n=s(10979),i=s(9561),l=s(70152),u=s(26603),o=s(1396),c=s(44522),d=s(96854),S=s(59620),h=s(87550),p=s(36645),m=s(92437),g=s(76046),x=s(57061),f=s(73365),b=s(39161),y=s(23686),v=s(79845),j=s(5565);let P={alignSelf:"center"},A={minHeight:"50px"},L=e=>{let{setAuthData:t}=(0,r.useContext)(b.c),[s,L]=(0,r.useState)(""),[w,C]=(0,r.useState)(""),[T,D]=(0,r.useState)(!1),[I,E]=(0,r.useState)(!1),[J,O]=(0,r.useState)(""),[M,N]=(0,r.useState)(""),[k,F]=(0,r.useState)(!1),[B,_]=(0,r.useState)(!1),[R,z]=(0,r.useState)(!1),U=e.pathname||y.ts.Root,q=(0,g.useRouter)(),Y=()=>{E(!1),D(!1)},$=()=>{Y(),z(!0),v.p$.CreateToken({email:s,otp:w}).then(e=>{let s=e.data,a={name:s.result.name,email:s.result.resource};(0,f.uj)(s.result),t(a),z(!1),D(!0),O("Login successful."),s.result.roles.includes(x.YK.InvitedUser)?q.push("/profile"):q.push(U)}).catch(e=>{z(!1),E(!0),403===e.response.status?N("Access denied. Please contact support."):400===e.response.status?N("Invalid email or otp."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})};return(0,a.jsxs)(n.A,{direction:"column",alignItems:"center",justifyContent:"center",height:"80vh",children:[(0,a.jsx)(S._,{children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault(),$()},children:(0,a.jsxs)(n.A,{direction:"column",alignContent:"center",justifyContent:"center",spacing:2,margin:2,children:[(0,a.jsx)(j.default,{src:m.v.logo,alt:"Logo",width:100,height:100,style:P}),(0,a.jsx)(i.A,{variant:"h6",style:P,children:"Login to Portal"}),(0,a.jsx)(l.A,{id:"user-email",label:"Email",variant:"outlined",value:s,required:!0,onChange:e=>{Y(),L(e.target.value),x.Dr.IsEmail(e.target.value)?F(!0):(F(!1),_(!1))},error:null!==s&&""!==s&&!x.Dr.IsEmail(s)}),(0,a.jsx)(l.A,{id:"otp",label:"OTP",variant:"outlined",value:w,required:!0,onChange:e=>{Y(),C(e.target.value),6===e.target.value.length?_(!0):_(!1)},error:null!==w&&""!==w&&6!==w.length&&!x.Dr.IsNumber(w)}),(0,a.jsxs)(n.A,{direction:"row",justifyContent:"center",spacing:2,children:[(0,a.jsx)(u.A,{variant:"outlined",endIcon:(0,a.jsx)(p.A,{}),disabled:!k,onClick:()=>{Y(),z(!0),v.p$.CreateOtp({email:s}).then(()=>{z(!1),D(!0),O("OTP sent successfully.")}).catch(e=>{z(!1),E(!0),400===e.response.status?N("Invalid email."):403===e.response.status?N("Access denied. Please contact support."):404===e.response.status?N("User not found. Please Register first."):N("An unexpected error occurred. Please try again.")})},children:"Get OTP"}),(0,a.jsx)(u.A,{type:"submit",variant:"contained",endIcon:(0,a.jsx)(h.A,{}),disabled:!B,children:"Login"})]})]})})}),(0,a.jsxs)("div",{style:A,children:[I&&(0,a.jsx)(o.A,{severity:"error",children:M}),T&&(0,a.jsx)(o.A,{severity:"success",children:J}),!I&&!T&&(0,a.jsx)(o.A,{severity:"info",children:"Enter your credential to login."})]}),(0,a.jsx)(c.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:R,onClick:()=>{z(!1)},children:(0,a.jsx)(d.A,{color:"inherit"})})]})}},2014:(e,t,s)=>{"use strict";s.d(t,{Y:()=>o});var a=s(95155),r=s(12115),n=s(68998),i=s(88648),l=s(79987),u=s(76046);let o=e=>{let{tabs:t}=e,[s,o]=r.useState(0),c=(0,u.useRouter)(),d=(0,u.usePathname)();r.useEffect(()=>{o(t.findIndex(e=>e.path===d))},[d]);let S=r.useCallback((e,s)=>{o(s),c.push(t[s].path.split("?")[0].split("#")[0])},[]),h=r.useMemo(()=>t.map((e,t)=>(0,a.jsx)(l.A,{label:e.label},t)),[t]);return(0,a.jsx)(n.A,{sx:{width:"100%",borderBottom:1,borderColor:"divider",marginBottom:1},children:(0,a.jsx)(i.A,{value:s,onChange:S,centered:!0,children:h})})}},66437:(e,t,s)=>{"use strict";s.d(t,{F:()=>u});var a=s(95155),r=s(12115),n=s(76046),i=s(24309),l=s(42336);let u=e=>{let t=(0,l.A)(),[s,u]=r.useState(!1),o=(0,n.usePathname)();return(0,r.useEffect)(()=>{window.scrollTo(0,0),u(!0)},[o]),(0,a.jsx)(a.Fragment,{children:s&&(t?e.children:(0,a.jsx)(i.a,{pathname:o}))})}},18238:(e,t,s)=>{"use strict";s.d(t,{M:()=>o});var a=s(95155),r=s(57061),n=s(1396),i=s(44522),l=s(96854);let u={marginTop:"1rem"},o=e=>{if(e.display)return null;switch(e.currentStatus){case r.JT.NotStarted:return e.notStartedMessage?(0,a.jsx)("div",{style:u,children:(0,a.jsx)(n.A,{style:e.style,severity:"info",children:e.notStartedMessage})}):null;case r.JT.Success:return e.successMessage?(0,a.jsx)("div",{style:u,children:(0,a.jsx)(n.A,{style:e.style,severity:"success",children:e.successMessage})}):null;case r.JT.Failure:return e.failureMessage?(0,a.jsx)("div",{style:u,children:(0,a.jsx)(n.A,{style:e.style,severity:"error",children:e.failureMessage})}):null;case r.JT.InProgress:return(0,a.jsx)(i.A,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:e.currentStatus===r.JT.InProgress,children:(0,a.jsx)(l.A,{color:"inherit"})});default:return null}}},27312:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,z:()=>u});var a=s(99827),r=s(57061);let n=e=>({data:e,status:r.JT.NotStarted,timestamp:new Date}),i=e=>({data:e,page:0,isLastPage:!1,status:r.JT.NotStarted,timestamp:new Date}),l=(0,a.v)()(e=>({otpSecretState:n(""),publicPostListState:i([]),privatePostListState:i([]),profileState:n({}),publicProfileState:n({}),nearbyProfileListState:n([]),businessState:n({}),businessStateList:n([]),nearbyBusinessListState:n([]),nearbyDoctorsListState:n([]),expenseStateList:n([]),setOtpSecretState:t=>e(()=>({otpSecretState:t})),setPublicPostListState:t=>e(()=>({publicPostListState:t})),setPrivatePostListState:t=>e(()=>({privatePostListState:t})),setProfileState:t=>e(()=>({profileState:t})),setPublicProfileState:t=>e(()=>({publicProfileState:t})),setNearbyProfileListState:t=>e(()=>({nearbyProfileListState:t})),setBusinessState:t=>e(()=>({businessState:t})),setBusinessStateList:t=>e(()=>({businessStateList:t})),setNearbyBusinessListState:t=>e(()=>({nearbyBusinessListState:t})),setNearbyDoctorsListState:t=>e(()=>({nearbyDoctorsListState:t})),setExpenseStateList:t=>e(()=>({expenseStateList:t}))})),u=()=>{l.setState(()=>({otpSecretState:n(""),publicPostListState:i([]),privatePostListState:i([]),profileState:n({}),publicProfileState:n({}),nearbyProfileListState:n([]),businessState:n({}),businessStateList:n([]),nearbyBusinessListState:n([]),nearbyDoctorsListState:n([]),expenseStateList:n([])}))},o=l},42336:(e,t,s)=>{"use strict";s.d(t,{A:()=>o,h:()=>u});var a=s(95155),r=s(12115),n=s(39161),i=s(4753),l=s(73365);let u=e=>{let{children:t}=e,[s,u]=(0,r.useState)({}),[o,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{c((0,l.AJ)())},[]),(0,r.useEffect)(()=>{(0,i.Jv)(s)||c(!0)},[s]),(0,r.useEffect)(()=>{o||u({})},[o]);let d=(0,r.useMemo)(()=>({isAuthenticated:o,setIsAuthenticated:c,authData:s,setAuthData:u}),[o,c,s,u]);return(0,a.jsx)(n.c.Provider,{value:d,children:t})},o=()=>{let{isAuthenticated:e}=(0,r.useContext)(n.c);return e}},4753:(e,t,s)=>{"use strict";s.d(t,{Jv:()=>a,Ok:()=>n,eR:()=>r});let a=e=>"object"!=typeof e||null===e||!(Object.keys(e).length>0),r=e=>{let t=new Date(e),s=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t),a=s.indexOf(",")+2;return"".concat(s.substring(0,a)," ").concat(s.substring(a).toLowerCase())},n=e=>{let t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}).format(e),s=t.indexOf(",")+2;return"".concat(t.substring(0,s)," ").concat(t.substring(s).toLowerCase())}},78750:(e,t,s)=>{"use strict";s.d(t,{m:()=>n,o:()=>r});var a=s(57061);let r=async(e,t)=>{t({data:{},status:a.JT.InProgress,timestamp:new Date});try{let s=(await e).data;t({data:s.result,status:a.JT.Success,timestamp:new Date})}catch(e){t({data:{},status:a.JT.Failure,timestamp:new Date})}},n=async(e,t)=>{t({data:{},status:a.JT.InProgress,timestamp:new Date});try{let s=(await e).data;t({data:s.result,status:a.JT.Success,timestamp:new Date})}catch(e){t({data:{},status:a.JT.Failure,timestamp:new Date})}}},99827:(e,t,s)=>{"use strict";s.d(t,{v:()=>u});var a=s(12115);let r=e=>{let t;let s=new Set,a=(e,a)=>{let r="function"==typeof e?e(t):e;if(!Object.is(r,t)){let e=t;t=(null!=a?a:"object"!=typeof r||null===r)?r:Object.assign({},t,r),s.forEach(s=>s(t,e))}},r=()=>t,n={setState:a,getState:r,getInitialState:()=>i,subscribe:e=>(s.add(e),()=>s.delete(e))},i=t=e(a,r,n);return n},n=e=>e?r(e):r,i=e=>e,l=e=>{let t=n(e),s=e=>(function(e,t=i){let s=a.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return a.useDebugValue(s),s})(t,e);return Object.assign(s,t),s},u=e=>e?l(e):l}},e=>{var t=t=>e(e.s=t);e.O(0,[4758,9427,6544,6402,2627,6165,5937,8441,1517,7358],()=>t(94658)),_N_E=e.O()}]);