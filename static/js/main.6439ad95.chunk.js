(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n,o=s(6),c=s.n(o),r=s(5),i=s(7),a=s(8),l=s(2),u=(s(13),s(14),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function d(e,t){var s=t.sortType,o=t.isReversed,c=Object(a.a)(e);return console.log(s,o),s===n.ALPHABET&&c.sort(),s===n.LENGTH&&c.sort((function(e,t){return e.length-t.length})),o&&c.reverse(),c}!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(){var e=Object(l.useState)({sortType:n.NONE,isReversed:!1}),t=Object(i.a)(e,2),s=t[0],o=t[1];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info ".concat(s.sortType===n.ALPHABET?"":"is-light"),onClick:function(){o({sortType:n.ALPHABET,isReversed:!1})},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success ".concat(s.sortType===n.LENGTH?"":"is-light"),onClick:function(){o({sortType:n.LENGTH,isReversed:!1})},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning ".concat(s.isReversed?"":"is-light"),onClick:function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{isReversed:!e.isReversed})}))},children:"Reverse"}),(s.sortType!==n.NONE||!0===s.isReversed)&&Object(u.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){o({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:d(b,s).map((function(e){return Object(u.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})};c.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6439ad95.chunk.js.map