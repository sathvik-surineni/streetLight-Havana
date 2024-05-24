import React from 'react'
import googlepaly from '../../../images/appleandgoogle.png'
import logo from '../../../images/Watt.png'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
   <footer id="footer">
    <div className="leftFotter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile Phone</p>
        <img src={googlepaly} alt="Googleplay" className='downloads' />
    </div>
    <div className="midFooter">
        <img src={logo} alt="Logo" />
        <p>Copyrights 2024 &copy;EcoWatt</p>
    </div>
    <div className="rightFooter">
        <h4>Follow Us</h4>
        <Link href="#">Instagram</Link>
        <Link href="#">Youtube</Link>
        <Link href="#">Facebook</Link>
    </div>
   </footer>
  )
}

export default Footer;
