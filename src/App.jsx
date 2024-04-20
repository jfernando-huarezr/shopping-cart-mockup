import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainBody from './components/MainBody/MainBody'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext({
  cartCounter: 0,
  setCartCounter: () => {},
})

function App() {
  const [cartCounter, setCartCounter] = useState(0)

  return (
    <CartContext.Provider value={{ cartCounter, setCartCounter }}>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <MainBody />
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default App
