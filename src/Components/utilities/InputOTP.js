import React from 'react';

const InputOTP = ({ value, setCode, inputsRef, setFocused }) => {
    return (
        <div className="form-group col">
            <input onInput={setFocused} ref={inputsRef} type="text" className='form-control input-otp' maxLength='1' value={value} onChange={setCode} />
        </div>
    );
};

export default InputOTP;