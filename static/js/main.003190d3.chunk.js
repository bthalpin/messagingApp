(this.webpackJsonpsociallydistanced=this.webpackJsonpsociallydistanced||[]).push([[0],[,,,,,function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(13),i=s.n(c),r=(s(18),s(5),s(6)),l=s(1),o=s(4),u=s(3),j=(s(10),s(0)),d=function(e){var t=e.inputType,s=e.onChanges,a=e.value;return Object(j.jsxs)("div",{className:"inputBlock",children:[Object(j.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(j.jsx)("input",{className:"inputField",type:"text",name:t,id:t,value:a,onChange:s})]})},m=function(e){var t=e.user,s=e.route,a=e.errorMessage,n=e.setRoute,c=e.setUser,i=e.setErrorMessage,r=e.setIsSignedIn,o=e.onRouteChange,u=e.setCurrentMessage,m=e.pastMessages,b=e.setPrivateMessage,A=e.setCurrentPublicMessage,g=(e.setPrivatePublicMessage,e.setConversation),O=t.username,h=t.email,x=t.password,f=function(e){switch(e.target.id){case"Name":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{username:e.target.value})}));break;case"Email":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}));break;case"Password":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}));break;default:console.log(e.target.value)}};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("article",{className:"formWindow",children:Object(j.jsxs)("div",{className:"formcontainer",children:["Register"===s?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"legend",children:"Register"}),Object(j.jsx)(d,{inputType:"Name",value:O,onChanges:f}),Object(j.jsx)(d,{inputType:"Email",value:h,onChanges:f}),Object(j.jsx)(d,{inputType:"Password",value:x,onChanges:f})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"legend",children:"Sign In"}),Object(j.jsx)(d,{inputType:"Email",value:h,onChanges:f}),Object(j.jsx)(d,{inputType:"Password",value:x,onChanges:f})]}),Object(j.jsx)("div",{className:"legend",children:Object(j.jsx)("button",{type:"submit",className:"button",onClick:function(){"Sign In"===s?(n("home"),r(!0),console.log(t),u((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:h})})),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{senderEmail:h})})),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:h})})),g((function(e){return Object(l.a)(Object(l.a)({},e),{},{me:t.email})}))):(/\S+@\S+\.\S+/.test(h)&&x.length>=8&&(n("home"),r(!0),u((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:O})})),u((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:h})})),console.log(m)),x.length<8?i("Password must be 8 characters long"):i("Enter a valid email address"))},children:"Submit"})}),Object(j.jsx)("div",{className:"legend",children:"Sign In"===s?Object(j.jsx)("p",{onClick:function(){return o("Register")},className:"loginLink",children:"Register"}):Object(j.jsx)("p",{onClick:function(){return o("Sign In")},className:"loginLink",children:"Sign In"})})]})})}),Object(j.jsx)("div",{children:a})]})},b=(s(20),s.p+"static/media/home.2ea0f12c.png"),A=(s(11),function(e){var t=e.friend,s=e.converse;e.route;return console.log(t),Object(j.jsx)("div",{className:"radioButton",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(j.jsx)("label",{for:t,children:t})]})})}),g=s.p+"static/media/friend.f4b364da.png",O=function(e){var t=e.user,s=(e.setUser,e.setPrivateMessage),n=e.route,c=e.setRoute,i=e.setConversation,r=e.addFriend,o=Object(a.useState)(!1),d=Object(u.a)(o,2),m=d[0],b=d[1],O=function(e){h(),i((function(t){return Object(l.a)(Object(l.a)({},t),{},{you:e})})),s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})})),c("mail"),console.log("add")},h=function(){b(!m)},x=t.friends;return Object(j.jsxs)("div",{className:"fixed",children:[console.log(x,"friendlsist",t),m?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("button",{className:"showFriend",onClick:h,children:Object(j.jsx)("img",{className:"friendimg",src:g,alt:"Friends",width:"35rem;"})})}),Object(j.jsxs)("div",{className:"friendList",children:[Object(j.jsx)("div",{className:"mainfriend",children:Object(j.jsxs)("div",{children:[console.log(n,"route"),Object(j.jsx)("div",{className:"friendtitlebox",children:Object(j.jsx)("p",{className:"friendtitle",children:"home"===n?"Friends List":"Contacts"})}),Object(j.jsx)("div",{className:"scroll",children:Object(j.jsxs)("ul",{children:[console.log(x),x.map((function(e){return Object(j.jsx)(A,{converse:O,friend:e,route:n})}))]})}),Object(j.jsx)("button",{className:"addFriend",onClick:function(){return r("No Names")},children:"Add Friend"})]})}),Object(j.jsx)("button",{className:"hideFriend",onClick:h,children:"x"})]})]}):Object(j.jsx)("div",{className:"",children:Object(j.jsx)("button",{className:"showFriend",onClick:h,children:Object(j.jsx)("img",{className:"friendimg",src:g,alt:"Friends",width:"35rem;"})})})]})},h=function(e){var t=e.onRouteChange,s=e.isSignedIn,a=e.route,n=e.user,c=e.setUser,i=e.setRoute,r=e.setPrivateMessage,l=e.setConversation,o=e.conversation,u=e.addFriend;return s?Object(j.jsxs)("div",{className:"navroot",children:["home"===a?Object(j.jsxs)("div",{className:"navLeft",children:[Object(j.jsx)("p",{className:"navhomemail",onClick:function(){return t("mail")},children:Object(j.jsx)("img",{className:"homemail",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWgSURBVHhe7dyLalRZFARQI0Rw/v9bFRIw45XecEYnkk7u4+xTa4HYio829q6qgPYnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj18PT049vtMRDm4eWn22MgzOfb10AgAQDBBAAEEwAQTABAMAEAwQQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQTABAsGnfEej5+eX77SG09/j48PX2cCpTvyVYhcCXL5//+fUd0Ei93+asx79p8Z6AWxAIATrZjn/mwy9t3hTUGqCDDq0/aveuwNYAs+rS+qN2AbCxBphJt9YftQyAYg1wtY6tP2odABtrgCt0bv3RLgFQR3jlB8Ma4CxXt/6e97bbvwTcjq+e2BW2D8b2F1PJDHur19dKRbfrPwWuELgqCLa/mAqC23fBLurwrzr+uqu9V+5unwL8/sRmSMrt670/YGSpMrn6tXzUfR32n4GsAbpbtfVHhy2AkTVAJ7O2/mj6BTCyBugiofVHpyyAkTXAjDq0/qjVAhhZA8wmrfVHpy+AkTXAlbq1/qjtAhhZA1wlufVHly6AkTXAGTq3/miJBTCyBjia1v/TNAtgZA2wp1Vaf7TcAhhZA+xF6//dlAtgZA3wHiu2/mjpBTCyBriX1n+76RfAyBrgb1Zv/VHMAhhZA7xG679PqwUwsgbYJLX+KHIBjKwBtP7HtV0AI2sgS2rrj+IXwMgayKH197XEAhhZA2vS+v9lAbzCGliP1j/OcgtgZA30pvVfZwG8gTXQl9Y/x9ILYGQN9KD138YCuJM1MD+tf76YBTCyBuai9e9nAXyANTAPrX+tyAUwsgauofU/xgLYiTVwPq0/j/gFMLIGjqX192MBHMAaOI7Wn5MF8AprYB9a/xgWwMGsgY/T+vOzAN7AGriP1j+eBXAia+DttH4vFsCdrIH/p/XPZQFcxBr4k9bvywL4gPQ1oPWvYwFMIHkNaP01WAA7SVkDWn8OFsBkEtaA1l+PBXCA1daA1p+PBTCxldaA1l+bBXCwrmtA68/NAmii4xrQ+jksgBPNvga0fh8WQEMzrwGtn8kCuMgsa6Bc/Vy8fu6z1+tHAFyomvjK47tShZDXzv32CgCfAlxoe+FvX35v4wRVGo7/WgJgAhUCCUFQf06HPwcBMIlqw5VDoA7f8c9DAEymQmClIKg/j8OfjwCYULXkCiFQh+/45yQAJlYh0DEI6nk7/LkJgMlVe3YKgTp8xz8/AdBEhcDMQVDPz+H3IQAaqVadMQTq8B1/LwKgoQqBGYKgnofD70kANFVte2UI1OE7/r4EQHMVAmcGQf1+Dr8/AbCAauEzQqAO3/GvQQAspELgiCCoX9fhr0UALKbaec8QqMN3/OsRAIuqEPhIENTPd/jrEgALq9Z+TwjU4Tv+tQmAABUCbwmC+nEOP4MACFFt/rcQqMN3/DkEQJgKgTEI6tsOP48ACFQtPx6+488kAII5fAQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQTABAMAEAwQQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQTABAMAEAwQQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQTABAMAEAwQQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQTABAMAEAwQQABBMAEEwAQDABAMEEAAQTABBMAEAwAQDBBAAEEwAQ7OHlp9vjd3t+fvl+ewic5PHx4evt4bvtEgBATz4FgGACAIIJAAgmACCYAIBgAgCCCQAIJgAgmACAYAIAggkACCYAIJgAgGACAIIJAAgmACCYAIBgD09PP77dHgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIRPn/4FHDm9+3I50cEAAAAASUVORK5CYII=",alt:"Mail",width:"30rem"})}),Object(j.jsx)(O,{user:n,setUser:c,route:a,setRoute:i,setPrivateMessage:r,setConversation:l,addFriend:u})]}):Object(j.jsxs)("div",{className:"navLeft",children:[Object(j.jsx)("p",{className:"navhomemail",onClick:function(){return t("home")},children:Object(j.jsx)("img",{className:"homemail",src:b,alt:"Home",width:"30rem"})}),Object(j.jsx)(O,{user:n,setUser:c,route:a,setRoute:i,setPrivateMessage:r,setConversation:l,addFriend:u})]}),Object(j.jsx)("div",{className:"headcontainer",children:Object(j.jsx)("h1",{className:"title",children:"home"===a?"Message Board":o.you})}),Object(j.jsx)("nav",{className:"nav",children:Object(j.jsx)("p",{onClick:function(){return t("Sign In")},className:"navElement",children:"Sign Out"})})]}):Object(j.jsx)("div",{className:"navroot",children:Object(j.jsx)("div",{className:"headcontainer",children:Object(j.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})})})},x=(s(12),s(21),function(e){return console.log(e),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"picture",alt:"picture",src:e.source})})}),f=s.p+"static/media/like.1fe2cbbc.png",p=s.p+"static/media/liked.82a0b8ca.png",v=function(e){var t=e.route,s=e.text,a=e.username,n=e.time,c=e.i,i=e.deletePost,r=e.deleteMail,l=(e.reply,e.addLike),o=e.count,u=e.currentUser,d=e.filteredMessages,m=e.background,b=e.publicStatus,A=(e.pastPublicMessages,e.addFriend);return Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("div",{className:"smallbox",children:[Object(j.jsx)("div",{className:"messageArea "+m,children:Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("div",{className:"textmessage",children:s.includes("#img#")?Object(j.jsx)(x,{source:s.substr(5,s.length-1)}):s})})}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"user "+m,children:[Object(j.jsx)("p",{onClick:function(){return A(a)},children:a}),Object(j.jsx)("p",{className:"date",children:n.substr(0,24)})]}),Object(j.jsxs)("div",{className:"likes ",children:["home"===t?Object(j.jsx)("button",{className:"likeButton",onClick:function(){return l(c)},children:o.includes(u)?Object(j.jsx)("img",{src:p,alt:"Unlike",width:"20rem"}):Object(j.jsx)("img",{src:f,alt:"like",width:"20rem"})}):Object(j.jsx)(j.Fragment,{}),Object(j.jsxs)("div",{className:"likedelete",children:["home"===t?Object(j.jsx)("div",{className:"liketext",children:o.length>4?"".concat(o.length," Likes"):o.length>1?o.length>2?o.join(", ")+" like this post":o.join(" and ")+" like this post":o.length?o+" likes this post":""}):Object(j.jsx)(j.Fragment,{}),Object(j.jsx)("div",{className:"deleteContainer",children:"home"===t?Object(j.jsx)("div",{children:d[c].email===u?Object(j.jsx)("div",{className:"deleteBackground",children:Object(j.jsx)("button",{className:"deleteButton",id:c,onClick:function(){return i(c,b)},children:"x"})}):Object(j.jsx)(j.Fragment,{})}):Object(j.jsx)("div",{className:"deleteBackground",children:Object(j.jsx)("button",{className:"deleteButton",id:c,onClick:r,children:"X"})})})]})]})]})})},C=function(e){var t=e.user,s=e.currentMessage,n=e.pastMessages,c=e.setPastMessages,i=e.setCurrentMessage,r=e.currentPublicMessage,d=e.pastPublicMessages,m=e.setPastPublicMessages,b=e.setCurrentPublicMessage,A=e.deletePost,g=e.route,O=e.addFriend,h=e.conversation,x=Object(a.useState)(n.filter((function(e){return t.friends.includes(e.email)||t.email===e.email}))),f=Object(u.a)(x,2),p=f[0],C=f[1],N=Object(a.useState)(!0),M=Object(u.a)(N,2),B=M[0],E=M[1],w=Object(a.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),k=Object(u.a)(w,2),P=k[0],Q=k[1],I="",S="";Object(a.useEffect)((function(){""!==s.message&&(c([].concat(Object(o.a)(n),[s])),i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[s.time]),Object(a.useEffect)((function(){""!==r.message&&(m([].concat(Object(o.a)(d),[r])),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[r.time]),Object(a.useEffect)((function(){C((function(){return n.filter((function(e){return t.friends.indexOf(e.email.toUpperCase())>-1||t.email===e.email}))}))}),[t.friends,n]),console.log("filtered",p,n,"user",t.email);var F=function(e){!e||""===r.message&&""===s.message||(B?b((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+r.message})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+s.message})}))),console.log(r,"public"),B?b((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})),Q({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"})},y=function(e){B?b((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})})):i((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},T=function(e){if(B){var s=Object(o.a)(d);if(s[e].count.includes(t.email)){var a=s[e].count.filter((function(e){return e!==t.email}));s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:a}),m(s)}else{var n=[].concat(Object(o.a)(s[e].count),[t.email]);s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:n}),console.log(n),m(s)}}else{var i=Object(o.a)(p);if(i[e].count.includes(t.email)){var r=i[e].count.filter((function(e){return e!==t.email}));i[e]=Object(l.a)(Object(l.a)({},i[e]),{},{count:r}),c(i)}else{var u=[].concat(Object(o.a)(i[e].count),[t.email]);i[e]=Object(l.a)(Object(l.a)({},i[e]),{},{count:u}),console.log(u),c(i)}}},U=function(){E(!B)},D=function(e){Q(e?{picture:"",message:"textareahide",button:"textareahide",submit:"",position:" right"}:{picture:"textareahide",message:"",button:"textareahide",submit:"",position:" right"})},L=function(){Q({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),B?b((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})}))};return Object(j.jsx)("div",{className:"maincomment",children:B?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"inputbox",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:"pic",className:"textareapic public "+P.picture,cols:"40",rows:"6",onChange:y,placeholder:"Enter Picture URL",value:r.message,autoFocus:!0}),Object(j.jsx)("textarea",{id:"msg",className:"textarea public "+P.message,onChange:y,value:r.message,autoFocus:!0})]})}),Object(j.jsxs)("div",{className:"publicButton",children:[Object(j.jsx)("button",{className:"disabledButtons",children:"Public"}),Object(j.jsx)("button",{className:"publicButtons",onClick:U,children:"Friends"})]}),Object(j.jsxs)("div",{className:"commentsection",children:[Object(j.jsxs)("div",{className:"inputbox",children:[Object(j.jsx)("label",{className:"msg "+P.submit,onClick:function(){return F(""===P.picture)},children:"Submit"}),Object(j.jsx)("label",{className:"msg "+P.submit,onClick:L,children:"Back"}),Object(j.jsx)("label",{for:"msg",className:"msg "+P.button,onClick:function(){return D(!1)},children:"Message"}),Object(j.jsx)("label",{for:"pic",className:"msg "+P.button,onClick:function(){return D(!0)},children:"Picture"})]}),Object(j.jsx)("div",{className:"bigbox",children:d.map((function(e,s){var a=d.length-1-s;return console.log("username",d[a]),Object(j.jsx)("div",{children:Object(j.jsx)(v,{filteredMessages:d,currentUser:t.email,username:d[a].email,text:d[a].message,time:d[a].time,i:a,deletePost:A,route:g,addLike:T,count:d[a].count,publicStatus:B,addFriend:O})})}))})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"inputbox",children:[Object(j.jsx)("input",{id:"friendpic",className:"textareapic friend "+P.picture,onChange:y,placeholder:"Enter Picture URL",value:s.message}),Object(j.jsx)("textarea",{id:"friendmsg",className:"textarea friend "+P.message,onChange:y,value:s.message})]}),Object(j.jsxs)("div",{className:"publicButton",children:[Object(j.jsx)("button",{className:"publicButtons",onClick:U,children:"Public"}),Object(j.jsx)("button",{className:"disabledButtons",children:"Friends"})]}),Object(j.jsxs)("div",{className:"commentsection",children:[Object(j.jsxs)("div",{className:"inputbox",children:[Object(j.jsx)("label",{for:"friendmsg",className:"msg "+P.button,onClick:function(){return D(!1)},children:"Message"}),Object(j.jsx)("label",{for:"friendpic",className:"msg "+P.button,onClick:function(){return D(!0)},children:"Picture"}),Object(j.jsx)("label",{className:"msg "+P.submit,onClick:function(){return F(""===P.picture)},children:"Submit"}),Object(j.jsx)("label",{className:"msg "+P.submit,onClick:L,children:"Back"})]}),Object(j.jsxs)("div",{className:"bigbox",children:[console.log("friend change",p,h.me),p.map((function(e,s){var a=p.length-1-s;if(p[a].email.toUpperCase()===h.you||p[a].email===h.me)return I=p[a].email.toUpperCase()===h.me.toUpperCase()?"sender":"recipient",S=p[a].email.toUpperCase()===h.me.toUpperCase()?"senderbackground":"",Object(j.jsx)("div",{className:I,children:Object(j.jsx)(v,{filteredMessages:p,currentUser:t.email,username:p[a].email,text:p[a].message,time:p[a].time,i:a,deletePost:A,route:g,addLike:T,count:p[a].count,publicStatus:B,addFriend:O,background:S})})}))]})]})]})})},N=(s(22),function(e){var t=e.privateMessage,s=e.setPrivateMessage,n=e.privateMessages,c=e.setPrivateMessages,i=(e.user,e.deletePost,e.conversation),r=Object(a.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),d=Object(u.a)(r,2),m=d[0],b=d[1],A="",g="";Object(a.useEffect)((function(){""!==t.message&&(c((function(e){return[].concat(Object(o.a)(e),[t])})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:"",message:"",time:""})})))}),[t.time]);var O=function(e){s((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},h=function(e){var t=n.length-1-e.target.id;c(n.filter((function(e){return e!==n[t]})))},x=function(e){console.log("reply",e),s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})}))},f=function(e){b(e?{picture:"",message:"textareahide",button:"textareahide",submit:""}:{picture:"textareahide",message:"",button:"textareahide",submit:""})};return Object(j.jsxs)("div",{className:"mailbox",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:"picture",className:"mailtextarea "+m.picture,cols:"40",rows:"6",onChange:O,placeholder:"Enter Picture URL",value:t.message}),Object(j.jsx)("textarea",{id:"mail",className:"mailtextarea "+m.message,cols:"40",rows:"6",onChange:O,value:t.message}),Object(j.jsx)("label",{for:"mail",className:"buttons "+m.button,onClick:function(){return f(!1)},children:"Message"}),Object(j.jsx)("label",{for:"picture",className:"buttons "+m.button,onClick:function(){return f(!0)},children:"Picture"}),Object(j.jsx)("label",{className:"buttons "+m.submit,onClick:function(){return""===m.picture&&""!==t.message&&s((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+t.message})})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})),console.log(n,"private"),void b({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})},children:"Submit"}),Object(j.jsx)("label",{className:"buttons "+m.submit,onClick:function(){b({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})}))},children:"Back"})]}),Object(j.jsx)("div",{className:"messages",children:n.map((function(e,t){var s=n.length-1-t;if(console.log(i,n[s],"time"),n[s].recipientEmail.toUpperCase()===i.you&&n[s].senderEmail===i.me||n[s].recipientEmail===i.me.toUpperCase()&&n[s].senderEmail.toUpperCase()===i.you)return A=n[s].senderEmail.toUpperCase()===i.me.toUpperCase()?"sender":"recipient",g=n[s].senderEmail.toUpperCase()===i.me.toUpperCase()?"senderbackground":"",console.log(n[s].senderEmail.toUpperCase()===i.me.toUpperCase()),Object(j.jsx)("div",{className:A,children:Object(j.jsx)(v,{username:n[s].senderEmail,text:n[s].message,time:n[s].time,i:t,deleteMail:h,reply:x,background:g})})}))})]})});s(23);var M=function(){var e,t=Object(a.useState)({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),s=Object(u.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)("Sign In"),d=Object(u.a)(i,2),b=d[0],A=d[1],g=Object(a.useState)(!1),O=Object(u.a)(g,2),x=O[0],f=O[1],p=Object(a.useState)(""),v=Object(u.a)(p,2),M=v[0],B=v[1],E=Object(a.useState)([]),w=Object(u.a)(E,2),k=w[0],P=w[1],Q=Object(a.useState)({username:"",email:"",message:"",time:"",count:[]}),I=Object(u.a)(Q,2),S=I[0],F=I[1],y=Object(a.useState)([]),T=Object(u.a)(y,2),U=T[0],D=T[1],L=Object(a.useState)({username:"",email:"",message:"",time:"",count:[]}),R=Object(u.a)(L,2),Y=R[0],q=R[1],X=Object(a.useState)([]),H=Object(u.a)(X,2),V=H[0],G=H[1],J=Object(a.useState)({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),Z=Object(u.a)(J,2),K=Z[0],W=Z[1],z=Object(a.useState)({me:"",you:""}),$=Object(u.a)(z,2),_=$[0],ee=$[1],te=function(e){"home"===e||"mail"===e?f(!0):(console.log(n),A("Sign In"),f(!1),c({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),B(""),F({username:"",email:"",message:"",time:"",count:[]}),W({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),ee({me:"",you:""})),A(e)},se=function(e,t){t?U[e].email===n.email?D(U.filter((function(t){return t!==U[e]}))):alert("You can only delete your own messages"):k[e].email===n.email?P(k.filter((function(t){return t!==k[e]}))):alert("You can only delete your own messages")},ae=function(e){if("No Names"===e&&(e=prompt("Enter the email address of your friend ")),e){var t=[].concat(Object(o.a)(n.friends),[e.toUpperCase()]);c((function(e){return Object(l.a)(Object(l.a)({},e),{},{friends:t})})),alert("Added ".concat(e," to your friends list"))}};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,(e={onRouteChange:te,isSignedIn:x,route:b,user:n,setUser:c},Object(r.a)(e,"route",b),Object(r.a)(e,"setRoute",A),Object(r.a)(e,"setPrivateMessage",W),Object(r.a)(e,"setConversation",ee),Object(r.a)(e,"conversation",_),Object(r.a)(e,"addFriend",ae),e)),x?"home"===b?Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("div",{className:"mainMessage",children:Object(j.jsx)(C,{user:n,route:b,deletePost:se,currentMessage:S,setCurrentMessage:F,pastMessages:k,setPastMessages:P,currentPublicMessage:Y,setCurrentPublicMessage:q,pastPublicMessages:U,setPastPublicMessages:D,addFriend:ae,conversation:_})})}):Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("div",{className:"mainMessage",children:Object(j.jsx)(N,{user:n,privateMessage:K,setPrivateMessage:W,privateMessages:V,setPrivateMessages:G,deletePost:se,conversation:_})}),console.log(V,K)]}):Object(j.jsxs)(j.Fragment,{children:[console.log(V,K),Object(j.jsx)(m,{user:n,route:b,errorMessage:M,setUser:c,setRoute:A,setErrorMessage:B,setIsSignedIn:f,onRouteChange:te,setCurrentMessage:F,pastMessages:k,setPrivateMessage:W,setCurrentPublicMessage:q,setConversation:ee})]})]})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),B()}],[[24,1,2]]]);
//# sourceMappingURL=main.003190d3.chunk.js.map