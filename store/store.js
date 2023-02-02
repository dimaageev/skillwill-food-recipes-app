import {configureStore} from '@reduxjs/toolkit'
import {themeSlice} from './themeSlice'
import {categorySlice} from './categorySlice'
import {favSlice} from './favSlice'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const logger = createLogger({
   predicate: (getState, action) => action.type === 'fav'
})

export const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      category: categorySlice.reducer,
      fav: favSlice.reducer
   },
   middleware: [thunk, logger]
})

// https://jsonplaceholder.typicode.com/users - USER API
