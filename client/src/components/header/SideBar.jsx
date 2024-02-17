import { profile_light_white } from '@/assets/images'
import { links_footer, links_socials, sidebar } from '@/utils/data'
import { Link } from 'react-router-dom'
import { Socials } from '../footer/Socials'

export const SideBar = ({ isSidebarOpen }) => {
  return (
    <div className={`absolute lg:hidden z-30 rounded-b-2xl shadow-lg ${isSidebarOpen ? '' : 'translate-x-full'} w-[95%] max-w-full sm:max-w-[350px] transition-all duration-700 right-0 overflow-x-hidden`}>
      <div className='flex justify-center items-center gap-6 bg-dark_primary px-12 py-5 text-white'>
        <div className='w-10 h-10'>
          <img src={profile_light_white} alt='' />
        </div>
        <div className='flex text-lg text-nowrap'>
          <button className='pr-3'>Log in</button>
          <div>|</div>
          <button className='pl-3'>Sign up</button>
        </div>
      </div>
      <div className='grid gap-6 bg-card_gray p-8 rounded-b-2xl'>
        <div className='grid gap-4'>
          {sidebar.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className='flex items-center gap-4'
            >
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
              <Link to={nav.link}>{nav.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
