import React from 'react';

const AccentButton = ({ label, handleClick=() => {}, additionalStyle={} }) => {
  return (
    <button className='accent-button' style={additionalStyle} onClick={handleClick}>{label}</button>
  )
}

export default AccentButton;