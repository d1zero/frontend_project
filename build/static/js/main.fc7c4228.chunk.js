(this.webpackJsonplab1=this.webpackJsonplab1||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(42),a=n.n(c),i=n(114),s=n(10),r=n(0),o=n.n(r),l=n(112),j=n(107),h=Object(j.a)((function(e){return{footer:{backgroundColor:"#1976D2",width:"100%",color:"#fff",height:"64px",marginTop:"auto"},navLink:{color:"#ff7961",textDecoration:"none","&:hover":{color:"#ff7961",textDecoration:"none"},"&:visited":{color:"#ff7961"}}}})),d=n(2),u=function(){var e=h();return Object(d.jsx)("footer",{className:e.footer,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:Object(d.jsxs)(l.a,{variant:"h6",children:["Made by\xa0",Object(d.jsx)("a",{href:"https://t.me/d1z3ro",rel:"noreferrer",target:"_blank",className:e.navLink,children:"d1zero"})]})})},b=n(26),x=n.p+"static/media/logo.0d85ea88.svg",m=n(45),f=n(46),O=n(7),p=new(function(){function e(){Object(m.a)(this,e),this.news_array=[],this.loading=!0,Object(O.l)(this)}return Object(f.a)(e,[{key:"setNews",value:function(e){this.news_array=e}},{key:"setLoading",value:function(e){this.loading=e}}]),e}()),g=new(function(){function e(){Object(m.a)(this,e),this.comments_array=[],this.loading=!0,Object(O.l)(this)}return Object(f.a)(e,[{key:"setComments",value:function(e){this.comments_array=e}},{key:"setLoading",value:function(e){this.loading=e}}]),e}()),v=n(110),w=n(115),y=n(109),k=Object(j.a)((function(e){return{navLink:{color:"#fff",paddingRight:"20px",textDecoration:"none","&:hover":{color:"inherit",textDecoration:"none"},"&:visited":{color:"inherit"}}}})),_=function(){var e=k();return o.a.useEffect((function(){p.setLoading(!0),fetch("/articles.json").then((function(e){return e.json()})).then((function(e){setTimeout((function(){p.setNews(e),p.setLoading(!1)}),1e3)}))}),[]),o.a.useEffect((function(){g.setLoading(!0),fetch("/comments.json").then((function(e){return e.json()})).then((function(e){setTimeout((function(){g.setComments(e),g.setLoading(!1)}),1e3)}))}),[]),Object(d.jsx)(v.a,{position:"static",children:Object(d.jsx)(i.a,{fixed:!0,children:Object(d.jsxs)(w.a,{disableGutters:!0,children:[Object(d.jsx)("img",{src:x,alt:"logo",height:"64px",width:"64px"}),Object(d.jsx)(y.a,{style:{marginLeft:"10px"},component:b.b,to:"/",className:e.navLink,children:Object(d.jsx)(l.a,{variant:"h6",children:"Home"})}),Object(d.jsx)(y.a,{component:b.b,to:"/news",className:e.navLink,children:Object(d.jsx)(l.a,{variant:"h6",children:"News"})})]})})})};function L(e){o.a.useEffect((function(){document.title=e}),[e])}var N=Object(j.a)((function(e){return{slide:{display:"flex",flexDirection:"row",justifyContent:"center"}}})),C=n(34),D=n(108),T=n(105),B=n(106),E=n(102),F=n(103),H=n(104),I=n(113),M=function(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",minHeight:"200px",alignItems:"center"},children:Object(d.jsx)(I.a,{color:"secondary"})})};n(77),n(78);B.a.use([E.a,F.a,H.a]);var z=Object(C.a)((function(){var e=N();return L("Main page"),Object(d.jsxs)("div",{style:{marginTop:"100px"},children:[Object(d.jsx)(l.a,{variant:"h3",align:"center",children:"Hello and welcome to our news portal!"}),Object(d.jsxs)(l.a,{variant:"h4",align:"center",gutterBottom:!0,children:["Go to"," ",Object(d.jsx)(y.a,{component:b.b,to:"/news",children:"news"})," ","to check out fresh news"]}),p.loading?Object(d.jsx)(M,{}):Object(d.jsx)(i.a,{maxWidth:"sm",children:Object(d.jsx)(D.a,{spaceBetween:50,slidesPerView:1,navigation:!0,autoplay:{delay:3e3},pagination:{clickable:!0},allowTouchMove:!0,loop:!0,children:p.news_array.map((function(t){if(!0===t.slider)return Object(d.jsx)(T.a,{className:e.slide,children:Object(d.jsx)("img",{src:t.preview_image,alt:t.name,style:{height:"300px",objectFit:"cover"}})})}))})})]})})),A=Object(j.a)((function(e){return{navLink:{color:"#000",paddingRight:"20px",textDecoration:"none","&:hover":{color:"inherit",textDecoration:"none"},"&:visited":{color:"inherit"}}}})),G=Object(C.a)((function(){L("News");var e=A();return Object(d.jsxs)("div",{className:"news",children:[Object(d.jsx)("h1",{children:"News"}),p.loading?Object(d.jsx)(M,{}):Object(d.jsx)(d.Fragment,{children:p.news_array.map((function(t){return Object(d.jsxs)(b.b,{to:"/news/".concat(t.id-1),className:e.navLink,children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("img",{src:t.preview_image,alt:t.name}),Object(d.jsx)("p",{children:t.desc})]},t.id)}))})]})})),J=n(32),P=Object(C.a)((function(e){var t=o.a.useState(""),n=Object(J.a)(t,2),c=n[0],a=n[1],i=o.a.useState(""),s=Object(J.a)(i,2),r=s[0],l=s[1],j=e.match.params.id;L("Article #".concat(j));return Object(d.jsx)("div",{className:"news-detail",children:p.loading?Object(d.jsx)(M,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:p.news_array[j].name}),Object(d.jsx)("p",{children:p.news_array[j].desc}),Object(d.jsx)("img",{src:"/"+p.news_array[j].full_image,alt:p.news_array[j].name,height:"600px"}),Object(d.jsxs)("p",{children:["Published ",p.news_array[j].date]}),g.loading?Object(d.jsx)(M,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{children:g.comments_array.map((function(e){return Object(d.jsxs)("li",{children:[e.name,Object(d.jsx)("p",{children:e.comment})]})}))}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("button",{style:{marginBottom:"10px"},onClick:function(){var e=g.comments_array;e.push({id:e.length+1,name:c,comment:r}),g.setComments(e),l(""),a("")},children:"Add comment"})]})]})})}));var R=function(){return Object(d.jsxs)("div",{className:"app",style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(d.jsx)(_,{}),Object(d.jsx)(i.a,{fixed:!0,children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{exact:!0,path:"/",component:z}),Object(d.jsx)(s.b,{exact:!0,path:"/news",component:G}),Object(d.jsx)(s.b,{path:"/news/:id",component:P}),Object(d.jsx)(s.b,{path:"*",component:function(){return Object(d.jsx)(s.a,{to:"/"})}})]})}),Object(d.jsx)(u,{})]})};n(79);a.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.fc7c4228.chunk.js.map