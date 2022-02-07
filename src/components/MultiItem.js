import React ,{useEffect, useRef, useState} from 'react';

import './Carousel.scss'


function MultiItem() {
 const [timerDays ,setTimerDays] =useState('00');
 const [timerHours ,setTimerHours] =useState('00')
 const [timerMinutes ,setTimerMinutes] =useState('00')
 const [timerSeconds ,setTimerSeconds] =useState('00')

 let interval=useRef();
 const startTimer =()=>{
     const countDownDate= new Date('January 30, 2022').getTime();
     interval = setInterval (()=>{
         const now = new Date().getTime();
         const  distance =countDownDate-now;

         const days = Math.floor(distance / (1000*60*60*24))
         const hours = Math.floor(
             (distance % (1000*60*60*24)/(1000*60*60))
             )
         const minutes = Math.floor(
             (distance % (1000*60*60)/(1000*60))
             )
         const seconds = Math.floor((distance % (1000*60*60*24))/1000)

         if (distance < 0){
             //stop timer
             clearInterval(interval.current);
         }else{
             setTimerDays(days);
             setTimerHours(hours);
             setTimerMinutes(minutes)
             setTimerSeconds(seconds)
         }

     },1000)
 };
 console.log(startTimer)
 useEffect(()=>{
    startTimer();
    return() =>{
        clearInterval(interval.current);
    }
 },[]);

  return <div style={{margin:"30px"}}>
      <section className='timerContainer'>
          <p>Coount down</p>
          <section>
              <p>{timerDays}</p>
              <p>days</p>
              <span>:</span>
          </section>
          <section>
              <p>{timerHours}</p>
              <p>hours</p>
              <span>:</span>
          </section>
          <section>
              <p>{timerMinutes}</p>
              <p>minutes</p>
              <span>:</span>
          </section>
          <section>
              <p>{timerSeconds}</p>
              <p>Seconds</p>
              <span>:</span>
          </section>
      </section>
     
        </div>
}
export default MultiItem;
