import { FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const CategoryList = ({ id, image, name,actual_price, discounted_price }) => {
  const navigate = useNavigate()

  const handleClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div onClick={() => handleClick(id)} key={id} className='cursor-pointer'>
      <div>
        <img src={image} alt={name} loading='lazy' />
      </div>
      <div className='grid gap-2 py-5'>
        <p className='text-sm'>{name}</p>
        <div className='flex justify-between'>
          <div className='grid'>
            <span className={`${discounted_price ? 'text-red-500' : ''} text-lg lg:text-xl font-semibold`}>
              {actual_price} zł
            </span>
            {discounted_price && (
              <span className='text-discounted_price text-base line-through font-semibold'>
                {discounted_price} zł
              </span>
            )}
          </div>
          <div className='text-dark_primary'>
            <FaRegHeart size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}
