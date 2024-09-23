import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Pay from "../../assets/Images/Footer-Img/pay.png"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-20 bg-zinc-800 text-white' id='Footer'>
            {/* Top */}
            <div className='flex flex-col md:justify-evenly justify-center md:gap-y-0 gap-y-8 md:text-start text-center md:flex-row items-center pt-14 border-b-[1px] border-gray-600 pb-14'>

                <div>
                    <div className='flex items-center gap-2'>
                        {/* R */}
                        <div className='lg:text-4xl text-2xl text-slate-200'>
                            <FiPhoneCall />
                        </div>
                        {/* L */}
                        <div className='flex flex-col'>
                            <p className='text-gray-500 text-xs lg:text-sm cursor-default'>درخواست مشاوره رایگان</p>
                            <h6 className='text-red-600 text-lg lg:text-2xl font-medium'>۷۸۹ ۴۵۶ ۱۲۳ ۹۸+</h6>
                        </div>
                    </div>
                </div>


                <div>
                    <h5 className='lg:text-2xl text-lg cursor-default'>عضویت در خبرنامه ایمیلی</h5>
                    <p className='lg:text-sm text-xs mt-1 text-gray-500 font-medium cursor-default'>برای دریافت آخرین اخبار و مطالب در خبرنامه ما عضو شوید</p>
                </div>
                <div className='relative'>
                    <button
                        className='absolute left-0 top-0 bottom-0 2xl:w-[120px] lg:w-[80px] w-[50px] bg-red-600 hover:bg-gray-600 text-white rounded-l-md duration-500 text-xs lg:text-sm'
                    >
                        عضویت
                    </button>
                    <input
                        className='2xl:w-[580px] lg:w-[420px] w-[280px] lg:h-[60px] h-[40px] pr-5 outline-none rounded-md'
                        type="email"
                        placeholder='ایمیل خود را وارد کنید'
                    />
                </div>
            </div>
            {/* Center */}
            <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center pr-20 2xl:pr-36 gap-y-5 lg:pt-0 pt-10'>
                <div>
                    <h4 className='text-xl cursor-default'>منو مشتریان</h4>
                    <div className='text-gray-500 text-sm font-medium leading-6 mt-4'>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>مرکز راهنمایی</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>ناحیه کاربری</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>پیگیری سفارش</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>قوانین و مقررات</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>دریافت هدیه</h6>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl cursor-default'>درباره ما</h4>
                    <div className='text-gray-500 text-sm font-medium leading-6 mt-4'>
                        <Link to="/aboutUs"><h6 className='hover:text-red-600 duration-500 cursor-pointer'>درباره فروشگاه</h6></Link>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>آخرین مطالب</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>استخدام نیرو</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>ارسال بررسی</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>مشاهده فروشگاه</h6>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl cursor-default'>لینکهای سریع</h4>
                    <div className='text-gray-500 text-sm font-medium leading-6 mt-4'>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer' onClick={() => {
                            const target = document.getElementById("TopProduct");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>دسته بندی های برتر</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer' onClick={() => {
                            const target = document.getElementById("MostSellProducts");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>محصولات پرفروش</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer' onClick={() => {
                            const target = document.getElementById("ProductOff");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>محصولات تخفیف دار</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer' onClick={() => {
                            const target = document.getElementById("ProductOff");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>محصولات محبوب</h6>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl cursor-default'>ناحیه کاربری</h4>
                    <div className='text-gray-500 text-sm font-medium leading-6 mt-4'>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>آدرس فروشگاه</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>تاریخچه سفارش</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>لیست علاقه مندی</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>فرم خبرنامه</h6>
                        <h6 className='hover:text-red-600 duration-500 cursor-pointer'>محصولات ویژه</h6>
                    </div>
                </div>
                <div className='flex flex-col pt-16'>
                    <h4 className='w-44 cursor-default'>ایران – تهران – خیابان پاسداران پلاک ۱۲</h4>
                    <h6 className='mt-10 text-red-600 text-sm font-medium cursor-default'>ارسال پیام به ما :</h6>
                    <p className='text-base  mt-2 text-gray-500 font-serif'>شنبه تا جمعه : ۹ صبح الی ۲۰ عصر</p>
                    <div className='flex gap-1 mt-8'>
                        <a className='p-2 bg-gray-600 text-lg hover:text-red-600 duration-500 cursor-pointer'><FaFacebook /></a>
                        <a className='p-2 bg-gray-600 text-lg hover:text-red-600 duration-500 cursor-pointer'><FaInstagram /></a>
                        <a className='p-2 bg-gray-600 text-lg hover:text-red-600 duration-500 cursor-pointer'><FaXTwitter /></a>
                        <a className='p-2 bg-gray-600 text-lg hover:text-red-600 duration-500 cursor-pointer'><FaYoutube /></a>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className='flex flex-col md:flex-row justify-around mt-20 bg-[#000000] w-[80%] mx-auto h-[90px] items-center rounded-t-2xl'>
                <h6 className='text-xs lg:text-base text-gray-400'>Developed By Mr-Pourkhani</h6>
                <img className='lg:w-[230px] w-[180px] h-[26px]' src={Pay} alt="Logo" />
            </div>
        </div>
    )
}

export default Footer