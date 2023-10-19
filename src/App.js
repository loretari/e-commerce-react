import NavBar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import shoes_banner from './Components/Assets/banner_mens.png';
import clothing_banner from './Components/Assets/banner_women.png';
import bags_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path= '/' element={<Shop/>}/>
                <Route path= '/clothing' element={<ShopCategory banner= {clothing_banner} category = "clothing"/>}/>
                <Route path= '/shoes' element={<ShopCategory banner={shoes_banner} category = "shoes"/>}/>
                <Route path= '/bags' element={<ShopCategory banner={bags_banner} category = "bags"/>}/>
                <Route path= '/product' element={<Product/>}>
                   <Route path= ':productId' element={<Product/>}/>
                </Route>
                <Route path= '/cart' element={<Cart/>}/>
                <Route path= '/login' element={<LoginSignup/>}/>
            </Routes>
         <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
