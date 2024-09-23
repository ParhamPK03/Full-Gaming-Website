import React, { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { MostSellProductInfos } from '../../assets/assets';
import { MdOutlineStarPurple500, MdOutlineStarHalf, MdOutlineStarOutline } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useLikedProducts } from '../../Context/LikedProductsContext';
import { CartContext } from '../../Context/CartContext';
import { useAuth } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ImageWithLoader from '../ImageWithLoader';

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

const ProductSwiperSlider = () => {
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const { addLikedProduct } = useLikedProducts(); 
    const { addToCart } = useContext(CartContext); 
    const { isAuthenticated } = useAuth(); 

   
    const [productsToShow, setProductsToShow] = useState([]);

    useEffect(() => {
        const shuffledProducts = MostSellProductInfos.slice(0, 30).sort(() => Math.random() - 0.5);
        setProductsToShow(shuffledProducts);
    }, []);

    const navigate = useNavigate();

    return (
        <div className='w-[84%] m-auto mt-20'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={140}
                slidesPerView={4}
                autoplay={{ delay: 5000 }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                breakpoints={{
                    300: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                    1450: { slidesPerView: 4 },
                }}
            >
                {productsToShow.map(product => (
                    <SwiperSlide
                        key={product.id}
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        <div className='relative md:w-[330px] w-[280px] h-[480px] md:h-[528px] bg-white border-[1px] rounded-md hover:rounded-3xl flex flex-col m-auto duration-500'>
                            <div className='text-xs font-medium text-gray-400 flex mr-8 mt-5'>
                                <p>{product.title}</p>
                            </div>
                            <div className='flex justify-center w-[220px] md:w-[260px] md:h-[260px] mx-auto md:p-4 p-4 cursor-pointer'>
                                <ImageWithLoader src={product.img} alt={product.title} />
                            </div>
                            <div className='text-sm font-medium mr-6'>
                                <p className='text-white bg-orange-400 w-[70px] h-[23px] rounded-md items-center flex justify-center'>
                                    {product.percentage} تخفیف
                                </p>
                            </div>
                            <div className='mr-6 mt-5 text-lg'>
                                <h3>{product.desc}</h3>
                            </div>
                            <div className='mr-6 mt-2'>
                                <StarRating rate={product.rate} />
                            </div>
                            <div className='flex justify-between mt-10'>
                                {product.isAvailable !== "ناموجود" && (
                                    <div className='flex flex-col mr-6'>
                                        <p className='text-red-600'>{product.price} تومان</p>
                                        {product.oldPrice && (
                                            <p className='line-through text-gray-400 text-xs'>
                                                {product.oldPrice} تومان
                                            </p>
                                        )}
                                    </div>
                                )}
                                <div
                                    className='ml-10 w-[70px] h-[28px] flex items-center justify-center rounded-md text-base cursor-default'
                                    style={{
                                        backgroundColor: product.isAvailable === "ناموجود" ? '#ff4646' : '#7FD07E',
                                        color: 'white'
                                    }}
                                >
                                    {product.isAvailable}
                                </div>
                            </div>

                           {/* Shopping Cart Button */}
                        {product.isAvailable !== "ناموجود" && hoveredProductId === product.id && (
                            <button
                                className='absolute top-4 left-14  text-2xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
                                <LuShoppingCart />
                            </button>
                        )}

                        {/* Like Button */}
                        {hoveredProductId === product.id && (
                            <button
                                className='absolute top-4 left-5 text-2xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
                                }}
                            >
                                <FaRegHeart />
                            </button>
                        )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination mt-4"></div>
        </div>
    );
};

export default ProductSwiperSlider;
