import React from 'react';
import './Products.scss'
import ExtensionsData from "./data"

function ExtensionsProduct () {
  return <div className='mainContainer'>
    {ExtensionsData.map((d)=>(
    <div className='main'>
      
        <div className='productContainer'>
        <div className='imageContainer'>
          <img src={d.Image} />
  
        </div>
        <div className='productDetails'>
        <h1>{d.title}</h1>
        <h2>Product price</h2>
         <div className='buttonContainer'>
           <button className='btn-grad'>Add To Cart</button>
           <button className='btn-grad' >Buy Now</button>
         </div>
         </div>
  
        </div>
     
    
   
    </div>
    ))}
    
      

  
   

      </div>

  
  

}

export default ExtensionsProduct ;
