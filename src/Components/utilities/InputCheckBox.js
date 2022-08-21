import React from 'react';
import { AiFillWarning } from "react-icons/ai";

const InputCheckBox = ({ id, children, data, handleSetData, error, focused, setFocused }) => {
    return (
        <>
            <div className="form-check mt-4">
                <input
                    type="checkbox"
                    id={id}
                    className='form-check-input'
                    value={data}
                    onChange={handleSetData}
                    onMouseDown={setFocused}
                />
                <label className='form-check-label' htmlFor={id}>{children}</label>
            </div>
            <small className={`d-flex align-items-center invalid ${error && focused ? '' : 'opacity-0'}`}>{error && focused && <><AiFillWarning /><span className='ms-1'>{error}</span></>}</small>
        </>
    );
};

export default InputCheckBox;