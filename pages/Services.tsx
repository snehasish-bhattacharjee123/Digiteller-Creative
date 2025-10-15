import { useEffect } from 'react';
import AOS from 'aos';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Strategic campaigns across all major platforms to engage your audience and build brand awareness.',
      features: ['Content Strategy', 'Campaign Management', 'Analytics & Reporting', 'Paid Advertising']
    },
    {
      icon: '🎥',
      title: 'Video Production & Photography',
      description: 'Professional visual content that captures your brand story and connects with your audience.',
      features: ['Commercial Photography', 'Product Shoots', 'Video Editing', 'Motion Graphics']
    },
    {
      icon: '🔍',
      title: 'SEO (Search Engine Optimization)',
      description: 'Boost your online visibility and drive organic traffic with data-driven SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: '🎨',
      title: 'Logo Design & Brand Setup',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System']
    },
    {
      icon: '💡',
      title: 'Digital Strategy & Consulting',
      description: 'Expert guidance to navigate the digital landscape and achieve your business goals.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Strategy', 'Performance Audit']
    },
    {
      icon: '📊',
      title: 'Social Media Management',
      description: 'End-to-end management of your social presence with consistent, engaging content.',
      features: ['Content Calendar', 'Community Management', 'Response Handling', 'Growth Tactics']
    },
    {
      icon: '💻',
      title: 'Website Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['Custom Design', 'Mobile Responsive', 'E-commerce', 'CMS Integration']
    },
    {
      icon: '✨',
      title: '2D & 3D Animation',
      description: 'Eye-catching animations that bring your ideas to life and captivate audiences.',
      features: ['Explainer Videos', '3D Product Renders', 'Character Animation', 'Motion Design']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 data-aos="fade-up">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Comprehensive digital solutions tailored to your brand's unique needs
          </p>
        </div>
      </section>

      <section className="services-detail section-padding">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-detail-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-detail-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
