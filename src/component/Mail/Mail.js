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

        if (privateMessage.message!==''){
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
            }
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,username:'',message:'',time:''}})  
    },[privateMessage.time])


    const onChanges= (event) =>{
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,message:event.target.value}
            })
        }
      

    const onSend = (picture) => {
        if(picture &&(privateMessage.message!=='')){
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,message:'#img#'+privateMessage.message}
            })
          }
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,time:Date().toLocaleString()}
        })
          setHiddenMailStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
      }

    const deleteMail = (currentId) => {        
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
                setPrivateMessages(res)})
            .catch(err=>console.log(err))
      }

    const changeHidden = (picture) => {
        if(picture){
           setHiddenMailStatus({picture:"",message:"textareahide",button:"textareahide",submit:""})
        }else{
            setHiddenMailStatus({picture:"textareahide",message:"",button:"textareahide",submit:""})
        }        
    }

    const goBack = () => {
        setHiddenMailStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
        
        setPrivateMessage((prevCurrentPrivateMessage)=>{
            return {...prevCurrentPrivateMessage,message:''}})        
    }

    return (
        <div className = "mailbox">
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
                {privateMessages.map((message,i)=>{
                    const currentMessage = privateMessages.length-1-i
                    const currentId = privateMessages[currentMessage].id
                    if (((privateMessages[currentMessage].recipientemail.toUpperCase() === conversation.you
                        &&privateMessages[currentMessage].senderemail.toUpperCase() === user.email)
                            ||(privateMessages[currentMessage].senderemail.toUpperCase() ===conversation.you
                            &&privateMessages[currentMessage].recipientemail.toUpperCase() === user.email)
                            ))
                            {    
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()?offset="sender":offset="recipient";
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()?background="senderbackground":background="";
                                return <div className = {offset}>
                                            <Messagebox username = {privateMessages[currentMessage].senderemail} 
                                            text ={privateMessages[currentMessage].message} 
                                            time = {privateMessages[currentMessage].time} 
                                            i = {i} deleteMail = {deleteMail} 
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