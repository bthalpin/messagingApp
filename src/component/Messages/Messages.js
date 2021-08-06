import React, { useState,useEffect } from 'react';
import Messagebox from './Messagebox';
import './Message.css';
import '../../colors2.css';
import socket from '../../socket';



 

const Messages = ({user, currentMessage,
                    pastMessages,setCurrentMessage,
                    currentPublicMessage,pastPublicMessages,
                    setCurrentPublicMessage,deletePost,
                    route, addFriend, 
                    setFilteredMessages,filteredMessages,
                    publicStatus}) => {
    
    
    const [hiddenStatus,setHiddenStatus] = useState({
                                                picture:"textareahide",
                                                message:"textareahide",
                                                button:"",
                                                submit:"textareahide",
                                                position:' middle'
                                            })
    let offset = '';
    let background = '';

    useEffect(()=>{

        const currentTime = currentMessage.time
        
        if (currentMessage.message!==''){
        socket.emit('friendmessage',{
                        name:user.name,
                        email:user.email.toUpperCase(),
                        message:currentMessage.message,
                        time:currentMessage.time,
                        likes:[]
                        })
                        setCurrentMessage((prevCurrentMessage)=>{
                                return {...prevCurrentMessage,message:''}
                            })
        }        
    },[currentMessage.time])

    useEffect(()=>{
        const currentTime = currentPublicMessage.time
        
        if (currentPublicMessage.message!==''){
            socket.emit('publicmessage',{
                        name:user.name,
                        email:user.email.toUpperCase(),
                        message:currentPublicMessage.message,
                        time:currentTime,
                        likes:[]
                        })
                        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
                                return {...prevCurrentPublicMessage,message:''}
                            })
        }        
    },[currentPublicMessage.time])


    useEffect(()=>{
        if (user.friends){
        setFilteredMessages(()=>{
            return pastMessages.filter((message)=>message.email===user.email||user.friends.includes(message.email))
        })          
             
        }
    },[user.friends,pastMessages])

   
    const onSubmit = (picture) => {
        if (picture && (currentPublicMessage.message!=="" || currentMessage.message !=="")){
            publicStatus?
                setCurrentPublicMessage((prevCurrentPublicMessage)=>{
                    return {...prevCurrentPublicMessage,message:"#img#"+currentPublicMessage.message}
                })
                :
                setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,message:"#img#"+currentMessage.message}
            })
        }
        publicStatus?
        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
            return {...prevCurrentPublicMessage,time:new Date().toLocaleString("en-US", {timeZone: "America/New_York"})}
        })
        :
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,time:new Date().toLocaleString("en-US", {timeZone: "America/New_York"})}
        })       
        setHiddenStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:' middle'})          
    }

    const onInputChange = (event) => {       
        publicStatus?
            setCurrentPublicMessage((prevCurrentPublicMessage)=>{
                return {...prevCurrentPublicMessage,message:event.target.value}
            })
            :setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,message:event.target.value}
            })            
    }
    
    const checkLiked = (like) =>{
        
        return JSON.parse(like).email!==user.email.toUpperCase()
    }

    const addLike = (i,currentId) => {
        let contains=true
        
        if (publicStatus){
            const newArr = [...pastPublicMessages]   
            if (newArr[i].likes){
                contains =  newArr[i].likes.every(checkLiked)
            }
            
            if (!newArr[i].likes,contains ){
                socket.emit('likes',{
                            name:user.name,
                            email:user.email,
                            id:currentId,
                            database:'publicmessages'
                            })
            
            }else{
            socket.emit('dislike',{
                        name:user.name,
                        email:user.email,
                        id:currentId,
                        database:'publicmessages'
                        })
            
            }
        }else if (!publicStatus){
            const newArr = [...filteredMessages]
            
            if (newArr[i].likes){
                contains =  newArr[i].likes.every(checkLiked)
            }
            if (!newArr[i].likes || contains){
                socket.emit('likes',{
                            name:user.name,
                            email:user.email,
                            id:currentId,
                            database:'friendmessage'
                            })
            }else{
                socket.emit('dislike',{
                            name:user.name,
                            email:user.email,
                            id:currentId,
                            database:'friendmessage'
                            })
            }        
        }
}

    

    const changeHidden = (picture) => {
        if(picture){
           setHiddenStatus({picture:"",message:"textareahide",button:"textareahide",submit:"",position:' right'})
        }else{
            setHiddenStatus({picture:"textareahide",message:"",button:"textareahide",submit:"",position:' right'})
        }        
    }

    const goBack = () => {
        setHiddenStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:' middle'})
        publicStatus?
            setCurrentPublicMessage((prevCurrentPublicMessage)=>{
                return {...prevCurrentPublicMessage,message:''}
            })
            :setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,message:''}
            })
    }

    return(
        <div className = "maincomment">                
            {publicStatus?
                <>            
                    <div className = "inputbox">          
                        <div>
                            <input 
                                id = "pic" 
                                className = {"textareapic public "+hiddenStatus.picture} 
                                cols="40" rows="6" 
                                onChange = {onInputChange} 
                                placeholder = "Enter Picture URL" 
                                value = {currentPublicMessage.message} 
                                autoFocus>
                            </input>

                            <textarea 
                                id="msg" 
                                className = {"textarea public "+hiddenStatus.message}  
                                onChange = {onInputChange} 
                                value = {currentPublicMessage.message} 
                                autoFocus>                                    
                            </textarea>

                        </div>
                    </div>
                    <div className="commentsection">
                        <div className = "inputbox">                
                            <label 
                                className = {"msg "+hiddenStatus.submit} 
                                onClick = {()=>onSubmit(hiddenStatus.picture==="")}>
                                    Submit
                            </label>

                            <label 
                                className = {"msg "+hiddenStatus.submit} 
                                onClick = {goBack}>
                                    Back
                            </label>  

                            <label 
                                htmlFor="msg" 
                                className = {"msg "+hiddenStatus.button} 
                                onClick = {()=>changeHidden(false)}>
                                    Message
                            </label>

                            <label 
                                htmlFor ="pic" 
                                className = {"msg "+hiddenStatus.button} 
                                onClick = {()=>changeHidden(true)}>
                                    Picture
                            </label>                            
                        </div>
           
                        <div className="bigbox">
                            {pastPublicMessages.map((msg,i)=>{
                                const currentUser = pastPublicMessages.length - 1 -i
                                const currentId = pastPublicMessages[currentUser].id   
                                          
                                return <div key = {i}>
                                    <Messagebox 
                                        filteredMessages = {pastPublicMessages} 
                                        currentUser = {user.email} 
                                        email = {pastPublicMessages[currentUser].email} 
                                        text ={pastPublicMessages[currentUser].message} 
                                        time = {pastPublicMessages[currentUser].time} 
                                        i = {currentUser} 
                                        currentId = {currentId}
                                        deletePost = {deletePost} 
                                        route={route} 
                                        addLike = {addLike} 
                                        likes = {pastPublicMessages[currentUser].likes} 
                                        publicStatus = {publicStatus}
                                        addFriend = {addFriend}
                                       
                                    />
                                </div>            
                                })
                            }
                        </div>            
                    </div>        
                </>
                :
                <>
                    <div className = "inputbox">
                        <input 
                            id = "friendpic"
                            className = {"textareapic friend "+hiddenStatus.picture}  
                            onChange = {onInputChange} 
                            placeholder = "Enter Picture URL"
                            value = {currentMessage.message}
                        ></input>
                        <textarea
                            id = "friendmsg" 
                            className = {"textarea friend "+hiddenStatus.message} 
                            onChange = {onInputChange} 
                            value = {currentMessage.message}
                        ></textarea>  
                    </div>
                    
                    <div className="commentsection">
                        <div className = "inputbox">
                            <label 
                                htmlFor ="friendmsg" 
                                className = {"msg "+hiddenStatus.button} 
                                onClick = {()=>changeHidden(false)}>
                                    Message
                            </label>

                            <label 
                                htmlFor = "friendpic" 
                                className = {"msg "+hiddenStatus.button}
                                onClick = {()=>changeHidden(true)}>
                                    Picture
                            </label>

                            <label 
                                className = {"msg "+hiddenStatus.submit} 
                                onClick = {()=>onSubmit(hiddenStatus.picture==="")}>
                                    Submit
                            </label>

                            <label 
                                className = {"msg "+hiddenStatus.submit} 
                                onClick = {goBack}>
                                    Back
                            </label>

                        </div>                
                        <div className="bigbox">                    
                            {filteredMessages.map((message,i)=>{    
                                           
                                const currentUser = filteredMessages.length -1-i
                                const currentId = filteredMessages[currentUser].id                    
                                filteredMessages[currentUser].email.toUpperCase()===user.email.toUpperCase()
                                        ?offset="sender"
                                        :offset="recipient";
                                filteredMessages[currentUser].email.toUpperCase()===user.email.toUpperCase()
                                        ?background="senderbackground"
                                        :background="";                                
                                return <div key ={i} className = {offset}>
                                            <Messagebox 
                                                filteredMessages = {filteredMessages} 
                                                currentUser = {user.email} 
                                                email = {filteredMessages[currentUser].email} 
                                                text ={filteredMessages[currentUser].message} 
                                                time = {filteredMessages[currentUser].time} 
                                                i = {currentUser} 
                                                currentId = {currentId}
                                                deletePost = {deletePost} 
                                                route={route} 
                                                addLike = {addLike} 
                                                likes = {filteredMessages[currentUser].likes} 
                                                publicStatus = {publicStatus}
                                                addFriend = {addFriend}
                                                background = {background}
                                            />
                                        </div>
                                })
                            }
                        </div>  
                    </div>
                </>
            }            
        </div>
        )
    }
    


export default Messages;