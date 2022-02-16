import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import {loadState, saveState} from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(()=>{
  saveState({
    cart: store.getState().cart
  })
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
