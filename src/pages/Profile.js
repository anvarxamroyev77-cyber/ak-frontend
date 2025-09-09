import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Anvar');
  const [email, setEmail] = useState('anvar@example.com');

  const handleSave = () => {
    alert(`Profile updated!\nName: ${name}\nEmail: ${email}`);
    // TODO: connect with backend API to save
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <div className="space-y-4">
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="w-full p-2 border rounded" 
          placeholder="Name"
        />
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="w-full p-2 border rounded" 
          placeholder="Email"
        />
        <button 
          onClick={handleSave} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
