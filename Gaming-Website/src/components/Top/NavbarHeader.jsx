import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const NavbarHeader = () => {
  return (
    <>
      <div className='bg-[#DE3431] h-11 pt-2 cursor-default'>
        
        <Swiper
          navigation={true}
          autoplay={{ delay: 5000 }} 
          slidesPerView={1} 
          modules={[Navigation, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide><div className='flex items-center justify-center m-auto text-white text-[11px] sm:text-[14px] font-medium'>ارسال رایگان محصولات بالای یک میلیون تومان به سراسر کشور</div></SwiperSlide>
          <SwiperSlide><div className='flex items-center justify-center m-auto text-white text-[11px] sm:text-[14px] font-medium'>بازگشت وجه و عودت کالا تا 30 روز پس از ثبت سفارش امکان پذیر است</div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default NavbarHeader;
