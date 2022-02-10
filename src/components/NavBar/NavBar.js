import React, { useContext } from 'react'
import Input from '../Input/Input'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope ,faLocationDot,faPhone,faUser,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons'
import NavBarList from '../NavBarList/NavBarList'
import CartContext from '../../context/Cart/CartContext'

function NavBar() {

    const {cartItems} = useContext(CartContext)

  return <div>
    <div className='navContainer'>
        <div className='nav'>
        <div className='navRight-container'>
            <p ><FontAwesomeIcon icon={faPhone}/> +254718-189-00</p>
            <p><FontAwesomeIcon icon={faEnvelope}/> radiant.co.ke</p>
            <p><FontAwesomeIcon icon={faLocationDot}  />1768 Koinange street</p>
            </div>

            <div className='navLeft-container'>
                <p> <FontAwesomeIcon icon={faUser}/>My account</p>
            </div>
        </div>
        
        <div className='secondNav'>
            <h1>RadiantShop <span>.</span></h1>
            <Input/>
            <div className='rightContents'>
                <div className='heartIcon'>
               <div  className='heart'>
               <FontAwesomeIcon icon={faHeart } />
                   </div> 
                <h3>Your Wishlist</h3>
                </div>
            
                <div className='cartIcon'>
                {cartItems.length > 0 &&<div className='itemCount'>
                        <span>{cartItems.length}</span></div>
                        
                        }
                    <div className='cart'>  <FontAwesomeIcon icon={faCartShopping}/></div>
                         
                    <h3>Your cart</h3>
                   
                </div>
                
           
            
            </div>
        </div>
        </div>
        <div className='navbarlistSection'>
        <NavBarList/>   
        </div>
          
  </div>;
}

export default NavBar;
