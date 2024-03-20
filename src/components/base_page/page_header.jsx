import React, { useState } from 'react';
 import {FaBars} from 'react-icons/fa'
import { RiCloseLine } from "react-icons/ri";
 

import { Button, Dropdown } from 'antd';


  
 
function PageHeader() {
 
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobile(!isMobile);
    };
  
     const items = [
       {
         key: '1',
         label: (
           <a target="_blank" rel="noopener noreferrer" href="https:www.antgroup.com">
             Dropdown 1
           </a>
         ),
       },
       {
         key: '2',
         label: (
           <a target="_blank" rel="noopener noreferrer" href="https:www.aliyun.com">
               Dropdown 2
           </a>
         ),
       },
       {
         key: '3',
         label: (
           <a target="_blank" rel="noopener noreferrer" href="https:www.luohanacademy.com">
           Dropdown 3
           </a>
         ),
       },
     ];
  
     return (
  
       <nav className="navbar">
         <div className="logo" style={{marginLeft:"20px"}}>NineStar</div>
         <div className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
           <ul className="nav-menu">

           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">portfolio</a></li>
           
           {/* <div class="dropdown">
          <button class="dropbtn">Dropdown 
           <FaCaretDown/>
          </button>
       <div class="dropdown-content">
        <a href="#">dropdown1</a>
            <a href="#">dropdown 2</a>
            <a href="#">dropdown 3</a>
          </div>
        </div>  */}
  
   <div style={{marginTop:"2px"}}>
   <Dropdown 
         menu={{
           items,
         }}
         placement="bottomLeft"
         arrow>
        <Button  className="drop"style={{border:"none",}}>Dropdown</Button>
      </Dropdown></div>
 <li> <a href="#"></a></li>
    <li> <a href="#">Team</a></li>
   <li> <a href="#">ContactUs</a></li>
     <button className="cta" style={{marginRight:"20px"}}>Get Strated</button>
     </ul>
        </div>
        
  <button className="menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? < RiCloseLine  />: <FaBars />}
        </button>
        </nav>
        


  )
}

export default  PageHeader

 