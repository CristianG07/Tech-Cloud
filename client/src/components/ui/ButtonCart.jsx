import { CartCard } from '../icons/CartCard'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '@/redux/products/cartSlice'
import { useState } from 'react'

export const ButtonCart = (product) => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  const { data: carts } = useSelector((state) => state.cart)
  const isAddToCart = carts.some((cart) => cart.id === product.id)

  const toggleFavoriteHandler = (event) => {
    event.stopPropagation()
    if (isAddToCart) {
      dispatch(removeFromCart(product.id))
    } else {
      let newTotalPrice = product.actual_price
      const tempProduct = {
        ...product,
        quantity: qty,
        newTotalPrice
      };
      dispatch(addToCart(tempProduct))
    }
  }

  return (
    <button className='' onClick={toggleFavoriteHandler}>
      <CartCard
        className={`${
          isAddToCart ? 'fill-light_secondary' : 'lg:hover:fill-light_secondary'
        }`}
      />
    </button>
  )
}