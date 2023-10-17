import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo_Smile2.png'

// import logo from '../Assets/logo_Smile.jpg'
// import logo from '../Assets/logo_.png';
// import cart_icon from '../Assets/cart_icon_white.png'

const NavBar = () => {

    const [menu, setMenu] = useState("shop");

    return (
<div className= "navbar">
<div className= "nav-logo">
    <img src={logo} alt= "logo"/>
    <p>Lor_DesIgn</p>
</div>
    <ul className= "nav-menu">
        <li onClick={() => {setMenu("shop")}}>Shop By {menu==="shop" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("clothings")}}>Clothing {menu==="clothings" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("shoes")}}>Shoes {menu==="shoes" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("bags")}}>Bags {menu==="bags" ? <hr/>:<></>}</li>
    </ul>
    <div className= "nav-login-cart">
        <button>Login</button>
        {/*<img src={cart_icon} alt= "cart" />*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
        </svg>
        <div className= "nav-cart-count">0</div>
    </div>
</div>
    )
}

export default NavBar;