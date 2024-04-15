import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MainBody = (props) => {
  const setCartCounter = props.setCartCounter
  const [itemsCart, setItemsCart] = useState([])

  useEffect(() => {
    const totalQuantity =
      itemsCart.length == 0
        ? 0
        : itemsCart.reduce((acc, item) => acc + item.quantity, 0)

    setCartCounter(totalQuantity)
  }, [itemsCart, setCartCounter])

  return (
    <main
      data-testid="main"
      className="z-0 flex w-full grow flex-col bg-gradient-to-r from-yellow-200 to-green-200"
    >
      <Outlet context={[itemsCart, setItemsCart, setCartCounter]} />
    </main>
  )
}

export default MainBody
