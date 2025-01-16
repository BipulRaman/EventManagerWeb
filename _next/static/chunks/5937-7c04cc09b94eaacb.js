"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5937],{59620:(e,t,a)=>{a.d(t,{_:()=>n});var s=a(95155);a(12115);var i=a(78562);let o={padding:15,marginBottom:15},n=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.A,{component:"div",elevation:3,style:o,children:(0,s.jsx)("div",{style:e.style,children:e.children})})})},23686:(e,t,a)=>{a.d(t,{Ey:()=>u,SB:()=>i,fM:()=>p,jW:()=>l,qN:()=>r,rS:()=>n,ts:()=>s,we:()=>c,yj:()=>o});var s=function(e){return e.Root="/",e.About="/about",e.Newsfeed="/newsfeed",e.Newsfeed_Manage="/newsfeed/manage",e.Newsfeed_Create="/newsfeed/create",e.Profile="/profile",e.Profile_Edit="/profile/edit",e.NearBy="/nearby",e.NearBy_Business="/nearby/business",e.NearBy_Medico="/nearby/medico",e.Business="/business",e.Business_Add="/business/add",e.Business_Edit="/business/edit",e.Notifications="/notifications",e.Events="/events",e.Mentorship="/mentorship",e.Poll="/poll",e.Identity="/identity",e.Identity_Verify="/identity/verify",e.Security="/security",e.Security_Reset="/security/reset",e.NotFound="/404",e.Expired="/expired",e.Privacy="/privacy",e.Disclaimer="/disclaimer",e.License="/license",e.Register="/register",e.Login="/login",e.Logout="/logout",e.Default="*",e}({});let i=[{label:"Home",path:"/"}],o=[{label:"Profile",path:"/profile"},{label:"Update",path:"/profile/edit"}],n=[{label:"My Business",path:"/business"},{label:"Add",path:"/business/add"}],r=[{label:"Alumni",path:"/nearby"},{label:"Business",path:"/nearby/business"},{label:"Medico",path:"/nearby/medico"}],l=[{label:"Identity",path:"/identity"},{label:"Verify",path:"/identity/verify"}],p=[{label:"Security",path:"/security"},{label:"Reset Auth",path:"/security/reset"}],u=[{label:"Feed",path:"/newsfeed"},{label:"Manage",path:"/newsfeed/manage"},{label:"Create",path:"/newsfeed/create"}],c=[{title:"Home | Navodaya Alumni App",route:"/",description:"The Navodaya Alumni App."},{title:"Newsfeed | Navodaya Alumni App",route:"/newsfeed",description:"The newsfeed of Navodaya Alumni App."},{title:"Profile | Navodaya Alumni App",route:"/profile",description:"The profile of Navodaya Alumni App."},{title:"Profile Edit | Navodaya Alumni App",route:"/profile/edit",description:"The profile edit of Navodaya Alumni App."},{title:"NearBy Alumni | Navodaya Alumni App",route:"/nearby",description:"The nearby of Navodaya Alumni App."},{title:"NearBy Business | Navodaya Alumni App",route:"/nearby/business",description:"The nearby business of Navodaya Alumni App."},{title:"NearBy Medico | Navodaya Alumni App",route:"/nearby/medico",description:"The nearby medico of Navodaya Alumni App."},{title:"My Business | Navodaya Alumni App",route:"/business",description:"The business of Navodaya Alumni App."},{title:"Business Add | Navodaya Alumni App",route:"/business/add",description:"The business add of Navodaya Alumni App."},{title:"Business Edit | Navodaya Alumni App",route:"/business/edit",description:"The business edit of Navodaya Alumni App."},{title:"Notifications | Navodaya Alumni App",route:"/notifications",description:"The notifications of Navodaya Alumni App."},{title:"Events | Navodaya Alumni App",route:"/events",description:"The events of Navodaya Alumni App."},{title:"Mentorship | Navodaya Alumni App",route:"/mentorship",description:"The mentorship of Navodaya Alumni App."},{title:"Poll | Navodaya Alumni App",route:"/poll",description:"The poll of Navodaya Alumni App."},{title:"Identity | Navodaya Alumni App",route:"/identity",description:"The identity of Navodaya Alumni App."},{title:"Security | Navodaya Alumni App",route:"/security",description:"The security of Navodaya Alumni App."},{title:"Auth Reset | Navodaya Alumni App",route:"/security/reset",description:"The auth reset of Navodaya Alumni App."},{title:"404 | Navodaya Alumni App",route:"/404",description:"The 404 of Navodaya Alumni App."},{title:"Expired | Navodaya Alumni App",route:"/expired",description:"The expired of Navodaya Alumni App."},{title:"Privacy | Navodaya Alumni App",route:"/privacy",description:"The privacy of Navodaya Alumni App."},{title:"Disclaimer | Navodaya Alumni App",route:"/disclaimer",description:"The disclaimer of Navodaya Alumni App."},{title:"License | Navodaya Alumni App",route:"/license",description:"The license of Navodaya Alumni App."},{title:"Register | Navodaya Alumni App",route:"/register",description:"The register of Navodaya Alumni App."},{title:"Login | Navodaya Alumni App",route:"/login",description:"The login of Navodaya Alumni App."},{title:"Logout | Navodaya Alumni App",route:"/logout",description:"The logout of Navodaya Alumni App."},{title:"Default | Navodaya Alumni App",route:"*",description:"The default of Navodaya Alumni App."}]},92437:(e,t,a)=>{a.d(t,{v:()=>s});let s={avatar:"/images/avatar.svg",logo:"/images/logo.jpg",meta:"/images/logo.jpg",error:"/images/404.svg",indiaFlag:"/images/bharat.svg"}},79845:(e,t,a)=>{a.d(t,{p$:()=>h,n9:()=>f,Jf:()=>P,GX:()=>m});let s={retry:5,firstRetryAt:200},i="https://alumnievent.azurewebsites.net",o={PostAuthOtp:()=>"".concat(i,"/auth/otp"),PostAuthToken:()=>"".concat(i,"/auth/token"),GetAuthReset:()=>"".concat(i,"/auth/reset"),GetAuthOtpSecret:()=>"".concat(i,"/auth/otpsecret")},n={GetProfile:()=>"".concat(i,"/profile"),GetProfileById:e=>"".concat(i,"/profile/").concat(e),PostProfile:()=>"".concat(i,"/profile"),PatchProfile:()=>"".concat(i,"/profile"),PostProfilePhoto:()=>"".concat(i,"/profile/photo"),GetProfileNearby:e=>"".concat(i,"/profile/nearby/").concat(e),PatchProfileGeo:(e,t)=>"".concat(i,"/profile/geo/").concat(e,"/").concat(t)},r={GetBusinesses:()=>"".concat(i,"/business"),GetBusinessesByPincode:e=>"".concat(i,"/business/nearby/").concat(e),GetBusinessByPinCodeCategory:(e,t)=>"".concat(i,"/business/nearby/").concat(e,"/").concat(t),GetBusinessById:e=>"".concat(i,"/business/").concat(e),PostBusiness:()=>"".concat(i,"/business"),PatchBusiness:()=>"".concat(i,"/business"),DeleteBusiness:e=>"".concat(i,"/business/").concat(e)},l={GetPublicPosts:e=>"".concat(i,"/post/public/20/").concat(e),GetPosts:e=>"".concat(i,"/post/20/").concat(e),GetPostById:e=>"".concat(i,"/post/").concat(e),PostPost:()=>"".concat(i,"/post"),PatchPost:()=>"".concat(i,"/post"),DeletePost:e=>"".concat(i,"/post/").concat(e)};var p=a(82651),u=a(73365);let c=p.A.create({headers:{"Content-Type":"application/json"}}),d=e=>{let t=s.retry-e;return s.firstRetryAt*2**t};c.interceptors.request.use(async e=>{try{let t=(0,u.qb)();return t&&(e.headers.Authorization="Bearer ".concat(t)),e}catch(t){if(t instanceof Error)throw e}return Promise.reject(Error)}),c.interceptors.response.use(e=>e,async e=>{let{config:t,response:{status:a}}=e;return(401===a&&(window.location.href="/expired"),(null==t?void 0:t.retry)&&!(a<500))?(t.retry-=1,await new Promise(e=>{setTimeout(()=>{e()},d(t.retry))}),c(t)):Promise.reject(e)});var y=function(e){return e.GET="get",e.POST="post",e.POST_FORM="post_form",e.PATCH="patch",e.DELETE="delete",e}(y||{});let A=async(e,t,a)=>{switch(e){case"get":return await c.get(t);case"post":return await c.post(t,a);case"post_form":return await c.post(t,a,{headers:{"Content-Type":"multipart/form-data","Content-Length":"Infinity"}});case"patch":return await c.patch(t,a);case"delete":return await c.delete(t);default:throw Error("Unsupported method: ".concat(e))}},f={GetMyBusinessList:async()=>A("get",r.GetBusinesses()),GetBusinessListByPinCode:async e=>A("get",r.GetBusinessesByPincode(e)),GetBusinessListByPinCodeCategory:async(e,t)=>A("get",r.GetBusinessByPinCodeCategory(e,t)),GetBusinessById:async e=>A("get",r.GetBusinessById(e)),CreateBusiness:async e=>A("post",r.PostBusiness(),e),UpdateBusiness:async e=>A("patch",r.PatchBusiness(),e),DeleteBusiness:async e=>A("delete",r.DeleteBusiness(e))},h={CreateToken:async e=>A("post",o.PostAuthToken(),e),CreateOtp:async e=>A("post",o.PostAuthOtp(),e),ResetAuth:async()=>A("get",o.GetAuthReset()),GetOtpSecret:async()=>A("get",o.GetAuthOtpSecret())},m={GetProfile:async()=>A("get",n.GetProfile()),GetProfileById:async e=>A("get",n.GetProfileById(e)),CreateProfile:async e=>A("post",n.PostProfile(),e),UpdateProfile:async e=>A("patch",n.PatchProfile(),e),UpdateProfilePhoto:async e=>A("post_form",n.PostProfilePhoto(),e),UpdateProfileGeo:async(e,t)=>A("patch",n.PatchProfileGeo(e,t)),GetProfileNearby:async e=>A("get",n.GetProfileNearby(e))},P={GetPublicPosts:async e=>A("get",l.GetPublicPosts(e)),GetPosts:async e=>A("get",l.GetPosts(e)),GetPostById:async e=>A("get",l.GetPostById(e)),CreatePost:async e=>A("post",l.PostPost(),e),UpdatePost:async e=>A("patch",l.PatchPost(),e),DeletePost:async e=>A("delete",l.DeletePost(e))}},57061:(e,t,a)=>{a.d(t,{Dr:()=>r,E6:()=>i,JT:()=>o,YK:()=>s,YT:()=>n});var s=function(e){return e.SuperAdmin="SuperAdmin",e.Admin="Admin",e.User="User",e.InvitedUser="InvitedUser",e.Creator="Creator",e}({}),i=function(e){return e.Alumni="Alumni",e.Student="Student",e.Staff="Staff",e.ExStaff="ExStaff",e}({}),o=function(e){return e.NotStarted="NotStarted",e.InProgress="InProgress",e.Success="Success",e.Failure="Failure",e}({}),n=function(e){return e.Male="Male",e.Female="Female",e.Other="Other",e}({});let r={IsText:e=>null!=e&&""!==e,IsNumber:e=>new RegExp(/^[0-9]+$/).test(e),IsEmail:e=>new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(e),IsPhone:e=>new RegExp(/^[+]?[0-9]{10,13}$/).test(e),IsWebsite:e=>new RegExp(/^(http|https):\/\/[^ "]+$/).test(e),IsGuid:e=>new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/).test(e)}},39161:(e,t,a)=>{a.d(t,{c:()=>s});let s=(0,a(12115).createContext)({authData:{name:"",email:""},isAuthenticated:!1,setIsAuthenticated:()=>{},setAuthData:()=>{}})},73365:(e,t,a)=>{a.d(t,{AJ:()=>l,Xb:()=>p,ZG:()=>o,qb:()=>r,uj:()=>i,uy:()=>u});let s="undefined"!=typeof localStorage,i=e=>{s&&localStorage.setItem("authData",JSON.stringify(e))},o=()=>{s&&localStorage.removeItem("authData")},n=()=>{if(s){var e;return JSON.parse(null!==(e=localStorage.getItem("authData"))&&void 0!==e?e:"{}")}return{}},r=()=>{let e=n();return e?e.accessToken:""},l=()=>{let e=n();if(!e)return!1;{let t=Date.now()/1e3;return!!e.expiresOn&&e.expiresOn>t||(s&&delete localStorage.authData,!1)}},p=()=>{let e=n();return e?e.roles:[]},u=()=>{let e=n();return e?e.resource:""}}}]);