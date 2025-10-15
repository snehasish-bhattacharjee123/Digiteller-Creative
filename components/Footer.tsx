import { Instagram, Phone, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Zap size={32} />
              <span>Digiteller Creative</span>
            </div>
            <p className="footer-tagline">
              Your Growth Partner in the Digital World
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Get In Touch</h3>
            <div className="footer-contact">
              <a href="tel:7998596948" className="contact-item">
                <Phone size={18} />
                <span>79985 96948</span>
              </a>
              <a href="https://instagram.com/digitellercreative" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Instagram size={18} />
                <span>@digitellercreative</span>
              </a>
              <a href="mailto:contact@digitellercreative.com" className="contact-item">
                <Mail size={18} />
                <span>contact@digitellercreative.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Digiteller Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
