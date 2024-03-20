import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { button } from 'react-router-dom';
import {FaEnvelope } from 'react-icons/fa';
import {FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";





function ContactForm() {
  
  const [formData, setFormData] = useState({name: '',email: '',subject: '',message: ''});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/thank-you');
  };

  
  
  return (


<section id="contact" class="contact">
<div class="container-contactus" >

  <div class="section-title">
    <h2 style={{alignItems:"center",opacity:"1",display:"flex",justifyContent:"center",opacity:"0.5"}}>Contact Us</h2>
    <p  style={{fontWeight:"500px",fontSize:"20px",display:"flex",justifyContent:"center", color:" #4e4039"}}>Contact us the get started</p>
    <div class="line"></div>
  </div>

  <div class="row">

    <div class="col-lg-5 d-flex align-items-stretch" >
      <div class="info">
        <div class="address">
       
          <h4>Location:</h4>
          <FaLocationDot  style={{ color:"orange",fontSize:"19px"}}/> <p>A108 Adam Street, New York, NY 535022</p>
        </div>

        <div class="email">
        
          <h4>Email:</h4>
          <FaEnvelope style={{ color:"orange",fontSize:"20px"}}/> <p>info@example.com</p>
        </div>

        <div class="phone">
        
          <h4>Call:</h4>
          <FaPhone  style={{ color:"orange",fontSize:"20px"}}/> <p>+1 5589 55488 55s</p>
        </div>
        <div className='gmap-frame'>
        <iframe width="250" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
        </div>
      </div>

    </div>

    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" >
      <form  onSubmit={handleSubmit}  class="register" >
       
        <div class="row">
          <div class="form-group col-md-6">
            <label for="name">Your Name</label>
            <input type="text" 
             value={formData.name}
             onChange={handleChange}
            name="name"
             class="form-control"
             id="name"
              required />
          </div>
          <div class="form-group col-md-6 mt-3 mt-md-0">
            <label for="name">Your Email</label>
            <input type="email" 
             value={formData.email}
             onChange={handleChange}
            class="form-control"
             name="email"
              id="email"
              required />
              
          </div>
        </div>
        <div class="form-group mt-3">
          <label for="name">Subject</label>
          <input type="text"
          value={formData.subject}
          onChange={handleChange}
           class="form-control" 
          name="subject" id="subject"
            required />
            
        </div>
        <div class="form-group mt-3">
          <label for="name">Message</label>
          <textarea class="form-control" 
          name="message"
          value={formData.message}
          onChange={handleChange}
           rows="10" required></textarea>
           
     

        </div>
       
        <div class="text-center"><button type="submit"  className='btn'  >Send Message</button></div>
      </form>
    </div>

  </div>

</div>
</section>




   
 

    
  )
}

export default ContactForm;

