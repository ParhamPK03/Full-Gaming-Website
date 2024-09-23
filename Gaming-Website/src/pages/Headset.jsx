import React, { useState, useContext } from 'react';
import { IoMdArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MostSellProductInfos } from '../assets/assets';
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useLikedProducts } from '../Context/LikedProductsContext';
import { CartContext } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Botoom/Footer"
import HeaderTop from "../components/Top/NavbarHeader"
import HeaderMain from "../components/Top/NavbarMain"
import ImageWithLoader from '../components/ImageWithLoader';

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



const Headset = () => {

  const [activeCategory, setActiveCategory] = useState('هدست');
  const [showAll, setShowAll] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { addLikedProduct } = useLikedProducts();
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  
  const filteredProducts = MostSellProductInfos.filter(product => product.category === activeCategory);
  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 3);

  const categories = [
    "هدست"
];

  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div>
        <HeaderTop />
        <HeaderMain />
      </div>

      {/* Main */}
      <div className='w-[84%] m-auto mt-20'>
        {/* Top */}
        <div className='flex lg:flex-row items-center justify-center flex-col lg:justify-between'>
          <div><h4 className='text-red-600 font-medium text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-8 lg:mb-0 cursor-default'>هدست :</h4></div>
          <div>
            <ul className='flex text-gray-400 gap-2 text-[18px] xl:ml-48 mx-auto'>
              {categories.map(category => (
                <li
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`rounded-md px-2.5 xl:px-4 cursor-pointer ${activeCategory === category ? 'bg-red-600 text-white' : 'hover:text-white hover:bg-red-600'
                    }`}
                >
                 
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link>
              <h5
                className='lg:flex items-center text-[14px] font-medium hover:text-red-600 duration-300 mt-6'
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'پنهان کردن' : 'مشاهده همه'} <IoMdArrowDropleft className='text-sm text-red-600 lg:flex hidden' />
              </h5>
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10'>
          {productsToShow.map(product => (
            <div
              key={product.id}
              className='sm:w-[330px] w-[260px] h-[400px] md:h-[528px] border-[1px] rounded-xl flex flex-col m-auto shadow-xl relative'
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className='text-xs font-medium text-gray-400 flex mr-8 mt-5'><p>{product.title}</p></div>
              <div className='flex justify-center mx-auto md:w-[240px] sm:w-[160px] w-[140px] h-[140px] sm:h-[160px] md:h-[240px] md:p-4 p-4 cursor-pointer'>
                <ImageWithLoader src={product.img} alt={product.title} />
              </div>
              <div className='text-sm font-medium mr-6'>
                <p className='text-white bg-orange-400 w-[70px] h-[23px] rounded-md items-center flex justify-center'>{product.percentage} تخفیف</p>
              </div>
              <div className='mr-6 mt-5 text-lg'><h3>{product.desc}</h3></div>
              <div className='mr-6 mt-2'>
                <StarRating rate={product.rate} />
              </div>
              <div className='flex justify-between mt-10'>
                <div className='flex flex-col mr-6'>
                  {product.isAvailable !== "ناموجود" && (
                    <>
                      <p className='text-red-600'>{product.price} تومان</p>
                      <p className='line-through text-gray-400 text-xs'>{product.oldPrice} تومان</p>
                    </>
                  )}
                </div>
                <div className='ml-10 w-[70px] h-[28px] flex items-center justify-center rounded-md text-base cursor-default'
                  style={{ backgroundColor: product.isAvailable === "ناموجود" ? '#ff4646' : '#7FD07E', color: 'white' }}>
                  {product.isAvailable}
                </div>
              </div>

              {/* Shopping Cart Button */}
              {product.isAvailable !== "ناموجود" && hoveredProductId === product.id && (
                <button
                  className='absolute top-4 left-14 text-2xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
                  className='absolute top-4 left-5  text-2xl text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 duration-300'
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
          ))}
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Headset