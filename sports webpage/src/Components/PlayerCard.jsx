// PlayerCard.js
import React from 'react';
import './PlayerCard.css'; // External CSS file for styles

const PlayerCard = () => {
  return (
    <div className="player-card">
      <h2 className="player-card__title">PLAYER OF THE MONTH</h2>
      <p className="player-card__subtitle">What’s next this month</p>

      <div className="player-card__content">
        <div className="player-card__info">
          <div className="player-card__number">83</div>
          <h1 className="player-card__name">Michael Smith</h1>
          <p className="player-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dolor id enim 
            lacinia, sed feugiat ex suscipit. Nunc molestie malesuada pellentesque. Quisque mattis 
            ante ut nisl tristique ornare. Aenean interdum dictum augue, quis egestas erat lacinia in.
          </p>
          <p className="player-card__description">
            Nam turpis nulla, ullamcorper volutpat faucibus ut, facilisis in elit. Nam blandit diam vel felis 
            porta, vitae congue nulla feugiat. Vestibulum rhoncus odio elit, at aliquet sem posuere vel.
          </p>
        </div>

        <div className="player-card__images">
          <img
            src="player_1.png" // Replace with your image URLs
            alt="Player 1"
            className="player-card__image"
          />
          <img
            src="player_2.png" // Replace with your image URLs
            alt="Player 2"
            className="player-card__image"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
