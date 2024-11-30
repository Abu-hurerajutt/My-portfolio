// Teams.js
import React from "react";
import "./Teams.css";

const Teams = () => {
  const events = [
    {
      image: "upcoming_1.jpg.webp",
      title: "New T-shirts launch",
      date: "August 25, 2024 / 17 UTC",
    },
    {
      image: "upcoming_2.jpg.webp",
      title: "Team presentation",
      date: "August 25, 2024 / 17 UTC",
    },
    {
      image: "upcoming_3.jpg.webp",
      title: "Press Conference",
      date: "August 25, 2024 / 17 UTC",
    },
    {
      image: "upcoming_4.jpg.webp",
      title: "Training Session",
      date: "August 26, 2024 / 14 UTC",
    },
  ];

  const games = [
    {
      homeTeam: "The Alligators",
      awayTeam: "The Tigers",
      score: "8:3",
      league: "Football League",
      date: "August 25, 2018 / 17 UTC",
      homeLogo: "logo_1.png.webp",
      awayLogo: "logo_2.png.webp",
    },
    {
      homeTeam: "The Alligators",
      awayTeam: "The Eagles",
      score: "8:3",
      league: "Football League",
      date: "August 25, 2018 / 17 UTC",
      homeLogo: "logo_3.png.webp",
      awayLogo: "logo_4.png.webp",
    },
    {
      homeTeam: "Denver Pumas",
      awayTeam: "The Tigers",
      score: "8:3",
      league: "Football League",
      date: "August 25, 2018 / 17 UTC",
      homeLogo: "logo_1.png.webp",
      awayLogo: "logo_3.png.webp",
    },
    {
      homeTeam: "Denver Pumas",
      awayTeam: "The Tigers",
      score: "8:3",
      league: "Football League",
      date: "August 25, 2018 / 17 UTC",
      homeLogo: "logo_1.png.webp",
      awayLogo: "logo_3.png.webp",
    },
    {
      homeTeam: "Denver Pumas",
      awayTeam: "The Tigers",
      score: "8:3",
      league: "Football League",
      date: "August 25, 2018 / 17 UTC",
      homeLogo: "logo_1.png.webp",
      awayLogo: "logo_3.png.webp",
    },
  ];

  return (
    <div className="container">
      <div className="events-wrapper">
        <h2 className="header-title">Upcoming Events</h2>
        <p className="header-subtitle">What's next this month</p>
        {events.map((event, index) => (
          <div className="card-event" key={index}>
            <img src={event.image} alt={event.title} className="thumbnail" />
            <div className="details">
              <h3 className="event-heading">{event.title}</h3>
              <p className="event-timestamp">{event.date}</p>
            </div>
            <button className="action-button">
              <span className="button-text">See More</span>
              <span className="button-bar"></span>
            </button>
          </div>
        ))}
      </div>

      <div className="games-wrapper">
        <h2 className="header-title">Latest Games</h2>
        <p className="header-subtitle">Results</p>
        {games.map((game, index) => (
          <div className="card-game" key={index}>
            <img src={game.homeLogo} alt={game.homeTeam} className="team-logo" />
            <div className="game-details">
              <p className="team-label">{game.homeTeam}</p>
              <p className="score">{game.score}</p>
              <p className="team-label">{game.awayTeam}</p>
              <img src={game.awayLogo} alt={game.awayTeam} className="team-logo" />
              <p className="league-name">{game.league}</p>
              <p className="game-date">{game.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
