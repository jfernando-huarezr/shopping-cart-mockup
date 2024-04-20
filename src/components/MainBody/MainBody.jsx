import { Outlet } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { PropTypes } from 'prop-types'
import { CartContext } from '../../App'

const MainBody = () => {
  const { setCartCounter } = useContext(CartContext)
  const [itemsCart, setItemsCart] = useState([])

  useEffect(() => {
    const totalQuantity =
      itemsCart.length == 0
        ? 0
        : itemsCart.reduce((acc, item) => acc + item.quantity, 0)

    setCartCounter(totalQuantity)
  }, [itemsCart, setCartCounter])

  return (
    <main data-testid="main" className="relative z-0 h-full w-full bg-white">
      <Outlet context={[itemsCart, setItemsCart, setCartCounter]} />
    </main>
  )
}

MainBody.propTypes = {
  setCartCounter: PropTypes.func,
}

export default MainBody
