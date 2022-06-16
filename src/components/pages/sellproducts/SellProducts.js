import React from 'react'
import SellCard from './SellCard'
import './SellProducts.css'

const SellProducts = (props) => {
//    console.log(props.sellProducts);
   return (
        <div className='sellproducts'>
            {props.sellProducts.map((sellProduct) => sellProduct ? <SellCard sellProduct={sellProduct} key={sellProduct.id} /> : null)}
        </div>
    )
}

export default SellProducts