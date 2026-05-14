import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    course: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onRegister(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="glass-card">
      <h2>Student Registration</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Join the next generation of developers.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email"
            placeholder="john@example.com" 
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="••••••••" 
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}
        </div>

        <div className="input-group">
          <label>Course</label>
          <input 
            type="text" 
            name="course"
            placeholder="Full Stack Development" 
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <div className="error-text">{errors.course}</div>}
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input 
            type="text" 
            name="mobile"
            placeholder="9876543210" 
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <div className="error-text">{errors.mobile}</div>}
        </div>

        <button type="submit" className="btn-primary">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
