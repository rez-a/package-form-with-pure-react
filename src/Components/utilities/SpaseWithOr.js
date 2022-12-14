import React from 'react';

const SpaseWithOr = ({ text }) => {
    return (
        <div className='spaceWithOr d-flex mb-3 align-items-center'>
            <div className='bg-secondary'></div>
            <div className='text-muted mx-3 text'>{text}</div>
            <div className='bg-secondary'></div>
        </div>
    );
};

export default SpaseWithOr;