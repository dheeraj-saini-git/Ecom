import React,{useContext, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../assets/logo.png'
import Cart from '../assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'

function Navbar(){

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()
    function dropdown_toggle(e){
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return <div className='navbar'>
    <div className='nav-logo'>
    <img src={Logo} className='logo' alt="logo" />
    <div className="p">
    {/* <p>SHOP</p>
    <p>WITH US</p> */}
    </div>
   
    </div>
     <img  class ='nav-dropdown' src={nav_dropdown} alt="image" onClick={dropdown_toggle}/>
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <Link to ='/'>Shop</Link> {menu=="shop" && <hr />}</li>
        <li onClick={()=>{setMenu("men")}}> <Link to='/men'>Men</Link> {menu=="men" && <hr />}</li>
        <li onClick={()=>{setMenu("women")}}> <Link to='/women'>Women</Link> {menu=="women" && <hr />}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='kids'>Kids</Link>{menu=="kids" && <hr />}</li>
        
    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'> <img src={Cart} alt="cart-logo" /></Link>
       
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
}
export default Navbar;