import React from 'react';
import './Card.css';
import Urgent from '../../assets/SVG - Urgent Priority grey.svg'



const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="header">
      <span className="status-text">{cardData.status}</span>
        <span className="icon">
          <img src={cardData.image} alt="User" className="profile-img" />
        </span>
      </div>
      <h2 className="title">
      <img src={cardData.icon} className='icon'/>
        {cardData.title}</h2>
      <div className="footer">

        
        <span className="tag">
        <span className="dot"></span>
          {cardData.tag}</span>
      </div>
    </div>
  );
};

export default Card;