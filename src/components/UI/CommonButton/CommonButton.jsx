import React from 'react';
import './CommonButton.css';
export const CommonButton = ({title}) => {
    return (
        <div className="exchange_btn">
            <div className="__btn">{title}</div>
        </div>
    );
};