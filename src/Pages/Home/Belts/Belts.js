import React from 'react';

const Belts = () => {
    return (
        <div className='mb-20'>
            <div className='flex justify-center mt-10'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Our Belt System</h1>
                </div>
            <div className='flex justify-center mt-20'>
                <ul className="flex flex-col lg:flex-row gap-10 bg-cyan-100 rounded-full p-10">
                    <li className="flex justify-center items-center h-20 w-20 bg-white rounded-full cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">White</li>
                    <li className="flex justify-center items-center bg-yellow-300 h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Yellow</li>
                    <li className="flex justify-center items-center bg-orange-500 h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Orange</li>
                    <li className="flex justify-center items-center bg-green-500 h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Green</li>
                    <li className="flex justify-center items-center bg-purple-600 h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Purple</li>
                    <li className="flex justify-center items-center bg-amber-900 h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Brown</li>
                    <li className="flex justify-center items-center bg-black h-20 w-20 rounded-full text-white cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">Black</li>
                </ul>
            </div>
        </div>
    );
};

export default Belts;