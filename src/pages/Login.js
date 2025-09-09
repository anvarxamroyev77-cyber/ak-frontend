import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
      alert('Login successful!');
      console.log(res.data);
      navigate('/profile');
    } catch (err) {
      alert('Login failed!');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">Login</button>
      </form>
    </div>
  );
}

export default Login;
