import React from 'react';
import { AdverProducts } from '../../assets/assets';
import { IoMdArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import GPUImg from "../../assets/Images/Main/GPU.png";
import Motherboard from "../../assets/Images/Main/Motherboard.png";
import Swal from 'sweetalert2';
import ImageWithLoader from '../ImageWithLoader'; 

const TopProduct = ({ img, title, amount }) => {
    return (
        <div className='bg-[#F0F2F8] w-[260px] sm:w-[410px] h-[300px] rounded-xl mt-5 items-center flex justify-center group relative mx-auto'>
            <div className='flex items-center'>
                <div className='flex flex-col pr-10 w-[220px] pb-8'>
                    <p className='text-xs w-20 h-6 bg-white text-[#888888] font-medium flex items-center justify-center rounded-md group-hover:bg-red-600 duration-700 group-hover:text-white transition-colors'>
                        {amount} محصول
                    </p>
                    <h4 className='text-[40px] font-normal pt-5 w-[120px] h-[116px] leading-tight'>
                        {title}
                    </h4>
                </div>
                <div className='pt-6 flex flex-col'>
                    <ImageWithLoader 
                        src={img} 
                        alt={title} 
                        className='w-full h-full object-cover rounded-md' 
                    />
                    <Link to="/auction">
                        <h5 className='absolute left-0 bottom-0 bg-white flex items-center text-[14px] font-medium p-1.5'>محصولات <IoMdArrowDropleft className='text-sm text-red-600' /></h5>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const TopProductsList = () => {
    const handleClick = () => {
        Swal.fire({
            title: 'متاسفیم!',
            text: ' به علت تغییرات این بخش در حال حاضر در دسترس  نیست',
            icon: 'info',
            confirmButtonText: 'باشه',
            background: '#222222', 
            color: '#ffffff',   
            confirmButtonColor: '#ff0000',
        });
    };

    return (
        <div className='sm:mt-28 mt-10 w-[84%] mx-auto ' id='TopProduct'>
            {/* Title */}
            <div>
                <h2 className='text-red-600 text-sm md:text-lg lg:text-2xl font-medium cursor-default'>
                    دسته بندی های <span className='text-black'>برتر</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 items-center'>
                {AdverProducts.map((product, index) => (
                    <div key={index}>
                        <TopProduct
                            img={product.img}
                            title={product.title}
                            amount={product.amount}
                        />
                    </div>
                ))}
            </div>

            {/* 2 Img */}
            <div className='flex flex-col md:flex-row gap-6 mt-24 mx-auto justify-center'>
                <div className='relative'>
                    <ImageWithLoader src={GPUImg} alt="GPU" />
                    <div className='absolute top-10 right-8 text-green-400 text-sm sm:text-xl lg:text-2xl xl:text-4xl font-bold flex flex-col cursor-default'>
                        <div>GPU</div>
                        <div className='lg:mt-5 mt-2 text-purple-400'>RTX 4070 TI</div>
                    </div>
                    <Link onClick={handleClick}>
                        <button className='text-black bg-white rounded-md px-2 py-2.5 text-xs font-medium left-5 bottom-5 absolute hover:bg-red-600 hover:text-white duration-500 flex items-center group'>
                            مشاهده کالا <IoMdArrowDropleft className='text-base text-red-600 group-hover:text-black' />
                        </button>
                    </Link>
                </div>

                <div className='relative'>
                    <ImageWithLoader src={Motherboard} alt="Motherboard" />
                    <div className='absolute top-10 right-8 text-white text-sm sm:text-xl lg:text-2xl xl:text-4xl font-bold flex flex-col cursor-default'>
                        <div>Motherboard</div>
                        <div className='lg:mt-5 mt-2 text-yellow-400'>مادربرد گیگابایت</div>
                    </div>
                    <Link onClick={handleClick}>
                        <button className='text-black bg-white rounded-md px-2 py-2.5 text-xs font-medium left-5 bottom-5 absolute hover:bg-red-600 hover:text-white duration-500 flex items-center group'>
                            مشاهده کالا <IoMdArrowDropleft className='text-base text-red-600 group-hover:text-black' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopProductsList;
