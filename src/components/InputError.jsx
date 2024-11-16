import React from 'react';
import { FiAlertCircle } from "react-icons/fi";

// An input error, customizable through its label and className props
const InputError = ({ label, className="" }) => {
  return (
    <div className={'input-error-container ' + className}>
        <FiAlertCircle className='input-error-circle' />
        <span className='input-error-circle-label'>{label}</span>
    </div>
  )
}

export default InputError;