import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation new-nav">
      <h2 className="app-heading">Watch Movies</h2>
      <div className="feature-icons">
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="nav-link"
          aria-label="Home"
        >
          Home
        </button>
      </div>

      <div className="feature-icons">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="nav-link"
          aria-label="Movies"
        >
          Movies
        </button>
      </div>

      <div className="feature-icons">
        <button
          type="button"
          onClick={() => navigate('/about')}
          className="nav-link"
          aria-label="About Us"
        >
          About Us
        </button>
      </div>

      <div className="feature-icons">
        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="nav-link"
          aria-label="Contact Us"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Navigation;
