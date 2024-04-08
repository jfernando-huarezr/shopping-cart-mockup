import { useOutletContext } from 'react-router-dom'

const Cart = () => {
  const [itemsCart, setItemsCart] = useOutletContext()
  return <section>Your cart is Empty!</section>
}

export default Cart
