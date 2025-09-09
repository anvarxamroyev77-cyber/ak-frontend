import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">AK Platform</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/music" className="hover:underline">Music</Link>
        <Link to="/movies" className="hover:underline">Movies</Link>
        <Link to="/chat" className="hover:underline">Chat</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
