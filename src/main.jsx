import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Componnets/Root/Root";
import Error from "./Componnets/Error/Error";
import Home from "./Componnets/Home/Home";
import AddProducts from "./Componnets/Home/AddProducts";
import Mycart from "./Componnets/Home/Mycart";
import SpecificBrands from "./Brands/SpecificBrands";
import Details from "./Brands/Details";
import Update from "./Brands/Update";
import Context from "./Componnets/Providers/Context";
import Login from "./Componnets/Authentication/Login";
import Registration from "./Componnets/Authentication/Registration";
import PrivateRoutes from "./Componnets/PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('brand.json')
      },
      {
        path:"/addproducts",
        element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,
      },
      {
        path:"/mycarts",
        element:<PrivateRoutes><Mycart></Mycart></PrivateRoutes>,
        loader : ()=>fetch('http://localhost:5000/brands/carts/showcart')
      },
      {
        path:"/brands/:brand_name",
        element:<SpecificBrands></SpecificBrands>,
        loader:({params}) => fetch(`http://localhost:5000/brands/${params.brand_name}`)
      },
      {
        path:"/brands/details/:id",
        element:<PrivateRoutes><Details></Details></PrivateRoutes>,
        loader :({params}) => fetch(`http://localhost:5000/brands/details/${params.id}`)
      },
      {
        path: "/brands/updates/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/brands/details/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
   <RouterProvider router={router} />
   </Context>
  </React.StrictMode>
);