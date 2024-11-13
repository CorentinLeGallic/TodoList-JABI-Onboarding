import React, { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import AuthError from './AuthError';

const AuthInput = ({ label, value, handleInputChange, placeholder="", error, isSecret=false}) => {

  const [showInput, setShowInput] = useState(isSecret);

  const handleInputReveal = () => {
    setShowInput(!showInput)
  }

  return (
    <div className='auth-input-container'>
      <span className='auth-input-label'>{label}</span>
      <div className='auth-input-wrapper'>
        {showInput ? (
          <input className='auth-input' type="password" value={value} onChange={handleInputChange} placeholder={placeholder} />
        ) : (
          <input className='auth-input' type="text" value={value} onChange={handleInputChange} placeholder={placeholder} />
        )}
        {isSecret && value.length > 0 && (
          <button className='input-reveal-button' onClick={handleInputReveal}>
            <IoEyeOutline className='input-reveal-icon' width={30} />
          </button>
        )}
      </div>
      {error && <AuthError label={error} />}
    </div>
  )
}

export default AuthInput;