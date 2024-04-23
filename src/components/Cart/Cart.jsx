import { useOutletContext } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import ProductCardShopCart from '../ProductCardShopCart.jsx/ProductCardShopCart'
import Subtotal from '../Subtotal/Subtotal'
import { Link } from 'react-router-dom'

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

  const subtotal = useMemo(() => {
    return itemsCart.reduce(
      (acc, element) => acc + element.quantity * element.price,
      0,
    )
  }, [itemsCart])

  return itemsCart.length ? (
    <>
      <h1 className="pt-8 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
        Your cart
      </h1>
      <div className="mx-auto mt-8 grid grid-cols-12 gap-6 lg:max-w-fit">
        <div className="col-span-12 px-3 lg:col-span-8">
          {itemsCart.map((element) => (
            <ProductCardShopCart
              key={element.id}
              element={element}
              updateCartItem={updateCartItem}
            />
          ))}
        </div>
        <div className="sticky bottom-0 col-span-12 lg:col-span-4 ">
          <Subtotal subtotal={subtotal} />
        </div>
      </div>
    </>
  ) : (
    <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-4">
      <div className="flex flex-col items-center justify-center py-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="mb-4 h-24 w-24 text-gray-400"
        >
          <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
        </svg>
        <p className="mb-4 text-lg font-semibold text-gray-600">
          Your shopping cart is empty.
        </p>
        <Link
          to="/marketplace"
          className="rounded-md bg-blue-500 px-6 py-2 text-white shadow-md transition-colors duration-300 hover:bg-blue-600"
        >
          Let&apos;s go shopping!
        </Link>
      </div>
    </div>
  )
}

export default Cart
