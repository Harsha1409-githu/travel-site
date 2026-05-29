const cars = [
  {
       name: "Toyata Rumion",  
    image: "https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250714024406_Toyota_Rumion_Cafe_White[1].jpg?w=728&q=75"
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
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Fleet
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.name}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-2xl font-bold">{car.name}</h3>

              <button className="mt-4 bg-black text-white px-4 py-2 rounded-xl">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}