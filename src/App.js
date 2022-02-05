import React, { useState, useEffect } from 'react';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import Messages from './component/Messages/Messages';
import Mail from './component/Mail/Mail';
import Friends from './component/Friends/Friends';
import socket from './socket'
import './App.css';
import './colorScheme.css';

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
  const [unread,setUnread] = useState([])
  const [totalMessages,setTotalMessages] = useState(0)

    useEffect(()=>{
      setTotalMessages(unread.reduce((acc,message)=>{
   
        return acc+message.total-message.read
      },0))
      
    },[unread])
  
  useEffect(()=>{
    socket.on('friendrequest',data=>{
      if (data[0].email===myEmail){
        setUser(data[0])
        
      }
      return ()=>{

        socket.off('friendrequest')
      }
    })
  },[myEmail])

  useEffect(()=>{
    socket.on('unfriend',data=>{
      
      if (data.email===myEmail){
        setUser(data.message[0])
      }
      loadData('privatemessageload',
        JSON.stringify({
          email: myEmail,
          friends:user.friends
        }),
        setPrivateMessages
      ) 
      socket.emit('loadRead',{recipientemail:data.email})
      
    })
    return ()=>{
      socket.off('unfriend')
      
    }
  },[myEmail,user])
  
  useEffect(()=>{
    socket.on('reject',data=>{
      
      if (data[0].email===myEmail){        
        setUser(data[0])
      }
    })
    return ()=>{
      socket.off('reject')
    }
  },[myEmail])

  useEffect(()=>{
    socket.on('acceptfriend',data=>{
      if (data.user[0].email===myEmail){
        setUser(data.user[0])
        setUnread((prevUnread)=>{
          return [...prevUnread,{senderemail:data.friend,recipientemail:data.user[0].email,total:0,read:0}]
        })
      }
    })
      return ()=>{
        socket.off('acceptfriend')
      }
  },[myEmail])

useEffect(()=>{
  socket.on('updateReadStatus',data=>{
    if (data[0]?.recipientemail===myEmail.toUpperCase()||!data[0]){
      setUnread(data)
    }
  })
  return ()=>{
    socket.off('updateReadStatus')
  }
},[myEmail])

useEffect(()=>{
  socket.on('update',(data)=>{
    if (data[0]?.recipientemail===myEmail.toUpperCase()||!data[0]){  
      setUnread(data)
    }
  })
  return ()=>{
    socket.off('update')
  }
},[myEmail])

useEffect(()=>{
  socket.on('privatemessage',(data)=>{
      loadData('privatemessageload',
        JSON.stringify({
          email: user.email.toUpperCase(),
          friends:user.friends
        }),
        setPrivateMessages
      )  
    if (privateMessage.recipientEmail===data?.senderemail){
      socket.emit('read',{senderemail:data.senderemail ,recipientemail:data.recipientemail})
    }else{
      socket.emit('loadRead',{recipientemail:user.email.toUpperCase()})
    }
  })
  return ()=>{
    socket.off('privatemessage')
  }
},[privateMessages,privateMessage,user])

  useEffect(()=>{
      socket.on('publicmessage',(data)=>{
        setPastPublicMessages(data)
      })
      return ()=>{
        socket.off('publicmessage')
      }
  },[])

  useEffect(()=>{

    socket.on('friendmessage',(data)=>{
  
      setPastMessages(data)
    })
    return ()=>{
      socket.off('friendmessage')
    }
  },[])

  useEffect(()=>{
    socket.on('publiclikes',data=>{
      setPastPublicMessages(data)
    })
    return ()=>{
      socket.off('publiclikes')
    }
  },[])

  useEffect(()=>{
    socket.on('friendlikes',data=>{
      setPastMessages(data)
    })
    return ()=>{
      socket.off('friendlikes')
    }
  },[])
