import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    products: [],
    productsURL: 'https://onlineshop-database.onrender.com/products',
    filteredProducts: [],
    searchFilterProducts: [],
    searchItem: '',
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchingProducts(state) {
            state.isLoading = true
        },
        fetchedProducts(state, action) {
            state.isLoading = false
            state.products = action.payload
        },
        errorProducts(state) {
            state.isLoading = false
        },
        filterWithCategory: (state, action) => {
            state.filteredProducts = action.payload
        },
        filterWithSearching: (state, action) => {
            state.searchItem = action.payload
            state.searchFilterProducts = state.filteredProducts.length === 0 ? state.products.filter(item => item.title.toLowerCase().indexOf(action.payload) > -1) : state.filteredProducts.filter(item => item.title.toLowerCase().indexOf(action.payload) > -1)
        },

    }
}
)

export const { fetchingProducts, fetchedProducts, errorProducts, filterWithCategory, filterWithSearching } = ProductSlice.actions
export default ProductSlice.reducer