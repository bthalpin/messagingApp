import React from 'react';
import './Friends.css';
// import '../../colors.css';
import '../../colors2.css';
// import '../../colors3.css';

const Friend = ({friend,converse, route}) => {
    console.log(friend)
    return(
        <div className = "radioButton">
             <li><input type = "radio" name = "friend" id={friend} onClick = {()=>converse(friend)}/><label htmlFor={friend}>{friend}</label></li>
        </div>
    )
}

export default Friend;