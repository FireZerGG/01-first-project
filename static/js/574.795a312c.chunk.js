"use strict";(self.webpackChunkreact_first_project=self.webpackChunkreact_first_project||[]).push([[574],{2574:function(s,e,a){a.r(e),a.d(e,{default:function(){return k}});var t=a(3115),n=a(2791),i={dialogs:"Dialogs_dialogs__eSG91",dialogs__list:"Dialogs_dialogs__list__c1bsL",chat:"Dialogs_chat__rw7AA",dialogs__chat:"Dialogs_dialogs__chat__GKrBG",chat__form:"Dialogs_chat__form__5ecHL",chat__input:"Dialogs_chat__input__a0aGF"},_=a(1087),r="Item_item__d2Pbi",c="Item_item__link__Xp+9w",o="Item_item__name__IwZtu",l="Item_item__avatar__IEr3s",u="Item_item__avatar_img__Yoyxe",m=a(184),d=function(s){return(0,m.jsx)("li",{className:r,children:(0,m.jsxs)(_.OL,{className:c,to:"/dialogs/"+s.id,children:[(0,m.jsx)("div",{className:l,children:(0,m.jsx)("img",{alt:"aaa",className:u,src:s.avatarPhoto})}),(0,m.jsx)("p",{className:o,children:s.name})]})})},h={},g=function(s){return(0,m.jsx)("li",{className:h.message,children:s.text})},f=a(6139),x=(0,a(704).Z)({form:"dialogAddMessageForm"})((function(s){return(0,m.jsxs)("form",{className:i.chat__form,onSubmit:s.handleSubmit,children:[(0,m.jsx)(f.Z,{component:"input",placeholder:"message...",name:"newMessageText",className:i.chat__input}),(0,m.jsx)("button",{name:"sendButton",className:i.chat__btn,children:"send"})]})})),j=function(s){var e=s.messagesPage.users.map((function(s){return(0,m.jsx)(d,{name:s.name,id:s.id,avatarPhoto:s.avatarPhoto},s.id)})),a=s.messagesPage.messages.map((function(s){return(0,m.jsx)(g,{text:s.text},s.id)}));return(0,m.jsxs)("section",{className:i.dialogs,children:[(0,m.jsx)("div",{className:i.dialogs__list,children:(0,m.jsx)("ul",{className:i.list__items,children:e})}),(0,m.jsxs)("div",{className:i.dialogs__chat,children:[(0,m.jsx)("ul",{className:i.chat,children:a}),(0,m.jsx)(x,{onSubmit:function(e){s.sendMessage(e.newMessageText)}})]})]})},p=a(8687),N=a(8683),v=a(5671),b=a(3144),P=a(136),Z=a(516),w=a(7689),I=function(s){return{isAuth:s.auth.isAuth}},k=(0,a(7781).qC)((0,p.$j)((function(s){return{messagesPage:s.messagesPage}}),(function(s){return{sendMessage:function(e){s((0,t.$)(e))}}})),(function(s){var e=function(e){(0,P.Z)(t,e);var a=(0,Z.Z)(t);function t(){return(0,v.Z)(this,t),a.apply(this,arguments)}return(0,b.Z)(t,[{key:"render",value:function(){return this.props.isAuth?(0,m.jsx)(s,(0,N.Z)({},this.props)):(0,m.jsx)(w.Fg,{to:"/login"})}}]),t}(n.Component);return(0,p.$j)(I)(e)}))(j)}}]);
//# sourceMappingURL=574.795a312c.chunk.js.map