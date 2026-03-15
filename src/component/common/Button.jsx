import React from "react";

const Button = ({ text, icon, className }) => {
    return (
        <button
            className={`flex items-center gap-2 px-5 py-2 rounded-lg bg-green-500 text-white font-semibold ${className}`}
        >
            {icon && <span>{icon}</span>}
            {text}
        </button>
    );
};

export default Button;