import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCartHandler } from '../../../redux_toolkit/slices/cartItemSlice'
import './SellCard.css'

const SellCard = (props) => {
  const { id, productimg, price, name } = props.sellProduct

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCartHandler({
      id: id,
      productimg: productimg,
      name: name,
      amount: 1,
      price: price,
    }));
  };

  return (
    <div className='sellcard'>
      <img src={productimg} alt="sellitems" />
      <h3> &#x20B9; {price}</h3>
      <p>{name}</p>
      <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
  )
}

export default SellCard