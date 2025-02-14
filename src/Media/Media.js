import React from 'react'
import News from '../Home/News'

export default function Media() {
  return (
   <>
   
   <section id='breadcumd'>
   <div class="breadcrumb1">
        {/* <img src={img} alt="Breadcrumb Icon"/> */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='caption-breadcumb'>
            <h4>News & Update </h4>
            <p>We Create Legendary Experience</p>
            </div>
          </div>
          <div className='col-md-4'></div>

        </div>
      
    </div>


   </section>

   <section id='newandupdatepage'>
    <News/>

   </section>
   
   </>
  )
}
