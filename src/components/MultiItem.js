import React from 'react';
import "slick-carousel/slick/_slick.scss"; 
import "slick-carousel/slick/_slickTheme.scss";
import Slider from 'react-slick'
import './Carousel.scss'


function MultiItem() {
  return <div style={{margin:"30px"}}>
      <Slider autoplay={true}  slidesToShow={3} >
      {newproducts.map((New)=>(
   
   
   <card  className='cardContainer'>
        
   <div className='imgContainer'>
       

       
       <img src={New.img} alt="newproducts"/>

       </div> 
       <div className='Contents'>
           <h3>{New.Category}</h3>
           <h2>{New.Name}</h2>
           <h4>{New.Price}</h4>
           <div className='icons'>
               <FavoriteBorderIcon/>
               <VisibilityIcon/>
           </div>
          
       </div>
     
</card>


))}*/
      <div>
              <img 
              src=
             
            {process.env.PUBLIC_URL +'/Assets/Electricals/Extlogo.png'}/>
                
          </div>
          <div>
              <img 
              src=
              {process.env.PUBLIC_URL +'/Assets/Electricals/Extlogo.png'}/>
          </div>
          <div>
              <img 
              src=
              {process.env.PUBLIC_URL +'/Assets/Electricals/Extlogo.png'}/>
          </div>
          <div>
              <img 
              src=
              {process.env.PUBLIC_URL +'/Assets/Electricals/Extlogo.png'}/>
          </div>
        </Slider>
        </div>
}
export default MultiItem;
