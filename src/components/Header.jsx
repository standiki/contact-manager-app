import React from 'react'
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className='navbar container'>
      <h4 className='navbar-brand'>stanley's contact manager</h4>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-link'>
            <FaHome className='nav-icon' />
            Home
          </li>
          <li className='nav-link'>
            <FaPlus className='nav-icon' />
            Add
          </li>
          <li className='nav-link'>
            <FaQuestion className='nav-icon' />
            About
          </li>
        </ul>
      </div>
    </nav>
  )
}
