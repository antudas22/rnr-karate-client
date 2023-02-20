import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ForgetPass = () => {
    useTitle('Forget Password')
    const [userEmail, setUserEmail] = useState('');

    const {forgetPassword} = useContext(AuthContext);
    
    const handleEmailBlur = e => {
      const email = e.target.value;
      setUserEmail(email)
    }

    const handleForgetPassword = () => {
      forgetPassword(userEmail)
      .then(() => {
        toast.success('Please check your email to get forget password link',{duration: 10000,})
      })
    }
    return (
        <div className="flex justify-center items-start mt-10 p-4 mb-10">
      <div className="max-w-sm w-full shadow-2xl p-10 rounded-3xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Forget Password
        </h2>
        <input onBlur={handleEmailBlur} type="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs mt-5" />

        <input onClick={handleForgetPassword} className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none mt-4 w-full" value="Forget Password" type="submit" />
      </div>
    </div>
    );
};

export default ForgetPass;