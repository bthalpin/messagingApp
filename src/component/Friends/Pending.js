import React from 'react';
import './Friends.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';

const Pending = ({friend, rejectFriend}) => {
    // console.log(friend)
    return(
        <div className = "radioButton">
             <li><input type = "radio" name = "friend" id={friend} /><label htmlFor={friend}>{friend}</label><button className = "friendButton" onClick = {()=>rejectFriend(friend)}>X</button></li>
        </div>
    )
}

export default Pending;