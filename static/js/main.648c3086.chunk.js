(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(5),r=s.n(i),n=s(3),o=s.n(n),j=s(6),h=s(4),l=(s(12),s.p+"static/media/Shoppies logo.fdd1c851.svg"),p=s.p+"static/media/search.88c19f4c.svg",b=s.p+"static/media/Help button.60f218fd.svg",d=s.p+"static/media/Hero.53ee0789.svg",m=s(0);var u=function(e){return Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"nav-bg"}),Object(m.jsxs)("nav",{className:"wrapper",children:[Object(m.jsx)("a",{href:"index.html",children:Object(m.jsx)("img",{src:l,alt:"The Shoppies logo"})}),Object(m.jsxs)("div",{className:"search-bar",children:[Object(m.jsx)("input",{type:"text",id:"search-input",value:e.value,onChange:function(t){return e.setSearchInput(t.target.value)},placeholder:"Search the title of a movie..."}),Object(m.jsx)("img",{src:p,alt:"Search icon"})]}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"https://github.com/chilucdiep/ShopifyChallenge",target:"_blank",children:Object(m.jsx)("img",{className:"help-button",src:b,alt:"Help button"})})})]}),Object(m.jsx)("div",{className:"hero-image",children:Object(m.jsx)("img",{src:d,alt:"Shoppies hero image"})}),Object(m.jsxs)("div",{className:"hero-text",children:[Object(m.jsx)("h1",{children:"Movie awards for entrepreneurs"}),Object(m.jsx)("h2",{children:"Nominate your 5 favorite movies"})]}),Object(m.jsx)("div",{className:"bg"})]})},v=s.p+"static/media/Nominate button.4b5c1e6c.svg",x=function(e){return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("div",{className:"movie-display",children:Object(m.jsx)("div",{className:"movie-list",children:e.movies.map((function(e,t){return Object(m.jsxs)("div",{className:"movies",children:[Object(m.jsx)("img",{src:e.Poster,className:"movie-poster",alt:"Movie poster"}),Object(m.jsxs)("p",{className:"movie-name",children:[e.Title," (",e.Year,")"]}),Object(m.jsx)("img",{className:"overlay-button",src:v,alt:"Nominate button"})]})}))})})})},O=function(){var e=a.a.useState([]),t=Object(h.a)(e,2),s=t[0],c=t[1],i=a.a.useState(""),r=Object(h.a)(i,2),n=r[0],l=r[1],p=function(){var e=Object(j.a)(o.a.mark((function e(){var t,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?s=".concat(n,"&apikey=2bce123b"),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:(a=e.sent).Search&&c(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){p(n)}),[n]),Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{searchInput:n,setSearchInput:l}),Object(m.jsx)(x,{movies:s})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.648c3086.chunk.js.map