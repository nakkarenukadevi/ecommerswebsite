import React from 'react'

import Product from './Product';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import mockdata from "../mockdata.json"
import { initialData } from './store/ProductSlice';


const Feamales = () => {

    // let dispatch = useDispatch();

    // dispatch(initialData(mockdata.Prodcutdata))
    let Storedata = useSelector((state) => state.product.data);

    return (

        <div className='py-10 grid grid-cols-6 gap-4 mx-auto' >{Storedata.Females.sarees.map((item) => {
            return <Link to={"productData/" + item.id}><div key={item.id}><Product item={item} /></div></Link>

        })}</div>

    )
}

export default Feamales