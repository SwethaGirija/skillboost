import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', formData);
      console.log(response.data); // Handle the response from the server
      // Reset form fields
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      if (response.data) {
        alert('Login successful!');
        setFormData('');
        
        // Redirect to search page
        window.location.href = '/Position';
        // Clear username and password fields
        
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button" onChange={ handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
