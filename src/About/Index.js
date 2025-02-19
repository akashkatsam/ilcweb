import React, { useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from './bg1.jpg'
import imgleft from './imgleft.png'
import text from './textnew.png'
import center from './ground-02.png'
import ilcvideo from './videolast.mp4'
import mvp from './mvplogo.png'
import logo1 from './Teamilc/1.png'
import logo2 from './Teamilc/2.png'
import logo3 from './Teamilc/3.png'
import logo4 from './Teamilc/4.png'
import logo5 from './Teamilc/5.png'
import logo6 from './Teamilc/6.png'
import ilclogo from './ilclogo.png'
import founder from './founderimage.png'
import glow from './glow.png'
import abtract from './aboutpartner.png'
import left from './leftaboutimg.png'
import videobox from './ILC - Introductory Video - Thumbnail (1).jpg'
import FounderSlider from "./FounderCard";
import stats from './stats (1).jpg'
import stadium from './stadium (3).jpg'

export default function Index() {
  useEffect(() => {
    if (textCarousel.current && imageCarousel.current) {
      textCarousel.current.on("translated.owl.carousel", (event) => {
        let index = event.item.index;
        imageCarousel.current.to(index);
      });

      imageCarousel.current.on("translated.owl.carousel", (event) => {
        let index = event.item.index;
        textCarousel.current.to(index);
      });
    }
  }, []);


  const founderData = [
    {
      id: 1,
      name: "Sanjay Agarwal",
      content: "Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction - MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.",
      image: "founder1.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      content: "Legendary player in the league with remarkable achievements.",
      image: "founder2.jpg"
    },
    {
      id: 3,
      name: "Michael Smith",
      content: "A rising star making an impact in the championship.",
      image: "founder3.jpg"
    }
  ];



  const textCarousel = useRef(null);
  const imageCarousel = useRef(null);

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    smartSpeed: 1000,
    onTranslate: (event) => {
      let index = event.item.index;
      if (textCarousel.current && imageCarousel.current) {
        textCarousel.current.to(index);
        imageCarousel.current.to(index);
      }
    },
  };


  return (
    <>
      <section id='breadcumd'>
        <div class="breadcrumb1">
          {/* <img src={img} alt="Breadcrumb Icon"/> */}
          <div className='row'>
            <div className='col-md-4'>
              <div className='caption-breadcumb'>
                <h4>ABOUT US </h4>
                <p>We Create Legendary Experience</p>
              </div>
            </div>
            <div className='col-md-4'></div>

          </div>

        </div>


      </section>
      <section id='aboutus'>
        <div className='topsectionabout'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6 p-0'>
                <div className='aboutleft'>
                  {/* <img src={left} className='img-fluid'/>  */}
                  <video width="100%" autoPlay={true} muted={true} controls={false} loop>
                    <source src={ilcvideo} type="video/mp4" />
                    <source src={ilcvideo} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className='col-md-6 align-self-center p-0'>
                <div className='aboutright'>
                  <h4> Legends <br></br>
                    return to the pitch For  <br></br>
                    <img src={text} className='img-fluid textimg' />     &nbsp;    &nbsp;    &nbsp;    &nbsp;    &nbsp;  glory
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hr'></div>
      </section>
      <section id='aboutbox'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <div className='aboutcontent'>
              <p>The <span className='highlight'>Intercontinental Legends Championship</span> brings together seven powerhouse teams in a spectacular display of cricketing brilliance. With <span className='highlight'>24 matches packed into just 13 action-filled days</span>, the tournament promises non-stop excitement for cricket enthusiasts across the globe. Broadcasting worldwide, fans will have the chance to witness legendary players showcasing their exceptional skills on an international stage. From the thunderous strokes of master batsmen to the cunning variations of seasoned bowlers, every moment is designed to keep viewers captivated. As teams battle for supremacy, the championship not only celebrates competitive spirit but also fosters unity among cricketing nations. With thrilling last-ball finishes and nail-biting run chases, the Intercontinental Legends Championship is set to leave an unforgettable mark on the cricketing world.
              </p>
            </div>
          </div>
          <div className='col-md-4 col-12 align-self-center'>
            <img src={abtract} className='img-fluid aboutabtract' />
          </div>
        </div>
      </section>

      {/* <div class="parallax">
        Your Content Here
    </div> */}



      <section id='centerimg'>
        <img src={stats} className='img-fluid' />
      </section>
      <div className="dividerstadium"></div>


      <section id="boxsquare">
        <div className='row'>
          <div className='abouttitle'>
            <h4>About the league</h4>
            <p>
              Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction is MARCH 2025 Top buys from INTERCONTINENTAL LEGENDS CHAMPIONSHIP Player Auction.
            </p>
          </div>

          <div className='centerbox'>
            <img src={videobox} className='img-fluid' />
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-md-6 align-self-center'>
            <div className='aboutmission'>
              <h4>Our Mission</h4>
              <p>The Intercontinental Legends Championship is a premier celebration of cricketing legends in action, where the world’s most elite teams come together to showcase the brilliance of legendary players. Our mission is to deliver an unparalleled, high-energy experience that brings fans closer to cricket's true icons.</p>
            </div>
          </div>
          <div className='col-md-6  align-self-center'>
            <img src={ilclogo} className='img-fluid boxsquareimg' />
          </div>
        </div>
        <div className='separetaboutus'></div>
        <div className='row'>
          <div className='col-md-6  align-self-center'>
            <img src={ilclogo} className='img-fluid boxsquareimg' />
          </div>
          <div className='col-md-6 align-self-center'>
            <div className='aboutmission'>
              <h4>Our Vision</h4>
              <p>To create an iconic platform where cricket legends in action from around the globe redefine the game. This league will honor cricket's greatest figures, offering immersive live coverage of every brilliant moment—whether it’s a powerful shot or the art of a perfect delivery. Through this elite competition, we aim to unite nations, inspire generations, and usher in a new era of cricketing greatness.</p>
            </div>
          </div>
        </div> */}
      </section>


      
      

      <section className='teamlogoaboutus'>
        <div className='title-team'>
          <h4 className="text-center">Our Teams</h4>
        </div>
        <div className='row'>
          <div className='col-md-2 col-4'>
            <img src={logo1} className='img-fluid' />
          </div>
          <div className='col-md-2 col-4'>
            <img src={logo2} className='img-fluid' />
          </div>
          <div className='col-md-2 col-4'>
            <img src={logo3} className='img-fluid' />
          </div>
          <div className='col-md-2 col-4'>
            <img src={logo4} className='img-fluid' />
          </div>
          <div className='col-md-2 col-4'>
            <img src={logo5} className='img-fluid' />
          </div>
          <div className='col-md-2 col-4'>
            <img src={logo6} className='img-fluid' />
          </div>
        </div>
      </section>




      {/* <FounderSlider/> */}

      {/* <section id='foundermessage'>
        <div className='message'>
        <OwlCarousel
  className="owl-theme"
  loop
  margin={10}
  nav={false}
  autoplay
  autoplayTimeout={5000}
  items={1}
  onTranslated={(event) => {
    document.querySelectorAll(".foundercaption").forEach((el) => {
      el.classList.remove("animate__animated", "animate__fadeInUp");
      void el.offsetWidth; // Trick to restart animation
      el.classList.add("animate__animated", "animate__fadeInUp");
    });
  }}
>
  {founderData.map((founder) => (
    <div className="row" key={founder.id}>
      <div className="col-md-7 align-self-center">
        <div className="foundercaption animate__animated animate__fadeInUp">
          <h5>Meet the founder</h5>
          <h6>{founder.name}</h6>
          <p>{founder.content}</p>
        </div>
      </div>
      <div className="col-md-5">
        <img
          src={founder.image}
          className="img-fluid animate__animated animate__fadeIn"
          alt={founder.name}
        />
      </div>
    </div>
  ))}
</OwlCarousel>

        </div>
      </section> */}

<section id='centerimg'>
        <img src={stadium} className='img-fluid about-stadium' />
      </section>
      <div className="bg-purple-900 text-white p-10 flex justify-center">

      </div>
    </>
  )
}
