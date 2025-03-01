import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bannermob from "./bannermob.jpg";
import banener from "./Bannernew.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import banner2 from './front-banner (2).jpg'
export default function Banner() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://ilc-dev.katsammedia.com/api/resource/ILC%20Banner?fields=[%22*%22]")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);
  const slides = [
    {
      id: 1,
      image: banener,
      mobileImage: bannermob,
      title: "Intercontinental Legends Championship Trophy unveiled in Dubai",
      link: "https://www.aninews.in/news/sports/cricket/intercontinental-legends-championship-trophy-unveiled-in-dubai20250208232112/",
    },
    {
      id: 2,
      image: banner2,
      mobileImage: bannermob,
      title: "South African legend Gibbs in Dubai to promote Intercontinental Legends Championship",
      link: "https://www.khaleejtimes.com/sports/cricket/south-african-legend-gibbs-in-dubai-to-promote-intercontinental-legends-championship",
    },
   

  ];
  const handlePrev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };
  const handleNext = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <section id="homebanner" style={{ position: "relative" }}>
      {/* Fixed Navigation Buttons */}
      <div className="banner-buttons">
        <button className="owl-prev-btn" onClick={handlePrev}>
          <FaArrowLeftLong />
        </button>
        <button className="owl-next-btn" onClick={handleNext}>
          <FaArrowRightLong />
        </button>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={(selectedIndex) => setIndex(selectedIndex)} // Updates the active slide when a dot is clicked
        fade
        indicators={false} // Disable default indicators
        controls={false}
        interval={5000} // Autoplay interval in ms
        pause="hover" // Pauses autoplay on hover
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              src={slide.image}
              className="d-block w-100 desktop banner-image"
              alt="banner"
            />
            <img
              src={slide.mobileImage}
              className="d-block w-100 mobile banner-image"
              alt="mobile banner"
            />
            <div className="banner-overlay"></div>
            <Carousel.Caption>
              <Link target="_blank" to={slide.link}>
                <h4>{slide.title}</h4>
              </Link>
              <Link target="_blank" to={slide.link}>
                <button className="readmore">Continue Reading</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Indicators */}
      {/* <div className="carousel-indicators-container">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            className={`carousel-indicator ${index === idx ? "active" : "inactive"}`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div> */}

      <style>
        {`
          .banner-buttons {
            position: absolute;
            top: 48%;
            left: 5%;
            right: 0;
            display: flex;
            justify-content: space-between;
            width: 40px;
            z-index: 10;
          }

          .owl-prev-btn, .owl-next-btn {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 20px;
            border-radius: 10px;
          }

          .owl-prev-btn:hover, .owl-next-btn:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .carousel-indicators-container {
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index:999
          }

          .carousel-indicator {
          
            margin: 0 5px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .carousel-indicator.active {
            background-color: #fff;
          }

          .carousel-indicator:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </section>
  );
}
