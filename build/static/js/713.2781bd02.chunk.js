"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[713],{2557:function(e,n,r){r(72791);var t=r(16587),a=r(98158),s=r(80184);n.Z=function(e){var n=e.type,r=e.className,i=e.disabled,c=e.title,o=e.loading,l=e.content,u=e.color,d=e.onClick;return(0,s.jsx)(a.Z,{content:l,children:(0,s.jsx)("button",{onClick:d,type:n,className:r,disabled:i,children:o?(0,s.jsx)(t.Z,{color:u}):c})})}},25922:function(e,n,r){r.d(n,{od:function(){return t}});var t=[{id:1,name:"Male"},{id:2,name:"Female"}]},16587:function(e,n,r){r(72791);var t=r(32328),a=r(80184);n.Z=function(e){var n=e.color;return(0,a.jsx)("img",{src:t,alt:"spinner",color:n,height:"30px",className:"ml-4"})}},94924:function(e,n,r){r.d(n,{Z:function(){return a}});r(72791);var t=r(80184),a=function(e){return(0,t.jsx)("div",{className:"error",children:e.children})}},98158:function(e,n,r){r(72791);var t=r(81067),a=r(80184);n.Z=function(e){var n=e.content,r=e.children;return(0,a.jsx)(t.ZP,{content:n,children:r})}},91713:function(e,n,r){r.r(n);var t=r(33032),a=r(23430),s=r(84322),i=r.n(s),c=r(72791),o=r(55705),l=r(2557),u=r(77849),d=r(56391),m=r(94924),p=r(16030),f=r(91653),v=r(29801),h=r(87273),x=r(25922),b=r(79271),g=r(12667),_=r(89731),j=r(80184),N=function(e){var n=e.loading,r=e.currentPage,s=(0,b.k6)(),N=((0,p.v9)((function(e){return e.auth.permissions})),(0,p.v9)((function(e){return e.auth.is_superuser})),(0,p.v9)((function(e){return e.user.user}))),y=(0,p.v9)((function(e){return e.user.edit})),Z=(0,p.I0)(),w=(0,c.useState)(!1),k=(0,a.Z)(w,2),F=k[0],U=k[1],A={first_name:y?null===N||void 0===N?void 0:N.first_name:"",middle_name:y?null===N||void 0===N?void 0:N.middle_name:"",last_name:y?null===N||void 0===N?void 0:N.last_name:"",email:y?null===N||void 0===N?void 0:N.email:"",username:y?null===N||void 0===N?void 0:N.username:"",user_branch:y?null===N||void 0===N?void 0:N.user_branch:null,group:y?null===N||void 0===N?void 0:N.group:null,employee_id:y?null===N||void 0===N?void 0:N.employee_id:"",gender:y?x.od.find((function(e){return e.id===(null===N||void 0===N?void 0:N.gender)})):"",remarks:"",is_active:!!y&&(null===N||void 0===N?void 0:N.is_active)},C=d.Ry().shape({first_name:d.Z_().min(2,"First name must be at least 2 characters.").max(50,"First name should be 50 characters.").matches(/(?=.*^[A-Za-z]\w).*$/,"First name should only contain alphabet."),middle_name:d.Z_().min(2,"Middle name must be at least 2 characters.").max(50,"Middle name should be 50 characters.").matches(/(?=.*^[A-Za-z]\w).*$/,"Middle name should only contain alphabet."),last_name:d.Z_().min(2,"Last name must be at least 2 characters.").max(50,"Last name should be 50 characters.").matches(/(?=.*^[A-Za-z]\w).*$/,"Last name should only contain alphabet."),email:d.Z_().email().required("Email is required."),user_branch:d.Ry().typeError("Branch is required").required("Branch is required"),group:d.Ry().typeError("Group is required").required("Group is required"),employee_id:d.Z_(),username:d.Z_().required("Username is required.").min(4,"Username must be at least 4 characters.").max(50,"Username should be 50 characters.").matches(/(?=.*^[A-Za-z_]\w).*$/,"Username should begin with _ or alphabet."),is_active:d.Xg(),gender:d.Ry().nullable(!0),remarks:d.Z_().required("Remarks is required")}),M=function(){var e=(0,t.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y||n.target.value===(null===N||void 0===N?void 0:N.username)){e.next=6;break}if(!n.target.value.trim()||""===n.target.value){e.next=6;break}return e.next=4,(0,h.k)(n);case 4:e.sent?(0,v.Mn)("User name with this  is already added. ")||U(!0):U(!1);case 6:if(y||!n.target.value.trim()||""===n.target.value){e.next=11;break}return e.next=9,(0,h.k)(n);case 9:e.sent?(0,v.Mn)("User with this name is already added ")||U(!0):U(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=(0,t.Z)(i().mark((function e(n,r,t){var a,s,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.limit,s=t.offset,e.next=3,(0,_.Z)("/api/v1/core-app/branch?search=".concat(n,"&offset=").concat(s,"&limit=").concat(a));case 3:return c=e.sent,o=c.data,e.abrupt("return",{options:o.results,hasMore:o.count>a,additional:{offset:a,limit:a+10}});case 6:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),E=function(){var e=(0,t.Z)(i().mark((function e(n,r,t){var a,s,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.limit,s=t.offset,e.next=3,(0,_.Z)("/api/v1/group-app/group?search=".concat(n,"&offset=").concat(s,"&limit=").concat(a));case 3:return c=e.sent,o=c.data,e.abrupt("return",{options:o.results,hasMore:o.count>a,additional:{offset:a,limit:a+10}});case 6:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"row  mt-3",children:(0,j.jsx)("div",{className:"col-12",children:(0,j.jsx)("div",{className:"registration-process ",children:(0,j.jsx)(o.J9,{enableReinitialize:!0,initialValues:A,validationSchema:C,onSubmit:function(e){var n=e.first_name,t=e.middle_name,a=e.last_name,i=e.email,c=e.username,o=e.employee_id,l=e.user_branch,u=e.is_active,d=e.group,m=e.gender,p=e.remarks,v=(null===n||void 0===n?void 0:n.charAt(0).toUpperCase())+(null===n||void 0===n?void 0:n.slice(1)),h=(null===a||void 0===a?void 0:a.charAt(0).toUpperCase())+(null===a||void 0===a?void 0:a.slice(1)),x=(null===t||void 0===t?void 0:t.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:t.slice(1));if(U(!0),y){var b=N.id;Z((0,f.Nq)(b,{first_name:v,middle_name:x,last_name:h,email:i,username:(null===c||void 0===c?void 0:c.charAt(0).toLowerCase())+(null===c||void 0===c?void 0:c.slice(1)),gender:""!==m?m.id:"",employee_id:o,user_branch:null===l||void 0===l?void 0:l.id,group:null===d||void 0===d?void 0:d.id,is_active:u,remarks:p},s,r))}},children:function(e){return(0,j.jsxs)(o.l0,{autoComplete:"off",children:[(0,j.jsxs)("div",{className:"form-group row mb-2 justify-content-center",children:[(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsx)("label",{htmlFor:"first_name",className:"fw-bold",children:"First Name"}),(0,j.jsx)(o.gN,{type:"text",name:"first_name",className:"form-control ",placeholder:"First Name"}),(0,j.jsx)(o.Bc,{name:"first_name",component:m.Z})]}),(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsx)("label",{htmlFor:"middle_name",className:"fw-bold",children:"Middle Name"}),(0,j.jsx)(o.gN,{type:"text",name:"middle_name",className:"form-control ",placeholder:"Middle Name"}),(0,j.jsx)(o.Bc,{name:"middle_name",component:m.Z})]}),(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsx)("label",{htmlFor:"last_name",className:"fw-bold",children:"Last Name"}),(0,j.jsx)(o.gN,{type:"text",name:"last_name",className:"form-control ",placeholder:"Last Name"}),(0,j.jsx)(o.Bc,{name:"last_name",component:m.Z})]}),(0,j.jsxs)("div",{className:"col-3 ",children:[(0,j.jsxs)("label",{htmlFor:"user_branch",className:"fw-bold ",children:["Branch",(0,j.jsx)("strong",{className:"text-danger ml-1",children:"*"})]}),(0,j.jsx)("div",{style:{display:"flex"},children:(0,j.jsx)("div",{className:"col-12",children:(0,j.jsx)(g.n9,{value:e.values.user_branch,isClearable:"true",isSearchable:"true",name:"user_branch",getOptionLabel:function(e){return"".concat(null===e||void 0===e?void 0:e.name," ")},getOptionValue:function(e){return"".concat(null===e||void 0===e?void 0:e.id)},onChange:function(n){e.setFieldValue("user_branch",n)},loadOptions:R,additional:{offset:0,limit:10}})})}),(0,j.jsx)("div",{children:(0,j.jsx)(o.Bc,{name:"user_branch",component:m.Z})})]})]}),(0,j.jsxs)("div",{className:"form-group row mb-2 justify-content-center",children:[(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsxs)("label",{htmlFor:"username",className:"fw-bold",children:["User Name (Case sensitive)",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)(o.gN,{type:"text",name:"username",className:"form-control ",placeholder:"Username",onChange:function(n){var r=(n.target.value||"").replace(/\s+/gi,"");e.setFieldValue("username",r.trim()),M(n)}}),(0,j.jsx)(o.Bc,{name:"username",component:m.Z})]}),(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsxs)("label",{htmlFor:"email",className:"fw-bold",children:["Email",(0,j.jsx)("strong",{className:"text-danger ml-1",children:"*"})]}),(0,j.jsx)(o.gN,{type:"email",name:"email",className:"form-control ",placeholder:"Email"}),(0,j.jsx)(o.Bc,{name:"email",component:m.Z})]}),(0,j.jsxs)("div",{className:"col-3 ",children:[(0,j.jsxs)("label",{htmlFor:"group",className:"fw-bold ",children:["Group",(0,j.jsx)("strong",{className:"text-danger ml-1",children:"*"})]}),(0,j.jsx)("div",{style:{display:"flex"},children:(0,j.jsx)("div",{className:"col-12",children:(0,j.jsx)(g.n9,{value:e.values.group,isClearable:"true",isSearchable:"true",name:"group",getOptionLabel:function(e){return"".concat(null===e||void 0===e?void 0:e.name," ")},getOptionValue:function(e){return"".concat(null===e||void 0===e?void 0:e.id)},onChange:function(n){e.setFieldValue("group",n)},loadOptions:E,additional:{offset:0,limit:10}})})}),(0,j.jsx)("div",{children:(0,j.jsx)(o.Bc,{name:"group",component:m.Z})})]}),(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsx)("label",{htmlFor:"gender",className:"fw-bold",children:"Gender"}),(0,j.jsx)(u.ZP,{value:e.values.gender,isClearable:"true",isSearchable:"true",name:"gender",getOptionLabel:function(e){return"".concat(null===e||void 0===e?void 0:e.name," ")},getOptionValue:function(e){return"".concat(null===e||void 0===e?void 0:e.id)},options:x.od,onChange:function(n){e.setFieldValue("gender",n)}}),(0,j.jsx)(o.Bc,{name:"gender",component:m.Z})]})]}),(0,j.jsx)("div",{className:"form-group row mb-2",children:(0,j.jsxs)("div",{className:"col-3",children:[(0,j.jsxs)("label",{htmlFor:"remarks",className:"fw-bold",children:["Remarks",(0,j.jsx)("span",{className:"text-danger",children:"*"})]}),(0,j.jsx)("textarea",{type:"text",name:"remarks",onChange:function(n){e.setFieldValue("remarks",n.target.value.trim())},className:"form-control",placeholder:"Enter remarks"}),(0,j.jsx)(o.Bc,{name:"remarks",component:m.Z})]})}),(0,j.jsx)("div",{className:"form-group row mb-2 justify-content-center",children:(0,j.jsx)("div",{className:"form-group row mb-2 ",children:(0,j.jsxs)("div",{className:"col-12 text-center ",children:[(0,j.jsx)(o.gN,{type:"checkbox",name:"is_active",id:"is_active",className:"filled-in chk-col-blue"}),(0,j.jsxs)("label",{htmlFor:"is_active",className:"fw-bold  mx-2",children:[" ","Active"]})]})})}),(0,j.jsx)("div",{className:"form-group text-center",children:(0,j.jsx)(l.Z,{type:"btn",className:"btn btn-primary ",loading:n,disabled:F,title:"Update",content:"Update"})})]})}})})})})})};n.default=c.memo(N)},79814:function(e,n,r){r.d(n,{Nq:function(){return l},PR:function(){return a},Rv:function(){return c},TI:function(){return s},hj:function(){return i},o1:function(){return u},pX:function(){return d},r4:function(){return o}});var t=r(89731),a=function(e){return t.Z.get("api/v1/user-app/user?offset=0&limit=".concat(e,"&ordering=-id"))},s=function(e){return t.Z.get(e)},i=function(e){return t.Z.get(e)},c=function(e,n){return t.Z.get("api/v1/user-app/user?offset=".concat((e-1)*n,"&limit=").concat(n,"&ordering=-id"))},o=function(e){return t.Z.post("api/v1/user-app/user",e)},l=function(e,n){return t.Z.patch("api/v1/user-app/update-user/".concat(e),n)},u=function(e,n){return t.Z.get("api/v1/user-app/user?offset=0&limit=".concat(n,"&search=").concat(e))},d=function(e,n){return t.Z.get("api/v1/user-app/user?username=".concat(e.target.value.trim()),{cancelToken:n.token})}},91653:function(e,n,r){r.d(n,{r4:function(){return g},hj:function(){return x},Rv:function(){return b},TI:function(){return h},PR:function(){return v},o1:function(){return j},Nq:function(){return _}});var t=r(18489),a=r(33032),s=r(84322),i=r.n(s),c=r(79814),o=r(88038),l=function(){return{type:o.A.LOADING_USER}},u=function(){return{type:o.A.LOADING_UPDATED}},d=function(e){return{type:o.A.GET_USER_SUCCESS,payload:e}},m=function(e){return{type:o.A.GET_USER_FAIL,payload:e}},p=function(e){return{type:o.A.UPDATE_USER_FAIL,payload:e}},f=r(29801),v=(r(30456),function(e){return function(){var n=(0,a.Z)(i().mark((function n(r){var a,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(l()),n.next=4,c.PR(e);case 4:a=n.sent,s=a.data,o=s.results.filter((function(e){return!1===e.is_superuser})),r(d((0,t.Z)((0,t.Z)({},s),{},{results:o}))),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r(m(n.t0)),(0,f.Mn)(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}),h=function(e){return function(){var n=(0,a.Z)(i().mark((function n(r){var a,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(l()),n.next=4,c.TI(e);case 4:a=n.sent,s=a.data,o=s.results.filter((function(e){return!1===e.is_superuser})),r(d((0,t.Z)((0,t.Z)({},s),{},{results:o}))),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r(m(n.t0)),(0,f.Mn)(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},x=function(e){return function(){var n=(0,a.Z)(i().mark((function n(r){var a,s,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(l()),n.next=4,c.hj(e);case 4:a=n.sent,s=a.data,o=s.results.filter((function(e){return!1===e.is_superuser})),r(d((0,t.Z)((0,t.Z)({},s),{},{results:o}))),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r(m(n.t0)),(0,f.Mn)(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},b=function(e){var n=e.number,r=e.postsPerPage;return function(){var e=(0,a.Z)(i().mark((function e(t){var a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(l()),e.next=4,c.Rv(n,r);case 4:a=e.sent,s=a.data,t(d(s)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(m(e.t0)),(0,f.Mn)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},g=function(e,n){var r=e.first_name,t=e.middle_name,s=e.last_name,u=e.email,d=e.username,m=e.employee_id,p=e.is_active,v=e.user_branch,h=e.group,x=e.gender,g=e.password,_=e.confirm_password,j=e.history;return function(){var e=(0,a.Z)(i().mark((function e(a){var N;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N=JSON.stringify({first_name:r,middle_name:t,last_name:s,email:u,username:d,employee_id:m,group:h,is_active:p,user_branch:v,gender:x,password:g,confirm_password:_}),a(l()),e.next=5,c.r4(N);case 5:(0,f.My)("User created successfully "),a(b({number:n,postsPerPage:10})),j.push("/user"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a((i=e.t0,{type:o.A.CREATE_USER_FAIL,payload:i})),(0,f.Mn)("Failed to create user.");case 14:case"end":return e.stop()}var i}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},_=function(e,n,r){return function(){var t=(0,a.Z)(i().mark((function t(a){var s,o,l,d,m,v,h,x,g,_,j,N,y;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.first_name,o=n.middle_name,l=n.last_name,d=n.email,m=n.username,v=n.employee_id,h=n.user_branch,x=n.group,g=n.gender,_=n.is_active,j=n.remarks,t.prev=1,a(u()),N=JSON.stringify({first_name:s,middle_name:o,last_name:l,email:d,username:m,employee_id:v,user_branch:h,group:x,gender:g,is_active:_,remarks:j}),t.next=6,c.Nq(e,N);case 6:y=t.sent,y.data,a(b({number:1,postsPerPage:10})),(0,f.My)("User Updated Successfully "),r.push("/user"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),a(p(t.t0)),(0,f.Mn)("Failed to Update User");case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e,n){return function(){var r=(0,a.Z)(i().mark((function r(t){var a,s;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t(l()),r.next=4,c.o1(e,n);case 4:a=r.sent,s=a.data,t(d(s)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),t(m(r.t0)),(0,f.Mn)(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}},87273:function(e,n,r){r.d(n,{k:function(){return u}});var t,a=r(33032),s=r(84322),i=r.n(s),c=r(74569),o=r.n(c),l=r(79814),u=function(){var e=(0,a.Z)(i().mark((function e(n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"!==typeof t&&t.cancel("Operation canceled due to new request."),t=o().CancelToken.source(),e.prev=2,e.next=5,(0,l.pX)(n,t);case 5:if(r=e.sent,!((a=r.data).length>0)){e.next=9;break}return e.abrupt("return",!0);case 9:if(!(a.length<=0)){e.next=11;break}return e.abrupt("return",!1);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}()},32328:function(e,n,r){e.exports=r.p+"static/media/spinner.9012f56ae4662e1be3c6.gif"}}]);
//# sourceMappingURL=713.2781bd02.chunk.js.map