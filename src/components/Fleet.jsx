const cars = [
  {
    name: "Toyota Rumion",
    image:
      "https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250714024406_Toyota_Rumion_Cafe_White[1].jpg?w=728&q=75",
  },

  {
    name: "Sedan",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },

  {
    name: "SUV",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  },

  {
    name: "Tempo Traveller",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
  },
]

export default function Fleet() {
  return (
    <section className="py-16 px-8 bg-gray-100 dark:bg-black transition duration-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Our Fleet
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.name}
            className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:-translate-y-2 transition duration-500 bg-white dark:bg-gray-900"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {car.name}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Comfortable and premium travel experience.
              </p>

              <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition duration-300 w-full">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}