import React, { useState } from 'react';

function Movies() {
  const categories = {
    Action: ['Movie 1', 'Movie 2', 'Movie 3'],
    Comedy: ['Movie 4', 'Movie 5'],
    Horror: ['Movie 6', 'Movie 7']
  };

  const [selectedCat, setSelectedCat] = useState('Action');

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Movies Library</h2>

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
        {categories[selectedCat].map((movie, i) => (
          <li key={i} className="p-2 border rounded hover:bg-blue-50">{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
