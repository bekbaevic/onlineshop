import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../reducers/product.slice'
import categorySlice from '../reducers/category.slice'
import favouriteSlice from '../reducers/favourite.slice'
import basketSlice from '../reducers/basket.slice'

export const store = configureStore({
    reducer: { product: productSlice, category: categorySlice, favourite: favouriteSlice, basket: basketSlice },
})