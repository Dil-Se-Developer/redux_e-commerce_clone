import React from 'react'
import './SellCard.css'

const SellCard = (props) => {
  return (
    <div className='sellcard'>
      <img src={props.sellProduct.productimg} alt="sellitems" />
      <h3> &#x20B9; {props.sellProduct.price}</h3>
      <p>{props.sellProduct.name}</p>
      <button>Add To Cart</button>
    </div>
  )
}

export default SellCard