import React, { useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
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

const SecondProductSwiperSlider = () => {
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const { addLikedProduct } = useLikedProducts();
    const { addToCart } = useContext(CartContext);
    const { isAuthenticated } = useAuth(); 

    const productsToShow = MostSellProductInfos.slice(0, 30);

    const navigate = useNavigate();

    return (
        <div className='m-auto mt-8'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    980: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 2 },
                    1500: { slidesPerView: 3 },
                }}
            >
                {productsToShow.map(product => (
                    <SwiperSlide
                        key={product.id}
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                    >
                        <div
                            className='relative sm:w-[450px] w-[340px] h-[210px] bg-white border-[1px] rounded-xl flex justify-center gap-8 sm:gap-20 m-auto sm:p-0 p-8 shadow-lg'
                            onClick={() => navigate(`/product/${product.id}`)} 
                        >
                            <div>
                                <div className='flex justify-center w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] md:p-4 p-4 cursor-pointer'>
                                    <ImageWithLoader src={product.img} alt={product.desc} />
                                </div>
                            </div>
                            <div>
                                <div className='ml-8 w-[180px] mt-5 sm:text-lg text-sm'>
                                    <h3>{product.desc}</h3>
                                </div>
                                <div className='mr-6 mt-2'>
                                    <StarRating rate={product.rate} />
                                </div>
                                <div className='flex justify-between mt-10'>
                                    {product.isAvailable !== "ناموجود" && (
                                        <div className='flex justify-between'>
                                            <p className='text-red-600'>{product.price} تومان</p>
                                            {product.oldPrice && (
                                                <p className='line-through text-gray-400 text-xs'>
                                                    {product.oldPrice} تومان
                                                </p>
                                            )}
                                        </div>
                                    )}
                                    <div className='ml-10 w-[70px] h-[28px] flex items-center justify-center rounded-md text-base cursor-default'
                                        style={{ backgroundColor: product.isAvailable === "ناموجود" ? '#ff4646' : '#7FD07E', color: 'white' }}>
                                        {product.isAvailable}
                                    </div>
                                </div>

                                {/* Shopping Cart Button */}
                            {product.isAvailable !== "ناموجود" && hoveredProductId === product.id && (
                                <button
                                    className='absolute bottom-8 right-12  text-xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
                                    className='absolute bottom-8 right-5 text-xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SecondProductSwiperSlider;
