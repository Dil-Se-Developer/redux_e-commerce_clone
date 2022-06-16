import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItemToCartHandler, removeItemFromCartHandler } from '../../redux_toolkit/slices/cartItemSlice'
import GeneralHeader from '../UI/GeneralHeader'
import CartItem from './CartItem'
import './Cart.css'

const Cart = () => {
    const items = useSelector((state) => state.cartItems.items);
    const totalAmounts = useSelector((state) => state.cartItems.totalAmount);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const totalAmount = `₹${totalAmounts.toFixed(2)}`;
    const hasItems = items.length > 0;

    const cartCloseHandler = (event) => {
        event.preventDefault();
        Navigate('/')
    }

    const cartOrderHandler = (event) => {
        event.preventDefault();
        Navigate('/cart/order')
    }

    const cartItemRemoveHandler = (id) => {
        dispatch(removeItemFromCartHandler(id));
    };

    const cartItemAddHandler = (item) => {
        dispatch(addItemToCartHandler({ ...item, amount: 1 }));
    };


    return (
        <>
            <GeneralHeader />
            <ul className="cart_items">
                {items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        productimg={item.productimg}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        // onRemove = {() => {
                        //   cartItemRemoveHandler(item.id)
                        // }}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={cartCloseHandler}>
                    Close
                </button>
                {hasItems && <button className='order_button' onClick={cartOrderHandler}>Order</button>}
            </div>
        </>

    )
}

export default Cart