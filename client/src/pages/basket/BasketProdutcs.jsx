import { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { CgMathMinus } from 'react-icons/cg'
import {
  getCartTotal,
  removeFromCart,
  toggleCartQty
} from '@/redux/products/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FormatPrice } from '@/utils/FormatPrice'

const BasketProdutcs = ({
  id,
  image,
  name,
  actual_price,
  discounted_price
}) => {
  const dispatch = useDispatch()
  const { data: cart } = useSelector((state) => state.cart)
  const [qty, setQty] = useState(1)
  const totalPrice = FormatPrice(actual_price * qty)
  const noItemCart = cart.length === 0
  console.log(cart)
  const totalPriceDiscounted = FormatPrice(discounted_price * qty)

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === id)
    if (itemInCart) {
      setQty(itemInCart.quantity)
    }
  }, [cart, id])

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
      dispatch(toggleCartQty({ id, type: 'DEC' }))
    }
  }

  const increaseQty = () => {
    setQty(qty + 1)
    dispatch(toggleCartQty({ id, type: 'INC' }))
  }

  return (
    <div className='mb-14'>
      {noItemCart ? (
        <div>
          <h5>there are no products</h5>
        </div>
      ) : (
        <div className='text-black'>
          <div className='flex gap-2'>
            <div className='max-w-[50%]'>
              <img src={image} alt='' />
            </div>

            <div className='space-y-3 md:space-y-5 lg:max-w-full'>
              <p className='text-sm mb-3 md:mb-5 max-w-40'>{name}</p>
              <div className='flex flex-col'>
                <span
                  className={`${discounted_price && 'text-red-500'} text-2xl`}
                >
                  {totalPrice}
                </span>
                {discounted_price && (
                  <span className='text-discounted_price text-xl line-through font-semibold'>
                    {totalPriceDiscounted}
                  </span>
                )}
              </div>
              <div className='flex text-lg items-center gap-2'>
                <button type='button' onClick={() => decreaseQty()}>
                  <CgMathMinus />
                </button>
                <span className='px-3 py-1 bg-white text-base border rounded-lg shadow-sm'>
                  {qty}
                </span>
                <button type='button' onClick={() => increaseQty()}>
                  <GoPlus />
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(id))}
                className='text-sm text-light_secondary underline'
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default BasketProdutcs
