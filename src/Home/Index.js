import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Footer from '../Include/Footer';
import Banner from './Banner';
import News from './News';
import logo1 from '../Team/1.png'
import logo2 from '../Team/2.png'
// import logo3 from '../Team/3.png'
import logo4 from '../Team/4.png'
import logo5 from '../Team/5.png'
import logo6 from '../Team/6.png'
import logo3 from '../Team/3.png'
import mvp from '../About/mvplogo.png'
// import stadium from './Leauge-BG.jpg'
import stump from "../stump.svg";
import ilcvideo from '../About/videolast.mp4'
import text from '../About/text.png'
import Fixture from './Fixture';
import Video from './Video';
import Partner from './Partner';
import stadium from './stadiumnew.png'
import stats from '../About/stats (1).jpg'


export default function Index() {
  return (
    <>
      <Banner />
      <Fixture />

      {/* <section className='stadium-banner'>
        <img src={stats} className='img-fluid' />
      </section> */}
      <section id="teamshome" className='arrowbg'>
        <div className="titleweb">
          <h2>
            <img src={stump} className="img-fluid stump2" alt="stump" /><span>Teams</span> 
          </h2>
        </div>

        <div className='teamslogohome teamslogo-css'>
          <div className='row'>
            <div className='col-md-2 col-4'>
              <img src={logo1} className='img-fluid' />
            </div>
            <div className='col-md-2 col-4'>
              <img src={logo2} className='img-fluid' />
            </div>
            <div className='col-md-2 col-4'>
              <img src={logo3} className='img-fluid' />
            </div>
            <div className='col-md-2 col-4'>
              <img src={logo4} className='img-fluid' />
            </div>
            <div className='col-md-2 col-4'>
              <img src={logo5} className='img-fluid' />
            </div>
            <div className='col-md-2 col-4'>
              <img src={logo6} className='img-fluid' />
            </div>
          </div>
        </div>

      </section>
      <section className='stadium-banner'>
       
        <img src={stadium} className='img-fluid stadium-image' />
      </section>

    
      <News />
      <Video />
      <Partner />
    </>
  )
}