import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CartState {
    items: []
    sum: number
    itemsQty: number
}
const initialState: CartState = {
    items: [],
    sum: 0,
    itemsQty: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: ()=>{}
})

export const {} = cartSlice.actions;
export const selectCartSum = (state: RootState) => state.cart.sum;
export const selectCartItemsQty = (state: RootState) => state.cart.itemsQty;

export default cartSlice.reducer;
