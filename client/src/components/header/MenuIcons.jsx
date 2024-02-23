import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
// images
import {
  bars,
  cart,
  heart_light,
  information_circle,
  profile_light
} from '@/assets/images'
// redux
import { useSelector } from 'react-redux'
// components
import { PopUpLogin } from './PopUpLogin'
import { Link } from 'react-router-dom'
import { SideBar } from './SideBar'

export const MenuIcons = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const { favorites } = useSelector((state) => state.favorite)
  const { data: totalItems } = useSelector((state) => state.cart)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex items-center gap-2 lg:gap-6'>
      <button className='show_lg w-8 relative'>
        <img src={heart_light} alt='heart_light_icon' />
        {favorites.length > 0 && (
          <span className='absolute text-center font-sans text-sm font-medium -top-3 -right-2 bg-dark_primary h-6 w-6 flex items-center justify-center text-white rounded-full'>
            {favorites.length}
          </span>
        )}
      </button>
      <Link to='/basket' className='w-8 relative'>
        <img src={cart} alt='cart_icon' />
        {totalItems.length > 0 && (
          <span className='absolute text-center font-sans text-sm font-medium -top-3 -right-2 bg-dark_primary h-6 w-6 flex items-center justify-center text-white rounded-full'>
            {totalItems.length}
          </span>
        )}
      </Link>
      <OutsideClickHandler onOutsideClick={() => setOpenLogin(false)}>
        <button
          onClick={() => setOpenLogin(!openLogin)}
          className='show_lg w-8'
        >
          <img src={profile_light} alt='profile_light_icon' />
        </button>
        <PopUpLogin openLogin={openLogin} setOpenLogin={setOpenLogin} />
      </OutsideClickHandler>
      <Link to='/profile' className='show_lg w-8'>
        <img src={information_circle} alt='information_circle_icons' />
      </Link>

      <OutsideClickHandler onOutsideClick={() => setIsSidebarOpen(false)}>
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className='block lg:hidden w-8'
        >
          <img src={bars} alt='bars_icons' />
        </button>
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </OutsideClickHandler>
    </div>
  )
}
