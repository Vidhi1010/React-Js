import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sign up logic here
    console.log('Signing up:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen " style={{ backgroundColor:'#f0f0f0' }}>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="remember" className="text-gray-700">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Already Have An Account?</span>{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;