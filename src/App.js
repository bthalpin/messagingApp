import React, { useState, useEffect } from 'react';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import Messages from './component/Messages/Messages';
import Mail from './component/Mail/Mail';
import Friends from './component/Friends/Friends';
import './App.css';

// import './colors.css';
import './colors2.css';
// import './colors3.css';
import Picture from './component/Messages/Picture';



function App() {
  const [user,setUser] = useState({username:'',email:'',password:'',friends:['BRIAN@GMAIL.COM'],request:[],pendingrequests:[]})
  const [route,setRoute] = useState('Sign In')
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const [pastMessages,setPastMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState({id:'',username:'',email:'',message:'',time:'',likes:[]})
  const [pastPublicMessages,setPastPublicMessages] = useState([])
  const [currentPublicMessage, setCurrentPublicMessage] = useState({id:'',username:'',email:'',message:'',time:'',likes:[]})
  const [privateMessages,setPrivateMessages] = useState([])
  const [privateMessage, setPrivateMessage] = useState({id:'',username:'',senderemail:'',recipientemail:'',message:'',time:''})
  const [conversation,setConversation] = useState({me:'',you:''})
  const [filteredMessages,setFilteredMessages] = useState({})
  
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
    setUser({username:'',email:'',password:'',friends:['BRIAN@GMAIL.COM'],requests:[],pendingrequests:[]})
    setCurrentMessage({id:'',username:'',email:'',message:'',time:'',likes:[]})
    setPrivateMessage({id:'',username:'',senderemail:'',recipientemail:'',message:'',time:''})
    setConversation({me:'',you:''})
  }

  const onRouteChange = (route) => {
    (route === 'home' || route ==='mail')?setIsSignedIn(true):resetState();
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


  const deletePost = (currentIndex,publicStatus,currentId) => {
    if (publicStatus){
      fetch('https://socially-distanced-server.herokuapp.com/deletemessage',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
              id:currentId,
              database:'publicmessages'
              })
          })
          .then(res=>res.json())
          .then(res=>{
              // console.log('FROM DB',res)
              setPastPublicMessages(res)})
          .catch(err=>console.log(err))
    }else{
      fetch('https://socially-distanced-server.herokuapp.com/deletemessage',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:currentId,
            database:'friendmessage'
              })
          })
          .then(res=>res.json())
          .then(res=>{
              // console.log('FROM DB',res)
              setPastMessages(res)})
          .catch(err=>console.log(err))
          }       
  }

  const addFriend = (newFriend) => {
    if (newFriend==="No Names"){
      newFriend = prompt('Enter the email address of your friend ')
    }
    if (newFriend){
        if (!user.friends||!user.friends.includes(newFriend)){
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
                  // console.log('FROM request',res)                      
                  if (res){
                    setUser((prevUser)=> {
                      return {...prevUser,pendingrequests:res.pendingrequests}})
                  }
            }).catch(err=>console.log(err))
          }
    }
   
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
        />
    
        {isSignedIn
            ? (route==='home'
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
                              />
                        </div>
                  </div>
                  :<div className = "main">
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
                            /> 
                      </div>
                  </div>)
        
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
                    
                  
                    />          
                </>
              )
        }
    
    </div>
  );
}

export default App;
