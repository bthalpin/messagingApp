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
  const [user,setUser] = useState({username:'',email:'',password:'',friends:['BRIAN@GMAIL.COM']})
  // const [myFriends,setMyFriends] = useState({email:'',friends:[]})
  // const [myOldFriends, setMyOldFriends] = useState([])
  const [route,setRoute] = useState('Sign In')
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  // const [currentMessage,setCurrentMessage] = useState('')
  // const [pastMessages,setPastMessages] = useState([])
  const [pastMessages,setPastMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState({id:'',username:'',email:'',message:'',time:'',likes:[]})
  const [pastPublicMessages,setPastPublicMessages] = useState([])
  const [currentPublicMessage, setCurrentPublicMessage] = useState({id:'',username:'',email:'',message:'',time:'',likes:[]})
  const [privateMessages,setPrivateMessages] = useState([])
  const [privateMessage, setPrivateMessage] = useState({id:'',username:'',senderemail:'',recipientemail:'',message:'',time:''})
  const [conversation,setConversation] = useState({me:'',you:''})
  const [filteredMessages,setFilteredMessages] = useState({})
  
  useEffect (()=>{
    setFilteredMessages(()=>{
      return pastMessages.filter((message)=>message.email===user.email||user.friends.includes(message.email))})
          
  },[])
 
  
  // useEffect (()=>{
  //   fetch('http://localhost:3000/friendmessageload',{
  //                   method:'get',
  //                   headers:{'Content-Type':'application/json'},
                    
  //                   })
  //                   .then(res=>res.json())
  //                   .then(res=>{
  //                       console.log('FROM DB',res)
  //                       setPastMessages(res)})
  //                   .catch(err=>console.log(err))
      
    
  // })

  // useEffect(()=>{
  //   fetch('http://localhost:3000/publicmessageload',{
  //                     method:'get',
  //                     headers:{'Content-Type':'application/json'},
                      
  //                     })
  //                     .then(res=>res.json())
  //                     .then(res=>{
  //                         console.log('FROM DB',res)
  //                         setPastPublicMessages(res)})
  //                     .catch(err=>console.log(err))
  // })

  const resetState = () => {
    console.log(user)
    setRoute('Sign In')
    setIsSignedIn(false)
    setUser({username:'',email:'',password:'',friends:['BRIAN@GMAIL.COM']})
    // setErrorMessage('')
    // console.log(pastMessages)
    setCurrentMessage({id:'',username:'',email:'',message:'',time:'',likes:[]})
    setPrivateMessage({id:'',username:'',senderemail:'',recipientemail:'',message:'',time:''})
    setConversation({me:'',you:''})
    
    // setMyOldFriends((prevMyOldFriends)=>{
      // return {...prevMyOldFriends,}
    // })
    // console.log(myOldFriends,'logout')
  }

  const onRouteChange = (route) => {
    
    (route === 'home' || route ==='mail')?setIsSignedIn(true):resetState();
    setRoute(route)
    // console.log(route)
  }
  
  const deletePost = (currentIndex,publicStatus,currentId) => {
    

        // FETCH

        
    // console.log(publicStatus,'error')
    // const currentIndex = pastMessages.length-1-event.target.id
    // console.log(pastMessages[currentIndex].email)
    if (publicStatus){
      fetch('http://localhost:3000/deletemessage',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        id:currentId,
                        database:'publicmessages'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        console.log('FROM DB',res)
                        setPastPublicMessages(res)})
                    .catch(err=>console.log(err))
      // if (pastPublicMessages[currentIndex].email===user.email){
      //   setPastPublicMessages(pastPublicMessages.filter((message)=>message!==pastPublicMessages[currentIndex]))
      // }else{
      //   alert('You can only delete your own messages')
      // }    
    }else{
      fetch('http://localhost:3000/deletemessage',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                      id:currentId,
                      database:'friendmessage'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        console.log('FROM DB',res)
                        setPastMessages(res)})
                    .catch(err=>console.log(err))
      // if (pastMessages[currentIndex].email===user.email){
      //   setPastMessages(pastMessages.filter((message)=>message!==pastMessages[currentIndex]))
      // }else{
      //   alert('You can only delete your own messages')
      }   
    
     
  }

  const addFriend = (newFriend) => {
    

        // FETCH

        
    if (newFriend==="No Names"){
      newFriend = prompt('Enter the email address of your friend ')
    }
    
    if (newFriend){
      fetch('http://localhost:3000/friends',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        email:user.email,
                        newFriend:newFriend.toUpperCase()
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        // console.log('FROM DB',res)
                        const newFriends = [...user.friends,newFriend.toUpperCase()]
                        setUser((prevUser)=> {
                        return {...prevUser,friends:newFriends}})
                    
        
        
        }).catch(err=>console.log(err))
        // setMyFriends((prevMyFriends)=>{
        //     return {...prevMyFriends,email:user.email,friends:newFriends}
    alert(`Added ${newFriend} to your friends list`)
    }
    
}

  return (
    <div className="App">
      {/* {console.log(pastMessages)} */}
      {/* <Friends 
            user = {user} 
            setUser = {setUser} 
            route = {route} 
            setRoute = {setRoute} 
            setPrivateMessage = {setPrivateMessage} 
            setConversation = {setConversation}  
          /> */}
    <Navigation onRouteChange = {onRouteChange} isSignedIn = {isSignedIn} route={route}
    user = {user} 
    setUser = {setUser} 
    route = {route} 
    setRoute = {setRoute} 
    setPrivateMessage = {setPrivateMessage} 
    setConversation = {setConversation}
    conversation = {conversation} 
    addFriend = {addFriend}/>
    
     {isSignedIn
      ? (route==='home'
        ?
        <div className = "main">
        

        <div className = "mainMessage">
        <Messages 
            user = {user} 
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
        :
        <div className = "main">
        {/* <Friends 
            user = {user} 
            setUser = {setUser} 
            route = {route} 
            setRoute = {setRoute} 
            setPrivateMessage = {setPrivateMessage} 
            setConversation = {setConversation}  
          /> */}

        <div className = "mainMessage">
        <Mail 
            user ={user} 
            privateMessage = {privateMessage} 
            setPrivateMessage = {setPrivateMessage} 
            privateMessages = {privateMessages} 
            setPrivateMessages = {setPrivateMessages} 
            deletePost = {deletePost} 
            conversation = {conversation} 
          />
          
        </div>
        {console.log(privateMessages,privateMessage)}
        </div>)
        
      :(
        <>
        {console.log(privateMessages,privateMessage)}
        <Login 
            user = {user}
            route = {route} 
            errorMessage = {errorMessage}
            setUser = {setUser}
            setRoute = {setRoute}
            setErrorMessage = {setErrorMessage}
            setIsSignedIn = {setIsSignedIn}
            onRouteChange = {onRouteChange}
            // currentMessage = {currentMessage}
            setCurrentMessage = {setCurrentMessage}
            pastMessages = {pastMessages}
            setPrivateMessages = {setPrivateMessages}
            setPastMessages = {setPastMessages}
            setCurrentPublicMessage = {setCurrentPublicMessage}
            setPastPublicMessages = {setPastPublicMessages}
            setConversation = {setConversation}
            setFilteredMessages = {setFilteredMessages}
            
          
            />          
        </>
        )
    }
    
    </div>
  );
}

export default App;
