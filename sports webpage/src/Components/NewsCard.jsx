// NewsCard.js
import React from 'react';
import './NewsCard.css'; // Importing the styles

const newsData = [
  {
    id: 1,
    date: '10',
    month: 'SEPT',
    title: 'T-shirt release date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.',
    image: 'news_1.jpg', // Replace with actual image URLs
  },
  {
    id: 2,
    date: '10',
    month: 'SEPT',
    title: 'Junior league Openings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.',
    image: 'news_2.jpg',
  },
  {
    id: 3,
    date: '10',
    month: 'SEPT',
    title: 'The summer transfers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim lacinia, sed feugiat ex suscipit.',
    image: 'news_3.jpg',
  },
];

const NewsCard = () => {
  return (
    <div className="news-container">
      <h2 className="news-container__title">LATEST NEWS</h2>
      <p className="news-container__subtitle">What’s next this month</p>
      <div className="news-cards">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-card__image" />
            <div className="news-card__content">
              <div className="news-card__date">
                <span className="news-card__day">{news.date}</span>
                <span className="news-card__month">{news.month}</span>
              </div>
              <div className="news-card__text">
                <h3 className="news-card__title">{news.title}</h3>
                <p className="news-card__description">{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
