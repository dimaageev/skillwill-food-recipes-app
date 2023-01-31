import {createSlice} from '@reduxjs/toolkit'

const LIGHT = 'light'
const DARK = 'dark'

export const themeSlice = createSlice({
   name: 'theme',
   initialState: {
      theme: LIGHT
   },
   reducers: {
      toggleTheme: (state) => {
         state.theme = state.theme === LIGHT ? DARK : LIGHT
      }
   }
})

export const {toggleTheme} = themeSlice.actions
