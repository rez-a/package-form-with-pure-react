import React, { useEffect, useState } from 'react';
import { AiFillWarning } from "react-icons/ai";
import zxcvbn from 'zxcvbn';
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputPrimary = ({ type, id, placeholder, label, data, handleSetData, error, focused, setFocused, setShowPass }) => {
    const [stronge, setStronge] = useState(0);
    const [progress, setProgress] = useState({ color: 'light', text: 'Very weak' })
    useEffect(() => {
        if (id === 'Password') {
            setStronge(zxcvbn(data).score);
        }
    }, [data])

    useEffect(() => {
        if (id === 'Password') {
            handleSetColorProgress(stronge)
        }
    }, [stronge])

    const handleSetColorProgress = number => {
        switch (true) {
            case number === 1:
                setProgress({
                    color: 'danger',
                    text: 'Weak'
                })
                break;
            case number === 2:
                setProgress({
                    color: 'warning',
                    text: 'Medium'
                })
                break;
            case number === 3:
                setProgress({
                    color: 'info',
                    text: 'Good'
                })
                break;
            case number >= 4:
                setProgress({
                    color: 'success',
                    text: 'Excellent'
                })
                break;
            default:
                setProgress({
                    color: 'light',
                    text: 'Very weak'
                })
        }
    }
    return (
        <div className="form-group mb-3">
            <div className='d-flex align-items-center justify-content-between'>
                <label htmlFor={id}>{label}</label>
                {
                    error && focused && <small className='d-flex align-items-center invalid'><AiFillWarning /><span className='ms-1'>{error}</span></small>
                }
            </div>
            <div>
                <input
                    autoComplete={type === 'password' ? 'true' : 'false'}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`form-control mt-2 ${error && focused ? 'invalid' : ''}`}
                    value={data}
                    onChange={handleSetData}
                    onFocus={setFocused}
                />
                {(id === 'Password' || id === 'Confirm_Password') &&

                    <i onClick={setShowPass} className='iconShowPass'>
                        {
                            type === 'password' ?
                                <GoEyeClosed /> :
                                <GoEye />
                        }
                    </i>
                }
            </div>
            {
                id === 'Password' &&
                <>
                    <div className="progress mt-2">
                        <div className={`progress-bar bg-${progress.color}`} style={{ width: `${stronge ? stronge * 25 : 15}%` }} ></div>
                    </div>
                    <small className={`text-${progress.color}`}>{progress.text}</small>
                </>
            }

        </div>
    );
};

export default InputPrimary;