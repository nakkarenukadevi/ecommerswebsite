import React from 'react'
import { useSelector } from 'react-redux'
import Shirt from './Shirt'


const Gents = () => {
    let Storedata = useSelector((state) => state.product.data)
    return (
        <div>
            <div className='py-10 grid grid-cols-6 gap-4 mx-auto' >{Storedata.gents.shirts.map((item) => {
                return <div key={item.id}><Shirt item={item} /></div>
            })}</div>
        </div>
    )
}

export default Gents