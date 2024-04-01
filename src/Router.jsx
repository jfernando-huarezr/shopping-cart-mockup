import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
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
