import React, { useState } from 'react';
import BtnSecondary from './utilities/BtnSecondary';
import { AiFillSetting } from "react-icons/ai";
import { themes } from '../Assets/themes';

const ChangeTheme = () => {
    const [showThemes, setShowThemes] = useState(false);
    const [activeTheme, setActiveTheme] = useState(themes[0])
    return (
        <div className='changeTheme position-fixed d-flex align-items-start' style={{ transform: `translateX(${showThemes ? '0px' : '220px'})` }}>
            <div onClick={() => setShowThemes(!showThemes)}><BtnSecondary icon={<AiFillSetting />} /></div>
            <div className='colorBox bg-light text-dark p-3 mx-auto'>
                <h4 className='border-bottom pb-3 fs-5 text-center'>Color Switcher</h4>
                <div className=' mx-auto'>
                    <div className="colors d-flex flex-wrap justify-content-start p-1 align-items-center">
                        {
                            themes && themes.map(theme =>
                                <button
                                    key={theme.id}
                                    className='color'
                                    style={{ width: `${activeTheme === theme ? '15px' : '20px'}`, height: `${activeTheme === theme ? '15px' : '20px'}`, margin: '0.5rem', backgroundColor: theme.color }}
                                    onClick={() => setActiveTheme(theme)}
                                >
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeTheme;