import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselSlide from "./CarouselSlide";

const Carousel = props => {
  return(
    <div className='carousel-container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoHeight= {true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
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