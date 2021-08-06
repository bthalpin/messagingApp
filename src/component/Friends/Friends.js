import React, {useState,useEffect} from 'react';
import Friend from './Friend';
import Request from './Request';
import Pending from './Pending';
import './Friends.css';
import '../../colors2.css';


const arrow = "x";

const Friends = ({user,addFriend,converse}) => {
    
    const [uniqueRequests,setUniqueRequests] = useState([...new Set(user?.requests)])
    const [uniquePending,setUniquePending] = useState([...new Set(user?.pendingrequests)])
   
    useEffect(() =>{
        setUniqueRequests([...new Set(user.requests)])
        setUniquePending([...new Set(user.pendingrequests)])
    },[user])


    const unFriend = (friend) =>{
        
        fetch('http://localhost:3005/unfriend',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:user.email,
                friend:friend.toUpperCase()
                })
            })
            .then(res=>res.json())
            .then(res=>{                
            }).catch(err=>console.log(err))
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
            .then(res=>res.json())
            .then(res=>{
            }).catch(err=>console.log(err))
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
                }
                    )
                })
                .then(res=>res.json())
                .then(res=>{
                    
                }).catch(err=>console.log(err))
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
                .then(res=>res.json())
                .then(res=>{
                   
                }).catch(err=>console.log(err))
            }
        
        
    }

    const { friends } = user
    
    return(
            
        <div className = "maincomment">                
                
                
               
                <div className="commentsection">
                    
        
                    <div className="">
                    <div className = "">
                            <div  className="">
                                <div >
                        
                                    {friends?
                                        <div >
                                            <ul className = "scroll">                            
                                                {friends.map((friend)=>{
                                                    return <Friend 
                                                                converse = {converse} 
                                                                friend = {friend} 
                                                                unFriend = {unFriend} 
                                                            />
                                                    })
                                                }
                                             </ul>
    
                                        </div>
                                        :<></>
                                     }
                        
            
                                    <button className = "addFriend" onClick = {()=>addFriend("No Names")}>Add Friend</button>
                                </div>
                        
                                {uniqueRequests && uniqueRequests[0]?
                                    <div className = "scroll">  
                                        <div className="friendtitlebox"><p className="requesttitle">Request</p></div>
                                        <ul className = "scroll">
                                            {uniqueRequests.map((friend)=>{
                                                return <Request 
                                                            friend = {friend} 
                                                            rejectFriend = {rejectFriend} 
                                                            pendOrReq ={'Request'} 
                                                            acceptFriend = {acceptFriend}
                                                        />
                                                })
                                            }
                                        </ul>
                                    </div>
                                    :<></>
                                }
                                {uniquePending&&uniquePending[0]?
                                    <div className = "scroll">
                                        <div className="friendtitlebox"><p className="pendingtitle">Pending Request</p></div>
                                        <ul className = "scroll">
                                            {uniquePending.map((friend)=>{
                                                return <Pending 
                                                            friend = {friend} 
                                                            rejectFriend = {rejectFriend} 
                                                            pendOrReq = {'Pending'}
                                                        />
                                                })
                                            }
                                        </ul>
        
                                    </div>
                                    :<></>
                                }
                        
                            </div>
                          
          
    </div>
    </div>
    </div></div>
    )

}

export default Friends;