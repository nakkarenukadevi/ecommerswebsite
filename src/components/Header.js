import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    let [productListPop, setProductListPop] = useState(false);
    let [productPop, setProductPop] = useState(false)
    let navigate = useNavigate()


    let { data, Cart } = useSelector((state) => state.product)

    let catageriName = Object.keys(data)

    let femalesCatageries = Object.keys(data.Females)

    const showPrdocut = () => {
        setProductPop(!productPop)
    }
    const gotopage = (cata) => {
        navigate(`${cata}`)


    }
    const gotoProductpage = (cat) => {
        navigate(`${cat}`)
        setProductPop(false)
        setProductListPop(false)

    }
    return <>
        <div className=' header bg-white  shadow-lg flex justify-between md:flex-col p-4 items-center  top-0  fixed w-full  sm:text-2xl font-serif font-bold text-2xl text-red-900 xl:flex-row lg:flex-row  sm:flex-col '>
            <div className='mx-10'>
                <FontAwesomeIcon icon={faBars} onClick={() => {
                    showPrdocut()

                }} />
            </div>
            <div className=' font-extrabold text-4xl  italic text-orange-600 bg-gray-200 p-2 px-3 md:font-light mx-10 '>
                ShopNow

            </div>
            <div>
                <div>
                    <input type="text" name="search" className='border-black border-2 rounded-lg px-5 py-2' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='relative right-10' />
                </div>

            </div>
            <div className='cart mx-10' >
                <Link to="cart"><FontAwesomeIcon icon={faCartPlus} />({Cart.length})</Link>
            </div>


        </div>
        {/* {productListPop ? <div className='absolute top-20 left-0 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white'>
            <div>{catageriName.map((cata) => {

                return < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' key={cata.id} onClick={() => gotopage(cata)} > {cata}</div>
            })}</div>

        </div > : null
        } */}
        {productPop ? <div className='absolute top-20 left-0 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white'>
            <div> <div>{femalesCatageries.map((cat) => {
                console.log(cat)
                return < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => gotoProductpage(cat)} > {cat}</div>
            })}</div></div>


        </div> : null}
        {/* {productPop ? <div className='relative top-24 left-52 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white w-56'>gotopage()</div> : null} */}

    </>

}

export default Header