import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudent = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const handleAddStudent = data => {
        console.log(data);
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
            required: "Phone is required!"
          })} placeholder="Phone" className="input input-bordered input-info w-full max-w-lg mt-4" />
          {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <input className="btn btn-accent mt-4 w-full" value="Add Student" type="submit" />
        </form>
      </div>
    </div>
    );
};

export default AddStudent;