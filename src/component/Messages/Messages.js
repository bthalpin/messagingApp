import React, { useState,useEffect } from 'react';
import Messagebox from './Messagebox';
import './Message.css';



 

const Messages = ({user, currentMessage,pastMessages,setPastMessages,setCurrentMessage,currentPublicMessage,pastPublicMessages,setPastPublicMessages,setCurrentPublicMessage,deletePost,route}) => {
    const [filteredMessages,setFilteredMessages] = useState(pastMessages.filter((message)=>user.friends.includes(message.email)||user.email===message.email))
    const [publicStatus,setPublicStatus] = useState(true);
    const [hiddenStatus,setHiddenStatus] = useState({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
    // let hidePictureText = "textareahide";
    // let hideMessageText = "textareahide";

    useEffect(()=>{
        if (currentMessage.message!==''){
            setPastMessages([...pastMessages,currentMessage])
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:''}})
        }
        
        // console.log(pastMessages)
    },[currentMessage.time])

    useEffect(()=>{
        if (currentPublicMessage.message!==''){
            setPastPublicMessages([...pastPublicMessages,currentPublicMessage])
        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
            return {...prevCurrentPublicMessage,message:''}})
        }
        
        // console.log(pastMessages)
    },[currentPublicMessage.time])

    // useEffect(()=>{
    //     setFilteredMessages(pastMessages.filter((message)=>user.friends.includes(message.email)||user.email===message.email))
    // },[user.friends])

    useEffect(()=>{
        setFilteredMessages(()=>{
            return pastMessages.filter((message)=>user.friends.indexOf(message.email.toUpperCase())>-1||user.email===message.email)})
    },[user.friends,pastMessages])
    // useEffect(()=>{
    //     console.log(pastMessages)
    //     setPastMessages(pastMessages)
        // const tempMessages = pastMessages
        // console.log(tempMessages)
        // console.log(pastMessages[pastMessages.length-1])
        // pastMessages[pastMessages.length-1]==={username: "", email: "", message: "", time: ""}?
        // setPastMessages([])
        // :console.log(pastMessages)
        // :setPastMessages(pastMessages)
    // },[])
    
    
    // let filteredMessages = 
    console.log('filtered',filteredMessages,pastMessages,'user',user.email)

    const onSubmit = (picture) => {
        // console.log(currentObject)
        if (picture && (currentPublicMessage.message!=="" || currentMessage.message !=="")){
            publicStatus?setCurrentPublicMessage((prevCurrentPublicMessage)=>{
                return {...prevCurrentPublicMessage,message:"#img#"+currentPublicMessage.message}})
            :setCurrentMessage((prevCurrentMessage)=>{
                return {...prevCurrentMessage,message:"#img#"+currentMessage.message}})
        }
        console.log(currentPublicMessage,'public')
        publicStatus?setCurrentPublicMessage((prevCurrentPublicMessage)=>{
            return {...prevCurrentPublicMessage,time:Date().toLocaleString()}})
        :setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,time:Date().toLocaleString()}})
        // console.log('submit',pastPublicMessages)
        setHiddenStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
            
        
        
                
                
            
        
        // console.log(pastObject[3].message)
        // setPastMessages([...pastMessages,<Messagebox user = {username} text ={currentMessage} currentTime = {Date().toLocaleString()} />])
        // setCurrentMessage('')
        
    }
    const onInputChange = (event) => {
        // setCurrentMessage(event.target.value)
        publicStatus?
        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
            return {...prevCurrentPublicMessage,message:event.target.value}})
        :setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:event.target.value}})
            // setCurrentObject((prevCurrentObject)=>{
            //     return {...prevCurrentObject,time:Date().toLocaleString()}})
        
    }
    
    const addLike = (i) => {
        // let x = pastMessages[i].count
        // x.push(user)
        // console.log(x,pastMessages[i])
        // setPastMessages([...pastMessages.slice,pastMessages[i].count=x])
        if (publicStatus){
        const newArr = [...pastPublicMessages]
        if (!newArr[i].count.includes(user.email)){
            let counting = [...newArr[i].count,user.email]
            newArr[i]={...newArr[i],count:counting}
            console.log(counting)
            setPastPublicMessages(newArr)
        }else{
            let counting = newArr[i].count.filter((currentuser)=>currentuser!==user.email)
            newArr[i]={...newArr[i],count:counting}
            // console.log(filteredArr)
            setPastPublicMessages(newArr)
            
        }}else{
        const newArr = [...pastMessages]
        // setPastMessages(pastMessages.map(object=>{
        //     return (object.count.includes(user)
        //     ?{...object,count:object.count.filter((username)=>username!==user)}
        //     :{...object,count:object.count.push(user)})
        // }))
        // console.log(pastMessages)
        // let newLike = newArr[i].count
        // console.log(i,newArr[i].count,newArr,'before')
        // if (newArr[i].count.includes(user)){
        //     newArr[i].count.filter((currentUser)=>currentUser!==user)
        // }else{
            // newArr[i].count.push(user)
        // }
        // console.log(newArr[i].count,newArr,'during')
        // newArr[i].count=newLike
        // console.log(newLike,newArr,'after')
        // newArr[i].assign()
        // if (newArr[i].count.includes(user)){
        //     newArr[i].count.filter((currentuser)=>currentuser!==user)
            
        // }else{
            // newArr[i].count.Object.assign(user)
        // }


        if (!newArr[i].count.includes(user.email)){
            let counting = [...newArr[i].count,user.email]
            newArr[i]={...newArr[i],count:counting}
            console.log(counting)
            setPastMessages(newArr)
        }else{
            let counting = newArr[i].count.filter((currentuser)=>currentuser!==user.email)
            newArr[i]={...newArr[i],count:counting}
            // console.log(filteredArr)
            setPastMessages(newArr)
            
        }
        

        
        // console.log(newArr)
        // setPastMessages((prevPastMessages)=>{
            // return [...prevPastMessages,{PastMessages[i].count:PastMessages[i].count++}]
    }
}

    // componentDidUpdate=()=>{
    //     fetch('http:localhost:3000/',{
    //         method:'get',
    //         headers:{'Content-type':'application/json'}
    //     })
    //     .then(res=>res.json())
    //     .then(response=>console.log(response))
    //     // .then(res=>res.forEach((text)=>{
    //     //     <Messagebox user = {text.user} text ={text.text} currentTime = {text.currentTime} />
   
    //     // })
    //     // )
    //     .catch(err=>console.log(err))
    //      }

    // render(){
    
    const changePublicStatus = () => {
        publicStatus?setPublicStatus(false):setPublicStatus(true)
    }

    // const onChoice =(picture) =>{
    //     picture?
        
    // }
    const changeHidden = (picture) => {
        if(picture){
           setHiddenStatus({picture:"",message:"textareahide",button:"textareahide",submit:""})
        }else{
            setHiddenStatus({picture:"textareahide",message:"",button:"textareahide",submit:""})
        }
        
        // console.log(hideMessageText,hidePictureText)
        
    }

    const goBack = () => {
        setHiddenStatus({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})
        publicStatus?
        setCurrentPublicMessage((prevCurrentPublicMessage)=>{
            return {...prevCurrentPublicMessage,message:''}})
        :setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:''}})
    }

        return(
            <div className = "maincomment">
                {/* <h1>Message Board</h1> */}
            
            
            {publicStatus?
            <>
            <div className = "inputbox">
            <div>
                <button className = {"submitbutton "+hiddenStatus.button} onClick = {()=>changeHidden(false)}>Message</button>
                <button className = {"submitbutton "+hiddenStatus.button} onClick = {()=>changeHidden(true)}>Picture</button>
                <button className = {"submitbutton "+hiddenStatus.submit} onClick = {()=>onSubmit(hiddenStatus.picture==="")}>Submit</button>
                <button className = {"submitbutton "+hiddenStatus.submit} onClick = {goBack}>Back</button>
                </div>
                <div>
                <input className = {"textareapic "+hiddenStatus.picture} cols="40" rows="6" onChange = {onInputChange} placeholder = "Enter Picture URL" value = {currentPublicMessage.message}></input>
                <input className = {"textarea "+hiddenStatus.message} cols="40" rows="6" onChange = {onInputChange} value = {currentPublicMessage.message}></input>
                </div>
                
                
                
            </div>
            <div className = "publicButton">
                <button className = "disabledButtons">Public</button><button className = "publicButtons" onClick = {changePublicStatus}>Friends</button>
            </div>
            
            <div className="commentsection">
            {/* <div className="filter">
            <label name="filter" className = "filterLabel">Filter Messages</label>
            <input name = "filter" ></input>
            </div> */}
            
            <div className="bigbox">
            {pastPublicMessages.map((msg,i)=>{
                const currentUser = pastPublicMessages.length-1-i
                console.log('username',pastPublicMessages[currentUser])
                return <div>
                            <Messagebox 
                                filteredMessages = {pastPublicMessages} 
                                currentUser = {user.email} 
                                username = {pastPublicMessages[currentUser].email} 
                                text ={pastPublicMessages[currentUser].message} 
                                time = {pastPublicMessages[currentUser].time} 
                                i = {currentUser} 
                                deletePost = {deletePost} 
                                route={route} 
                                addLike = {addLike} 
                                count = {pastPublicMessages[currentUser].count} 
                                publicStatus = {publicStatus}
                            />
                        </div>
            
            })}
            </div>
            {/* {console.log('message',pastMessages)} */}
            
            {/* {pastMessages.map((message,i)=>{
                return <div id ={i} key ={i}>{pastMessages[pastMessages.length-i-1]}<button id = {i} onClick = {deletePost}>Delete</button></div>
            })} */}
        </div>
        </>
            :
            <>
            <div className = "inputbox">

                <input 
                    className = {"textarea "+hiddenStatus.picture} cols="40" rows="6" 
                    onChange = {onInputChange} 
                    placeholder = "Enter Picture URL"
                    value = {currentMessage.message}
                ></input>

                <input 
                    className = {"textarea "+hiddenStatus.message} cols="40" rows="6" 
                    onChange = {onInputChange} 
                    value = {currentMessage.message}
                ></input>
                
                <button className = {"submitbutton "+hiddenStatus.button} onClick = {()=>changeHidden(false)}>Message</button>
                <button className = {"submitbutton "+hiddenStatus.button} onClick = {()=>changeHidden(true)}>Picture</button>
                <button className = {"submitbutton "+hiddenStatus.submit} onClick = {()=>onSubmit(hiddenStatus.picture==="")}>Submit</button>
                <button className = {"submitbutton "+hiddenStatus.submit} onClick = {goBack}>Back</button>

            </div>
            <div className = "publicButton">
                <button className = "publicButtons" onClick = {changePublicStatus}>Public</button><button className = "disabledButtons">Friends</button>
            </div>
            
            <div className="commentsection">
                {/* <div className="filter">
                <label name="filter" className = "filterLabel">Filter Messages</label>
                <input name = "filter" ></input>
                </div> */}
                
                <div className="bigbox">

                    {filteredMessages.map((msg,i)=>{
                        const currentUser = filteredMessages.length-1-i
                        console.log('current',publicStatus)
                            return <div>
                                    <Messagebox 
                                        filteredMessages = {filteredMessages} 
                                        currentUser = {user.email} 
                                        username = {filteredMessages[currentUser].email} 
                                        text ={filteredMessages[currentUser].message} 
                                        time = {filteredMessages[currentUser].time} 
                                        i = {currentUser} 
                                        deletePost = {deletePost} 
                                        route={route} 
                                        addLike = {addLike} 
                                        count = {filteredMessages[currentUser].count} 
                                    />
                                </div>
                
                            })
                    }
                </div>
                {console.log('message',pastMessages)}
                
                {/* {pastMessages.map((message,i)=>{
                    return <div id ={i} key ={i}>{pastMessages[pastMessages.length-i-1]}<button id = {i} onClick = {deletePost}>Delete</button></div>
                })} */}
            </div>
            </>
            }
            
            </div>
        )
    }
    


export default Messages;