// socket.on('publicdislike',data=>{
//     setPastPublicMessages(data)
// })
// socket.on('frienddislike',data=>{
//   setPastMessages(data)
// })
// socket.on('publicdeletemessage',data=>{
//     setPastPublicMessages(data)
// })
// socket.on('frienddeletemessage',data=>{
//     setPastMessages(data)
// })
// socket.on('deletemail',data=>{
//     setPrivateMessages(data)
// })




  useEffect (()=>{
    if (user.friends){
      setFilteredMessages(()=>{
        return pastMessages.filter((message)=>message.email===user.email||user.friends.includes(message.email))})
    } 
  },[])

  useEffect (()=>{
    
    const signedInStatus = window.localStorage.getItem('isSignedIn')
    const loadedStatus = JSON.parse(signedInStatus)
    setIsSignedIn(loadedStatus)
    
  },[])

  console.log(user)
  useEffect (()=>{
    window.localStorage.setItem('route',JSON.stringify(route))
  },[route])
  
  useEffect (()=>{
    window.localStorage.setItem('isSignedIn',JSON.stringify(isSignedIn))

  },[isSignedIn])

  useEffect(()=>{
    if(isSignedIn){
      const initialRoute = window.localStorage.getItem('route')
      const loadedRoute = JSON.parse(initialRoute)
      setRoute(loadedRoute)

      const getUser = window.localStorage.getItem('user')
      const loadedUser = JSON.parse(getUser)
      setUser(loadedUser)

      const getConversation = window.localStorage.getItem('conversation')
      const loadedConversation = JSON.parse(getConversation)
      setConversation(loadedConversation)

      loadData('friendmessageload',
                JSON.stringify({
                  email:user.email.toUpperCase(),
                  friends:user.friends
                }),
                setPastMessages
              )
              loadData('publicmessageload',
                JSON.stringify({
                    email:user.email.toUpperCase(),
                    friends:user.friends
                }),
                setPastPublicMessages
              )

              loadData('privatemessageload',
                JSON.stringify({
                  email: user.email.toUpperCase(),
                  friends:user.friends
                }),
                setPrivateMessages
              )    
    }
  },[isSignedIn])

  useEffect (()=>{
    window.localStorage.setItem('user',JSON.stringify(user))
  },[user])

  useEffect (()=>{
    window.localStorage.setItem('conversation',JSON.stringify(conversation))
  },[conversation])

  const resetState = () => {
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
    if (route==='mail'){
      setConversation(prevConversation=>{
        return {...prevConversation,you:''}
      })
      setPrivateMessage(prevPrivateMessage=>{
        return {...prevPrivateMessage,recipientEmail:''}
      })
    }
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
          
  }


  const deletePost = (publicStatus,currentId) => {
    if (publicStatus){
      socket.emit('deletemessage',{
                id:currentId,
                database:'publicmessages'
                })
    }else{
      socket.emit('deletemessage',{
        id:currentId,
        database:'friendmessage'
        })
  }}

  const addFriend = (newFriend) => {
    
    if (newFriend==="No Names"){
      newFriend = prompt('Enter the email address of your friend ')
    }
    
    if (newFriend){
        if (!user.friends
            ||!user.friends.includes(newFriend)
            ||!user.pendingrequests.includes(newFriend)
            ||!user.request.includes(newFriend)
            ){
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
                
                  
            }).catch(err=>console.log(err))
            
          }
    }
   
  }

  
  const changePublicStatus = (route,publicState) => {
    setPublicStatus(publicState)
    onRouteChange(route)
    
}

const converse = (friend) => {
  setConversation((prevConversation)=>{
      return {...prevConversation,you:friend}
  })
  setPrivateMessage((prevPrivateMessage)=>{
      return {...prevPrivateMessage,recipientEmail:friend}
  })
  setRoute('mail')
  socket.emit('read',{senderemail:friend,recipientemail:user.email})
 
}
       
 

  return (
    <div className="App">      
        <Navigation 
            onRouteChange = {onRouteChange} 
            isSignedIn = {isSignedIn}
            route={route}
            user = {user} 
            changePublicStatus = {changePublicStatus}
            totalMessages = {totalMessages}
        />
    
        {isSignedIn
            ? (route==='home'||route==='friend'
                  ?<div className = "main">
                        <div className = "mainMessage">
                            <Messages 
                                user = {user} 
                                route = {route}
                                deletePost = {deletePost}
                                currentMessage = {currentMessage}
                                setCurrentMessage = {setCurrentMessage}
                                pastMessages = {pastMessages}
                                currentPublicMessage = {currentPublicMessage}
                                setCurrentPublicMessage = {setCurrentPublicMessage}
                                pastPublicMessages = {pastPublicMessages}
                                addFriend = {addFriend}
                                setFilteredMessages = {setFilteredMessages}
                                filteredMessages = {filteredMessages}
                                publicStatus = {publicStatus}
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
                              conversation = {conversation}
                              converse = {converse}
                              route = {route}
                              unread = {unread}
                              onRouteChange = {onRouteChange}
                            /> 
                      </div>
                  </div>
                  :
                  
                        <Friends 
                            user = {user}                           
                            addFriend = {addFriend}                            
                            converse = {converse}
                            
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
                    setPrivateMessages = {setPrivateMessages}
                    setPastMessages = {setPastMessages}                    
                    setPastPublicMessages = {setPastPublicMessages}
                    setConversation = {setConversation}                   
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
