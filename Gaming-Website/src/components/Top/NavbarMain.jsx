import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Images/Main/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';
import Menu1 from "../../assets/Images/Main/menu-1.png";
import Menu2 from "../../assets/Images/Main/menu-2.png";
import { useLikedProducts } from '../../Context/LikedProductsContext';
import { CartContext } from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext';

const NavbarMain = () => {
  const [placeholder, setPlaceholder] = useState('دنبال چه میگردید ؟');
  const { cart } = useContext(CartContext);
  const totalCartItems = cart.reduce((total, product) => total + product.quantity, 0);

  // 3bar menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { likedProducts } = useLikedProducts();
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    setLikedCount(likedProducts.length);
  }, [likedProducts]);

  const { isAuthenticated } = useContext(AuthContext);

  // New states for dropdown menus
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  return (
    <div className='bg-[#222222] h-[50px] md:h-[80px] lg:h-[100px]'>
      <div className='flex items-center pt-3 md:pt-7 justify-between md:justify-evenly'>
        {/* Right */}
        <div className='flex gap-0 md:gap-20'>
          {/* Logo */}
          <div>
            <Link to="/"><img className='xl:w-[160px] xl:h-[36px] w-[120px] h-[30px] cursor-pointer hidden md:flex' src={Logo} alt="Logo" /></Link>
          </div>

          <div>
            {/* FaBars icon */}
            <FaBars
              className='flex md:hidden text-base md:text-xl text-white mr-8 cursor-pointer'
              onClick={toggleSidebar}
            />

            {/* Sidebar Menu */}
            <div
              className={`fixed top-0 right-0 w-64 bg-gray-800 text-white h-full p-5 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
              {/* Close Icon (FaTimes) */}
              <FaTimes
                className="text-xl text-white cursor-pointer mb-4 mr-52"
                onClick={toggleSidebar}
              />

              <ul className='space-y-4'>
                <li>
                  <a className='cursor-default text-lg'>خانه</a>
                  <ul className='mr-1 text-sm'>
                    <li className='hover:bg-red-600 rounded-full duration-300 p-2'
                      onClick={() => {
                        const target = document.getElementById("TopProduct");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a className='cursor-pointer'>دسته بندی های برتر</a></li>
                    <li className='hover:bg-red-600 rounded-full duration-300 p-2'
                      onClick={() => {
                        const target = document.getElementById("MostSellProducts");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a className='cursor-pointer'>محصولات پرفروش</a></li>
                    <li className='hover:bg-red-600 rounded-full duration-300 p-2'><a className='cursor-pointer' onClick={() => {
                      const target = document.getElementById("ProductOff");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}>محصولات تخفیف دار</a></li>
                    <li className='hover:bg-red-600 rounded-full duration-300 p-2' onClick={() => {
                      const target = document.getElementById("PopularProducts");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}><a className='cursor-pointer'>محصولات محبوب</a></li>
                  </ul>
                </li>
                <li><a className='cursor-default text-lg'>فروشگاه</a>
                  <div className="mr-1 space-y-2 font-normal text-sm mt-2">
                    <Link to="/joystick"><li className='hover:bg-red-600 rounded-full duration-300 p-2'><a href="#">کنترلر گیمینگ</a></li></Link>
                    <Link to="/monitor"> <li className='hover:bg-red-600 rounded-full duration-300 p-2'><a href="#">مانیتور گیمینگ</a></li></Link>
                    <Link to="/mouse">  <li className='hover:bg-red-600 rounded-full duration-300 p-2'><a href="#">ماوس گیمینگ</a></li></Link>
                    <Link to="/keyboards">  <li className='hover:bg-red-600 rounded-full duration-300 p-2'><a href="#">کیبورد گیمینگ</a></li></Link>
                    <Link to="/headset">  <li className='hover:bg-red-600 rounded-full duration-300 p-2'><a href="#">هدست گیمینگ</a></li></Link>
                  </div>
                </li>
                <Link to="/aboutUs">  <li className='hover:text-red-600 cursor-pointer mt-2'>درباره ما</li></Link>
                <li className='hover:text-red-600 cursor-pointer mt-4' onClick={() => {
                  const target = document.getElementById("Footer");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}>تماس با ما</li>
              </ul>
            </div>
          </div>
          {/* 3Bar menu end */}




          {/* Menu */}
          <div>
            <ul className='md:flex hidden text-white gap-3 xl:gap-5 '>

              <li className='relative flex'>
                <a className='hover:text-red-600 cursor-pointer duration-500' onClick={toggleHomeMenu}>
                  خانه
                </a>
                <RiArrowDropDownLine className='text-xl mt-1' />
                {isHomeMenuOpen && (
                  <ul className="absolute top-full  mt-[44px] z-10 w-[280px] p-6 space-y-4 text-black bg-white text-base tracking-normal transition-all">
                    <li className='submenu-item hover:bg-red-600 hover:text-white border-b-2 px-4 cursor-pointer'
                      onClick={() => {
                        const target = document.getElementById("TopProduct");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a>دسته بندی های برتر</a></li>
                    <li className='submenu-item hover:bg-red-600 hover:text-white border-b-2 px-4 cursor-pointer'
                      onClick={() => {
                        const target = document.getElementById("MostSellProducts");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a>محصولات پرفروش</a></li>
                    <li className='submenu-item hover:bg-red-600 hover:text-white border-b-2 px-4 cursor-pointer'
                      onClick={() => {
                        const target = document.getElementById("ProductOff");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a>محصولات تخفیف دار</a></li>
                    <li className='submenu-item hover:bg-red-600 hover:text-white border-b-2 px-4 cursor-pointer'
                      onClick={() => {
                        const target = document.getElementById("PopularProducts");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}><a>محصولات محبوب</a></li>
                  </ul>
                )}
              </li>


              <li className='relative flex'>
                <a className='hover:text-red-600 cursor-pointer duration-500' onClick={toggleShopMenu}>
                  فروشگاه
                </a>
                <RiArrowDropDownLine className="text-xl mt-1" />
                {isShopMenuOpen && (
                  <ul className="absolute top-full mt-[44px] w-[250px] lg:w-[560px] xl:w-[900px] p-6 space-y-4 text-black bg-white text-base tracking-normal transition-all z-20">
                    <div className="flex justify-start items-center gap-20">
                      <div className="mr-5">
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">کنترلر گیمینگ</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">صندلی گیمینگ</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">موس گیمینگ</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">کیبورد گیمینگ</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">هدست گیمینگ</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">کارت گرافیک</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">مادر برد</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">پردازنده</a></li>
                        <li className="submenu-item hover:bg-red-600 hover:text-white border-b-2 mb-5"><a href="#">مانیتور گیمینگ</a></li>
                      </div>
                      <div className="flex gap-10 items-center">
                        <img className="w-72 h-72 lg:flex hidden" src={Menu1} alt="Menu Image 1" />
                        <img className="w-72 h-72 xl:flex hidden" src={Menu2} alt="Menu Image 2" />
                      </div>
                    </div>
                  </ul>
                )}
              </li>

              <li className="relative  flex">

                <Link to="/aboutUs"><li className='flex items-center text-base font-normal cursor-pointer hover:text-red-600 duration-500'>درباره ما</li></Link>


                <ul className="absolute top-full opacity-0 mt-[44px] z-10 invisible group-hover:opacity-100 group-hover:visible w-[120px] p-6 space-y-4 text-black bg-white text-base tracking-normal transition-all ">
                  <div className="flex justify-start items-center gap-20">
                  </div>
                </ul>
              </li>
              <a className='hover:text-red-600 cursor-pointer duration-500' onClick={() => {
                const target = document.getElementById("Footer");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}>تماس با ما</a>
            </ul>

          </div>

        </div>
        {/* Center */}
        <div>
          <div className='lg:flex hidden relative items-center'>
            <input
              className='lg:w-[240px] lg:h-[36px] xl:w-[360px] xl:h-[44px] 2xl:w-[510px] 2xl:h-[44px] rounded-md placeholder:pr-6 placeholder:text-[#888888] outline-none placeholder:text-[14px] placeholder:font-medium'
              type="search"
              placeholder={placeholder}
              onFocus={() => setPlaceholder('')}
              onBlur={() => setPlaceholder('دنبال چه میگردید ؟')}
            />
            <IoIosSearch className='absolute left-3 text-2xl cursor-pointer hover:bg-red-600 duration-500 hover:text-white rounded-full' />
          </div>
        </div>
        {/* Left */}
        <div className='flex gap-2 text-2xl text-white'>
          <Link to={isAuthenticated ? "/profile" : "/signing"} className='md:flex hidden text-[27px]'>
            <FiUser className='hover:text-red-600 duration-300' />
          </Link>          <Link to="/liked" className='flex text-xl md:text-3xl md:text-[27px] ml-7 md:ml-0 relative'>
            <span className='bg-[#DE3431] pr-1.5 text-white rounded-full w-4 h-4 absolute text-xs font-medium -mt-1 mr-4'>
              {likedCount}
            </span>
            <FaRegHeart className='hover:text-red-600 duration-300' />
          </Link>
          <div>

          </div>
          <Link to="/shoppingCart" className='flex text-xl md:text-3xl md:text-[27px] ml-7 md:ml-0'>

            <span className='bg-[#DE3431] pr-1.5 text-white rounded-full w-4 h-4 absolute text-xs font-medium -mt-1 mr-4'>
              {totalCartItems}
            </span>
            <LuShoppingCart className='hover:text-red-600 duration-300' />
          </Link>        </div>
      </div>
    </div>
  )
}

export default NavbarMain;
