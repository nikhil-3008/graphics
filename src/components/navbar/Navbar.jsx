import React from 'react'
import './navbar.css'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import {  Link } from "react-router-dom";

// const Menu = () => (
//   <>
//      <Link to="/"><p>Explore</p> </Link>
//      <p>My Items</p>
    
//   </>
//  )

 const Navbar = () => {
  // const [toggleMenu,setToggleMenu] = useState(false)
  //  const [user,setUser] = useState(false)

  // const handleLogout = () => {
  //   setUser(false);
  // }
  // const handleLogin = () => {
  //   setUser(true);
  // }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/"> 
            <h1>Graphics</h1>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
