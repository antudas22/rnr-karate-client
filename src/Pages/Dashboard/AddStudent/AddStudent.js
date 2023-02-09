import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddStudent = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url);
            const student = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                image: imgData.data.url
            }

            // Save student information to the database
            fetch('http://localhost:5000/students', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(student)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success(`${data.name} is added successfully.`)
              navigate('/dashboard/managestudents')
            })
          }
        })
    }
    return (
        <div className="flex justify-center items-start">
      <div className="max-w-lg w-full shadow-2xl p-10 rounded-xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Add A Student
        </h2>
        <form onSubmit={handleSubmit(handleAddStudent)}>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("name", {
            required: true
          })} placeholder="Full Name" className="input input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("email", {
            required: "Email is required!"
          })} placeholder="Email" className="input input-bordered input-info w-full max-w-lg mt-4" />
          {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("phone", {
            required: true
          })} placeholder="(+880) 1234567890" className="input input-bordered input-info w-full max-w-lg mt-4" />
          {errors.phone && <p className="text-error">{errors.phone?.message}</p>}
          </div>

          <div className="form-control w-full max-w-lg">
          <input type="file" {...register("image", {
            required: "Photo is required!"
          })} className="input input-bordered input-info w-full max-w-lg mt-4" />
          {errors.image && <p className="text-error">{errors.image?.message}</p>}
          </div>
          <input className="btn btn-accent mt-4 w-full" value="Add Student" type="submit" />
        </form>
      </div>
    </div>
    );
};

export default AddStudent;