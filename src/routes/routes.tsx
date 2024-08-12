import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "../pages/PrivateRoutes";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    element: <PrivateRoutes />,
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        path: "/",
        element: <Layout />,
        errorElement: <h1>Something went wrong</h1>,
        children: [{ index: true, element: <h1>Welcome to the home page</h1> }],
      },
    ],
  },
]);

export default router;
