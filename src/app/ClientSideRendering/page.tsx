"use client"
import React, { useState } from 'react';
import './ClientSideRendering.css'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ClientSideRendering: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
  
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData: User[] = await res.json();
      setData(userData);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="intro">
        <h1>Client Side Rendering</h1>
        <p>
          This page demonstrates client-side rendering by fetching data upon user interaction where it fetch
           the data public api <a className='link' href='https://jsonplaceholder.typicode.com/' >jsonplaceholder</a></p>
           <p> where the api send Dummy data for 10 users where we call them and display it here..
        </p>
        <button className='fetch-btn' onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </div>

      {error && <p>Error: {error}</p>}

      <div className="information">
        <ul className="card-grid">
          {data.map((user) => (
            <li className="card" key={user.id}>
              <h1>Name: {user.name}</h1>
              <h2>User Name: {user.username}</h2>
              <h3>Email: {user.email}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientSideRendering;
