import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonCart } from '../ui/ButtonCart'
import { ButtonFavorite } from '../ui/ButtonFavorite'
import { useNavigate } from 'react-router-dom'

export const ProductSlide = (product) => {
  const { id, image, name, actual_price, discounted_price } = product
  const navigate = useNavigate()

  const handleClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div
      onClick={() => handleClick(id)}
      className='cursor-pointer p-1 mb-5 md:mb-8 w-full'
    >
      <div className='max-w-sm'>
        <img src={image} alt={name} loading='lazy' />
      </div>
      <div className='space-y-1 py-5'>
        <p className=''>{name}</p>
        <div className='flex justify-between gap-1 pr-2'>
          <div className='grid'>
            <span
              className={`${
                discounted_price ? 'text-red-500' : ''
              } text-lg text-nowrap font-semibold`}
            >
              {FormatPrice(actual_price)}
            </span>
            {discounted_price && (
              <span className='text-discounted_price text-base line-through font-semibold'>
                {FormatPrice(discounted_price)}
              </span>
            )}
          </div>
          <div className='flex gap-2'>
            <div>
              <ButtonCart {...product} />
            </div>
            <div>
              <ButtonFavorite {...product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
