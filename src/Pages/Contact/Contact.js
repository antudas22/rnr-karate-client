import React, { useContext } from 'react';

import emailjs from '@emailjs/browser';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Contact = () => {
    useTitle('Contact')
    const {user} = useContext(AuthContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1c3d6se', 'template_sr2py1k', e.target, '28IPHd1E_lqeeeU0Q')
      .then((result) => {
        console.log(result)
          if(result.status === 200){
            toast.success('Message Sent')
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Contact Us</h1>
                </div>
            <div className='flex justify-center p-10'>
            <form onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="user_name" type="text" placeholder="Full Name" className="input input-bordered input-info max-w-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="user_email" type="email" placeholder="Email" className="input input-bordered input-info max-w-lg" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered textarea-info max-w-lg" placeholder="Message..." required></textarea>
        </div>
        {
          user?.uid ?
        <div className="form-control mt-6">
            <input className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase max-w-lg border-none" type="submit" value="Submit" />
        </div>
        :
        <div className='flex justify-center my-5'>
          <Link to='/login' className='text-info underline decoration-2'>Login First.</Link>
        </div>
          
        }
      </div>
    </form>
            </div>
        </div>
    );
};

export default Contact;
