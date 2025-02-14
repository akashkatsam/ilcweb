import React from 'react'
import sonylogo from './sonylogo.png'
import line from './separateline.png'
export default function Partner() {
  return (
    <section id='bg-white'>
<div className='partnertitle'>
    <h4>catch us live</h4>
    <p>Official broadcasting partner, providing seamless coverage, global reach, and high-quality live content for audiences worldwide.</p>

    <div className='partnerlogo'>
    <div className="row d-flex justify-content-center mx-auto">
  <div className="col-md-2 col-4">
    <div className="partentitle text-center">
      <h3>brand partner</h3>
      <img src={sonylogo} className="img-fluid" />
    </div>
  </div>

  <div className="col-md-2 col-4">
    <div className="partentitle text-center">
      <h3>brand partner</h3>
      <img src={sonylogo} className="img-fluid" />
    </div>
  </div>
</div>


<div className='separator'>
  <img src={line}  className='img-fluid'/>
</div>


        <div className='ourpartner'>
          <div className='row'>

            <div className='partnertitle'>
              <h5>our partners</h5>
            </div>
            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>brand partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>

            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>media partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>


            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>official partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>



            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3>Associate partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>

            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3> partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>



            <div className='col-md-2 col-4'>
              <div className='partentitle'>
                <h3> partner</h3>
                <img src={sonylogo} className='img-fluid' />
              </div>
            </div>





          </div>
      </div>
    </div>
</div>
    </section>
  )
}
