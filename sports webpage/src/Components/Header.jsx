import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(150);
  const [logoSize, setLogoSize] = useState(200);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setHeaderHeight(100);
        setLogoSize(200);
      } else {
        setHeaderHeight(150);
        setLogoSize(250);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="headline">
        <div className="headline-left">
          <span className="tickets">GET Tickets | </span>
          <span className="headline-content">Shop</span>
        </div>
        <div className="healine-right">
          <div className="live big">LIVE</div>
          <span className="headline-content">Lorem Repellendus, distinctio.</span>
          <span className="headline-content">Sign up / Sign in</span>
        </div>
      </div>

      <div className="App">
        <header className="header" style={{ height: `${headerHeight}px` }}>
          <div className="header-content">
            <div className="options-left">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
            </div>
            <div className="live small">LIVE</div>

            <img
              src="logo.png.webp"
              alt="Logo"
              className="logo"
              style={{ width: `${logoSize}px`, height: 'auto' }}
            />

            <div className="options-right">
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
              <a href="#blog">Blog</a>
            </div>

            <div className="hamburger" onClick={toggleSidebar}>
              ☰
            </div>
          </div>
        </header>

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="close-button" onClick={toggleSidebar}>
            X
          </div>
          <a href="#" className='sign-s'>Signin / Signup</a>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Header;
