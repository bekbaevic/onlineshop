import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    categories: [],
    categoriesURL: 'https://onlineshopdatabase.onrender.com/categories'
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchingCategories(state) {
            state.isLoading = true
        },
        fetchedCategories(state, action) {
            state.isLoading = false
            state.categories = action.payload
        },
        errorCategories(state) {
            state.isLoading = false
        },
        updateCategoriesURL(state, action) {
            state.categoriesURL = action.payload
        }
    }
}
)

export const { fetchingCategories, fetchedCategories, errorCategories, updateCategoriesURL } = CategorySlice.actions
export default CategorySlice.reducer