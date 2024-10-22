"use client"
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const userData ={
    email,
    password
  }
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
  localStorage.setItem("user", JSON.stringify(userData))
  };
    return (
      <div className='flex justify-center items-center w-full h-full mt-24'>
      <form onSubmit={handleSubmit} className="w-[500px] mx-auto">
        <h1 className='text-center py-3 font-bold text-3xl'>Create Account</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 mt-4 w-full"
        >
          Register
        </button>
        <div className='py-3'>
          <p>Do not have an account ? <Link href="/login">login</Link></p>
        </div>
      </form>
      </div>
    )
  }
  
  export default Register