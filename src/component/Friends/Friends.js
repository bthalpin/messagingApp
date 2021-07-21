import React from 'react';
import Friend from './Friend';
import './Friends.css';

const Friends = ({user,setUser,setPrivateMessage,setRoute}) => {
    const messageFriend = (friend) => {
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,recipientEmail:friend}
        })
        setRoute('mail')

        console.log('add')
    }

    const addFriend = () => {
        const newFriend = prompt('Enter the email address of your friend ')
        const newFriends = [...friends,newFriend]
        setUser((prevUser)=> {
            return {...prevUser,friends:newFriends}
        })
    }

    const { friends } = user
    return(
        <div className="mainfriend">
            <div className="friendtitlebox"><p className="friendtitle">Friends List</p></div>
        <div>
            <ul>
                {console.log(friends)}
                {friends.map((friend)=>{
                    return <Friend messageFriend = {messageFriend} friend = {friend} />
                })}
                {/* <Friend messageFriend = {messageFriend} /> */}
                {/* <li onClick = {()=>messageFriend(friends[0])}>{friends}</li> */}
                
                
            </ul>
            
        </div>
        <button onClick = {addFriend}>Add Friend</button>
        </div>
        
    )

}

export default Friends;