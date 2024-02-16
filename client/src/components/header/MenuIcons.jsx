// images
import {
  bars,
  cart,
  heart_light,
  information_circle,
  profile_light
} from '@/assets/images'
// redux
import { useSelector, useDispatch } from 'react-redux'

export const MenuIcons = () => {
  const { favorites } = useSelector((state) => state.favorite)
  
  return (
    <div className='flex items-center gap-3 md:gap-6'>
      <button className='show_lg w-8 relative'>
        <img src={heart_light} alt='heart_light_icon' />
        {favorites.length > 0 && (
          <span className='absolute text-center font-sans text-sm font-medium -top-3 -right-2 bg-dark_primary h-6 w-6 flex items-center justify-center text-white rounded-full'>
            {favorites.length}
          </span>
        )}
      </button>
      <button className='w-8'>
        <img src={cart} alt='cart_icon' />
      </button>
      <button className='show_lg w-8'>
        <img src={profile_light} alt='profile_light_icon' />
      </button>
      <button className='show_lg w-8'>
        <img src={information_circle} alt='information_circle_icons' />
      </button>
      <button className='block lg:hidden w-8'>
        <img src={bars} alt='bars_icons' />
      </button>
    </div>
  )
}
