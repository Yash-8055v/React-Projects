import React from 'react';
import "./color.css"


function Button({colorName, acceptColorInContainer}) {
  
  const sendColorToContainer = (event) => {
    acceptColorInContainer(event.target.textContent);
  }

  return (
    <button 
    className='button' 
    style={{ backgroundColor: colorName.toLowerCase() }}
    onClick={sendColorToContainer}
    >
    {colorName}
    </button>
  )
}

export default Button