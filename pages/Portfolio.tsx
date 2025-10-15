import { useEffect, useState } from 'react';
import AOS from 'aos';
import { X } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Brand Refresh Campaign',
      category: 'Social Media Marketing',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete social media makeover for a lifestyle brand, resulting in 300% engagement increase.',
      client: 'Lifestyle Co.',
      results: ['300% increase in engagement', '50k new followers', '2M+ impressions']
    },
    {
      id: 2,
      title: 'Product Launch Video',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-energy promotional video for tech startup product launch.',
      client: 'TechStart Inc.',
      results: ['1M+ views', '15% conversion rate', 'Featured in tech blogs']
    },
    {
      id: 3,
      title: 'E-commerce SEO Success',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete SEO overhaul for online store, boosting organic traffic dramatically.',
      client: 'ShopSmart',
      results: ['250% organic traffic growth', 'Page 1 rankings for 50+ keywords', '40% revenue increase']
    },
    {
      id: 4,
      title: 'Modern Brand Identity',
      category: 'Logo & Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity system for emerging coffee chain.',
      client: 'BrewCraft Coffee',
      results: ['Memorable brand identity', 'Consistent across all touchpoints', 'Positive customer feedback']
    },
    {
      id: 5,
      title: '3D Product Visualization',
      category: '3D Animation',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Photorealistic 3D renders for furniture e-commerce platform.',
      client: 'HomeLux Furniture',
      results: ['30% increase in conversions', 'Reduced return rates', 'Enhanced customer experience']
    },
    {
      id: 6,
      title: 'Website Redesign',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern, responsive website for professional services firm.',
      client: 'ProConsult',
      results: ['50% faster load times', 'Mobile-first design', '60% increase in leads']
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1 data-aos="fade-up">Our Portfolio</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Showcasing our best work and the results we've delivered for our clients
          </p>
        </div>
      </section>

      <section className="portfolio-content section-padding">
        <div className="container">
          <div className="portfolio-filters" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} />

            <div className="modal-details">
              <span className="modal-category">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p className="modal-client">Client: {selectedProject.client}</p>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-results">
                <h3>Results:</h3>
                <ul>
                  {selectedProject.results.map((result: string, idx: number) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
