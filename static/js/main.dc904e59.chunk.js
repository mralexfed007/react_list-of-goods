(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(2),o=n.n(s),i=n(6),l=n(3),c=n(4),u=n(5),h=n(8),m=n(7),b=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={visibleList:!1,goods:b,reverse:!1,filterByLength:1,sort:""},e.reset=function(){e.setState({visibleList:!0,goods:b,reverse:!1,filterByLength:1,sort:""})},e.reverse=function(){e.setState((function(e){return{reverse:!e.reverse}}))},e.sortByAlph=function(){e.setState((function(e){return{sort:"byAlph"}}))},e.sortByLength=function(){e.setState((function(e){return{sort:"byLength"}}))},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(l.a)({},r,parseFloat(a)))},e}return Object(u.a)(n,[{key:"render",value:function(){for(var e=this,t=[],n=1;n<=10;n++)t.push(n);var r=this.state,s=r.visibleList,o=r.goods,l=r.reverse,c=r.filterByLength,u=r.sort,h=Object(i.a)(o).filter((function(e){return e.length<=c}));return h.sort((function(e,t){switch(u){case"byAlph":return e.localeCompare(t);case"byLength":return e.length-t.length;default:return 0}})),l&&h.reverse(),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),s?a.a.createElement("ol",{className:"list"},h.map((function(e){return a.a.createElement("li",{key:e},e)}))):a.a.createElement("button",{type:"submit",onClick:function(){e.setState({visibleList:!0})}},"Start"),s&&a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{type:"submit",onClick:this.reverse},"Reverse"),a.a.createElement("button",{type:"submit",onClick:this.sortByAlph},"Sort alphabetically"),a.a.createElement("button",{type:"submit",onClick:this.sortByLength},"Sort by length"),a.a.createElement("button",{type:"submit",onClick:this.reset},"Reset"),a.a.createElement("div",{className:"box"},a.a.createElement("select",{name:"filterByLength",value:c,onChange:this.handleChange},t.map((function(e){return a.a.createElement("option",{value:e,key:e},e)}))))))}}]),n}(a.a.Component);o.a.render(a.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.dc904e59.chunk.js.map