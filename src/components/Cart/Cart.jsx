import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import ProductCardShopCart from '../ProductCardShopCart.jsx/ProductCardShopCart'

const Cart = () => {
  const [itemsCart, setItemsCart] = useOutletContext()

  const updateCartItem = (itemId, newQuantity) => {
    const updatedCart =
      newQuantity <= 0
        ? itemsCart.filter((item) => item.id !== itemId)
        : itemsCart.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item,
          )

    setItemsCart(updatedCart)
  }

  return itemsCart.length ? (
    itemsCart.map((element) => (
      <ProductCardShopCart
        key={element.id}
        element={element}
        updateCartItem={updateCartItem}
      />
    ))
  ) : (
    <h1>There are no items on the cart!</h1>
  )
}

export default Cart
