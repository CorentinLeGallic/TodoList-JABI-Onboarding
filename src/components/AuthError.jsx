import React from 'react';
import { FiAlertCircle } from "react-icons/fi";

const AuthError = ({ label, additionalStyle={} }) => {
  return (
    <div className='auth-error-container' style={additionalStyle}>
        <FiAlertCircle className='auth-error-circle' />
        <span className='auth-circle-label'>{label}</span>
    </div>
  )
}

export default AuthError;