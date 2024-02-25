import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    categories: [],
    categoriesURL: 'https://onlineshop-database.onrender.com/categories',
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchingCategories: (state) => {
            state.isLoading = true
        },
        fetchedCategories: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        },
        errorCategories: (state) => {
            state.isLoading = false
        },
    }
}
)

export const { fetchingCategories, fetchedCategories, errorCategories } = CategorySlice.actions
export default CategorySlice.reducer