import React from 'react';

const BtnPrimary = ({ icon, text, type }) => {
    return (
        <button type={type} className={`btn btn-primary d-flex align-items-center ${type}`}>
            {icon && <span>{icon}</span>}
            {text && <span className={icon ? 'mx-3' : ''}>{text}</span>}
        </button>
    )
}

export default BtnPrimary;