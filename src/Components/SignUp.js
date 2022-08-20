import React from 'react';
import BtnPrimary from './utilities/BtnPrimary';
import { AiOutlineGoogle, AiFillApple } from "react-icons/ai";
import BtnSecondary from './utilities/BtnSecondary';
import SpaseWithOr from './utilities/SpaseWithOr';
import InputText from './utilities/InputText';
import InputCheckBox from './utilities/InputCheckBox';

const SignUp = () => {
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
                <InputText id="Full_Name" placeholder="Enter Your Name" label="Full Name" />
                <InputText id="Email_Address" placeholder="Enter Your Email" label="Email Address" />
                <InputText id="Password" placeholder="Enter Password" label="Password" />
                <InputText id="Confirm_Password" placeholder="Confirm Password" label="Confirm Password" />
                <InputCheckBox id='Rules'><span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</span></InputCheckBox>
                <BtnPrimary text='Register' type="submit" />
            </form>
        </div>
    );
};

export default SignUp;