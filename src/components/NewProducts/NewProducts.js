import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/_slick.scss"; 
import "slick-carousel/slick/_slickTheme.scss";
import './NewProducts.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

function NewProducts() {
  
    const newproducts =[
        {
            id:1,
            img:"/Assets/Home/nwpHome.png",
            Category:"HOMEWARE",
            Name:"Blender",
            Price:"2500/=",

        },
        {
            id:2,
            img:"/Assets/Electricals/nwpElec.png",
            Category:"Electricals",
            Name:"Smoother",
            Price:"2000/=",

        },
        {
            id:3,
            img:"/Assets/Phone/nwPhone1.png",
            Category:"PHONE ACCESORIES",
            Name:"Laptop",
            Price:"25000/=",

        },
        {
            id:4,
            img:"/Assets/Phone/nwPhone.png",
            Category:"PHONE ACCERORIES",
            Name:"Laptop",
            Price:"2000/=",

        },
        {
            id:5,
            img:"/Assets/Phone/nwPhone.png",
            Category:"PHONE ACCERORIES",
            Name:"Laptop",
            Price:"2000/=",

        },
    ]
  return <div>
       <h1>NEW PRODUCTS</h1>
       <Slider 
       autoplay={false}
       autoplaySpeed={1500}
       slidesToShow={4}
       slidesToScroll={2}
       infinite={true}
       >
       {
           newproducts.map((New)=>(

              <div className='newProductsContainer'>
                  <card  className='cardContainer'>
                  <div className='imgContainer'>
                  <img src={New.img} alt="newproducts"/>

                  </div>
                  <div className='Contents'>
           <h3>{New.Category}</h3>
           <h2>{New.Name}</h2>
           <h4>{New.Price}</h4>
           <div className='icons'>
               <div className='favouriteIcon'>
               <FavoriteBorderIcon />
               </div>
               <div className='visibilityIcon'>
               <VisibilityIcon/>
               </div>
               
           </div>
          
       </div>
 

                  </card>

              </div>

           ))
       }








      {/*
      <div className='newProductsContainer'>
           <div className='cardContainer'>
               <div className='imgContainer'>
              < img src={process.env.PUBLIC_URL+'/Assets/Home/home.png'} alt="newproducts"/>
               </div>
               <div className='Contents'>
                   <h3>category</h3>
                   <h2>cup</h2>
                   <h4>price</h4>
               </div>
           </div>
       
       </div>
       <div className='newProductsContainer'>
           <div className='cardContainer'>
               <div className='imgContainer'>
              < img src={process.env.PUBLIC_URL+'/Assets/Home/home.png'} alt="newproducts"/>
               </div>
               <div className='Contents'>
                   <h3>category</h3>
                   <h2>cup</h2>
                   <h4>price</h4>
               </div>
           </div>
       
       </div>
       <div className='newProductsContainer'>
           <div className='cardContainer'>
               <div className='imgContainer'>
              < img src={process.env.PUBLIC_URL+'/Assets/Home/home.png'} alt="newproducts"/>
               </div>
               <div className='Contents'>
                   <h3>category</h3>
                   <h2>cup</h2>
                   <h4>price</h4>
               </div>
           </div>
       
       </div>
      */}
    
       
       </Slider>
  
  </div>;
  }
export default NewProducts;



