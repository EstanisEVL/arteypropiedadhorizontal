import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import CarouselSlide from './CarouselSlide';

const Carousel = props => {
  return(
    <div className='carousel-container'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoHeight= {true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;