import { profile_light_white } from '@/assets/images'
import { links_footer, links_socials, sidebar } from '@/utils/data'
import { Link } from 'react-router-dom'
import { Socials } from '../footer/Socials'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState } from 'react'

export const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)

  return (
    <div>
      <div
        className={`lg:hidden z-30 rounded-b-2xl shadow-lg ${
          isSidebarOpen ? 'absolute translate-x-0' : 'fixed translate-x-full'
        } calc_header w-[95%] max-w-full sm:max-w-[350px] transform transition duration-300 ease-in-out right-0`}
      >
        <div className='relative flex justify-center items-center gap-6 bg-dark_primary px-12 py-5 text-white'>
          <div className='w-10 h-10'>
            <img src={profile_light_white} alt='' />
          </div>
          <div className='flex text-lg text-nowrap text-black'>
            <button className='pr-3 text-white'>Log in</button>
            <div className='text-white'>|</div>
            <button className='pl-3 text-white'>Sign up</button>
          </div>
        </div>
        <div className='grid gap-6 bg-card_gray p-8 rounded-b-2xl'>
          <div className='grid gap-4'>
            {sidebar.map((item, i) => (
              <Link onClick={() => setIsSidebarOpen(false)} to={item.link} key={i} className='flex items-center gap-4'>
                <div>
                  <img src={item.icon} alt='' />
                </div>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          {/* socials */}
          <div className='flex gap-5 w-52'>
            {links_socials.map((social, i) => (
              <Socials key={i} {...social} />
            ))}
          </div>
          {/* Links */}
          <div className='grid gap-3 text-text_secondary text-sm'>
            {links_footer.map((nav, i) => (
              <div key={i}>
                <Link onClick={() => setIsSidebarOpen(false)} to={nav.link}>{nav.text}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
