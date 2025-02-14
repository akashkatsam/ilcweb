import React from 'react'
import team1 from './1.png'
import team2 from './2.jpg'
import team3 from './3.jpg'
export default function Team() {
  return (
   <>
   <section id='breadcumd'>
   <div class="breadcrumb1">
        {/* <img src={img} alt="Breadcrumb Icon"/> */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='caption-breadcumb'>
            <h4>Our Team </h4>
            <p>We Create Legendary Experience</p>
            </div>
          </div>
          <div className='col-md-4'></div>

        </div>
      
    </div>


   </section>
   
   <section id="teampage">
<div className='row'>
    <div className='col-md-3 col-12'>
        <div className='teamimg'>
            <img src={team1} className='img-fluid' />
        </div>
    </div>


    <div className='col-md-3 col-12'>
        <div className='teamimg'>
            <img src={team2} className='img-fluid' />
        </div>
    </div>



    <div className='col-md-3 col-12'>
        <div className='teamimg'>
            <img src={team3} className='img-fluid' />
        </div>
    </div>
</div>
    </section>
   </>
  )
}
