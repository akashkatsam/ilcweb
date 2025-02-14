import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Footer from '../Include/Footer';
import Banner from './Banner';
import News from './News';
import logo1 from '../About/Teamilc/1.png'
import logo2 from '../About/Teamilc/2.png'
// import logo3 from '../About/Teamilc/3.png'
import logo4 from '../About/Teamilc/4.png'
import logo5 from '../About/Teamilc/5.png'
import logo6 from '../About/Teamilc/6.png'
import logo3 from '../About/Teamilc/3.png'
import mvp from '../About/mvplogo.png'
import stadium from './Frame 599.jpg'

import ilcvideo from '../About/videolast.mp4'
import text from '../About/text.png'
import Fixture from './Fixture';
import Video from './Video';
import Partner from './Partner';

export default function Index() {
    return (
      <>
      <Banner/>

<section className='teamlogoaboutus arrowbg'>
<div className='title-team'>
  <h4>Our Teams</h4>
</div>
<div className='row'>
  <div className='col-md-2 col-4'>
    <img src={logo1} className='img-fluid'/>
  </div>
  <div className='col-md-2 col-4'>
    <img src={logo2} className='img-fluid'/>
  </div>
  <div className='col-md-2 col-4'>
    <img src={logo3} className='img-fluid'/>
  </div>
  <div className='col-md-2 col-4'>
    <img src={logo4} className='img-fluid'/>
  </div>
  <div className='col-md-2 col-4'>
    <img src={logo5} className='img-fluid'/>
  </div>
  <div className='col-md-2 col-4'>
    <img src={logo6} className='img-fluid'/>
  </div>
</div>


  </section>
  <section className='stadium-banner'>
  <img src={stadium} className='img-fluid' />

</section>

      <News/>

      <Video/>
      <Partner/>
      </>
    )
}
