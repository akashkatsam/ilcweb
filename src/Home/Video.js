import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaPlayCircle } from "react-icons/fa";
import v1 from './thum1.jpg'
import v2 from './thum2.jpg'
import v3 from './v321.jpg'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import tv from '../tv-icon.png'

export default function Video() {

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
        autoplay:false,
        autoplayTimeout: 5000,
        items: 2.9,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
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
<>

        <section id='video'>
            <div class="title-team"><h4> <img src={tv}  className="img-fluid tvicon" />ILC TV</h4>
             <div className="nav-buttons">
                                  <button className="owl-prev-btn" onClick={goToPrev}><FaArrowLeftLong />
                                  </button>
                                  <button className="owl-next-btn" onClick={goToNext}><FaArrowRightLong />
                                  </button>
                                </div>
            
            </div>
            
        <OwlCarousel ref={carouselRef} {...options} className="owl-theme">

                <div class="image-container">
                    <img src={v1} alt="Example Image" />
                    <div class="overlay"></div>

                    <div class="bottom-text">
                  
                        <div className=''> <FaPlayCircle /></div>
                        watch our latest match videos live </div>

                        
           
                </div>



                <div class="image-container">
                    <img src={v2} alt="Example Image" />
                    <div class="overlay"></div>
                    <div class="bottom-text">

                        <div className=''> <FaPlayCircle /></div>
                        <Link data-toggle="modal" data-target="#exampleModal2">watch our latest match videos live </Link> </div>
                </div>




                {/* <div class="image-container">
                    <img src={v3} alt="Example Image" />
                    <div class="overlay"></div>

                    
                    <FaPlayCircle />


                    <div class="bottom-text">

                        <div className=''> <FaPlayCircle /></div>
                        <Link data-toggle="modal" data-target="#exampleModal3"> watch our latest match videos live </Link></div>



                </div> */}

            </OwlCarousel>
        </section>






</>
    )
}
