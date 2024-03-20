import React from 'react';
import { Collapse } from 'antd';

const CollapseItem =()=> {
    const text = (

        <div className='text'
          style={{
            paddingLeft:"30px",
            textAlign:"left",
            display:"block"}}
        >
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, <br />it can be found
          as a welcome guest in many households across the world.
        </div>
      );
      
      const text1 = (
        <div className='text'
          style={{
            paddingLeft:"30px",
            textAlign:"left",
             display:"block"
            
          }}
        >
           it can be found
          as a welcome guest in many households across the world.
        </div>
      );
      const text2 = (
          <div className='text'
            style={{
              paddingLeft:"30px",
            textAlign:"left",
            display:"block"
            }}
          >
             Known for its loyalty and faithfulness, it can be found
            as a welcome guest in many households across the world.
          </div>
        );
      const items = [
        
        {
          key: '1',
          label:'Non consectetur a erat nam at lectus urna duis',
          children: text,
        },
        {
          key: '2',
          label:  'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
          children: text1,
        },
        {
          key: '3',
          label: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
          children: text2,
        },
       
      ];
    return(
<>

<div className='flipflop'style={{display:"block"}}>
    <div >
    <h2 style={{display:"flex",justifyContent:"center",opacity:"1"}}>F.A.Q</h2>
          <p style={{display:"flex",justifyContent:"center"}}>Frequently Asked Questions</p>
    </div>
    <div class="line"></div>
   
    <Collapse  items={items } bordered={false} defaultActiveKey={['1']} style={{paddingLeft:"20px"}} /> 
    </div>
    
    </>
)
    
    }


export default CollapseItem