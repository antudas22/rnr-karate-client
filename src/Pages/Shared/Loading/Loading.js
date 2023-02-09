import React from 'react';
import logo from '../../../assets/rnr-logo.png'
import './Loading.css';

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <img className='rnr-logo' src={logo} alt="" />
        {/* <progress className="progress w-56"></progress> */}
    </div>
    );
};

export default Loading;