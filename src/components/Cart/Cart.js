import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let { data, Cart } = useSelector((state) => state.product)
    console.log(Cart)
    return (
        <div className='mt-40 '>
            {Cart.map((item) => {
                return <div className='flex w-56 mx-60'>
                    <div><img src={item.image} alt="saree" style={{ widht: "200px", height: "200px" }} />
                        {item.name}</div>
                    <div>{item.length}</div>

                </div>
            })}
        </div>
    )
}

export default Cart