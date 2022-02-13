import React from 'react'
import  './SighUp.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{
  faEnvelope,


} from '@fortawesome/free-solid-svg-icons'




const SighUp = () => {
  return (
    <div className='sighContainer'>

     <h1>Sign Up for the <span> NEWSLETTER</span> </h1>      
        <div className='inputWrapper'>
        <input  placeholder='Search'/>

<div className='subscribeWrapper'>
  
  <FontAwesomeIcon icon ={faEnvelope} className ='iconEnvelope'/>

  <h2>Subscribe</h2>
</div>
        </div>
    
    <div className='socialsWrapper'>
    
    </div>
  </div>
    
  )
}

export default SighUp