import './OnboardingSection.css';

const OnboardingSection = () => {
  return (
    <section className="onboarding-section">
      <div className="container">
        <div className="onboarding-layout">
          <div className="onboarding-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Creative professional working on design projects with digital tools and creative software"
              className="onboarding-hero-image"
              loading="lazy"
            />
          </div>
          <div className="onboarding-content">
            <p className="section-tagline">ONBOARDING</p>
            <h2 className="onboarding-title">
              Scale your creative team<br />
              with Superside in as<br />
              little as 1 week
            </h2>
            <p className="onboarding-description">
              Our agile onboarding process quickly immerses us in your brand, goals, and guidelines, allowing us to deliver impactful creative almost immediately.
            </p>
            <p className="onboarding-timeline">
              The average time from contract start to submitting the first project with us is 7.6 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;