const car = {
  name: "Toyota Rumion",
  capacity: "7 Seater",
  image:
    "https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250714024406_Toyota_Rumion_Cafe_White[1].jpg?w=728&q=75",
};

export default function Fleet() {
  const whatsappNumber = "918247486381";

  return (
    <section
      id="fleet"
      className="min-h-screen px-4 py-10 md:px-10 bg-gray-100 dark:bg-black transition duration-300"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
        Our Vehicle
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Travel comfortably with our premium Toyota Rumion.
      </p>

      {/* Card Container */}
      <div className="max-w-4xl mx-auto">
        <div className="group rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 active:scale-95 transition-transform duration-300 hover:-translate-y-2">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Top Info */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-3xl font-bold text-black dark:text-white">
                {car.name}
              </h3>

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
                {car.capacity}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Spacious, comfortable, air-conditioned, and perfect for family
              trips, airport transfers, outstation travel, and local sightseeing.
            </p>

            {/* WhatsApp Booking Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `🚖 *Vehicle Booking Request*

🚗 Car: ${car.name}
👥 Capacity: ${car.capacity}

💬 I would like to book this vehicle for my trip.
Please share availability and price details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 active:scale-95"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Floating Quick Book Button (Mobile App Style) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "🚖 I want to book Toyota Rumion for my trip"
        )}`}
        target="_blank"
        className="fixed bottom-24 right-5 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-xl font-bold z-50 animate-bounce"
      >
        Book
      </a>
    </section>
  );
}