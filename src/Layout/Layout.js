import React from 'react';
import logo from '../Assets/Images/logo.png';
import ChangeTheme from '../Components/ChangeTheme';

const Layout = ({ children }) => {
    const [WelcomeText, SignUp] = children;
    return (
        <div className='container-fluid text-light'>
            <div className="row h-100">
                <div className="col-lg-4 d-none d-lg-block p-0 position-relative showcase">
                    <div className="bg-dark w-100 h-100 position-absolute"></div>
                    <div className="content-img w-100 h-100 position-absolute"></div>
                    <div className="text w-100 h-100 position-absolute p-5">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt='logo' />
                            </a>
                        </div>
                        {WelcomeText}
                    </div>
                </div>
                <div className="col-lg-8 col-12 content">{SignUp}</div>
            </div>
            <ChangeTheme />
        </div>
    );
};

export default Layout;