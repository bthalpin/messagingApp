(this["webpackJsonphapin-messaging-app"]=this["webpackJsonphapin-messaging-app"]||[]).push([[0],{17:function(e,t,s){},24:function(e,t,s){},4:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),a=s(41),c=s.n(a),r=(s(46),s(4),s(1)),l=s(3),o=(s(24),s(0)),u=function(e){var t=e.inputType,s=e.onChanges,n=e.value;return Object(o.jsxs)("div",{className:"inputBlock",children:[Object(o.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(o.jsx)("input",{className:"inputField",type:t,name:t,id:t,value:n,onChange:s})]})},d=s(23),m=Object(d.io)("https://socially-distanced-server.herokuapp.com/"),j=function(e){var t=e.user,s=e.route,n=e.errorMessage,i=e.setRoute,a=e.setUser,c=e.setErrorMessage,l=e.setIsSignedIn,d=e.onRouteChange,m=e.setCurrentMessage,j=(e.pastMessages,e.setPrivateMessages),b=(e.setCurrentPublicMessage,e.setPrivatePublicMessage,e.setConversation),f=e.setPastMessages,h=e.setPastPublicMessages,O=(e.setFilteredMessages,e.filteredMessages,e.loadData),g=e.password,p=e.setPassword,x=t.name,v=t.email,N=function(e){switch(e.target.id){case"Name":a((function(t){return Object(r.a)(Object(r.a)({},t),{},{name:e.target.value})}));break;case"Email":a((function(t){return Object(r.a)(Object(r.a)({},t),{},{email:e.target.value})}));break;case"Password":p(e.target.value);break;default:console.log(e.target.value)}};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("article",{className:"formWindow",children:Object(o.jsxs)("div",{className:"formcontainer",children:["Register"===s?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"legend",children:"Register"}),Object(o.jsx)("div",{className:"error",children:n}),Object(o.jsx)(u,{inputType:"Name",value:x,onChanges:N}),Object(o.jsx)(u,{inputType:"Email",value:v,onChanges:N}),Object(o.jsx)(u,{inputType:"Password",value:g,onChanges:N})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"legend",children:"Sign In"}),Object(o.jsx)("div",{className:"error",children:n}),Object(o.jsx)(u,{inputType:"Email",value:v,onChanges:N}),Object(o.jsx)(u,{inputType:"Password",value:g,onChanges:N})]}),Object(o.jsx)("div",{className:"legend",children:Object(o.jsx)("button",{type:"submit",className:"button",onClick:function(){var e=t.email.toUpperCase();"Sign In"===s?function(e){fetch("https://socially-distanced-server.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:g})}).then((function(e){return e.json()})).then((function(t){t.email===e?(a(t),i("home"),l(!0),c(""),p(""),m((function(s){return Object(r.a)(Object(r.a)({},s),{},{name:t.name,email:e})})),b({me:t.email,you:""})):(c("Invalid Login Information"),a({name:"",email:"",friends:[],requests:[],pendingrequests:[]}),p(""))})).catch((function(e){return console.log(e)})),O("friendmessageload",JSON.stringify({email:e,friends:t.friends}),f),O("publicmessageload",JSON.stringify({email:e,friends:t.friends}),h),O("privatemessageload",JSON.stringify({email:e,friends:t.friends}),j)}(e):function(e){/\S+@\S+\.\S+/.test(v)&&g.length>=8?(fetch("https://socially-distanced-server.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:e,password:g,friends:t.friends})}).then((function(e){return e.json()})).then((function(e){"TAKEN"===e?c("That email address is already registered."):(a(e),i("home"),l(!0),c(""),p(""),m((function(t){return Object(r.a)(Object(r.a)({},t),{},{name:e.name,email:e.email})})))})).catch((function(e){return console.log(e)})),O("publicmessageload",JSON.stringify({email:e,friends:t.friends}),h)):g.length<8?c("Password must be 8 characters long"):c("Enter a valid email address")}(e)},children:"Submit"})}),Object(o.jsx)("div",{className:"legend",children:"Sign In"===s?Object(o.jsx)("p",{onClick:function(){return d("Register")},className:"loginLink",children:"Register"}):Object(o.jsx)("p",{onClick:function(){return d("Sign In")},className:"loginLink",children:"Sign In"})})]})})})})},b=(s(79),s.p+"static/media/hamburger.745580e9.png"),f=function(e){var t,s=e.onRouteChange,i=e.isSignedIn,a=e.route,c=e.user,r=e.changePublicStatus,u=Object(n.useState)("Hidden"),d=Object(l.a)(u,2),m=d[0],j=d[1],f=function(){j("Hidden"===m?"":"Hidden")},h=function(e,t){""===m&&j("Hidden"),!0===t||!1===t?r(e,t):s(e)};return i?Object(o.jsxs)("div",{className:"navroot",children:[Object(o.jsx)("div",{className:"title",children:"Halpin Messaging App"}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"hideButton",onClick:f,children:Object(o.jsx)("img",{src:b,alt:"=",width:"30rem"})})}),Object(o.jsxs)("div",{className:"mainNav"+m,children:[Object(o.jsx)("button",{className:"wideButton",onClick:f,children:"Close"}),Object(o.jsx)("div",{className:"navButtonContainer ",children:Object(o.jsx)("p",{onClick:function(){return h("home",!0)},className:"navButtons home"+a,children:"Public Chat"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"navButtons friend"+a,onClick:function(){return h("friend",!1)},children:"Friends Chat"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"navButtons private mail"+a,onClick:function(){return h("mail")},children:"Private Message"})}),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("p",{className:"navButtons friends"+a,onClick:function(){return h("friends")},children:["Contacts",(null===c||void 0===c||null===(t=c.requests)||void 0===t?void 0:t.length)?Object(o.jsx)("span",{className:"requests",children:c.requests.length}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("nav",{className:"",children:Object(o.jsx)("p",{onClick:function(){return s("Sign In")},className:"navButtons ",children:"Sign Out"})})]})]}):Object(o.jsx)("div",{})},h=s(10),O=(s(40),s(80),function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"picture",alt:"picture",src:e.source})})}),g=s.p+"static/media/like.1fe2cbbc.png",p=s.p+"static/media/liked.82a0b8ca.png",x=function(e){var t=e.route,s=e.text,n=e.email,i=e.time,a=e.i,c=e.deletePost,r=e.deleteMail,l=e.addLike,u=e.currentUser,d=e.currentId,m=e.filteredMessages,j=e.background,b=e.publicStatus,f=e.addFriend,h=e.likes;return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{className:"smallbox",children:[Object(o.jsx)("div",{className:"messageArea "+j,children:Object(o.jsx)("div",{className:"text",children:Object(o.jsx)("div",{className:"textmessage",children:s.includes("#img#")?Object(o.jsx)(O,{source:s.substr(5,s.length-1)}):Object(o.jsx)("p",{children:s})})})}),Object(o.jsxs)("div",{className:"user "+j,children:[Object(o.jsx)("p",{onClick:function(){return f(n)},children:n.toUpperCase().substr(0,n.indexOf("@"))}),Object(o.jsx)("p",{className:"date",children:i})]}),Object(o.jsxs)("div",{className:"likes ",children:["home"===t||"friend"===t?Object(o.jsx)("button",{className:"likeButton",onClick:function(){return l(a,d)},children:h&&JSON.stringify(h).includes(u)?Object(o.jsx)("img",{src:p,alt:"Unlike",width:"20rem"}):Object(o.jsx)("img",{src:g,alt:"like",width:"20rem"})}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"likedelete",children:[("home"===t||"friend"===t)&&h?Object(o.jsx)("div",{className:"liketext",children:h.length>=4?"".concat(h.length," Likes"):h.length>1?h.length>2?JSON.parse(h[0]).name+", "+JSON.parse(h[1]).name+", and "+JSON.parse(h[2]).name+" like this post":JSON.parse(h[0]).name+" and "+JSON.parse(h[1]).name+" like this post":h.length?JSON.parse(h).name+" likes this post":""}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("div",{className:"deleteContainer",children:"home"===t||"friend"===t?Object(o.jsx)("div",{children:m[a].email===u?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"deleteButton",id:a,onClick:function(){return c(a,b,d)},children:"x"})}):Object(o.jsx)(o.Fragment,{})}):Object(o.jsx)("div",{className:"deleteBackground",children:Object(o.jsx)("button",{className:"deleteButton",id:a,onClick:function(){return r(d)},children:"X"})})})]})]})]})})},v=function(e){var t=e.user,s=e.currentMessage,i=e.pastMessages,a=e.setCurrentMessage,c=e.currentPublicMessage,u=e.pastPublicMessages,d=e.setCurrentPublicMessage,j=e.deletePost,b=e.route,f=e.addFriend,O=e.setFilteredMessages,g=e.filteredMessages,p=e.publicStatus,v=Object(n.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),N=Object(l.a)(v,2),k=N[0],C=N[1],S="",y="";Object(n.useEffect)((function(){var e=s.time;""!==s.message&&(m.emit("friendmessage",{name:t.name,email:t.email.toUpperCase(),message:s.message,time:e,likes:[]}),a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})))}),[s.time]),Object(n.useEffect)((function(){var e=c.time;""!==c.message&&(m.emit("publicmessage",{name:t.name,email:t.email.toUpperCase(),message:c.message,time:e,likes:[]}),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})))}),[c.time]),Object(n.useEffect)((function(){t.friends&&O((function(){return i.filter((function(e){return e.email===t.email||t.friends.includes(e.email)}))}))}),[t.friends,i]);var M=function(e){var t=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"});!e||""===c.message&&""===s.message||(p?d((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+c.message})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+s.message})}))),p?d((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:t})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:t})})),C({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"})},F=function(e){p?d((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})})):a((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})}))},P=function(e){return JSON.parse(e).email!==t.email.toUpperCase()},U=function(e,s){var n=!0;if(p){var i=Object(h.a)(u);i[e].likes&&(n=i[e].likes.every(P)),i[e].likes,n?m.emit("likes",{name:t.name,email:t.email,id:s,database:"publicmessages"}):m.emit("dislike",{name:t.name,email:t.email,id:s,database:"publicmessages"})}else if(!p){var a=Object(h.a)(g);a[e].likes&&(n=a[e].likes.every(P)),!a[e].likes||n?m.emit("likes",{name:t.name,email:t.email,id:s,database:"friendmessage"}):m.emit("dislike",{name:t.name,email:t.email,id:s,database:"friendmessage"})}},q=function(e){C(e?{picture:"",message:"textareahide",button:"textareahide",submit:"",position:" right"}:{picture:"textareahide",message:"",button:"textareahide",submit:"",position:" right"})},w=function(){C({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),p?d((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})}))};return Object(o.jsx)("div",{className:"maincomment",children:p?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"inputbox",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{id:"pic",className:"textareapic public "+k.picture,cols:"40",rows:"6",onChange:F,placeholder:"Enter Picture URL",value:c.message,autoFocus:!0}),Object(o.jsx)("textarea",{id:"msg",className:"textarea public "+k.message,onChange:F,value:c.message,autoFocus:!0})]})}),Object(o.jsxs)("div",{className:"commentsection",children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("label",{className:"msg "+k.submit,onClick:function(){return M(""===k.picture)},children:"Submit"}),Object(o.jsx)("label",{className:"msg "+k.submit,onClick:w,children:"Back"}),Object(o.jsx)("label",{htmlFor:"msg",className:"msg "+k.button,onClick:function(){return q(!1)},children:"Message"}),Object(o.jsx)("label",{htmlFor:"pic",className:"msg "+k.button,onClick:function(){return q(!0)},children:"Picture"})]}),Object(o.jsx)("div",{className:"bigbox",children:u.map((function(e,s){var n=u.length-1-s,i=u[n].id;return Object(o.jsx)("div",{children:Object(o.jsx)(x,{filteredMessages:u,currentUser:t.email,email:u[n].email,text:u[n].message,time:u[n].time,i:n,currentId:i,deletePost:j,route:b,addLike:U,likes:u[n].likes,publicStatus:p,addFriend:f})},s)}))})]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("input",{id:"friendpic",className:"textareapic friend "+k.picture,onChange:F,placeholder:"Enter Picture URL",value:s.message}),Object(o.jsx)("textarea",{id:"friendmsg",className:"textarea friend "+k.message,onChange:F,value:s.message})]}),Object(o.jsxs)("div",{className:"commentsection",children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("label",{htmlFor:"friendmsg",className:"msg "+k.button,onClick:function(){return q(!1)},children:"Message"}),Object(o.jsx)("label",{htmlFor:"friendpic",className:"msg "+k.button,onClick:function(){return q(!0)},children:"Picture"}),Object(o.jsx)("label",{className:"msg "+k.submit,onClick:function(){return M(""===k.picture)},children:"Submit"}),Object(o.jsx)("label",{className:"msg "+k.submit,onClick:w,children:"Back"})]}),Object(o.jsx)("div",{className:"bigbox",children:g.map((function(e,s){var n=g.length-1-s,i=g[n].id;return S=g[n].email.toUpperCase()===t.email.toUpperCase()?"sender":"recipient",y=g[n].email.toUpperCase()===t.email.toUpperCase()?"senderbackground":"",Object(o.jsx)("div",{className:S,children:Object(o.jsx)(x,{filteredMessages:g,currentUser:t.email,email:g[n].email,text:g[n].message,time:g[n].time,i:n,currentId:i,deletePost:j,route:b,addLike:U,likes:g[n].likes,publicStatus:p,addFriend:f,background:y})},s)}))})]})]})})},N=(s(17),function(e){var t=e.friend,s=e.converse,n=e.route,i=e.unFriend,a=e.pendOrReq;return Object(o.jsx)("div",{className:"radioButton",children:"mail"===n?Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(o.jsx)("label",{htmlFor:t,children:t})]}):Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(o.jsx)("label",{htmlFor:t,children:t}),Object(o.jsx)("button",{className:"friendButton",onClick:function(){return i(t,a)},children:"X"})]})})}),k=(s(81),function(e){var t=e.privateMessage,s=e.setPrivateMessage,i=e.privateMessages,a=(e.setPrivateMessages,e.user),c=(e.deletePost,e.conversation),u=e.setConversation,d=e.converse,j=e.route,b=Object(n.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),f=Object(l.a)(b,2),h=f[0],O=f[1],g="",p="";Object(n.useEffect)((function(){var e=t.time;""!==t.message&&m.emit("privatemessage",{name:a.name,senderemail:a.email,recipientemail:c.you,message:t.message,time:e}),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:"",message:"",time:""})}))}),[t.time]);var v=function(e){s((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})}))},k=function(e){m.emit("deletemail",{id:e,database:"privatemessage"})},C=function(e){O(e?{picture:"",message:"textareahide",button:"textareahide",submit:""}:{picture:"textareahide",message:"",button:"textareahide",submit:""})};return Object(o.jsx)("div",{className:"mailbox",children:c.you?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{id:"picture",className:"mailtextarea "+h.picture,cols:"40",rows:"6",onChange:v,placeholder:"Enter Picture URL",value:t.message}),Object(o.jsx)("textarea",{id:"mail",className:"mailtextarea "+h.message,cols:"40",rows:"6",onChange:v,value:t.message}),Object(o.jsxs)("div",{className:"mailButtons",children:[Object(o.jsx)("label",{htmlFor:"mail",className:"buttons "+h.button,onClick:function(){return C(!1)},children:"Message"}),Object(o.jsx)("label",{htmlFor:"picture",className:"buttons "+h.button,onClick:function(){return C(!0)},children:"Picture"}),Object(o.jsx)("label",{className:"buttons "+h.submit,onClick:function(){return function(e){var n=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"});e&&""!==t.message&&s((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+t.message})})),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:n})})),O({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})}(""===h.picture)},children:"Submit"}),Object(o.jsx)("label",{className:"buttons "+h.submit,onClick:function(){O({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})}))},children:"Back"})]}),Object(o.jsxs)("div",{className:"privateMessage",children:[Object(o.jsx)("button",{className:"backButton",onClick:function(){u((function(e){return Object(r.a)(Object(r.a)({},e),{},{you:""})}))},children:"<"}),Object(o.jsx)("p",{className:"contactName",children:c.you})]})]}),Object(o.jsx)("div",{className:"messages",children:i.map((function(e,t){var s=i.length-1-t,n=i[s].id;if(i[s].recipientemail.toUpperCase()===c.you&&i[s].senderemail.toUpperCase()===a.email||i[s].senderemail.toUpperCase()===c.you&&i[s].recipientemail.toUpperCase()===a.email)return g=i[s].senderemail.toUpperCase()===a.email.toUpperCase()?"sender":"recipient",p=i[s].senderemail.toUpperCase()===a.email.toUpperCase()?"senderbackground":"",Object(o.jsx)("div",{className:g,children:Object(o.jsx)(x,{email:i[s].senderemail,text:i[s].message,time:i[s].time,i:t,deleteMail:k,currentId:n,background:p})})}))})]}):Object(o.jsxs)("div",{className:"nocontactContainer",children:[Object(o.jsx)("p",{className:"contactName",children:"Select a contact to message"}),Object(o.jsx)("ul",{className:"contactScroll",children:a.friends.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(N,{converse:d,friend:e,route:j})})}))})]})})}),C=function(e){var t=e.friend,s=e.rejectFriend,n=e.acceptFriend,i=e.pendOrReq;return Object(o.jsx)("div",{className:"radioButton",children:Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",name:"friend",id:t}),Object(o.jsx)("label",{htmlFor:t,children:t}),Object(o.jsx)("button",{className:"friendButton",onClick:function(){return n(t)},children:"Accept"}),Object(o.jsx)("button",{className:"friendButton",onClick:function(){return s(t,i)},children:"X"})]})})},S=function(e){var t=e.friend,s=e.rejectFriend,n=e.pendOrReq;return Object(o.jsx)("div",{className:"radioButton",children:Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",name:"friend",id:t}),Object(o.jsx)("label",{htmlFor:t,children:t}),Object(o.jsx)("button",{className:"friendButton",onClick:function(){return s(t,n)},children:"X"})]})})},y=function(e){var t=e.user,s=e.addFriend,i=e.converse,a=Object(n.useState)(Object(h.a)(new Set(null===t||void 0===t?void 0:t.requests))),c=Object(l.a)(a,2),r=c[0],u=c[1],d=Object(n.useState)(Object(h.a)(new Set(null===t||void 0===t?void 0:t.pendingrequests))),m=Object(l.a)(d,2),j=m[0],b=m[1];Object(n.useEffect)((function(){u(Object(h.a)(new Set(t.requests))),b(Object(h.a)(new Set(t.pendingrequests)))}),[t]);var f=function(e){fetch("https://socially-distanced-server.herokuapp.com/unfriend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e.toUpperCase()})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},O=function(e){fetch("https://socially-distanced-server.herokuapp.com/acceptfriend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},g=function(e,s){"Request"===s?fetch("https://socially-distanced-server.herokuapp.com/reject",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e,option:"request"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)})):fetch("https://socially-distanced-server.herokuapp.com/reject",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,friend:t.email,option:"pending"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},p=t.friends;return Object(o.jsx)("div",{className:"maincomment",children:Object(o.jsx)("div",{className:"commentsection",children:Object(o.jsx)("div",{className:"",children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"",children:[Object(o.jsxs)("div",{children:[p?Object(o.jsx)("div",{children:Object(o.jsx)("ul",{className:"scroll",children:p.map((function(e){return Object(o.jsx)(N,{converse:i,friend:e,unFriend:f})}))})}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("button",{className:"addFriend",onClick:function(){return s("No Names")},children:"Add Friend"})]}),r&&r[0]?Object(o.jsxs)("div",{className:"scroll",children:[Object(o.jsx)("div",{className:"friendtitlebox",children:Object(o.jsx)("p",{className:"requesttitle",children:"Request"})}),Object(o.jsx)("ul",{className:"scroll",children:r.map((function(e){return Object(o.jsx)(C,{friend:e,rejectFriend:g,pendOrReq:"Request",acceptFriend:O})}))})]}):Object(o.jsx)(o.Fragment,{}),j&&j[0]?Object(o.jsxs)("div",{className:"scroll",children:[Object(o.jsx)("div",{className:"friendtitlebox",children:Object(o.jsx)("p",{className:"pendingtitle",children:"Pending Request"})}),Object(o.jsx)("ul",{className:"scroll",children:j.map((function(e){return Object(o.jsx)(S,{friend:e,rejectFriend:g,pendOrReq:"Pending"})}))})]}):Object(o.jsx)(o.Fragment,{})]})})})})})};s(82);var M=function(){var e=Object(n.useState)({name:"",email:"",friends:[],request:[],pendingrequests:[]}),t=Object(l.a)(e,2),s=t[0],i=t[1],a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],d=c[1],b=Object(n.useState)("Sign In"),h=Object(l.a)(b,2),O=h[0],g=h[1],p=Object(n.useState)(!1),x=Object(l.a)(p,2),N=x[0],C=x[1],S=Object(n.useState)(""),M=Object(l.a)(S,2),F=M[0],P=M[1],U=Object(n.useState)([]),q=Object(l.a)(U,2),w=q[0],B=q[1],E=Object(n.useState)({id:"",name:"",email:"",message:"",time:"",likes:[]}),I=Object(l.a)(E,2),R=I[0],J=I[1],T=Object(n.useState)([]),L=Object(l.a)(T,2),A=L[0],D=L[1],H=Object(n.useState)({id:"",name:"",email:"",message:"",time:"",likes:[]}),X=Object(l.a)(H,2),Y=X[0],Z=X[1],_=Object(n.useState)([]),K=Object(l.a)(_,2),W=K[0],z=K[1],G=Object(n.useState)({id:"",name:"",senderemail:"",recipientemail:"",message:"",time:""}),Q=Object(l.a)(G,2),V=Q[0],$=Q[1],ee=Object(n.useState)({me:"",you:""}),te=Object(l.a)(ee,2),se=te[0],ne=te[1],ie=Object(n.useState)({}),ae=Object(l.a)(ie,2),ce=ae[0],re=ae[1],le=Object(n.useState)(!0),oe=Object(l.a)(le,2),ue=oe[0],de=oe[1],me=s.email;Object(n.useEffect)((function(){m.on("friendrequest",(function(e){return e[0].email===me&&i(e[0]),function(){m.off("friendrequest")}}))}),[me]),Object(n.useEffect)((function(){return m.on("unfriend",(function(e){e[0].email===me&&i(e[0])})),function(){m.off("unfriend")}}),[me]),Object(n.useEffect)((function(){return m.on("reject",(function(e){e[0].email===me&&i(e[0])})),function(){m.off("reject")}}),[me]),Object(n.useEffect)((function(){return m.on("acceptfriend",(function(e){e[0].email===me&&i(e[0])})),function(){m.off("acceptfriend")}}),[me]),m.on("privatemessage",(function(e){z(e)})),m.on("publicmessage",(function(e){D(e)})),m.on("friendmessage",(function(e){B(e)})),m.on("publiclikes",(function(e){D(e)})),m.on("friendlikes",(function(e){B(e)})),m.on("publicdislike",(function(e){D(e)})),m.on("frienddislike",(function(e){B(e)})),m.on("publicdeletemessage",(function(e){D(e)})),m.on("frienddeletemessage",(function(e){B(e)})),m.on("deletemail",(function(e){z(e)})),Object(n.useEffect)((function(){s.friends&&re((function(){return w.filter((function(e){return e.email===s.email||s.friends.includes(e.email)}))}))}),[]);var je=function(e){"home"===e||"mail"===e||"friends"===e||"friend"===e?C(!0):(g("Sign In"),C(!1),i({name:"",email:"",friends:[],requests:[],pendingrequests:[]}),J({id:"",name:"",email:"",message:"",time:"",likes:[]}),$({id:"",name:"",senderemail:"",recipientemail:"",message:"",time:""}),ne({me:"",you:""}),de(!0),P(""),d("")),g(e)},be=function(e,t,s){fetch("https://socially-distanced-server.herokuapp.com/".concat(e),{method:"post",headers:{"Content-Type":"application/json"},body:t}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))},fe=function(e,t,s){t?m.emit("deletemessage",{id:s,database:"publicmessages"}):m.emit("deletemessage",{id:s,database:"friendmessage"})},he=function(e){"No Names"===e&&(e=prompt("Enter the email address of your friend ")),e&&(s.friends&&s.friends.includes(e)&&s.pendingrequests.includes(e)&&s.request.includes(e)||fetch("https://socially-distanced-server.herokuapp.com/friendrequest",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,newFriend:e.toUpperCase()})}).then((function(e){return e.json()})).then((function(t){alert("Friend request sent to ".concat(e.toUpperCase(),"."))})).catch((function(e){return console.log(e)})))},Oe=function(e){ne((function(t){return Object(r.a)(Object(r.a)({},t),{},{you:e})})),$((function(t){return Object(r.a)(Object(r.a)({},t),{},{recipientEmail:e})})),g("mail")};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{onRouteChange:je,isSignedIn:N,route:O,user:s,changePublicStatus:function(e,t){de(t),je(e)}}),N?"home"===O||"friend"===O?Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(v,{user:s,loadData:be,route:O,deletePost:fe,currentMessage:R,setCurrentMessage:J,pastMessages:w,setPastMessages:B,currentPublicMessage:Y,setCurrentPublicMessage:Z,pastPublicMessages:A,setPastPublicMessages:D,addFriend:he,conversation:se,setFilteredMessages:re,filteredMessages:ce,publicStatus:ue,setPublicStatus:de})})}):"mail"===O?Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(k,{user:s,privateMessage:V,setPrivateMessage:$,privateMessages:W,setPrivateMessages:z,deletePost:fe,conversation:se,loadData:be,setConversation:ne,converse:Oe,route:O})})}):Object(o.jsx)(y,{user:s,addFriend:he,converse:Oe}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{user:s,route:O,errorMessage:F,setUser:i,setRoute:g,setErrorMessage:P,setIsSignedIn:C,onRouteChange:je,setCurrentMessage:J,pastMessages:w,setPrivateMessages:z,setPastMessages:B,setCurrentPublicMessage:Z,setPastPublicMessages:D,setConversation:ne,setFilteredMessages:re,loadData:be,password:u,setPassword:d})})]})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),F()}},[[83,1,2]]]);
//# sourceMappingURL=main.509fdf11.chunk.js.map