import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import useTitle from '../../hooks/useTitle';

const Qualifications = () => {
    useTitle('Qualifications')
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 my-5'>Qualifications</h1>
                </div>
            <div className='flex justify-center w-full'>
            <div className='w-full p-4 lg:w-1/2'>
            <p className='text-xl'>To get admitted in The RNR Gladiator International Karate Academy, you have to bring some necessary documents & some formalities, these are..</p><br/>
            <p className='text-lg mb-10'>1. Make the admission payment first.<br/>
            2. Documents of National ID Cards / Birth Registration Certificate.<br/>
            3. Passport size photo 2 copy.<br/>
            4. Stamp size photo 2 copy.<br/>
            5. A karate dress is needed to do classes.<br/>
            6. If you are a student, then the student id card is needed.</p>
            <div className='flex justify-center'><PrimaryButton><Link to='/contact'>Contact Us</Link></PrimaryButton></div>
            </div>
            </div>
        </div>
    );
};

export default Qualifications;