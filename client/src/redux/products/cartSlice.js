import { createSlice } from '@reduxjs/toolkit'

const formatPrice = (price) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN'
  }).format(price)
}

const fetchFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  } catch (error) {
    console.error('Error fetching cart from localStorage:', error)
    return []
  }
}

const storeInLocalStorage = (data) => {
  try {
    localStorage.setItem('cart', JSON.stringify(data))
  } catch (error) {
    console.error('Error storing cart in localStorage:', error)
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: fetchFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0
  },
  reducers: {
    addToCart(state, action) {
      const tempItem = state.data.find((item) => item.id === action.payload.id)
      if (tempItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity
            let priceWithoutFormat = parseFloat(
              item.actual_price.replace(/\s|,/g, '')
            )
            let newTotalPrice = newQty * priceWithoutFormat

            return {
              ...item,
              quantity: newQty,
              totalPrice: formatPrice(newTotalPrice)
            }
          } else {
            return item
          }
        })
        state.data = tempCart
        storeInLocalStorage(state.data)

        state.totalAmount = state.data.reduce((total, item) => {
          let priceWithoutFormat = parseFloat(
            item.actual_price.replace(/\s|,/g, '')
          )
          return total + priceWithoutFormat * item.quantity
        }, 0)
        state.totalAmount = formatPrice(state.totalAmount)
      } else {
        state.data.push(action.payload)
        storeInLocalStorage(state.data)

        state.totalAmount = state.data.reduce((total, item) => {
          let priceWithoutFormat = parseFloat(
            item.actual_price.replace(/\s|,/g, '')
          )
          return total + priceWithoutFormat * item.quantity
        }, 0)
        state.totalAmount = formatPrice(state.totalAmount)
      }
    },
    removeFromCart(state, action) {
      const tempCart = state.data.filter((item) => item.id !== action.payload)
      state.data = tempCart
      storeInLocalStorage(state.data)

      state.totalAmount = state.data.reduce((total, item) => {
        let priceWithoutFormat = parseFloat(
          item.actual_price.replace(/\s|,/g, '')
        )
        return total + priceWithoutFormat * item.quantity
      }, 0)
      state.totalAmount = formatPrice(state.totalAmount)
    },
    toggleCartQty(state, action) {
      const tempCart = state.data.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity
          if (action.payload.type === 'INC') {
            tempQty++
          }
          if (action.payload.type === 'DEC') {
            tempQty--
            if (tempQty < 1) tempQty = 1
          }

          let priceWithoutFormat = parseFloat(
            item.actual_price.replace(/\s|,/g, '')
          )
          let tempTotalPrice = tempQty * priceWithoutFormat

          return {
            ...item,
            quantity: tempQty,
            totalPrice: formatPrice(tempTotalPrice)
          }
        } else {
          return item
        }
      })
      state.data = tempCart
      storeInLocalStorage(state.data)
    },
    getCartTotal(state) {
      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      )
      state.totalAmount = state.data.reduce((total, item) => {
        let priceWithoutFormat = parseFloat(
          item.actual_price.replace(/\s|,/g, '')
        )
        return total + priceWithoutFormat * item.quantity
      }, 0)

      state.totalAmount = formatPrice(state.totalAmount)
    }
  }
})

export const { addToCart, removeFromCart, toggleCartQty, getCartTotal } =
  cartSlice.actions
export default cartSlice.reducer
