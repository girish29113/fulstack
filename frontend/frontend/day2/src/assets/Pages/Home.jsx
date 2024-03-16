import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Home.css';

function Home() {
  return (
    <div>
      <div className="navbar">
        <Link to="">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/events">Event List</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/location">Location</Link>
        <Link to="/">Sign in</Link>
      </div>
      <div className="content">
        <h1>Welcome to CelebRave!</h1>
        <p>Explore our Birthday party events and make your celebration truly memorable.</p>
      </div>
      <div className="footer">
        <Link to="/privacy">Privacy Policy</Link>
        <span>@Copyright issued 2024</span>
        <Link to="/terms">Terms&Condition</Link>
      </div>
    </div>
  );
}

export default Home;