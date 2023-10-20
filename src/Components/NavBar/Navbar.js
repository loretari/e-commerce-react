import React, {useContext, useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo_Smile2.png'
import {Link} from "react-router-dom";
// import {ShopContext} from "../../Context/ShopContext";

// import logo from '../Assets/logo_Smile.jpg'
// import logo from '../Assets/logo_.png';
// import cart_icon from '../Assets/cart_icon_white.png'

const NavBar = () => {

    const [menu, setMenu] = useState("shop");
    // const {getTotalCartItems} = useContext(ShopContext)


    return (
<div className= "navbar">
<div className= "nav-logo">
    <Link style={{textDecoration: 'none'}} to='/'><img src={logo} alt= "logo"/></Link>
    <Link style={{textDecoration: 'none'}} to='/'><p>Lor_DesIgn</p></Link>
</div>
    <ul className= "nav-menu">
        <li onClick={() => {setMenu("shop")}}>
            <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to= '/'>
                Shop By
            </Link> {menu==="shop" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("clothing")}}>
            <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to={'/clothing'}>
                Clothing
            </Link> {menu==="clothing" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("shoes")}}>
            <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to='/shoes'>
                Shoes
            </Link> {menu==="shoes" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu ("bags")}}>
            <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to='/bags'>
            Bags
            </Link>{menu==="bags" ? <hr/>:<></>}</li>
    </ul>
    <div className= "nav-login-cart">
        <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to='/login'><button>Login</button></Link>
        {/*<img src={cart_icon} alt= "cart" />*/}
        <Link style={{textDecoration: 'none', color: 'rgb(255, 255, 255)'}} to= '/cart'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
        </Link>

        <div className= "nav-cart-count">0</div>
    </div>
</div>
    )
}

export default NavBar;