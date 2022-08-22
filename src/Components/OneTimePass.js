import React, { useRef, useState, useEffect } from 'react';
import BtnPrimary from './utilities/BtnPrimary';
import otpIcon from '../Assets/Images/otp-icon.png';
import { Toaster } from 'react-hot-toast';
import InputOTP from './utilities/InputOTP.js';
import { showToast } from '../toast';
import { useLocation } from 'react-router-dom';
import { setBg } from '../setBg';
import ChangingLink from './utilities/ChangingLink';



const OneTimePass = () => {
    const { pathname } = useLocation();
    const [code, setCode] = useState({
        code_1: '',
        code_2: '',
        code_3: '',
        code_4: ''
    })
    const inputsRef = useRef([]);
    useEffect(() => {
        setBg(pathname)
    }, [])

    const handleSetFocused = (index) => {
        if (index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        } else {
            inputsRef.current[index].blur();
        }
    }


    const handleCheckCode = (event) => {
        event.preventDefault();
        if (code.code_1 && code.code_2 && code.code_3 && code.code_4) {
            showToast('The code is correct and your account has been activated', 'success')
        } else {
            showToast('Code is wrong', 'error')
        }
    }



    return (
        <div className='forget-password'>
            <h3 className='text-white my-3'>Two-Step Verification</h3>
            <div className="img-otp">
                <img src={otpIcon} className='img-fluid mb-3' alt="verification" />
            </div>
            <p className='text-light my-3'>Please enter the OTP (one time password) to verify your account. A Code has been sent to +1*******179</p>
            <p className='text-light'>Enter 4 digit code</p>
            <form onSubmit={handleCheckCode} className='mt-4'>
                <div className='row'>
                    <InputOTP
                        inputsRef={(el) => inputsRef.current[0] = el}
                        value={code.code_1}
                        setCode={(event) => setCode({ ...code, code_1: event.target.value })}
                        setFocused={() => handleSetFocused(0)}
                    />
                    <InputOTP
                        inputsRef={(el) => inputsRef.current[1] = el}
                        value={code.code_2}
                        setCode={(event) => setCode({ ...code, code_2: event.target.value })}
                        setFocused={() => handleSetFocused(1)}
                    />
                    <InputOTP
                        inputsRef={(el) => inputsRef.current[2] = el}
                        value={code.code_3}
                        setCode={(event) => setCode({ ...code, code_3: event.target.value })}
                        setFocused={() => handleSetFocused(2)}
                    />
                    <InputOTP
                        inputsRef={(el) => inputsRef.current[3] = el}
                        value={code.code_4}
                        setCode={(event) => setCode({ ...code, code_4: event.target.value })}
                        setFocused={() => handleSetFocused(3)}
                    />
                </div>
                <div className='my-4 d-flex align-items-center justify-content-between'>
                    <BtnPrimary text='Verify' type="submit" />
                    <p className='mb-0'>Didn't get the code? <ChangingLink className='text-primary' type='a'>Resend it</ChangingLink></p>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default OneTimePass;