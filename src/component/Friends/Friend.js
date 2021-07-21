import React from 'react';

const Friend = ({friend,messageFriend}) => {
    console.log(friend)
    return(
        <div>
             <li onClick = {()=>messageFriend(friend)}>{friend}</li>
        </div>
    )
}

export default Friend;