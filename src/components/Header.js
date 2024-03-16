import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let [productListPop, setProductListPop] = useState(false);
    let navigate = useNavigate()


    let menudata = useSelector((state) => state.product.data)
    let catageriName = Object.keys(menudata)

    const showPrdocut = () => {
        setProductListPop(!productListPop)

    }
    const gotopage = (cat) => {
        navigate(`${cat}`);
        setProductListPop(false)

    }
    return <>
        <div className=' header bg-white  shadow-lg flex justify-between md:flex-col p-4 items-center     sm:text-2xl font-serif font-bold text-2xl text-red-900 xl:flex-row lg:flex-row  sm:flex-col '>
            <div className='mx-10'>
                <FontAwesomeIcon icon={faBars} onClick={() => {
                    showPrdocut()

                }} />
            </div>
            <div className=' font-extrabold text-4xl  italic text-orange-600 bg-gray-200 p-2 px-3 md:font-light mx-10 '>
                shopNow

            </div>

            <div className='cart mx-10' >
                <FontAwesomeIcon icon={faCartPlus} />
            </div>


        </div>
        {productListPop ? <div className='absolute top-30 left-10  px-10 py-2 bg-black text-white'>
            <div>{catageriName.map((cat) => {
                return < div className='mt-3' onClick={() => { gotopage(cat) }}> {cat}</div>
            })}</div>

        </div> : null}

    </>

}

export default Header