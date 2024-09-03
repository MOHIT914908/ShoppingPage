import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
       <NavLink to='/'>Shop</NavLink>
       <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/cart">
        <ShoppingCart size={32}/>
       </NavLink>
      </div>
    </div>
  )
}

export default Navbar
