import React, { useState } from 'react';

function Music() {
  const categories = {
    Rap: ['Rap Song 1', 'Rap Song 2', 'Rap Song 3'],
    HipHop: ['HipHop Song 1', 'HipHop Song 2', 'HipHop Song 3'],
    Pop: ['Pop Song 1', 'Pop Song 2']
  };

  const [selectedCat, setSelectedCat] = useState('Rap');

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Music Library</h2>
      
      <div className="flex space-x-4 mb-4">
        {Object.keys(categories).map(cat => (
          <button 
            key={cat} 
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded ${selectedCat===cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {categories[selectedCat].map((song, i) => (
          <li key={i} className="p-2 border rounded hover:bg-blue-50">{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default Music;
