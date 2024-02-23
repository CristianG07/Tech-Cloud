import { Link } from 'react-router-dom'
// data
import { contact_info, cualities_footer, links_socials } from '@/utils/data'
// components
import { Cualities } from '@/components/footer/Cualities'
import { Contact } from '@/components/footer/Contact'
import { Socials } from '@/components/footer/Socials'
import { LinksFooter } from '@/components/footer/LinksFooter'
// images
import { logo } from '@/assets/images'

export const Footer = () => {
  return (
    <footer>
      {/* section 1 */}
      <section className='bg-accent_primary text-text_primary px-5'>
        <div className='grid md:grid-cols-3 justify-center gap-y-10 md:gap-y-0 gap-5 lg:gap-20 mx-auto py-5 max-w-7xl'>
          {cualities_footer.map((cuality, i) => (
            <Cualities key={i} {...cuality} />
          ))}
        </div>
      </section>

      {/* section 2 */}
      <section className='text-text_secondary'>
        <div className='flex flex-col-reverse md:flex-row  items-center justify-center gap-10 lg:gap-36 py-16 px-5'>
          <div className='grid gap-4'>
            {/* logo */}
            <Link to='/' className='flex items-center gap-3 w-fit'>
              <div className='w-[90%] mx-auto'>
                <img src={logo} alt='logo' />
              </div>
              <p className='text-nowrap text-2xl text-black'>tech cloud</p>
            </Link>

            {/* contact */}
            <div className=''>
              {contact_info.map((info, i) => (
                <Contact key={i} {...info} />
              ))}
            </div>
          </div>

          {/* socials */}
          <div className='flex md:flex-col justify-center gap-5'>
            {links_socials.map((social, i) => (
              <Socials key={i} {...social} />
            ))}
          </div>

          {/* Links */}
          <LinksFooter />
        </div>
      </section>
    </footer>
  )
}
