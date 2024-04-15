import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {
  const [itemsCart, setItemsCart, setCartCounter] = useOutletContext()

  return <section>Your cart is Empty!</section>
}

export default Cart
