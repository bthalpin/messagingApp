import React, { useState, useEffect } from 'react';
import Messagebox from '../Messages/Messagebox';
import Friend from '../Friends/Friend';
import './Mail.css';
import '../../colors2.css';
import socket from '../../socket';

const Mail = ({privateMessage, setPrivateMessage, 
                privateMessages, setPrivateMessages, 
                user,deletePost,conversation,
                setConversation,converse,
                route,unread}) => {

    const [hiddenMailStatus,setHiddenMailStatus] = useState({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
    let offset=''
    let background=''
    

    useEffect(()=>{
        const currentTime = privateMessage.time

        if (privateMessage.message!==''){
            socket.emit('privatemessage',{
                        name:user.name,
                        senderemail:user.email,
                        recipientemail:conversation.you,
                        message:privateMessage.message,
                        time:currentTime
                        })
            }
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,name:'',message:'',time:''}})  
    },[privateMessage.time])


    const onChanges= (event) =>{
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,message:event.target.value}
            })
        }
      

    const onSend = (picture) => {
        let date = new Date
        const timeNow =  date.toLocaleString("en-US", {
            timeZone: `America/New_York`
          });
        if(picture &&(privateMessage.message!=='')){
            setPrivateMessage((prevPrivateMessage)=>{
                return {...prevPrivateMessage,message:'#img#'+privateMessage.message}
            })
          }
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,time:timeNow}
        })
          setHiddenMailStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
      }

    const deleteMail = (currentId) => {  
        socket.emit('deletemail',{
                    id:currentId,
                    database:'privatemessage'
                    })
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

    const mainMailWindow = ()=>{
        setPrivateMessage(prevPrivateMessage=>{
            return {...prevPrivateMessage,recipientEmail:''}
        })
        setConversation(prevConversation=>{
            return {...prevConversation,you:''}
        })
    }
    

    return (
        <div className = "mailbox">
            
            { console.log(privateMessage.recipientEmail)}
            {conversation.you?
            <div>
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
                    <div className = "mailButtons">

                        <label 
                            htmlFor = "mail" 
                            className = {"buttons "+hiddenMailStatus.button} 
                            onClick = {()=>changeHidden(false)}>
                                Message
                        </label>

                        <label 
                            htmlFor = "picture" 
                            className = {"buttons "+hiddenMailStatus.button} 
                            onClick = {()=>changeHidden(true)}>
                                Picture
                        </label>

                        <label 
                            className = {"buttons "+hiddenMailStatus.submit} 
                            onClick = {()=>onSend(hiddenMailStatus.picture==="")}>
                                Submit
                        </label>

                        <label 
                            className = {"buttons "+hiddenMailStatus.submit} 
                            onClick = {goBack}>
                                Back
                        </label>

                    </div>
                    <div className = "privateMessage">
                        <button className = "backButton" onClick = {mainMailWindow}>&lt;</button>
                        <p className = "contactName">{conversation.you}</p>
                    </div>    
                </div>
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
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()
                                    ?offset="sender"
                                    :offset="recipient";
                                privateMessages[currentMessage].senderemail.toUpperCase()===user.email.toUpperCase()
                                    ?background="senderbackground" 
                                    :background="";
                                return <div className = {offset}>
                                    
                                            <Messagebox email = {privateMessages[currentMessage].senderemail} 
                                            text ={privateMessages[currentMessage].message} 
                                            time = {privateMessages[currentMessage].time} 
                                            i = {i}
                                            deleteMail = {deleteMail} 
                                            currentId = {currentId}
                                            background = {background} 
                                            />
                                        </div>
                            }
                    
                    })
                }
            </div> 
            </div>
                :
                <div className = 'nocontactContainer'>
                    {/* {console.log(unread,'mailunread')} */}
                    <p className = "contactName">Select a contact to message</p>
                                            <ul className = "contactScroll">                            
                                                {unread.map((friend)=>{
                                                    return <div className = "unreadMessageContainer">
                                                        <Friend converse = {converse} friend = {friend.senderemail} route={route} />
                                                        {friend.total-friend.read>0?<span className = "unreadMessage">{friend.total-friend.read}</span>:<></>}
                                                        {/* <span>{socket.emit('updateReadStatus',{
                                                            recipientemail:user.email,
                                                            senderemail:friend
                                                        })
                                                        }{socket.on('updateRead',data=>{
                                                            return data[0].total-data[0].read
                                                        })}</span> */}
                                                        </div>
                                                    })
                                                }
                                             </ul>
    
                                        
                    
                </div>
            }
                       
        </div>
    )
}

export default Mail;