import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductData = () => {
    let parmas = useParams();
    let storeData = useSelector((state) => state.product.data);

    let singleProductdata = storeData.Females.sarees.filter((item) => {
        if (item.id == parmas.id) {
            return true;
        }
        else {
            return false
        }

    })


    return (
        <div>{singleProductdata.map((item, index) => {

            return <div className='flex justify-around mt-10' key={index}>
                <div>
                    <div>{<img src={item.image}></img>}</div>
                </div>
                <div>
                    <div className='text-3xl'>{item.name}</div>
                    <div className='text-2xl'>RS/-{item.price}</div>
                    <div>{

                        console.log(item.Productdetails)
                    }</div>
                </div>
            </div>
        })
        }</div>
    )
}

export default ProductData