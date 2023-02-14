import React from 'react';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
    useTitle('Contact')

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_wj41vgh', 'template_89c9ytq', e.target, '-OdRvtpaSuJ0_j6jR')
//       .then((result) => {
//         console.log(result)
//           if(result.status === 200){
//             toast.success('Message Sent')
//           }
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   };
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Contact Us</h1>
                </div>
            <div className='flex justify-center p-10'>
            <form  className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="user_name" type="text" placeholder="Full Name" className="input input-bordered max-w-lg" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="user_email" type="email" placeholder="Email" className="input input-bordered max-w-lg" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered max-w-lg" placeholder="Message..." required></textarea>
        </div>
        <div className="form-control mt-6">
            <input className="btn max-w-lg text-white" type="submit" value="Submit" />
        </div>
      </div>
    </form>
            </div>
        </div>
    );
};

export default Contact;
