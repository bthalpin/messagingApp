import React from 'react';
import './Friends.css';
import '../../colorScheme.css';

const Pending = ({friend, rejectFriend,pendOrReq,i}) => {
    
    return(
        <div className = "radioButton" key={i}>
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
                        Undo
                </button>
            </li>
        </div>
    )
}

export default Pending;