import React from 'react';
import logo from '../../../assets/rnr-logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <img className='animate-spin' width={'80px'} src={logo} alt="" />
        {/* <progress className="progress w-56"></progress> */}
    </div>
    );
};

export default Loading;