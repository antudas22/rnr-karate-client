import React from 'react';
import './Achievements.css'
import acA from '../../../assets/achievements/acA.jpg'
import acB from '../../../assets/achievements/acB.jpg'
import acC from '../../../assets/achievements/acC.jpg'
import acD from '../../../assets/achievements/acD.jpg'
import acE from '../../../assets/achievements/acE.jpg'
import acF from '../../../assets/achievements/acF.jpg'
import acG from '../../../assets/achievements/acG.jpg'
import acH from '../../../assets/achievements/acH.jpg'
import acJ from '../../../assets/achievements/acJ.jpg'
import acL from '../../../assets/achievements/acL.jpg'
import acN from '../../../assets/achievements/acN.jpg'
import acO from '../../../assets/achievements/acO.jpg'

const Achievements = () => {
    return (
        <div>
            <div className='flex justify-center my-10 lg:my-20 mb-16'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>Our Achievements</h1>
            </div>
    <div className='flex justify-center'>
        <div className="carousel w-full lg:w-3/4">
        <div id="slide1" className="carousel-item relative w-full">
        <img src={acA} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide15" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
            <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>Sheikh Kamal Bangladesh Youth Games-2023. RNR Gladiator Narayanganj City karate Academy's player after winning in the Divisional games from Narayanganj District.</p>
            </div>
        </div>
        
        <div id="slide2" className="carousel-item relative w-full">
        <img src={acB} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>Sheikh Kamal Bangladesh Youth Games-2023. RNR Gladiator Narayanganj City karate Academy's player Shaheb Uddin Dipu after attaining position at the National selection from Dhaka Division.</p>
            </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
        <img src={acC} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>Victory Day Inter-District Karate championship-2022 Dhaka. With the participations of all districts in Bangladesh. RNR Gladiator International Karate Academy Achieved 2 gold, 3 silver & 2 bronze medals.</p>
            </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
        <img src={acD} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>RNR Gladiator International Karate Academy's most successive tournaments of all by participating In The Inter-District competition in Gazipur City. They achieved 7 gold, 4 silver & 3 Bronze.</p>
            </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
        <img src={acE} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>The Narayanganj City karate Academy's student meets with the honorable Mayor of Narayanganj City Corporation after their great achievements in the Inter-District Munshiganj Karate Championship.</p>
            </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
        <img src={acF} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide7" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>The 16th International Karate championship -2018. Hosted by Nepal. Bangladesh became champion & student from RNR Gladiator International Karate Academy, Mr. Aslamur Rahman Tyson was runner-up in that event. Bangladeshi Karateka brings honor to the country.</p>
            </div>
        </div>

        <div id="slide7" className="carousel-item relative w-full">
        <img src={acG} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide8" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>Victory Day Celebration Inter-District Karate championship-2021 Munshiganj. RNR Gladiator International Karate Academy with their all medalist players & the host of the game Mr. Alexander Bow.</p>
            </div>
        </div>

        <div id="slide8" className="carousel-item relative w-full">
        <img src={acH} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a> 
            <a href="#slide9" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>RNR Gladiator Narayanganj City Karate Academy's student & player visited the Mayor of Narayanganj City Corporation after the successive tournament in Narayanganj District Open Karate Championship.</p>
            </div>
        </div>

        <div id="slide9" className="carousel-item relative w-full">
        <img src={acJ} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a> 
            <a href="#slide10" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>The meeting with the former DC of Narayanganj City after the successive tournament in Munshiganj Inter-District competition.</p>
            </div>
        </div>

        <div id="slide10" className="carousel-item relative w-full">
        <img src={acL} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle">❮</a> 
            <a href="#slide11" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>The 1st & Grand Karate championship in Narayanganj City was organized by The RNR Gladiator International Karate Academy. The chief Guests were the ADC of Narayanganj City & President of the karate academy Sensei Masum Parvez Rubel.</p>
            </div>
        </div>

        <div id="slide11" className="carousel-item relative w-full">
        <img src={acN} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide10" className="btn btn-circle">❮</a> 
            <a href="#slide12" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>The 1st & Grand Karate championship in Narayanganj City was organized by The RNR Gladiator International Karate Academy. The chief Guests were the ADC of Narayanganj City & President of the karate academy Sensei Masum Parvez Rubel.</p>
            </div>
        </div>

        <div id="slide12" className="carousel-item relative w-full">
        <img src={acO} className="w-full" alt='' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide11" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className='glass absolute bottom-0 p-4'>
            <p className='hidden lg:block text-white'>With all the participants and medalists of National Martial Art Competition-2017. After their successive tournament they clicked a moment with the founder and chief coach Sensei Noor Mohammed Ruma. </p>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
};

export default Achievements;