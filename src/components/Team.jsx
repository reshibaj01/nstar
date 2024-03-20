import React from 'react'

function Team() {
  return (
    <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up" >
          <h2 style={{display:"flex",justifyContent:"center",opacity:"0.5"}}>Team</h2>
          <p style={{display:"flex",justifyContent:"center"}}>Our team is always here to help</p>
          <div class="line"></div>
        </div>

        <div class="row">

          <div class="col-xl-3 col-lg-4 col-md-6" >
            <div class="member">
            <img src="https://source.unsplash.com/random/203x200"alt=""/>
              
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" >
            <div class="member">
            <img src="https://source.unsplash.com/random/207x200"alt=""/>
             
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" >
            <div class="member">
            <img src="https://source.unsplash.com/random/201x200"alt=""/>
              
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" >
            <div class="member">
            <img src="https://source.unsplash.com/random/204x200"alt=""/>
             
            </div>
          </div>

        </div>

      </div>
    </section>
   
        
  )
}

export default Team