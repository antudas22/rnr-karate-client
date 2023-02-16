import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Achievements from '../Achievements/Achievements';
import Banner from '../Banner/Banner';
import Belts from '../Belts/Belts';
import Cards from '../Cards/Cards';
import Course from '../Course/Course';

const Home = () => {
    useTitle('Home')
    return (
        <div className=''>
            <Banner />
            <Cards />
            <Achievements />
            <Course />
            <Belts />
        </div>
    );
};

export default Home;