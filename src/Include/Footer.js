import React from 'react'
import { Link } from 'react-router-dom';
import aa from '../Images/Teams/aa.png'
import al from '../Images/Teams/al.png'
import as from '../Images/Teams/as.png'
import ch from '../Images/Teams/ch.png'
import eg from '../Images/Teams/eg.png'
import iw from '../Images/Teams/iw.png'
import tt from '../Images/Teams/tt.png'
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
                                    <img src={aa}  className='img-fluid'/>
                                </div>

                                <div className='col-2'>
                                    <img src={al}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={as}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={ch}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={eg}  className='img-fluid'/>
                                </div>


                                <div className='col-2'>
                                    <img src={tt}  className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='implinks'>
                            <ul>

                                <li>Matches </li>
                                <li>Teams</li>
                                <li>Gallery</li>
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




<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body">
        
<video width="100%" controls>
  <source src="https://katsamsoft.com/video/3.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body">
        
<video width="100%" controls>
  <source src="https://katsamsoft.com/video/2.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
