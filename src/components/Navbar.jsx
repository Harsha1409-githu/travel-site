import DarkModeToggle from "./DarkModeToggle"

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white px-6 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg transition duration-300">
      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
        Sri Venkateswara Travels
      </h1>

      <div className="hidden md:flex gap-8 text-lg items-center">
        <a href="#home" className="hover:text-yellow-400 transition">
          Home
        </a>

        <a href="#services" className="hover:text-yellow-400 transition">
          Services
        </a>

        <a href="#fleet" className="hover:text-yellow-400 transition">
          Fleet
        </a>

        <a href="#contact" className="hover:text-yellow-400 transition">
          Contact
        </a>

        <DarkModeToggle />

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold transition">
          Book Now
        </button>
      </div>
    </nav>
  )
}