import React from 'react';
// import '../styles/components/Logo.scss';


const Logo = ({ fontSize, additionalStyle={} }) => {
  return (
    <span className='logo' style={{ fontSize: fontSize, ...additionalStyle }}>Todo List</span>
  )
};

export default Logo;