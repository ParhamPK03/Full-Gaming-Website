import React, { useState, useContext } from 'react';
import Footer from '../components/Botoom/Footer';
import HeaderTop from '../components/Top/NavbarHeader';
import HeaderMain from '../components/Top/NavbarMain';
import { useLikedProducts } from '../Context/LikedProductsContext';
import { CartContext } from '../Context/CartContext';

const Liked = () => {
  const { likedProducts, removeLikedProduct } = useLikedProducts();

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <HeaderTop />
      <HeaderMain />

      <div>
        <h3 className='text-[22px] font-medium w-[400px] sm:w-[550px] md:w-[650px] lg:w-[950px] mx-auto mt-[70px] mb-4'>علاقه مندی</h3>
        {likedProducts.length > 0 ? (
          likedProducts.map((product) => (
            <div key={product.id} className='flex justify-between items-center w-[400px] sm:w-[550px] md:w-[650px] lg:w-[950px] h-28 mx-auto mt-2 bg-gray-100 rounded-md'>
              <div className='flex items-center gap-10 mr-5'>
                <div><img className='md:w-20 w-16 h-12 md:h-20 cursor-pointer' src={product.img} alt={product.title} /></div>
                <div className='flex flex-col'>
                  <h5 className='md:text-base text-sm font-medium'>{product.desc}</h5>
                  <div className='flex md:flex-row flex-col gap-2 mt-2'>
                    <span className='md:text-sm text-xs text-red-600 line-through'>{product.oldPrice} تومان</span>
                    <span className='md:text-sm text-xs text-black'>{product.price} تومان</span>
                  </div>
                </div>
              </div>
              <div className='md:ml-16 ml-5 flex items-center gap-2'>

                <button className='text-white bg-black w-[40px] sm:w-[60px] md:w-[80px] lg:w-[120px] md:h-[46px] h-[36px] rounded-md md:text-[15px] sm:text-[12px] text-[8px] hover:bg-red-600 duration-500'
                onClick={() => addToCart(product)} >افزودن به سبد</button>
                <button
                  className='text-white bg-red-600 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[120px] md:h-[46px] h-[36px] rounded-md md:text-[15px] sm:text-[12px] text-[8px] hover:bg-black duration-500'
                  onClick={() => removeLikedProduct(product.id)}
                >
                  حذف محصول
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center mt-10'>هیچ محصولی لایک نشده است.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Liked;
