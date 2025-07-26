'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './lost.css';

export default function LostPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/items/post', {
      method: 'POST',
      body: JSON.stringify({ title, description, contact, category: 'lost' }),
    });
    alert('Lost item posted');
    router.push('/dashboard');
  };

  return (
    <div className="lost-container">
      <form onSubmit={handleSubmit} className="lost-form">
        <h2>Report Lost Item</h2>
        <input
          placeholder="Title"
          className="lost-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="lost-textarea"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          placeholder="Contact Info"
          className="lost-input"
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <button className="lost-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
