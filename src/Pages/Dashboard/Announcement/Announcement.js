import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Announcement = () => {
    useTitle('Announcement');

    const {data: announcements, } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/announcements', {
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
            {
                announcements?.map(announcement => <div key={announcement._id} className="card bg-gradient-to-t from-cyan-400 to-sky-600 text-neutral-content mt-6">
                <div className="card-body">
                  <div className='flex'>
                  <h2 className="card-title">{announcement.title}</h2>
                  <p className='font-bold absolute right-4'>{announcement.date}</p>
                  </div>
                  <p className='text-black'>{announcement.message}</p>
                </div>
              </div>)
            }
        </div>
    );
};

export default Announcement;