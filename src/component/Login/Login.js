import React from 'react';
import Inputblock from './Inputblock';
import './Login.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';
const Login = ({
    user,route,errorMessage,
    setRoute,setUser, setErrorMessage,
    setIsSignedIn,onRouteChange, 
    setCurrentMessage, pastMessages,
    setPrivateMessages, setCurrentPublicMessage,
    setPrivatePublicMessage,setConversation,
    setPastMessages,setPastPublicMessages,
    setFilteredMessages,filteredMessages
  }) => {
    
    const {username,email,password} = user;
    
    const onChanges= (event) =>{
        switch (event.target.id){
          case 'Name':
            setUser((prevUser)=>{
                return {...prevUser,username:event.target.value}})
            break;
          case 'Email':
            setUser((prevUser)=>{
                return {...prevUser,email:event.target.value.toUpperCase()}})
            break;
          case 'Password':
            setUser((prevUser)=>{
                return {...prevUser,password:event.target.value}})
            break;
          default:
              console.log(event.target.value)
        }
      }
    
    const verifyLogin = () => {
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:user.email.toUpperCase(),
              password:user.password
            })
          })
        .then(res=>res.json())
        .then(res=>{
            if (res.email===user.email){
              setUser((prevUser)=>{
                return {...prevUser,username:res.name,friends:res.friends,requests:res.requests,pendingrequests:res.pendingrequests}
              })
              setRoute('home')
              setIsSignedIn(true)
              setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,username:res.name,email:res.email}})
                
              setConversation({me:user.email,you:''})
              

            }else{
              setErrorMessage('Invalid Login Information')
              setUser({username:'',email:'',password:'',friends:['BRIAN@GMAIL.COM'],requests:[],pendingrequests:[]})
            }
            
        })
        .catch(err=>console.log(err))
        fetch('http://localhost:3000/friendmessageload',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:user.email.toUpperCase(),
              friends:user.friends
            })
            })
            .then(res=>res.json())
            .then(res=>{
                setPastMessages(res)})
            .catch(err=>console.log(err))
        fetch('http://localhost:3000/publicmessageload',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:user.email,
              friends:user.friends
            })
            })
            .then(res=>res.json())
            .then(res=>{
                setPastPublicMessages(res)})
            .catch(err=>console.log(err))
                              
        fetch('http://localhost:3000/privatemessageload',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:user.email,
              friends:user.friends
            })
            })
            .then(res=>res.json())
            .then(res=>{
                setPrivateMessages(res)})
            .catch(err=>console.log(err))
        
      }
    
      const verifyRegistration = () => {
        const emailPattern = /\S+@\S+\.\S+/
            if (emailPattern.test(email) && password.length>=8){
              fetch('http://localhost:3000/register',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  name:user.username,
                  email:user.email.toUpperCase(),
                  password:user.password,
                  friends:user.friends
                })
              })
              .then(res=>res.json())
              .then(user=>{
                setRoute('home')
                setIsSignedIn(true)
                
                setCurrentMessage((prevCurrentMessage)=>{
                  return {...prevCurrentMessage,username:user.name,email:user.email}})
            
                })
                .catch(err=>console.log(err))
              }else if (password.length<8){
                setErrorMessage('Password must be 8 characters long')
              }else{
                setErrorMessage('Enter a valid email address')
              }
      }

      const onSubmit = () => {
        route==='Sign In'?verifyLogin():verifyRegistration();
      }    
      
    return(        
        <div>
            <div className="container">
                <article className="formWindow">
                    <div className = "formcontainer">
                        {(route==="Register"
                            ?
                            <div>
                                <h1 className="legend">Register</h1>
                                <Inputblock inputType = {"Name"} value={username} onChanges ={onChanges}/>
                                <Inputblock inputType = {"Email"} value = {email} onChanges ={onChanges}/>
                                <Inputblock inputType = {"Password"} value={password} onChanges ={onChanges}/>
                            </div>
                            :
                            <div>
                                <h1 className="legend">Sign In</h1>
                                <Inputblock inputType = {"Email"} value={email} onChanges ={onChanges}/>
                                <Inputblock inputType = {"Password"} value={password} onChanges ={onChanges}/>

                            </div>
                        )}

                        <div className="legend">
                            <button type = "submit" className = "button" onClick = {onSubmit}>Submit</button>
                        </div>
                        <div className="legend">
                            {route==='Sign In'
                            ?<p onClick = {() => onRouteChange('Register')}className="loginLink">Register</p>
                            :<p onClick = {() => onRouteChange('Sign In')} className="loginLink">Sign In</p>
                            }
                        </div>
                    </div>
                </article>
    
          </div>
          <div>{errorMessage}</div>    
      </div>
    )
}

export default Login;