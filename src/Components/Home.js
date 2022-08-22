import React, { useEffect } from 'react';
import demo from '../Assets/Images/demo.jpg';
import BtnOutLineDark from './utilities/BtnOutLineDark';
import { useLocation } from 'react-router-dom';
import { setBg } from '../setBg';

const Home = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        setBg(pathname)
    }, [])
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-5">
                    <img className='img-fluid img-demo' src={demo} alt="demo" />
                    <div className='mt-4 d-flex align-items-center justify-content-around'>
                        <BtnOutLineDark text='Login' path='/login' />
                        <BtnOutLineDark text='Register' path='/register' />
                        <BtnOutLineDark text='Forgot' path='/forgetPassword' />
                        <BtnOutLineDark text='OTP' path='/otp' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;