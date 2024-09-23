import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaHeadsetSolid } from "react-icons/lia";
import { MdStar, MdStarHalf } from "react-icons/md";
import Motherboard from "../../assets/Images/Motherboard/motherboard4.png"
import GpuImg from "../../assets/Images/Gpu/gpu3.png"

const TopBottom = () => {
    return (
        <div className=' bg-[#F3F5FA] sm:mt-32 mt-2 xl:mt-48 pb-28'>
            {/* Top */}
            <div className='px-[50px]'>
                <div className='flex flex-wrap justify-center gap-4 pt-16 border-b-2 pb-12 xl:flex-nowrap'>
                    <div className='flex flex-col items-center border-0 md:border-l-2 pl-4'>
                        <span className='text-red-600 text-5xl'><TbTruckDelivery /></span>
                        <h5 className='text-xl font-bold mt-2 cursor-default'>حمل و نقل رایگان</h5>
                        <p className='text-gray-400 mt-2 cursor-default'>ارسال رایگان کلیه محصولات به سراسر کشور</p>
                    </div>
                    <div className='flex flex-col items-center border-0 md:border-l-2 pl-4'>
                        <span className='text-red-600 text-5xl'><RiRefund2Line /></span>
                        <h5 className='text-xl font-bold mt-2 cursor-default'>گارانتی بازگشت وجه</h5>
                        <p className='text-gray-400 mt-2 cursor-default'>ضمانت بازگشت وجه تا ۳۰ روز پس از خرید محصول</p>
                    </div>
                    <div className='flex flex-col items-center border-0 md:border-l-2 pl-4'>
                        <span className='text-red-600 text-5xl'><AiOutlineSafety /></span>
                        <h5 className='text-xl font-bold mt-2 cursor-default'>پرداخت با اطمینان</h5>
                        <p className='text-gray-400 mt-2 cursor-default'>پرداخت توسط کلیه کارتهای عضو شبکه شتاب</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-red-600 text-5xl'><LiaHeadsetSolid /></span>
                        <h5 className='text-xl font-bold mt-2 cursor-default'>پشتبانی آنلاین ۲۴ ساعته</h5>
                        <p className='text-gray-400 mt-2 cursor-default'>شماره تماس پشتیبانی : <span className='text-red-600 font-semibold'>013 123 456 78</span></p>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div>
                <div className='flex justify-center items-center mt-28'>
                    <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:font-normal cursor-default'>نظرات <span className='text-red-600'>مشتریان</span></h2>
                </div>
                <div className='flex justify-center items-center gap-2 mt-1.5'>
                    <span className='text-red-600 font-bold cursor-default'>4.8</span>
                    <span className='flex text-sm text-yellow-500 cursor-default'><MdStar /><MdStar /><MdStar /><MdStar /><MdStarHalf /></span>
                    <p className='text-xs font-medium cursor-default'>مشاهده همه ۲۱۳ نظر</p>
                </div>
                <div className='flex justify-center items-center gap-5 mt-6 flex-wrap 2xl:flex-nowrap'>
                    {/* User Idea */}
                    <div className='bg-white w-[450px] h-[310px] rounded-xl p-12'>
                        <h4 className='text-lg font-medium'>MotherBoard مدل ASUS 2024</h4>
                        <p className='mt-2 text-gray-500 text-[16px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
                        <div className='flex justify-between mt-10'>
                            <div className='flex flex-col'>
                                <span className='flex text-sm text-yellow-500'><MdStar /><MdStar /><MdStar /><MdStar /><MdStarHalf /></span>
                                <span className='mt-1 text-sm font-medium'>رضا احمدی</span>
                                <span className='text-gray-400 text-sm'>25 اسفند 1403</span>
                            </div>
                            <div>
                                <img className='w-16 h-16' src={Motherboard} />
                            </div>
                        </div>
                    </div>
                    {/* User Idea */}
                    <div className='bg-white w-[450px] h-[310px] rounded-xl p-12'>
                        <h4 className='text-lg font-medium'>GPU msi مدل 4090 2024</h4>
                        <p className='mt-2 text-gray-500 text-[16px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
                        <div className='flex justify-between mt-10'>
                            <div className='flex flex-col'>
                                <span className='flex text-sm text-yellow-500'><MdStar /><MdStar /><MdStar /><MdStar /><MdStarHalf /></span>
                                <span className='mt-1 text-sm font-medium'>سحر برزگر</span>
                                <span className='text-gray-400 text-sm'>01 دی 1403</span>
                            </div>
                            <div>
                                <img className='w-16 h-16' src={GpuImg} />
                            </div>
                        </div>
                    </div>
                    {/* Video */}
                    <div className='relative w-[450px] h-[310px]'>
                        <iframe
                            className='absolute top-0 left-0 w-full h-full rounded-xl'
                            src="https://www.aparat.com/video/video/embed/videohash/a26b5rv/vt/frame"
                            frameborder="0"
                            allowfullscreen
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopBottom