import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import useToken from '../../hooks/useToken';
import { Icon } from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
      navigate(from, {replace: true});
    }

    const handleLogin = data => {
      console.log(data)
      setLoginError("");
      signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email)
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
        <div className="h-[800px] flex justify-center items-start mt-20">
      <div className="max-w-sm w-full shadow-2xl p-10 rounded-3xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            })} placeholder="Password" className="input input-bordered input-info w-full max-w-sm mt-4" />
            <span onClick={handleToggle} className='cursor-pointer absolute mt-[26px] ml-[274px] '><Icon icon={icon} /></span>
          {errors.password && <p className="text-error">{errors.password?.message}</p>}
          <p className="text-sm mt-3" >Forget Password?</p>
          </div>
          <div>
            {
              loginError && <p className="text-error mt-4">{loginError}</p>
            }
          </div>
          <input className="btn btn-accent mt-4 w-full" value="Login" type="submit" />
        </form>
        <p className="text-sm mt-3 text-center" >New to RNR Gladiator? <Link className="text-sky-600" to="/signup">Create a new account.</Link></p>
      <div className="divider">OR</div>
      <div className="flex justify-evenly ">
        <Link to="">
          <img className="w-10" src={facebook} alt="" />
        </Link>
        <Link to="">
          <img className="w-10" src={google} alt="" />
        </Link>
        <Link to="">
          <img className="w-10" src={twitter} alt="" />
        </Link>
      </div>
      </div>
    </div>
    );
};

export default Login;