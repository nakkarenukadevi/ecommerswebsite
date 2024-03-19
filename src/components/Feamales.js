// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import mockdata from "../mockdata.json"
// import { initialData } from './store/ProductSlice';
// import Sarees from './Sarees';


// const Feamales = () => {


//     let Storedata = useSelector((state) => state.product.data);

//     return (

//         <div className='py-10 grid grid-cols-6 gap-4 ' >{Storedata.Females.sarees.map((item) => {
//             return <Link to={"sarees/" + item.id}><div className='mt-20' key={item.id}><Sarees item={item} /></div></Link>

//         })}</div>

//     )
// }

// export default Feamales