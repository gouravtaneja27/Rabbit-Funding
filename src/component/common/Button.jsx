import React from 'react'


const Button = ({ className, text, icon }) => {
    return (
        <button className={`cursor - pointer ${className}`}> { text }  </button >
  )
}

export default Button