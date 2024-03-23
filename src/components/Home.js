import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import mockdata from "../mockdata.json"
import { initialData } from './store/ProductSlice';
import Sarees from './Sarees';
import Gents from './Gents';
import Shirt from './Shirt';


const Home = () => {
    let dispatch = useDispatch();

    dispatch(initialData(mockdata.Prodcutdata))
    return (
        <div className='mt-10'>


            <Shirt />

        </div>
    )
}

export default Home