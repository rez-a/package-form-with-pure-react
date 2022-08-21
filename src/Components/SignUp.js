import React, { useEffect, useState } from 'react';
import BtnPrimary from './utilities/BtnPrimary';
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import BtnSecondary from './utilities/BtnSecondary';
import SpaseWithOr from './utilities/SpaseWithOr';
import InputPrimary from './utilities/InputPrimary';
import InputCheckBox from './utilities/InputCheckBox';
import { validation } from '../validation';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../toast';

const SignUp = () => {
    const [data, setData] = useState({
        Full_Name: '',
        Email_Address: '',
        Password: '',
        Confirm_Password: '',
        Rules: false
    })
    const [error, setError] = useState({});
    const [focusItem, setFocusItem] = useState({
        Full_Name: false,
        Email_Address: false,
        Password: false,
        Confirm_Password: false,
        Rules: false
    })
    const [showPass, setShowPass] = useState({ pass: false, confirmPass: false })

    useEffect(() => {
        setError(validation(data))
    }, [data, focusItem])

    const handleSetData = event => {
        event.target.type === 'checkbox' ?
            setData({ ...data, [event.target.id]: event.target.checked }) :
            setData({ ...data, [event.target.id]: event.target.value })
    }

    const handleFocusItem = event => {
        setFocusItem({ ...focusItem, [event.target.id]: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (Object.keys(error).length) {
            setFocusItem({
                Full_Name: true,
                Email_Address: true,
                Password: true,
                Confirm_Password: true,
                Rules: true
            })
            showToast('You have entered invalid data', 'error')
        } else {
            setData({
                Full_Name: '',
                Email_Address: '',
                Password: '',
                Confirm_Password: '',
                Rules: false
            });
            setError({});
            setFocusItem({
                Full_Name: false,
                Email_Address: false,
                Password: false,
                Confirm_Password: false,
                Rules: false
            })
            setShowPass({ pass: false, confirmPass: false })
            showToast('Your registration was successful', 'success');
        }
    }

    return (
        <div className='signup'>
            <small>Already a member? <a className='text-primary' href="/login">Login</a></small>
            <h3 className='text-white my-3'>Register Your Account</h3>
            <div className="buttons d-flex mb-3">
                <BtnPrimary text='Register with Google' icon={<AiOutlineGoogle />} type="button" />
                <BtnSecondary icon={<AiFillApple />} />
            </div>
            <SpaseWithOr />
            <form>
                <InputPrimary
                    type="text"
                    id="Full_Name"
                    placeholder="Enter Your Name"
                    label="Full Name"
                    data={data.Full_Name}
                    handleSetData={handleSetData}
                    error={error.Full_Name}
                    focused={focusItem.Full_Name}
                    setFocused={handleFocusItem}
                />
                <InputPrimary
                    type="email"
                    id="Email_Address"
                    placeholder="Enter Your Email"
                    label="Email Address"
                    data={data.Email_Address}
                    handleSetData={handleSetData}
                    error={error.Email_Address}
                    focused={focusItem.Email_Address}
                    setFocused={handleFocusItem}
                />
                <InputPrimary
                    type={showPass.pass ? 'text' : 'password'}
                    id="Password"
                    placeholder="Enter Password"
                    label="Password"
                    data={data.Password}
                    handleSetData={handleSetData}
                    error={error.Password}
                    focused={focusItem.Password}
                    setFocused={handleFocusItem}
                    setShowPass={() => setShowPass({ ...showPass, pass: !showPass.pass })}
                />
                <InputPrimary
                    type={showPass.confirmPass ? 'text' : 'password'}
                    id="Confirm_Password"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    data={data.Confirm_Password}
                    handleSetData={handleSetData}
                    error={error.Confirm_Password}
                    focused={focusItem.Confirm_Password}
                    setFocused={handleFocusItem}
                    setShowPass={() => setShowPass({ ...showPass, confirmPass: !showPass.confirmPass })}
                />
                <InputCheckBox
                    id='Rules'
                    data={data.Rules}
                    handleSetData={handleSetData}
                    error={error.Rules}
                    focused={focusItem.Rules}
                    setFocused={handleFocusItem}
                >
                    <span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</span>
                </InputCheckBox>
                <div className='mt-4'>
                    <BtnPrimary text='Register' type="submit" handleSubmit={handleSubmit} />
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default SignUp;