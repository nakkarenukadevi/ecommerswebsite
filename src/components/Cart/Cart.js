import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementItem, decrementItem } from "../store/ProductSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    let { Cart } = useSelector((state) => state.product)


    let dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementItem(item))
    }
    const handleDecrement = (item) => {
        dispatch(decrementItem(item))
    }
    const handleremoveItem = (item) => {
        dispatch(removeItem(item))
    }

    return (<div className='absolute top-0 '>
        {Cart.length == "" ? <div className=' mt-20  text-center text-red-800  text-5xl font-bold '><h1>cart is empty</h1></div> : <div>   {Cart.map((item) => {
            return <div className='flex w-full mx-40 mt-40 justify-around items-center border-2 border-green-800'>
                <div><img src={item.image} alt="saree" style={{ widht: "200px", height: "200px" }} />
                </div>
                <div>{item.name}</div>
                <div className='flex m-10'>
                    <div className='mx-5'><button onClick={() => handleIncrement(item)}>+</button></div>
                    <div>{item.Qty}</div>
                    <div className='mx-5'><button onClick={() => handleDecrement(item)}>-</button></div></div>
                <div><FontAwesomeIcon icon={faTrash} className='text-red-800 text-2xl' onClick={() => {
                    handleremoveItem(item)
                }} /></div>

            </div>
        })}</div>}


    </div>
    )
}

export default Cart