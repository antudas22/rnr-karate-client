import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {

  useTitle('Sign Up')

    const {register, formState: { errors }, handleSubmit} = useForm();
    const {user, createUser, updateUser, verifyEmail} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/');
    }


    const handleSignUp = data => {
      setSignUpError('');
      createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        handleEmailVerification();
        toast.success('Great. Please check your email inbox or spam folder to get email verification link.',{duration: 10000,})
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email);
        })
        .catch(error => console.log(error));
      })
      .catch(error => {
        console.error(error)
        setSignUpError(error.message)
      });
    }

    const saveUser = (name, email) => {
      const user = {name, email};
      fetch('https://rnr-karate-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
      })
    }

    const handleEmailVerification = () => {
      verifyEmail()
      .then(() => {})
      .catch(error => console.error(error));
    }

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
      if(type === 'password'){
        setIcon(eye);
        setType('text');
      }
      else{
        setIcon(eyeOff);
        setType('password');
      }
    }

    const handleAccepted = e => {
      setAccepted(e.target.checked)
    }

    return (<div  className='mb-0 md:mb-80'>
      {
        user?.uid ?
        <div className='flex items-center justify-center min-h-screen'>
          <h2 className='text-center'>You are logged in.</h2>
        </div>
        :
        <div className="flex justify-center items-start p-4 my-10">
      <div className="max-w-sm w-full shadow-2xl p-10 rounded-3xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-sm">
          <input type="text" {...register("name", {
            required: true
          })} placeholder="Full Name" className="input input-bordered input-info w-full max-w-sm mt-4" />
          </div>
          <div className="form-control w-full max-w-sm">
          <input type="text" {...register("email", {
            required: "Email is required!"
          })} placeholder="Email" className="input input-bordered input-info w-full max-w-sm mt-4" />
          {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-sm">
          <input type={type} {...register("password", {
            required: "Password is required!",
            minLength: {value: 8, message: 'Password must be at least 8 characters!'},
            pattern: {
              value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
              message: "Password must be strong!",
            }
            })} placeholder="Password" className="input input-bordered input-info w-full max-w-sm mt-4" />
            <span onClick={handleToggle} className='cursor-pointer absolute mt-[26px] ml-[250px] lg:ml-[274px] text-black'><Icon icon={icon} /></span>
          {errors.password && <p className="text-error">{errors.password?.message}</p>}
          </div>

          <div className="form-control my-4">
            <div className='flex justify-between'>
              <p className="text-black">Accept <Link className='text-sky-600' to='/termsandconditions'>Terms & Conditions.</Link></p>
              <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-info" />
            </div>
          </div>

          <input disabled={!accepted} className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none w-full" value="Sign Up" type="submit" />
          {signUpError && <p className='text-error mt-2'>{signUpError}</p>}
        </form>
        <p className="text-sm mt-3 text-center text-black" >Already have an account? <Link className="text-sky-600" to="/login">Login.</Link></p>
      </div>
    </div>
}
    </div>
    );
};

export default SignUp;