import React from 'react';

import {useNavigate ,Link} from 'react-router-dom'
import NewProducts from '../components/NewProducts/NewProducts';
import Banner from '../components/Banner/Banner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.scss'
function Home() {
let Navigate =useNavigate();

    const data =[
        {
            id:"Extensions",
            Title:"Electrical Collections",
            img:"/Assets/Electricals/Extlogo.png",
          

        },
        {
            id:"Phone Accesorries",
            Title:"Phone Accessories",
            img:"/Assets/Phone/phoneacc.png",
        },
        {
            id:"Homeware",
            Title:"Homeware Collections",
            img:"/Assets/Home/home.png",
        

        },
    ]
  return <div className='homeContainer'>
      <div className='cardContainer'>
          {data.map((item   )=>(
              
               <card>
               <div className='imageContainer' key={item.id}>
                   <img src={item.img}  alt='Extension logo'/>
                   </div>
                   <div className='contentsContainer'>
                   <h2>{item.Title}</h2>
                   <div className='iconButtonContainer'>
     
                   <button 
            onClick={() => Navigate(`//${item.id}`)}
          >
           Shop Now
          </button>
         
                   <ArrowForwardIcon className='arrowIcon'/>
                   </div>
                   </div>
                  
                   
                   
                  
               </card>

          ))}
     
        


      </div>
      <div className='sections'>
          <NewProducts/>
          <Banner/>
      </div>
  </div>;
}

export default Home;
