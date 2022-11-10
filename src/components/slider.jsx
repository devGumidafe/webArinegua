import Image from 'next/image';
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><Image src='/images/logo.png' alt='Logo' width={300} height={300} /></SwiperSlide>
      <SwiperSlide><Image src='/images/logo.png' alt='Logo' width={300} height={300} /></SwiperSlide>
      <SwiperSlide><Image src='/images/logo.png' alt='Logo' width={300} height={300} /></SwiperSlide>
      <SwiperSlide><Image src='/images/logo.png' alt='Logo' width={300} height={300} /></SwiperSlide>
    </Swiper>
     
    );
  };
  
  export default Slider;