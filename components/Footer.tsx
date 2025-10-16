import { Linkedin, Facebook, Instagram, Phone, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span>Superside</span>
            </div>
            <p className="footer-copyright">
              © 2025 Superside. All rights reserved.
            </p>
          </div>

          <div className="footer-center">
            <div className="footer-legal-links">
              <a href="/privacy">Privacy policy</a>
              <a href="/terms">Terms of use</a>
              <a href="/status">Status page</a>
              <a href="/dmca">DMCA</a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Globe size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
