(this["webpackJsonpreact-data-grid"]=this["webpackJsonpreact-data-grid"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},4:function(e,t,a){e.exports={grid:"DataGrid_grid__8M854",gridHeader:"DataGrid_gridHeader__1ZFnH",gridHeaderCell:"DataGrid_gridHeaderCell__2swnQ",gridFooter:"DataGrid_gridFooter__1rv_K",gridBody:"DataGrid_gridBody__1oDqO",card:"DataGrid_card__RCuTj",close:"DataGrid_close__2C-XP",cardOpen:"DataGrid_cardOpen__3Ib5B",cardClosed:"DataGrid_cardClosed__3p-Td",gridDataWrap:"DataGrid_gridDataWrap__2u6AT",gridData:"DataGrid_gridData__sr4Ds",gridDataCell:"DataGrid_gridDataCell__3XFVa",colSelected:"DataGrid_colSelected__2dTEv",gridDataWrapShrink:"DataGrid_gridDataWrapShrink__NEQS0",colStart1:"DataGrid_colStart1__2N4zh",colStart2:"DataGrid_colStart2__1WLkl",colStart3:"DataGrid_colStart3__6CIsg",colStart4:"DataGrid_colStart4__2Y6Ga",colStart5:"DataGrid_colStart5__3I-Wr",colStart6:"DataGrid_colStart6__x7CLi",colStart7:"DataGrid_colStart7__2oR54",colStart8:"DataGrid_colStart8__3Uboh",colStart9:"DataGrid_colStart9__3Zx2i",colStart10:"DataGrid_colStart10__xnglX",colStart11:"DataGrid_colStart11__3j7eZ",colSpan1:"DataGrid_colSpan1__2LNIJ",colSpan2:"DataGrid_colSpan2__3NCeh",colSpan3:"DataGrid_colSpan3__3UBun",colSpan4:"DataGrid_colSpan4__1_8qz",colSpan5:"DataGrid_colSpan5__2hbhf",colSpan6:"DataGrid_colSpan6__1ojzL",colSpan7:"DataGrid_colSpan7__gSrcT",colSpan8:"DataGrid_colSpan8__1rIw4",colSpan9:"DataGrid_colSpan9__2MCfO",colSpan10:"DataGrid_colSpan10__3WyB7",colSpan11:"DataGrid_colSpan11__3X1Rt"}},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(23),a(5)),i=a(17),s=a(2),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_USER":return Object(s.a)({},e,{users:[].concat(Object(i.a)(e.users),[t.payload.user])});case"READ_USERS":return Object(s.a)({},e,{users:t.payload});case"UPDATE_USER":var a=e.users,n=t.payload,r=a.findIndex((function(e){return e._id===n._id}));return~r?(a[r]=n,Object(s.a)({},e,{users:a,user:null})):Object(s.a)({},e);case"DESTROY_USER":var c=e.users.filter((function(e){return e._id!==t.payload}));return Object(s.a)({},e,{users:c});default:return e}},u=a(3),p=a.n(u),_=a(16),m=a.n(_).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),f=Object(n.createContext)(),v={users:[]},S=function(e){var t=Object(n.useReducer)(d,v),a=Object(o.a)(t,2),c=a[0],l=a[1],i=function(){return function(e){p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(m.get("/users"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})).then((function(t){e({type:"READ_USERS",payload:t.data})}))}(l)};Object(n.useEffect)(i,[]);var u={data:c.users,create:function(e){return function(e,t){p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(m.post("/users",Object(s.a)({},e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})).then((function(e){t({type:"CREATE_USER",payload:e.data})})).catch((function(e){console.log(e)}))}(e,l)},read:i,update:function(e,t){return function(e,t,a){p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(m.patch("/users/".concat(e),Object(s.a)({},t)));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}})).then((function(e){a({type:"UPDATE_USER",payload:e.data})})).catch((function(e){console.log(e)}))}(e,t,l)},destroy:function(e){return function(e,t){p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(m.delete("/users/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}})).then((function(a){t({type:"DESTROY_USER",payload:e})}))}(e,l)}};return r.a.createElement(f.Provider,{value:{store:u,dispatch:l}},e.children)},E=function(){var e=Object(n.useContext)(w),t=e.columns,a=e.styles,c=function(e,t,n){var c=[a.gridHeaderCell];return c.push(a["colStart".concat(t)]),c.push(a["colSpan".concat(n)]),r.a.createElement("div",{key:t,className:c.join(" ")},e)};return t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.gridHeader},function(){var e=1,a=[];if(t.forEach((function(t){a.push(c(t.text,e,t.span)),e+=t.span})),e<14){var n=14-e;a.push(c(" ",e,n))}return a}())):r.a.createElement("span",null,"no valid columns found")},h=function(e){var t=e.rec,a=e.idx,c=Object(n.useContext)(w),l=c.columns,o=c.styles,i=c.selectedIndex,s=c.setSelectedIndex,d=function(){s(a!==i?a:-1)},u=function(e,t,n){var c=[o.gridDataCell];return c.push(o["colStart".concat(t)]),c.push(o["colSpan".concat(n)]),a===i&&c.push(o.colSelected),r.a.createElement("div",{key:"".concat(a,"-").concat(t),onClick:d,className:c.join(" ")},e)};return l.length?r.a.createElement(r.a.Fragment,null,function(){var e=1,a=[];if(l.forEach((function(n){a.push(u(function(e){for(var a=t,n=e.split(".");n.length>1;)a=t[n[0]],n.shift();return a[n[0]]}(n.dataIndex),e,n.span)),e+=n.span})),e<13){var n=13-e;a.push(u(" ",e,n))}return a}()):r.a.createElement("span",null,"no valid columns found")},g=function(){var e=Object(n.useContext)(w),t=e.store,a=e.styles,c=e.selectedIndex,l=[a.gridDataWrap];return c>=0&&l.push(a.gridDataWrapShrink),t.data.length?r.a.createElement("div",{className:l.join(" ")},r.a.createElement("div",{className:a.gridData},t.data.map((function(e,t){return r.a.createElement(h,{key:t,rec:e,idx:t})})))):r.a.createElement("span",null,"no rows found")},D=a(4),y=a.n(D);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createElement("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"}),G=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return r.a.createElement("svg",x({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",className:"svg-inline--fa fa-times-circle fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,O)},j=r.a.forwardRef((function(e,t){return r.a.createElement(G,x({svgRef:t},e))})),C=(a.p,function(e){var t=e.content,a=Object(n.useContext)(w),c=a.styles,l=a.selectedIndex,o=a.setSelectedIndex,i=[c.card];return i.push(l>=0?c.cardOpen:c.cardClosed),r.a.createElement("div",{className:i.join(" ")},r.a.createElement("div",{className:c.close},r.a.createElement(j,{onClick:function(){return o(-1)}})),t)}),w=Object(n.createContext)(),R=function(e){var t=e.store,a=e.columns,c=e.children,l=Object(n.useState)(-1),i=Object(o.a)(l,2),s=i[0],d=i[1],u={store:t,columns:a,styles:y.a,selectedIndex:s,setSelectedIndex:d};return r.a.createElement(w.Provider,{value:u},r.a.createElement("div",{className:y.a.grid},r.a.createElement(E,{columns:a}),r.a.createElement("div",{className:y.a.gridBody},r.a.createElement(g,{store:t,value:u}),r.a.createElement(C,{content:c})),r.a.createElement("div",{className:y.a.gridFooter})))},I=function(){var e=Object(n.useContext)(f).store,t=Object(n.useContext)(w).selectedIndex;console.log(t);var a=e.data[t];return r.a.createElement("div",null,t>=0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,a.name),r.a.createElement("div",null,a.username),r.a.createElement("div",null,a.email),r.a.createElement("div",null,a.phone),r.a.createElement("div",null,a.website),r.a.createElement("div",null,a.address.street),r.a.createElement("div",null,a.address.suite),r.a.createElement("div",null,a.address.city),r.a.createElement("div",null,a.address.zipcode)),r.a.createElement("div",null,r.a.createElement("div",null,a.company.name),r.a.createElement("div",null,a.company.catchphrase),r.a.createElement("div",null,a.company.bs))))},N=function(){var e=Object(n.useContext)(f).store;return r.a.createElement(R,{store:e,columns:[{text:"Name",dataIndex:"name",span:3},{text:"Email",dataIndex:"email",span:4},{text:"Company",dataIndex:"company.name",span:3},{text:"City",dataIndex:"address.city",span:2}]},r.a.createElement(I,null))};var k=function(){return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1abb4b7f.chunk.js.map