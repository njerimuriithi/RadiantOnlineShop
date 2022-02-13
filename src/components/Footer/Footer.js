import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope ,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'

function Footer() {
  return (
    <div className='footerWrapper'>
        <div className='aboutusContainer'>
           <h1>ABOUT US</h1>
    
     <div className='contactWrapper'>
  
               <p >      <FontAwesomeIcon icon={faPhone} className="faPhone" /> +254718-189-00</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />   radiant.co.ke</p>
            <p><FontAwesomeIcon icon={faLocationDot} className="faLocation"  />1768 Koinange street</p>
            
           </div>

        </div>
        <div className='categoriesContainer'>
            <h1>CATEGORIES</h1>
             <p>Hot deals</p>
             <p>Electricals</p>
             <p>Phone Accesories</p>
             <p>KitchenWare</p>
            </div>
            <div className='infoContainer'>
                <h1>INFORMATION</h1>
                <p>About us</p>
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Orders and Returns</p>
                <p>Terms & Conditions</p>
            
            </div>
            <div className='servicesContainer'>
                <h1>SERVICES</h1>
              <p>My Account</p>
              <p>View Cart</p>
              <p>Wishlist</p>
              <p>Track My order</p>
              <p>Help</p>
            </div>
    </div>
  )
}

export default Footer