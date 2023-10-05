import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carear from "../Pages/Carear/Carear";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
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
        }
      ]
    },
  ]);

  export default router;