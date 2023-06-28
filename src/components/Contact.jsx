import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaPencilAlt,
  FaTimes,
} from "react-icons/fa";

export default function Contact({ id, name, phone, address, removeContact }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="contact">
      <div className="card card-body mb-3">
        <div className="card-item">
          <div className="item">
            <h4>{name}</h4>
            <i className="fa-icon" onClick={() => setIsActive(!isActive)}>
              {!isActive ? <FaChevronDown /> : <FaChevronUp />}
            </i>
          </div>
          <div className="item">
            <Link to={`/contact/edit/${id}`}>
              <i className="fa-icon">
                <FaPencilAlt />
              </i>
            </Link>
            <i onClick={() => removeContact(id)} className="fa-icon">
              <FaTimes />
            </i>
          </div>
        </div>
        <ul className="list-group">
          {isActive && (
            <>
              <li className="list-group-item">Phone: {phone}</li>
              <li className="list-group-item">Address: {address}</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
