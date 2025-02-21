import React from 'react'
import { Link } from 'react-router-dom';


import logo1 from '../Team/1.png'
import logo2 from '../Team/2.png'
import logo4 from '../Team/4.png'
import logo5 from '../Team/5.png'
import logo6 from '../Team/6.png'
import logo3 from '../Team/3.png'
import logosony from './sonylogo.png'
import v3 from './3.mp4'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
    return (
        <>
        {/* <section id='sponor'>
            <div className='row'>
                <div className='sponsorstrip'>
                    <div className='leftsponsortext'>
                        <h4>Broadcasting Partner</h4>
                        <p>Official broadcasting partner, providing seamless coverage, global reach, and high-quality live content for audiences worldwide.</p>
                        <h6>#LegendsinAction</h6>
                    </div>
                    <div className='leftsponsorlogo'>
                        <img src={logosony} className='img-fluid'/>
                    </div>

                </div>
            </div>

        </section> */}
            <section id="sectinfotter">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='footerhagtag'>
                            <h3>#LegendsinAction</h3>
                            {/* <h6>#LegendsinAction</h6> */}
                        </div>

                        <div className='sociallinksfooter'>
                            <ul className=''>
                            <li>


<Link to="https://www.facebook.com/profile.php?id=61572514630239" target="_blank">
<FaFacebookF className='icon' />
</Link>

                                </li>
                                <li>
                                <Link to="https://www.instagram.com/ilct20/?hl=en" target="_blank">

                                    <FaInstagram className='icon' />
                                    </Link>
                                </li>
                                <li>
                                <Link to="https://www.instagram.com/ilct20/?hl=en" target="_blank">
                                    <FaYoutube className='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <FaLinkedin className='icon' />
                                </li>
                            </ul>
                        </div>

                        <div className='teamlogofooter'>
                            <div className='row'>
                                <div className='col-2'>
                                    <img src={logo1}  className='img-fluid'/>
                                </div>

                                <div className='col-2'>
                                    <img src={logo2}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={logo3}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={logo4}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={logo5}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={logo6}  className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='implinks'>
                            <ul>

                                <li>
                                    
                                    <Link to="/team">Team
                                    </Link> </li>
                                <li><Link to="/about">About
                                </Link></li>
                                <li><Link to="/photos">Gallery</Link></li>
                                </ul>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='copyright'>
                             <p>© 2025 Intercontinental Legends Championship - All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
