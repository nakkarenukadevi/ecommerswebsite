import React from 'react';

import { useDispatch } from 'react-redux';
import mockdata from "../mockdata.json"
import { initialData } from './store/ProductSlice';



const Home = () => {
    let dispatch = useDispatch();

    dispatch(initialData(mockdata.Prodcutdata));
    return (
        <div className=''>

            <div>
                <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=826&t=st=1711812892~exp=1711813492~hmac=71f1cb04400e82483bb4ca17f1662c27549ef7ce4f9530e098c7d52fa6c832a8" style={{ width: "100%", height: "100%" }} />
            </div>



        </div>
    )
}

export default Home