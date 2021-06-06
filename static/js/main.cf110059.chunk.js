(this["webpackJsonpreact-hooks-todo-app"]=this["webpackJsonpreact-hooks-todo-app"]||[]).push([[0],{102:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(102),n(19)),o=n(61),l=n(169),d=n(170),j=n(171),b=n(172),u=n(84),x=n.n(u),p=n(154),O=n(167),h=n(85),m=n(168),g={palette:{type:"dark",primary:{main:"#D94A98"},secondary:{main:"rgba(66,66,66,0.7)"},background:{paper:"rgba(33,33,33,0.6)"}},shape:{borderRadius:15},typography:{fontFamily:"'Poppins', sans-serif;"}},f={palette:{type:"light",primary:{main:"#D94A98"},secondary:{main:"rgba(255,255,255,0.7)"},background:{paper:"rgba(255,255,255,0.4)"}},shape:{borderRadius:15},typography:{fontFamily:"'Poppins', sans-serif;"}},k=n(15),y=n(117),v=n(28),w=n(86),S=n(174),C=n(75),N=n.n(C),I=function(e,t){switch(t.type){case"ADD":return[].concat(Object(w.a)(e),[{id:Object(S.a)(),task:t.task,completed:!1}]);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{completed:!e.completed}):e}));case"EDIT":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{task:t.newTask}):e}));case"ARRANGE":return N()(e,t.oldIndex,t.newIndex);default:return e}};var D=function(e){var t=Object(a.useState)(e),n=Object(k.a)(t,2),c=n[0],r=n[1];return[c,function(){r(!c)}]};var E=n(4),B=[{id:1,task:"Buy milk",completed:!1},{id:2,task:"Check e-mails",completed:!1},{id:3,task:"Set doctor's appointment",completed:!1}],F=Object(a.createContext)(),R=Object(a.createContext)();function A(e){var t=function(e,t,n){var c=Object(a.useReducer)(n,t,(function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(a){n=t}return n})),r=Object(k.a)(c,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,s]}("todos",B,I),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(E.jsx)(F.Provider,{value:c,children:Object(E.jsx)(R.Provider,{value:r,children:e.children})})}var T=Object(a.createContext)();function L(e){var t=function(e,t){var n=D((function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(a){n=t}return n})),c=Object(k.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]}("isDark",!1),n=Object(k.a)(t,2),c=n[0],r=n[1];return Object(E.jsx)(T.Provider,{value:{isDark:c,toggleIsDark:r},children:e.children})}var G=n(48),P=n(159),J=n(160),z=n(163),H=n(164),M=n(118),W=n(175),V=n(81),_=n.n(V),q=n(82),Y=n.n(q),$=n(162),K=n(80),Q=n.n(K),U=n(165),X=n(161),Z=n(173),ee=n(59),te=n.n(ee),ne=n(58),ae=n.n(ne),ce=function(e){var t=Object(a.useState)(e),n=Object(k.a)(t,2),c=n[0],r=n[1];return[c,function(e){r(e.target.value)},function(){r("")}]},re=Object(p.a)((function(e){return{root:{display:"flex",width:"100%"},textField:{flexGrow:"1",display:"flex"},closeBtn:Object(s.a)({height:"50px",width:"50px",alignSelf:"center"},e.breakpoints.down("xs"),{height:"40px",width:"40px"})}}));var ie=function(e){var t=e.id,n=e.task,c=e.toggleIsEditing,r=re(),i=Object(a.useContext)(R),s=ce(n),o=Object(k.a)(s,3),l=o[0],d=o[1],j=o[2];return Object(E.jsxs)("div",{className:r.root,children:[Object(E.jsxs)("form",{className:r.textField,onSubmit:function(e){e.preventDefault(),i({type:"EDIT",newTask:l,id:t}),j(),c()},style:{marginLeft:"1rem",width:"75%"},children:[Object(E.jsx)(Z.a,{value:l,onChange:d,variant:"standard",margin:"normal",fullWidth:!0,autoFocus:!0}),Object(E.jsx)(M.a,{type:"submit",className:r.closeBtn,"aria-label":"cancel",children:Object(E.jsx)(ae.a,{})})]}),Object(E.jsx)(M.a,{onClick:c,className:r.closeBtn,"aria-label":"cancel",children:Object(E.jsx)(te.a,{})})]})},se=Object(p.a)((function(e){return{root:{height:"64px",paddingLeft:"0","&:hover $icon":{opacity:1}},icon:Object(s.a)({display:function(e){return e.isSorting&&"none"},opacity:"0",transition:"color 0.5s"},e.breakpoints.down("xs"),{opacity:".8"}),checkbox:{transition:"all 0.5s",paddingLeft:"0"},dragHandle:{cursor:"grab",height:"100%",width:"48px",padding:"0 12px"},text:Object(s.a)({textDecoration:function(e){return e.completed?"line-through":"none"},textDecorationColor:"".concat(e.palette.primary.main," !important"),textDecorationThickness:"3px !important",width:"80%"},e.breakpoints.down("xs"),{width:"75%"})}})),oe=Object(G.b)((function(e){var t=e.id,n=e.completed,c=e.task,r=e.last,i=e.isSorting,s=se({completed:n,isSorting:i}),l=Object(a.useContext)(R),d=D(!1),j=Object(k.a)(d,2),b=j[0],u=j[1],x=Object(G.c)((function(){return Object(E.jsx)(Q.a,{className:s.dragHandle})}));return Object(E.jsxs)("div",{children:[Object(E.jsx)(J.a,{className:s.root,children:b?Object(E.jsx)(X.a,{onClickAway:u,children:Object(E.jsx)($.a,{in:b,timeout:500,children:Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(ie,{id:t,task:c,toggleIsEditing:u})})})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(x,{}),Object(E.jsx)(W.a,{disableRipple:!0,className:s.checkbox,color:"primary",checked:n,tabIndex:-1,onClick:function(){return l({type:"TOGGLE",id:t})}}),Object(E.jsx)(z.a,{children:Object(E.jsx)(o.a,{noWrap:!0,className:s.text,children:c})}),Object(E.jsxs)(H.a,{children:[Object(E.jsx)(M.a,{edge:"end","aria-label":"Edit",onClick:u,children:Object(E.jsx)(_.a,{className:s.icon})}),Object(E.jsx)(M.a,{edge:"end","aria-label":"Delete",onClick:function(){return l({type:"REMOVE",id:t})},children:Object(E.jsx)(Y.a,{className:s.icon})})]})]})}),r?Object(E.jsx)(U.a,{style:{transition:"all 0.5s"}}):null]})})),le=Object(a.memo)(oe),de=Object(G.a)((function(e){var t=e.isSorting,n=Object(a.useContext)(F);return Object(E.jsx)(P.a,{style:{padding:0},children:n.map((function(e,c){return Object(a.createElement)(le,Object(v.a)(Object(v.a)({},e),{},{key:e.id,index:c,last:c<n.length-1,isSorting:t}))}))})})),je=Object(p.a)((function(e){return{root:{backdropFilter:" blur(10px)",transition:"all 0.5s"},sort:{background:e.palette.background.paper,borderRadius:"15px",boxShadow:"-3px 6px 5px -5px rgba(0,0,0,0.2)"}}}));var be=function(){var e=je(),t=Object(a.useContext)(F),n=Object(a.useContext)(R),c=Object(a.useState)(!1),r=Object(k.a)(c,2),i=r[0],s=r[1];return t.length?Object(E.jsx)(y.a,{className:e.root,elevation:0,children:Object(E.jsx)(de,{onSortStart:function(){s(!0)},helperClass:e.sort,axis:"y",lockAxis:"y",useDragHandle:!0,transitionDuration:500,onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;n({type:"ARRANGE",oldIndex:t,newIndex:a}),s(!1)},distance:10,isSorting:i})}):null},ue=n(166),xe=n(83),pe=n.n(xe),Oe=n(158),he=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"flex-end"},formContainer:{width:"100%",backdropFilter:" blur(10px)",transition:"all 0.5s",display:"flex",height:"64px"},textField:{flexGrow:"1",display:"flex"},addBtn:{margin:"1.5rem 0",height:"48px",width:"150px",borderRadius:"24px"},closeBtn:Object(s.a)({height:"50px",width:"50px",alignSelf:"center"},e.breakpoints.down("xs"),{height:"40px",width:"40px"})}}));var me=function(){var e=he(),t=Object(a.useContext)(R),n=ce(""),c=Object(k.a)(n,3),r=c[0],i=c[1],s=c[2],o=D(!1),l=Object(k.a)(o,2),d=l[0],j=l[1];return Object(E.jsx)("div",{className:e.root,children:d?Object(E.jsx)(X.a,{onClickAway:j,children:Object(E.jsx)(Oe.a,{in:d,timeout:300,style:{transformOrigin:"right center"},children:Object(E.jsxs)(y.a,{className:e.formContainer,style:{margin:"1rem 0",padding:"0 1rem"},children:[Object(E.jsxs)("form",{className:e.textField,onSubmit:function(e){e.preventDefault(),t({type:"ADD",task:r}),s(),j()},children:[Object(E.jsx)(Z.a,{value:r,onChange:i,label:"Add new task",variant:"standard",margin:"dense",required:!0,fullWidth:!0,autoFocus:!0}),Object(E.jsx)(M.a,{type:"submit",className:e.closeBtn,"aria-label":"cancel",children:Object(E.jsx)(ae.a,{})})]}),Object(E.jsx)(M.a,{onClick:j,className:e.closeBtn,"aria-label":"cancel",children:Object(E.jsx)(te.a,{})})]})})}):Object(E.jsx)(ue.a,{variant:"contained",color:"primary",className:e.addBtn,endIcon:Object(E.jsx)(pe.a,{}),onClick:j,disableRipple:!0,children:"New Task"})})},ge=n.p+"static/media/bgLight.e5c87708.png",fe=Object(p.a)((function(e){var t;return{background:{position:"fixed",left:0,right:0,padding:0,margin:0,zIndex:0,backgroundImage:"url(".concat(ge,")"),filter:function(e){return e.isDark?"brightness(60%)":"brightness(100%)"},backgroundPosition:"center",backgroundSize:"cover",overflowY:"auto",transition:"all 0.5s",height:"100vh"},root:{zIndex:"1",padding:0,margin:0,transition:"all 0.5s",paddingBottom:"2rem"},appBar:{backdropFilter:" blur(5px)",transition:"all 0.5s"},toolBar:(t={alignSelf:"center",width:"70%",justifyContent:"space-between",transition:"all 0.2s",height:"100%"},Object(s.a)(t,e.breakpoints.down("sm"),{width:"90%"}),Object(s.a)(t,e.breakpoints.down("xs"),{width:"95%"}),t),title:{display:"flex",alignItems:"center"}}}));var ke=function(){var e=Object(a.useContext)(T),t=e.isDark,n=e.toggleIsDark,c=fe({isDark:t});return Object(E.jsxs)(O.a,{theme:Object(h.a)(t?g:f),children:[Object(E.jsx)(m.a,{}),Object(E.jsx)("div",{className:c.background}),Object(E.jsxs)("div",{className:c.root,children:[Object(E.jsx)(l.a,{className:c.appBar,color:"secondary",position:"sticky",style:{height:"64px"},children:Object(E.jsxs)(d.a,{className:c.toolBar,children:[Object(E.jsxs)(o.a,{color:"inherit",variant:"h5",className:c.title,children:[Object(E.jsx)(x.a,{color:"primary"}),"TodoList"]}),Object(E.jsx)("div",{children:Object(E.jsxs)(j.a,{component:"label",container:!0,alignItems:"center",children:[Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)("span",{className:"material-icons-outlined",children:"light_mode"})}),Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)(b.a,{disableRipple:!0,color:"primary",checked:t,onChange:n})}),Object(E.jsx)(j.a,{item:!0,children:Object(E.jsx)("span",{className:"material-icons-outlined",children:"dark_mode"})})]})})]})}),Object(E.jsx)(j.a,{container:!0,justify:"center",children:Object(E.jsx)(j.a,{item:!0,xs:11,sm:8,md:6,lg:4,children:Object(E.jsxs)(A,{children:[Object(E.jsx)(me,{}),Object(E.jsx)(be,{})]})})})]})]})};var ye=function(){return Object(E.jsx)(L,{children:Object(E.jsx)(ke,{})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ye,{})}),document.getElementById("root")),ve()}},[[115,1,2]]]);
//# sourceMappingURL=main.cf110059.chunk.js.map