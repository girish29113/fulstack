import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/why-us">Why Us</Link></li>
                    <li><Link to="/what-we-do">What We Do</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/terms">Terms&Condition</Link></li>
                    <li><Link to="/privacy">Privacy&Policy</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>What We Do</h3>
                <ul>
                    <li><Link to="/engagement">Engagement</Link></li>
                    <li><Link to="/wedding-planner">Wedding Planner</Link></li>
                    <li><Link to="/destination-wedding">Destination Wedding</Link></li>
                    <li><Link to="/corporate-events">Corporate Events</Link></li>
                    <li><Link to="/product-launch-events">Product Launch Events</Link></li>
                    <li><Link to="/company-award-ceremony">Company Award Ceremony</Link></li>
                    <li><Link to="/virtual-event-planner">Virtual Event Planner</Link></li>
                    <li><Link to="/corporate-social-events">Corporate Social Events</Link></li>
                    <li><Link to="/exhibition-stall">Exhibition Stall</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>What We Do</h3>
                <ul>
                    <li><Link to="/birthday-party">Birthday Party</Link></li>
                    <li><Link to="/housewarming">Housewarming</Link></li>
                    <li><Link to="/baby-naming-ceremony">Baby Naming Ceremony</Link></li>
                    <li><Link to="/puberty-function">Puberty Function</Link></li>
                    <li><Link to="/bangle-ceremony">Bangle Ceremony</Link></li>
                    <li><Link to="/sangeet-mehendi">Sangeet & Mehendi</Link></li>
                    <li><Link to="/anniversary">Anniversary</Link></li>
                    <li><Link to="/college-school-alumni">College/School Alumni</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>No.2, Ground floor, D.J.Nagar, Hopescollage, Near Water Tank, Coimbatore-641 004.</p>
                <p>Email: enquiry@bambooevents.co.in</p>
                <p>Phone: +91 99949 24984</p>
            </div>
        </footer>
    );
};

export default Footer;
