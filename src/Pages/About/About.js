import React from 'react';
import useTitle from '../../hooks/useTitle';
import ruma from '../../assets/persons/ruma.jpg'
import rubel from '../../assets/persons/rubel.jpg'
import alek from '../../assets/persons/alekxander.jpg'
import shippon from '../../assets/persons/shippon.jpg'
import nur from '../../assets/persons/nur.jpg'
import raiyan from '../../assets/persons/raiyan.jpg'
import naila from '../../assets/persons/naila.jpg'
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const About = () => {
    useTitle('About')
    return (
        <div className=''>
            <div className='hidden lg:block'>
            <div className='flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>About Us</h1>
                </div>
            <div className="hero min-h-1/2 my-0 lg:my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Noor Mohammed Ruma</h1>
      <p className="py-4 text-lg">Sensei Noor Mohammed Ruma, Black Belt 4th Dan in Shotokan, Wado-kai & Fighter Karate Style, Founder, Chief Coach & Secretary of RNR Gladiator International Karate Academy, Referee at Bangladesh Karate federation, Film actor at BFDC, Senior Journalist at The Daily Shakabarta.</p>
      <PrimaryButton><Link to="/aboutsensei">More About</Link></PrimaryButton>
    </div>
    <img src={ruma} className="max-w-sm rounded-full shadow-2xl" alt="" />
  </div>
        </div>
        
            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={rubel} className="max-w-sm rounded-full shadow-2xl" alt="" />
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Masum Parvez Rubel</h1>
      <p className="py-4 text-lg">Masum Parvez Rubel. President of RNR Gladiator International Karate Academy.Film Actor, Film Producer, Director, Fight Director, Young Dragon Martial Art center the fight school Founder & Chief Coach, Vice-President of Bangladesh fighter Karate club, former President of Bangladesh karate federation, former secretary of Bangladesh film Artist Association.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Alexander Bow</h1>
      <p className="py-4 text-lg">Alexander Bow. Vice-president of RNR Gladiator International Karate Academy. Film Actor, film producer, fight Director, founder and Chief coach of Bangladesh Shotokan Karate Do Kyukai Association Munshiganj branch, Executive Member of Bangladesh Karate Federation, Joint secretary of BD-SKIF, former member of Bangladesh film artist association.</p>
    </div>
    <img src={alek} className="max-w-sm rounded-full shadow-2xl" alt="" />
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={shippon} className="max-w-sm rounded-full shadow-2xl" alt="" />
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Mr. Iqbal Hossain Shipon</h1>
      <p className="py-4 text-lg">Mr. Iqbal Hossain Shipon. Vice-president of RNR Gladiator International Karate Academy. Owner of Blooming Design Garments, Director of Philosophia School Narayanganj.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Nur Islam</h1>
      <p className="py-4 text-lg">Nur Islam. Vice president of RNR Gladiator International Karate Academy.</p>
    </div>
    <img src={nur} className="max-w-sm rounded-full shadow-2xl" alt="" />
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={raiyan} className="max-w-sm rounded-full shadow-2xl" alt="" />
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Mehedi Hasan Raiyan</h1>
      <p className="py-4 text-lg">Mehedi Hasan Raiyan, Black Belt 1st Dan, Assistant Coach of RNR Gladiator International Karate Academy</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Rafiya Islam Naila</h1>
      <p className="py-4 text-lg">Rafiya Islam Naila, Black Belt 1st Dan, Female coach of RNR Gladiator International Karate Academy..</p>
    </div>
    <img src={naila} className="max-w-sm rounded-full shadow-2xl" alt="" />
  </div>
  </div>
  </div>

      {/* for small size device */}
      <div className='lg:hidden flex justify-center'>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-slate-500 text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>About Us</h1>
                </div>
                <div className="hero min-h-1/2 my-0 lg:my-10">
      <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse">
    <img src={ruma} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Noor Mohammed Ruma</h1>
      <p className="py-4 text-md">Sensei Noor Mohammed Ruma, Black Belt 4th Dan in Shotokan, Wado-kai & Fighter Karate Style, Founder, Chief Coach & Secretary of RNR Gladiator International Karate Academy, Referee at Bangladesh Karate federation, Film actor at BFDC, Senior Journalist at The Daily Shakabarta.</p>
      <PrimaryButton><Link to="/aboutsensei">More About</Link></PrimaryButton>
    </div>
  </div>
        </div>
        
            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={rubel} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Masum Parvez Rubel</h1>
      <p className="py-4 text-md">Masum Parvez Rubel. President of RNR Gladiator International Karate Academy.Film Actor, Film Producer, Director, Fight Director, Young Dragon Martial Art center the fight school Founder & Chief Coach, Vice-President of Bangladesh fighter Karate club, former President of Bangladesh karate federation, former secretary of Bangladesh film Artist Association.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={alek} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Alexander Bow</h1>
      <p className="py-4 text-md">Alexander Bow. Vice-president of RNR Gladiator International Karate Academy. Film Actor, film producer, fight Director, founder and Chief coach of Bangladesh Shotokan Karate Do Kyukai Association Munshiganj branch, Executive Member of Bangladesh Karate Federation, Joint secretary of BD-SKIF, former member of Bangladesh film artist association.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={shippon} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Mr. Iqbal Hossain Shipon</h1>
      <p className="py-4 text-md">Mr. Iqbal Hossain Shipon. Vice-president of RNR Gladiator International Karate Academy. Owner of Blooming Design Garments, Director of Philosophia School Narayanganj.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={nur} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Nur Islam</h1>
      <p className="py-4 text-md">Nur Islam. Vice president of RNR Gladiator International Karate Academy.</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={raiyan} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Mehedi Hasan Raiyan</h1>
      <p className="py-4 text-md">Mehedi Hasan Raiyan, Black Belt 1st Dan, Assistant Coach of RNR Gladiator International Karate Academy</p>
    </div>
  </div>
</div>

            <div className="hero min-h-1/2 my-10">
  <div className="block lg:hidden hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={naila} className="max-w-xs rounded-full shadow-2xl mx-auto my-8" alt="" />
    <div className='w-full text-center'>
      <h1 className="text-xl font-bold">Rafiya Islam Naila</h1>
      <p className="py-4 text-md">Rafiya Islam Naila, Black Belt 1st Dan, Female coach of RNR Gladiator International Karate Academy..</p>
    </div>
  </div>

</div>

</div>
    );
};

export default About;