import React from 'react'

const Shirt = (props) => {
    return (
        <div className='py-10 flex flex-nowrap '>
            <div className=''><img src={props.item.image} style={{ width: "200px", height: "200px" }} /></div>
        </div>
    )
}

export default Shirt