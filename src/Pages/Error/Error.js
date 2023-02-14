import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/404-error.jpg'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import useTitle from '../../hooks/useTitle';

const Error = () => {
    useTitle('Error')
    return (
        <div className=''>
            <div className='flex justify-center'>
            <img className='w-1/2' src={errorImg} alt="" />
            </div>
            <div className='flex justify-center'>
            <PrimaryButton><Link to="/">Back to Home</Link></PrimaryButton>
            </div>
        </div>
    );
};

export default Error;