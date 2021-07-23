import React from 'react';
import "./Message.css";
import Picture from './Picture';
import Like from '../../images/like.png';
import Liked from '../../images/liked.png';

const Messagebox = ({ route,text, username, time, i, deletePost,deleteMail,reply, addLike, count, currentUser,filteredMessages,background,publicStatus,pastPublicMessages}) => {
    return (
        <div className = "box">
            <div className = "smallbox">
                {/* {console.log(publicStatus,'user')} */}
                <div className = {"messageArea " +background}>
                    <div className = "text">
                        <div className = "textmessage">{text.includes('#img#')?<Picture source = {text.substr(5,text.length-1)}/>:text}</div>
                        {/* {console.log(text.substr(3,text.length-1))} */}
                    </div>
                    <div className = "deleteContainer">

                        {route === "home"
                            ?<div>{filteredMessages[i].email===currentUser
                                ?<button className = "deleteButton" id = {i} onClick = {()=>deletePost(i,publicStatus)}>x</button>
                                :<></>}
                            </div>
                    // publicStatus?(pastPublicMessages[i].email===currentUser?<button className = "deleteButton" id = {i} onClick = {()=>deletePost(i,publicStatus)}>x</button>:<></>):
                        
                            :<div><button className = "deleteButton" id = {i} onClick = {deleteMail}>X</button></div>
                            }
                    </div>
                    
                    
                </div>
                
                <div>
                    
                       
                </div>
                <div className = {"user " + background}>
                    
                    <p >{username}</p>
                    <p className='date'>{ time.substr(0,24) }</p>
                    
                </div>
                <div className={"likes "}>
                        {route === 'home'
                            // ?(count.includes(user)?<button onClick = {()=>addLike(i)}>Unlike</button>:<button onClick = {()=>addLike(i)}>Like</button>)
                            ?<button className = "likeButton" onClick = {()=>addLike(i)}>
                                {(count.includes(currentUser)
                                    ?<img src = {Liked} alt="Unlike" width="20rem"></img>
                                    :<img src = {Like} alt="like" width = "20rem"></img>)}
                            </button>
                            // :<button className = "likeButton" onClick = {()=>reply(username)}>Reply</button>
                            :<></>
                            }
                        
                        
                            
                        {route === 'home'
                            ?<div>
                                {count.length>4
                                ?`${count.length} Likes`
                                :(count.length>1
                                    ?(count.length>2
                                        ?count.join(', ')+' like this post'
                                        :count.join(' and ')+' like this post')
                                    :(count.length?count+' likes this post':''))}
                            </div>
                            :<></>
                            
                        
                        }
                </div>
                
                
            </div>
            
            
        </div>
    )
}

export default Messagebox;