import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/rnr-logo.png';
import facebookLogo from '../../../assets/facebook.png'
import youtubeLogo from '../../../assets//youtube.png'

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-gradient-to-tl from-cyan-400 to-sky-600 text-white mt-10 justify-around text-center">
      <div>
        <div className='bg-white rounded-full mx-auto'>
          <img width={'110px'} src={logo} alt="" />
        </div>
        <p>RNR Gladiator International Karate Academy<br/>A Karate School Since 2006</p>
      </div>
      <div>
        <span className="footer-title">Company</span> 
        <Link to="/about">About Us</Link> 
        <Link to="/contact">Contact us</Link>
        <Link to="https://antud19.web.app/" target="blank">Developer</Link>
      </div>
      <div>
        <span className="footer-title">Help Line</span> 
        <p>(+880) 1675-913288</p>
        <p>(+880) 1313-800323</p>
        <p>rnrgladiator2017@gmail.com</p>
      </div>
      <div>
        <span className="footer-title">Social</span> 
        <div className="grid grid-flow-col gap-4 items-center"> 
          <Link to='https://www.facebook.com/profile.php?id=100025626411831&mibextid=ZbWKwL' target="blank">
          <img src={facebookLogo} width={'40px'} alt="" /></Link> 
          <Link to='https://www.youtube.com/@rnrtv4162' target="blank"><img src={youtubeLogo} width={'50px'} alt="" /></Link>
        </div>
      </div>
    </footer>
      </div>
    );
};

export default Footer;