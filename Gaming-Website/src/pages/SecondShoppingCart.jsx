import React, { useContext } from "react";
import HeaderTop from "../components/Top/NavbarHeader";
import HeaderMain from "../components/Top/NavbarMain";
import Footer from "../components/Botoom/Footer";
import { GrMapLocation } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { CartContext } from "../Context/CartContext";



const SecondShoppingCart = () => {

    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    console.log(cart, removeFromCart, increaseQuantity, decreaseQuantity);

    // Calculate total price, discount, and payable amount
    const totalOrderPrice = cart.reduce((acc, product) => acc + (product.oldPrice * product.quantity), 0);
    const totalDiscount = cart.reduce((acc, product) => acc + ((product.oldPrice - product.price) * product.quantity), 0);
    const totalPayable = totalOrderPrice - totalDiscount;


    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

  
    const handleSubmit = () => {
        if (!name || !lastName || !phoneNumber || !city || !address) {
            setError('لطفاً تمامی فیلدهای ضروری را پر کنید.');
        } else {
            setError(''); 
           
        }
    };

    // SweetAlert
    const handleClick = () => {
        Swal.fire({
            title: 'متاسفیم!',
            text: 'خطایی رخ داده است لطفا بعدا دوباره امتحان کنید',
            icon: 'error',
            confirmButtonText: 'باشه',
            background: '#222222',
            color: '#ffffff',
            confirmButtonColor: '#ff0000',
        });
    };

    return (
        <div className="overflow-hidden">
            {/* Header */}
            <div>
                <HeaderTop />
                <HeaderMain />
            </div>

            {/* Main */}
            <div className="pt-5 flex 2xl:flex-row flex-col items-center justify-center w-[86%] mx-auto gap-5">

                {/* Right */}
                <div>
                    {/* Top */}
                    <div className="lg:w-[930px] w-[400px] sm:w-[600px] md:w-[700px] h-[55px] md:h-[75px] bg-red-100 rounded-full flex items-center justify-between mx-auto px-10">
                    <div className="flex items-center w-full relative">
                            {/* First Icon */}
                            <div className="flex items-center justify-center bg-white w-12 h-12 border-2 border-red-600 rounded-full">
                                <TfiShoppingCartFull className="text-red-600 text-2xl" />
                            </div>
                            {/* Line between icons */}
                            <div className="flex-1 h-[2px] bg-red-600"></div>
                            {/* Second Icon */}
                            <div className="flex items-center justify-center bg-red-600 w-12 h-12 rounded-full border-2 border-red-600">
                                <GrMapLocation className="text-white text-2xl" />
                            </div>
                            {/* Line between icons */}
                            <div className="flex-1 h-[2px] bg-red-600"></div>
                            {/* Third Icon */}
                            <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full border-2 border-red-600">
                                <CiMoneyCheck1 className="text-red-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className='mt-10'>
                        <div>
                            <h2 className='text-lg font-medium text-red-600'>ثبت / ویرایش آدرس :</h2>
                        </div>
                        {/* Input */}
                        <div className="items-center flex flex-col">
                        <div className='flex gap-5 mt-8'>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='نام'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='نام خانوادگی'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 mt-4'>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="number"
                                    placeholder='شماره موبایل'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='نام گیرنده'
                                    value={receiverName}
                                    onChange={(e) => setReceiverName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 mt-4'>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='استان'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='شهر'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 mt-4'>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='محله'
                                    value={neighborhood}
                                    onChange={(e) => setNeighborhood(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[44px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="number"
                                    placeholder='کد پستی'
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 mt-4'>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[90px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='آدرس'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='lg:w-[430px] w-[300px] h-[90px] border-[1px] rounded-md border-[#b1b6b8] placeholder:text-[#2b2b2b] pr-3 placeholder:text-sm placeholder:font-medium outline-red-600'
                                    type="text"
                                    placeholder='توضیحات'
                                />
                            </div>
                        </div>

                        {/*Error massage*/}
                        {error && <p className="text-red-600 mt-4">{error}</p>}

                        <button onClick={handleSubmit} className="mt-4 bg-red-600 hover:bg-green-500 duration-500 text-white py-2 px-4 rounded">
                            ارسال
                        </button>
                    </div>
                    </div>

                    {/* Leaflet Map */}
                    <div className='mt-10 mr-0 lg:mr-6'>
                        <MapContainer center={[35.6892, 51.389]} zoom={14} scrollWheelZoom={false} style={{ width: '880px', height: '250px' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[35.6892, 51.389]}>
                                <Popup>Tehran, Iran.</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>

                {/* Left */}
                <div className="2xl:w-[300px] lg:w-[500px] md:w-[350px] w-[300px] h-[300px] border-[1px] shadow-sm shadow-red-600 border-red-600 rounded-md items-center flex flex-col justify-center gap-y-5 2xl:-mt-48">
                <div>
                        <h3 className="text-red-600 font-medium text-lg">جزئیات پرداخت</h3>
                    </div>
                    {/* Top */}
                    <div className="flex gap-8 mt-3">
                        {/* R */}
                        <div className="text-sm font-medium text-gray-600">قیمت کل سفارشات:</div>
                        <div className="text-sm font-medium text-gray-600">{totalOrderPrice} تومان</div>
                    </div>
                    {/* Center */}
                    <div className="flex gap-8">
                        {/* R */}
                        <div className="text-sm font-medium text-gray-600">تخفیف محصولات:</div>
                        <div className="text-sm font-medium text-gray-600">{totalDiscount} تومان</div>
                    </div>
                    {/* Bottom */}
                    <div className="flex gap-8">
                        {/* R */}
                        <div className="text-sm font-medium text-gray-600">مبلغ قابل پرداخت:</div>
                        <div className="text-sm font-medium text-gray-600">{totalPayable} تومان</div>
                    </div>
                    <div>
                        <Link onClick={handleClick}>
                            <button className="rounded-full bg-red-600 text-white w-[180px] h-[36px] mt-5 hover:bg-gray-700 duration-500">ثبت و مرحله بعد</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/ShoppingCart">
                            <button className="rounded-ful text-red-600 w-[180px] h-[36px] border-2 border-red-600 rounded-full hover:bg-red-100 duration-500">بازگشت به سبد خرید</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default SecondShoppingCart;