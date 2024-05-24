// Login.js
import React, { useState } from 'react';

function Login({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Retrieve user data from localStorage
      const userData = JSON.parse(localStorage.getItem('userData'));
      // Check if email and password match
      if (userData && userData.email === formData.email && userData.password === formData.password) {
        // Handle successful login
        console.log('Login successful!');
        // Update login status
        setLoggedIn(true);
        // Redirect to control panel page after login
        window.location.href = '/controlpanel';
      } else {
        // Handle login error
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
