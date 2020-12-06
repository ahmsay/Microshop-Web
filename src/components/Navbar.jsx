import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>Dashboard</Link>
        <NavLink to='/customers'>Customers</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/payments'>Payments</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
