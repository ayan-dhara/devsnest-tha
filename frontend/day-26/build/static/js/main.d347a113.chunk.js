(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(4),u=a.n(r),i=(a(13),a(14),a(2)),s=a(5),j="SET_USERNAME",o=function(t){return{type:j,payload:t}},d="SET_EMAIL",l=function(t){return{type:d,payload:t}},b=a(1);var p=function(){var t=Object(i.c)((function(t){return t.username.data})),e=Object(i.c)((function(t){return t.email.data})),a=Object(i.b)();return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("input",{type:"text",pattern:"([A-Z]{1}[a-z]{1,}[ ]{1}){1,}([A-Z]{1}[a-z]{1,})",value:t,onChange:function(t){a(o(t.target.value))}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",pattern:"[a-z.]{2,}@[a-z.]{2,}[.]{1}[a-z]{2,}",value:e,onChange:function(t){a(l(t.target.value))}})]})};var O=function(){var t=Object(i.c)((function(t){return t.username.data})),e=Object(i.c)((function(t){return t.email.data}));return Object(b.jsxs)("div",{className:"output",children:["Username: ",t," ",Object(b.jsx)("br",{}),"Email: ",e]})},f=a(3),m={data:""},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(f.a)(Object(f.a)({},t),{},{data:e.payload});default:return t}},h={data:""},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(f.a)(Object(f.a)({},t),{},{data:e.payload});default:return t}},y=Object(s.a)({username:v,email:x}),g=Object(s.b)(y);var E=function(){return Object(b.jsx)(i.a,{store:g,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(O,{})]})})};u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[20,1,2]]]);