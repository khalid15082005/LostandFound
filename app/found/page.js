'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './found.css';

export default function FoundPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/items/post', {
      method: 'POST',
      body: JSON.stringify({ title, description, contact, category: 'found' }),
    });
    alert('Found item posted');
    router.push('/dashboard');
  };

  return (
    <div className="found-page">
      <form onSubmit={handleSubmit} className="found-form">
        <h2 className="found-form-title">Report Found Item</h2>
        <input
          placeholder="Title"
          className="found-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="found-textarea"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          placeholder="Contact Info"
          className="found-input"
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <button className="found-button">Submit</button>
      </form>
    </div>
  );
}
