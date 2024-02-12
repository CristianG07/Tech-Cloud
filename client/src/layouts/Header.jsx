import { useState } from 'react'
// images
import { arrow_down, close, logo, search } from '@/assets/images'
// components
import { MenuIcons } from '@/components/header/MenuIcons'
import { TabsCategories } from '@/components/header/TabsCategories'
import { Catalog } from '@/components/header/Catalog'
// ui
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger
// } from '@/components/ui/popover'

export const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className='relative bg-light_primary'>
      <div className='w-[90%] h-[5rem] md:h-24 mx-auto flex items-center justify-between gap-4'>
        <Link to='/' className='flex items-center gap-3'>
          <img src={logo} alt='logo' />
          <p className='hidden sm:block text-nowrap text-2xl'>tech cloud</p>
        </Link>
        <div className='flex items-center gap-24'>
          <div className='relative flex items-center w-full sm:w-[16rem]'>
            <div className='hidden lg:block absolute left-3'>
              <img src={search} alt='search_icon' />
            </div>
            <Input
              type='text'
              className='lg:rounded-r-none'
              placeholder='What are you looking for?'
            />
            <button className='hidden lg:block absolute h-full px-5 rounded-r-xl text-white text-sm font-medium left-full bg-light_secondary hover:bg-light_secondary/85 duration-500'>
              Search
            </button>
          </div>
          <div className='absolute lg:static flex justify-center top-full left-0 w-full lg:w-fit'>
            <button
              onClick={() => setToggle(!toggle)}
              className={`${
                toggle
                  ? 'bg-accent_primary hover:bg-accent_primary rounded-b-none lg:rounded-b-xl'
                  : 'bg-dark_primary hover:bg-dark_primary'
              } relative flex items-center justify-center gap-3 w-[90%] max-w-xl lg:w-fit px-4 h-12 lg:h-10 text-white rounded-xl transition-colors duration-500`}
            >
              Catalog
              <div>
                {toggle ? (
                  <div className='w-[1rem]'>
                    <img src={close} alt='close_icon' />
                  </div>
                ) : (
                  <div className='w-[.90rem]'>
                    <img src={arrow_down} alt='arrow_down_icon' />
                  </div>
                )}
              </div>
            </button>
            <Catalog toggle={toggle} />
          </div>
        </div>
        <MenuIcons />
      </div>
      <TabsCategories />
    </header>
  )
}
