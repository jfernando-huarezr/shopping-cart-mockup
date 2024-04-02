import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main
        data-testid="main"
        className="flex grow items-center justify-center"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
