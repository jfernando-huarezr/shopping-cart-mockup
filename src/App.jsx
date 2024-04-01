import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
