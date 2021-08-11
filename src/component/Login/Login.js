import React from 'react';
import Inputblock from './Inputblock';
import './Login.css';
import '../../colorScheme.css';
import socket from '../../socket';

const Login = ({
    user,route,errorMessage,
    setRoute,setUser, setErrorMessage,
    setIsSignedIn,onRouteChange, 
    setCurrentMessage, setPrivateMessages, 
    setConversation, setPastMessages,
    setPastPublicMessages,
    loadData,password,setPassword
  }) => {
    
    const {name,email} = user;
    
    const onChanges= (event) =>{
        switch (event.target.id){
          case 'Name':
            setUser((prevUser)=>{
                return {...prevUser,name:event.target.value}})
             
            break;
          case 'Email':
            setUser((prevUser)=>{
                return {...prevUser,email:event.target.value}})
            break;
          case 'Password':
            setPassword(event.target.value)
            break;
          default:
              console.log(event.target.value)
        }
      }
  

    const verifyLogin = (upperEmail) => {
        fetch('https://socially-distanced-server.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              email:upperEmail,
              password:password
            })
          })
        .then(res=>res.json())
        .then(res=>{
            if (res.email===upperEmail){
              setUser(res)
              setRoute('home')
              setIsSignedIn(true)
              setErrorMessage('')
              setPassword('')
              setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,name:res.name,email:upperEmail}})
                
              setConversation({me:res.email,you:''})
              loadData('friendmessageload',
                JSON.stringify({
                  email:upperEmail,
                  friends:user.friends
                }),
                setPastMessages
              )
              loadData('publicmessageload',
                JSON.stringify({
                    email:upperEmail,
                    friends:user.friends
                }),
                setPastPublicMessages
              )

              loadData('privatemessageload',
                JSON.stringify({
                  email: upperEmail,
                  friends:user.friends
                }),
                setPrivateMessages
              )    
              socket.emit('loadRead',{recipientemail:upperEmail})

            }else{
              setErrorMessage('Invalid Login Information')
              setUser({name:'',email:'',friends:[],requests:[],pendingrequests:[]})
              setPassword('')
            }
            
        })
        .catch(err=>console.log(err))
      }
    
      const verifyRegistration = (upperEmail) => {
        const emailPattern = /\S+@\S+\.\S+/
            if (emailPattern.test(email) && password.length>=8){
              fetch('https://socially-distanced-server.herokuapp.com/register',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  name:user.name,
                  email:upperEmail,
                  password:password,
                  friends:user.friends
                })
              })
              .then(res=>res.json())
              .then(user=>{
                if (user==='TAKEN'){
                  setErrorMessage('That email address is already registered.')
                }else{
                  setUser(user)
                  setRoute('home')
                  setIsSignedIn(true)
                  setErrorMessage('')
                  setPassword('')
                  setCurrentMessage((prevCurrentMessage)=>{
                    return {...prevCurrentMessage,name:user.name,email:user.email}})
                  loadData('publicmessageload',
                    JSON.stringify({
                        email:upperEmail,
                        friends:user.friends
                    }),
                    setPastPublicMessages
                    )
                  }
                
            
                })
                .catch(err=>console.log(err))

                
              }else if (password.length<8){
                setErrorMessage('Password must be 8 characters long')
              }else{
                setErrorMessage('Enter a valid email address')
              }
      }

      const onSubmit = () => {
        const upperEmail = user.email.toUpperCase()
        route==='Sign In'?verifyLogin(upperEmail):verifyRegistration(upperEmail);
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
                                <div className="error">{errorMessage}</div>   
                                <Inputblock inputType = {"Name"} value={name} onChanges ={onChanges}/>
                                <Inputblock inputType = {"Email"} value = {email} onChanges ={onChanges}/>
                                <Inputblock inputType = {"Password"} value={password} onChanges ={onChanges}/>
                            </div>
                            :
                            <div>
                                <h1 className="legend">Sign In</h1>
                                <div className="error">{errorMessage}</div>   
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
      </div>
    )
}

export default Login;