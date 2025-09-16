import React from 'react';
import Logo from '../../../assets/logo.png';   

const FastLogo = () => {
    return (
        <div className='flex items-center'>
            <img className='w-20' src={Logo} alt="Fast Logo" />
            <p className='text-3xl'>Profast</p>
        </div>
    );
};

export default FastLogo;