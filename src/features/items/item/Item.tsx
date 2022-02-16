import {ItemType} from "../../../App";
import {useAppDispatch} from "../../../app/hooks";
import {addItemToCart} from "../../cart/cartSlice";

export const Item = (props: PropsType) => {
    const {
        imgUrl,
        altName,
        title,
        description,
        price
    } = props;
    const dispatch = useAppDispatch();
    const addToCart = () => {
        dispatch(addItemToCart(props))
    }

    return (
        <div>
            <div>
                <img src={imgUrl} alt={altName}/>
            </div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <button onClick={addToCart}>add to cart</button>
        </div>
    )
}

type PropsType = ItemType
