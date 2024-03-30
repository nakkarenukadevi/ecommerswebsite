import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Shirt = () => {

    let Storedata = useSelector((state) => state.product.data)
    return (<div className='py-10 grid grid-cols-6 gap-4 mx-auto mt-20'  >{Storedata.gents.shirts.map((item) => {

        return <div key={item.id}><Link to={'shirtdata/' + item.id}><img src={item.image} style={{ width: "200px", height: "200px" }} alt="productImage" /></Link>
            <div>{item.name}</div></div>
    })}
    </div>

    )
}

export default Shirt