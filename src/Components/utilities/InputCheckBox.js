import React from 'react';

const InputCheckBox = ({ id, children }) => {
    return (
        <div className="form-check my-4">
            <input type="checkbox" id={id} className='form-check-input' />
            <label className='form-check-label' htmlFor={id}>{children}</label>
        </div>
    );
};

export default InputCheckBox;