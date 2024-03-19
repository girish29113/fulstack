import React from 'react';
import '../Css/Home.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar /><br></br><br></br>
      <div className="hero">
        <h1>Welcome to CelebRave!</h1>
        <p>Explore our event management services and make your celebration truly memorable.</p>
        <Link to="/eventform" className="cta-button">Book Your Event</Link>
      </div>
        <h2 className='homeheading'>Our Services</h2>
      <div className="services">
        <div className="service">
          <img src="https://www.bambooevents.co.in/images/new/birthday2.webp" alt="Service 1" />
          <h3 className='homeheading'>Birthday</h3>
          <p className='homeheading'>Birthday party Events</p>
        </div>
        <div className="service">
          <img src="https://www.bambooevents.co.in/images/new/product-launch-event.png" alt="Service 2" />
          <h3 className='homeheading'>Corporate</h3>
          <p className='homeheading'>Corporate Events</p>
        </div>
        <div className="service">
          <img src="https://www.bambooevents.co.in/images/new/corporate2.webp" alt="Service 3" />
          <h3 className='homeheading'>Party</h3>
          <p className='homeheading'>Party Celebration</p>
        </div>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"I couldn't have asked for a better birthday celebration! The team at CelebRave made sure every detail was perfect. From the decorations to the entertainment, everything was top-notch."</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial">
          <p>"Thank you, CelebRave, for making my daughter's birthday party a memorable one. The themed decorations and fun activities kept the kids entertained throughout the event. Will definitely be using your services again!"</p>
          <span>- Jane Smith</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
