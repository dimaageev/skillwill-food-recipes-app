import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import CATEGORIES from '../data/CATEGORIES.json'
const initialState = {
   categorys: [],
   isLoading: false,
   erorr: ''
}

export const getCategorys = createAsyncThunk('categorys', async () => {
   try {
      const {data} = await axios.get(
         'https://jsonplaceholder.typicode.com/users'
      )
      return CATEGORIES
   } catch (error) {
      return error.message
   }
})

export const categorySlice = createSlice({
   name: 'Category',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getCategorys.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCategorys.fulfilled, (state, action) => {
            state.categorys = action.payload
            state.isLoading = false
         })
         .addCase(getCategorys.rejected, (state) => {
            state.erorr = 'Rejected'
            state.isLoading = false
         })
   }
})
