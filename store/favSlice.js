import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   meals: []
}
export const favSlice = createSlice({
   name: 'fav',
   initialState,
   reducers: {
      addMealFav: (state, action) => {
         state.meals.push(action.payload[0])
      },
      removeMealFav: (state, action) => {
         state.meals = state.meals.filter((e) => e.id !== action.payload)
      }
   }
})

export const {addMealFav, removeMealFav} = favSlice.actions
