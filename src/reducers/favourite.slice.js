import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourites: []
}

const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        setFavourites: (state, action) => {
            if (state.favourites.find(item => item.id === action.payload.id)) {
                state.favourites = state.favourites.filter(item => item.id !== action.payload.id)
            }
            else { state.favourites = [action.payload, ...state.favourites] }
        }
    }
})

export const { setFavourites } = FavouriteSlice.actions
export default FavouriteSlice.reducer