"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // After successful sign-up, route to the success page
    router.push('/signup-success');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="flex items-center gap-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded text-black"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label className="flex items-center gap-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded text-black"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label className="flex items-center gap-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded text-black"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <label className="flex items-center gap-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 rounded text-black"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        {error && <p className="text-red-500">{error}</p>}
        
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}
