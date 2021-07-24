import React, { useState, useEffect } from 'react';
import Messagebox from '../Messages/Messagebox';
import './Mail.css';
import '../../colors.css';

const Mail = ({privateMessage, setPrivateMessage, privateMessages, setPrivateMessages, user,deletePost,conversation}) => {

    const [hiddenMailStatus,setHiddenMailStatus] = useState({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
    let offset=''
    let background=''


    useEffect(()=>{
        if (privateMessage.message!==''){
            setPrivateMessages((prevPrivateMessages)=>{
                return [...prevPrivateMessages,privateMessage]
            })
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,username:'',message:'',time:''}})
        
        }
        
        // console.log(pastMessages)
    },[privateMessage.time])

    const onChanges= (event) =>{
        // switch (event.target.id){
        //     case 'recipientEmail':
        //         setPrivateMessage((prevPrivateMessage)=>{
        //             return {...prevPrivateMessage,recipientEmail:event.target.value}
        //         })
        //         break;
        //     case 'messageBody':
                setPrivateMessage((prevPrivateMessage)=>{
                    return {...prevPrivateMessage,message:event.target.value}
                })
                // break;
        }
        // switch (event.target.id){
        //   case 'Name':
        //     setUser((prevUser)=>{
        //         return {...prevUser,username:event.target.value}})
        //     break;
        //   case 'Email':
        //     setUser((prevUser)=>{
        //         return {...prevUser,email:event.target.value}})
        //     break;
        //   case 'Password':
        //     setUser((prevUser)=>{
        //         return {...prevUser,password:event.target.value}})
        //     break;
        //     default:
        //         console.log(event.target.value)
        // }
      

      const onSend = (picture) => {
          if(picture &&(privateMessage.message!=='')){
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,message:'#img#'+privateMessage.message}
            })
          }
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,time:Date().toLocaleString()}
        })
          
          console.log(privateMessages,"private")
          setHiddenMailStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
      }

      const deleteMail = (event) => {
        const currentIndex = privateMessages.length-1-event.target.id
        
        setPrivateMessages(privateMessages.filter((message)=>message!==privateMessages[currentIndex]))
      }

      const reply = (email) => {
          console.log('reply',email)
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,recipientEmail:email}
        })
      }

      const changeHidden = (picture) => {
        if(picture){
           setHiddenMailStatus({picture:"",message:"textareahide",button:"textareahide",submit:""})
        }else{
            setHiddenMailStatus({picture:"textareahide",message:"",button:"textareahide",submit:""})
        }
        
        // console.log(hideMessageText,hidePictureText)
        
    }

    const goBack = () => {
        setHiddenMailStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
        
        setPrivateMessage((prevCurrentPrivateMessage)=>{
            return {...prevCurrentPrivateMessage,message:''}})
        
    }

    return (
        <div className = "mailbox">
            
            <div>
                {/* <div>
                <label name="to">To</label>
            <input name = "to" id="recipientEmail" type = "text" placeholder = "Enter email" onChange = {onChanges} value = {privateMessage.recipientEmail}></input>
                </div> */}
            
            {/* <label name="body">Message</label> */}
{/*             
            <input name = "body"  id = "messageBody" placeholder = "Enter Message " onChange = {onChanges} value = {privateMessage.message}></input>
            <button className = "buttons" type="submit" onClick ={()=>onSend(false)}>Send</button>
            <button className = "buttons" type="submit" onClick ={()=>onSend(true)}>Picture</button> */}

                <input 
                    className = {"textarea "+hiddenMailStatus.picture} cols="40" rows="6" 
                    onChange = {onChanges} 
                    placeholder = "Enter Picture URL" 
                    value = {privateMessage.message}
                ></input>
                <input 
                    className = {"textarea "+hiddenMailStatus.message} cols="40" rows="6" 
                    onChange = {onChanges} 
                    value = {privateMessage.message}
                ></input>
                
                <button className = {"buttons "+hiddenMailStatus.button} onClick = {()=>changeHidden(false)}>Message</button>
                <button className = {"buttons "+hiddenMailStatus.button} onClick = {()=>changeHidden(true)}>Picture</button>
                <button className = {"buttons "+hiddenMailStatus.submit} onClick = {()=>onSend(hiddenMailStatus.picture==="")}>Submit</button>
                <button className = {"buttons "+hiddenMailStatus.submit} onClick = {goBack}>Back</button>

            </div>
            <div className = "messages">
                {privateMessages.map((message,i)=>{
                    const currentMessage = privateMessages.length-1-i
                    
                    console.log(conversation,privateMessages[currentMessage],'time')
                    // if ((privateMessages[currentMessage].recipientEmail === user.email||privateMessages[currentMessage].senderEmail===user.email)||(privateMessages[currentMessage].senderEmail===privateMessage.senderEmail||privateMessages[currentMessage].recipientEmail===privateMessage.recipientEmail)){
                        if ((privateMessages[currentMessage].recipientEmail.toUpperCase() === conversation.you
                                &&privateMessages[currentMessage].senderEmail===conversation.me)
                            ||(privateMessages[currentMessage].recipientEmail=== conversation.me.toUpperCase()
                                &&privateMessages[currentMessage].senderEmail.toUpperCase() ===conversation.you))
                            {    
                                privateMessages[currentMessage].senderEmail.toUpperCase()===conversation.me.toUpperCase()?offset="sender":offset="recipient";
                                privateMessages[currentMessage].senderEmail.toUpperCase()===conversation.me.toUpperCase()?background="senderbackground":background="";
                                console.log(privateMessages[currentMessage].senderEmail.toUpperCase()===conversation.me.toUpperCase())
                                return <div className = {offset}>
                                            <Messagebox username = {privateMessages[currentMessage].senderEmail} 
                                            text ={privateMessages[currentMessage].message} 
                                            time = {privateMessages[currentMessage].time} 
                                            i = {i} deleteMail = {deleteMail} 
                                            reply = {reply} 
                                            background = {background} 
                                            />
                                        </div>
                            }
                    
                    })
                }
            </div>
            
        </div>
    )
}

export default Mail;