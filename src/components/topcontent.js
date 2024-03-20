import React from 'react'
import { FaUnity } from 'react-icons/fa';

import { FaNewspaper } from 'react-icons/fa';

const TopContent = () => {
  return (
<section id="about" class="about" >
      <div class="container">

        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
          <img src="./images/about-img.svg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3>Voluptatem dignissimos provident quasi</h3>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <div class="row">
              <div class="col-md-6" >
              <FaNewspaper className='fanewspaper'/>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div class="col-md-6" >
              <FaUnity className='unity'/>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>






















         






















   

  )
}

export default TopContent