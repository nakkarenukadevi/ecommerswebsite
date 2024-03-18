import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import mockdata from "../mockdata.json"
import { initialData } from './store/ProductSlice';
import Product from './Product';

const Home = () => {
    let dispatch = useDispatch();

    dispatch(initialData(mockdata.Prodcutdata))
    return (
        <>
            Home

        </>
    )
}

export default Home