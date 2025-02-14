import React from 'react'
import banener from './ILC website banner ed1.jpg';
import tag from './bannerocerlay .png'
import Fixture from './Fixture';
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
      <img src={banener} class="d-block w-100 bannerwidth" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h4>Intercontinental Legends Championship Trophy unveiled in Dubai</h4>
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
