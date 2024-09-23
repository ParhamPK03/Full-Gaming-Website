import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarHeader from "../components/Top/NavbarHeader";
import NavbarMain from "../components/Top/NavbarMain";
import Footer from "../components/Botoom/Footer";
import { MostSellProductInfos } from '../assets/assets';
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";
import { useLikedProducts } from '../Context/LikedProductsContext';
import { CartContext } from '../Context/CartContext';
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import Safe from "../assets/Images/Main/safe.png"
import ProductSwiperSlider from "../components/Center/ProductSwiperSLider"
import PD1Img1 from "../assets/Images/Main/PD1.png"
import PD1Img2 from "../assets/Images/Main/PD2.png"
import PD1Img3 from "../assets/Images/Main/PD3.jpg"
import PD1Img4 from "../assets/Images/Main/PD4.jpg"
import PD1Img5 from "../assets/Images/Main/PD5.png"
import PD4n from "../assets/Images/Main/PD4N.jpg"
import PD3n from "../assets/Images/Main/PD3N.jpg"
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';

const ProductDetails = () => {
    const { id } = useParams();
    const product = MostSellProductInfos.find(product => product.id === id);

    const { addToCart } = useContext(CartContext);
    const { addLikedProduct } = useLikedProducts();

    const { isAuthenticated } = useAuth(); 

    if (!product) {
        return <div>محصولی پیدا نشد</div>;
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className='overflow-hidden'>
            {/* Top */}
            <div>
                <NavbarHeader />
                <NavbarMain />
            </div>

            {/* Main */}
            <div className='xl:w-[86%] w-[100%] mx-auto pt-20'>
                {/* Top */}
                <div className='flex xl:flex-row flex-col xl:items-start items-center'>
                    {/* Right */}
                    <div className='w-3/6 pr-20'>
                        <img className='xl:w-80 w-60 mx-auto' src={product.img} alt={product.title} />
                    </div>
                    {/* Left */}
                    <div className='flex flex-col w-3/6'>
                        <p className='xl:text-4xl md:text-2xl text-lg font-medium xl:text-start text-center xl:mt-0 mt-8'>{product.desc}</p>
                        <div className='flex gap-5 mt-10 items-center'>
                            <p className=''><StarRating rate={parseFloat(product.rate)} /></p>
                            <div className='ml-10 w-[60px] h-[24px] flex items-center justify-center rounded-md text-base cursor-default'
                                style={{ backgroundColor: product.isAvailable === "ناموجود" ? '#ff4646' : '#7FD07E', color: 'white' }}>
                                {product.isAvailable}
                            </div>
                        </div>

                        <hr className='mt-5 mb-5' />

                        <p className='text-sm font-medium'>{product.paragraph}</p>
                        <div className='mt-10 items-center flex gap-12'>
                            <div>
                                <p className='text-red-600 text-sm font-medium line-through'>{product.oldPrice}</p>
                                <p className='md:text-xl text-sm font-medium text-gray-700'>{product.price} تومان</p>
                            </div>
                            <div>
                                <p className='text-white bg-orange-400 w-[75px] h-[24px] font-medium rounded-md items-center flex justify-center text-sm'>{product.percentage} تخفیف</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 justify-center mt-10'>
                            {product.isAvailable !== "ناموجود" && (
                                <button
                                    className='text-white bg-red-600 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[260px] md:h-[46px] h-[36px] rounded-md md:text-[16px] sm:text-[12px] text-[8px] hover:bg-black duration-500'
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        if (isAuthenticated) {
                                            addToCart(product);
                                            toast.success("محصول به سبد خرید شما اضافه شد!", {
                                                position: "top-right",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                        } else {
                                            toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید!", {
                                                position: "top-right",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                        }
                                    }}
                                >
                                    افزودن به سبد
                                </button>

                            )}
                            <button className='text-white bg-black w-[40px] sm:w-[60px] md:w-[80px] lg:w-[260px] md:h-[46px] h-[36px] rounded-md md:text-[16px] sm:text-[12px] text-[8px] hover:bg-red-600 duration-500'
                                 onClick={(e) => {
                                        e.stopPropagation(); 
                                        if (isAuthenticated) {
                                            addLikedProduct(product);
                                            toast.success("محصول به لیست علاقه‌مندی‌های شما اضافه شد!", {
                                                position: "top-right",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                        } else {
                                            toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید!", {
                                                position: "top-right",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                        }
                                    }} >
                                افزودن به علاقه مندی ها
                            </button>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-12 font-medium items-center justify-center mt-8 text-xs'>
                            <p className='flex items-center gap-2'><BsTruck className='text-2xl' /> ارسال رایگان<span className='text-gray-500'>بالای ۱ میلیون</span></p>
                            <p className='flex items-center gap-2'><BsArrowRepeat className='text-2xl' />بازگشت وجه <span className='text-gray-500'>۳۰ روزه</span></p>
                            <p className='flex items-center gap-2'><RiCustomerService2Line className='text-2xl' /> پشتیبانی <span className='text-gray-500'>۲۴ ساعته</span></p>
                        </div>
                        <hr className='mt-8' />
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-xs font-semibold mt-8'>پرداخت امن و مطمئن توسط بانکهای ایرانی</p>
                            <img className='w-[350px] h-9 mt-2' src={Safe} alt="logo" />
                        </div>
                        <hr className='mt-8' />
                        <p className='mt-6 text-sm font-medium'><span className='text-gray-400'>دسته بندی :</span> {product.title}</p>
                        <p className='mt-3 text-sm font-medium'><span className='text-gray-400'>برچسب :</span> سخت افزار</p>
                    </div>
                </div>
                <hr className='mt-20' />
            </div>

            {/* Bottom */}
            <div>
                {/* center */}
                <div className='w-[60%] mx-auto flex items-center justify-center mt-10 flex-col'>
                    <h3 className='border-b-2 border-red-600 text-lg lg:text-2xl p-2'>توضیحات</h3>
                    <p className='mt-14 text-gray-500 text-xs lg:text-sm font-medium'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    <div className='flex gap-8'>
                        {/* R */}
                        <div>
                            <h3 className='lg:text-2xl md:text-lg text-base font-medium mt-8'>کیفیت کنترل</h3>
                            <p className='text-xs lg:text-sm text-gray-500 font-medium mt-5 mb-6'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            <img src={PD1Img1} alt="" />
                        </div>
                        {/* L */}
                        <div>
                            <h3 className='lg:text-2xl md:text-lg text-base font-medium mt-8'>کیفیت اجرا</h3>
                            <p className='text-xs lg:text-sm text-gray-500 font-medium mt-5 mb-6'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            <img className='' src={PD1Img2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='lg:text-2xl md:text-lg text-base font-medium mt-8'>سرعت انتقال</h3>
                        <p className='mt-3 text-gray-500 text-xs lg:text-sm font-medium'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <div className='2xl:w-[930px] xl:w-[830px] lg:w-[730px] md:w-[630px] sm:w-[530px] w-[400px] mx-auto 2xl:h-[510px] xl:h-[460px] lg:h-[400px] md:h-[350px] h-[220px] rounded-xl relative mt-10'>
                            <iframe
                                className='w-full h-full rounded-xl flex justify-center items-center'
                                src="https://www.aparat.com/video/video/embed/videohash/s482o5i/vt/frame"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className='flex 2xl:flex-row flex-col mt-20 items-center justify-center gap-5'>
                            <img className='2xl:w-[730px] lg:flex hidden h-[420px] rounded-xl' src={PD1Img3} alt="" />
                            <img className='sm:w-[600px] w-[400px] lg:hidden flex xl:h-[420px] lg:h-[360px] md:h-[320px] sm:h-[280px] h-[220px] rounded-xl' src={PD3n} alt="" />
                            <img className='2xl:w-[730px] h-[420px] lg:flex hidden rounded-xl' src={PD1Img4} alt="" />
                            <img className='xl:h-[420px] lg:h-[360px] md:h-[320px] sm:h-[280px] h-[220px] lg:w-full md:w-[700px] sm:w-[600px] w-[400px] flex lg:hidden rounded-xl' src={PD4n} alt="" />
                        </div>
                        <img className='mt-6 lg:w-full md:w-[700px] sm:w-[600px] w-[400px] mx-auto rounded-xl' src={PD1Img5} alt="" />
                    </div>

                </div>
                {/* Bottom */}
                <div className='mt-28'>
                    <h2 className='pr-32 text-3xl font-medium'>محصولات مشابه</h2>
                    <ProductSwiperSlider />
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

const StarRating = ({ rate }) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex">
            {Array(fullStars).fill().map((_, index) => (
                <MdOutlineStarPurple500 key={index} className="text-red-600 text-sm mt-2" />
            ))}
            {hasHalfStar && <MdOutlineStarHalf className="text-red-600 text-sm mt-2" />}
            {Array(emptyStars).fill().map((_, index) => (
                <MdOutlineStarOutline key={index} className="text-red-600 text-sm mt-2" />
            ))}
        </div>
    );
};

export default ProductDetails;
