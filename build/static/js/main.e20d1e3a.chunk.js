(this.webpackJsonpcheggfront=this.webpackJsonpcheggfront||[]).push([[0],{103:function(e,t,n){},128:function(e,t){},146:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),l=(n(84),n(4)),s=n.n(l),u=n(12),i=n(9),m=n(15),p=n.n(m),f=(n(103),function(e){return r.a.createElement("div",{id:"authFailed",className:"center"},r.a.createElement("i",{className:"large material-icons"},"error_outline"),r.a.createElement("h2",null,"There is a problem with your connection "),r.a.createElement("h3",{style:{position:"absolute",left:"180px"}},"Try to ",r.a.createElement("a",{href:"/"},"login")))}),h=n(172),v=n(173),d=(n(55),n(70)),b=n.n(d),g=n(32),E=n.n(g),w=n(171),O=(n(146),n(174)),j=Object(a.memo)((function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(O.a,{style:{zIndex:"100"},open:e.show}),r.a.createElement("div",{className:"modal-wrapper ",style:{opacity:e.show?"1":"0",transform:e.show?"translateY(0vh)":"translateY(-100vh)"}},r.a.createElement("div",{className:"modal-header"},r.a.createElement("label",null,"Attention!!!"),r.a.createElement("span",{className:"close-modal-btn",onClick:e.close},"x")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",null," ",e.children)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn-cancel",onClick:e.close},"Continue "))))})),y=Object(w.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)},color:"orange"}}})),x=function(e){var t=y(),n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],l=c[1],m=Object(a.useState)(null),d=Object(i.a)(m,2),g=d[0],w=d[1],O=Object(a.useState)(null),x=Object(i.a)(O,2),k=x[0],N=x[1],S=Object(a.useState)(!1),q=Object(i.a)(S,2),C=q[0],I=q[1],D=Object(a.useState)(!1),T=Object(i.a)(D,2),_=T[0],A=T[1],F=Object(a.useRef)(!0);Object(a.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,p.a.get("/api/verifyToken",{headers:{authorization:"Bearer ".concat(t)}});case 4:n=e.sent,a=n.data,console.log(a),console.log(48),F.current=!0,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),w(e.t0),F.current=!1;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o){e.next=3;break}return e.abrupt("return",alert("You have to type a question in the field provided"));case 3:return I(!0),(t={}).question=o,e.next=8,p.a.post("/api/question/chegg",t);case 8:return n=e.sent,e.next=11,n.data;case 11:a=e.sent,N(a.rawDoc),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),A(!0);case 19:return e.prev=19,I(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,15,19,22]])})));return function(){return e.apply(this,arguments)}}(),B=null;return _?B=r.a.createElement(j,{show:_,close:function(){A(!_)}}," Your request couldn't be complete, Please try again"):C?B=r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{variant:"query",style:{width:"700px",position:"absolute",top:"70%",left:"33%"}})):k&&(B=r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"hr"}),r.a.createElement("h1",{className:"answer"},"Answers"),r.a.createElement("div",{className:"answerimage"},b()(k)))),r.a.createElement(a.Fragment,null,g?r.a.createElement(f,null):r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},r.a.createElement("img",{src:E.a,alt:"",className:"qimage"})),r.a.createElement(v.a,{className:"qinput",placeholder:"Please paste your question here!",onChange:function(e){var t=e.target.value;l(t)}}),r.a.createElement("button",{className:"button3 pulse",onClick:U},"Submit"),B))},k=n(39),N=n(17),S=n(35),q=function(e,t,n){return{type:"Document",username:e,password:t,token:n}},C=Object(S.b)(null,(function(e){return{sendAuth:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(s.a.mark((function n(a){var r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.post("/api/signin/login",{username:e,password:t});case 3:return r=n.sent,n.next=6,r.data;case 6:c=n.sent,a(q(e,t,c)),localStorage.setItem("token",c),localStorage.setItem("username",e),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},signUpAuth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(u.a)(s.a.mark((function a(r){var c,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.post("/api/signin/signup",{username:e,password:t,ip:n});case 3:return c=a.sent,a.next=6,c.data;case 6:o=a.sent,console.log(o),r(q(e,t,o)),localStorage.setItem("token",o),localStorage.setItem("username",e),a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),console.log(a.t0),a.abrupt("return",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Object(N.f)((function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(null),m=Object(i.a)(l,2),f=m[0],h=m[1],d=Object(a.useState)(!0),b=Object(i.a)(d,2),g=b[0],w=b[1],O=Object(a.useState)(null),y=Object(i.a)(O,2),x=y[0],k=y[1],N=Object(a.useState)(null),S=Object(i.a)(N,2),q=S[0],C=S[1],I=Object(a.useState)(null),D=Object(i.a)(I,2),T=D[0],_=D[1],A=Object(a.useRef)(!1);Object(a.useEffect)((function(){var t=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://geolocation-db.com/json/6db070f0-7c27-11ea-8264-e974339fc182.json");case 2:return t=e.sent,e.t0=k,e.next=6,t.data;case 6:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=10,n();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("token"),t.prev=1,t.next=4,p.a.get("/api/verifyToken",{headers:{authorization:"Bearer ".concat(n)}});case 4:A.current=!0,console.log(42),e.history.push("/question"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),A.current=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var F=function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(null),C(null),t.next=4,e.sendAuth(f,c);case 4:(n=t.sent)?C(n):e.history.push("/question");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();console.log(x);var U=function(){var t=Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(null),C(null),t.next=4,e.signUpAuth(f,c,x);case 4:(n=t.sent)?_(n):e.history.push("/question");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(a.Fragment,null,q?r.a.createElement("p",{className:"error"},"Username is not valid or password is wrong"):null,T?r.a.createElement("p",{className:"error"}," This username is taken"):null,g?r.a.createElement(j,{close:function(){w(!g)},show:g}," If you don't have an account just type your username and  password you will be logged in automatically "):null,r.a.createElement("h1",{className:"header"},r.a.createElement("img",{src:E.a,alt:"",className:"image"})),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(v.a,{type:"text",onChange:function(e){e.preventDefault();var t=e.target.value;h(t),_(null),C(null)},className:"input",placeholder:"Username",required:!0})),r.a.createElement("div",null,r.a.createElement(v.a,{type:"password",onChange:function(e){e.preventDefault();var t=e.target.value;o(t),_(null),C(null)},className:"input",placeholder:"Password",required:!0})),r.a.createElement("button",{style:{color:"white"},onClick:F,type:"button",className:"button1 pulse"},r.a.createElement("span",null,"Sign-in")),r.a.createElement("button",{onClick:U,type:"button",className:"button2 pulse"},r.a.createElement("span",null,"sign-up"))))})));var I=function(){return r.a.createElement(k.a,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:C}),r.a.createElement(N.a,{exact:!0,path:"/question",component:x})))},D=n(76);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(22),_=n(77),A={raw:null,images:null,token:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"Document"===t.type?Object(_.a)({},e,{raw:t.raw,images:t.images,token:t.token}):e},U=Object(T.c)({Document:F}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,P=Object(T.e)(U,B(Object(T.a)(D.a)));o.a.render(r.a.createElement(S.a,{store:P},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports=n.p+"static/media/chegglogo.2575b66d.jpeg"},55:function(e,t,n){},79:function(e,t,n){e.exports=n(152)},84:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.e20d1e3a.chunk.js.map