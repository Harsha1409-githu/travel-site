export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-2xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Travel Comfortably Across South India
        </h1>

        <p className="text-lg mb-6">
          Premium car services for tours, airport pickups, and family trips.
        </p>

                        <a
  href="https://wa.me/918977073949"
  target="_blank"
>
  <button className="bg-green-500 px-6 py-3 rounded-xl">
    WhatsApp Booking
  </button>
</a>

        
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
          Book Now

        </button>
      </div>

    </section>
  )
}

