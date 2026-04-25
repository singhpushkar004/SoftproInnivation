import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './page-styles.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const allProducts = [
    { id: 1, name: 'Arduino Uno R3', price: 24.99, category: 'boards', rating: 4.8, reviews: 245, image: 'https://via.placeholder.com/250x250/1a1f3a/00d4ff?text=Arduino+Uno' },
    { id: 2, name: 'Arduino Mega 2560', price: 39.99, category: 'boards', rating: 4.7, reviews: 189, image: 'https://via.placeholder.com/250x250/1a1f3a/00d4ff?text=Arduino+Mega' },
    { id: 3, name: 'Arduino Nano', price: 19.99, category: 'boards', rating: 4.6, reviews: 156, image: 'https://via.placeholder.com/250x250/1a1f3a/00d4ff?text=Arduino+Nano' },
    { id: 4, name: 'Raspberry Pi 4B 4GB', price: 55.00, category: 'raspberry', rating: 4.9, reviews: 312, image: 'https://via.placeholder.com/250x250/0f2847/ff6b6b?text=Pi+4B+4GB' },
    { id: 5, name: 'Raspberry Pi 4B 8GB', price: 75.00, category: 'raspberry', rating: 4.9, reviews: 298, image: 'https://via.placeholder.com/250x250/0f2847/ff6b6b?text=Pi+4B+8GB' },
    { id: 6, name: 'Raspberry Pi Zero W', price: 15.00, category: 'raspberry', rating: 4.5, reviews: 134, image: 'https://via.placeholder.com/250x250/0f2847/ff6b6b?text=Pi+Zero' },
    { id: 7, name: 'DHT22 Temperature Sensor', price: 9.99, category: 'sensors', rating: 4.7, reviews: 178, image: 'https://via.placeholder.com/250x250/162d5b/4ecdc4?text=DHT22' },
    { id: 8, name: 'HC-SR04 Ultrasonic Sensor', price: 5.49, category: 'sensors', rating: 4.6, reviews: 142, image: 'https://via.placeholder.com/250x250/162d5b/4ecdc4?text=HC-SR04' },
    { id: 9, name: 'PIR Motion Sensor', price: 3.99, category: 'sensors', rating: 4.5, reviews: 98, image: 'https://via.placeholder.com/250x250/162d5b/4ecdc4?text=PIR+Motion' },
    { id: 10, name: 'OLED Display 128x64', price: 19.99, category: 'displays', rating: 4.6, reviews: 156, image: 'https://via.placeholder.com/250x250/1a2d4a/ffd89b?text=OLED+128x64' },
    { id: 11, name: 'LCD 16x2 Display', price: 8.99, category: 'displays', rating: 4.4, reviews: 89, image: 'https://via.placeholder.com/250x250/1a2d4a/ffd89b?text=LCD+16x2' },
    { id: 12, name: '7-Segment Display', price: 2.99, category: 'displays', rating: 4.3, reviews: 67, image: 'https://via.placeholder.com/250x250/1a2d4a/ffd89b?text=7-Segment' },
    { id: 13, name: 'Jumper Wire Set 40P', price: 5.99, category: 'accessories', rating: 4.5, reviews: 289, image: 'https://via.placeholder.com/250x250/0d1b2a/95e1d3?text=Jumpers' },
    { id: 14, name: 'Breadboard 830 Points', price: 4.99, category: 'accessories', rating: 4.4, reviews: 178, image: 'https://via.placeholder.com/250x250/0d1b2a/95e1d3?text=Breadboard' },
    { id: 15, name: 'Servo Motor SG90', price: 3.49, category: 'accessories', rating: 4.7, reviews: 201, image: 'https://via.placeholder.com/250x250/1a1f3a/ffd3a5?text=Servo' },
    { id: 16, name: 'DC Motor 3-6V', price: 2.99, category: 'accessories', rating: 4.6, reviews: 145, image: 'https://via.placeholder.com/250x250/1a1f3a/ffd3a5?text=DC+Motor' },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'boards', name: 'Microcontroller Boards' },
    { id: 'raspberry', name: 'Raspberry Pi' },
    { id: 'sensors', name: 'Sensors' },
    { id: 'displays', name: 'Displays' },
    { id: 'accessories', name: 'Accessories' }
  ];

  let filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

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
      <section className="hero-section products-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Products</h1>
            <p className="hero-subtitle">Explore our complete range of electronics components</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="filters-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <h3 className="mt-4">Sort By</h3>
                <select
                  className="form-select sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9">
              <div className="products-count">
                Showing {filteredProducts.length} products
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid-page">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card-page">
                      <div className="product-image-wrapper">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-overlay">
                          <button className="btn-add-cart">Add to Cart</button>
                        </div>
                      </div>
                      <div className="product-info-page">
                        <h3>{product.name}</h3>
                        <div className="product-rating-page">
                          {'⭐'.repeat(Math.floor(product.rating))} <span>{product.rating}</span>
                          <span className="reviews">({product.reviews})</span>
                        </div>
                        <p className="product-price-page">${product.price}</p>
                        <button className="btn-quick-view">Quick View</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>No products found. Try adjusting your filters or search term.</p>
                </div>
              )}
            </div>
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

export default Products;