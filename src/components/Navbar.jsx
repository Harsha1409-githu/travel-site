export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-yellow-400">
        Sri Venkateswara Travels
      </h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Fleet</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}