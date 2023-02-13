import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../hooks/useTitle';
import { FaRegCalendarAlt } from "react-icons/fa";

const Posts = () => {
    useTitle('Announcement');

    const {data: posts, } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/posts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    })
    return (
        <div className='mt-3'>
            <div className='flex justify-center mb-10'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500  text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Posts</h1>
                </div>
            {
                posts?.map(post => <div key={post._id} className="card max-w-2xl bg-neutral shadow-xl mt-4 mx-auto">
                <figure><img src={post.image} alt="Shoes" /></figure>
                <div className="card-body text-white">
                  <div className='flex justify-between'>
                  <h2 className="card-title">{post.title}</h2>
                  <div className='flex items-center gap-1'>
                  <FaRegCalendarAlt />
                  <p className='font-bold'>{post.date}</p>
                  </div>
                  </div>
                  <p>{post.description}</p>
                </div>
              </div>)
            }
            </div>
    );
};

export default Posts;