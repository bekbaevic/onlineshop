import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basketProducts: [],
    count: [],
    total: 0
}

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            if (state.basketProducts.find(item => item.id === action.payload.id)) {
                state.count = [{ id: action.payload.id, price: action.payload.price }, ...state.count]
                state.total += action.payload.price
            }
            else {
                state.basketProducts = [action.payload, ...state.basketProducts]
                state.count = [{ id: action.payload.id, price: action.payload.price }, ...state.count]
                state.total += action.payload.price
            }
        },
        deleteProduct: (state, action) => {
            state.basketProducts = state.basketProducts.filter(item => item.id !== action.payload.id)
            state.total -= action.payload.price * state.count.filter(item => item.id === action.payload.id).length
            state.count = state.count.filter(item => item.id !== action.payload.id)
        },
        decrementCount: (state, action) => {
            state.count.splice((state.count.indexOf(state.count.find(item => item.id === action.payload.id))), 1)
            state.total -= action.payload.price
        }
    }
})

export const { setBasket, deleteProduct, decrementCount } = BasketSlice.actions
export default BasketSlice.reducer