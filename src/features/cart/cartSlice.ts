import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {ItemType} from "../../App";

export interface CartState {
    items: CartItemType[]
    sum: number
}

const initialState: CartState = {
    items: [],
    sum: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<ItemPreview>){
            state.sum += action.payload.price;
            const index = state.items.findIndex(el => el.id === action.payload.id);
            if (index > -1) {
                state.items[index].qty += 1;
            } else {
                state.items.unshift({...action.payload, qty: 1} );
            }
        },
        removeItemFromCart(state, action: PayloadAction<ItemPreview>){
            state.sum -= action.payload.price;
            const index = state.items.findIndex(el=> el.id === action.payload.id);
            if (index > -1){
                state.items[index].qty -=1;
                if (state.items[index].qty === 0){
                    state.items.splice(index, 1);
                }
            }
        }
    },
    extraReducers: ()=>{}
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export const selectCartSum = (state: RootState) => state.cart.sum;
export const selectCartItems = (state:RootState) => state.cart.items

export default cartSlice.reducer;

export type ItemPreview = Omit<ItemType, 'description' | 'imgUrl' | 'altName'>

export type CartItemType = ItemPreview & {
    qty: number
}
