import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import google from "../../assets/google.png"
import useToken from '../../hooks/useToken';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import useTitle from '../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Login = () => {

  useTitle('Login')

    const {register, formState: { errors }, handleSubmit} = useForm();
    const {user, signIn, providerLogin, updateUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
      navigate(from, {replace: true});
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: user.displayName
        }
        updateUser(userInfo)
        .then(() => {
          saveUser(user.displayName, user.email);
        })
        .catch(error => console.log(error));
        
      })
      .catch(error => console.error(error))
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
        setLoginUserEmail(email);
      })
    }

    const handleLogin = data => {
      setLoginError("");
      signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        if(user.emailVerified){
          setLoginUserEmail(data.email)
        }
        else{
          toast.error('Your email is not verified! Please check your email inbox or spam folder to get email verification link.',{duration: 10000,})
        }
      })
      .catch(error => {
        console.error(error.message)
        setLoginError(error.message)
      })
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


    return (
        <div className='mb-0 md:mb-72'>
          {
            user?.uid ?
            <div className='flex items-center justify-center min-h-screen'>
              <h2 className='text-center'>You are logged in.</h2>
            </div>
            :
            <div className="flex justify-center items-start mt-10 p-4 mb-10">
      <div className="max-w-sm w-full shadow-2xl p-10 rounded-3xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-sm">
          <input  type="email" {...register("email", {
            required: "Email is required!"
          })} placeholder="Email" className="input input-bordered input-info w-full max-w-sm mt-4" />
          {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-sm">
          <input type={type} {...register("password", {
            required: "Password is required!",
            minLength: {value: 8, message: 'Password must be at least 8 characters!'},
            })} placeholder="Password" className="input input-bordered input-info w-full max-w-sm mt-4" />
            <span onClick={handleToggle} className='cursor-pointer absolute mt-[26px] ml-[250px] lg:ml-[274px] text-black'><Icon icon={icon} /></span>
          {errors.password && <p className="text-error">{errors.password?.message}</p>}
          </div>
          <Link to='/forgetpass'><p className="text-sm mt-3 text-sky-600" >Forget Password?</p></Link>
          <div>
            {
              loginError && <p className="text-error mt-4">{loginError}</p>
            }
          </div>
          <input className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none mt-4 w-full" value="Login" type="submit" />
        </form>
        <p className="text-sm mt-3 text-center text-black" >New to RNR Gladiator? <Link className="text-sky-600" to="/signup">Create a new account.</Link></p>
      <div className="divider text-black">OR</div>
        <button className='border-2 border-black rounded-lg w-full py-2' onClick={handleGoogleSignIn}>
          <div className='flex justify-center items-center gap-2'>
            <img className="w-8" src={google} alt="" />
            <p className='uppercase font-bold text-black'>Continue with google</p>
          </div>
        </button>
      </div>
    </div>
          }
        </div>
    );
};

export default Login;