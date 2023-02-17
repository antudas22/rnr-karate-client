import React from 'react';
import { Link } from 'react-router-dom';
import course from '../../../assets/course.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Course = () => {
    return (
        <div className='mt-10 lg:mt-20'>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Course</h1>
                </div>
            <div className="hero mt-10">
  <div className="hero-content gap-40 flex-col lg:flex-row-reverse">
    <img src={course} className="max-h-[400px] rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-4xl font-bold text-black">About Course</h1>
      <p className="py-6 text-black">Karate Styles & upgrading is based on changing belts.<br/>

It takes 6 months to upgrade from one to another belt.<br/>

7 belts are the stairs of success in karate. Beginning<br/> from a white belt to end the course in Black Belt.<br/>

After completing the course each student got A Black<br/> Belt 1st Dan Grading.

A new Black Belt is usually called the 1st step of a Dan<br/>Grading.

Because when a Karateka learns karate it's just the<br/> beginning.

Because Black Belt is the beginning of a new life.<br/>

Dan Grading has many more to know.........</p>
      <PrimaryButton><Link to='/qualifications'>Enroll Now</Link></PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;