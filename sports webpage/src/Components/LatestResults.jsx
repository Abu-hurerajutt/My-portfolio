import React from 'react';
import './LatestResults.css';

const LatestResults = () => {
  return (
    <div className="latest-results-container">
      <h2 className="section-title">LATEST RESULTS</h2>
      <p className="subtitle">GREAT WIN IN FINALS</p>
      <p className="match-info">Mon 25 Sept, Champions League</p>

      <div className="match-details">
        {/* Team 1 */}
        <div className="team">
          <img
            src="result_1.jpg"
            alt="Team 1"
            className="team-logo-s"
          />
          <h1 className="score">2</h1>
          <p className="team-name">Bulls Club</p>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Team 2 */}
        <div className="team">
          <img
            src="result_2.jpg"
            alt="Team 2"
            className="team-logo-s"
          />
          <h1 className="score">2</h1>
          <p className="team-name">Tigers Club</p>
        </div>
      </div>

      {/* Descriptive Text */}
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan dolor id enim lacinia, sed feugiat ex suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan dolor id enim lacinia, sed feugiat ex suscipit.
        </p>
      </div>
      <button class="see-more-btn">
    <span class="text">See More</span>
    <span class="bar"></span>
  </button>
    </div>
  );
};

export default LatestResults;
