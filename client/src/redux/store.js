import { configureStore } from '@reduxjs/toolkit'
// reducers
import productReducer from './products/productSlice'
import favoriteReducer from './products/favoriteSlice'
import categoryReducer from './products/categorySlice'
import cartReducer from './products/cartSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer,
    category: categoryReducer,
    cart: cartReducer
  }
})
