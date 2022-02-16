import {useState} from "react";
import {useAppSelector} from "../../app/hooks";
import {selectCartItems} from "../../features/cart/cartSlice";

export const OrderForm = () => {
    const items = useAppSelector(selectCartItems);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const onSubmit = () => {
        const customer = {
            name,
            surname,
            address,
            phone
        }
      const order = JSON.stringify({
          customer: customer,
          cart: items
      })
        console.log(order);
    }
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' value={name} onChange={e=> setName(e.currentTarget.value)}/>
                <label htmlFor="">Surname</label>
                <input type="text" placeholder='Surname' value={surname} onChange={e=> setSurname(e.currentTarget.value)}/>
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Address' value={address} onChange={e=> setAddress(e.currentTarget.value)}/>
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='Phone' value={phone} onChange={e=> setPhone(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={onSubmit}>ORDER</button>
            </div>
        </div>

    )
}
