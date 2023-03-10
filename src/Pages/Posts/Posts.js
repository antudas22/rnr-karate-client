import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../hooks/useTitle';
import { FaRegCalendarAlt } from "react-icons/fa";

const Posts = () => {
    useTitle('Posts');

    const {data: posts, } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            try{
                const res = await fetch('https://rnr-karate-server.vercel.app/posts', {
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
        <div className='mb-10 p-5 lg:p-0'>
            <div className='flex justify-center mb-10'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500  text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Posts</h1>
                </div>
            {
                posts?.map(post => <div key={post._id} className="card max-w-2xl bg-neutral shadow-xl mt-6 mx-auto">
                <figure><img src={post.image} alt="Shoes" /></figure>
                <div className="card-body text-white">
                  <div className='flex justify-between gap-3'>
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