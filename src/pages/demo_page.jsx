import React from 'react'

import Header from '../components/Header'

 import PageHeader from '../components/base_page/page_header'
import TopContent from '../components/topcontent'
import Cards from '../components/Cards'


import Flip from '../components/Flip'
import Team from '../components/Team'
import Content from '../components/Content'
//  import Client from '../components/Client'
// import ContactForm from '../components/ContactForm'

import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Copy from '../components/Copy'
import ContactForm from '../components/ContactForm'
// import Contact from '../components/Contact'




const DemoPage = () => {
  return (
 <div>

<div style={{display:"flex",width:"100%",justifyContent:"center"}}>
                 <PageHeader/> 
                </div>
<Header/>
<TopContent/>
<Cards/>
<Content />
{/* <Portfolio/> */}
 
<Team/>
 {/* <Client/> */}

  {/* <Contact /> */}
 <Flip />
 < ContactForm />

<Subscribe/>
<Footer/>
<Copy/>


 </div>
  )
};

export default DemoPage