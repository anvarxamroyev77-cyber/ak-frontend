import React, { useEffect, useState } from "react";

export default function Music() {
  const [music, setMusic] = useState([]);
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/music`)
      .then(res => res.json())
      .then(data => setMusic(data));
  }, []);

  const playAudio = (url) => {
    const audio = new Audio(url);
    if(playing) playing.pause();
    setPlaying(audio);
    audio.play();
  };

  return (
    <div className="p-6 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Music Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {music.map((m) => (
          <div key={m._id} className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer" onClick={() => playAudio(m.audio)}>
            <img src={m.cover} alt={m.title} className="w-full h-48 object-cover rounded-lg mb-2"/>
            <h4 className="font-bold">{m.title}</h4>
            <p className="text-gray-500">{m.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
