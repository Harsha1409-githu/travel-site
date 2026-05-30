import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
      >
        <h2 className="text-yellow-400 text-xl font-semibold mb-3">
          Sri Venkateswara Travels
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl leading-tight">
          Safe & Comfortable Travel Across South India
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-3xl text-gray-200">
          Airport Transfers • Outstation Trips • Temple Tours •
          Corporate Travel • Family Vacations
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#booking"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg transition"
          >
            Book Your Ride
          </a>

          <a
            href="https://wa.me/918977073949"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl text-lg transition"
          >
            WhatsApp Now
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-yellow-400">
              500+
            </h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">
              24/7
            </h3>
            <p>Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">
              100%
            </h3>
            <p>Safe Travel</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}