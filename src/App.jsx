import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main
        data-testid="main"
        className="grow flex items-center justify-center"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
