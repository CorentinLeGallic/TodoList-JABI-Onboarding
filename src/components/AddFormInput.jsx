import React from 'react';

const AddFormInput = ({ label, error, className="", children }) => {
    return (
        <div className={'add-form-input-container ' + className}>
            <span className='add-form-input-label'>{label} :</span>
            {children}
            {/* {error && <AuthError label={error} />} */}
        </div>
    );
}

export default AddFormInput;