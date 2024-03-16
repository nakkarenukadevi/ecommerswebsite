import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import { Link } from 'react-router-dom';



const Feamales = () => {
    let Storedata = useSelector((state) => state.product.data)
    return (
        <div>
            <div className='py-10 grid grid-cols-6 gap-4 mx-auto' >{Storedata.Females.sarees.map((item) => {
                return <div key={item.id}><Product item={item} /></div>

            })}</div>
        </div>
    )
}

export default Feamales