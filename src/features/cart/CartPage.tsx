import {Cart} from "./Cart";
import {OrderForm} from "../../components/order-form/OrderForm";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../App";

export const CartPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Cart</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '50px 0'}}>
                <Cart />
                <OrderForm />
            </div>
            <button onClick={()=> navigate(PATH.MAIN)}>back to main page</button>
        </>
    )
}
