import { useContext } from "react";
import CartContext from '.../context/Cart/CartContext'


const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
  return (
    <div>
        <li>
            
        </li>

    </div>
  )
}

export default CartItem