(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2799],{40124:(e,r,a)=>{Promise.resolve().then(a.bind(a,39926))},78205:(e,r,a)=>{"use strict";a.d(r,{A:()=>t});var n=a(12983),s=a(95155);let t=(0,n.A)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},28172:(e,r,a)=>{"use strict";a.d(r,{Y:()=>S});var n=a(95155);a(12115);var s=a(64665),t=a(63551),i=a(9561),l=a(42479),o=a(10979),d=a(69841),c=a(894),h=a(48173),x=a.n(h),j=a(30562),b=a(23176),u=a(46043),A=a(1535),p=a(97167),y=a(18312),m=a(62315);let g={fontSize:16,color:"#454545",marginTop:-10,paddingBottom:5},v={paddingTop:0,paddingBottom:0},S=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.A,{sx:{mb:1},children:[(0,n.jsx)(t.A,{avatar:(0,n.jsx)(j.A,{children:(0,n.jsx)(b.A,{})}),title:(0,n.jsx)("span",{style:g,children:e.name}),subheader:(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:["[",e.category,"]"]})}),(0,n.jsx)(l.A,{style:v,children:(0,n.jsxs)(o.A,{spacing:1,children:[(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Address: "}),e.address,", ",e.pinCode]}),(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Details: "}),e.details]}),(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Phone: "}),e.phone]}),e.email&&(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Email: "}),e.email]}),e.website&&(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Website: "}),e.website]}),(0,n.jsxs)(i.A,{variant:"body2",color:"textSecondary",children:[(0,n.jsx)("b",{children:"Owner: "}),(0,n.jsx)(x(),{href:"/profile/#".concat(e.createdBy),passHref:!0,children:e.createdByName})]})]})}),(0,n.jsxs)(d.A,{disableSpacing:!0,children:[e.website&&(0,n.jsx)(c.A,{"aria-label":"open website",href:e.website,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(m.A,{})}),e.email&&(0,n.jsx)(c.A,{"aria-label":"send email",href:"mailto:".concat(e.email),children:(0,n.jsx)(A.A,{})}),(0,n.jsx)(c.A,{"aria-label":"open in map",href:e.mapLink,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(y.A,{})}),(0,n.jsx)(c.A,{"aria-label":"make phone call",href:"tel:".concat(e.phone),children:(0,n.jsx)(p.A,{})}),(0,n.jsx)(c.A,{"aria-label":"message on whatsapp",href:"https://wa.me/91".concat(e.phone),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(u.A,{})})]})]})})},39926:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>f});var n=a(95155),s=a(66437),t=a(23686),i=a(2014),l=a(12115),o=a(9561),d=a(2241),c=a(10979),h=a(70152),x=a(894),j=a(78205),b=a(59620),u=a(27312),A=a(79845),p=a(57061),y=a(28172),m=a(78750);let g={width:200},v={width:50},S=()=>{let[e,r]=l.useState(""),[a,s]=l.useState(!1),{nearbyBusinessListState:t,setNearbyBusinessListState:i}=(0,u.A)(),S=/^\d{6}$/.test(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b._,{children:[(0,n.jsx)(o.A,{variant:"h6",component:"h2",gutterBottom:!0,children:"Navodayan Business Nearby"}),(0,n.jsx)(o.A,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:"Find navodayan businesses in your area using PIN code."}),(0,n.jsx)(d.A,{}),(0,n.jsx)("form",{onSubmit:r=>{r.preventDefault(),S&&(0,m.o)(A.n9.GetBusinessListByPinCode(Number(e)),i)},children:(0,n.jsxs)(c.A,{direction:"row",spacing:2,margin:2,height:50,children:[(0,n.jsx)(h.A,{variant:"standard",style:g,label:"Pin Code",type:"text",value:e,onChange:e=>{r(e.target.value),s(!0)},error:!S&&a,helperText:!S&&a?"Pin Code must be 6 digits long":""}),(0,n.jsx)(x.A,{disabled:!S,color:"primary","aria-label":"search",style:v,type:"submit",children:(0,n.jsx)(j.A,{})})]})})]}),(()=>{switch(t.status){case p.JT.Success:{let e=t.data;if(0===e.length)return(0,n.jsx)(b._,{children:(0,n.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"No businesses found in the area."})});return e.map((e,r)=>(0,n.jsx)(y.Y,{...e},r))}case p.JT.NotStarted:return(0,n.jsx)(n.Fragment,{});case p.JT.InProgress:return(0,n.jsx)(b._,{children:(0,n.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Loading..."})});case p.JT.Failure:return(0,n.jsx)(b._,{children:(0,n.jsx)(o.A,{variant:"body2",color:"textSecondary",children:"Error loading data."})});default:return null}})()]})},f=()=>(0,n.jsxs)(s.F,{children:[(0,n.jsx)(i.Y,{tabs:t.qN}),(0,n.jsx)(S,{})]})}},e=>{var r=r=>e(e.s=r);e.O(0,[4758,9427,4973,5565,6594,8173,6165,2824,7274,5937,6754,8441,1517,7358],()=>r(40124)),_N_E=e.O()}]);