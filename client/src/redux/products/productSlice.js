import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  showLoading: true
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload
    },
    setLoading: (state, { payload }) => {
      state.showLoading = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProducts, setLoading } = productSlice.actions
export default productSlice.reducer