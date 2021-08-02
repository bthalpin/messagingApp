import React, { useState,useEffect } from 'react';
import Messagebox from './Messagebox';
import './Message.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';



 

const Messages = ({user, currentMessage,pastMessages,setPastMessages,setCurrentMessage,currentPublicMessage,pastPublicMessages,setPastPublicMessages,setCurrentPublicMessage,deletePost,route, addFriend, conversation,setFilteredMessages,filteredMessages,publicStatus,setPublicStatus}) => {
    
    
    const [hiddenStatus,setHiddenStatus] = useState({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:' middle'})
    let offset = '';
    let background = '';

    useEffect(()=>{

        const currentTime = currentMessage.time
        
        if (currentMessage.message!==''){
            fetch('https://socially-distanced-server.herokuapp.com/friendmessage',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:user.username,
                    email:user.email.toUpperCase(),
                    message:currentMessage.message,
                    time:'currentTime',
                    likes:[]
                    })
                })
                .then(res=>res.json())
                .then(res=>{
                    // console.log('FROM DB',res)
                    setPastMessages(res)})
                .catch(err=>console.log(err))

        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:''}
        })
        }        
    },[currentMessage.time])

    useEffect(()=>{
        const currentTime = currentPublicMessage.time
        
        if (currentPublicMessage.message!==''){
            // console.log(currentPublicMessage.time,'MESSAGE')
            fetch('https://socially-distanced-server.herokuapp.com/publicmessage',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:user.username,
                    email:user.email.toUpperCase(),
                    message:currentPublicMessage.message,
                    time:currentTime,
                    likes:[]
                    })
                })
                .then(res=>res.json())
                .then(res=>{
                    // console.log('FROM DB',res)
                    setPastPublicMessages(res)})
                .catch(err=>console.log(err))
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
            return {...prevCurrentPublicMessage,time:Date().toLocaleString()}
        })
        :
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,time:Date().toLocaleString()}
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
        return JSON.parse(like).email!==user.email
        // for (let like in user.likes){
        //    if (JSON.parse(user.likes[like]).email===user.email){
        //        console.log(true)
        //    }
        // }
    }

    const addLike = (i,currentId) => {
        let contains=true
        
        // console.log('pushed',i,currentId,pastPublicMessages[i].likes[0])
        if (publicStatus){
            const newArr = [...pastPublicMessages]   
            if (newArr[i].likes){
                contains =  newArr[i].likes.every(checkLiked)
            }
            // console.log(contains)
            // const contains =34true
            if (!newArr[i].likes,contains ){
            //  (!newArr[i].likes[0] &&!newArr[i].likes.includes(user.email.toUpperCase()))){
            

            // MAKE FUNCTION


                fetch('https://socially-distanced-server.herokuapp.com/likes',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:user.username,
                        email:user.email,
                        id:currentId,
                        database:'publicmessages'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{ 
                        setPastPublicMessages(res)})
                    .catch(err=>console.log(err))
            
            }else{
                fetch('https://socially-distanced-server.herokuapp.com/dislike',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:user.username,
                        email:user.email,
                        id:currentId,
                        database:'publicmessages'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        // console.log('FROM DB',res)
                        setPastPublicMessages(res)})
                    .catch(err=>console.log(err))
            
            
            }
        }else if (!publicStatus){
            const newArr = [...filteredMessages]
            
            if (newArr[i].likes){
                contains =  newArr[i].likes.every(checkLiked)
            }
            // console.log(user,contains,'here')
            if (!newArr[i].likes || contains){
                fetch('https://socially-distanced-server.herokuapp.com/likes',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:user.username,
                        email:user.email,
                        id:currentId,
                        database:'friendmessage'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        // console.log('FROM DB',res)
                        setPastMessages(res)})
                    .catch(err=>console.log(err))
            }else{
                fetch('https://socially-distanced-server.herokuapp.com/dislike',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        name:user.username,
                        email:user.email,
                        id:currentId,
                        database:'friendmessage'
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        // console.log('FROM DB',res)
                        setPastMessages(res)})
                    .catch(err=>console.log(err))
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
                            <input id = "pic" className = {"textareapic public "+hiddenStatus.picture} cols="40" rows="6" onChange = {onInputChange} placeholder = "Enter Picture URL" value = {currentPublicMessage.message} autoFocus></input>
                            <textarea id="msg" className = {"textarea public "+hiddenStatus.message}  onChange = {onInputChange} value = {currentPublicMessage.message} autoFocus></textarea>
                        </div>
                    </div>
                    {/* <div className = "publicButton">
                        <button className = "disabledButtons">Public</button><button className = "publicButtons" onClick = {changePublicStatus}>Friends</button>
                    </div>             */}
                    <div className="commentsection">
                        <div className = "inputbox">                
                            <label className = {"msg "+hiddenStatus.submit} onClick = {()=>onSubmit(hiddenStatus.picture==="")}>Submit</label>
                            <label className = {"msg "+hiddenStatus.submit} onClick = {goBack}>Back</label>                            
                            <label htmlFor="msg" className = {"msg "+hiddenStatus.button} onClick = {()=>changeHidden(false)}>Message</label>
                            <label htmlFor ="pic" className = {"msg "+hiddenStatus.button} onClick = {()=>changeHidden(true)}>Picture</label>                            
                        </div>
            {/* {checkLiked()} */}
                        <div className="bigbox">
                            {pastPublicMessages.map((msg,i)=>{
                                const currentUser = pastPublicMessages.length - 1 -i
                                const currentId = pastPublicMessages[currentUser].id   
                                // const likeStatus = msg.likes.every(checkLiked())             
                                return <div key = {i}>
                                    <Messagebox 
                                        filteredMessages = {pastPublicMessages} 
                                        currentUser = {user.email} 
                                        username = {pastPublicMessages[currentUser].email} 
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
                                        // likeStatus = {likeStatus}
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
                    {/* <div className = "publicButton">
                        <button className = "publicButtons" onClick = {changePublicStatus}>Public</button><button className = "disabledButtons">Friends</button>
                    </div>             */}
                    <div className="commentsection">
                        <div className = "inputbox">
                            <label htmlFor ="friendmsg" className = {"msg "+hiddenStatus.button} onClick = {()=>changeHidden(false)}>Message</label>
                            <label htmlFor = "friendpic" className = {"msg "+hiddenStatus.button} onClick = {()=>changeHidden(true)}>Picture</label>
                            <label className = {"msg "+hiddenStatus.submit} onClick = {()=>onSubmit(hiddenStatus.picture==="")}>Submit</label>
                            <label className = {"msg "+hiddenStatus.submit} onClick = {goBack}>Back</label>
                        </div>                
                        <div className="bigbox">                    
                            {filteredMessages.map((message,i)=>{                
                                const currentUser = filteredMessages.length -1-i
                                const currentId = filteredMessages[currentUser].id                    
                                filteredMessages[currentUser].email.toUpperCase()===user.email.toUpperCase()?offset="sender":offset="recipient";
                                filteredMessages[currentUser].email.toUpperCase()===user.email.toUpperCase()?background="senderbackground":background="";                                
                                return <div key ={i} className = {offset}>
                                            <Messagebox 
                                                filteredMessages = {filteredMessages} 
                                                currentUser = {user.email} 
                                                username = {filteredMessages[currentUser].email} 
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