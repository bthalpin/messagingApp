(this.webpackJsonpsociallydistanced=this.webpackJsonpsociallydistanced||[]).push([[0],[,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),a=s(11),i=s.n(a),r=(s(16),s(3)),l=s(1),o=(s(8),s(0)),u=function(e){var t=e.inputType,s=e.onChanges,n=e.value;return Object(o.jsxs)("div",{className:"inputBlock",children:[Object(o.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(o.jsx)("input",{className:"inputField",type:"text",name:t,id:t,value:n,onChange:s})]})},j=function(e){var t=e.user,s=e.route,n=e.errorMessage,c=e.setRoute,a=e.setUser,i=e.setErrorMessage,r=e.setIsSignedIn,j=e.onRouteChange,A=e.setCurrentMessage,b=e.pastMessages,m=e.setPrivateMessage,d=e.setCurrentPublicMessage,g=(e.setPrivatePublicMessage,t.username),O=t.email,h=t.password,f=function(e){switch(e.target.id){case"Name":a((function(t){return Object(l.a)(Object(l.a)({},t),{},{username:e.target.value})}));break;case"Email":a((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}));break;case"Password":a((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}));break;default:console.log(e.target.value)}};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("article",{className:"formWindow",children:["Register"===s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"legend",children:"Register"}),Object(o.jsx)(u,{inputType:"Name",value:g,onChanges:f}),Object(o.jsx)(u,{inputType:"Email",value:O,onChanges:f}),Object(o.jsx)(u,{inputType:"Password",value:h,onChanges:f})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"legend",children:"Sign In"}),Object(o.jsx)(u,{inputType:"Email",value:O,onChanges:f}),Object(o.jsx)(u,{inputType:"Password",value:h,onChanges:f})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",{type:"submit",className:"button",onClick:function(){"Sign In"===s?(c("home"),r(!0),console.log(t),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})})),m((function(e){return Object(l.a)(Object(l.a)({},e),{},{senderEmail:O})})),d((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})}))):(/\S+@\S+\.\S+/.test(O)&&h.length>=8&&(c("home"),r(!0),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:g})})),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})})),console.log(b)),h.length<8?i("Password must be 8 characters long"):i("Enter a valid email address"))},children:"Submit"})}),Object(o.jsx)("div",{className:"",children:"Sign In"===s?Object(o.jsx)("p",{onClick:function(){return j("Register")},className:"loginLink",children:"Register"}):Object(o.jsx)("p",{onClick:function(){return j("Sign In")},className:"loginLink",children:"Sign In"})})]})}),Object(o.jsx)("div",{children:n})]})},A=(s(18),s.p+"static/media/home.2ea0f12c.png"),b=function(e){var t=e.onRouteChange,s=e.isSignedIn,n=e.route;return s?Object(o.jsxs)("div",{className:"navroot",children:["home"===n?Object(o.jsx)("div",{className:"navLeft",children:Object(o.jsx)("p",{className:"navhomemail",onClick:function(){return t("mail")},children:Object(o.jsx)("img",{className:"homemail",src:"data:image/png;base64,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",alt:"Mail",width:"30rem"})})}):Object(o.jsx)("div",{className:"navLeft",children:Object(o.jsx)("p",{className:"navhomemail",onClick:function(){return t("home")},children:Object(o.jsx)("img",{className:"homemail",src:A,alt:"Home",width:"30rem"})})}),Object(o.jsx)("div",{className:"headcontainer",children:Object(o.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})}),Object(o.jsx)("nav",{className:"nav",children:Object(o.jsx)("p",{onClick:function(){return t("Sign In")},className:"navElement",children:"Sign Out"})})]}):Object(o.jsx)("div",{className:"navroot",children:Object(o.jsx)("div",{className:"headcontainer",children:Object(o.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})})})},m=s(4),d=(s(9),s(19),function(e){return console.log(e),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"picture",alt:"picture",src:e.source,width:"200rem"})})}),g=s.p+"static/media/like.1fe2cbbc.png",O=s.p+"static/media/liked.82a0b8ca.png",h=function(e){var t=e.route,s=e.text,n=e.username,c=e.time,a=e.i,i=e.deletePost,r=e.deleteMail,l=e.reply,u=e.addLike,j=e.count,A=e.currentUser,b=e.filteredMessages;return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{className:"smallbox",children:[Object(o.jsxs)("div",{className:"messageArea",children:[Object(o.jsx)("div",{className:"text",children:Object(o.jsx)("div",{className:"textmessage",children:s.includes("#img#")?Object(o.jsx)(d,{source:s.substr(5,s.length-1)}):s})}),Object(o.jsx)("div",{className:"deleteContainer",children:"home"===t?Object(o.jsx)("div",{children:b[a].email===A?Object(o.jsx)("button",{className:"deleteButton",id:a,onClick:function(){return i(a)},children:"x"}):Object(o.jsx)(o.Fragment,{})}):Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"deleteButton",id:a,onClick:r,children:"X"})})})]}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:"user",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{className:"date",children:c.substr(0,24)})]}),Object(o.jsxs)("div",{className:"likes",children:["home"===t?Object(o.jsx)("button",{className:"likeButton",onClick:function(){return u(a)},children:j.includes(A)?Object(o.jsx)("img",{src:O,alt:"Unlike",width:"20rem"}):Object(o.jsx)("img",{src:g,alt:"like",width:"20rem"})}):Object(o.jsx)("button",{className:"likeButton",onClick:function(){return l(n)},children:"Reply"}),"home"===t?Object(o.jsx)("div",{children:j.length>4?"".concat(j.length," Likes"):j.length>1?j.length>2?j.join(", ")+" like this post":j.join(" and ")+" like this post":j.length?j+" likes this post":""}):Object(o.jsx)(o.Fragment,{})]})]})})},f=function(e){var t=e.user,s=e.currentMessage,c=e.pastMessages,a=e.setPastMessages,i=e.setCurrentMessage,u=e.currentPublicMessage,j=e.pastPublicMessages,A=e.setPastPublicMessages,b=e.setCurrentPublicMessage,d=e.deletePost,g=e.route,O=Object(n.useState)(c.filter((function(e){return t.friends.includes(e.email)||t.email===e.email}))),f=Object(r.a)(O,2),x=f[0],v=f[1],p=Object(n.useState)(!0),C=Object(r.a)(p,2),B=C[0],E=C[1];Object(n.useEffect)((function(){""!==s.message&&(a([].concat(Object(m.a)(c),[s])),i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[s.time]),Object(n.useEffect)((function(){""!==u.message&&(A([].concat(Object(m.a)(j),[u])),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[u.time]),Object(n.useEffect)((function(){v((function(){return c.filter((function(e){return t.friends.indexOf(e.email.toUpperCase())>-1||t.email===e.email}))}))}),[t.friends,c]),console.log("filtered",x,c,"user",t.email);var M=function(e){e&&(B?b((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+u.message})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+s.message})}))),console.log(u,"public"),B?b((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})}))},N=function(e){B?b((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})})):i((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},w=function(e){if(B){var s=Object(m.a)(j);if(s[e].count.includes(t.email)){var n=s[e].count.filter((function(e){return e!==t.email}));s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:n}),A(s)}else{var i=[].concat(Object(m.a)(s[e].count),[t.email]);s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:i}),console.log(i),A(s)}}else{var r=Object(m.a)(c);if(r[e].count.includes(t.email)){var o=r[e].count.filter((function(e){return e!==t.email}));r[e]=Object(l.a)(Object(l.a)({},r[e]),{},{count:o}),a(r)}else{var u=[].concat(Object(m.a)(r[e].count),[t.email]);r[e]=Object(l.a)(Object(l.a)({},r[e]),{},{count:u}),console.log(u),a(r)}}},P=function(){E(!B)};return Object(o.jsxs)("div",{className:"maincomment",children:[Object(o.jsx)("h1",{children:"Message Board"}),B?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("button",{className:"submitbutton",onClick:function(){return M(!0)},children:"Picture"}),Object(o.jsx)("input",{className:"textarea",cols:"40",rows:"6",onChange:N,value:u.message}),Object(o.jsx)("input",{className:"textarea",cols:"40",rows:"6",onChange:N,value:u.message}),Object(o.jsx)("button",{className:"submitbutton",onClick:function(){return M(!1)},children:"Submit"})]}),Object(o.jsxs)("div",{className:"publicButton",children:[Object(o.jsx)("button",{className:"disabledButtons",children:"Public"}),Object(o.jsx)("button",{className:"publicButtons",onClick:P,children:"Friends"})]}),Object(o.jsx)("div",{className:"commentsection",children:Object(o.jsx)("div",{className:"bigbox",children:j.map((function(e,s){var n=j.length-1-s;return console.log("username",j[n]),Object(o.jsx)("div",{children:Object(o.jsx)(h,{filteredMessages:j,currentUser:t.email,username:j[n].email,text:j[n].message,time:j[n].time,i:n,deletePost:d,route:g,addLike:w,count:j[n].count})})}))})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("input",{className:"textarea",cols:"40",rows:"6",onChange:N,value:s.message}),Object(o.jsx)("button",{className:"submitbutton",onClick:M,children:"Submit"})]}),Object(o.jsxs)("div",{className:"publicButton",children:[Object(o.jsx)("button",{className:"publicButtons",onClick:P,children:"Public"}),Object(o.jsx)("button",{className:"disabledButtons",children:"Friends"})]}),Object(o.jsxs)("div",{className:"commentsection",children:[Object(o.jsx)("div",{className:"bigbox",children:x.map((function(e,s){var n=x.length-1-s;return Object(o.jsx)("div",{children:Object(o.jsx)(h,{filteredMessages:x,currentUser:t.email,username:x[n].email,text:x[n].message,time:x[n].time,i:n,deletePost:d,route:g,addLike:w,count:x[n].count})})}))}),console.log("message",c)]})]})]})},x=(s(20),function(e){var t=e.privateMessage,s=e.setPrivateMessage,c=e.privateMessages,a=e.setPrivateMessages,i=(e.user,e.deletePost,e.conversation),r="";Object(n.useEffect)((function(){""!==t.message&&(a((function(e){return[].concat(Object(m.a)(e),[t])})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:"",message:"",time:""})})))}),[t.time]);var u=function(e){e&&s((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+t.message})})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})),console.log(c)},j=function(e){var t=c.length-1-e.target.id;a(c.filter((function(e){return e!==c[t]})))},A=function(e){console.log("reply",e),s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})}))};return Object(o.jsxs)("div",{className:"mailbox",children:[Object(o.jsx)("h1",{children:i.you}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"submit",onClick:function(){return u(!0)},children:"Picture"}),Object(o.jsx)("input",{name:"body",id:"messageBody",placeholder:"Enter Message ",onChange:function(e){switch(e.target.id){case"recipientEmail":s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e.target.value})}));break;case"messageBody":s((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))}},value:t.message}),Object(o.jsx)("button",{type:"submit",onClick:function(){return u(!1)},children:"Send"})]}),Object(o.jsx)("div",{className:"messages",children:c.map((function(e,t){var s=c.length-1-t;if(console.log(i,c[s],"time"),c[s].recipientEmail.toUpperCase()===i.you&&c[s].senderEmail===i.me||c[s].recipientEmail===i.me.toUpperCase()&&c[s].senderEmail.toUpperCase()===i.you)return r=c[s].senderEmail.toUpperCase()===i.me.toUpperCase()?"sender":"recipient",console.log(c[s].senderEmail.toUpperCase()===i.me.toUpperCase()),Object(o.jsx)("div",{className:r,children:Object(o.jsx)(h,{username:c[s].senderEmail,text:c[s].message,time:c[s].time,i:t,deleteMail:j,reply:A})})}))})]})}),v=(s(10),function(e){var t=e.friend,s=e.converse;e.route;return console.log(t),Object(o.jsx)("div",{className:"radioButton",children:Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(o.jsx)("label",{for:t,children:t})]})})}),p=s.p+"static/media/friend.f4b364da.png",C=function(e){var t=e.user,s=e.setUser,c=e.setPrivateMessage,a=e.route,i=e.setRoute,u=e.setConversation,j=Object(n.useState)(!1),A=Object(r.a)(j,2),b=A[0],d=A[1],g=function(e){u((function(s){return Object(l.a)(Object(l.a)({},s),{},{you:e,me:t.email})})),c((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})})),i("mail"),console.log("add")},O=function(){d(!b)},h=t.friends;return Object(o.jsx)("div",{className:"fixed",children:b?Object(o.jsxs)("div",{className:"friendList",children:[Object(o.jsx)("div",{className:"mainfriend",children:Object(o.jsxs)("div",{children:[console.log(a,"route"),Object(o.jsx)("div",{className:"friendtitlebox",children:Object(o.jsx)("p",{className:"friendtitle",children:"home"===a?"Friends List":"Contacts"})}),Object(o.jsx)("div",{className:"scroll",children:Object(o.jsxs)("ul",{children:[console.log(h),h.map((function(e){return Object(o.jsx)(v,{converse:g,friend:e,route:a})}))]})}),Object(o.jsx)("button",{className:"addFriend",onClick:function(){var e=prompt("Enter the email address of your friend ");if(e){var t=[].concat(Object(m.a)(h),[e.toUpperCase()]);s((function(e){return Object(l.a)(Object(l.a)({},e),{},{friends:t})}))}},children:"Add Friend"})]})}),Object(o.jsx)("button",{className:"hideFriend",onClick:O,children:"<<"})]}):Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",{className:"showFriend",onClick:O,children:Object(o.jsx)("img",{src:p,alt:"Friends",width:"35rem;"})})})})};s(21);var B=function(){var e=Object(n.useState)({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)("Sign In"),i=Object(r.a)(a,2),l=i[0],u=i[1],A=Object(n.useState)(!1),m=Object(r.a)(A,2),d=m[0],g=m[1],O=Object(n.useState)(""),h=Object(r.a)(O,2),v=h[0],p=h[1],B=Object(n.useState)([]),E=Object(r.a)(B,2),M=E[0],N=E[1],w=Object(n.useState)({username:"",email:"",message:"",time:"",count:[]}),P=Object(r.a)(w,2),Q=P[0],k=P[1],I=Object(n.useState)([]),S=Object(r.a)(I,2),y=S[0],T=S[1],D=Object(n.useState)({username:"",email:"",message:"",time:"",count:[]}),F=Object(r.a)(D,2),L=F[0],U=F[1],R=Object(n.useState)([]),Y=Object(r.a)(R,2),q=Y[0],X=Y[1],H=Object(n.useState)({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),V=Object(r.a)(H,2),G=V[0],J=V[1],Z=Object(n.useState)({me:"",you:""}),K=Object(r.a)(Z,2),W=K[0],z=K[1],$=function(e){"home"===e||"mail"===e?g(!0):(console.log(s),u("Sign In"),g(!1),c({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),p(""),k({username:"",email:"",message:"",time:"",count:[]}),J({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),z({me:"",you:""})),u(e)},_=function(e){console.log(M[e].email),M[e].email===s.email?N(M.filter((function(t){return t!==M[e]}))):alert("You can only delete your own messages")};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{onRouteChange:$,isSignedIn:d,route:l}),d?"home"===l?Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(C,{user:s,setUser:c,route:l,setRoute:u,setPrivateMessage:J,setConversation:z}),Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(f,{user:s,route:l,deletePost:_,currentMessage:Q,setCurrentMessage:k,pastMessages:M,setPastMessages:N,currentPublicMessage:L,setCurrentPublicMessage:U,pastPublicMessages:y,setPastPublicMessages:T})})]}):Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(C,{user:s,setUser:c,route:l,setRoute:u,setPrivateMessage:J,setConversation:z}),Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(x,{user:s,privateMessage:G,setPrivateMessage:J,privateMessages:q,setPrivateMessages:X,deletePost:_,conversation:W})}),console.log(q,G)]}):Object(o.jsxs)(o.Fragment,{children:[console.log(q,G),Object(o.jsx)(j,{user:s,route:l,errorMessage:v,setUser:c,setRoute:u,setErrorMessage:p,setIsSignedIn:g,onRouteChange:$,setCurrentMessage:k,pastMessages:M,setPrivateMessage:J,setCurrentPublicMessage:U})]})]})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),E()}],[[22,1,2]]]);
//# sourceMappingURL=main.cdbda21f.chunk.js.map