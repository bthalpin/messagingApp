import React, {useState} from 'react';
import Friend from './Friend';
import './Friends.css';
import friendpicture from "../../images/friend.png";


const arrow = "<<";

const Friends = ({user,setUser,setPrivateMessage,setRoute}) => {
    const [friendList,setFriendList] = useState(false)

    const messageFriend = (friend) => {
        setPrivateMessage((prevPrivateMessage)=>{
            return {...prevPrivateMessage,recipientEmail:friend}
        })
        setRoute('mail')

        console.log('add')
    }

    const addFriend = () => {
        const newFriend = prompt('Enter the email address of your friend ')
        const newFriends = [...friends,newFriend.toUpperCase()]
        setUser((prevUser)=> {
            return {...prevUser,friends:newFriends}
        })
    }

    const toggleFriends = () => {
        friendList?(setFriendList(false)):(setFriendList(true))
        // console.log('pressed', visibleFriends)
    }

    const { friends } = user
    return(
            <div className="fixed">
            {/* {console.log(visibleFriends)} */}
            {friendList?
            <div className = "friendList">
                <div  className="mainfriend">
                    <div >
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
            
                        <button className = "addFriend" onClick = {addFriend}>Add Friend</button>
                    </div>
                </div>
                <button className = "hideFriend" onClick = {toggleFriends}>{arrow}</button>
            </div>
            :
            <div className = "">
                <button className = "showFriend" onClick = {toggleFriends}><img src={friendpicture} alt="Friends" width = "35rem;"></img></button>
            </div>
            }
            
            </div>
        
    )

}

export default Friends;