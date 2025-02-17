import React, { useRef, useEffect } from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import founder from "./founderimage.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const founderData = [
  {
    id: 1,
    name: "SANJAY AGARWAL",
    content: "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
    image: founder,
  },
  {
    id: 2,
    name: "Name2 DOE",
    content: "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
    image: founder,
  },
  
  {
    id: 3,
    name: "Nam3 DOE",
    content: "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
    image: founder,
  },
  
  {
    id: 4,
    name: "JOHN DOE",
    content: "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
    image: founder,
  },
];

const FounderSlider = () => {
  const textCarousel = useRef(null);
  const imageCarousel = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    smartSpeed: 1000,
  };

  useEffect(() => {
    const $textOwl = $(textCarousel.current);
    const $imageOwl = $(imageCarousel.current);

    if ($textOwl.length && $imageOwl.length) {
      const syncCarousels = (event) => {
        let index = event.item.index;

        // Fade out the current active text before changing
        $(".foundercaption.active").removeClass("fade-in").addClass("fade-out");

        setTimeout(() => {
          $imageOwl.trigger("to.owl.carousel", [index, 1000, true]);
          $textOwl.trigger("to.owl.carousel", [index, 1000, true]);

          // Remove fade-out, add fade-in to the new active element
          $(".foundercaption").removeClass("active fade-out");
          $(".owl-item.active .foundercaption").addClass("active fade-in");
        }, 500);
      };

      $textOwl.on("translate.owl.carousel", syncCarousels);
      $imageOwl.on("translate.owl.carousel", syncCarousels);

      $(prevButton.current).on("click", () => {
        $textOwl.trigger("prev.owl.carousel");
        $imageOwl.trigger("prev.owl.carousel");
      });

      $(nextButton.current).on("click", () => {
        $textOwl.trigger("next.owl.carousel");
        $imageOwl.trigger("next.owl.carousel");
      });

      return () => {
        $textOwl.off("translate.owl.carousel", syncCarousels);
        $imageOwl.off("translate.owl.carousel", syncCarousels);
        $(prevButton.current).off("click");
        $(nextButton.current).off("click");
      };
    }
  }, []);

  return (
    <section id="foundermessage">
      <div className="message">
        <div className="row align-items-center">
          <div className="col-md-8 col-12">
            <OwlCarousel ref={textCarousel} {...options} className="owl-theme">
              {founderData.map((founder) => (
                <div key={founder.id} className="foundercaption active">
                  <div className="founder-text">
                    <h5>MEET THE FOUNDER</h5>
                    <h6>{founder.name}</h6>
                    <p>{founder.content}</p>

                    <div className="socialinkfounder">
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
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>

          <div className="col-md-4 col-12 d-flex justify-content-center">
            <div className="fixed-square-box">
              <OwlCarousel ref={imageCarousel} {...options} className="owl-theme">
                {founderData.map((founder) => (
                  <div key={founder.id} className="founder-image">
                    <img src={founder.image} alt={founder.name} className="img-fluid" />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>

        <div className="custom-nav text-center mt-3">
          <button ref={prevButton} className="btn btn-primary mx-2">
            <FaArrowLeftLong />
          </button>
          <button ref={nextButton} className="btn btn-primary mx-2">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <style jsx>{`
        .fixed-square-box {
          width: 300px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ccc;
          border-radius: 150px;
        }
        .founder-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
        .foundercaption {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
        }
        .foundercaption.active {
          opacity: 1;
          transform: translateX(0);
        }
        .fade-out {
          opacity: 0;
          transform: translateX(-20px);
        }
        .fade-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
};

export default FounderSlider;
