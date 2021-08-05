import React from 'react';
import './Friends.css';
import '../../colors2.css';

const Pending = ({friend, rejectFriend,pendOrReq}) => {
    
    return(
        <div className = "radioButton">
             <li>
                 <input 
                    type = "radio" 
                    name = "friend" 
                    id={friend} 
                />
                <label htmlFor={friend}>{friend}</label>
                <button 
                    className = "friendButton" 
                    onClick = {()=>rejectFriend(friend,pendOrReq)}>
                        X
                </button>
            </li>
        </div>
    )
}

export default Pending;