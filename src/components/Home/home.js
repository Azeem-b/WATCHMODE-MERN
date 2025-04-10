import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h4 className="brand-title">Watch Movies</h4>
        <h1 className="hero-heading">
          Unlimited
          {' '}
          <span>Movies</span>
          , TV Shows, & More.
        </h1>
        <div className="hero-meta">
          <span className="badge">PG 18</span>
          <span className="badge">HD</span>
          <span className="genre">Romance, Drama</span>
          <span className="year">2022</span>
          <span className="duration">128 min</span>
        </div>
        <button type="button" className="watch-btn" onClick={() => navigate('/')}>Watch Now</button>
      </div>
      <div className="hero-image">
        <img src="https://www.plex.tv/wp-content/uploads/2025/03/watch-free-mobile.png" alt="hero-poster" />
      </div>
    </div>
  );
};

export default HomePage;
