import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ThankYou() {

  
  return (
    <section id="typage">
   <div class="text-center">
        <img src="./images/envelope.png" className='envelope'  alt=""/>
        </div>
        <div className='thanku'>
   <h2 >Thank You, enjoy!</h2>
   <p >we've sent the download to your inbox</p>
   </div>
   <div class="text-center">
   
   <Link to="/demo" className='backhome'><FaLongArrowAltLeft /> Back Home</Link>
   </div>
   <div className='text-center'>
    <p className='thank'>If you have any issues <a href="#" className='thankyou'>contactus</a></p>
   </div>
   
   </section>
  );
}

export default ThankYou