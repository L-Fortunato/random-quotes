(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(2),o=n.n(c),a=n(13),s=n.n(a),u=(n(22),n(23),n(4)),i=n.n(u),d=n(14),l=n(16),j=n(15),h=n.n(j),b=(n(42),function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];function a(){var t=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}();document.getElementById("quote").style.backgroundColor="white",document.getElementById("getQuote").style.backgroundColor=t,document.getElementById("App").style.backgroundColor=t,document.getElementById("quote").style.color=t,document.getElementById("twitter").style.color=t}var s=function(){var t=Object(d.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("http://api.quotable.io/random");case 3:e=t.sent,o(e.data),a(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(r.jsxs)("div",{id:"card",children:[Object(r.jsxs)("div",{id:"quote",children:[Object(r.jsxs)("h1",{id:"quotecontent",children:['"',n.content,'"']}),Object(r.jsxs)("h4",{id:"quoteauthor",children:["-",n.author]})]}),Object(r.jsxs)("div",{id:"buttons",children:[Object(r.jsx)("a",{href:'https://twitter.com/intent/tweet?text="'.concat(n.content,'" -').concat(n.author),class:"twitter-share-button","data-show-count":"false",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("i",{id:"twitter",class:"fab fa-twitter-square fa-3x"})}),Object(r.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),Object(r.jsx)("button",{id:"getQuote",onClick:function(){s()},children:"New Quote"})]})]})}),f=function(){return Object(r.jsx)("div",{className:"App",id:"App",children:Object(r.jsx)(b,{})})};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.be14a55d.chunk.js.map