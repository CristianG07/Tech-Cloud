import { Link } from 'react-router-dom'
// components
import { ImageSlide } from './ImageSlide'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { carbon_security, light_payments, light_truck } from '@/assets/images'
import { InputSelect } from './InputSelect'

export const Product = ({
  category,
  brand,
  image,
  name,
  actual_price,
  delivery,
  guarantee,
  payment_methods
}) => {
  return (
    <section className='w-[90%] lg:w-[70%] mx-auto pb-20 pt-16'>
      <div className='grid gap-10'>
        <div className='flex justify-between items-center'>
          <div className='text-accent_primary capitalize flex gap-2'>
            <Link to='/'>Home</Link> /
            <Link to={`/category/${category}`}>{category}</Link> /
            <span>{brand}</span>
          </div>
          <div className='hidden md:block'>
            <InputSelect />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10'>
          <div className='w-full mx-auto'>
            <ImageSlide image={image} />
          </div>
          <div className='flex flex-col justify-center gap-10 md:gap-5 w-full md:w-[69%] mx-auto text-pretty'>
            <div className='flex flex-col  gap-5 mx-auto text-pretty'>
              <h3 className='text-xl md:text-lg lg:text-xl font-medium'>
                {name}
              </h3>
              <div className='flex items-center justify-between text-dark_primary'>
                <span className='text-base'>Available</span>
                <button>
                  <FaRegHeart size={22} />
                </button>
              </div>
              <span className='text-2xl lg:text-3xl font-medium'>
                {actual_price} zł
              </span>
              <button className='bg-dark_primary py-3 rounded-lg text-white text-base'>
                Add to card +
              </button>
            </div>
            <div className='grid gap-2 text-nowrap'>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={light_truck} alt='' />
                </span>
                {delivery}
              </p>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={carbon_security} alt='' />
                </span>
                {guarantee}
              </p>
              <p className='flex items-center gap-2 text-sm lg:text-base'>
                <span className='w-6'>
                  <img src={light_payments} alt='' />
                </span>
                {payment_methods}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}
