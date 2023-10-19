import NavBar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path= '/' element={<Shop/>}/>
                <Route path= '/clothings' element={<ShopCategory category = "clothings"/>}/>
                <Route path= '/shoes' element={<ShopCategory/>} category = "shoes"/>
                <Route path= '/bags' element={<ShopCategory/>} category = "bags"/>
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
