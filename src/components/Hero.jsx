import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">

      {/* 🖼️ Fallback Image (always shows first) */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Travel background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 🎥 Video (loads over image) */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="183631-871642880_medium.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 text-white"
      >
        <h2 className="text-yellow-400 text-lg md:text-xl font-semibold mb-3">
          Sri Venkateswara Travels
        </h2>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          Luxury & Comfortable Travel Across South India
        </h1>

        <p className="text-base md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Airport Transfers • Outstation Trips • Temple Tours • Family Travel
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#booking"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold transition"
          >
            Book Now
          </a>

          <a
            href="https://wa.me/918247486381"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}