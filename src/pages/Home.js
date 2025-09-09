import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [music, setMusic] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/music`)
      .then(res => res.json())
      .then(data => setMusic(data));
    fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="p-6 space-y-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center animate__animated animate__fadeInDown">Welcome to AK Platform</h2>

      <section>
        <h3 className="text-2xl font-bold mb-4">Music</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {music.map((m) => (
            <div key={m._id} className="bg-white p-4 rounded-xl shadow-lg card hover:scale-105 transition-transform">
              <img src={m.cover} alt={m.title} className="rounded-lg mb-2 w-full h-48 object-cover" />
              <h4 className="font-bold">{m.title}</h4>
              <p className="text-gray-500">{m.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Movies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((mv) => (
            <div key={mv._id} className="bg-white p-4 rounded-xl shadow-lg card hover:scale-105 transition-transform">
              <img src={mv.poster} alt={mv.title} className="rounded-lg mb-2 w-full h-48 object-cover" />
              <h4 className="font-bold">{mv.title} ({mv.year})</h4>
              <Link to={mv.trailer} target="_blank" className="text-blue-600 hover:underline">Watch Trailer</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
