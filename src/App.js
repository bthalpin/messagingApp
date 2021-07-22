import React, { useState, useEffect } from 'react';
import Login from './component/Login/Login';
import Navigation from './component/Navigation/Navigation';
import Messages from './component/Messages/Messages';
import Mail from './component/Mail/Mail';
import Friends from './component/Friends/Friends';
import './App.css';
import Picture from './component/Messages/Picture';



function App() {
  const [user,setUser] = useState({username:'',email:'',password:'',friends:['brian@gmail.com']})
  const [route,setRoute] = useState('Sign In')
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  // const [currentMessage,setCurrentMessage] = useState('')
  // const [pastMessages,setPastMessages] = useState([])
  const [pastMessages,setPastMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState({username:'',email:'',message:'',time:'',count:[]})
  const [privateMessages,setPrivateMessages] = useState([])
  const [privateMessage, setPrivateMessage] = useState({username:'',senderEmail:'',recipientEmail:'',message:'',time:''})

  
 

  const resetState = () => {
    console.log(user)
    setRoute('Sign In')
    setIsSignedIn(false)
    setUser({username:'',email:'',password:'',friends:['brian@gmail.com']})
    setErrorMessage('')
    // console.log(pastMessages)
    setCurrentMessage({username:'',email:'',message:'',time:'',count:[]})
    setPrivateMessage({username:'',senderEmail:'',recipientEmail:'',message:'',time:''})
    // console.log(pastMessages)
  }

  const onRouteChange = (route) => {
    
    (route === 'home' || route ==='mail')?setIsSignedIn(true):resetState();
    setRoute(route)
    // console.log(route)
  }
  
  const deletePost = (currentIndex) => {
    // const currentIndex = pastMessages.length-1-event.target.id
    console.log(pastMessages[currentIndex].email)
    if (pastMessages[currentIndex].email===user.email){
      setPastMessages(pastMessages.filter((message)=>message!==pastMessages[currentIndex]))
    }else{
      alert('You can only delete your own messages')
    }    
  }

  return (
    <div className="App">
    <Navigation onRouteChange = {onRouteChange} isSignedIn = {isSignedIn} route={route}/>
    
     {isSignedIn
      ? (route==='home'
        ?
        <div className = "main">
        {/* {console.log(pastMessages)} */}
        <Friends user = {user} setUser = {setUser} setRoute = {setRoute} setPrivateMessage = {setPrivateMessage}/>
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
            />
            </div>
        </div>
        :
        <div className = "main">
        <Friends user = {user} setUser = {setUser} setRoute = {setRoute} setPrivateMessage = {setPrivateMessage}/>
        <div className = "mainMessage">
        <Mail user ={user} privateMessage = {privateMessage} setPrivateMessage = {setPrivateMessage} privateMessages = {privateMessages} setPrivateMessages = {setPrivateMessages} deletePost = {deletePost} />
        </div>
        </div>)
      :(
        <>
        {/* {console.log(pastMessages)} */}
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
            setPrivateMessage = {setPrivateMessage}
            // setPastMessages = {setPastMessages}
            />          
        </>
        )
    }
    
    </div>
  );
}

export default App;
