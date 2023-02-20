import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Announcement = () => {
    useTitle('Announcement');

    const {data: announcements, } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            try{
                const res = await fetch('https://rnr-karate-server.vercel.app/announcements', {
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
                announcements?.map(announcement => <div key={announcement._id} className="card bg-neutral text-neutral-content mt-6">
                <div className="card-body">
                  <div className='flex'>
                  <h2 className="card-title">{announcement.title}</h2>
                  <p className='font-bold absolute right-4'>{announcement.date}</p>
                  </div>
                  <p>{announcement.message}</p>
                </div>
              </div>)
            }
        </div>
    );
};

export default Announcement;