import React from 'react'
import Logo1 from "../../assets/Images/Logo/logo1.png"
import Logo2 from "../../assets/Images/Logo/logo2.png"
import Logo3 from "../../assets/Images/Logo/logo3.png"
import Logo4 from "../../assets/Images/Logo/logo4.png"
import Logo5 from "../../assets/Images/Logo/logo5.png"
import HomeImg1 from "../../assets/Images/Main/home1-banner-3.png"
import HomeImg2 from "../../assets/Images/Main/home1-banner-4.png"
import HomeImg3 from "../../assets/Images/Main/home1-banner-5.png"
import { IoMdArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ImageWithLoader from '../ImageWithLoader';


const BodyLogo = () => {

    // SweetAlert Massage

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
   

    return (
        <div className='w-[84%] mx-auto mt-20'>
            {/* top */}
            <div className='flex flex-col sm:flex-row justify-center items-center gap-20 py-20 border-y-2 mx-auto'>
                <div className='flex flex-col justify-center mx-auto cursor-default'>
                    <h5 className='text-red-600 text-lg sm:text-lg md:text-base lg:text-xl font-medium'>خرید مطمئن</h5>
                    <h5 className='text-lg sm:text-lg md:text-base lg:text-xl font-medium'>از برندهای محبوب</h5>
                </div>
                <div className='flex flex-wrap justify-center gap-20 items-center mx-auto'>
                    <a href="https://www.amd.com/en.html" target="_blank" rel="noopener noreferrer">
                        <ImageWithLoader className='lg:w-[140px] h-[30px] sm:w-[80px] w-[140px] lg:h-[40px]' src={Logo1} alt="AMD Logo" />
                    </a>
                    <a href="https://www.corsair.com/us/en?srsltid=AfmBOoodSMLiSZUH0uTE8BRXZcvZDyLlBCg2xC8g8oy7CLg6hkOmp-IP">
                        <ImageWithLoader className='lg:w-[140px] h-[40px] sm:h-[30px] sm:w-[100px] w-[140px] lg:h-[40px]' src={Logo2} />
                    </a>
                    <a href="https://www.logitech.com/?srsltid=AfmBOopxQKMqUGjwEf7f36t2P8IgbohG4TqjW_AF4YK1Qf6uIpBpnRaI">
                        <ImageWithLoader className='lg:w-[140px] h-[30px] sm:w-[80px] w-[140px] lg:h-[40px]' src={Logo3} />
                    </a>
                    <a href="https://www.nvidia.com/en-us/drivers/">
                        <ImageWithLoader className='lg:w-[140px] h-[30px] sm:w-[100px] w-[140px] lg:h-[40px]' src={Logo4} />
                    </a>
                    <a href="https://www.msi.com/index.php">
                        <ImageWithLoader className='lg:w-[140px] h-[30px] sm:w-[80px] w-[140px] lg:h-[40px]' src={Logo5} />
                    </a>
                </div>
            </div>
            {/* bottom */}

            <div className='flex flex-col md:flex-row gap-6 mt-24 mx-auto justify-center'>
                <div className='relative mx-auto'>
                    <ImageWithLoader src={HomeImg1} alt="GPU" />
                    <div className='absolute top-10 right-8 text-white text-xl xl:text-3xl font-bold flex flex-col'>
                        <p className='text-sm'>بهترین ماوس گیمینگ</p>
                        <div className='mt-8'>ماوس گیمینگ تسکو X6</div>
                    </div>
                    <Link onClick={handleClick}>
                        <button className='text-black  bg-white rounded-md w-[91px] h-[36px] justify-center text-xs font-medium left-5 bottom-5 absolute hover:bg-red-600 hover:text-white duration-500 hidden lg:flex items-center group'>مشاهده کالا <IoMdArrowDropleft className='text-base text-red-600 group-hover:text-black' /> </button>
                    </Link>
                </div>
                <div className='relative mx-auto'>
                    <ImageWithLoader src={HomeImg2} alt="GPU" />
                    <div className='absolute top-10 m-auto text-white text-2xl sm:text-4xl md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl text-center items-center right-28  md:right-20 lg:right-28 font-bold flex flex-col'>
                        <p className='text-[#BEA96F] text-base'>احساس راحتی با</p>
                        <div className='sm:mt-20 mb-10'>صندلی های گیمینگ AERO</div>
                    </div>
                    <Link onClick={handleClick}>
                        <button className='text-black  bg-white rounded-md w-[91px] h-[36px] justify-center text-xs font-medium left-5 bottom-5 absolute hover:bg-red-600 hover:text-white duration-500 hidden lg:flex items-center group'>مشاهده کالا <IoMdArrowDropleft className='text-base text-red-600 group-hover:text-black' /> </button>
                    </Link>
                </div>
                <div className='relative mx-auto'>
                    <ImageWithLoader src={HomeImg3} alt="Motherboard" />
                    <div className='absolute top-10 right-8 text-white text-4xl  md:text-sm xl:text-3xl font-bold flex flex-col'>
                        <p className='text-sm'>صدایی دلنشین با</p>
                        <div className='mt-10 text-2xl md:text-lg lg:text-2xl w-[220px] md:w-[120px] xl:w-[180px] 2xl:w-[260px]'>هدست های حرفه ای E910</div>
                    </div>
                    <Link onClick={handleClick}>
                        <button className='text-black  bg-white rounded-md w-[91px] h-[36px] justify-center text-xs font-medium left-5 bottom-5 absolute hover:bg-red-600 hover:text-white duration-500 hidden lg:flex items-center group'>مشاهده کالا <IoMdArrowDropleft className='text-base text-red-600 group-hover:text-black' /> </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BodyLogo