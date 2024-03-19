import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'



const Sarees = () => {
    let Storedata = useSelector((state) => state.product.data);
    return (

        <div className='py-10 grid grid-cols-6 gap-4 ' >{Storedata.Females.sarees.map((item) => {
            return <Link to={"sareedata/" + item.id}><div className='mt-20' key={item.id}><img src={item.image} style={{ width: "200px", height: "300px" }} /></div></Link>

        })}</div>
    )
}

export default Sarees