(this["webpackJsonpinfinitus-app"]=this["webpackJsonpinfinitus-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(4),a=n.n(r),j=n(2);var l=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:e.enabled?"green feature":"red feature",children:Object(c.jsx)("p",{children:e.title})})})};var o=function(e){var t=Object(i.useState)(!1),n=Object(j.a)(t,2),s=n[0],r=n[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",className:"button",onClick:function(){s?e.decrease():e.increase(),r(!s)},children:e.name}),Object(c.jsx)("div",{style:{transition:"height 2s"},children:Object(c.jsx)("div",{className:s?"show":"hide",children:e.list.map((function(e){return Object(c.jsx)(l,{title:e.title,enabled:e.enabled},e.title)}))})})]})})},b=n.p+"static/media/Bender.faf56012.jpg";n(10);var d=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!1),a=Object(j.a)(r,2),l=a[0],d=a[1],u=Object(i.useState)([]),h=Object(j.a)(u,2),f=h[0],O=h[1],x=Object(i.useState)(0),p=Object(j.a)(x,2),m=p[0],g=p[1];function v(){g(m+1)}function y(){g(m-1)}return Object(i.useEffect)((function(){fetch("https://us-central1-infinitus-interviews.cloudfunctions.net/take-home-b").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(i.useEffect)((function(){var e=[];n.forEach((function(t){e.includes(t.category)||e.push(t.category)})),O(e),d(!0)}),[n]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(c.jsx)("h1",{stlye:{marginTop:"50px"},children:"AI Usage is Everywhere!"}),Object(c.jsx)("img",{src:b,alt:"bender",width:"150",height:"200"}),Object(c.jsx)("h3",{children:"Click the buttons below to explore how the robots are taking over:"}),Object(c.jsx)("div",{className:"categoryCont",children:l?f.map((function(e){return Object(c.jsx)(o,{name:e,list:n.filter((function(t){return t.category===e})),increase:v,decrease:y},e)})):Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Loading categories..."})})}),m>0?Object(c.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(c.jsx)("div",{className:"green box"}),Object(c.jsx)("p",{style:{marginLeft:"5px",marginRight:"10px"},children:" = enabled"}),Object(c.jsx)("div",{className:"red box"}),Object(c.jsx)("p",{style:{marginLeft:"5px"},children:" = disabled"})]}):Object(c.jsx)("div",{})]})})};n(11);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.08460bdb.chunk.js.map