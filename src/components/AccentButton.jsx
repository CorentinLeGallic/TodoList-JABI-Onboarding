import React from 'react';

// Button with a purple background, customizable through its label and additionalStyle props
const AccentButton = ({ label, handleClick=() => {}, additionalStyle={} }) => {
  return (
    <button className='accent-button' style={additionalStyle} onClick={handleClick}>{label}</button>
  )
}

export default AccentButton;