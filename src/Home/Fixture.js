import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logo1 from "../About/Teamilc/1.png";
import logo2 from "../About/Teamilc/2.png";
import logo3 from "../About/Teamilc/3.png";
import logo4 from "../About/Teamilc/4.png";
import logo5 from "../About/Teamilc/5.png";
import logo6 from "../About/Teamilc/6.png";
import stump from "../stump.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Fixture() {
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
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3.2 }
    }
  };

  return (
    <section id="fixture">
      {/* Title and Buttons */}
      <div className="titleweb">
        <h2>
          <img src={stump} className="img-fluid stump" alt="stump" /> Fixture
        </h2>
        {/* Custom Next/Prev Buttons */}
        <div className="nav-buttons">
          <button className="owl-prev-btn" onClick={goToPrev}><FaArrowLeftLong />
          </button>
          <button className="owl-next-btn" onClick={goToNext}><FaArrowRightLong />
          </button>
        </div>


      </div>

      {/* Carousel */}
      <div className="row">
        <OwlCarousel ref={carouselRef} {...options} className="owl-theme">
          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo1} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo2} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>



          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo1} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo2} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>



          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo3} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo4} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>


          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo5} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo6} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>


          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo1} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo2} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>


          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo3} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo4} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>


          <div className="item fixturecard">
            <div className="titlefixture">
              <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>
            </div>
            <div className="centerfixturecard">
              <div className="row">
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo5} className="img-fluid" alt="Team 1" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-4 align-self-start p-0">
                  <div className="match">
                    <button>Match Centre</button>
                  </div>
                  <h4 className="vs">VS</h4>
                </div>
                <div className="col-md-4 col-4">
                  <div className="leftfixture">
                    <img src={logo6} className="img-fluid" alt="Team 2" />
                    <div className="score">
                      <h5>XX</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footerfixture">
              <div className="row">
                <div className="col-md-7 col-7">
                  <p className="leftpara">Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className="col-md-5 col-5">
                  <p  className="rightpara">March XX, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
