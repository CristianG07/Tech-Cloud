import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProducts } = productSlice.actions
export const getAllProducts = (state) => state.products
export default productSlice.reducer