import { Link } from 'react-router-dom'
// data
import { links_footer, links_footer2 } from '@/utils/data'

export const LinksFooter = () => {
  return (
    <div className='flex gap-10 lg:gap-36'>
      <div className='grid gap-3'>
        {links_footer.map((nav, i) => (
          <div key={i}>
            <Link to={nav.link}>{nav.text}</Link>
          </div>
        ))}
      </div>
      <div className='grid gap-3'>
        {links_footer2.map((nav, i) => (
          <div key={i}>
            <Link to={nav.link}>{nav.text}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
