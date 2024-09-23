import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropleft } from "react-icons/io";
import SecondProductSwiperSLider from './SecondProductSwiperSlider';
import HomePc from "../../assets/Images/Main/home3-pc.png"
import ThirdProductSwiperSlider from "../Center/ThirdProductSwiperSlider"
import ImageWithLoader from '../ImageWithLoader';

const PopularProducts = () => {
    return (
        <div className='h-[100vh] mt-16 lg:mt-20 xl:mt-52 w-[92%] m-auto' id='PopularProducts'>
            {/* Top Title */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='lg:text-4xl md:text-2xl sm:text-xl text-lg text-red-600 font-medium md:font-normal cursor-default'>محصولات <span className='text-black'>محبوب</span></h2>
                <Link to="/MostSellProducts">
                    <h5 className='lg:flex items-center text-[16px] font-normal hover:text-red-600 duration-300 hidden'>
                        مشاهده همه<IoMdArrowDropleft className='text-base text-red-600' />
                    </h5>
                </Link>
            </div>
            {/* Top Product */}
            <div>
               <ThirdProductSwiperSlider/>
            </div>
            {/* Bottom Swiper Product */}
            <div className='flex items-end justify-between mt-10 gap-10'>

                <SecondProductSwiperSLider />

                <div className='relative w-[330px] h-[527px] hidden xl:flex'>
                    <ImageWithLoader className='w-full h-full object-cover rounded-xl' src={HomePc} alt="Pc" />
                    <div className='absolute text-white top-5 right-14 flex flex-col justify-center'>
                        <h6 className='text-lg font-bold text-[#FAB460] mr-4 mt-10 cursor-default'>بهترین کیس کامپیوتر</h6>
                        <h4 className=' text-2xl 2xl:text-4xl mt-20 font-semibold cursor-default'>اسمبل شده مطابق با سلیقه شما</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProducts;
