import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main
        data-testid="main"
        className="grow flex items-center justify-center"
      >
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
