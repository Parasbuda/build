"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[751],{2557:function(e,n,t){t(72791);var r=t(16587),i=t(98158),s=t(80184);n.Z=function(e){var n=e.type,t=e.className,a=e.disabled,c=e.title,o=e.loading,u=e.content,l=e.color,d=e.onClick;return(0,s.jsx)(i.Z,{content:u,children:(0,s.jsx)("button",{onClick:d,type:n,className:t,disabled:a,children:o?(0,s.jsx)(r.Z,{color:l}):c})})}},16587:function(e,n,t){t(72791);var r=t(32328),i=t(80184);n.Z=function(e){var n=e.color;return(0,i.jsx)("img",{src:r,alt:"spinner",color:n,height:"30px",className:"ml-4"})}},94924:function(e,n,t){t.d(n,{Z:function(){return i}});t(72791);var r=t(80184),i=function(e){return(0,r.jsx)("div",{className:"error",children:e.children})}},98158:function(e,n,t){t(72791);var r=t(81067),i=t(80184);n.Z=function(e){var n=e.content,t=e.children;return(0,i.jsx)(r.ZP,{content:n,children:t})}},38751:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r,i=t(33032),s=t(18489),a=t(23430),c=t(84322),o=t.n(c),u=t(72791),l=t(55705),d=t(56391),p=t(94924),f=t(16030),m=t(29801),v=t(70432),h=t(74569),x=t.n(h),g=t(79814),b=function(){var e=(0,i.Z)(o().mark((function e(n){var t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"!==typeof r&&r.cancel("Operation canceled due to new request."),r=x().CancelToken.source(),e.prev=2,e.next=5,(0,g.pX)(n,r);case 5:if(t=e.sent,!((i=t.data).length>0)){e.next=9;break}return e.abrupt("return",!0);case 9:if(!(i.length<=0)){e.next=11;break}return e.abrupt("return",!1);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n){return e.apply(this,arguments)}}(),j=t(2557),k=t(35531),y=t(80184),Z=function(e){var n=e.permissions,t=e.title,r=e.checkedPermissions,i=e.setCheckedPermissions,s=function(e){if(0===r.filter((function(n){return n.id===e.id})).length)i([].concat((0,k.Z)(r),[e]));else{var n=r.filter((function(n){return n.id!==e.id}));i(n)}};return(0,y.jsx)("div",{className:"col-sm-4 mt-4 mb-3",children:(0,y.jsxs)("div",{className:"card-permission ",children:[(0,y.jsx)("div",{className:"header-content mb-0",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-sm-2 p-2",children:(0,y.jsx)("input",{type:"checkbox",name:t,checked:r.length===n.length&&0!==n.length,onChange:function(){return function(e){e.length!==r.length?i(e):i([])}(n)},disabled:0===n.length})}),(0,y.jsxs)("div",{className:"col-sm-10",children:[(0,y.jsx)("h4",{className:"m-0",children:t}),(0,y.jsx)("p",{className:"m-0",children:"".concat(r.length,"/").concat(n.length," selected")})]})]})}),(0,y.jsx)("div",{className:"card-body p-0",children:(0,y.jsx)("div",{className:"permission-list",children:(0,y.jsx)("ul",{className:"list-permission",children:n.length>0&&n.map((function(e){return(0,y.jsx)("li",{className:"list-group-permission",onClick:function(){return s(e)},children:(0,y.jsxs)("div",{className:"row align-text-center",children:[(0,y.jsx)("div",{className:"col-sm-2",children:(0,y.jsx)("input",{type:"checkbox",name:e.name,checked:r.includes(e),onChange:function(){return s(e)}})}),(0,y.jsx)("div",{className:"col-sm-10",children:e.name})]})},e.id)}))})})})]})})},N=t(56355),w=t(12667),P=t(89731),S=function(e){var n=e.selectedPermissions,t=e.setSelectedPermissions,r=e.holdPermissions,s=e.setHoldPermissions,c=(0,f.I0)(),l=(0,f.v9)((function(e){return e.userGroup.permissions})),d=(0,f.v9)((function(e){return e.userGroup.edit})),p=(0,f.v9)((function(e){return e.userGroup.userGroup})),h=(0,u.useState)(null),x=(0,a.Z)(h,2),g=x[0],b=x[1],j=(0,u.useState)([]),S=(0,a.Z)(j,2),_=S[0],R=S[1],C=(0,u.useState)([]),G=(0,a.Z)(C,2),U=G[0],E=G[1],M=(0,u.useState)([]),O=(0,a.Z)(M,2),F=O[0],I=O[1];(0,u.useEffect)((function(){c((0,v.Hj)())}),[c]),(0,u.useEffect)((function(){if(d){if((null===p||void 0===p?void 0:p.permissions.length)>0&&0===n.length)if(r.length>0){var e=r.map((function(e){return e.id})),i=p.permissions.filter((function(n){return!e.includes(n)})),s=l.filter((function(e){return!i.includes(e.id)})),a=l.filter((function(e){return i.includes(e.id)}));R(s),t(a)}else{var c=null===l||void 0===l?void 0:l.filter((function(e){return!(null!==p&&void 0!==p&&p.permissions.includes(e.id))})),o=l.filter((function(e){return null===p||void 0===p?void 0:p.permissions.includes(e.id)}));R(c),t(o)}else if((null===p||void 0===p?void 0:p.permissions.length)>0&&n.length>0){var u=l.filter((function(e){return!n.find((function(n){var t=n.id;return e.id===t}))}));R(u)}else if(l.length>0)if(n.length>0){var f=l.filter((function(e){return!n.find((function(n){var t=n.id;return e.id===t}))}));R(f)}else R(l)}else if((null===l||void 0===l?void 0:l.length)>0)if(n.length>0){var m=l.filter((function(e){return!n.find((function(n){var t=n.id;return e.id===t}))}));R(m)}else R(l)}),[l]);var A=function(){var e=(0,i.Z)(o().mark((function e(n,t,r){var i,s,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.limit,s=r.offset,e.next=3,(0,P.Z)("/api/v1/group-app/permission-category?search=".concat(n,"&offset=").concat(s,"&limit=").concat(i));case 3:return a=e.sent,c=a.data,e.abrupt("return",{options:c.results,hasMore:c.count>i,additional:{offset:i,limit:i+10}});case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:"row justify-content-md-center mt-4 align-items-center",children:[(0,y.jsxs)("div",{className:"col-sm-10",children:[(0,y.jsx)("h5",{children:"Add Permission"}),(0,y.jsxs)("div",{className:"col-sm-12",children:[(0,y.jsx)("label",{htmlFor:"permissionCategory",children:"Group Name"}),(0,y.jsx)(w.n9,{value:g,isClearable:"true",isSearchable:"true",name:"permissionCategory",getOptionLabel:function(e){return"".concat(null===e||void 0===e?void 0:e.name," ")},getOptionValue:function(e){return"".concat(null===e||void 0===e?void 0:e.id)},onChange:function(e){!function(e){b(e),c(null!==e?(0,v.mx)(null===e||void 0===e?void 0:e.id):(0,v.Hj)())}(e)},loadOptions:A,additional:{offset:0,limit:10}})]})]}),(0,y.jsx)(Z,{permissions:_,title:"UnSelected Permissions",checkedPermissions:F,setCheckedPermissions:I}),(0,y.jsx)("div",{className:"col-sm-2 text-center align-it",children:(0,y.jsxs)("div",{className:"align-middle",children:[(0,y.jsx)("div",{children:(0,y.jsx)("button",{type:"button",className:" btn btn-primary btn-sm",onClick:function(){if(F.length>0&&0===U.length){var e=_.filter((function(e){return!F.find((function(n){var t=n.id;return e.id===t}))}));t([].concat((0,k.Z)(n),(0,k.Z)(F))),R(e),I([])}else 0===F.length&&0===U.length?(0,m.Mn)("Please select permission from unselected permissions"):(0,m.Mn)("Yo have checked some permission from selected permissions.Please uncheck them and try again")},disabled:0===_.length,children:(0,y.jsx)(N.Z1Y,{})})}),(0,y.jsx)("div",{children:(0,y.jsx)("button",{type:"button",className:" btn btn-primary btn-sm mt-2",onClick:function(){if(U.length>0&&0===F.length)if(l.filter((function(e){return U.find((function(n){var t=n.id;return e.id===t}))})).length===U.length){var e=n.filter((function(e){return!U.find((function(n){var t=n.id;return e.id===t}))}));R([].concat((0,k.Z)(_),(0,k.Z)(U))),t(e),d&&s(U),E([])}else(0,m.Mn)("You are trying to remove permission of another module.Please check the module and remove related permissions");else 0===F.length&&0===U.length?(0,m.Mn)("Please select permission from selected permissions"):(0,m.Mn)("Yo have checked some permission from unselected permissions.Please uncheck them and try again")},disabled:0===n.length,children:(0,y.jsx)(N.x_l,{})})})]})}),(0,y.jsx)(Z,{permissions:n,title:"Selected Permissions",checkedPermissions:U,setCheckedPermissions:E})]})},_=t(79271),R=function(){var e=(0,_.k6)(),n=(0,f.v9)((function(e){return e.userGroup.userGroup})),t=(0,f.v9)((function(e){return e.userGroup.edit})),r=(0,f.I0)(),c=(0,u.useState)(!1),h=(0,a.Z)(c,2),x=h[0],g=h[1],k={name:t?null===n||void 0===n?void 0:n.name:"",permissions:t&&n?null===n||void 0===n?void 0:n.permissions:[],is_active:!t||n.is_active,remarks:""},Z=(0,u.useState)([]),N=(0,a.Z)(Z,2),w=N[0],P=N[1],R=(0,u.useState)([]),C=(0,a.Z)(R,2),G=C[0],U=C[1],E=d.Ry().shape({name:d.Z_().required("Role is required.").min(1,"Role must be at least 1 characters.").max(50,"Role must be 50 characters."),is_active:d.Xg(),remarks:t&&d.Z_().required("Remarks is required.").min(1,"Remarks Name must be at least 1 characters.")}),M=function(){var e=(0,i.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||r.target.value===(null===n||void 0===n?void 0:n.name)){e.next=6;break}if(!r.target.value.trim()||""===r.target.value){e.next=6;break}return e.next=4,b(r);case 4:e.sent?(0,m.Mn)("User Group has already been added ")||g(!0):g(!1);case 6:if(t||!r.target.value.trim()||""===r.target.value){e.next=11;break}return e.next=9,b(r);case 9:e.sent?(0,m.Mn)("User Group  with this name is already added. ")||g(!0):g(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:"row mt-3",children:(0,y.jsx)("div",{className:"col-12 ",children:(0,y.jsx)("div",{className:"registration-process ",children:(0,y.jsx)(l.J9,{enableReinitialize:!0,initialValues:k,validationSchema:E,onSubmit:function(i){var a=w.map((function(e){return e.id}));if(g(!0),t){var c=n.id;r((0,v.GX)(c,e,(0,s.Z)((0,s.Z)({},i),{},{permissions:a})))}else r((0,v.wZ)((0,s.Z)((0,s.Z)({},i),{},{permissions:a}),e));g(!1)},children:function(e){var n=e.setFieldValue,r=(e.values,e.dirty);return(0,y.jsxs)(l.l0,{autoComplete:"off",children:[(0,y.jsx)("div",{className:"form-group row  justify-content-center",children:(0,y.jsxs)("div",{className:"col-10",children:[(0,y.jsxs)("label",{htmlFor:"name",className:"fw-bold float-start",children:["Name",(0,y.jsx)("strong",{className:"text-danger",children:"*"})]}),(0,y.jsx)(l.gN,{type:"text",name:"name",className:"form-control ",placeholder:"Role Name",onChange:function(e){n("name",e.target.value),M(e)},autoFocus:!0}),(0,y.jsx)(l.Bc,{name:"name",component:p.Z})]})}),(0,y.jsx)("div",{className:"form-group row my-4 mt-2 justify-content-center",children:(0,y.jsxs)("div",{className:"col-10",children:[(0,y.jsx)(l.gN,{type:"checkbox",name:"is_active",id:"is_active",className:"filled-in chk-col-blue"}),(0,y.jsxs)("label",{htmlFor:"is_active",className:"fw-bold mx-1",children:[" ","Active"]})]})}),(0,y.jsx)(S,{selectedPermissions:w,setSelectedPermissions:P,holdPermissions:G,setHoldPermissions:U}),t&&(0,y.jsx)("div",{className:"form-group row me-5 ",style:{marginLeft:80},children:(0,y.jsxs)("div",{className:"col-4",children:[(0,y.jsx)("label",{htmlFor:"remarks",className:"fw-bold float-start",children:"Remarks"}),(0,y.jsx)("textarea",{type:"text",name:"remarks",onChange:function(e){n("remarks",e.target.value.trim())},className:"form-control",placeholder:"Enter remarks"}),(0,y.jsx)(l.Bc,{name:"remarks",component:p.Z})]})}),(0,y.jsx)("div",{className:"form-group text-center",children:t?(0,y.jsx)(j.Z,{type:"btn",className:"btn btn-primary ",disabled:x,title:"Update",content:"Update"}):(0,y.jsx)(j.Z,{type:"btn",className:"btn btn-primary",disabled:x||!r,title:"Create",content:"Add"})})]})}})})})})})}},70432:function(e,n,t){t.d(n,{wZ:function(){return S},Hj:function(){return R},hj:function(){return w},R8:function(){return P},TI:function(){return N},mx:function(){return G},xc:function(){return Z},o1:function(){return C},GX:function(){return _}});var r=t(33032),i=t(84322),s=t.n(i),a=t(89731),c=function(e){return a.Z.get("api/v1/group-app/group?offset=0&limit=".concat(e,"&ordering=-id"))},o=function(e){return a.Z.get(e)},u=function(e){return a.Z.get(e)},l=function(e,n){return a.Z.get("api/v1/group-app/group?offset=".concat((e-1)*n,"&limit=").concat(n,"&ordering=-id"))},d=function(e){return a.Z.post("api/v1/group-app/group",e)},p=function(e,n){return a.Z.patch("api/v1/group-app/group/".concat(e),n)},f=function(e,n){return a.Z.get("api/v1/group-app/group?offset=0&limit=".concat(n,"&search=").concat(e))},m=function(e){return a.Z.get("api/v1/group-app/permission?category=".concat(e))},v=t(25406),h=function(){return{type:v.d.LOADING_USER_GROUP}},x=function(e){return{type:v.d.GET_USER_GROUP_SUCCESS,payload:e}},g=function(e){return{type:v.d.GET_USER_GROUP_FAIL,payload:e}},b=function(e){return{type:v.d.UPDATE_USER_GROUP_FAIL,payload:e}},j=function(e){return{type:v.d.GET_USER_PERMISSION_SUCCESS,payload:e}},k=function(e){return{type:v.d.GET_USER_PERMISSION_FAIL,payload:e}},y=t(29801),Z=function(e){return function(){var n=(0,r.Z)(s().mark((function n(t){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,c(e);case 4:r=n.sent,i=r.data,t(x(i)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t(g(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var n=(0,r.Z)(s().mark((function n(t){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,o(e);case 4:r=n.sent,i=r.data,t(x(i)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t(g(n.t0)),(0,y.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},w=function(e){return function(){var n=(0,r.Z)(s().mark((function n(t){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,u(e);case 4:r=n.sent,i=r.data,t(x(i)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t(g(n.t0)),(0,y.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},P=function(e){var n=e.number,t=e.postsPerPage;return function(){var e=(0,r.Z)(s().mark((function e(r){var i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(h()),e.next=4,l(n,t);case 4:i=e.sent,a=i.data,r(x(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r(g(e.t0)),(0,y.Mn)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},S=function(e,n){var t=e.name,i=e.is_active,a=e.permissions;return function(){var e=(0,r.Z)(s().mark((function e(r){var c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=JSON.stringify({name:t,is_active:i,permissions:a}),r(h()),e.next=5,d(c);case 5:o=e.sent,o.data,(0,y.My)("User Group Added Successfully"),n.push("/user-group"),r(P({number:1,postsPerPage:10})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),r((s=e.t0,{type:v.d.CREATE_USER_GROUP_FAIL,payload:s})),(0,y.Mn)("Failed to create User Group.");case 16:case"end":return e.stop()}var s}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()},_=function(e,n,t){return function(){var i=(0,r.Z)(s().mark((function r(i){var a,c,o,u,l,d;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.name,c=t.permissions,o=t.is_active,u=t.remarks,r.prev=1,l=JSON.stringify({name:a,permissions:c,is_active:o,remarks:u}),i(h()),r.next=6,p(e,l);case 6:d=r.sent,d.data,(0,y.My)("User Group Updated Successfully "),i(P({number:1,postsPerPage:10})),n.push("/user-group"),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(1),i(b(r.t0)),(0,y.Mn)("Failed to Update User Group");case 17:case"end":return r.stop()}}),r,null,[[1,13]])})));return function(e){return i.apply(this,arguments)}}()},R=function(){return function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(h()),e.next=4,a.Z.get("api/v1/group-app/permission");case 4:t=e.sent,0===(r=t.data).count&&(0,y.My)("No permissions available"),n(j(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(k(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},C=function(e,n){return function(){var t=(0,r.Z)(s().mark((function t(r){var i,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(h()),t.next=4,f(e,n);case 4:i=t.sent,a=i.data,r(x(a)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),r(g(t.t0)),(0,y.Mn)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e){return function(){var n=(0,r.Z)(s().mark((function n(t){var r,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,m(e);case 4:r=n.sent,0===(i=r.data).count&&t((0,y.My)("No permissions available ")),t(j(i)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t(k(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}},79814:function(e,n,t){t.d(n,{Nq:function(){return u},PR:function(){return i},Rv:function(){return c},TI:function(){return s},hj:function(){return a},o1:function(){return l},pX:function(){return d},r4:function(){return o}});var r=t(89731),i=function(e){return r.Z.get("api/v1/user-app/user?offset=0&limit=".concat(e,"&ordering=-id"))},s=function(e){return r.Z.get(e)},a=function(e){return r.Z.get(e)},c=function(e,n){return r.Z.get("api/v1/user-app/user?offset=".concat((e-1)*n,"&limit=").concat(n,"&ordering=-id"))},o=function(e){return r.Z.post("api/v1/user-app/user",e)},u=function(e,n){return r.Z.patch("api/v1/user-app/update-user/".concat(e),n)},l=function(e,n){return r.Z.get("api/v1/user-app/user?offset=0&limit=".concat(n,"&search=").concat(e))},d=function(e,n){return r.Z.get("api/v1/user-app/user?username=".concat(e.target.value.trim()),{cancelToken:n.token})}},32328:function(e,n,t){e.exports=t.p+"static/media/spinner.9012f56ae4662e1be3c6.gif"}}]);
//# sourceMappingURL=751.7efa9c5e.chunk.js.map