import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    let [productListPop, setProductListPop] = useState(false);
    let [femalesProductPop, setFemalesproductPop] = useState(false);
    let [gentsProductPop, setgentsProductPop] = useState(false);
    let [kidsProductPop, setKidsProductPop] = useState(false);




    let navigate = useNavigate()


    let { Cart } = useSelector((state) => state.product);
    let sum = 0
    Cart.forEach((item) => {

        return sum = item.Qty + sum
    })




    const showPrdocut = () => {
        setProductListPop(!productListPop)
    }
    const gotoFeamlepage = (cata) => {
        setKidsProductPop(false);
        setgentsProductPop(false)
        setFemalesproductPop(!femalesProductPop)


    }
    const gotoGentspage = () => {
        setFemalesproductPop(false)
        setgentsProductPop(!gentsProductPop)

    }
    const gotoKidspage = () => {
        setFemalesproductPop(false)
        setgentsProductPop(false)

        setKidsProductPop(!kidsProductPop)
    }
    const gotoProductpage = () => {

        setProductListPop(false)
        navigate("/sarees")
        setFemalesproductPop(false)
    }
    return <>
        <div className=' header bg-white z-20 shadow-lg flex justify-between md:flex-col p-4 items-center  top-0  fixed w-full  sm:text-2xl font-serif font-bold text-2xl text-red-900 xl:flex-row lg:flex-row  sm:flex-col '>
            <div className='mx-10'>
                <FontAwesomeIcon icon={faBars} onClick={() => {
                    showPrdocut()

                }} />
            </div>
            <div className=' font-extrabold text-4xl  italic text-orange-600 bg-gray-200 p-2 px-3 md:font-light mx-10 '>
                ShopNow

            </div>

            <div className='cart mx-10' >
                <Link to="cart"><FontAwesomeIcon icon={faCartPlus} />
                    ({sum})
                </Link>
            </div>


        </div>
        {productListPop ? <div className='fixed  top-20 left-0 px-10 py-2 bg-red-800 p-20 font-bold text-white'>


            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => gotoFeamlepage()} > Feamale</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => gotoGentspage()} > Gents</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => gotoKidspage()} > kids</div>

        </div > : null
        }
        {femalesProductPop ? <div className='fixed top-24 left-52 w-56 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white'>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black ' onClick={() => gotoProductpage()} > sarees</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => {
                setProductListPop(false)
                navigate("/dress")
                setFemalesproductPop(false)

            }}> dress</div>


        </div> : null}
        {gentsProductPop ? <div className='fixed top-24 left-52 w-56 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white'>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black ' onClick={() => {
                navigate('shrits');
                setgentsProductPop(false);
                setProductListPop(false);

            }} > shirts</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => {
                navigate("tshrits")
                setgentsProductPop(false);
                setProductListPop(false);
            }}> T shirts</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => {
                navigate("geans")
                setProductListPop(false);
                setgentsProductPop(false);

            }}> Gens</div>

        </div> : null}
        {kidsProductPop ? <div className='fixed top-24 left-52 w-56 z-50 px-10 py-2 bg-red-800 p-20 font-bold text-white'>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black ' onClick={() => {
                navigate("girlsdress");
                setKidsProductPop(false)
                setProductListPop(false)
            }}> GirlsFrocks</div>
            < div className='mt-3 px-8 py-3 bg-white rounded-lg text-black' onClick={() => {
                navigate("boysdress");
                setKidsProductPop(false)
                setProductListPop(false)
            }}

            > boys</div>
        </div> : null}


    </>

}

export default Header