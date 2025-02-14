import React from 'react'
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import newsimg from './newimg.jpg'
import { Link } from 'react-router-dom';
import new1 from './new2.jpg'
import new2 from './news3.jpg'


export default function News() {

    const options = {
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 3.3,
        smartSpeed: 1000,
        responsive: {
            0: {
              items: 1.2 // Show 1 item on small screens
            },
            600: {
              items: 2 // Show 2 items on medium screens
            },
            1000: {
              items: 3.2 // Show 3.2 items on larger screens
            }
          }
      };
    
    return (
        <section className='newarticles'>
            <div class="title-team"><h4>News & Announcement</h4></div>
            <div className='container-fluid'>
                <div className='row'>
                <OwlCarousel {...options} className="owl-theme">

                        <div className='newscard'>
                            <div className='newimg'>
                                <img src={new2} className='img-fluid' />
                            </div>
                            <div className='news-caption'>
                                <p>Feb 07, 2025 | The Statesman</p>

                                <Link to="" target="_blank">
                                    <h5>Intercontinental Legends C’ship Trophy unveiled in Dubai
                                    </h5>
                                </Link>
                            </div>
                        </div>

                        <div className='newscard'>
                            <div className='newimg'>
                                <img src={new1} className='img-fluid' />
                            </div>
                            <div className='news-caption'>
                                <p>Feb 07, 2025 | Khaleej Times</p>
                                <Link to="https://www.khaleejtimes.com/sports/cricket/south-african-legend-gibbs-in-dubai-to-promote-intercontinental-legends-championship?_refresh=true" target="_blank">
                                    <h5>South African legend Gibbs in Dubai to promote Intercontinental Legends Championship</h5>
                                </Link>

                            </div>
                        </div>



                        <div className='newscard'>
                            <div className='newimg'>
                                <img src={new2} className='img-fluid' />
                            </div>
                            <div className='news-caption'>
                                <p>March 18, 2025</p>
                                <h5>Asian Avengers fought back from two down to win 5-2 against Indo Warriors</h5>
                            </div>
                        </div>

</OwlCarousel>

                 
                </div>
            </div>

        </section>
    )
}
