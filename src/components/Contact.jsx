import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaPencilAlt, FaTimes } from 'react-icons/fa'

export default function Contact({ id, name, phone, removeContact }) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className='contact'>
      <div className='card card-body mb-3'>
        <div className='card-item'>
          <div className='item'>
            <h4>{name}</h4>
            <i
              className='fa-icon'
              onClick={() => 
                setIsActive(!isActive)}
              >
              {
                !isActive 
                ? <FaChevronDown /> 
                : <FaChevronUp />
              }
            </i>
          </div>
          <div className='item'>
            <i className='fa-icon'>
              <FaPencilAlt />
            </i>
            <i 
              onClick={() => removeContact(id)}
              className='fa-icon'>
              <FaTimes />
            </i>
          </div>
        </div>
        <ul className='list-group'>
          {isActive && <li className='list-group-item'>Phone: {phone}</li>}
        </ul>
      </div>
    </div>
  )
}
