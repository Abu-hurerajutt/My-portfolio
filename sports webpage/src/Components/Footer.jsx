import React from 'react';
import './Footer.css'; // Importing the CSS for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="player-image">
            {/* Add your image source in the src attribute */}
            <img src="footer.png.webp" alt="Player" />
          </div>
        </div>
        <div className="footer-right">
          <div className="team-info">
            <h2 className="team-name">Champions Tigers</h2>
            <p className="address-title">Address</p>
            <p>245 Principe Lane</p>
            <p>Avila Beach, USA</p>

            <p className="contact-title">Phone</p>
            <p>+36 345 7953 4994</p>

            <p className="contact-title">E-mail</p>
            <p>yourmail@gmail.com</p>
          </div>

          <div className="newsletter">
            <h3>Subscribe to newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Your e-mail address" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;2024 All rights reserved to GleaminRAM</p>
      </div>
    </footer>
  );
};

export default Footer;
