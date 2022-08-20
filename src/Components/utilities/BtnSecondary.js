import React from 'react';

const BtnSecondary = ({ icon }) => {
    return (
        <button className='btn btn-secondary d-flex align-items-center ms-2'>
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default BtnSecondary;