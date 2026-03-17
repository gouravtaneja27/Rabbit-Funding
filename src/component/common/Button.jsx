import React from "react";
const Button = ({ text, icon, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={` ${className}`}
        >
            {text}
            {icon && <span className="">{icon}</span>}
        </button>
    );
};

export default Button;