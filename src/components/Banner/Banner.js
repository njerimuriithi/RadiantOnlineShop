import React, { useState ,useEffect } from 'react';
//import MultiItem from '../MultiItem';
import './Banner.scss'

function Banner() {
    

  return <div className='bannerContainer'>
  <div className='firstImageContainer'>
      <img src={process.env.PUBLIC_URL + '/Assets/Phone/laptopitem.png'}/>
  </div>
  <div className='contentsContainer'>
      <h1>HOT DEAL THIS WEEK</h1>
      <p>NEW COLLECTION UP TO 50% OFF</p>
      <div className='buttonContainer'>
          <button className='btn-grad'>SHOPNOW</button>
      </div>

  </div>
  <div className='secondImageContainer'>
      <img src={process.env.PUBLIC_URL +'/Assets/Phone/mobilephone.png'}/>
  </div>
  </div>;
}

export default Banner;
