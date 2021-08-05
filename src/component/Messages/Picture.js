import React from 'react';
import './Picture.css';

const Picture = (source) => {
    return (
        <div >
            <img className = "picture" alt = "picture" src = {source.source} ></img>
        </div>
    )
}

export default Picture;