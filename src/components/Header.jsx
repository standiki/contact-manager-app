import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className='navbar container mb-3 py-0'>
      <Link to='/'>
        <h4 className='navbar-brand'>stanley's contact manager</h4>
      </Link>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-link'>
            <Link className='link' to='/'>
              <FaHome className='nav-icon' />
              Home
            </Link>
          </li>
          <li className='nav-link'>
            <Link className='link' to='/input'>
              <FaPlus className='nav-icon' />
              Add
            </Link>
          </li>
          <li className='nav-link'>
            <Link className='link' to='/about'>
              <FaQuestion className='nav-icon' />
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
