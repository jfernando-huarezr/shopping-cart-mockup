import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home/Home.jsx";
import Marketplace from "./components/Marketplace/Marketplace.jsx";
import About from "./components/About/About.jsx";
import Cart from "./components/Cart/Cart.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "marketplace",
          element: <Marketplace />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    /*     {
      path: "marketplace",
      element: <Marketplace />,
      children: [
        {
          path: ":handle",
          element: <ItemDetails />,
        },
      ],
    },
    {
      path: "about",
      element: <AboutUs />,
    }, */
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
