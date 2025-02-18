import React from 'react'
import img1 from './ILC IMAGES/ILC 01.jpg'
import img2 from './ILC IMAGES/ILC 02.jpg'
import img3 from './ILC IMAGES/ILC-03.jpg'
import img4 from './ILC IMAGES/ILC-04.jpg'
import img5 from './ILC IMAGES/ILC-05.jpg'
import img6 from './ILC IMAGES/ILC-06.jpg'
import img7 from './ILC IMAGES/ILC-07.jpg'
import img8 from './ILC IMAGES/ILC-08.jpg'
import img9 from './ILC IMAGES/ILC-09.jpg'
import img10 from './ILC IMAGES/ILC-10.jpg'
import img11 from './ILC IMAGES/ILC-11.jpg'
import img12 from './ILC IMAGES/ILC-12.jpg'
import img13 from './ILC IMAGES/ILC-13.jpg'
import img14 from './ILC IMAGES/ILC-14.jpg'
import img15 from './ILC IMAGES/ILC-15.jpg'
import img16 from './ILC IMAGES/ILC-16.jpg'

export default function Gallery() {
  return (
 <>
 
 
 <section id='breadcumd'>
   <div class="breadcrumb1">
        {/* <img src={img} alt="Breadcrumb Icon"/> */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='caption-breadcumb'>
            <h4>ILC PHOTOS </h4>
            <p>We Create Legendary Experience</p>
            </div>
          </div>
          <div className='col-md-4'></div>

        </div>
      
    </div>


   </section>
   

   <section id='photos'>
<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img1} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>

            <div className='iplcimg'>
                <img src={img2} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img3} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img4} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img5} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img6} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img7} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img8} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>

            <div className='iplcimg'>
                <img src={img9} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img10} className='img-fluid' />
            </div>
            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img11} className='img-fluid' />
            </div>

            </div>
            
            <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img12} className='img-fluid' />
            </div>
        </div>


        <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img13} className='img-fluid' />
            </div>
        </div>

        <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img14} className='img-fluid' />
            </div>
        </div>

        <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img15} className='img-fluid' />
            </div>
        </div>


        <div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img16} className='img-fluid' />
            </div>
        </div>








    </div>
</div>
   </section>
   </>
  )
}
