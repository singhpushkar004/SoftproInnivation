import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import slider1 from "../assets/images/arduni.jpg";
import slider2 from "../assets/images/raspberry.jpg"
import slider3 from "../assets/images/component.jpg"
import axios from 'axios'
const Home = () => {
    const [categories , setCategories] = useState([]);
    const [featuredProducts,setfeaturedProducts] = useState([]);
    const handleFetch = async()=>{
        try{
        const res = await axios.get('http://localhost:5000/api/category/home')
            setCategories(res.data.data);
        const res2 = await axios.get('http://localhost:5000/api/product/featured');
          setfeaturedProducts(res2.data.data)
        } 
        catch(er){
          console.log(er);
        }     
    }

    useEffect(() => {
  const fetchData = async () => {
    await handleFetch();
  };

  fetchData();
}, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      image: slider1,
      title: 'Arduino Microcontrollers',
      subtitle: 'Build amazing projects with Arduino',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      image: slider2,
      title: 'Raspberry Pi',
      subtitle: 'Powerful single-board computers',
      buttonText: 'Explore'
    },
    {
      id: 3,
      image:slider3,
      title: 'Electronic Components',
      subtitle: 'Everything you need for your projects',
      buttonText: 'Browse All'
    }
  ];

  // const categories = [
  //   { id: 1, name: 'Arduino Boards', icon: '🔧', color: '#00d4ff' },
  //   { id: 2, name: 'Raspberry Pi', icon: '🍓', color: '#ff6b6b' },
  //   { id: 3, name: 'Sensors', icon: '📡', color: '#4ecdc4' },
  //   { id: 4, name: 'Development Kits', icon: '📦', color: '#95e1d3' },
  //   { id: 5, name: 'Displays', icon: '📺', color: '#ffd89b' },
  // ];

  // const featuredProducts = [
  //   {
  //     id: 1,
  //     name: 'Arduino Uno R3',
  //     price: '$24.99',
  //     image: 'https://via.placeholder.com/250x250/1a1f3a/00d4ff?text=Arduino+Uno',
  //     rating: 4.8,
  //     reviews: 245
  //   },
  //   {
  //     id: 2,
  //     name: 'Raspberry Pi 4B',
  //     price: '$75.99',
  //     image: 'https://via.placeholder.com/250x250/0f2847/ff6b6b?text=Raspberry+Pi',
  //     rating: 4.9,
  //     reviews: 312
  //   },
  //   {
  //     id: 3,
  //     name: 'DHT22 Sensor',
  //     price: '$9.99',
  //     image: 'https://via.placeholder.com/250x250/162d5b/4ecdc4?text=DHT22',
  //     rating: 4.7,
  //     reviews: 178
  //   },
  //   {
  //     id: 4,
  //     name: 'OLED Display 128x64',
  //     price: '$19.99',
  //     image: 'https://via.placeholder.com/250x250/1a2d4a/ffd89b?text=OLED',
  //     rating: 4.6,
  //     reviews: 156
  //   },
  //   {
  //     id: 5,
  //     name: 'Jumper Wire Set',
  //     price: '$5.99',
  //     image: 'https://via.placeholder.com/250x250/0d1b2a/95e1d3?text=Jumpers',
  //     rating: 4.5,
  //     reviews: 289
  //   },
  //   {
  //     id: 6,
  //     name: 'Servo Motor SG90',
  //     price: '$3.49',
  //     image: 'https://via.placeholder.com/250x250/1a1f3a/ffd3a5?text=Servo',
  //     rating: 4.7,
  //     reviews: 201
  //   }
  // ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Electronics Hobbyist',
      message: 'Amazing quality products and super fast delivery. Highly recommended!',
      avatar: 'https://via.placeholder.com/80x80/00d4ff/ffffff?text=JD'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Student Developer',
      message: 'Best prices I\'ve found online. Great customer support too!',
      avatar: 'https://via.placeholder.com/80x80/ff6b6b/ffffff?text=SS'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'IoT Engineer',
      message: 'Excellent selection and authentic products. Will buy again!',
      avatar: 'https://via.placeholder.com/80x80/4ecdc4/ffffff?text=MJ'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const id = localStorage.getItem('id')
  
  const role = localStorage.getItem('role')
  console.log(id,role);
  
  return (
    <div className="home-container">
      {/* Header */}
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
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="#cart">
                  <span className="cart-icon">🛒</span> Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider-section">
        <div className="slider-container">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slider-overlay"></div>
              <div className="slider-content">
                <h1 className="slider-title">{slide.title}</h1>
                <p className="slider-subtitle">{slide.subtitle}</p>
                <button className="btn btn-slider">
                  {slide.buttonText}
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
          
          <button className="slider-control prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-control next" onClick={nextSlide}>
            ❯
          </button>

          <div className="slider-dots">
            {sliderData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Categories</h2>
            <p>Explore our wide range of electronics components</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category._id} className="category-card text-light" style={{ borderTop: `4px solid #ffd89b` }}>
                <div className="category-icon">
                <img src={`http://localhost:5000/uploads/${category.picture
}`} alt="" className='img-fluid' style={{"height":"100px","borderRadius":"50%"}}/>
                </div>
                <h3>{category.category}</h3>
                <p>Shop now</p>
                <div className="category-hover-line" style={{ backgroundColor: "#ffd89b" }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Bestselling items from our store</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
             <Link to={`/product-details/${product._id}`}>
                 <div key={product._id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={`http://localhost:5000/uploads/${product.images}`} alt={product.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="btn-add-cart">Add to Cart</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className='text-light'>{product.name}</h3>
                  <div className="product-rating">
                    {'⭐'.repeat(Math.floor(3))} <span>{product.rating}</span>
                    <span className="reviews">({product.reviews} reviews)</span>
                  </div>
                  <p className="product-price">Rs-{(product.discount/100)*product.actualPrice}/-</p>
                </div>
              </div>
             </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Explore thousands of electronic components and start your next project today</p>
            <Link to="/products" className="btn btn-cta">Browse All Products</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Customer Testimonials</h2>
            <p>What our customers say about us</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-message">"{testimonial.message}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
              <p>Email: info@softproinnovation.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
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

export default Home;