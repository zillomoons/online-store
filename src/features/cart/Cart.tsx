import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCartSum} from "./cartSlice";

const orderFormStyle = {
    display: 'flex',
    flexDirection: 'column',
}
export const Cart = () => {
    const cartSum = useAppSelector(selectCartSum);
    const dispatch = useAppDispatch();
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Cart</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '50px 0'}}>
                <div style={{width: '400px', border: '1px solid'}}>
                <div>Subtotal: {cartSum} rub.</div>
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
