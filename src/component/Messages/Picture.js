import React from 'react';
import './Picture.css';

const Picture = (source) => {
    console.log(source)
    return (
        <div >
            <img className = "picture" alt = "picture" src = {source.source} width = "200rem"></img>
        </div>
    )
}

export default Picture;