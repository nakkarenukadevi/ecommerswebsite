import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../store/ProductSlice';
import { useParams } from 'react-router-dom';


const TshirtsData = () => {
    let parmas = useParams();
    let { data } = useSelector((state) => state.product);
    let dispatch = useDispatch();

    let singleProductdata = data.gents.tshirts.filter((item) => {
        if (item.id == parmas.id) {
            return true;
        }
        else {
            return false
        }

    });
    let handleaddcartItem = (item) => {

        dispatch(addtocart(item));

    }
    console.log(singleProductdata)

    let ProductdetailsKeys = Object.keys(singleProductdata[0].Productdetails);
    let ProductdetailsValus = Object.values(singleProductdata[0].Productdetails);


    return (
        <div className='absolute '>
            <div>{singleProductdata.map((item, index) => {

                return <div className='flex justify-center mt-40 mb-28 ' key={item.id}>
                    <div className='mx-40'>
                        <div>{<img src={item.image} alt="sareeimage" style={{ width: "500px", height: "500px" }} className='' />}</div>
                    </div>
                    <div className='w-4/12  '>
                        <div className='text-2xl font-bold'>{item.name}</div>
                        <div className='text-2xl mt-10 text-start text-blue-700 font-bold'>Price   RS/-{item.price}</div>

                        <div className='buttons '>
                            <button className='m-10 p-5 bg-red-600 text-white rounded-lg active:bg-red-400 font-semibold' onClick={() => {
                                handleaddcartItem(item)
                            }}>Add cart</button>
                            <button className=' p-5 bg-red-600 text-white rounded-lg active:bg-red-400 font-semibold'>Buy Now</button>

                        </div>



                        <div className='grid grid-cols-6 gap-2 mt-10 font-semibold '>
                            <div className='text-2xl text-rose-700 '>Productdetails:</div>

                            <div className='text-xl  col-start-1 col-end-3'>{ProductdetailsKeys.map((it) => {
                                return <div className='mt-2'>{it}</div>
                            })}</div>

                            <div className='col-start-3 col-end-6'>{ProductdetailsValus.map((ite) => {
                                return <div className='mt-3'>{ite}</div>
                            })}</div>

                        </div>



                    </div>
                </div>
            })
            }</div>
        </div>
    )
}

export default TshirtsData