(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=a(10),s=a(60),m=a(8),i=(a(71),function(){return l.a.createElement("div",{className:"container login-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 login-form-1"},l.a.createElement("h3",null,"Ingreso"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),l.a.createElement("div",{className:"col-md-6 login-form-2"},l.a.createElement("h3",null,"Registro"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),u=a(20),d=(a(72),a(48)),p=a(13),v=a.n(p),f=(a(74),function(){return l.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},l.a.createElement("span",{className:"navbar-brand"},"Messi"),l.a.createElement("button",{className:"btn btn-outline-danger"},l.a.createElement("i",{className:"fas fa-sign-out-alt"}),l.a.createElement("span",null," Salir")))}),E={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},b=function(e){var t=e.event,a=t.title,n=t.user;return l.a.createElement("div",null,l.a.createElement("strong",null," ",a," "),l.a.createElement("strong",null," - ",n.name," "))},O=a(34),g=a(7),N=a(43),h=a.n(N),j=a(44),y=a.n(j),w=a(59),C=a.n(w),S="[ui] Open modal",D="[ui] Close modal",x="[event] Set Active",k="[event] Add New",I="[event] Clear active event",T="[event] Event update",_="[event] Event Deleted",A=function(){return{type:S}},R=function(){return{type:I}},M={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};h.a.setAppElement("#root");var V=v()().minutes(0).seconds(0).add(1,"hours"),F=V.clone().add(1,"hours"),H={title:"",notes:"",start:V.toDate(),end:F.toDate()},L=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,a=Object(o.b)(),r=Object(n.useState)(V.toDate()),c=Object(u.a)(r,2),s=c[0],m=c[1],i=Object(n.useState)(F.toDate()),d=Object(u.a)(i,2),p=d[0],f=d[1],E=Object(n.useState)(!0),b=Object(u.a)(E,2),N=b[0],j=b[1],w=Object(n.useState)(H),S=Object(u.a)(w,2),x=S[0],I=S[1],_=x.notes,A=x.title,L=x.start,G=x.end;Object(n.useEffect)((function(){I(t||H)}),[t,I]);var J=function(e){var t=e.target;I(Object(g.a)(Object(g.a)({},x),{},Object(O.a)({},t.name,t.value)))},P=function(){a({type:D}),a(R()),I(H)};return l.a.createElement(h.a,{isOpen:e,onRequestClose:P,style:M,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},l.a.createElement("h1",null," ",t?"Editar Evento":"Nuevo Evento"," "),l.a.createElement("hr",null),l.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n=v()(L),l=v()(G);return n.isSameOrAfter(l)?C.a.fire("Error","La fecha debe de ser mayor a la fecha de Inicio","error"):A.trim().length<2?j(!1):(a(t?{type:T,payload:x}:function(e){return{type:k,payload:e}}(Object(g.a)(Object(g.a)({},x),{},{id:(new Date).getTime(),user:{_id:"1234",name:"David"}}))),j(!0),void P())}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Fecha y hora inicio"),l.a.createElement(y.a,{onChange:function(e){m(e),I(Object(g.a)(Object(g.a)({},x),{},{start:e}))},value:s,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Fecha y hora fin"),l.a.createElement(y.a,{onChange:function(e){f(e),I(Object(g.a)(Object(g.a)({},x),{},{end:e}))},minDate:s,value:p,className:"form-control"})),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Titulo y notas"),l.a.createElement("input",{type:"text",className:"form-control ".concat(!N&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:A,onChange:J,autoComplete:"off"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:_,onChange:J}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},l.a.createElement("i",{className:"far fa-save"}),l.a.createElement("span",null," Guardar"))))},G=function(){var e=Object(o.b)();return l.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(A())}},l.a.createElement("i",{className:"fas fa-plus"}))},J=function(){var e=Object(o.b)();return l.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:_})}},l.a.createElement("i",{className:"fas fa-trash"}),l.a.createElement("span",null," Delete"))};v.a.locale("es");var P=Object(d.b)(v.a),U=function(){var e=Object(n.useState)(localStorage.getItem("lastView")||"month"),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(o.b)(),s=Object(o.c)((function(e){return e.calendar})),m=s.events,i=s.activeEvent;return l.a.createElement("div",{className:"calendar-screen"},l.a.createElement(f,null),l.a.createElement(d.a,{localizer:P,events:m,onDoubleClickEvent:function(e){c(A())},onSelectEvent:function(e){c({type:x,payload:e})},onView:function(e){r(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){c(R())},selectable:!0,startAccessor:"start",endAccessor:"end",messages:E,eventPropGetter:function(){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:b},view:a}),l.a.createElement(G,null),i&&l.a.createElement(J,null),l.a.createElement(L,null))},X=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/login",component:i}),l.a.createElement(m.b,{exact:!0,path:"/",component:U}),l.a.createElement(m.a,{to:"/"}))))},q=a(17),z=a(61),B=a(62),K={events:[{id:(new Date).getTime(),title:"Cumple a\xf1os de ella",start:v()().toDate(),end:v()().add(2,"hours").toDate(),bgcolor:"#fafafa",notes:"Comprar la fafa",user:{id:1234,name:"Messi"}}],activeEvent:null},Q={modalOpen:!1},W=Object(q.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(g.a)(Object(g.a)({},e),{},{modalOpen:!0});case D:return Object(g.a)(Object(g.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(g.a)(Object(g.a)({},e),{},{activeEvent:t.payload});case k:return Object(g.a)(Object(g.a)({},e),{},{events:[].concat(Object(B.a)(e.events),[t.payload])});case I:return Object(g.a)(Object(g.a)({},e),{},{activeEvent:null});case T:return Object(g.a)(Object(g.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case _:return Object(g.a)(Object(g.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),Y="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,Z=Object(q.e)(W,Y(Object(q.a)(z.a))),$=function(){return l.a.createElement(o.a,{store:Z},l.a.createElement(X,null))};a(110);c.a.render(l.a.createElement($,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(112)},71:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.6122adf3.chunk.js.map