import React from 'react'
import { FaFutbol} from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';

import { FaClock } from 'react-icons/fa';



function Cards() {
  return (

    <section id="services" class="services section-bg">
    <div class="container" >

      <div class="section-title">
        <h2  style={{display:"flex",justifyContent:"center",opacity:"1"}}>Services</h2>
        <p  style={{display:"flex",justifyContent:"center"}}>Check out the great services we offer</p>
        <div class="line"></div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
          <div class="icon-box">
            <FaFutbol  style={{fontSize:"30px",color:"orangered"}}/>
            <h4 class="title">Lorem Ipsum</h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" >
          <div class="icon-box">
           <FaNewspaper  style={{fontSize:"30px",color:"orangered"}}/>
            <h4 class="title">Sed ut perspiciatis</h4>
            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" >
          <div class="icon-box">
            <FaClock style={{fontSize:"30px",color:"orangered"}}/>
            <h4 class="title">Magni Dolores</h4>
            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch" >
          <div class="icon-box">
           <FaNewspaper style={{fontSize:"30px",color:"orangered"}}/>
            <h4 class="title">Nemo Enim</h4>
            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
          </div>
        </div>

      </div>

    </div>
  </section>






  
  )
}

export default Cards