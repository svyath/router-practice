(this["webpackJsonprouter-practice"]=this["webpackJsonprouter-practice"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(18),o=c.n(s),i=c(7),a=c(1);var j=function(){var e={color:"white",textDecoration:"none"};return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h3",{children:"Nav Logo"}),Object(a.jsxs)("ul",{className:"navLinks",children:[Object(a.jsx)(i.b,{to:"/about",style:e,children:Object(a.jsx)("li",{children:"About"})}),Object(a.jsx)(i.b,{to:"/shop",style:e,children:Object(a.jsx)("li",{children:"Shop"})})]})]})};var h=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Welcome to our shop! Choose the product you like =)"}),Object(a.jsx)(i.b,{to:"/shop",id:"shopLink",children:Object(a.jsx)("h2",{children:"Shop List"})})]})},l=c(9),u=c.n(l),p=c(11),d=c(12);c(31);var b=function(){Object(n.useEffect)((function(){s()}),[]);var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(p.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),r(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o={listStyle:"none",textDecoration:"none",color:"black"};return Object(a.jsx)("div",{children:c.map((function(e){return Object(a.jsx)(i.b,{to:"/shop/".concat(e.id),id:"itemId",style:o,children:Object(a.jsxs)("h2",{children:[e.id," ",e.title]})})}))})};var x=function(e){var t=e.match;Object(n.useEffect)((function(){i(),console.log(t)}),[]);var c=Object(n.useState)({}),r=Object(d.a)(c,2),s=r[0],o=r[1],i=function(){var e=Object(p.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(t.params.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,console.log(n),o(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j={color:"grey",textDecoration:"italic"};return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",margin:"0 auto",marginTop:"30px",border:"1px solid grey",borderRadius:"5px",maxWidth:"800px"},children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)("span",{style:j,children:"Category: "}),s.category]}),Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{style:j,children:"Name: "}),s.title]}),Object(a.jsx)("img",{src:s.image,alt:"Item image",style:{height:"20%",width:"20%"}}),Object(a.jsxs)("h4",{children:[Object(a.jsx)("span",{style:j,children:"Description: "}),s.description]})]})},O=c(2);var f=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home page"})})},m=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(O.a,{path:"/about",component:h}),Object(a.jsx)(O.a,{path:"/shop",exact:!0,component:b}),Object(a.jsx)(O.a,{path:"/shop/:id",component:x})]})]})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.16b2f46e.chunk.js.map