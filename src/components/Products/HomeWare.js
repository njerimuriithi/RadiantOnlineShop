import React, { useContext } from 'react';
import './Products.scss'
import HomeWareData from "./homedata"
import CartContext from '../../context/Cart/CartContext';

function HomeWare () {
 const  {addToCart} = useContext(CartContext)

  return <div className='mainContainer'>
    {HomeWareData.map((d)=>(
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
            onClick={()=> addToCart(HomeWareData)} >
              Add To Cart</button>
           <button className='btn-grad' >Buy Now</button>
         </div>
         </div>
  
        </div>
     
    
   
    </div>
    ))}
    
      

  
   

      </div>

  
  

}

export default HomeWare ;
