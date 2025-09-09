import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to AK Platform</h1>
      <p className="mb-6 text-lg">Your all-in-one entertainment hub: music, movies, chat and more.</p>
      <Link className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition" to="/register">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
