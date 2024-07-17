import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Signing up:', data);
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        photo
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter First Name"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                  message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
                }
              })}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
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
