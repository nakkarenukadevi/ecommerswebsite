import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dress = () => {
    let Storedata = useSelector((state) => state.product.data);
    return (

        <div className='py-10 grid grid-cols-5 gap-4 mx-20 ' >{Storedata.Females.dress.map((item) => {
            return <Link to={"dressdata/" + item.id}><div className='mt-20 shadow-lg p-4  rounded-xl  grid justify-center items-center' key={item.id}>
                <img src={item.image} style={{ width: "200px", height: "300px" }} className='rounded-lg ' />
                <button className='px-2 py-3 mt-10 bg-red-800 text-white font-bold font-xl  rounded-lg'>Buynow</button>
            </div></Link>

        })}</div>
    )
}

export default Dress