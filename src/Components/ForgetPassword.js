import React, { useEffect, useState } from 'react';
import BtnPrimary from './utilities/BtnPrimary';
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import BtnSecondary from './utilities/BtnSecondary';
import SpaseWithOr from './utilities/SpaseWithOr';
import InputPrimary from './utilities/InputPrimary';
import { validation } from '../validation';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../toast';
import { Link, useLocation } from 'react-router-dom';
import ChangingLink from './utilities/ChangingLink';


const ForgetPassword = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState({
        Email_Address_Or_Phone: '',
    })
    const [error, setError] = useState({});
    const [focusItem, setFocusItem] = useState({
        Email_Address_Or_Phone: false,
    })
    useEffect(() => {
        setError(validation(data, pathname))
    }, [data, focusItem])

    const handleSetData = event => {
        setData({ Email_Address_Or_Phone: event.target.value })
    }

    const handleFocusItem = () => {
        setFocusItem({ Email_Address_Or_Phone: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (error.Email_Address_Or_Phone) {
            setFocusItem({
                Email_Address_Or_Phone: true
            })
            showToast('You have entered invalid data', 'error')
        } else {
            setData({
                Email_Address_Or_Phone: ''
            });
            setError({});
            setFocusItem({
                Email_Address_Or_Phone: false
            })
            showToast('The password change link has been successfully sent to your email or mobile number', 'success');
        }
    }

    return (
        <div className='forget-password'>
            <small>Return to <ChangingLink className='text-primary' to="/login" type='Link'>Login</ChangingLink></small>
            <h3 className='text-white my-3'>Forgot password?</h3>
            <p className='text-muted mb-3'>Enter the email address or mobile number associated with your account.</p>
            <form className='mt-4'>
                <InputPrimary
                    type="text"
                    id="Email_Address_Or_Phone"
                    placeholder="Enter Email or Mobile Number"
                    label="Email or Mobile Number"
                    data={data.Email_Address_Or_Phone}
                    handleSetData={handleSetData}
                    error={error.Email_Address_Or_Phone}
                    focused={focusItem.Email_Address_Or_Phone}
                    setFocused={handleFocusItem}
                />
                <div className='my-4'>
                    <BtnPrimary text='Continue' type="submit" handleSubmit={handleSubmit} />
                </div>
            </form>
            <SpaseWithOr text='OR Log in with' />
            <div className="buttons d-flex mt-4">
                <BtnPrimary text='Register with Google' icon={<AiOutlineGoogle />} type="button" />
                <BtnSecondary icon={<AiFillApple />} />
            </div>
            <Toaster />
        </div>
    );
};

export default ForgetPassword;