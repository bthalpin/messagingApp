import React from 'react';
import Inputblock from './Inputblock';
import './Login.css'
const Login = ({
                user,route,errorMessage,
                setRoute,setUser, setErrorMessage,
                setIsSignedIn,onRouteChange, 
                setCurrentMessage, pastMessages,
                setPrivateMessage, setCurrentPublicMessage,
                setPrivatePublicMessage}) => {
    
    const {username,email,password} = user;
    
    const onChanges= (event) =>{
        switch (event.target.id){
          case 'Name':
            setUser((prevUser)=>{
                return {...prevUser,username:event.target.value}})
            break;
          case 'Email':
            setUser((prevUser)=>{
                return {...prevUser,email:event.target.value}})
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
        // const oldFriends = Object.keys(myOldFriends).filter(key=>myOldFriends[key].email===user.email)
        // console.log(oldFriends)
        // const oldFriends = myOldFriends.filter((username)=>username.email===user.email);
        // if(oldFriends.length){setUser((prevUser)=>{
        //   return {...prevUser,friends:oldFriends.friends}})}
        setRoute('home')
        setIsSignedIn(true)
        console.log(user)
        setCurrentMessage((prevCurrentMessage)=>{
          return {...prevCurrentMessage,email:email}})
        setPrivateMessage((prevPrivateMessage)=>{
          return {...prevPrivateMessage,senderEmail:email}})
        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
          return {...prevCurrentPublicMessage,email:email}})
        // setPrivatePublicMessage((prevPrivatePublicMessage)=>{
        //   return {...prevPrivatePublicMessage,senderEmail:email}})
          // console.log('log',privateMessage)
      }
    
      const verifyRegistration = () => {
        const emailPattern = /\S+@\S+\.\S+/
            if (emailPattern.test(email) && password.length>=8){
              setRoute('home')
              setIsSignedIn(true)
              setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,username:username}})
            
            setCurrentMessage((prevCurrentMessage)=>{
              return {...prevCurrentMessage,email:email}})
              console.log(pastMessages)
          }
            
            if(password.length<8){
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