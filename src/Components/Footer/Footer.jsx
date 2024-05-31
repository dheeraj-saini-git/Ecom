import react from 'react'
import './Footer.css'
import logo from '../assets/logo1.png'
import insta_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
function Footer(){
    return(
        <div className='footer'>
        <div className='footer-img'> 
        <img src={logo} alt="logo" />
         <p>SHOP with us</p>
        </div>
        <ul>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='icon_img'>
            <img src={insta_icon} alt="instagram" />
            <img src={whatsapp_icon} alt="whatsapp" />
            <img src={pinterest_icon} alt="pinterest" />
        </div>
        <hr />
        <p>Copyright@2024 - All Right Reserved </p>
        </div>
    )

}

export default Footer