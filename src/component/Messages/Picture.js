import React from 'react';
import './Picture.css';
// width = "200rem"
const Picture = (source) => {
    // console.log(source)
    return (
        <div >
            <img className = "picture" alt = "picture" src = {source.source} ></img>
        </div>
    )
}

export default Picture;