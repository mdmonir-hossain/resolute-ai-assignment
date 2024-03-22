import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import MainLayout from "../Components/Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      }
    ],
  },
]);

export default Routes;