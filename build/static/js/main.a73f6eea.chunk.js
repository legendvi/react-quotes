(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__1ZYOY",logo:"MainNavigation_logo__2VimX",nav:"MainNavigation_nav__1wUr6",active:"MainNavigation_active__E6agj"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__1mlCH",sorting:"QuoteList_sorting__1tI1-"}},19:function(e,t,n){"use strict";var r=n(11),c=n(4),a=n.n(c),s=n(9),o=n(21),u=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),c=Object(o.a)(n,2),l=c[0],d=c[1],j=Object(u.useCallback)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},l)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(4),c=n.n(r),a=n(11),s=n(9),o="https://react-movie-6402b-default-rtdb.firebaseio.com";function u(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(c.a.mark((function e(){var t,n,r,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)u=Object(a.a)({id:s},n[s]),r.push(u);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(c.a.mark((function e(t){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(a.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t){var n,r,s,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(u in s=[],r)i=Object(a.a)({id:u},r[u]),s.push(i);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={item:"QuoteItem_item__IDmdY"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__17HZf"}},27:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__259uC"}},28:function(e,t,n){e.exports={main:"Layout_main__AdDLP"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(8),s=(n(33),n(2)),o=n(1),u=n.n(o),i=n(23),l=n.n(i),d=n(0),j=function(e){return Object(d.jsxs)("li",{className:l.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},h=n(18),p=n.n(h),b=function(e){var t,n,r=Object(s.h)(),c=Object(s.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),u=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:p.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){r.push({pathname:c.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:p.a.list,children:u.map((function(e){return Object(d.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},f=n(14),x=n(27),O=n.n(x),m=function(){return Object(d.jsxs)("div",{className:O.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},v=n(19),g=n(20),w=function(){var e=Object(v.a)(g.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f.a,{})}):c?Object(d.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(d.jsx)(b,{quotes:r}):Object(d.jsx)(m,{})},_=n(28),y=n.n(_),N=n(12),q=n.n(N),k=function(){return Object(d.jsxs)("header",{className:q.a.header,children:[Object(d.jsx)("div",{className:q.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:q.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.c,{to:"/quotes",activeClassName:q.a.active,children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.c,{to:"/new-quote",activeClassName:q.a.active,children:"Add a Quote"})})]})})]})},C=function(e){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)("main",{className:y.a.main,children:e.children})]})},S=u.a.lazy((function(){return n.e(4).then(n.bind(null,54))})),E=u.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),R=u.a.lazy((function(){return n.e(5).then(n.bind(null,52))}));var D=function(){return Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f.a,{})}),children:Object(d.jsx)(C,{children:Object(d.jsxs)(s.e,{children:[Object(d.jsx)(s.c,{path:"/",exact:!0,children:Object(d.jsx)(s.b,{to:"/quotes"})}),Object(d.jsx)(s.c,{path:"/quotes",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(s.c,{path:"/quotes/:quoteId",children:Object(d.jsx)(E,{})}),Object(d.jsx)(s.c,{path:"/new-quote",children:Object(d.jsx)(S,{})}),Object(d.jsx)(s.c,{path:"*",children:Object(d.jsx)(R,{})})]})})})};c.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a73f6eea.chunk.js.map