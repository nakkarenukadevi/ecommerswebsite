import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"

const Product = (props) => {
    let navigate = useNavigate()

    return (
        <div className='py-10 flex flex-nowrap '>
            <div className=''><img src={props.item.image} style={{ width: "200px", height: "200px" }} onClick={() => { navigate("prodcutData") }} /></div>
        </div>
    )
}

export default Product