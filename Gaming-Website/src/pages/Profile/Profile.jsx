import React, { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import NavbarTop from "../../components/Top/NavbarHeader";
import NavbarMain from "../../components/Top/NavbarMain";
import Footer from "../../components/Botoom/Footer";
import { MdOutlineBorderColor } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);


  useEffect(() => {
    if (!user) {
      navigate('/signing');
    }
  }, [user, navigate]);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  const saveUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };



  useEffect(() => {
    if (user) {
      setMobile(user.mobile || '');
      setPhone(user.phone || '');
      setDay(user.day || '');
      setMonth(user.month || '');
      setYear(user.year || '');
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.info('شما از حساب خود خارج شدید');
    navigate('/');
  };

  const MyOrders = () => {
    toast.info('شما هیچ سفارشی تا کنون ثبت نکرده اید');
  };

  const handleUpdateInfo = () => {
    const updatedUser = {
      ...user,
      mobile,
      phone,
      day,
      month,
      year,
    };

    try {
      saveUserToLocalStorage(updatedUser);
      toast.success('اطلاعات با موفقیت به روزرسانی شد');
    } catch (error) {
      console.error('Error updating user info:', error);
      toast.error('به‌روزرسانی اطلاعات با مشکل مواجه شد');
    }
  };

  const handleChangePassword = () => {
    const storedUser = getUserFromLocalStorage();

    if (!storedUser) {
      toast.error('کاربر یافت نشد');
      return;
    }

    if (currentPassword !== storedUser.password) {
      toast.error('رمز عبور فعلی نادرست است');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('رمز عبور جدید با تکرار آن مطابقت ندارد');
      return;
    }


    const updatedUser = {
      ...storedUser,
      password: newPassword,
    };


    saveUserToLocalStorage(updatedUser);
    setUser(updatedUser);
    toast.success('رمز عبور با موفقیت تغییر کرد');
  };



  const handleDayChange = (value) => {
    const dayValue = parseInt(value);
    if (dayValue >= 1 && dayValue <= 31) {
      setDay(value);
    } else if (!value) {
      setDay("");
    }
  };

  const handleMonthChange = (value) => {
    const monthValue = parseInt(value);
    if (monthValue >= 1 && monthValue <= 12) {
      setMonth(value);
    } else if (!value) {
      setMonth("");
    }
  };

  const handleYearChange = (value) => {
    if (value.length <= 4) {
      setYear(value);
    }
  };

  return (
    <div className='bg-[#222222] overflow-hidden'>
      <div>
        <NavbarTop />
        <NavbarMain />
      </div>

      <div className='w-[86%] mx-auto text-white flex md:flex-row items-center flex-col mt-8 md:mt-20 gap-5'>
        <div className='md:w-1/4 w-2/4 border-[1px] border-white/70 rounded-2xl py-5'>
          <div className='flex flex-col items-center justify-center'>
            <FaUserCircle className='text-6xl text-white' />
            <span className='text-lg mt-2'>{user?.username}</span>
            <button
              onClick={handleLogout}
              className='w-[65px] h-[35px] border-2 border-red-600 items-center rounded-full flex justify-center font-medium mt-5 hover:bg-red-600 duration-300'
            >
              خروج
            </button>
          </div>
          <div className='flex flex-col items-center justify-center mt-8 text-center'>
            <div className='flex flex-col items-center justify-center mt-8 text-center'>
              <h4 className='bg-red-600 rounded-full 2xl:w-[260px] lg:w-[180px] md:w-[140px] sm:w-[200px] w-[160px] h-[34px]'>اطلاعات کاربری</h4>
              <ul className='leading-9 text-red-600 font-medium md:text-xs sm:text-sm text-xs lg:text-sm items-center'>
                <li onClick={MyOrders} className='hover:bg-slate-50 cursor-pointer mt-4 border-[1px] border-white rounded-full duration-300 2xl:w-[260px] sm:w-[200px] w-[160px] lg:w-[180px] md:w-[140px] h-[34px] flex items-center justify-center gap-2'><MdOutlineBorderColor /><a>سفارش های من</a></li>
                <Link to="/shoppingCart"> <li className='hover:bg-slate-50 cursor-pointer mt-4 border-[1px] border-white rounded-full duration-300 2xl:w-[260px] sm:w-[200px] w-[160px] lg:w-[180px] md:w-[140px] h-[34px] flex items-center justify-center gap-2'><IoLocation /><a>سبد خرید من</a></li></Link>
                <Link to="/liked"><li className='hover:bg-slate-50 cursor-pointer mt-4 border-[1px] border-white rounded-full duration-300 2xl:w-[260px] sm:w-[200px] w-[160px] lg:w-[180px] md:w-[140px] h-[34px] flex items-center justify-center gap-2'><FaHeart /><a>علاقه مندی های من</a></li></Link>
              </ul>
            </div>
          </div>
        </div>

        <div className='w-3/4 border-[1px] border-white/70 rounded-2xl py-5'>
          <div className='text-center flex flex-col gap-y-5  items-center'>
            <h3 className='text-xl text-red-600'>اطلاعات و مشخصات کاربری</h3>
            <div className='flex md:flex-row flex-col gap-5 mt-5'>
              <input
                className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
                type="text"
                value={user?.username || ''}
                readOnly
              />
              <input
                className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
                type="email"
                value={user?.email || ''}
                readOnly
              />
            </div>
            <input
              className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
              type="text"
              placeholder='تلفن همراه'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
              type="text"
              placeholder='تلفن ثابت'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className='flex gap-5'>
              <input
                className='2xl:w-[133px] xl:w-[102px] lg:w-[80px] w-[53px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium text-center'
                type="number"
                placeholder="روز"
                value={day}
                onChange={(e) => handleDayChange(e.target.value)}
              />
              <input
                className='2xl:w-[133px] xl:w-[102px] lg:w-[80px] w-[53px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium text-center'
                type="number"
                placeholder="ماه"
                value={month}
                onChange={(e) => handleMonthChange(e.target.value)}
              />
              <input
                className='2xl:w-[133px] xl:w-[102px] lg:w-[80px] w-[53px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium text-center'
                type="number"
                placeholder="سال"
                value={year}
                onChange={(e) => handleYearChange(e.target.value)}
              />
            </div>

            <button
              className='w-[165px] h-[45px] bg-red-600 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-600 duration-300'
              onClick={handleUpdateInfo}
            >
              <RiUserSettingsLine className='text-xl' /> به روزرسانی اطلاعات
            </button>


            <div className='flex flex-col gap-y-5 items-center mt-8'>
              <h3 className='text-xl text-red-600'>تغییر رمز عبور</h3>
              <input
                className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
                type="password"
                placeholder='رمز عبور فعلی'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
                type="password"
                placeholder='رمز عبور جدید'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                className='2xl:w-[440px] xl:w-[350px] lg:w-[280px] w-[200px] h-[44px] rounded-lg outline-none border-2 border-red-600 text-black font-medium pr-5'
                type="password"
                placeholder='تکرار رمز عبور جدید'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className='w-[165px] h-[45px] bg-red-600 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-600 duration-300'
                onClick={handleChangePassword}
              >
                <RiUserSettingsLine className='text-xl' /> تغییر رمز عبور
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
