import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, price }) => {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardText">{description}</p>
      <p className="cardPrice">{price}</p>
      <button className="button">Comprar</button>
    </div>
  );
};

export default CourseCard;
