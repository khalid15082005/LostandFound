'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './dashboard.css';

export default function DashboardPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchItems = async () => {
      const res = await fetch('/api/items/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401) {
        // Token invalid or expired
        localStorage.removeItem('token');
        router.push('/login');
        return;
      }
      const data = await res.json();
      setItems(data);
    };
    fetchItems();
  }, [router]);

  // Separate lost and found items
  const lostItems = items.filter(item => item.category.toLowerCase() === 'lost');
  const foundItems = items.filter(item => item.category.toLowerCase() === 'found');

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Lost & Found Log</h1>
      <div className="dashboard-columns">
        <section className="dashboard-section">
          <h2 className="dashboard-section-title">Lost Items</h2>
          <div className="dashboard-grid">
            {lostItems.map((item) => (
              <div key={item._id} className="dashboard-card">
                <h3 className="dashboard-card-title">{item.title}</h3>
                <p className="dashboard-card-description">{item.description}</p>
                <p className="dashboard-card-contact">Contact: {item.contact}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="dashboard-section">
          <h2 className="dashboard-section-title">Found Items</h2>
          <div className="dashboard-grid">
            {foundItems.map((item) => (
              <div key={item._id} className="dashboard-card">
                <h3 className="dashboard-card-title">{item.title}</h3>
                <p className="dashboard-card-description">{item.description}</p>
                <p className="dashboard-card-contact">Contact: {item.contact}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
