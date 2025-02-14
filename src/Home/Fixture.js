import React from 'react'
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logo1 from '../About/Teamilc/1.png'
import logo2 from '../About/Teamilc/2.png'
import logo3 from '../About/Teamilc/3.png'
import logo4 from '../About/Teamilc/4.png'
import logo5 from '../About/Teamilc/5.png'
import logo6 from '../About/Teamilc/6.png'

export default function Fixture() {

    const options = {
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
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
   <section id='fixture'>
    <div className='titleweb'>
        <h2>Fixture</h2>
    </div>
    <div className='row'>

    <OwlCarousel  {...options} className="owl-theme">
       <div className='item fixturecard'>
        <div className='titlefixture'>
            <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>

          
        </div>
        <div className='centerfixturecard'>
        <div className='row'>
            <div className='col-md-4 col-4'>
                <div className='leftfixture'>
                    <img src={logo1} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-4 align-self-start p-0'>
            <div className='match'>
                    <button> 
Match Centre    </button>
                </div>
                <h4 className='vs'>VS</h4>
               
            </div>
            <div className='col-md-4 col-4'>
            <div className='leftfixture'>
                    <img src={logo2} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>

        </div>
        </div>

        <div className='footerfixture'>
            <div className='row'>
                <div className='col-md-7 col-7'>
                    <p>Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className='col-md-5 col-5'>
                    <p>March XX, 2025 </p>
                </div>
            </div>
        </div>
       </div>




       <div className='item fixturecard'>
        <div className='titlefixture'>
            <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>

          
        </div>
        <div className='centerfixturecard'>
        <div className='row'>
            <div className='col-md-4 col-4'>
                <div className='leftfixture'>
                    <img src={logo3} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-4 align-self-start p-0'>
            <div className='match'>
                    <button> 
Match Centre    </button>
                </div>
                <h4 className='vs'>VS</h4>
               
            </div>
            <div className='col-md-4 col-4'>
            <div className='leftfixture'>
                    <img src={logo4} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>

        </div>
        </div>

        <div className='footerfixture'>
            <div className='row'>
                <div className='col-md-7 col-7'>
                    <p>Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className='col-md-5 col-5'>
                    <p>March XX, 2025 </p>
                </div>
            </div>
        </div>
       </div>




       <div className='item fixturecard'>
        <div className='titlefixture'>
            <h4>Rajiv Gandhi International Cricket Stadium, Dehradun</h4>

          
        </div>
        <div className='centerfixturecard'>
        <div className='row'>
            <div className='col-md-4 col-4'>
                <div className='leftfixture'>
                    <img src={logo5} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-4 align-self-start p-0'>
            <div className='match'>
                    <button> 
Match Centre    </button>
                </div>
                <h4 className='vs'>VS</h4>
               
            </div>
            <div className='col-md-4 col-4'>
            <div className='leftfixture'>
                    <img src={logo6} className='img-fluid' />
                    <div className='score'>
                        <h5>XX</h5>
                    </div>
                </div>
            </div>

        </div>
        </div>

        <div className='footerfixture'>
            <div className='row'>
                <div className='col-md-7 col-7'>
                    <p>Time: XX:00 PM - XX:00 PM</p>
                </div>
                <div className='col-md-5 col-5'>
                    <p>March XX, 2025 </p>
                </div>
            </div>
        </div>
       </div>



       </OwlCarousel>

    </div>
    </section>
  )
}
