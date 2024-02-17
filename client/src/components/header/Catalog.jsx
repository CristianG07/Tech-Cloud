// components
import { Categories } from './Categories'
// data
import {
  Accessories,
  desktops,
  laptops,
  mobile_phones,
  tablets
} from '@/utils/data'

export const Catalog = ({ toggle }) => {
  return (
    <section
      className={`${
        toggle ? 'block' : 'hidden'
      } container_catalog absolute top-full lg:left-0 lg:right-0 mx-auto lg:max-w-[90%] bg-card_gray shadow-lg rounded-b-xl lg:rounded-xl py-7 lg:py-16 transition-opacity duration-700 z-30`}
    >
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-10 md:gap-16 sm:grid lg:flex sm:grid-cols-3 w-[90%] lg:w-fit mx-auto'>
          <div className='grid gap-2'>
            <h4 className='title_categories text-nowrap'>Mobile phones</h4>
            {mobile_phones.map((item, i) => (
              <Categories key={i} {...item} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Tablets</h4>
            {tablets.map((item, i) => (
              <Categories key={i} {...item} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Laptops</h4>
            {laptops.map((item, i) => (
              <Categories key={i} {...item} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Desktops</h4>
            {desktops.map((item, i) => (
              <Categories key={i} {...item} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Accessories</h4>
            {Accessories.map((item, i) => (
              <Categories key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
