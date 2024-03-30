import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";

import Gents from "./Gents";


import Shirt from "./shirts/Shirt";
import SareesData from "./sarees/SareesData";
import Cart from "./Cart/Cart";
import Sarees from "./sarees/Sarees";


import Tshirts from "./Tshirts/Tshirts";
import ShirtData from "./shirts/ShirtData";
import TshirtsData from "./Tshirts/TshirtsData";
import Geans from "./geans/Geans";
import GeansData from "./geans/GeansData";
import GirlsDress from "./kids/girlsDress";
import GrilsDressData from "./kids/girlsDressData"
import BoysDressData from "./kids/BoysDressData";
import BoysDress from "./kids/BoysDress";
import Dress from "./femalesDress/Dress";
import DressData from "./femalesDress/DressData";


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
                path: "dress",
                element: <Dress />

            },


            {
                path: "gents",
                element: <Gents />
            },
            {
                path: "girlsdress",
                element: <GirlsDress />
            },
            {
                path: "boysdress",
                element: <BoysDress />
            },
            {
                path: "/sarees",
                element: <Sarees />
            },


            {
                path: "shrits",
                element: <Shirt />
            },
            {
                path: "tshrits",
                element: <Tshirts />
            }
            ,
            {
                path: "geans",
                element: <Geans />
            }
            ,
            {
                path: "boysdress/boysdressdata/:id",
                element: <BoysDressData />
            },
            {
                path: "dress/dressdata/:id",
                element: <DressData />
            },
            {
                path: "girlsdress/girlsdressdata/:id",
                element: <GrilsDressData />
            },
            {
                path: "geans/geansdata/:id",
                element: <GeansData />
            },
            {
                path: "tshrits/tshirtsdata/:id",
                element: <TshirtsData />
            }
            ,
            {
                path: "sarees/sareedata/:id",
                element: <SareesData />
            },
            {
                path: 'shrits/shirtdata/:id',
                element: <ShirtData />
            },
            {
                path: "cart",
                element: <Cart />
            }

        ]


    }

]);
export default router