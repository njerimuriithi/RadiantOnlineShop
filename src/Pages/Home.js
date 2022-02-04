import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.scss'
function Home() {
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
          {data.map((item )=>(
              
               <card>
               <div className='imageContainer'>
                   <img src={item.img}  alt='Extension logo'/>
                   </div>
                   <div className='contentsContainer'>
                   <h2>{item.Title}</h2>
                   <div className='iconButtonContainer'>
     
                   <button>Shop now</button>
                   <ArrowForwardIcon className='arrowIcon'/>
                   </div>
                   </div>
                  
                   
                   
                  
               </card>

          ))}
     
        


      </div>
      
  </div>;
}

export default Home;
