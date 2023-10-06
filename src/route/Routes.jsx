import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carear from "../Pages/Carear/Carear";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
          path:'/carear',
          element:<Carear></Carear>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/news/:id',
          element:<PrivateRoutes><News></News></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;