import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import mockdata from "../mockdata.json"
import { initialData } from './store/ProductSlice';


const Home = () => {
    let dispatch = useDispatch();

    dispatch(initialData(mockdata.Prodcutdata))
    return (
        <div className='mt-40'>
            Home

        </div>
    )
}

export default Home