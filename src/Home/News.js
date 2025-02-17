import React, { useRef } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import newsimg from './newimg.jpg'
import { Link } from 'react-router-dom';
import new1 from './new2.jpg'
import new2 from './news3.jpg'
import new3 from './new3.jpg'

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


export default function News() {
      const carouselRef = useRef(null);
    

    const goToPrev = () => {
        if (carouselRef.current) {
          carouselRef.current.prev();
        }
      };
    
      const goToNext = () => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      };

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
              items: 1.1 // Show 1 item on small screens
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
            <div class="title-team"><h4>News & Announcement</h4>
            <div className="nav-buttons">
                      <button className="owl-prev-btn" onClick={goToPrev}><FaArrowLeftLong />
                      </button>
                      <button className="owl-next-btn" onClick={goToNext}><FaArrowRightLong />
                      </button>
                    </div>
            </div>


            <div className='container-fluid'>
                <div className='row'>
        <OwlCarousel ref={carouselRef} {...options} className="owl-theme">

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
                                    <h5>South African legend Gibbs in Dubai to promote Intercontinental Legends..</h5>
                                </Link>

                            </div>
                        </div>



                        <div className='newscard'>
                            <div className='newimg'>
                                <img src={new3} className='img-fluid' />
                            </div>
                            <div className='news-caption'>
                                <p>Feb 07, 2025 | ANI</p>
                                <Link target='_blank' to="https://www.aninews.in/news/sports/cricket/intercontinental-legends-championship-trophy-unveiled-in-dubai20250208232112/">
                                <h5>Intercontinental Legends Championship Trophy unveiled in Dubai</h5>

                                </Link>
                            </div>
                        </div>

</OwlCarousel>

                 
                </div>
            </div>

        </section>
    )
}
