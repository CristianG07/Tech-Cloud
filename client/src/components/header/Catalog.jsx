import { Categories } from './Categories'
import {
  Accessories,
  desktops,
  laptops,
  mobile_phones,
  tablets
} from '@/utils/data'

export const Catalog = ({props}) => {
  const { toggle, setToggle } = props
  return (
    <section
      className={`container_catalog absolute top-full right-0 left-0 mx-auto lg:max-w-[1140px] bg-card_gray shadow-lg rounded-b-xl lg:rounded-xl pt-7 pb-12 lg:py-14 z-30 transition-all duration-300 ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-10 md:gap-14 lg:gap-16 sm:grid lg:flex sm:grid-cols-3 w-[90%] lg:w-fit mx-auto'>
          <div className='grid gap-2'>
            <h4 className='title_categories text-nowrap'>Mobile phones</h4>
            {mobile_phones.map((item, i) => (
              <Categories key={i} {...item} setToggle={setToggle} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Tablets</h4>
            {tablets.map((item, i) => (
              <Categories key={i} {...item} setToggle={setToggle} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Laptops</h4>
            {laptops.map((item, i) => (
              <Categories key={i} {...item} setToggle={setToggle} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Desktops</h4>
            {desktops.map((item, i) => (
              <Categories key={i} {...item} setToggle={setToggle} />
            ))}
          </div>
          <div className='grid gap-2'>
            <h4 className='title_categories'>Accessories</h4>
            {Accessories.map((item, i) => (
              <Categories key={i} {...item} setToggle={setToggle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
