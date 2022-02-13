import React ,{useContext} from 'react'
import CartContext from '.../context/Cart/CartContext'
import  './Cart.scss'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

   const {showCart , cartItems,showHideCart} =useContext(CartContext)


  return (
    <div>{showCart && (
        <div className='cartWrapper'>
            <div style={{textAlign:"right"}}>
                <i style={{cursor='pointer'}}
                className='Circle' aria-hidden='true'
                onClick={showHideCart}></i>
            </div>
              <div className='cartInnerWrapper'>
                  {cartItems.length === 0 ? (<h4>Cart is empty</h4>):
                  (
                      <ul>
                           {cartItems.map(item =>(
                               <CartItem key={item.id} item={item,}/>
                           ))}
                      </ul>
                  )
                  
                }
                  </div>
                  <div className='cartCartTotal'>
                      <div>Cart Total </div>


                  </div>

        </div>
    )
        }
        </div>
  )
}

export default Cart