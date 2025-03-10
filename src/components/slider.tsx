import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import SliderImg1 from '../assets/slider-1.jpeg'
import SliderImg2 from '../assets/slider-2.jpeg'
import SliderImg3 from '../assets/slider-3.jpeg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Slider() {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        touchRatio={1}
        className="
          w-full h-[500px]
          [&_.swiper-button-next]:text-green-500
          [&_.swiper-button-prev]:text-green-500
          [&_.swiper-pagination-bullet]:bg-green-500
          [&_.swiper-pagination-bullet-active]:bg-green-600
        "
      >
        <SwiperSlide>
          <img
            src={SliderImg1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImg2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImg3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}