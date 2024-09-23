import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Adverimg1 from "../../assets/Images/Adver/Adverimg1.jpg";
import Adverimg2 from "../../assets/Images/Adver/Adverimg2.jpg";
import Adverimg3 from "../../assets/Images/Adver/Adverimg3.jpg";
import Adver5 from "../../assets/Images/Adver/Adver5.jpg";
import Adver6 from "../../assets/Images/Adver/Adver6.jpg";
import { BiSolidLeftArrow } from "react-icons/bi";
import Swal from 'sweetalert2';
import ImageWithLoader from '../ImageWithLoader';


const handleClick = () => {
  Swal.fire({
    title: 'متاسفیم!',
    text: ' به علت تغییرات این بخش در حال حاضر در دسترس  نیست',
    icon: 'info',
    confirmButtonText: 'باشه',
    background: '#222222',
    color: '#ffffff',
    confirmButtonColor: '#ff0000',
  });
};

const NavbarFooter = () => {
  return (
    <div>
      {/* Top */}
      <div className='lg:flex hidden gap-11 justify-center text-[17px] font-normal mt-4'>
        <Link to="/headset" className='hover:text-red-600 duration-500'>هدست</Link>
        <Link to="/keyboards" className='hover:text-red-600 duration-500'>انواع کیبوردها</Link>
        <Link to="/mouse" className='hover:text-red-600 duration-500'>ماوس</Link>
        <Link to="/joystick" className='hover:text-red-600 duration-500'>جوی استیک</Link>
        <Link to="/monitor" className='hover:text-red-600 duration-500'>مانیتور</Link>
        <Link to="/microphone" className='hover:text-red-600 duration-500'>میکروفون</Link>
        <Link onClick={handleClick} className='hover:text-red-600 duration-500'>انواع پاور</Link>
        <Link onClick={handleClick} className='hover:text-red-600 duration-500'>انواع لوازم جانبی</Link>
        <Link to="/auction" className='hover:text-red-600 duration-500'>حراج</Link>
      </div>

      {/* Bottom */}
      <div className='mt-4'>
        <Swiper
          navigation={true}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><ImageWithLoader src={Adver6} alt="Adver 6" /></SwiperSlide>
          <SwiperSlide><ImageWithLoader src={Adver5} alt="Adver 5" /></SwiperSlide>
          <SwiperSlide><ImageWithLoader src={Adverimg1} alt="Adver 1" /></SwiperSlide>
          <SwiperSlide><ImageWithLoader src={Adverimg2} alt="Adver 2" /></SwiperSlide>
          <SwiperSlide><ImageWithLoader src={Adverimg3} alt="Adver 3" /></SwiperSlide>
        </Swiper>

        <div className="justify-center items-center -mt-10 md:-mt-20 sm:flex hidden">
          <button
            onClick={() => {
              const target = document.getElementById("MostSellProducts");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white z-10 w-[70px] h-[24px] md:w-[130px] md:h-[40px] lg:w-[188px] lg:h-[60px] rounded-md text-[10px] md:text-base font-semibold hover:bg-red-600 hover:text-white duration-1000"
          >
            خرید آنلاین
            <BiSolidLeftArrow className='lg:mr-[136px] md:mr-[100px] text-[10px] -mt-[14px] hidden md:flex text-red-600' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavbarFooter;
