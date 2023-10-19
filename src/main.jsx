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
        element:<Mycart></Mycart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);