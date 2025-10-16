import './WorkWithBestSection.css';

const WorkWithBestSection = () => {
  return (
    <section className="work-with-best-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <p className="section-tagline">WORK WITH THE BEST</p>
            <h2 className="main-heading">
              World-class talent with<br />
              no borders
            </h2>
            <p className="description">
              Work with the top 1% of global creative talent – elite designers, project managers, animators, copywriters, AI technologists and more, recruited from the best brands and agencies.
            </p>
            <p className="additional-info">
              Plus, a dedicated project manager to ensure your briefs stay on track from start to finish.
            </p>
            <button className="cta-button">
              Book a demo
            </button>
          </div>
          <div className="image-content">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Creative professional collaborating on design projects in modern workspace with team members"
              className="hero-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithBestSection;