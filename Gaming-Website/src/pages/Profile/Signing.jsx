import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/Images/Main/Logo.png"
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from '../../Context/AuthContext';
import { toast } from 'react-toastify';


const Signing = () => {

  const { loginUser } = useAuth(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loggedIn = await loginUser(email, password);

    if (loggedIn) {
      navigate('/'); 
    } else {
      toast.warning('ایمیل یا رمز ورود اشتباه است');
    }
  };

  return (
    <div className='bg-gradient-to-b from-gray-700 w-[100%] to-[#222222] h-screen'>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='flex justify-center'>
            <Link to="/">
              <img className='mt-20 sm:w-40 w-32 cursor-pointer' src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className='bg-slate-400 w-[300px] sm:w-[400px] h-full p-4 mx-auto mt-10 rounded-xl'>
            <h5 className='flex justify-center pt-5 text-base sm:text-xl font-bold text-white mt-8'>ورود به حساب کاربری</h5>
            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="email"
                placeholder='ایمیل خود را وارد کنید'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <MdOutlineAlternateEmail className='absolute left-3 top-[52px]  text-gray-500 text-sm sm:text-lg' />
            </div>
            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="password"
                placeholder='رمز خود را وارد کنید'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <RiLockPasswordLine className='absolute left-3 top-[52px] text-gray-500  text-sm sm:text-lg' />
            </div>
            <div>
              <button
                type="submit"
                className='sm:px-16 px-10 sm:py-2 py-1 bg-red-600 text-white hover:bg-gray-700 duration-500  text-xs sm:text-base font-semibold flex mt-10 mx-auto rounded-xl'
              >
                ورود
              </button>
            </div>
            <div className='mr-6 mt-5'>
              <input type="checkbox" id="rememberMe" className='placeholder:text-black cursor-pointer' />
              <label className='text-white mr-2 sm:text-sm text-xs'>مرا به خاطر بسپار</label>
            </div>
            <div className='mt-3 mr-6'><a className='cursor-pointer no-underline text-white text-xs sm:text-sm'>رمز عبور را فراموش کرده‌اید؟</a></div>
            <hr className='mt-5' />
            <div className='mt-2 flex items-center'><Link to="/signup" className='no-underline mr-2 text-white cursor-pointer text-xs sm:text-sm'>کاربر جدید هستید؟ <span className='text-red-600 font-bold text-xs sm:text-sm'>ثبت نام</span></Link></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signing