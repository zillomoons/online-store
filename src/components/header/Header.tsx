import {useNavigate} from "react-router-dom";
import {PATH} from "../../App";
import {useAppSelector} from "../../app/hooks";
import {selectCartSum} from "../../features/cart/cartSlice";

const headerStyle = {
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'darkcyan',
    color: 'white',
    padding: '15px',
}

export const Header = () => {
    const cartSum = useAppSelector(selectCartSum);
    const navigate = useNavigate();
    const onClickHandler = () => navigate(PATH.CART);

    return (
        <div style={headerStyle}>
            <div>{cartSum === 0 ? null : cartSum}</div>
            <button onClick={onClickHandler} style={{padding: '10px 25px'}}>Cart</button>
        </div>
    )
}
