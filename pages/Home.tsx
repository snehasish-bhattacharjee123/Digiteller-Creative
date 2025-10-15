import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Target,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle
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
  }, []);

  const services = [
    { title: 'Social Media Marketing', icon: '📱' },
    { title: 'Video Production & Photography', icon: '🎥' },
    { title: 'SEO', icon: '🔍' },
    { title: 'Logo Design & Brand Setup', icon: '🎨' },
    { title: 'Digital Strategy & Consulting', icon: '💡' },
    { title: 'Social Media Management', icon: '📊' },
    { title: 'Website Design & Development', icon: '💻' },
    { title: '2D & 3D Animation', icon: '✨' }
  ];

  const whyChooseUs = [
    { icon: Sparkles, title: 'Creative Experts', desc: 'Innovative solutions tailored to your brand' },
    { icon: TrendingUp, title: 'ROI-Focused', desc: 'Data-driven strategies that deliver results' },
    { icon: Target, title: 'End-to-End Solutions', desc: 'Complete digital marketing ecosystem' },
    { icon: Award, title: 'Proven Track Record', desc: 'Trusted by brands across industries' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
        </div>

        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Your Growth Partner in the <span className="gradient-text">Digital World</span>
            </h1>
            <p className="hero-subtitle">
              Empowering brands through digital creativity and smart marketing
            </p>
            <a href="#contact" className="cta-button">
              Let's Grow Together
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="about section-padding" data-aos="fade-up">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Us</h2>
              <p className="section-description">
                At <strong>Digiteller Creative</strong>, we believe every brand has a unique story to tell.
                Our mission is to help you craft and share that story with the world through innovative
                digital marketing strategies, stunning creative content, and measurable results.
              </p>
              <p className="section-description">
                We're not just another agency – we're your growth partners, committed to understanding
                your vision and turning it into digital success.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <Users size={32} />
                  <h3>50+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <Award size={32} />
                  <h3>100+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat">
                  <TrendingUp size={32} />
                  <h3>95%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-padding" id="services">
        <div className="container">
          <h2 className="section-title text-center" data-aos="fade-up">Our Services</h2>
          <p className="section-description text-center" data-aos="fade-up" data-aos-delay="100">
            Comprehensive digital solutions to elevate your brand
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose section-padding" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <p className="section-description text-center">
            What sets us apart in the digital landscape
          </p>

          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="why-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <item.icon size={40} className="why-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Start Building Your Brand Today</h2>
            <p>Ready to take your digital presence to the next level?</p>
            <Link to="/contact" className="cta-button-secondary">
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
