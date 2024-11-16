import React from 'react';
import InputError from './InputError';

const FormInputContainer = ({ label, error, className="", children }) => {
    return (
        <div className={'form-input-container ' + className}>
            <span className='form-input-label'>{label} :</span>
            {children}
            {error && <InputError label={error} />}
        </div>
    );
}

export default FormInputContainer;