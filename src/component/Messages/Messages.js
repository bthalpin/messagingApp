import React, {useEffect } from 'react';
import Messagebox from './Messagebox';
import './Message.css';



 

const Messages = ({user, currentMessage,pastMessages,setPastMessages,setCurrentMessage,deletePost,route}) => {
    useEffect(()=>{
        if (currentMessage.message!==''){
            setPastMessages([...pastMessages,currentMessage])
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:''}})
        }
        
        // console.log(pastMessages)
    },[currentMessage.time])

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
    
    

    const onSubmit = () => {
        // console.log(currentObject)
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,time:Date().toLocaleString()}})
        // console.log('submit',currentObject)
            
        
        
                
                
            
        
        // console.log(pastObject[3].message)
        // setPastMessages([...pastMessages,<Messagebox user = {username} text ={currentMessage} currentTime = {Date().toLocaleString()} />])
        // setCurrentMessage('')
        
    }
    const onInputChange = (event) => {
        // setCurrentMessage(event.target.value)
        setCurrentMessage((prevCurrentMessage)=>{
            return {...prevCurrentMessage,message:event.target.value}})
            // setCurrentObject((prevCurrentObject)=>{
            //     return {...prevCurrentObject,time:Date().toLocaleString()}})
        
    }
    
    const addLike = (i) => {
        // let x = pastMessages[i].count
        // x.push(user)
        // console.log(x,pastMessages[i])
        // setPastMessages([...pastMessages.slice,pastMessages[i].count=x])
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


        if (!newArr[i].count.includes(user)){
            let counting = [...newArr[i].count,user]
            newArr[i]={...newArr[i],count:counting}
            console.log(counting)
            setPastMessages(newArr)
        }else{
            let counting = newArr[i].count.filter((currentuser)=>currentuser!==user)
            newArr[i]={...newArr[i],count:counting}
            // console.log(filteredArr)
            setPastMessages(newArr)
            
        }
        

        
        // console.log(newArr)
        // setPastMessages((prevPastMessages)=>{
            // return [...prevPastMessages,{PastMessages[i].count:PastMessages[i].count++}]
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
        return(
            <div className = "maincomment">
            <div className = "inputbox">
                <input className = "textarea" cols="40" rows="6" onChange = {onInputChange} value = {currentMessage.message}></input>
                <button className = "submitbutton" onClick = {onSubmit}>Submit</button>
            </div>
            <div className="commentsection">
                {/* <div className="filter">
                <label name="filter" className = "filterLabel">Filter Messages</label>
                <input name = "filter" ></input>
                </div> */}
                <div>
                {pastMessages.map((msg,i)=>{
                    const currentUser = pastMessages.length-1-i
                    // console.log('current',pastMessages[currentUser])
                    return <div><Messagebox pastMessages = {pastMessages} currentUser = {user} username = {pastMessages[currentUser].email} text ={pastMessages[currentUser].message} time = {pastMessages[currentUser].time} i = {currentUser} deletePost = {deletePost} route={route} addLike = {addLike} count = {pastMessages[currentUser].count}/></div>
                
                })}
                </div>
                {console.log('message',pastMessages)}
                
                {/* {pastMessages.map((message,i)=>{
                    return <div id ={i} key ={i}>{pastMessages[pastMessages.length-i-1]}<button id = {i} onClick = {deletePost}>Delete</button></div>
                })} */}
            </div>
            </div>
        )
    }
    


export default Messages;