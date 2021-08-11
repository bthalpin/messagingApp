import React from 'react';
import './Friends.css';
import './colorScheme.css';

const Friend = ({friend,converse, route,unFriend,pendOrReq,i}) => {
  
    return(
        
        <div className = "radioButton" key={i}>
            {route==='mail'?
                <li>
                    <input 
                        type = "radio" 
                        name = "friend" 
                        id={friend} 
                        onClick = {()=>converse(friend)}
                    />
                    <label htmlFor={friend}>
                        {friend}
                    </label>
                </li>
       
            :
                <li>
                    <input 
                        type = "radio" 
                        name = "friend" 
                        id={friend} 
                        onClick = {()=>converse(friend)}
                    />
                    <label htmlFor={friend}>{friend}</label>
                    <button 
                        className = "friendButton" 
                        onClick = {()=>unFriend(friend,pendOrReq)}>
                            Delete
                    </button>
                </li>
       
            }
              </div>
    )
}

export default Friend;