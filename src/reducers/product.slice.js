import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    products: [],
    favouriteProducts: [],
    pro: {},
    isActive: false,
    productsURL: 'https://onlineshopdatabase.onrender.com/products',
    basket: [],
    productCount: []
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
        setFavouriteProducts(state, action) {
            state.favouriteProducts.push(action.payload)
        },
        deleteProductInFavouriteProduct(state, action) {
            state.favouriteProducts = state.favouriteProducts.filter(item => item.id !== action.payload)
        },
        setProInfo(state) {
            state.isActive = !state.isActive
        },
        setPro(state, action) {
            state.pro = action.payload
        },
        updateProductsURL(state, action) {
            state.productsURL = action.payload
        },
        updateProductToBasket(state, action) {
            state.basket.push(action.payload)
        },
        setBasketProductCount(state, action) {
            
        },
        deleteProductAtBasket(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        }

    }
}
)

export const { fetchingProducts, fetchedProducts, errorProducts, setBasketProductCount, deleteProductAtBasket, setFavouriteProducts, setProInfo, setPro, deleteProductInFavouriteProduct, updateProductsURL, updateProductToBasket } = ProductSlice.actions
export default ProductSlice.reducer