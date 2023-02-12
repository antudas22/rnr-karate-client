import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddAnnouncement = () => {
    useTitle('Add Announcement')

    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();

    const handleAddAnnouncement = data => {
        const announcement = {
            title: data.title,
            date: data.date,
            message: data.message
        }

        fetch('http://localhost:5000/announcements', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(announcement)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success('Announcement is added successfully.')
              navigate('/dashboard/announcement')
            })
    }

    return (
        <div className="flex justify-center items-start mt-5">
      <div className="max-w-lg w-full shadow-2xl p-10 rounded-xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
        Add An Announcement
        </h2>
        <form onClick={handleSubmit(handleAddAnnouncement)}>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("title", {
            required: true
          })} placeholder="Add Your Announcement Title" className="input input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("date", {
            required: true
          })} placeholder="dd/mm/yyyy" className="input input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <div className="form-control w-full max-w-lg">
          <textarea type="text" {...register("message", {
            required: true
          })} placeholder="Write Your Full Message Here" className="textarea textarea-bordered textarea-info w-full max-w-lg mt-4" />
          </div>
          <input className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none mt-4 w-full" value="Add Announcement" type="submit" />
        </form>
      </div>
    </div>
    );
};

export default AddAnnouncement;