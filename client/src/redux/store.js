import { configureStore } from '@reduxjs/toolkit'
// reducers
import productReducer from './products/productSlice'
import favoriteReducer from './products/favoriteSlice'
import categoryReducer from './products/categorySlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer,
    category: categoryReducer,
  }
})
