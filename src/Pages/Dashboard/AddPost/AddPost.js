import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddPost = () => {
  useTitle('Add Post')
    const {register, handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddPost = data => {
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
            const post = {
                title: data.title,
                date: data.date,
                description: data.description,
                image: imgData.data.url
            }

            // Save student information to the database
            fetch('http://localhost:5000/posts', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success('Post is added successfully.')
              navigate('/posts')
            })
          }
        })
    }
    return (
        <div className="flex justify-center items-start">
      <div className="max-w-lg w-full shadow-2xl p-10 rounded-xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Add A Post
        </h2>
        <form onSubmit={handleSubmit(handleAddPost)}>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("title", {
            required: true
          })} placeholder="Add Your Post Title" className="input input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <div className="form-control w-full max-w-lg">
          <input type="text" {...register("date", {
            required: true
          })} placeholder="dd/mm/yyyy" className="input input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <div className="form-control w-full max-w-lg">
          <textarea type="text" {...register("description", {
            required: true
          })} placeholder="Write Description Of Your Post" className="textarea textarea-bordered textarea-info w-full max-w-lg mt-4" />
          </div>

          <div className="form-control w-full max-w-lg">
          <input type="file" {...register("image", {
            required: "Photo is required!"
          })} className="file-input file-input-bordered input-info w-full max-w-lg mt-4" />
          </div>
          <input className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none mt-4 w-full" value="Add Post" type="submit" />
        </form>
      </div>
    </div>
    );
};

export default AddPost;