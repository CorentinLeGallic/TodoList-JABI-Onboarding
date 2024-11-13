import React from 'react';

// The app's logo, customizable through its fontSize and additionalStyle props
const Logo = ({ fontSize, additionalStyle={} }) => {
  return (
    <span className='logo' style={{ fontSize: fontSize, ...additionalStyle }}>Todo List</span>
  )
};

export default Logo;