import React from 'react'
import { FaChevronRight} from 'react-icons/fa';
import {FaTwitter} from  'react-icons/fa';
import {FaFacebook} from  'react-icons/fa';
import {FaInstagram} from  'react-icons/fa';
import {FaPinterest} from  'react-icons/fa';



function Footer() {
  return (

<div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Ninestars</h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Home</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">About us</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Services</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Terms of service</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Web Design</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Web Development</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Product Management</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Marketing</a></li>
              <li><FaChevronRight  style={{color:"orangered"}}/> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="font">
            <FaTwitter/>
 <FaFacebook/>
<FaInstagram/>
<FaPinterest/>
            </div>
          </div>

        </div>
      </div>
    </div>









   
    
  
  )
}

export default Footer