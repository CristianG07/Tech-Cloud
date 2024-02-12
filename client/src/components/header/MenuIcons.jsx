import { bars, cart, heart_light, information_circle, profile_light } from "@/assets/images"

export const MenuIcons = () => {
  return (
    <div className='flex items-center gap-3 md:gap-6'>
      <button className='show_lg w-8'>
        <img src={heart_light} alt='heart_light_icon' />
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
