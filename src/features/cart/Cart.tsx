import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {CartItemType, selectCartItems} from "./cartSlice";
import {selectCartSum} from "./cartSlice";
import {useEffect, useState} from "react";
import {ItemType} from "../../App";

const orderFormStyle = {
    display: 'flex',
    flexDirection: 'column',
}
export const Cart = () => {
    const cartSum = useAppSelector(selectCartSum);
    const items = useAppSelector(selectCartItems);
    const dispatch = useAppDispatch();
    const [cartItems, setCartItems] = useState<CartItemType[]>(items);

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Cart</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '50px 0'}}>
                <div style={{width: '400px', border: '1px solid'}}>
                    {cartItems.map(item => <div key={item.id}>{item.title}--{item.qty}--{item.price}</div>)}
                <div>Subtotal: {
                    cartSum
                } rub.</div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <input placeholder='Name'/>
                    <input placeholder='Surname'/>
                    <input placeholder='Address'/>
                    <input placeholder='Phone'/>
                    <button>Order</button>
                </div>
            </div>

        </div>
    )
}

