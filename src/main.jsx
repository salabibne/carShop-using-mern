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
        element:<AddProducts></AddProducts>
      },
      {
        path:"/mycarts",
        element:<Mycart></Mycart>,
        loader : ()=>fetch('http://localhost:5000/brands/carts/showcart')
      },
      {
        path:"/brands/:brand_name",
        element:<SpecificBrands></SpecificBrands>,
        loader:({params}) => fetch(`http://localhost:5000/brands/${params.brand_name}`)
      },
      {
        path:"/brands/details/:id",
        element:<Details></Details>,
        loader :({params}) => fetch(`http://localhost:5000/brands/details/${params.id}`)
      },
      {
        path: "/brands/updates/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/brands/details/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);