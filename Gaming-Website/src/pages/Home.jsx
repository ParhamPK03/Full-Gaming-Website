import React from 'react'
import NavbarHeader from "../components/Top/NavbarHeader"
import NavbarMain from "../components/Top/NavbarMain"
import NavbarFooter from "../components/Top/NavbarFooter"
import TopProduct from '../components/Center/TopProduct'
import MostSellProducts from '../components/Center/MostSellProducts'
import BodyLogo from '../components/Center/BodyLogo'
import ProductWithOff from '../components/Center/ProductWithOff'
import PopularProducts from '../components/Center/PopularProducts'
import TopBottom from '../components/Botoom/TopBottom'
import CenterBottom from '../components/Botoom/CenterBottom'
import Footer from '../components/Botoom/Footer'
import ScrollToTop from "../components/Top/ScrollToTop"



const Home = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <NavbarHeader/>
      <NavbarMain/>
      <NavbarFooter/>
      <ScrollToTop/>
      <TopProduct/>
      <MostSellProducts/>
      <BodyLogo/>
      <ProductWithOff/>
      <PopularProducts/>
      <TopBottom/>
      <CenterBottom/>
      <Footer/>
      </div>
    </>
  )
}

export default Home