import React from 'react';
import './Friends.css';
import '../../colorScheme.css';

const Friend = ({friend,converse, route,unFriend,pendOrReq,i}) => {
  
    return(
        
        <div className = "radioButton" key={i}>

            {/* In mail component, lists contacts for each friend */}
            {route==='mail'?
                <li>
                    <input 
                        type = "radio" 
                        name = "friend" 
                        id={friend} 
                        onClick = {()=>converse(friend)}
                    />
                    <label className="contact" htmlFor={friend}>
                        {friend}
                    </label>
                </li>
       
            :
                // In contact page - lists contact for each friend and adds an unfriend button
                <li>
                    <input 
                        type = "radio" 
                        name = "friend" 
                        id={friend} 
                        onClick = {()=>converse(friend)}
                    />
                    <label className="contact" htmlFor={friend}>{friend}</label>
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