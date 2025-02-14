import React from 'react'
import img1 from './trophy/01.jpg'
import img2 from './trophy/02.jpg'
import img3 from './trophy/03.jpg'
import img4 from './trophy/04.jpg'
import img5 from './trophy/05.jpg'
import img6 from './trophy/06.jpg'
import img7 from './trophy/07.jpg'
import img8 from './trophy/08.jpg'
import img9 from './trophy/09.jpg'
import img10 from './trophy/10.jpg'
import img11 from './trophy/11.jpg'
import img12 from './trophy/12.jpg'
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

            </div><div className='col-md-4'>
            <div className='iplcimg'>
                <img src={img12} className='img-fluid' />
            </div>
        </div>
    </div>
</div>
   </section>
   </>
  )
}
