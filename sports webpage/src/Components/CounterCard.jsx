// StatsSection.js
import React, { useEffect, useState } from 'react';
import './CounterCard.css';

const CounterCard = ({ imgSrc, title, targetValue, description }) => {
  const [count, setCount] = useState(0);

  // Counter logic to increment from 0 to the target value
  useEffect(() => {
    let interval;
    if (count < targetValue) {
      interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, targetValue));
      }, 2); // Adjusts every 50ms for smooth counting
    }
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [count, targetValue]);

  return (
    <div className="counter-card">
        <div className="cou-icon">
      <img src={imgSrc} alt={title} className="icon" />
      </div>
      <div className="cou-p">
      <h2 className="counter">{count}</h2>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  // Data object matching the content and layout in your image
  const data = [
    { 
      imgSrc: 'icon_1.svg', 
      title: 'Team players', 
      targetValue: 230, 
      description: 'Lorem ipsum dolor sit amet,' 
    },
    { 
      imgSrc: 'icon_2.svg', 
      title: 'Trophies', 
      targetValue: 120, 
      description: 'Lorem ipsum dolor sit amet,' 
    },
    { 
      imgSrc: 'icon_3.svg', 
      title: 'Medals', 
      targetValue: 7, 
      description: 'Lorem ipsum dolor sit amet,' 
    },
    { 
      imgSrc: 'icon_4.svg', 
      title: 'Kicks/Match', 
      targetValue: 36, 
      description: 'Lorem ipsum dolor sit amet,' 
    },
  ];

  return (
    <div className="stats-section">
      {data.map((item, index) => (
        <CounterCard
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          targetValue={item.targetValue}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default StatsSection;
