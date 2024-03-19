import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonCart } from '../ui/ButtonCart'
import { ButtonFavorite } from '../ui/ButtonFavorite'
import { useNavigate } from 'react-router-dom'

export const CardProducts = (product) => {
  const { id, image, name, actual_price, discounted_price } = product
  const navigate = useNavigate()

  const handleClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div onClick={() => handleClick(id)} className='cursor-pointer'>
      <div>
        <img
          src={image}
          alt={name}
          // className='aspect-[46/51]'
        />
      </div>
      <div className='grid gap-2 py-5'>
        <p className=''>{name}</p>
        <div className='flex gap-2 justify-between'>
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
