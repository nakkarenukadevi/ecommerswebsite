import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Feamales from "./Feamales";
import Gents from "./Gents";
import Kids from "./Kids";
import Product from "./Product";
import Shirt from "./Shirt";
import ProductData from "./ProductData";

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "females",
                element: <Feamales />,


            }
            ,
            {
                path: "gents",
                element: <Gents />
            },
            {
                path: "kids",
                element: <Kids />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "shrit",
                element: <Shirt />
            }
            ,
            {
                path: "productData",
                element: <ProductData />
            }

        ]


    }

]);
export default router