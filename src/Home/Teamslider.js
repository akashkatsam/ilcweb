import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Importing Team Logos
import team1 from "../Teamlogo/ILC AS Logo.png";
import team2 from "../Teamlogo/ILC African Lions Intro Logo.png";
import team3 from "../Teamlogo/ILC Asian Kings Logo.png";
import team4 from "../Teamlogo/ILC CC logo.png";
import team5 from "../Teamlogo/ILC Euro G logo.png";
import team6 from "../Teamlogo/ILC Trans T Logo.png";
import stump from '../stump.svg'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Teamslider() {
    
  const goToPrev = () => carouselRef.current?.prev();
  const goToNext = () => carouselRef.current?.next();

  const carouselRef = useRef(null); // Reference for the Owl Carousel

  const options = {
    loop: true,
    margin:20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 2.5,
    margin:10,

       },
      600: { items: 3 },
      1000: { items: 5.2 },
    },
  };

  return (
    <section id="teamslider" className="arrowbg">
         <div className="titleweb">
        <h2>
          <img src={stump} className="img-fluid stump" alt="stump" />
          <span>Teams</span>
        </h2>
         <div className="nav-buttons">
                  <button className="owl-prev-btn" onClick={goToPrev}>
                    <FaArrowLeftLong />
                  </button>
                  <button className="owl-next-btn" onClick={goToNext}>
                    <FaArrowRightLong />
                  </button>
                </div>
      
      </div>
      <div className="teamcarousel">
        <OwlCarousel ref={carouselRef} {...options} className="owl-theme">
          <div className="item">
            <img src={team1} alt="Team 1" />
          </div>
          <div className="item">
            <img src={team2} alt="Team 2" />
          </div>
          <div className="item">
            <img src={team3} alt="Team 3" />
          </div>
          <div className="item">
            <img src={team4} alt="Team 4" />
          </div>
          <div className="item">
            <img src={team5} alt="Team 5" />
          </div>
          <div className="item">
            <img src={team6} alt="Team 6" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
