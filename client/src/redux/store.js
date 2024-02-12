import { configureStore } from '@reduxjs/toolkit'
// reducers
import productsReducer from './products/productSlice'

export const store = configureStore({
  reducer: productsReducer,
})