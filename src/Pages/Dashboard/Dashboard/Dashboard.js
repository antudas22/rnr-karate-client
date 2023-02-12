import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    return (
        <div>
            <div className='flex justify-center absolute right-20 top-8'>
        <label tabIndex={2} className="lg:hidden">
    <label htmlFor="dashboard-drawer" className="btn btn-accent text-white btn-sm drawer-button lg:hidden">Open Menu</label>
        </label>
        </div>
            <h2 className='inline-block mt-10 text-4xl font-bold border-b-4 border-slate-500  text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Dashboard</h2>
            <p className='text-lg mt-4 text-gray-500'>Dashboard is not available for you. In future it will<br/> be able for you. Thank You.</p>
        </div>
    );
};

export default Dashboard;