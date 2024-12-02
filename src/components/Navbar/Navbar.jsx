import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="nav-bar">
            <div className="navbar-brand">
                <h1>SAILEY</h1>
            </div>
            <div className="navbar-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Pages</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="navbar-icon-socail">
                <div className="navbar-icon-socail-content">
                <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="navbar-icon-socail-content">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="navbar-icon-socail-content">
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar