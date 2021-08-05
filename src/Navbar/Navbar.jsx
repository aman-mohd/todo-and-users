import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="nav_div">
      <ul>
        <li>
          <Link style={{textDecoration:"none"}} to="/">Todo App</Link>
        </li>
        <li>
          <Link style={{textDecoration:"none"}} to="/user">User Pages</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
