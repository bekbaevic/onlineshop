import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../reducers/product.slice'
import categorySlice from '../reducers/category.slice'

export const store = configureStore({
    reducer: {product: productSlice, category: categorySlice},
})