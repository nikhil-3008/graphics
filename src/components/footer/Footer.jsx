import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
// import { AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
// import { RiDiscordFill } from "react-icons/ri";
// import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
        <div>
          <img src={nftlogo} alt="logo" />
          <p>Graphics</p>
        </div>
       
        </div>
        <div className="footer-links_div">
          <h4>CryptoKet</h4>
          <p>Cart</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-links_div">
          <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <p> © {(new Date().getFullYear())} Graphics, Inc. All Rights Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
