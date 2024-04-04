import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainBody from './components/MainBody/MainBody'

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
