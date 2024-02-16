// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { SlidePrevButton } from './SlidePrevButton'
import { SlideNextButton } from './SlideNextButton'

export const ImageSlide = ({ image }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={true}
      speed={700}
      className='relative'
    >
      <SwiperSlide>
        <div className='p-8'>
          <img src={image} alt='' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='p-10'>
          <img src={image} alt='' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='p-10'>
          <img src={image} alt='' />
        </div>
      </SwiperSlide>
      <div className='absolute top-0 flex justify-between items-center w-full h-full'>
        <div>
          <SlidePrevButton />
        </div>
        <div>
          <SlideNextButton />
        </div>
      </div>
    </Swiper>
  )
}
