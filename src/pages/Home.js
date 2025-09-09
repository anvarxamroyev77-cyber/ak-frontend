import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { motion } from "framer-motion";

/* ---------------- HERO BANNERS ---------------- */
const heroBanners = [
  { id: 1, img: "https://picsum.photos/1200/400?random=1", text: "Welcome to AK Platform" },
  { id: 2, img: "https://picsum.photos/1200/400?random=2", text: "Listen to the hottest music!" },
  { id: 3, img: "https://picsum.photos/1200/400?random=3", text: "Watch trending movies & trailers" },
  { id: 4, img: "https://picsum.photos/1200/400?random=4", text: "Connect with friends instantly" },
  { id: 5, img: "https://picsum.photos/1200/400?random=5", text: "Explore new albums & playlists" },
  // Add up to 20 banners for full expansion
];

/* ---------------- STORIES ---------------- */
const storiesRows = Array.from({ length: 5 }, (_, r) =>
  Array.from({ length: 15 }, (_, i) => ({
    id: `story-${r}-${i}`,
    name: `User${i + 1 + r * 15}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1 + r * 15}`,
    isActive: i % 2 === 0,
  }))
);

/* ---------------- MUSIC ---------------- */
const genres = ["Rap", "HipHop", "Pop", "Rock", "Jazz"];
const genreAlbums = genres.map((genre) =>
  Array.from({ length: 15 }, (_, i) => ({
    id: `${genre}-${i}`,
    title: `${genre} Album ${i + 1}`,
    artist: `${genre} Artist ${i + 1}`,
    cover: `https://picsum.photos/200/200?random=${i + 10}`,
    audio: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i + 10}.mp3`,
  }))
);

/* ---------------- MOVIES ---------------- */
const movieGenres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];
const movies = movieGenres.flatMap((genre) =>
  Array.from({ length: 20 }, (_, i) => ({
    id: `${genre}-${i}`,
    title: `${genre} Movie ${i + 1}`,
    genre,
    year: 2000 + (i % 23),
    poster: `https://picsum.photos/300/450?random=${i + 1}`,
    trailer: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4`,
  }))
);

/* ---------------- POSTS ---------------- */
const posts = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  user: `User${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 21}`,
  content: `This is a sample post content for post number ${i + 1}.`,
  image: `https://picsum.photos/600/400?random=${i + 21}`,
  video: i % 5 === 0 ? `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4` : null,
}));

/* ---------------- SUGGESTED FRIENDS ---------------- */
const suggestedFriends = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: `Friend${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 41}`,
  isFollowing: i % 2 === 0,
}));

export default function Home() {
  const [playing, setPlaying] = useState(null);
  const [followState, setFollowState] = useState(suggestedFriends);

  const playAudio = (url) => {
    if (playing) playing.pause();
    const audio = new Audio(url);
    setPlaying(audio);
    audio.play();
  };

  const toggleFollow = (id) => {
    setFollowState((prev) =>
      prev.map((friend) => (friend.id === id ? { ...friend, isFollowing: !friend.isFollowing } : friend))
    );
  };

  return (
    <div className="mt-24 p-6 bg-gray-100 min-h-screen">
      {/* ---------------- HERO ---------------- */}
      <section className="mb-16 relative">
        {heroBanners.map((banner, idx) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className="absolute w-full h-96 rounded-xl overflow-hidden"
          >
            <img src={banner.img} alt={banner.text} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">{banner.text}</h2>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ---------------- STORIES ---------------- */}
      {storiesRows.map((row, rIdx) => (
        <section key={rIdx} className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Stories Row {rIdx + 1}</h2>
          <div className="flex overflow-x-auto space-x-4 p-2">
            {row.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center min-w-[80px] cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-full border-4 ${story.isActive ? "border-blue-500" : "border-gray-300"}`}>
                  <img src={story.avatar} alt={story.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-sm mt-2">{story.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* ---------------- MUSIC ---------------- */}
      {genreAlbums.map((albums, idx) => (
        <section key={genres[idx]} className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">{genres[idx]} Music</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-lg cursor-pointer"
                onClick={() => playAudio(album.audio)}
              >
                <img src={album.cover} alt={album.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                <h4 className="font-bold">{album.title}</h4>
                <p className="text-gray-500">{album.artist}</p>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* ---------------- MOVIES ---------------- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Trending Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-lg cursor-pointer"
            >
              <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h4 className="font-bold">{movie.title} ({movie.year})</h4>
              {movie.trailer && <video src={movie.trailer} controls className="w-full rounded-lg mt-2" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- POSTS ---------------- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">News Feed</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-2">
                <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full mr-2" />
                <span className="font-bold">{post.user}</span>
              </div>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="post" className="w-full mt-2 rounded-lg" />}
              {post.video && <video src={post.video} controls className="w-full mt-2 rounded-lg" />}
              <div className="flex space-x-4 mt-2 text-gray-600">
                <FaHeart className="cursor-pointer hover:text-red-500 transition-all" />
                <FaComment className="cursor-pointer hover:text-blue-500 transition-all" />
                <FaShare className="cursor-pointer hover:text-green-500 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- SUGGESTED FRIENDS ---------------- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Suggested Friends</h2>
        <div className="flex overflow-x-auto space-x-4 p-2">
          {followState.map((friend) => (
            <motion.div
              key={friend.id}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center min-w-[80px] cursor-pointer"
            >
              <img src={friend.avatar} alt={friend.name} className="w-20 h-20 object-cover rounded-full border-2 border-gray-300" />
              <span className="text-sm mt-2">{friend.name}</span>
              <button
                onClick={() => toggleFollow(friend.id)}
                className={`mt-1 text-xs px-2 py-1 rounded transition-all ${friend.isFollowing ? "bg-gray-300" : "bg-blue-600 text-white"}`}
              >
                {friend.isFollowing ? "Following" : "Follow"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-white p-6 rounded-xl shadow-lg text-center">
        <p>© 2025 AK Platform. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
