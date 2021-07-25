import React, {useState} from 'react';
import Friend from './Friend';
import './Friends.css';
// import '../../colors.css';
// import '../../colors2.css';
import '../../colors3.css';
import friendpicture from "../../images/friend.png";


const arrow = "<<";

const Friends = ({user,setUser,setPrivateMessage,route,setRoute, setConversation,addFriend}) => {
    const [friendList,setFriendList] = useState(false)

    const converse = (friend) => {
        setConversation((prevConversation)=>{
            return {...prevConversation,you:friend,me:user.email}
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

    const { friends } = user
    return(
            <div className="fixed">
            {console.log(friends,"friendlsist",user)}
            {friendList?
            <div className = "friendList">
                <div  className="mainfriend">
                    <div >
                        {console.log(route,'route')}
                        <div className="friendtitlebox"><p className="friendtitle">{route==="home"?"Friends List":"Contacts"}</p></div>
                        <div className = "scroll">
                            <ul>
                                {console.log(friends)}
                                {friends.map((friend)=>{
                                    return <Friend converse = {converse} friend = {friend} route = {route} />
                                })}
                                {/* <Friend messageFriend = {messageFriend} /> */}
                                {/* <li onClick = {()=>messageFriend(friends[0])}>{friends}</li> */}
                                
                                
                            </ul>
        
                        </div>
            
                        <button className = "addFriend" onClick = {()=>addFriend("No Names")}>Add Friend</button>
                    </div>
                </div>
                <button className = "hideFriend" onClick = {toggleFriends}>{arrow}</button>
            </div>
            :
            <div className = "">
                <button className = "showFriend" onClick = {toggleFriends}><img className = "friendimg" src={friendpicture} alt="Friends" width = "35rem;"></img></button>
            </div>
            }
            
            </div>
        
    )

}

export default Friends;