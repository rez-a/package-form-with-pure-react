import React from 'react';

const InputText = ({ id, placeholder, label }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} className='form-control mt-2' />
            <small></small>
        </div>
    );
};

export default InputText;