import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";

import Gents from "./Gents";
import Kids from "./Kids";

import Shirt from "./Shirt";
import SareesData from "./SareesData";
import Cart from "./Cart/Cart";
import Sarees from "./Sarees";
import Dress from "./Dress";
import Tops from "./Tops";
import Tshirt from "./Tshirt";



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
                path: "gents",
                element: <Gents />
            },
            {
                path: "kids",
                element: <Kids />
            },
            {
                path: "/sarees",
                element: <Sarees />
            },
            {
                path: "/dress",
                element: <Dress />
            },
            {
                path: "/tops",
                element: <Tops />
            },
            {
                path: "shrits",
                element: <Shirt />
            },
            {
                path: "Tshrit",
                element: <Tshirt />
            }
            ,
            {
                path: "sarees/sareedata/:id",
                element: <SareesData />
            },
            {
                path: "cart",
                element: <Cart />
            }

        ]


    }

]);
export default router