import React from 'react';
import "./Message.css";
import '../../colors2.css';
import Picture from './Picture';
import Like from '../../images/like.png';
import Liked from '../../images/liked.png';
import Delete from '../../images/delete.png';

const Messagebox = ({ route,text, 
                    email, time, i, 
                    deletePost,deleteMail, 
                    addLike, currentUser,
                    currentId,filteredMessages,
                    background,publicStatus,
                    addFriend, likes}) => {
   
    return (
        <div className = "box">
            <div className = "smallbox">
               <div className = {"messageArea " +background}>
                    <div className = "text">
                        <div className = "textmessage">
                            {text.includes('#img#')
                                ? <Picture source = {text.substr(5,text.length-1)}/>
                                :<p>{text}</p>}
                        </div>                        
                    </div>              
                </div>
                
                <div className = {"user " + background}>                    
                    <p className = "addFriend" onClick={()=>addFriend(email)}>{email.toUpperCase().substr(0,email.indexOf('@'))}</p>
                    <p className='date'>{time}</p>
                </div>
               
                <div className={"likes "}>
                        {route === 'home'||route==='friend'
                            ?<div className = "likeButton" onClick = {()=>addLike(i,currentId)}>
                                {likes?JSON.stringify(likes).includes(currentUser)
                                        ?<img src = {Liked} alt="Unlike" width="23rem"></img>
                                        :<img src = {Like} alt="like" width = "23rem"></img>
                                        :<img src = {Like} alt="like" width = "23rem"></img>}
                            </div>
                            
                            :<></>}
                    <div className = "likedelete">                    
                        {route === 'home'||route==='friend'
                            ?likes
                                ?(<div className = "liketext">
                                    {likes.length>=4
                                        ?`${likes.length} Likes`
                                        :(likes.length>1
                                            ?(likes.length>2
                                                ?JSON.parse(likes[0]).name+', '+JSON.parse(likes[1]).name+', and '+JSON.parse(likes[2]).name+' like this post'
                                                :JSON.parse(likes[0]).name+' and '+JSON.parse(likes[1]).name+' like this post')
                                            :(likes.length?JSON.parse(likes).name+' likes this post':''))}
                                </div>
                                 ):<></>
                            :<></>
                        }
                        <div className = "deletContainer">
                            {route === "home"||route==='friend'
                                ?<div>{filteredMessages[i].email===currentUser
                                    ?
                                    // <div className = "deleteBackground">
                                        <div 
                                            className = "deleteButton" 
                                            id = {i} 
                                            onClick = {()=>deletePost(i,publicStatus,currentId)}>
                                                <img src={Delete} alt="delete" width="22rem"></img>
                                        </div>
                                    // </div>
                                    
                                    :<></>}
                                </div>                        
                                :
                                // <div className = "deleteBackground">
                                    <div 
                                        className = "deleteButton" 
                                        id = {i} 
                                        onClick = {()=>deleteMail(currentId)}>
                                            <img src={Delete} alt="delete" width="22rem"></img>
                                    </div>
                                // </div>
                            }
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Messagebox;