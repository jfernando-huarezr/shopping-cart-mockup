import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const MainBody = (props) => {
  const setCartCounter = props.setCartCounter
  const [itemsCart, setItemsCart] = useState([])
  return (
    <main
      data-testid="main"
      className="z-0 flex w-full grow flex-col bg-gradient-to-r from-yellow-200 to-green-200"
    >
      <Outlet context={[setCartCounter, itemsCart, setItemsCart]} />
    </main>
  )
}

export default MainBody
