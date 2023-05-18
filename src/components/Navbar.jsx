import React from 'react';
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h4 className='navbar-title'>stanley's contact manager</h4>
      <div className="nav-menu">
        <ul>
          <li className="nav-link">
            <FaHome className='nav-icon' />
            Home
          </li>
          <li className="nav-link">
            <FaPlus className='nav-icon' />
            Add
          </li>
          <li className="nav-link">
            <FaQuestion className='nav-icon' />
            About
          </li>
        </ul>
      </div>
    </nav>
  )
}
