import React, { useContext } from 'react';
import './Products.scss'
import PhoneData from "./phoneData"
import CartContext from '../../context/Cart/CartContext';

function PhoneProducts () {
 const  {addToCart} = useContext(CartContext)

  return <div className='mainContainer'>
    {PhoneData.map((d)=>(
    <div className='main'>
      
        <div className='productContainer'>
        <div className='imageContainer'>
          <img src={d.Image} />
  
        </div>
        <div className='productDetails'>
        <h1>{d.title}</h1>
        <h2>{d.price}/=</h2>
         <div className='buttonContainer'>
           <button className='btn-grad'
            onClick={()=> addToCart(PhoneData)} >
              Add To Cart</button>
           <button className='btn-grad' >Buy Now</button>
         </div>
         </div>
  
        </div>
     
    
   
    </div>
    ))}
    
      

  
   

      </div>

  
  

}

export default PhoneProducts ;
