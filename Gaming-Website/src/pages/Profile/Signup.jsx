import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/Images/Main/Logo.png";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Signup = () => {
  const { registerUser } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    if (username.length < 4 || username.length > 16) {
      toast.error('نام کاربری باید بین 4 تا 16 کاراکتر باشد!');
      return;
    }

 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('ایمیل نا معتبر است!');
      return;
    }

 
    if (password.length < 8 || password.length > 16) {
      toast.error('رمز عبور باید بین 8 تا 16 کاراکتر باشد!');
      return;
    }

 
    if (password !== confirmPassword) {
      toast.error('رمز عبور با تکرار رمز عبور تطابق ندارد!');
      return;
    }

    const userData = { username, email, password };
    try {
      await registerUser(userData);
      toast.success('حساب کاربری شما با موفقیت ساخته شد!');
      navigate('/signing');
    } catch (error) {
      toast.error('خطا در ایجاد حساب کاربری!');
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
            <h5 className='flex justify-center pt-5 sm:text-2xl text-lg font-bold text-white mt-8'>ثبت نام</h5>
            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="text"
                placeholder='نام کاربری'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <FaRegUser className='absolute left-3 top-[52px] text-gray-500 text-sm sm:text-lg' />
            </div>

            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="email"
                placeholder='ایمیل خود را وارد کنید'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <MdOutlineAlternateEmail className='absolute left-3 top-14 text-gray-500' />
            </div>
            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="password"
                placeholder='رمز خود را وارد کنید'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <RiLockPasswordLine className='absolute left-3 top-[52px] text-gray-500 text-sm sm:text-lg' />
            </div>
            <div className='relative w-[200px] sm:w-[300px] mx-auto'>
              <input
                type="password"
                placeholder='تکرار رمز عبور'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full h-[35px] sm:h-[40px] pl-10 pr-5 rounded-xl mt-10 placeholder:text-black outline-none placeholder:sm:text-base placeholder:text-xs'
              />
              <RiLockPasswordLine className='absolute left-3 top-[52px] text-gray-500 text-sm sm:text-lg' />
            </div>
            <div>
              <button
                type="submit"
                className='sm:px-16 px-10 sm:py-2 py-1 bg-red-600 text-white hover:bg-gray-700 duration-500 text-xs sm:text-base font-semibold flex mt-10 mx-auto rounded-xl'
              >
                ثبت نام
              </button>
            </div>
            <hr className='mt-5' />
            <div className='mt-2 flex items-center'>
              <Link to="/signing" className='no-underline mr-2 text-white text-xs sm:text-sm cursor-pointer'>
                از قبل حساب کاربری دارید؟ <span className='text-red-600 font-bold text-xs sm:text-sm'>ورود</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
