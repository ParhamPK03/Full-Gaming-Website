import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"
import Profile from "./pages/Profile/Profile"
import Signing from "./pages/Profile/Signing"
import Signup from "./pages/Profile/Signup"
import Liked from "./pages/Liked"
import Auction from "./pages/Auction"
import Headset from "./pages/Headset"
import Joystick from "./pages/Joystick"
import Keyboards from "./pages/Keyboards"
import Microphone from "./pages/Microphone"
import Monitor from "./pages/Monitor"
import Mouse from "./pages/Mouse"
import MostSellProducts from "./components/Center/MostSellProducts"
import SecondShoppingCart from "./pages/SecondShoppingCart"
import ProductDetails from "./pages/ProductDeatail"
import AboutUs from "../src/pages/AboutUs"
 




const routes = [
    { path: "/", element: <Home/> },
    { path: "/shoppingCart", element: <ShoppingCart/> },
    { path: "/profile", element: <Profile/> },
    { path: "/signing", element: <Signing/> },
    { path: "/signup", element: <Signup/> },
    { path: "/liked", element: <Liked/> },
    { path: "/auction", element: <Auction/> },
    { path: "/headset", element: <Headset/> },
    { path: "/joystick", element: <Joystick/> },
    { path: "/keyboards", element: <Keyboards/> },
    { path: "/microphone", element: <Microphone/> },
    { path: "/monitor", element: <Monitor/> },
    { path: "/mouse", element: <Mouse/> },
    { path: "/mostSellProducts", element: <MostSellProducts/> },
    { path: "/secondShoppingCart", element: <SecondShoppingCart/> },
    { path: "/product/:id", element: <ProductDetails/> },
    { path: "/aboutUs", element: <AboutUs/> }
 
  ];
  
  export default routes;