import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import useTitle from '../../hooks/useTitle';

const TermsAndConditions = () => {
    useTitle('Terms And Conditions')
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Terms And Conditions</h1>
            </div>
            <div className='flex justify-center'>
            <PrimaryButton><Link to="/signup">Back to Sign up</Link></PrimaryButton>
            </div>
        </div>
    );
};

export default TermsAndConditions;