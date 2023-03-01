import React from 'react';
import './Input.css';
export const Input = ({value,onChange}) => {
    return (
        <div className="exchange_input">
            <div className="input">
                <input type="number" value={value} onChange={onChange}/>
            </div>
        </div>
    );
};