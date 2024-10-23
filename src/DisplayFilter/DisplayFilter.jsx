import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DisplayFilter.css';
import display from '../assets/Display.svg';

const DisplayFilter = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [groupBy, setGroupBy] = useState('Status');
  const [orderBy, setOrderBy] = useState('Priority');

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle Grouping change
  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setGroupBy(selectedGroup);

    // Navigate based on the selected grouping option
    if (selectedGroup === 'Status') {
      navigate('/status'); // Adjust the route as needed
    } else if (selectedGroup === 'User') {
      navigate('/user'); // Future route for User
    } else if (selectedGroup === 'Priority') {
      navigate('/priority'); // Future route for Priority
    }
  };

  // Handle Ordering change
  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="display-filter">
      <button className="display-button" onClick={toggleDropdown}>
        <img src={display} className='display' alt="Display Icon"/>
        Display ▼
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="filter-options">
            <div className="filter-group">
              <label>Grouping:</label>
              <select value={groupBy} onChange={handleGroupChange}>
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Ordering:</label>
              <select value={orderBy} onChange={handleOrderChange}>
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayFilter;
