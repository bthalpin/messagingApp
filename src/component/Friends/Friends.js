import React, {useState,useEffect} from 'react';
import Friend from './Friend';
import Request from './Request';
import Pending from './Pending';
import './Friends.css';
import '../../colorScheme.css';


const Friends = ({user,addFriend,converse}) => {
    
   
    const { requests, pendingrequests } = user

    const unFriend = (friend) =>{
        
        fetch('https://socially-distanced-server.herokuapp.com/unfriend',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:user.email,
                friend:friend.toUpperCase()
                })
            })
            .catch(err=>console.log(err))
    }

    const acceptFriend = (friend) =>{        
        fetch('https://socially-distanced-server.herokuapp.com/acceptfriend',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:user.email,
                friend:friend
                })
            })
            .catch(err=>console.log(err))
    }


    const rejectFriend = (friend,pendOrReq) =>{      
        if (pendOrReq==='Request'){
            fetch('https://socially-distanced-server.herokuapp.com/reject',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:user.email,
                    friend:friend,
                    option:'request'
                    })
                })
                .catch(err=>console.log(err))
        }else{
            fetch('https://socially-distanced-server.herokuapp.com/reject',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:friend,
                    friend:user.email,
                    option:'pending'
                }
                    )
                })
                .catch(err=>console.log(err))
            }
        
        
    }

    const { friends } = user
    
    return(
            
        <div className = "maincomment">    
                <div className="mainFriend">
                            <div  className="">
                                <div >
                        
                                    {friends?

                                    // If the user has friends - loads the friend component for each contact
                                    <div>
                                        <div className="friendtitlebox"><p className="requesttitle">Contacts</p></div>
                                            <ul className = "scroll ">                            
                                                {friends.map((friend,i)=>{
                                                    return <Friend 
                                                                converse = {converse} 
                                                                friend = {friend} 
                                                                unFriend = {unFriend}
                                                                i={i} 
                                                            />
                                                    })
                                                }
                                             </ul>    
                                        </div>                                       
                                        :<></>
                                     }                        
            
                                    <button 
                                        className = "addFriend" 
                                        onClick = {()=>addFriend("No Names")}>
                                            Add Contact
                                    </button>

                                </div>                        
                                
                                {/* If there are any friend requests - loads request component for each request */}
                                {requests?
                                requests.length?
                                    <div className = "scroll">  
                                        <div className="friendtitlebox"><p className="requesttitle">Request</p></div>
                                        <ul className = "scroll">
                                            {requests.map((friend,i)=>{
                                                return <Request 
                                                            friend = {friend} 
                                                            rejectFriend = {rejectFriend} 
                                                            pendOrReq ={'Request'} 
                                                            acceptFriend = {acceptFriend}
                                                            i={i}
                                                        />
                                                })
                                            }
                                        </ul>
                                    </div>
                                    :<></>:<></>
                                }
                                
                                {/* If there are any pending requests - loads pending component for each pending request */}
                                {pendingrequests?
                                pendingrequests.length?
                                    <div className = "scroll">
                                        <div className="friendtitlebox"><p className="pendingtitle">Pending Request</p></div>
                                        <ul className = "scroll">
                                            {pendingrequests.map((friend,i)=>{
                                                return <Pending 
                                                            friend = {friend} 
                                                            rejectFriend = {rejectFriend} 
                                                            pendOrReq = {'Pending'}
                                                            i={i}
                                                        />
                                                })
                                            }
                                        </ul>
        
                                    </div>
                                    :<></>:<></>
                                }
                        
                            </div>
                </div>
        </div>
    )

}

export default Friends;