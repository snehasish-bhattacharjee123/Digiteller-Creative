import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      path: '/services',
      label: 'Services',
      megaMenu: {
        title: 'Our Services',
        categories: [
          {
            title: 'Design Services',
            items: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Packaging Design']
          },
          {
            title: 'Digital Services',
            items: ['Web Development', 'App Design', 'E-commerce', 'Digital Marketing']
          },
          {
            title: 'Content Services',
            items: ['Copywriting', 'Video Production', 'Photography', 'Social Media']
          }
        ]
      }
    },
    {
      path: '/portfolio',
      label: 'Our work',
      megaMenu: {
        title: 'Featured Work',
        categories: [
          {
            title: 'Recent Projects',
            items: ['E-commerce Sites', 'Mobile Apps', 'Brand Campaigns', 'Web Platforms']
          },
          {
            title: 'Industries',
            items: ['Technology', 'Healthcare', 'Finance', 'Retail']
          },
          {
            title: 'Case Studies',
            items: ['Startup Growth', 'Enterprise Solutions', 'B2B Platforms', 'Consumer Apps']
          }
        ]
      }
    },
    {
      path: '/about',
      label: 'Why us',
      megaMenu: {
        title: 'Why Choose Us',
        categories: [
          {
            title: 'Our Process',
            items: ['Discovery', 'Strategy', 'Design', 'Development', 'Launch']
          },
          {
            title: 'Our Team',
            items: ['Designers', 'Developers', 'Strategists', 'Project Managers']
          },
          {
            title: 'Our Values',
            items: ['Quality', 'Innovation', 'Collaboration', 'Results']
          }
        ]
      }
    },
    {
      path: '/resources',
      label: 'Resources',
      megaMenu: {
        title: 'Helpful Resources',
        categories: [
          {
            title: 'Learning Center',
            items: ['Design Guides', 'Tutorials', 'Best Practices', 'Industry Insights']
          },
          {
            title: 'Tools & Templates',
            items: ['Design Templates', 'Checklists', 'Calculators', 'Free Resources']
          },
          {
            title: 'Support',
            items: ['Documentation', 'FAQ', 'Contact Support', 'Community']
          }
        ]
      }
    },
    { path: '/pricing', label: 'Pricing' }
  ];

  const handleMouseEnter = (label: string) => {
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span>Superside</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="nav-item"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.megaMenu && <ChevronDown size={16} className="chevron" />}
                </Link>
                {link.megaMenu && activeMegaMenu === link.label && (
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                      <h3 className="mega-menu-title">{link.megaMenu.title}</h3>
                      <div className="mega-menu-categories">
                        {link.megaMenu.categories.map((category, index) => (
                          <div key={index} className="mega-menu-category">
                            <h4 className="category-title">{category.title}</h4>
                            <ul className="category-items">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link to="#" className="category-item-link">
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
