(this.webpackJsonptabox=this.webpackJsonptabox||[]).push([[0],{235:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(26),c=n(144),i=n(24),s=n(4),o=n(119),l=n.n(o),j=n.p+"static/media/headbox.b0be706d.yml",d=n.p+"static/media/tabox.0b75b32e.yml",h=n(243),b=n(244),u=n(74),f=n(42),g=n(242),x=n(147),O=n(249),p=n(73),m=n(6),v=h.a.Text;function y(e){var t=e.name,n=e.config,r=e.collapsed,c=Object(a.useState)(0),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(!0),d=Object(s.a)(j,2),h=d[0],b=d[1];return Object(a.useEffect)((function(){fetch("https://api.github.com/users/".concat(t,"/repos")).then((function(e){return e.json()})).then((function(e){l(e),b(!1)}))}),[t,n]),Object(m.jsx)(a.Fragment,{children:h?Object(m.jsx)(p.a,{}):o.map((function(e,t){var a=e.name,c=e.html_url,i=e.description;return-1===n.Github.Ignore.indexOf(a)?Object(m.jsx)(f.a,{style:{paddingRight:r?"16px":"6px",transition:"padding 300ms"},children:Object(m.jsx)("a",{href:c,target:'_blank" rel="noreferrer',children:Object(m.jsx)(g.a,{size:"small",hoverable:!0,style:{width:242,height:108,borderRadius:10},children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(f.a,{span:6,children:Object(m.jsx)(x.a,{shape:"square",size:46,src:n.Github[a]?n.Github[a]:"logo/github.png"})}),Object(m.jsx)(f.a,{span:18,children:Object(m.jsxs)(O.b,{direction:"vertical",size:2,children:[Object(m.jsx)(v,{strong:!0,children:a}),Object(m.jsx)(v,{children:i})]})})]})})})},t):null}))})}var w=h.a.Text,k=h.a.Paragraph;function S(e){var t=e.config,n=e.collapsed;return Object(m.jsx)("div",{children:Object.keys(t).map((function(e,a){return Object(m.jsx)("div",{id:e,style:{margin:"4px auto"},children:Object(m.jsx)(b.a,{title:e,avatar:{src:t[e].logo,shape:"square"},subTitle:t[e].description,children:Object(m.jsx)(k,{style:{marginLeft:20},children:Object(m.jsx)(u.a,{gutter:[32,24],children:"Github"===e?Object(m.jsx)(y,{name:t[e].name,config:t,collapsed:n}):"Memo"===e?Object(m.jsx)("pre",{children:t[e].content}):Object.keys(t[e]).map((function(a,r){var c=t[e][a][0],i=t[e][a][1],s=t[e][a][2];return"[object Array]"===Object.prototype.toString.call(t[e][a])?Object(m.jsx)(f.a,{style:{paddingRight:n?"10px":"4px",transition:"padding 300ms"},children:Object(m.jsx)("a",{href:c,target:'_blank" rel="noreferrer',children:Object(m.jsx)(g.a,{size:"small",hoverable:!0,style:{width:190,borderRadius:10},children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(f.a,{span:8,children:Object(m.jsx)(x.a,{shape:"square",size:46,src:s})}),Object(m.jsx)(f.a,{span:16,children:Object(m.jsxs)(O.b,{direction:"vertical",size:2,children:[Object(m.jsx)(w,{strong:!0,children:a}),Object(m.jsx)(w,{children:i})]})})]})})})},r):null}))})},a)})},a)}))})}var C=n(245),z=n(248),T=n(122),W=C.a.Search;function _(e){var t=e.config,n=Object(a.useState)([Object.keys(t.search)[0]]),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([Object.keys(t.search[Object.keys(t.search)[0]])[0]]),l=Object(s.a)(o,2),j=l[0],d=l[1],h=[];for(var b in t.search[c]){var g=Object(m.jsx)(f.a,{span:6,children:Object(m.jsx)(z.a,{value:b,children:b})},b);h.push(g)}var x=Object(a.useState)(h),O=Object(s.a)(x,2),p=O[0],v=O[1];return Object(m.jsxs)("div",{style:{width:"66%",maxWidth:"560px",margin:"2em auto"},children:[Object(m.jsx)(T.a,{onClick:function(e){var n=[];for(var a in t.search[e.key]){var r=Object(m.jsx)(f.a,{span:6,children:Object(m.jsx)(z.a,{value:a,children:a})},a);n.push(r)}i(e.key),d([]),v(n)},selectedKeys:c,mode:"horizontal",style:{backgroundColor:"transparent"},children:Object.keys(t.search).map((function(e){return Object(m.jsx)(T.a.Item,{children:e},e)}))}),Object(m.jsx)(W,{placeholder:"Search",enterButton:"\u641c\u7d22",size:"large",allowClear:!0,onSearch:function(e,n){"ant-input ant-input-lg"===n.target.className&&"onClick"===n._reactName||(void 0!==j[0]?j.forEach((function(n){window.open(t.search[c][n]+e,"_blank")})):window.open(t.search[c][Object.keys(t.search[c])[0]]+e,"_blank"))}}),Object(m.jsx)(z.a.Group,{onChange:function(e){return d(e)},defaultValue:j,style:{margin:"0 2em",width:"100%"},children:Object(m.jsx)(u.a,{children:p})})]})}var D=n(241),E=h.a.Title;function H(e){var t=e.collapsed,n=e.config;return Object(m.jsx)("div",{style:{margin:"1.3em"},children:Object(m.jsxs)("a",{href:n.config.link,target:'_blank" rel="noreferrer',children:[Object(m.jsx)(D.a,{width:40,src:n.config.logo,preview:!1}),Object(m.jsx)(E,{level:2,style:{color:"#fffc",margin:"1em auto",display:t?"none":""},children:n.config.name})]})})}function I(e){var t=e.collapsed,n=e.headConfig,a=e.taboxConfig;return Object(m.jsxs)(T.a,{defaultSelectedKeys:[""],mode:"inline",theme:"dark",onSelect:function(e){var t=document.getElementById(e.key);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},children:[Object(m.jsx)(H,{collapsed:t,config:n}),Object.keys(a).map((function(e,n){return Object(m.jsx)(T.a.Item,{children:Object(m.jsxs)(O.b,{children:[Object(m.jsx)(x.a,{shape:"square",size:20,src:a[e].logo,style:{marginBottom:4}}),Object(m.jsx)("span",{style:{marginLeft:t?"2em":"",marginRight:t?"1em":""},children:e})]})},e)}))]})}var L=n(240),N=n(246),R=(n(235),h.a.Title),A=L.a.Header,B=L.a.Content,G=L.a.Footer,q=L.a.Sider;function M(){var e=l.a.load(j),t=l.a.load(d),n=Object(a.useState)(e.config.hide),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(m.jsxs)(L.a,{style:{minHeight:"100vh"},children:[Object(m.jsx)(q,{collapsible:!0,collapsed:c,onCollapse:i,width:"220px",style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(m.jsx)(I,{collapsed:c,headConfig:e,taboxConfig:t})}),Object(m.jsxs)(L.a,{className:"site-layout",children:[Object(m.jsx)(A,{style:{background:"#a7b0bb"},children:Object(m.jsxs)(R,{level:3,style:{color:"#eee",marginLeft:c?140:220,transition:"margin-left 300ms",marginTop:16},children:[(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),":",(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes()]})}),Object(m.jsx)(N.a,{}),Object(m.jsx)(B,{style:{margin:"24px 16px 0",marginLeft:c?160:240,transition:"margin-left 300ms"},children:Object(m.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(m.jsx)(_,{config:e}),Object(m.jsx)(S,{config:t,collapsed:c})]})}),Object(m.jsxs)(G,{style:{textAlign:"center"},children:["Tabox \xa92021 Create by"," ",Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.fzf404.top/",children:"fzf404"})]})]})]})}var P=n(247),U=n(72);function F(){return Object(m.jsx)(P.a,{status:"404",title:"404",subTitle:"\u8fd9\u91cc\u4ec0\u4e48\u90fd\u6ca1\u6709\u54e6~",extra:Object(m.jsx)(U.a,{type:"primary",href:"#",children:"\u56de\u5230\u4e3b\u9875"})})}function J(){return Object(m.jsx)(c.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",component:M}),Object(m.jsx)(i.a,{path:"*",component:F})]})})}var K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(r.render)(Object(m.jsx)(J,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}()}},[[239,1,2]]]);
//# sourceMappingURL=main.01de364a.chunk.js.map