import { Edit3, MessageSquare, Smartphone } from 'lucide-react';
import './TechEnabledSection.css';

const TechEnabledSection = () => {
  return (
    <section className="tech-enabled-section">
      <div className="container">
        <div className="tech-enabled-header">
          <span className="section-label">EASY & HASSLE-FREE</span>
          <h2 className="tech-enabled-title">
            Tech enabled and made to work for you.
          </h2>
          <p className="tech-enabled-subtitle">
            No matter your creative need, submitting and managing a project is effortless.
          </p>
        </div>

        <div className="features-grid">
          {/* Left Card - Green */}
          <div className="feature-card green-card">
            <div className="feature-icon">
              <Edit3 size={32} />
            </div>
            <h3 className="feature-title">From brief to review and sign off.</h3>
            <p className="feature-description">
              Welcome to Superspace. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.
            </p>
            <div className="feature-mockup">
              <div className="mockup-designs">
                <div className="design-item">
                  <div className="design-preview"></div>
                  <span>Final designs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card - Blue */}
          <div className="feature-card blue-card">
            <div className="feature-icon">
              <MessageSquare size={32} />
            </div>
            <h3 className="feature-title">Integrate with your favorite platforms.</h3>
            <p className="feature-description">
              Already using platforms like Asana/Jira/Slack? They integrate too.
            </p>
            <div className="feature-mockup">
              <div className="integration-preview">
                <div className="integration-item">
                  <div className="platform-logo superside">S</div>
                  <span>Superside</span>
                </div>
                <div className="integration-notification">
                  <div className="notification-content">
                    <strong>John Smith</strong> matched this asset as approved
                    <span className="notification-time">11:23 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Dark */}
          <div className="feature-card dark-card">
            <div className="feature-icon">
              <Smartphone size={32} />
            </div>
            <h3 className="feature-title">Organized and share all your brand assets</h3>
            <p className="feature-description">
              Stop searching for-store and organize everything on our platform.
            </p>
            <div className="feature-mockup">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <span>Product name</span>
                    </div>
                    <div className="asset-grid">
                      <div className="asset-item"></div>
                      <div className="asset-item"></div>
                      <div className="asset-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEnabledSection;