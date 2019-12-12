(this["webpackJsonpreact-data-grid"]=this["webpackJsonpreact-data-grid"]||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),l=a.n(c),o=(a(27),a(2)),i=a(7),s=a(5),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":return Object(s.a)({},e,{users:[].concat(Object(i.a)(e.users),[t.payload.user])});case"READ_USERS":return Object(s.a)({},e,{users:t.payload});case"UPDATE_USER":var a=e.users,r=t.payload,n=a.findIndex((function(e){return e.id===r.id}));return~n?(a[n]=r,Object(s.a)({},e,{users:a,user:null})):Object(s.a)({},e);case"DESTROY_USER":var c=e.users,l=t.payload,o=c.slice(0,l).concat(c.slice(l+1,c.length));return Object(s.a)({},e,{users:o});case"SET_LOADING":return Object(s.a)({},e,{isLoading:t.payload});default:return e}},d=a(1),f=a.n(d),m=a(20),p=a.n(m).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),_=function(e,t){t({type:"SET_LOADING",payload:e})},v=Object(r.createContext)(),E={users:[],isLoading:!1},b=function(e){var t=Object(r.useReducer)(u,E),a=Object(o.a)(t,2),c=a[0],l=a[1],i=function(){return function(e){_(!0,e);f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.awrap(p.get("/users"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})).then((function(t){e({type:"READ_USERS",payload:t.data}),_(!1,e)}))}(l)};Object(r.useEffect)(i,[]);var d={data:c.users,isLoading:c.isLoading,create:function(e){return function(e,t){_(!0,t);f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.awrap(p.post("/users",Object(s.a)({},e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})).then((function(e){t({type:"CREATE_USER",payload:e.data}),_(!1,t)})).catch((function(e){console.log(e)}))}(e,l)},read:i,update:function(e,t){return function(e,t,a){_(!0,a);f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(p.patch("/users/".concat(e),Object(s.a)({},t)));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}})).then((function(e){a({type:"UPDATE_USER",payload:e.data}),_(!1,a)})).catch((function(e){console.log(e)}))}(e,t,l)},destroy:function(e){return function(e,t){_(!0,t);f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.awrap(p.delete("/users/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})).then((function(a){t({type:"DESTROY_USER",payload:e}),_(!1,t)}))}(e,l)}};return n.a.createElement(v.Provider,{value:{store:d,dispatch:l}},e.children)};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var y=n.a.createElement("path",{fill:"currentColor",d:"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"}),O=function(e){var t=e.svgRef,a=e.title,r=h(e,["svgRef","title"]);return n.a.createElement("svg",g({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sync-alt",className:"svg-inline--fa fa-sync-alt fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},r),a?n.a.createElement("title",null,a):null,y)},S=n.a.forwardRef((function(e,t){return n.a.createElement(O,g({svgRef:t},e))})),x=(a.p,function(){var e=Object(r.useContext)(ee),t=e.store,a=e.styles;return n.a.createElement("div",{className:a.refreshButton},t.isLoading?n.a.createElement(S,{className:a.rotate}):n.a.createElement(S,{onClick:function(){t.isLoading||t.read()}}))}),C=function(){var e=Object(r.useContext)(ee),t=e.columns,a=e.styles,c=function(e,t,r){var c=[a.gridHeaderCell];return c.push(a["colStart".concat(t)]),c.push(a["colSpan".concat(r)]),n.a.createElement("div",{key:t,className:c.join(" ")},e)};return t.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:a.gridHeader},function(){var e=1,a=[];if(t.forEach((function(t){if(e<13){var r=t.span;r+e>13&&(r=13-e),a.push(c(t.text,e,r)),e+=r}})),e<13){var r=13-e;a.push(c("",e,r))}return a.push(n.a.createElement(x,{key:"refresh-button"})),a}())):n.a.createElement("span",null,"no valid columns found")};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var w=n.a.createElement("path",{fill:"currentColor",d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}),N=function(e){var t=e.svgRef,a=e.title,r=D(e,["svgRef","title"]);return n.a.createElement("svg",j({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-v",className:"svg-inline--fa fa-ellipsis-v fa-w-6",role:"img",viewBox:"0 0 192 512",ref:t},r),a?n.a.createElement("title",null,a):null,w)},G=n.a.forwardRef((function(e,t){return n.a.createElement(N,j({svgRef:t},e))}));a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var k=n.a.createElement("path",{fill:"currentColor",d:"M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"}),P=function(e){var t=e.svgRef,a=e.title,r=I(e,["svgRef","title"]);return n.a.createElement("svg",R({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen-square",className:"svg-inline--fa fa-pen-square fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},r),a?n.a.createElement("title",null,a):null,k)},L=n.a.forwardRef((function(e,t){return n.a.createElement(P,R({svgRef:t},e))}));a.p;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var U=n.a.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"}),W=function(e){var t=e.svgRef,a=e.title,r=B(e,["svgRef","title"]);return n.a.createElement("svg",A({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"minus-circle",className:"svg-inline--fa fa-minus-circle fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},r),a?n.a.createElement("title",null,a):null,U)},z=n.a.forwardRef((function(e,t){return n.a.createElement(W,A({svgRef:t},e))}));a.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var T=n.a.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}),M=function(e){var t=e.svgRef,a=e.title,r=H(e,["svgRef","title"]);return n.a.createElement("svg",F({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",className:"svg-inline--fa fa-times-circle fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},r),a?n.a.createElement("title",null,a):null,T)},q=n.a.forwardRef((function(e,t){return n.a.createElement(M,F({svgRef:t},e))})),V=(a.p,a(6)),Z=a.n(V),X=function(e){var t=e.idx,a=Object(r.useContext)(ee),c=a.store,l=a.selectedIndex,i=a.setSelectedIndex,s=a.setEditIndex,u=Object(r.useState)(!1),d=Object(o.a)(u,2),f=d[0],m=d[1];Object(r.useEffect)((function(){t!==l&&m(!1)}),[l,t]);var p=[Z.a.bar];return p.push(f?Z.a.barOpen:Z.a.barClosed),n.a.createElement("div",{className:Z.a.actions},n.a.createElement(G,{className:Z.a.open,onClick:function(){i(t),s(-1),f||m(!0)}}),n.a.createElement("div",{className:p.join(" ")},n.a.createElement("div",{className:Z.a.buttonWrap},n.a.createElement("button",{className:Z.a.edit,onClick:function(){i(t),s(t),m(!1)}},n.a.createElement(L,null),"edit"),n.a.createElement("button",{className:Z.a.delete,onClick:function(){c.destroy(t),i(-1)}},n.a.createElement(z,null),"delete")),n.a.createElement("div",{className:Z.a.actionBarClose},n.a.createElement(q,{onClick:function(){m(!1),i(-1)}}))))},J=function(e){var t=e.rec,a=e.idx,c=Object(r.useContext)(ee),l=c.columns,o=c.styles,i=c.selectedIndex,s=c.setSelectedIndex,u=c.setEditIndex,d=function(){s(a!==i?a:-1),u(-1)},f=function(e,t,r){var c=[o.gridDataCell];return c.push(o["colStart".concat(t)]),c.push(o["colSpan".concat(r)]),a===i&&c.push(o.colSelected),n.a.createElement("div",{id:"".concat(a,"-").concat(t),key:"".concat(a,"-").concat(t),onClick:d,className:c.join(" ")},e)};return l.length?n.a.createElement(n.a.Fragment,null,function(){var e=1,r=[];if(l.forEach((function(a){if(e<13){var n=a.span;n+e>13&&(n=13-e),r.push(f(function(e){for(var a=t,r=e.split(".");r.length>1;)a=t[r[0]],r.shift();return a[r[0]]}(a.dataIndex),e,n))}e+=a.span})),e<13){var c=13-e;r.push(f(" ",e,c))}return r.push(n.a.createElement(X,{idx:a,key:"action-column"})),r}()):n.a.createElement("span",null,"no valid columns found")},Q=function(){var e=Object(r.useContext)(ee),t=e.store,a=e.styles,c=e.selectedIndex,l=(e.addRef,[a.gridDataWrap]);return c>=0&&l.push(a.gridDataWrapShrink),t.data.length?n.a.createElement("div",{className:l.join(" ")},n.a.createElement("div",{className:a.gridData},t.data.map((function(e,t){return n.a.createElement(J,{key:t,rec:e,idx:t})})))):n.a.createElement("span",null,"no rows found")},Y=a(9),$=a.n(Y),K=function(e){var t=e.infoCard,a=e.editForm,c=Object(r.useContext)(ee),l=c.styles,o=c.selectedIndex,i=c.setSelectedIndex,s=c.editIndex,u=[l.card];u.push(o>=0?l.cardOpen:l.cardClosed);var d=t;return s>0&&(d=a),n.a.createElement("div",{className:u.join(" ")},n.a.createElement("div",{className:l.close},n.a.createElement(q,{onClick:function(){return i(-1)}})),d)},ee=Object(r.createContext)(),te=function(e){var t=e.store,a=e.columns,c=e.infoCard,l=e.editForm,i=Object(r.useState)(-1),s=Object(o.a)(i,2),u=s[0],d=s[1],f=Object(r.useState)(-1),m=Object(o.a)(f,2),p=m[0],_=m[1],v=Object(r.useState)({}),E=Object(o.a)(v,2),b=E[0];E[1];Object(r.useEffect)((function(){if(u>0){var e=document.getElementById("".concat(u,"-1"));setTimeout((function(){e.scrollIntoView()}),400)}}),[u]);var g={store:t,columns:a,styles:$.a,selectedIndex:u,setSelectedIndex:d,editIndex:p,setEditIndex:_,refs:b};return n.a.createElement(ee.Provider,{value:g},n.a.createElement("div",{className:$.a.grid},n.a.createElement(C,{columns:a}),n.a.createElement("div",{className:$.a.gridBody},n.a.createElement(Q,{store:t,value:g}),n.a.createElement(K,{infoCard:c,editForm:l})),n.a.createElement("div",{className:$.a.gridFooter})))},ae=a(8),re=a.n(ae),ne=function(){var e=Object(r.useContext)(v).store,t=Object(r.useContext)(ee).selectedIndex,a=e.data[t];return t>=0&&a?n.a.createElement("div",{className:re.a.infoCardWrap},n.a.createElement("h1",{className:re.a.cardHeader},a.name),n.a.createElement("div",{className:re.a.infoCard},n.a.createElement("div",{className:re.a.userSection},n.a.createElement("h2",null,"Personal"),n.a.createElement("div",null,"username:"),n.a.createElement("div",null,a.username),n.a.createElement("div",null,"email:"),n.a.createElement("div",null,a.email),n.a.createElement("div",null,"phone:"),n.a.createElement("div",null,a.phone),n.a.createElement("div",null,"website:"),n.a.createElement("div",null,a.website)),n.a.createElement("div",{className:re.a.addressSection},n.a.createElement("h2",null,"Address"),n.a.createElement("div",null,a.address.street),n.a.createElement("div",null,a.address.suite),n.a.createElement("div",null,a.address.city),n.a.createElement("div",null,a.address.zipcode)),n.a.createElement("div",{className:re.a.companySection},n.a.createElement("h2",null,"Company"),n.a.createElement("div",null,a.company.name),n.a.createElement("div",null,a.company.catchPhrase),n.a.createElement("div",null,a.company.bs)))):null},ce=a(21),le=function(e){var t=e.errors,a=e.fieldName,r=e.message;return t&&t[a]&&t[a].message&&(r=t[a].message),r?n.a.createElement("p",{className:"error"},n.a.createElement("i",{className:"icon","aria-hidden":"true"}),r):""},oe=(a(46),function(){var e=Object(r.useContext)(v).store,t=Object(r.useContext)(ee),a=t.editIndex,c=t.setEditIndex,l=e.data[a],o=Object(ce.a)({defaultValues:l});return n.a.createElement("form",{className:"form",onSubmit:o.handleSubmit((function(t,a){a.preventDefault(),e.update(l.id,t)}))},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("div",null,n.a.createElement("input",{name:"email",type:"text",ref:o.register({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})}),n.a.createElement(le,{errors:o.errors,fieldName:"email"})),n.a.createElement("label",{htmlFor:"phone"},"Phone"),n.a.createElement("div",null,n.a.createElement("input",{name:"phone",type:"text",ref:o.register({required:"Required"})}),n.a.createElement(le,{errors:o.errors,fieldName:"phone"})),n.a.createElement("label",{htmlFor:"website"},"Website"),n.a.createElement("div",null,n.a.createElement("input",{name:"website",type:"text",ref:o.register({required:"Required"})}),n.a.createElement(le,{errors:o.errors,fieldName:"website"})),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"submit"},"Submit"),n.a.createElement("button",{className:"cancel",onClick:function(){c(-1)}},"Cancel")))}),ie=function(){var e=Object(r.useContext)(v).store;return n.a.createElement(te,{store:e,columns:[{text:"Name",dataIndex:"name",span:3},{text:"Phone",dataIndex:"phone",span:3},{text:"Email",dataIndex:"email",span:3},{text:"Company",dataIndex:"company.name",span:3}],infoCard:n.a.createElement(ne,null),editForm:n.a.createElement(oe,null)})};var se=function(){return n.a.createElement("div",null,n.a.createElement(b,null,n.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports={actions:"ActionColumn_actions__1iDoB",open:"ActionColumn_open__3H6Gx",bar:"ActionColumn_bar__1WAQ8",buttonWrap:"ActionColumn_buttonWrap__1U0nG",actionBarClose:"ActionColumn_actionBarClose__XAIX9",barClosed:"ActionColumn_barClosed__q83Ud",barOpen:"ActionColumn_barOpen__6Mkm4"}},8:function(e,t,a){e.exports={infoCardWrap:"UserCard_infoCardWrap__1dNjW",cardHeader:"UserCard_cardHeader__2IG0N",infoCard:"UserCard_infoCard__2gkdo",userSection:"UserCard_userSection__2DB0u",addressSection:"UserCard_addressSection__3RAVg",companySection:"UserCard_companySection__1EmZx"}},9:function(e,t,a){e.exports={grid:"DataGrid_grid__8M854",gridHeader:"DataGrid_gridHeader__1ZFnH",gridHeaderCell:"DataGrid_gridHeaderCell__2swnQ",refreshButton:"DataGrid_refreshButton___m4W2",rotate:"DataGrid_rotate__3FiPF",rotation:"DataGrid_rotation__-GyHd",gridFooter:"DataGrid_gridFooter__1rv_K",gridBody:"DataGrid_gridBody__1oDqO",card:"DataGrid_card__RCuTj",close:"DataGrid_close__2C-XP",cardOpen:"DataGrid_cardOpen__3Ib5B",cardClosed:"DataGrid_cardClosed__3p-Td",gridDataWrap:"DataGrid_gridDataWrap__2u6AT",gridData:"DataGrid_gridData__sr4Ds",gridDataCell:"DataGrid_gridDataCell__3XFVa",colSelected:"DataGrid_colSelected__2dTEv",gridDataWrapShrink:"DataGrid_gridDataWrapShrink__NEQS0",colStart1:"DataGrid_colStart1__2N4zh",colStart2:"DataGrid_colStart2__1WLkl",colStart3:"DataGrid_colStart3__6CIsg",colStart4:"DataGrid_colStart4__2Y6Ga",colStart5:"DataGrid_colStart5__3I-Wr",colStart6:"DataGrid_colStart6__x7CLi",colStart7:"DataGrid_colStart7__2oR54",colStart8:"DataGrid_colStart8__3Uboh",colStart9:"DataGrid_colStart9__3Zx2i",colStart10:"DataGrid_colStart10__xnglX",colStart11:"DataGrid_colStart11__3j7eZ",colSpan1:"DataGrid_colSpan1__2LNIJ",colSpan2:"DataGrid_colSpan2__3NCeh",colSpan3:"DataGrid_colSpan3__3UBun",colSpan4:"DataGrid_colSpan4__1_8qz",colSpan5:"DataGrid_colSpan5__2hbhf",colSpan6:"DataGrid_colSpan6__1ojzL",colSpan7:"DataGrid_colSpan7__gSrcT",colSpan8:"DataGrid_colSpan8__1rIw4",colSpan9:"DataGrid_colSpan9__2MCfO",colSpan10:"DataGrid_colSpan10__3WyB7",colSpan11:"DataGrid_colSpan11__3X1Rt"}}},[[22,1,2]]]);
//# sourceMappingURL=main.7d45ac86.chunk.js.map