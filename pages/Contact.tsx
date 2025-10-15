import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Digiteller Creative'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 data-aos="fade-up">Get In Touch</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Let's discuss how we can help grow your brand
          </p>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h2>Let's Start a Conversation</h2>
              <p>
                Whether you have a project in mind, need consultation, or just want to say hello,
                we'd love to hear from you. Our team is ready to help you achieve your digital goals.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:7998596948">79985 96948</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:contact@digitellercreative.com">contact@digitellercreative.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Instagram className="contact-icon" />
                  <div>
                    <h3>Instagram</h3>
                    <a href="https://instagram.com/digitellercreative" target="_blank" rel="noopener noreferrer">
                      @digitellercreative
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h3>Location</h3>
                    <p>Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>

                {status === 'success' && (
                  <p className="status-message success">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="status-message error">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
