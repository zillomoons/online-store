import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {ItemType} from "../../App";

export interface CartState {
    items: CartItemType[]
    sum: number
    // itemsQty: number
}

const initialState: CartState = {
    items: [],
    sum: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<ItemType>){
            state.sum += action.payload.price;
            const index = state.items.findIndex(el => el.id === action.payload.id);
            if (index > -1) {
                state.items[index].qty += 1;
            } else {
                state.items.unshift({...action.payload, qty: 1} );
            }
        }
    },
    extraReducers: ()=>{}
})

export const {addItemToCart} = cartSlice.actions;
export const selectCartSum = (state: RootState) => state.cart.sum;
export const selectCartItems = (state:RootState) => state.cart.items

export default cartSlice.reducer;

export type CartItemType = ItemType & {
    qty: number
}
