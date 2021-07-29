import React, {useState,useEffect} from 'react';
import Friend from './Friend';
import Request from './Request';
import Pending from './Pending';
import './Friends.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';
import friendpicture from "../../images/friend.png";


const arrow = "x";

const Friends = ({user,setUser,setPrivateMessage,route,setRoute, setConversation,addFriend,display}) => {
    const [friendList,setFriendList] = useState(display)
    const [uniqueRequests,setUniqueRequests] = useState([...new Set(user.requests)])
    const [uniquePending,setUniquePending] = useState([...new Set(user.pendingrequests)])
    // useEffect = (() =>{
    //     const uniqueRequests = [...new Set(requests)]
    //     const uniquePending = [...new Set(pendingrequests)]
    // },[])
    useEffect(() =>{
        setUniqueRequests([...new Set(requests)])
        setUniquePending([...new Set(pendingrequests)])
    },[user])

    

    const converse = (friend) => {
        toggleFriends()
        setConversation((prevConversation)=>{
            return {...prevConversation,you:friend}
        })
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,recipientEmail:friend}
        })
        setRoute('mail')

        console.log('add')
    }

    // const addFriend = () => {
    //     const newFriend = prompt('Enter the email address of your friend ')
    //     if (newFriend){
    //         const newFriends = [...friends,newFriend.toUpperCase()]
    //         setUser((prevUser)=> {
    //         return {...prevUser,friends:newFriends}
            
    //         })
    //         // setMyFriends((prevMyFriends)=>{
    //         //     return {...prevMyFriends,email:user.email,friends:newFriends}
        
    //     }
        
    // }

    const toggleFriends = () => {
        friendList?(setFriendList(false)):(setFriendList(true))
        // console.log('pressed', visibleFriends)
    }

    const unFriend = (friend) =>{
        fetch('http://localhost:3000/unfriend',{
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        email:user.email,
                        friend:friend.toUpperCase()
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        console.log('FROM request',res)
                        // const newFriends = [...user.friends,newFriend.toUpperCase()]
                        if (res){
                          setUser(res[0])
                        }
                        
                    
        
        
        }).catch(err=>console.log(err))
    }

    const acceptFriend = (friend) =>{
        
          fetch('http://localhost:3000/acceptfriend',{
                        method:'post',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            email:user.email,
                            friend:friend
                            })
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            console.log('ACCEPTED',res[0])
                            setUser(res[0])
                        
            
            
            }).catch(err=>console.log(err))
        alert(`Added ${friend} to your friends list`)
        
        
    }


    const rejectFriend = (friend,pendOrReq) =>{
        // let rejectInfo;
        if (pendOrReq==='Request'){
            fetch('http://localhost:3000/reject',{
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
                        console.log('FROM request',res.pendingrequests.pendingrequests[0])
                        // const newFriends = [...user.friends,newFriend.toUpperCase()]
                        if (res){
                          setUser(res[0])
                        }
                        
                    
        
        
        }).catch(err=>console.log(err))
        }else{
            fetch('http://localhost:3000/reject',{
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
                        console.log('FROM pendingrequest',res[0])
                        // const newFriends = [...user.friends,newFriend.toUpperCase()]
                        if (res){
                          setUser(res[0])
                        }
                        
                    
        
        
        }).catch(err=>console.log(err))
        }
        // console.log(rejectInfo,'rejectdata')
        
    }

    const { friends,requests,pendingrequests } = user
    
    return(
            <div className="fixed">
            {/* {console.log(friends,"friendlsist",user)} */}
            {friendList?
            <>
            <div className = "">
            <button className = "showFriend" onClick = {toggleFriends}><img className = "friendimg" src={friendpicture} alt="Friends" width = "35rem;"></img></button>
        </div>
            <div className = "friendList">
                <div  className="mainfriend">
                    <div >
                        {/* {console.log(route,'route')} */}
                        <div className="friendtitlebox"><p className="friendtitle">{route==="home"?"Friends List":"Contacts"}</p></div>
                        {friends?
                        <div className = "scroll">
                        <ul>
                            {console.log(friends)}
                            {friends.map((friend)=>{
                                return <Friend converse = {converse} friend = {friend} unFriend = {unFriend} />
                            })}
                            {/* <Friend messageFriend = {messageFriend} /> */}
                            {/* <li onClick = {()=>messageFriend(friends[0])}>{friends}</li> */}
                            
                            
                        </ul>
    
                    </div>
                    :<></>
                    }
                        
            
                        <button className = "addFriend" onClick = {()=>addFriend("No Names")}>Add Friend</button>
                    </div>
                        {console.log(requests,pendingrequests,'requests')}
                        {uniqueRequests && uniqueRequests[0]?
                            <div className = "scroll">  
                                <div className="friendtitlebox"><p className="friendtitle">Request</p></div>
                                        <ul>
                                            
                                            {/* {console.log(friends)} */}
                                            {uniqueRequests.map((friend)=>{
                                                return <Request friend = {friend} rejectFriend = {rejectFriend} pendOrReq ={'Request'} acceptFriend = {acceptFriend}/>
                                            })}
                                            {/* <Friend messageFriend = {messageFriend} /> */}
                                            {/* <li onClick = {()=>messageFriend(friends[0])}>{friends}</li> */}
                                            
                                            
                                        </ul>
                    
                                    </div>
                                    :<></>
                        }
                        {uniquePending&&uniquePending[0]?
                        <div className = "scroll">
                        <div className="friendtitlebox"><p className="friendtitle">Pending Request</p></div>
                            <ul>
                                
                                {console.log(pendingrequests,'ABOUT TO MAP')}

                                {uniquePending.map((friend)=>{
                                    return <Pending friend = {friend} rejectFriend = {rejectFriend} pendOrReq = {'Pending'}/>
                                })}
                                {/* <Friend messageFriend = {messageFriend} /> */}
                                {/* <li onClick = {()=>messageFriend(friends[0])}>{friends}</li> */}
                                
                                
                            </ul>
        
                        </div>
                        :<></>
                    }
                        
                </div>
                <button className = "hideFriend" onClick = {toggleFriends}>{arrow}</button>
            </div>
            </>
            :
            <div className = "">
                <button className = "showFriend" onClick = {toggleFriends}><img className = "friendimg" src={friendpicture} alt="Friends" width = "35rem;"></img></button>
            </div>
            }
            
            </div>
        
    )

}

export default Friends;