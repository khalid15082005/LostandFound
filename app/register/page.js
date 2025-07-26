'use client';
import './register.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push('/login');
    else alert('Registration failed');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2 className="register-title">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="register-button">
          Sign Up
        </button>
        <p className="login-option">
          Already have an account?{' '}
          <a href="/login" className="login-link">Login</a>
        </p>
      </form>
    </div>
  );
}
