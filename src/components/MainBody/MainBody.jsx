import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

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
    <main data-testid="main" className="relative z-0 h-full w-full bg-white">
      <Outlet context={[itemsCart, setItemsCart, setCartCounter]} />
    </main>
  )
}

MainBody.propTypes = {
  setCartCounter: PropTypes.func,
}

export default MainBody
