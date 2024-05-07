import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navitem'> 
        <div className='logo'>
        <h1>
            DA
        </h1> 
        <h3>Smart Homes</h3>
        </div>

        <div className='menu-icons'>
        <i class="fa-solid fa-bars"></i>
        </div>

        <ul className='nav-menu'>
            <li className='nav-links'><a href='/'><i class="fa-solid fa-magnifying-glass"></i></a></li>

            <li className='nav-links'><a href='/'><i class="fa-regular fa-heart"></i></a></li>

            <li className='nav-links'><a href='/'><i class="fa-regular fa-basket-shopping"></i></a></li>

            <li className='nav-links'><a href='/'><i class="fa-solid fa-user"></i></a></li>

            <li className='nav-links'><a href='/'><i class="fa-solid fa-gift"></i></a></li>

        </ul>
    </nav>
  )
}

export default Navbar