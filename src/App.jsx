import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main
        data-testid="main"
        className="flex w-full grow flex-col bg-gradient-to-r from-yellow-200 to-green-200"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
