import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/signup', formData);

      // Handle successful signup (e.g., redirect or update user context)
      console.log('Signup successful', response.data);
    } catch (error) {
      // Handle signup error (e.g., display error message)
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <main className="w-full max-w-full p-64 h-screen  max-h-fit space-y-3  bg-[#08243a]">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="confirmPassword" className="block dark:text-gray-400">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="block w-full p-3 text-center rounded-sm bg-[#f98538] text-[#000000]">
          Sign up
        </button>
      </form>
      {/* ... (social login buttons and other UI elements) */}
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Already have an account? <Link to="/login" className="underline dark:text-gray-100">Login</Link>
      </p>
    </main>
  );
};

export default Signup;
