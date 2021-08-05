import React, { useState, useEffect } from 'react';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import Messages from './component/Messages/Messages';
import Mail from './component/Mail/Mail';
import Friends from './component/Friends/Friends';
import socket from './socket'
import './App.css';

// import './colors.css';
import './colors2.css';
// import './colors3.css';
import Picture from './component/Messages/Picture';

// https://socially-distanced-server.herokuapp.com/


function App() {
  const [user,setUser] = useState({name:'',email:'',friends:[],request:[],pendingrequests:[]})
  const [password,setPassword] = useState('')
  const [route,setRoute] = useState('Sign In')
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const [pastMessages,setPastMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState({id:'',name:'',email:'',message:'',time:'',likes:[]})
  const [pastPublicMessages,setPastPublicMessages] = useState([])
  const [currentPublicMessage, setCurrentPublicMessage] = useState({id:'',name:'',email:'',message:'',time:'',likes:[]})
  const [privateMessages,setPrivateMessages] = useState([])
  const [privateMessage, setPrivateMessage] = useState({id:'',name:'',senderemail:'',recipientemail:'',message:'',time:''})
  const [conversation,setConversation] = useState({me:'',you:''})
  const [filteredMessages,setFilteredMessages] = useState({})
  const [publicStatus,setPublicStatus] = useState(true);
  const myEmail = user.email
  useEffect(()=>{
    socket.on('friendrequest',data=>{
      // console.log(data[0],user.email)
      if (data[0].email===myEmail){
        setUser(data[0])
        console.log('request',user)
      }
      return ()=>{

        socket.off('friendrequest')
      }
    })
  },[myEmail])

  useEffect(()=>{
    socket.on('unfriend',data=>{
      // fetch('https://socially-distanced-server.herokuapp.com/update',{
      //           method:'post',
      //           headers:{'Content-Type':'application/json'},
      //           body:JSON.stringify({
      //             email:user.email
      //           })
      //         })
      //       .then(res=>res.json())
      //       .then(res=>{
      //           if (res.email===user.email){
      //             setUser(res)}})
      //             .catch(err=>console.log(err))
      // console.log(data,user)
      if (data[0].email===myEmail){
        setUser(data[0])
      }
      // socket.emit('update',{email:user.email})
    })
    return ()=>{
      socket.off('unfriend')
    }
  },[myEmail])
  
  useEffect(()=>{
    socket.on('reject',data=>{
      console.log(data[0],user)
      if (data[0].email===myEmail){
        console.log('setting user',data[0])
        setUser(data[0])
      }
    })
    return ()=>{
      socket.off('reject')
    }
  },[myEmail])

  useEffect(()=>{
    socket.on('acceptfriend',data=>{
      console.log('accept',data,user)
      if (data[0].email===myEmail){
        setUser(data[0])
      }})
      return ()=>{
        socket.off('acceptfriend')
      }
  },[myEmail])


  socket.on('privatemessage',(data)=>{
    setPrivateMessages(data)
  })
  socket.on('publicmessage',(data)=>{
    setPastPublicMessages(data)
})
socket.on('friendmessage',(data)=>{
  // console.log('here',data)
  setPastMessages(data)
})
socket.on('publiclikes',data=>{
    setPastPublicMessages(data)
})
socket.on('friendlikes',data=>{
  setPastMessages(data)
})
// socket.on('friends',data=>{
//     friends.addFriends(data,db,io)
// })
socket.on('publicdislike',data=>{
    setPastPublicMessages(data)
})
socket.on('frienddislike',data=>{
  setPastMessages(data)
})
socket.on('publicdeletemessage',data=>{
    setPastPublicMessages(data)
})
socket.on('frienddeletemessage',data=>{
    setPastMessages(data)
})
socket.on('deletemail',data=>{
    setPrivateMessages(data)
})

  // fetch('https://socially-distanced-server.herokuapp.com/update',{
  //           method:'post',
  //           headers:{'Content-Type':'application/json'},
  //           body:JSON.stringify({
  //             email:user.email
  //           })
  //         })
  //       .then(res=>res.json())
  //       .then(res=>{
  //           if (res.email===user.email){
  //             setUser(res)
              // socket.emit('update',{email:user.email})
              // .catch(err=>console.log(err))



  // fetch('https://socially-distanced-server.herokuapp.com/update',{
  //           method:'post',
  //           headers:{'Content-Type':'application/json'},
  //           body:JSON.stringify({
  //             email:user.email
  //           })
  //         })
  //       .then(res=>res.json())
  //       .then(res=>{
  //           if (res.email===user.email){
  //             setUser(res)}})
  //             .catch(err=>console.log(err))
    // reject.rejectFriend(data,db,io)


  // fetch('https://socially-distanced-server.herokuapp.com/update',{
  //           method:'post',
  //           headers:{'Content-Type':'application/json'},
  //           body:JSON.stringify({
  //             email:user.email
  //           })
  //         })
  //       .then(res=>res.json())
  //       .then(res=>{
  //           if (res.email===user.email){
  //             setUser(res)}})
  //             .catch(err=>console.log(err))
    // acceptfriend.addFriend(data,db,io)

// socket.on('update',data=>{
//   console.log(data)
//   if (data[0].email===user.email){
//     setUser(data)
//   }
  // data.map((current)=>{
  //   if (current.email===user.email){
  //     setUser(current)
  //   }
  // })
  // console.log('here')
  // setUser(data[0])
// })


  useEffect (()=>{
    if (user.friends){
      setFilteredMessages(()=>{
        return pastMessages.filter((message)=>message.email===user.email||user.friends.includes(message.email))})
    } 
  },[])
 
  const resetState = () => {
    // console.log(user)
    setRoute('Sign In')
    setIsSignedIn(false)
    setUser({name:'',email:'',friends:[],requests:[],pendingrequests:[]})
    setCurrentMessage({id:'',name:'',email:'',message:'',time:'',likes:[]})
    setPrivateMessage({id:'',name:'',senderemail:'',recipientemail:'',message:'',time:''})
    setConversation({me:'',you:''})
    setPublicStatus(true)
    setErrorMessage('')
    setPassword('')
  }

  const onRouteChange = (route) => {
    (route === 'home' || route ==='mail' || route ==='friends' || route==="friend" )?setIsSignedIn(true):resetState();
    setRoute(route)
  }
  

  const loadData = (location,info,infoUpdate) =>{
    fetch(`https://socially-distanced-server.herokuapp.com/${location}`,{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:info
          })
          .then(res=>res.json())
          .then(res=>{
              infoUpdate(res)})
          .catch(err=>console.log(err))
          // socket.emit(location,info)
  }


  const deletePost = (currentIndex,publicStatus,currentId) => {
    if (publicStatus){
      // fetch('https://socially-distanced-server.herokuapp.com/deletemessage',{
      //     method:'post',
      //     headers:{'Content-Type':'application/json'},
      //     body:JSON.stringify({
      //         id:currentId,
      //         database:'publicmessages'
      //         })
      //     })
      //     .then(res=>res.json())
      //     .then(res=>{
      //         // console.log('FROM DB',res)
      //         setPastPublicMessages(res)})
      //     .catch(err=>console.log(err))
      socket.emit('deletemessage',{
                id:currentId,
                database:'publicmessages'
                })
    }else{
      // fetch('https://socially-distanced-server.herokuapp.com/deletemessage',{
      //     method:'post',
      //     headers:{'Content-Type':'application/json'},
      //     body:JSON.stringify({
      //       id:currentId,
      //       database:'friendmessage'
      //         })
      //     })
      //     .then(res=>res.json())
      //     .then(res=>{
      //         // console.log('FROM DB',res)
      //         setPastMessages(res)})
      //     .catch(err=>console.log(err))
      //     }      
      socket.emit('deletemessage',{
        id:currentId,
        database:'friendmessage'
        })
  }}

  const addFriend = (newFriend) => {
    console.log('friend',user)
    if (newFriend==="No Names"){
      newFriend = prompt('Enter the email address of your friend ')
    }
    console.log(user.email)
    if (newFriend){
        if (!user.friends||!user.friends.includes(newFriend)||!user.pendingrequests.includes(newFriend)||!user.request.includes(newFriend)){
          fetch('https://socially-distanced-server.herokuapp.com/friendrequest',{
              method:'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  email:user.email,
                  newFriend:newFriend.toUpperCase()
                  })
              })
              .then(res=>res.json())
              .then(res=>{    
                
                alert(`Friend request sent to ${newFriend.toUpperCase()}.`)
                console.log(res)                
                  // if (res){
                  //   setUser((prevUser)=> {
                  //     return {...prevUser,pendingrequests:res.pendingrequests}})
                  
            }).catch(err=>console.log(err))
            // console.log(user)
            // socket.emit('friendrequest',{
            //   email:user.email,
            //   newFriend:newFriend.toUpperCase()
            //   })
          }
    }
   
  }

  
  const changePublicStatus = (route,publicState) => {
    // console.log(route,publicState)
    setPublicStatus(publicState)
    onRouteChange(route)
    
}

