import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './page-styles.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate sending email
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  }

  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Address',
      content: '123 Tech Street, Innovation City, IC 12345'
    },
    {
      id: 2,
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      id: 3,
      icon: '📧',
      title: 'Email',
      content: 'info@softproinnovation.com'
    },
    {
      id: 4,
      icon: '⏰',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM IST'
    }
  ];

  return (
    <div className="page-container">
      {/* Header Navigation */}
      <header className="navbar navbar-expand-lg navbar-dark header-custom">
        <div className="container-fluid">
          <Link className="navbar-brand brand-logo" to="/">
            <span className="brand-icon">⚙️</span>
            <span className="brand-text">SoftproInnovation</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">We'd love to hear from you. Send us a message!</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info) => (
              <div key={info.id} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Send us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>

                {submitted && (
                  <div className="alert alert-success alert-contact" role="alert">
                    ✓ Thank you! Your message has been sent successfully. We'll be in touch soon!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-contact">
                    <div className="form-group-contact col-md-6">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className={`form-control-contact ${errors.name ? 'is-invalid' : ''}`}
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <small className="error-text">{errors.name}</small>}
                    </div>
                    <div className="form-group-contact col-md-6">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className={`form-control-contact ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <small className="error-text">{errors.email}</small>}
                    </div>
                  </div>

                  <div className="form-row-contact">
                    <div className="form-group-contact col-md-6">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className={`form-control-contact ${errors.phone ? 'is-invalid' : ''}`}
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <small className="error-text">{errors.phone}</small>}
                    </div>
                    <div className="form-group-contact col-md-6">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        className={`form-control-contact ${errors.subject ? 'is-invalid' : ''}`}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Question">Product Question</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                      {errors.subject && <small className="error-text">{errors.subject}</small>}
                    </div>
                  </div>

                  <div className="form-group-contact">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className={`form-control-contact ${errors.message ? 'is-invalid' : ''}`}
                      name="message"
                      rows="6"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <small className="error-text">{errors.message}</small>}
                  </div>

                  <button
                    type="submit"
                    className={`btn-submit-contact ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.1950246886843!2d80.94618931451422!3d26.84657649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe6de6161111%3A0x1234567890abcdef!2s123%20Tech%20Street%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>SoftproInnovation</h4>
              <p>Your trusted source for quality electronics components and DIY kits.</p>
              <div className="social-links">
                <a href="#facebook" className="social-link facebook">f</a>
                <a href="#twitter" className="social-link twitter">𝕏</a>
                <a href="#instagram" className="social-link instagram">📷</a>
                <a href="#linkedin" className="social-link linkedin">in</a>
              </div>
            </div>
            <div className="footer-column">
              <h5>Quick Links</h5>
              <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Customer Service</h5>
              <ul>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#warranty">Warranty</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Contact Info</h5>
              <p>📧 Email: info@softproinnovation.com</p>
              <p>📞 Phone: +1 (555) 123-4567</p>
              <p>📍 Address: 123 Tech Street, Innovation City, IC 12345</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SoftproInnovation. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;