import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addItemToCart, CartItemType, ItemPreview, removeItemFromCart, selectCartItems} from "./cartSlice";
import {selectCartSum} from "./cartSlice";


export const Cart = () => {
    const cartSum = useAppSelector(selectCartSum);
    const items = useAppSelector(selectCartItems);
    const dispatch = useAppDispatch();
    const onAdd = (item: ItemPreview) => {
        dispatch(addItemToCart(item));
    }
    const onRemove = (item: ItemPreview) => {
        dispatch(removeItemFromCart(item));
    }
    return (
        <div style={{border: '1px solid'}}>
            <table>
                <tbody style={{textAlign: 'left'}}>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Sum</th>
                </tr>
                {items.map(el => <CartRow key={el.id}
                                          onAdd={onAdd}
                                          onRemove={onRemove}
                                          item={el}/>)}
                </tbody>
            </table>

            <div>Subtotal: {
                cartSum
            } rub.
            </div>
        </div>
    )
}


const CartRow = (props: PropsType) => {

    const {item, onAdd, onRemove} = props;
    return (
        <tr>
            <td>{item.title}</td>
            <td style={{display: 'flex', gap: '15px', margin: '0 15px'}}>
                <button onClick={() => onRemove(item)}>-</button>
                <div>{item.qty}</div>
                <button onClick={() => onAdd(item)}>+</button>
            </td>
            <td>
                {item.qty * item.price}
            </td>
        </tr>
    )
}

type PropsType = {
    item: CartItemType
    onAdd: (item: ItemPreview) => void
    onRemove: (item: ItemPreview) => void
}

