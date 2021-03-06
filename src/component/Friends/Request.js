import React from 'react';
import './Friends.css';
import '../../colorScheme.css';

const Request = ({friend, rejectFriend,acceptFriend,pendOrReq,i}) => {
 
    return(
        <div className = "radioButton" key={i}>
            <li>
                <input 
                    type = "radio" 
                    name = "friend" 
                    id={friend} 
                />
                <label 
                    className="contact"
                    htmlFor={friend}>{friend}</label>
                <button 
                    className = "friendButton" 
                    onClick = {()=>acceptFriend(friend)}>
                        Accept
                </button>
                <button 
                    className = "friendButton" 
                    onClick = {()=>rejectFriend(friend,pendOrReq)}>
                        Decline
                </button>
            </li>
        </div>
    )
}

export default Request;