import React from 'react';
import { Link } from 'react-router-dom';

const BtnOutLineDark = ({ text, path }) => {
    return (
        <Link to={path} className='btn btn-outline-dark px-3'>{text}</Link>
    );
};

export default BtnOutLineDark;