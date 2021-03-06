import React from 'react';
import './Login.css';
import '../../colorScheme.css';

const Inputblock = ({inputType,onChanges,value}) => {
    return (
        
        // Input component for each input field
        <div className="inputBlock">
            <label className="inputLabel" htmlFor={inputType}>{inputType}</label>
            <input 
                className="inputField" 
                type= {inputType}
                name={inputType}  
                id={inputType}
                value={value}
                onChange = {onChanges}
            />
        </div>
                
    )
}

export default Inputblock;