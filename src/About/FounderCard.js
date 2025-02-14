import React, { useRef, useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import founder from "./founderimage.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const founderData = [
  {
    id: 1,
    name: "SANJAY AGARWAL",
    content:
      "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
    image: founder,
  },
  {
    id: 2,
    name: "JOHN DOE",
    content:
    "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
 
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
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    smartSpeed: 1000,
  };

  useEffect(() => {
    const $textOwl = $(textCarousel.current);
    const $imageOwl = $(imageCarousel.current);

    if ($textOwl.length && $imageOwl.length) {
      const syncCarousels = (event) => {
        let index = event.item.index;
        $imageOwl.trigger("to.owl.carousel", [index, 1000, true]);
        $textOwl.trigger("to.owl.carousel", [index, 1000, true]);
      };

      // Ensure both move together
      $textOwl.on("translate.owl.carousel", syncCarousels);
      $imageOwl.on("translate.owl.carousel", syncCarousels);

      // Attach custom navigation
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
          {/* Left Side (Text Slider) */}
          <div className="col-md-8 col-12">
          <OwlCarousel ref={textCarousel} {...options} className="owl-theme">
              {founderData.map((founder) => (
                <div key={founder.id} className="foundercaption">
                  <div className="founder-text">
                    <h5>MEET THE FOUNDER</h5>
                    <h6>{founder.name}</h6>
                    <p>{founder.content}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>

          {/* Right Side (Image Slider) */}
          <div className="col-md-4 col-12">
            <OwlCarousel ref={imageCarousel} {...options} className="owl-theme">
              {founderData.map((founder) => (
                <div key={founder.id} className="founder-image">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="img-fluid"
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>

        {/* Custom Navigation */}
        <div className="custom-nav text-center mt-3">
          <button ref={prevButton} className="btn btn-primary mx-2">
          <FaArrowLeftLong />

          </button>
          <button ref={nextButton} className="btn btn-primary mx-2">
          <FaArrowRightLong />

          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderSlider;
