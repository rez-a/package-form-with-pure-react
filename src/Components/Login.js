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


const Login = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState({
        Email_Address: '',
        Password: '',
    })
    const [error, setError] = useState({});
    const [focusItem, setFocusItem] = useState({
        Email_Address: false,
        Password: false
    })
    const [showPass, setShowPass] = useState({ pass: false })

    useEffect(() => {
        setError(validation(data, pathname))
    }, [data, focusItem])

    const handleSetData = event => {
        setData({ ...data, [event.target.id]: event.target.value })
    }

    const handleFocusItem = event => {
        setFocusItem({ ...focusItem, [event.target.id]: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (Object.keys(error).length) {
            setFocusItem({
                Email_Address: true,
                Password: true
            })
            showToast('You have entered invalid data', 'error')
        } else {
            setData({
                Email_Address: '',
                Password: ''
            });
            setError({});
            setFocusItem({
                Email_Address: false,
                Password: false,
            })
            setShowPass({ pass: false })
            showToast('You are logged in to your account', 'success');
        }
    }

    return (
        <div className='login w-100'>
            <small>Not a member? <Link className='text-primary' to="/register">Register</Link></small>
            <h3 className='text-white my-3'>Log In to Your Account</h3>
            <div className="buttons d-flex mb-3">
                <BtnPrimary text='Register with Google' icon={<AiOutlineGoogle />} type="button" />
                <BtnSecondary icon={<AiFillApple />} />
            </div>
            <SpaseWithOr text='OR' />
            <form>
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
                    pathName={pathname}
                />
                <Link className='text-primary' to="/forgetPassword">Forgot Password ?</Link>
                <div className='mt-4'>
                    <BtnPrimary text='Log in' type="submit" handleSubmit={handleSubmit} />
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default Login;