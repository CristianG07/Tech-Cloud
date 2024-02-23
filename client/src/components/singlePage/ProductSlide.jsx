import { ButtonFavorite } from "../ui/ButtonFavorite"
import { useNavigate } from 'react-router-dom'

export const ProductSlide = (product) => {
  const { id, image, name,actual_price, discounted_price } = product
  const navigate = useNavigate()

  const handleClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div onClick={() => handleClick(id)} className='cursor-pointer p-1 mb-5 md:mb-8 w-full'>
      <div className="max-w-sm">
        <img src={image} alt={name} loading='lazy' />
      </div>
      <div className='space-y-1 py-5'>
        <p className=''>{name}</p>
        <div className='flex justify-between pr-2'>
          <div className='grid'>
            <span className={`${discounted_price ? 'text-red-500' : ''} text-lg font-semibold`}>
              {actual_price} zł
            </span>
            {discounted_price && (
              <span className='text-discounted_price text-base line-through font-semibold'>
                {discounted_price} zł
              </span>
            )}
          </div>
          <div>
            <ButtonFavorite {...product} />
          </div>
        </div>
      </div>
    </div>
  )
}