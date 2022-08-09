import React from "react";
import '../stylesheets/Button.css';

function Button({ text, itIsClickButton, handleClick }) {
    return (
        <button className={ itIsClickButton ? 'click-button' : 'reset-button' }
        onClick={handleClick}>
         {text}
        </button>
    )
} 

export default Button;