(this["webpackJsonpvote-react"]=this["webpackJsonpvote-react"]||[]).push([[0],{146:function(e,t,a){e.exports=a(235)},152:function(e,t,a){},230:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(151),a(152),a(28)),i=a(29);function u(){var e=Object(l.a)(["\n  color: white;\n"]);return u=function(){return e},e}function s(){var e=Object(l.a)(["\n  position: relative;\n  background-color: black;\n  color: white;\n  padding: 10px;\n"]);return s=function(){return e},e}var m=i.a.div(s()),v=i.a.h2(u()),f=function(e){var t=e.title,a=void 0===t?"\ud22c\ud45c":t;return r.a.createElement(m,null,r.a.createElement(v,null,a))},b=a(75),d=a(40),g=a(35),p=a(13),h=a(106),O=a(238),E=a(100),j=a(239),k=a(240),y=a(12),C=Object(n.memo)((function(e){var t=e.placeholder,a=void 0===t?"\uc785\ub825\ud558\uc138\uc694":t,c=e.value,o=void 0===c?"":c,l=e.onChange,i=e.range,u=void 0===i?[]:i,s=e.type,m=void 0===s?"":s,v=e.inputRef,f=(e.name,Object(E.a)(e,["placeholder","value","onChange","range","type","inputRef","name"])),b=j.a[m]?j.a[m]:j.a,d=function(e){var t=o.length;if(!(void 0===t?0:t)||!u.length)return{suffix:r.a.createElement("span",null)};var a=Object(p.a)(u,2),n=a[0],c=void 0===n?1:n,l=a[1],i=void 0===l?100:l,s={tooltipTitle:"".concat(c,"~").concat(i,"\uc790\ub97c \uc785\ub825\ud558\uc138\uc694."),type:"warning",twoToneColor:"#eb2f96"};e&&(s={tooltipTitle:"",type:"check-circle",twoToneColor:"#52c41a"});var m=s,v=m.tooltipTitle,f=void 0===v?"":v,b=Object(E.a)(m,["tooltipTitle"]);return{suffix:r.a.createElement(k.a,{title:f},r.a.createElement(y.a,Object.assign({theme:"twoTone"},b)))}}(Object(n.useCallback)((function(){var e=o.length,t=void 0===e?0:e,a=Object(p.a)(u,2),n=a[0],r=void 0===n?1:n,c=a[1];return t>=r&&t<=(void 0===c?100:c)}),[o,u])());return r.a.createElement(b,Object.assign({ref:v,onChange:l,value:o,placeholder:a},f,d))})),S=a(237),L=a(141),N=a(7),w=a.n(N),x=S.a.RangePicker,_=Object(n.memo)((function(e){var t=e.onChangeRangePicker,a=e.value,c=Object(n.useCallback)((function(e){return e&&e<w()().startOf("day")}),[]),o=Object(n.useCallback)((function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a}),[]),l=Object(n.useCallback)((function(e,t){return"start"===t?{disabledHours:function(){return o(0,60).splice(4,20)},disabledMinutes:function(){return o(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return o(0,60).splice(20,4)},disabledMinutes:function(){return o(0,31)},disabledSeconds:function(){return[55,56]}}}),[o]);return r.a.createElement(x,{onChange:function(e){t(e)},locale:L.a,disabledDate:c,disabledTime:l,showTime:{hideDisabledOptions:!0,defaultValue:[w()("00:00:00","HH:mm:ss"),w()("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss",value:a})})),I=a(25),P=a(138),V=a(139),R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;Object(P.a)(this,e),this.localStorage=window.localStorage,this.getLocalStorage(t)||this.setLocalStorage(t,{}),a&&a()}return Object(V.a)(e,[{key:"getLocalStorage",value:function(e){return JSON.parse(this.localStorage.getItem(e))}},{key:"setLocalStorage",value:function(e,t){this.localStorage.setItem(e,JSON.stringify(t))}}]),e}(),T="voteData",H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=new R(e),a=function(e,a){var n=t.getLocalStorage(T),r=n.users,c=(void 0===r?[]:r).filter((function(t){return t.name===e})),o=Object(p.a)(c,1)[0];o?t.setLocalStorage(T,Object(I.a)({},n,{loginUser:o})):alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc544\uc774\ub514 \uc785\ub2c8\ub2e4."),a&&a(!!o)},n=function(e){var a=t.getLocalStorage(T);t.setLocalStorage(T,Object(I.a)({},a,{loginUser:{}})),e&&e(!0)},r=function(e,a){if(o(e))return alert("\uc911\ubcf5 \uc544\uc774\ub514\uac00 \uc788\uc2b5\ub2c8\ub2e4.");var n=t.getLocalStorage(T),r=t.getLocalStorage(T).users,c=void 0===r?[]:r,l=c.slice(-1),i=Object(p.a)(l,1)[0],u=(void 0===i?{}:i).userId,s=(void 0===u?0:u)+1;t.setLocalStorage(T,Object(I.a)({},n,{users:[].concat(Object(g.a)(c),[{name:e,userId:s}])})),a&&a(!0)},c=function(){var e=t.getLocalStorage(T).users;return void 0===e?[]:e},o=function(e){return c().some((function(t){return t.name===e}))},l=function(){return t.getLocalStorage(T).loginUser},i=function(e,a){var n=t.getLocalStorage(T),r=e.title,c=e.voteItems,o=e.date,l=e.creator,i=t.getLocalStorage(T).votes,u=void 0===i?[]:i,s=c.map((function(e){return{title:e,votes:0}}));t.setLocalStorage(T,Object(I.a)({},n,{votes:[].concat(Object(g.a)(u),[{creator:l,votePeriod:o,voter:[],voteTitle:r,items:s}])})),a&&a()},u=function(e,a){var n=t.getLocalStorage(T),r=e.title,c=e.voteItems,o=e.date,l=e.index,i=n.votes,u=void 0===i?[]:i,s=c.map((function(e){return{title:e,votes:0}})),m=u.map((function(e,t){if(t===parseInt(l))return Object(I.a)({},e,{voter:[],voteTitle:r,items:s,votePeriod:o})}));t.setLocalStorage(T,Object(I.a)({},n,{votes:m})),a&&a()},s=function(e,a){var n=t.getLocalStorage(T),r=n.votes.filter((function(t,a){return a!==e}));t.setLocalStorage(T,Object(I.a)({},n,{votes:r})),a&&a()},m=function(e){var a=t.getLocalStorage(T).votes,n=void 0===a?[]:a,r=parseInt(e);return isNaN(r)||"number"!==typeof r?n:n.filter((function(e,t){return t===r}))},v=function(e,a,n,r){var c=t.getLocalStorage(T),o=parseInt(e),l=parseInt(a),i=m()||[],u=i.slice(o,o+1),s=Object(p.a)(u,1)[0].items,v=(void 0===s?[]:s).map((function(e,t){return t===l?Object(I.a)({},e,{votes:e.votes+1}):e})),f=i.map((function(e,t){return t===o?Object(I.a)({},e,{voter:[].concat(Object(g.a)(e.voter),[n]),items:v}):e}));t.setLocalStorage(T,Object(I.a)({},c,{votes:f})),r&&r()},f=function(e){var t=m(e),a=Object(p.a)(t,1)[0],n=void 0===a?{}:a,r=n.voter,c=(r=void 0===r?{}:r).length,o=n.items,l=(void 0===o?[]:o).map((function(e){var t=(e.votes/c*100).toFixed(1);return Object(I.a)({},e,{percentage:isNaN(t)?0:t})}));return{totalVoter:c,items:l}};return{login:a,logout:n,createUser:r,getLoginUser:l,getUsers:c,createVote:i,getVotes:m,deleteVote:s,updateVote:v,getResult:f,editVote:u}},U=function(e){var t=e.history,a=H().createVote,c=Object(n.useState)(["","",""]),o=Object(p.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(""),s=Object(p.a)(u,2),m=s[0],v=s[1],f=Object(n.useState)(""),b=Object(p.a)(f,2),d=b[0],E=b[1],j=Object(n.useState)([]),k=Object(p.a)(j,2),y=k[0],S=k[1],L=Object(n.useRef)([2,20]),N=Object(n.useRef)([2,10]),w=(0,H().getLoginUser)();Object(n.useEffect)((function(){var e=Object(p.a)(L.current,2),t=e[0],a=e[1],n=Object(p.a)(N.current,2),r=n[0],c=n[1],o=m.length,i=t<=o&&a>=o,u=l.every((function(e){var t=e.length;return r<=t&&c>=t}));S([i,u,!!d])}),[m,l,d]);var x=Object(n.useCallback)((function(e){E(e)}),[]),I=Object(n.useCallback)((function(e){v(e.target.value)}),[]),P=Object(n.useCallback)((function(e){return function(t){var a=t.target.value;i((function(t){return t.map((function(t,n){return n===e?a:t}))}))}}),[]),V=Object(n.useCallback)((function(e){return function(){i((function(t){return 3===t.length?(alert("\ucd5c\uc18c \ud56d\ubaa9\uc740 3\uac1c\uc785\ub2c8\ub2e4!"),t):t.filter((function(t,a){return a!==e}))}))}}),[y]),R=Object(n.useCallback)((function(){a({title:m,voteItems:l,date:d,creator:w.name},(function(){alert("\ud22c\ud45c \uc0dd\uc131!"),t.push("/vote-react/votes")}))}),[m,l,d,a,w,t]),T=Object(n.useCallback)((function(){i([].concat(Object(g.a)(l),[""]))}),[l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"vote_item"},"\uc81c\ubaa9",r.a.createElement(C,{onChange:I,value:m,placeholder:"2~20\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.",range:L.current})),r.a.createElement("div",{className:"vote_item"},"\ud22c\ud45c\ud56d\ubaa9",r.a.createElement(h.a,{onClick:T,type:"primary"},"\ucd94\uac00"),r.a.createElement(O.a,{bordered:!0,dataSource:l,renderItem:function(e,t){return r.a.createElement(O.a.Item,null,r.a.createElement(C,{type:"Search",value:e,placeholder:"\ud22c\ud45c\ud56d\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694. 2~10\uc790",enterButton:"\uc0ad\uc81c",onChange:P(t),onSearch:V(t),range:N.current}))}})),r.a.createElement("div",{className:"datePicker vote_item"},"\uae30\uac04 ",r.a.createElement("br",null),r.a.createElement(_,{onChangeRangePicker:x,value:d})),r.a.createElement("div",{className:"crate_btn_wrap"},r.a.createElement(h.a,{type:"primary",block:!0,className:"create_btn",onClick:R,disabled:y.some((function(e){return!e}))},"\ud22c\ud45c\uc0dd\uc131")))},Y=(a(230),U);function D(){var e=Object(l.a)(["\n  display: block;\n  height: 40px;\n  width: ","%;\n  line-height: 40px;\n  text-align: right;\n  background: ",";\n  border-radius: 10px;\n  box-sizing: border-box;\n  animation: "," 2s 1;\n"]);return D=function(){return e},e}function F(){var e=Object(l.a)(["\n        0% {\n        width: 0;\n    }\n    100% {\n        width: ","%;\n    }\n    "]);return F=function(){return e},e}var M=function(e){var t=e.item,a=e.index,c=Object(n.useState)(0),o=Object(p.a)(c,2),l=o[0],i=o[1],u=Object(n.useRef)(0);return Object(n.useEffect)((function(){if(!u.current){var e=Math.abs(Math.floor(2e3/(0-t.percentage)));u.current=setInterval((function(){i((function(e){return e+1}))}),e)}l>t.percentage&&(clearInterval(u.current),i(t.percentage))}),[l,t.percentage]),Object(n.useEffect)((function(){return function(){clearInterval(u.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"result_title"},r.a.createElement("h3",null,"".concat(a+1,". "),t.title," (".concat(t.votes,"\ud45c)"))),r.a.createElement("div",{className:"graph"},r.a.createElement(B,{width:t.percentage,index:a},l,"%")))},B=i.a.span(D(),(function(e){return e.width}),(function(e){return e.index%2===0?"LightSkyBlue":"pink"}),(function(e){return function(e){return Object(i.b)(F(),e)}(e.width)})),J=function(e){var t=H().getResult,a=e.match.params.id,n=e.history,c=t(a),o=c.totalVoter,l=c.items;return(!o||!l)&&n.push("/vote-react"),o&&l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph_container"},l.map((function(e,t){return r.a.createElement(M,{item:e,index:t,key:e.title+t})}))),r.a.createElement("div",null,r.a.createElement("h3",null,"\uc804\uccb4\ud22c\ud45c\uc218 : ","".concat(o,"\uba85"))),r.a.createElement("div",{className:"first"},r.a.createElement(b.b,{to:"/"},r.a.createElement(h.a,{type:"primary"}," \ud22c\ud45c\ubaa9\ub85d")))):null},z=(a(232),J),W=function(e){var t=e.vote,a=e.startVote,n=e.index,c=e.user,o=e.onClickDelete,l=e.onClickEdit,i=w()(t.votePeriod[0]).format("YYYY-MM-DD HH:mm"),u=w()(t.votePeriod[1]).format("YYYY-MM-DD HH:mm"),s=w()().isBetween(w()(t.votePeriod[0]),w()(t.votePeriod[1]));return r.a.createElement("div",{className:"item",onClick:a(n),key:n},r.a.createElement("h3",{style:{margin:"5px",borderBottom:"1px solid black"}},t.voteTitle),r.a.createElement("p",{className:"sub_title"},"* \uc0dd\uc131\uc790 : ",t.creator),r.a.createElement("p",{className:"sub_title"},"* \ud22c\ud45c \uae30\uac04"),r.a.createElement("p",null,"".concat(i," ~ ").concat(u)),r.a.createElement("p",{className:"sub_title"},"* \ud22c\ud45c \uc9c4\ud589 \uc5ec\ubd80"),r.a.createElement("p",null,s?"\uc9c4\ud589\uc911":" \ud22c\ud45c \uae30\uac04\uc774 \uc544\ub2d9\ub2c8\ub2e4."),t.creator===c.name&&r.a.createElement("div",{className:"btn_wrap"},r.a.createElement(h.a,{type:"primary",className:"btn btn_delete",onClick:o},"\uc0ad\uc81c"),r.a.createElement(h.a,{type:"primary",className:"btn btn_edit",onClick:l},"\uc218\uc815")))},A=function(e){var t=e.history,a=H(),c=a.getVotes,o=a.getLoginUser,l=a.logout,i=a.deleteVote,u=c(),s=o();Object(n.useEffect)((function(){s&&Object.entries(s).length||t.push("/vote-react/login")}));var m=function(e){return function(a){a.stopPropagation(),i(e,(function(){t.push("/vote-react/votes"),alert("\uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}))}},v=function(e){return function(a){a.stopPropagation(),t.push("/vote-react/edit/".concat(e))}},f=function(e){return function(){t.push("/vote-react/votes/".concat(e))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"right",margin:"10px"}},r.a.createElement(h.a,{type:"primary",onClick:function(){t.push("/vote-react/create")}},"\ud22c\ud45c \uc0dd\uc131\ud558\uae30"),r.a.createElement(h.a,{type:"primary",style:{marginLeft:"10px"},onClick:function(){l((function(){t.push("/vote-react")}))}},"\ub85c\uadf8\uc544\uc6c3")),!u.length&&"\ud22c\ud45c\uac00 \uc544\uc9c1 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\ud558\uc138\uc694.",s?r.a.createElement("div",{className:"contents"},u.map((function(e,t){return r.a.createElement(W,{key:e.creator+t,vote:e,startVote:f,index:t,user:s,onClickDelete:m(t),onClickEdit:v(t)})}))):null)},$=(a(233),A),q=function(e){var t=e.match,a=e.history,c=Object(n.useState)(-1),o=Object(p.a)(c,2),l=o[0],i=o[1],u=t.params.id,s=H(),m=s.getVotes,v=s.updateVote,f=s.getLoginUser,b=m(u),d=Object(p.a)(b,1)[0],g=f();!d&&a.push("/vote-react"),Object(n.useEffect)((function(){if(d){var e=g.name;d.voter.includes(e)&&(alert("\uc774\ubbf8 \ud22c\ud45c \ud588\uc2b5\ub2c8\ub2e4."),a.push("/vote-react/result/".concat(u)))}})),Object(n.useEffect)((function(){d&&(w()().isBetween(w()(d.votePeriod[0]),w()(d.votePeriod[1]))||(alert("\ud22c\ud45c \uae30\uac04\uc774 \uc544\ub2d9\ub2c8\ub2e4."),a.push("/vote-react/result/".concat(u))))}));var O=Object(n.useCallback)((function(e){return function(){i(e)}}),[]),E=Object(n.useCallback)((function(){v(u,l,g.name,(function(){return a.push("/vote-react/result/".concat(u))}))}),[a,u,v,l,g.name]),j=l>-1;return r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",{className:"vote_container"},r.a.createElement("div",{className:"vote_title"},r.a.createElement("h2",null,d.voteTitle)),r.a.createElement("div",{className:"vote_List"},d.items.map((function(e,t){return r.a.createElement("div",{className:"vote_item",key:t},r.a.createElement("input",{type:"radio",id:t,name:"vote",value:e.title,onChange:O(t)}),r.a.createElement("label",{style:{fontSize:"20px"},htmlFor:t},e.title))}))),j&&r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",block:!0,onClick:E},"\ud22c\ud45c"))):null)},G=(a(234),q);function K(){var e=Object(l.a)(["\n  text-align: right;\n  margin-bottom: 25px;\n"]);return K=function(){return e},e}var Q=i.a.div(K()),X=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),u=Object(p.a)(i,2),s=u[0],m=u[1],v=H(),f=v.createUser,b=v.login,d=v.getLoginUser,g=Object(n.useRef)(null),O=d();Object(n.useEffect)((function(){O&&Object.entries(O).length&&t.push("/vote-react/votes")}),[t,O]),Object(n.useEffect)((function(){g.current.focus()}),[]);var E=Object(n.useCallback)((function(e){var t=e.target.value;l(t)}),[]),j=Object(n.useCallback)((function(e){var t=e.target.value;m(t)}),[]),k=Object(n.useCallback)((function(){f(o,(function(e){e&&(alert("".concat(o," \uc544\uc774\ub514 \uc0dd\uc131!")),l(""),g.current.focus())}))}),[o,f]),y=Object(n.useCallback)((function(){b(s,(function(e){e?t.push("/vote-react/votes"):m("")}))}),[s,b,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,r.a.createElement(C,{placeholder:"\uc0dd\uc131 \ud560 \uc544\uc774\ub514",value:o,onChange:E,onPressEnter:k}),r.a.createElement(h.a,{type:"primary",block:!0,onClick:k,disabled:!o},"\uc0ac\uc6a9\uc790 \uc0dd\uc131")),r.a.createElement(Q,null,r.a.createElement(C,{inputRef:g,placeholder:"\ub85c\uadf8\uc778 \uc544\uc774\ub514",value:s,onChange:j,onPressEnter:y}),r.a.createElement(h.a,{type:"primary",block:!0,onClick:y,disabled:!s},"\ub85c\uadf8\uc778")))},Z=function(e){var t=e.match,a=e.history,c=H(),o=c.getVotes,l=c.editVote,i=t.params.id,u=Object(n.useState)(["","",""]),s=Object(p.a)(u,2),m=s[0],v=s[1],f=Object(n.useState)(""),b=Object(p.a)(f,2),d=b[0],E=b[1],j=Object(n.useState)([]),k=Object(p.a)(j,2),y=k[0],S=k[1],L=Object(n.useState)([]),N=Object(p.a)(L,2),x=N[0],I=N[1],P=Object(n.useRef)([2,20]),V=Object(n.useRef)([2,10]),R=(0,H().getLoginUser)(),T=o(i),U=Object(p.a)(T,1)[0];Object(n.useEffect)((function(){var e=Object(p.a)(P.current,2),t=e[0],a=e[1],n=Object(p.a)(V.current,2),r=n[0],c=n[1],o=d.length,l=t<=o&&a>=o,i=m.every((function(e){var t=e.length;return r<=t&&c>=t}));I([l,i,!!y])}),[d,m,y]),Object(n.useEffect)((function(){var e=U.voteTitle,t=U.items,a=U.votePeriod,n=Object(p.a)(a,2),r=n[0],c=n[1];E(e),v(Object(g.a)(t.map((function(e){return e.title})))),S([w()(r),w()(c)])}),[]);var Y=Object(n.useCallback)((function(e){S(e)}),[]),D=Object(n.useCallback)((function(e){E(e.target.value)}),[]),F=Object(n.useCallback)((function(e){return function(t){var a=t.target.value;v((function(t){return t.map((function(t,n){return n===e?a:t}))}))}}),[]),M=Object(n.useCallback)((function(e){return function(){v((function(t){return 3===t.length?(alert("\ucd5c\uc18c \ud56d\ubaa9\uc740 3\uac1c\uc785\ub2c8\ub2e4!"),t):t.filter((function(t,a){return a!==e}))}))}}),[x]),B=Object(n.useCallback)((function(){l({title:d,voteItems:m,date:y,index:i},(function(){alert("\uc218\uc815 \uc644\ub8cc!"),a.push("/vote-react/votes")}))}),[d,m,y,R,a]),J=Object(n.useCallback)((function(){v([].concat(Object(g.a)(m),[""]))}),[m]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"vote_item"},"\uc81c\ubaa9",r.a.createElement(C,{onChange:D,value:d,placeholder:"2~20\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.",range:P.current})),r.a.createElement("div",{className:"vote_item"},"\ud22c\ud45c\ud56d\ubaa9",r.a.createElement(h.a,{onClick:J,type:"primary"},"\ucd94\uac00"),r.a.createElement(O.a,{bordered:!0,dataSource:m,renderItem:function(e,t){return r.a.createElement(O.a.Item,null,r.a.createElement(C,{type:"Search",value:e,placeholder:"\ud22c\ud45c\ud56d\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694. 2~10\uc790",enterButton:"\uc0ad\uc81c",onChange:F(t),onSearch:M(t),range:V.current}))}})),r.a.createElement("div",{className:"datePicker vote_item"},"\uae30\uac04 ",r.a.createElement("br",null),r.a.createElement(_,{onChangeRangePicker:Y,value:y})),r.a.createElement("div",{className:"crate_btn_wrap"},r.a.createElement(h.a,{type:"primary",block:!0,className:"create_btn",onClick:B,disabled:x.some((function(e){return!e}))},"\uc218\uc815\uc644\ub8cc")))};function ee(){var e=Object(l.a)(["\n  max-width: 500px;\n  height: 100vh;\n  margin: 0 auto;\n  background-color:white;\n"]);return ee=function(){return e},e}var te=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{exact:!0,path:t.path,component:$}),r.a.createElement(d.b,{path:"".concat(t.path,"/:id"),component:G}))},ae=i.a.div(ee()),ne=function(){return r.a.createElement(ae,null,r.a.createElement(b.a,null,r.a.createElement(f,null),r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(d.a,{to:"/vote-react/login"})),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/vote-react/login",component:X}),r.a.createElement(d.b,{path:"/vote-react/votes",component:te}),r.a.createElement(d.b,{path:"/vote-react/create",component:Y}),r.a.createElement(d.b,{path:"/vote-react/edit/:id",component:Z}),r.a.createElement(d.b,{path:"/vote-react/result/:id",component:z}),r.a.createElement(d.b,null,r.a.createElement(d.a,{to:"/vote-react/login"})))))};var re=function(){return r.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.992dfc31.chunk.js.map