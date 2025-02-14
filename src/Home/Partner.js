import React from 'react'
import sonylogo from './sonylogo.png'
import line from './separateline.png';
import logo21 from '../dsgrp.jpg'
import mp from './MP.jpg'
import attica from './attica.jpg'
import newlogo from './100psoorts.jpg'
import fancode from './fancode.jpg'
import ps from './pgnew.png'
export default function Partner() {
  return (
    <section id='bg-white'>
<div className='partnertitle'>
    <h4>catch us live</h4>
    <p>Official broadcasting partner, providing seamless coverage, global reach, and high-quality live content for audiences worldwide.</p>

    <div className='partnerlogo'>
    <div className="row d-flex justify-content-center mx-auto">
  <div className="col-md-3 col-4">
    <div className="partentitle text-center">
      <h3>broadcasting PARTNER
      </h3>
      <img src={sonylogo} className="img-fluid" />
    </div>
  </div>

  
</div>


<div className='separator'>
  <img src={line}  className='img-fluid'/>
</div>


        <div className='ourpartner'>
          <div className='row d-flex justify-content-center mx-auto'>

            <div className='partnertitle'>
              <h5>ASSOCIATE PARTNER
              </h5>
            </div>

            
            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>Managed By</h3>
                <img src={newlogo} className='img-fluid' />
              </div>
            </div>



            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>Organized By</h3>
                <img src={mp} className='img-fluid' />
              </div>
            </div>

            
            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3> partner</h3>
                <img src={attica} className='img-fluid' />
              </div>
            </div>



            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3> partner</h3>
                <img src={ps} className='img-fluid' />
              </div>
            </div>




           

           


            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3> partner</h3>
                <img src={logo21} className='img-fluid' />
              </div>
            </div>





          </div>
      </div>
    </div>
</div>
    </section>
  )
}
