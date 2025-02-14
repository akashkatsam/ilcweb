import React from 'react'
import banener from './ILC website banner ed1.jpg';
import tag from './bannerocerlay .png'
import Fixture from './Fixture';
import bannermob from './bannermob.jpg'
import { Link } from 'react-router-dom';

export default function Banner() {
    return (

        <>
        <section id='homebanner'>
           <div id="carouselExampleCaptions" class="carousel slide">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banener} class="d-block w-100 bannerwidth desktop" alt="..."/>
      <img src={bannermob} className='img-fluid mobile' />
      <div class="carousel-caption d-md-block">
      <Link target='_blank' to="https://www.aninews.in/news/sports/cricket/intercontinental-legends-championship-trophy-unveiled-in-dubai20250208232112/">

        <h4>Intercontinental Legends Championship Trophy unveiled in Dubai</h4>
        </Link>
        <button className='readmore'>
        Continue Reading
        </button>
      </div>
    </div>
   
   
  </div>
</div>
        </section>

<Fixture/>

</>

    )
}
