import React from 'react';
import './Card.css';
import threedot from '../../assets/3 dot menu.svg';



const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="header">
        <span className="status-text">{cardData.status}</span>

      </div>
      <h2 className="title">
        <img src={cardData.icon} className='icon' />
        {cardData.title}</h2>
      <div className="footer">
        <div className="status-icon">
          {/* SVG Icon for the exclamation mark */}
          <img src={threedot} className='cardcircle' />
        </div>

        <span className="tag">
          <span className="dot"></span>
          {cardData.tag}</span>
      </div>
    </div>
  );
};

export default Card;