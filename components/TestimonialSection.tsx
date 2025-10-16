import { ChevronUp, ChevronDown, Play } from 'lucide-react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-layout">
          <div className="testimonial-content">
            <div className="thomson-logo">
              <svg viewBox="0 0 120 40" className="logo-icon">
                <circle cx="20" cy="20" r="3" fill="currentColor"/>
                <circle cx="35" cy="20" r="3" fill="currentColor"/>
                <circle cx="50" cy="20" r="3" fill="currentColor"/>
                <text x="65" y="25" fontSize="12" fill="currentColor">Thomson</text>
                <text x="65" y="35" fontSize="8" fill="currentColor">Reuters</text>
              </svg>
            </div>
            
            <blockquote className="testimonial-quote">
              "I did not have the bandwidth. And I wouldn't have even known where to begin to try to produce this, from finding a local crew, creating the detailed concept direction ... So I said to Superside, 'here's my problem' and they said, oh yeah, we can solve that."
            </blockquote>
            
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-avatar"></div>
                <div className="author-details">
                  <div className="author-name">Erin Nelson</div>
                  <div className="author-title">Content Strategist at Thomson Reuters</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-stats">
              <div className="stat-item">
                <div className="stat-number">~90%</div>
                <div className="stat-label">Percentage of time saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Number of videos produced</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-video">
            <div className="video-embed">
              <div className="video-thumbnail">
                <div className="video-preview"></div>
                <button className="video-play-btn">
                  <Play size={24} fill="currentColor" />
                </button>
                <div className="video-overlay">
                  <div className="video-title">THOMSON REUTERS</div>
                  <div className="video-subtitle">How Thomson Reuters leveraged Superside to turn a justice initiative...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-navigation">
          <button className="nav-btn nav-up">
            <ChevronUp size={20} />
          </button>
          <button className="nav-btn nav-down">
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;