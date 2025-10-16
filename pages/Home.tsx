import { useEffect } from 'react';
import {
  Play,
  ArrowRight,
  Check,
  X,
  Users,
  Award,
  Clock
} from 'lucide-react';
import AOS from 'aos';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Video modal functionality
    const playBtn = document.getElementById('mainVideoPlay');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeVideoBtn');
    const videoPlayer = document.getElementById('modalVideoPlayer') as HTMLVideoElement;

    if (playBtn && modal && closeBtn && videoPlayer) {
      playBtn.addEventListener('click', () => {
        // Set video source (you can replace this with your actual video URL)
        videoPlayer.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        modal.classList.add('active');
        videoPlayer.play();
      });

      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
      });

      // Close modal when clicking outside the video
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          videoPlayer.pause();
          videoPlayer.currentTime = 0;
        }
      });

      // Close modal with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
          videoPlayer.pause();
          videoPlayer.currentTime = 0;
        }
      });
    }

    // Work section horizontal scroll with mouse drag
    const workScrollWrapper = document.querySelector('.work-scroll-wrapper') as HTMLElement;
    
    if (workScrollWrapper) {
      let isDragging = false;
      let startX: number;
      let scrollLeft: number;
      let velocity = 0;
      let momentumId: number;

      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        workScrollWrapper.style.cursor = 'grabbing';
        startX = e.pageX - workScrollWrapper.offsetLeft;
        scrollLeft = workScrollWrapper.scrollLeft;
        velocity = 0;
        
        if (momentumId) {
          cancelAnimationFrame(momentumId);
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const x = e.pageX - workScrollWrapper.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        workScrollWrapper.scrollLeft = scrollLeft - walk;
        
        // Calculate velocity for momentum scrolling
        velocity = scrollLeft - workScrollWrapper.scrollLeft;
      };

      const handleMouseUp = () => {
        if (!isDragging) return;
        
        isDragging = false;
        workScrollWrapper.style.cursor = 'grab';
        
        // Add momentum scrolling
        if (Math.abs(velocity) > 0.5) {
          const momentumScroll = () => {
            if (Math.abs(velocity) > 0.1) {
              workScrollWrapper.scrollLeft -= velocity;
              velocity *= 0.95; // Friction
              momentumId = requestAnimationFrame(momentumScroll);
            }
          };
          momentumScroll();
        }
      };

      // Touch events for mobile
      const handleTouchStart = (e: TouchEvent) => {
        isDragging = true;
        startX = e.touches[0].pageX - workScrollWrapper.offsetLeft;
        scrollLeft = workScrollWrapper.scrollLeft;
        velocity = 0;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        
        const x = e.touches[0].pageX - workScrollWrapper.offsetLeft;
        const walk = (x - startX) * 2;
        workScrollWrapper.scrollLeft = scrollLeft - walk;
        velocity = scrollLeft - workScrollWrapper.scrollLeft;
      };

      const handleTouchEnd = () => {
        isDragging = false;
        
        if (Math.abs(velocity) > 0.5) {
          const momentumScroll = () => {
            if (Math.abs(velocity) > 0.1) {
              workScrollWrapper.scrollLeft -= velocity;
              velocity *= 0.95;
              momentumId = requestAnimationFrame(momentumScroll);
            }
          };
          momentumScroll();
        }
      };

      // Mouse events
      workScrollWrapper.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      // Touch events
      workScrollWrapper.addEventListener('touchstart', handleTouchStart);
      workScrollWrapper.addEventListener('touchmove', handleTouchMove);
      workScrollWrapper.addEventListener('touchend', handleTouchEnd);

      // Cleanup function
      return () => {
        workScrollWrapper.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        workScrollWrapper.removeEventListener('touchstart', handleTouchStart);
        workScrollWrapper.removeEventListener('touchmove', handleTouchMove);
        workScrollWrapper.removeEventListener('touchend', handleTouchEnd);
        
        if (momentumId) {
          cancelAnimationFrame(momentumId);
        }
      };
    }
  }, []);

  const trustedBrands = [
    'Colgate Palmolive', 'CRITEO', 'Databricks', 'Figma', 'Grammarly',
    'Meta', 'Notion', 'Palo Alto Networks', 'Pernod Ricard', 'Reddit'
  ];

  const benefitsComparison = [
    {
      category: 'Superside',
      speed: true,
      flexibility: true,
      quality: true,
      scalability: true,
      cost: true
    },
    {
      category: 'In-house team',
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      cost: false
    },
    {
      category: 'Creative agencies',
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      cost: false
    },
    {
      category: 'Freelancers',
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      cost: true
    },
    {
      category: 'Self-service tools',
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      cost: false
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient-bg"></div>
          <div className="hero-blur-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-layout">
            <div className="hero-text-content">
              <h1 className="hero-main-title">
                Your creative team's <span className="hero-highlight">creative team</span><sup className="trademark">™</sup>
              </h1>
              <p className="hero-description">
                Scale your in-house creative team with top global talent powered by industry-leading AI workflows, delivering anything you can imagine fast and affordably.
              </p>
              <div className="hero-cta">
                <button className="hero-btn-primary">
                  Book a demo
                </button>
              </div>
            </div>
            <div className="hero-visual-showcase">
              <div className="projects-grid">
                <div className="project-card zapier-card">
                  <div className="project-image zapier-bg">
                    <div className="project-overlay">
                      <span className="project-label">Zapier</span>
                    </div>
                  </div>
                </div>
                <div className="project-card curriculum-card">
                  <div className="project-image curriculum-bg">
                    <div className="project-overlay">
                      <span className="project-label">Curriculum</span>
                    </div>
                  </div>
                </div>
                <div className="project-card vimeo-card">
                  <div className="project-image vimeo-bg">
                    <div className="project-overlay">
                      <span className="project-label">Vimeo</span>
                    </div>
                  </div>
                </div>
                <div className="project-card roland-card">
                  <div className="project-image roland-bg">
                    <div className="project-overlay">
                      <span className="project-label">Roland</span>
                    </div>
                  </div>
                </div>
                <div className="project-card pharmacy-card">
                  <div className="project-image pharmacy-bg">
                    <div className="project-overlay">
                      <span className="project-label">Pharmacy</span>
                    </div>
                  </div>
                </div>
                <div className="project-card kins-card">
                  <div className="project-image kins-bg">
                    <div className="project-overlay">
                      <span className="project-label">Kins</span>
                    </div>
                  </div>
                </div>
                <div className="project-card opa-card">
                  <div className="project-image opa-bg">
                    <div className="project-overlay">
                      <span className="project-label">OPA</span>
                    </div>
                  </div>
                </div>
                <div className="project-card reddit-card">
                  <div className="project-image reddit-bg">
                    <div className="project-overlay">
                      <span className="project-label">Reddit</span>
                    </div>
                  </div>
                </div>
                <div className="project-card antler-card">
                  <div className="project-image antler-bg">
                    <div className="project-overlay">
                      <span className="project-label">Antler</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content" data-aos="fade-up">
            <div className="video-text">
              <span className="section-label">A NEW ERA OF CREATIVE WORK</span>
              <h2 className="video-title">Help your</h2>
            </div>
            <div className="video-play-button">
              <button className="play-btn">
                <Play size={32} fill="currentColor" />
              </button>
              <span className="play-text">Play video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2 className="trust-title" data-aos="fade-up">
            Trusted by 500+ of the world's top brands
          </h2>
          <div className="logo-animation-container" data-aos="fade-up" data-aos-delay="200">
            <div className="logo-row row-1">
              {trustedBrands.map((brand, index) => (
                <div key={`row1-${index}`} className="brand-logo">
                  {brand}
                </div>
              ))}
              {trustedBrands.map((brand, index) => (
                <div key={`row1-duplicate-${index}`} className="brand-logo">
                  {brand}
                </div>
              ))}
            </div>
            <div className="logo-row row-2">
              {[...trustedBrands].reverse().map((brand, index) => (
                <div key={`row2-${index}`} className="brand-logo">
                  {brand}
                </div>
              ))}
              {[...trustedBrands].reverse().map((brand, index) => (
                <div key={`row2-duplicate-${index}`} className="brand-logo">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Fit Section */}
      <section className="perfect-fit-section">
        <div className="container">
          <div className="perfect-fit-header" data-aos="fade-up">
            <span className="section-label">OUR DIFFERENCE</span>
            <h2 className="perfect-fit-title">
              Superside is the <em>perfect fit</em> for fast moving brands
            </h2>
          </div>
          <div className="perfect-fit-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="perfect-fit-card">
              <div className="perfect-fit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="perfect-fit-content">
                <span className="perfect-fit-label">SCALABLE</span>
                <h3 className="perfect-fit-card-title">Boost your in-house creative</h3>
                <p className="perfect-fit-description">
                  We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead to the team.
                </p>
              </div>
            </div>
            <div className="perfect-fit-card">
              <div className="perfect-fit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V17C3 18.1046 3.89543 19 5 19H9V13H15V19H19C20.1046 19 21 18.1046 21 17V7L12 2L3 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13H15V19H9V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="perfect-fit-content">
                <span className="perfect-fit-label">FLEXIBLE</span>
                <h3 className="perfect-fit-card-title">Say yes to more projects</h3>
                <p className="perfect-fit-description">
                  Whether you need more bandwidth or different skills, Superside has whatever resources you need to get the job done.
                </p>
              </div>
            </div>
            <div className="perfect-fit-card">
              <div className="perfect-fit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,2 22,12 12,22 2,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="perfect-fit-content">
                <span className="perfect-fit-label">RESPONSIVE</span>
                <h3 className="perfect-fit-card-title">Don't sacrifice quality for speed</h3>
                <p className="perfect-fit-description">
                  Our global team of creatives delivers agency-level work in a fraction of the time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Team Support Section */}
      <section className="creative-team-section">
        <div className="container">
          <div className="creative-team-layout">
            <div className="creative-team-content" data-aos="fade-up">
              <span className="section-label">A NEW ERA OF CREATIVE WORK</span>
              <h2 className="creative-team-title">
                The support your creative team <em>has been asking for</em>
              </h2>
              <p className="creative-team-description">
                Superside is your dedicated, on-call creative team to expand your production capacity and extend your team's creative capabilities.
              </p>
              <p className="creative-team-subtitle">
                See us as an extension of your team, freeing you to focus on your most impactful and creative work.
              </p>
              <button className="cta-button-primary">
                Book a demo
              </button>
            </div>
            <div className="creative-team-media">
              <div className="video-grid-container">
                <div className="video-grid">
                  <div className="video-item item-1">
                    <div className="profile-image profile-1"></div>
                  </div>
                  <div className="video-item item-2">
                    <div className="profile-image profile-2"></div>
                  </div>
                  <div className="video-item item-3">
                    <div className="profile-image profile-3"></div>
                  </div>
                  <div className="video-item item-4">
                    <div className="profile-image profile-4"></div>
                  </div>
                  <div className="video-item item-5">
                    <div className="profile-image profile-5"></div>
                  </div>
                  <div className="video-item item-6">
                    <div className="profile-image profile-6"></div>
                  </div>
                  <div className="video-item item-7">
                    <div className="profile-image profile-7"></div>
                  </div>
                  <div className="video-item item-8">
                    <div className="profile-image profile-8"></div>
                  </div>
                </div>
                <div className="video-play-overlay">
                  <button className="main-play-btn" id="mainVideoPlay">
                    <Play size={48} fill="currentColor" />
                  </button>
                  <div className="video-modal" id="videoModal">
                    <div className="video-modal-content">
                      <button className="close-video-btn" id="closeVideoBtn">
                        <X size={24} />
                      </button>
                      <video className="modal-video" controls id="modalVideoPlayer">
                        <source src="" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made to Flex Section */}
      <section className="made-to-flex-section">
        <div className="container">
          <div className="made-to-flex-content" data-aos="fade-up">
            <span className="section-label">MADE TO FLEX</span>
            <h2 className="made-to-flex-title">
              Supertalented. Superfast. Super responsive. Work with a global team that's purposefully made to keep up with you.
            </h2>
            <div className="flex-cards-grid">
              <div className="flex-card">
                <div className="flex-card-image talent-bg">
                  <div className="card-text">
                    <h3>Top global creative talent</h3>
                  </div>
                </div>
              </div>
              <div className="flex-card">
                <div className="flex-card-image laptop-bg">
                  <div className="card-text">
                    <h3>Ultra-fast turnaround times</h3>
                    <p>With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours.</p>
                  </div>
                </div>
              </div>
              <div className="flex-card">
                <div className="flex-card-image shopify-bg">
                  <div className="card-text">
                    <h3>Flexible subscription model</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-prop-section">
        <div className="container">
          <div className="value-prop-content" data-aos="fade-up">
            <span className="section-label">MADE TO FLEX</span>
            <h2 className="value-prop-title">
              Supertalented. Superfast. Super responsive. Work with a global team that's purposefully made to keep up with you.
            </h2>
            <div className="value-prop-grid">
              <div className="value-card">
                <div className="value-icon">
                  <Users size={32} />
                </div>
                <h3>Top global creative talent</h3>
                <p>We're not restricted by borders. Top-tier talent, powered by AI means consistently high-quality work for your brand.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Clock size={32} />
                </div>
                <h3>With dedicated project managers</h3>
                <p>With dedicated project managers, collaborative online tools and the expert use of AI, projects can be completed in as little as 12 hours.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Award size={32} />
                </div>
                <h3>Access a broad range of</h3>
                <p>Access a broad range of talent as and when you need it and work more efficiently, so you never waste a dollar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="success-section">
        <div className="container">
          <span className="section-label">SUCCESS IN NUMBERS</span>
          <h2 className="success-title">The best return on your investment</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">500+</div>
              <p>Startup, enterprises and mid-market companies trust Superside to deliver pixel-perfect creative, at scale.</p>
            </div>
            <div className="metric-card">
              <div className="metric-number">70k+</div>
              <p>Projects delivered to this day and counting.</p>
            </div>
            <div className="metric-card">
              <div className="metric-number">94%</div>
              <p>Brands see a three-year ROI of 94% on their Superside subscription.</p>
              <a href="#" className="metric-link">Read more in the Forrester TEI report ↗</a>
            </div>
            <div className="metric-card">
              <div className="metric-number">6 months</div>
              <p>Brands see a 6-month payback period on their Superside subscription.</p>
              <a href="#" className="metric-link">Read more in the Forrester TEI report ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="comparison-section">
        <div className="container">
          <div className="comparison-table" data-aos="fade-up">
            <div className="comparison-header">
              <div></div>
              <div>Speed</div>
              <div>Flexibility</div>
              <div>Quality</div>
              <div>Scalability</div>
              <div>Cost-effectiveness</div>
            </div>
            {benefitsComparison.map((item, index) => (
              <div key={index} className={`comparison-row ${index === 0 ? 'featured' : ''}`}>
                <div className="comparison-category">{item.category}</div>
                <div className="comparison-item">
                  {item.speed ? <Check className="check-icon" /> : <X className="x-icon" />}
                </div>
                <div className="comparison-item">
                  {item.flexibility ? <Check className="check-icon" /> : <X className="x-icon" />}
                </div>
                <div className="comparison-item">
                  {item.quality ? <Check className="check-icon" /> : <X className="x-icon" />}
                </div>
                <div className="comparison-item">
                  {item.scalability ? <Check className="check-icon" /> : <X className="x-icon" />}
                </div>
                <div className="comparison-item">
                  {item.cost ? <Check className="check-icon" /> : <X className="x-icon" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <div className="work-header">
            <span className="section-label">EASY & HASSLE-FREE</span>
            <h2 className="work-title">Every type of creative work you'll ever need, and more</h2>
          </div>
          <div className="work-scroll-container">
            <div className="work-scroll-wrapper">
              <div className="work-card website-design">
                <div className="work-card-overlay"></div>
                <div className="work-card-content">
                  <h3>Website Design</h3>
                </div>
              </div>
              <div className="work-card social-media">
                <div className="work-card-overlay"></div>
                <div className="work-card-content">
                  <h3>Social Media Creative</h3>
                </div>
              </div>
              <div className="work-card email-design">
                <div className="work-card-overlay"></div>
                <div className="work-card-content">
                  <h3>Email Design</h3>
                </div>
              </div>
              <div className="work-card motion-design">
                <div className="work-card-overlay"></div>
                <div className="work-card-content">
                  <h3>Motion Design</h3>
                </div>
              </div>
              <div className="work-card video-production">
                <div className="work-card-overlay"></div>
                <div className="work-card-content">
                  <h3>Video Production</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Tech enabled and made to work for you.</h2>
            <button className="cta-button-secondary">
              Book a demo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


