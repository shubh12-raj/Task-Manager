import React from 'react';
import './Card.css';
import Urgent from '../../assets/SVG - Urgent Priority grey.svg'


const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="header">
      <span className="status-text">{cardData.status}</span>
        <span className="icon">
          <img src='https://randomuser.me/api/portraits/men/23.jpg' alt="User" className="profile-img" />
        </span>
      </div>
      <h2 className="title">{cardData.title}</h2>
      <div className="footer">
        <div className="status-icon">
          {/* SVG Icon for the exclamation mark */}
          <img src={Urgent} className='cardcircle'/>
        </div>
        
        <span className="tag">
        <span className="dot"></span>
          {cardData.tag}</span>
      </div>
    </div>
  );
};

export default Card;