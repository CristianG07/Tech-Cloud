import { IoIosClose } from 'react-icons/io'
import { DialogClose, DialogHeader, DialogTitle } from '../ui/dialog'
import { CgMathMinus } from 'react-icons/cg'
import { GoPlus } from 'react-icons/go'
import { useEffect, useState } from 'react'
import { removeFromCart, toggleCartQty } from '@/redux/products/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const PopupCart = ({
  id,
  image,
  name,
  actual_price,
  discounted_price
}) => {
  const { data: cart } = useSelector((state) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  // Función para formatear el precio en el formato deseado (3 424,00)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN'
    }).format(price)
  }

  // Buscar el producto en el carrito cuando el componente se monta
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

  const totalPrice = formatPrice(
    parseFloat((actual_price || '').replace(/\s|,/g, '')) * qty
  )
  const totalPriceDiscounted = formatPrice(
    parseFloat((discounted_price || '').replace(/\s|,/g, '')) * qty
  )

  return (
    <>
      <DialogHeader>
        <DialogTitle className='flex justify-between items-center pr-2 md:px-6 text-2xl'>
          Your card
          <DialogClose>
            <div className='text-text_secondary'>
              <IoIosClose />
            </div>
          </DialogClose>
        </DialogTitle>
      </DialogHeader>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center'>
        <div className='text-black mt-5'>
          <div className='flex gap-2'>
            <div className='w-[50%]'>
              <img src={image} alt='' />
            </div>

            <div className='space-y-2 md:space-y-5 lg:max-w-full'>
              <p className='text-sm mb-3 md:mb-5 max-w-40 md:max-w-full'>
                {name}
              </p>
              <div className='flex flex-col'>
                <span className='text-2xl'>{totalPrice}</span>
                {discounted_price && (
                  <span className='text-discounted_price text-xl line-through font-semibold'>
                    {totalPriceDiscounted}
                  </span>
                )}
              </div>
              <div className='flex text-2xl items-center gap-2'>
                <button onClick={() => decreaseQty()}>
                  <CgMathMinus />
                </button>
                <span className='px-3 py-1 bg-white text-base border rounded-lg shadow-sm'>
                  {qty}
                </span>
                <button onClick={() => increaseQty()}>
                  <GoPlus />
                </button>
              </div>
              <DialogClose>
                <button
                  onClick={() => dispatch(removeFromCart(id))}
                  className='text-sm text-light_secondary underline'
                >
                  Delete item
                </button>
              </DialogClose>
            </div>
          </div>
        </div>
        <div className='w-full md:w-fit'>
          <button onClick={() => navigate(`/basket`)} className='bg-light_secondary py-3 rounded-lg text-white text-base w-full'>
            Buy
          </button>
          <DialogClose className='w-full'>
            <button className='py-3 text-base rounded-lg text-accent_primary w-full underline underline-offset-8'>
              Continue shopping
            </button>
          </DialogClose>
        </div>
      </div>
    </>
  )
}
