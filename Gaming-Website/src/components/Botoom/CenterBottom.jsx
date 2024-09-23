import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import Bottom1 from "../../assets/Images/Footer-Img/blog-1.jpg"
import Bottom2 from "../../assets/Images/Footer-Img/blog-2.jpg"
import Bottom3 from "../../assets/Images/Footer-Img/blog-3.jpg"
import Bottom4 from "../../assets/Images/Footer-Img/blog-4.jpg"
import BottomB1 from "../../assets/Images/Footer-Img/Footer-Swiper1.jpeg"
import BottomB2 from "../../assets/Images/Footer-Img/Footer-Swiper2.jpeg"
import BottomB3 from "../../assets/Images/Footer-Img/Footer-Swiper3.jpeg"
import BottomB4 from "../../assets/Images/Footer-Img/Footer-Swiper4.jpeg"
import BottomB5 from "../../assets/Images/Footer-Img/Footer-Swiper5.jpeg"
import BottomB6 from "../../assets/Images/Footer-Img/Footer-Swiper6.jpeg"
import BottomB7 from "../../assets/Images/Footer-Img/Footer-Swiper7.jpeg"
import ImageWithLoader from '../ImageWithLoader';


const CenterBottom = () => {
    return (
        <div className='w-[86%] mx-auto mt-24'>
            {/* Top */}
            <div>
                {/* Tittle */}
                <div className='flex justify-between'>
                    <h2 className='lg:text-4xl md:text-2xl text-xl font-semibold lg:font-normal cursor-default'><span className='text-red-600 '>آخرین</span> اخبار</h2>
                    <Link>
                        <h5 className='lg:flex items-center text-[16px] font-normal hover:text-red-600 duration-300 hidden'>
                            مشاهده همه مطالب<IoMdArrowDropleft className='text-base text-red-600' />
                        </h5>
                    </Link>
                </div>
                {/* Img */}
                <div className='flex gap-6 mt-5 flex-wrap xl:flex-nowrap justify-center'>
                    {/* Right */}
                    <div className='image-container items-center text-center flex flex-col justify-center'>
                        <ImageWithLoader className='w-[690px] h-[400px] rounded-xl' src={Bottom1} alt="img" />
                        <h3 className='lg:text-2xl text-lg font-medium mt-5 text-gray-500'>G-Sync انویدیا چیست و چرا برای گیمرها اهمیت زیادی دارد ؟</h3>
                        <p className='text-gray-500 mt-4 lg:text-[16px] text-[13px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط…</p>
                        <p className='text-gray-500 text-sm mt-6'>24 اسفند 1402</p>
                    </div>

                    {/* Left */}
                    <div className='text-xl font-medium text-gray-500'>
                        {/* Top Img */}
                        <div className='flex gap-7 flex-wrap md:flex-nowrap justify-center'>
                            <div className='w-[330px] image-container'>
                                <ImageWithLoader className='w-full h-[210px] rounded-xl object-cover' src={Bottom1} alt="ImageWithLoader" />
                                <h3 className='mt-2 text-center text-sm lg:text-xl'>G-Sync انویدیا چیست و چرا برای گیمرها اهمیت زیادی دارد ؟</h3>
                            </div>
                            <div className='w-[330px] image-container'>
                                <ImageWithLoader className='w-full h-[210px] rounded-xl object-cover' src={Bottom2} alt="img" />
                                <h3 className='mt-2 text-center text-sm lg:text-xl'>۱۰ باور غلط در مورد نویز کنسلینگ هدفون که باید کنار بگذارید</h3>
                            </div>
                        </div>
                        {/* Bottom Img */}
                        <div className='flex gap-7 mt-10 flex-wrap md:flex-nowrap justify-center'>
                            <div className='w-[330px] image-container'>
                                <ImageWithLoader className='w-full h-[210px] rounded-xl object-cover' src={Bottom3} alt="img" />
                                <h3 className='mt-2 text-center text-sm lg:text-xl'>چرا گیمرها باید اسپیکر را به هدفون ترجیح دهند؟</h3>
                            </div>
                            <div className='w-[330px] image-container'>
                                <ImageWithLoader className='w-full h-[210px] rounded-xl object-cover' src={Bottom4} alt="img" />
                                <h3 className='mt-2 text-center text-sm lg:text-xl'>راهنمای وصل کردن دسته PS5 به کامپیوتر؛ آموزش اتصال بی‌سیم و ب ...</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div>
                {/* Top */}
                <div className='flex justify-center items-center mt-20 flex-col'>
                    <h2 className='lg:text-[36px] md:text-[26px] text-[20px] font-semibold md:font-normal cursor-default'><span className='text-red-600'>عضویت در</span> باشگاه مشتریان</h2>
                    <p className='mt-1 text-gray-500 md:text-[15px] text-[13px]'>با عضویت در باشگاه مشتریان ما میتوانید از امکانات ویژه ما بهره مند شوید . همین حالا به جمع باشگاه مشتریان ما بپیوندید</p>
                </div>
                {/* Bottom */}
                <div className='flex flex-wrap 2xl:flex-nowrap gap-1 justify-center mt-8 mx-auto'>
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB1} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB2} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB3} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB4} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB5} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB6} alt="Bottom img" />
                    <ImageWithLoader className='w-[200px] rounded-md' src={BottomB7} alt="Bottom img" />
                </div>

            </div>
        </div>
    )
}

export default CenterBottom