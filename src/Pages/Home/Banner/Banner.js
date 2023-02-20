import React from 'react';
import banner from '../../../assets/banner/banner-2.jpg'
import './Banner.css'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='karate-banner'>
                <img src={banner} alt="" />
            </div>
            <div className='absolute top-6 md:top-1/4 lg:top-1/3 ml-5 lg:ml-10'>
                <h1 className='text-lg md:text-3xl lg:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>
                    R N R Gladiator<br/>Int. <span><Typewriter
              options={{
                strings: ["Karate Academy", "空手アカデミー"],
                autoStart: true,
                loop: true,
              }}
            /></span>
                </h1>
                <p className='hidden md:block lg:block text-white my-4'>"Karate is not about being the best. Karate is about being better than you were yesterday."</p>

                <Link className='btn-xs lg:btn-lg ml-5' to='/qualifications'><button className='my-btn uppercase mt-3 hover:bg-gradient-to-t from-cyan-400 to-sky-600'>Enroll Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;