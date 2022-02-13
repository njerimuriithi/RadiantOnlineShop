import React from 'react';

import {useNavigate ,Link} from 'react-router-dom'
import NewProducts from '../components/NewProducts/NewProducts';
import Banner from '../components/Banner/Banner';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.scss'
import SighUp from '../components/sighnup/SighUp';
function Home() {
let Navigate =useNavigate();


const handleElectricalPage =()=>{
    Navigate('/extensionproduct')
}


const handlePhoneProducts=()=>{
    Navigate('/phoneproducts')
}

const handleKitchenWarePage  =()=>{
    Navigate('/homeware')
}
  return <div className='homeContainer'>
      <div className='cardContainer'>
           {/*Electricals card */}
           <card>
               <div className='imageContainer'>
                   <img src={process.env.PUBLIC_URL +'/Assets/Electricals/Extlogo.png'}  alt='Extension logo'/>
                   </div>
                   <div className='contentsContainer'>
                   <h2>Electrical Products</h2>
                   <div className='iconButtonContainer'>
     
                   <button
                   onClick={handleElectricalPage}
          >
           Shop Now
           </button>
           <ArrowForwardIcon className='arrowIcon'/>
              </div>

              </div>
              </card>
                   

               {/*Phone accesorie */}
               <card>
               <div className='imageContainer'>
                   <img src={process.env.PUBLIC_URL +'/Assets/Phone/phoneacc.png'}  alt='Extension logo'/>
                   </div>
                   <div className='contentsContainer'>
                   <h2>Phone Accesorries</h2>
                   <div className='iconButtonContainer'>
     
                   <button
                   onClick={handlePhoneProducts}
          >
           Shop Now
          </button>
         
                   <ArrowForwardIcon className='arrowIcon'/>
                   </div>
                   </div> 
                  
               </card>
               {/*Homeware products */}
               <card>
               <div className='imageContainer'>
                   <img src={process.env.PUBLIC_URL +'/Assets/Home/home.png'}  alt='Extension logo'/>
                   </div>
                   <div className='contentsContainer'>
                   <h2>KitchenWare Products</h2>
                   <div className='iconButtonContainer'>
     
                   <button
                   onClick={handleKitchenWarePage}
          >
           Shop Now
          </button>
         
                   <ArrowForwardIcon className='arrowIcon'/>
                   </div>
                   </div> 
                  
               </card>
      </div>
      <div className='sections'>
          <NewProducts/>
          <Banner/>
          <SighUp/>
      </div>
  </div>;
}

export default Home;
