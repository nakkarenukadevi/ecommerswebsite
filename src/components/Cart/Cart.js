import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let { data, Cart } = useSelector((state) => state.product)
    console.log(Cart)


    return (<div>
        {Cart.length == "" ? <div className='mt-40 text-center text-red-800 text-5xl font-bold'><h1>cart is empty</h1></div> : <div>   {Cart.map((item) => {
            return <div className='flex w-56 mx-60 mt-40'>
                <div><img src={item.image} alt="saree" style={{ widht: "200px", height: "200px" }} />
                    {item.name}</div>
                <div>{item.Qty}</div>

            </div>
        })}</div>}


    </div>
    )
}

export default Cart