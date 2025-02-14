import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaPlayCircle } from "react-icons/fa";

export default function Video() {

    const options = {
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
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
        <section id='video'>
            <div class="title-team"><h4>Matches Video</h4></div>

            <OwlCarousel {...options} className="owl-theme">

                <div class="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/24c1/5fc9/21a1ab11347adff0bf6d793f54421d19?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j7vZgV~Jy1iuNujAsiX8GNbhkj6BzwVUb8IiFflFtl8ax7t9thdMhsouuWEIZJsPqohtU8cZLWzY3ebMthzZWpzf2rJD2Tg8p5m2pXpSJZSJcBg2U~dErmPWIZ3knuB0DYJcKB85LhH~hynj6Efbs44OUR~qDbyR66KgR~NxF4snmPCHM12OHrjz9LcaHH1LkdcQKjPKi2a2BcysiX98nZpkKw5K85W2CqBNz~drVH~svyVL1S~4wTPxdiMG19rsp7YE7Y~z1-26JiDEm7MF0ki-79-ZipoexsC3S62seoBWVGqHVJDDsf1P64wRMZ2n4mj-cmfEzd8JaWbUdefwZw__" alt="Example Image" />
                    <div class="overlay"></div>

                    <div class="bottom-text">  

                        <div className=''> <FaPlayCircle /></div>                  
                    watch our latest match videos live </div>
                </div>



                <div class="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/24c1/5fc9/21a1ab11347adff0bf6d793f54421d19?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j7vZgV~Jy1iuNujAsiX8GNbhkj6BzwVUb8IiFflFtl8ax7t9thdMhsouuWEIZJsPqohtU8cZLWzY3ebMthzZWpzf2rJD2Tg8p5m2pXpSJZSJcBg2U~dErmPWIZ3knuB0DYJcKB85LhH~hynj6Efbs44OUR~qDbyR66KgR~NxF4snmPCHM12OHrjz9LcaHH1LkdcQKjPKi2a2BcysiX98nZpkKw5K85W2CqBNz~drVH~svyVL1S~4wTPxdiMG19rsp7YE7Y~z1-26JiDEm7MF0ki-79-ZipoexsC3S62seoBWVGqHVJDDsf1P64wRMZ2n4mj-cmfEzd8JaWbUdefwZw__" alt="Example Image" />
                    <div class="overlay"></div>
                    <div class="bottom-text">  

<div className=''> <FaPlayCircle /></div>                  
watch our latest match videos live </div>
                </div>




                <div class="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/24c1/5fc9/21a1ab11347adff0bf6d793f54421d19?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j7vZgV~Jy1iuNujAsiX8GNbhkj6BzwVUb8IiFflFtl8ax7t9thdMhsouuWEIZJsPqohtU8cZLWzY3ebMthzZWpzf2rJD2Tg8p5m2pXpSJZSJcBg2U~dErmPWIZ3knuB0DYJcKB85LhH~hynj6Efbs44OUR~qDbyR66KgR~NxF4snmPCHM12OHrjz9LcaHH1LkdcQKjPKi2a2BcysiX98nZpkKw5K85W2CqBNz~drVH~svyVL1S~4wTPxdiMG19rsp7YE7Y~z1-26JiDEm7MF0ki-79-ZipoexsC3S62seoBWVGqHVJDDsf1P64wRMZ2n4mj-cmfEzd8JaWbUdefwZw__" alt="Example Image" />
                    <div class="overlay"></div>
                    <FaPlayCircle />

                    <div class="bottom-text">  

<div className=''> <FaPlayCircle /></div>                  
watch our latest match videos live </div>

                </div>

            </OwlCarousel>
        </section>
    )
}
