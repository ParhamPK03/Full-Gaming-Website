import React, { useState, useEffect } from 'react';
import Background from "../../assets/Images/Main/home1-sale.png";
import ControlImg from "../../assets/Images/Main/Home-control.png";
import ProductSwiperSLider from './ProductSwiperSLider';
import Img2 from "../../assets/Images/Main/home7.png"
import HomeLogo from "../../assets/Images/Main/home-logo.png"
import Home11 from "../../assets/Images/Main/home-11.jpg"
import ImageWithLoader from '../ImageWithLoader';


const ProductWithOff = () => {


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

// Time
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-30T23:59:59").getTime(); 
    const now = new Date().getTime();
    const difference = targetDate - now;

    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return time;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

 
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className='sm:h-[1520px] h-[1360px] bg-cover bg-center mt-36'
      style={{ backgroundImage: `url(${Background})` }}
      id='ProductOff'
    >
      {/* Top */}
      <div className='flex justify-center sm:justify-around gap-0 sm:gap-20'>
        {/* Right */}
        <div className='pt-24'>
          <h2 className='text-red-600 text-[18px] md:text-[20px] lg:text-[30px] xl:text-[50px] font-semibold cursor-default'>محصولات تخفیف دار</h2>
          <h2 className='text-white text-[18px] md:text-[20px] lg:text-[30px] xl:text-[50px] font-semibold cursor-default'>تا 50 درصد تخفیف</h2>
          <h5 className='text-white text-[12px] lg:text-[14px] xl:text-[18px] font-medium mt-5 cursor-default'>عجله کنید و این فرصت استثنایی را از دست ندهید</h5>
          <hr className='hidden lg:flex w-[450px] mt-14' />
          <h6 className='bg-red-600 w-[100px] sm:w-[140px] md:w-[180px] h-8 lg:h-11 text-white text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-4 flex items-center justify-center cursor-default'>زمان باقیمانده تا پایان :</h6>
          {/* Time */}
          <div className='mt-8 text-white flex gap-3 cursor-default'>
            <span className='bg-red-600 w-[54px] h-[54px] sm:w-[62px] sm:h-[60px] lg:w-[74px] lg:h-[70px] items-center justify-center flex  text-base  sm:text-xl md:text-3xl lg:text-4xl font-bold flex-col rounded-sm rounded-b-2xl'>
              {timeLeft.seconds}
              <span className='lg:text-lg text-xs md:text-sm'>ثانیه</span>
            </span>
            <span className='bg-red-600 w-[54px] h-[54px] sm:w-[62px] sm:h-[60px] lg:w-[74px] lg:h-[70px] items-center justify-center flex text-base  sm:text-xl md:text-3xl lg:text-4xl font-bold flex-col rounded-sm rounded-b-2xl'>
              {timeLeft.minutes}
              <span className='lg:text-lg text-xs md:text-sm'>دقیقه</span>
            </span>
            <span className='bg-red-600 w-[54px] h-[54px] sm:w-[62px] sm:h-[60px] lg:w-[74px] lg:h-[70px] items-center justify-center flex text-base  sm:text-xl md:text-3xl lg:text-4xl font-bold flex-col rounded-sm rounded-b-2xl'>
              {timeLeft.hours}
              <span className='lg:text-lg text-xs md:text-sm'>ساعت</span>
            </span>
            <span className='bg-red-600 w-[54px] h-[54px] sm:w-[62px] sm:h-[60px] lg:w-[74px] lg:h-[70px] items-center justify-center flex text-base  sm:text-xl md:text-3xl lg:text-4xl font-bold flex-col rounded-sm rounded-b-2xl'>
              {timeLeft.days}
              <span className='lg:text-lg text-xs md:text-sm'>روز</span>
            </span>
          </div>
        </div>
        {/* Left */}
        <div className='-mt-16'>
          <ImageWithLoader className='xl:w-[100%] lg:w-[450px] md:w-[350px] sm:w-[300px] w-[240px] hidden sm:flex' src={ControlImg} alt="Control Image" />
        </div>
      </div>
      {/* Center Product swiper */}
      <div>
        <ProductSwiperSLider />
      </div>
      {/* Bottom IMg */}
      <div>
        <div className='flex justify-center mt-32 relative'>
          <ImageWithLoader className='w-0 sm:w-[1410px] h-[270px] rounded-xl hidden md:flex' src={Img2} alt="Background" />
          <ImageWithLoader src={Home11} className='flex md:hidden rounded-xl' />

          {/* Content inside the image */}
          <div className='absolute inset-0 flex justify-center gap-[120px] sm:gap-[160px] md:gap-[240px] lg:gap-[360px] xl:gap-[500px] 2xl:gap-[600px] items-center px-10'>
            {/* Text on the right */}
            <div className='text-white flex flex-col xl:mr-40 2xl:mr-56'>
              <h6 className='lg:text-xl  md:text-md text-xs sm:text-sm mb-2 md:mr-0 sm:mr-16 mr-4 cursor-default'>مانیتور نسل جدید</h6>
              <h3 className='lg:text-3xl md:text-xl  text-sm sm:text-lg font-bold md:mr-0 sm:mr-16 mr-4 cursor-default'>راگ استریکس</h3>
              <h3 className='lg:text-3xl md:text-xl  text-sm sm:text-lg font-bold md:mr-0 sm:mr-16 mr-4 cursor-default'>XG39UK</h3>
            </div>

            {/* Logo on the left */}
            <div>
              <ImageWithLoader src={HomeLogo} alt="logo" className='lg:w-[370px] sm:w-[260px] w-[200px] lg:h-[65px] pl-5' />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProductWithOff;
