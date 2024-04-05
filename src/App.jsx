import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainBody from './components/MainBody/MainBody'
import { useState } from 'react'

function App() {
  const [cartCounter, setCartCounter] = useState(0)

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header cartCounter={cartCounter} />
      <MainBody setCartCounter={setCartCounter} />
      <Footer />
    </div>
  )
}

export default App
