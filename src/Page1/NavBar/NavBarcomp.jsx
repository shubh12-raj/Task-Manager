import React from 'react';
import './NavBarcomp.css';
import add from '../../assets/add.svg';
import threedot from '../../assets/3 dot menu.svg';

const NavBarcomp = ({ navbaricon, name, len }) => {
  return (
    <div className="NavBar">
      <div className="left-section">
        <img src={navbaricon} className="icon plus-icon" alt="Navbar Icon" />
        <span className="todo-title">{name}</span>
        {/* Display len directly as a number */}
        <span className="todo-count">{len}</span>
      </div>
      <div className="right-section">
        <img src={add} className="icon plus-icon" alt="Add Icon" />
        <img src={threedot} className="icon ellipsis-icon" alt="Menu Icon" />
      </div>
    </div>
  );
};

export default NavBarcomp;
