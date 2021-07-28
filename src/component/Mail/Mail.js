import React, { useState, useEffect } from 'react';
import Messagebox from '../Messages/Messagebox';
import './Mail.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';

const Mail = ({privateMessage, setPrivateMessage, privateMessages, setPrivateMessages, user,deletePost,conversation}) => {

    const [hiddenMailStatus,setHiddenMailStatus] = useState({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
    let offset=''
    let background=''


    useEffect(()=>{

        

        // FETCH

        
        if (privateMessage.message!==''){
            
                // console.log(currentMessage.time,'TIMETIME')
                fetch('http://localhost:3000/privatemessage',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            name:user.username,
                            senderemail:user.email,
                            recipientemail:conversation.you,
                            message:privateMessage.message,
                            time:'currentTime'
                            })
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            console.log('FROM DB',res)
                            setPrivateMessages(res)})
                        .catch(err=>console.log(err))
    
            // setPrivateMessages((prevPrivateMessages)=>{
            //     return [...prevPrivateMessages,privateMessage]
            }
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,username:'',message:'',time:''}})
        
        
        
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

      const deleteMail = (currentId) => {
        //   console.log(currentId)
        fetch('http://localhost:3000/deletemail',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id:currentId,
                database:'privatemessage'
                })
            })
            .then(res=>res.json())
            .then(res=>{
                console.log('FROM DB',res)
                setPrivateMessages(res)})
            .catch(err=>console.log(err))

        // FETCH

        
    //     const currentIndex = privateMessages.length-1-event.target.id
        
    //     setPrivateMessages(privateMessages.filter((message)=>message!==privateMessages[currentIndex]))
    //   }

    //   const reply = (email) => {
    //       console.log('reply',email)
    //     setPrivateMessage((prevPrivateMessage)=>{
    //         return {...prevPrivateMessage,recipientemail:email}
    //     })
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
            
            
                {/* <div>
                <label name="to">To</label>
            <input name = "to" id="recipientEmail" type = "text" placeholder = "Enter email" onChange = {onChanges} value = {privateMessage.recipientEmail}></input>
                </div> */}
            
            {/* <label name="body">Message</label> */}
{/*             
            <input name = "body"  id = "messageBody" placeholder = "Enter Message " onChange = {onChanges} value = {privateMessage.message}></input>
            <button className = "buttons" type="submit" onClick ={()=>onSend(false)}>Send</button>
            <button className = "buttons" type="submit" onClick ={()=>onSend(true)}>Picture</button> */}
                {conversation.you?
                <div>
            
                <input 
                    id = "picture"
                    className = {"mailtextarea "+hiddenMailStatus.picture} cols="40" rows="6" 
                    onChange = {onChanges} 
                    placeholder = "Enter Picture URL" 
                    value = {privateMessage.message}
                ></input>
                <textarea 
                    id = "mail"
                    className = {"mailtextarea "+hiddenMailStatus.message} cols="40" rows="6" 
                    onChange = {onChanges} 
                    value = {privateMessage.message}
                ></textarea>
                
                <label htmlFor = "mail" className = {"buttons "+hiddenMailStatus.button} onClick = {()=>changeHidden(false)}>Message</label>
                <label htmlFor = "picture" className = {"buttons "+hiddenMailStatus.button} onClick = {()=>changeHidden(true)}>Picture</label>
                <label className = {"buttons "+hiddenMailStatus.submit} onClick = {()=>onSend(hiddenMailStatus.picture==="")}>Submit</label>
                <label className = {"buttons "+hiddenMailStatus.submit} onClick = {goBack}>Back</label>

            </div>
            :
            <div className = 'nocontactContainer'>
            <div>

            <h1 className = "nocontact">PLEASE SELECT SOMEONE TO MESSAGE</h1>
                    </div>
        </div>
                }
            <div className = "messages">
                {/* {console.log(privateMessages,'before map')} */}
                {privateMessages.map((message,i)=>{
                    const currentMessage = privateMessages.length-1-i
                    const currentId = privateMessages[currentMessage].id
                    // console.log(currentId,privateMessages[currentMessage],'ID')
                    // console.log(conversation,privateMessages[currentMessage],'time')
                    // if ((privateMessages[currentMessage].recipientEmail === user.email||privateMessages[currentMessage].senderEmail===user.email)||(privateMessages[currentMessage].senderEmail===privateMessage.senderEmail||privateMessages[currentMessage].recipientEmail===privateMessage.recipientEmail)){
                        if ((privateMessages[currentMessage].recipientemail.toUpperCase() === conversation.you
                        //         &&privateMessages[currentMessage].senderemail===user.email)
                        //     ||(privateMessages[currentMessage].recipientemail=== user.email.toUpperCase()
                                ||privateMessages[currentMessage].senderemail.toUpperCase() ===conversation.you))
                            {    
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()?offset="sender":offset="recipient";
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()?background="senderbackground":background="";
                                // console.log(privateMessages[currentMessage].senderEmail.toUpperCase()===conversation.me.toUpperCase())
                                return <div className = {offset}>
                                            <Messagebox username = {privateMessages[currentMessage].senderemail} 
                                            text ={privateMessages[currentMessage].message} 
                                            time = {privateMessages[currentMessage].time} 
                                            i = {i} deleteMail = {deleteMail} 
                                            // reply = {reply} 
                                            currentId = {currentId}
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