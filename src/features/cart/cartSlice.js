import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
        //payload: newItem
        state.cart.push(action.payload)
    },
    deleteItem(state, action) {
        //payload: pizzaId
        state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    incQuan(state, action) {
        const item = state.cart.find(i => i.pizzaId === action.payload)
        item.quantity++
        item.totalPrice = item.quantity * item.unitPrice
    },
    decQuan(state, action) {       
        const item = state.cart.find(i => i.pizzaId === action.payload)
        item.quantity--
        item.totalPrice = item.quantity * item.unitPrice
        if (item.quantity === 0) state.cart.filter(item => item.pizzaId !== action.payload)
},
    clearCart(state, action) {
        state.cart = []
    },
  },
});

export const { addItem, deleteItem, decQuan, incQuan, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getTotalQuan = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getCurrentQuanById = id => (state) => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0