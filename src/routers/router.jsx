import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbarr from "../components/Navbarr";
import CCatagories from "../components/CCatagories";
import Footer from "../components/Footer";
import CatagoriesDetails from "../components/CatagoriesDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../components/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../components/Profile";
import Loading from "../components/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // ✅ Your main layout
    children: [
      {
        index: true,
        element: <div></div>, // ✅ Can be replaced with your landing component
      },
      {
        path: "ccatagories", // ✅ no starting slash needed inside children
        element: <CCatagories />,
      },
      {
        path: "footer",
        element: <Footer />, // ✅ You had a typo: < Footer/>
      },
      {
        path: "ccatagories/:id",
        element: <PrivateRoute>
            <CatagoriesDetails />
        </PrivateRoute>,//
        loader: () => fetch("/data.json"),
         hydrateFallbackElement:<Loading></Loading>,
      },
    ],
  },
  {
      path:"/auth",
      element:<AuthLayout></AuthLayout>,
      children:[
        {
            path:"/auth/login",
            element:<Login></Login>,
        },
        {
            path:"/auth/register",
            element:<Register></Register>,
        }
      ]

  },
  {
    path: "navbar",
    element: <Navbarr />,
  },
  {
    path: "*", // ✅ wildcard for 404
    element: <h2>Error 404</h2>,
  },
  {
    path:"/profile",
    element:<Profile></Profile>
  }
]);

export default router;