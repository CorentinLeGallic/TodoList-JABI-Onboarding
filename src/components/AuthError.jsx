import React from 'react';
import { FiAlertCircle } from "react-icons/fi";

// The authentification error, customizable through its label and additionalStyle props
const AuthError = ({ label, additionalStyle={} }) => {
  return (
    <div className='auth-error-container' style={additionalStyle}>
        <FiAlertCircle className='auth-error-circle' />
        <span className='auth-circle-label'>{label}</span>
    </div>
  )
}

export default AuthError;