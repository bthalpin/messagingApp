import React from 'react';
import Messagebox from '../Messages/Messagebox';
import './Mail.css';

const Mail = ({privateMessage, setPrivateMessage, privateMessages, setPrivateMessages, user,deletePost}) => {
    const onChanges= (event) =>{
        switch (event.target.id){
            case 'recipientEmail':
                setPrivateMessage((prevPrivateMessage)=>{
                    return {...prevPrivateMessage,recipientEmail:event.target.value}
                })
                break;
            case 'messageBody':
                setPrivateMessage((prevPrivateMessage)=>{
                    return {...prevPrivateMessage,message:event.target.value}
                })
                break;
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
      }

      const onSend = () => {
          setPrivateMessages((prevPrivateMessages)=>{
              return [...prevPrivateMessages,privateMessage]
          })
          setPrivateMessage((prevPrivateMessage)=>{
              return {...prevPrivateMessage,username:'',recipientEmail:'',message:'',time:''}})
          console.log(privateMessages)
      }

      const deleteMail = (event) => {
        const currentIndex = privateMessages.length-1-event.target.id
        // console.log(pastMessages[currentIndex].email)
        setPrivateMessages(privateMessages.filter((message)=>message!==privateMessages[currentIndex]))
      }

      const reply = (email) => {
          console.log('reply',email)
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,recipientEmail:email}
        })
      }
    return (
        <div className = "mailbox">
            <div>
                <div>
                <label name="to">To</label>
            <input name = "to" id="recipientEmail" type = "text" placeholder = "Enter email" onChange = {onChanges} value = {privateMessage.recipientEmail}></input>
                </div>
            
            <label name="body">Message</label>
            <textarea name = "body"  id = "messageBody" placeholder = "Enter Message " onChange = {onChanges} value = {privateMessage.message}></textarea>
            <button type="submit" onClick ={onSend}>Send</button>
            </div>
            
            {privateMessages.map((message,i)=>{
                    const currentMessage = privateMessages.length-1-i
                    console.log(privateMessages[currentMessage].recipientEmail,user.email)
                    if (privateMessages[currentMessage].recipientEmail === user.email){
                        return <div><Messagebox username = {privateMessages[currentMessage].senderEmail} text ={privateMessages[currentMessage].message} time = {privateMessages[currentMessage].time} i = {i} deleteMail = {deleteMail} reply = {reply} /></div>
                    }
                    
                })}
        </div>
    )
}

export default Mail;