import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_API_URL } from '@/lib/utils';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${BASE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess(data.user); // Call onLoginSuccess with user data
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login');
    }
  };
  if(!BASE_API_URL){
    return null;
}
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/images/logo.png" width={40} height={40} alt='JAYS' />
        </Link>
        <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">
          Login
        </button>
        
      </form>
    </div>
  );
};

export default Login;
