(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],[,,,function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(4),j=t.n(a),l=(t(9),t(10),t(3),t(0));var r=function(){return Object(l.jsxs)("div",{className:"chess-board-row",children:[Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"}),Object(l.jsx)("div",{className:"cell"})]})};var i=function(){return Object(l.jsx)("div",{className:"chess-board-div",children:Object(l.jsxs)("div",{className:"chess-board",children:[Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{}),Object(l.jsx)(r,{})]})})},m=(t(12),[]);fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){m=e.data.memes,o()}));var o=function(){if(0!==m.length){var e=m[Math.floor(Math.random()*m.length)];console.log(m),document.querySelector(".meme-card .meme").src=e.url,document.querySelector(".meme-card .title").textContent=e.name}};var d=function(){return Object(l.jsxs)("div",{className:"meme-card",children:[Object(l.jsx)("div",{className:"title",children:"MemeCard"}),Object(l.jsx)("img",{className:"meme",alt:"meme"}),Object(l.jsx)("button",{onClick:o,children:"Get Another"})]})};var b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(d,{})]})};j.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}],[[13,1,2]]]);