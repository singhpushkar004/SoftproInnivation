import React from 'react';
import { Link } from 'react-router-dom';
import './page-styles.css';

const About = () => {
  const features = [
    {
      id: 1,
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery to your doorstep'
    },
    {
      id: 2,
      icon: '💯',
      title: 'Quality Guaranteed',
      description: 'Authentic products from trusted manufacturers'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Safe and encrypted transaction processing'
    },
    {
      id: 4,
      icon: '👥',
      title: 'Expert Support',
      description: '24/7 customer support and technical assistance'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Raj Kumar',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=Raj'
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Product Manager',
      image: 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=Priya'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Technical Lead',
      image: 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=Amit'
    },
    {
      id: 4,
      name: 'Neha Sharma',
      role: 'Customer Support Manager',
      image: 'https://via.placeholder.com/200x200/00d4ff/ffffff?text=Neha'
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
      <section className="hero-section about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About SoftproInnovation</h1>
            <p className="hero-subtitle">Building the future of electronics one component at a time</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>
                  SoftproInnovation is a leading provider of high-quality electronics components and development kits. 
                  Founded in 2015, we've been committed to delivering premium products and exceptional customer service 
                  to makers, students, and professionals worldwide.
                </p>
                <p>
                  Our mission is to make electronics and IoT development accessible to everyone by providing a curated 
                  selection of authentic, reliable components at competitive prices. We believe in innovation, quality, 
                  and customer satisfaction.
                </p>
                <p>
                  With a wide range of products including Arduino boards, Raspberry Pi, sensors, and development kits, 
                  we serve thousands of customers in building amazing projects that shape the future.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="https://via.placeholder.com/500x400/1a2332/00d4ff?text=Innovation+Center"
                  alt="Innovation Center"
                  className="img-fluid rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We stand out from the crowd with our commitment to excellence</p>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>5,000+</h3>
              <p>Products Available</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Brands Partnership</p>
            </div>
            <div className="stat-card">
              <h3>99%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Meet the passionate people behind SoftproInnovation</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Explore our wide range of electronics components and get everything you need for your next innovation</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-cta-primary">Shop Now</Link>
            <Link to="/contact" className="btn btn-cta-secondary">Get in Touch</Link>
          </div>
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

export default About;