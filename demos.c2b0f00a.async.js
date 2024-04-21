"use strict";(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[433],{53096:function(z,m,t){t.r(m),t.d(m,{default:function(){return u}});var L=t(5574),f=t.n(L),j=t(67294),v=t(16941),y=t(68400),a=t.n(y),b=t(56590),i,g,h,c,p=(0,b.kc)(function(x){var e=x.css;return{flex:e(i||(i=a()([`
      display: flex;
      justify-content: space-between;
    `]))),halfway:e(g||(g=a()([`
      width: 49.5%;
    `]))),item:e(h||(h=a()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `]))),tinted:e(c||(c=a()([`
      background-color: #fff6b2;
    `])))}}),d=t(85893),l=function(){var e=(0,j.useState)([{id:1,text:"Item 1",bg:""},{id:2,text:"Item 2",bg:""},{id:3,text:"Item 3",bg:""},{id:4,text:"Item 4",bg:""},{id:5,text:"Item 5",bg:""}]),n=f()(e,2),r=n[0],I=n[1],S=(0,j.useState)([{id:6,text:"Item 1",bg:"tinted"},{id:7,text:"Item 2",bg:"tinted"},{id:8,text:"Item 3",bg:"tinted"},{id:9,text:"Item 4",bg:"tinted"},{id:10,text:"Item 5",bg:"tinted"}]),A=f()(S,2),N=A[0],R=A[1],O=p(),s=O.styles;return(0,d.jsxs)("div",{className:s.flex,children:[(0,d.jsx)(v.ReactSortable,{group:"shared",list:r,setList:I,animation:150,className:s.halfway,children:r.map(function(o){return(0,d.jsx)("div",{className:"".concat(s.item," ").concat(o.bg?s.tinted:""),children:o.text},o.id)})}),(0,d.jsx)(v.ReactSortable,{group:"shared",list:N,setList:R,animation:150,className:s.halfway,children:N.map(function(o){return(0,d.jsx)("div",{className:"".concat(s.item," ").concat(o.bg?s.tinted:""),children:o.text},o.id)})})]})},u=l},62885:function(z,m,t){t.r(m),t.d(m,{default:function(){return d}});var L=t(5574),f=t.n(L),j=t(67294),v=t(16941),y=t(68400),a=t.n(y),b=t(56590),i,g,h=(0,b.kc)(function(l){var u=l.css;return{"draggable-item":u(i||(i=a()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `]))),ghost:u(g||(g=a()([`
      background-color: #c8ebfb;
    `])))}}),c=t(85893),p=function(){var u=(0,j.useState)([{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},{id:5,name:"Item 5"}]),x=f()(u,2),e=x[0],n=x[1],r=h(),I=r.styles;return(0,c.jsx)(v.ReactSortable,{list:e,setList:n,animation:150,ghostClass:I.ghost,children:e.map(function(S){return(0,c.jsx)("div",{className:I["draggable-item"],children:S.name},S.id)})})},d=p},41692:function(z,m,t){t.r(m),t.d(m,{default:function(){return x}});var L=t(97857),f=t.n(L),j=t(5574),v=t.n(j),y=t(67294),a=t(16941),b=t(68400),i=t.n(b),g=t(56590),h,c,p,d=(0,g.kc)(function(e){var n=e.css;return{flex:n(h||(h=i()([`
      display: flex;
      justify-content: space-between;
    `]))),halfway:n(c||(c=i()([`
      width: 49.5%;
    `]))),item:n(p||(p=i()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `])))}}),l=t(85893),u=function(){var n=d(),r=n.styles,I=(0,y.useState)([{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},{id:5,name:"Item 5"}]),S=v()(I,2),A=S[0],N=S[1],R=(0,y.useState)([{id:6,name:"Item 6"},{id:7,name:"Item 7"},{id:8,name:"Item 8"},{id:9,name:"Item 9"},{id:10,name:"Item 10"}]),O=v()(R,2),s=O[0],o=O[1],M=function(C){return C.map(function(T){return(0,l.jsx)("div",{className:r.item,"data-id":T.id,children:T.name},T.id)})},B={name:"sortable-clone",pull:"clone"},D=function(C,T){var E=Math.floor(Math.random()*1e5);return console.log("\u6267\u884C\u4E86\u514B\u9686",E,T),f()(f()({},C),{},{id:E})};return(0,l.jsxs)("div",{className:r.flex,children:[(0,l.jsx)(a.ReactSortable,{group:B,list:A,clone:D,setList:N,animation:150,className:r.halfway,children:M(A)}),(0,l.jsx)(a.ReactSortable,{group:B,list:s,clone:D,setList:o,animation:150,className:r.halfway,children:M(s)})]})},x=u}}]);
