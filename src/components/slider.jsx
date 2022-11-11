import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={30}
      navigation
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      className='mySwiper'
    >
      <SwiperSlide>
        <a href='#Julia'>
          <Image src='/images/julia_cartel.jpg' alt='Logo' width={350} height={500} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#28.691'>
          <Image src='/images/28.691_cartel.jpg' alt='Logo' width={350} height={500} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#Julia'>
          <Image src='/images/julia_cartel.jpg' alt='Logo' width={350} height={500} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#28.691'>
          <Image src='/images/28.691_cartel.jpg' alt='Logo' width={350} height={500} />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
