(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__D3LPs",dialogsItems:"Dialogs_dialogsItems__2i4IO",active:"Dialogs_active__oETkc",messages:"Dialogs_messages__3dpm6",message:"Dialogs_message__66Nj0"}},298:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(293),m=t.n(i),l=t(10),c=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement(l.b,{to:a}," ",e.name))},o=t(26),r=t(49),g=t(87),d=t(127),u=t(25),E=Object(r.a)(50),b=Object(d.a)({form:"dialogAddMassageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(g.a,{component:u.b,validate:[r.b,E],name:"newMessageBody",placeholder:"Enter your message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),f=function(e){return n.a.createElement("div",{className:m.a.dialogs},e.message)},p=function(e){var a=e.messagePage,t=a.dialogs.map((function(e){return n.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(f,{message:e.message,key:e.id})}));return e.isAuth?n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},t),n.a.createElement("div",{className:m.a.messages},n.a.createElement("div",null,s)),n.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):n.a.createElement(o.a,{to:"/login"})},v=t(126),_=t(14),y=t(139),h=t(8);a.default=Object(h.d)(Object(_.b)((function(e){return{messagePage:e.messagePage}}),(function(e){return{sendMessage:function(a){e(Object(v.b)(a))}}})),y.a)(p)}}]);
//# sourceMappingURL=4.8d0409b7.chunk.js.map