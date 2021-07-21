import React from 'react';

const Picture = (source) => {
    console.log(source)
    return (
        <div>
            <img alt = "picture" src = {source.source} width = "200em"></img>
        </div>
    )
}

export default Picture;