const converse = (friend) => {
  // toggleFriends()
  setConversation((prevConversation)=>{
      return {...prevConversation,you:friend}
  })
  setPrivateMessage((prevPrivateMessage)=>{
      return {...prevPrivateMessage,recipientEmail:friend}
  })
  setRoute('mail')
}
       
 

  return (
    <div className="App">      
        <Navigation 
            onRouteChange = {onRouteChange} 
            isSignedIn = {isSignedIn}
            route={route}
            user = {user} 
            setUser = {setUser} 
            route = {route} 
            setRoute = {setRoute} 
            setPrivateMessage = {setPrivateMessage} 
            setConversation = {setConversation}
            conversation = {conversation} 
            addFriend = {addFriend}
            publicStatus = {publicStatus}
            setPublicStatus = {setPublicStatus}
            changePublicStatus = {changePublicStatus}
            privateMessages = {privateMessages}
        />
    
        {isSignedIn
            ? (route==='home'||route==='friend'
                  ?<div className = "main">
                        <div className = "mainMessage">
                            <Messages 
                                user = {user} 
                                loadData = {loadData}
                                // setCurrentMessage = {setCurrentMessage} 
                                // setPastMessages = {setPastMessages} 
                                route = {route}
                                deletePost = {deletePost}
                                currentMessage = {currentMessage}
                                setCurrentMessage = {setCurrentMessage}
                                pastMessages = {pastMessages}
                                setPastMessages = {setPastMessages}
                                currentPublicMessage = {currentPublicMessage}
                                setCurrentPublicMessage = {setCurrentPublicMessage}
                                pastPublicMessages = {pastPublicMessages}
                                setPastPublicMessages = {setPastPublicMessages}
                                addFriend = {addFriend}
                                conversation = {conversation}
                                setFilteredMessages = {setFilteredMessages}
                                filteredMessages = {filteredMessages}
                                publicStatus = {publicStatus}
                                setPublicStatus = {setPublicStatus}
                              />
                        </div>
                  </div>
                  :route==='mail'?
                  <div className = "main">
                      <div className = "mainMessage">
                          <Mail 
                              user ={user} 
                              privateMessage = {privateMessage} 
                              setPrivateMessage = {setPrivateMessage} 
                              privateMessages = {privateMessages} 
                              setPrivateMessages = {setPrivateMessages} 
                              deletePost = {deletePost} 
                              conversation = {conversation}
                              loadData = {loadData} 
                              setConversation = {setConversation}
                              converse = {converse}
                              route = {route}
                            /> 
                      </div>
                  </div>
                  :
                  
                        <Friends 
                            user = {user} 
                            setUser = {setUser} 
                            route = {route} 
                            setRoute = {setRoute} 
                            setPrivateMessage = {setPrivateMessage} 
                            setConversation = {setConversation} 
                            addFriend = {addFriend}
                            onRouteChange = {onRouteChange} 
                            converse = {converse}
                            // display={display}
                            
                        />
                  )
        
            :(<>
                <Login 
                    user = {user}
                    route = {route} 
                    errorMessage = {errorMessage}
                    setUser = {setUser}
                    setRoute = {setRoute}
                    setErrorMessage = {setErrorMessage}
                    setIsSignedIn = {setIsSignedIn}
                    onRouteChange = {onRouteChange}            
                    setCurrentMessage = {setCurrentMessage}
                    pastMessages = {pastMessages}
                    setPrivateMessages = {setPrivateMessages}
                    setPastMessages = {setPastMessages}
                    setCurrentPublicMessage = {setCurrentPublicMessage}
                    setPastPublicMessages = {setPastPublicMessages}
                    setConversation = {setConversation}
                    setFilteredMessages = {setFilteredMessages}
                    loadData = {loadData}
                    password = {password}
                    setPassword = {setPassword}
                    
                  
                    />          
                </>
              )
        }
    
    </div>
  );
}

export default App;
