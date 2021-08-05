import React from 'react';
import Inputblock from './Inputblock';
import './Login.css';
// import '../../colors.css';
import '../../colors2.css';
import socket from '../../socket';
import { io } from 'socket.io-client';
// import '../../colors3.css';
const Login = ({
    user,route,errorMessage,
    setRoute,setUser, setErrorMessage,
    setIsSignedIn,onRouteChange, 
    setCurrentMessage, pastMessages,
    setPrivateMessages, setCurrentPublicMessage,
    setPrivatePublicMessage,setConversation,
    setPastMessages,setPastPublicMessages,
    setFilteredMessages,filteredMessages,
    loadData,password,setPassword
  }) => {
    
    const {name,email} = user;
    
    const onChanges= (event) =>{
        switch (event.target.id){
          case 'Name':
            setUser((prevUser)=>{
                return {...prevUser,name:event.target.value}})
              console.log(user)
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
              // =>{
              // =>{
                // console.log(res)
                // return {...prevUser,name:user.name,email:res.email,friends:res.friends,requests:res.requests,pendingrequests:res.pendingrequests}
              // })
              console.log('login',user,res)
              setRoute('home')
              setIsSignedIn(true)
              setErrorMessage('')
              setPassword('')
              setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,name:res.name,email:upperEmail}})
                
              setConversation({me:res.email,you:''})
              

            }else{
              setErrorMessage('Invalid Login Information')
              setUser({name:'',email:'',friends:[],requests:[],pendingrequests:[]})
              setPassword('')
            }
            
        })
        .catch(err=>console.log(err))
        // socket.emit('signin',JSON.stringify({
        //         email:upperEmail,
        //         password:user.password
        //       }))

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
                }
                
            
                })
                .catch(err=>console.log(err))
              // socket.emit('register',JSON.stringify({
              //       name:user.name,
              //       email:upperEmail,
              //       password:user.password,
              //       friends:user.friends
              //     }))

                loadData('publicmessageload',
                  JSON.stringify({
                      email:upperEmail,
                      friends:user.friends
                  }),
                  setPastPublicMessages
                  )
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