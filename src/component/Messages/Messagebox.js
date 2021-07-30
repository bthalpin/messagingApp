import React from 'react';
import "./Message.css";
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';
import Picture from './Picture';
import Like from '../../images/like.png';
import Liked from '../../images/liked.png';

const Messagebox = ({ route,text, username, time, i, deletePost,deleteMail, addLike, currentUser,currentId,filteredMessages,background,publicStatus,pastPublicMessages,addFriend,likes}) => {
    return (
        <div className = "box">
            <div className = "smallbox">
               <div className = {"messageArea " +background}>
                    <div className = "text">
                        <div className = "textmessage">{text.includes('#img#')? <Picture source = {text.substr(5,text.length-1)}/>:text}</div>
                        
                    </div>
                    
                   
                    
                </div>
                
                <div className = {"user " + background}>                    
                    <p onClick={()=>addFriend(username)}>{username.toUpperCase().substr(0,username.indexOf('@'))}</p>
                    <p className='date'>{time.substr(0,16)}</p>
                </div>
                <div className={"likes "}>
                        {route === 'home'
                            ?<button className = "likeButton" onClick = {()=>addLike(i,currentId)}>
                                {likes?(likes.includes(currentUser)
                                    ?<img src = {Liked} alt="Unlike" width="20rem"></img>
                                    :<img src = {Like} alt="like" width = "20rem"></img>):<img src = {Like} alt="like" width = "20rem"></img>}
                            </button>
                            :<></>}
                    <div className = "likedelete">                    
                        {route === 'home'
                            ?likes
                                ?(<div className = "liketext">
                                    {likes.length>4
                                        ?`${likes.length} Likes`
                                        :(likes.length>1
                                            ?(likes.length>2
                                                ?likes.join(', ')+' like this post'
                                                :likes.join(' and ')+' like this post')
                                            :(likes.length?likes+' likes this post':''))}
                                </div>
                                 ):<></>
                            :<></>
                        }
                        <div className = "deleteContainer">
                            {route === "home"
                                ?<div>{filteredMessages[i].email===currentUser
                                    ?<div className = "deleteBackground">
                                        <button className = "deleteButton" id = {i} onClick = {()=>deletePost(i,publicStatus,currentId)}>x</button>
                                    </div>
                                    :<></>}
                                </div>                        
                                :<div className = "deleteBackground">
                                    <button className = "deleteButton" id = {i} onClick = {()=>deleteMail(currentId)}>X</button>
                                </div>
                            }
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Messagebox;