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

  // 
  //  Use Effects 
  // 

  // Sets the number of unread messages
  useEffect(()=>{
    setTotalMessages(unread.reduce((acc,message)=>{
  
      return acc+message.total-message.read
    },0))
    
  },[unread])
  
  // Updates when there is a friend request
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

  // Updates friend list when unfriended
  useEffect(()=>{
    socket.on('unfriend',data=>{
      
      if (data.email===myEmail){
        setUser(data.message[0])
      }

      // Updates private messages so you only see messages from your friends
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
  
  // Updates friend requests on rejection
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

  // Updates friend lists on friend request being accepted  
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

  // Updates unread messages
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

  // 
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

  // Loads private message when a new message is sent
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

  // Loads public messages on page load
  useEffect(()=>{
      socket.on('publicmessage',(data)=>{
        setPastPublicMessages(data)
      })
      return ()=>{
        socket.off('publicmessage')
      }
  },[])

  // Loads friend messages on page load
  useEffect(()=>{

    socket.on('friendmessage',(data)=>{

      setPastMessages(data)
    })
    return ()=>{
      socket.off('friendmessage')
    }
  },[])

  // Loads like count on page load for public messages
  useEffect(()=>{
    socket.on('publiclikes',data=>{
      setPastPublicMessages(data)
    })
    return ()=>{
      socket.off('publiclikes')
    }
  },[])

  // Loads like count on page load for friend messages
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



  // Loads privage messages on page load
  useEffect (()=>{
    if (user.friends){
      setFilteredMessages(()=>{
        return pastMessages.filter((message)=>message.email===user.email||user.friends.includes(message.email))})
    } 
  },[])

  // 
  const reloadMessages = (emailUpper)=>{
    loadData('friendmessageload',
        JSON.stringify({
        email:emailUpper,
        friends:user.friends
      }),
      setPastMessages
      )
    loadData('publicmessageload',
        JSON.stringify({
            email:emailUpper,
            friends:user.friends
        }),
        setPastPublicMessages
      )

    loadData('privatemessageload',
        JSON.stringify({
          email: emailUpper,
          friends:user.friends
        }),
        setPrivateMessages
      )  

  }

  // Keeps user signed in on page refresh until they sign out
  useEffect (()=>{
    
    const signedInStatus = window.localStorage.getItem('isSignedIn')
    const loadedStatus = JSON.parse(signedInStatus)
    console.log(loadedStatus)
    setIsSignedIn(loadedStatus)
    if(loadedStatus){
      const initialRoute = window.localStorage.getItem('route')
      const loadedRoute = JSON.parse(initialRoute)
      setRoute(loadedRoute)

      const getUser = window.localStorage.getItem('user')
      const loadedUser = JSON.parse(getUser)
      console.log(loadedUser)
      setUser(loadedUser)

      const getConversation = window.localStorage.getItem('conversation')
      const loadedConversation = JSON.parse(getConversation)
      setConversation(loadedConversation)

      const getUnread = window.localStorage.getItem('unread')
      const loadedUnread = JSON.parse(getUnread)
      setUnread(loadedUnread)

      const getPublicStatus = window.localStorage.getItem('publicStatus')
      const loadedPublicStatus = JSON.parse(getPublicStatus)
      setPublicStatus(loadedPublicStatus)

      const emailUpper = user.email.toUpperCase()
      reloadMessages(emailUpper)
        
              }
  },[])

  // console.log(user)
  useEffect (()=>{
    window.localStorage.setItem('route',JSON.stringify(route))
  },[route])
  useEffect (()=>{
    window.localStorage.setItem('user',JSON.stringify(user))
  },[user])

  useEffect (()=>{
    window.localStorage.setItem('conversation',JSON.stringify(conversation))
  },[conversation])

  useEffect (()=>{
    window.localStorage.setItem('unread',JSON.stringify(unread))
  },[unread])

  useEffect (()=>{
    window.localStorage.setItem('publicStatus',JSON.stringify(publicStatus))
  },[publicStatus])
  
 
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

  useEffect (()=>{
    window.localStorage.setItem('isSignedIn',JSON.stringify(isSignedIn))
    console.log(isSignedIn)
    
  },[isSignedIn])


  

  

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
  
  // Function used to load data based on the call back function passed in
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

  // Handles deleting a message
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

  // Adds friend on friend accept
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

// Sets conversation partner
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
        {/* Navigation bar always loaded */}
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

                  // If user is signed in and route is friend or home- loads main message area
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

                  // If signed in and route is mail - loads private message area
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

                    // If logged in but route is not home, friend, or mail - loads the contact section
                    <Friends 
                        user = {user}                           
                        addFriend = {addFriend}                            
                        converse = {converse}
                        
                    />
                  )

            // If not logged in - loads the login page
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
