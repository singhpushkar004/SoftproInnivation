import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './auth-styles.css';

const UserLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  }

  const validateForm = () => {
    const newErrors = {};
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 4) {
      newErrors.password = 'Password must be at least 6 characters';
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
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', data);
      console.log(res);
      if (res.data.msg == "User Login Successfully") {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("role", res.data.role)
        localStorage.setItem("id", res.data.id)
        navigate('/user/dashboard')
      }
      else {
        setErrors({ general: "Invalid Credentials" })
      }
    }
    catch (er) {
      console.error(er);
      setErrors({ general: "Login failed. Please try again." });
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      
      <div className="container auth-content">
        <div className="row min-vh-100 align-items-center justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Login to your SoftproInnovation account</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                {errors.general && (
                  <div className="alert alert-danger alert-custom" role="alert">
                    ⚠️ {errors.general}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉️</span>
                    <input
                      type="email"
                      id="email"
                      className={`form-control input-custom ${errors.email ? 'is-invalid' : ''}`}
                      name='email'
                      placeholder='Enter your email'
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <small className="error-text">{errors.email}</small>}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className={`form-control input-custom ${errors.password ? 'is-invalid' : ''}`}
                      name="password"
                      placeholder='Enter your password'
                      value={data.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {errors.password && <small className="error-text">{errors.password}</small>}
                </div>

                <div className="form-remember">
                  <label>
                    <input type="checkbox" className="form-check-input" />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" className="forgot-link">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className={`btn btn-login ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Logging in...
                    </>
                  ) : (
                    <>Login Now</>
                  )}
                </button>
              </form>

              <div className="auth-divider">
                <span>Don't have an account?</span>
              </div>

              <Link to="/register" className="btn btn-register">
                Create Account
              </Link>

              <p className="auth-footer">
                <Link to="/" className="back-link">← Back to Home</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin