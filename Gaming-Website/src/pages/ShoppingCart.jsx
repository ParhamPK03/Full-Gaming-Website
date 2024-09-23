import React, { useContext } from "react";
import Footer from "../components/Botoom/Footer";
import HeaderTop from "../components/Top/NavbarHeader";
import HeaderMain from "../components/Top/NavbarMain";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";



const ShoppingCart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log(cart, removeFromCart, increaseQuantity, decreaseQuantity);

  

  // Calculate total price, discount, and payable amount
  const totalOrderPrice = cart.reduce((acc, product) => acc + (product.oldPrice * product.quantity), 0);
  const totalDiscount = cart.reduce((acc, product) => acc + ((product.oldPrice - product.price) * product.quantity), 0);
  const totalPayable = totalOrderPrice - totalDiscount;

  // Function to render rating stars
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

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div>
        <HeaderTop />
        <HeaderMain />
      </div>

      {/* Main */}
      <div className="pt-5 flex 2xl:flex-row flex-col justify-center items-center 2xl:justify-evenly w-[86%] mx-auto gap-5 mb-20 2xl:mb-60">
        {/* Right */}
        <div>
          {/* Top */}
          <div className="lg:w-[930px] w-[400px] sm:w-[600px] md:w-[700px] h-[55px] md:h-[75px] bg-red-100 rounded-full flex items-center justify-between mx-auto px-10">
            {/* Icons with progress line */}
            <div className="flex items-center w-full relative">
              {/* First Icon */}
              <div className="flex items-center justify-center bg-red-600 md:w-12 md:h-12 h-8 w-8 rounded-full">
                <TfiShoppingCartFull className="text-white text-lg md:text-2xl" />
              </div>
              {/* Line between icons */}
              <div className="flex-1 h-[2px] bg-red-600"></div>
              {/* Second Icon */}
              <div className="flex items-center justify-center bg-white md:w-12 md:h-12 h-8 w-8 rounded-full border-2 border-red-600">
                <GrMapLocation className="text-red-600 text-lg md:text-2xl" />
              </div>
              {/* Line between icons */}
              <div className="flex-1 h-[2px] bg-red-600"></div>
              {/* Third Icon */}
              <div className="flex items-center justify-center bg-white md:w-12 md:h-12 h-8 w-8 rounded-full border-2 border-red-600">
                <CiMoneyCheck1 className="text-red-600 text-lg md:text-2xl" />
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="mt-10 flex flex-col gap-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="flex justify-between items-center w-[400px] sm:w-[550px] md:w-[650px] 2xl:w-[950px] h-36 mx-auto bg-gray-100 rounded-md">
                  {/* Right */}
                  <div className="pr-10 flex gap-8 items-center">
                    <div>
                      <img className="2xl:w-28 md:w-20 sm:w-16 w-12 h-12 sm:h-16 md:h-20 2xl:h-28" src={product.img} alt={product.title} />
                    </div>
                    <div>
                      <h4 className="md:text-xl sm:text-base text-sm mt-4 font-medium">{product.desc}</h4>
                      <div className="mt-4">
                        {/* Rating Stars */}
                        <StarRating rate={product.rate} />
                      </div>
                      {/* Add and Delete Buttons */}
                      <div className="flex items-center justify-evenly border rounded-full px-1 py-2 w-[95px] h-[35px] gap-1 mt-2">
                        <button
                          type="button" // Add type="button" to avoid form submission
                          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <FaTrashAlt size={14} />
                        </button>
                        <span className="text-xl">{product.quantity}</span>
                        <button
                          type="button" // Add type="button" to avoid form submission
                          className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition duration-300"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <FaPlusCircle size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Left */}
                  <div className="flex flex-col pl-6 leading-10">
                    <span className="line-through text-red-600 text-xs mb-2">{product.oldPrice} تومان</span>
                    <span className="bg-green-500 text-white rounded-lg w-[70px] md:w-[90px] text-xs h-7 md:text-sm font-bold items-center flex justify-center mb-1 cursor-pointer">{product.percentage} تخفیف</span>
                    <span className="md:text-lg text-xs sm:text-sm font-medium">{product.price} تومان</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[950px] mx-auto text-center">سبد خرید شما خالی است</div>
            )}
          </div>
        </div>

        {/* Left */}
        <div className="2xl:w-[300px] lg:w-[500px] md:w-[350px] w-[300px] h-[300px] border-[1px] shadow-sm shadow-red-600 border-red-600 rounded-md items-center flex flex-col justify-center gap-y-5">
          <div>
            <h3 className="text-red-600 font-medium text-lg xl:text-xl">جزئیات پرداخت</h3>
          </div>
          {/* Payment Details */}
          <div className="flex gap-8 mt-3">
            <div className="text-sm lg:text-lg 2xl:text-base font-medium text-gray-600">قیمت کل سفارشات:</div>
            <div className="text-sm font-medium lg:text-base text-gray-600">{totalOrderPrice} تومان</div>
          </div>
          <div className="flex gap-8">
            <div className="text-sm lg:text-lg 2xl:text-base font-medium text-gray-600">تخفیف محصولات:</div>
            <div className="text-sm font-medium lg:text-base text-gray-600">{totalDiscount} تومان</div>
          </div>
          <div className="flex gap-8">
            <div className="text-sm lg:text-lg 2xl:text-base font-medium text-gray-600">مبلغ قابل پرداخت:</div>
            <div className="text-sm lg:text-base  font-medium text-gray-600">{totalPayable} تومان</div>
          </div>
          <div>
            <Link to="/secondShoppingCart">
              <button className="rounded-full bg-red-600 text-white w-[180px] h-[36px] mt-5 hover:bg-gray-700 duration-500">
                ثبت و مرحله بعد
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ShoppingCart;
